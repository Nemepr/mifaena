"use client";

import { useState } from "react";
import Link from "next/link";

export default function ChatPage() {
  const [mensajes, setMensajes] = useState([
    { remitente: "cliente", texto: "Hola, necesito reparar una persiana en Badajoz esta semana." },
  ]);
  const [nuevoMensaje, setNuevoMensaje] = useState("");
  const [avisoSeguridad, setAvisoSeguridad] = useState("");

  // Filtro de seguridad que detecta teléfonos, emails, IBAN y DNI
  const filtrarMensaje = (texto: string) => {
    const patronTelefono = /(\+34|0034|34)?[ -]*[6789]\d{2}[ -]*\d{3}[ -]*\d{3}/g;
    const patronEmail = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const patronIBAN = /ES\d{2}[ -]*\d{4}[ -]*\d{4}[ -]*\d{4}[ -]*\d{4}[ -]*\d{4}/gi;

    if (patronTelefono.test(texto) || patronEmail.test(texto) || patronIBAN.test(texto)) {
      setAvisoSeguridad("Por seguridad, no se pueden compartir datos personales (teléfono, email, IBAN) por este chat. Acordad el lugar y la hora de la cita.");
      return texto.replace(patronTelefono, "[TELÉFONO BLOQUEADO]").replace(patronEmail, "[EMAIL BLOQUEADO]").replace(patronIBAN, "[DATOS BANCARIOS BLOQUEADOS]");
    }

    setAvisoSeguridad("");
    return texto;
  };

  const enviarMensaje = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nuevoMensaje.trim()) return;

    const textoFiltrado = filtrarMensaje(nuevoMensaje);
    setMensajes([...mensajes, { remitente: "profesional", texto: textoFiltrado }]);
    setNuevoMensaje("");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      {/* Cabecera del chat */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center">
        <div>
          <h1 className="font-bold text-slate-900">Chat de Servicio: Reparación de Persiana</h1>
          <p className="text-xs text-slate-500">Contacto entre Cliente y Profesional • Badajoz</p>
        </div>
        <Link href="/" className="text-xs text-emerald-600 font-semibold hover:underline">
          Volver a MiFaena
        </Link>
      </header>

      {/* Aviso fijo legal y de seguridad */}
      <div className="bg-amber-50 border-b border-amber-200 p-3 text-center text-xs text-amber-800 font-medium">
        ⚠️ La plataforma es solo intermediaria de contacto. Nunca pagues por adelantado ni facilites datos bancarios.
      </div>

      {/* Área de Mensajes */}
      <div className="flex-1 max-w-4xl w-full mx-auto p-4 overflow-y-auto space-y-4">
        {mensajes.map((m, idx) => (
          <div
            key={idx}
            className={`flex ${m.remitente === "profesional" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs sm:max-w-md p-3 rounded-2xl text-sm ${
                m.remitente === "profesional"
                  ? "bg-emerald-600 text-white rounded-br-none"
                  : "bg-white text-slate-800 border border-slate-200 rounded-bl-none shadow-sm"
              }`}
            >
              {m.texto}
            </div>
          </div>
        ))}

        {avisoSeguridad && (
          <div className="p-3 bg-red-100 border border-red-300 text-red-800 text-xs rounded-xl text-center">
            {avisoSeguridad}
          </div>
        )}
      </div>

      {/* Formulario de envío */}
      <form onSubmit={enviarMensaje} className="bg-white border-t border-slate-200 p-4">
        <div className="max-w-4xl mx-auto flex gap-2">
          <input
            type="text"
            value={nuevoMensaje}
            onChange={(e) => setNuevoMensaje(e.target.value)}
            placeholder="Escribe un mensaje para acordar la cita..."
            className="flex-1 border border-slate-300 rounded-xl px-4 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-xl text-sm font-semibold transition"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}