// import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./authentication/Reducer";
// import { thunk } from "redux-thunk";
// const rooteReducer = combineReducers({
//     auth: authReducer,
// });
//  export const store = legacy_createStore(rooteReducer,applyMiddleware(thunk));
import { configureStore } from '@reduxjs/toolkit'
import restaurantReducer from "./restaurant/Reducer";
import menuItemReducer from "./menu/Reducer";
import cartReducer from "./cart/Reducer";

// export const store = configureStore({
//   reducer: {
//     auth: authReducer
//   },
// })
export const store = configureStore({
    reducer: {
        auth: authReducer,
        restaurant: restaurantReducer,
        menu: menuItemReducer,
        cart:cartReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['GET_USER_FAILURE'], // Add any actions with non-serializable data here
                ignoredPaths: ['payload.error'] // Or add specific paths that contain non-serializable data
            }
        }),
});