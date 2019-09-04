
/**
 * @babel/preset-env with core-js polyfill
 * When either either the "usage" or "entry" options are used in useBuiltIns attr,
 * @babel/preset-env will add direct references to core-js modules as bare imports.
 * This means core-js will be resolved relative to the file itself and needs to be accessible (maybe as node_modules dependency)
*/
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: 'usage',
        debug: true,
        corejs: 3
      }
    ]
  ]
}
