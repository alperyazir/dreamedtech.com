"use client";

import { useState } from "react";
import useReveal from "@/hooks/useReveal";
import { useLanguage } from "@/hooks/useLanguage";

export default function FlowBook() {
  const sectionRef = useReveal();
  const [activeTab, setActiveTab] = useState<"overview" | "demo">("overview");
  const { t } = useLanguage();

  const features = [t("book.f1") as string, t("book.f2") as string, t("book.f3") as string, t("book.f4") as string, t("book.f5") as string, t("book.f6") as string];
  const chapters = t("book.preview.chapters") as string[];

  return (
    <section className="relative py-24 lg:py-32">
      <div className="divider" />
      <div ref={sectionRef} className="max-w-[1200px] mx-auto px-6 pt-16">
        <div className="mb-6 reveal-item">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold tracking-[0.05em] uppercase" style={{ color: "var(--accent-book)", background: "rgba(245, 166, 35, 0.08)", border: "1px solid rgba(245, 166, 35, 0.15)" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent-book)" }} />Flow Book
          </span>
        </div>
        <div className="product-section">
          <div className="reveal-item">
            <h2 className="font-semibold leading-[1.15] tracking-[-0.02em] mb-5" style={{ fontSize: "clamp(26px, 3.5vw, 42px)", color: "var(--text-heading)" }}>
              {t("book.title1") as string}<br />
              <span className="serif-italic font-normal" style={{ color: "var(--accent-book)" }}>{t("book.title2") as string}</span>
            </h2>
            <p className="text-[15px] leading-[1.7] mb-8" style={{ color: "var(--text-muted)" }}>{t("book.desc") as string}</p>
            <div className="space-y-1 mb-8">
              {features.map((f) => (<div key={f} className="feature-check text-[14px]" style={{ color: "var(--text-muted)" }}>{f}</div>))}
            </div>
            <button className="btn-primary cursor-pointer" style={{ background: "linear-gradient(180deg, #f7b84c, #d98f1b)", boxShadow: "0 0 20px rgba(245, 166, 35, 0.25), inset 0 1px 0 rgba(255,255,255,0.15)" }} onClick={() => setActiveTab("demo")}>
              {t("book.cta") as string}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
          <div className="reveal-item" style={{ transitionDelay: "150ms" }}>
            <div className="flex gap-1 mb-4">
              {(["overview", "demo"] as const).map((tab) => (
                <button key={tab} onClick={() => setActiveTab(tab)} className="px-4 py-2 rounded-lg text-[13px] font-medium transition-all cursor-pointer"
                  style={{ background: activeTab === tab ? "var(--el-bg)" : "transparent", color: activeTab === tab ? "var(--text-heading)" : "var(--text-subtle)", border: activeTab === tab ? "1px solid var(--border-card)" : "1px solid transparent" }}>
                  {tab === "overview" ? t("book.tab.preview") as string : t("book.tab.demo") as string}
                </button>
              ))}
            </div>
            {activeTab === "overview" ? (
              <div className="glass-card glow-card-book overflow-hidden">
                <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "16 / 10" }}>
                  <div className="absolute inset-4 lg:inset-6 z-10">
                    <div className="rounded-xl overflow-hidden h-full" style={{ background: "rgba(10, 10, 10, 0.85)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(12px)", boxShadow: "0 25px 50px rgba(0,0,0,0.5)" }}>
                      <div className="flex items-center gap-2 px-4 py-2.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                        <div className="flex gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,95,87,0.7)" }} />
                          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,189,46,0.7)" }} />
                          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(40,201,64,0.7)" }} />
                        </div>
                        <span className="text-[11px] ml-3" style={{ color: "rgba(255,255,255,0.3)" }}>{t("book.preview.title") as string}</span>
                      </div>
                      <div className="p-4 lg:p-5">
                        <div className="flex gap-3">
                          <div className="hidden lg:block w-36 space-y-2">
                            {chapters.map((ch, i) => (
                              <div key={ch} className="px-3 py-2 rounded-lg text-[10px]" style={{ background: i === 1 ? "rgba(245, 166, 35, 0.1)" : "transparent", color: i === 1 ? "var(--accent-book)" : "rgba(255,255,255,0.2)", border: i === 1 ? "1px solid rgba(245, 166, 35, 0.2)" : "1px solid transparent" }}>{ch}</div>
                            ))}
                          </div>
                          <div className="flex-1 space-y-3">
                            <div className="h-2 w-3/4 rounded" style={{ background: "rgba(255,255,255,0.08)" }} />
                            <div className="h-2 w-1/2 rounded" style={{ background: "rgba(255,255,255,0.05)" }} />
                            <div className="h-20 rounded-lg flex items-center justify-center" style={{ background: "rgba(245,166,35,0.06)", border: "1px dashed rgba(245,166,35,0.15)" }}>
                              <span className="text-[10px]" style={{ color: "rgba(245,166,35,0.4)" }}>{t("book.preview.interactive") as string}</span>
                            </div>
                            <div className="h-2 w-full rounded" style={{ background: "rgba(255,255,255,0.05)" }} />
                            <div className="h-2 w-2/3 rounded" style={{ background: "rgba(255,255,255,0.04)" }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: 400 }}>
                <div className="relative z-10 flex items-center justify-center h-full rounded-2xl" style={{ minHeight: 400, border: "1px dashed var(--border-hover)", background: "rgba(0,0,0,0.3)" }}>
                  <div className="text-center px-6">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center" style={{ background: "rgba(245, 166, 35, 0.1)", border: "1px solid rgba(245, 166, 35, 0.15)" }}>
                      <svg className="w-6 h-6" style={{ color: "var(--accent-book)" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    <h4 className="text-[16px] font-semibold mb-2" style={{ color: "var(--text-heading)" }}>{t("book.demo.title") as string}</h4>
                    <p className="text-[13px] max-w-sm" style={{ color: "var(--text-muted)" }}>{t("book.demo.desc") as string}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
