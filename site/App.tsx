import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Document from './pages/Documents';
import NotFound from './pages/404';

import 'normalize.css';
import 'github-markdown-css';
import './index.scss';
export default class App extends React.Component<{}, any> {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/document/:component" component={Document} />
					<Route path="*" component={NotFound} />
				</Switch>
			</Router>
		);
	}
}
