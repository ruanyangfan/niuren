import React from 'react'
import axios from 'axios'
import { Card,WingBlank,WhiteSpace } from 'antd-mobile'
class Genius extends React.PureComponent{
    constructor(){
        super()
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        axios.get('/user/list?type=genius').then(res => {
            if(res.status === 200){
                if(res.data.code === 0){
                    this.setState({
                        data: res.data.data
                    })
                }
            } 
        })
    }
    render(){
        // console.log(this.state.data)
        return (
            <WingBlank>
                {
                    this.state.data.map((item) => {
                        if(item.avatar){
                            return (
                                <div key={item._id}>
                                    <WhiteSpace/>
                                    <Card>
                                    <Card.Header
                                    title={item.user}
                                    thumb={require(`../../images/${item.avatar}.png`)}
                                    extra={<span>{item.title}</span>}></Card.Header>
                                    <Card.Body>
                                        <div>{item.desc}</div>
                                    </Card.Body>
                                    </Card>
                                </div>
                            )
                        }else {
                            return null
                        }
                    })
                }
            </WingBlank>
        )
    }
}

export default Genius