import { NextResponse } from "next/server"

export default function Middleware(request) {
    // console.log(request)

    // if (request.nextUrl.pathname != "/login") {
    //     return NextResponse.redirect(new URL("/login", request.url))
    // }

    // only about page redirect in login page
    return NextResponse.redirect(new URL("/login", request.url))

}

export const config = {
    matcher: "/about/:path*"
}