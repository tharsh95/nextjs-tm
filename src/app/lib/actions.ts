'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '../../../auth';
import { AuthError } from 'next-auth';

const FormSchema = z.object({
    assignee: z.string(),
    title: z.string(),
    link: z.string(),
    description: z.string(),
    status: z.string(),
    date: z.string(),
});

const CreateProject = FormSchema.omit({ id: true, date: true });
export async function createTask(formData: FormData) {
    const { assignee, title, description, status, link } = CreateProject.parse({
        assignee: formData.get('assignee'),
        title: formData.get('title'),
        description: formData.get('description'),
        status: formData.get('status'),
        link: formData.get('link'),
    });
    const date = new Date().toISOString().split('T')[0]
    try {

        await sql`
        INSERT INTO tasks (login_id, title, description,link,status, date)
        VALUES (${assignee}, ${title}, ${description}, ${link},${status},${date})
        `;
    }
    catch (e) {
        console.log(e, 'error')
        return {
            message: 'Database Error: Failed to Create Invoice.',
        };
    }
    revalidatePath('/dashboard/projects');
    redirect('/dashboard/projects');
}

const UpdateProject = FormSchema.omit({ id: true, date: true });
export async function updateInvoice(id: string, formData: FormData) {
    console.log(formData, 'fd')
    const { assignee, title, description, status, link } = UpdateProject.parse({
        assignee: formData.get('assignee'),
        title: formData.get('title'),
        description: formData.get('description'),
        status: formData.get('status'),
        link: formData.get('link'),
    });
    try {

        await sql`UPDATE tasks
    SET login_id = ${assignee}, title = ${title}, description = ${description}, status = ${status}, link = ${link}
    WHERE id = ${id}
    `;

    }
    catch (e) {
        console.log(e, 'error')
        return { message: 'Database Error: Failed to Update Invoice.' };

    }
    revalidatePath('/dashboard/projects');
    redirect('/dashboard/projects');
}

export async function deleteProject(id:string){
    try{
        await sql`DELETE FROM tasks WHERE id =${id}`
        revalidatePath('/dashboard/projects');
    }
    catch(e){
        console.log(e, 'error')
        return { message: 'Database Error: Failed to Delete Project.' };
    }
}

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
  ) {
    try {
     const d =  await signIn('credentials', formData);
     console.log(d,'data')
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case 'CredentialsSignin':
            return 'Invalid credentials.';
          default:
            return 'Something went wrong.';
        }
      }
      throw error;
    }
  }