import * as ActionTypes from './actionTypes'

const defalutValue = {
    redirectPath: ''
}

export default (state = defalutValue,actions) => {
    switch(actions.type){
        case ActionTypes.REGISTER_ERRORMSG: return {...state, msg:actions.msg }
        case ActionTypes.REGISTER_SUCCESS: return { redirectPath: '/login'}
        default: return state
    }
}