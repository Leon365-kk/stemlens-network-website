import { motion } from 'framer-motion';
import {
  Lightbulb,
  FlaskConical,
  Workflow,
  Cpu,
  Target,
  Rocket,
  Sparkles,
} from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';

const prototypingMeaning = [
  'Transform ideas into physical or digital prototypes',
  'Test whether solutions work in real conditions',
  'Improve designs through iteration and feedback',
  'Apply scientific and engineering thinking',
];

const labEnvironments = [
  'Maker Spaces',
  'Prototyping & Engineering Labs',
  'Robotics & Automation Labs',
  'Drone, AI, and Smart Systems Labs',
];

const prototypingProcess = [
  'Design a solution',
  'Build a working prototype',
  'Test performance and functionality',
  'Identify gaps and improve the design',
  'Refine and validate the solution',
];

const learnerBuilds = [
  'Robotics and automation systems',
  'Engineering and mechanical prototypes',
  'Smart agriculture and environmental tools',
  'Digital platforms and applications',
  'IoT and monitoring systems',
  'Community improvement solutions',
];

const learnerSkills = [
  'Engineering and design capability',
  'Technical confidence and creativity',
  'Problem-solving and analytical thinking',
  'Precision and attention to detail',
  'Resilience and innovation mindset',
];

const impactPathways = [
  'Innovation showcases and competitions',
  'Community pilots and real-world testing',
  'Entrepreneurship and startup pathways',
  'Advanced STEMlens research and innovation programs',
];

const participationRoutes = [
  'STEMlens Clubs in partner schools',
  'STEMlens Center-based programs',
  'Innovation Labs and engineering tracks',
  'Holiday bootcamps and innovation programs',
];

const ctaButtons = ['Sign Up', 'Register Interest', 'School Partnership Enquiry'];

export default function PrototypingLabs() {
  return (
    <section
      id="prototyping-labs"
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
            Prototyping &amp; Labs
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#2F2F35] mb-5">
            Where Ideas Become Real Solutions
          </h2>
          <p className="max-w-5xl text-base sm:text-lg text-[#4B5563] leading-relaxed mb-4">
            Prototyping &amp; Labs at STEMlens Network provide learners with the space, tools, and
            guidance to turn ideas into working solutions.
          </p>
          <p className="max-w-5xl text-base sm:text-lg text-[#4B5563] leading-relaxed">
            This is where concepts move beyond theory into real engineering, testing, and innovation.
            Learners design, build, test, and improve systems, mirroring how solutions are developed in
            real engineering and research environments.
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
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-4">
            What Prototyping Means at STEMlens
          </h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            At STEMlens, prototyping is a core learning approach. Learners develop real understanding by
            actively building and testing solutions.
          </p>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">Learners are guided to:</p>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
            {prototypingMeaning.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            This builds confidence and real technical capability.
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
              <FlaskConical className="w-5 h-5 text-[#B72024]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-3">STEMlens Innovation Labs</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Learners work in dedicated STEMlens innovation environments, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700">
              {labEnvironments.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-4">
              These labs provide tools, materials, and mentorship needed to build functional solutions.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-[#0B1E3B]/15 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#0B1E3B]/10 border border-[#0B1E3B]/20 items-center justify-center mb-4">
              <Workflow className="w-5 h-5 text-[#0B1E3B]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-3">The Prototyping Process</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Learners follow a structured innovation cycle used in real engineering and product
              development:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700">
              {prototypingProcess.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-4">
              This builds disciplined, evidence-based innovation skills.
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
              <Cpu className="w-5 h-5 text-[#2F2F35]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-3">What Learners Build</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Depending on their programs, learners prototype solutions such as:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {learnerBuilds.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Projects focus on solving real problems.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-[#EB3134]/20 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#EB3134]/10 border border-[#EB3134]/20 items-center justify-center mb-4">
              <Target className="w-5 h-5 text-[#B72024]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#B72024] mb-3">Skills Learners Develop</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Through hands-on prototyping, learners build:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {learnerSkills.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Learners understand how real innovation works.
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
            <Rocket className="w-5 h-5 text-[#0B1E3B]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-3">From Prototype to Real-World Impact</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
            Strong prototypes may progress into:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
            {impactPathways.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Ideas move from concept to real implementation.
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
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Why Prototyping Matters at STEMlens</h3>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-4 max-w-5xl">
            At STEMlens, innovation is built, not just taught.
          </p>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-5xl">
            Prototyping &amp; Labs develop learners who can design, test, and improve real systems,
            preparing them for future careers in engineering, technology, research, and innovation.
          </p>
        </motion.article>

        <motion.section
          className="bg-white rounded-2xl shadow-xl border border-[#EB3134]/20 p-6 sm:p-7 lg:p-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-3">Join STEMlens Innovation Labs</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
            Learners can participate through:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-5">
            {participationRoutes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
            To enrol: Click Sign Up to register interest. Our team will follow up with schedules,
            placement, and next intake dates.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {ctaButtons.map((label) => (
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
