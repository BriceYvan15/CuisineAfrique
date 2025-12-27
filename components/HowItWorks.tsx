"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Utensils, PackageOpen, Truck, ChefHat } from "lucide-react"
import { staggerContainer, fadeInUp, hoverScale } from "@/lib/animations"

const steps = [
    {
        icon: Utensils,
        title: "1. Choisissez vos recettes",
        description: "En un clic sur « commander », choisissez la catégorie puis la recette que vous souhaitez cuisiner.",
        color: "bg-secondary/10 text-secondary", // Orange
    },
    {
        icon: PackageOpen,
        title: "2. Ajustez votre box",
        description: "Adaptez la taille de votre box au nombre de repas et de personnes pour la semaine.",
        color: "bg-accent/10 text-accent", // Green
    },
    {
        icon: Truck,
        title: "3. Recevez votre box",
        description: "Recevez chez vous des ingrédients frais, de qualité et pré-dosés pour éviter le gaspillage.",
        color: "bg-primary/10 text-primary", // Bordeaux
    },
    {
        icon: ChefHat,
        title: "4. Cuisinez facilement",
        description: "Suivez nos fiches recettes ou notre chef virtuel et réalisez des plats délicieux en un rien de temps.",
        color: "bg-secondary/10 text-secondary", // Orange again
    },
]

export function HowItWorks() {
    return (
        <section id="comment-ca-marche" className="py-24 bg-background">
            <div className="container px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Comment ça marche ?</h2>
                    <p className="text-muted-foreground text-lg">
                        Cuisiner n'a jamais été aussi simple. Nous nous occupons des courses, vous profitez de la cuisine.
                    </p>
                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                        >
                            <motion.div
                                variants={hoverScale}
                                whileHover="visible" // Activate hoverScale on hover
                                className="h-full"
                            >
                                <Card className="h-full p-6 transition-colors border-none bg-white shadow-sm flex flex-col">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${step.color}`}>
                                        <step.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed flex-1">
                                        {step.description}
                                    </p>
                                </Card>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
