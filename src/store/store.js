import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {customerReducer} from "../reducers/userReducer";


const initialState ={
    customers: '',
    message: ''
}


export const store = createStore(customerReducer, initialState, composeWithDevTools(applyMiddleware(thunk)))