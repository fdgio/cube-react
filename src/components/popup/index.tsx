import * as React from 'react';
import classnames from 'classnames';

interface BasicProps {
	type?: string;
	mask?: boolean;
	content?: string;
	center?: boolean;
	position?: string;
	zIndex?: number;
	maskClosable?: boolean;
	visible?: boolean;
	onClick: (e: MouseEvent) => void;
}

type PopupProps = React.BaseHTMLAttributes<any> & BasicProps;

export default class popup extends React.Component<PopupProps, any> {
	static defaultProps = {
		type: '',
		mask: true,
		content: '',
		center: true,
		position: '',
		zIndex: 100,
		maskClosable: false,
		visible: false,
		onClick: () => {}
	};

	constructor(props) {
		super(props);
		this.state = {
			isVisible: false
		};
	}

	show() {
		this.setState({
			isVisible: true
		});
	}

	hide() {
		this.setState({
			isVisible: false
		});
	}

	setContentNode() {
		const content = this.props.content;
		if (this.props.children) {
			return <div className="cube-popup-content">{this.props.children}</div>;
		} else {
			return <div className="cube-popup-content" dangerouslySetInnerHTML={{ __html: content }} />;
		}
	}

	render() {
		const { type, mask, content, center, position, onClick, zIndex, maskClosable } = { ...this.props };
		let rootClass: object | string = {
			'cube-popup_mask': mask,
			'cube-popup': true
		};
		if (type) {
			rootClass[`cube-${type}`] = true;
		}
		rootClass = classnames(rootClass);
		const rootStyle = {
			zIndex,
			display: this.state.isVisible ? 'block' : 'none'
		};
		let containerClass: string = '';
		if (position) {
			containerClass = 'cube-popup-${position}';
		} else if (center) {
			containerClass = 'cube-popup-center';
		}

		return (
			<div className={rootClass} style={rootStyle}>
				<div
					className="cube-popup-mask"
					onClick={(e) => {
						onClick(e);
						if (maskClosable) {
							this.hide();
						}
					}}
				>
					{this.props.children}
				</div>
				<div className={`cube-popup-container ${containerClass}`}>
					<div className="cube-popup-content" dangerouslySetInnerHTML={{ __html: content }} />;
				</div>
			</div>
		);
	}
}
