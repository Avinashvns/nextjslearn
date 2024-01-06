import { dj } from "@/app/util/dj_db"
import { NextResponse } from "next/server"

export async function GET(request, content) {
    console.log(content)
    console.log(content.params.id)
    const dj_data = dj
    const user_dj = dj_data.filter((item) => item.id == content.params.id)

    return NextResponse.json(
        user_dj.length == 0 ? { data: "Not Found Dj User" } : { data: user_dj[0] }
    )

}


export async function PUT(request, content) {
    let payload = await request.json();

    payload.id = content.params.id
    console.log(payload)

    if (!payload.id || !payload.dj_name || !payload.owner || !payload.place || !payload.price) {
        let errorMessage = '';
        if (!payload.id) {
            errorMessage += "Id field is required , "
        }
        if (!payload.dj_name) {
            errorMessage += "DJ Name field is required , "
        }
        if (!payload.owner) {
            errorMessage += "Owner field is required , "
        }
        if (!payload.place) {
            errorMessage += "Place field is required , "
        }
        if (!payload.price) {
            errorMessage += "Price field is required , "
        }
        return NextResponse.json({ result: errorMessage, success: false }, { status: 404 })
    }

    return NextResponse.json({ result: payload, success: true }, { status: 200 })
}