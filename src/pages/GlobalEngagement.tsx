import { motion } from 'framer-motion';
import {
  Globe2,
  Target,
  Rocket,
  Users2,
  Handshake,
  Lightbulb,
  Sparkles,
} from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';

const sdgAlignmentPoints = [
  'Quality education and future-ready skills',
  'Innovation, technology, and infrastructure',
  'Climate action and environmental sustainability',
  'Sustainable communities and smart systems',
  'Food systems, health, and global well-being',
];

const globalOpportunities = [
  'International STEM competitions and innovation challenges',
  'Global exchange and study programs',
  'International innovation showcases and conferences',
  'Cross-border research and collaboration initiatives',
  'Global youth leadership and innovation platforms',
];

const leadershipSkills = [
  'Communication and global collaboration skills',
  'Cultural intelligence and adaptability',
  'Professional conduct and international readiness',
  'Ethical and responsible innovation leadership',
];

const localToGlobalPathways = [
  'International innovation competitions and exhibitions',
  'Global STEM and technology showcases',
  'Research, innovation, and partnership opportunities',
  'Venture development and global innovation pathways',
];

const partnershipGroups = [
  'Schools, TVET institutions, and universities',
  'Global STEM and innovation organizations',
  'Industry, research, and technology partners',
  'International education and innovation platforms',
];

const ctaActions = [
  'Join STEMlens Programs',
  'Explore Global Innovation Opportunities',
  'Register Interest',
  'Partner With STEMlens',
];

export default function GlobalEngagement() {
  return (
    <section
      id="global-engagement"
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
            Innovation
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#0B1E3B] leading-tight mb-4">
            Global Engagement &amp; Sustainable Development Goals (SDGs)
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#2F2F35] mb-5">
            Preparing Globally Minded Innovators and Future Leaders
          </h2>
          <p className="max-w-5xl text-base sm:text-lg text-[#4B5563] leading-relaxed mb-4">
            STEMlens Network prepares learners to engage with the world beyond their classrooms and
            communities. Through international partnerships, global platforms, and SDG-aligned innovation
            programs, learners connect STEM education to real global challenges, leadership, and
            cross-border collaboration.
          </p>
          <p className="max-w-5xl text-base sm:text-lg text-[#4B5563] leading-relaxed">
            STEMlens develops not only technical capability, but also the global awareness, responsibility,
            and leadership needed to contribute meaningfully in an interconnected world.
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
            <Globe2 className="w-5 h-5 text-[#0B1E3B]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-4">Why Global Engagement Matters</h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            Today&apos;s most important challenges, including climate change, sustainable development, and
            technological transformation, are global in nature.
          </p>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            STEMlens helps learners understand how local innovation connects to global systems, preparing
            them to participate in international science, technology, and innovation ecosystems.
          </p>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Learners develop the confidence and capability to contribute at both local and global levels.
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
            className="rounded-2xl border border-[#EB3134]/20 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#EB3134]/10 border border-[#EB3134]/20 items-center justify-center mb-4">
              <Target className="w-5 h-5 text-[#B72024]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-3">
              STEMlens and the United Nations Sustainable Development Goals (SDGs)
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              STEMlens programs align with the United Nations Sustainable Development Goals, enabling
              learners to develop solutions that contribute to global priorities, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700">
              {sdgAlignmentPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-4">
              This ensures innovation is connected to real-world global impact.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-[#0B1E3B]/15 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#0B1E3B]/10 border border-[#0B1E3B]/20 items-center justify-center mb-4">
              <Rocket className="w-5 h-5 text-[#0B1E3B]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-3">
              Global Platforms and International Opportunities
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Through STEMlens programs, learners gain access to global opportunities such as:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700">
              {globalOpportunities.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-4">
              These experiences expose learners to global standards, networks, and innovation
              environments.
            </p>
          </motion.article>
        </motion.section>

        <motion.section
          className="grid gap-6 md:grid-cols-2 mb-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-[#2F2F35]/15 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#2F2F35]/10 border border-[#2F2F35]/15 items-center justify-center mb-4">
              <Users2 className="w-5 h-5 text-[#2F2F35]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-3">
              Developing Global Leadership and Collaboration Skills
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Global engagement helps learners develop essential leadership capabilities, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700">
              {leadershipSkills.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-4">
              Learners gain confidence representing themselves, their institutions, and their innovations
              globally.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-[#EB3134]/20 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#EB3134]/10 border border-[#EB3134]/20 items-center justify-center mb-4">
              <Lightbulb className="w-5 h-5 text-[#B72024]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#B72024] mb-3">
              From Local Innovation to Global Impact
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              STEMlens supports learners in advancing innovations developed locally into global platforms
              through:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700">
              {localToGlobalPathways.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-4">
              Learners become part of a global innovation ecosystem.
            </p>
          </motion.article>
        </motion.section>

        <motion.article
          className="rounded-2xl border border-[#0B1E3B]/15 bg-white p-6 sm:p-7 lg:p-8 shadow-sm mb-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="inline-flex w-10 h-10 rounded-full bg-[#0B1E3B]/10 border border-[#0B1E3B]/20 items-center justify-center mb-4">
            <Handshake className="w-5 h-5 text-[#0B1E3B]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-3">
            Strategic Global Partnerships and Collaboration
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">STEMlens collaborates with:</p>
          <motion.ul
            className="grid gap-3 sm:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            {partnershipGroups.map((item) => (
              <motion.li
                key={item}
                variants={fadeUp}
                className="rounded-xl border border-gray-200 bg-[#F8FAFC] px-4 py-3 text-sm sm:text-base text-gray-700"
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-4">
            These partnerships expand access to global learning and innovation opportunities.
          </p>
        </motion.article>

        <motion.article
          className="bg-gradient-to-br from-[#2F2F35] via-[#0B1E3B] to-[#EB3134] rounded-2xl shadow-xl border border-white/20 p-6 sm:p-7 lg:p-10 text-white mb-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="inline-flex w-10 h-10 rounded-full bg-white/15 border border-white/20 items-center justify-center mb-4">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Why Global Engagement Matters at STEMlens</h3>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-4 max-w-5xl">
            STEMlens prepares learners not only for careers, but for global leadership and contribution.
          </p>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-5xl">
            Learners develop the skills, mindset, and experience needed to innovate, collaborate, and
            lead in a rapidly evolving global technology landscape. They become innovators capable of
            shaping the future locally and globally.
          </p>
        </motion.article>

        <motion.section
          className="bg-white rounded-2xl shadow-xl border border-[#EB3134]/20 p-6 sm:p-7 lg:p-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-3">
            Join Global STEMlens Programs and Opportunities
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
            Participate in global innovation, leadership, and exchange pathways.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {ctaActions.map((action) => (
              <button
                key={action}
                type="button"
                className="inline-flex items-center justify-center rounded-xl border border-[#0B1E3B]/20 bg-[#F8FAFC] px-4 py-3 text-sm sm:text-base font-semibold text-[#0B1E3B] transition-all hover:border-[#EB3134]/35 hover:text-[#B72024] hover:bg-white"
              >
                {action}
              </button>
            ))}
          </div>
        </motion.section>
      </div>
    </section>
  );
}
