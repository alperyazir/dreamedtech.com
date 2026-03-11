export default function Screenshots() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="divider" />
      <div className="max-w-[1100px] mx-auto px-6 pt-24">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="badge">
              <svg className="w-3.5 h-3.5 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" strokeLinecap="round" strokeLinejoin="round" /></svg>
              BAŞARI HİKAYELERİ
            </div>
          </div>
          <h2 className="font-medium leading-[1.2] tracking-[-0.01em] mb-4" style={{ fontSize: "clamp(28px, 4vw, 44px)", color: "var(--text-heading)" }}>
            İlham Veren <span className="serif-italic" style={{ color: "var(--text-muted)" }}>Başarı Hikayeleri</span>
          </h2>
          <p className="text-[16px] leading-[1.6] tracking-[-0.02em] max-w-lg mx-auto" style={{ color: "var(--text-muted)" }}>
            Okulların ve eğitimcilerin DreamedTech ile nasıl sonuç aldığını keşfedin
          </p>
        </div>

        {/* Stacked cards */}
        <div className="relative max-w-[900px] mx-auto">
          <div className="absolute -top-3 left-4 right-4 h-full rounded-2xl" style={{ background: "var(--el-bg-alt)", border: "1px solid var(--bar-bg)" }} />
          <div className="absolute -top-1.5 left-2 right-2 h-full rounded-2xl" style={{ background: "var(--el-bg)", border: "1px solid var(--el-border)" }} />

          <div className="relative landio-card p-6 lg:p-8">
            <div className="flex items-center justify-between mb-6">
              <svg className="w-5 h-5" style={{ color: "var(--icon-dim)" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full" style={{ background: "var(--dot-inactive)" }} />
                <div className="w-2 h-2 rounded-full" style={{ background: "var(--dot-inactive)" }} />
                <div className="w-2 h-2 rounded-full" style={{ background: "var(--dot-active)" }} />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-[20px] font-medium mb-4 tracking-[-0.01em]" style={{ color: "var(--text-heading)" }}>
                  Yıldız Koleji&apos;nin Dijital Dönüşümü
                </h3>
                <p className="text-[13px] leading-[1.7] mb-6" style={{ color: "var(--text-dim)" }}>
                  Yıldız Koleji, DreamedTech platformuyla tüm ders materyallerini dijitalleştirdi.
                  Etkileşimli içerikler ve AI destekli öğrenme araçları sayesinde öğrenci başarısında
                  belirgin artış, ders katılımında iyileşme sağlandı.
                </p>

                <div className="flex gap-4">
                  {[
                    { v: "40%", l: "başarı artışı" },
                    { v: "50%", l: "katılım artışı" },
                  ].map((s) => (
                    <div key={s.l} className="flex-1 p-4 rounded-xl text-center" style={{ border: "1px solid var(--border-subtle)" }}>
                      <div className="text-[24px] font-medium" style={{ color: "var(--text-heading)" }}>{s.v}</div>
                      <div className="text-[11px] mt-1" style={{ color: "var(--text-subtle)" }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl flex items-center justify-center min-h-[220px]" style={{ background: "var(--el-bg-alt)", border: "1px solid var(--el-border)" }}>
                <div className="text-center p-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: "var(--el-bg)", border: "1px solid var(--el-border)" }}
                  >
                    <svg className="w-8 h-8" style={{ color: "var(--text-white-12)" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}>
                      <path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="text-[13px]" style={{ color: "var(--icon-dim)" }}>Yıldız Koleji</div>
                  <div className="text-[11px] mt-1" style={{ color: "var(--icon-faint)" }}>İstanbul, Türkiye</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="text-center mt-12">
          <p className="leading-[1.5] max-w-2xl mx-auto" style={{ fontSize: "clamp(16px, 2.2vw, 22px)", color: "var(--text-faint)" }}>
            &ldquo;DreamedTech ile öğrencilerimiz derslere daha fazla{" "}
            <em className="serif-italic not-italic" style={{ color: "var(--text-muted)" }}>ilgi</em> gösteriyor, öğretmenlerimiz
            zamanlarını daha <em className="serif-italic not-italic" style={{ color: "var(--text-muted)" }}>verimli</em> kullanıyor.&rdquo;
          </p>
          <div className="flex justify-center gap-2 mt-8">
            <div className="w-2 h-2 rounded-full" style={{ background: "var(--icon-faint)" }} />
            <div className="w-2 h-2 rounded-full" style={{ background: "var(--icon-faint)" }} />
            <div className="w-2 h-2 rounded-full" style={{ background: "var(--dot-active)" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
