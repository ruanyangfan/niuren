import React from 'react'
import { TabBar } from 'antd-mobile'
import {withRouter} from 'react-router-dom' 
class BottomBar extends React.PureComponent{
    render(){
        const bottomlist = this.props.data.filter(v => !v.hide)
        const { location,history } = this.props
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar>
                    {bottomlist.map(item => 
                    <TabBar.Item key={item.path} 
                    title={item.text} icon={{uri: require(`./images/${item.icon}.png`)}}
                    selectedIcon={{uri: require(`./images/${item.icon}-active.png`)}}
                    selected = {location.pathname === item.path}
                    onPress = {() => history.push(item.path)}
                    />    
                    )}
                </TabBar>
            </div>
        )
    }
}

export default withRouter(BottomBar) 