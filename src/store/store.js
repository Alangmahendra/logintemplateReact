import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'

import userLogin from '../reducers/usersLogin'
import adminLogin from '../reducers/adminLogin'
import adminSignup from '../reducers/adminSignup'
import userForm from '../reducers/userForm'
import resetPassword from '../reducers/resetPassword'

const rootReducers = combineReducers({
    adminLogin,
    adminSignup,
    userLogin,
    userForm,
    resetPassword
})
export default createStore(
    rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
)