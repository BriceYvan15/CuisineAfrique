"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/animations"
import { CheckCircle, Package, Clock, Home } from "lucide-react"
import Link from "next/link"

export default function ConfirmationPage() {
    // Mock order data
    const orderNumber = "CF" + Math.random().toString(36).substring(2, 9).toUpperCase()
    const estimatedDelivery = "Demain entre 14h et 16h"

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-20">
                <div className="container mx-auto px-4 py-16 max-w-3xl">
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        className="text-center"
                    >
                        <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="w-16 h-16 text-accent" />
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                            Commande confirmée !
                        </h1>
                        <p className="text-lg text-muted-foreground mb-8">
                            Merci pour votre confiance. Votre commande a été enregistrée avec succès.
                        </p>

                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-border/50 mb-8">
                            <div className="grid md:grid-cols-2 gap-6 text-left">
                                <div className="space-y-2">
                                    <p className="text-sm text-muted-foreground">Numéro de commande</p>
                                    <p className="text-2xl font-bold text-primary">{orderNumber}</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-sm text-muted-foreground">Livraison estimée</p>
                                    <p className="text-xl font-semibold flex items-center gap-2">
                                        <Clock className="w-5 h-5 text-secondary" />
                                        {estimatedDelivery}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-border">
                                <h3 className="font-bold text-lg mb-4">Récapitulatif de la commande</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between text-muted-foreground">
                                        <span>Sous-total</span>
                                        <span className="font-semibold">7 000 FCFA</span>
                                    </div>
                                    <div className="flex justify-between text-muted-foreground">
                                        <span>Livraison</span>
                                        <span className="font-semibold">1 500 FCFA</span>
                                    </div>
                                    <div className="flex justify-between text-xl font-bold pt-3 border-t border-border">
                                        <span>Total</span>
                                        <span className="text-primary">8 500 FCFA</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-accent/10 p-6 rounded-2xl border border-accent/20 mb-8">
                            <div className="flex items-start gap-4 text-left">
                                <Package className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-accent mb-2">Prochaines étapes</h3>
                                    <ul className="text-sm text-muted-foreground space-y-2">
                                        <li>• Vous recevrez un SMS de confirmation avec votre numéro de commande</li>
                                        <li>• Notre équipe préparera vos ingrédients frais</li>
                                        <li>• Vous serez notifié lorsque le livreur sera en route</li>
                                        <li>• Profitez de votre délicieuse recette !</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/menus">
                                <Button size="lg" className="w-full sm:w-auto">
                                    <Package className="w-5 h-5 mr-2" />
                                    Commander à nouveau
                                </Button>
                            </Link>
                            <Link href="/">
                                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                                    <Home className="w-5 h-5 mr-2" />
                                    Retour à l'accueil
                                </Button>
                            </Link>
                        </div>

                        <p className="text-sm text-muted-foreground mt-8">
                            Besoin d'aide ? <Link href="/contact" className="text-primary hover:underline">Contactez-nous</Link>
                        </p>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
