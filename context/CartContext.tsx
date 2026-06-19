"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// --- TYPES DEFINITION ---
export interface CartItem {
  id: number;
  brand?: string;
  name: string;
  price: number;
  image: string;
  category?: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: any) => void;
  updateQty: (id: number, delta: number) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
  totalPrice: number;
}

// Create the context base
const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // 1. LOAD CART FROM STORAGE ON INITIAL MOUNT
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("printer_service_cart");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error("Failed to load cart data from machine storage:", error);
    } finally {
      setIsInitialized(true);
    }
  }, []);

  // 2. SAVE TO STORAGE WHENEVER CART CHANGES
  useEffect(() => {
    if (!isInitialized) return; // Prevent overwriting with empty array before load
    try {
      localStorage.setItem("printer_service_cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Failed to sync cart data to storage matrix:", error);
    }
  }, [cart, isInitialized]);

  // --- ENGINE WORKFLOWS ---

  // Add Item
  const addToCart = (product: any) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Product mapping maps perfectly back to code specs
      return [
        ...prevCart,
        {
          id: product.id,
          brand: product.brand,
          name: product.name,
          price: product.price,
          image: product.image,
          category: product.category,
          quantity: 1,
        },
      ];
    });
  };

  // Update Specific Quantity Delta
  const updateQty = (id: number, delta: number) => {
  setCart((prevCart) =>
    prevCart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + delta }
          : item
      )
      .filter((item) => item.quantity > 0)
  );
};

  // Remove Single Entry
  const removeItem = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Wipe Slate Clear (e.g. after successful deployment checkout execution)
  const clearCart = () => {
    setCart([]);
  };

  // Derived Fleet Grand Valuation Matrix
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQty,
        removeItem,
        clearCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook helper for frictionless workspace consumption
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be executed from internal wrap bounds of a CartProvider layout wrapper.");
  }
  return context;
}