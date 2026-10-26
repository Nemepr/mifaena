export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Cabecera / Navegación */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-black text-emerald-600 tracking-tight">MiFaena</span>
            <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-medium">Extremadura</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-600">
            <a href="#servicios" className="hover:text-emerald-600 transition">Servicios</a>
            <a href="#como-funciona" className="hover:text-emerald-600 transition">Cómo funciona</a>
            <a href="#profesionales" className="hover:text-emerald-600 transition">Para Profesionales</a>
          </nav>
          <div className="flex items-center space-x-3">
            <button className="text-sm font-medium text-slate-700 hover:text-emerald-600 px-3 py-2">Iniciar sesión</button>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-sm transition">
              Crear cuenta
            </button>
          </div>
        </div>
      </header>

      {/* Sección Principal (Hero) */}
      <section className="bg-gradient-to-b from-emerald-900 to-emerald-800 text-white py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Resuelve cualquier faena con profesionales locales
          </h1>
          <p className="text-lg text-emerald-100">
            Conectamos a clientes que necesitan ayuda con expertos verificados en Badajoz y Cáceres. Rápido, seguro y de confianza.
          </p>
          
          {/* Buscador rápido */}
          <div className="bg-white p-2 rounded-xl shadow-lg flex flex-col sm:flex-row gap-2 max-w-xl mx-auto mt-8">
            <input 
              type="text" 
              placeholder="¿Qué servicio necesitas? (Ej. Limpieza, electricista...)" 
              className="flex-grow px-4 py-3 text-slate-800 text-sm focus:outline-none"
            />
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg text-sm transition">
              Buscar faena
            </button>
          </div>
        </div>
      </section>

      {/* Categorías Principales */}
      <section id="servicios" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Categorías más solicitadas</h2>
          <p className="text-slate-600 mt-2">Encuentra al profesional ideal cerca de ti</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Cuidado de mayores", desc: "Acompañamiento y asistencia domiciliaria.", icon: "👵" },
            { title: "Limpieza del hogar", desc: "Casas, oficinas y limpiezas de obra.", icon: "✨" },
            { title: "Clases particulares", desc: "Apoyo escolar, idiomas y refuerzo.", icon: "📚" },
            { title: "Pequeñas reparaciones", desc: "Fontanería, electricidad y manitas.", icon: "🔧" },
          ].map((cat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition cursor-pointer group">
              <div className="text-3xl mb-4">{cat.icon}</div>
              <h3 className="font-semibold text-lg text-slate-900 group-hover:text-emerald-600 transition">{cat.title}</h3>
              <p className="text-slate-600 text-sm mt-1">{cat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pie de página */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2026 MiFaena. Plataforma intermediaria de contacto en Extremadura (Badajoz y Cáceres).</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition">Aviso legal</a>
            <a href="#" className="hover:text-white transition">Privacidad</a>
            <a href="#" className="hover:text-white transition">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
}