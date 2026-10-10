import type { Metadata, Viewport } from "next";

import { ScrollSuave } from "@/components/scroll-suave";
import { areasDeConhecimento, contato, identity, instituicoesDeEnsino } from "@/data/profile";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Hiarley C. da Silva · Software Engineer",
    template: "%s",
  },
  description: identity.prova,
  authors: [{ name: identity.nome, url: contato.linkedin.link }],
  creator: identity.nome,
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0b0b09",
};

const dadosEstruturados = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: identity.nome,
  jobTitle: "Software Engineer",
  description: identity.prova,
  email: `mailto:${contato.email}`,
  telephone: "+5588981899242",
  sameAs: [contato.linkedin.link],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tianguá",
    addressRegion: "CE",
    addressCountry: "BR",
  },
  alumniOf: instituicoesDeEnsino.map((instituicao) => ({
    "@type": instituicao.tipo,
    name: instituicao.nome,
  })),
  knowsAbout: [...areasDeConhecimento],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="min-h-dvh" suppressHydrationWarning>
        <ScrollSuave>{children}</ScrollSuave>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dadosEstruturados) }}
        />
      </body>
    </html>
  );
}
