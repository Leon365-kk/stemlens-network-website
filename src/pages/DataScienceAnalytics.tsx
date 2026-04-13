import { motion } from 'framer-motion';
import {
  BarChart3,
  Lightbulb,
  Database,
  Workflow,
  Layers,
  Briefcase,
  Target,
  ArrowRight,
} from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';

const stemlensDifference = [
  'Understanding how data is collected, organized, and analyzed',
  'Identifying patterns, trends, and relationships in data',
  'Applying data to solve real-world problems',
  'Integration with artificial intelligence, robotics, and smart systems',
  'Hands-on projects using real datasets and real-world scenarios',
  'Developing critical thinking and data-driven decision-making skills',
];

const learnerExploreItems = [
  'Understanding what data is and how it is used',
  'Collecting, organizing, and managing data',
  'Identifying patterns and trends',
  'Interpreting data to answer questions and guide decisions',
  'Understanding how data powers intelligent technologies',
];

const realWorldApplications = [
  'Environmental and climate data analysis',
  'Sensor and smart system data interpretation',
  'Technology and innovation project analysis',
  'Understanding patterns in systems and user behavior',
  'Using data to improve solutions and technologies',
];

const learningPathway = [
  {
    stage: 'Foundation Level',
    detail: 'Introduction to data concepts, patterns, and basic data interpretation.',
  },
  {
    stage: 'Intermediate Level',
    detail: 'Collecting, organizing, and analyzing structured datasets.',
  },
  {
    stage: 'Advanced Level',
    detail: 'Interpreting complex data and applying analytical techniques.',
  },
  {
    stage: 'Innovation and Applied Pathway',
    detail: 'Applying data science to real-world innovation, research, and technology projects.',
  },
];

const integrationPrograms = [
  'Artificial Intelligence and Machine Learning',
  'IoT and Smart Systems',
  'Robotics and Automation',
  'SpaceQuest and Earth observation technologies',
  'Environmental and Sustainability Innovation',
  'STEMpreneurship and innovation projects',
];

const skillsDeveloped = [
  'Data collection, organization, and analysis',
  'Identifying patterns and trends',
  'Analytical thinking and structured problem-solving',
  'Interpreting data to guide decision-making',
  'Applying data to real-world innovation challenges',
];

const futurePathways = [
  'Data Science and Analytics',
  'Artificial Intelligence and Machine Learning',
  'Technology and innovation careers',
  'Scientific research and engineering',
  'Smart systems and intelligent technologies',
];

const programFor = [
  'Primary and secondary school learners',
  'University students and young professionals',
  'Adult learners seeking to build data science and analytics skills',
  'STEMlens clubs and partner institutions',
  'Individuals interested in technology, innovation, and intelligent systems',
  'Future data scientists, engineers, and innovators',
];

const outcomesImpact = [
  'Ability to understand and analyze real-world data',
  'Strong analytical and critical thinking skills',
  'Confidence working with data and intelligent systems',
  'Understanding of how data powers modern technologies',
  'Preparation for advanced STEM, innovation, and technology pathways',
];

