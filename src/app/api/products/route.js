
import { connectionSrt } from "@/mango/mango_db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    console.log("Con :", connectionSrt)
    // await mongoose.connect(connectionSrt)
    return NextResponse.json({ result: true })
}