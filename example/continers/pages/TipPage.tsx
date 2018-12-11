import * as React from 'react';
import { CubeButton } from './../../../src';
import { CubeTip } from '../../../src';

export default class ButtonPage extends React.Component<{}, any> {
	constructor(props) {
		super(props);
		this.state = {
			tip: {}
		};
	}
	showTip() {
		this.setState({
			tip: {
				visible: true,
				style: {
					left: '50%',
					transform: 'translate(-50%)',
					top: '110px'
				}
			}
		});
	}

	render() {
		const tip = this.state.tip;
		return (
			<div className="example-page-container">
				<div className="sub-content">
					<CubeButton
						onClick={() => {
							this.showTip();
						}}
						outline={true}
						primary={true}
						inline={true}
					>
						Cube-React
					</CubeButton>
					<CubeTip {...tip} />
				</div>
			</div>
		);
	}
}
