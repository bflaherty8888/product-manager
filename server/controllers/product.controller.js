import Product from "../models/product.model.js";

export function findAllProducts(req, res) {
    Product.find()
        .then(products => res.json({ products: products }))
        .catch(e => res.json({ message: "Something went wrong", error: e }));
}

export function findProductById(req, res) {
    Product.findById(req.params.id)
        .then(product => res.json({ product }))
        .catch(e => res.json({ message: "Something went wrong", error: e }));
}

export function createProduct(req, res) {
    Product.create(req.body)
        .then(product => res.json({ product }))
        .catch(e => res.json({ message: "Something went wrong", error: e }));
}

export function updateProduct(req, res) {
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(product => res.json({ product }))
        .catch(e => res.json({ message: "Something went wrong", error: e }));
}

export function deleteProduct(req, res) {
    Product.findByIdAndDelete(req.params.id)
        .then(result => res.json({ result }))
        .catch(e => res.json({ message: "Something went wrong", error: e }));
}