"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegistroPage() {
  const [role, setRole] = useState<"cliente" | "profesional">("cliente");
  const [categoria, setCategoria] = useState("");
  const [provincia, setProvincia] = useState("Badajoz");

  const categoriasExtremadura = [
    "Cuidado de personas mayores y ayuda a domicilio",
    "Limpieza de hogar y plancha",
    "Clases particulares y apoyo escolar",
    "Pequeñas reparaciones y manitas a domicilio",
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-lg text-center">
        <Link href="/" className="text-3xl font-black text-emerald-600 tracking-tight">
          MiFaena
        </Link>
        <h2 className="mt-4 text-2xl font-bold text-slate-900">Crea tu cuenta en Extremadura</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg px-4">
        <div className="bg-white py-8 px-6 shadow-md rounded-xl border border-slate-200 sm:px-10">
          
          {/* Selector de rol */}
          <div className="flex bg-slate-100 p-1 rounded-lg mb-6">
            <button
              type="button"
              onClick={() => setRole("cliente")}
              className={`flex-1 py-2 text-xs sm:text-sm font-semibold rounded-md transition ${
                role === "cliente" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Soy Cliente (Busco ayuda)
            </button>
            <button
              type="button"
              onClick={() => setRole("profesional")}
              className={`flex-1 py-2 text-xs sm:text-sm font-semibold rounded-md transition ${
                role === "profesional" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Soy Profesional (Ofrezco servicios)
            </button>
          </div>

          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Registro enviado correctamente"); }}>
            <div>
              <label className="block text-sm font-medium text-slate-700">Nombre completo / Empresa</label>
              <input type="text" required placeholder="Ej. María García" className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-800 text-sm" />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Correo electrónico</label>
              <input type="email" required placeholder="tu@email.com" className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-800 text-sm" />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Provincia en Extremadura</label>
              <select
                value={provincia}
                onChange={(e) => setProvincia(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-800 text-sm"
              >
                <option value="Badajoz">Badajoz</option>
                <option value="Cáceres">Cáceres</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">
                {role === "profesional" ? "Categoría en la que prestas servicio" : "Categoría de servicio que necesitas"} *
              </label>
              <select
                required
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-800 text-sm"
              >
                <option value="">-- Selecciona una de las 4 categorías --</option>
                {categoriasExtremadura.map((cat, idx) => (
                  <option key={idx} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {role === "profesional" && (
              <div>
                <label className="block text-sm font-medium text-slate-700">NIF / CIF (Para verificación manual)</label>
                <input type="text" required placeholder="12345678X" className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-800 text-sm" />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-slate-700">Contraseña</label>
              <input type="password" required placeholder="Mínimo 8 caracteres" className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-800 text-sm" />
            </div>

            <button
              type="submit"
              className="w-full mt-4 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow-sm transition text-sm"
            >
              {role === "profesional" ? "Continuar al Plan de Suscripción" : "Crear cuenta de Cliente gratis"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}