export default function DataScienceAnalytics() {
  return (
    <section
      id="data-science-analytics"
      className="relative w-full min-h-screen bg-gradient-to-br from-white via-[#F8FAFC] to-[#F1F5F9] pt-28 pb-16 sm:pb-20 lg:pt-32 lg:pb-24"
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.header
          className="mb-12 lg:mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <p className="inline-flex items-center rounded-full border border-[#EB3134]/25 bg-white/80 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-[0.08em] text-[#EB3134] uppercase mb-5">
            STEM Academy
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#0B1E3B] leading-tight mb-3">
            Data Science &amp; Analytics
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-[#2F2F35] mb-5">
            Understanding Data, Discovering Insights, and Shaping Intelligent Decisions
          </h2>
          <p className="max-w-4xl text-base sm:text-lg text-[#4B5563] leading-relaxed">
            Data Science &amp; Analytics at STEMlens equips learners to collect, analyze, and interpret
            data to uncover patterns, solve problems, and support innovation.
          </p>
          <p className="max-w-4xl text-base sm:text-lg text-[#4B5563] leading-relaxed mt-3">
            In today&apos;s world, data powers everything, from AI and smart systems to climate science,
            healthcare, and global innovation. Learners build analytical mindset and technical confidence.
          </p>
        </motion.header>

        <motion.article
          className="bg-white rounded-2xl shadow-xl border border-[#EB3134]/20 p-6 sm:p-7 lg:p-8 mb-8 lg:mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
        >
          <div className="inline-flex w-11 h-11 rounded-full bg-[#EB3134]/10 border border-[#EB3134]/20 items-center justify-center mb-4">
            <Lightbulb className="w-5 h-5 text-[#EB3134]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#B72024] mb-4">The STEMlens Difference</h3>
          <motion.ul className="grid gap-3 sm:grid-cols-2" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
            {stemlensDifference.map((item) => (
              <motion.li
                key={item}
                variants={fadeUp}
                className="rounded-xl border border-gray-200 bg-[#F8FAFC] px-4 py-3 text-sm sm:text-base text-gray-700 leading-relaxed"
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
            Learners gain both technical capability and analytical confidence.
          </p>
        </motion.article>

        <div className="grid gap-5 lg:grid-cols-2 mb-8 lg:mb-10">
          <motion.article
            className="bg-white rounded-2xl shadow-xl border border-[#0B1E3B]/20 p-6 sm:p-7"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="inline-flex w-11 h-11 rounded-full bg-[#0B1E3B]/10 border border-[#0B1E3B]/20 items-center justify-center mb-4">
              <Database className="w-5 h-5 text-[#0B1E3B]" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-4">What Learners Explore</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {learnerExploreItems.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.article>

          <motion.article
            className="rounded-2xl border border-[#2F2F35]/20 bg-[#F7F7F8] p-6 sm:p-7"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#2F2F35]/10 border border-[#2F2F35]/20 items-center justify-center mb-4">
              <BarChart3 className="w-5 h-5 text-[#2F2F35]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-4">Real-World Data Applications</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {realWorldApplications.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              Learners see how data supports intelligent decision-making and innovation.
            </p>
          </motion.article>
        </div>

        <motion.article
          className="bg-white rounded-2xl shadow-xl border border-[#0B1E3B]/20 p-6 sm:p-7 lg:p-8 mb-8 lg:mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="inline-flex w-10 h-10 rounded-full bg-[#0B1E3B]/10 border border-[#0B1E3B]/20 items-center justify-center mb-4">
            <Workflow className="w-5 h-5 text-[#0B1E3B]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-4">Structured Learning Pathway</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
            Placement is based on readiness, experience, and learning goals.
          </p>
          <motion.div className="grid gap-4 sm:grid-cols-2" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
            {learningPathway.map((pathway) => (
              <motion.article
                key={pathway.stage}
                variants={fadeUp}
                className="rounded-xl border border-gray-200 bg-[#F8FAFC] p-4 sm:p-5"
              >
                <h4 className="text-base sm:text-lg font-semibold text-[#0B1E3B] mb-2">{pathway.stage}</h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{pathway.detail}</p>
              </motion.article>
            ))}
          </motion.div>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
            This pathway supports school learners, university students, and adult learners building
            data science and analytics capability.
          </p>
        </motion.article>

        <div className="grid gap-5 md:grid-cols-2 mb-8 lg:mb-10">
          <motion.article
            className="rounded-2xl border border-[#64646A]/25 bg-[#F6F6F8] p-6 sm:p-7"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#64646A]/10 border border-[#64646A]/20 items-center justify-center mb-4">
              <Layers className="w-5 h-5 text-[#4E4E56]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#4E4E56] mb-4">Skills Learners Develop</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {skillsDeveloped.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              These skills are essential across modern STEM and technology fields.
            </p>
          </motion.article>

          <motion.article
            className="rounded-2xl border border-[#0B1E3B]/20 bg-[#F4F8FF] p-6 sm:p-7"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#0B1E3B]/10 border border-[#0B1E3B]/20 items-center justify-center mb-4">
              <Target className="w-5 h-5 text-[#0B1E3B]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-4">Integration with the STEMlens Innovation Ecosystem</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {integrationPrograms.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              Learners understand how data powers modern intelligent systems and innovation.
            </p>
          </motion.article>
        </div>

        <div className="grid gap-5 md:grid-cols-2 mb-8 lg:mb-10">
          <motion.article
            className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-7"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#2F2F35]/10 border border-[#2F2F35]/20 items-center justify-center mb-4">
              <Briefcase className="w-5 h-5 text-[#2F2F35]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-4">Future Pathways and Opportunities</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {futurePathways.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              Learners gain strong foundations for future data-driven careers and innovation pathways.
            </p>
          </motion.article>

          <motion.article
            className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-7"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-4">Who This Program Is For</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {programFor.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              No prior data science experience is required at beginner levels.
            </p>
          </motion.article>
        </div>

        <motion.article
          className="bg-gradient-to-br from-[#2F2F35] via-[#0B1E3B] to-[#EB3134] rounded-2xl shadow-xl border border-white/20 p-6 sm:p-7 lg:p-10 text-white mb-8 lg:mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Outcomes and Impact</h3>
          <motion.ul className="grid gap-3 sm:grid-cols-2 mb-5" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
            {outcomesImpact.map((item) => (
              <motion.li
                key={item}
                variants={fadeUp}
                className="rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm sm:text-base text-white/95 leading-relaxed"
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed">
            Today&apos;s learners become tomorrow&apos;s data scientists, innovators, and technology leaders.
          </p>
        </motion.article>

        <motion.article
          className="bg-white rounded-2xl shadow-xl border border-[#EB3134]/20 p-6 sm:p-7 lg:p-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-[#B72024] mb-4">Begin the Data Science &amp; Analytics Journey</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
            Join STEMlens Data Science &amp; Analytics and develop the skills to understand data, uncover
            insights, and shape the future through intelligent decision-making.
          </p>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href="#join-program"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#EB3134] text-white text-sm font-semibold hover:bg-[#C72629] transition-colors"
            >
              Join the Program
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#register-school"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#0B1E3B] text-white text-sm font-semibold hover:bg-[#163766] transition-colors"
            >
              Register Your School
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#partner-with-stemlens"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#2F2F35] text-white text-sm font-semibold hover:bg-[#3E3E46] transition-colors"
            >
              Partner With STEMlens
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#innovation-pathways"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#64646A] text-white text-sm font-semibold hover:bg-[#54545A] transition-colors"
            >
              Explore Innovation Pathways
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
