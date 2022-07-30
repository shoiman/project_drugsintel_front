import {GET_USER} from "../actions/userActions";

// const defaultState = {
//     customers: '',
//     message:''
// }

export const customerReducer = (state, action) => {
    switch (action.type) {

        case "GET_USER":
            //...state.customers- разворачиваем старое состояние,
            //action.payload - добавляем новый объект в конец массива который передаем через экшн
            return {...state, customers: action.payload}
        case "GET_MESSAGE":
            //...state.customers- разворачиваем старое состояние,
            //action.payload - добавляем новый объект в конец массива который передаем через экшн
            return {...state.message, message: action.payload}

        default:
            return state

    }
}