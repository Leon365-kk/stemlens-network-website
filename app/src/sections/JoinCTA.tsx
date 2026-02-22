import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, School, UserCog, Handshake, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const joinOptions = [
  {
    icon: GraduationCap,
    label: 'Join as a Student',
    color: 'bg-[#D62828]',
    hoverColor: 'hover:bg-[#b91d1d]',
  },
  {
    icon: School,
    label: 'Join as a School',
    color: 'bg-[#0B1E3B]',
    hoverColor: 'hover:bg-[#1a3a5c]',
  },
  {
    icon: UserCog,
    label: 'Become a Mentor',
    color: 'bg-[#0B1E3B]',
    hoverColor: 'hover:bg-[#1a3a5c]',
  },
  {
    icon: Handshake,
    label: 'Partner With Us',
    color: 'bg-[#0B1E3B]',
    hoverColor: 'hover:bg-[#1a3a5c]',
  },
];

export default function JoinCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const optionsRef = useRef<(HTMLDivElement | null)[]>([]);

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

      // Card
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

      // CTA cards
      optionsRef.current.forEach((option, i) => {
        if (option) {
          scrollTl.fromTo(
            option,
            { y: 30, opacity: 0, scale: 0.96 },
            { y: 0, opacity: 1, scale: 1, ease: 'none' },
            0.1 + i * 0.03
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#F6F7FB] py-4 lg:py-6"
    >
      <div
        ref={cardRef}
        className="relative w-[92vw] mx-auto bg-white rounded-[18px] shadow-[0_18px_45px_rgba(11,30,59,0.10)] border border-[rgba(11,30,59,0.10)] p-5 sm:p-6 lg:p-8 flex flex-col justify-center"
      >
        <h2
          ref={titleRef}
          className="text-lg sm:text-xl lg:text-[clamp(24px,2.8vw,40px)] font-bold text-[#0B1E3B] text-center mb-5 lg:mb-6"
        >
          Join the Movement for Future Innovators
        </h2>

        {/* CTA cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {joinOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <div
                key={option.label}
                ref={(el) => { optionsRef.current[index] = el; }}
                className={`${option.color} ${option.hoverColor} text-white rounded-xl p-4 lg:p-5 cursor-pointer transition-all duration-300 hover:-translate-y-1 group`}
              >
                <div className="flex items-start justify-between mb-3">
                  <Icon className="w-6 h-6 lg:w-8 lg:h-8" />
                  <ArrowRight className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-sm font-semibold leading-tight">
                  {option.label}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
