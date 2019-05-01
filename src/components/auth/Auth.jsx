import React from 'react'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import * as Actions from '../../pages/login/store/actions'
class Auth extends React.PureComponent{
    componentDidMount(){
        const pathlist = ['/login','/register']
        const { addData,location,history } = this.props
        if(pathlist.includes(location.pathname)){
            return null
        } 
        axios.get('/user/info').then(res => {
            if(res.status === 200){
                if( res.data.code === 0){
                    addData(res.data.data)
                }else{
                    history.push('/login')
                }
            }
        })
    }
    render(){
        return (null)
    }
}
const mapDispatch = (dispatch) => {
    return {
        addData(data){
            dispatch(Actions.addata(data))
        }
    }
}
export default withRouter(connect(null,mapDispatch)(Auth))