// import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./authentication/Reducer";
// import { thunk } from "redux-thunk";
// const rooteReducer = combineReducers({
//     auth: authReducer,
// });
//  export const store = legacy_createStore(rooteReducer,applyMiddleware(thunk));
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    auth: authReducer
  },
})