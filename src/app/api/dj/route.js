import { dj } from "@/app/util/dj_db";
import { NextResponse } from "next/server";



export async function GET(request) {
    const dj_data = dj;
    return NextResponse.json(
        dj_data,
        { status: 200 }
    )
}