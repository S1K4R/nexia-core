import Image from "next/image";

// LOGO: reemplazar public/logo.png por el logo definitivo
export default function Logo({ size = 40, className = "" }) {
  return (
    <Image src="/logo.png" alt="Logo de Nexia Core" width={size} height={size} className={`rounded ${className}`} priority />
  );
}
