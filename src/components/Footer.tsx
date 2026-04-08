"use client";

import { useLanguage } from "@/hooks/useLanguage";

const socialLinks = [
  { label: "X", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
  { label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
  { label: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
];

export default function Footer() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    if (id.startsWith("#")) return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const productLinks = [
    { label: "Flow Hubb", href: "ekosistem" },
    { label: "Flow Book", href: "flow-book" },
    { label: "Flow Learn", href: "flow-learn" },
    { label: "Flow Storage", href: "flow-storage" },
  ];
  const companyLinks = [
    { label: t("footer.about") as string, href: "#" },
    { label: t("footer.blog") as string, href: "#" },
    { label: t("footer.careers") as string, href: "#" },
    { label: t("footer.contact") as string, href: "iletisim" },
  ];
  const legalLinks = [
    { label: t("footer.privacy") as string, href: "#" },
    { label: t("footer.terms") as string, href: "#" },
    { label: "KVKK", href: "#" },
  ];

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(14, 154, 167, 0.4), transparent)" }} />
      <div className="max-w-[1100px] mx-auto px-4 pb-6 pt-10">
        <div className="rounded-2xl px-8 py-10 lg:px-12 lg:py-12" style={{ background: "rgba(10, 10, 10, 0.6)", backdropFilter: "blur(16px)", border: "1px solid rgba(255, 255, 255, 0.06)", boxShadow: "0 8px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.03)" }}>
          {/* CTA */}
          <div className="text-center mb-10">
            <p className="text-[13px] font-medium tracking-[0.08em] uppercase mb-4" style={{ color: "var(--accent)" }}>{t("footer.cta.label") as string}</p>
            <h3 className="font-semibold leading-[1.15] tracking-[-0.02em] mb-3" style={{ fontSize: "clamp(22px, 3vw, 34px)", color: "var(--text-heading)" }}>
              {t("footer.cta.title1") as string}<br />
              <span className="serif-italic font-normal" style={{ color: "var(--text-muted)" }}>{t("footer.cta.title2") as string}</span>
            </h3>
            <a href="mailto:info@dreamedtech.com" className="inline-flex items-center gap-2 mt-6 px-6 py-2.5 rounded-xl text-[14px] font-semibold transition-all" style={{ background: "linear-gradient(180deg, #0fb8c7, #0a8e9a)", color: "#fff", boxShadow: "0 0 20px rgba(14, 154, 167, 0.25)" }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 32px rgba(14,154,167,0.4)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 0 20px rgba(14,154,167,0.25)"; }}>
              {t("nav.demo") as string}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>

          <div style={{ height: 1, background: "rgba(255,255,255,0.06)" }} />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-10">
            <div className="col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <img src="/dreamedtech.svg" alt="Dream EdTech" className="w-9 h-9 rounded-lg" />
                <span className="text-[15px] font-semibold" style={{ color: "#fff" }}>Dream <span className="serif-italic font-normal" style={{ color: "rgba(255,255,255,0.4)" }}>EdTech</span></span>
              </div>
              <p className="text-[13px] leading-[1.7] max-w-[240px] mb-5" style={{ color: "rgba(255,255,255,0.35)" }}>{t("footer.tagline") as string}</p>
              <div className="flex items-center gap-1">
                {socialLinks.map((s) => (
                  <a key={s.label} href="#" className="w-8 h-8 rounded-lg flex items-center justify-center transition-all" style={{ color: "rgba(255,255,255,0.25)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.25)"; e.currentTarget.style.background = "transparent"; }}
                    aria-label={s.label}><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d={s.path} /></svg></a>
                ))}
              </div>
            </div>
            {[
              { title: t("footer.products") as string, links: productLinks },
              { title: t("footer.company") as string, links: companyLinks },
              { title: t("footer.legal") as string, links: legalLinks },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-[11px] font-semibold tracking-[0.1em] uppercase mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>{col.title}</h4>
                <div className="space-y-2.5">
                  {col.links.map((l) => (
                    <button key={l.label} onClick={() => scrollTo(l.href)} className="block text-[13px] transition-colors cursor-pointer" style={{ color: "rgba(255,255,255,0.4)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}>{l.label}</button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ height: 1, background: "rgba(255,255,255,0.06)" }} />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-5">
            <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.2)" }}>&copy; {new Date().getFullYear()} Dream EdTech. {t("footer.rights") as string}</p>
            <a href="mailto:info@dreamedtech.com" className="text-[12px] transition-colors" style={{ color: "rgba(255,255,255,0.2)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.2)")}>info@dreamedtech.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
