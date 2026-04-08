"use client";

import useReveal from "@/hooks/useReveal";
import { useLanguage } from "@/hooks/useLanguage";

const bookIcon = <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" /></svg>;
const learnIcon = <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
const storageIcon = <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" strokeLinecap="round" strokeLinejoin="round" /></svg>;

export default function Ecosystem() {
  const sectionRef = useReveal();
  const { t } = useLanguage();

  const products = [
    {
      name: "Flow Book", icon: bookIcon, accentColor: "var(--accent-book)", glowClass: "glow-card-book",
      tagline: t("eco.book.tag") as string, description: t("eco.book.desc") as string,
      features: [t("eco.book.f1") as string, t("eco.book.f2") as string, t("eco.book.f3") as string, t("eco.book.f4") as string],
    },
    {
      name: "Flow Learn", icon: learnIcon, accentColor: "var(--accent-learn)", glowClass: "glow-card-learn",
      tagline: t("eco.learn.tag") as string, description: t("eco.learn.desc") as string,
      features: [t("eco.learn.f1") as string, t("eco.learn.f2") as string, t("eco.learn.f3") as string, t("eco.learn.f4") as string],
    },
    {
      name: "Flow Storage", icon: storageIcon, accentColor: "var(--accent-storage)", glowClass: "glow-card-storage",
      tagline: t("eco.storage.tag") as string, description: t("eco.storage.desc") as string,
      features: [t("eco.storage.f1") as string, t("eco.storage.f2") as string, t("eco.storage.f3") as string, t("eco.storage.f4") as string],
    },
  ];

  return (
    <section className="relative py-24 lg:py-32">
      <div ref={sectionRef} className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16 reveal-item">
          <div className="mb-4"><span className="badge">{t("eco.badge") as string}</span></div>
          <h2 className="font-semibold leading-[1.15] tracking-[-0.02em] mb-5" style={{ fontSize: "clamp(28px, 4vw, 48px)", color: "var(--text-heading)" }}>
            {t("eco.title1") as string}{" "}
            <span className="serif-italic font-normal" style={{ color: "var(--text-muted)" }}>{t("eco.title2") as string}</span>
          </h2>
          <p className="text-[16px] leading-[1.7] max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>{t("eco.subtitle") as string}</p>
        </div>

        <div className="rounded-3xl p-6 lg:p-8 reveal-item" style={{ border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.015)" }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "rgba(14, 154, 167, 0.1)", border: "1px solid rgba(14, 154, 167, 0.2)" }}>
              <svg className="w-4 h-4" style={{ color: "var(--accent)" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <div>
              <h3 className="text-[16px] font-semibold" style={{ color: "var(--text-heading)" }}>{t("eco.hubb") as string}</h3>
              <p className="text-[11px]" style={{ color: "var(--accent)", opacity: 0.7 }}>{t("eco.hubb.tag") as string}</p>
            </div>
          </div>

          <div className="bento-grid">
            {products.map((product) => (
              <div key={product.name} className={`glass-card ${product.glowClass} p-6 lg:p-7`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `color-mix(in srgb, ${product.accentColor} 15%, transparent)`, color: product.accentColor }}>{product.icon}</div>
                  <div>
                    <h3 className="text-[15px] font-semibold tracking-[-0.01em]" style={{ color: "var(--text-heading)" }}>{product.name}</h3>
                    <p className="text-[11px]" style={{ color: product.accentColor, opacity: 0.7 }}>{product.tagline}</p>
                  </div>
                </div>
                <p className="text-[13px] leading-[1.6] mb-5" style={{ color: "var(--text-muted)" }}>{product.description}</p>
                <div className="relative rounded-xl h-32 mb-5 overflow-hidden" style={{ border: "1px solid var(--el-border)" }}>
                  <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at center, color-mix(in srgb, ${product.accentColor} 8%, transparent), transparent 70%)` }} />
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "rgba(10, 10, 10, 0.6)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(8px)", color: product.accentColor }}>{product.icon}</div>
                  </div>
                </div>
                <div className="space-y-2">
                  {product.features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5 text-[12px]" style={{ color: "var(--text-muted)" }}>
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: product.accentColor }} />{f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
