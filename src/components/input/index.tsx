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

export default class Input extends React.Component<BasicProps, any> {
	constructor(props) {
		super(props);
		this.state = {
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
	}

	static defaultProps = {
		type: 'text',
		disabled: false,
		readonly: false,
		autofocus: false,
		autocomplete: false,
		clearable: false,
		eye: false
	};

	render() {
		return (
			<div className="cube-input">
				<div className="cube-input-prepend" />
				<input className="cube-input-field" />
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
