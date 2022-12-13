import { useDispatch, useSelector} from "react-redux"
import {gmAction,gnAction} from "../redux-files/message.action"
let Message = () => {
    let dispatch = useDispatch()
    
    let message = useSelector((state)=>{ return state.message})
    let gmHandler = () => {
        // dispatch an Action - To dispatch an action we have to use useDispatch hook.
        dispatch(gmAction())
    }

    let gnHandler = () => {
        // dispatch an Action - - To dispatch an action we have to use useDispatch hook.
        dispatch(gnAction())
    }

    return <>
    <pre>{JSON.stringify(message)} </pre>
        <h1> Message:{message.message}</h1>
        <button onClick={gmHandler}> GM </button>
        <button onClick={gnHandler}> GN </button>
    </>

}
export default Message