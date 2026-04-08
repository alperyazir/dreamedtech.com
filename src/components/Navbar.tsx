"use client";

import { useState, useEffect, useCallback } from "react";
import { useLanguage } from "@/hooks/useLanguage";

const navLinks = [
  { href: "ekosistem", label: "Flow Hubb" },
  { href: "flow-book", label: "Flow Book" },
  { href: "flow-learn", label: "Flow Learn" },
  { href: "flow-storage", label: "Flow Storage" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, toggle, t } = useLanguage();

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
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-3">
      <div
        className="max-w-[1100px] mx-auto h-14 flex items-center justify-between px-5 transition-all duration-500"
        style={{
          borderRadius: 16,
          background: scrolled ? "rgba(10, 10, 10, 0.75)" : "rgba(10, 10, 10, 0.5)",
          backdropFilter: "blur(16px) saturate(1.5)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: scrolled
            ? "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.04)"
            : "0 4px 20px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255,255,255,0.03)",
        }}
      >
        {/* Logo */}
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2.5 cursor-pointer">
          <img src="/dreamedtech.svg" alt="Dream EdTech" className="w-18 h-18 rounded-lg" />
          <span className="text-[16px] font-semibold tracking-[-0.02em]" style={{ color: "#fff" }}>
            Dream <span className="serif-italic font-normal" style={{ color: "rgba(255,255,255,0.5)" }}>EdTech</span>
          </span>
        </button>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="px-3 py-1.5 text-[13px] font-medium rounded-lg transition-colors cursor-pointer"
              style={{ color: "rgba(255,255,255,0.5)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-2">
          {/* Language toggle */}
          <button
            onClick={toggle}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[12px] font-semibold transition-all cursor-pointer"
            style={{
              color: "rgba(255,255,255,0.5)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(255,255,255,0.5)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
            }}
          >
            <svg className="w-3.5 h-3.5 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.97.633-3.792 1.708-5.274" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {lang === "tr" ? "EN" : "TR"}
          </button>

          <button
            onClick={() => scrollTo("iletisim")}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-[13px] font-semibold transition-all cursor-pointer"
            style={{
              background: "linear-gradient(180deg, #0fb8c7, #0a8e9a)",
              color: "#fff",
              boxShadow: "0 0 12px rgba(14, 154, 167, 0.3)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 20px rgba(14, 154, 167, 0.5)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 0 12px rgba(14, 154, 167, 0.3)"; }}
          >
            {t("nav.demo") as string}
          </button>
        </div>

        {/* Mobile */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={toggle}
            className="px-2 py-1 rounded-md text-[11px] font-bold cursor-pointer"
            style={{ color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {lang === "tr" ? "EN" : "TR"}
          </button>
          <button
            className="p-2 cursor-pointer"
            style={{ color: "rgba(255,255,255,0.5)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
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

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="lg:hidden max-w-[1100px] mx-auto mt-2 rounded-2xl p-2 animate-fade-in-up"
          style={{
            background: "rgba(10, 10, 10, 0.9)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="block w-full text-left py-2.5 px-4 text-[14px] rounded-xl cursor-pointer transition-colors"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              {l.label}
            </button>
          ))}
          <div className="mx-3 my-1" style={{ height: 1, background: "rgba(255,255,255,0.06)" }} />
          <button
            onClick={() => scrollTo("iletisim")}
            className="block w-full text-left py-2.5 px-4 text-[14px] font-semibold rounded-xl cursor-pointer"
            style={{ color: "var(--accent)" }}
          >
            {t("nav.demo") as string}
          </button>
        </div>
      )}
    </nav>
  );
}
