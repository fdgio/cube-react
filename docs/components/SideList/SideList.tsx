import React, { Fragment } from 'react';
import navConfig from '../../nav.config.yml';
import SideNav from '../SideNav/SideNav';

function processNavConfig(config): [] {
  return config.map((item, index) => {
    const ret = item;
    ret.angle = `0${index+1}`
    return ret;
  })
}

export default class SideList extends React.Component {
  public render(): React.ReactNode {
    const navList = processNavConfig(navConfig);
    return (
      <nav className="page-sidelist">
        <SideNav data={navList}></SideNav>
      </nav>
    );
  }
}
