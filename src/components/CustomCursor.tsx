import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const isMobile = window.matchMedia('(pointer: coarse)').matches;
    if (isMobile) return;

    const cursor = cursorRef.current;
    const dot = cursorDotRef.current;
    if (!cursor || !dot) return;

    const onMouseMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      dot.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
    };

    const onMouseEnterLink = () => {
      cursor.classList.add('scale-150');
      cursor.style.borderColor = 'hsl(195 100% 55%)';
      cursor.style.backgroundColor = 'hsl(195 100% 55% / 0.1)';
    };

    const onMouseLeaveLink = () => {
      cursor.classList.remove('scale-150');
      cursor.style.borderColor = '';
      cursor.style.backgroundColor = '';
    };

    const animate = () => {
      cursorPos.current.x += (pos.current.x - cursorPos.current.x) * 0.12;
      cursorPos.current.y += (pos.current.y - cursorPos.current.y) * 0.12;
      cursor.style.transform = `translate(${cursorPos.current.x - 20}px, ${cursorPos.current.y - 20}px)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    window.addEventListener('mousemove', onMouseMove);

    const links = document.querySelectorAll('a, button, [data-cursor="pointer"]');
    links.forEach(link => {
      link.addEventListener('mouseenter', onMouseEnterLink);
      link.addEventListener('mouseleave', onMouseLeaveLink);
    });

    const observer = new MutationObserver(() => {
      const newLinks = document.querySelectorAll('a, button, [data-cursor="pointer"]');
      newLinks.forEach(link => {
        link.addEventListener('mouseenter', onMouseEnterLink);
        link.addEventListener('mouseleave', onMouseLeaveLink);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-primary/50 pointer-events-none z-[9999] transition-all duration-200 hidden md:block"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary pointer-events-none z-[9999] hidden md:block"
        style={{ willChange: 'transform' }}
      />
    </>
  );
};

export default CustomCursor;
