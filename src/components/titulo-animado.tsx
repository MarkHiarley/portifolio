"use client";

import { useEffect, useRef, useState } from "react";

const CARACTERES = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*+-/<>";

/**
 * Título que se decodifica uma vez, quando entra na tela: as letras chegam como
 * caracteres de terminal e assentam no texto final. O texto real fica no
 * `aria-label`, então a leitura assistida nunca recebe o ruído.
 */
export function TituloAnimado({
  texto,
  className,
}: {
  texto: string;
  className?: string;
}) {
  const tituloRef = useRef<HTMLHeadingElement>(null);
  const [exibido, setExibido] = useState(texto);

  useEffect(() => {
    const titulo = tituloRef.current;
    if (!titulo) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observador = new IntersectionObserver(
      (entradas) => {
        if (!entradas[0].isIntersecting) return;
        observador.disconnect();

        const inicio = performance.now();
        const passo = () => {
          const decorrido = Math.min(1, (performance.now() - inicio) / 620);
          const reveladas = Math.floor(texto.length * decorrido ** 1.7);

          setExibido(
            texto
              .split("")
              .map((caractere, indice) =>
                indice < reveladas || caractere === " "
                  ? caractere
                  : CARACTERES[Math.floor(Math.random() * CARACTERES.length)],
              )
              .join(""),
          );

          if (decorrido < 1) requestAnimationFrame(passo);
          else setExibido(texto);
        };

        requestAnimationFrame(passo);
      },
      { threshold: 0.4 },
    );

    observador.observe(titulo);
    return () => observador.disconnect();
  }, [texto]);

  return (
    <h2 ref={tituloRef} aria-label={texto} className={className}>
      <span aria-hidden="true">{exibido}</span>
    </h2>
  );
}
