import Image from "next/image";

// Ícono cuadrado "N". LOGO: reemplazar public/logo-icon.png por el definitivo
export default function Logo({ size = 40, className = "" }) {
  return (
    <Image src="/logo-icon.png" alt="Logo de Nexia Core" width={size} height={size} className={`rounded ${className}`} priority />
  );
}
