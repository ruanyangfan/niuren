import axios from 'axios'
import * as ActionTypes from './actionTypes'
const errorMsg = (msg) => {
    return {
        msg,
        type: ActionTypes.REGISTER_ERRORMSG,
    }
}   
const regsuccess = () => {
    return {
        type: ActionTypes.REGISTER_SUCCESS,
    }
}
export const requestAuth = ({user,pwd,rpwd,type}) => {
    if(!user||!pwd||!rpwd){
        return errorMsg('用户名或密码不正确')
    }
    if(pwd !== rpwd){
        return errorMsg('密码和确认密码不一样')
    }
    return (dispatch) => {
        axios.post('user/register',{user,pwd,type}).then(res=>{
            if(res.status === 200 && res.data.code === 0){
                dispatch(regsuccess())
            }else{
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}
export const clearpath = () => {
    return {
        type: ActionTypes.CLEAR_PATH
    }
}