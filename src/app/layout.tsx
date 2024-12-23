import type { Metadata } from "next";
import "./globals.css";

import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap-icons/font/bootstrap-icons.css";

// Components
import NavBar from './components/NavBar';
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Frederico Westphalen | Guia",
  description: "idk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <header>
          <NavBar />
        </header>
        <main className="pt-5">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
