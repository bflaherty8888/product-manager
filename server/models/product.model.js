import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    title: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    }
});

export default mongoose.model("Product", ProductSchema);