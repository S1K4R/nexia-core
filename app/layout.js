import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-montserrat" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const base =
  process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000";

const titulo = "Nexia Core | Transformación Digital Industrial";
const descripcion =
  "Conectamos el piso de fábrica con la inteligencia de negocio: arquitectura de datos e Industria 4.0. Proyecto académico (empresa ficticia).";

export const metadata = {
  metadataBase: new URL(base),
  title: titulo,
  description: descripcion,
  openGraph: {
    title: titulo,
    description: descripcion,
    type: "website",
    locale: "es_PE",
    siteName: "Nexia Core",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Nexia Core" }],
  },
  twitter: { card: "summary_large_image", title: titulo, description: descripcion, images: ["/og.png"] },
};

export const viewport = { themeColor: "#26292C" };

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${montserrat.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
