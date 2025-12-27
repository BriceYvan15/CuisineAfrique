"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { staggerContainer, fadeInUp } from "@/lib/animations"

const products = [
    {
        id: "1",
        title: "Poulet Yassa Citronné",
        description: "Poulet tendre mariné au citron vert et oignons caramélisés.",
        price: "4 500 FCFA",
        image: "/hero-food.png",
        category: "Africain",
        color: "bg-orange-50"
    },
    {
        id: "2",
        title: "Thieboudienne Royal",
        description: "Le plat national sénégalais avec mérou frais et légumes croquants.",
        price: "5 000 FCFA",
        image: "/salmon-dish.png",
        category: "Traditionnel",
        color: "bg-red-50"
    },
    {
        id: "3",
        title: "Sauce Graine",
        description: "Une sauce onctueuse à base de noix de palme fraîches et épices.",
        price: "3 500 FCFA",
        image: "/hero-food.png",
        category: "Sauce",
        color: "bg-red-50"
    },
    {
        id: "4",
        title: "Alloco & Poisson",
        description: "Bananes plantains frites avec un poisson braisé à la braise.",
        price: "2 500 FCFA",
        image: "/salmon-dish.png",
        category: "Grillade",
        color: "bg-orange-50"
    }
]

export function ProductList() {
    return (
        <section id="menus" className="py-24 bg-muted/30">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Nos Menus de la Semaine</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl">
                            Des recettes variées, équilibrées et gourmandes pour tous les goûts.
                        </p>
                    </div>
                    <Button variant="outline" size="lg" className="hidden md:flex">Voir tout le menu</Button>
                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {products.map((product, index) => (
                        <motion.div key={index} variants={fadeInUp}>
                            <Link href={`/recipes/${product.id}`} className="block h-full group">
                                <Card className="overflow-hidden border-none shadow-sm transition-all duration-300 bg-white rounded-3xl h-full flex flex-col hover:shadow-xl hover:-translate-y-1">
                                    <motion.div
                                        className="h-56 relative overflow-hidden bg-muted"
                                        whileHover="hover"
                                    >
                                        <motion.img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full h-full object-cover"
                                            variants={{ hover: { scale: 1.05, transition: { duration: 0.4 } } }}
                                        />
                                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </motion.div>
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex justify-between items-start mb-3">
                                            <span className="text-xs font-bold px-3 py-1 bg-accent/10 text-accent rounded-full uppercase tracking-wider">
                                                {product.category}
                                            </span>
                                            <span className="font-bold text-foreground text-lg">{product.price}</span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                                            {product.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground mb-6 line-clamp-2 flex-1">
                                            {product.description}
                                        </p>
                                        <Button className="w-full font-semibold shadow-sm hover:shadow-md mt-auto pointer-events-none group-hover:bg-primary group-hover:text-white transition-colors">
                                            Voir la recette
                                        </Button>
                                    </div>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-8 text-center md:hidden">
                    <Button variant="outline" size="lg" className="w-full">Voir tout le menu</Button>
                </div>
            </div>
        </section>
    )
}
