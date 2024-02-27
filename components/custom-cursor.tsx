'use client';

import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!spotlightRef.current) return;
      const { pageX, pageY } = ev;
      spotlightRef.current.style.setProperty('--x', `${pageX}px`);
      spotlightRef.current.style.setProperty('--y', `${pageY}px`);
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <>
      <div
        ref={spotlightRef}
        className="pointer-events-none inset-0 z-30 hidden bg-[radial-gradient(600px_at_var(--x)_var(--y),rgba(29,78,216,0.15),transparent_80%)] transition duration-300 lg:absolute lg:block"
      ></div>
      <div className="pointer-events-none absolute inset-0 z-30 bg-[radial-gradient(600px_at_0px_0px,rgba(29,78,216,0.15),transparent_80%)] transition duration-300 lg:hidden"></div>
    </>
  );
};

export default CustomCursor;
