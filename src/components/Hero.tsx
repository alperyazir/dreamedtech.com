export default function Hero({ onScrollNext }: { onScrollNext?: () => void }) {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none hero-video"
        style={{ zIndex: 1 }}
      >
        <source src="/herovideo.mp4" type="video/mp4" />
      </video>

      {/* Overlay gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          background: `
            radial-gradient(ellipse 70% 50% at 50% 50%, transparent 30%, var(--hero-overlay-color) 75%),
            linear-gradient(to bottom, var(--hero-overlay-color) 0%, transparent 15%, transparent 85%, var(--hero-overlay-color) 100%)
          `,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[900px] mx-auto px-6 text-center pt-28 pb-16">
        {/* Heading */}
        <h1
          className="font-medium leading-[1.1] tracking-[-0.02em] mb-6 animate-fade-in-up delay-100"
          style={{ fontSize: "clamp(42px, 6vw, 68px)", color: "var(--text-heading-alt)" }}
        >
          Öğrenmeyi Dönüştür. Geleceği
          <br />
          <span className="serif-italic" style={{ color: "var(--text-muted)" }}>
            Şekillendir.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-[17px] leading-[1.6] tracking-[-0.02em] max-w-lg mx-auto mb-10 animate-fade-in-up delay-200" style={{ color: "var(--text-muted)" }}>
          Yapay zeka destekli etkileşimli içerikler, akıllı tahta ve merkezi yönetim platformu ile eğitimde yeni nesil deneyim.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up delay-300">
          <button
            className="btn-glow"
            onClick={onScrollNext}
          >
            Platformu Keşfet
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-[15px] font-medium transition-all duration-300"
            style={{
              color: "var(--text-primary)",
              border: "1px solid var(--border-subtle)",
              background: "var(--el-bg)",
            }}
            onClick={() => {
              const el = document.getElementById("iletisim");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Demo Talep Et
          </button>
        </div>

      </div>

      {/* Scroll indicator */}
      <button
        onClick={onScrollNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-hint cursor-pointer p-2"
        style={{ zIndex: 10 }}
        aria-label="Sonraki bölüm"
      >
        <svg className="w-5 h-5" style={{ color: "var(--text-faint)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
}
