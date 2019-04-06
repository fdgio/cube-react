import React from 'react';
import { RouteProps, Link, Route, Switch, Redirect } from 'react-router-dom';
import classnames from 'classnames';

import  Docs from '../../components/Docs/Docs';
import './index.styl';

export default class Document extends React.Component<any & RouteProps, any> {
  public state = {
    showTabs: false,
  }

  public toggleNav(): void {
    console.log(this)
  }

	public render(): React.ReactNode {
    const { showTabs } = this.state
    const { toggleNav } = this;
    console.log(this.props)
    return (
      <div className={classnames(['home-view', {'home-view-docs': true, 'home-view-demo': false, opacity1: false}])}>
        <div className={classnames([{ active: showTabs }, 'navigator'])}>
          <div className="logo">
            {/* <router-link to="/"><img src="./logo.png" alt="Cube-UI"></router-link> */}
          </div>
          <div className="tabs">
            <i></i>
            <Link to="/docs" className="tab">
              <span>文档</span>
            </Link>
            <Link to="/docs/example" className="tab">
              <span>示例</span>
            </Link>
            <a href="https://github.com/fdgio/cube-react" className="tab" target="_blank" rel="noopener noreferrer">
              <span>GitHub</span>
            </a>
            {/* <site-lang></site-lang> */}
          </div>
            <span className="toggle-nav" onClick={toggleNav}><i></i></span>
        </div>
        <div className="router-view">
            <Route path="/docs" component={Docs} />
        </div>
      </div>
	  );
	}
}
