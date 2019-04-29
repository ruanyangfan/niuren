import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter,Route } from 'react-router-dom'
import './config'
import store from './store'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import BossInfo from './pages/boss/BossInfo'
import GeniusInfo from './pages/genius/GeniusInfo'

ReactDOM.render(
    <Provider store={store}> 
        <BrowserRouter>
            <Route path = '/' exact component={Login}/>
            <Route path = '/login' exact component={Login}/>
            <Route path = '/register' exact component={Register}/>
            <Route path = '/bossinfo' exact component={BossInfo}/>
            <Route path = '/geniusinfo' exact component={GeniusInfo}/>
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));

