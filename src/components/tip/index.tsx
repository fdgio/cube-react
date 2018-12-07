import * as React from 'react';
import classnames from 'classnames';
import './index.styl';

export interface BasicProps {
	direction?: string;
  offsetLeft?: string | number;
  offsetRight?: string | number;
  offsetTop?: string | number;
  offsetBottom?: string | number;
}

type TipProps = BasicProps;

class Button extends React.Component<TipProps, any> {
	static defaultProps = {
	};

	render() {
		return (
		);
	}
}

export default Button;
