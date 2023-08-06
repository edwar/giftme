import { type NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/api/prisma.db";
import { ValidationError, isSuperUser, valid } from "@/services/ValidateUserToken";

export async function GET(req: NextRequest){
    try {
        await valid(req)
        const res = await prisma.documentType.findMany({
            take: 1,
            skip: 1,
        })
    
        return NextResponse.json({ data: res }, { status: 200 })
    } catch (e) {
        if(e instanceof ValidationError) {
            return NextResponse.json({ message: e.message }, { status: 401 })
        }
        return NextResponse.json({ message: 'Error' }, { status: 500 })
    }
}

export async function POST(req: NextRequest){
    try {
        await isSuperUser(req)
        
        const { name, code } = (await req.json()) as {
            name: string;
            code: string;
        }

        const { id } = await prisma.documentType.create({
            data: {
                code,
                name,
                profiles: {
                    create: []
                }
            }
        })
        return NextResponse.json({ id }, { status: 200 })
    } catch (e) {
        if(e instanceof ValidationError) {
            return NextResponse.json({ message: e.message }, { status: 401 })
        }
        return NextResponse.json({ message: 'Error' }, { status: 500 })
    }
}
