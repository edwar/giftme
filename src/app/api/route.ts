import { NextResponse } from "next/server";
import pkg from "../../../package.json"

export async function GET() {
    return NextResponse.json({
        name: pkg.name,
        author: pkg.author,
        email: pkg.email,
        version: pkg.version
    })
}