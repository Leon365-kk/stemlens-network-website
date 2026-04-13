import { motion } from 'framer-motion';
import {
  Trophy,
  Globe,
  Users,
  Target,
  Award,
  TrendingUp,
} from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';

const competitionTypes = [
  'Robotics and automation competitions',
  'Engineering and innovation challenges',
  'Technology and digital innovation platforms',
  'National, regional, and international STEM competitions',
];

const skillsDeveloped = [
  'Engineering design and prototype development capability',
  'Robotics, AI, and digital innovation skills',
  'Structured problem-solving and systems thinking',
  'Technical presentation and communication skills',
];

const recognitionOpportunities = [
  'Awards and certificates',
  'Invitations to innovation showcases and global platforms',
  'Selection into advanced innovation programs',
  'Progression into accelerator and incubation pathways',
];

const institutionalImpact = [
  'Developing globally competitive innovators',
  'Supporting participation in international innovation platforms',
  'Strengthening partnerships with schools, universities, and institutions',
  'Building a culture of innovation, leadership, and excellence',
];

const pathwayConnections = [
  'STEMlens Innovation Challenge',
  'STEMlens Innovation Cup (flagship competition)',
  'Innovation Showcases and global platforms',
  'Accelerator and incubation programs',
];

const exploreButtons = [
  'View Global Participation',
  'View Innovation Outcomes',
  'Read Student and Innovator Stories',
  'Explore STEMlens Innovation Programs',
];

export default function CompetitionAchievements() {
  return (
    <section
      id="competition-achievements"
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
            Competition Achievements
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#2F2F35] mb-5">
            Representing Innovation, Excellence, and Global Participation
          </h2>
          <p className="max-w-5xl text-base sm:text-lg text-[#4B5563] leading-relaxed mb-4">
            STEMlens Network prepares and supports learners and innovators to participate in national, regional, and international STEM and innovation competitions. These platforms allow participants to apply their skills, present solutions, and engage with global innovation communities.
          </p>
          <p className="max-w-5xl text-base sm:text-lg font-semibold text-[#0B1E3B] leading-relaxed">
            Competition participation reflects the strength of STEMlens programs and the readiness of learners to operate at global standards.
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
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-4">National, Regional, and Global Competitions</h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            STEMlens innovators participate in recognized platforms including:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
            {competitionTypes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            These experiences expose learners to global standards and real innovation environments.
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
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-3">Preparing Competition-Ready Innovators</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Through STEMlens programs, learners develop:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {skillsDeveloped.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Learners gain both technical competence and innovation confidence.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-[#0B1E3B]/15 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#0B1E3B]/10 border border-[#0B1E3B]/20 items-center justify-center mb-4">
              <Award className="w-5 h-5 text-[#0B1E3B]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-3">Recognition and Advancement</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Competition participation provides meaningful opportunities, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {recognitionOpportunities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              These opportunities support long-term innovation growth.
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
            <Users className="w-5 h-5 text-[#2F2F35]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#2F2F35] mb-3">Institutional and Global Impact</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
            Competition participation strengthens STEMlens Network's role as a global STEM and innovation ecosystem by:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
            {institutionalImpact.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Our competition success builds institutional reputation and global recognition.
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
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Pathways Beyond Competition</h3>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-4">
            Competition participation connects directly to advanced STEMlens pathways, including:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-white/90 mb-4">
            {pathwayConnections.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed">
            Participants continue progressing as innovators, founders, and future leaders.
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
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-3">Explore STEMlens Competition Impact</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
            Discover our competition achievements and global participation stories.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
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
