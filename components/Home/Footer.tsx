"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8 px-4 border-t border-white/10">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        {/* LOGO / MARCA (Opcional, pero queda bien centrado) */}
        <h2 className="text-2xl font-bold tracking-tighter mb-2">JCSA</h2>

        {/* COPYRIGHT */}
        <p className="text-gray-500 text-xs md:text-sm font-mono tracking-widest uppercase">
          © {currentYear} - todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}
