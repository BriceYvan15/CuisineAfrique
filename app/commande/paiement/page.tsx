"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/animations"
import { CreditCard, Smartphone, Banknote, ArrowLeft, Check } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function PaiementPage() {
    const [paymentMethod, setPaymentMethod] = useState<string>("mobile-money")

    // Mock cart total
    const total = 8500

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-20">
                <div className="container mx-auto px-4 py-12 max-w-6xl">
                    <Link href="/commande/livraison" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
                        <ArrowLeft className="w-4 h-4" />
                        Retour aux informations de livraison
                    </Link>

                    <div className="mb-8">
                        <h1 className="text-4xl font-bold mb-2">Paiement</h1>
                        <p className="text-muted-foreground">Choisissez votre mode de paiement</p>
                    </div>

                    {/* Progress Indicator */}
                    <div className="flex items-center justify-center mb-12">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center">
                                    <Check className="w-5 h-5" />
                                </div>
                                <span className="text-sm font-medium text-accent">Livraison</span>
                            </div>
                            <div className="w-16 h-0.5 bg-accent"></div>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                                <span className="text-sm font-medium">Paiement</span>
                            </div>
                            <div className="w-16 h-0.5 bg-border"></div>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center font-bold">3</div>
                                <span className="text-sm text-muted-foreground">Confirmation</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-[1fr_400px] gap-8">
                        {/* Payment Methods */}
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            className="space-y-4"
                        >
                            {/* Mobile Money */}
                            <div
                                onClick={() => setPaymentMethod("mobile-money")}
                                className={`bg-white p-6 rounded-2xl border-2 cursor-pointer transition-all ${paymentMethod === "mobile-money" ? "border-primary shadow-lg" : "border-border/50"
                                    }`}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                                        <Smartphone className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-lg">Mobile Money</h3>
                                        <p className="text-sm text-muted-foreground">Orange Money, MTN, Moov, Wave</p>
                                    </div>
                                    {paymentMethod === "mobile-money" && (
                                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                                            <Check className="w-4 h-4 text-white" />
                                        </div>
                                    )}
                                </div>

                                {paymentMethod === "mobile-money" && (
                                    <div className="space-y-4 pt-4 border-t border-border">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Opérateur</label>
                                            <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                                                <option value="orange">Orange Money</option>
                                                <option value="mtn">MTN Mobile Money</option>
                                                <option value="moov">Moov Money</option>
                                                <option value="wave">Wave</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Numéro de téléphone</label>
                                            <Input type="tel" placeholder="+225 XX XX XX XX XX" />
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Credit Card */}
                            <div
                                onClick={() => setPaymentMethod("card")}
                                className={`bg-white p-6 rounded-2xl border-2 cursor-pointer transition-all ${paymentMethod === "card" ? "border-primary shadow-lg" : "border-border/50"
                                    }`}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                                        <CreditCard className="w-6 h-6 text-blue-500" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-lg">Carte bancaire</h3>
                                        <p className="text-sm text-muted-foreground">Visa, Mastercard</p>
                                    </div>
                                    {paymentMethod === "card" && (
                                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                                            <Check className="w-4 h-4 text-white" />
                                        </div>
                                    )}
                                </div>

                                {paymentMethod === "card" && (
                                    <div className="space-y-4 pt-4 border-t border-border">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Numéro de carte</label>
                                            <Input placeholder="1234 5678 9012 3456" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">Date d'expiration</label>
                                                <Input placeholder="MM/AA" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">CVV</label>
                                                <Input placeholder="123" maxLength={3} />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Cash on Delivery */}
                            <div
                                onClick={() => setPaymentMethod("cash")}
                                className={`bg-white p-6 rounded-2xl border-2 cursor-pointer transition-all ${paymentMethod === "cash" ? "border-primary shadow-lg" : "border-border/50"
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                                        <Banknote className="w-6 h-6 text-accent" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-lg">Paiement à la livraison</h3>
                                        <p className="text-sm text-muted-foreground">Payez en espèces lors de la réception</p>
                                    </div>
                                    {paymentMethod === "cash" && (
                                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                                            <Check className="w-4 h-4 text-white" />
                                        </div>
                                    )}
                                </div>
                            </div>
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
                                        <span className="font-semibold">7 000 FCFA</span>
                                    </div>
                                    <div className="flex justify-between text-muted-foreground">
                                        <span>Livraison</span>
                                        <span className="font-semibold">1 500 FCFA</span>
                                    </div>
                                </div>

                                <div className="flex justify-between text-xl font-bold">
                                    <span>Total</span>
                                    <span className="text-primary">{total.toLocaleString()} FCFA</span>
                                </div>

                                <Link href="/commande/confirmation">
                                    <Button className="w-full" size="lg">
                                        Confirmer la commande
                                    </Button>
                                </Link>

                                <p className="text-xs text-center text-muted-foreground">
                                    En confirmant, vous acceptez nos conditions générales de vente
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
