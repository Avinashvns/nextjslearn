import { dj } from "@/app/util/dj_db";
import { NextResponse } from "next/server";



export async function GET(request) {
    const dj_data = dj;
    return NextResponse.json(
        dj_data,
        { status: 200 }
    )
}


export async function POST(request, content) {
    let payload = await request.json()
    console.log(payload)
    console.log(payload.name)

    if (!payload.name) {
        return NextResponse.json({ result: "required name field is not fond" })
    }
    return NextResponse.json({ result: "hello" })
}