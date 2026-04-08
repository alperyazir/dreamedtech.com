"use client";

import { useRef, useCallback } from "react";
import { LanguageProvider } from "@/hooks/useLanguage";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ecosystem from "@/components/Ecosystem";
import FlowBook from "@/components/FlowBook";
import FlowLearn from "@/components/FlowLearn";
import FlowStorage from "@/components/FlowStorage";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToNext = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const sections = container.querySelectorAll<HTMLElement>("section[id]");
    const scrollTop = container.scrollTop;

    for (const section of sections) {
      if (section.offsetTop > scrollTop + 10) {
        section.scrollIntoView({ behavior: "smooth" });
        break;
      }
    }
  }, []);

  return (
    <LanguageProvider>
      <div className="noise-overlay" />
      <Navbar />
      <div ref={containerRef} className="snap-container">
        <section id="hero">
          <Hero onScrollNext={scrollToNext} />
        </section>
        <section id="ekosistem">
          <Ecosystem />
        </section>
        <section id="flow-book">
          <FlowBook />
        </section>
        <section id="flow-learn">
          <FlowLearn />
        </section>
        <section id="flow-storage">
          <FlowStorage />
        </section>
        <section id="nasil-calisir">
          <HowItWorks />
        </section>
<section id="iletisim">
          <CTA />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </div>
    </LanguageProvider>
  );
}
