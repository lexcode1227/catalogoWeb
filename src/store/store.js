import { create } from 'zustand';

// Method to save in localStorage
const saveCartToLocalStorage = (cartItems, totalAmount) => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
    localStorage.setItem('total', JSON.stringify(totalAmount));
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
  totalAmount: (() => {

    if (typeof window === 'undefined') {
      return 0
    }

    const total = localStorage.getItem('total')

    if (total !== null ) {
      const totalLocalStorage = JSON.parse(total)
      return Number(totalLocalStorage) 
    }

    return 0
  })(),
  products: [],
  categories: [],

  // Methods to update the state
  addToCart: (product) => {
    set(state => {
      const updatedCartItems = [...state.cartItems, product];
      const totalPrice = (state.totalAmount + (product.price * product.quantity));
      
      saveCartToLocalStorage(updatedCartItems, totalPrice.toFixed(2));
      return {
        cartItems: updatedCartItems,
        totalAmount: totalPrice.toFixed(2), // Round to two decimal
      };
    });

  },
  removeFromCart: (productId) => {
    set(state => {
      const updatedCartItems = state.cartItems.filter(product => product.id !== productId);
      const removedItem = state.cartItems.find(product => product.id === productId);
      const newTotalAmount = state.totalAmount - removedItem?.price || 0;
      
      saveCartToLocalStorage(updatedCartItems,newTotalAmount);
      return {
        cartItems: updatedCartItems,
        totalAmount: newTotalAmount,
      };
    });

  },
  setProducts: (products) => set(state => ({ ...state, products })),
  setCategories: (categories) => set(state => ({ ...state, categories })),
}));

export default useStore;
