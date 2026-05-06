"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const maxScroll = 300
      const minScale = 0.65

      const newScale = Math.max(minScale, 1 - scrollY / maxScroll)
      setScale(newScale)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="font-futura relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      
      {/* 🔥 H1 SEO INVISIBLE */}
      <h1 className="sr-only">
        Arquitectura Lizzi Boari, estudio de arquitectura en Gualeguaychú Entre Ríos.
        Especialistas en proyectos, reformas y dirección de obra.
      </h1>

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-architecture.jpeg"
          alt="Estudio de arquitectura en Gualeguaychú Entre Ríos"
          fill
          className="object-cover scale-105 blur-[1.5px]"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 text-center text-white">
        
        {/* Ubicación */}
        <p className="text-[11px] md:text-xs tracking-[0.4em] uppercase mb-10 text-white/60">
          Gualeguaychú, Entre Ríos — Desde 2013
        </p>

        {/* LOGO + animación */}
        <div
          className="mx-auto inline-block mb-16 transition-transform duration-200"
          style={{ transform: `scale(${scale})` }}
        >
          <Image
            src="/images/logo.svg"
            alt="Lizzi Boari Arquitectura"
            width={600}
            height={200}
            className="object-contain"
            priority
          />
        </div>

        {/* Descripción */}
        <p className="text-base md:text-lg max-w-lg mx-auto mb-16 text-white/70 leading-relaxed">
          Diseñamos espacios que transforman la manera en que vivís,
          trabajás y sentís tu entorno.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          
          <Link
            href="#servicios"
            className="px-8 py-3 bg-white text-black text-xs tracking-[0.2em] uppercase hover:bg-neutral-200 transition"
          >
            Ver Servicios
          </Link>

          <Link
            href="#contacto"
            className="px-8 py-3 border border-white/40 text-white text-xs tracking-[0.2em] uppercase hover:bg-white/10 transition"
          >
            Contacto
          </Link>

        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/40">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  )
}