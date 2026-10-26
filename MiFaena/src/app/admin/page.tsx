"use client";

import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <header className="border-b border-slate-800 bg-slate-950 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <span className="text-xl font-black text-emerald-500">MiFaena</span>
          <span className="bg-emerald-950 text-emerald-400 text-xs px-2 py-1 rounded font-bold border border-emerald-800">
            PANEL ADMIN
          </span>
        </div>
        <Link href="/" className="text-xs text-slate-400 hover:text-white transition">
          Cerrar sesión / Volver a la web
        </Link>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold text-white mb-6">Gestión de la plataforma (Extremadura)</h1>

        {/* Métricas rápidas */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Profesionales Pendientes", val: "3", alert: true },
            { label: "Suscripciones Activas", val: "12", alert: false },
            { label: "Demandas Activas", val: "28", alert: false },
            { label: "Ingresos Mensuales", val: "178,80 €", alert: false },
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-800 p-4 rounded-xl border border-slate-700">
              <p className="text-xs text-slate-400">{item.label}</p>
              <p className={`text-2xl font-bold mt-1 ${item.alert ? "text-amber-400" : "text-white"}`}>{item.val}</p>
            </div>
          ))}
        </div>

        {/* Gestión de Profesionales por verificar */}
        <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
          <h2 className="text-lg font-bold text-white mb-4">Verificación Manual de Profesionales</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="text-xs uppercase bg-slate-900 text-slate-400">
                <tr>
                  <th className="px-4 py-3">Nombre</th>
                  <th className="px-4 py-3">Categoría</th>
                  <th className="px-4 py-3">Provincia</th>
                  <th className="px-4 py-3">Documento (NIF)</th>
                  <th className="px-4 py-3">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                <tr>
                  <td className="px-4 py-3 font-medium text-white">Manitas Badajoz S.L.</td>
                  <td className="px-4 py-3">Pequeñas reparaciones</td>
                  <td className="px-4 py-3">Badajoz</td>
                  <td className="px-4 py-3 text-emerald-400">B06789123.pdf</td>
                  <td className="px-4 py-3 space-x-2">
                    <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1 rounded text-xs font-semibold">Aprobar</button>
                    <button className="bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded text-xs font-semibold">Rechazar</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}