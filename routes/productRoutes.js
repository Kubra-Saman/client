import express from "express";
import {
  addProductController,
  getAllProductsController,
  getOneProductByIdController,
  removeProductController,
} from "../controller/productController.js";

const productRoutes = express.Router();

productRoutes.post("/addProduct", addProductController);
productRoutes.get("/getAllProducts", getAllProductsController);
productRoutes.get("/getOneProductById/:id", getOneProductByIdController);
productRoutes.delete("/removeProduct/:id", removeProductController);

export default productRoutes;
