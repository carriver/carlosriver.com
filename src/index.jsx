import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { unregisterStaleServiceWorkers } from './unregisterStaleServiceWorkers';

ReactDOM.render(<App />, document.getElementById('root'));

unregisterStaleServiceWorkers();
