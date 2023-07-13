import { prisma } from "@/app/api/prisma.db"

export class ValidationError extends Error {
    constructor(message: string) {
        super(message)
        this.name = this.constructor.name
    }
}

export async function valid(req: Request) {
    const id = req.headers.get('user-id')
    
    if(!id) throw new ValidationError("Credenciales invalidass")

    const existeUser = await prisma.user.findUnique({
        where: {
            id
        }
    })

    if(!existeUser) throw new ValidationError("Credenciales invalidasss")
}

export async function isAdmin(req: Request) {
    const id = req.headers.get('user-id')

    if(!id) throw new ValidationError("Requiere el rol de admin")
    
    const existeUser = await prisma.user.findUnique({
        where: {
            id
        }
    })

    if(!existeUser?.role.includes('ADMIN')) throw new ValidationError("Requiere el rol de administrador")
}

export async function isSuperUser(req: Request) {
    const id = req.headers.get('user-id')

    if(!id) throw new ValidationError("Requiere el rol de super usuario")
    
    const existeUser = await prisma.user.findUnique({
        where: {
            id
        }
    })

    if(!existeUser?.role.includes('SUPERADMIN')) throw new ValidationError("Requiere el rol de super usuario")
}

export async function isSupreme(req: Request) {
    const id = req.headers.get('user-id')

    if(!id) throw new ValidationError("Requiere el rol supremo")
    
    const existeUser = await prisma.user.findUnique({
        where: {
            id
        },
    })

    if(!existeUser?.role.includes('SUPREME')) throw new ValidationError("Requiere el rol supremo")
}
