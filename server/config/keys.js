if (process.env.NODE_ENV === "production") {
  // production - return prod set of keys
  module.exports = require("./prod");
} else {
  // development mode - return dev keys
  module.exports = require("./dev");
}
