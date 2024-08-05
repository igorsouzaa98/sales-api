import express from "express";
import ProductsController from "../controllers/productsController.js";
import productsValidation from "../models/Products/ProductsValidation.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/products", auth, ProductsController.getAllProducts);
router.get("/products/:id", auth, ProductsController.getProductById);
router.post(
  "/products",
  auth,
  productsValidation,
  ProductsController.createProduct
);
router.put(
  "/products/:id",
  productsValidation,
  ProductsController.updateProduct
);
router.delete("/products/:id", ProductsController.deleteProduct);

export default router;
