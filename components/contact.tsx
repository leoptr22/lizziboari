"use client"

import { MapPin, Phone, Mail, Instagram, Facebook, Clock, MessageCircle } from "lucide-react"
import Image from "next/image"

export function Contact() {
  return (
    <section id="contacto" className="py-24 lg:py-32 bg-gradient-to-b from-background to-primary/10">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 lg:mb-20 text-center max-w-3xl mx-auto">
          <p className="font-mono text-sm tracking-[0.3em] uppercase mb-4 text-primary">
            (Contacto)
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-balance text-foreground mb-6">
            Hablemos de tu próximo proyecto
          </h2>
          <p className="font-sans text-lg text-muted-foreground leading-relaxed">
            Cada espacio tiene una historia por contar. Nos encantaría escuchar la tuya 
            y ayudarte a transformar tus ideas en realidad.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left Column - Image + Quote */}
          <div className="lg:col-span-2 space-y-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/service-interior.jpg"
                alt="Interior de estudio de arquitectura"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-serif text-white text-xl italic leading-relaxed">
                  &ldquo;La arquitectura es el arte de despertar emociones en el espacio&rdquo;
                </p>
              </div>
            </div>
            
            {/* Business Hours Card */}
            <div className="bg-card p-6 rounded-2xl border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent/50 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-accent-foreground" />
                </div>
                <h3 className="font-serif text-xl text-foreground">Horario de atención</h3>
              </div>
              <div className="space-y-2 font-sans text-muted-foreground">
                <div className="flex justify-between">
                  <span>Lunes a Viernes</span>
                  <span className="font-mono text-sm text-foreground">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados</span>
                  <span className="font-mono text-sm text-foreground">9:00 - 13:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="lg:col-span-3 space-y-6">
            {/* Main Contact Card */}
            <div className="bg-card p-8 lg:p-10 rounded-2xl border border-border">
              <h3 className="font-serif text-2xl lg:text-3xl text-foreground mb-8">
                Estamos para ayudarte
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {/* Location */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1">
                      Ubicación
                    </p>
                    <p className="font-sans text-foreground font-medium">Gualeguaychú</p>
                    <p className="font-sans text-muted-foreground">Entre Ríos, Argentina</p>
                    <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground ml-2">
                      
                        Luis N. Palma  1766
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1">
                      Teléfono
                    </p>
                    <a href="tel:+5493446415734" className="font-sans text-foreground font-medium hover:text-primary transition-colors">
                      +54 9 3446 415734
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1">
                      Email
                    </p>
                    <a href="mailto:info@lizziboari.com" className="font-sans text-foreground font-medium hover:text-primary transition-colors">
                      info@lizziboari.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1">
                      WhatsApp
                    </p>
                    <a 
                      href="https://wa.me/5493446415734?text=Hola!%20Me%20gustaría%20consultar%20sobre%20sus%20servicios"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-foreground font-medium hover:text-green-600 transition-colors"
                    >
                      Escribinos ahora
                    </a>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-border pt-8">
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
                  Seguinos en redes
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                    <span className="font-sans text-sm">Instagram</span>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:opacity-90 transition-opacity"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                    <span className="font-sans text-sm">Facebook</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-border">
              <iframe
              
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3994.9423323885603!2d-58.53495582357227!3d-33.00855607501935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b007f4dadd3873%3A0xe22b4ec07e8d9054!2sLuis%20N.%20Palma%201766%2C%20E3269%20Gualeguaych%C3%BA%2C%20Entre%20R%C3%ADos!5e1!3m2!1ses!2sar!4v1777825661833!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del estudio"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
