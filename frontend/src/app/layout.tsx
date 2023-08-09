import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Providers } from "@/redux/Providers";
import Cart from "./components/Cart/Cart";
import Toast from "./components/Toast/Toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["italic", "normal"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["italic", "normal"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "BrandonW Ecommerce",
  description: "Brandon Wernham's online ecommerce site made with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable}`}>
      <body>
        <Toast />
        <Providers>
          <Cart />
          <Header />
          <main className="bg-primary-gradient min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
