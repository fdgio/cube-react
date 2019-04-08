import React from 'react';

import './index.styl'

interface DisplayProps {
  path: string
}

export default class Display extends React.Component<DisplayProps> {
  public render(): React.ReactNode {
    const { path } = this.props;
    if(!path) return null;
    const ifrSrc = `/examples/${path}`
    return (
      <div className="page-display">
        <div className="display-wrapper">
          <section className="mofang-demo">
            <iframe src={ifrSrc} frameBorder="0" width="100%" height="100%" scrolling="no" title="diplay"></iframe>
          </section>
        </div>
      </div >
    );
  }
}
