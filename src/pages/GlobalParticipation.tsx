import { motion } from 'framer-motion';
import {
  Globe,
  Users,
  Handshake,
  Target,
  Rocket,
  Network,
} from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';

const globalPlatforms = [
  'International robotics and innovation competitions',
  'Global STEM and technology conferences and exhibitions',
  'International youth innovation and leadership forums',
  'Exchange and collaboration programs with global partners',
];

const showcaseOpportunities = [
  'Innovation showcases and exhibitions',
  'Global STEM and technology events',
  'International collaboration and exchange programs',
];

const collaborationBenefits = [
  'Engage with innovators from different countries',
  'Learn global approaches to science, engineering, and innovation',
  'Collaborate on shared global and local challenges',
  'Build international networks and partnerships',
];

const skillsDeveloped = [
  'Global awareness and cultural intelligence',
  'Communication and professional presentation skills',
  'Leadership and innovation confidence',
  'Real-world problem-solving capability',
];

const gatewayServices = [
  'International partnerships and institutional collaboration',
  'Global competitions, showcases, and innovation platforms',
  'Exchange and global learning programs',
  'Innovation, leadership, and venture development pathways',
];

const eligibleParticipants = [
  'Primary and secondary school learners',
  'TVET and university students',
  'STEMlens clubs and innovation teams',
  'Individual learners and emerging innovators',
];

const advancedPathways = [
  'STEMlens Innovation Challenge and Innovation Cup',
  'International competitions and innovation platforms',
  'Global showcases, exchanges, and leadership programs',
  'Advanced innovation, research, and venture pathways',
];

const accessPathways = [
  'STEMlens Clubs and partner schools',
  'STEMlens innovation and leadership programs',
  'Global exchanges, competitions, and showcases',
  'Institutional partnerships and collaboration pathways',
];

const actionButtons = [
  'Sign Up',
  'Register Interest',
  'Partner With STEMlens',
];

export default function GlobalParticipation() {
  return (
    <section
      id="global-participation"
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
            Global Participation
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#2F2F35] mb-5">
            Connecting STEMlens Innovators to the World
          </h2>
          <p className="max-w-5xl text-base sm:text-lg text-[#4B5563] leading-relaxed mb-4">
            STEMlens Network enables learners and innovators to participate in global STEM, innovation, and leadership platforms. Through international competitions, exchanges, showcases, and partnerships, learners gain exposure to global standards, diverse perspectives, and real-world innovation environments.
          </p>
          <p className="max-w-5xl text-base sm:text-lg font-semibold text-[#0B1E3B] leading-relaxed">
            Global participation prepares learners to contribute confidently in an interconnected world.
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
            <Globe className="w-5 h-5 text-[#0B1E3B]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-4">Global Platforms and Programs</h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            STEMlens learners and innovators participate in leading global platforms, including:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
            {globalPlatforms.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            These experiences expose learners to real-world global innovation ecosystems and standards.
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
              <Rocket className="w-5 h-5 text-[#B72024]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-3">Global Showcases and Innovation Exposure</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Learners and innovators present their projects and solutions to international audiences through:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {showcaseOpportunities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              This strengthens confidence, professional communication, and global readiness.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-[#0B1E3B]/15 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#0B1E3B]/10 border border-[#0B1E3B]/20 items-center justify-center mb-4">
              <Handshake className="w-5 h-5 text-[#0B1E3B]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-3">International Collaboration and Learning</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Through global participation, learners gain opportunities to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {collaborationBenefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              This develops globally minded innovators and leaders.
            </p>
          </motion.article>
        </motion.section>

        <motion.article
          className="rounded-2xl border border-[#2F2F35]/15 bg-white p-6 sm:p-7 lg:p-8 shadow-sm mb-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="inline-flex w-10 h-10 rounded-full bg-[#2F2F35]/10 border border-[#2F2F35]/15 items-center justify-center mb-4">
            <Target className="w-5 h-5 text-[#2F2F35]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#2F2F35] mb-3">Skills and Leadership Development</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
            Global participation helps learners develop:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
            {skillsDeveloped.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Learners gain the mindset needed to operate in global innovation environments.
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
            <Network className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">STEMlens as a Global Gateway</h3>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-4">
            STEMlens Network serves as a bridge connecting learners, institutions, and innovators to global STEM and innovation opportunities through:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-white/90 mb-4">
            {gatewayServices.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed">
            This ensures learners are prepared for meaningful global participation and leadership.
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
              <Users className="w-5 h-5 text-[#B72024]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-3">Who Can Participate</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Global participation opportunities are available to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {eligibleParticipants.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Participation pathways are based on readiness, program level, and opportunity availability.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-[#0B1E3B]/15 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#0B1E3B]/10 border border-[#0B1E3B]/20 items-center justify-center mb-4">
              <Rocket className="w-5 h-5 text-[#0B1E3B]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-3">Pathways to Advanced Global Opportunities</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Global participation connects learners to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {advancedPathways.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Learners progress from local innovation to global impact.
            </p>
          </motion.article>
        </motion.section>

        <motion.section
          className="bg-white rounded-2xl shadow-xl border border-[#EB3134]/20 p-6 sm:p-7 lg:p-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="inline-flex w-10 h-10 rounded-full bg-[#0B1E3B]/10 border border-[#0B1E3B]/20 items-center justify-center mb-4">
            <Globe className="w-5 h-5 text-[#0B1E3B]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-3">Join Global STEMlens Opportunities</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
            Learners and institutions can access global participation through:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
            {accessPathways.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="grid gap-3 sm:grid-cols-3 mt-6">
            {actionButtons.map((label) => (
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
