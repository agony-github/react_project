/**
 * Created by Administrator on 2017/3/8 0008.
 */
import React,  {Component} from 'react'
import Search from '../search/search'
import List from '../list/list'

export default class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            searchName:null
        }
    }
    searchName =(msg) =>{
        this.setState({
            searchName:msg
        })
    }
    render(){
        return (
            <div id="app">
                <div className="container">
                    <Search searchName={this.searchName}/>
                    <List searchName={this.state.searchName}/>
                </div>
            </div>
        )
    }
}