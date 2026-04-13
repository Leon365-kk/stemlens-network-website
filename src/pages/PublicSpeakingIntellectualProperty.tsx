import { motion } from 'framer-motion';
import {
  Lightbulb,
  Database,
  Workflow,
  Target,
  Layers,
  Link,
  BarChart3,
  Briefcase,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';

const learnerExploreItems = [
  'Public speaking and confident self-expression',
  'Structuring ideas clearly and logically',
  'Presenting technical and creative work to diverse audiences',
  'Fundamentals of intellectual property and idea ownership',
  'Ethical sharing, attribution, and collaboration',
];

const learningHappensItems = [
  'Present projects and ideas regularly',
  'Practice storytelling and audience engagement',
  'Receive structured feedback and coaching',
  'Improve presentation skills through guided practice',
  'Develop confidence communicating in academic and innovation environments',
];

const pitchingItems = [
  'Pitch ideas and innovation solutions clearly',
  'Explain technical concepts to different audiences',
  'Present prototypes and engineering projects',
  'Communicate purpose, impact, and feasibility',
];

const ipItems = [
  'What intellectual property is and why it matters',
  'How inventions, designs, and creative work are protected',
  'Responsible sharing and collaboration practices',
  'Respect for originality and ownership',
];

const ageGroups = [
  {
    stage: 'Ages 7-10 (Foundations)',
    detail: 'Confidence building, basic presentation skills, and expressing ideas clearly.',
  },
  {
    stage: 'Ages 11-14 (Development)',
    detail: 'Structured presentations, storytelling, and introduction to intellectual ownership.',
  },
  {
    stage: 'Ages 15-18 (Advanced)',
    detail: 'Professional presentation skills, pitching ideas, and understanding innovation ownership.',
  },
  {
    stage: 'Advanced Learners (Innovation Pathways)',
    detail: 'Pitching innovations, presenting prototypes, and participating in showcases and accelerator pathways.',
  },
];

const showcasesItems = [
  'Innovation challenges and project presentations',
  'STEMlens showcases and exhibitions',
  'Pitch sessions and innovation presentations',
  'Demonstrations to peers, educators, and partners',
];

const presentationFormats = [
  'Innovation pitch presentations',
  'Project demonstrations and technical briefings',
  'Visual presentation and storytelling formats',
  'Structured innovation and solution presentations',
];

const integrationPrograms = [
  'Robotics and Automation',
  'Artificial Intelligence and Machine Learning',
  'IoT and Smart Systems',
  'ArtScience and Creative Innovation',
  'STEMpreneurship programs',
  'STEMlens Accelerator and Incubator pathways',
];

const skillsOutcomes = [
  'Confident public speaking and communication',
  'Clear explanation of technical and creative ideas',
  'Leadership confidence and professional presence',
  'Ethical awareness and intellectual responsibility',
  'Confidence presenting innovations and solutions',
];

const careerPathways = [
  'Entrepreneurship and Innovation',
  'Science and Technology Communication',
  'Research and Academic Leadership',
  'Engineering and Technology Development',
  'Business, Policy, and Leadership',
];

const joinWays = [
  'STEMlens Clubs in partner schools',
  'STEMlens Center-based programs (Nairobi)',
  'Holiday bootcamps and leadership workshops',
  'Advanced and personalized innovation pathways',
];

export default function PublicSpeakingIntellectualProperty() {
  return (
    <section
      id="public-speaking-ip"
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
            Public Speaking and Intellectual Property
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-[#2F2F35] mb-5">
            Communicating Ideas with Confidence and Protecting Innovation
          </h2>
          <p className="max-w-4xl text-base sm:text-lg text-[#4B5563] leading-relaxed">
            The STEMlens Public Speaking and Intellectual Property program equips learners with
            communication skills, confidence, and awareness needed to present ideas clearly and protect
            innovations responsibly.
          </p>
          <p className="max-w-4xl text-base sm:text-lg text-[#4B5563] leading-relaxed mt-3">
            At STEMlens, communication and intellectual awareness are essential leadership and innovation skills.
          </p>
        </motion.header>

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
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              The focus is on clarity, confidence, and responsible innovation.
            </p>
          </motion.article>

          <motion.article
            className="rounded-2xl border border-[#EB3134]/20 bg-[#FFF6F6] p-6 sm:p-7"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#EB3134]/10 border border-[#EB3134]/20 items-center justify-center mb-4">
              <Workflow className="w-5 h-5 text-[#EB3134]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#B72024] mb-4">How Learning Happens</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {learningHappensItems.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              Communication becomes a natural part of innovation and leadership.
            </p>
          </motion.article>
        </div>

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
          <h3 className="text-2xl sm:text-3xl font-bold text-[#B72024] mb-4">Pitching and Innovation Communication</h3>
          <motion.ul className="grid gap-3 sm:grid-cols-2" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
            {pitchingItems.map((item) => (
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
            This prepares learners to participate confidently in innovation challenges, showcases, and accelerator pathways.
          </p>
        </motion.article>

        <div className="grid gap-5 lg:grid-cols-2 mb-8 lg:mb-10">
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
              <ShieldCheck className="w-5 h-5 text-[#2F2F35]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-4">Understanding Intellectual Property</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {ipItems.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              This builds awareness of innovation responsibility and ethical practice.
            </p>
          </motion.article>

          <motion.article
            className="rounded-2xl border border-[#0B1E3B]/20 bg-[#F4F8FF] p-6 sm:p-7"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#0B1E3B]/10 border border-[#0B1E3B]/20 items-center justify-center mb-4">
              <Target className="w-5 h-5 text-[#0B1E3B]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-4">Innovation Showcases and Pitch Opportunities</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {showcasesItems.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              These experiences build real-world confidence and leadership presence.
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
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-4">Age Groups and Progression</h3>
          <motion.div className="grid gap-4 sm:grid-cols-2" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
            {ageGroups.map((group) => (
              <motion.article
                key={group.stage}
                variants={fadeUp}
                className="rounded-xl border border-gray-200 bg-[#F8FAFC] p-4 sm:p-5"
              >
                <h4 className="text-base sm:text-lg font-semibold text-[#0B1E3B] mb-2">{group.stage}</h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{group.detail}</p>
              </motion.article>
            ))}
          </motion.div>
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
              <BarChart3 className="w-5 h-5 text-[#4E4E56]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#4E4E56] mb-4">Professional Presentation Formats</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {presentationFormats.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              This prepares learners for academic, professional, and innovation environments.
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
              <Link className="w-5 h-5 text-[#0B1E3B]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-4">Integration Across STEMlens Programs</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {integrationPrograms.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              Learners consistently present, explain, and refine their innovations.
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
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-4">Skills and Learning Outcomes</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {skillsOutcomes.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              These skills support success across academic, innovation, and leadership pathways.
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
              <Briefcase className="w-5 h-5 text-[#2F2F35]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-4">Career and Future Pathways</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {careerPathways.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              Communication and intellectual awareness strengthen all career pathways.
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
          <div className="inline-flex w-11 h-11 rounded-full bg-white/20 items-center justify-center mb-4">
            <Target className="w-5 h-5" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Why This Program Matters</h3>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-4 max-w-4xl">
            Innovation requires more than technical ability. It requires confidence to communicate ideas
            and responsibility to protect them.
          </p>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-4xl">
            The STEMlens Public Speaking and Intellectual Property program prepares learners to become
            confident communicators, responsible innovators, and future leaders.
          </p>
        </motion.article>

        <motion.article
          className="bg-white rounded-2xl shadow-xl border border-[#EB3134]/20 p-6 sm:p-7 lg:p-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-[#B72024] mb-4">How to Join</h3>
          <motion.ul className="grid gap-3 sm:grid-cols-2 mb-6" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
            {joinWays.map((item) => (
              <motion.li
                key={item}
                variants={fadeUp}
                className="rounded-xl border border-gray-200 bg-[#F8FAFC] px-4 py-3 text-sm sm:text-base text-gray-700 leading-relaxed"
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#register-interest"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#EB3134] text-white text-sm sm:text-base font-semibold hover:bg-[#C72629] transition-colors"
            >
              Sign Up / Register Interest
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#school-partnership-enquiry"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#0B1E3B] text-white text-sm sm:text-base font-semibold hover:bg-[#163766] transition-colors"
            >
              School Partnership Enquiry
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
