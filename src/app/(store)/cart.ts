import { create } from "zustand";
import { Product } from "../../types";

interface State {
  cart: Product[];
  totalItems: number;
  totalPrice: number;
  isDrawerOpen: boolean;
}

interface Actions {
  addToCart: (Item: Product) => void;
  removeFromCart: (Item: Product) => void;
  clearCart: () => void;
  toggleDrawer: () => void;
}

export const useCartStore = create<State & Actions>((set, get) => ({
  cart: [],
  totalItems: 0,
  totalPrice: 0,
  isDrawerOpen: false,

  addToCart: (product: Product) => {
    const cart = get().cart;
    const cartItem = cart.find((item) => item.id === product.id);

    if (cartItem) {
      if (cartItem.quantity === cartItem.stock) {
        cartItem.isStockLeft = false;
        return;
      }

      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: (item.quantity as number) + 1 } : item
      );

      set((state) => ({
        cart: updatedCart,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + product.price,
      }));
    } else {
      const updatedCart = [...cart, { ...product, quantity: 1 }];

      set((state) => ({
        cart: updatedCart,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + product.price,
      }));
    }
  },

  removeFromCart: (product: Product) => {
    let cart = get().cart;
    const cartItem = cart.find((item) => item.id === product.id);

    product.isStockLeft = true;

    if (cartItem?.quantity === 1) {
      cart = cart.filter((item) => item.id !== product.id);
    } else {
      cart = cart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: (item.quantity as number) - 1,
            }
          : item
      );
    }

    set((state) => ({
      cart,
      totalItems: state.totalItems - 1,
      totalPrice: state.totalPrice - product.price,
    }));
  },

  clearCart: () => {
    set(() => ({
      cart: [],
      totalItems: 0,
      totalPrice: 0,
    }));
  },

  toggleDrawer: () => {
    set((state) => ({
      isDrawerOpen: !state.isDrawerOpen,
    }));
  },
}));
