import React from 'react'
import {Link} from 'react-router'

export default class App extends React.Component{
    render(){
        return (
           <div>
               <h2>hello, React Router</h2>
               <ul>
                   <li><Link to='/about'>About222</Link></li>
                   <li><Link to='/repos'>Reposooo</Link></li>
               </ul>
               {this.props.children}
           </div>
        )
    }
}