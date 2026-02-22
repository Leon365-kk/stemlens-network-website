import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import africaMap from '../../assets/africa_map.jpg';
import { School, Users, Lightbulb, Globe, X } from 'lucide-react';
import sdg1Image from '../sdgs/sdg1.png';
import sdg2Image from '../sdgs/sdg2.png';
import sdg3Image from '../sdgs/sdg3.png';
import sdg4Image from '../sdgs/sdg4.png';
import sdg5Image from '../sdgs/sdg5.png';

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
  const [selectedSDG, setSelectedSDG] = useState<typeof sdgGoals[0] | null>(null);

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
        0.18
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

        {/* SDG Cards - Horizontal Layout */}
        <div ref={sdgRef} className="flex flex-wrap justify-center gap-3 lg:gap-4">
          {sdgGoals.map((sdg) => (
            <button
              key={sdg.id}
              onClick={() => setSelectedSDG(sdg)}
              className="group relative flex flex-col items-center p-3 bg-white border border-[rgba(11,30,59,0.10)] rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-[calc(20%-12px)] min-w-[100px]"
            >
              <img
                src={sdg.image}
                alt={`SDG ${sdg.id}: ${sdg.name}`}
                className="w-12 h-12 lg:w-16 lg:h-16 rounded-lg object-cover mb-2"
              />
              <span className="text-xs font-medium text-[#0B1E3B] text-center leading-tight">
                {sdg.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* SDG Modal */}
      {selectedSDG && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={() => setSelectedSDG(null)}
        >
          <div 
            className="relative bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedSDG(null)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#F6F7FB] hover:bg-[#e8eaf0] transition-colors"
            >
              <X className="w-4 h-4 text-[#6B7A90]" />
            </button>
            
            <div className="flex items-center gap-4 mb-4">
              <img
                src={selectedSDG.image}
                alt={`SDG ${selectedSDG.id}: ${selectedSDG.name}`}
                className="w-16 h-16 lg:w-20 lg:h-20 rounded-xl object-cover"
              />
              <div>
                <span className="text-sm text-[#6B7A90]">SDG {selectedSDG.id}</span>
                <h4 className="text-lg lg:text-xl font-bold text-[#0B1E3B]">
                  {selectedSDG.name}
                </h4>
              </div>
            </div>
            
            <p className="text-sm text-[#6B7A90] mb-4">
              {selectedSDG.description}
            </p>
            
            <div>
              <h5 className="text-sm font-semibold text-[#0B1E3B] mb-2">
                Our Initiatives:
              </h5>
              <ul className="space-y-2">
                {selectedSDG.initiatives.map((initiative, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-sm text-[#6B7A90]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D62828] mt-1.5 flex-shrink-0" />
                    {initiative}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
