import { motion } from 'framer-motion';
import {
  Lightbulb,
  Target,
  Cpu,
  TestTube,
  Building,
  Rocket,
  TrendingUp,
  BarChart3,
} from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';

const innovationTypes = [
  'Engineering and technology prototypes',
  'Robotics and automation systems',
  'Smart devices and embedded technology solutions',
  'Software applications and intelligent digital platforms',
  'Environmental and sustainability innovation tools',
  'Community-focused and social impact technologies',
];

const developmentStages = [
  'Concept Stage — Idea development and solution design',
  'Prototype Stage — Functional working models',
  'Advanced Prototype Stage — Refined and tested systems',
  'Implementation Pathways — Solutions ready for real-world application',
];

const testingProcess = [
  'Build and test working prototypes',
  'Evaluate performance and functionality',
  'Improve designs through iteration and feedback',
  'Validate solutions through mentor and expert guidance',
];

const innovationEnvironments = [
  'Maker Spaces and Prototyping Labs',
  'Electronics and Embedded Systems Labs',
  'Drone and AI Labs',
  'Community Labs and applied innovation programs',
];

const advancementPathways = [
  'STEMlens Innovation Showcases and Innovation Cup',
  'National and international innovation competitions',
  'Accelerator and incubation pathways',
  'Global innovation and research platforms',
];

const ecosystemContributions = [
  'Developing future innovators, engineers, and technology leaders',
  'Supporting institutional innovation capacity in schools, TVETs, and universities',
  'Strengthening applied STEM and engineering pathways',
  'Contributing practical solutions to real-world challenges',
];

const exploreButtons = [
  'View Impact Dashboard',
  'Read Student and Innovator Stories',
  'View Competition Achievements',
  'Explore Global Participation',
  'Explore Accelerator and Innovation Pathways',
];

export default function InnovationOutcomes() {
  return (
    <section
      id="innovation-outcomes"
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
            Innovation Outcomes
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#2F2F35] mb-5">
            Real Innovations, Practical Solutions, and Measurable Progress
          </h2>
          <p className="max-w-5xl text-base sm:text-lg text-[#4B5563] leading-relaxed mb-4">
            STEMlens Network supports learners and innovators in developing real-world solutions that address meaningful challenges across technology, sustainability, and society.
          </p>
          <p className="max-w-5xl text-base sm:text-lg text-[#4B5563] leading-relaxed mb-4">
            Innovation outcomes at STEMlens reflect the transition from STEM learning to applied innovation, where participants design, build, test, and refine solutions using structured engineering and innovation processes.
          </p>
          <p className="max-w-5xl text-base sm:text-lg font-semibold text-[#0B1E3B] leading-relaxed">
            These outcomes demonstrate the strength of STEMlens' innovation pipeline and hands-on innovation ecosystem.
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
            <Lightbulb className="w-5 h-5 text-[#0B1E3B]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-4">Types of Innovation Outcomes</h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            STEMlens innovators develop a wide range of functional solutions, including:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
            {innovationTypes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            These innovations reflect real-world application of STEM knowledge.
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
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-3">Innovation Development and Progression</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Innovations developed at STEMlens progress across structured development stages:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {developmentStages.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Innovations progress through the STEMlens Innovation Challenge, Innovation Showcases, Innovation Cup, and Accelerator and Incubator Pathways.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              This ensures continuous innovation development and advancement.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-[#0B1E3B]/15 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#0B1E3B]/10 border border-[#0B1E3B]/20 items-center justify-center mb-4">
              <TestTube className="w-5 h-5 text-[#0B1E3B]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-3">Testing, Refinement, and Validation</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Innovators strengthen solutions through structured testing and improvement.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Participants:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {testingProcess.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              This ensures innovation outcomes are practical, functional, and scalable.
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
            <Building className="w-5 h-5 text-[#2F2F35]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#2F2F35] mb-3">Innovation Environment and Infrastructure</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
            Innovation outcomes are developed using STEMlens innovation environments, including:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
            {innovationEnvironments.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            These environments support real engineering, technology, and innovation development.
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
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-3">Advancement into Global and Venture Pathways</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Promising innovations progress into advanced opportunities, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {advancementPathways.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              These pathways enable innovators to advance solutions beyond initial development.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-[#0B1E3B]/15 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#0B1E3B]/10 border border-[#0B1E3B]/20 items-center justify-center mb-4">
              <TrendingUp className="w-5 h-5 text-[#0B1E3B]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-3">Strengthening Innovation Ecosystems</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              STEMlens innovation outcomes contribute to broader innovation and technology ecosystems by:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {ecosystemContributions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              STEMlens supports long-term innovation development and real-world impact.
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
            <Cpu className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">From Learning to Real Innovation</h3>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-4">
            STEMlens innovation outcomes demonstrate the successful transition from STEM education to applied innovation:
          </p>
          <div className="grid gap-3 sm:grid-cols-2 mb-4">
            <div className="rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-sm sm:text-base">
              Real-world problem identification
            </div>
            <div className="rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-sm sm:text-base">
              Structured design and engineering
            </div>
            <div className="rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-sm sm:text-base">
              Functional prototype development
            </div>
            <div className="rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-sm sm:text-base">
              Testing and validation processes
            </div>
          </div>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed">
            Our innovators create solutions that address real challenges and demonstrate measurable impact.
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
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-3">Explore Innovation Impact</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
            Discover detailed insights into our innovation outcomes and real-world solutions developed by STEMlens innovators.
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
