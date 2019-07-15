import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Todo />, document.getElementById('todo'));

serviceWorker.unregister();
