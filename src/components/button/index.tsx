import * as React from 'react';
import './index.styl';

export interface ButtonProps {
	text?: string;
}

class Button extends React.Component<ButtonProps, any> {
	static defaultProps = {
		text: 'ui'
	};
}

export default Button;
