
import { connectDb } from "@/mango/mango_db";
import { myProduct } from "@/mango/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

// connectDb();

export async function GET() {
    // console.log("Con :", connectionSrt)
    // await mongoose.connect(connectionSrt)
    await mongoose.connect(process.env.MANGO_DB_DRIVERS, { dbName: 'productDB', })
    const data = await myProduct.find();
    console.log(data);
    return NextResponse.json("Connected")
}