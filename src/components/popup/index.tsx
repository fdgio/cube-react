import * as React from 'react';

interface PopupProps {
	type?: string;
	mask?: boolean;
	content?: string;
	center?: boolean;
	position?: string;
}

export default class popup extends React.Component<PopupProps, any> {
	static defaultProps = {
		type: '',
		mask: true,
		content: '',
		center: true,
		position: ''
	};

	render() {
		return (
			<div className="cube-popup">
				<div className="cube-popup-mask">{this.props.children}</div>
				<div className="cube-popup-container">
					<div className="cube-popup-content" />
					<div className="cube-popup-content" />
				</div>
			</div>
		);
	}
}
