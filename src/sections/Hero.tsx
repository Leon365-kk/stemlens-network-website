import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardARef = useRef<HTMLDivElement>(null);
  const cardBRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation (auto-play on load)
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.fromTo(
        cardARef.current,
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6 },
        0
      )
        .fromTo(
          cardBRef.current,
          { x: 60, opacity: 0, scale: 0.98 },
          { x: 0, opacity: 1, scale: 1, duration: 0.6 },
          0.15
        )
        .fromTo(
          eyebrowRef.current,
          { y: 12, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.3 },
          0.35
        )
        .fromTo(
          headlineRef.current,
          { y: 28, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          0.45
        )
        .fromTo(
          subheadRef.current,
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4 },
          0.65
        )
        .fromTo(
          ctaRef.current,
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4 },
          0.75
        );

      // Scroll-driven exit animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=120%',
          scrub: 0.6,
          pin: false,
        },
      });

      // EXIT (70-100%)
      scrollTl.fromTo(
        cardARef.current,
        { x: 0, opacity: 1 },
        { x: '-18vw', opacity: 0, ease: 'power2.in' },
        0.7
      );
      scrollTl.fromTo(
        cardBRef.current,
        { x: 0, opacity: 1 },
        { x: '18vw', opacity: 0, ease: 'power2.in' },
        0.7
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-[#F6F7FB] dot-pattern overflow-hidden pt-20 lg:pt-0"
    >
      <div className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 py-6 lg:py-0">
        {/* Card A - Text Content */}
        <div
          ref={cardARef}
          className="relative w-full lg:w-[46vw] lg:absolute lg:left-[4vw] lg:top-[10vh] lg:h-[80vh] bg-white rounded-[18px] shadow-[0_18px_45px_rgba(11,30,59,0.10)] border border-[rgba(11,30,59,0.10)] p-5 sm:p-6 lg:p-[5vh_3vw] flex flex-col justify-center z-10"
        >
          <span
            ref={eyebrowRef}
            className="inline-block text-xs sm:text-sm font-semibold tracking-[0.12em] uppercase text-[#6B7A90] mb-3 lg:mb-4"
          >
            YOUTH INNOVATION NETWORK
          </span>
          <h1
            ref={headlineRef}
            className="text-2xl sm:text-3xl lg:text-[clamp(28px,3.5vw,48px)] font-bold text-[#0B1E3B] leading-[1.1] tracking-[-0.02em] mb-3 lg:mb-4"
          >
            A STEM-First Youth Innovation & Leadership Institution
          </h1>
          <p
            ref={subheadRef}
            className="text-sm sm:text-base text-[#6B7A90] leading-relaxed mb-4 lg:mb-6 max-w-xl"
          >
            STEMlens Network is where African youth learn robotics, coding, and
            engineering to become real-world solution builders.
          </p>
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button className="px-5 py-2.5 bg-[#D62828] text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-[#b91d1d] transition-all hover:-translate-y-1">
              Explore Our STEM Programs
            </button>
            <button className="px-5 py-2.5 border-2 border-[#0B1E3B] text-[#0B1E3B] text-sm sm:text-base font-semibold rounded-lg hover:bg-[#0B1E3B] hover:text-white transition-all hover:-translate-y-1">
              Join STEMlens
            </button>
          </div>
        </div>

        {/* Card B - Image */}
        <div
          ref={cardBRef}
          className="relative w-full lg:w-[44vw] lg:absolute lg:left-[52vw] lg:top-[10vh] lg:h-[80vh] mt-4 lg:mt-0 rounded-[18px] overflow-hidden shadow-[0_18px_45px_rgba(11,30,59,0.10)]"
        >
          <div className="red-overlay w-full h-full">
            <img
              src="/assets/asset_1.jpg"
              alt="Students working on robotics"
              className="w-full h-full object-cover min-h-[280px] lg:min-h-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
