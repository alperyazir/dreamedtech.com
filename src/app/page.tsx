"use client";

import { useRef, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Benefits from "@/components/Features";

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
    <>
      <Navbar />
      <div ref={containerRef} className="snap-container">
        <section id="hero">
          <Hero onScrollNext={scrollToNext} />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="benefits">
          <Benefits />
        </section>
        <section id="hizmetler">
          <Services />
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
    </>
  );
}
