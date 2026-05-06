"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, MapPin, Calendar, X, Quote } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Proyectos",
    location: "Gualeguaychú, Entre Ríos",
    year: "2013 - Presente",
    category: "Arquitectura",
    description: "Diseño integral de viviendas y edificios desde cero. Creamos espacios únicos que reflejan la identidad de cada cliente, combinando funcionalidad, estética y sustentabilidad.",
    images: [
      "/images/projects/01_01.jpg.jpeg",
      "/images/projects/01_02.jpg.jpeg",
      "/images/projects/01_03.jpg.jpeg",
      "/images/projects/01_04.jpg.jpeg",
    ],
    featured: {
      quote: "Disfrutar el patio, regar las plantas y ver el atardecer desde la terraza",
      name: "Casa Santa Elena",
      place: "Pueblo General Belgrano",
    },
  },
  {
    id: 2,
    title: "Reformas",
    location: "Gualeguaychú, Entre Ríos",
    year: "2013 - Presente",
    category: "Refacción",
    description: "Transformamos espacios existentes en ambientes renovados y modernos. Desde remodelaciones parciales hasta reformas integrales, respetando la esencia del lugar.",
    images: [
      "/images/reformas/07_01.jpg.jpeg",
      "/images/reformas/07_02.jpg.jpeg",
      "/images/reformas/07_03.jpg.jpeg",
      "/images/reformas/07_04.jpg.jpeg",
    ],
    featured: {
      quote: "Disfrutar el fin de semana, y tirar algo a la parrilla",
      name: "Casa Los Aromos",
      place: "Pueblo General Belgrano",
    },
  },
  {
    id: 3,
    title: "Dirección de obra",
    location: "Gualeguaychú, Entre Ríos",
    year: "2013 - Presente",
    category: "Gestión",
    description: "Supervisión profesional de cada etapa constructiva. Garantizamos que tu proyecto se ejecute con los más altos estándares de calidad, cumpliendo tiempos y presupuestos.",
    images: [
      "/images/projects/quinta-campo-1.jpg",
      "/images/projects/quinta-campo-2.jpg",
      "/images/projects/quinta-campo-3.jpg",
      "/images/projects/quinta-campo-4.jpg",
    ],
    featured: {
      quote: "La esquina, el carnaval y la avenida",
      name: "Casa Tala",
      place: "Construcción en 2 etapas",
    },
  },
];

interface Project {
  id: number;
  title: string;
  location: string;
  year: string;
  category: string;
  description: string;
  images: string[];
  featured: {
    quote: string;
    name: string;
    place: string;
  };
}

