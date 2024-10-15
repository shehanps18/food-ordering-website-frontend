import axios from "axios";

import {api} from "../../config/Api"
import { GET_RESTAURANTS_ORDER_FAILURE, GET_RESTAURANTS_ORDER_REQUEST,
     GET_RESTAURANTS_ORDER_SUCCESS, UPDATE_ORDER_STATUS_FAILURE, 
     UPDATE_ORDER_STATUS_REQUEST, UPDATE_ORDER_STATUS_SUCCESS } from "../restaurant order/ActionType";


export const updateOrderStatus = ({orderId,orderStatus,jwt})=>{
    return async(dispatch)=>{
        try{
            dispatch({type: UPDATE_ORDER_STATUS_REQUEST});
            const response = await api.put(
                `/api/admin/order/${id}/${orderStatus}`,{},{
                    headers: {
                        Authorization: `Bearer ${jwt}`,

                    },
                }
            );

            const updateOrder= response.data;

            console.log("update order", updateOrder);

            dispatch({
                type: UPDATE_ORDER_STATUS_SUCCESS,
                payload: updateOrder,
            });
        }catch(error){
            console.log("catch error",error);
            dispatch({type:UPDATE_ORDER_STATUS_FAILURE,error});
        }
    };
};

export const fetchRestaurantsOrder = ({restaurantId,orderStatus,jwt})=>{
    return async (dispatch)=>{
        try{
            dispatch({type:GET_RESTAURANTS_ORDER_REQUEST});
            const {data} = await api.get(
                `/api/admin/order/retaurant/${restaurantId}`,{
                    params: {order_status: orderStatus},
                    headers:{
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );
            const orders = data;
            console.log("restaurants order ----- ", orders);
            dispatch({
                type: GET_RESTAURANTS_ORDER_SUCCESS,
                payload: orders,
            });
        }catch(error){
            dispatch({type: GET_RESTAURANTS_ORDER_FAILURE,error});
        }
    };
};