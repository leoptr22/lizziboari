import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image con Overlay Gradual */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-architecture.jpg"
          alt="Arquitectura moderna Lizzi-Boari"
          fill
          className="object-cover scale-105 animate-fade-in" // Efecto de zoom sutil
          priority
        />
        {/* Overlay más oscuro en la base para resaltar los botones */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <p className="font-mono text-xs md:text-sm tracking-[0.5em] uppercase mb-8 opacity-80">
          Gualeguaychú, Entre Ríos — Desde 2013
        </p>
        
        <h1 className="font-serif leading-tight mb-8">
          <span className="block text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-2">
            Arquitectura
          </span>
          {/* Aplicando los dos colores y el tamaño aumentado */}
          <span className="block text-6xl md:text-8xl lg:text-9xl italic font-medium">
  {/* Lizzi: Gris carbón profundo para contraste sólido */}
  <span className="text-zinc-500 drop-shadow-sm">Lizzi</span>{' '}
  
  {/* Boari: Gris piedra claro para suavizar el conjunto */}
  <span className="text-zinc-400 drop-shadow-sm">Boari</span>
</span>
        </h1>

        <p className="font-sans text-lg md:text-xl max-w-xl mx-auto mb-12 opacity-90 leading-relaxed font-light">
          Diseñamos espacios que transforman la manera en que vivís, trabajás y sentís tu entorno.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            href="#servicios"
            className="group relative inline-flex items-center justify-center px-10 py-4 bg-white text-black font-mono text-xs tracking-[0.2em] uppercase transition-all hover:bg-lime-500 hover:text-white rounded-sm"
          >
            Ver Servicios
          </Link>
          <Link
            href="#contacto"
            className="inline-flex items-center justify-center px-10 py-4 border border-white/50 text-white font-mono text-xs tracking-[0.2em] uppercase hover:bg-white/10 transition-all backdrop-blur-sm rounded-sm"
          >
            Contactanos
          </Link>
        </div>
      </div>

      {/* Scroll Indicator Mejorado */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-50">Explorar</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  )
}