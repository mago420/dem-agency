import StickyNavbar from "@/components/StickyNavbar";
import Image from "next/image";

// Datos de prueba para el calendario
const calendarEvents = [
  { month: "SEP", title: "Campaña Falabella Gamer", status: "En progreso", color: "bg-blue-500" },
  { month: "OCT", title: "Lanzamiento KMC V2", status: "Planificación", color: "bg-purple-500" },
  { month: "NOV", title: "Torneo Arena Finals", status: "Confirmado", color: "bg-green-500" },
  { month: "DIC", title: "Cierre de Año BTL", status: "Borrador", color: "bg-zinc-500" },
];

// Datos de prueba para el Kanban board
const kanbanColumns = [
  {
    title: "Por Hacer",
    cards: [
      { id: 1, text: "Aprobar guion de Influencer X", date: "20 Sep" },
      { id: 2, text: "Revisar props para el evento", date: "22 Sep" },
    ]
  },
  {
    title: "En Proceso",
    cards: [
      { id: 3, text: "Grabación de cápsulas Falabella", date: "Hoy", image: "/deck/assets/falabella-gamer-zone.jpg" },
    ]
  },
  {
    title: "En Revisión",
    cards: [
      { id: 4, text: "Edición de video resumen KMC", date: "Ayer", image: "/deck/assets/case-actii-kmc-1m.jpg" },
    ]
  },
  {
    title: "Completado",
    cards: [
      { id: 5, text: "Setup Torneo Arena", date: "15 Sep" },
    ]
  }
];

export default function EmpresasPage() {
  return (
    <div className="min-h-screen bg-[#09090b] w-full pb-20">
      <StickyNavbar />

      {/* SUB-HEADER B2B */}
      <div className="pt-32 pb-8 px-4 sm:px-8 max-w-screen-2xl mx-auto border-b border-white/5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-1 bg-[#06B6D4]" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#06B6D4]">
                Portal B2B
              </span>
            </div>
            <h1 className="font-display font-black text-4xl md:text-5xl uppercase text-white tracking-tight">
              Dashboard de <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">Activaciones</span>
            </h1>
          </div>
          
          <div className="flex items-center gap-4 bg-white/5 p-2 rounded-2xl border border-white/10 backdrop-blur-md">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold">
              FL
            </div>
            <div className="pr-4">
              <p className="text-sm font-bold text-white leading-none">Falabella Retail</p>
              <p className="text-xs text-zinc-400 mt-1">Socio Estratégico</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-8 max-w-screen-2xl mx-auto mt-8 grid grid-cols-1 xl:grid-cols-12 gap-8">
        
        {/* COLUMNA IZQUIERDA: CALENDARIO */}
        <div className="xl:col-span-4 space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm">
            <h2 className="font-display font-bold text-2xl uppercase tracking-tight text-white mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-[#06B6D4]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              Calendario Anual
            </h2>
            
            <div className="space-y-4">
              {calendarEvents.map((ev, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-black/40 border border-white/5 hover:border-white/20 transition-colors cursor-pointer group">
                  <div className="flex flex-col items-center justify-center w-14 h-14 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                    <span className="text-xs font-mono text-zinc-400 font-bold">{ev.month}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-sm">{ev.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className={`w-2 h-2 rounded-full ${ev.color}`} />
                      <span className="text-xs text-zinc-400">{ev.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-6 py-3 rounded-xl border border-white/10 text-sm font-bold uppercase tracking-widest text-zinc-300 hover:text-white hover:bg-white/5 transition-colors">
              Ver Calendario Completo
            </button>
          </div>
        </div>

        {/* COLUMNA DERECHA: PROJECT BOARD */}
        <div className="xl:col-span-8">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm min-h-[600px]">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display font-bold text-2xl uppercase tracking-tight text-white flex items-center gap-2">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                Project Board
              </h2>
              <button className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors">
                + Nuevo Ticket
              </button>
            </div>

            {/* KANBAN GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto pb-4">
              {kanbanColumns.map((col, idx) => (
                <div key={idx} className="flex flex-col gap-4 min-w-[250px]">
                  <div className="flex items-center justify-between">
                    <h3 className="font-mono text-sm font-bold text-zinc-400 uppercase tracking-wider">{col.title}</h3>
                    <span className="bg-white/10 text-white text-xs px-2 py-0.5 rounded-full">{col.cards.length}</span>
                  </div>
                  
                  <div className="flex flex-col gap-3 min-h-[400px] p-2 -mx-2 rounded-2xl bg-black/20">
                    {col.cards.map((card) => (
                      <div key={card.id} className="bg-[#18181b] p-4 rounded-2xl border border-white/10 cursor-pointer hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all group">
                        {('image' in card && typeof card.image === 'string') && (
                          <div className="relative w-full h-24 rounded-lg overflow-hidden mb-3">
                            <Image src={card.image} alt="Ref" fill className="object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                          </div>
                        )}
                        <p className="text-sm text-zinc-200 mb-4 line-clamp-2">{card.text}</p>
                        <div className="flex items-center justify-between mt-auto">
                          <span className="text-[10px] uppercase font-mono font-bold bg-white/5 text-zinc-400 px-2 py-1 rounded">
                            {card.date}
                          </span>
                          <div className="w-5 h-5 rounded-full bg-zinc-800 border border-zinc-700" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
