const md = require('markdown-it')()
const MarkDownItContainer = require('markdown-it-container')

md.use(MarkDownItContainer, 'demo')
module.exports = function extractor(source) {
  const tokens = md.parse(source)
  const nodes = [];
  tokens.forEach((token) => {
    const { tag, info, content } = token
    const matched = info.trim().match(/^demo\s+(.+)/)
    if(matched) {
      nodes.push({
        type: 'title',
        content: matched[1]
      })
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
