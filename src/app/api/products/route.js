
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

// Post Api With Mangodb

export async function POST() {
    await mongoose.connect(process.env.MANGO_DB_DRIVERS, { dbName: 'productDB' })
    let data = new myProduct({
        name: "Anuradha Singh",
        age: 28
    });
    const result = await data.save();
    return NextResponse.json({ results: result })
}