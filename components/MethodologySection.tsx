"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Step {
  number: string;
  phase: string;
  title: string;
  summary: string;
  deliverable: string;
  icon: string;
}

const methodologySteps: Step[] = [
  {
    number: "01",
    phase: "DIAGNÓSTICO & COMPETENCIA",
    title: "Entendemos tu marca",
    summary:
      "Realizamos una inmersión profunda en tu propuesta de valor, identificamos la percepción actual de tu audiencia y auditamos a la competencia en el entorno digital y físico.",
    deliverable: "Auditoría de afinidad + Benchmark de competidores",
    icon: "💡",
  },
  {
    number: "02",
    phase: "CONCEPTO & ESTRATEGIA",
    title: "Definimos una estrategia",
    summary:
      "Diseñamos una hoja de ruta que sume gran valor a tu negocio. Creamos territorios creativos e ideas con fuerza para destacar en redes sociales y puntos de contacto.",
    deliverable: "Estrategia de comunicación + Territorio creativo",
    icon: "✏️",
  },
  {
    number: "03",
    phase: "CREACIÓN & RODAJE",
    title: "Producimos contenido",
    summary:
      "Generamos piezas audiovisuales de alto impacto que conecten emocionalmente con las comunidades jóvenes, con objetivos cuantitativos y medibles desde el día uno.",
    deliverable: "Producción audiovisual 4K + Guiones nativos",
    icon: "📷",
  },
  {
    number: "04",
    phase: "DIFUSIÓN & COMUNIDAD",
    title: "Publicamos y conectamos",
    summary:
      "Desplegamos las piezas en los canales ideales junto a nuestro pool de creadores. Nos aseguramos de que el mensaje de marca sea nítido, memorable y sin ruidos.",
    deliverable: "Distribución multicanal + Amplificación de creadores",
    icon: "🚀",
  },
  {
    number: "05",
    phase: "ANALÍTICA & DATA",
    title: "Medimos y optimizamos",
    summary:
      "Monitoreamos en vivo el rendimiento de cada acción. Te entregamos reportes transparentes mes a mes con aprendizajes accionables para seguir escalando.",
    deliverable: "Reporte ejecutivo mensual de ROI y métricas clave",
    icon: "📊",
  },
];

export default function MethodologySection() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const progressBar = useTransform(scrollYProgress, [0.1, 0.85], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      id="metodologia"
      className="relative py-24 sm:py-32 bg-zinc-950 text-white overflow-hidden scroll-mt-20 lg:scroll-mt-24 border-t border-white/5"
    >
      {/* Resplandor ambiental */}
      <div
        className="absolute top-1/2 left-0 w-96 h-96 bg-[#3A45D0]/10 blur-[150px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Cabecera Editorial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#7B85FF] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#3A45D0]" />
              <span>05 // METODOLOGÍA PROBADA</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter uppercase leading-[1.02]">
              Así lo hacemos.
              <br />
              <span className="bg-gradient-to-r from-white via-blue-200 to-[#7B85FF] bg-clip-text text-transparent">
                Resultados que se ven. Estrategia concreta.
              </span>
            </h2>
          </div>

          <p className="font-sans text-sm sm:text-base text-zinc-300 max-w-md font-normal leading-relaxed">
            Un proceso lineal y transparente de 5 fases continuas donde cada idea responde a una métrica y cada acción fortalece la recordación de tu marca.
          </p>
        </div>

        {/* Línea de Conexión y Timeline Interactivo */}
        <div className="relative">
          {/* Barra de progreso de scroll de fondo */}
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-0.5 bg-white/10 z-0">
            <motion.div
              style={{ width: progressBar }}
              className="h-full bg-gradient-to-r from-[#3A45D0] via-[#7B85FF] to-emerald-400"
            />
          </div>

          {/* Grid de 5 Pasos Continuos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 relative z-10">
            {methodologySteps.map((step, idx) => {
              const isSelected = activeStep === idx;

              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`group relative flex flex-col justify-between p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isSelected
                      ? "bg-zinc-900/90 border-[#3A45D0] shadow-[0_0_30px_rgba(58,69,208,0.3)] scale-105"
                      : "bg-zinc-950/60 border-white/10 hover:border-white/25 hover:bg-zinc-900/40"
                  }`}
                >
                  <div className="space-y-4">
                    {/* Número y Nodo */}
                    <div className="flex items-center justify-between">
                      <span className="w-8 h-8 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-xs font-mono font-bold text-white group-hover:bg-[#3A45D0] transition-colors">
                        {step.number}
                      </span>
                      <span className="text-xl">{step.icon}</span>
                    </div>

                    <div className="text-[10px] font-mono tracking-widest uppercase text-[#7B85FF]">
                      {step.phase}
                    </div>

                    <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-white tracking-tight">
                      {step.title}
                    </h3>

                    <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                      {step.summary}
                    </p>
                  </div>

                  {/* Entregable Tangible */}
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <span className="text-[9px] font-mono uppercase text-zinc-400 block mb-1">
                      Entregable Clave:
                    </span>
                    <span className="text-xs font-semibold text-zinc-200 block">
                      {step.deliverable}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Banner de Cierre Metodológico */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#3A45D0]/20 via-zinc-900 to-black border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-[#7B85FF] uppercase">
              TRANSPARENCIA TOTAL & ESCALABILIDAD
            </span>
            <h4 className="font-display text-xl sm:text-2xl font-black uppercase text-white">
              Reportes Ejecutivos que Entiendes en Minutos
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300">
              Métricas precisas extraídas directamente de las plataformas: impresiones, visualizaciones completas, costo por interacción y leads presenciales.
            </p>
          </div>

          <a
            href="#contacto"
            className="shrink-0 px-6 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white text-zinc-950 hover:bg-zinc-200 transition-colors"
          >
            Solicitar Auditoría Inicial →
          </a>
        </div>
      </div>
    </section>
  );
}
