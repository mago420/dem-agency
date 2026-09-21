import type { Metadata } from "next";
import { Montserrat, Syne } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "DEM | Contenido • Experiencias • Creadores",
  description:
    "Digital Entertainment Management. Conectamos marcas con audiencias a través de experiencias que impactan.",
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${syne.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100 antialiased selection:bg-[#3A45D0] selection:text-white relative font-sans">
        {/* 3. Fondo Dinámico Cyberpunk Vibe: Cuadrícula animada + Orbes de luz #3A45D0 y Púrpura/Magenta */}
        <div
          className="fixed inset-0 overflow-hidden pointer-events-none z-0"
          aria-hidden="true"
        >
          {/* Cuadrícula Cyberpunk sutil animada */}
          <div className="absolute inset-0 cyber-grid opacity-60 [mask-image:radial-gradient(ellipse_90%_90%_at_50%_50%,#000_50%,transparent_100%)]" />

          {/* Orbe 1: Azul corporativo vibrante DEM #3A45D0 */}
          <div className="absolute -top-32 -left-32 w-[38rem] h-[38rem] bg-[#3A45D0]/22 blur-[150px] rounded-full animate-pulse" />

          {/* Orbe 2: Púrpura/Magenta Cyberpunk */}
          <div className="absolute -bottom-32 -right-32 w-[36rem] h-[36rem] bg-[#8B1E9F]/18 blur-[160px] rounded-full" />

          {/* Orbe 3 central: Resplandor ambiental secundario */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#4932CA]/10 blur-[180px] rounded-full" />
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
