/**
 *  @babel/plugin-transform-runtime + @babel/runtime-corejs3
 *  Regenerator Aliasing
 *  core-js Aliasing
 *  Helper Aliasing
 *
 *  core-js3 supports builtins including:
 *    1. global variables (e.g. Promise, Map)
 *    2. static properties (e.g. Array.from)
 *    3. instance properties (e.g. [].includes)
 */

module.exports = {
  presets: ["@babel/preset-env"],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        corejs: 3 // use @babel/rumtime-corejs3
      }
    ]
  ]
}

