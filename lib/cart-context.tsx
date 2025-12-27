"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

export type CartItem = {
    id: string
    name: string
    quantity: number
    unit?: string
    price: number
    recipeId: string
    recipeName: string
}

type CartContextType = {
    items: CartItem[]
    cart: CartItem[] // Alias for items
    toggleCart: () => void
    isCartOpen: boolean
    addItem: (item: CartItem) => void
    removeItem: (itemId: string) => void
    updateQuantity: (itemId: string, quantity: number) => void
    clearCart: () => void
    cartCount: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([])
    const [isCartOpen, setIsCartOpen] = useState(false)

    // Load cart from local storage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem("cuisine-facile-cart")
        if (savedCart) {
            try {
                setItems(JSON.parse(savedCart))
            } catch (e) {
                console.error("Failed to parse cart", e)
            }
        }
    }, [])

    // Save cart to local storage on change
    useEffect(() => {
        localStorage.setItem("cuisine-facile-cart", JSON.stringify(items))
    }, [items])

    const toggleCart = () => setIsCartOpen(prev => !prev)

    const addItem = (newItem: CartItem) => {
        setItems(prev => {
            const existing = prev.find(item => item.id === newItem.id && item.recipeId === newItem.recipeId)
            if (existing) {
                return prev.map(item =>
                    (item.id === newItem.id && item.recipeId === newItem.recipeId)
                        ? { ...item, quantity: item.quantity + newItem.quantity }
                        : item
                )
            }
            return [...prev, newItem]
        })
        // Open cart to show feedback
        setIsCartOpen(true)
    }

    const removeItem = (itemId: string) => {
        setItems(prev => prev.filter(item => item.id !== itemId))
    }

    const updateQuantity = (itemId: string, quantity: number) => {
        setItems(prev => prev.map(item =>
            item.id === itemId ? { ...item, quantity } : item
        ))
    }

    const clearCart = () => setItems([])

    const cartCount = items.length

    return (
        <CartContext.Provider value={{
            items,
            cart: items, // Alias for backward compatibility
            toggleCart,
            isCartOpen,
            addItem,
            removeItem,
            updateQuantity,
            clearCart,
            cartCount
        }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext)
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider")
    }
    return context
}
