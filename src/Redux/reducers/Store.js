// Redux Store

import { applyMiddleware, createStore } from "redux"
import thunk from "../thunk/reduxThunk";
import { Root } from "./Root"

export const Store = () => {
    return createStore(Root,applyMiddleware(thunk));
}