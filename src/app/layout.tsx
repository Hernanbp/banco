import { Archivo } from "@next/font/google";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import "../styles/globals.css";

interface Props {
  children?: React.ReactNode;
}

const archivo = Archivo({
  subsets: ["latin"],
});

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={archivo.className}>
      <head />
      <body className="bg-gray-50">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
