"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/animations"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-20">
                <div className="bg-primary/5 py-16">
                    <div className="container mx-auto px-4 text-center">
                        <motion.h1
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            className="text-4xl md:text-5xl font-bold text-primary mb-4"
                        >
                            Contactez-nous
                        </motion.h1>
                        <motion.p
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.1 }}
                            className="text-lg text-muted-foreground max-w-2xl mx-auto"
                        >
                            Une question sur votre commande ou nos recettes ? Notre équipe est là pour vous aider du lundi au samedi.
                        </motion.p>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-16 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-border/50">
                                <h2 className="text-2xl font-bold mb-6">Nos Coordonnées</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Adresse</h3>
                                            <p className="text-muted-foreground">Abidjan Cocody, 2 plateau vallon<br />Rue des jardins</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                                            <Phone className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Téléphone</h3>
                                            <p className="text-muted-foreground">+225 07 09 30 24 81</p>
                                            <p className="text-sm text-muted-foreground mt-1">Disponible sur WhatsApp</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Email</h3>
                                            <p className="text-muted-foreground">admin@cuisinefacile.africa</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 flex-shrink-0">
                                            <Clock className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Horaires</h3>
                                            <p className="text-muted-foreground">Lundi - Vendredi: 8h - 18h</p>
                                            <p className="text-muted-foreground">Samedi: 9h - 15h</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-muted/30 p-8 rounded-3xl"
                        >
                            <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium">Nom complet</label>
                                        <Input id="name" placeholder="Votre nom" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                                        <Input id="email" type="email" placeholder="votre@email.com" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium">Sujet</label>
                                    <Input id="subject" placeholder="Comment pouvons-nous vous aider ?" />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                                    <Textarea id="message" placeholder="Dites-nous tout..." className="min-h-[150px]" />
                                </div>

                                <Button size="lg" className="w-full">
                                    Envoyer le message
                                </Button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
