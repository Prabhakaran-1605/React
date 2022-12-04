import { useState } from "react"

// useState is a inbuilt method which is used to update or upgrade the variable in the UI code

// useState is a destructured array which contains variable and function. 

// In UseState we can pass String, Number, Array, Object as a variable.

let Message1 = () => {

    let [msg, setmsg] = useState("Hello")

    let gmHandler = ()=>{

      setmsg("Good Morning")
    } 
    
    let gnHandler = ()=> {

        setmsg("Good Night")    
    }
    
    return <>
        <h1> Message-1</h1>
        <h1>{msg}</h1>
        <button className="btn btn-primary" onClick={gmHandler}> GM </button>
        <button className="btn btn-success" onClick={gnHandler}> GN </button>
    </>

}
export default Message1






















































