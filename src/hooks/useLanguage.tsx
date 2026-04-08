"use client";

import { createContext, useContext, useCallback, useState, type ReactNode } from "react";

type Lang = "tr" | "en";

const translations = {
  // ── Navbar ──
  "nav.demo": { tr: "Demo Talep Et", en: "Request Demo" },

  // ── Hero ──
  "hero.badge": { tr: "Flow Hubb Ekosistemi", en: "Flow Hubb Ecosystem" },
  "hero.title1": { tr: "Eğitimi Yeniden", en: "Reimagine" },
  "hero.title2": { tr: "Tasarlıyoruz", en: "Education" },
  "hero.subtitle": {
    tr: "Flow Book, Flow Learn ve Flow Storage ile eğitim içeriklerinizi yapay zeka destekli interaktif deneyimlere dönüştürün.",
    en: "Transform your educational content into AI-powered interactive experiences with Flow Book, Flow Learn and Flow Storage.",
  },
  "hero.cta": { tr: "Platformu Keşfet", en: "Explore Platform" },

  // ── Ecosystem ──
  "eco.badge": { tr: "Ekosistem", en: "Ecosystem" },
  "eco.title1": { tr: "Tek Platform,", en: "One Platform," },
  "eco.title2": { tr: "Üç Güç", en: "Three Powers" },
  "eco.subtitle": {
    tr: "Flow Hubb ekosistemi, eğitim sürecinin her aşamasını birleştiren üç güçlü üründen oluşur.",
    en: "The Flow Hubb ecosystem consists of three powerful products that unify every stage of the education process.",
  },
  "eco.hubb": { tr: "Flow Hubb", en: "Flow Hubb" },
  "eco.hubb.tag": { tr: "Merkezi Eğitim Ekosistemi", en: "Central Education Ecosystem" },

  // Flow Book
  "eco.book.tag": { tr: "Akıllı Tahta Uygulaması", en: "Smart Board Application" },
  "eco.book.desc": {
    tr: "Etkileşimli dijital kitapları akıllı tahtada sunan uygulama. Öğrenciler sürükle-bırak, animasyonlar ve mini oyunlarla sınıf içinde aktif olarak öğrenir.",
    en: "Application that presents interactive digital books on smart boards. Students actively learn in class through drag & drop, animations and mini games.",
  },
  "eco.book.f1": { tr: "Akıllı tahtada etkileşimli ders sunumu", en: "Interactive lessons on smart board" },
  "eco.book.f2": { tr: "Drag & drop aktiviteler ve mini oyunlar", en: "Drag & drop activities and mini games" },
  "eco.book.f3": { tr: "Multimedya içerikler (video, ses, animasyon)", en: "Multimedia content (video, audio, animation)" },
  "eco.book.f4": { tr: "AI destekli soru ve aktivite üretimi", en: "AI-powered question and activity generation" },

  // Flow Learn
  "eco.learn.tag": { tr: "Ödev & Öğrenme Platformu", en: "Assignment & Learning Platform" },
  "eco.learn.desc": {
    tr: "Materyalleri ödev olarak atayın, AI ile skill bazlı aktiviteler üretin. Listening, Reading, Speaking, Writing, Grammar ve Vocabulary odaklı öğrenme.",
    en: "Assign materials as homework, generate skill-based activities with AI. Learning focused on Listening, Reading, Speaking, Writing, Grammar and Vocabulary.",
  },
  "eco.learn.f1": { tr: "Materyal bazlı ödev atama (assignment)", en: "Material-based assignment" },
  "eco.learn.f2": { tr: "AI ile skill bazlı aktivite üretimi", en: "AI-powered skill-based activity generation" },
  "eco.learn.f3": { tr: "Sınıf yönetimi ve öğrenci takibi", en: "Class management and student tracking" },
  "eco.learn.f4": { tr: "Assignment sonuçlarına göre raporlar", en: "Reports based on assignment results" },

  // Flow Storage
  "eco.storage.tag": { tr: "İçerik Depolama & Analiz", en: "Content Storage & Analysis" },
  "eco.storage.desc": {
    tr: "Video, ses, PDF ve dokümanlarınızı saklayın. AI ile içerik analizi yapın ve materyallerinizi organize edin.",
    en: "Store your videos, audio, PDFs and documents. Analyze content with AI and organize your materials.",
  },
  "eco.storage.f1": { tr: "Video, ses, PDF depolama", en: "Video, audio, PDF storage" },
  "eco.storage.f2": { tr: "AI ile içerik analizi ve etiketleme", en: "AI content analysis and tagging" },
  "eco.storage.f3": { tr: "Format dönüştürme ve organizasyon", en: "Format conversion and organization" },
  "eco.storage.f4": { tr: "Rol bazlı erişim yönetimi", en: "Role-based access management" },

  // ── Flow Book Detail ──
  "book.title1": { tr: "Etkileşimli Dijital", en: "Interactive Digital" },
  "book.title2": { tr: "Kitaplar", en: "Books" },
  "book.desc": {
    tr: "Geleneksel ders kitaplarını, öğrencilerin dokunarak, sürükleyerek ve keşfederek öğrendiği canlı dijital deneyimlere dönüştürün. Yapay zeka ile her sayfayı interaktif bir öğrenme alanına çevirin.",
    en: "Transform traditional textbooks into living digital experiences where students learn by touching, dragging and exploring. Turn every page into an interactive learning space with AI.",
  },
  "book.f1": { tr: "Sürükle-bırak etkileşimli aktiviteler", en: "Drag & drop interactive activities" },
  "book.f2": { tr: "Video, ses ve animasyon desteği", en: "Video, audio and animation support" },
  "book.f3": { tr: "AI ile otomatik soru üretimi", en: "Automatic question generation with AI" },
  "book.f4": { tr: "Mini oyunlar ve pekiştirme egzersizleri", en: "Mini games and reinforcement exercises" },
  "book.f5": { tr: "Öğretmen için içerik özelleştirme paneli", en: "Content customization panel for teachers" },
  "book.f6": { tr: "Çoklu dil desteği", en: "Multi-language support" },
  "book.cta": { tr: "Flow Book'u Dene", en: "Try Flow Book" },
  "book.tab.preview": { tr: "Önizleme", en: "Preview" },
  "book.tab.demo": { tr: "Canlı Demo", en: "Live Demo" },
  "book.preview.title": { tr: "Flow Book — Matematik 5. Sınıf", en: "Flow Book — Math Grade 5" },
  "book.preview.chapters": { tr: ["Bölüm 1", "Bölüm 2", "Bölüm 3", "Bölüm 4"], en: ["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4"] },
  "book.preview.interactive": { tr: "Etkileşimli Alan", en: "Interactive Area" },
  "book.demo.title": { tr: "Canlı Demo Alanı", en: "Live Demo Area" },
  "book.demo.desc": { tr: "Flow Book interaktif demo deneyimi burada yer alacak.", en: "Flow Book interactive demo experience will be here." },

  // ── Flow Learn Detail ──
  "learn.title1": { tr: "AI Destekli", en: "AI-Powered" },
  "learn.title2": { tr: "Öğrenme", en: "Learning" },
  "learn.desc": {
    tr: "Flow Learn, her öğrencinin bireysel öğrenme stilini ve hızını analiz ederek kişiselleştirilmiş bir eğitim deneyimi sunar. Öğretmenler gerçek zamanlı verilerle sınıflarını yönetir.",
    en: "Flow Learn offers a personalized education experience by analyzing each student's individual learning style and pace. Teachers manage their classes with real-time data.",
  },
  "learn.panel": { tr: "Flow Learn — Öğrenci Paneli", en: "Flow Learn — Student Panel" },
  "learn.stat.success": { tr: "Başarı", en: "Success" },
  "learn.stat.avg": { tr: "Ortalama", en: "Average" },
  "learn.stat.lessons": { tr: "Ders", en: "Lessons" },
  "learn.cap1.title": { tr: "Kişisel Öğrenme Yolları", en: "Personal Learning Paths" },
  "learn.cap1.desc": { tr: "Her öğrencinin seviyesine göre otomatik içerik uyarlama.", en: "Automatic content adaptation based on each student's level." },
  "learn.cap2.title": { tr: "Gerçek Zamanlı Analitik", en: "Real-time Analytics" },
  "learn.cap2.desc": { tr: "Sınıf ve bireysel performans dashboardları.", en: "Class and individual performance dashboards." },
  "learn.cap3.title": { tr: "Adaptif Zorluk", en: "Adaptive Difficulty" },
  "learn.cap3.desc": { tr: "Başarı oranına göre otomatik zorluk ayarlama.", en: "Automatic difficulty adjustment based on success rate." },
  "learn.cap4.title": { tr: "İlerleme Raporları", en: "Progress Reports" },
  "learn.cap4.desc": { tr: "Detaylı gelişim raporları ve içerik önerileri.", en: "Detailed progress reports and content recommendations." },

  // ── Flow Storage Detail ──
  "storage.title1": { tr: "Merkezi İçerik", en: "Central Content" },
  "storage.title2": { tr: "Yönetimi", en: "Management" },
  "storage.desc": {
    tr: "Tüm eğitim materyallerinizi tek bir yerden yönetin. Kitaplar, videolar, ses dosyaları ve dokümanlar Flow Storage ile organize edilir, etiketlenir ve güvenle saklanır.",
    en: "Manage all your educational materials from one place. Books, videos, audio files and documents are organized, tagged and securely stored with Flow Storage.",
  },
  "storage.f1": { tr: "Tüm içerik formatları: kitap, video, ses, doküman", en: "All content formats: books, video, audio, documents" },
  "storage.f2": { tr: "AI ile otomatik etiketleme ve kategorilendirme", en: "Automatic tagging and categorization with AI" },
  "storage.f3": { tr: "Versiyon kontrolü ve değişiklik geçmişi", en: "Version control and change history" },
  "storage.f4": { tr: "Rol bazlı erişim yönetimi (öğretmen, yönetici, öğrenci)", en: "Role-based access (teacher, admin, student)" },
  "storage.f5": { tr: "Güvenli bulut depolama ve KVKK uyumu", en: "Secure cloud storage and GDPR compliance" },
  "storage.f6": { tr: "Toplu yükleme ve format dönüştürme", en: "Bulk upload and format conversion" },
  "storage.panel": { tr: "Flow Storage — İçerik Yönetimi", en: "Flow Storage — Content Management" },
  "storage.usage": { tr: "Depolama Kullanımı", en: "Storage Usage" },
  "storage.breadcrumb": { tr: ["İçerikler", "Matematik", "5. Sınıf"], en: ["Content", "Math", "Grade 5"] },
  "storage.used": { tr: "Kullanılan", en: "Used" },

  // ── How It Works ──
  "how.badge": { tr: "Süreç", en: "Process" },
  "how.title1": { tr: "Nasıl", en: "How It" },
  "how.title2": { tr: "Çalışır?", en: "Works?" },
  "how.subtitle": {
    tr: "İçerik yüklemeden raporlamaya, beş adımda uçtan uca eğitim deneyimi.",
    en: "End-to-end education experience in five steps, from content upload to reporting.",
  },
  "how.s1.title": { tr: "İçerik Yükleme", en: "Content Upload" },
  "how.s1.sub": { tr: "Flow Storage", en: "Flow Storage" },
  "how.s1.desc": {
    tr: "Ders materyallerinizi — PDF, video, ses dosyaları, dokümanlar — platforma yükleyin. AI otomatik olarak içeriği analiz eder, etiketler ve kategorize eder.",
    en: "Upload your course materials — PDFs, videos, audio files, documents — to the platform. AI automatically analyzes, tags and categorizes content.",
  },
  "how.s1.d1": { tr: "PDF, video, ses, doküman desteği", en: "PDF, video, audio, document support" },
  "how.s1.d2": { tr: "AI ile otomatik etiketleme", en: "Automatic tagging with AI" },
  "how.s1.d3": { tr: "Format dönüştürme ve organizasyon", en: "Format conversion and organization" },

  "how.s2.title": { tr: "AI İşleme", en: "AI Processing" },
  "how.s2.sub": { tr: "Yapay Zeka Motoru", en: "AI Engine" },
  "how.s2.desc": {
    tr: "Yapay zeka yüklenen içerikleri işler, skill bazlı aktiviteler üretir. Listening, Reading, Speaking, Writing, Grammar ve Vocabulary odaklı materyaller oluşturur.",
    en: "AI processes uploaded content and generates skill-based activities. Creates materials focused on Listening, Reading, Speaking, Writing, Grammar and Vocabulary.",
  },
  "how.s2.d1": { tr: "Skill bazlı aktivite üretimi", en: "Skill-based activity generation" },
  "how.s2.d2": { tr: "Etkileşimli içerik dönüşümü", en: "Interactive content transformation" },
  "how.s2.d3": { tr: "Otomatik soru ve test oluşturma", en: "Automatic question and test creation" },

  "how.s3.title": { tr: "Ödev Atama", en: "Assignment" },
  "how.s3.sub": { tr: "Flow Learn", en: "Flow Learn" },
  "how.s3.desc": {
    tr: "Hazırlanan materyalleri sınıflara ve öğrencilere ödev olarak atayın. Öğretmenler sınıf oluşturur, öğrencileri takip eder ve ilerlemeyi izler.",
    en: "Assign prepared materials to classes and students as homework. Teachers create classes, track students and monitor progress.",
  },
  "how.s3.d1": { tr: "Sınıf ve öğrenci yönetimi", en: "Class and student management" },
  "how.s3.d2": { tr: "Materyal bazlı assignment", en: "Material-based assignment" },
  "how.s3.d3": { tr: "Bireysel ve grup ödevleri", en: "Individual and group assignments" },

  "how.s4.title": { tr: "Sınıf İçi Sunum", en: "In-Class Presentation" },
  "how.s4.sub": { tr: "Flow Book", en: "Flow Book" },
  "how.s4.desc": {
    tr: "Akıllı tahtada etkileşimli ders sunumu yapın. Öğrenciler sürükle-bırak, animasyonlar ve mini oyunlarla aktif olarak katılır.",
    en: "Deliver interactive lessons on the smart board. Students actively participate through drag & drop, animations and mini games.",
  },
  "how.s4.d1": { tr: "Akıllı tahta entegrasyonu", en: "Smart board integration" },
  "how.s4.d2": { tr: "Etkileşimli ders sunumu", en: "Interactive lesson delivery" },
  "how.s4.d3": { tr: "Canlı aktiviteler ve oyunlar", en: "Live activities and games" },

  "how.s5.title": { tr: "Raporlama & Analiz", en: "Reporting & Analytics" },
  "how.s5.sub": { tr: "Dashboard", en: "Dashboard" },
  "how.s5.desc": {
    tr: "Assignment sonuçlarına göre detaylı raporlar ve analizler sunulur. Öğrenci bazında güçlü/zayıf yönler, sınıf ortalamaları ve ilerleme grafikleri.",
    en: "Detailed reports and analytics based on assignment results. Individual strengths/weaknesses, class averages and progress charts.",
  },
  "how.s5.d1": { tr: "Öğrenci bazlı performans analizi", en: "Student-based performance analysis" },
  "how.s5.d2": { tr: "Skill bazlı güçlü/zayıf yön tespiti", en: "Skill-based strength/weakness detection" },
  "how.s5.d3": { tr: "Sınıf ortalamaları ve trendler", en: "Class averages and trends" },

  // ── CTA ──
  "cta.title1": { tr: "Eğitimin Geleceğini", en: "Shape the Future" },
  "cta.title2": { tr: "Birlikte Şekillendirin", en: "of Education Together" },
  "cta.subtitle": {
    tr: "Bir demo planlayın, platformu keşfedin ve dijital dönüşüm yolculuğunuza hemen başlayın.",
    en: "Schedule a demo, explore the platform and start your digital transformation journey today.",
  },
  "cta.button": { tr: "Ücretsiz Demo Talep Et", en: "Request Free Demo" },

  // ── Footer ──
  "footer.tagline": {
    tr: "Yapay zeka destekli eğitim platformu. İçerik üretiminden öğrenci takibine, tek ekosistemde.",
    en: "AI-powered education platform. From content creation to student tracking, in one ecosystem.",
  },
  "footer.products": { tr: "Ürünler", en: "Products" },
  "footer.company": { tr: "Şirket", en: "Company" },
  "footer.legal": { tr: "Yasal", en: "Legal" },
  "footer.about": { tr: "Hakkımızda", en: "About" },
  "footer.blog": { tr: "Blog", en: "Blog" },
  "footer.careers": { tr: "Kariyer", en: "Careers" },
  "footer.contact": { tr: "İletişim", en: "Contact" },
  "footer.privacy": { tr: "Gizlilik", en: "Privacy" },
  "footer.terms": { tr: "Kullanım Koşulları", en: "Terms of Use" },
  "footer.rights": { tr: "Tüm hakları saklıdır.", en: "All rights reserved." },
  "footer.cta.label": { tr: "Başlayalım", en: "Get Started" },
  "footer.cta.title1": { tr: "Dijital dönüşüm yolculuğunuza", en: "Start your digital transformation" },
  "footer.cta.title2": { tr: "bugünden başlayın.", en: "journey today." },
} as const;

type TranslationKey = keyof typeof translations;

const LanguageContext = createContext<{
  lang: Lang;
  toggle: () => void;
  t: (key: TranslationKey) => string | string[];
}>({
  lang: "tr",
  toggle: () => {},
  t: () => "",
});

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("tr");

  const toggle = useCallback(() => {
    setLang((prev) => (prev === "tr" ? "en" : "tr"));
  }, []);

  const t = useCallback(
    (key: TranslationKey): string | string[] => {
      const entry = translations[key];
      if (!entry) return key;
      return entry[lang] as string | string[];
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
