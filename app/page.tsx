import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";

import ProjectsSection from "@/components/ProjectsSection";
import ScrollProgressTracker from "@/components/ScrollProgressTracker";
import StickyNavbar from "@/components/StickyNavbar";

export default function Home() {
  return (
    <>
      <StickyNavbar />
      {/* Tracker Visual Superior e Indicador Lateral de Capítulos */}
      <ScrollProgressTracker />

      {/* 01. PORTADA: Video Real Dinámico + Mosaico Inmersivo + TrustGrid + Highlights */}
      <HeroSection />

      {/* 03. THE REVELATION: La Trinidad DEM (Contenido + Creadores + Experiencia) */}
      <ServicesSection />

      {/* 05. LIVE DEMONSTRATION: Casos Auditados + Video Torneo en Vivo + Creadores */}
      <ProjectsSection />
    </>
  );
}
