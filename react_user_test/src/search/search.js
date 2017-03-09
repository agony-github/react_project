/**
 * Created by Administrator on 2017/3/8 0008.
 */
import React,  {Component} from 'react'
export default class Search extends Component{
    search = () =>{
        //得到输入框的值
        const msg = this.refs.msg.value.trim()
        //添加
        this.props.searchName(msg)
        this.refs.msg.value = ''
    }
    render(){
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" placeholder="enter the name you search" ref="msg"/>
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}