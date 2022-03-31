import React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
const container = document.getElementById('root');

// Initial render.
ReactDOM.render(<App tab="home" />, container);
serviceWorkerRegistration.unregister();