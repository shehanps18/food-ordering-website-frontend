import { api } from "../../config/Api";
import {
    CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS,
    GET_USERS_ORDER_FAILURE, GET_USERS_ORDER_REQUEST, GET_USERS_ORDER_SUCCESS
} from "./ActionType";

export const createOrder = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: CREATE_ORDER_REQUEST });
        try {
            const { data } = await api.post("api/order", menu,
                {
                    headers: {
                        Authorization: `Bearer ${reqData.order}`,
                    },

                });
            console.log("create menu", data);
            dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
        } catch (error) {
            console.log("catch error", error);
            dispatch({ type: CREATE_ORDER_FAILURE, payload: error });
        }
    };

};
export const getUsersOrders = (jwt) => {
    return async (dispatch) => {
        dispatch({ type: GET_USERS_ORDER_REQUEST });
        try {
            const { data } = await api.post("api/order", menu,
                {
                    headers: {
                        Authorization: `Bearer ${reqData.order}`,
                    },
                });
            console.log("create menu", data);
            dispatch({ type: GET_USERS_ORDER_SUCCESS, payload: data });
        } catch (error) {
            console.log("catch error", error);
            dispatch({ type: GET_USERS_ORDER_FAILURE, payload: error });
        }
    };
};

