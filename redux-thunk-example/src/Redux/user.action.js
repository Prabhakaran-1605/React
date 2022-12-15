
// To invoke API in redux application, we have to import Third party Module which is Axios 
// or we can use javascript fetch method without importing Axios


// Why we invoke API in redux action File.
// Because user.action.js file is a normal function file, where we can invoke API / side effect codes


import Axios from "axios"


// Action Type

let USERREQ = "USERREQ"

let USERSUCCESS = "USERSUCCESS"

let USERFAILURE = "USERFAILURE"


// Action
// Action - is a function returns actionable object.
let userReq = ()=>{

    return { type : USERREQ}

}

let userSuccess=(user)=>{

    return { type: USERSUCCESS, payload: user }

}

let userfailure = ()=>{

    return {type : USERFAILURE, payload: "Failed"}
}

let useraction = ()=>{

return async(dispatch)=>{
    dispatch(userReq())

    Axios.get("https://dummyjson.com/users")
    .then((response)=>{
        console.log(response.data)
        dispatch(userSuccess(response.data))})
    .catch(()=>{dispatch(userfailure())})

}


} 

export {USERFAILURE,USERREQ,USERSUCCESS,useraction}

