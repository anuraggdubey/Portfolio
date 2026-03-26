import { useEffect, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Lenis from 'lenis';
import Navbar from './Navbar';
import Footer from './sections/Footer';
import ScrollProgress from './ScrollProgress';

const PageLayout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Lenis smooth scroll
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
      <main className="pt-4">
        {/* Back button */}
        <div className="section-padding !py-0 !pt-20 sm:!pt-24">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3.5 py-2 text-xs font-medium text-muted-foreground backdrop-blur transition-colors hover:border-accent/30 hover:text-foreground sm:px-4 sm:text-sm"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to home
          </button>
        </div>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default PageLayout;
