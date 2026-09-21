"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Metric {
  value: string;
  prefix: string;
  label: string;
  detail: string;
  benchmark: string;
}

interface AdnItem {
  number: string;
  tag: string;
  title: string;
  description: string;
  manifesto: string;
}

const metrics: Metric[] = [
  {
    prefix: "",
    value: "100%",
    label: "Racionales de Negocio",
    detail: "Cero improvisación. Cada campaña, contenido o activación responde a objetivos comerciales cuantificables y medibles.",
    benchmark: "BUSINESS STRATEGY FIRST // ZERO GUESSWORK",
  },
  {
    prefix: "",
    value: "3.4x",
    label: "Mayor Retención en Video",
    detail: "Frente a los 3 segundos promedio del mercado, nuestras producciones retienen a la Gen Z gracias a humor y códigos nativos.",
    benchmark: "ORGANIC ATTENTION & CULTURAL RELEVANCE",
  },
  {
    prefix: "",
    value: "27+",
    label: "Marcas Líderes Validadas",
    detail: "Confianza demostrada por gigantes de tecnología, consumo masivo, retail y telecomunicaciones en la región.",
    benchmark: "ENTERPRISE TRUST & REGIONAL TRACK RECORD",
  },
];

const adnItems: AdnItem[] = [
  {
    number: "01",
    tag: "COMPROMISO CORPORATIVO",
    title: "Respetuosos en Corporate",
    description: "Sabemos dialogar con directorios, cumplir contratos y cuidar la gobernanza con absoluta seriedad.",
    manifesto: "Gobernanza y rigor de negocio primero.",
  },
  {
    number: "02",
    tag: "ESPÍRITU INNOVADOR",
    title: "Rebeldes Innovando",
    description: "No hacemos fórmulas predecibles. Desafiamos lo convencional con formatos frescos y códigos nativos.",
    manifesto: "Valentía creativa para salir del molde.",
  },
  {
    number: "03",
    tag: "ESTÁNDAR EDITORIAL",
    title: "Buen Gusto & Calidad",
    description: "Elegimos calidad visual y autenticidad a favor del respeto que merece nuestro público.",
    manifesto: "Respeto total por la audiencia que nos ve.",
  },
  {
    number: "04",
    tag: "SINERGIA GENERACIONAL",
    title: "Cultura en Acción",
    description: "Dos generaciones (50 y 35 años) unidas para construir el puente que conecta marcas con jóvenes.",
    manifesto: "Donde la experiencia se une al pulso de la juventud.",
  },
];

export default function DynamicMetrics() {
  return (
    <section
      id="adn"
      className="relative min-h-screen flex flex-col justify-center py-24 sm:py-32 bg-zinc-950 text-white overflow-hidden select-none scroll-mt-20 lg:scroll-mt-24 border-t border-white/5"
    >
      {/* Resplandor corporativo */}
      <div
        className="absolute top-1/3 -right-32 w-96 h-96 bg-[#3A45D0]/15 blur-[160px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-0 w-96 h-96 bg-[#4932CA]/15 blur-[160px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 relative z-10">
        {/* PARTE 1: Métricas de Escala Verificadas */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="relative w-4 h-4">
                  <Image
                    src="/images/dem-icon-d-white.png"
                    alt="DEM"
                    fill
                    sizes="16px"
                    className="object-contain"
                  />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#7B85FF]">
                  09.A // DIFERENCIALES DE AGENCIA · RIGOR CORPORATIVO
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tighter uppercase text-white">
                VALOR QUE SE TRANSFORMA EN NEGOCIO
              </h2>
            </div>
            <p className="font-mono text-xs text-zinc-400">
              [ESTRATEGIA · RETENCIÓN · RESPALDO MULTINACIONAL]
            </p>
          </div>

          {/* Grid de 3 Columnas Estricto y Elegante */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-8 rounded-3xl bg-zinc-900/40 backdrop-blur-xl border border-white/10 hover:border-[#3A45D0]/50 hover:bg-zinc-900/70 transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase text-[#7B85FF]">
                    AUDIT_METRIC // 0{idx + 1}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                <div className="space-y-2">
                  <div className="font-display text-5xl sm:text-6xl font-black tracking-tight text-white flex items-baseline group-hover:text-[#7B85FF] transition-colors">
                    <span className="text-[#3A45D0] mr-1">{metric.prefix}</span>
                    <span>{metric.value}</span>
                  </div>

                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-white">
                    {metric.label}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                    {metric.detail}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider block">
                    {metric.benchmark}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* PARTE 2: LO QUE NOS DEFINE Y DIFERENCIA: ¿POR QUÉ DEM? (Página 12 del Deck) */}
        <div className="pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="relative w-4 h-4">
                  <Image
                    src="/images/dem-icon-d-white.png"
                    alt="DEM"
                    fill
                    sizes="16px"
                    className="object-contain"
                  />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#7B85FF]">
                  09.B // ADN DEM · FILOSOFÍA OPERATIVA
                </span>
              </div>
              <h2 className="font-display text-4xl sm:text-6xl font-black tracking-tighter uppercase text-white">
                ¿POR QUÉ DEM?
              </h2>
            </div>
            <span className="font-mono text-xs text-zinc-400">
              [RIGOR CORPORATIVO · VELOCIDAD · BUEN GUSTO]
            </span>
          </div>

          {/* Carriles Editoriales Borderless */}
          <div className="space-y-4">
            {adnItems.map((item, idx) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative p-6 sm:p-8 rounded-2xl border-b border-white/10 hover:border-[#3A45D0]/60 hover:bg-white/[0.02] transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 sm:gap-10">
                  <div className="flex items-baseline gap-6 max-w-xl">
                    <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-600 group-hover:text-[#7B85FF] transition-colors">
                      {item.number}
                    </span>

                    <div className="space-y-1">
                      <span className="text-[10px] font-mono tracking-widest text-[#7B85FF] uppercase block">
                        {item.tag}
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-white group-hover:text-white">
                        {item.title}
                      </h3>
                      <p className="font-sans text-xs text-zinc-400 italic">
                        &ldquo;{item.manifesto}&rdquo;
                      </p>
                    </div>
                  </div>

                  <div className="max-w-md pl-12 lg:pl-0 font-sans">
                    <p className="text-sm text-zinc-300 font-normal leading-relaxed group-hover:text-white transition-colors">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
