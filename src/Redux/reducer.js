import { TYPE } from "./action"; 

const initialState = {
    cart: [],
    orderHistory: [],
  };

  const Reducer = (state = initialState, action) => {
    if (action.type === TYPE.ADD_TO_CART) {
      
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
    }else if(action.type === TYPE.REMOVE_FROM_CART){
      
        return {
          ...state,
          cart: state.cart.filter(item => item.id !== action.payload),
        };
    }else if(action.type === TYPE.PLACE_ORDER){
      
        return {
          ...state,
          cart: [],
          orderHistory: [...state.orderHistory, { items: action.payload }],
        };
    }else{
      
        return state;
    
    }
  };
  
  export default Reducer;