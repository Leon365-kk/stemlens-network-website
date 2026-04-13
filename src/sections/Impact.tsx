import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import africaMap from '../../assets/africa_map.jpg';
import { School, Users, Lightbulb, Globe } from 'lucide-react';
import sdg1Image from '../sdgs/sdg1.png';
import sdg2Image from '../sdgs/sdg2.png';
import sdg3Image from '../sdgs/sdg3.png';
import sdg4Image from '../sdgs/sdg4.png';
import sdg5Image from '../sdgs/sdg5.png';
import goal6 from '../sdgs/E-WEB-Goal-06.png';
import goal7 from '../sdgs/E-WEB-Goal-07.png';
import goal8 from '../sdgs/E-WEB-Goal-08.png';
import goal9 from '../sdgs/E-WEB-Goal-09.png';
import goal10 from '../sdgs/E-WEB-Goal-10.png';
import goal11 from '../sdgs/E-WEB-Goal-11.png';
import goal12 from '../sdgs/E-WEB-Goal-12.png';
import goal13 from '../sdgs/E-WEB-Goal-13.png';
import goal14 from '../sdgs/E-WEB-Goal-14.png';
import goal15 from '../sdgs/E-WEB-Goal-15.png';
import goal16 from '../sdgs/E-WEB-Goal-16.png';
import goal17 from '../sdgs/E-WEB-Goal-17.png';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: School, value: 150, suffix: '+', label: 'Schools Engaged' },
  { icon: Users, value: 12000, suffix: '+', label: 'Youth Trained' },
  { icon: Lightbulb, value: 300, suffix: '+', label: 'Innovation Projects' },
  { icon: Globe, value: 15, suffix: '', label: 'Countries Reached' },
];

