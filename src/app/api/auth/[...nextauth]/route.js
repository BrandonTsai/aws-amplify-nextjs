import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from "@auth/prisma-adapter"
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    pages: {
        signIn: '/signin'
    },
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: 'jwt'
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }