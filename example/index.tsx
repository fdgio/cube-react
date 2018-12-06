import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';

import 'normalize.css';
import './index.styl';

ReactDOM.render(<App />, document.querySelector('#app')! as HTMLElement);
