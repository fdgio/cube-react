const MarkDownItContainer = require('markdown-it-container')
const hljs = require('highlight.js')
const md = require('markdown-it')({
  highlight (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
        // eslint-disable-next-line
      } catch (__) {}
    }
    return '';
  }
})

md.use(MarkDownItContainer, 'title', {

  validate(params) {
    return params.trim().match(/^title$/);
  },

  render() {
    // for (let i = idx; i < tokens.length; i++) {
    //   if (tokens[i].nesting === 0) {
    //     return `<h2>${ tokens[i].content  }</h2>\n`
    //   }
    // }
    return ''
  }
});

module.exports = function docLoader(source){
  return md.render(source)
}
