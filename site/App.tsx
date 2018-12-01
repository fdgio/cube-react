import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Document from './pages/Documents';

import 'normalize.css';
import './index.scss';
export default class App extends React.Component<{}, any> {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/document/:component" component={Document} />
				</Switch>
			</Router>
		);
	}
}
