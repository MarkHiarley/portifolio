import type { Metadata } from "next";
import Image from "next/image";

import { TituloAnimado } from "@/components/titulo-animado";
import {
  contato,
  emailLink,
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

            <figure className="mt-10">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 text-xs">
                <span className="tracking-[0.08em] text-ink uppercase">
                  {releaseDaPlataforma.titulo}
                </span>
                <span className="text-dim">{releaseDaPlataforma.contexto}</span>
              </div>
              <dl className="reticula mt-4 divide-y divide-rule border border-rule bg-surface">
                {releaseDaPlataforma.linhas.map(([etapa, resultado]) => (
                  <div
                    key={etapa}
                    className="grid gap-x-8 gap-y-1 px-5 py-3 text-[0.875rem] sm:grid-cols-12 sm:px-6"
                  >
                    <dt className="text-dim sm:col-span-4">{etapa}</dt>
                    <dd className="text-ink sm:col-span-8">{resultado}</dd>
                  </div>
                ))}
              </dl>
              <figcaption className="mt-3 border-t border-rule pt-3 text-xs text-dim">
                <span className="block max-w-[76ch]">{releaseDaPlataforma.legenda}</span>
              </figcaption>
            </figure>

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

                  <div className="mt-6 grid gap-x-12 gap-y-6 md:grid-cols-12">
                    <div className="md:col-span-5">
                      <p className="max-w-[52ch] text-[0.95rem] leading-relaxed text-ink">
                        {projeto.resumo}
                      </p>
                      {!projeto.captura && projeto.links.length > 0 && (
                        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                          {projeto.links.map((link) => (
                            <li key={link.href}>
                              <a
                                className="text-dim hover:text-ink"
                                href={link.href}
                                rel="noreferrer"
                              >
                                {link.rotulo}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <ul className="max-w-[68ch] space-y-2.5 text-[0.95rem] leading-relaxed text-dim md:col-span-7">
                      {projeto.itens.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span aria-hidden="true" className="text-rule-strong">
                            &gt;
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {projeto.captura && (
                    <div className="mt-8 grid gap-x-12 gap-y-6 md:grid-cols-12">
                      <figure className="md:col-span-5">
                        <div className="aspect-[4/3] overflow-hidden border border-rule bg-surface">
                          <Image
                            src={projeto.captura.src}
                            alt={projeto.captura.alt}
                            width={projeto.captura.largura}
                            height={projeto.captura.altura}
                            sizes="(min-width: 1024px) 460px, 100vw"
                            className="h-full w-full object-cover object-top"
                          />
                        </div>
                        {projeto.legendaCaptura && (
                          <figcaption className="mt-2 text-xs text-dim">
                            {projeto.legendaCaptura}
                          </figcaption>
                        )}
                      </figure>

                      <dl className="border-t border-rule md:col-span-7">
                        {projeto.ficha?.map(([rotulo, valor]) => (
                          <div
                            key={rotulo}
                            className="grid grid-cols-3 gap-x-4 border-b border-rule py-2.5 text-[0.875rem]"
                          >
                            <dt className="text-xs text-dim">{rotulo}</dt>
                            <dd className="col-span-2 text-ink">{valor}</dd>
                          </div>
                        ))}

                        {projeto.paleta && (
                          <div className="grid grid-cols-3 gap-x-4 border-b border-rule py-3">
                            <dt className="text-xs text-dim">paleta</dt>
                            <dd className="col-span-2">
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
                              <span className="mt-1.5 grid grid-cols-4 gap-x-2">
                                {projeto.paleta.map((cor) => (
                                  <span key={cor.hex} className="text-[0.7rem] leading-snug">
                                    <span className="block text-dim">{cor.nome}</span>
                                    <span className="block text-ink tabular-nums">
                                      {cor.hex}
                                    </span>
                                  </span>
                                ))}
                              </span>
                            </dd>
                          </div>
                        )}

                        {projeto.links.length > 0 && (
                          <div className="grid grid-cols-3 gap-x-4 py-2.5">
                            <dt className="text-xs text-dim">links</dt>
                            <dd className="col-span-2 flex flex-wrap gap-x-4 gap-y-1 text-[0.875rem]">
                              {projeto.links.map((link) => (
                                <a
                                  key={link.href}
                                  className="text-ink underline underline-offset-4 hover:text-amber"
                                  href={link.href}
                                  rel="noreferrer"
                                >
                                  {link.rotulo}
                                </a>
                              ))}
                            </dd>
                          </div>
                        )}
                      </dl>
                    </div>
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
