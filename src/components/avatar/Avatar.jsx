import React from 'react'
import { Grid,List } from 'antd-mobile'
class Avatar extends React.PureComponent{
    constructor(){
        super()
        this.state = {}
    }
    render(){
        const avatarlist = `boy,girl,man,woman,bull,chick,crab,hedgehog,hippopotamus,job,koala,lemur,pig,tiger,whale,zebra`
        .split(',').map(item => ({icon: require(`../../images/${item}.png`),text:item}))
        const gridHeader = this.state.icon?(
        <div>
            <span style={{verticalAlign:'middle'}}>已选择头像</span>
            <img src={this.state.icon} alt="" style={{verticalAlign:'middle'}}/>
        </div>):
        <div style={{height:'32px',lineHeight:'32px'}}>请选择头像</div>
        return (
            <List renderHeader={() => gridHeader}>
                <Grid data={avatarlist} columnNum={4} 
                onClick={elm => {
                this.setState(elm)
                this.props.getText(elm.text)
                }}/>
            </List>
        )
    }
}

export default Avatar