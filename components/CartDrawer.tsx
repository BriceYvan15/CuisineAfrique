"use client"

import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { X, Trash2, ShoppingBasket } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

export function CartDrawer() {
    const { items, isCartOpen, toggleCart, removeItem, cartCount } = useCart()

    // Group items by recipe for better display? Or just list them?
    // Start with simple list

    const totalPrice = items.reduce((acc, item) => acc + (item.price * item.quantity), 0)

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleCart}
                        className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 bottom-0 w-full md:w-[450px] bg-background shadow-2xl z-[70] flex flex-col border-l"
                    >
                        <div className="p-6 border-b flex items-center justify-between">
                            <h2 className="text-2xl font-bold flex items-center gap-2">
                                <ShoppingBasket className="text-primary" />
                                Mon Panier <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-sm">{cartCount}</span>
                            </h2>
                            <Button variant="ghost" size="icon" onClick={toggleCart}>
                                <X className="w-5 h-5" />
                            </Button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-muted-foreground text-center">
                                    <ShoppingBasket className="w-16 h-16 mb-4 opacity-20" />
                                    <p className="text-lg font-medium">Votre panier est vide</p>
                                    <p className="text-sm">Ajoutez des recettes délicieuses pour commencer !</p>
                                    <Button variant="ghost" className="mt-4 text-primary" onClick={toggleCart}>
                                        Explorer les menus
                                    </Button>
                                </div>
                            ) : (
                                items.map((item, index) => (
                                    <div key={`${item.id}-${index}`} className="flex gap-4 p-4 bg-muted/30 rounded-xl group relative">
                                        <div className="w-16 h-16 bg-white rounded-lg border flex items-center justify-center text-2xl">
                                            🥗
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-bold">{item.name}</p>
                                            <p className="text-xs text-muted-foreground mb-1">Recette: {item.recipeName}</p>
                                            <p className="text-sm font-medium text-primary">
                                                {item.quantity} {item.unit}
                                            </p>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="text-muted-foreground hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity absolute top-2 right-2"
                                            onClick={() => removeItem(item.id)}
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    </div>
                                ))
                            )}
                        </div>

                        {items.length > 0 && (
                            <div className="p-6 border-t bg-muted/10 space-y-4">
                                <div className="flex justify-between items-center text-lg font-bold">
                                    <span>Total estimé</span>
                                    <span>{totalPrice.toLocaleString()} FCFA</span>
                                </div>
                                <p className="text-xs text-muted-foreground text-center">
                                    Frais de livraison calculés à l'étape suivante.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <Button variant="outline" size="lg" onClick={toggleCart}>
                                        Continuer
                                    </Button>
                                    <Link href="/panier">
                                        <Button size="lg" className="w-full" onClick={toggleCart}>
                                            Commander
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
