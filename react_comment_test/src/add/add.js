import React, {Component} from 'react'

export default class Add extends Component{
    addComment = () =>{
        const comment = {
            username:this.refs.username.value.trim(),
            comment:this.refs.input.value.trim()
        }
        if(comment.username === '' || comment.input === ''){
            this.refs.username.value = ''
            this.refs.input.value = ''
            return;
        }

        this.props.add(comment)
        this.refs.username.value = ''
        this.refs.input.value = ''
    }
    render(){
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" placeholder="用户名" ref="username"/>
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" rows="6" placeholder="评论内容" ref="input"></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right"
                                    onClick={this.addComment}>提交</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}