import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import AboutPreview from '@/components/previews/AboutPreview';
import SkillsPreview from '@/components/previews/SkillsPreview';
import ProjectsPreview from '@/components/previews/ProjectsPreview';
import ContactPreview from '@/components/previews/ContactPreview';
import Footer from '@/components/sections/Footer';
import ScrollProgress from '@/components/ScrollProgress';

const Index = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    let rafId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <AboutPreview />
        <SkillsPreview />
        <ProjectsPreview />
        <ContactPreview />
      </main>
      <Footer />
    </>
  );
};

export default Index;
