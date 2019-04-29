import axios from 'axios'
import * as ActionTypes from './actionTypes'
const errorMsg = (msg) => {
    return {
        msg,
        type: ActionTypes.LOGIN_ERRORMSG,
    }
}   
const loginsuccess = (data) => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        data
    }
}

export const login = ({user,pwd}) => {
    if(!user||!pwd){
        return errorMsg('用户名或密码不能为空')
    }
    return (dispatch) => {
        axios.post('user/login',{user,pwd}).then(res=>{
            if(res.status === 200 && res.data.code === 0){
                dispatch(loginsuccess(res.data.data))
            }else{
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}
export const saveinfo = (data) => {
    return (dispatch) => {
        axios.post('user/saveinfo',data).then(res=>{
            if(res.status === 200 && res.data.code === 0){
                dispatch(loginsuccess(res.data.data))
            }else{
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}