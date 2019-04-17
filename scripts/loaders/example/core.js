const extractor = require('./extractor');
const generator = require('./generator')

const template = (funcCompoents, titles) =>
`
import React from 'react';
import ReactDom from 'react-dom';

const renderFuncs = [${funcCompoents}]
const nodes = ${titles}

export default class ExamplePages extends React.Component {
  componentDidMount() {
    document.head.innerHTML = document.head.innerHTML + '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no, viewport-fit=cover">'
  }
  render() {
    return (
      <div>
      {renderFuncs.map((item, index) => {
        return (
          <div key={index}>
            {nodes[index] ? (<div>{nodes[index]}</div>) : null}
            <div>{item()}</div>
          </div>
        )
      })}
      </div>
    )
  }
}
`

module.exports = function core(source) {
  const nodes = extractor(source);
  const funcCompoents = nodes.filter(node => node.type === 'code').map(node => generator(node.content)).join(',')
  const titles = nodes.filter(node => node.type === 'title').map((node) => node.content)
  const result = template(funcCompoents, JSON.stringify(titles))
  return result;
}
