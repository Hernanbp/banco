import { Archivo } from "@next/font/google";
import Header from "../components/header";
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
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
