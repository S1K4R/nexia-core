"use client";
import { useRef, useState } from "react";
import { Star, Send, CheckCircle2, AlertTriangle } from "lucide-react";

export default function OpinionForm() {
  const [nombre, setNombre] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [rating, setRating] = useState(0);
  const [comentario, setComentario] = useState("");
  const [trap, setTrap] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const lock = useRef(false);

  const validate = () => {
    const e = {};
    if (nombre.trim().length < 2) e.nombre = "Escribe tu nombre (mínimo 2 letras).";
    if (!rating) e.rating = "Elige una valoración de 1 a 5 estrellas.";
    if (comentario.trim().length < 10) e.comentario = "Cuéntanos tu opinión (mínimo 10 caracteres).";
    return e;
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    if (lock.current) return;
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    lock.current = true;
    setStatus("sending");
    const data = { nombre: nombre.trim(), empresa: empresa.trim(), valoracion: rating, comentario: comentario.trim() };
    try {
      // Campo trampa: si un bot lo llena, simulamos éxito sin enviar nada
      if (!trap) {
        const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
        const sheets = process.env.NEXT_PUBLIC_SHEETS_URL;
        if (!key) throw new Error("sin-clave");
        if (sheets) {
          fetch(sheets, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(data) }).catch(() => {});
        }
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ access_key: key, subject: "Nueva opinión - Nexia Core", from_name: "Web Nexia Core", ...data }),
        });
        const json = await res.json();
        if (!json.success) throw new Error("web3forms");
      }
      setStatus("sent");
      setNombre(""); setEmpresa(""); setRating(0); setComentario("");
    } catch {
      setStatus("error");
    } finally {
      lock.current = false;
    }
  };

  const field = "mt-1 w-full rounded border-2 border-estructura bg-white px-3 py-3 text-base focus:border-carbon";
  const err = (id) => (errors[id] ? <p id={`${id}-err`} className="mt-1 text-sm font-medium text-red-700">{errors[id]}</p> : null);

  return (
    <form onSubmit={onSubmit} noValidate className="relative overflow-hidden rounded-lg border border-estructura bg-white p-6 shadow-sm">
      <h3 className="text-xl font-bold">Cuéntanos tu opinión</h3>
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="sitio-web">No llenar este campo</label>
        <input id="sitio-web" name="botcheck" tabIndex={-1} autoComplete="off" value={trap} onChange={(e) => setTrap(e.target.value)} />
      </div>
      <div className="mt-4">
        <label htmlFor="nombre" className="text-sm font-semibold">Nombre</label>
        <input id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} className={field} autoComplete="name" aria-invalid={!!errors.nombre} aria-describedby={errors.nombre ? "nombre-err" : undefined} />
        {err("nombre")}
      </div>
      <div className="mt-4">
        <label htmlFor="empresa" className="text-sm font-semibold">Empresa o cargo <span className="font-normal text-carbon/70">(opcional)</span></label>
        <input id="empresa" value={empresa} onChange={(e) => setEmpresa(e.target.value)} className={field} autoComplete="organization" />
      </div>
      <fieldset className="mt-4">
        <legend className="text-sm font-semibold">Valoración</legend>
        <div role="radiogroup" aria-label="Valoración de 1 a 5 estrellas" className="mt-1 flex">
          {[1, 2, 3, 4, 5].map((v) => (
            <label key={v} className="cursor-pointer p-1">
              <input type="radio" name="rating" value={v} checked={rating === v} onChange={() => setRating(v)} className="peer sr-only" aria-label={`${v} ${v === 1 ? "estrella" : "estrellas"}`} />
              <Star size={32} className={`rounded transition peer-focus-visible:outline peer-focus-visible:outline-[3px] peer-focus-visible:outline-amarillo ${v <= rating ? "fill-amarillo text-carbon" : "text-carbon/40"}`} />
            </label>
          ))}
        </div>
        {err("rating")}
      </fieldset>
      <div className="mt-4">
        <label htmlFor="comentario" className="text-sm font-semibold">Comentario</label>
        <textarea id="comentario" rows={4} value={comentario} onChange={(e) => setComentario(e.target.value)} className={field} aria-invalid={!!errors.comentario} aria-describedby={errors.comentario ? "comentario-err" : undefined} />
        {err("comentario")}
      </div>
      <button type="submit" disabled={status === "sending"} className="mt-5 inline-flex min-h-12 items-center gap-2 rounded bg-amarillo px-6 font-bold text-carbon transition hover:shadow-lg disabled:opacity-60">
        <Send size={18} /> {status === "sending" ? "Enviando..." : "Enviar opinión"}
      </button>
      <div role="status" aria-live="polite" className="mt-3 text-sm">
        {status === "sent" && <p className="flex items-center gap-2 font-semibold text-green-800"><CheckCircle2 size={18} /> Gracias, recibimos tu comentario</p>}
        {status === "error" && <p className="flex items-center gap-2 font-semibold text-red-700"><AlertTriangle size={18} /> No se pudo enviar. Inténtalo de nuevo.</p>}
      </div>
    </form>
  );
}
