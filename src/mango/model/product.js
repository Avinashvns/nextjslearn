

import mongoose from "mongoose";

const productModel = new mongoose.Schema({
    name: String,
    age: Number
})

export const myProduct = mongoose.models.products || mongoose.model("products", productModel);