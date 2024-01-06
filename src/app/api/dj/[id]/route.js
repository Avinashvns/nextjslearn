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