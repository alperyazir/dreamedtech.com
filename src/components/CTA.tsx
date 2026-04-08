"use client";

import useReveal from "@/hooks/useReveal";
import { useLanguage } from "@/hooks/useLanguage";

export default function CTA() {
  const sectionRef = useReveal();
  const { t } = useLanguage();

  return (
    <section className="relative py-24 lg:py-32">
      <div className="divider" />
      <div ref={sectionRef} className="max-w-[800px] mx-auto px-6 pt-16 text-center">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(14, 154, 167, 0.06), transparent 60%)", filter: "blur(40px)" }} />
        <div className="relative">
          <div className="reveal-item">
            <h2 className="font-semibold leading-[1.12] tracking-[-0.02em] mb-5" style={{ fontSize: "clamp(30px, 4.5vw, 52px)", color: "var(--text-heading)" }}>
              {t("cta.title1") as string}<br />
              <span className="serif-italic font-normal" style={{ color: "var(--text-muted)" }}>{t("cta.title2") as string}</span>
            </h2>
            <p className="text-[16px] leading-[1.7] mb-10 max-w-lg mx-auto" style={{ color: "var(--text-muted)" }}>{t("cta.subtitle") as string}</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal-item" style={{ transitionDelay: "100ms" }}>
            <a href="mailto:info@dreamedtech.com" className="btn-primary cursor-pointer">
              {t("cta.button") as string}
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>
          <div className="flex items-center justify-center gap-5 mt-10 reveal-item" style={{ transitionDelay: "200ms" }}>
            {[
              { label: "X", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
              { label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
              { label: "Facebook", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
            ].map((s) => (
              <a key={s.label} href="#" className="p-2 rounded-lg transition-all" style={{ color: "var(--text-subtle)" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--nav-text-hover)"; e.currentTarget.style.background = "var(--el-bg)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-subtle)"; e.currentTarget.style.background = "transparent"; }}
                aria-label={s.label}><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={s.path} /></svg></a>
            ))}
          </div>
          <div className="mt-4 reveal-item" style={{ transitionDelay: "300ms" }}>
            <a href="mailto:info@dreamedtech.com" className="text-[13px] transition-colors" style={{ color: "var(--text-subtle)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--nav-text-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-subtle)")}>info@dreamedtech.com</a>
          </div>
        </div>
      </div>
    </section>
  );
}
