"use client"

import { useState, use } from "react"
import { motion } from "framer-motion"
import { Check, ArrowLeft, Clock, Flame, Users, ShoppingBasket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { useCart } from "@/lib/cart-context"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import Link from "next/link"
import { fadeInUp, staggerContainer } from "@/lib/animations"

// Mock Data - In a real app this would come from an API based on ID
const recipeData = {
    id: "1",
    title: "Poulet Yassa Citronné",
    description: "Un classique sénégalais revisité. Des oignons caramélisés, un poulet tendre mariné au citron vert et une touche de moutarde à l'ancienne.",
    prepTime: "45 min",
    calories: "650 kcal",
    servings: "2 pers",
    image: "/salmon-dish.png",
    ingredients: [
        { id: "i1", name: "Cuisses de poulet", quantity: 2, unit: "pièces", price: 2500 },
        { id: "i2", name: "Oignons jaunes", quantity: 4, unit: "gros", price: 200 },
        { id: "i3", name: "Citrons verts", quantity: 3, unit: "pièces", price: 150 },
        { id: "i4", name: "Moutarde à l'ancienne", quantity: 50, unit: "g", price: 500 },
        { id: "i5", name: "Riz blanc parfumé", quantity: 200, unit: "g", price: 600 },
        { id: "i6", name: "Cube d'assaisonnement", quantity: 1, unit: "pièce", price: 50 },
        { id: "i7", name: "Piment (facultatif)", quantity: 1, unit: "pièce", price: 25 }
    ] as { id: string, name: string, quantity: number, unit: string, price: number }[],
    steps: [
        "Mariner le poulet avec le jus des citrons, la moutarde, sel et poivre pendant au moins 1h (idéalement une nuit).",
        "Couper les oignons en lamelles fines.",
        "Dans une marmite, faire dorer le poulet avec un peu d'huile, puis retirer.",
        "Dans la même huile, faire caraméliser les oignons lentement.",
        "Remettre le poulet, ajouter la marinade et un peu d'eau. Laisser mijoter 30 min.",
        "Servir avec du riz blanc cuit à la vapeur."
    ]
}

export default function RecipePage({ params }: { params: Promise<{ id: string }> }) {
    // Unwrap params using React.use()
    const { id } = use(params)

    // In a real app, fetch recipe by ID here. Using mock for now.
    const recipe = { ...recipeData, id: id }

    const { addItem } = useCart()
    const [selectedIngredients, setSelectedIngredients] = useState<string[]>(
        recipe.ingredients.map(i => i.id)
    )

    // Track quantity multiplier for each ingredient (default 1)
    const [quantities, setQuantities] = useState<Record<string, number>>(
        recipe.ingredients.reduce((acc, ing) => ({ ...acc, [ing.id]: 1 }), {})
    )

    const toggleIngredient = (id: string) => {
        setSelectedIngredients(prev =>
            prev.includes(id)
                ? prev.filter(i => i !== id)
                : [...prev, id]
        )
    }

    const toggleAll = () => {
        if (selectedIngredients.length === recipe.ingredients.length) {
            setSelectedIngredients([])
        } else {
            setSelectedIngredients(recipe.ingredients.map(i => i.id))
        }
    }

    const updateQuantity = (id: string, delta: number) => {
        setQuantities(prev => {
            const current = prev[id] || 1
            const newValue = Math.max(1, current + delta)
            return { ...prev, [id]: newValue }
        })
    }

    const handleAddToCart = () => {
        const ingredientsToAdd = recipe.ingredients.filter(i => selectedIngredients.includes(i.id))

        ingredientsToAdd.forEach(ing => {
            const multiplier = quantities[ing.id] || 1
            addItem({
                id: ing.id,
                name: ing.name,
                // Adjust quantity based on user selection
                quantity: ing.quantity * multiplier,
                unit: ing.unit,
                price: ing.price,
                recipeId: recipe.id,
                recipeName: recipe.title
            })
        })
    }

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="pt-20">
                {/* Hero Banner */}
                <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden">
                    <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center text-white p-4"
                        >
                            <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-bold tracking-wider mb-4 inline-block">
                                POPULAIRE
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-4xl mx-auto leading-tight">
                                {recipe.title}
                            </h1>
                        </motion.div>
                    </div>
                    <Link href="/" className="absolute top-8 left-4 md:left-8 bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/40 transition-colors text-white">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                </div>

                <div className="container px-4 md:px-6 py-12 max-w-6xl mx-auto">

                    {/* Main Content */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="space-y-12"
                    >
                        {/* Meta Info */}
                        <motion.div variants={fadeInUp} className="flex gap-6 text-muted-foreground border-b border-border pb-8">
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5 text-primary" />
                                <span>{recipe.prepTime}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Flame className="w-5 h-5 text-orange-500" />
                                <span>{recipe.calories}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="w-5 h-5 text-blue-500" />
                                <span>{recipe.servings}</span>
                            </div>
                        </motion.div>

                        {/* Description */}
                        <motion.div variants={fadeInUp}>
                            <h2 className="text-2xl font-bold mb-4">À propos de cette recette</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {recipe.description}
                            </p>
                        </motion.div>

                        {/* Grid Layout for Prep & Ingredients */}
                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            {/* Start Preparation Steps (Left Column) */}
                            <motion.div variants={fadeInUp}>
                                <h2 className="text-2xl font-bold mb-6">Préparation</h2>
                                <div className="space-y-6">
                                    {recipe.steps.map((step, index) => (
                                        <div key={index} className="flex gap-4">
                                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                                                {index + 1}
                                            </span>
                                            <p className="text-lg text-muted-foreground leading-relaxed pt-1">
                                                {step}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Right Column: Ingredients + Summary (Sticky) */}
                            <div className="space-y-6 sticky top-24">
                                {/* Ingredients Selection */}
                                <motion.div variants={fadeInUp} className="bg-muted/30 p-8 rounded-3xl">
                                    <div className="flex items-center justify-between mb-6">
                                        <h2 className="text-2xl font-bold flex items-center gap-2">
                                            Vos Ingrédients
                                            <span className="text-sm font-normal text-muted-foreground bg-white px-2 py-1 rounded-full border">
                                                {selectedIngredients.length} / {recipe.ingredients.length}
                                            </span>
                                        </h2>
                                        <Button variant="ghost" size="sm" onClick={toggleAll} className="text-primary hover:text-primary/80">
                                            {selectedIngredients.length === recipe.ingredients.length ? "Tout désélectionner" : "Tout sélectionner"}
                                        </Button>
                                    </div>

                                    <div className="space-y-3">
                                        {recipe.ingredients.map((ing) => (
                                            <div
                                                key={ing.id}
                                                className={`flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 p-4 rounded-xl border transition-all ${selectedIngredients.includes(ing.id)
                                                    ? "bg-white border-primary/50 shadow-sm"
                                                    : "bg-transparent border-transparent opacity-60"
                                                    }`}
                                            >
                                                <div className="flex items-center flex-1 cursor-pointer" onClick={() => toggleIngredient(ing.id)}>
                                                    <Checkbox
                                                        checked={selectedIngredients.includes(ing.id)}
                                                        onCheckedChange={() => toggleIngredient(ing.id)}
                                                        className="data-[state=checked]:bg-primary data-[state=checked]:border-primary mr-4"
                                                    />
                                                    <div className="select-none">
                                                        <span className="font-medium text-lg block">{ing.name}</span>
                                                    </div>
                                                </div>

                                                {selectedIngredients.includes(ing.id) && (
                                                    <div className="flex items-center gap-3 bg-muted/50 rounded-lg p-1">
                                                        <button
                                                            onClick={(e) => { e.stopPropagation(); updateQuantity(ing.id, -1) }}
                                                            className="w-8 h-8 flex items-center justify-center bg-white rounded-md shadow-sm hover:text-primary disabled:opacity-50"
                                                            disabled={(quantities[ing.id] || 1) <= 1}
                                                        >
                                                            -
                                                        </button>
                                                        <span className="font-bold w-16 text-center text-sm">
                                                            {(ing.quantity * (quantities[ing.id] || 1))} {ing.unit}
                                                        </span>
                                                        <button
                                                            onClick={(e) => { e.stopPropagation(); updateQuantity(ing.id, 1) }}
                                                            className="w-8 h-8 flex items-center justify-center bg-white rounded-md shadow-sm hover:text-primary"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Summary Block (Moved from Sidebar) */}
                                <div className="p-6 rounded-3xl border shadow-lg bg-white">
                                    <h3 className="font-bold text-xl mb-4">Récapitulatif</h3>
                                    <div className="flex justify-between items-center mb-6 text-muted-foreground">
                                        <span>Ingrédients sélectionnés</span>
                                        <span className="font-bold text-foreground">{selectedIngredients.length}</span>
                                    </div>
                                    <div className="space-y-3">
                                        <Button onClick={handleAddToCart} className="w-full text-lg h-14" disabled={selectedIngredients.length === 0}>
                                            <ShoppingBasket className="mr-2 w-5 h-5" />
                                            Ajouter au panier
                                        </Button>
                                        <p className="text-xs text-center text-muted-foreground px-4">
                                            Livraison gratuite dès 15.000 FCFA d'achats.
                                        </p>
                                    </div>
                                </div>

                                {/* Chef Tip (Moved from Sidebar) */}
                                <div className="p-6 bg-accent/10 rounded-3xl border border-accent/20">
                                    <h4 className="font-bold text-accent mb-2">🌿 Astuce du chef</h4>
                                    <p className="text-muted-foreground text-sm">
                                        Pour plus de goût, faites mariner le poulet la veille. Vous pouvez aussi ajouter du gingembre frais !
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </main>
            <Footer />
        </div>
    )
}
