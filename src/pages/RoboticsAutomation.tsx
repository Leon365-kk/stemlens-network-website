import { motion } from 'framer-motion';
import {
  Bot,
  Lightbulb,
  Wrench,
  Layers,
  Trophy,
  Workflow,
  Building2,
  Globe,
  Target,
  ArrowRight,
} from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';

const stemlensDifference = [
  'Hands-on robot building from beginner to advanced levels',
  'Real-world engineering and problem-solving experiences',
  'Preparation for national and international robotics competitions',
  'Integration with AI, IoT, automation, and smart systems',
  'Innovation-focused learning through challenges and projects',
  'Opportunities to participate in global STEM programs and exchanges',
];

const whatLearnersBuild = [
  'Line-following robots',
  'Obstacle-avoidance robots',
  'Autonomous navigation robots',
  'Smart automation systems',
  'Robotics engineering projects',
  'Competition robots',
  'Innovation-focused robotic solutions',
];

const technicalSkills = [
  'Robotics engineering fundamentals',
  'Programming and automation',
  'Sensors and intelligent systems',
  'Mechanical design and systems integration',
];

const innovationSkills = [
  'Engineering design thinking',
  'Creative problem-solving',
  'Solution development and prototyping',
];

const leadershipSkills = [
  'Critical thinking and logical reasoning',
  'Collaboration and teamwork',
  'Confidence and innovation mindset',
];

const competitions = [
  'RoboCup',
  'Robotex International',
  'MRC',
  'Inspire Robotics',
  'International Robotics Olympiad',
  'STEMlens Innovation Cup',
];

const learningPathway = [
  {
    stage: 'Explorer Level',
    detail: 'Introduction to robotics, building basic robots, and understanding core concepts.',
  },
  {
    stage: 'Builder Level',
    detail: 'Intermediate robotics, programming, sensors, and structured engineering projects.',
  },
  {
    stage: 'Innovator Level',
    detail: 'Advanced robotics systems, automation, and original robot design.',
  },
  {
    stage: 'Global Competitor Level',
    detail: 'Competition preparation, advanced engineering, and international robotics participation.',
  },
];

const whereLearningHappens = [
  'STEMlens School Clubs',
  'STEMlens Academy and Innovation Labs',
  'STEMlens Maker Space and Engineering Labs',
  'Holiday Programs and Bootcamps',
  'Competition Training Programs',
  'STEMlens Innovation Cup and Challenges',
  'Global STEM Exchange and STEM Odyssey Programs',
];

const realWorldApplications = [
  'Healthcare and medical robotics',
  'Agriculture and food systems',
  'Smart cities and infrastructure',
  'Environmental monitoring',
  'Industrial automation and manufacturing',
  'Disaster response and rescue',
  'Space robotics and exploration',
];

const outcomesPathways = [
  'Ability to design and build functional robotic systems',
  'Strong engineering and programming foundations',
  'Experience in competitions and innovation challenges',
  'Confidence to solve real-world problems',
  'Preparation for careers in robotics, engineering, AI, and technology',
  'A mindset of innovation, leadership, and global readiness',
];

const programFor = [
  'Primary and secondary school learners',
  'STEM clubs and institutions',
  'Beginners and advanced learners',
  'Students preparing for robotics competitions',
  'Future engineers, innovators, and technology leaders',
];

export default function RoboticsAutomation() {
  return (
    <section
      id="robotics-automation"
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
            Robotics &amp; Automation
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-[#2F2F35] mb-5">
            Where Future Engineers, Innovators, and Technology Leaders Are Built
          </h2>
          <p className="max-w-4xl text-base sm:text-lg text-[#4B5563] leading-relaxed">
            Robotics &amp; Automation at STEMlens introduces learners to the design, building, and
            programming of intelligent machines that interact with the world.
          </p>
          <p className="max-w-4xl text-base sm:text-lg text-[#4B5563] leading-relaxed mt-3">
            Learners build technical skills, creative confidence, and problem-solving mindset needed to
            create technology that solves real-world challenges.
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
            Learners are guided to think like engineers, innovators, and future technology leaders.
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
              <Bot className="w-5 h-5 text-[#0B1E3B]" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-4">What Learners Build</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {whatLearnersBuild.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              Each project strengthens technical skills, creativity, and confidence.
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
              <Wrench className="w-5 h-5 text-[#2F2F35]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-4">Skills Learners Develop</h3>
            <p className="text-sm sm:text-base font-semibold text-[#2F2F35] mb-2">Technical Skills</p>
            <motion.ul className="space-y-2 mb-4" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {technicalSkills.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base font-semibold text-[#2F2F35] mb-2">Innovation Skills</p>
            <motion.ul className="space-y-2 mb-4" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {innovationSkills.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base font-semibold text-[#2F2F35] mb-2">Leadership and Future Skills</p>
            <motion.ul className="space-y-2" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {leadershipSkills.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.article>
        </div>

        <motion.article
          className="bg-gradient-to-br from-[#2F2F35] via-[#0B1E3B] to-[#EB3134] rounded-2xl shadow-xl border border-white/20 p-6 sm:p-7 lg:p-8 text-white mb-8 lg:mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="inline-flex w-11 h-11 rounded-full bg-white/20 items-center justify-center mb-4">
            <Trophy className="w-5 h-5" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Global Competitions and Opportunities</h3>
          <motion.ul className="grid gap-3 sm:grid-cols-2 mb-5" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
            {competitions.map((item) => (
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
            Competitions build resilience, teamwork, innovation capability, and global confidence.
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
            This pathway ensures continuous skill development and long-term growth.
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
              <Building2 className="w-5 h-5 text-[#4E4E56]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#4E4E56] mb-4">Where Learning Happens</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {whereLearningHappens.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              Learners gain both technical expertise and global exposure.
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
              <Globe className="w-5 h-5 text-[#0B1E3B]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-4">Real-World Applications</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {realWorldApplications.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              Learners understand robotics as a tool for real global impact.
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
              <Layers className="w-5 h-5 text-[#2F2F35]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-4">Outcomes and Future Pathways</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {outcomesPathways.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              Learners move from learners to creators and future technology leaders.
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
              <Target className="w-5 h-5 text-[#2F2F35]" />
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
              No prior robotics experience is required at beginner levels.
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
          <h3 className="text-2xl sm:text-3xl font-bold text-[#B72024] mb-4">Start the Robotics Journey</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
            Join STEMlens and begin building the skills, confidence, and mindset to create the
            technologies of tomorrow.
          </p>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href="#join-program"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#EB3134] text-white text-sm font-semibold hover:bg-[#C72629] transition-colors"
            >
              Join a Program
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#start-club"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#0B1E3B] text-white text-sm font-semibold hover:bg-[#163766] transition-colors"
            >
              Start a STEMlens Club
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
              href="#prepare-competitions"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#64646A] text-white text-sm font-semibold hover:bg-[#54545A] transition-colors"
            >
              Prepare for Competitions
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
