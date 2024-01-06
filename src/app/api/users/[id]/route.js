import { user } from "@/app/util/db";
import { NextResponse } from "next/server";


export function GET(request, content) {
    console.log(content)
    console.log(content.params.id)
    const data = user;
    const userData = data.filter((item) => item.id == content.params.id)
    return NextResponse.json(
        userData.length == 0 ? { result: "No Data Found" } : { result: userData[0] })
}

