// useReducer-Hook is used to perform complex state and useState operation.

import {useReducer}from "react"

let initialState = {
    msg: "Hello"
}

let reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GM" :
            return { msg: "Good Morning" }
        case "GA" :
            return { msg: "Good Afternoon" }
        case "GN" :
            return { msg: "Good Night" }
            default:
    }
}
let MessageEx = () => {

    let [state, dispatch] = useReducer(reducer, initialState)



    return <>

        <h1>{state.msg}</h1>
        <button onClick={() => { dispatch({ type: "GM" }) }} className="btn btn-success mr-2">GM</button>
        <button onClick={() => { dispatch({ type: "GA" }) }} className="btn btn-primary mr-2">GA</button>
        <button onClick={() => { dispatch({ type: "GN" }) }} className="btn btn-danger">GN</button>
    </>

}
export default MessageEx