import React, {Component} from 'react'
import {Link} from 'react-router'

export default class Repos extends Component{
    constructor(props){//初始化数据（动态创建数据）
        super(props)
        this.state = {
            lists:[
                {username:'facebook', checkName:'react'},
                {username:'facebook', checkName:'react-dom'},
                {username:'hello', checkName:'world'},
                {username:'world', checkName:'hello-world'}
            ]
        }
    }

    render(){
        const list = this.state.lists.map((list, index) => {
            return <li key={index}><Link to={`/repos/${list.username}/${list.checkName}`}
                      activeClassName='active'>{list.checkName}</Link></li>
        })
        return (
            <div>
                <h3>Repos组件</h3>
                <ul>
                    {list}
                </ul>
                {this.props.children}
            </div>
        )
    }
}