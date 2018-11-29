import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Document from './pages/Documents';
export default class App extends React.Component<{}, any> {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/document" component={Document} />
				</Switch>
			</Router>
		);
	}
}
