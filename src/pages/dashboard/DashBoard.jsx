import React from 'react'
import { connect } from 'react-redux'
import { Switch,Route } from 'react-router-dom'
import { NavBar } from 'antd-mobile' 
import BottomBar from '../../components/bottombar/BottomBar'
import Boss from '../../components/boss/Boss'
import Genius from '../../components/genius/Genius'
import Me from '../../components/me/Me'
import Msg from '../../components/msg/Msg'
class DashBoard extends React.PureComponent{
    render(){
        const { type,location } = this.props
        const navlist = [
            {
                path: '/genius',
                text: '牛人',
                title: 'Boss列表',
                icon: 'boss',
                hide: type === 'genius',
                component: Boss
            },
            {
                path: '/boss',
                text: 'Boss',
                title: '牛人列表',
                icon: 'job',
                hide: type === 'boss',
                component: Genius
            },
            {
                path: '/msg',
                text: '消息',
                title: '消息列表',
                icon: 'msg',
                component: Msg
            },
            {
                path: '/me',
                text: '我',
                title: '个人中心',
                icon: 'user',
                component: Me
            },
        ]
        if(navlist.some(item => {
            return item.path === location.pathname
        })){
            return (
                <div>
                    <NavBar mode='dark'>{navlist.find(v => v.path ===  location.pathname).title}</NavBar>
                        <Switch>
                            {
                                navlist.map((item,index)=>{
                                    return <Route path={item.path} component={item.component} key={index}/>
                                })
                            }
                        </Switch> 
                    <BottomBar data={navlist}></BottomBar>
                </div>
            )
        }
        return null
    }
}

const mapState = (state) => {
    return {
        type: state.login.type
    }
}

export default connect(mapState,null)(DashBoard)