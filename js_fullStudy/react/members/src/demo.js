import React from "react"
import "./demo.css"
export const MyComponent = () => {
    // setState setData
    const [myName, setMyName] = React.useState('John Doe')

    return <h2>My Component!</h2>
}