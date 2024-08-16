
import {
    ADD_TO_FAVOURITE_FALIUR, ADD_TO_FAVOURITE_REQUEST,
    ADD_TO_FAVOURITE_SUCCESS, GET_USER_FALIUR, GET_USER_REQUEST,
    GET_USER_SUCCESS,
    LOGIN_FALIUR, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT,
    REGISTER_FALIUR, REGISTER_REQUEST, REGISTER_SUCCESS
} from "./ActionType"
import axios from "axios"
import { api, API_URL } from "../../config/Api"

export const registerUser = (reqData) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST })
    try {
        const { data } = await axios.post(`${API_URL}/auth/signup`, reqData.userData)
        if (data.jwt) localStorage.setItem("jwt", data.jwt);
        if (data.role === "ROLE_RESTAURANT_OWNER") {
            reqData.navigate("/admin/reataurant")
        }
        else {
            reqData.navigate("/")
        }
        dispatch({ type: REGISTER_SUCCESS, payload: data.jwt })
        console.log("register success", data)
    } catch (error) {
        dispatch({ type: REGISTER_FALIUR, payload: error })
        console.log("error", error)

    }
}
export const loginUser = (reqData) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST })
    try {
        const { data } = await axios.post(`${API_URL}/auth/signin`, reqData.userData)
        if (data.jwt) localStorage.setItem("jwt", data.jwt);
        if (data.role === "ROLE_RESTAURANT_OWNER") {
            reqData.navigate("/admin/restaurant")
        }
        else {
            reqData.navigate("/")
        }
        dispatch({ type: LOGIN_SUCCESS, payload: data.jwt })

    } catch (error) {
        dispatch({ type: LOGIN_FALIUR, payload: error })
        console.log("error", error)

    }
}

// export const getUser = (jwt) => async (dispatch) => {
//     dispatch({ type: GET_USER_REQUEST })
//     try {
//         const { data } = await api.get(`/api/users/profile`, {
//             headers: {
//                 Authorization: `Bearer ${jwt}`
//             }
//         })
//         dispatch({ type: REGISTER_SUCCESS, payload: data })
//         console.log("register success", data)

//     } catch (error) {
//         dispatch({ type: GET_USER_FALIUR, payload: error })
//         console.log("error", error)

//     }
// }

export const getUser = (jwt) => async (dispatch) => {
    dispatch({ type: GET_USER_REQUEST });
    try {
        const { data } = await api.get(`/api/users/profile`, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });
        dispatch({ type: GET_USER_SUCCESS, payload: data });
    } catch (error) {
        // Extract only relevant information from the error
        const errorMessage = error.response ? error.response.data.message : error.message;
        dispatch({ type: GET_USER_FALIUR, payload: errorMessage });
    }
};


export const addToFavourite = ({ jwt, restaurantId }) => async (dispatch) => {
    dispatch({ type: ADD_TO_FAVOURITE_REQUEST })
    try {
        const { data } = await axios.put(`/api/restaurants/${restaurantId}/add-favourite`, {}, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })

        dispatch({ type: ADD_TO_FAVOURITE_SUCCESS, payload: data })
        console.log("added to favourite")
    } catch (error) {
        dispatch({ type: ADD_TO_FAVOURITE_FALIUR, payload: error })
        console.log("error", error)

    }
}

export const logout = () => async (dispatch) => {
   
    try {
        localStorage.clear();
        dispatch({ type: LOGOUT })
        console.log("logout success")
    } catch (error) {
        console.log("error", error)

    }
}
