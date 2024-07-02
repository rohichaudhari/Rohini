
export const ADD = (item) => {
    return {
        type:"ADD_TO_CART",
        payload:item
    }
}


export const REMOVE= (id) => {
    return {
        type:"REMOVE_TO_CART",
        payload:id
    }
}
export const WADD = (item) => {
    return {
        type:"WADD_TO_CART",
        payload:item
    }
}


export const WREMOVE= (id) => {
    return {
        type:"WREMOVE_TO_CART",
        payload:id
    }
}
//Cart item increament
// export const CART_QUTY_ICREAMENT = (item)=>{
//     return{
//         type:"CART_ITEM_ICREAMENT",
//         payload:item
//     }
// }
//Cart item decreament
// export const CART_QUTY_DECREAMENT = (item)=>{
//     return{
//         type:"CART_ITEM_DECREAMENT",
//         payload:item
//     }
// }
export const UPDATE_QUANTITY = (id , quantity) => {
    return {
        type : "UPDATE_QUANTITY",
        payload : {id , quantity}
    }
}