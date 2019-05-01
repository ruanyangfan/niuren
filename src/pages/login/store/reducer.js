import * as ActionTypes from './actionTypes'
import { redirectTo } from '../../../func'
const defalutValue = {
    redirectPath: ''
}

export default (state = defalutValue,actions) => {
    switch(actions.type){
        case ActionTypes.LOGIN_ERRORMSG: return {...state, msg:actions.msg ,isAuth:false}
        case ActionTypes.LOGIN_SUCCESS: return { msg:'',...actions.data,redirectPath: redirectTo(actions.data) }
        case ActionTypes.ADD_DATA: return { msg:'',...actions.data}
        default: return state
    }
    
}