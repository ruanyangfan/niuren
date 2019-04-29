import { combineReducers } from 'redux'
import  registerReducer  from '../pages/register/store/reducer'
import  loginReducer  from '../pages/login/store/reducer'
export default combineReducers({
    register: registerReducer,
    login: loginReducer
})