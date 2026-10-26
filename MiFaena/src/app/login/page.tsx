"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Verificación especial de administrador
    if (email === "AdminMiFaena" && password === "Osiris170617") {
      alert("Acceso concedido como Administrador");
      router.push("/admin");
      return;
    }

    if (!email || !password) {
      setError("Por favor, introduce tu usuario/email y contraseña.");
      return;
    }

    // Simulación de acceso a usuario/profesional
    alert("Sesión iniciada correctamente");
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <Link href="/" className="text-3xl font-black text-emerald-600 tracking-tight">
          MiFaena
        </Link>
        <h2 className="mt-4 text-2xl font-bold text-slate-900">Inicia sesión en tu cuenta</h2>
        <p className="mt-2 text-sm text-slate-600">
          ¿No tienes cuenta?{" "}
          <Link href="/registro" className="font-semibold text-emerald-600 hover:text-emerald-500">
            Regístrate gratis
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4">
        <div className="bg-white py-8 px-6 shadow-md rounded-xl border border-slate-200 sm:px-10">
          {error && (
            <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm rounded">
              {error}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email o Nombre de usuario</label>
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ejemplo@mifaena.es o AdminMiFaena"
                className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Contraseña</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow-sm transition text-sm"
            >
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}