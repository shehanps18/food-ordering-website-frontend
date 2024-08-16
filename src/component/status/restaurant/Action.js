import { api } from "../../../component/config/Api"
import {
    CREATE_CATEGORY_SUCCESS,
    CREATE_CATEGORY_FAILURE,
    CREATE_CATEGORY_REQUEST,
    CREATE_EVENTS_FAILURE,
    CREATE_EVENTS_REQUEST,
    CREATE_EVENTS_SUCCESS,
    CREATE_RESTAURANT_FAILURE,
    CREATE_RESTAURANT_REQUEST,
    CREATE_RESTAURANT_SUCCESS,
    GET_ALL_RESTAURANTS_REQUEST,
    GET_ALL_RESTAURANTS_SUCCESS,
    GET_ALL_RESTAURANTS_FAILURE,
    DELETE_RESTAURANTS_FAILURE,
    DELETE_RESTAURANTS_REQUEST,
    DELETE_RESTAURANTS_SUCCESS,
    UPDATE_RESTAURANTS_BY_ID_REQUEST,
    UPDATE_RESTAURANTS_BY_ID_SUCCESS,
    UPDATE_RESTAURANTS_BY_ID_FAILURE,
    GET_RESTAURANTS_BY_USER_ID_REQUEST,
    GET_RESTAURANTS_BY_USER_ID_FAILURE,
    GET_RESTAURANTS_BY_USER_ID_SUCCESS,
    GET_ALL_EVENTS_REQUEST,
    GET_ALL_EVENTS_SUCCESS,
    GET_ALL_EVENTS_FAILURE,
    DELETE_EVENTS_FAILURE,
    DELETE_EVENTS_SUCCESS,
    DELETE_EVENTS_REQUEST,
    GET_RESTAURANTS_EVENTS_FAILURE,
    GET_RESTAURANTS_EVENTS_SUCCESS,
    GET_RESTAURANTS_EVENTS_REQUEST,
    GET_RESTAURANTS_CATEGORY_REQUEST,
    GET_RESTAURANTS_CATEGORY_SUCCESS,
    GET_RESTAURANTS_CATEGORY_FAILURE,
    GET_RESTAURANTS_BY_ID_FAILURE,
    GET_RESTAURANTS_BY_ID_SUCCESS,
    GET_RESTAURANTS_BY_ID_REQUEST,
    UPDATE_RESTAURANTS_STATUS_REQUEST,
    UPDATE_RESTAURANTS_STATUS_SUCCESS,
    UPDATE_RESTAURANTS_STATUS_FAILURE

} from "./ActionType"
import { type } from "os";

export const getAllRestaurantAction = (token) => {
    return async (dispatch) => {
        dispatch({ type: GET_ALL_RESTAURANTS_REQUEST });
        try {
            const { data } = await api.get("api/restaurant", {
                headers: {
                    Authorization: `Bearer ${token}`,

                },
            });
            dispatch({ type: GET_ALL_RESTAURANTS_SUCCESS, payload: data })
            console.log("All restaurant", data);

        } catch (error) {
            console.log("catch error", error)
            dispatch({ type: GET_ALL_RESTAURANTS_FAILURE, payload: error })
        }
    }
}

