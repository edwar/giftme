import { prisma } from "@/app/api/prisma.db"
import { type NextRequest } from "next/server";
import { verify } from "./JwtSignVerify";

const secret = process.env.NEXTAUTH_SECRET ?? "secret";

export class ValidationError extends Error {
    constructor(message: string) {
        super(message)
        this.name = this.constructor.name
    }
}

async function getUserId(req: NextRequest): Promise<string | null> {
    try {
        let token: string | undefined;
  
        if (req.cookies.has("token")) {
          token = req.cookies.get("token")?.value;
        } else if (req.headers.get("Authorization")?.startsWith("Bearer ")) {
          token = req.headers.get("Authorization")?.substring(7);
        }
  
        if (!token)
          return null
  
        const decoded = await verify(token, secret);
        if (!decoded)
          return null
  
        const { id } = JSON.parse(String(decoded["payload"]));
  
        return id
      } catch (error) {
        return null
      }
}

export async function valid(req: NextRequest) {
    const id = await getUserId(req)
    
    if(!id) throw new ValidationError("Credenciales invalidas")

    const existeUser = await prisma.user.findUnique({
        where: {
            id
        }
    })

    if(!existeUser) throw new ValidationError("Credenciales invalida")
}

export async function isAdmin(req: NextRequest) {
    const id = await getUserId(req)

    if(!id) throw new ValidationError("Credenciales invalidas")
    
    const existeUser = await prisma.user.findUnique({
        where: {
            id
        }
    })

    if(!existeUser?.role.includes('ADMIN')) throw new ValidationError("Se requiere el rol de administrador")
}

export async function isSuperUser(req: NextRequest) {
    const id = await getUserId(req)

    if(!id) throw new ValidationError("Credenciales invalidas")
    
    const existeUser = await prisma.user.findUnique({
        where: {
            id
        }
    })

    if(!existeUser?.role.includes('SUPERADMIN')) throw new ValidationError("Se requiere el rol de super usuario")
}

export async function isSupreme(req: NextRequest) {
    const id = await getUserId(req)

    if(!id) throw new ValidationError("Credenciales invalidas")
    
    const existeUser = await prisma.user.findUnique({
        where: {
            id
        },
    })

    if(!existeUser?.role.includes('SUPREME')) throw new ValidationError("Se requiere el rol supremo")
}
