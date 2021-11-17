import {Provider} from "react-redux";

import {combineReducers, createStore} from "redux";

import {configureStore} from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";

import {Item, todoReducer} from "../bll/todo-reducer";

const rootReducer = combineReducers({
    boards: todoReducer
})

const initialGlobalState = {
    boards: {
        boards: [
            {id: 1, title: 'Users', items: [{id: 1, title: 'Viktor'},{id: 2, title: 'Anton'},{id: 3, title: 'Dima'}]},
            {id: 2, title: 'Mentors', items: [{id: 4, title: 'Dimych'},{id: 5, title: 'Ignat'}]}
        ],
        currentBoard: {
            id: 1, title: 'Users', items: [{id: 1, title: 'Viktor'}]
        },
        currentItem: {} as Item
    }
}

export const storyBookStore = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware),
})





export const ReduxStoreProviderDecorator = (story: any)=>{
    return <Provider store={storyBookStore}>
        {story()}
    </Provider>
}