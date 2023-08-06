import { type NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/api/prisma.db";
import { hash } from "bcryptjs";
import { sign } from "@/services/JwtSignVerify"

const secret = process.env.NEXTAUTH_SECRET ?? "secret";

export async function POST(req: NextRequest){
    const { name, email, password } = (await req.json()) as {
        name: string;
        email: string;
        password: string;
      };
    const exitUser = await prisma.user.findUnique({
        where: {
            email
        }
    })
    if(exitUser) return NextResponse.json({ message: "El usuario ya existe" }, { status: 409 })


    const res = await prisma.user.create({
        data: {
            email: email.toLocaleLowerCase(),
            name,
            password: await hash(password, 10),
            profile: {
                create: {}
            }
        }
    })

    const token = await sign(JSON.stringify({id: res.id}), secret)
    return NextResponse.json({ token }, { status: 200 })
}
