import Reveal from "./Reveal";
import Counter from "./Counter";
import Carousel from "./Carousel";
import OpinionForm from "./OpinionForm";

export default function Results() {
  return (
    <section id="resultados" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-widest text-carbon/70">Resultados y comentarios</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Datos que se convierten en resultados</h2>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <Reveal>
            <div className="rounded-lg border-l-8 border-amarillo bg-estructura/60 p-6">
              <p className="font-titulo text-5xl font-extrabold"><Counter to={15} prefix="-" suffix=" %" /></p>
              <p className="mt-2 text-carbon/85">en paradas de planta no programadas</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-lg border-l-8 border-amarillo bg-estructura/60 p-6">
              <p className="font-titulo text-5xl font-extrabold"><Counter to={100} suffix=" %" /></p>
              <p className="mt-2 text-carbon/85">de visibilidad de activos industriales en tiempo real</p>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
          <Reveal className="min-w-0"><Carousel /></Reveal>
          <Reveal delay={0.1} className="min-w-0"><OpinionForm /></Reveal>
        </div>
        <p className="mt-6 text-sm text-carbon/70">Comentarios y cifras ilustrativos — proyecto académico (empresa ficticia).</p>
      </div>
    </section>
  );
}
