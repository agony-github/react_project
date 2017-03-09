import React, {Component} from 'react'
import Add from '../add/add'
import List from '../list/list'

export default class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            comments:[]
        }
    }
    componentDidMount(){
        const comments = [
            {username:'Tom',comment:'不明白呀丫丫'},
            {username:'Jack', comment:'呵呵哒！！！！！'}
        ]
        this.setState({comments})
    }
    //添加对象到数组中的函数
    add = (comment) => {
        const {comments} = this.state
        comments.unshift(comment)
        this.setState({comments})
    }
    //删除对象的函数
    remove = (index) => {
        const {comments} = this.state
        comments.splice(index, 1)
        this.setState({comments})
    }
    render(){
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <Add add={this.add}/>
                    <List comments={this.state.comments} remove={this.remove}/>
                </div>
            </div>
        )
    }
}