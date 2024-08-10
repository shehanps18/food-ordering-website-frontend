export const isPresentInFaviurite=(favourite,restaurant)=>{
    for(let item of favourite){
        if(restaurant.id===item.id){
            return true
        }
    }
    return false;
}