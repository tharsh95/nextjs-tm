import { sql } from '@vercel/postgres';
import { JoinedTasks, Users } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchTasks(query:string, currentPage:number) {
    noStore()
    const offset = (currentPage - 1) * 6;

    try {
        const tasks = await sql<JoinedTasks>` SELECT
        tasks.id,
        login.name,
        login.role,
        tasks.title,
        tasks.description,
        tasks.link,
        tasks.status,
        tasks.date
      FROM login
      JOIN tasks ON login.id = tasks.login_id
      WHERE
      login.name ILIKE ${`%${query}%`} OR
      tasks.title::text ILIKE ${`%${query}%`} OR
      tasks.description::text ILIKE ${`%${query}%`} OR
      tasks.date::text ILIKE ${`%${query}%`} OR
      tasks.status ILIKE ${`%${query}%`}
    ORDER BY tasks.date DESC
    LIMIT ${6} OFFSET ${offset}
        `
        return (tasks.rows)
    }
    catch (e) {
        console.log(e)
    }
}


export async function fetchUsers() {
    noStore();
    try {
        const user = await sql<Users>`SELECT login.id,login.name,login.role FROM login`
        return  user.rows 
    }
    catch (e) {
        console.log(e)
    }
}
export async function fetchTasksPages(query: string) {
    noStore();
    try {
        const count = await sql`SELECT COUNT(*)
      FROM tasks
      JOIN login ON login.id = tasks.login_id
      WHERE
        login.name ILIKE ${`%${query}%`} OR
        tasks.title::text ILIKE ${`%${query}%`} OR
        tasks.description::text ILIKE ${`%${query}%`} OR
        tasks.status ILIKE ${`%${query}%`}
    `;
        const totalPages = Math.ceil(Number(count.rows[0].count) / 6);
        return totalPages;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch total number of invoices.');
    }
}
export async function fetchTaskById(id: string | number | boolean | null | undefined){
    noStore()
    try{
        const data = await sql`
      SELECT
        tasks.id,
        tasks.login_id,
        tasks.title,
        tasks.description,
        tasks.link,
        tasks.status,
        tasks.date,
        login.name
      FROM tasks
      JOIN login on login.id=tasks.login_id
      WHERE tasks.id = ${id};
    `;
    return data.rows[0]
    }
    catch(e){
        console.log(e)
    }
}