import * as React from 'react';
import { CubeLoading } from './../../../src/index';

export default class LoadingPage extends React.Component<{}, any> {
	render() {
		return (
			<div className="example-page-container">
				<p className="sub-header">默认大小</p>
				<CubeLoading />
				<p className="sub-header">30px</p>
				<CubeLoading size={30} />
				<p className="sub-header">50px</p>
				<CubeLoading size={50} />
			</div>
		);
	}
}
