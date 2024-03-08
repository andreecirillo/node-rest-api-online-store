"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const mongodbUrl = process.env.MONGODB_URL || "mongodb://localhost:27017/node-rest-api-online-store";
const connect = () => _mongoose.default.connect(mongodbUrl);
var _default = exports.default = {
  connect,
  connection: _mongoose.default.connection
};