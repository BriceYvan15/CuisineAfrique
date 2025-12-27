import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import { CartDrawer } from "@/components/CartDrawer";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CuisineFacile - Recettes Délicieuses et Ingrédients Frais",
  description: "Des ingrédients de cuisine frais et de qualité, livrés chez vous. Faites des économies d’argent et de temps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${outfit.className} antialiased`}>
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
