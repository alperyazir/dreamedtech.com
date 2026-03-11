"use client";

import { useEffect, useRef } from "react";

export default function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("revealed");
          }
        }
      },
      { threshold: 0.15 }
    );

    const children = el.querySelectorAll<HTMLElement>(".reveal-item");
    children.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  return ref;
}
