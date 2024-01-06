
import { myProduct } from "@/mango/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

// connectDb();

// it`s Get Api with mangodb
export async function GET() {
    await mongoose.connect(process.env.MANGO_DB_DRIVERS, { dbName: 'productDB', })
    const data = await myProduct.find();
    console.log(data);
    return NextResponse.json({ result: data })
}