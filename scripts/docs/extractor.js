const MarkDownIt = require('markdown-it')

const md = MarkDownIt()

module.exports = function(source) {
  const tokens = md.parse(source)
  const demos = []

  tokens.forEach(token => {
    const { tag, info, content} = token
    if(tag === 'code' && info === 'jsx') {
      demos.push(content)
    }
  });

  return demos;
};
