"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Radio, Filter, Database, BrainCircuit, BadgeDollarSign } from "lucide-react";

const fases = [
  { icon: Radio, titulo: "Adquisición de datos", texto: "Captura continua de variables (temperatura, velocidad, presión) mediante protocolos industriales como OPC UA." },
  { icon: Filter, titulo: "Contextualización", texto: "Organización y filtrado de datos crudos para darles sentido operativo." },
  { icon: Database, titulo: "Historización", texto: "Registro de datos temporales masivos a largo plazo sin saturar el almacenamiento." },
  { icon: BrainCircuit, titulo: "Predicción", texto: "Analítica avanzada para identificar patrones y prevenir fallas antes de que paralicen la producción." },
  { icon: BadgeDollarSign, titulo: "Valor de negocio", texto: "Retorno de la inversión traducido en ahorro de costos y máxima productividad (OEE)." },
];

export default function Phases() {
  const reduce = useReducedMotion();
  const [hover, setHover] = useState(null);
  return (
    <section id="fases" className="grid-bg bg-estructura/40 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-sm font-bold uppercase tracking-widest text-carbon/70">Arquitectura del servicio</p>
        <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">De la máquina al valor de negocio en 5 fases</h2>

        <ol className="relative mt-12 grid gap-6 lg:grid-cols-5">
          {/* línea de flujo (escritorio) */}
          <span aria-hidden="true" className="absolute left-0 right-0 top-6 hidden h-0.5 bg-carbon/20 lg:block" />
          <motion.span
            aria-hidden="true"
            className="absolute left-0 top-6 hidden h-0.5 origin-left bg-amarillo lg:block"
            style={{ width: "100%" }}
            initial={reduce ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
          {fases.map((f, i) => (
            <motion.li
              key={f.titulo}
              className="relative"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
            >
              <div className="flex items-center gap-4 lg:block">
                <span className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-carbon font-titulo font-extrabold transition ${hover === i ? "scale-110 bg-amarillo" : "bg-white"}`}>
                  {i + 1}
                </span>
                <f.icon className="text-carbon lg:mt-4" size={28} aria-hidden="true" />
              </div>
              <div className={`mt-3 h-full rounded-lg border p-4 transition ${hover === i ? "border-amarillo bg-white shadow-lg" : "border-estructura bg-white"}`}>
                <h3 className="text-lg font-bold">{f.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-carbon/85">{f.texto}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
