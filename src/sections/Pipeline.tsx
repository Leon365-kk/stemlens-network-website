import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import worldMap from '../../assets/world_map.jpg';
import { BookOpen, Trophy, Users, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const pipelineSteps = [
  { icon: BookOpen, label: 'STEM Programs', color: 'bg-[#0B1E3B]' },
  { icon: Trophy, label: 'Innovation Challenge', color: 'bg-[#D62828]' },
  { icon: Users, label: 'Leadership & Mentorship', color: 'bg-[#0B1E3B]' },
  { icon: Globe, label: 'Global Exposure', color: 'bg-[#0B1E3B]' },
];

export default function Pipeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const sublineRef = useRef<HTMLParagraphElement>(null);
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

      // Main card
      scrollTl.fromTo(
        cardRef.current,
        { y: '8vh', opacity: 0, scale: 0.98 },
        { y: 0, opacity: 1, scale: 1, ease: 'none' },
        0
      );

      // Title
      scrollTl.fromTo(
        titleRef.current,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.05
      );

      // Arrow cards
      stepsRef.current.forEach((step, i) => {
        if (step) {
          scrollTl.fromTo(
            step,
            { x: '-10vw', opacity: 0 },
            { x: 0, opacity: 1, ease: 'none' },
            0.1 + i * 0.03
          );
        }
      });

      // Subline + CTA
      scrollTl.fromTo(
        sublineRef.current,
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.18
      );
      scrollTl.fromTo(
        ctaRef.current,
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.22
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#F6F7FB] py-4 lg:py-6"
    >
      {/* World map watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.06]">
        <img
          src={worldMap}
          alt=""
          className="w-[70%] max-w-3xl object-contain"
        />
      </div>

      <div
        ref={cardRef}
        className="relative w-[92vw] mx-auto bg-white rounded-[18px] shadow-[0_18px_45px_rgba(11,30,59,0.10)] border border-[rgba(11,30,59,0.10)] p-5 sm:p-6 lg:p-8 flex flex-col justify-center"
      >
        <h2
          ref={titleRef}
          className="text-lg sm:text-xl lg:text-[clamp(24px,2.8vw,40px)] font-bold text-[#0B1E3B] text-center mb-5 lg:mb-6"
        >
          The STEMlens Youth Pipeline
        </h2>

        {/* Arrow cards */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-0 mb-4 lg:mb-5">
          {pipelineSteps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === pipelineSteps.length - 1;
            return (
              <div
                key={step.label}
                ref={(el) => { stepsRef.current[index] = el; }}
                className={`relative ${step.color} text-white px-3 sm:px-4 lg:px-6 py-3 lg:py-4 flex items-center gap-2 ${
                  !isLast
                    ? 'lg:arrow-card lg:pr-6'
                    : 'rounded-r-lg'
                } ${index === 0 ? 'rounded-l-lg' : ''} min-w-[160px] lg:min-w-0`}
              >
                <Icon className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold whitespace-nowrap">
                  {step.label}
                </span>
                {/* Arrow for mobile */}
                {!isLast && (
                  <div className="lg:hidden absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-current opacity-50"></div>
                )}
              </div>
            );
          })}
        </div>

        <p
          ref={sublineRef}
          className="text-sm text-[#6B7A90] text-center mb-3"
        >
          Empowering youth for a sustainable future.
        </p>

        <div className="flex justify-center">
          <button
            ref={ctaRef}
            className="px-5 py-2.5 bg-[#D62828] text-white text-sm font-semibold rounded-lg hover:bg-[#b91d1d] transition-all hover:-translate-y-1"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
