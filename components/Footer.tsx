import Link from "next/link"
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from "lucide-react"

export function Footer() {
    return (
        <footer id="contact" className="bg-slate-900 text-slate-200 py-16">
            <div className="container px-4 md:px-6 grid md:grid-cols-4 gap-12">
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">CuisineFacile</h3>
                    <p className="text-sm text-slate-400">
                        Des ingrédients frais livrés chez vous pour simplifier votre quotidien et manger sainement.
                    </p>
                </div>

                <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">Liens Rapides</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/" className="hover:text-primary transition-colors">Accueil</Link></li>
                        <li><Link href="/comment-ca-marche" className="hover:text-primary transition-colors">Comment ça marche</Link></li>
                        <li><Link href="/menus" className="hover:text-primary transition-colors">Nos Menus</Link></li>
                        <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">Contact</h4>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-primary" />
                            Abidjan Cocody, 2 plateau vallon
                        </li>
                        <li className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-primary" />
                            +225 07 09 30 24 81
                        </li>
                        <li className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-primary" />
                            admin@cuisinefacile.africa
                        </li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">Suivez-nous</h4>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                            <Twitter className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="container px-4 md:px-6 mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
                © 2024 CuisineFacile Africa. Tous droits réservés.
            </div>
        </footer>
    )
}
