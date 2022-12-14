// if i want to use multiple states then multiple reducer is required.
//  and for that we have to rootReducer, without rootReducer also we can use.

import { combineReducers } from "redux";
import {productReducer} from "./product.reducer"
import { messageReducer } from "../redux-files/message.reducer"

let rootReducer = combineReducers({product : productReducer, message: messageReducer})

export {rootReducer}