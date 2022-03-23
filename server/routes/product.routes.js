import { findAllProducts, findProductById, createProduct, updateProduct, deleteProduct } from "../controllers/product.controller.js"


export default app => {
    app.get("/api/products", findAllProducts);
    app.get("/api/products/:id", findProductById);
    app.post("/api/products/new", createProduct);
    app.put("/api/products/update/:id", updateProduct);
    app.delete("/api/products/delete/:id", deleteProduct);
}