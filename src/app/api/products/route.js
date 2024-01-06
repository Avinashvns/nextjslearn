
import { connectDb } from "@/mango/mango_db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

connectDb();

export async function GET() {
    // console.log("Con :", connectionSrt)
    // await mongoose.connect(connectionSrt)

    return NextResponse.json("Connected")
}