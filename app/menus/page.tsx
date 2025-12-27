import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ProductList } from "@/components/ProductList"

export default function MenusPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-20">
                <div className="bg-primary/5 py-16 mb-8">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Nos Menus Délicieux</h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Découvrez notre sélection de recettes saines et gourmandes, préparées avec des ingrédients frais.
                        </p>
                    </div>
                </div>
                <ProductList />
            </main>
            <Footer />
        </div>
    )
}
