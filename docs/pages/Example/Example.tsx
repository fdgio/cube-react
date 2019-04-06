import React from 'react';
import { RouteComponentProps } from 'react-router-dom';


function renderMd(filename: string): React.FunctionComponent {
  const c = require(`../../markdown/${filename}.md?render`)
  return c.default;
}

type Props = RouteComponentProps<{md: string}>;

export default class Example extends React.Component<Props> {
  public render(): React.ReactNode {
    const { match } = this.props;
    const { params } = match;
    const MarkdownComponent = renderMd(params.md)
    return React.createElement(MarkdownComponent);
  }
}
