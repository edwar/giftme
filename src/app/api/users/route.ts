import { type NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/api/prisma.db";
import { ValidationError, isSuperUser } from "@/services/ValidateUserToken";

export async function GET(req: NextRequest) {
  try {
    await isSuperUser(req);
    const res = await prisma.user.findMany({
      include: {
        company: true,
        profile: true,
      },
    });

    const data = res.map((u) => {
      return {
        ...u,
        password: undefined,
      };
    });

    return NextResponse.json({ data }, { status: 200 });
  } catch (e) {
    if (e instanceof ValidationError) {
      return NextResponse.json({ message: e.message }, { status: 401 });
    }
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
