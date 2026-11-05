"use client";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { config, waLink } from "@/lib/config";
import Logo from "./Logo";

const nodes = [
  [40, 220], [120, 170], [200, 190], [280, 120], [360, 140], [440, 70], [520, 40],
];
const sensors = [[120, 255], [280, 215], [440, 160]];

export default function Hero() {
  const reduce = useReducedMotion();
  const pts = nodes.map((n) => n.join(",")).join(" ");
  return (
    <section id="inicio" className="grid-bg relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
        <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="mb-4 inline-flex rounded-full bg-carbon px-3 py-1 text-xs font-semibold tracking-wide text-amarillo">
            INDUSTRIA 4.0
          </p>
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            Transformación Digital <span className="bg-amarillo px-2 [box-decoration-break:clone]">Industrial</span>
          </h1>
          <p className="mt-5 text-xl font-semibold italic">Conectamos el piso de fábrica con la inteligencia de negocio.</p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-carbon/85">
            Integramos tus sistemas de producción aislados para capturar, analizar y predecir datos en tiempo real, aumentando la rentabilidad y eliminando los tiempos de inactividad.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#fases" className="btn-accent inline-flex min-h-12 items-center gap-2 rounded bg-amarillo px-6 font-bold text-carbon">
              Descubrir Soluciones <ArrowRight size={18} />
            </a>
            <a href={waLink(config.mensajeDemo)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded border-2 border-carbon px-6 font-bold transition hover:bg-carbon hover:text-white">
              <MessageCircle size={18} /> Solicitar Demo
            </a>
          </div>
          <div className="mt-8 flex items-center gap-3 text-sm text-carbon/80">
            {/* LOGO: reemplazar public/logo.png por el logo definitivo */}
            <Logo size={28} /> <span>{config.esloganEn}</span>
          </div>
        </motion.div>

        <motion.div initial={reduce ? false : { opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <svg viewBox="0 0 560 300" role="img" aria-label="Red de sensores conectados con una tendencia ascendente de productividad" className="w-full rounded-lg border border-estructura bg-white/80 p-2 shadow-sm">
            {[60, 120, 180, 240].map((y) => (
              <line key={y} x1="0" x2="560" y1={y} y2={y} stroke="#E5E8EB" />
            ))}
            {sensors.map(([x, y], i) => {
              const t = nodes[(i + 1) * 2 - 1];
              return (
                <g key={i}>
                  <line x1={x} y1={y} x2={t[0]} y2={t[1]} stroke="#26292C" strokeWidth="1.5" className="flow-line" opacity=".5" />
                  <rect x={x - 9} y={y - 9} width="18" height="18" rx="3" fill="#26292C" />
                </g>
              );
            })}
            <motion.polyline
              points={pts}
              fill="none"
              stroke="#F3AB05"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={reduce ? false : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
            />
            {nodes.map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="7" fill="#fff" stroke="#26292C" strokeWidth="3" className="pulse-node" style={{ animationDelay: `${i * 0.3}s` }} />
            ))}
            <polygon points="526,20 548,44 518,50" fill="#F3AB05" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
