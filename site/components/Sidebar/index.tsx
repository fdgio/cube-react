import * as React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

export default class Sidebar extends React.Component<any, any> {
	render() {
		return (
			<div className="sidebar">
				<ul className="menu">
					<li>
						<Link to="/document/button">按钮</Link>
					</li>
					<li>
						<Link to="/document/popup">弹窗</Link>
					</li>
				</ul>
			</div>
		);
	}
}
