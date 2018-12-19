import * as React from 'react';
import classnames from 'classnames';
import './index.styl';

export interface BasicProps {
	type?: string;
	disabled?: boolean;
	readonly?: boolean;
	maxlength?: number;
	placeholder?: string;
	autofocus?: boolean;
	autocomplete?: boolean;
	clearable?: boolean | object;
	eye?: boolean | object;
}

type InputProps = React.InputHTMLAttributes<{}> & BasicProps;

export default class Input extends React.Component<InputProps, any> {
	private inputRef: React.RefObject<HTMLInputElement>;

	constructor(props) {
		super(props);
		this.state = {
			inputValue: this.props.value || '',
			isFocus: false,
			formatedClearable: {
				visible: false,
				blurHidden: true
			},
			formatedEye: {
				open: false,
				reverse: false
			}
		};
		this.inputRef = React.createRef();
	}

	static defaultProps = {
		type: 'text',
		disabled: false,
		readonly: false,
		autofocus: false,
		autocomplete: false,
		clearable: false,
		eye: false,
		onFocus: () => {},
		onBlue: () => {}
	};

	handleFocus(e) {
		this.props.onFocus(e);
		this.setState({
			isFocus: true
		});
	}

	handleBlur(e) {
		this.props.onBlur(e);
		this.setState({
			isFocus: false
		});
	}

	handleClear(e) {
		this.setState({
			inputValue: ''
		});
		this.inputRef.current.focus();
	}

	render() {
		const inputClass = classnames({
			'cube-input_active': this.state.isFocus,
			'cube-input': true
		});

		const { children } = { ...this.props };
		let prepend;
		if (children[0]) {
			prepend = <div className="cube-input-prepend">{children[0]}</div>;
		}
		return (
			<div className={inputClass}>
				{prepend}
				<input ref={this.inputRef} className="cube-input-field" onFocus={(e) => this.handleFocus(e)} />
				<div className="cube-input-append">
					<div className="cube-input-clear">
						<i className="cubeic-wrong" />
					</div>
					<div className="cube-input-eye">
						<i />
					</div>
				</div>
			</div>
		);
	}
}
