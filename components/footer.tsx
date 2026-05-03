import Link from "next/link"
import { Instagram, Facebook, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-3xl">LIZZI — BOARI</span>
            </Link>
            <p className="font-sans text-white/70 leading-relaxed max-w-xs">
              Estudio de arquitectura en Gualeguaychú, Entre Ríos. Transformamos ideas en espacios únicos desde 2013.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.3em] uppercase mb-6 text-white/50">
              Navegación
            </h4>
            <nav className="flex flex-col gap-3">
              <Link href="#inicio" className="font-sans text-white/70 hover:text-white transition-colors">
                Inicio
              </Link>
              <Link href="#servicios" className="font-sans text-white/70 hover:text-white transition-colors">
                Servicios
              </Link>
              <Link href="#sobre-mi" className="font-sans text-white/70 hover:text-white transition-colors">
                Sobre Mí
              </Link>
              <Link href="#contacto" className="font-sans text-white/70 hover:text-white transition-colors">
                Contacto
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.3em] uppercase mb-6 text-white/50">
              Redes Sociales
            </h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-white/20 hover:bg-white/10 transition-colors rounded-full"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-white/20 hover:bg-white/10 transition-colors rounded-full"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@lizziboari.com"
                className="p-3 border border-white/20 hover:bg-white/10 transition-colors rounded-full"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-white/50">
            © 2013 — {new Date().getFullYear()} Lizzi-Boari Arquitectura. Todos los derechos reservados.
          </p>
          <p className="font-mono text-xs text-white/50">
            Gualeguaychú, Entre Ríos, Argentina
          </p>
        </div>
        <a 
  href="www.leonelpiter.com" 
  target="_blank" 
  rel="noopener noreferrer"
  className="font-mono text-xs text-white/50 hover:text-[#C2B280] transition-colors duration-300"
>
  creado x leoptr-dev
</a>
      </div>
    </footer>
  )
}
