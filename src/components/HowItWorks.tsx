"use client";

import useReveal from "@/hooks/useReveal";
import { useLanguage } from "@/hooks/useLanguage";

export default function HowItWorks() {
  const sectionRef = useReveal();
  const { t } = useLanguage();

  const steps = [
    { number: "01", title: t("how.s1.title") as string, subtitle: t("how.s1.sub") as string, description: t("how.s1.desc") as string, accent: "var(--accent-storage)", details: [t("how.s1.d1") as string, t("how.s1.d2") as string, t("how.s1.d3") as string] },
    { number: "02", title: t("how.s2.title") as string, subtitle: t("how.s2.sub") as string, description: t("how.s2.desc") as string, accent: "var(--accent-learn)", details: [t("how.s2.d1") as string, t("how.s2.d2") as string, t("how.s2.d3") as string] },
    { number: "03", title: t("how.s3.title") as string, subtitle: t("how.s3.sub") as string, description: t("how.s3.desc") as string, accent: "var(--accent-learn)", details: [t("how.s3.d1") as string, t("how.s3.d2") as string, t("how.s3.d3") as string] },
    { number: "04", title: t("how.s4.title") as string, subtitle: t("how.s4.sub") as string, description: t("how.s4.desc") as string, accent: "var(--accent-book)", details: [t("how.s4.d1") as string, t("how.s4.d2") as string, t("how.s4.d3") as string] },
    { number: "05", title: t("how.s5.title") as string, subtitle: t("how.s5.sub") as string, description: t("how.s5.desc") as string, accent: "var(--accent)", details: [t("how.s5.d1") as string, t("how.s5.d2") as string, t("how.s5.d3") as string] },
  ];

  return (
    <section className="relative py-24 lg:py-32">
      <div className="divider" />
      <div ref={sectionRef} className="max-w-[1200px] mx-auto px-6 pt-16">
        <div className="text-center mb-16 reveal-item">
          <div className="mb-4"><span className="badge">{t("how.badge") as string}</span></div>
          <h2 className="font-semibold leading-[1.15] tracking-[-0.02em] mb-5" style={{ fontSize: "clamp(28px, 4vw, 48px)", color: "var(--text-heading)" }}>
            {t("how.title1") as string}{" "}
            <span className="serif-italic font-normal" style={{ color: "var(--text-muted)" }}>{t("how.title2") as string}</span>
          </h2>
          <p className="text-[16px] leading-[1.7] max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>{t("how.subtitle") as string}</p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-5 lg:left-6 top-0 bottom-0 w-px hidden md:block" style={{ background: "rgba(255,255,255,0.06)" }} />
          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={step.number} className="glass-card p-6 lg:p-7 md:ml-14 reveal-item relative" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="hidden md:flex absolute -left-14 top-6 w-11 h-11 rounded-xl items-center justify-center text-[14px] font-bold"
                  style={{ background: `color-mix(in srgb, ${step.accent} 12%, transparent)`, color: step.accent, border: `1px solid color-mix(in srgb, ${step.accent} 20%, transparent)` }}>{step.number}</div>
                <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="md:hidden text-[12px] font-bold" style={{ color: step.accent }}>{step.number}</span>
                      <span className="text-[11px] font-medium" style={{ color: step.accent, opacity: 0.7 }}>{step.subtitle}</span>
                    </div>
                    <h3 className="text-[18px] font-semibold tracking-[-0.01em] mb-2" style={{ color: "var(--text-heading)" }}>{step.title}</h3>
                    <p className="text-[14px] leading-[1.7]" style={{ color: "var(--text-muted)" }}>{step.description}</p>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:w-64 flex-shrink-0 space-y-2">
                    {step.details.map((d) => (
                      <div key={d} className="flex items-center gap-2 text-[12px]" style={{ color: "var(--text-subtle)" }}>
                        <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: step.accent }} />{d}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
