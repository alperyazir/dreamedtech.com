"use client";

import useReveal from "@/hooks/useReveal";

/* SVG icon components */
const BookIcon = () => <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" /></svg>;
const VideoIcon = () => <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" strokeLinecap="round" strokeLinejoin="round" /></svg>;
const AudioIcon = () => <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" strokeLinecap="round" strokeLinejoin="round" /></svg>;
const DocIcon = () => <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" strokeLinecap="round" strokeLinejoin="round" /></svg>;

const SparkleIcon = ({ className = "w-4 h-4" }: { className?: string }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" strokeLinecap="round" strokeLinejoin="round" /></svg>;
const ClipboardIcon = () => <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" strokeLinecap="round" strokeLinejoin="round" /></svg>;
const ChartIcon = () => <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" strokeLinecap="round" strokeLinejoin="round" /></svg>;
const UsersIcon = () => <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" strokeLinecap="round" strokeLinejoin="round" /></svg>;

const TouchIcon = () => <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075-5.925v3m0-3a1.575 1.575 0 0 1 3.15 0v3.75m-3.15-.75v1.5a1.575 1.575 0 0 0 3.15 0V9.75M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l3.564-3.564a1.575 1.575 0 0 0-1.025-2.688h-.244a1.575 1.575 0 0 1-1.46-.984l-.076-.19a1.575 1.575 0 0 0-1.445-.97H13.9a1.575 1.575 0 0 1-1.575-1.575V7.575" strokeLinecap="round" strokeLinejoin="round" /></svg>;
const PuzzleIcon = () => <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .657-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58Z" strokeLinecap="round" strokeLinejoin="round" /></svg>;
const FilmIcon = () => <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m-16.5 5.25v5.25m0-5.25h1.5c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-1.5-3.75c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M6 15v-1.5c0-.621-.504-1.125-1.125-1.125M18 7.125v1.5m0-1.5c0-.621-.504-1.125-1.125-1.125H7.125" strokeLinecap="round" strokeLinejoin="round" /></svg>;
const CpuIcon = () => <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V5.25a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 5.25v12.5a2.25 2.25 0 0 0 2.25 2.25Zm4.5-12v6m0 0 2.25-2.25M12 12 9.75 9.75" strokeLinecap="round" strokeLinejoin="round" /></svg>;

export default function Services() {
  const sectionRef = useReveal();

  return (
    <section className="relative py-14 lg:py-20">
      <div className="divider" />
      <div ref={sectionRef} className="max-w-[1100px] mx-auto px-6 pt-14">
        {/* Header */}
        <div className="text-center mb-12 reveal-item">
          <h2 className="font-medium leading-[1.2] tracking-[-0.01em] mb-4" style={{ fontSize: "clamp(28px, 4vw, 44px)", color: "var(--text-heading)" }}>
            Dream EdTech <span className="serif-italic" style={{ color: "var(--text-muted)" }}>Ekosistemi</span>
          </h2>
          <p className="text-[16px] leading-[1.6] tracking-[-0.02em] max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
            Kaynaklarınızı AI ile işleyin, Flow Hubb&apos;da yönetin, Flow Book ile öğrencilere sunun.
          </p>
        </div>

        {/* Architecture Flow */}
        <div className="landio-card p-6 lg:p-10 mb-10 reveal-item">
          <div className="flex flex-col items-center gap-0">

            {/* Row 1: Input Sources */}
            <div className="text-center mb-2">
              <div className="text-[10px] font-medium tracking-[0.1em] uppercase mb-3" style={{ color: "var(--text-subtle)" }}>Kaynaklar</div>
              <div className="flex items-center justify-center gap-3">
                {[
                  { icon: <BookIcon />, label: "Kitap" },
                  { icon: <VideoIcon />, label: "Video" },
                  { icon: <AudioIcon />, label: "Ses" },
                  { icon: <DocIcon />, label: "Doküman" },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col items-center gap-1.5">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "var(--el-bg)", border: "1px solid var(--el-border)", color: "var(--icon-color)" }}>
                      {s.icon}
                    </div>
                    <span className="text-[10px]" style={{ color: "var(--text-white-30)" }}>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow down */}
            <div className="flex flex-col items-center py-3">
              <div className="w-px h-6" style={{ background: "var(--border-subtle)" }} />
              <svg className="w-4 h-4" style={{ color: "var(--icon-dim)" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>

            {/* Row 2: AI Processing */}
            <div className="w-full max-w-md rounded-2xl p-5 text-center" style={{ background: "var(--el-bg)", border: "1px solid var(--el-border)" }}>
              <div className="flex items-center justify-center gap-2 mb-2">
                <SparkleIcon className="w-5 h-5" />
                <span className="text-[14px] font-semibold" style={{ color: "var(--text-heading)" }}>AI İşleme Motoru</span>
              </div>
              <p className="text-[11px] leading-[1.5]" style={{ color: "var(--text-white-30)" }}>
                İçerik analizi &bull; Otomatik etiketleme &bull; Etkileşimli dönüşüm &bull; Soru üretimi
              </p>
            </div>

            {/* Arrow down */}
            <div className="flex flex-col items-center py-3">
              <div className="w-px h-6" style={{ background: "var(--border-subtle)" }} />
              <svg className="w-4 h-4" style={{ color: "var(--icon-dim)" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>

            {/* Row 3: Database */}
            <div className="rounded-2xl px-6 py-4 text-center" style={{ background: "var(--el-bg-alt)", border: "1px solid var(--el-border)" }}>
              <div className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4" style={{ color: "var(--icon-color)" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span className="text-[13px] font-medium" style={{ color: "var(--text-heading)" }}>İçerik Veritabanı</span>
              </div>
            </div>

            {/* Split arrows */}
            <div className="flex items-start justify-center w-full max-w-lg py-3">
              <div className="flex-1 flex flex-col items-center">
                <div className="w-px h-6" style={{ background: "var(--border-subtle)" }} />
                <svg className="w-4 h-4" style={{ color: "var(--icon-dim)" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <div className="w-px h-6" style={{ background: "var(--border-subtle)" }} />
                <svg className="w-4 h-4" style={{ color: "var(--icon-dim)" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
            </div>

            {/* Row 4: FlowHub + FlowBook */}
            <div className="grid md:grid-cols-2 gap-5 w-full">
              {/* FlowHub */}
              <div className="rounded-2xl p-5" style={{ background: "var(--el-bg)", border: "1px solid var(--el-border)" }}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--accent)", color: "#fff" }}>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <div>
                    <div className="text-[15px] font-semibold" style={{ color: "var(--text-heading)" }}>Flow Hubb</div>
                    <div className="text-[10px]" style={{ color: "var(--text-subtle)" }}>Yönetim & İçerik Merkezi</div>
                  </div>
                </div>
                <div className="space-y-2">
                  {[
                    { icon: <SparkleIcon />, label: "AI ile İçerik Üretimi" },
                    { icon: <ClipboardIcon />, label: "Ödevlendirme & Atama" },
                    { icon: <ChartIcon />, label: "Performans Raporlama" },
                    { icon: <UsersIcon />, label: "Sınıf & Öğrenci Yönetimi" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2.5 px-3 py-2 rounded-lg" style={{ background: "var(--el-bg-alt)", border: "1px solid var(--bar-bg)" }}>
                      <span style={{ color: "var(--icon-color)" }}>{item.icon}</span>
                      <span className="text-[12px]" style={{ color: "var(--text-muted)" }}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FlowBook */}
              <div className="rounded-2xl p-5" style={{ background: "var(--el-bg)", border: "1px solid var(--el-border)" }}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--accent)", color: "#fff" }}>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <div>
                    <div className="text-[15px] font-semibold" style={{ color: "var(--text-heading)" }}>Flow Book</div>
                    <div className="text-[10px]" style={{ color: "var(--text-subtle)" }}>Etkileşimli Akıllı Tahta</div>
                  </div>
                </div>
                <div className="space-y-2">
                  {[
                    { icon: <TouchIcon />, label: "Etkileşimli Dijital Kitaplar" },
                    { icon: <PuzzleIcon />, label: "Mini Oyunlar & Aktiviteler" },
                    { icon: <FilmIcon />, label: "Multimedya İçerikler" },
                    { icon: <CpuIcon />, label: "AI Destekli Öğrenme" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2.5 px-3 py-2 rounded-lg" style={{ background: "var(--el-bg-alt)", border: "1px solid var(--bar-bg)" }}>
                      <span style={{ color: "var(--icon-color)" }}>{item.icon}</span>
                      <span className="text-[12px]" style={{ color: "var(--text-muted)" }}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Converge arrows to student */}
            <div className="flex items-start justify-center w-full max-w-lg py-3">
              <div className="flex-1 flex flex-col items-center">
                <div className="w-px h-6" style={{ background: "var(--border-subtle)" }} />
              </div>
              <div className="flex-1 flex flex-col items-center">
                <div className="w-px h-6" style={{ background: "var(--border-subtle)" }} />
              </div>
            </div>

            {/* Row 5: Student outcome */}
            <div className="flex items-center justify-center gap-3 rounded-2xl px-8 py-4" style={{ background: "var(--el-bg)", border: "1px solid var(--el-border)" }}>
              <svg className="w-5 h-5" style={{ color: "var(--accent)" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <span className="text-[13px] font-medium" style={{ color: "var(--text-heading)" }}>Kişiselleştirilmiş Öğrenme Deneyimi</span>
            </div>
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {/* FlowHub Card */}
          <div className="landio-card landio-card-hover p-6 lg:p-8 reveal-item">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--accent)", color: "#fff" }}>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <div>
                <h3 className="text-[18px] font-semibold tracking-[-0.01em]" style={{ color: "var(--text-heading)" }}>Flow Hubb</h3>
                <p className="text-[12px]" style={{ color: "var(--text-subtle)" }}>Yönetim & İçerik Platformu</p>
              </div>
            </div>
            <p className="text-[14px] leading-[1.7] mb-5" style={{ color: "var(--text-muted)" }}>
              Öğretmenler ve yöneticiler için merkezi kontrol paneli. AI destekli içerik üretimi, ödevlendirme, sınıf yönetimi ve detaylı performans raporlama tek bir çatı altında.
            </p>
            <div className="space-y-2">
              {[
                "AI ile otomatik soru ve içerik üretimi",
                "Ödev oluşturma ve öğrencilere atama",
                "Gerçek zamanlı performans analitikleri",
                "Müfredata uygun içerik kütüphanesi",
              ].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 shrink-0" style={{ color: "var(--accent)" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M4.5 12.75l6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <span className="text-[13px]" style={{ color: "var(--text-dim)" }}>{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FlowBook Card */}
          <div className="landio-card landio-card-hover p-6 lg:p-8 reveal-item" style={{ transitionDelay: "100ms" }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--accent)", color: "#fff" }}>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <div>
                <h3 className="text-[18px] font-semibold tracking-[-0.01em]" style={{ color: "var(--text-heading)" }}>Flow Book</h3>
                <p className="text-[12px]" style={{ color: "var(--text-subtle)" }}>Etkileşimli Akıllı Tahta</p>
              </div>
            </div>
            <p className="text-[14px] leading-[1.7] mb-5" style={{ color: "var(--text-muted)" }}>
              Öğrenciler için etkileşimli öğrenme deneyimi. Dijital kitaplar, mini oyunlar, multimedya içerikler ve AI asistanı ile Flow Hubb&apos;a entegre çalışan akıllı tahta sistemi.
            </p>
            <div className="space-y-2">
              {[
                "Dokunmatik etkileşimli dijital kitaplar",
                "Müfredata uygun mini oyunlar",
                "Video, ses ve animasyon desteği",
                "Kişiselleştirilmiş AI öğrenme asistanı",
              ].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 shrink-0" style={{ color: "var(--accent)" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M4.5 12.75l6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <span className="text-[13px]" style={{ color: "var(--text-dim)" }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
