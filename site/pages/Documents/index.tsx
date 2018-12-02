import * as React from 'react';
import { RouteProps, Redirect } from 'react-router';
import * as hljs from 'highlight.js';
import 'highlight.js/styles/default.css';

import Header from './../../components/Header';
import Sidebar from './../../components/Sidebar';
import components from './../../componentConfig';

import './index.styl';
export default class Document extends React.Component<any & RouteProps, any> {
	componentDidMount() {
		const codes = document.querySelectorAll('.main-content pre code');

		codes.forEach((e) => {
			hljs.highlightBlock(e);
		});
	}

	render() {
		const component = this.props.match.params.component;
		let __html;
		try {
			__html = require(`../../markdown/${component.toLowerCase()}.md`);
		} catch (e) {
			return <Redirect to={{ pathname: '/notfound' }} />;
		}

		return (
			<section className="document-page page">
				<Header />
				<main className="main-container">
					<Sidebar />
					<section className="main-content markdown-body" dangerouslySetInnerHTML={{ __html }} />
				</main>
			</section>
		);
	}
}
