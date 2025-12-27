"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { useCart } from "@/lib/cart-context"

export function Header() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const { cartCount, toggleCart } = useCart()

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <img
                        src="/cuisine_facile.africa.jpg"
                        alt="CuisineFacile"
                        className="h-12 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/comment-ca-marche" className="text-sm font-medium hover:text-primary transition-colors">
                        Comment ça marche ?
                    </Link>
                    <Link href="/menus" className="text-sm font-medium hover:text-primary transition-colors">
                        Nos Menus
                    </Link>
                    <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
                        Contact
                    </Link>
                    <Button variant="ghost" size="icon" className="relative" onClick={toggleCart}>
                        <ShoppingBag className="w-6 h-6" />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </Button>
                    <Link href="/connexion">
                        <Button>Connexion</Button>
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <Button variant="ghost" size="icon" className="relative" onClick={toggleCart}>
                        <ShoppingBag className="w-5 h-5" />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </Button>
                    <button
                        className="p-2 text-foreground"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t"
                    >
                        <nav className="container mx-auto px-4 py-8 flex flex-col gap-4">
                            <Link href="/comment-ca-marche" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                                Comment ça marche ?
                            </Link>
                            <Link href="/menus" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                                Nos Menus
                            </Link>
                            <Link href="/contact" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                                Contact
                            </Link>
                            <Button className="w-full" size="lg">Connexion</Button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
