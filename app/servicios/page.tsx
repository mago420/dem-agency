import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Nuestros Servicios | DEM Agency",
  description:
    "Soluciones integrales de gaming marketing: estrategias B2B, gestión de redes sociales, eventos BTL y operación de centros GameClubs.",
};

interface ServiceItem {
  id: string;
  letter: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

const services: ServiceItem[] = [
  {
    id: "gaming-marketing",
    letter: "A",
    title: "Gaming Marketing",
    subtitle: "Estrategias B2B",
    description:
      "Diseño de planes estratégicos para introducir y consolidar marcas corporativas en el ecosistema gamer con seriedad, rigor de marca y retorno de inversión.",
    features: [
      "Consultoría y posicionamiento de marca",
      "Negociación de patrocinios y alianzas",
      "Segmentación de audiencias Gen Z y Alpha",
    ],
  },
  {
    id: "rrss-contenido",
    letter: "B",
    title: "Gestión de RRSS y Contenido",
    subtitle: "Audiencias Digitales",
    description:
      "Creación de narrativas envolventes y gestión de comunidades altamente leales en plataformas clave como Twitch, TikTok, YouTube y Discord.",
    features: [
      "Campañas con creadores y streamers líderes",
      "Producción de contenido audiovisual especializado",
      "Community management con códigos nativos gamer",
    ],
  },
  {
    id: "eventos-btl",
    letter: "C",
    title: "Activación de Eventos BTL",
    subtitle: "Experiencias Presenciales",
    description:
      "Conceptualización, producción técnica y montaje de espacios de alto impacto sensorial para ferias, torneos presenciales y retail.",
    features: [
      "Diseño y construcción de stands experienciales",
      "Torneos presenciales y dinámicas interactivas",
      "Staff capacitado y logística de operaciones en vivo",
    ],
  },
  {
    id: "gameclubs",
    letter: "D",
    title: "Gestión de Centros de Experiencias",
    subtitle: "GameClubs & Arenas",
    description:
      "Operación integral de arenas y recintos de entretenimiento gaming en centros comerciales de alto tránsito, garantizando excelencia operativa.",
    features: [
      "Gestión operativa diaria y mantenimiento técnico",
      "Atención al cliente y dinámicas comunitarias",
      "Integración de activaciones de marcas patrocinadoras",
    ],
  },
];

export default function ServiciosPage() {
  return (
    <div className="bg-transparent text-zinc-200">
      {/* Header Section */}
      <section className="relative py-20 lg:py-28 border-b border-white/10 overflow-hidden">
        {/* Textura técnica de fondo */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,#000_50%,transparent_100%)] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#3A45D0]/15 border border-[#3A45D0]/30 text-[#7B85FF] text-xs font-mono font-semibold tracking-wide uppercase mb-6 backdrop-blur-md">
              <div className="relative w-3.5 h-3.5">
                <Image
                  src="/images/dem-icon-d-white.png"
                  alt="DEM"
                  fill
                  sizes="14px"
                  className="object-contain"
                />
              </div>
              <span>// CAPACIDADES ESTRATÉGICAS DEM</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Nuestros Servicios
            </h1>

            <p className="font-sans mt-6 text-lg sm:text-xl text-zinc-300 leading-relaxed font-normal">
              Ofrecemos soluciones 360° para conectar a las marcas con el mundo del
              gaming: desde la estrategia corporativa inicial hasta la ejecución
              presencial y la creación de contenidos de alto alcance.
            </p>
          </div>
        </div>
      </section>

      {/* Grid de Servicios */}
      <section className="py-20 lg:py-28 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <article
                key={service.id}
                className="group relative rounded-3xl bg-zinc-900/50 backdrop-blur-xl border border-white/10 p-8 sm:p-10 shadow-2xl hover:border-[#3A45D0]/50 hover:bg-zinc-900/70 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Badge superior e indicador */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-[#3A45D0]/20 text-[#7B85FF] font-mono font-bold text-sm border border-[#3A45D0]/30 group-hover:bg-[#3A45D0] group-hover:text-white transition-colors">
                      {service.letter}
                    </span>

                    <span className="text-xs font-mono font-medium text-zinc-500 uppercase tracking-wider">
                      {service.subtitle}
                    </span>
                  </div>

                  {/* Título de servicio */}
                  <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-[#7B85FF] transition-colors">
                    {service.title}
                  </h2>

                  {/* Descripción */}
                  <p className="font-sans mt-4 text-base text-zinc-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Lista de características / entregables */}
                  <ul className="mt-6 space-y-2.5 pt-6 border-t border-white/10 font-sans">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-sm text-zinc-300"
                      >
                        <svg
                          className="w-4 h-4 text-[#7B85FF] shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between font-sans">
                  <span className="text-xs font-mono font-medium text-zinc-500">
                    DEM_B2B_SERVICE
                  </span>

                  <Link
                    href="/#contacto"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#7B85FF] hover:text-white group-hover:translate-x-0.5 transition-all"
                  >
                    Cotizar solución
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Banner de Contacto al final */}
          <div className="mt-16 rounded-3xl bg-gradient-to-r from-[#3A45D0] via-[#4932CA] to-[#252B8C] text-white p-8 sm:p-12 text-center flex flex-col items-center justify-center relative overflow-hidden shadow-[0_0_50px_rgba(58,69,208,0.35)] font-sans">
            <div
              className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"
              aria-hidden="true"
            />
            <div className="relative z-10 max-w-2xl">
              <h3 className="font-display text-2xl sm:text-3xl font-black tracking-tight">
                ¿Tu marca busca ingresar al ecosistema gamer?
              </h3>
              <p className="mt-3 text-blue-100 text-base sm:text-lg font-normal">
                Agendemos una sesión estratégica para evaluar objetivos, audiencias y formatos ideales.
              </p>
              <Link
                href="/#contacto"
                className="mt-6 inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-bold text-slate-950 bg-white hover:bg-zinc-100 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all duration-300 shadow-lg"
              >
                Conversemos ahora
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
