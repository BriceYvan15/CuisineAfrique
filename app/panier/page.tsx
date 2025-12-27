"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/animations"

export default function PanierPage() {
    const { cart, removeItem, updateQuantity, clearCart } = useCart()

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    const deliveryFee = subtotal > 15000 ? 0 : 1500
    const total = subtotal + deliveryFee

    if (cart.length === 0) {
        return (
            <div className="min-h-screen bg-background">
                <Header />
                <main className="pt-20">
                    <div className="container mx-auto px-4 py-16 max-w-4xl">
                        <div className="text-center py-16">
                            <ShoppingBag className="w-24 h-24 mx-auto text-muted-foreground mb-6" />
                            <h1 className="text-3xl font-bold mb-4">Votre panier est vide</h1>
                            <p className="text-muted-foreground mb-8">
                                Découvrez nos délicieuses recettes et commencez à remplir votre panier !
                            </p>
                            <Link href="/menus">
                                <Button size="lg">
                                    Découvrir nos menus
                                </Button>
                            </Link>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-20">
                <div className="container mx-auto px-4 py-12 max-w-6xl">
                    <Link href="/menus" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
                        <ArrowLeft className="w-4 h-4" />
                        Continuer mes achats
                    </Link>

                    <h1 className="text-4xl font-bold mb-8">Mon Panier</h1>

                    <div className="grid lg:grid-cols-[1fr_400px] gap-8">
                        {/* Cart Items */}
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            className="space-y-4"
                        >
                            {cart.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white p-6 rounded-2xl border border-border/50 flex items-center gap-6"
                                >
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                                        {item.recipeName && (
                                            <p className="text-sm text-muted-foreground">
                                                Pour: {item.recipeName}
                                            </p>
                                        )}
                                        <p className="text-primary font-bold mt-2">{item.price} FCFA</p>
                                    </div>

                                    <div className="flex items-center gap-3 bg-muted/30 rounded-lg p-2">
                                        <button
                                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                            className="w-8 h-8 flex items-center justify-center bg-white rounded-md shadow-sm hover:text-primary disabled:opacity-50"
                                            disabled={item.quantity <= 1}
                                        >
                                            <Minus className="w-4 h-4" />
                                        </button>
                                        <span className="font-bold w-12 text-center">
                                            {item.quantity}
                                        </span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="w-8 h-8 flex items-center justify-center bg-white rounded-md shadow-sm hover:text-primary"
                                        >
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>

                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="text-muted-foreground hover:text-red-500 transition-colors"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            ))}

                            <button
                                onClick={clearCart}
                                className="text-sm text-muted-foreground hover:text-red-500 transition-colors"
                            >
                                Vider le panier
                            </button>
                        </motion.div>

                        {/* Order Summary */}
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.1 }}
                            className="lg:sticky lg:top-24 h-fit"
                        >
                            <div className="bg-white p-6 rounded-2xl border border-border/50 space-y-4">
                                <h2 className="text-2xl font-bold">Récapitulatif</h2>

                                <div className="space-y-3 py-4 border-y border-border">
                                    <div className="flex justify-between text-muted-foreground">
                                        <span>Sous-total</span>
                                        <span className="font-semibold">{subtotal.toLocaleString()} FCFA</span>
                                    </div>
                                    <div className="flex justify-between text-muted-foreground">
                                        <span>Livraison</span>
                                        <span className="font-semibold">
                                            {deliveryFee === 0 ? "Gratuite" : `${deliveryFee.toLocaleString()} FCFA`}
                                        </span>
                                    </div>
                                    {subtotal < 15000 && (
                                        <p className="text-xs text-accent">
                                            Ajoutez {(15000 - subtotal).toLocaleString()} FCFA pour la livraison gratuite
                                        </p>
                                    )}
                                </div>

                                <div className="flex justify-between text-xl font-bold">
                                    <span>Total</span>
                                    <span className="text-primary">{total.toLocaleString()} FCFA</span>
                                </div>

                                <Link href="/commande/livraison">
                                    <Button className="w-full" size="lg">
                                        Passer la commande
                                    </Button>
                                </Link>

                                <p className="text-xs text-center text-muted-foreground">
                                    Livraison gratuite dès 15.000 FCFA d'achats
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
