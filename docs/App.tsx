import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import Home from '../scripts/docs/render';
// import Document from './pages/Documents';
// import NotFound from './pages/404';

import 'normalize.css';
import 'github-markdown-css';
import './index.styl';

import Document from './pages/Document/Document';

export default class App extends React.Component {
	public render(): React.ReactNode {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={Document} />
          {/* <Route path="/docs/:component" component={Document} />
					<Route path="*" component={NotFound} /> */}
				</Switch>
			</Router>
		);
	}
}
