"use client"

import Image from "next/image"
import { useState } from "react"
import { ArrowUpRight } from "lucide-react"

const services = [
  {
    id: "paisajismo",
    title: "Paisajismo",
    description: "Diseñamos jardines y espacios exteriores que integran naturaleza y arquitectura, creando ambientes únicos que respetan el entorno.",
    image: "/images/service-landscaping.jpg",
    number: "01",
  },
  {
    id: "interiorismo",
    title: "Interiorismo",
    description: "Transformamos interiores con diseños funcionales y estéticos que reflejan tu personalidad, optimizando cada metro cuadrado.",
    image: "/images/service-interior.jpg",
    number: "02",
  },
  {
    id: "refacciones",
    title: "Refacciones",
    description: "Renovamos espacios existentes, respetando su esencia mientras incorporamos soluciones contemporáneas y mejoras estructurales.",
    image: "/images/service-renovation.jpg",
    number: "03",
  },
  {
    id: "adaptaciones",
    title: "Adaptaciones",
    description: "Rediseñamos espacios para nuevos usos, adaptando construcciones existentes a necesidades actuales sin perder su carácter original.",
    image: "/images/service-adaptation.jpg",
    number: "04",
  },
]

export function Services() {
  const [activeService, setActiveService] = useState(services[0].id)
  const currentService = services.find(s => s.id === activeService) || services[0]

  return (
    <section id="servicios" className="py-24 lg:py-32 bg-[#F2F2EE]"> {/* Fondo crema/piedra muy suave */}
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 lg:mb-24">
          <p className="font-mono text-xs tracking-[0.4em] text-[#708238] uppercase mb-4">
            Nuestra Experiencia
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl max-w-3xl text-balance text-[#2D2D2D]">
            Soluciones integrales para cada proyecto
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          
          {/* Image Side */}
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[600px] overflow-hidden rounded-sm border border-zinc-200">
            <Image
              src={currentService.image}
              alt={currentService.title}
              fill
              className="object-cover transition-all duration-700"
            />
            {/* El número de fondo ahora en un tono arena/oliva suave */}
            <div className="absolute bottom-6 left-6 font-mono text-7xl lg:text-9xl font-bold text-[#708238]/10">
              {currentService.number}
            </div>
          </div>

          {/* Services List */}
          <div className="flex flex-col justify-center">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`group text-left border-t border-zinc-300 py-6 lg:py-8 transition-all duration-500 ${
                  activeService === service.id 
                    ? "bg-white shadow-sm -mx-6 px-6" 
                    : "hover:bg-white/40 -mx-6 px-6"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className={`font-mono text-xs transition-colors duration-300 ${
                        activeService === service.id ? "text-[#708238]" : "text-zinc-400"
                      }`}>
                        {service.number}
                      </span>
                      <h3 className={`font-serif text-2xl lg:text-3xl transition-colors duration-300 ${
                        activeService === service.id ? "text-[#556B2F] italic" : "text-zinc-800"
                      }`}>
                        {service.title}
                      </h3>
                    </div>
                    <p className={`font-sans text-zinc-600 leading-relaxed transition-all duration-500 overflow-hidden ${
                      activeService === service.id ? "opacity-100 max-h-40 mt-4" : "opacity-0 max-h-0"
                    }`}>
                      {service.description}
                    </p>
                  </div>
                  <ArrowUpRight className={`w-5 h-5 mt-2 transition-all duration-300 ${
                    activeService === service.id ? "rotate-45 text-[#708238]" : "text-zinc-300 group-hover:text-zinc-500 group-hover:translate-x-1"
                  }`} />
                </div>
              </button>
            ))}
            <div className="border-t border-zinc-300" />
          </div>
        </div>
      </div>
    </section>
  )
}