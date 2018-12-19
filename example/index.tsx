import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';

import 'normalize.css';
import '../src/common/stylus/index.styl';
import './index.styl';

ReactDOM.render(<App />, document.querySelector('#app')! as HTMLElement);
