import { dj } from "@/app/util/dj_db";
import { NextResponse } from "next/server";

export async function GET(request) {
    const dj_data = dj;
    return NextResponse.json(
        dj_data,
        { status: 200 }
    )
}


export async function POST(request) {
    let payload = await request.json()
    console.log(payload)
    console.log(payload.name)

    if (!payload.name || !payload.age || !payload.gender) {
        let errorMessage = '';
        if (!payload.name) {
            errorMessage += "Name field is required , "
        }
        if (!payload.age) {
            errorMessage += "Age field is required , "
        }
        if (!payload.gender) {
            errorMessage += "Gender field is required , "
        }
        return NextResponse.json({ result: errorMessage, success: false }, { status: 404 })
    }
    return NextResponse.json({ result: "new User Created", success: true }, { status: 201 })
}