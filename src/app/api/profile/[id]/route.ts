import { NextResponse } from "next/server";
import { prisma } from "@/app/api/prisma.db";
import { ValidationError, valid } from "@/services/validate_user_token";

export async function GET(req: Request, context: { params: Record<string, any> }) {
    try {
        await valid(req)
        
        const userId = context.params.id
        // Buscar el perfil del usuario
        const profile = await prisma.profile.findUnique({
            where: {
                userId
            }
        })
    
        return NextResponse.json({ profile }, { status: 200 })
    } catch (e) {
        if(e instanceof ValidationError) {
            return NextResponse.json({ message: e.message }, { status: 401 })
        }
        return NextResponse.json({ message: 'Error' }, { status: 500 })
    }
}

export async function PUT(req: Request, context: { params: Record<string, any> }){
    try {
        await valid(req)
    
        const body = await req.json()
        const userId = context.params.id
    
        // Buscar el perfil del usuario
        const exitProfile = await prisma.profile.findUnique({
            where: {
                userId
            }
        })
    
        // Validar si el perfil existe
        if(!exitProfile) return NextResponse.json({ message: "No se pudo actualizar el perfil 🥲" }, { status: 404 })
        
        //Actualiza el perfil
        const res = await prisma.profile.update({
            where: {
                userId
            },
            data: body
        })
        return NextResponse.json(res, { status: 200 })
    } catch (e) {
        if(e instanceof ValidationError) {
            return NextResponse.json({ message: e.message }, { status: 401 })
        }
        return NextResponse.json({ message: 'Error' }, { status: 500 })
    }
}
