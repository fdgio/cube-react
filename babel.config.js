const basic = {
  "presets": [
    ["@babel/preset-env", {
      "debug": true,
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
  if(api.env('test')) {
    basic.presets[0][1].modules = 'cjs'
  }
  return basic;
}
