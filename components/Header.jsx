"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import LogoFull from "./LogoFull";

const links = [
  { id: "inicio", label: "Inicio" },
  { id: "nosotros", label: "Nosotros" },
  { id: "fases", label: "Fases" },
  { id: "resultados", label: "Resultados" },
  { id: "contacto", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Logo: recarga la página y la deja arriba
  const goHome = (e) => {
    e.preventDefault();
    setOpen(false);
    window.history.scrollRestoration = "manual";
    window.history.replaceState(null, "", "/");
    window.scrollTo(0, 0);
    window.location.reload();
  };

  const dark = scrolled || open;
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${dark ? "bg-carbon/95 text-white backdrop-blur" : "bg-transparent text-carbon"}`}>
      <nav aria-label="Principal" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="/" aria-label="Nexia Core, volver al inicio" className="flex items-center rounded bg-white px-2 py-1 shadow-sm ring-1 ring-black/5" onClick={goHome}>
          {/* LOGO: reemplazar public/logo.png por el logo definitivo */}
          <LogoFull height={36} className="h-9 w-auto" />
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? "true" : undefined}
                className={`rounded px-3 py-2 text-sm font-medium transition-colors ${
                  active === l.id ? (dark ? "text-amarillo" : "bg-carbon text-white") : dark ? "hover:text-amarillo" : "hover:bg-carbon/10"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <ul id="menu-movil" hidden={!open} className="border-t border-white/10 bg-carbon px-5 pb-4 text-white md:hidden">
        {links.map((l) => (
          <li key={l.id}>
            <a href={`#${l.id}`} onClick={() => setOpen(false)} className={`flex min-h-11 items-center text-base ${active === l.id ? "text-amarillo" : ""}`}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
