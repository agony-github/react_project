import React from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import App from './app'
import About from './about'
import Home from './home'
import Repos from './repos'
import Repo from './repo'

render((
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='/about' component={About}/>
            <Route path='/repos' component={Repos}>
                <Route path='/repos/:username/:repo' component={Repo}/>
            </Route>
        </Route>
    </Router>
    )
    , document.getElementById('root'))