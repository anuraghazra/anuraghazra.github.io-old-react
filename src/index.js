import 'intersection-observer';
import 'react-app-polyfill/ie9';
import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
/**
 * Do feature detection, to figure out which polyfills needs to be imported.
 **/
// async function loadPolyfills() {
//   if (typeof window.IntersectionObserver === 'undefined') {
//     await import('intersection-observer')
//   }
// }
// loadPolyfills();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();