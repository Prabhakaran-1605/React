import {composeWithDevTools} from "redux-devtools-extension"
import { rootReducer } from "./rootReducer"
import {legacy_createStore as createStore} from "redux"


// Create the store based on reducer.

let store = createStore(rootReducer,composeWithDevTools())

export {store}