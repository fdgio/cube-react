import * as React from 'react';
import { any } from 'prop-types';
import { CubeButton } from './../../../src/index';

export default class ButtonPage extends React.Component<{}, any> {
	render() {
		return (
			<div>
				<CubeButton />
			</div>
		);
	}
}
