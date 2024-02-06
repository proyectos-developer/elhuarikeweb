import React from 'react'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import axios from 'axios'

import AuthRoute from './utils/AuthRoute'
import { Provider } from 'react-redux'

import store from './redux/store.js'

import './styles.css'

import WebApp from './components/webapp.js'
import MainHome from './components/main/dashboard.js'
import LibroReclamos from './components/reclamos.js'

axios.defaults.baseURL = "https://us-central1-el-huarike.cloudfunctions.net/api"

class App extends React.Component{
  render (){
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <AuthRoute path='/' component={WebApp}>
            
            <IndexRoute path='' component={MainHome} route='main-home'/>
            <Route path='libro-reclamos' component={LibroReclamos} route='reclamos'/>
            
          </AuthRoute>
        </Router>
      </Provider>
    )
  }
}

export default App