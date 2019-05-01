import * as ActionTypes from './actionTypes'

const defalutValue = {
    redirectPath: ''
}

export default (state = defalutValue,actions) => {
    switch(actions.type){
        case ActionTypes.REGISTER_ERRORMSG: return {...state, msg:actions.msg }
        case ActionTypes.REGISTER_SUCCESS: return { redirectPath: '/login'}
        case ActionTypes.CLEAR_PATH: return { redirectPath: ''}
        default: return state
    }
}