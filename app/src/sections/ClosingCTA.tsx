import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ClosingCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const bandRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
          end: '+=60%',
          scrub: 0.6,
          pin: false,
        },
      });

      // Band
      scrollTl.fromTo(
        bandRef.current,
        { y: '8vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0
      );

      // Headline
      scrollTl.fromTo(
        headlineRef.current,
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.1
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0B1E3B]"
    >
      <div
        ref={bandRef}
        className="relative w-full h-[160px] lg:h-[28vh] overflow-hidden"
      >
        <div className="red-overlay w-full h-full">
          <img
            src="/assets/asset_4.jpg"
            alt="Youth workshop"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h2
            ref={headlineRef}
            className="text-lg sm:text-xl lg:text-[clamp(24px,2.8vw,40px)] font-bold text-white text-center px-4"
          >
            Join the Movement for Future Innovators
          </h2>
        </div>
      </div>
    </section>
  );
}
