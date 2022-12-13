import { GM, GN } from "./message.action"

// Reducer is a pure function it takes two argument , state and action 

// Reducer create or update store based on action type

let initialState = {
    message: "Hello"
}

let messageReducer = (state = initialState, action) => {
    console.log(action)
    console.log(action.type)
    switch (action.type) {
        case GM:
            return { message: "Good Morning" }
        case GN:
            return { message: "Good Night" }
        default:
            return state
    }

}
export { messageReducer }