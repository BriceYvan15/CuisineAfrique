"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { fadeInUp } from "@/lib/animations"

const faqs = [
    {
        question: "Zones de livraison desservies ?",
        answer: "Nous livrons actuellement dans toute la ville d'Abidjan et ses environs proches (Bingerville, Bassam). D'autres villes seront bientôt disponibles."
    },
    {
        question: "Les ingrédients sont-ils vraiment frais ?",
        answer: "Absolument. Nous travaillons en direct avec des producteurs locaux et le marché de gros. Vos box sont préparées le matin même de la livraison pour garantir une fraîcheur maximale."
    },
    {
        question: "Puis-je choisir mes recettes ?",
        answer: "Oui ! Chaque semaine, nous vous proposons une sélection de plus de 20 recettes variées. Vous composez votre menu selon vos envies (africain, européen, healthy...)."
    },
    {
        question: "Comment fonctionne l'abonnement ?",
        answer: "C'est sans engagement. Vous pouvez commander à la semaine ou vous abonner pour plus de tranquillité. Vous pouvez mettre en pause ou annuler à tout moment depuis votre espace client."
    }
]

export function FAQ() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    <div className="md:w-1/3">
                        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            <h2 className="text-3xl font-bold mb-4">Questions Fréquentes</h2>
                            <p className="text-muted-foreground mb-6">
                                Tout ce que vous devez savoir sur CuisineFacile. Une autre question ? Contactez notre support 24/7.
                            </p>
                            <div className="p-6 bg-white rounded-2xl shadow-sm border border-border/50">
                                <p className="font-semibold mb-2">Besoin d'aide ?</p>
                                <p className="text-sm text-muted-foreground mb-4">Notre équipe est là pour vous accompagner.</p>
                                <button className="text-primary font-bold hover:underline">Contacter le support →</button>
                            </div>
                        </motion.div>
                    </div>

                    <div className="md:w-2/3 w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} question={faq.question} answer={faq.answer} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

function AccordionItem({ question, answer, index }: { question: string, answer: string, index: number }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="border border-border/50 bg-white rounded-2xl overflow-hidden"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full p-6 text-left hover:bg-muted/10 transition-colors"
                aria-expanded={isOpen}
            >
                <span className="font-bold text-lg">{question}</span>
                <span className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-muted text-foreground'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" as const }}
                    >
                        <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}
