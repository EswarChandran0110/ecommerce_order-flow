export const TYPE ={
    ADD_TO_CART : "ADD_TO_CART",
    REMOVE_FROM_CART:"REMOVE_FROM_CART",
    PLACE_ORDER:"PLACE_ORDER"
};

export const addToCart = (item) => {
    return {
      type: 'ADD_TO_CART',
      payload: item,
    };
  };
  
  export const removeFromCart = (itemId) => {
    return {
      type: 'REMOVE_FROM_CART',
      payload: itemId,
    };
  };
  
  export const placeOrder = (cartItems) => {
    return {
      type: 'PLACE_ORDER',
      payload: cartItems,
    };
  };