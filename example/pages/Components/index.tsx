import * as React from 'react';
import { RouteProps, Redirect } from 'react-router';
import utils from '../../utils';
import ButtonPage from './../../continers/pages/ButtonPage';
import Pages from '../../continers/pages';
export default class Components extends React.Component<any & RouteProps, any> {
	render() {
		const component = utils.capitalize(this.props.match.params.component) + 'Page';
		if (Pages[component]) {
			return (
				<div className="container">
					<ButtonPage />
				</div>
			);
		} else {
			return <Redirect to={{ pathname: '/notfound' }} />;
		}
	}
}
