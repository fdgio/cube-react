import * as React from 'react';
import Header from './../../components/Header';
import Sidebar from './../../components/Sidebar';

import './index.scss';
export default class Document extends React.Component<{}, any> {
	render() {
		return (
			<section className="document-page page">
				<Header />
				<main className="main-container">
					<Sidebar />
				</main>
			</section>
		);
	}
}
