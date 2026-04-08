"use client";

import { useLanguage } from "@/hooks/useLanguage";

export default function Hero({ onScrollNext }: { onScrollNext?: () => void }) {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover pointer-events-none hero-video" style={{ zIndex: 1 }}>
        <source src="/herovideo.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2, background: `radial-gradient(ellipse 60% 50% at 50% 45%, transparent 20%, var(--bg) 80%), linear-gradient(to bottom, var(--bg) 0%, transparent 20%, transparent 80%, var(--bg) 100%)` }} />

      <div className="relative z-10 max-w-[900px] mx-auto px-6 text-center pt-28 pb-20">
        <div className="mb-8 animate-fade-in-up">
          <span className="badge" style={{ backdropFilter: "blur(8px)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse-dot" style={{ background: "var(--accent)" }} />
            {t("hero.badge") as string}
          </span>
        </div>
        <h1 className="font-semibold leading-[1.08] tracking-[-0.03em] mb-7 animate-fade-in-up delay-100" style={{ fontSize: "clamp(40px, 6.5vw, 76px)", color: "#fff" }}>
          {t("hero.title1") as string}
          <br />
          <span className="serif-italic font-normal" style={{ color: "rgba(255,255,255,0.6)" }}>{t("hero.title2") as string}</span>
        </h1>
        <p className="text-[17px] leading-[1.7] tracking-[-0.01em] max-w-[540px] mx-auto mb-10 animate-fade-in-up delay-200" style={{ color: "rgba(255,255,255,0.55)" }}>
          {t("hero.subtitle") as string}
        </p>
        <div className="flex items-center justify-center animate-fade-in-up delay-300">
          <button className="btn-primary cursor-pointer" onClick={onScrollNext}>
            {t("hero.cta") as string}
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
      </div>

      <button onClick={onScrollNext} className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-hint cursor-pointer p-2" style={{ zIndex: 10 }} aria-label="Next">
        <svg className="w-5 h-5" style={{ color: "rgba(255,255,255,0.25)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" /></svg>
      </button>
    </div>
  );
}
