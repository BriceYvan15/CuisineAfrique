"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/animations"
import { MapPin, Phone, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function LivraisonPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-20">
                <div className="container mx-auto px-4 py-12 max-w-4xl">
                    <Link href="/panier" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
                        <ArrowLeft className="w-4 h-4" />
                        Retour au panier
                    </Link>

                    <div className="mb-8">
                        <h1 className="text-4xl font-bold mb-2">Informations de livraison</h1>
                        <p className="text-muted-foreground">Où souhaitez-vous recevoir votre commande ?</p>
                    </div>

                    {/* Progress Indicator */}
                    <div className="flex items-center justify-center mb-12">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                                <span className="text-sm font-medium">Livraison</span>
                            </div>
                            <div className="w-16 h-0.5 bg-border"></div>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center font-bold">2</div>
                                <span className="text-sm text-muted-foreground">Paiement</span>
                            </div>
                            <div className="w-16 h-0.5 bg-border"></div>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center font-bold">3</div>
                                <span className="text-sm text-muted-foreground">Confirmation</span>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        className="bg-white p-8 rounded-3xl shadow-lg border border-border/50"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="text-sm font-medium">Prénom</label>
                                    <Input id="firstName" placeholder="Votre prénom" required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="text-sm font-medium">Nom</label>
                                    <Input id="lastName" placeholder="Votre nom" required />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium">Téléphone</label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                    <Input
                                        id="phone"
                                        type="tel"
                                        placeholder="+225 XX XX XX XX XX"
                                        className="pl-10"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="address" className="text-sm font-medium">Adresse de livraison</label>
                                <div className="relative">
                                    <MapPin className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                                    <Textarea
                                        id="address"
                                        placeholder="Quartier, rue, numéro de maison..."
                                        className="pl-10 min-h-[100px]"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="city" className="text-sm font-medium">Ville</label>
                                    <Input id="city" placeholder="Abidjan" required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="commune" className="text-sm font-medium">Commune</label>
                                    <select
                                        id="commune"
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                        required
                                    >
                                        <option value="">Sélectionner</option>
                                        <option value="cocody">Cocody</option>
                                        <option value="plateau">Plateau</option>
                                        <option value="marcory">Marcory</option>
                                        <option value="yopougon">Yopougon</option>
                                        <option value="abobo">Abobo</option>
                                        <option value="adjame">Adjamé</option>
                                        <option value="koumassi">Koumassi</option>
                                        <option value="port-bouet">Port-Bouët</option>
                                        <option value="treichville">Treichville</option>
                                        <option value="attécoubé">Attécoubé</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="deliveryTime" className="text-sm font-medium">Créneau de livraison préféré</label>
                                <div className="relative">
                                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                    <select
                                        id="deliveryTime"
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 pl-10"
                                        required
                                    >
                                        <option value="">Sélectionner un créneau</option>
                                        <option value="morning">Matin (8h - 12h)</option>
                                        <option value="afternoon">Après-midi (12h - 16h)</option>
                                        <option value="evening">Soir (16h - 20h)</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="instructions" className="text-sm font-medium">Instructions de livraison (optionnel)</label>
                                <Textarea
                                    id="instructions"
                                    placeholder="Ex: Sonner à l'interphone, 2ème étage..."
                                    className="min-h-[80px]"
                                />
                            </div>

                            <div className="flex gap-4 pt-4">
                                <Link href="/panier" className="flex-1">
                                    <Button variant="secondary" className="w-full" size="lg">
                                        Retour
                                    </Button>
                                </Link>
                                <Link href="/commande/paiement" className="flex-1">
                                    <Button type="submit" className="w-full" size="lg">
                                        Continuer vers le paiement
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
