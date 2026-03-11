"use client";

import useReveal from "@/hooks/useReveal";

export default function About() {
  const sectionRef = useReveal();

  return (
    <section className="relative py-14 lg:py-20">
      <div ref={sectionRef} className="max-w-[1100px] mx-auto px-6">
        <div className="text-center reveal-item">
          <blockquote
            className="leading-[1.5] mb-6 max-w-[900px] mx-auto"
            style={{ fontSize: "clamp(20px, 2.8vw, 28px)", color: "var(--text-dim)" }}
          >
            &ldquo;Geleneksel eğitim materyallerini{" "}
            <em className="serif-italic not-italic" style={{ color: "var(--text-primary)", fontWeight: 600 }}>dijital</em> ve{" "}
            <em className="serif-italic not-italic" style={{ color: "var(--text-primary)", fontWeight: 600 }}>etkileşimli</em>{" "}
            içeriklere dönüştürüyoruz. Yapay zeka ile her öğrenciye{" "}
            <em className="serif-italic not-italic" style={{ color: "var(--text-primary)", fontWeight: 600 }}>kişiselleştirilmiş</em>{" "}
            bir öğrenme deneyimi sunuyoruz.&rdquo;
          </blockquote>

          <p className="text-[15px] leading-[1.7] max-w-2xl mx-auto mb-12" style={{ color: "var(--text-subtle)" }}>
            Dream EdTech olarak, okulların ve eğitimcilerin dijital dönüşüm sürecini uçtan uca destekliyoruz.
            İçerik üretiminden performans takibine, sınıf yönetiminden kişiselleştirilmiş öğrenmeye kadar
            tüm süreçleri tek bir ekosistemde birleştiriyoruz.
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              icon: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
              title: "AI Destekli İçerik Üretimi",
              description: "Müfredat dokümanlarınızı yükleyin, yapay zeka etkileşimli ders materyallerine, sorulara ve aktivitelere dönüştürsün.",
            },
            {
              icon: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
              title: "Entegre Ekosistem",
              description: "FlowHub yönetim paneli ve FlowBook akıllı tahta birbirine entegre çalışarak kesintisiz bir eğitim deneyimi sunar.",
            },
            {
              icon: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
              title: "Veri Odaklı Gelişim",
              description: "Öğrenci performansını gerçek zamanlı analiz edin, zayıf noktaları tespit edin ve eğitim stratejinizi veriye dayalı şekillendirin.",
            },
          ].map((item, i) => (
            <div key={item.title} className="landio-card landio-card-hover p-6 text-center reveal-item" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="flex items-center justify-center mb-5 mt-2">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: "var(--el-bg)",
                    border: "1px solid var(--el-border)",
                    color: "var(--accent)",
                  }}
                >
                  {item.icon}
                </div>
              </div>
              <h3 className="text-[15px] font-medium mb-2 tracking-[-0.01em]" style={{ color: "var(--text-heading)" }}>
                {item.title}
              </h3>
              <p className="text-[13px] leading-[1.6] tracking-[-0.01em]" style={{ color: "var(--text-muted)" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
