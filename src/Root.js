import React from 'react';
import './App.css';
import {BrowserRouter as Router}  from 'react-router-dom'
import {Provider} from 'react-redux'

import App from './components/App'

// a root component 
const Root = ({store}) => {
  return (
    <Provider store={store} >
      <Router >
        <App />
      </Router>
    </Provider>
  )
}

export default Root