const sdgGoals = [
  {
    id: 1,
    name: 'No Poverty',
    image: sdg1Image,
    description: 'End poverty in all its forms everywhere through education and economic empowerment.',
    initiatives: [
      'Scholarship programs for underprivileged youth',
      'Economic empowerment workshops',
    ],
  },
  {
    id: 2,
    name: 'Zero Hunger',
    image: sdg2Image,
    description: 'End hunger, achieve food security and improved nutrition through agricultural innovation.',
    initiatives: [
      'Smart agriculture technology training',
      'Community farming initiatives',
    ],
  },
  {
    id: 3,
    name: 'Good Health & Well-being',
    image: sdg3Image,
    description: 'Ensure healthy lives and promote well-being for all at all ages.',
    initiatives: [
      'Health technology innovation labs',
      'Medical device accessibility programs',
    ],
  },
  {
    id: 4,
    name: 'Quality Education',
    image: sdg4Image,
    description: 'Ensure inclusive and equitable quality education and promote lifelong learning.',
    initiatives: [
      'STEM curriculum development',
      'Digital learning platforms',
    ],
  },
  {
    id: 5,
    name: 'Gender Equality',
    image: sdg5Image,
    description: 'Achieve gender equality and empower all women and girls in STEM fields.',
    initiatives: [
      'Girls in STEM mentorship programs',
      'Women leadership development',
    ],
  },
  {
    id: 6,
    name: 'Clean Water and Sanitation',
    image: goal6,
    description: 'Ensure availability and sustainable management of water and sanitation for all.',
    initiatives: [
      'Water purification technology development',
      'Sanitation infrastructure projects',
    ],
  },
  {
    id: 7,
    name: 'Affordable and Clean Energy',
    image: goal7,
    description: 'Ensure access to affordable, reliable, sustainable and modern energy for all.',
    initiatives: [
      'Renewable energy innovation labs',
      'Solar technology training programs',
    ],
  },
  {
    id: 8,
    name: 'Decent Work and Economic Growth',
    image: goal8,
    description: 'Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all.',
    initiatives: [
      'Entrepreneurship incubation programs',
      'Job skills training initiatives',
    ],
  },
  {
    id: 9,
    name: 'Industry, Innovation and Infrastructure',
    image: goal9,
    description: 'Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation.',
    initiatives: [
      'Infrastructure development projects',
      'Industrial innovation challenges',
    ],
  },
  {
    id: 10,
    name: 'Reduced Inequalities',
    image: goal10,
    description: 'Reduce inequality within and among countries.',
    initiatives: [
      'Inclusive education programs',
      'Digital divide bridging initiatives',
    ],
  },
  {
    id: 11,
    name: 'Sustainable Cities and Communities',
    image: goal11,
    description: 'Make cities and human settlements inclusive, safe, resilient and sustainable.',
    initiatives: [
      'Smart city technology development',
      'Community sustainability projects',
    ],
  },
  {
    id: 12,
    name: 'Responsible Consumption and Production',
    image: goal12,
    description: 'Ensure sustainable consumption and production patterns.',
    initiatives: [
      'Circular economy education',
      'Sustainable technology development',
    ],
  },
  {
    id: 13,
    name: 'Climate Action',
    image: goal13,
    description: 'Take urgent action to combat climate change and its impacts.',
    initiatives: [
      'Climate monitoring technology',
      'Green innovation programs',
    ],
  },
  {
    id: 14,
    name: 'Life Below Water',
    image: goal14,
    description: 'Conserve and sustainably use the oceans, seas and marine resources for sustainable development.',
    initiatives: [
      'Marine conservation technology',
      'Ocean health monitoring systems',
    ],
  },
  {
    id: 15,
    name: 'Life on Land',
    image: goal15,
    description: 'Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss.',
    initiatives: [
      'Wildlife monitoring technology',
      'Reforestation and conservation projects',
    ],
  },
  {
    id: 16,
    name: 'Peace, Justice and Strong Institutions',
    image: goal16,
    description: 'Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels.',
    initiatives: [
      'Civic technology development',
      'Digital rights education programs',
    ],
  },
  {
    id: 17,
    name: 'Partnerships for the Goals',
    image: goal17,
    description: 'Strengthen the means of implementation and revitalize the global partnership for sustainable development.',
    initiatives: [
      'International collaboration platforms',
      'Global partnership development',
    ],
  },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const obj = { val: 0 };
    gsap.to(obj, {
      val: value,
      duration: 2,
      ease: 'power2.out',
      onUpdate: () => setDisplayValue(Math.floor(obj.val)),
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  }, [value]);

  return (
    <span ref={ref}>
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Impact() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);
  const sdgRef = useRef<HTMLDivElement>(null);
  const [flippedCards, setFlippedCards] = useState<number | null>(null);

  const toggleCardFlip = (sdgId: number) => {
    setFlippedCards(prev => prev === sdgId ? null : sdgId);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current || !cardRef.current || !titleRef.current || !sdgRef.current) {
        return;
      }

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
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.05
      );

      // Stats
      statsRef.current.forEach((stat, i) => {
        if (stat) {
          scrollTl.fromTo(
            stat,
            { y: 28, opacity: 0 },
            { y: 0, opacity: 1, ease: 'none' },
            0.1 + i * 0.04
          );
        }
      });

      // SDG strip
      scrollTl.fromTo(
        sdgRef.current,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.25
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="impact"
      ref={sectionRef}
      className="relative w-full bg-[#F6F7FB] py-6 lg:py-8"
    >
      <div
        ref={cardRef}
        className="relative w-[92vw] mx-auto bg-white rounded-[18px] shadow-[0_18px_45px_rgba(11,30,59,0.10)] border border-[rgba(11,30,59,0.10)] p-5 sm:p-6 lg:p-8"
      >
        {/* Africa map silhouette */}
        <div className="absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 opacity-[0.12] pointer-events-none">
          <img
            src={africaMap}
            alt=""
            className="w-24 h-24 lg:w-36 lg:h-36 object-contain"
          />
        </div>

        <h2
          ref={titleRef}
          className="text-xl sm:text-2xl lg:text-[clamp(24px,2.8vw,40px)] font-bold text-[#0B1E3B] text-center mb-6 lg:mb-8"
        >
          Our Impact So Far
        </h2>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                ref={(el) => { statsRef.current[index] = el; }}
                className="flex flex-col items-center text-center"
              >
                <Icon className="w-7 h-7 lg:w-9 lg:h-9 text-[#0B1E3B] mb-2" />
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0B1E3B] mb-1">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-xs text-[#6B7A90]">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* SDG Section Header */}
        <div className="text-center mb-4">
          <h3 className="text-base lg:text-lg font-semibold text-[#0B1E3B]">
            Supporting the UN Sustainable Development Goals
          </h3>
          <p className="text-xs text-[#6B7A90] mt-1">
            Click on a goal to learn more about our initiatives
          </p>
        </div>

        {/* SDG Cards - 3D Flip Layout in Two Rows */}
        <div ref={sdgRef} className="space-y-4">
          {/* First Row - 9 cards */}
          <div className="flex justify-center gap-3 lg:gap-4">
            {sdgGoals.slice(0, 9).map((sdg) => (
              <div
                key={sdg.id}
                className="relative w-[calc(11.111%-13px)] min-w-[80px] h-32 perspective-1000"
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
                    flippedCards === sdg.id ? 'rotate-y-180' : ''
                  }`}
                  onClick={() => toggleCardFlip(sdg.id)}
                >
                  {/* Front of card */}
                  <div className="absolute inset-0 backface-hidden bg-white border border-[rgba(11,30,59,0.10)] rounded-xl p-2 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                    <img
                      src={sdg.image}
                      alt={`SDG ${sdg.id}: ${sdg.name}`}
                      className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg object-cover mb-1"
                    />
                    <span className="text-xs font-medium text-[#0B1E3B] text-center leading-tight">
                      {sdg.name}
                    </span>
                  </div>
                  
                  {/* Back of card */}
                  <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-[#0B1E3B] to-[#1a3a6a] border border-[rgba(11,30,59,0.20)] rounded-xl p-2 flex flex-col justify-center rotate-y-180 shadow-xl">
                    <div className="text-white text-center">
                      <div className="text-xs font-bold mb-1">SDG {sdg.id}</div>
                      <div className="text-xs font-semibold mb-1 line-clamp-2">
                        {sdg.name}
                      </div>
                      <div className="text-xs opacity-90 space-y-1">
                        {sdg.initiatives.slice(0, 2).map((initiative, idx) => (
                          <div key={idx} className="flex items-start gap-1">
                            <span className="w-1 h-1 rounded-full bg-white/80 mt-1 flex-shrink-0" />
                            <span className="line-clamp-2">{initiative}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - 8 cards */}
          <div className="flex justify-center gap-3 lg:gap-4">
            {sdgGoals.slice(9, 17).map((sdg) => (
              <div
                key={sdg.id}
                className="relative w-[calc(12.5%-14px)] min-w-[85px] h-32 perspective-1000"
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
                    flippedCards === sdg.id ? 'rotate-y-180' : ''
                  }`}
                  onClick={() => toggleCardFlip(sdg.id)}
                >
                  {/* Front of card */}
                  <div className="absolute inset-0 backface-hidden bg-white border border-[rgba(11,30,59,0.10)] rounded-xl p-2 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                    <img
                      src={sdg.image}
                      alt={`SDG ${sdg.id}: ${sdg.name}`}
                      className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg object-cover mb-1"
                    />
                    <span className="text-xs font-medium text-[#0B1E3B] text-center leading-tight">
                      {sdg.name}
                    </span>
                  </div>
                  
                  {/* Back of card */}
                  <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-[#0B1E3B] to-[#1a3a6a] border border-[rgba(11,30,59,0.20)] rounded-xl p-2 flex flex-col justify-center rotate-y-180 shadow-xl">
                    <div className="text-white text-center">
                      <div className="text-xs font-bold mb-1">SDG {sdg.id}</div>
                      <div className="text-xs font-semibold mb-1 line-clamp-2">
                        {sdg.name}
                      </div>
                      <div className="text-xs opacity-90 space-y-1">
                        {sdg.initiatives.slice(0, 2).map((initiative, idx) => (
                          <div key={idx} className="flex items-start gap-1">
                            <span className="w-1 h-1 rounded-full bg-white/80 mt-1 flex-shrink-0" />
                            <span className="line-clamp-2">{initiative}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      </section>
  );
}
