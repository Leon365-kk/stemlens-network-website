import { motion } from 'framer-motion';
import {
  Rocket,
  Lightbulb,
  Orbit,
  Telescope,
  Link,
  Workflow,
  Globe,
  Layers,
  Target,
  ArrowRight,
} from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';

const stemlensDifference = [
  'Exposure to satellites, Earth observation, and space technologies',
  'Understanding how space science supports climate monitoring, agriculture, and global systems',
  'Integration with robotics, artificial intelligence, drones, and smart systems',
  'Participation in innovation challenges and STEMlens competitions',
  'Exposure to global STEM ecosystems through STEM Odyssey and international programs',
  'Development of scientific thinking, curiosity, and innovation mindset',
];

const learnerExploreItems = [
  'The solar system, planets, stars, and galaxies',
  'Satellites and how they orbit and support life on Earth',
  'Space missions and how they are designed',
  'Earth observation and space data systems',
  'How space science connects to real-world technologies',
];

const handsOnItems = [
  'Analyzing satellite imagery and Earth observation data',
  'Exploring simulation tools used in space science',
  'Understanding satellite communication and navigation systems',
  'Learning basic rocketry and propulsion concepts',
  'Interpreting real-world scientific data',
];

const integrationPrograms = [
  'Robotics and Automation',
  'Artificial Intelligence and Machine Learning',
  'Drone Technology and Remote Sensing',
  'IoT and Smart Systems',
  'Environmental and Sustainability Innovation',
  'STEMlens Innovation Cup and Global Challenges',
];

const learningPathway = [
  {
    stage: 'Junior Explorers (Ages 5-10)',
    detail: 'Introduction to space science, planets, and basic astronomy concepts.',
  },
  {
    stage: 'Space Discovery (Ages 11-14)',
    detail: 'Understanding satellites, Earth observation, and space systems.',
  },
  {
    stage: 'Space Innovators (Ages 15-18)',
    detail: 'Exploring space data, remote sensing, and scientific analysis.',
  },
  {
    stage: 'Future Space Leaders (Advanced Track)',
    detail: 'Advanced exploration, innovation challenges, and future technology pathways.',
  },
];

const globalExposureItems = [
  'Global space science initiatives and technologies',
  'Satellite systems and Earth observation tools',
  'Innovation challenges connected to real-world problems',
  'STEM Odyssey global exposure and learning experiences',
];

const scientificSkills = [
  'Scientific inquiry and reasoning',
  'Data interpretation and observation',
  'Systems thinking and analytical mindset',
];

const technologySkills = [
  'Understanding space technologies and satellite systems',
  'Connecting science to real-world applications',
  'Problem-solving and innovation thinking',
];

const leadershipSkills = [
  'Curiosity and exploration mindset',
  'Confidence engaging with advanced scientific ideas',
  'Readiness for future STEM and innovation pathways',
];

const outcomesImpact = [
  'Strong foundations in space science and scientific thinking',
  'Understanding of how space technologies support life on Earth',
  'Exposure to real-world space technologies and innovation',
  'Preparation for future pathways in aerospace, engineering, and technology',
  'Confidence to explore, innovate, and solve global challenges',
];

const programFor = [
  'Primary and secondary school learners',
  'STEMlens clubs and partner schools',
  'Individual learners and families',
  'Learners curious about science, space, and exploration',
  'Future innovators, engineers, and scientific leaders',
];

export default function SpaceQuest() {
  return (
    <section
      id="spacequest"
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
            SpaceQuest
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-[#2F2F35] mb-5">
            Exploring Space, Understanding Earth, and Inspiring Future Innovators
          </h2>
          <p className="max-w-4xl text-base sm:text-lg text-[#4B5563] leading-relaxed">
            SpaceQuest introduces learners to space science, astronomy, and space technologies through
            curiosity-driven exploration and real-world connections.
          </p>
          <p className="max-w-4xl text-base sm:text-lg text-[#4B5563] leading-relaxed mt-3">
            At STEMlens, learners build scientific thinking, engineering awareness, and data analysis
            while understanding how space technologies shape life on Earth.
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
          <h3 className="text-2xl sm:text-3xl font-bold text-[#B72024] mb-4">The STEMlens SpaceQuest Difference</h3>
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
            SpaceQuest transforms curiosity about the universe into the capability to shape the future.
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
              <Orbit className="w-5 h-5 text-[#0B1E3B]" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-4">What Learners Explore</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {learnerExploreItems.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              This builds scientific understanding, systems thinking, and technological awareness.
            </p>
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
              <Telescope className="w-5 h-5 text-[#2F2F35]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-4">Hands-On Exploration and Space Technology Exposure</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {handsOnItems.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              These experiences connect science to real innovation and global technology.
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
            <Link className="w-5 h-5 text-[#0B1E3B]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-4">Integration with the STEMlens Innovation Ecosystem</h3>
          <motion.ul className="grid gap-3 sm:grid-cols-2" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
            {integrationPrograms.map((item) => (
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
            This integrated ecosystem helps learners understand how technologies work together to solve real-world problems.
          </p>
        </motion.article>

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
            This pathway ensures continuous growth from curiosity to capability.
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
              <Globe className="w-5 h-5 text-[#4E4E56]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#4E4E56] mb-4">Global Exposure and Future Pathways</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {globalExposureItems.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              Learners begin to see themselves as part of the future of global science and technology.
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
              <Layers className="w-5 h-5 text-[#0B1E3B]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-4">Skills Learners Develop</h3>
            <p className="text-sm sm:text-base font-semibold text-[#0B1E3B] mb-2">Scientific and Analytical Skills</p>
            <motion.ul className="space-y-2 mb-4" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {scientificSkills.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base font-semibold text-[#0B1E3B] mb-2">Technology and Innovation Skills</p>
            <motion.ul className="space-y-2 mb-4" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {technologySkills.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base font-semibold text-[#0B1E3B] mb-2">Leadership and Future Skills</p>
            <motion.ul className="space-y-2" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {leadershipSkills.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
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
              <Target className="w-5 h-5 text-[#2F2F35]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-4">Outcomes and Impact</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {outcomesImpact.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              Today&apos;s SpaceQuest learners become tomorrow&apos;s space scientists, engineers, and innovators.
            </p>
          </motion.article>

          <motion.article
            className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-7"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#2F2F35]/10 border border-[#2F2F35]/20 items-center justify-center mb-4">
              <Rocket className="w-5 h-5 text-[#2F2F35]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-4">Who This Program Is For</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {programFor.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              No prior space science experience is required at beginner levels.
            </p>
          </motion.article>
        </div>

        <motion.article
          className="bg-white rounded-2xl shadow-xl border border-[#EB3134]/20 p-6 sm:p-7 lg:p-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-[#B72024] mb-4">Begin the SpaceQuest Journey</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
            Join STEMlens SpaceQuest and explore the science, technology, and innovation shaping the future of Earth and beyond.
          </p>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href="#join-spacequest"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#EB3134] text-white text-sm font-semibold hover:bg-[#C72629] transition-colors"
            >
              Join SpaceQuest
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
              href="#explore-programs"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#64646A] text-white text-sm font-semibold hover:bg-[#54545A] transition-colors"
            >
              Explore STEMlens Programs
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
