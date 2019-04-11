const loaderUtils = require('loader-utils');
const path = require('path')

const markdownCompilerPath = path.resolve(__dirname, './core.js')

module.exports = function mdLoader() {
  const filePath = this.resourcePath;

  const result =
    `module.exports = require(${
    loaderUtils.stringifyRequest(
      this,
      `!babel-loader!${
      markdownCompilerPath
      }!${
      filePath
      }${this.resourceQuery || ''}`
    )
    });`;

    return result;
}

