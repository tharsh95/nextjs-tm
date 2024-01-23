import { UUID } from "crypto"

export type JoinedTasks = {
    id: UUID,
    name: string,
    role: string,
    title: string,
    description: string,
    link: string,
    status: string,
    date: string
}

export type Users = {
    id:UUID,
    name:string,
    role:string 
    
}