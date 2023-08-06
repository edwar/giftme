import { type NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/api/prisma.db";
import { isAdmin } from "@/services/ValidateUserToken";

export async function POST(req: NextRequest){
    try {
        await isAdmin(req)
        
        const { price, discount, image, companyId } = (await req.json()) as {
            price: number;
            discount: number;
            image: string;
            companyId: string;
        }
        const { id } = await prisma.giftCard.create({
            data: {
                discount,
                image,
                price,
                company: {
                    connect: {
                        id: companyId
                    }
                }
            }
        })
        return NextResponse.json({ id }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: `Ocurrio un error ${JSON.stringify(error)}`}, { status: 500 })
    }
}