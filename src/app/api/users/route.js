import { NextResponse } from "next/server";

export async function GET(request) {
    return NextResponse.json({
        name: "Avinash Singh",
        age: 25,
        gender: "Male",
        city: "Varanasi"
    },
        { status: 200 }
    )
}