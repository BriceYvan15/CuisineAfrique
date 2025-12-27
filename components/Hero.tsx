"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Star } from "lucide-react"
import { fadeInUp, staggerContainer, immediate } from "@/lib/animations"

export function Hero() {
    return (
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-background pt-20">


            <div className="container px-4 md:px-6 z-10 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="space-y-6 relative z-10"
                >
                    <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold shadow-sm border border-accent/20">
                        <Star className="w-4 h-4 fill-accent" />
                        <span>N°1 de la livraison de box cuisine</span>
                    </motion.div>

                    <motion.h1 variants={fadeInUp} className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight text-balance">
                        Manger bien et sainement <br className="hidden md:block" />
                        <span className="text-primary">sans stress.</span>
                    </motion.h1>

                    <motion.p variants={fadeInUp} className="text-lg text-muted-foreground md:text-xl max-w-[600px] text-balance">
                        Des ingrédients de cuisine frais et de qualité, livrés chez vous, pour des recettes faciles à réaliser.
                        Faites des économies d’argent et de temps.
                    </motion.p>

                    <motion.div variants={immediate} className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="gap-2 text-lg h-12 px-8 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
                            Commander ma box <ArrowRight className="w-5 h-5" />
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg h-12 px-8">
                            Voir le menu
                        </Button>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="flex items-center gap-3 pt-4">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-gray-200 overflow-hidden">
                                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <p className="text-sm font-medium text-muted-foreground">
                            <span className="text-foreground font-bold">1000+</span> clients heureux
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative"
                >
                    <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl ring-1 ring-border/50">
                        <img
                            src="/hero-food.png"
                            alt="Delicious Food Box"
                            className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
                        />
                    </div>

                    {/* Floating Badge */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="absolute -bottom-10 -left-10 bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50 flex items-center gap-5"
                    >
                        <div className="bg-accent/10 p-4 rounded-2xl text-accent">
                            <span className="text-3xl font-bold">30+</span>
                        </div>
                        <div>
                            <p className="font-bold text-foreground text-lg">Recettes</p>
                            <p className="text-sm text-muted-foreground">nouvelles chaque semaine</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
