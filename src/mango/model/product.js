

import mongoose from "mongoose";

const productModel = new mongoose.Schema({
    name: String,
    age: int
})

export const product = mongoose.models.products || mongoose.model("products", productModel);