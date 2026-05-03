"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#sobre-mi", label: "Sobre Mí" },
  { href: "#contacto", label: "Contacto" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-zinc-100">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative w-12 h-12 overflow-hidden rounded-full border border-zinc-200 shadow-sm transition-transform group-hover:scale-105">
              <Image
                src="/images/logo-lizzi-boari.png"
                alt="Lizzi Boari Arquitectura"
                fill
                className="object-contain p-1"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-widest leading-none italic">
                <span className="text-zinc-800">Lizzi</span>{' '}
                <span className="text-zinc-400">Boari</span>
              </span>
              <span className="font-mono text-[9px] tracking-[0.3em] text-zinc-500 uppercase mt-1">
                Arquitectura
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500 hover:text-zinc-900 transition-colors relative group"
              >
                {link.label}
                {/* Línea decorativa al hacer hover */}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-zinc-800 transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden text-zinc-800 p-2"
            aria-label="Abrir menú"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation (Menu desplegable blanco) */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-zinc-100 animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col py-6 shadow-xl">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-8 py-4 font-mono text-xs tracking-widest text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}