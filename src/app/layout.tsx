import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/components/store/cart-provider";
import { Header } from "@/components/store/header";
import { Footer } from "@/components/store/footer";
import { PreferencesProvider } from "@/components/store/preferences-provider";
import { WhatsAppFloatingButton } from "@/components/store/whatsapp-floating-button";
import { TrackingScripts } from "@/components/store/tracking-scripts";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "ROVANX | Men's Vitality & Wellness",
    template: "%s | ROVANX"
  },
  description: "ROVANX, marque marocaine de vitalite et bien-etre masculin.",
  icons: {
    icon: [
      { url: "/favicon.png?v=5", sizes: "32x32", type: "image/png" },
      { url: "/icon.png?v=5", sizes: "192x192", type: "image/png" },
      { url: "/favicon.svg?v=5", type: "image/svg+xml" }
    ],
    shortcut: "/favicon.png?v=5",
    apple: "/apple-touch-icon.png?v=5"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" dir="ltr">
      <head>
        <TrackingScripts />
      </head>
      <body>
        <PreferencesProvider>
          <CartProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <WhatsAppFloatingButton />
          </CartProvider>
        </PreferencesProvider>
      </body>
    </html>
  );
}
