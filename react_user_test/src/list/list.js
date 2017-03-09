/**
 * Created by Administrator on 2017/3/8 0008.
 */
import React,  {Component} from 'react'
import axios from 'axios'
export default class List extends Component{
    constructor(props){
        super(props)
        this.state = {
            Index:true,
            loading:false,
            finish:[],
            error:null
        }
    }
    componentWillReceiveProps(nextprops){//更新数据，传过来的新数据  多次发送请求
        const {searchName} = nextprops
        this.setState({
            Index:false,
            loading:true
        })
        let url = `https://api.github.com/search/users?q=${searchName}`
        axios.get(url)
            .then((response) => {
                let items = response.data.items
                let finish = items.map((item) => {
                    return {html_url:item.html_url, avatar_url:item.avatar_url, login:item.login}
                })
                this.setState({
                    loading:false,
                    finish
                })
            })
            .catch((error) => {
                this.setState({
                    loading:false,
                    error:error.message
                })
            })

    }
    render(){
        const {Index, loading, finish, error} = this.state
        if(Index){
            return <h2>Enter name to search</h2>
        }else if(loading){
            return <h2>loading result ......</h2>
        }else if(error){
            return <h2>{error.message}</h2>
        }else{
            let items = finish.map((item, index) =>{
                return (
                    <div className="card" key={index}>
                        <a href={item.html_url} target="_blank">
                            <img src={item.avatar_url} style={{width: '100px'}}/>
                        </a>
                        <p className="card-text">{item.login}</p>
                    </div>
                )
            })
            return (<div className="row">{items}</div>)
        }
    }
}