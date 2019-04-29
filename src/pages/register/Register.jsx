import React from 'react'
import { connect } from 'react-redux'
import { List,WhiteSpace,InputItem,Button,WingBlank,Radio } from 'antd-mobile'
import { Redirect } from 'react-router-dom'
import Logo from '../../components/logo/Logo'
import * as Actions from './store/actions'
import styles from './Register.module.css'
class Register extends React.Component{
    constructor(){
        super()
        this.state = {
            user: '',
            pwd: '',
            rpwd: '',
            type: 'genius'
        }
        this.toLogin = this.toLogin.bind(this)
    }
    toLogin(){
        this.props.history.push('/login')
    }
    handleChange(key,value){
        this.setState({
            [key]: value
        })
    }
    render(){
        const RadioItem = Radio.RadioItem
        const { registerClick,msg,redirectpath } = this.props
        return (
            <div>
                <Logo/>
                <WingBlank>
                    <List>
                        { redirectpath?<Redirect to={redirectpath}/>:null } 
                        <InputItem onChange={v=>this.handleChange('user',v)}>用户</InputItem><WhiteSpace />
                        <InputItem type='password' 
                        onChange={v=>this.handleChange('pwd',v)}>密码</InputItem><WhiteSpace />
                        <InputItem type='password' 
                        onChange={v=>this.handleChange('rpwd',v)}>确认密码</InputItem>
                    </List><WhiteSpace />
                    <List>
                        <RadioItem checked={this.state.type === 'genius'} 
                        onChange={() => this.handleChange('type','genius')}>牛人</RadioItem>
                        <RadioItem checked={this.state.type === 'boss'} 
                        onChange={() => this.handleChange('type','boss')}>Boss</RadioItem>
                    </List><WhiteSpace />
                    <div className={styles.msg}>{msg}</div><WhiteSpace />
                        <Button type='primary' onClick={() => registerClick(this.state)}>注册</Button><WhiteSpace />
                        <Button onClick={this.toLogin}>登录</Button>
                </WingBlank>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        msg: state.register.msg,
        redirectpath: state.register.redirectPath
    }
}

const mapDispatch = (dispatch) => {
    return {
        registerClick:  (state) => {
            dispatch(Actions.requestAuth(state))
        }
    }
}
export default connect(mapState,mapDispatch)(Register)