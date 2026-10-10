"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";

import "lenis/dist/lenis.css";

/**
 * Scroll suave com Lenis. O movimento do ponteiro nunca vence a preferência do
 * sistema: com `prefers-reduced-motion`, o documento rola nativamente.
 */
export function ScrollSuave({ children }: { children: React.ReactNode }) {
  const [suave, setSuave] = useState(false);

  useEffect(() => {
    const consulta = window.matchMedia("(prefers-reduced-motion: reduce)");
    const aplicar = () => setSuave(!consulta.matches);

    aplicar();
    consulta.addEventListener("change", aplicar);
    return () => consulta.removeEventListener("change", aplicar);
  }, []);

  if (!suave) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        autoToggle: true,
        lerp: 0.085,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.4,
        anchors: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
