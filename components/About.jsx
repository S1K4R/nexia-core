import { Cable, TrendingUp, Layers, Target, Eye } from "lucide-react";
import Reveal from "./Reveal";

const pilares = [
  { icon: Cable, titulo: "Conectividad", texto: "Conexión directa con sensores y máquinas de cualquier marca." },
  { icon: TrendingUp, titulo: "Predictividad", texto: "Modelos analíticos para evitar fallas no programadas." },
  { icon: Layers, titulo: "Escalabilidad", texto: "De la recolección de datos locales a paneles ejecutivos." },
];

export default function About() {
  return (
    <section id="nosotros" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-widest text-carbon/70">¿Quiénes somos?</p>
          <h2 className="mt-2 max-w-3xl text-3xl font-extrabold sm:text-4xl">El Motor Digital para la Industria 4.0</h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-carbon/85">
            En Nexia Core impulsamos a las empresas industriales hacia la cuarta revolución digital. Rompemos las barreras tecnológicas para que los datos de maquinaria física se conviertan en decisiones estratégicas gerenciales.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {pilares.map((p, i) => (
            <Reveal key={p.titulo} delay={i * 0.1}>
              <article className="group h-full rounded-lg border border-estructura bg-white p-6 transition hover:-translate-y-1 hover:border-amarillo hover:shadow-lg">
                <span className="flex h-12 w-12 items-center justify-center rounded bg-carbon text-amarillo transition group-hover:bg-amarillo group-hover:text-carbon">
                  <p.icon size={24} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-xl font-bold">{p.titulo}</h3>
                <p className="mt-2 text-carbon/85">{p.texto}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-lg bg-carbon p-6 text-white">
              <Target className="text-amarillo" aria-hidden="true" />
              <h3 className="mt-3 text-xl font-bold">Misión</h3>
              <p className="mt-2 text-white/85">
                Integrar los sistemas de producción de nuestros clientes y convertir sus datos operativos en información confiable para decidir mejor, reducir paradas y aumentar la rentabilidad.
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.1}>
            <article className="h-full rounded-lg bg-carbon p-6 text-white">
              <Eye className="text-amarillo" aria-hidden="true" />
              <h3 className="mt-3 text-xl font-bold">Visión</h3>
              <p className="mt-2 text-white/85">
                Ser la referencia latinoamericana en transformación digital industrial, liderando la adopción de la Industria 4.0 en minería, manufactura y energía.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
