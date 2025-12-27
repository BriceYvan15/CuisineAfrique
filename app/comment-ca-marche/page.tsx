import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { HowItWorks } from "@/components/HowItWorks"
import { FAQ } from "@/components/FAQ"

export default function CommentCaMarchePage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-20">
                <div className="bg-secondary/10 py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Comment ça marche ?</h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            CuisineFacile simplifie votre quotidien. Voici comment recevoir vos box à cuisiner en quelques clics.
                        </p>
                    </div>
                </div>

                <HowItWorks />

                <div className="py-12">
                    <FAQ />
                </div>
            </main>
            <Footer />
        </div>
    )
}
