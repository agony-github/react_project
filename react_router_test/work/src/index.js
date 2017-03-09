import React from 'react'
import {render} from 'react-dom'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'

import App from './components/app'
import About from './components/about'
import Home from './components/home'
import Repos from './components/repos'
import Repo from './components/repo'
/*路由器上绑定监听，分别指定路由相互映射(:占位)*/
render((<Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path="/about" component={About}/>
            <Route path="/repos" component={Repos}>
                <Route path="/repos/:username/:checkName" component={Repo}/>
            </Route>
        </Route>
    </Router>
),document.getElementById('app'))