"use client";

import useReveal from "@/hooks/useReveal";

const benefits = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.591M6 10.5H3.75m4.007-4.243l-1.59-1.591" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Etkileşimli İçerikler",
    description: "Dokunarak, sürükleyerek ve keşfederek öğrenilen dinamik dijital ders materyalleri.",
    points: ["Sürükle-bırak aktiviteler", "Animasyonlu ders anlatımları", "Mini oyunlarla pekiştirme"],
    visual: (
      <div className="relative h-40 flex items-center justify-center">
        <svg className="w-28 h-28 -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="var(--bar-bg)" strokeWidth="3" />
          <circle cx="50" cy="50" r="40" fill="none" stroke="var(--icon-dim)" strokeWidth="3" strokeDasharray="188" strokeDashoffset="50" strokeLinecap="round" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="var(--el-bg)" strokeWidth="2" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="var(--text-white-12)" strokeWidth="2" strokeDasharray="140" strokeDashoffset="80" strokeLinecap="round" />
        </svg>
        <div className="absolute w-2 h-2 rounded-full" style={{ background: "var(--accent)", opacity: 0.5, top: "25%", left: "35%" }} />
      </div>
    ),
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Ölçülebilir Başarı",
    description: "Öğrenci performansını takip edin, içgörüler keşfedin ve veri destekli ilerleme sağlayın.",
    points: ["Gerçek zamanlı analitik", "Bireysel gelişim raporları", "Sınıf bazlı karşılaştırma"],
    visual: (
      <div className="h-40 flex items-end justify-center gap-3 pb-8 px-4">
        {[45, 65, 80, 55].map((h, i) => (
          <div
            key={i}
            className="w-10 rounded-t-md"
            style={{
              height: `${h}%`,
              background: `linear-gradient(180deg, var(--icon-dim), var(--bar-bg))`,
              border: "1px solid var(--el-border)",
            }}
          />
        ))}
      </div>
    ),
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-2.813a4.5 4.5 0 00-6.364-6.364L4.5 8.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Kolay Entegrasyon",
    description: "Mevcut eğitim sistemlerinize sorunsuz entegre olan akıllı altyapı.",
    points: ["Hızlı kurulum süreci", "Mevcut müfredata uyum", "Teknik destek & eğitim"],
    visual: (
      <div className="h-40 flex items-center justify-center relative">
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center z-10 relative"
          style={{ background: "var(--logo-bg)", border: "1px solid var(--logo-border)" }}
        >
          <svg className="w-5 h-5" style={{ color: "var(--text-white-30)" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        {([
          { deg: 0, x: 0, y: -50 },
          { deg: 60, x: 43, y: -25 },
          { deg: 120, x: 43, y: 25 },
          { deg: 180, x: 0, y: 50 },
          { deg: 240, x: -43, y: 25 },
          { deg: 300, x: -43, y: -25 },
        ]).map(({ deg, x, y }) => (
          <div key={deg} className="absolute">
            <div
              className="w-[1px] origin-bottom"
              style={{
                height: "50px",
                background: "var(--el-border)",
                transform: `rotate(${deg}deg)`,
                position: "absolute",
                top: "50%",
                left: "50%",
                transformOrigin: "0 0",
              }}
            />
            <div
              className="w-3 h-3 rounded-full absolute"
              style={{
                background: "var(--bar-bg)",
                border: "1px solid var(--el-border-strong)",
                top: `calc(50% + ${y}px - 6px)`,
                left: `calc(50% + ${x}px - 6px)`,
              }}
            />
          </div>
        ))}
      </div>
    ),
  },
];

const comparisons = [
  { traditional: "Statik ders kitapları", dream: "Etkileşimli dijital içerikler" },
  { traditional: "Herkese aynı müfredat", dream: "AI ile kişiselleştirilmiş öğrenme" },
  { traditional: "Sınav sonucu ile değerlendirme", dream: "Gerçek zamanlı performans takibi" },
  { traditional: "Manuel ödev ve not takibi", dream: "Otomatik ödevlendirme ve raporlama" },
];

export default function Benefits() {
  const sectionRef = useReveal();

  return (
    <section className="relative py-14 lg:py-20">
      <div className="divider" />
      <div ref={sectionRef} className="max-w-[1100px] mx-auto px-6 pt-14">
        <div className="text-center mb-8 reveal-item">
          <h2 className="font-medium leading-[1.2] tracking-[-0.01em] mb-4" style={{ fontSize: "clamp(28px, 4vw, 44px)", color: "var(--text-heading)" }}>
            Neden <span className="serif-italic" style={{ color: "var(--text-muted)" }}>Dream EdTech?</span>
          </h2>
          <p className="text-[16px] leading-[1.6] tracking-[-0.02em] max-w-lg mx-auto" style={{ color: "var(--text-muted)" }}>
            Eğitimi otomatikleştirmek, optimize etmek ve ölçeklendirmek için ihtiyacınız olan her şey.
          </p>
        </div>

        {/* Comparison row - inline */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-12 reveal-item">
          {comparisons.map((c) => (
            <div key={c.traditional} className="flex items-center gap-2.5 text-[13px]">
              <span style={{ color: "var(--text-dim)" }}>{c.traditional}</span>
              <svg className="w-3.5 h-3.5 shrink-0" style={{ color: "var(--accent)" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-medium" style={{ color: "var(--text-heading)" }}>{c.dream}</span>
            </div>
          ))}
        </div>

        {/* Benefit cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <div key={i} className="landio-card landio-card-hover p-6 text-center reveal-item" style={{ transitionDelay: `${i * 100}ms` }}>
              {b.visual}
              <div className="flex items-center justify-center gap-2.5 mb-2">
                <span style={{ color: "var(--accent)" }}>{b.icon}</span>
                <h3 className="text-[16px] font-medium tracking-[-0.01em]" style={{ color: "var(--text-heading)" }}>{b.title}</h3>
              </div>
              <p className="text-[14px] leading-[1.6] tracking-[-0.01em] mb-4" style={{ color: "var(--text-muted)" }}>{b.description}</p>
              <div className="space-y-2 text-left">
                {b.points.map((point) => (
                  <div key={point} className="flex items-center gap-2.5 text-[13px]" style={{ color: "var(--text-subtle)" }}>
                    <svg className="w-3.5 h-3.5 shrink-0" style={{ color: "var(--accent)" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M4.5 12.75l6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {point}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
