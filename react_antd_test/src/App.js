/**
 * Created by Administrator on 2017/3/8 0008.
 */
import React, {Component} from 'react'
import {Button, DatePicker} from 'antd'

export default class App extends Component{
    render(){
        return (
            <div>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
                <DatePicker/>
            </div>
        )
    }
}