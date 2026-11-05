import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0d0e10] text-white flex flex-col items-center justify-center p-6 text-center">
      <h2 className="text-4xl font-serif font-bold mb-4">404 — Página no encontrada</h2>
      <p className="text-gray-400 font-sans mb-8">La página que buscas no existe o ha sido movida.</p>
      <Link 
        href="/" 
        className="border border-white px-6 py-2.5 text-xs font-sans uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
