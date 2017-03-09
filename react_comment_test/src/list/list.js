import React, {Component} from 'react'
import Item from '../item/item'
import './list.css'
export default class List extends Component{
    render(){
        const {comments, remove} = this.props
        const display = comments.length === 0?'block':'none'
        const items = comments.map((comment, index) => {
            let prop = {key:index, comment, remove, index}
                return <Item {...prop}/>
            })
        return (
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {items}
                </ul>
            </div>
        )
    }
}