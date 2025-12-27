import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { RecipeMarquee } from "@/components/RecipeMarquee";
import { ProductList } from "@/components/ProductList";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <RecipeMarquee />
      <HowItWorks />
      <ProductList />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
