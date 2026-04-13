import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ANIMATION_TIMING, 
  ANIMATION_VALUES, 
  EASING 
} from '../constants/animations';

gsap.registerPlugin(ScrollTrigger);

export default function AcceleratorIncubatorPathways() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const incubatorRef = useRef<HTMLDivElement>(null);
  const acceleratorRef = useRef<HTMLDivElement>(null);
  const participationRef = useRef<HTMLDivElement>(null);
  const progressionRef = useRef<HTMLDivElement>(null);
  const mentorshipRef = useRef<HTMLDivElement>(null);
  const ecosystemRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      // Entrance animations
      const tl = gsap.timeline({ defaults: { ease: EASING.POWER2_OUT } });

      tl.fromTo(
        headerRef.current,
        { y: ANIMATION_VALUES.Y_NEGATIVE_LARGE, opacity: ANIMATION_VALUES.OPACITY_HIDDEN },
        { y: ANIMATION_VALUES.Y_ZERO, opacity: ANIMATION_VALUES.OPACITY_VISIBLE, duration: ANIMATION_TIMING.DURATION_SLOW },
        ANIMATION_TIMING.DELAY_IMMEDIATE
      )
        .fromTo(
          introRef.current,
          { y: ANIMATION_VALUES.Y_NEGATIVE_MEDIUM, opacity: ANIMATION_VALUES.OPACITY_HIDDEN },
          { y: ANIMATION_VALUES.Y_ZERO, opacity: ANIMATION_VALUES.OPACITY_VISIBLE, duration: ANIMATION_TIMING.DURATION_MEDIUM },
          ANIMATION_TIMING.DELAY_SHORT
        )
        .fromTo(
          incubatorRef.current,
          { y: ANIMATION_VALUES.Y_NEGATIVE_MEDIUM, opacity: ANIMATION_VALUES.OPACITY_HIDDEN },
          { y: ANIMATION_VALUES.Y_ZERO, opacity: ANIMATION_VALUES.OPACITY_VISIBLE, duration: ANIMATION_TIMING.DURATION_MEDIUM },
          ANIMATION_TIMING.DELAY_MEDIUM
        )
        .fromTo(
          acceleratorRef.current,
          { y: ANIMATION_VALUES.Y_NEGATIVE_MEDIUM, opacity: ANIMATION_VALUES.OPACITY_HIDDEN },
          { y: ANIMATION_VALUES.Y_ZERO, opacity: ANIMATION_VALUES.OPACITY_VISIBLE, duration: ANIMATION_TIMING.DURATION_MEDIUM },
          ANIMATION_TIMING.DELAY_LONG
        );

      // Scroll-triggered animations for remaining sections
      const scrollElements = [
        { ref: participationRef, delay: 0 },
        { ref: progressionRef, delay: 0.1 },
        { ref: mentorshipRef, delay: 0.2 },
        { ref: ecosystemRef, delay: 0.3 },
        { ref: visionRef, delay: 0.4 },
        { ref: ctaRef, delay: 0.5 },
      ];

      scrollElements.forEach(({ ref, delay }) => {
        if (ref.current) {
          gsap.fromTo(
            ref.current,
            {
              y: ANIMATION_VALUES.Y_NEGATIVE_MEDIUM,
              opacity: ANIMATION_VALUES.OPACITY_HIDDEN,
            },
            {
              y: ANIMATION_VALUES.Y_ZERO,
              opacity: ANIMATION_VALUES.OPACITY_VISIBLE,
              duration: ANIMATION_TIMING.DURATION_MEDIUM,
              ease: EASING.POWER2_OUT,
              scrollTrigger: {
                trigger: ref.current,
                start: ANIMATION_TIMING.SCROLL_START,
                toggleActions: 'play none none reverse',
              },
              delay,
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0B1E3B] mb-6">
            Accelerator and Incubator Pathways
          </h1>
        </div>

        {/* Introduction */}
        <div ref={introRef} className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              STEMlens Network's Accelerator and Incubator Pathways support innovators in transforming ideas into real-world solutions through structured mentorship, technical guidance, and innovation development.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              These pathways provide a clear progression from early-stage ideas to advanced prototypes and deployment-ready innovations, preparing participants to contribute meaningfully to society and the global innovation ecosystem.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              They form a core part of STEMlens Network's mission to develop innovators, problem solvers, and future technology leaders.
            </p>
          </div>
        </div>

        {/* Incubator Pathway */}
        <div ref={incubatorRef} className="mb-16">
          <h2 className="text-3xl font-bold text-[#0B1E3B] mb-6">Incubator Pathway</h2>
          <p className="text-lg text-gray-700 mb-8">
            The Incubator Pathway supports early-stage innovators as they develop ideas, build prototypes, and refine solutions within a structured and supportive environment.
          </p>

          {/* Tier 1 */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#0B1E3B] mb-4">Tier 1: Core Incubation</h3>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Duration: 4-6 months</span>
            </div>
            <p className="text-gray-700 mb-4">Designed for innovators developing early-stage ideas or initial prototypes.</p>
            <p className="font-semibold text-gray-800 mb-3">Focus areas include:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Idea validation and problem definition</li>
              <li>Prototype design and early development</li>
              <li>Technical mentorship and guidance</li>
              <li>Solution refinement and testing</li>
            </ul>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="font-semibold text-green-800">Outcome:</p>
              <p className="text-green-700">Participants complete Tier 1 with a functional prototype and a validated innovation concept.</p>
            </div>
          </div>

          {/* Tier 2 */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#0B1E3B] mb-4">Tier 2: Extended Incubation</h3>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Duration: 6-12 months</span>
            </div>
            <p className="text-gray-700 mb-4">Designed for promising innovations requiring deeper development and advancement.</p>
            <p className="font-semibold text-gray-800 mb-3">Focus areas include:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Advanced prototype development and improvement</li>
              <li>Ongoing technical mentorship and refinement</li>
              <li>Testing, iteration, and strengthening solutions</li>
              <li>Preparation for real-world application and advancement</li>
            </ul>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="font-semibold text-green-800">Outcome:</p>
              <p className="text-green-700">Participants complete Tier 2 with a refined and advanced innovation project ready for accelerator progression or real-world implementation.</p>
            </div>
          </div>
        </div>

        {/* Accelerator Pathway */}
        <div ref={acceleratorRef} className="mb-16">
          <h2 className="text-3xl font-bold text-[#0B1E3B] mb-6">Accelerator Pathway</h2>
          <div className="flex items-center gap-2 mb-6">
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Duration: 3-4 months</span>
          </div>
          <p className="text-lg text-gray-700 mb-8">
            The Accelerator Pathway supports innovators with developed prototypes who are ready to advance their solutions further. This stage focuses on strengthening innovations, improving functionality, and preparing projects for real-world readiness and future opportunities.
          </p>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-100">
            <p className="font-semibold text-gray-800 mb-3">Focus areas include:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Refinement and strengthening of existing solutions</li>
              <li>Advanced mentorship and technical guidance</li>
              <li>Testing, iteration, and performance improvement</li>
              <li>Innovation showcase and presentation preparation</li>
            </ul>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="font-semibold text-green-800">Outcome:</p>
              <p className="text-green-700">Participants complete the Accelerator Pathway with a deployment-ready innovation project prepared for further development, partnerships, or implementation.</p>
            </div>
          </div>
        </div>

        {/* Who Can Participate */}
        <div ref={participationRef} className="mb-16">
          <h2 className="text-3xl font-bold text-[#0B1E3B] mb-6">Who Can Participate</h2>
          <p className="text-lg text-gray-700 mb-6">
            Participants may enter the Accelerator and Incubator Pathways through:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'STEMlens Innovation Cup',
              'STEMlens competitions and hackathons',
              'STEMlens education and training programs',
              'Independent innovation projects',
              'Partner and institutional referrals',
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="text-gray-800 font-medium">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-lg text-gray-700 mt-6">
            These pathways support students, young innovators, and emerging creators across the STEMlens ecosystem.
          </p>
        </div>

        {/* Pathway Progression */}
        <div ref={progressionRef} className="mb-16">
          <h2 className="text-3xl font-bold text-[#0B1E3B] mb-6">Pathway Progression</h2>
          <p className="text-lg text-gray-700 mb-8">
            Participants typically progress through structured stages:
          </p>
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white">
            <div className="flex flex-wrap justify-center items-center gap-4 text-lg font-semibold">
              <span>Learn</span>
              <span>×</span>
              <span>Incubate</span>
              <span>×</span>
              <span>Build</span>
              <span>×</span>
              <span>Accelerate</span>
              <span>×</span>
              <span>Showcase</span>
              <span>×</span>
              <span>Advance</span>
            </div>
          </div>
          <p className="text-gray-700 mt-4 text-center">
            This structured progression ensures continuous development from early ideas to real-world readiness.
          </p>
        </div>

        {/* Mentorship and Support */}
        <div ref={mentorshipRef} className="mb-16">
          <h2 className="text-3xl font-bold text-[#0B1E3B] mb-6">Mentorship and Support</h2>
          <p className="text-lg text-gray-700 mb-6">
            Participants receive structured support through:
          </p>
          <div className="space-y-4">
            {[
              'Mentorship from educators, innovators, and technical professionals',
              'Guidance in developing and refining innovation projects',
              'Support in building and strengthening prototypes',
              'Opportunities to present and showcase innovations',
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-lg text-gray-700 mt-6">
            This mentorship strengthens both technical capability and innovation thinking.
          </p>
        </div>

        {/* Integrated Innovation Ecosystem */}
        <div ref={ecosystemRef} className="mb-16">
          <h2 className="text-3xl font-bold text-[#0B1E3B] mb-6">Integrated Innovation Ecosystem</h2>
          <p className="text-lg text-gray-700 mb-6">
            The Accelerator and Incubator Pathways are integrated within the broader STEMlens innovation ecosystem, which includes:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'STEM education and technical training',
              'Innovation competitions and challenges',
              'Mentorship and leadership development',
              'Global exposure and collaboration opportunities',
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100">
                <p className="text-gray-800">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-lg text-gray-700 mt-6">
            This ensures continuity from learning to innovation and real-world impact.
          </p>
        </div>

        {/* Long-Term Vision */}
        <div ref={visionRef} className="mb-16">
          <h2 className="text-3xl font-bold text-[#0B1E3B] mb-6">Long-Term Vision</h2>
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-100">
            <p className="text-lg text-gray-700 leading-relaxed">
              STEMlens Network is building a sustainable innovation pipeline that supports innovators from idea development to real-world readiness. Through its Accelerator and Incubator Pathways, STEMlens empowers the next generation of innovators, creators, and leaders prepared to address real-world challenges and contribute to global innovation.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="text-center">
          <h2 className="text-2xl font-bold text-[#0B1E3B] mb-4">Apply or Express Interest</h2>
          <p className="text-lg text-gray-700 mb-8">
            Participants, mentors, and collaborators may express interest in joining future incubation and accelerator cohorts.
          </p>
          <button className="px-8 py-3 bg-[#D62828] text-white font-semibold rounded-lg hover:bg-[#b91d1d] transform hover:scale-105 transition-all">
            Apply or Express Interest
          </button>
        </div>
      </div>
    </section>
  );
}
