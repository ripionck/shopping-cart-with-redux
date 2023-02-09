import {
  CLEAR_CART,
  DECREASE,
  GET_TOTAL,
  INCREASE,
  REMOVE,
  TOGGLE_AMOUNT,
} from "./actions";
// items
import cartItems from "./cart-items";

//initial store
const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0,
};

//reducer
function reducer(state = initialStore, action) {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === DECREASE) {
    // let temCart = [];
    // if (action.payload.amount === 1) {
    //   temCart = state.cart.filter(
    //     (cartItem) => cartItem.id !== action.payload.id
    //   );
    // } else {
    //   temCart = state.cart.map((cartItem) => {
    //     if (cartItem.id === action.payload.id) {
    //       cartItem = { ...cartItem, amount: cartItem.amount - 1 };
    //     }
    //     return cartItem;
    //   });
    // }

    let temCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        cartItem = { ...cartItem, amount: cartItem.amount - 1 };
      }
      return cartItem;
    });
    return { ...state, cart: temCart };
  }

  if (action.type === INCREASE) {
    let temCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        cartItem = { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: temCart };
  }

  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id),
    };
  }

  if (action.type === GET_TOTAL) {
    console.log("Get total");
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      { total: 0, amount: 0 }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }

  if (action.type === TOGGLE_AMOUNT) {
    return {
      ...state,
      cart: state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          if (action.payload.toggle === "inc") {
            return (cartItem = { ...cartItem, amount: cartItem.amount + 1 });
          }
          if (action.payload.toggle === "dec") {
            return (cartItem = { ...cartItem, amount: cartItem.amount - 1 });
          }
        }
        return cartItem;
      }),
    };
  }
  return state;

  //   switch (action.type) {
  //     case CLEAR_CART:
  //       return { ...state, cart: [] };
  //     default:
  //       return state;
  //   }
}

export default reducer;
