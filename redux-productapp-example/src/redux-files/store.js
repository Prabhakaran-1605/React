import {composeWithDevTools} from "redux-devtools-extension"
import { rootReducer } from "./rootReducer"
import {legacy_createStore} from "redux"


// Create the store based on reducer.

// composewithdevtools() is used to debugging the redux store.

let store = legacy_createStore(rootReducer,composeWithDevTools())

export {store}