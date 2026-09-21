"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Brand {
  name: string;
  category: string;
  activation: string;
  renderLogo: () => React.ReactNode;
}

const hardwareTechBrands: Brand[] = [
  {
    name: "ASUS ROG",
    category: "Hardware & Esports",
    activation: "ROG Arena Jockey Plaza",
    renderLogo: () => (
      <span className="font-mono text-xl sm:text-2xl font-black tracking-widest text-[#00539B]">
        ASUS <span className="text-[#FF003B] text-xs align-super font-sans">ROG</span>
      </span>
    ),
  },
  {
    name: "Intel",
    category: "Semiconductors",
    activation: "Torneos & Live Streaming",
    renderLogo: () => (
      <span className="font-sans text-xl sm:text-2xl font-extrabold tracking-tight text-[#00C7FD] lowercase">
        intel<span className="text-[#0071C5]">.</span>
      </span>
    ),
  },
  {
    name: "HP Omen",
    category: "Computing & Tech",
    activation: "Battlegrounds & Campus",
    renderLogo: () => (
      <span className="flex items-center gap-1.5 font-sans font-black text-xl text-[#0096D6]">
        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#0096D6] text-white font-serif font-black italic text-base leading-none">
          hp
        </span>
        <span className="text-[#FF2A00] text-xs uppercase tracking-wider font-mono">OMEN</span>
      </span>
    ),
  },
  {
    name: "Samsung Odyssey",
    category: "Consumer Tech",
    activation: "Display Oficial Arenas",
    renderLogo: () => (
      <span className="font-sans text-lg sm:text-xl font-black tracking-wider text-[#3872FF] uppercase">
        SAMSUNG <span className="text-white text-xs font-mono">ODYSSEY</span>
      </span>
    ),
  },
  {
    name: "Acer Predator",
    category: "Gaming Hardware",
    activation: "High-Performance Zones",
    renderLogo: () => (
      <span className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-[#83B81A] lowercase">
        acer <span className="text-[#00C3E3] text-xs uppercase font-mono">PREDATOR</span>
      </span>
    ),
  },
  {
    name: "Lenovo Legion",
    category: "PC & Gaming",
    activation: "Competencias Gaming",
    renderLogo: () => (
      <span className="px-2.5 py-0.5 bg-[#E2231A] text-white font-sans text-lg font-bold tracking-tight uppercase rounded">
        LEGION
      </span>
    ),
  },
  {
    name: "HyperX",
    category: "Gaming Peripherals",
    activation: "Arenas & Casters",
    renderLogo: () => (
      <span className="font-mono text-xl font-black tracking-tighter text-[#E41F26] uppercase">
        Hyper<span className="text-white">X</span>
      </span>
    ),
  },
  {
    name: "ESET",
    category: "Cybersecurity",
    activation: "Seguridad Digital",
    renderLogo: () => (
      <span className="font-sans text-xl font-extrabold text-[#00A9E0] tracking-wider uppercase">
        eset
      </span>
    ),
  },
  {
    name: "Doritos",
    category: "Snacks",
    activation: "Campañas & Drops",
    renderLogo: () => (
      <span className="font-extrabold uppercase italic tracking-tighter text-xl text-[#E31B23]">
        Doritos
      </span>
    ),
  },
  {
    name: "Ajinomen",
    category: "Alimentos",
    activation: "Sampling Gamer & Eventos",
    renderLogo: () => (
      <span className="font-sans text-xl font-black text-[#EA1D2C] uppercase italic">
        Ajinomen
      </span>
    ),
  },
  {
    name: "360 Energy Drink",
    category: "Bebidas",
    activation: "Bebida Oficial Arenas",
    renderLogo: () => (
      <span className="font-mono text-xl font-black text-[#FF1356] uppercase">
        360° <span className="text-xs text-white">ENERGY</span>
      </span>
    ),
  },
  {
    name: "Pilsen Callao",
    category: "Bebidas",
    activation: "Comunidad & Torneos",
    renderLogo: () => (
      <span className="font-serif text-xl font-bold text-[#D3A936] uppercase italic">
        Pilsen
      </span>
    ),
  },
];

const lifestyleConsumerBrands: Brand[] = [
  {
    name: "Movistar GameClub",
    category: "Arenas & Franquicias",
    activation: "Jockey Plaza & Mega Plaza",
    renderLogo: () => (
      <span className="font-sans text-lg sm:text-xl font-black tracking-tight text-[#019DF4]">
        movistar <span className="text-[#7B85FF] font-mono text-xs">GAMECLUB</span>
      </span>
    ),
  },
  {
    name: "Falabella",
    category: "Retail & BTL",
    activation: "Coffee Party & Gamer Zones",
    renderLogo: () => (
      <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#9BCC00] uppercase">
        falabella<span className="text-white font-sans text-xs">.com</span>
      </span>
    ),
  },
  {
    name: "LEGO",
    category: "Entretenimiento",
    activation: "Activación Inmersiva",
    renderLogo: () => (
      <span className="px-2.5 py-0.5 bg-[#D11013] text-[#FFE800] font-black tracking-tight text-xl rounded">
        LEGO
      </span>
    ),
  },
  {
    name: "KMC",
    category: "Alimentos & Retail",
    activation: "Act II, Hunt's, PAM, AMA",
    renderLogo: () => (
      <span className="font-sans text-xl font-black text-[#2563EB] uppercase">
        KMC <span className="text-xs text-[#DC2626]">BRANDS</span>
      </span>
    ),
  },
  {
    name: "Atlantic City",
    category: "Entretenimiento",
    activation: "Esports Experience",
    renderLogo: () => (
      <span className="font-serif text-base sm:text-lg font-black tracking-widest text-[#E5C158] uppercase">
        Atlantic City
      </span>
    ),
  },
  {
    name: "Floril",
    category: "Cuidado Personal",
    activation: "Sampling Gamer Masivo",
    renderLogo: () => (
      <span className="font-sans text-lg font-bold text-[#06B6D4] uppercase">
        Floril
      </span>
    ),
  },
  {
    name: "Dreizt",
    category: "Gaming Chairs",
    activation: "Comodidad Oficial Arenas",
    renderLogo: () => (
      <span className="font-mono text-lg font-extrabold text-[#A855F7] uppercase tracking-wider">
        Dreizt
      </span>
    ),
  },
  {
    name: "Walon",
    category: "Indumentaria",
    activation: "Jerseys & Mercancía",
    renderLogo: () => (
      <span className="font-sans text-xl font-black text-[#E2E8F0] uppercase tracking-widest">
        WALON
      </span>
    ),
  },
  {
    name: "Pretties & Crackis",
    category: "Snacks",
    activation: "Contenido Creadores & Sampling",
    renderLogo: () => (
      <span className="font-sans text-base font-black text-[#F59E0B] uppercase">
        CRACKIS <span className="text-white text-xs">& PRETTIES</span>
      </span>
    ),
  },
  {
    name: "Versus",
    category: "Plataforma Esports",
    activation: "Competencias Online",
    renderLogo: () => (
      <span className="font-mono text-lg font-bold text-[#8B5CF6] uppercase">
        VERSUS
      </span>
    ),
  },
  {
    name: "Cool Fresh",
    category: "Consumo Masivo",
    activation: "Sampling en Torneos",
    renderLogo: () => (
      <span className="font-sans text-lg font-black text-[#38BDF8] uppercase">
        COOL FRESH
      </span>
    ),
  },
];

export default function TrustGrid() {
  // Combinar todas las marcas para la vista fija
  const allBrands = [...hardwareTechBrands, ...lifestyleConsumerBrands];

  return (
    <section
      id="marcas"
      className="relative py-12 sm:py-16 bg-zinc-950 border-t border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          
          {/* Header de la sección */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-4 h-4 opacity-50">
                <Image
                  src="/images/dem-icon-d-white.png"
                  alt="DEM"
                  fill
                  sizes="16px"
                  className="object-contain"
                />
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500">
                QUIÉNES CONFÍAN EN DEM
              </span>
            </div>
          </div>

          {/* Grid fijo de logos en escala de grises */}
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-x-12 gap-y-10">
            {allBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
                title={`${brand.name} - ${brand.activation}`}
              >
                {brand.renderLogo()}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
