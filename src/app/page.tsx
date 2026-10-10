import type { Metadata } from "next";
import Image from "next/image";

import { TituloAnimado } from "@/components/titulo-animado";
import {
  contato,
  emailLink,
  entregaDaPlataforma,
  experiencia,
  identity,
  projetos,
  releaseDaPlataforma,
} from "@/data/profile";

export const metadata: Metadata = {
  title: "Hiarley C. da Silva · Software Engineer",
  description: identity.prova,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Hiarley C. da Silva · Software Engineer",
    description: identity.prova,
    url: "/",
    siteName: identity.nome,
    locale: "pt_BR",
    type: "profile",
  },
};

const navegacao = [
  { rotulo: "experiência", href: "#experiencia" },
  { rotulo: "projetos", href: "#projetos" },
  { rotulo: "contato", href: "#contato" },
];

function TituloDaSecao({ titulo, meta }: { titulo: string; meta: string }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2 border-t border-rule pt-5">
      <TituloAnimado
        texto={titulo}
        className="text-[clamp(1.75rem,4.6vw,2.75rem)] leading-none uppercase"
      />
      <p className="text-xs text-dim">{meta}</p>
    </div>
  );
}

function Readout({
  titulo,
  contexto,
  legenda,
  linhas,
  reticulado,
}: {
  titulo: string;
  contexto: string;
  legenda?: string;
  linhas: readonly (readonly [string, string])[];
  reticulado?: boolean;
}) {
  return (
    <figure className="w-full">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 text-xs">
        <span className="tracking-[0.08em] text-ink uppercase">{titulo}</span>
        <span className="text-dim">{contexto}</span>
      </div>
      <dl
        className={`mt-4 divide-y divide-rule border border-rule bg-surface${reticulado ? " reticula" : ""}`}
      >
        {linhas.map(([etapa, resultado]) => (
          <div
            key={etapa}
            className="grid gap-x-8 gap-y-1 px-5 py-3 text-[0.875rem] sm:grid-cols-12 sm:px-6"
          >
            <dt className="text-dim sm:col-span-4">{etapa}</dt>
            <dd className="text-ink sm:col-span-8">{resultado}</dd>
          </div>
        ))}
      </dl>
      {legenda && (
        <figcaption className="mt-3 border-t border-rule pt-3 text-xs text-dim">
          <span className="block max-w-[76ch]">{legenda}</span>
        </figcaption>
      )}
    </figure>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-rule bg-ground">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-baseline justify-between gap-x-6 gap-y-1 px-5 py-3 sm:px-8">
          <a
            href="#topo"
            className="text-xs tracking-[0.16em] text-dim no-underline hover:text-ink"
          >
            início
          </a>
          <nav aria-label="seções">
            <ul className="flex flex-wrap items-baseline gap-x-5 text-xs text-dim">
              {navegacao.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="no-underline hover:text-ink">
                    {item.rotulo}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="topo">
        <section className="border-b border-rule">
          <div className="mx-auto max-w-[1180px] px-5 pt-12 pb-10 sm:px-8 sm:pt-16">
            <h1
              aria-label={identity.nome}
              className="boot text-[clamp(2.7rem,10.5vw,6rem)] leading-[0.94]"
            >
              <span className="glitch uppercase" data-text={identity.nome} aria-hidden="true">
                {identity.nome}
              </span>
            </h1>

            <p className="boot-2 mt-6 text-[clamp(0.9rem,2.1vw,1.15rem)] tracking-[0.06em] text-ink uppercase">
              {identity.papel}
            </p>

            <p className="boot-2 mt-5 max-w-[68ch] text-[0.95rem] leading-relaxed text-dim">
              {identity.prova}
            </p>

            <div className="boot-2 mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a
                href={contato.whatsapp.link}
                className="inline-flex items-center gap-2 bg-amber px-5 py-3 text-sm tracking-[0.04em] text-ground uppercase no-underline hover:bg-ink"
              >
                Vamos conversar
                <span aria-hidden="true">-&gt;</span>
              </a>
              <a href={emailLink} className="text-sm text-dim hover:text-ink">
                {contato.email}
              </a>
              <a
                href={contato.linkedin.link}
                className="text-sm text-dim hover:text-ink"
                rel="me noreferrer"
              >
                linkedin/{contato.linkedin.rotulo}
              </a>
            </div>

            <div className="mt-12">
              <Readout
                titulo={entregaDaPlataforma.titulo}
                contexto={entregaDaPlataforma.contexto}
                legenda={entregaDaPlataforma.legenda}
                linhas={entregaDaPlataforma.linhas}
                reticulado
              />
            </div>

            <p className="mt-4 text-xs text-dim">
              <span className="text-amber" aria-hidden="true">
                &gt;{" "}
              </span>
              agora: Software Engineer (Platform) na Chatvolt · {identity.local}
            </p>
          </div>
        </section>

        <section id="experiencia" className="scroll-mt-16 border-b border-rule">
          <div className="mx-auto max-w-[1180px] px-5 py-14 sm:px-8 sm:py-20">
            <TituloDaSecao titulo="Experiência" meta="onde isso rodou" />

            <div className="mt-10 space-y-12">
              {experiencia.map((empresa) => (
                <div key={empresa.nome} className="grid gap-x-12 gap-y-6 md:grid-cols-12">
                  <div className="md:col-span-3">
                    <h3 className="text-[clamp(1.15rem,2.6vw,1.5rem)] uppercase">
                      {empresa.nome}
                    </h3>
                    <p className="mt-2 text-xs text-dim">
                      {empresa.local} · {empresa.modelo}
                    </p>
                    <p className="mt-1 text-xs text-dim tabular-nums">{empresa.periodo}</p>
                  </div>

                  <div className="space-y-8 md:col-span-9">
                    {empresa.cargos.map((cargo) => (
                      <div
                        key={cargo.titulo}
                        className="border-t border-rule pt-4 first:border-t-0 first:pt-0"
                      >
                        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                          <h4 className="text-[0.95rem] tracking-[0.05em] text-ink uppercase">
                            {cargo.titulo}
                          </h4>
                          <span className="text-xs text-dim tabular-nums">
                            {cargo.periodo}
                          </span>
                        </div>
                        <p className="mt-2 max-w-[70ch] text-[0.95rem] text-dim">
                          {cargo.escopo}
                        </p>
                        {cargo.desfechos.length > 0 && (
                          <ul className="mt-3 max-w-[74ch] space-y-2 text-[0.9rem] leading-relaxed text-dim">
                            {cargo.desfechos.map((item) => (
                              <li key={item} className="flex gap-2">
                                <span aria-hidden="true" className="text-rule-strong">
                                  &gt;
                                </span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>

                  {empresa.mostraEsteira && (
                    <div className="md:col-span-12">
                      <Readout
                        titulo={releaseDaPlataforma.titulo}
                        contexto={releaseDaPlataforma.contexto}
                        linhas={releaseDaPlataforma.linhas}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projetos" className="scroll-mt-16 border-b border-rule">
          <div className="mx-auto max-w-[1180px] px-5 py-14 sm:px-8 sm:py-20">
            <TituloDaSecao titulo="Projetos" meta="cliente, produto e pesquisa" />

            <div className="mt-10 space-y-16">
              {projetos.map((projeto) => (
                <article key={projeto.nome}>
                  <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2 border-b border-rule pb-3">
                    <h3 className="text-[clamp(1.35rem,3.4vw,2rem)] uppercase">
                      {projeto.nome}
                    </h3>
                    <p className="text-xs text-dim tabular-nums">{projeto.periodo}</p>
                  </div>

                  <p className="mt-6 max-w-[72ch] text-[0.95rem] leading-relaxed text-ink">
                    {projeto.resumo}
                  </p>

                  <dl className="mt-6 grid gap-x-12 gap-y-5 border-t border-rule pt-4 sm:grid-cols-2 lg:grid-cols-4">
                    {projeto.ficha?.map(([rotulo, valor]) => (
                      <div key={rotulo}>
                        <dt className="text-[0.7rem] text-dim uppercase">{rotulo}</dt>
                        <dd className="mt-1.5 text-[0.875rem] text-ink">{valor}</dd>
                      </div>
                    ))}

                    {projeto.links.length > 0 && (
                      <div>
                        <dt className="text-[0.7rem] text-dim uppercase">links</dt>
                        <dd className="mt-1.5 flex flex-col items-start gap-1 text-[0.875rem]">
                          {projeto.links.map((link) => (
                            <a
                              key={link.href}
                              className="inline-flex items-baseline gap-1.5 text-ink underline underline-offset-4 hover:text-amber"
                              href={link.href}
                              rel="noreferrer"
                            >
                              {link.rotulo}
                              <span aria-hidden="true" className="text-dim">
                                -&gt;
                              </span>
                            </a>
                          ))}
                        </dd>
                      </div>
                    )}
                  </dl>

                  <ul className="mt-8 grid gap-x-12 gap-y-5 border-t border-rule pt-5 sm:grid-cols-2">
                    {projeto.itens.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-[0.95rem] leading-relaxed text-dim"
                      >
                        <span aria-hidden="true" className="text-rule-strong">
                          &gt;
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {projeto.captura && (
                    <figure className="mt-10">
                      <div className="border border-rule bg-surface">
                        <Image
                          src={projeto.captura.src}
                          alt={projeto.captura.alt}
                          width={projeto.captura.largura}
                          height={projeto.captura.altura}
                          sizes="(min-width: 1024px) 1116px, 100vw"
                          className="block h-auto w-full"
                        />
                      </div>
                      {projeto.legendaCaptura && (
                        <figcaption className="mt-2 text-xs text-dim">
                          {projeto.legendaCaptura}
                        </figcaption>
                      )}

                      {projeto.paleta && (
                        <div className="mt-5 border-t border-rule pt-4">
                          <span className="flex h-10 border border-rule">
                            {projeto.paleta.map((cor) => (
                              <span
                                key={cor.hex}
                                aria-hidden="true"
                                className="flex-1 border-r border-rule last:border-r-0"
                                style={{ backgroundColor: cor.hex }}
                              />
                            ))}
                          </span>
                          <span className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4">
                            {projeto.paleta.map((cor) => (
                              <span key={cor.hex} className="text-[0.7rem] leading-snug">
                                <span className="text-dim">{cor.nome} </span>
                                <span className="text-ink tabular-nums">{cor.hex}</span>
                              </span>
                            ))}
                          </span>
                        </div>
                      )}
                    </figure>
                  )}

                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="scroll-mt-16">
          <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-24">
            <TituloAnimado
              texto="Precisa escalar sua plataforma ou estruturar sua arquitetura?"
              className="max-w-[26ch] text-[clamp(1.75rem,5.2vw,3.25rem)] leading-[1.05] uppercase"
            />

            <div className="mt-10 border border-rule bg-surface p-6 sm:p-8">
              <p className="max-w-[76ch] text-sm text-dim">
                <span className="text-amber" aria-hidden="true">
                  &gt;{" "}
                </span>
                sistemas instáveis custam dinheiro e reputação. Eu resolvo a complexidade nos
                bastidores (processamento em alta velocidade, segurança de dados e validação
                automatizada) para que a sua empresa escale sem dor de cabeça técnica.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-4">
                <a
                  href={contato.whatsapp.link}
                  className="inline-flex items-center gap-2 bg-amber px-5 py-3 text-sm tracking-[0.04em] text-ground uppercase no-underline hover:bg-ink"
                >
                  Whatsapp {contato.whatsapp.numero}
                  <span aria-hidden="true">-&gt;</span>
                </a>
                <a href={emailLink} className="text-sm text-dim hover:text-ink">
                  {contato.email}
                </a>
                <a
                  href={contato.linkedin.link}
                  className="text-sm text-dim hover:text-ink"
                  rel="me noreferrer"
                >
                  linkedin/{contato.linkedin.rotulo}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-rule">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-baseline justify-between gap-x-6 gap-y-2 px-5 py-6 text-xs text-dim sm:px-8">
          <span>© 2026 {identity.nome}</span>
          <span>amostras sintéticas ou reconstruídas, rotuladas como tal · next.js · departure mono (SIL OFL)</span>
        </div>
      </footer>
    </>
  );
}
