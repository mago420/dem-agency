import StickyNavbar from "@/components/StickyNavbar";
import Image from "next/image";

// Datos de prueba para Misiones
const missions = [
  {
    id: 1,
    brand: "Ajinomoto",
    title: "Sopa Challenge: Ajinomen",
    description: "Crea un TikTok mostrando tu setup gamer mientras comes Ajinomen con un efecto especial.",
    reward: "500 XP + VIP Pass",
    rarity: "LEGENDARIA",
    rarityColor: "from-yellow-400 to-orange-500",
    image: "/deck/assets/experience-ajinomen-soup.jpg"
  },
  {
    id: 2,
    brand: "Coolbox",
    title: "Unboxing Headset Gamer",
    description: "Haz un short en YouTube haciendo unboxing rápido de los nuevos audífonos Coolbox.",
    reward: "200 XP",
    rarity: "ÉPICA",
    rarityColor: "from-purple-400 to-pink-500",
    image: "/deck/assets/case-coolbox-cup.jpg"
  },
  {
    id: 3,
    brand: "Falabella",
    title: "Visita a la Gamer Zone",
    description: "Visita la zona gamer de Falabella Jockey Plaza, graba unas historias interactuando con la comunidad.",
    reward: "100 XP",
    rarity: "RARA",
    rarityColor: "from-blue-400 to-cyan-500",
    image: "/deck/assets/falabella-gamer-zone.jpg"
  },
];

export default function CreadoresPage() {
  return (
    <div className="min-h-screen bg-black w-full pb-20 overflow-hidden">
      <StickyNavbar />

      {/* HEADER GAMIFICADO: PERFIL DEL CREADOR */}
      <section className="pt-32 pb-12 px-4 sm:px-8 max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-zinc-900 to-black border border-white/10 rounded-[3rem] p-8 md:p-12 relative overflow-hidden shadow-[0_0_50px_rgba(58,69,208,0.15)]">
          
          {/* Fondo animado estilo tarjeta de rareza */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-600 to-transparent blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-600 to-transparent blur-[80px]" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            {/* Avatar */}
            <div className="relative w-32 h-32 rounded-full border-4 border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.5)] overflow-hidden shrink-0">
              <Image src="/deck/assets/creator-limaconcafeina.jpg" alt="Avatar" fill className="object-cover" />
            </div>
            
            {/* Info y Nivel */}
            <div className="flex-1 text-center md:text-left w-full">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                <div>
                  <h1 className="font-display font-black text-4xl text-white uppercase tracking-tight drop-shadow-md">
                    LimaConCafeina
                  </h1>
                  <p className="font-mono text-sm text-cyan-400 font-bold tracking-widest uppercase">
                    Rango: <span className="text-white">Diamante V</span>
                  </p>
                </div>
                
                {/* Badge Nivel */}
                <div className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-black/50 border border-purple-500/50 backdrop-blur-md">
                  <span className="text-zinc-400 font-mono text-xs uppercase tracking-widest">Nivel</span>
                  <span className="text-3xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                    42
                  </span>
                </div>
              </div>

              {/* Barra de XP */}
              <div className="mt-6 w-full bg-zinc-800 rounded-full h-3 border border-white/10 overflow-hidden">
                <div className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 h-full w-[75%] shadow-[0_0_10px_rgba(200,50,255,0.8)]" />
              </div>
              <div className="flex justify-between mt-2 text-xs font-mono text-zinc-500">
                <span>7,500 XP</span>
                <span>Siguiente Nivel: 10,000 XP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TITULAR MISIONES */}
      <section className="px-4 sm:px-8 max-w-5xl mx-auto mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-display font-black text-3xl md:text-5xl uppercase text-white tracking-tighter flex items-center gap-4">
              Misiones <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 drop-shadow-lg">Disponibles</span>
            </h2>
            <p className="font-sans text-zinc-400 mt-2">Acepta retos de marcas y sube de rango en el ecosistema.</p>
          </div>
          <div className="hidden md:flex gap-2">
            <button className="px-4 py-2 rounded-full border border-white/20 text-white text-xs font-mono uppercase bg-white/5 hover:bg-white/10">Nuevas</button>
            <button className="px-4 py-2 rounded-full border border-white/20 text-white text-xs font-mono uppercase bg-white/5 hover:bg-white/10">Más XP</button>
          </div>
        </div>
      </section>

      {/* LISTA DE MISIONES (BATTLEPASS CARDS) */}
      <section className="px-4 sm:px-8 max-w-5xl mx-auto space-y-6">
        {missions.map((mission) => (
          <div 
            key={mission.id} 
            className="group relative flex flex-col md:flex-row gap-6 p-4 md:p-6 rounded-[2rem] bg-[#111] border border-white/10 overflow-hidden transition-all duration-300 hover:border-purple-500/50 hover:bg-[#151515] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(168,85,247,0.15)]"
          >
            {/* Indicador lateral de rareza */}
            <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${mission.rarityColor} shadow-[0_0_15px_rgba(255,255,255,0.5)]`} />

            {/* Imagen de la misión */}
            <div className="relative w-full md:w-64 aspect-video md:aspect-square rounded-2xl overflow-hidden shrink-0">
              <Image src={mission.image} alt={mission.brand} fill className="object-cover opacity-80 group-hover:opacity-100 transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Contenido */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">{mission.brand}</span>
                <span className={`px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded bg-gradient-to-r ${mission.rarityColor} text-black`}>
                  {mission.rarity}
                </span>
              </div>
              
              <h3 className="font-display font-black text-2xl md:text-3xl text-white uppercase leading-none mb-3">
                {mission.title}
              </h3>
              
              <p className="font-sans text-sm text-zinc-400 line-clamp-2 md:line-clamp-none max-w-lg mb-6">
                {mission.description}
              </p>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto border-t border-white/5 pt-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono uppercase text-zinc-500">Recompensa:</span>
                  <span className="font-display font-bold text-lg text-white">{mission.reward}</span>
                </div>
                
                <button className="px-8 py-3 bg-[#3A45D0] hover:bg-[#4932CA] text-white font-bold uppercase tracking-widest text-sm rounded-full transition-all shadow-[0_0_20px_rgba(58,69,208,0.4)] group-hover:shadow-[0_0_30px_rgba(58,69,208,0.8)]">
                  Aceptar Misión
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
