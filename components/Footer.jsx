import { Mail, Phone, MapPin } from "lucide-react";
import { config } from "@/lib/config";
import Logo from "./Logo";

const Linkedin = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11.5H3zM9.75 9.75h3.8v1.6h.06c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.66 4.8 6.12v5.83h-4v-5.17c0-1.23-.02-2.82-1.72-2.82-1.72 0-1.98 1.34-1.98 2.73v5.26h-4z" /></svg>
);
const Instagram = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
);
const Facebook = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}><path d="M13.5 21v-7.5H16l.5-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.5V21z" /></svg>
);

const redes = [
  { key: "linkedin", nombre: "LinkedIn", Icon: Linkedin },
  { key: "instagram", nombre: "Instagram", Icon: Instagram },
  { key: "facebook", nombre: "Facebook", Icon: Facebook },
];

export default function Footer() {
  return (
    <>
      <section id="contacto" className="bg-carbon py-20 text-white">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-sm font-bold uppercase tracking-widest text-amarillo">Contacto</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Conversemos sobre tu planta</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            <li className="flex items-center gap-3 rounded-lg border border-white/15 p-4"><Mail className="text-amarillo" aria-hidden="true" /><a href={`mailto:${config.correo}`} className="break-all hover:text-amarillo">{config.correo}</a></li>
            <li className="flex items-center gap-3 rounded-lg border border-white/15 p-4"><Phone className="text-amarillo" aria-hidden="true" /><a href={`tel:${config.telefono.replace(/\s/g, "")}`} className="hover:text-amarillo">{config.telefono}</a></li>
            <li className="flex items-center gap-3 rounded-lg border border-white/15 p-4"><MapPin className="text-amarillo" aria-hidden="true" />{config.ubicacion}</li>
          </ul>
          <ul className="mt-6 flex flex-wrap gap-3">
            {redes.map(({ key, nombre, Icon }) => {
              const url = config.redes[key];
              const inner = (<><Icon width={20} height={20} /> {nombre}{!url && <span className="text-xs text-white/70"> · Próximamente</span>}</>);
              return (
                <li key={key}>
                  {url ? (
                    <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded border border-white/30 px-4 hover:border-amarillo hover:text-amarillo">{inner}</a>
                  ) : (
                    <span className="inline-flex min-h-11 items-center gap-2 rounded border border-white/15 px-4 text-white/80">{inner}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <footer className="bg-carbon pb-24 text-white/80">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-3 border-t border-white/10 px-5 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <span className="flex items-center gap-2">
            {/* LOGO: reemplazar public/logo.png por el logo definitivo */}
            <Logo size={28} /> © 2026 Nexia Core. {config.esloganEn}
          </span>
          <span>Proyecto académico — empresa ficticia.</span>
        </div>
      </footer>
    </>
  );
}
