import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import UserCrud from '../components/users/UserCrud'
import Contact from '../components/contact/Contact'
import AboutUs from '../components/about/AboutUs'

export default props =>

    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={UserCrud} />
        <Route path='/contact' component={Contact}/>
        <Route path='/about-us' component={AboutUs}/>
        <Redirect from='*' to='/' />
    </Switch>