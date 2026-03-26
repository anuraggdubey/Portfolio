import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import AboutPreview from '@/components/previews/AboutPreview';
import SkillsPreview from '@/components/previews/SkillsPreview';
import ProjectsPreview from '@/components/previews/ProjectsPreview';
import ContactPreview from '@/components/previews/ContactPreview';
import Footer from '@/components/sections/Footer';
import LoadingScreen from '@/components/LoadingScreen';
import ScrollProgress from '@/components/ScrollProgress';

const Index = () => {
  const hasLoaded = sessionStorage.getItem('portfolio-loaded');
  const [loaded, setLoaded] = useState(!!hasLoaded);

  const handleLoadComplete = () => {
    sessionStorage.setItem('portfolio-loaded', 'true');
    setLoaded(true);
  };

  useEffect(() => {
    if (!loaded) return;

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
  }, [loaded]);

  return (
    <>
      {!loaded && <LoadingScreen onComplete={handleLoadComplete} />}
      {loaded && (
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
      )}
    </>
  );
};

export default Index;
