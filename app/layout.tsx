import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "@/app/styles/globals.css";

import { CartProvider } from "@/app/context/cart";

import { Header } from "@/app/components/Header";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Shop",
  description: "Loja de estudos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/ignite-simbol.svg" type="image/svg+xml" />
      </head>

      <body className={roboto.className}>
        <div className="flex min-h-screen flex-col items-start justify-center">
          <Header />

          <CartProvider>{children}</CartProvider>
        </div>
      </body>
    </html>
  );
}
