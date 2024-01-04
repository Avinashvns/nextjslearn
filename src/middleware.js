import { NextResponse } from "next/server"

export default function Middleware(request) {
    // console.log(request)

    if (request.nextUrl.pathname != "/login") {
        return NextResponse.redirect(new URL("/login", request.url))
    }

} 