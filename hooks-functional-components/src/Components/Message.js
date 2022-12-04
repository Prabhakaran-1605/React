let Message = ()=> 
{
let msg = "Hello"

let gmHandler = ()=>{

    msg = "Good Morning"       // we dont use let variable again - because redeclaration is not possible for let variable.
    console.log(msg)
} 

let gnHandler = ()=> {

    msg = "Good Night"   
    console.log(msg)      
}


// only Console level it executes but our requirement is to reflect in user interface while onClick Event so that use {usestate method}.

return <>
<h1> Message</h1>
<h1>{msg}</h1>
<button className ="btn btn-primary" onClick={gmHandler}> GM </button>
<button className="btn btn-success" onClick={gnHandler}> GN </button>
</>
}
export default Message