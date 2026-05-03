import Image from "next/image"

export function About() {
  return (
    <section
      id="sobre-mi"
      className="py-24 lg:py-32 bg-gradient-to-b from-zinc-100 to-zinc-200"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0">
              <Image
                src="/images/lizzi.png"
                alt="Arquitecto del estudio Lizzi Boari"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-lg"
              />
              {/* Decorative Frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/40 -z-10 rounded-lg" />
            </div>

            {/* Floating Year Badge */}
            <div className="absolute -top-4 -left-4 lg:top-8 lg:-left-8 bg-white text-zinc-800 p-6 rounded-lg shadow-md">
              <span className="font-mono text-xs tracking-wider block mb-1 text-zinc-500">
                DESDE
              </span>
              <span className="font-serif text-4xl">2013</span>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:pl-8">
            <p className="font-mono text-sm tracking-[0.3em] text-zinc-500 uppercase mb-4">
              (Sobre Nosotros)
            </p>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 text-zinc-900 text-balance">
              Arquitectura con visión
            </h2>

            <div className="space-y-6 font-sans text-zinc-600 leading-relaxed">
              <p>
                Somos un estudio de arquitectura fundado en Gualeguaychú, Entre Ríos,
                con más de una década de experiencia transformando espacios y creando
                hogares únicos para nuestros clientes.
              </p>
              <p>
                Nuestra filosofía se basa en escuchar las necesidades de cada cliente
                y traducirlas en diseños que combinan funcionalidad, estética y
                sustentabilidad. Cada proyecto es una oportunidad para crear algo
                excepcional.
              </p>
              <p>
                Desde viviendas familiares hasta espacios comerciales, abordamos cada
                desafío con creatividad y profesionalismo, siempre buscando superar
                las expectativas.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-zinc-300">
              <div>
                <span className="font-serif text-4xl lg:text-5xl text-primary">
                  +100
                </span>
                <p className="font-mono text-xs tracking-wide text-zinc-500 mt-2">
                  Proyectos Realizados
                </p>
              </div>

              <div>
                <span className="font-serif text-4xl lg:text-5xl text-primary">
                  12
                </span>
                <p className="font-mono text-xs tracking-wide text-zinc-500 mt-2">
                  Años de Experiencia
                </p>
              </div>

              <div>
                <span className="font-serif text-4xl lg:text-5xl text-primary">
                  +50
                </span>
                <p className="font-mono text-xs tracking-wide text-zinc-500 mt-2">
                  Clientes Satisfechos
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}