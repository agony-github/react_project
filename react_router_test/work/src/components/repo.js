import React from 'react'

function Repo(props) {
    return <div>用户名：{props.params.username}，仓库名：{props.params.checkName}</div>
}
export default Repo