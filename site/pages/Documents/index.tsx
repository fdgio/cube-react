import * as React from 'react';
import { RouteProps, Route } from 'react-router';
import Header from './../../components/Header';
import Sidebar from './../../components/Sidebar';

import './index.scss';
export default class Document extends React.Component<any & RouteProps, any> {
	render() {
		const component = this.props.match.params.component;
		return (
			<section className="document-page page">
				<Header />
				<main className="main-container">
					<Sidebar />
					<section
						className="main-content"
						dangerouslySetInnerHTML={{ __html: require(`../../markdown/${component.toLowerCase()}.md`) }}
					/>
				</main>
			</section>
		);
	}
}
