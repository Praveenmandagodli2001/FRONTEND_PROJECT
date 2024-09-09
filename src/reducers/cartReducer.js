import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/CartActions';

// Loading cart items from localStorage and we retrive a itmennn
const loadCartFromLocalStorage = () => {
  const cartItems = localStorage.getItem('cartItems');
  return cartItems ? JSON.parse(cartItems) : [];
};

// Saving a  cart items to localStorage
const saveCartToLocalStorage = (cartItems) => {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

const initialState = {
  cartItems: loadCartFromLocalStorage(),
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const updatedCartAdd = [...state.cartItems, action.payload];
      saveCartToLocalStorage(updatedCartAdd);
      return {
        ...state,
        cartItems: updatedCartAdd,
      };
    case REMOVE_FROM_CART:
      const updatedCartRemove = state.cartItems.filter(item => item.id !== action.payload);
      saveCartToLocalStorage(updatedCartRemove);
      return {
        ...state,
        cartItems: updatedCartRemove,
      };
    default:
      return state;
  }
};

export default cartReducer;
