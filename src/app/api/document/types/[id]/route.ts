import { prisma } from "@/app/api/prisma.db";
import {
  ValidationError,
  isSuperUser,
} from "@/services/ValidateUserToken";
import { NextResponse, type NextRequest } from "next/server";

export async function PUT(
  req: NextRequest,
  context: { params: Record<string, any> }
) {
  try {
    await isSuperUser(req);

    const body = await req.json();
    const { id } = context.params;

    // Buscar el tipo de docuemtno por id
    const exitDocumentType = await prisma.documentType.findUnique({
      where: {
        id,
      },
    });

    // Validar si el tipo de documento existe
    if (!exitDocumentType)
      return NextResponse.json(
        { message: "No se pudo actualizar el tipo de docuemtno 🥲" },
        { status: 404 }
      );

    //Actualiza el tipo de documento
    const res = await prisma.documentType.update({
      where: {
        id,
      },
      data: body,
    });
    return NextResponse.json(res, { status: 200 });
  } catch (e) {
    if (e instanceof ValidationError) {
      return NextResponse.json({ message: e.message }, { status: 401 });
    }
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
