const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


export async function GET(req) {
    try {
        const users = await prisma.user.findMany();
        return Response.json({ users })
    } catch (error) {
        console.error(error);
        throw new Error('Internal server error');
    }
}


export async function POST(req) {
    try {
        const { name, email } = await req.json();
        console.log(name, email);
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
            },
        });

        return Response.json({ newUser });
    } catch (error) {
        console.error(error);
        throw new Error('Internal server error');
    }
}
