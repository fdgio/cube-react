import * as React from 'react';
import './index.styl';

export interface LoadingProps {
	size?: number;
}

class Button extends React.Component<LoadingProps, any> {
	render() {
		const { size } = this.props;
		let style = {};
		if (size) {
			style = {
				width: `${size}px`,
				height: `${size}px`
			};
		}
		let arr = [];
		for (let i = 0; i < 12; i++) arr.push(1);
		return (
			<div className="cube-loading">
				<span className="cube-loading-spinners" style={style}>
					{arr.map(() => <i className="cube-loading-spinner" />)}
				</span>
			</div>
		);
	}
}

export default Button;
