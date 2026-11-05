"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useReducedMotion } from "motion/react";

const comentarios = [
  { texto: "Gracias a la arquitectura implementada por Nexia Core, logramos conectar nuestros molinos principales y anticipar paradas técnicas antes de la temporada alta.", autor: "Gerencia de Planta", empresa: "Minera Central Perú" },
  { texto: "Pasamos de revisar planillas a ver el estado de cada línea en un tablero en vivo. Las reuniones de producción ahora duran la mitad.", autor: "Jefatura de Producción", empresa: "Alimentos Andinos (ficticia)" },
  { texto: "La integración con equipos de distintas marcas fue mucho más simple de lo que esperábamos. El equipo entendió nuestro proceso desde el primer día.", autor: "Jefatura de Mantenimiento", empresa: "Textiles del Pacífico (ficticia)" },
  { texto: "Los modelos predictivos nos avisaron de una falla en un motor crítico con días de anticipación. Ese aviso nos ahorró una parada completa.", autor: "Dirección de Operaciones", empresa: "Cementos Sur (ficticia)" },
];

export default function Carousel() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [manual, setManual] = useState(false);
  const startX = useRef(null);
  const n = comentarios.length;
  const go = (d, byUser = true) => { setI((v) => (v + d + n) % n); if (byUser) setManual(true); };

  useEffect(() => {
    if (reduce || paused) return;
    const t = setInterval(() => go(1, false), 6000);
    return () => clearInterval(t);
  }, [reduce, paused]);

  return (
    <div
      role="region"
      aria-roledescription="carrusel"
      aria-label="Comentarios de clientes"
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={(e) => (startX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (startX.current == null) return;
        const dx = e.changedTouches[0].clientX - startX.current;
        if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
        startX.current = null;
      }}
    >
      <div className="overflow-hidden rounded-lg bg-carbon text-white">
        <div className="flex transition-transform duration-500 ease-out motion-reduce:transition-none" style={{ transform: `translateX(-${i * 100}%)` }} aria-live={manual && !paused ? "polite" : "off"}>
          {comentarios.map((c, k) => (
            <figure key={k} className="min-w-full p-6 sm:p-10" aria-hidden={k !== i} role="group" aria-roledescription="diapositiva" aria-label={`${k + 1} de ${n}`}>
              <Quote className="text-amarillo" aria-hidden="true" />
              <blockquote className="mt-3 text-lg leading-relaxed sm:text-xl">“{c.texto}”</blockquote>
              <figcaption className="mt-5 text-sm text-white/80">
                <strong className="text-white">{c.autor}</strong> · {c.empresa}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-1" role="tablist" aria-label="Elegir comentario">
          {comentarios.map((_, k) => (
            <button key={k} type="button" role="tab" aria-selected={k === i} aria-label={`Comentario ${k + 1}`} onClick={() => { setI(k); setManual(true); }} className="flex h-11 w-8 items-center justify-center">
              <span className={`h-2.5 rounded-full transition-all ${k === i ? "w-6 bg-amarillo" : "w-2.5 bg-carbon/30"}`} />
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <button type="button" aria-label="Comentario anterior" onClick={() => go(-1)} className="flex h-11 w-11 items-center justify-center rounded border-2 border-carbon transition hover:bg-carbon hover:text-white"><ChevronLeft /></button>
          <button type="button" aria-label="Comentario siguiente" onClick={() => go(1)} className="flex h-11 w-11 items-center justify-center rounded border-2 border-carbon transition hover:bg-carbon hover:text-white"><ChevronRight /></button>
        </div>
      </div>
    </div>
  );
}