export const getRestaurantById = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: GET_RESTAURANTS_BY_ID_REQUEST });
        try {
            const response = await api.get(`api/restaurant/${reqData.restaurantId}`, {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`,
                },
            });
            dispatch({ type: GET_RESTAURANTS_BY_ID_SUCCESS, payload: response.data })
            console.log("All restaurant", response.data );

        } catch (error) {
            console.log("catch error", error)
            dispatch({ type: GET_RESTAURANTS_BY_ID_FAILURE, payload: error })
        }
    }
}

export const getRestaurantByUserID = (jwt) => {
    return async (dispatch) => {
        dispatch({ type: GET_RESTAURANTS_BY_USER_ID_REQUEST });
        try {
            const response = await api.get(`api/admin/restaurant/user`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            console.log("get restaurant by user id ", data);
            dispatch({ type: GET_RESTAURANTS_BY_USER_ID_SUCCESS, payload: data })

        } catch (error) {
            console.log("catch error", error)
            dispatch({ type: GET_RESTAURANTS_BY_USER_ID_FAILURE, payload: error })
        }
    }
}

export const createRestaurant = (reqData) => {
    console.log("token....... ", reqData.token);
    return async (dispatch) => {
        dispatch({ type: CREATE_RESTAURANT_REQUEST });
        try {
            const { data } = await api.post(`api/admin/restaurant`, reqData.data, {
                headers: {
                    Authorization: `Bearer ${reqData.token}`,
                },
            });
            dispatch({ type: CREATE_RESTAURANT_SUCCESS, payload: data })
            console.log("create restaurant ", data);

        } catch (error) {
            console.log("catch error", error)
            dispatch({ type: CREATE_RESTAURANT_FAILURE, payload: error })
        }
    };
}

export const updateRestaurant = (restaurantId, restaurantData, jwt) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_RESTAURANTS_BY_ID_REQUEST });
        try {
            const res = await api.put(`api/admin/restaurant/${restaurantId}`,
                restaurantData,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                });
            dispatch({ type: UPDATE_RESTAURANTS_BY_ID_SUCCESS, payload: res.data })
        } catch (error) {

            dispatch({ type: UPDATE_RESTAURANTS_BY_ID_FAILURE, payload: error })
        }
    };
}

export const deleteRestaurant = (restaurantId, jwt) => {
    return async (dispatch) => {
        dispatch({ type: DELETE_RESTAURANTS_REQUEST });
        try {
            const res = await api.delete(`api/admin/restaurant/${restaurantId}`,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                });
            console.log("delete restaurant", res.data)
            dispatch({ type: DELETE_RESTAURANTS_SUCCESS, payload: restaurantId })
        } catch (error) {

            dispatch({ type: DELETE_RESTAURANTS_FAILURE, payload: error })
        }
    };
}

export const updateRestaurantStatus = (restaurantId, jwt) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_RESTAURANTS_STATUS_REQUEST });
        try {
            const res = await api.put(`api/admin/restaurant/${restaurantId}/status`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                });
            console.log("response ", res.data)
            dispatch({ type: UPDATE_RESTAURANTS_STATUS_SUCCESS, payload: res.data })
        } catch (error) {
            console.log("error ", error)
            dispatch({ type: UPDATE_RESTAURANTS_STATUS_FAILURE, payload: error })
        }
    };
}

export const createEventAction = ({data,jwt,restaurantId}) => {
    return async (dispatch) => {
        dispatch({ type:CREATE_EVENTS_REQUEST });
        try {
            const res = await api.post(`api/admin/event/restaurant/${restaurantId}`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                });
                console.log("create event ", res.data);
            dispatch({ type: CREATE_EVENTS_SUCCESS, payload: res.data});
        } catch (error) {
            console.log("catch ", error);
            dispatch({ type: CREATE_EVENTS_FAILURE, payload: error })
        }
    };
}

export const getAllEvents = ({jwt}) => {
    return async (dispatch) => {
        dispatch({ type:GET_ALL_EVENTS_REQUEST });
        try {
            const res = await api.get(`api/admin/events`,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                });
                console.log("get all event ", res.data);
            dispatch({ type: GET_ALL_EVENTS_SUCCESS, payload: res.data});
        } catch (error) {
            dispatch({ type: GET_ALL_EVENTS_FAILURE, payload: error })
        }
    };
}

export const deleteEventAction = ({eventId,jwt}) => {
    return async (dispatch) => {
        dispatch({ type:DELETE_EVENTS_REQUEST });
        try {
            const res = await api.delete(`api/admin/event/${eventId}`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                });
                console.log("delete event ", res.data);
            dispatch({ type: DELETE_EVENTS_SUCCESS, payload: eventId});
        } catch (error) {
            console.log("catch ", error);
            dispatch({ type: DELETE_EVENTS_FAILURE, payload: error })
        }
    };
}

export const getRestaurantEvent = ({restaurantId,jwt}) => {
    return async (dispatch) => {
        dispatch({ type:GET_RESTAURANTS_EVENTS_REQUEST });
        try {
            const res = await api.get(`api/admin/event/restaurant/${restaurantId}`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                });
                console.log("get restaurant event ", res.data);
            dispatch({ type: GET_RESTAURANTS_EVENTS_SUCCESS, payload: res.data});
        } catch (error) {
            console.log("catch ", error);
            dispatch({ type: GET_RESTAURANTS_EVENTS_FAILURE, payload: error })
        }
    };
}

export const createCategoryAction = ({reqData,jwt}) => {
    return async (dispatch) => {
        dispatch({ type:CREATE_CATEGORY_REQUEST });
        try {
            const res = await api.post(`api/admin/category`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                });
                console.log("create category ", res.data);
            dispatch({ type: CREATE_CATEGORY_SUCCESS, payload: res.data});
        } catch (error) {
            console.log("catch ", error);
            dispatch({ type: CREATE_CATEGORY_FAILURE, payload: error })
        }
    };
}

export const getRestaurantsCategory = ({jwt,restaurantId}) => {
    return async (dispatch) => {
        dispatch({ type:GET_RESTAURANTS_CATEGORY_REQUEST });
        try {
            const res = await api.get(`api/category/restaurant/${restaurantId}`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                });
                console.log("get restaurants category ", res.data);
            dispatch({ type: GET_RESTAURANTS_CATEGORY_SUCCESS, payload: res.data});
        } catch (error) {
            dispatch({ type: GET_RESTAURANTS_CATEGORY_FAILURE, payload: error })
        }
    };
}