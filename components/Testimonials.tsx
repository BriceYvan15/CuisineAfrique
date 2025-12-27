"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { staggerContainer, fadeInUp } from "@/lib/animations"
import { Card } from "@/components/ui/card"

const testimonials = [
    {
        name: "Sarah K.",
        role: "Maman active",
        content: "CuisineFacile m'a sauvé la vie ! Je ne me pose plus la question 'qu'est-ce qu'on mange ce soir'. Les produits sont top et les recettes délicieuses.",
        rating: 5,
        image: "https://i.pravatar.cc/100?img=1"
    },
    {
        name: "Marc D.",
        role: "Amateur de cuisine",
        content: "J'étais sceptique sur la qualité des produits frais livrés, mais je suis bluffé. Le poisson était excellent et les légumes croquants. Je recommande.",
        rating: 5,
        image: "https://i.pravatar.cc/100?img=11"
    },
    {
        name: "Amina T.",
        role: "Étudiante",
        content: "Parfait pour apprendre à cuisiner sans gaspiller. Les portions sont justes et ça me revient moins cher que de faire les courses au supermarché.",
        rating: 4,
        image: "https://i.pravatar.cc/100?img=5"
    }
]

export function Testimonials() {
    return (
        <section className="py-24 bg-background">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block"
                    >
                        Témoignages
                    </motion.span>
                    <motion.h2
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Ils ont changé leur façon de cuisiner
                    </motion.h2>
                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {testimonials.map((t, index) => (
                        <motion.div key={index} variants={fadeInUp} className="h-full">
                            <Card className="h-full p-8 border-none shadow-lg bg-white relative overflow-visible hover:-translate-y-2 transition-transform duration-300">
                                <Quote className="absolute -top-4 -left-4 w-8 h-8 text-primary/20 fill-primary" />
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`w-4 h-4 ${i < t.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}`} />
                                    ))}
                                </div>
                                <p className="text-muted-foreground mb-8 text-lg italic leading-relaxed">
                                    "{t.content}"
                                </p>
                                <div className="flex items-center gap-4 mt-auto">
                                    <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20" />
                                    <div>
                                        <p className="font-bold text-foreground">{t.name}</p>
                                        <p className="text-sm text-muted-foreground">{t.role}</p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
