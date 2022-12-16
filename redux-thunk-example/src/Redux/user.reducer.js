// Reducer is a pure function it takes two arguments.
// 1) state
// 2) action

// Reducer is used to create/update the store based on action type


// We need to import action type from user.action.js file

import { USERREQ, USERSUCCESS, USERFAILURE, SELECTEDUSER } from "./user.action"

let initialState = { users: {}, message: "", sel_users: {} };


let userReducer = (state = initialState, action) => {

    let { type, payload } = action     // Introduced destructured object to define type and payload of action.

    switch (type) {
        case USERREQ:
            return { ...state }
        case USERSUCCESS:
            return { ...state, users: payload, message: "passed" }
        case USERFAILURE:
            return { ...state, message: payload }
        case SELECTEDUSER:
            return { ...state, sel_users: payload }
        default:
            return state

    }

}
export { userReducer }