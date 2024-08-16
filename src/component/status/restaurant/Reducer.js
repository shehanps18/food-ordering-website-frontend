import * as actionTypes from "./ActionType";

const initialState = {
    restaurants: [],
    usersRestaurant: null,
    restaurant: null,
    loading: false,
    error: null,
    events: [],
    restaurantEvents: [],
    categories: [],
};

const restaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_RESTAURANTS_REQUEST:
        case actionTypes.GET_ALL_EVENTS_REQUEST:
        case actionTypes.DELETE_RESTAURANTS_REQUEST:
        case actionTypes.UPDATE_RESTAURANTS_REQUEST:
        case actionTypes.GET_ALL_EVENTS_REQUEST:
        case actionTypes.CREATE_CATEGORY_REQUEST:
        case actionTypes.GET_RESTAURANTS_CATEGORY_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case actionTypes.CREATE_RESTAURANTS_SUCCESS:
            return {
                ...state,
                loading: false,
                usersRestaurant: action.payload
            };
        case actionTypes.GET_ALL_RESTAURANTS_SUCCESS:
            return {
                ...state,
                loading: false,
                restarants: action.payload,
            }
        case actionTypes.GET_RESTAURANTS_BY_ID_SUCCESS:
            return {
                ...state,
                laoding: false,
                restaurants: action.payload,
            };
        case actionTypes.GET_RESTAURANTS_BY_USER_ID_SUCCESS:
        case actionTypes.UPDATE_RESTAURANTS_STATUS_SUCCESS:
        case actionTypes.UPDATE_RESTAURANTS_SUCCESS:
            return {
                ...state,
                loading: false,
                usersRestaurant: action.payload,
            }
        case actionTypes.DELETE_RESTAURANTS_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false,
                restaurants: state.restaurants.filter(
                    (item) => item.id !== action.payload
                ),
                usersRestaurant: state.usersRestaurant.filter(
                    (item) => item.id !== action.payload
                ),
            };
        case actionTypes.CREATE_EVENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                events: [...state.events, action.payload],
                restaurantEvents: [...state.restaurantEvents, action.payload],
            };
        case actionTypes.GET_ALL_EVENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                restaurantEvents: action.payload,
            };
        case actionTypes.GET_RESTAURANTS_EVENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                restaurantEvents: action.payload,
            };
        case actionTypes.DELETE_EVENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                events: state.events.filter((item) => item.id !== action.payload),
                restaurantEvents: state.restaurantEvents.filter((item) => item.id !== action.payload),
            };
        case actionTypes.CREATE_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: [...state.categories, action.payload],
            };
        case actionTypes.GET_RESTAURANTS_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: action.payload,

            };
        case actionTypes.CREATE_RESTAURANTS_FAILURE:
        case actionTypes.GET_ALL_RESTAURANTS_FAILURE:
        case actionTypes.DELETE_RESTAURANTS_FAILURE:
        case actionTypes.UPDATE_RESTAURANTS_FAILURE:
        case actionTypes.GET_RESTAURANTS_BY_ID_FAILURE:
        case actionTypes.CREATE_EVENTS_FAILURE:
        case actionTypes.CREATE_CATEGORY_FAILURE:
        case actionTypes.GET_RESTAURANTS_CATEGORY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
            default:
                return state;
    }
};
 export default restaurantReducer;
