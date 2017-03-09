import React, {Component} from 'react'
import './item.css'
export default class Item extends Component{
    delComment = () => {
        const {comment, index, remove} = this.props
       if(confirm(`确认删除${comment.username}的评论吗`)){
            remove(index)
        }
    }
    render(){
        const {comment} = this.props
        return (
            <li className="list-group-item">
                <div className="handle">
                    <a href="javascript:;" onClick={this.delComment}>删除</a>
                </div>
                <p className="user"><span >{comment.username}</span><span>说:</span></p>
                <p className="centence">{comment.comment}</p>
            </li>
        )
    }
}