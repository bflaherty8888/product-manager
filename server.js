import express, { json, urlencoded } from "express";
import "./server/config/mongoose.config.js";
import cors from "cors";
import ProductRoutes from "./server/routes/product.routes.js";

const app = express();

app.use(json(), urlencoded({ extended: true }));
app.use(cors());
ProductRoutes(app);

app.listen(8000, () => console.log("The server is listening on port 8000..."));
