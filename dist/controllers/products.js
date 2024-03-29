"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
class ProductsController {
  constructor(Product) {
    this.Product = Product;
  }
  async get(req, res) {
    try {
      const products = await this.Product.find({});
      res.send(products);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
  async getById(req, res) {
    const {
      params: {
        id
      }
    } = req;
    try {
      const product = await this.Product.find({
        _id: id
      });
      res.send(product);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
}
var _default = exports.default = ProductsController;