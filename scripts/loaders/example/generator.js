/**
 * Inspired By https://github.com/benjycui/bisheng/blob/master/packages/bisheng-plugin-react/lib/transformer.js
 */

const babel = require('@babel/core')
const types = require('@babel/types');
const generator = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;
const babelConfig = require('../../../babel.config')

// babelConfig = babelConfig({env: () => ''})
// babelConfig.presets[0][1].modules = 'commonjs'

function requireGenerator(varName, moduleName) {
  return types.variableDeclaration('var', [
    types.variableDeclarator(
      types.identifier(varName),
      types.callExpression(types.identifier('require'), [
        types.stringLiteral(moduleName),
      ]),
    ),
  ]);
}



module.exports = function generate(source) {
  const {
    ast: codeAst
  } = babel.transformSync(source, {
    ast: true,
    code: false,
    filename: 'hackFile.js',
    ...babelConfig
  })

  let renderReturn = null;
  traverse(codeAst, {
    CallExpression(callPath) {
      const callPathNode = callPath.node;
      if (
        callPathNode.callee &&
        callPathNode.callee.object &&
        callPathNode.callee.object.name === 'ReactDOM' &&
        callPathNode.callee.property &&
        callPathNode.callee.property.name === 'render'
      ) {
        renderReturn = types.returnStatement(callPathNode.arguments[0]);

        callPath.remove();
      }
    },
  });

  const astProgramBody = codeAst.program.body;
  //  if (!noreact) {
  astProgramBody.unshift(requireGenerator('ReactDOM', 'react-dom'));
  astProgramBody.unshift(requireGenerator('React', 'react'));
  //  }
  // ReactDOM.render always at the last of preview method
  if (renderReturn) {
    astProgramBody.push(renderReturn);
  }

  const codeBlock = types.BlockStatement(astProgramBody);
  const previewFunction = types.functionDeclaration(
    types.Identifier('MarkdownSFC'),
    [],
    codeBlock,
  );

  return generator(types.program([previewFunction]), {}, source).code;
}
