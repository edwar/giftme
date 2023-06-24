import { NextResponse } from "next/server";
import { prisma } from "@/app/api/prisma.db";
import { sign } from "@/services/jwt_sign_verify";
import isSame from "@/services/isSame";

const secret = process.env.NEXTAUTH_SECRET || "secret";

export async function POST(req: Request, res: Response){
    const { email, password } = await req.json()
    const user = await prisma.user.findUnique({
        where: {
            email
        }
    })
    if(!user) return NextResponse.json({ message: "Correo y/o contraseña incorrectos 🥺" }, { status: 401 })

    const matchPassword = await isSame(password, user.password)

    if(!matchPassword) return NextResponse.json({ message: "Correo y/o contraseña incorrectos 🥺" }, { status: 401 })

    const token = await sign(JSON.stringify({id: user.id}), secret)

    return NextResponse.json({ token })
}