const loaderUtils = require('loader-utils');
const path = require('path')

const markdownCompilerPath = path.resolve(__dirname, './core.js')

module.exports =  function mdLoader() {
  // const options = getOptions(this);
  const filePath = this.resourcePath;

  // validateOptions(schema, options, 'Example Loader');
  const result =
    `module.exports = require(${
    loaderUtils.stringifyRequest(
      this,
      `!!babel-loader!${
      markdownCompilerPath
      }?raw!${
      filePath
      }${this.resourceQuery || ''}`
    )
    });`;

    return result;
}

