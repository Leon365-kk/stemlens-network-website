import { motion } from 'framer-motion';
import {
  BarChart3,
  Users,
  Target,
  TrendingUp,
  Globe,
  Lightbulb,
} from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';

const innovatorDevelopment = [
  'Develop practical technology solutions',
  'Build prototypes in STEMlens labs and Maker Spaces',
  'Participate in innovation challenges and competitions',
  'Present solutions to mentors, experts, and global platforms',
  'Progress into advanced innovation and venture pathways',
];

const innovationPipeline = [
  'STEMlens Innovation Challenge (entry platform)',
  'Innovation Showcases and STEMlens Innovation Cup (flagship competition)',
  'Prototyping Labs, Maker Spaces, and advanced programs',
  'Accelerator and incubation pathways',
];

const institutionalImpact = [
  'Schools, TVET institutions, and universities',
  'Industry, research, and technology partners',
  'Global STEM competitions and innovation platforms',
  'International exchange and collaboration programs',
];

const exploreButtons = [
  'View Impact Dashboard',
  'Explore Innovation Outcomes',
  'Read Student and Innovator Stories',
  'View Global Participation and Achievements',
  'Explore Institutional Partnerships',
];

export default function ImpactOverview() {
  return (
    <section
      id="impact-overview"
      className="relative w-full min-h-screen bg-gradient-to-br from-white via-[#F8FAFC] to-[#F1F5F9] pt-28 pb-16 sm:pb-20 lg:pt-32 lg:pb-24"
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.header
          className="mb-10 lg:mb-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <p className="inline-flex items-center rounded-full border border-[#EB3134]/25 bg-white/80 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-[0.08em] text-[#EB3134] uppercase mb-5">
            Impact
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#0B1E3B] leading-tight mb-4">
            Impact Overview
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#2F2F35] mb-5">
            Measurable Outcomes, Real Innovations, and Institutional Impact
          </h2>
          <p className="max-w-5xl text-base sm:text-lg text-[#4B5563] leading-relaxed mb-4">
            STEMlens Network develops innovators, supports institutions, and contributes to real-world innovation through structured STEM education and innovation pathways.
          </p>
          <p className="max-w-5xl text-base sm:text-lg text-[#4B5563] leading-relaxed mb-4">
            Our programs enable learners to build solutions, participate in global platforms, and progress into advanced innovation and leadership opportunities.
          </p>
          <p className="max-w-5xl text-base sm:text-lg font-semibold text-[#0B1E3B] leading-relaxed">
            Impact at STEMlens is measured through innovation outcomes, global participation, institutional partnerships, and long-term innovation development.
          </p>
        </motion.header>

        <motion.article
          className="bg-white rounded-2xl shadow-xl border border-[#0B1E3B]/15 p-6 sm:p-7 lg:p-8 mb-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="inline-flex w-11 h-11 rounded-full bg-[#0B1E3B]/10 border border-[#0B1E3B]/20 items-center justify-center mb-4">
            <Users className="w-5 h-5 text-[#0B1E3B]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-4">Developing Innovators and Real-World Solutions</h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            STEMlens equips learners with the skills and experience needed to design, prototype, and present real innovations.
          </p>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            Participants:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
            {innovatorDevelopment.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Learners transition from STEM education into real innovation practice.
          </p>
        </motion.article>

        <motion.article
          className="rounded-2xl border border-[#EB3134]/20 bg-white p-6 sm:p-7 lg:p-8 shadow-sm mb-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="inline-flex w-11 h-11 rounded-full bg-[#EB3134]/10 border border-[#EB3134]/20 items-center justify-center mb-4">
            <Target className="w-5 h-5 text-[#B72024]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#2F2F35] mb-4">Supporting the Full Innovation Pipeline</h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            STEMlens provides a structured innovation pathway that supports innovators from early exploration to advanced development.
          </p>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            Participants progress through:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
            {innovationPipeline.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            This ensures continuous innovation development and real-world impact.
          </p>
        </motion.article>

        <motion.section
          className="grid gap-6 md:grid-cols-2 mb-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-[#0B1E3B]/15 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#0B1E3B]/10 border border-[#0B1E3B]/20 items-center justify-center mb-4">
              <Globe className="w-5 h-5 text-[#0B1E3B]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-3">Global Participation and Institutional Impact</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              STEMlens strengthens innovation ecosystems by working with:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {institutionalImpact.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Learners and institutions gain access to global innovation opportunities.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-[#EB3134]/20 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#EB3134]/10 border border-[#EB3134]/20 items-center justify-center mb-4">
              <Lightbulb className="w-5 h-5 text-[#B72024]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-3">Building Future Innovators and Leaders</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              STEMlens prepares innovators with the skills, mindset, and experience needed to contribute to technology, innovation, and global development.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Through structured programs and global engagement, STEMlens develops innovators capable of creating solutions, advancing technology, and shaping the future.
            </p>
          </motion.article>
        </motion.section>

        <motion.article
          className="bg-gradient-to-br from-[#2F2F35] via-[#0B1E3B] to-[#EB3134] rounded-2xl shadow-xl border border-white/20 p-6 sm:p-7 lg:p-10 text-white mb-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="inline-flex w-10 h-10 rounded-full bg-white/15 border border-white/20 items-center justify-center mb-4">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Measurable Impact and Continuous Growth</h3>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-4">
            STEMlens impact is demonstrated through:
          </p>
          <div className="grid gap-3 sm:grid-cols-2 mb-4">
            <div className="rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-sm sm:text-base">
              Real innovation projects and prototypes
            </div>
            <div className="rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-sm sm:text-base">
              Global competition participation
            </div>
            <div className="rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-sm sm:text-base">
              Institutional partnerships and programs
            </div>
            <div className="rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-sm sm:text-base">
              Advanced innovation pathways
            </div>
          </div>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed">
            Our commitment is to develop innovators who create real solutions and drive meaningful change.
          </p>
        </motion.article>

        <motion.section
          className="bg-white rounded-2xl shadow-xl border border-[#EB3134]/20 p-6 sm:p-7 lg:p-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="inline-flex w-10 h-10 rounded-full bg-[#0B1E3B]/10 border border-[#0B1E3B]/20 items-center justify-center mb-4">
            <BarChart3 className="w-5 h-5 text-[#0B1E3B]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-3">Explore STEMlens Impact</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
            Discover detailed insights into our innovation outcomes, global participation, and institutional impact.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {exploreButtons.map((label) => (
              <button
                key={label}
                type="button"
                className="inline-flex items-center justify-center rounded-xl border border-[#0B1E3B]/20 bg-[#F8FAFC] px-4 py-3 text-sm sm:text-base font-semibold text-[#0B1E3B] transition-all hover:border-[#EB3134]/35 hover:text-[#B72024] hover:bg-white"
              >
                {label}
              </button>
            ))}
          </div>
        </motion.section>
      </div>
    </section>
  );
}