function ProjectCarousel({ images, title }: { images: string[]; title: string }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative group">
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative aspect-[4/3]">
              <Image
                src={src}
                alt={`${title} - Imagen ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 shadow-lg"
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="w-5 h-5 text-foreground" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 shadow-lg"
        aria-label="Imagen siguiente"
      >
        <ChevronRight className="w-5 h-5 text-foreground" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "bg-white w-6"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function ModalCarousel({ images, title }: { images: string[]; title: string }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative aspect-[16/10]">
              <Image
                src={src}
                alt={`${title} - Imagen ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all shadow-lg"
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="w-6 h-6 text-foreground" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all shadow-lg"
        aria-label="Imagen siguiente"
      >
        <ChevronRight className="w-6 h-6 text-foreground" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectModal({ 
  project, 
  isOpen, 
  onClose 
}: { 
  project: Project | null; 
  isOpen: boolean; 
  onClose: () => void;
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 transition-all duration-500 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-foreground/80 backdrop-blur-md transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        className={`relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-background rounded-3xl shadow-2xl transition-all duration-500 ${
          isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-8"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all shadow-lg"
          aria-label="Cerrar modal"
        >
          <X className="w-6 h-6 text-foreground" />
        </button>

        {/* Carousel */}
        <div className="p-4 sm:p-6">
          <ModalCarousel images={project.images} title={project.title} />
        </div>

        {/* Content */}
        <div className="px-6 sm:px-10 pb-10">
          {/* Featured Quote Section */}
          <div className="bg-secondary/50 rounded-2xl p-6 sm:p-8 mb-8 relative overflow-hidden">
            <Quote className="absolute top-4 left-4 w-12 h-12 text-primary/20" />
            <div className="relative z-10">
              <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-6 leading-relaxed text-pretty">
                {project.featured.quote}
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                <span className="font-sans text-lg font-medium text-primary">
                  {project.featured.name}
                </span>
                <span className="hidden sm:block w-12 h-px bg-border" />
                <span className="font-mono text-sm tracking-wide text-muted-foreground">
                  {project.featured.place}
                </span>
              </div>
            </div>
          </div>

          {/* Project Info */}
          <div className="flex flex-col sm:flex-row sm:items-start gap-6 justify-between">
            <div className="space-y-4">
              <span className="inline-block font-mono text-xs tracking-[0.2em] uppercase px-4 py-2 bg-primary/10 text-primary rounded-full">
                {project.category}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-foreground">
                {project.title}
              </h3>
              <p className="font-sans text-muted-foreground leading-relaxed max-w-xl">
                {project.description}
              </p>
            </div>

            <div className="flex sm:flex-col gap-6 sm:gap-4 text-right">
              <div className="flex items-center gap-2 sm:justify-end">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-sans text-sm text-muted-foreground">{project.location}</span>
              </div>
              <div className="flex items-center gap-2 sm:justify-end">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="font-sans text-sm text-muted-foreground">{project.year}</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 pt-8 border-t border-border">
            <a
              href="https://wa.me/5493446415734?text=Hola!%20Me%20interesa%20saber%20más%20sobre%20sus%20servicios%20de%20" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-mono text-sm tracking-wide px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all hover:scale-105"
            >
              Consultar sobre este servicio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute("data-project-id"));
            setVisibleProjects((prev) => (prev.includes(id) ? prev : [...prev, id]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll("[data-project-id]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <>
      <section id="proyectos" className="py-24 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 lg:mb-20">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
              Portfolio
            </span>
            <h2 className="font-serif text-4xl lg:text-6xl text-foreground mb-6 text-balance">
              Proyectos Destacados
            </h2>
            <p className="font-sans text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Cada proyecto es una historia única. Explorá algunos de nuestros trabajos más 
              representativos que reflejan nuestra pasión por el diseño y la arquitectura.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-20 lg:space-y-32">
            {projects.map((project, index) => (
              <div
                key={project.id}
                data-project-id={project.id}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center transition-all duration-1000 ${
                  visibleProjects.includes(project.id)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-16"
                } ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Carousel */}
                <div 
                  className={`${index % 2 === 1 ? "lg:order-2" : ""} cursor-pointer`}
                  onClick={() => openModal(project)}
                >
                  <ProjectCarousel images={project.images} title={project.title} />
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""} space-y-6`}>
                  {/* Category Badge */}
                  <span className="inline-block font-mono text-xs tracking-[0.2em] uppercase px-4 py-2 bg-primary/10 text-primary rounded-full">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-serif text-3xl lg:text-5xl text-foreground">
                    {project.title}
                  </h3>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-6 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="font-sans text-sm">{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="font-sans text-sm">{project.year}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-muted-foreground leading-relaxed text-lg">
                    {project.description}
                  </p>

                  {/* Featured Quote Preview */}
                  <div className="bg-card p-5 rounded-xl border border-border">
                    <p className="font-serif text-lg text-foreground/80 italic mb-2">
                      &quot;{project.featured.quote}&quot;
                    </p>
                    <p className="font-mono text-xs text-primary">
                      {project.featured.name} — {project.featured.place}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => openModal(project)}
                    className="inline-flex items-center gap-2 font-mono text-sm tracking-wide px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all hover:scale-105"
                  >
                    Ver proyecto completo
                  </button>

                  {/* Decorative Number */}
                  <div className="pt-4">
                    <span className="font-serif text-8xl lg:text-9xl text-primary/10 font-bold">
                      0{project.id}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-20 lg:mt-28">
            <div className="inline-flex flex-col items-center gap-4 p-8 bg-card rounded-2xl shadow-sm border border-border">
              <p className="font-sans text-muted-foreground">
                ¿Querés ver más proyectos o tenés uno en mente?
              </p>
              <a
                href="https://wa.me/5493446415734?text=Hola!%20Me%20gustaría%20conocer%20más%20sobre%20sus%20proyectos."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-sm tracking-wide px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
              >
                Conversemos sobre tu proyecto
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </>
  );
}
