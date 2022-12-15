/* Step to be followed in global file which is store file

1st Step: 
At first we need to import applyMiddleware function from Redux Dependencies

2nd Step: 
Install required packages
npm i redux - thunk 
npm i redux - logger
 */


import { legacy_createStore,applyMiddleware } from "redux"
// import legacy_createstore to create a store . 
// store is a global file where we can store multiple states
import { userReducer } from "./user.reducer"
// import userReducer to create/ update the store 
import { composeWithDevTools } from "redux-devtools-extension"
// import composeWithDevTools to debug the state in redux devtool extension
import thunk from "redux-thunk"
import logger from "redux-logger"

let store = legacy_createStore(userReducer, composeWithDevTools(applyMiddleware(logger,thunk)))


// Redux Thunk and logger is a middleware used to invoke rest API in redux action

export {store}
