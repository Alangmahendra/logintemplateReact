import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { Route, Switch,Router } from 'react-router-dom'
import store from './store/store'
import AdminLogin from './component/AdminLogin'
import Home from './component/Home'
import UserLogin from './component/UserLogin'
import UserForm from './component/UserForm'
import NotFound from './component/NotFound'
import history from './history.js'
import ResetPassword from './component/ResetPassword'
import DashboardPage from './component/DashboardPage'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router history={history}>
            <div>
              <Switch>
                <Route exact strict path='/' component={Home} />
                <Route exact strict path='/adminlogin' component={AdminLogin} />
                <Route exact strict path='/userlogin' component={UserLogin} />
                <Route exact strict path='/userform' component={UserForm} />
                <Route exact strict path='/resetpassword' component={ResetPassword} />
                <Route exact strict path='/dashboardpage' component={DashboardPage} />
                <Route path='*' component={NotFound} />
              </Switch>
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
