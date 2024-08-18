import {api} from "../../config/Api"; 
import { CREATE_ORDER_REQUEST } from "./Reducer";

export const createMenuItem=(reqData)=>{
    return async (dispatch)=>{
        dispatch({type:CREATE_ORDER_REQUEST});
        try{
            const {data}= await api.post("api/admin/food",menu,
                {
                    headers: {
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