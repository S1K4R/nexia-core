import Image from "next/image";

// Logo horizontal. LOGO: reemplazar public/logo.png por el definitivo (relación 1600x377)
export default function LogoFull({ height = 40, className = "" }) {
  return (
    <Image
      src="/logo.png"
      alt="Nexia Core - Transformación Digital Industrial"
      width={Math.round((height * 1600) / 377)}
      height={height}
      className={className}
      priority
    />
  );
}
