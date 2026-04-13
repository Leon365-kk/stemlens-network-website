import { motion } from 'framer-motion';
import {
  Users,
  Lightbulb,
  Target,
  Globe,
  Award,
  TrendingUp,
  BookOpen,
  Rocket,
} from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';

const learnerToInnovator = [
  'Designed and built engineering and technology prototypes',
  'Participated in national and international innovation competitions',
  'Presented solutions at innovation showcases and global platforms',
  'Progressed into advanced innovation and venture pathways',
  'Developed confidence as innovators, leaders, and problem-solvers',
];

const innovatorProfiles = [
  'Developed robotics, engineering, and digital innovation solutions',
  'Represented STEMlens in competitions and global innovation platforms',
  'Advanced into leadership, mentorship, and innovation roles',
  'Progressed through the STEMlens Innovation Challenge, Innovation Cup, and accelerator pathways',
];

const innovationAreas = [
  'Environmental sustainability and climate innovation',
  'Robotics, automation, and intelligent systems',
  'Smart devices and community-focused technology solutions',
  'Software applications and digital innovation platforms',
];

const ecosystemProgression = [
  'STEMlens Innovation Challenge — Entry and prototype development',
  'Innovation Showcases and STEMlens Innovation Cup — Advanced innovation platforms',
  'Maker Spaces, Prototyping Labs, and advanced innovation programs',
  'Accelerator and incubation pathways for solution advancement',
];

const globalExposure = [
  'Represented STEMlens in international competitions and innovation platforms',
  'Presented innovations to global audiences and stakeholders',
  'Participated in exchange, mentorship, and leadership programs',
  'Built global networks and collaboration opportunities',
];

const leadershipDevelopment = [
  'Technical and engineering capability',
  'Innovation and structured problem-solving skills',
  'Leadership and professional communication skills',
  'Confidence to pursue global innovation opportunities',
];

const storyShowcases = [
  'Innovation project profiles and solution highlights',
  'Competition participation and global representation',
  'Innovation showcase presentations and exhibitions',
  'Individual innovation journeys and achievements',
];

const actionButtons = [
  'Join STEMlens Programs',
  'Explore the STEMlens Innovation Challenge',
  'View Innovation Outcomes',
  'Explore the STEMlens Innovation Ecosystem',
];

export default function StudentStories() {
  return (
    <section
      id="student-stories"
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
            Student and Innovator Stories
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#2F2F35] mb-5">
            Real Journeys, Real Innovations, Real Impact
          </h2>
          <p className="max-w-5xl text-base sm:text-lg text-[#4B5563] leading-relaxed mb-4">
            STEMlens Network supports learners and innovators as they develop skills, build solutions, and progress into global innovation and leadership pathways. Student and Innovator Stories highlight the journeys, achievements, and innovation outcomes of individuals who have participated in STEMlens programs.
          </p>
          <p className="max-w-5xl text-base sm:text-lg font-semibold text-[#0B1E3B] leading-relaxed">
            These stories demonstrate how STEM education and structured innovation pathways translate into real-world capability, confidence, and opportunity.
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
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-4">From Learners to Innovators</h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            STEMlens innovators progress from early STEM learning to developing real-world solutions and innovation capability.
          </p>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            Participants have:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
            {learnerToInnovator.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            These journeys reflect real transformation through innovation.
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
            <Lightbulb className="w-5 h-5 text-[#B72024]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#2F2F35] mb-4">Featured Innovator Profiles</h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            STEMlens innovators come from diverse backgrounds and institutions, including schools, TVETs, universities, and independent innovation teams.
          </p>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            Featured innovator stories highlight individuals who have:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
            {innovatorProfiles.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Each story reflects a unique innovation journey and achievement.
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
              <Target className="w-5 h-5 text-[#0B1E3B]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-3">Innovation in Action</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              STEMlens innovators develop solutions addressing real-world challenges, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {innovationAreas.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              These innovations demonstrate the practical application of STEM knowledge.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-[#EB3134]/20 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#EB3134]/10 border border-[#EB3134]/20 items-center justify-center mb-4">
              <BookOpen className="w-5 h-5 text-[#B72024]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-3">Progression Through the STEMlens Innovation Ecosystem</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Student and innovator stories reflect progression through structured STEMlens pathways, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {ecosystemProgression.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Participants grow through structured innovation and leadership pathways.
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
              <Globe className="w-5 h-5 text-[#0B1E3B]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-3">Global Exposure and Opportunity</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              STEMlens innovators gain opportunities to participate in global innovation environments.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Participants have:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {globalExposure.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              These experiences expand global readiness and leadership capability.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-[#EB3134]/20 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#EB3134]/10 border border-[#EB3134]/20 items-center justify-center mb-4">
              <Award className="w-5 h-5 text-[#B72024]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-3">Long-Term Innovation and Leadership Development</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              STEMlens innovators continue advancing in STEM, engineering, and innovation pathways.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Participants develop:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {leadershipDevelopment.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              These outcomes reflect long-term innovation and leadership development.
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
            <TrendingUp className="w-5 h-5 text-[#2F2F35]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#2F2F35] mb-3">Stories and Innovation Showcases</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
            Student and innovator stories include:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
            {storyShowcases.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            These stories demonstrate the real-world impact of STEMlens programs.
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
            <Rocket className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Begin Your Innovation Journey</h3>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-4">
            Join STEMlens and become part of a global community of innovators and future leaders.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 mb-4">
            <div className="rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-sm sm:text-base">
              Real-world innovation experience
            </div>
            <div className="rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-sm sm:text-base">
              Global competition opportunities
            </div>
            <div className="rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-sm sm:text-base">
              Leadership and skill development
            </div>
            <div className="rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-sm sm:text-base">
              Innovation ecosystem access
            </div>
          </div>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed">
            Start your journey from learner to innovator and join a community of changemakers.
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
            <Users className="w-5 h-5 text-[#0B1E3B]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-3">Join the Innovation Community</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
            Discover how you can become part of STEMlens and start your innovation journey.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
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
