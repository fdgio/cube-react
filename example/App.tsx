import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Components from './pages/Components';
import NotFound from './pages/404';
import 'cube-react/lib/cube-react.css';

export default class App extends React.Component<{}, any> {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/example/:component" component={Components} />
					<Route path="*" component={NotFound} />
				</Switch>
			</Router>
		);
	}
}
