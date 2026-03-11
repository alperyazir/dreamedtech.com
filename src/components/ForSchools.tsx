import { type ReactNode } from "react";

const features: { icon: ReactNode; title: string; description: string }[] = [
  {
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    title: "Sınıf Yönetimi",
    description: "Sınıflarınızı oluşturun, öğrencilerinizi ekleyin ve grup bazlı içerik atamaları yapın.",
  },
  {
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    title: "Özelleştirilebilir Müfredat",
    description: "Okulunuzun müfredatına göre içerikleri düzenleyin ve özel öğrenme yolları oluşturun.",
  },
  {
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    title: "AI Destekli Asistan",
    description: "Her öğrenciye özel yapay zeka destekli kişiselleştirilmiş öğrenme deneyimi sunun.",
  },
  {
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    title: "Performans Takibi",
    description: "Öğrenci gelişimini gerçek zamanlı izleyin, detaylı raporlara anında erişin.",
  },
  {
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    title: "Güvenli & KVKK Uyumlu",
    description: "Öğrenci verileriniz tam koruma altında. KVKK uyumlu güvenli altyapı.",
  },
  {
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    title: "Çoklu Platform Desteği",
    description: "Bilgisayar, tablet ve mobil cihazlarda sorunsuz çalışan her yerden erişim.",
  },
];

export default function ForSchools() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="divider" />
      <div className="max-w-[1100px] mx-auto px-6 pt-24">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="badge">
              <svg className="w-3.5 h-3.5 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" /></svg>
              ÖZELLİKLER
            </div>
          </div>
          <h2 className="font-medium leading-[1.2] tracking-[-0.01em] mb-4" style={{ fontSize: "clamp(28px, 4vw, 44px)", color: "var(--text-heading)" }}>
            Tüm Özellikler <span className="serif-italic" style={{ color: "var(--text-muted)" }}>Tek Yerde</span>
          </h2>
          <p className="text-[16px] leading-[1.6] tracking-[-0.02em] max-w-lg mx-auto" style={{ color: "var(--text-muted)" }}>
            Eğitim operasyonlarını otomatikleştirmek ve verimliliği artırmak için ihtiyacınız olan her şey.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div key={i} className="landio-card landio-card-hover p-6 text-center">
              <div className="flex items-center justify-center mb-8 mt-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: "var(--el-bg)",
                    border: "1px solid var(--el-border)",
                    color: "var(--accent)",
                  }}
                >
                  {f.icon}
                </div>
              </div>
              <h3 className="text-[15px] font-medium mb-2 tracking-[-0.01em]" style={{ color: "var(--text-heading)" }}>{f.title}</h3>
              <p className="text-[13px] leading-[1.6] tracking-[-0.01em]" style={{ color: "var(--text-muted)" }}>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
