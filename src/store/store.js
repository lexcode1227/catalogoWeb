import { create } from 'zustand';

// Method to save in localStorage
const saveCartToLocalStorage = (cartItems) => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }

const useStore = create(set => ({
  // State properties
  cartItems: (() => {

    if (typeof window === 'undefined') {
      return []
    }

    const cart = localStorage.getItem('cart')
    if (cart) {
      return JSON.parse(cart)
    }

    return []
  })(),
  products: [],
  categories: [],

  // Methods to update the state
  addToCart: (product) => {
    set(state => {
      const updatedCartItems = [...state.cartItems, product];
      
      saveCartToLocalStorage(updatedCartItems);
      return {
        cartItems: updatedCartItems
      };
    });

  },
  removeFromCart: (productId) => {
    set(state => {
      const updatedCartItems = state.cartItems.filter(product => product._id !== productId);
      
      saveCartToLocalStorage(updatedCartItems);
      return {
        cartItems: updatedCartItems
      };
    });

  },
  setProducts: (products) => set(state => ({ ...state, products })),
  setCategories: (categories) => set(state => ({ ...state, categories })),
}));

export default useStore;
