import React from 'react'

function Repo(props) {
    return <h2>用户名是：{props.params.username}，仓库名是：{props.params.repo}</h2>
}
export default Repo