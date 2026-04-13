import { motion } from 'framer-motion';
import {
  PenTool,
  LayoutDashboard,
  Network,
  Workflow,
  Layers,
  Briefcase,
  Target,
  ArrowRight,
} from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';

const stemlensDifference = [
  'Designing and creating digital content and technology interfaces',
  'Understanding how digital platforms and systems function',
  'Creating visuals and media that support technology and innovation projects',
  'Exploring how humans interact with technology through digital interfaces',
  'Integrating digital media with robotics, AI, IoT, and innovation systems',
  'Developing both creative confidence and technical capability',
];

const createDesignItems = [
  'Digital graphics and visual communication tools',
  'Interactive presentations and multimedia content',
  'User interfaces for technology and innovation projects',
  'Digital dashboards and displays for smart systems',
  'Digital tools supporting robotics, IoT, and innovation solutions',
];

const realWorldInnovationItems = [
  'Websites, applications, and digital platforms',
  'User interfaces for smart devices and intelligent systems',
  'Digital communication and collaboration tools',
  'Technology visualization and system monitoring tools',
  'Digital tools used in science, engineering, and innovation',
];

const learningPathway = [
  {
    stage: 'Foundation Level',
    detail: 'Introduction to digital tools, media, and basic digital creation.',
  },
  {
    stage: 'Intermediate Level',
    detail: 'Designing structured digital content and technology-supported media.',
  },
  {
    stage: 'Advanced Level',
    detail: 'Creating digital interfaces, interactive media, and technology visualization tools.',
  },
  {
    stage: 'Innovation and Applied Pathway',
    detail: 'Developing digital solutions that support innovation, communication, and technology systems.',
  },
];

const integrationPrograms = [
  'Robotics and Automation',
  'Artificial Intelligence and Machine Learning',
  'Electronics and Embedded Systems',
  'IoT and Smart Systems',
  'STEMpreneurship and innovation projects',
  'Engineering Design and innovation challenges',
];

const skillsDeveloped = [
  'Digital content creation and visual design',
  'User interface and digital system design',
  'Digital communication and technology visualization',
  'Creative and technical problem-solving',
  'Technology-supported innovation and media development',
];

const futurePathways = [
  'Digital technology and interface design',
  'UI/UX and technology product design',
  'Digital media and technology communication',
  'Technology innovation and startup environments',
  'Interactive media and digital systems development',
];

const programFor = [
  'Primary and secondary school learners',
  'University students and young professionals',
  'Adult learners seeking digital technology skills',
  'STEMlens clubs and partner institutions',
  'Individuals interested in digital technology, media, and innovation',
  'Future digital creators, innovators, and technology leaders',
];

const outcomesImpact = [
  'Ability to design and create digital solutions and media',
  'Understanding of how digital systems and interfaces work',
  'Confidence using modern digital tools and platforms',
  'Strong creative and technical capability',
  'Preparation for advanced STEM, technology, and innovation pathways',
];

export default function DigitalTechnologiesMedia() {
  return (
    <section
      id="digital-tech-media"
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
            Digital Technologies &amp; Media
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-[#2F2F35] mb-5">
            Creating Digital Solutions, Interfaces, and Media for the Modern World
          </h2>
          <p className="max-w-4xl text-base sm:text-lg text-[#4B5563] leading-relaxed">
            Digital Technologies &amp; Media at STEMlens equips learners to design, create, and communicate
            using modern digital tools and technologies.
          </p>
          <p className="max-w-4xl text-base sm:text-lg text-[#4B5563] leading-relaxed mt-3">
            Learners move from consuming digital content to creating technology interfaces, communicating
            innovation, and building digital solutions.
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
            <PenTool className="w-5 h-5 text-[#EB3134]" />
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
            Learners move from digital consumers to digital creators.
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
              <LayoutDashboard className="w-5 h-5 text-[#0B1E3B]" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-4">What Learners Create and Design</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {createDesignItems.map((item) => (
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
              <Network className="w-5 h-5 text-[#2F2F35]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-4">Digital Technologies in Real-World Innovation</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {realWorldInnovationItems.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              Learners understand the role of digital technologies in powering modern systems and communication.
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
            digital technology capability.
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
              These skills are essential for modern innovation and technology fields.
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
              Learners develop digital skills essential for modern technology innovation.
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
              Learners gain strong foundations for future digital and technology careers.
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
              No prior experience is required at beginner levels.
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
            Today&apos;s learners become tomorrow&apos;s digital creators, innovators, and technology leaders.
          </p>
        </motion.article>

        <motion.article
          className="bg-white rounded-2xl shadow-xl border border-[#EB3134]/20 p-6 sm:p-7 lg:p-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-[#B72024] mb-4">Begin the Digital Technologies &amp; Media Journey</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
            Join STEMlens Digital Technologies &amp; Media and develop skills to create, innovate, and
            communicate in the digital world.
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
              Explore STEMlens Innovation Pathways
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
