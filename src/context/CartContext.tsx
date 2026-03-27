import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { Product } from '../data/products';
import { categories } from '../data/products';

// Flatten all products for lookup
const allProducts: Record<string, Product> = {};
categories.forEach(cat => {
    cat.products.forEach(p => { allProducts[p.id] = p; });
});

export interface CartItem {
    product: Product;
    quantity: number;
}

interface CartContextValue {
    cartItems: CartItem[];
    cartCount: number;
    cartTotal: string;
    addToCart: (productId: string, qty?: number) => void;
    removeFromCart: (productId: string) => void;
    updateQty: (productId: string, qty: number) => void;
    clearCart: () => void;
    isInCart: (productId: string) => boolean;
    cartOpen: boolean;
    openCart: () => void;
    closeCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [cartOpen, setCartOpen] = useState(false);

    const addToCart = useCallback((productId: string, qty = 1) => {
        const product = allProducts[productId];
        if (!product) return;
        setCartItems(prev => {
            const existing = prev.find(i => i.product.id === productId);
            if (existing) {
                return prev.map(i =>
                    i.product.id === productId ? { ...i, quantity: i.quantity + qty } : i
                );
            }
            return [...prev, { product, quantity: qty }];
        });
    }, []);

    const removeFromCart = useCallback((productId: string) => {
        setCartItems(prev => prev.filter(i => i.product.id !== productId));
    }, []);

    const updateQty = useCallback((productId: string, qty: number) => {
        if (qty <= 0) {
            setCartItems(prev => prev.filter(i => i.product.id !== productId));
        } else {
            setCartItems(prev =>
                prev.map(i => i.product.id === productId ? { ...i, quantity: qty } : i)
            );
        }
    }, []);

    const clearCart = useCallback(() => setCartItems([]), []);

    const isInCart = useCallback(
        (productId: string) => cartItems.some(i => i.product.id === productId),
        [cartItems]
    );

    // Parse price string like "$195.25" → number
    function parsePrice(priceStr: string): number {
        return parseFloat(priceStr.replace(/[^0-9.]/g, '')) || 0;
    }

    const cartCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);
    const cartTotal = '$' + cartItems
        .reduce((sum, i) => sum + parsePrice(i.product.price) * i.quantity, 0)
        .toFixed(2);

    return (
        <CartContext.Provider value={{
            cartItems, cartCount, cartTotal,
            addToCart, removeFromCart, updateQty, clearCart, isInCart,
            cartOpen, openCart: () => setCartOpen(true), closeCart: () => setCartOpen(false),
        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart(): CartContextValue {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error('useCart must be used within a CartProvider');
    return ctx;
}
