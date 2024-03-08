"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _products = _interopRequireDefault(require("../controllers/products"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = _express.default.Router();
const productsController = new _products.default();
router.get('/', (req, res) => productsController.get(req, res));
var _default = exports.default = router;