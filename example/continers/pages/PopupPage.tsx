import * as React from 'react';
import { CubePopup, CubeButton } from './../../../src/index';

export default class LoadingPage extends React.Component<{}, any> {
	constructor(props) {
		super(props);
		this.state = {
			popupProps: {}
		};
	}
	click(key) {
		console.log(123132);
		switch (key) {
			case 'default':
				debugger;
				this.setState({
					popupProps: {
						content: '弹层',
						visible: true
					}
				});
		}
	}
	render() {
		const popupProps = this.state.popupProps;
		return (
			<div className="example-page-container">
				<p className="sub-header">默认</p>
				<CubeButton onClick={(e) => this.click('default')} />
				<CubePopup {...popupProps} />
			</div>
		);
	}
}
