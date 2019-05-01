import React from 'react'
import { connect } from 'react-redux' 
import Logo from '../../components/logo/Logo'
import * as Actions from './store/actions'
import * as RegisterActions from '../register/store/actions'
import { List,WhiteSpace,InputItem,Button,WingBlank } from 'antd-mobile'
import { Redirect } from 'react-router-dom'
import styles from '../login/Login.module.css'
class Login extends React.Component{
    constructor(){
        super()
        this.toRegister = this.toRegister.bind(this)
        this.state = {
            user: '',
            pwd: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount(){
        if(this.props.registerpath){
            this.props.useRegister()
        }
    }
    handleChange(key,value){
        this.setState({
            [key]: value
        })
    }
    toRegister(){
        this.props.history.push('/register') 
    }
    render(){
        const { loginClick,msg,redirectpath } = this.props
        return (
            <div>
                <Logo/>
                <WingBlank>
                    <List>
                        {redirectpath?<Redirect to={redirectpath}/>:null}
                        <InputItem 
                        onChange={v=>this.handleChange('user',v)}>用户</InputItem><WhiteSpace />
                        <InputItem type='password'
                        onChange={v=>this.handleChange('pwd',v)}>密码</InputItem><WhiteSpace />
                    </List><WhiteSpace />
                        <div className={styles.msg}>{msg}</div>
                        <Button type='primary' onClick={() => loginClick(this.state)}>登录</Button><WhiteSpace />
                        <Button onClick={this.toRegister}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}
const mapState = (state) => {
    return {
        msg: state.login.msg,
        redirectpath: state.login.redirectPath,
        registerpath: state.register.redirectPath
    }
}

const mapDispatch = (dispatch) => {
    return {
        loginClick: (state) => {
            dispatch(Actions.login(state))
        },
        useRegister(){
            dispatch(RegisterActions.clearpath())
        }
    }
}
export default connect(mapState,mapDispatch)(Login)