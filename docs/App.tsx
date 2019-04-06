import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import NotFound from './pages/404';
import Document from './pages/Document/Document';
import Example from './pages/Example/Example';

import './index.styl';


export default class App extends React.Component {
	public render(): React.ReactNode {
		return (
			<Router>
				<Switch>
          <Route path="/docs" component={Document} />
          <Route path="/examples/:md" component={Example} />
          <Route exact path="/" render={() => (<Redirect to="/docs" />)} />
          <Route path="*" component={NotFound} />
				</Switch>
			</Router>
		);
	}
}
