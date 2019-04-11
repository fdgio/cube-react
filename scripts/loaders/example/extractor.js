const md = require('markdown-it')()
const MarkDownItContainer = require('markdown-it-container')

md.use(MarkDownItContainer, 'title')
module.exports = function extractor(source) {
  const tokens = md.parse(source)
  const nodes = [];

  tokens.forEach((token, i) => {
    const { tag, info, content} = token
    if (tag === 'div' && info.trim() === 'title') {
      for(let j = i + 1; j < tokens.length; j++) {
        if(tokens[j].nesting === 0) {
          nodes.push({
            type: 'title',
            content: tokens[j].content
          })
          break;
        }
      }
    }
    if(tag === 'code' && info === 'jsx') {
      nodes.push({
        type: 'code',
        content
      })
    }
  });

  return nodes;
};
