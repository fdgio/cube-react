import * as React from 'react';
import Header from '../../components/Header';

// const logoImg = require('./imgs/logo.png');

export default class Home extends React.Component<{}, any> {
	public render(): React.ReactNode {
		return (
			<section>
				<Header />
        <div className="logo-container">
					{/* <img src={logoImg} alt="" /> */}
				</div>
			</section>
		);
	}
}
