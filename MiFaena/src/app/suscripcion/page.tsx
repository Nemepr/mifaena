"use client";

import { useState } from "react";
import Link from "next/link";

export default function SuscripcionPage() {
  const [planSeleccionado, setPlanSeleccionado] = useState("semanal");

  const planes = [
    { id: "semanal", nombre: "Plan Semanal", precio: "4,99 €", periodo: "/semana", desc: "Prueba gratuita de 7 días. Luego 4,99€/sem (+IVA). Cancela cuando quieras." },
    { id: "mensual", nombre: "Plan Mensual", precio: "9,99 €", periodo: "/mes", desc: "Cobro mensual (+IVA). Acceso ilimitado a demandas de tu zona." },
    { id: "anual", nombre: "Plan Anual", precio: "79,99 €", periodo: "/año", desc: "Ahorras más del 30% (+IVA). La opción más rentable." },
    { id: "fundador", nombre: "Plan Fundador (Primeros 50)", precio: "5,99 €", periodo: "/mes", desc: "¡Precio bloqueado de por vida para los 50 primeros profesionales!" },
  ];

  const handlePagar = () => {
    // Aquí se conecta con la pasarela oficial de Stripe Checkout
    alert(`Redirigiendo a la pasarela segura de Stripe para activar el ${planSeleccionado.toUpperCase()}...`);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <Link href="/" className="text-3xl font-black text-emerald-600 tracking-tight">
          MiFaena
        </Link>
        <h1 className="mt-4 text-3xl font-extrabold text-slate-900">Activa tu suscripción profesional</h1>
        <p className="mt-2 text-slate-600">
          Comienza tus 7 días de prueba. Si no cancelas antes, se cobrará el plan seleccionado.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {planes.map((p) => (
          <div
            key={p.id}
            onClick={() => setPlanSeleccionado(p.id)}
            className={`cursor-pointer p-6 rounded-2xl border-2 transition relative bg-white ${
              planSeleccionado === p.id
                ? "border-emerald-600 shadow-md ring-2 ring-emerald-500/20"
                : "border-slate-200 hover:border-slate-300"
            }`}
          >
            {p.id === "fundador" && (
              <span className="absolute -top-3 right-4 bg-amber-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow">
                ¡Oferta Limitada!
              </span>
            )}
            <h3 className="text-lg font-bold text-slate-900">{p.nombre}</h3>
            <div className="mt-2 flex items-baseline">
              <span className="text-3xl font-extrabold text-slate-900">{p.precio}</span>
              <span className="text-sm text-slate-500 ml-1">{p.periodo} (+IVA)</span>
            </div>
            <p className="mt-3 text-sm text-slate-600">{p.desc}</p>
          </div>
        ))}
      </div>

      <div className="max-w-md mx-auto mt-8 text-center">
        <button
          onClick={handlePagar}
          className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg transition text-base"
        >
          Ir al pago seguro en Stripe 🔒
        </button>
        <p className="text-xs text-slate-500 mt-3">
          Pago 100% cifrado y seguro. Sin permanencia, cancela en cualquier momento desde tu panel.
        </p>
      </div>
    </div>
  );
}