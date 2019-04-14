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

md.use(MarkDownItContainer, 'demo', {

  validate(params) {
    return params.trim().match(/^demo\s+(.+)$/);
  },

  render() {
    return ''
  }
});

module.exports = function docLoader(source){
  return md.render(source)
}
