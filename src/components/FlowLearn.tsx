"use client";

import useReveal from "@/hooks/useReveal";
import { useLanguage } from "@/hooks/useLanguage";

export default function FlowLearn() {
  const sectionRef = useReveal();
  const { t } = useLanguage();

  const capabilities = [
    { title: t("learn.cap1.title") as string, desc: t("learn.cap1.desc") as string, icon: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" },
    { title: t("learn.cap2.title") as string, desc: t("learn.cap2.desc") as string, icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" },
    { title: t("learn.cap3.title") as string, desc: t("learn.cap3.desc") as string, icon: "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" },
    { title: t("learn.cap4.title") as string, desc: t("learn.cap4.desc") as string, icon: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" },
  ];

  return (
    <section className="relative py-24 lg:py-32">
      <div className="divider" />
      <div ref={sectionRef} className="max-w-[1200px] mx-auto px-6 pt-16">
        <div className="mb-6 reveal-item">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold tracking-[0.05em] uppercase" style={{ color: "var(--accent-learn)", background: "rgba(229, 75, 75, 0.08)", border: "1px solid rgba(229, 75, 75, 0.15)" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent-learn)" }} />Flow Learn
          </span>
        </div>
        <div className="product-section">
          <div className="reveal-item order-2 lg:order-1">
            <div className="glass-card glow-card-learn overflow-hidden">
              <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "16 / 10" }}>
                <div className="absolute inset-4 lg:inset-6 z-10">
                  <div className="rounded-xl overflow-hidden h-full" style={{ background: "rgba(10, 10, 10, 0.85)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(12px)", boxShadow: "0 25px 50px rgba(0,0,0,0.5)" }}>
                    <div className="flex items-center gap-2 px-4 py-2.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,95,87,0.7)" }} />
                        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,189,46,0.7)" }} />
                        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(40,201,64,0.7)" }} />
                      </div>
                      <span className="text-[11px] ml-3" style={{ color: "rgba(255,255,255,0.3)" }}>{t("learn.panel") as string}</span>
                    </div>
                    <div className="p-4 lg:p-5 space-y-3">
                      <div className="grid grid-cols-3 gap-2">
                        {[{ v: "92%", l: t("learn.stat.success") as string }, { v: "4.8", l: t("learn.stat.avg") as string }, { v: "12", l: t("learn.stat.lessons") as string }].map((s) => (
                          <div key={s.l} className="p-2 rounded-lg text-center" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}>
                            <div className="text-[14px] font-semibold" style={{ color: "rgba(229,75,75,0.7)" }}>{s.v}</div>
                            <div className="text-[9px]" style={{ color: "rgba(255,255,255,0.2)" }}>{s.l}</div>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-2">
                        {[{ label: "Matematik", pct: 88 }, { label: "Fen Bilgisi", pct: 72 }, { label: "Türkçe", pct: 95 }].map((item) => (
                          <div key={item.label} className="flex items-center gap-2">
                            <span className="text-[9px] w-16 shrink-0" style={{ color: "rgba(255,255,255,0.25)" }}>{item.label}</span>
                            <div className="flex-1 h-1 rounded-full" style={{ background: "rgba(255,255,255,0.04)" }}>
                              <div className="h-full rounded-full" style={{ width: `${item.pct}%`, background: "rgba(229,75,75,0.4)" }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="reveal-item order-1 lg:order-2" style={{ transitionDelay: "150ms" }}>
            <h2 className="font-semibold leading-[1.15] tracking-[-0.02em] mb-5" style={{ fontSize: "clamp(26px, 3.5vw, 42px)", color: "var(--text-heading)" }}>
              {t("learn.title1") as string}<br />
              <span className="serif-italic font-normal" style={{ color: "var(--accent-learn)" }}>{t("learn.title2") as string}</span>
            </h2>
            <p className="text-[15px] leading-[1.7] mb-8" style={{ color: "var(--text-muted)" }}>{t("learn.desc") as string}</p>
            <div className="grid grid-cols-2 gap-3">
              {capabilities.map((c, i) => (
                <div key={c.title} className="glass-card p-4 reveal-item" style={{ transitionDelay: `${200 + i * 80}ms` }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style={{ background: "rgba(229, 75, 75, 0.08)", color: "var(--accent-learn)" }}>
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d={c.icon} strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <h4 className="text-[13px] font-semibold mb-1" style={{ color: "var(--text-heading)" }}>{c.title}</h4>
                  <p className="text-[12px] leading-[1.5]" style={{ color: "var(--text-subtle)" }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
