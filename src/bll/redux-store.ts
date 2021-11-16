import {combineReducers, compose} from "redux";
import thunkMiddleware from 'redux-thunk';
import {todoReducer} from "./todo-reducer";
import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import {ActionCreatorsMapObject, bindActionCreators} from "redux";
import {useMemo} from "react";

const rootReducer = combineReducers({
    boards: todoReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware),
    devTools: (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
})


// const store = createStore(
//     reducer, /* preloadedState, */
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );


export type AppRootStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store

type AppDispatchType = typeof store.dispatch
export const useAppDispatch = ()=> useDispatch<AppDispatchType>()
export function useActions<T extends ActionCreatorsMapObject<any>>(actions:T){
    const dispatch = useAppDispatch()

    const boundActions = useMemo(()=>{
        return bindActionCreators(actions,dispatch)
    }, [])
    return boundActions
}