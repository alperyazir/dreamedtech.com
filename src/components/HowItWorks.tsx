"use client";

import { useState, useEffect, useCallback } from "react";
import useReveal from "@/hooks/useReveal";

const steps = [
  {
    id: 1,
    label: "ADIM 1",
    title: "Keşfet",
    titleItalic: "Analiz Et",
    description: "Okulunuzun müfredatına uygun dijital içeriklere anında erişin. Sınıflarınızı oluşturun ve öğrencilerinizi platforma ekleyin. Mevcut eğitim materyallerinizi analiz ederek en uygun dijital dönüşüm stratejisini belirliyoruz.",
    visual: (
      <div className="space-y-3">
        <div className="rounded-xl p-4" style={{ background: "var(--el-bg-alt)", border: "1px solid var(--el-border)" }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--bar-bg)" }}>
              <svg className="w-4 h-4" style={{ color: "var(--text-white-30)" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <div className="h-2.5 w-32 rounded" style={{ background: "var(--bar-bg)" }} />
          </div>
          <div className="grid grid-cols-2 gap-2">
            {["Matematik", "Fen Bilgisi", "Türkçe", "Sosyal"].map((s) => (
              <div key={s} className="p-2.5 rounded-lg text-center text-[11px]" style={{ background: "var(--el-bg)", border: "1px solid var(--bar-bg)", color: "var(--text-white-30)" }}>{s}</div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    label: "ADIM 2",
    title: "Etkileşimli",
    titleItalic: "Öğren",
    description: "Öğrenciler video, animasyon, mini oyunlar ve AI destekli aktivitelerle konuları derinlemesine öğrenir. Her öğrencinin seviyesine göre kişiselleştirilmiş içerikler sunar.",
    visual: (
      <div className="space-y-3">
        <div className="rounded-xl p-4" style={{ background: "var(--el-bg-alt)", border: "1px solid var(--el-border)" }}>
          <div className="text-[11px] mb-3" style={{ color: "var(--text-white-30)" }}>Öğrenme İlerlemesi</div>
          <div className="space-y-2.5">
            {[
              { label: "Video", pct: 84 },
              { label: "AI Aktivite", pct: 94 },
              { label: "Oyunlar", pct: 88 },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="text-[10px] w-16 shrink-0" style={{ color: "var(--text-white-30)" }}>{item.label}</span>
                <div className="flex-1 h-1.5 rounded-full" style={{ background: "var(--bar-bg)" }}>
                  <div className="h-full rounded-full" style={{ width: `${item.pct}%`, background: "var(--bar-fill)" }} />
                </div>
                <span className="text-[10px] w-8 text-right" style={{ color: "var(--text-white-30)" }}>{item.pct}%</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-3">
          {[{ v: "3.6K", l: "Öğrenci" }, { v: "2M+", l: "İçerik" }].map((s) => (
            <div key={s.l} className="flex-1 rounded-lg p-3 text-center" style={{ background: "var(--el-bg-alt)", border: "1px solid var(--bar-bg)" }}>
              <div className="text-[16px] font-medium" style={{ color: "var(--stat-value)" }}>{s.v}</div>
              <div className="text-[10px] mt-0.5" style={{ color: "var(--icon-color)" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 3,
    label: "ADIM 3",
    title: "Optimize Et",
    titleItalic: "& Ölçekle",
    description: "Detaylı analitik ve raporlarla öğrenci gelişimini takip edin. Performans verilerini kullanarak eğitim stratejinizi sürekli iyileştirin ve büyütün.",
    visual: (
      <div className="space-y-3">
        <div className="rounded-xl p-4" style={{ background: "var(--el-bg-alt)", border: "1px solid var(--el-border)" }}>
          <div className="text-[11px] mb-3" style={{ color: "var(--text-white-30)" }}>Büyüme & Verimlilik</div>
          <div className="flex items-end gap-1 h-16 mb-4">
            {[30, 45, 35, 55, 50, 70, 65, 80, 75, 90, 85, 95].map((h, i) => (
              <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: "var(--bar-fill)" }} />
            ))}
          </div>
          <div className="space-y-2">
            {[
              { l: "Başarı Oranı", p: 84 },
              { l: "Tamamlama", p: 94 },
              { l: "Memnuniyet", p: 88 },
            ].map((item) => (
              <div key={item.l} className="flex items-center gap-3">
                <span className="text-[10px] w-20 shrink-0" style={{ color: "var(--text-white-30)" }}>{item.l}</span>
                <div className="flex-1 h-1.5 rounded-full" style={{ background: "var(--bar-bg)" }}>
                  <div className="h-full rounded-full" style={{ width: `${item.p}%`, background: "var(--bar-fill)" }} />
                </div>
                <span className="text-[10px] w-8 text-right" style={{ color: "var(--text-white-30)" }}>{item.p}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const sectionRef = useReveal();

  const nextStep = useCallback(() => {
    setActive((p) => (p + 1) % steps.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { nextStep(); return 0; }
        return p + 2;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [nextStep]);

  return (
    <section className="relative py-14 lg:py-20">
      <div className="divider" />
      <div ref={sectionRef} className="max-w-[1100px] mx-auto px-6 pt-14">
        <div className="text-center mb-12 reveal-item">
          <h2 className="font-medium leading-[1.2] tracking-[-0.01em] mb-4" style={{ fontSize: "clamp(28px, 4vw, 44px)", color: "var(--text-heading)" }}>
            Basit & <span className="serif-italic" style={{ color: "var(--text-muted)" }}>Akıllı Süreç</span>
          </h2>
          <p className="text-[16px] leading-[1.6] tracking-[-0.02em] max-w-lg mx-auto" style={{ color: "var(--text-muted)" }}>
            İş birliği yapmak, oluşturmak ve ölçeklendirmek için ihtiyacınız olan her şey tek bir yerde.
          </p>
        </div>

        <div className="landio-card p-6 lg:p-8 reveal-item">
          <div className="grid grid-cols-3 gap-3 mb-8">
            {steps.map((step, i) => (
              <button
                key={step.id}
                onClick={() => { setActive(i); setProgress(0); }}
                className={`process-tab ${active === i ? "active" : ""}`}
              >
                {active === i && (
                  <div className="progress-bar" style={{ width: `${progress}%` }} />
                )}
                {step.label}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>{steps[active].visual}</div>
            <div className="flex flex-col justify-center">
              <div className="text-[12px] mb-2" style={{ color: "var(--text-subtle)" }}>
                {String(steps[active].id).padStart(2, "0")}
              </div>
              <h3 className="text-[22px] font-medium mb-4 tracking-[-0.01em]" style={{ color: "var(--text-heading)" }}>
                {steps[active].title}{" "}
                <span className="serif-italic" style={{ color: "var(--text-muted)" }}>
                  {steps[active].titleItalic}
                </span>
              </h3>
              <p className="text-[14px] leading-[1.6] tracking-[-0.01em]" style={{ color: "var(--text-muted)" }}>
                {steps[active].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
