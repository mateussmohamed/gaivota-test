/* config-overrides.js */
const {
  override,
  useEslintRc
} = require("customize-cra");

module.exports = {
  webpack: override(
    useEslintRc()
  )
};
