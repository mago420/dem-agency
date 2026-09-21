import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Quiénes Somos | DEM Agency",
  description:
    "Somos una agencia de marketing especializada en entretenimiento digital y gaming. Fundados en 2019, transformamos la conexión entre las marcas y las nuevas generaciones.",
};

export default function QuienesSomosPage() {
  return (
    <div className="bg-transparent text-zinc-200">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 border-b border-white/10 overflow-hidden">
        {/* Textura técnica de fondo */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_50%,transparent_100%)] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <span>// NUESTRA HISTORIA · DESDE 2019</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
            Quiénes somos
          </h1>

          <p className="font-sans mt-8 text-xl sm:text-2xl text-zinc-300 font-normal leading-relaxed">
            Somos una agencia de marketing especializada en entretenimiento digital
            y gaming. Fundados en 2019, ayudamos a las marcas a conectar de manera
            auténtica con la audiencia gamer mediante estrategias de alto impacto,
            creación de contenido y experiencias presenciales.
          </p>

          {/* Estadísticas / Pilares clave */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/10 backdrop-blur-md">
              <span className="text-3xl font-extrabold text-[#7B85FF] tracking-tight font-display">
                2019
              </span>
              <p className="mt-1 text-sm font-semibold text-white font-sans">
                Año de fundación
              </p>
              <p className="mt-1 text-xs text-zinc-400 font-sans">
                Pioneros en gaming marketing profesional en la región.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/10 backdrop-blur-md">
              <span className="text-3xl font-extrabold text-[#7B85FF] tracking-tight font-display">
                B2B & BTL
              </span>
              <p className="mt-1 text-sm font-semibold text-white font-sans">
                Estrategia Integral
              </p>
              <p className="mt-1 text-xs text-zinc-400 font-sans">
                De la planificación estratégica a la ejecución operativa en campo.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/10 backdrop-blur-md">
              <span className="text-3xl font-extrabold text-[#7B85FF] tracking-tight font-display">
                100%
              </span>
              <p className="mt-1 text-sm font-semibold text-white font-sans">
                Conexión Auténtica
              </p>
              <p className="mt-1 text-xs text-zinc-400 font-sans">
                Respeto por los códigos y el lenguaje de la comunidad gamer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Nuestra Visión */}
      <section className="py-20 lg:py-28 bg-transparent">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-zinc-900/50 border border-white/10 shadow-2xl p-8 sm:p-12 lg:p-16 overflow-hidden backdrop-blur-xl">
            {/* Halo sutil de fondo */}
            <div
              className="absolute -right-20 -top-20 w-80 h-80 bg-[#3A45D0]/20 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10">
              <span className="inline-block text-xs font-mono font-bold uppercase tracking-widest text-[#7B85FF] mb-3">
                // Propósito Estratégico
              </span>

              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
                Nuestra Visión
              </h2>

              <blockquote className="font-sans mt-6 text-xl sm:text-2xl lg:text-3xl font-medium text-white leading-relaxed italic border-l-4 border-[#3A45D0] pl-6 my-8">
                “Ser la agencia de marketing líder en entretenimiento digital,
                reconocida por transformar la conexión entre las marcas y las
                nuevas generaciones.”
              </blockquote>

              <p className="font-sans mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
                Creemos que el gaming no es solo un pasatiempo, sino el lenguaje
                cultural predominante de las audiencias jóvenes. Nuestro rol es
                guiar a las marcas corporativas para que participen con valor,
                credibilidad y resultados de negocio sostenibles.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/servicios"
                  className="inline-flex items-center justify-center px-7 py-3 rounded-full text-sm font-semibold text-white bg-[#3A45D0] hover:bg-[#4932CA] transition-all shadow-[0_0_20px_#3A45D0] font-sans"
                >
                  Ver nuestros servicios
                </Link>

                <Link
                  href="/#casos-de-exito"
                  className="inline-flex items-center justify-center px-7 py-3 rounded-full text-sm font-semibold text-zinc-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors font-sans"
                >
                  Explorar proyectos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
