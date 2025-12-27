"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const recipes = [
    {
        title: "LA SAUCE DAH AVEC PÂTE D’ARACHIDE",
        category: "AFRICAINES",
        image: "/hero-food.png", // Using existing asset
    },
    {
        title: "POULET YASSA CITRONNÉ",
        category: "AFRICAINES",
        image: "/salmon-dish.png", // Using existing asset
    },
    {
        title: "THIEBOUDIENNE ROYAL",
        category: "TRADITIONNEL",
        image: "/hero-food.png",
    },
    {
        title: "MAFÉ DE BOEUF ONCTUEUX",
        category: "CALORIES SMART",
        image: "/salmon-dish.png",
    },
    {
        title: "POISSON BRAISÉ À L'IVOIRIENNE",
        category: "GRILLADES",
        image: "/hero-food.png",
    },
    {
        title: "NDOLÉ AUX CREVETTES",
        category: "PREMIUM",
        image: "/salmon-dish.png",
    }
]

// Duplicate list for seamless loop (2 copies to scroll 50%)
const marqueeRecipes = [...recipes, ...recipes]

export function RecipeMarquee() {
    return (
        <section className="py-24 overflow-hidden bg-muted/30">
            <div className="container px-4 md:px-6 mb-12 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    + de 20 recettes fraîches et savoureuses <br className="hidden md:block" />
                    disponibles chaque semaine
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Pour des repas faciles à cuisiner et conçus par des nutritionnistes et des chefs professionnels.
                </p>
            </div>

            <div className="relative w-full">
                {/* Gradient Masks for smooth fade at edges */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

                <motion.div
                    className="flex gap-8 w-max px-4"
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 20, // Adjusted speed since width is smaller
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {marqueeRecipes.map((recipe, index) => (
                        <Card
                            key={index}
                            className="w-[280px] md:w-[320px] h-[400px] shrink-0 relative overflow-hidden rounded-3xl border-none group cursor-pointer"
                        >
                            <img
                                src={recipe.image}
                                alt={recipe.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Dark Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                            <div className="absolute bottom-0 left-0 p-6 w-full text-white">
                                <span className="text-xs font-bold tracking-wider text-accent mb-2 block">
                                    {recipe.category}
                                </span>
                                <h3 className="text-lg font-bold leading-tight mb-4 line-clamp-2">
                                    {recipe.title}
                                </h3>

                                <div className="flex items-center gap-2 text-sm font-semibold opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    Voir la recette <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </Card>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
