import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default class App extends React.Component<{}, any> {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" />
					<Route path="/example/:component" />
				</Switch>
			</Router>
		);
	}
}
