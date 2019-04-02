import React from 'react';
import { RouteProps, Redirect } from 'react-router-dom';
import classnames from 'classnames';
import './index.styl';

export default class Document extends React.Component<any & RouteProps, any> {
  public state = {
    showTabs: false,
  }

	public render(): React.ReactNode {
    const { showTabs } = this.state
    return (
      <div className={classnames(['home-view', {'home-view-docs': true, 'home-view-demo': true, opacity1: true}])}>
        <div className={classnames([{ active: showTabs }, 'navigator'])}>
          <div className="logo">
            {/* <router-link to="/"><img src="./logo.png" alt="Cube-UI"></router-link> */}
          </div>
          <div className="tabs">
            <i></i>
            {/* <slot name="nav"></slot> */}
            {/* <site-lang></site-lang> */}
          </div>
            <span className="toggle-nav" onClick={toggleNav}><i></i></span>
        </div>
        <div className="router-view">
          {/* <nav-loading></nav-loading> */}
          {/* <router-view></router-view> */}
        </div>
      </div>
	  );
	}
}
