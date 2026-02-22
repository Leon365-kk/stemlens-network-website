import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Solutions() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardARef = useRef<HTMLDivElement>(null);
  const cardBRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: '+=100%',
          scrub: 0.6,
          pin: false,
        },
      });

      // Card A (image)
      scrollTl.fromTo(
        cardARef.current,
        { x: '-50vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      );

      // Card B (text)
      scrollTl.fromTo(
        cardBRef.current,
        { x: '50vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      );

      // Headline
      scrollTl.fromTo(
        headlineRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.08
      );

      // Body + CTA
      scrollTl.fromTo(
        bodyRef.current,
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.15
      );
      scrollTl.fromTo(
        ctaRef.current,
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.2
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#F6F7FB] py-4 lg:py-6"
    >
      <div className="relative w-full px-4 sm:px-6 lg:px-12 min-h-[auto] lg:min-h-[80vh] flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0">
        {/* Card A - Image */}
        <div
          ref={cardARef}
          className="relative w-full lg:w-[56vw] lg:absolute lg:left-[4vw] lg:top-[8vh] lg:h-[76vh] rounded-[18px] overflow-hidden shadow-[0_18px_45px_rgba(11,30,59,0.10)] order-2 lg:order-1"
        >
          <div className="red-overlay w-full h-full">
            <img
              src="/assets/asset_2.jpg"
              alt="Students collaborating on robotics project"
              className="w-full h-full object-cover min-h-[260px] lg:min-h-0"
            />
          </div>
        </div>

        {/* Card B - Text Content */}
        <div
          ref={cardBRef}
          className="relative w-full lg:w-[34vw] lg:absolute lg:left-[62vw] lg:top-[8vh] lg:h-[76vh] bg-white rounded-[18px] shadow-[0_18px_45px_rgba(11,30,59,0.10)] border border-[rgba(11,30,59,0.10)] p-5 sm:p-6 lg:p-8 flex flex-col justify-center order-1 lg:order-2"
        >
          <h2
            ref={headlineRef}
            className="text-xl sm:text-2xl lg:text-[clamp(22px,2.5vw,36px)] font-bold text-[#0B1E3B] leading-[1.15] tracking-[-0.02em] mb-3 lg:mb-4"
          >
            STEM to Real-World Solutions
          </h2>
          <p
            ref={bodyRef}
            className="text-sm sm:text-base text-[#6B7A90] leading-relaxed mb-4 lg:mb-5"
          >
            Turning ideas into impact in climate, food systems, and communities.
          </p>
          <button
            ref={ctaRef}
            className="self-start px-5 py-2.5 bg-[#D62828] text-white text-sm font-semibold rounded-lg hover:bg-[#b91d1d] transition-all hover:-translate-y-1"
          >
            See Youth Innovation
          </button>
        </div>
      </div>
    </section>
  );
}
