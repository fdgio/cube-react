import * as React from 'react';
import classnames from 'classnames';
import './index.styl';

export interface BasicProps {
	direction?: string;
	offsetLeft?: string | number;
	offsetRight?: string | number;
	offsetTop?: string | number;
	offsetBottom?: string | number;
	visible?: boolean;
	onClose?: () => void;
	onClick?: () => void;
	style?: object;
}

type TipProps = BasicProps;

class Button extends React.Component<TipProps, any> {
	private angle;

	static defaultProps = {
		direction: 'top',
		offsetLeft: 0,
		offsetRight: 0,
		offsetTop: 0,
		offsetBottom: 0,
		visible: false,
		onClose: () => {},
		onClick: () => {},
		style: {}
	};

	constructor(props) {
		super(props);
		this.state = {
			isVisible: this.props.visible
		};
	}

	componentDidMount() {
		const offsets = [
			{
				name: 'offsetLeft',
				target: 'left',
				percentFix: {
					marginLeft: '-6px'
				}
			},
			{
				name: 'offsetRight',
				target: 'right',
				percentFix: {
					marginRight: '-6px'
				}
			},
			{
				name: 'offsetTop',
				target: 'top',
				percentFix: {
					marginTop: '-6px'
				}
			},
			{
				name: 'offsetBottom',
				target: 'bottom',
				percentFix: {
					marginBottom: '-6px'
				}
			}
		];
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.visible != nextProps.visible) {
			this.setState({
				isVisible: nextProps.visible
			});
		}
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

	handleClick() {
		this.hide();
		this.props.onClick();
	}

	handleClose(e) {
		this.hide();
		this.props.onClose();
		e.stopPropagation();
	}

	render() {
		const { direction, style, offsetLeft, offsetBottom, offsetRight, offsetTop, children } = { ...this.props };
		const isVisible = this.state.isVisible;

		return (
			<div
				className="cube-tip"
				data-dir={direction}
				style={{ display: isVisible ? 'block' : 'none', ...style }}
				onClick={this.handleClick.bind(this)}
			>
				<i className="cube-tip-angle" ref={(angle) => (this.angle = angle)} />
				<button className="cube-tip-close cubeic-close" onClick={this.handleClose.bind(this)} />
				<div className="cube-tip-content">{children}</div>
			</div>
		);
	}
}

export default Button;
