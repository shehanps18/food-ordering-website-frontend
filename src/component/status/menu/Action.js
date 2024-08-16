import {api, Api} from "../../config/Api"
import{
    DELETE_MENU_ITEM_FAILURE,
    DELETE_MENU_ITEM_SUCCESS,
    DELETE_MENU_ITEM_REQUEST,
    SEARCH_MENU_ITEM_FAILURE,
    SEARCH_MENU_ITEM_SUCCESS,
    SEARCH_MENU_ITEM_REQUEST,
    UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE,
    UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS,
    UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST,
} from "./ActionType"
import { CREATE_MENU_ITEM_FAILURE, CREATE_MENU_ITEM_REQUEST, CREATE_MENU_ITEM_SUCCESS, GET_MENU_ITEMS_BY_RESTAURANTS_ID_FAILURE, GET_MENU_ITEMS_BY_RESTAURANTS_ID_REQUEST, GET_MENU_ITEMS_BY_RESTAURANTS_ID_SUCCESS } from "./Reducer"

export const createMenuItem=({menu,jwt})=>{
    return async (dispatch)=>{
        dispatch({type:CREATE_MENU_ITEM_REQUEST});
        try{
            const {data}= await Api.post("api/admin/food",menu,
                {
                    header: {
                        Authorization:`Bearer ${jwt}`,
                    },

                });
                console.log("create menu",data);
                dispatch({type:CREATE_MENU_ITEM_SUCCESS,payload:data});
        }catch(error){
            console.log("catch error",error);
            dispatch({type:CREATE_MENU_ITEM_FAILURE,payload:error});
        }
    };
};

export const getMenuItemsByRestaurantId=(reqData)=>{
    return async (dispatch)=>{
        dispatch({type:GET_MENU_ITEMS_BY_RESTAURANTS_ID_REQUEST});
        try{
            const {data}= await api.get(`/api/food/restaurant/${reqData.restaurantId}?vegetarian=${
                reqData.vegetarian}&nonveg=${reqData.nonveg}
                &seasonal=${reqData.seasonal}&food_category=${reqData.foodCategory}`,
            {
                headers:{
                    Authorization: `Bearer ${reqData.jwt}`,
                },
            });
            console.log("menu item by retaurants ",data);
            dispatch({type:GET_MENU_ITEMS_BY_RESTAURANTS_ID_SUCCESS,payload:data});
        }catch(error){
            dispatch({type:GET_MENU_ITEMS_BY_RESTAURANTS_ID_FAILURE,payload:error});
        }
    };
};

export const searchMenuItem=({keyword,jwt})=>{
    return async (dispatch)=>{
        dispatch({type:SEARCH_MENU_ITEM_REQUEST});
        try{
            const{data}=await api.get(`api/food/search?name=${keyword}`,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },

            });
            console.log("data...........",data);
            dispatch({type:SEARCH_MENU_ITEM_SUCCESS,payload:data});
        }catch(error){
            dispatch({type:SEARCH_MENU_ITEM_FAILURE,payload:error})
        }
    };
};
