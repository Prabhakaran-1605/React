import {legacy_createStore} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import { rootReducer } from "./rootreducer"
let store = legacy_createStore (rootReducer,composeWithDevTools())
export {store}