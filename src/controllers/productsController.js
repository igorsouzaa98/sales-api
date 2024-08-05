import Product from "../models/Products/Products.js";

class ProductsController {
  static getAllProducts = async (req, res, next) => {
    try {
      const { price, name, brand } = req.query;
      const filters = {};

      if (price) {
        const [min, max] = price.split("-").map(Number);
        filters.price = { $gte: min, $lte: max };
      }

      if (name) {
        filters.name = { $regex: new RegExp(name, "i") };
      }

      if (brand) {
        filters.brand = { $regex: new RegExp(brand, "i") };
      }

      const result = await Product.find(filters);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };
  static getProductById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const response = await Product.findById(id);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };
  static createProduct = async (req, res, next) => {
    try {
      const body = req.body;
      const product = new Product(body);
      const result = await product.save();
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  };
  static updateProduct = async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      await Product.findByIdAndUpdate(id, body);
      res.status(200).send("Product updated successfully!");
    } catch (error) {
      next(error);
    }
  };
  static deleteProduct = async (req, res, next) => {
    try {
      const { id } = req.params;
      await Product.findByIdAndDelete(id);
      res.status(204);
    } catch (error) {
      next(error);
    }
  };
}

export default ProductsController;
