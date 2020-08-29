// import React from 'react'
// import "./demo.css"

// export const MyComponent = () => {
//     // setState 对应小程序 setData
//     // data: {
//     //     myName: 'John Doe'
//     // }
//     // MV-VM
//     // react hooks setData 相似，将myName的值变化进行监听，用setMyname方法修改值，myName值改变页面会重新渲染，VM-MV模型
//     const [myName, setMyname] = React.useState('John Doe')

// return (
//     // template 不是html
//     <div>
//         <h2 className="title">{myName}</h2>
//         <input 
//             value={myName}
//             onChange={(e) => setMyname(e.target.value) }
//         />
//     </div>
// )
// 
// }

import React from "react"

export const MyComponent = () => {
    const [username, setUsername] = React.useState("")
    const [list, setList] = React.useState([])
    // onLoad
    React.useEffect(() => {
        // setTimeout(() => {
        //     setUsername("John")
        // }, 1500)
        fetch(
            'http://neteasecloudmusicapi.zhaoboy.com/toplist/detail')
        .then(data => data.json())
        .then(data => {
            // console.log(data);
            setList(data.list)
        })    
    }, []) // onLoad
    return (
        <div>
            <h4>{username}</h4>
            <input value={username} 
            onChange={e => setUsername(e.target.value)}/>
            <ul>
            {
                list.map(item => <li>{item.description}</li>)
            }
            </ul>
        </div>
    )
}