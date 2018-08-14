import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import store from './store/store'
import AdminLogin from './component/AdminLogin'
import Home from './component/Home'
import UserLogin from './component/UserLogin'
import UserForm from './component/UserForm'
import NotFound from './component/NotFound'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <div>
              <Switch>
                <Route exact strict path='/' component={Home} />
                <Route exact strict path='/adminlogin' component={AdminLogin} />
                <Route exact strict path='/userlogin' component={UserLogin} />
                <Route exact strict path='/userform' component={UserForm} />
                <Route path='*' component={NotFound} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
