import { motion } from 'framer-motion';
import {
  Trophy,
  Network,
  Wrench,
  Cpu,
  Users2,
  Award,
  Sparkles,
} from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';

const ecosystemEntrySources = [
  'The STEMlens Innovation Challenge',
  'STEMlens Maker Spaces and Prototyping Labs',
  'STEMlens Community Labs and innovation programs',
  'STEMpreneurship and advanced innovation pathways',
];

const advancedCycle = [
  {
    stage: 'Solution Refinement',
    detail: 'Participants strengthen and improve their innovation concepts and prototypes.',
  },
  {
    stage: 'Advanced Prototype Development',
    detail: 'Teams enhance technical functionality, usability, and system performance.',
  },
  {
    stage: 'Mentorship and Expert Guidance',
    detail: 'Participants receive mentorship from STEMlens experts, industry professionals, and innovation leaders.',
  },
  {
    stage: 'Presentation and Evaluation',
    detail: 'Participants present solutions to expert panels, partners, and innovation stakeholders.',
  },
  {
    stage: 'Advancement and Implementation Pathways',
    detail: 'Outstanding solutions progress into accelerator pathways, venture development, and real-world deployment opportunities.',
  },
];

const innovationFocusAreas = [
  'Climate and environmental sustainability',
  'Agriculture, food systems, and resource management',
  'Smart cities and intelligent infrastructure',
  'Health, safety, and community resilience',
  'Artificial intelligence, robotics, and intelligent systems',
  'Digital technologies and innovation for social impact',
];

const participantGroups = [
  'STEMlens Innovation Challenge participants',
  'STEMlens clubs, schools, and partner institutions',
  'TVET and university innovation teams',
  'Advanced learners and independent innovation teams',
  'STEMlens innovation and venture development programs',
];

const recognitionOpportunities = [
  'Innovation awards and recognition',
  'Advanced mentorship and incubation opportunities',
  'Invitations to innovation showcases, conferences, and exhibitions',
  'Pathways into accelerator and venture development programs',
  'Opportunities to present innovations to partners and institutions',
];

const leadershipOutcomes = [
  'Advanced innovation and engineering experience',
  'Exposure to real innovation and venture environments',
  'Confidence presenting and advancing high-impact solutions',
  'Preparation for engineering, technology, and venture pathways',
  'Opportunities to contribute meaningful solutions to real-world challenges',
];

const ctaActions = [
  'Apply to the STEMlens Innovation Cup',
  'Register Your School, TVET, or Institution',
  'Submit an Advanced Innovation Project',
  'Partner With STEMlens',
  'Explore the STEMlens Innovation Ecosystem',
];

export default function InnovationCup() {
  return (
    <section
      id="innovation-cup"
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
            STEMlens Innovation Cup
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#2F2F35] mb-5">
            The Flagship Competition for Advancing High-Impact Innovation and Future Leaders
          </h2>
          <p className="max-w-5xl text-base sm:text-lg text-[#4B5563] leading-relaxed mb-4">
            The STEMlens Innovation Cup is the flagship and advanced innovation competition within the
            STEMlens Innovation Ecosystem. It brings together top innovators, high-potential teams, and
            outstanding solutions emerging from the STEMlens Innovation Challenge and STEMlens innovation
            programs.
          </p>
          <p className="max-w-5xl text-base sm:text-lg text-[#4B5563] leading-relaxed mb-4">
            The Innovation Cup transforms promising ideas and prototypes into refined, impactful solutions
            through advanced development, mentorship, and real-world innovation exposure.
          </p>
          <p className="max-w-5xl text-base sm:text-lg text-[#4B5563] leading-relaxed">
            This is where emerging innovators progress into leadership, venture pathways, and real-world
            implementation.
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
            <Network className="w-5 h-5 text-[#0B1E3B]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-4">
            Role within the STEMlens Innovation Ecosystem
          </h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            The STEMlens Innovation Cup represents the advanced stage of the STEMlens innovation pipeline.
            Participants typically progress into the Innovation Cup after developing solutions through:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
            {ecosystemEntrySources.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            The Innovation Cup serves as the platform where high-potential innovations are refined,
            showcased, and advanced toward real-world impact.
          </p>
        </motion.article>

        <motion.article
          className="rounded-2xl border border-[#EB3134]/20 bg-white p-6 sm:p-7 lg:p-8 shadow-sm mb-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="inline-flex w-10 h-10 rounded-full bg-[#EB3134]/10 border border-[#EB3134]/20 items-center justify-center mb-4">
            <Wrench className="w-5 h-5 text-[#B72024]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#2F2F35] mb-4">How the Innovation Cup Works</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
            Participants progress through an advanced innovation cycle aligned with real-world
            engineering, research, and venture development:
          </p>
          <motion.div
            className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mb-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            {advancedCycle.map((item, index) => (
              <motion.article
                key={item.stage}
                variants={fadeUp}
                className={`rounded-xl border px-4 py-4 ${
                  index % 3 === 0
                    ? 'border-[#0B1E3B]/15 bg-[#F8FAFC]'
                    : index % 3 === 1
                      ? 'border-[#EB3134]/20 bg-[#FFF8F8]'
                      : 'border-[#2F2F35]/15 bg-white'
                }`}
              >
                <p className="text-sm font-semibold text-[#0B1E3B] mb-1">{item.stage}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{item.detail}</p>
              </motion.article>
            ))}
          </motion.div>
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
              <Cpu className="w-5 h-5 text-[#0B1E3B]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-3">Innovation Areas and Focus</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Innovation Cup participants develop advanced solutions across critical areas, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {innovationFocusAreas.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Solutions emphasize technical depth, scalability, and real-world relevance.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-[#2F2F35]/15 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#2F2F35]/10 border border-[#2F2F35]/15 items-center justify-center mb-4">
              <Users2 className="w-5 h-5 text-[#2F2F35]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-3">Who Participates</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              The STEMlens Innovation Cup brings together high-potential innovators from:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {participantGroups.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Participation is based on innovation readiness, solution maturity, and advancement
              potential.
            </p>
          </motion.article>
        </motion.section>

        <motion.article
          className="rounded-2xl border border-[#EB3134]/20 bg-white p-6 sm:p-7 lg:p-8 shadow-sm mb-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="inline-flex w-10 h-10 rounded-full bg-[#EB3134]/10 border border-[#EB3134]/20 items-center justify-center mb-4">
            <Award className="w-5 h-5 text-[#B72024]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#2F2F35] mb-3">
            Recognition, Advancement, and Global Opportunities
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
            Innovation Cup participants may receive:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
            {recognitionOpportunities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            The Innovation Cup opens pathways toward global innovation opportunities.
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
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Real-World Impact and Leadership Development</h3>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-4">
            Through the STEMlens Innovation Cup, participants gain:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-white/90 mb-4">
            {leadershipOutcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed">
            Participants develop as innovators, founders, and future technology leaders.
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
            <Trophy className="w-5 h-5 text-[#0B1E3B]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-3">Join the STEMlens Innovation Cup</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
            Advance your innovation and participate in the flagship STEMlens innovation competition.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ctaActions.map((item) => (
              <button
                key={item}
                type="button"
                className="inline-flex items-center justify-center rounded-xl border border-[#0B1E3B]/20 bg-[#F8FAFC] px-4 py-3 text-sm sm:text-base font-semibold text-[#0B1E3B] transition-all hover:border-[#EB3134]/35 hover:text-[#B72024] hover:bg-white"
              >
                {item}
              </button>
            ))}
          </div>
        </motion.section>
      </div>
    </section>
  );
}
