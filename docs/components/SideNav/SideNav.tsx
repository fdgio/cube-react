import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './index.styl';

interface SideNavProps {
  data: any[]
}

export default class SideNav extends React.Component<SideNavProps> {
  public derial(nav: object): void {
    console.log(this, nav)
  }

	public render(): React.ReactNode {
    const { data } = this.props;
		return (
      <ul className="nav-ul">
        {data.map(nav => {
          return (
            <li className="nav-li" key={nav.name}>
              {
                nav.subs
              ?
                <Fragment>
                  <p className="nav-li" onClick={nav => this.derial(nav)}>{nav.name}</p>
                  <SideNav data={nav.subs} />
                </Fragment>
              :
                <Link to={nav.key}></Link>
              }
              {nav.angle && <span  className="angle">{ nav.angle }</span>}
              {nav.angle && <div className="arrow"></div>}
            </li>
          )
        })}
      </ul>
  	);
	}
}


  // <ul className="nav-ul">
  //   <li className="nav-li" v-for="(item, key) in data" :className="{'nav-li_open': item.isRootActive, 'nav-li_active': item.hasActived}" :key="key">
  //     <template v-if="item.name">
  //       <p className="nav-name" @click="derail(item)">{{item.name}}</p>
  //       <side-nav :data="item.subList"></side-nav>
  //     </template>
  //     <router-link
  //       active-className="nav-active"
  //       :to="{path: key}"
  //       v-else
  //     >{{item}}</router-link>
  //     <span v-if="item.angle" className="angle">{{item.angle}}</span>
  //     <div v-if="item.angle" className="arrow" :className="{rotate: item.isRootActive}"></div>
  //   </li>
  // </ul>
