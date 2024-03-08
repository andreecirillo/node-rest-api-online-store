"use strict";

var _app = _interopRequireDefault(require("./app"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const port = 3000;
_app.default.listen(port, () => {
  console.log('Examplle app listening o port 3000');
});
module.exports = _app.default;