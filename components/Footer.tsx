import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-zinc-950/80 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand info con Logo Oficial DEM */}
          <div className="space-y-3 max-w-md">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative w-7 h-7 rounded-lg bg-[#3A45D0] p-1 flex items-center justify-center shadow-[0_0_15px_#3A45D0]">
                <Image
                  src="/images/dem-icon-d-white.png"
                  alt="DEM Icon"
                  fill
                  sizes="28px"
                  className="object-contain p-0.5"
                />
              </div>
              <div className="relative w-28 h-7">
                <Image
                  src="/images/dem-logo-white.png"
                  alt="DEM Agency"
                  fill
                  sizes="112px"
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="font-sans text-xs text-zinc-400 leading-relaxed">
              Digital Entertainment Management. Conectamos marcas con audiencias a través de experiencias que impactan en gaming, retail y entretenimiento.
            </p>
          </div>

          {/* Social Links: IG & LinkedIn Oficiales */}
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="https://instagram.com/dem_studiogamer"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de DEM Agency (@dem_studiogamer)"
              className="group flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
            >
              <svg
                className="w-5 h-5 fill-current transition-transform group-hover:scale-105"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span className="font-medium">@dem_studiogamer</span>
            </a>

            <a
              href="https://linkedin.com/company/digital-entertainment-management"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de DEM Agency"
              className="group flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
            >
              <svg
                className="w-5 h-5 fill-current transition-transform group-hover:scale-105"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span className="font-medium">Digital Entertainment Management</span>
            </a>
          </div>
        </div>

        {/* Separator */}
        <div className="h-px w-full bg-white/10 my-8" />

        {/* Bottom row: Legal & Libro de reclamaciones */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {currentYear} DEM Agency. Todos los derechos reservados.</p>

          <Link
            href="#libro-de-reclamaciones"
            className="group flex items-center gap-1.5 hover:text-zinc-300 transition-colors"
          >
            <svg
              className="w-4 h-4 text-zinc-500 group-hover:text-[#7B85FF] transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.75"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>
            <span className="underline-offset-2 hover:underline">Libro de reclamaciones</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
