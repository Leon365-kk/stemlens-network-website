import { motion } from 'framer-motion';
import {
  Lightbulb,
  Wrench,
  FlaskConical,
  Rocket,
  Workflow,
  Handshake,
  Target,
  Sparkles,
} from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';

const pipelineStages = [
  {
    stage: 'Explore',
    detail: 'Learners identify problems, explore ideas, and develop innovation mindset.',
  },
  {
    stage: 'Design',
    detail: 'Learners apply STEM knowledge to design structured solutions.',
  },
  {
    stage: 'Build',
    detail: 'Learners develop prototypes in Maker Spaces, Prototyping Labs, and technology labs.',
  },
  {
    stage: 'Test and Improve',
    detail: 'Learners refine solutions through testing, data, and feedback.',
  },
  {
    stage: 'Present and Scale',
    detail:
      'Learners showcase innovations and progress into venture pathways, competitions, and implementation.',
  },
];

const platformsAndEnvironments = [
  'Maker Spaces and Prototyping Labs',
  'Drone and AI Labs',
  'Community Labs',
  'Innovation Showcases',
  'STEMpreneurship and venture pathways',
];

const entryPoints = [
  'STEMlens programs and school clubs',
  'Youth Innovation Challenge and innovation competitions',
  'Maker Spaces and applied innovation labs',
  'Community Labs and real-world projects',
  'STEMpreneurship and venture development pathways',
];

const ventureProgression = [
  'STEMlens Innovation Cup',
  'Accelerator and incubation pathways',
  'Mentorship and advanced development programs',
  'Real-world implementation and deployment',
];

const challengeAreas = [
  'Climate and environmental sustainability',
  'Food systems and agriculture',
  'Smart communities and infrastructure',
  'Digital inclusion and technology access',
  'Health, safety, and community development',
];

const collaborationPartners = [
  'STEM mentors and educators',
  'Industry and technology partners',
  'Universities and research institutions',
  'Government and development organizations',
];

const ecosystemAudience = [
  'STEMlens learners and innovation teams',
  'Secondary school, university, and adult learners',
  'Schools and partner institutions',
  'Youth innovators and aspiring entrepreneurs',
  'Organizations collaborating on innovation initiatives',
];

const outcomes = [
  'Experience developing real-world innovations',
  'Ability to design, prototype, and refine solutions',
  'Confidence presenting ideas and engaging stakeholders',
  'Preparation for engineering, innovation, and venture pathways',
];

const ctaActions = [
  'Join Innovation Programs',
  'Enter the Youth Innovation Challenge',
  'Partner With STEMlens',
  'Explore STEMlens Labs and Innovation Spaces',
];

export default function InnovationEcosystem() {
  return (
    <section
      id="innovation-ecosystem"
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
            Innovation Ecosystem
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#2F2F35] mb-5">
            A Complete Pathway from Ideas to Real-World Solutions and Ventures
          </h2>
          <p className="max-w-5xl text-base sm:text-lg text-[#4B5563] leading-relaxed mb-4">
            The STEMlens Innovation Ecosystem is a structured environment that supports learners in
            transforming ideas into real-world solutions, technologies, and scalable ventures. It
            provides the tools, mentorship, labs, and platforms needed to guide innovators from early
            exploration through prototyping, testing, and real-world implementation.
          </p>
          <p className="max-w-5xl text-base sm:text-lg text-[#4B5563] leading-relaxed">
            At STEMlens, innovation is a complete journey, from curiosity and learning to solution
            development, venture creation, and real-world impact.
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
            <Workflow className="w-5 h-5 text-[#0B1E3B]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-4">The Innovation Pipeline</h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            The STEMlens Innovation Ecosystem supports every stage of innovation:
          </p>
          <motion.div
            className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mb-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            {pipelineStages.map((item, index) => (
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
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            This pipeline mirrors real-world innovation, research, and venture development.
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
              <Wrench className="w-5 h-5 text-[#B72024]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-3">
              Innovation Platforms and Environments
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              The Innovation Ecosystem includes integrated platforms such as:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {platformsAndEnvironments.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              These environments allow learners to develop, test, and refine real solutions.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-[#0B1E3B]/15 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#0B1E3B]/10 border border-[#0B1E3B]/20 items-center justify-center mb-4">
              <Lightbulb className="w-5 h-5 text-[#0B1E3B]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-3">
              Entry Points into the Innovation Ecosystem
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Learners may enter the ecosystem through:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {entryPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Learners progress based on readiness, experience, and innovation goals.
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
              <Rocket className="w-5 h-5 text-[#2F2F35]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-3">
              Venture and Solution Development
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              The Innovation Ecosystem supports learners in developing scalable solutions and ventures.
              Promising innovations may progress into:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {ventureProgression.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Learners gain experience turning ideas into real-world solutions and ventures.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-[#EB3134]/20 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#EB3134]/10 border border-[#EB3134]/20 items-center justify-center mb-4">
              <Target className="w-5 h-5 text-[#B72024]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#B72024] mb-3">
              Real-World Problem Solving and Global Relevance
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Innovation at STEMlens focuses on solving challenges such as:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {challengeAreas.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Learners develop solutions with meaningful local and global impact.
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
            className="rounded-2xl border border-[#0B1E3B]/15 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#0B1E3B]/10 border border-[#0B1E3B]/20 items-center justify-center mb-4">
              <Handshake className="w-5 h-5 text-[#0B1E3B]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-3">
              Mentorship, Partnerships, and Collaboration
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              The Innovation Ecosystem connects learners with:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {collaborationPartners.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              The ecosystem also serves as a platform for partners and institutions to collaborate on
              innovation, research, and solution development.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-[#2F2F35]/15 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#2F2F35]/10 border border-[#2F2F35]/15 items-center justify-center mb-4">
              <FlaskConical className="w-5 h-5 text-[#2F2F35]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-3">
              Who the Innovation Ecosystem Supports
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              The STEMlens Innovation Ecosystem supports:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {ecosystemAudience.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Placement and progression are based on readiness and innovation goals.
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
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Outcomes and Impact</h3>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-4">
            Learners who participate gain:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-white/90 mb-4">
            {outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed">
            STEMlens develops innovators capable of creating solutions, launching ventures, and leading
            future innovation.
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
            Join the STEMlens Innovation Ecosystem
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
            Be part of a complete innovation pathway where ideas grow into real-world solutions and
            ventures.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {ctaActions.map((label) => (
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
