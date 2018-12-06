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
		return (
			<div className="cube-loading">
				<span className="cube-loading-spinners" style={style}>
					{Array.from({ length: 12 }).map(() => <i className="cube-loading-spinner" />)}
				</span>
			</div>
		);
	}
}

export default Button;
