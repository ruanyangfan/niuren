import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import { NavBar,InputItem,TextareaItem,Button,WhiteSpace,WingBlank } from 'antd-mobile'
import Avatar from '../../components/avatar/Avatar'
import * as Actions from '../login/store/actions'
class BossInfo extends React.PureComponent{
    constructor(){
        super()
        this.saveAvatar = this.saveAvatar.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    
    saveAvatar(text){
        this.setState({
            'avatar': text
        })
    }
    handleChange(key,val){
        this.setState({
            [key]: val
        })
    }
    render(){
        const { saveInfo,redirectpath,location } = this.props
        return (
            <div>
                <NavBar mode='dark'>Boss信息完善页面</NavBar>
                <WingBlank>
                    <Avatar getText = {(text) => this.saveAvatar(text)}/><WhiteSpace/>
                    <InputItem
                    onChange={v => this.handleChange('title',v)}>招聘职位</InputItem><WhiteSpace/>
                    <InputItem
                    onChange={v => this.handleChange('company',v)}>公司名称</InputItem><WhiteSpace/>
                    <InputItem
                    onChange={v => this.handleChange('money',v)}>职位薪资</InputItem><WhiteSpace/>
                    <TextareaItem title='职位要求' autoHeight
                    onChange={v => this.handleChange('desc',v)}></TextareaItem><WhiteSpace/>
                    <Button type='primary' onClick={() => saveInfo(this.state)}>保存</Button>
                </WingBlank>
                {redirectpath&&redirectpath!==location.pathname?<Redirect to={redirectpath}/>:null}
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        redirectpath: state.login.redirectPath
    }
}

const mapDispatch = (dispatch) => {
    return {
        saveInfo(data){
            dispatch(Actions.saveinfo(data))
        }
    }
}

export default connect(mapState,mapDispatch)(BossInfo)