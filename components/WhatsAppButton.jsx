import { config, waLink } from "@/lib/config";

export default function WhatsAppButton() {
  return (
    <a
      href={waLink(config.mensajeWhatsappFlotante)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      title="Escríbenos por WhatsApp"
      className="group fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#0f7a6c] text-white shadow-lg transition hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 21l1.65-4.9A8.5 8.5 0 1 1 8 19.4L3 21z" />
        <path d="M9 8.2c0 3.6 3.2 6.8 6.8 6.8l1.1-1.5-2.3-1.2-.9.9c-1-.4-2-1.4-2.4-2.4l.9-.9-1.2-2.3z" fill="currentColor" stroke="none" />
      </svg>
      <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded bg-carbon px-3 py-1.5 text-sm opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100 sm:block">
        Escríbenos por WhatsApp
      </span>
    </a>
  );
}
