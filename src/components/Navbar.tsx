"use client";

import { useState, useEffect, useCallback } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "hizmetler", label: "Hizmetler" },
  { href: "nasil-calisir", label: "Süreç" },


  { href: "iletisim", label: "İletişim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const container = document.querySelector(".snap-container");
    if (!container) return;
    const h = () => setScrolled(container.scrollTop > 20);
    container.addEventListener("scroll", h);
    return () => container.removeEventListener("scroll", h);
  }, []);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "var(--nav-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border-subtle)" : "none",
      }}
    >
      <div className="max-w-[1100px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2 cursor-pointer">
          <img src="/dreamedtech.svg" alt="Dream EdTech" className="w-10 h-10 rounded-lg" />
          <span className="serif-italic text-[16px]" style={{ color: "var(--text-white-80)" }}>Dream EdTech</span>
        </button>

        <div
          className="hidden md:flex items-center gap-1 px-1.5 py-1 rounded-full"
          style={{ border: "1px solid var(--border-subtle)" }}
        >
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="px-4 py-1.5 text-[13px] font-medium rounded-full transition-colors cursor-pointer"
              style={{ color: "var(--nav-text)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--nav-text-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--nav-text)")}
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => scrollTo("iletisim")}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-medium transition-all cursor-pointer"
            style={{
              border: "1px solid var(--border-subtle)",
              color: "var(--nav-text)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--border-hover)";
              e.currentTarget.style.color = "var(--nav-text-hover)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-subtle)";
              e.currentTarget.style.color = "var(--nav-text)";
            }}
          >
            <svg className="w-3.5 h-3.5 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Demo Talep Et
          </button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button className="p-2" style={{ color: "var(--text-white-60)" }} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menü">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden mx-4 mt-1 rounded-2xl p-3 animate-fade-in-up" style={{ background: "var(--mobile-nav-bg)", backdropFilter: "blur(20px)", border: "1px solid var(--border-subtle)" }}>
          {navLinks.map((l) => (
            <button key={l.href} onClick={() => scrollTo(l.href)} className="block w-full text-left py-2.5 px-4 text-[13px] rounded-lg cursor-pointer" style={{ color: "var(--nav-text)" }}>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
