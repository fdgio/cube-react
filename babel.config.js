const basic = {
  "presets": [
    ["@babel/preset-env", {
      "modules": "cjs"
    }],
    ["@babel/preset-react"],
    ["@babel/preset-typescript"]
  ],
  "plugins": [
    ["@babel/plugin-transform-runtime"],
    ["@babel/plugin-proposal-object-rest-spread"],
    ["@babel/plugin-proposal-class-properties"]
  ]
}

module.exports = function babel(api) {
  if(api.env('production')) {
    basic.presets[0][1].modules = false
  }
  return basic;
}
