import React from 'react'
import {Link} from 'react-router'

export default class Repos extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            repos:[
                {username:'facebook', repo:'react'},
                {username:'facebook', repo:'react-dom'},
                {username:'hello', repo:'hello-world'},
                {username:'world', repo:'welcome hello'}
            ]
        }
    }
    render(){
        const items = this.state.repos.map((item, index) =>{
            let to = `/repos/${item.username}/${item.repo}`
            return <li key={index}>
                        <Link to={to}>{item.repo}</Link>
                   </li>
        })
        return (
            <div>
                <h2>Repos 组件</h2>
                <ul>
                    {items}
                </ul>
                {this.props.children}
            </div>
        )
    }
}