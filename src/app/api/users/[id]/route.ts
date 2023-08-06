import { ValidationError, isSupreme } from "@/services/ValidateUserToken";
import { type NextRequest, NextResponse } from "next/server";
import { prisma } from "../../prisma.db";

export async function PUT(
  req: NextRequest,
  context: { params: Record<string, any> }
) {
  try {
    await isSupreme(req);

    const body = await req.json();
    const { id } = context.params;

    // Buscar el tipo de docuemtno por id
    const exitUser = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    // Validar si el tipo de documento existe
    if (!exitUser)
      return NextResponse.json(
        { message: "No se pudo actualizar el tipo de docuemtno 🥲" },
        { status: 404 }
      );

    //Actualiza el tipo de documento
    const res = await prisma.user.update({
      where: {
        id,
      },
      data: body,
    });

    const data = {
        ...res,
        password: undefined
    }
    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    if (e instanceof ValidationError) {
      return NextResponse.json({ message: e.message }, { status: 401 });
    }
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
