import * as React from 'react';
import { Link } from 'react-router-dom';
import components from './../../componentConfig';

import './index.scss';

export default class Sidebar extends React.Component<any, any> {
	render() {
		return (
			<div className="sidebar">
				<ul className="menu">
					{components.map((nav, i) => (
						<li key={i}>
							<Link to={`/document/${nav.name}`}>{nav.text}</Link>
						</li>
					))}
				</ul>
			</div>
		);
	}
}
