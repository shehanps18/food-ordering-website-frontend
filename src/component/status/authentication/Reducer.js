import { error } from "yupp/util/logger"
import { ADD_TO_FAVOURITE_FALIUR, ADD_TO_FAVOURITE_REQUEST, ADD_TO_FAVOURITE_SUCCESS, GET_USER_FALIUR, GET_USER_REQUEST, LOGIN_FALIUR, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FALIUR, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType";
import { isPresentInFaviurite } from "../../config/Logic";

const initialState = {
    user: null,
    isLoading: false,
    error: null,
    jwt: null,
    favourite: [],
    success: null

}
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:
        case ADD_TO_FAVOURITE_REQUEST:
            return { ...state, isLoading: true, error: null, success: null }

        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state, isLoading: false,
                jwt: action.payload,
                success: "Register Success"
            };
        case ADD_TO_FAVOURITE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                favourite: isPresentInFaviurite(state.favourite, action.payload)
                    ? state.favourite.filter((item) => item.id !== action.payload.id)
                    : [action.payload, ...state.favourite]
            }
        case REGISTER_FALIUR:
        case LOGIN_FALIUR:
        case GET_USER_FALIUR:
        case ADD_TO_FAVOURITE_FALIUR:
            return {
                ...state, isLoading: false,
                error: action.payload,
                success: null
            }


        default:
            return state;
    }
}