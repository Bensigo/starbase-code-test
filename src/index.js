import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';
import {store} from './store'

// semantic UI css 
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();

// enable hot module reload for dev
if (module.hot) {
  module.hot.accept()
}