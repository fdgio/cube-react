const extractor = require('./extractor');
const generator = require('./generator')

const template = funcCompoents =>
`
import React from 'react';
import ReactDom from 'react-dom';

const renderFuncs = [${funcCompoents}]

export default class ExamplePages extends React.Component {
  componentDidMount() {
    document.head.innerHTML = document.head.innerHTML + '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no, viewport-fit=cover">'
  }
  render() {
    return (
      renderFuncs.map((item, index) => {
        return <div key={index}>{item()}</div>
      })
    )
  }
}
`

module.exports = function core(source) {
  const demos = extractor(source);
  const funcCompoents = demos.map(generator).join(',')
  const result = template(funcCompoents)
  return result;
}
