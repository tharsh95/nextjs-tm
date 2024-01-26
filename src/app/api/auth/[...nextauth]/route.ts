import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github"


    export const options={
        providers:[
            GithubProvider({
                clientId:process.env.GITHUB_ID as string,
                clientSecret:process.env.GITHUB_SECRET as string
            }),
            CredentialsProvider({
                name:"Credentials",
                credentials:{
                    username:{
                        label:'Username:',
                        type:"text",
                        placeholder:"Enter your username"
                    },
                    password:{
                        label:'Password:',
                        type:"password",
                        placeholder:"Enter your password"
                    }
                },
                async authorize(credentials){
                    const user = {id:'41',name:'Harsh',password:"123456"}
                    if(credentials?.username===user.name&&credentials?.password===user.password){
                        return user
                    }
                    return null
                }
    
            })
        ],
}

export const handler = NextAuth(options)

export { handler as GET, handler as POST }