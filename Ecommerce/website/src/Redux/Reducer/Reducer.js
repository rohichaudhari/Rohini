const initial_state = {
    carts: [],
    whish : [],
    quantities: [],
};

export const cartreducer = (state = initial_state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                carts: [...state.carts, action.payload]
            };

        case "REMOVE_TO_CART"  : 
            const data = state.carts.filter((el)=> el.cvalue.id !== action.payload);
            console.log(data,"=====");
            return {
                ...state,
                carts: data,
            };
            // case "CART_ITEM_ICREAMENT":{
            //     let updateQunty =  state.carts.map(item =>{
            //         if(item.id === action.payload.id){
            //             return{
            //                 ...item,
            //                 quantity: item.quantity+1
            //             };
            //         }
            //         return item;
            //     })
            //     return{
            //         ...state,
            //         carts:updateQunty
            //     };
            // }
    
            // case "CART_ITEM_DECREAMENT":{
            //     let updateQunty = state.carts;
            //     if(action.payload.quantity !== 1){
            //         updateQunty = state.carts.map(item =>{
            //             if(item.id === action.payload.id){
            //                 return{
            //                     ...item,
            //                     quantity: item.quantity -1
            //                 };
            //             }
            //             return item;
            //         });
            //     }
            //     return {
            //         ...state,
            //         carts:updateQunty
            //     };
            // }

            case "UPDATE_QUANTITY":
                return {
                    ...state,
                    quantities: {
                        ...state.quantities,
                        [action.payload.id]: action.payload.quantity
                    }
                }
        
        default:
            return state;
    }
}


export const wishreducer = (state = initial_state, action) => {
    switch (action.type) {
        case "WADD_TO_CART":
            return {
                ...state,
                whish: [...state.whish, action.payload]
            };

        case "WREMOVE_TO_CART"  : 
            const data = state.whish.filter((el)=> el.cvalue.id !== action.payload);
            console.log(data,"=====");
            return {
                ...state,
                whish: data,
            };
        default:
            return state;
    }
}

