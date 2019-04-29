import React from 'react'
import './logo.css'
import logoImg from '../../images/job.png'

class Login extends React.Component{
    render(){
        return (
            <div className='logo'>
                <img src={logoImg} alt=""/>
            </div>
        )
    }
}

export default Login