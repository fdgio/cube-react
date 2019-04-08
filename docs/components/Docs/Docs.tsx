import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

import SideList from '../SideList/SideList'
import Display from '../Display/Display'
import Back from '../Back/Back'
import Markdown from '../Markdown/Markdown'
import './index.styl'


export default class Docs extends React.Component<RouteComponentProps> {
  public render(): React.ReactNode {
    const { match } = this.props;
    const path = window.location.pathname.split('/').pop()
    return (
      <div className="docs-view">
        {/* <img className="menu" src="./close.svg" alt="close" /> */}
        {/* <img className="menu" v-show="!showCatalog"  src="./menu.svg" alt="menu"/> */}
        {/* <Back /> */}
        {/* <div  className="mask"></div> */}
        <div className="nav-list-wrapper">
          <SideList />
        </div>
        <Route path={`${match.path}/:md`} component={Markdown}></Route>
        <Display path={path}/>
      </div >
    );
  }
}
