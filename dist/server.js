"use strict";

var _app = _interopRequireDefault(require("./app"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const port = 3000;
module.exports = (async () => {
  try {
    await _app.default.database.connect();
    const server = _app.default.listen(port, () => console.info(`app running on port ${port}`));
    const exitSignals = ["SIGINT", "SIGTERM", "SIGQUIT"];
    exitSignals.map(sig => process.on(sig, () => server.close(err => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      _app.default.database.connection.close(function () {
        console.info("Database connection closed!");
        process.exit(0);
      });
    })));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();