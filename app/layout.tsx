// app/layout.tsx
import type { Metadata } from "next";
import { Outfit } from "next/font/google"; // Importamos Outfit
import "./globals.css";

// Configuramos la fuente
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"], // Pesos necesarios
  variable: "--font-outfit", // Variable CSS por si la necesitas
});

export const metadata: Metadata = {
  title: "JCSA",
  description: "Portafolio de Juan Cruz Senicen Acosta",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      {/* Aplicamos la clase al body */}
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
