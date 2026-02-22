import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Bot,
  Code2,
  Brain,
  Plane,
  Box,
  Cpu,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const programs = [
  { icon: Bot, label: 'Robotics & Automation' },
  { icon: Code2, label: 'Coding & Software' },
  { icon: Brain, label: 'AI & Machine Learning' },
  { icon: Plane, label: 'Drone Technology' },
  { icon: Box, label: '3D Design & Engineering' },
  { icon: Cpu, label: 'IoT & Smart Systems' },
];

export default function Programs() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
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
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.05
      );

      // Program items
      itemsRef.current.forEach((item, i) => {
        if (item) {
          scrollTl.fromTo(
            item,
            { y: 24, opacity: 0 },
            { y: 0, opacity: 1, ease: 'none' },
            0.1 + i * 0.04
          );
        }
      });

      // CTA button
      scrollTl.fromTo(
        ctaRef.current,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.2
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="programs"
      ref={sectionRef}
      className="relative w-full bg-[#F6F7FB] py-4 lg:py-6"
    >
      <div
        ref={cardRef}
        className="relative w-[92vw] mx-auto bg-white rounded-[18px] shadow-[0_18px_45px_rgba(11,30,59,0.10)] border border-[rgba(11,30,59,0.10)] p-5 sm:p-6 lg:p-8"
      >
        <h2
          ref={titleRef}
          className="text-lg sm:text-xl lg:text-[clamp(24px,2.8vw,40px)] font-bold text-[#0B1E3B] text-center mb-4 lg:mb-6"
        >
          Our Core STEM Programs
        </h2>

        <div className="border-t border-[rgba(11,30,59,0.12)] mb-4 lg:mb-6"></div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 mb-4 lg:mb-6">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={program.label}
                ref={(el) => { itemsRef.current[index] = el; }}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-[#F6F7FB] flex items-center justify-center mb-2 group-hover:bg-[#0B1E3B] transition-colors duration-300">
                  <Icon className="w-6 h-6 lg:w-7 lg:h-7 text-[#0B1E3B] group-hover:text-white transition-colors duration-300 animate-float" />
                </div>
                <span className="text-xs font-medium text-[#0B1E3B] leading-tight">
                  {program.label}
                </span>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <button
            ref={ctaRef}
            className="px-5 py-2.5 bg-[#D62828] text-white text-sm font-semibold rounded-lg hover:bg-[#b91d1d] transition-all hover:-translate-y-1"
          >
            View All Programs
          </button>
        </div>
      </div>
    </section>
  );
}
