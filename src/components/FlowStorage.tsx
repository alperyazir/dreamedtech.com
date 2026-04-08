"use client";

import useReveal from "@/hooks/useReveal";
import { useLanguage } from "@/hooks/useLanguage";

export default function FlowStorage() {
  const sectionRef = useReveal();
  const { t } = useLanguage();

  const features = [t("storage.f1") as string, t("storage.f2") as string, t("storage.f3") as string, t("storage.f4") as string, t("storage.f5") as string, t("storage.f6") as string];
  const breadcrumb = t("storage.breadcrumb") as string[];

  return (
    <section className="relative py-24 lg:py-32">
      <div className="divider" />
      <div ref={sectionRef} className="max-w-[1200px] mx-auto px-6 pt-16">
        <div className="mb-6 reveal-item">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold tracking-[0.05em] uppercase" style={{ color: "var(--accent-storage)", background: "rgba(14, 154, 167, 0.08)", border: "1px solid rgba(14, 154, 167, 0.15)" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent-storage)" }} />Flow Storage
          </span>
        </div>
        <div className="product-section">
          <div className="reveal-item">
            <h2 className="font-semibold leading-[1.15] tracking-[-0.02em] mb-5" style={{ fontSize: "clamp(26px, 3.5vw, 42px)", color: "var(--text-heading)" }}>
              {t("storage.title1") as string}<br />
              <span className="serif-italic font-normal" style={{ color: "var(--accent-storage)" }}>{t("storage.title2") as string}</span>
            </h2>
            <p className="text-[15px] leading-[1.7] mb-8" style={{ color: "var(--text-muted)" }}>{t("storage.desc") as string}</p>
            <div className="space-y-1 mb-8">
              {features.map((f) => (<div key={f} className="feature-check text-[14px]" style={{ color: "var(--text-muted)" }}>{f}</div>))}
            </div>
          </div>
          <div className="reveal-item" style={{ transitionDelay: "150ms" }}>
            <div className="glass-card glow-card-storage overflow-hidden">
              <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "16 / 10" }}>
                <div className="absolute inset-4 lg:inset-6 z-10">
                  <div className="rounded-xl overflow-hidden h-full" style={{ background: "rgba(10, 10, 10, 0.85)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(12px)", boxShadow: "0 25px 50px rgba(0,0,0,0.5)" }}>
                    <div className="flex items-center gap-2 px-4 py-2.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,95,87,0.7)" }} />
                        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,189,46,0.7)" }} />
                        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(40,201,64,0.7)" }} />
                      </div>
                      <span className="text-[11px] ml-3" style={{ color: "rgba(255,255,255,0.3)" }}>{t("storage.panel") as string}</span>
                    </div>
                    <div className="p-4 lg:p-5">
                      <div className="flex items-center gap-1.5 mb-3">
                        {breadcrumb.map((b, i) => (
                          <div key={b} className="flex items-center gap-1.5">
                            {i > 0 && <span className="text-[9px]" style={{ color: "rgba(255,255,255,0.15)" }}>/</span>}
                            <span className="text-[10px]" style={{ color: i === 2 ? "rgba(14,154,167,0.6)" : "rgba(255,255,255,0.2)" }}>{b}</span>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-1.5">
                        {[{ name: "Geometri_Giriş.pdf", size: "2.4 MB", ext: "PDF" }, { name: "Kesirler_Video.mp4", size: "48 MB", ext: "MP4" }, { name: "Alıştırmalar.epub", size: "5.1 MB", ext: "EPB" }, { name: "Dinleme_Metni.mp3", size: "8.2 MB", ext: "MP3" }].map((f) => (
                          <div key={f.name} className="flex items-center gap-3 px-3 py-2 rounded-lg" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}>
                            <div className="w-6 h-6 rounded flex items-center justify-center flex-shrink-0" style={{ background: "rgba(14,154,167,0.1)" }}>
                              <span className="text-[8px] font-bold" style={{ color: "rgba(14,154,167,0.5)" }}>{f.ext}</span>
                            </div>
                            <span className="text-[10px] flex-1 truncate" style={{ color: "rgba(255,255,255,0.35)" }}>{f.name}</span>
                            <span className="text-[9px]" style={{ color: "rgba(255,255,255,0.15)" }}>{f.size}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[9px]" style={{ color: "rgba(255,255,255,0.2)" }}>{t("storage.used") as string}</span>
                          <span className="text-[9px]" style={{ color: "rgba(14,154,167,0.5)" }}>2.4 / 5 TB</span>
                        </div>
                        <div className="h-1 rounded-full" style={{ background: "rgba(255,255,255,0.04)" }}>
                          <div className="h-full rounded-full" style={{ width: "48%", background: "rgba(14,154,167,0.4)" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
