import { motion } from 'framer-motion';
import {
  Rocket,
  Search,
  DraftingCompass,
  Wrench,
  Presentation,
  TrendingUp,
  Target,
  Users2,
  Sparkles,
} from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';

const challengeStages = [
  {
    title: 'Problem Identification',
    detail:
      'Participants identify meaningful challenges affecting their communities or global systems.',
    Icon: Search,
  },
  {
    title: 'Solution Design',
    detail:
      'Participants develop structured solutions using STEM knowledge, engineering design, and systems thinking.',
    Icon: DraftingCompass,
  },
  {
    title: 'Prototype Development',
    detail:
      'Participants build and test working prototypes using STEMlens Maker Spaces, Prototyping Labs, and innovation environments.',
    Icon: Wrench,
  },
  {
    title: 'Presentation and Evaluation',
    detail:
      'Participants present their solutions to mentors, educators, industry experts, and innovation partners.',
    Icon: Presentation,
  },
  {
    title: 'Progression and Advancement',
    detail:
      'Promising innovations progress into Innovation Showcases, the STEMlens Innovation Cup, accelerator pathways, and real-world implementation opportunities.',
    Icon: TrendingUp,
  },
];

const innovationFocusAreas = [
  'Climate and environmental sustainability',
  'Smart cities, infrastructure, and intelligent systems',
  'Agriculture, food systems, and resource management',
  'Health, safety, and community well-being',
  'Digital inclusion and technology access',
  'Automation, robotics, and intelligent technologies',
];

const capabilities = [
  'Innovation and structured problem-solving capability',
  'Engineering design and prototype development skills',
  'Systems thinking and technical reasoning',
  'Communication and professional presentation skills',
  'Leadership, initiative, and innovation confidence',
];

const participationPathways = [
  'Primary and secondary school learners',
  'TVET students and technical training institutions',
  'University students and emerging innovators',
  'Adult learners and independent innovation teams',
  'STEMlens clubs, schools, and partner institutions',
];

const advancedOpportunities = [
  'STEMlens Innovation Showcases',
  'STEMlens Innovation Cup (flagship elite competition)',
  'Maker Spaces and Prototyping Labs',
  'STEMpreneurship and venture development pathways',
  'Accelerator and incubation programs',
  'National and international innovation platforms',
];

const realWorldOutcomes = [
  'Experience developing real-world innovation solutions',
  'Ability to design, prototype, and refine technologies',
  'Exposure to innovation, engineering, and venture environments',
  'Confidence presenting and advancing their ideas',
  'Pathways into global STEM and innovation opportunities',
];

const ctaActions = [
  'Join the Innovation Challenge',
  'Register Your School, TVET, or Institution',
  'Submit an Innovation Project',
  'Partner With STEMlens',
  'Explore the STEMlens Innovation Ecosystem',
];

export default function InnovationChallenge() {
  return (
    <section
      id="innovation-challenge"
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
            STEMlens Innovation Challenge
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#2F2F35] mb-5">
            The Entry Platform for Developing Real-World Innovators and Solutions
          </h2>
          <p className="max-w-5xl text-base sm:text-lg text-[#4B5563] leading-relaxed mb-4">
            The STEMlens Innovation Challenge is a global innovation platform that empowers learners,
            students, and emerging innovators to identify real-world challenges and develop practical
            solutions using science, technology, engineering, and creative thinking.
          </p>
          <p className="max-w-5xl text-base sm:text-lg text-[#4B5563] leading-relaxed mb-4">
            The challenge provides a structured pathway where participants move from ideas to prototypes,
            presentations, and real-world implementation. It serves as the primary entry point into the
            STEMlens Innovation Ecosystem and prepares participants for advanced innovation opportunities,
            including the flagship STEMlens Innovation Cup, accelerator pathways, and venture development
            programs.
          </p>
          <p className="max-w-5xl text-base sm:text-lg text-[#4B5563] leading-relaxed">
            At STEMlens, innovation is not theoretical. It is built, tested, and applied.
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
            <Rocket className="w-5 h-5 text-[#0B1E3B]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-4">How the Innovation Challenge Works</h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            Participants progress through structured innovation stages used by real innovators and
            engineers:
          </p>
          <motion.div
            className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mb-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            {challengeStages.map((stage, index) => {
              const Icon = stage.Icon;
              return (
                <motion.article
                  key={stage.title}
                  variants={fadeUp}
                  className={`rounded-xl border px-4 py-4 ${
                    index % 3 === 0
                      ? 'border-[#0B1E3B]/15 bg-[#F8FAFC]'
                      : index % 3 === 1
                        ? 'border-[#EB3134]/20 bg-[#FFF8F8]'
                        : 'border-[#2F2F35]/15 bg-white'
                  }`}
                >
                  <div className="inline-flex w-8 h-8 rounded-full bg-white border border-gray-200 items-center justify-center mb-2">
                    <Icon className="w-4 h-4 text-[#0B1E3B]" />
                  </div>
                  <p className="text-sm font-semibold text-[#0B1E3B] mb-1">{stage.title}</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{stage.detail}</p>
                </motion.article>
              );
            })}
          </motion.div>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            This process mirrors real-world innovation, engineering, and venture development.
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
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-3">Innovation Areas and Focus</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Participants develop solutions across critical global and community areas, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {innovationFocusAreas.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Solutions focus on real-world relevance, impact, and scalability.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-[#0B1E3B]/15 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#0B1E3B]/10 border border-[#0B1E3B]/20 items-center justify-center mb-4">
              <Sparkles className="w-5 h-5 text-[#0B1E3B]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-3">
              Skills and Capabilities Participants Develop
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Through the STEMlens Innovation Challenge, participants build:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {capabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Participants develop the mindset and capability of real innovators.
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
              Innovation Divisions and Participation Pathways
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              The STEMlens Innovation Challenge is open to participants across multiple levels:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {participationPathways.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Participants progress based on readiness, experience, and innovation goals.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-[#EB3134]/20 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#EB3134]/10 border border-[#EB3134]/20 items-center justify-center mb-4">
              <TrendingUp className="w-5 h-5 text-[#B72024]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#B72024] mb-3">
              Progression into Advanced Innovation and Flagship Opportunities
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              The STEMlens Innovation Challenge is the foundation of the STEMlens innovation pipeline and
              connects directly to advanced opportunities, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {advancedOpportunities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              The Innovation Challenge serves as the primary pathway through which innovators progress into
              the STEMlens Innovation Cup and advanced venture and implementation pathways.
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
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Real-World Impact and Opportunity</h3>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-4">Participants gain:</p>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-white/90 mb-4">
            {realWorldOutcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed">
            Participants become part of a growing global network of innovators and problem-solvers.
          </p>
        </motion.article>

        <motion.section
          className="bg-white rounded-2xl shadow-xl border border-[#EB3134]/20 p-6 sm:p-7 lg:p-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-3">Join the STEMlens Innovation Challenge</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
            Take the first step in transforming ideas into real-world innovation and advancing toward
            flagship platforms such as the STEMlens Innovation Cup.
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
