"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    id: string
  ) => {
    if (isHome) {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-2xl border-b border-white/10 transition-all font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo DEM Oficial */}
          <Link href="/" className="group flex items-center gap-3 shrink-0">
            <div className="relative w-8 h-8 rounded-lg bg-[#3A45D0] p-1.5 flex items-center justify-center shadow-[0_0_20px_#3A45D0] group-hover:bg-[#4932CA] transition-colors shrink-0">
              <Image
                src="/images/dem-icon-d-white.png"
                alt="DEM Icon"
                fill
                sizes="32px"
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="relative w-24 h-7">
              <Image
                src="/images/dem-logo-white.png"
                alt="DEM Agency"
                fill
                sizes="96px"
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Acciones Derecha: Solo CTA Principal */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="/#contacto"
              onClick={(e) => handleNavClick(e, "/#contacto", "contacto")}
              className="inline-flex items-center justify-center px-5 py-2 text-xs font-sans font-semibold uppercase tracking-wider text-white bg-[#3A45D0] hover:bg-[#4932CA] rounded-full transition-all shadow-[0_0_20px_#3A45D0] hover:shadow-[0_0_30px_#3A45D0] hover:scale-105 active:scale-95 cursor-pointer"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

