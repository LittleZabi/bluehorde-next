export default function cartReducer(state: any, action: any) {
  switch (action.type) {
    case "USER": {
      return state.user;
    }
    case "LOGIN": {
      return { ...state, user: action.payload };
    }
    case "SIGN-OUT": {
      return { ...state, user: null };
    }
    case "CART_ADD_ITEM": {
      const newItem = action.payload;
      console.log("red: ", newItem);
      return { ...state, cart: { items: state.cart.items + newItem } };
    }
    default:
      return state;
  }
}
