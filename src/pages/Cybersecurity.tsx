import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Lock,
  Workflow,
  Layers,
  Briefcase,
  Target,
  ArrowRight,
} from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';

const learnerExploreItems = [
  'Digital safety and online security principles',
  'How data is stored, transmitted, and protected',
  'Common digital threats such as phishing and system vulnerabilities',
  'How secure systems are designed and maintained',
  'Ethical responsibility and safe technology use',
];

const howLearningHappens = [
  'Identify digital risks and vulnerabilities',
  'Understand how security breaches occur',
  'Design strategies to protect users and systems',
  'Apply ethical and responsible decision-making',
  'Explore how secure systems support communities and organizations',
];

const ageGroups = [
  {
    stage: 'Ages 7-10 (Foundations)',
    detail: 'Digital safety awareness, responsible technology use, and basic protection concepts.',
  },
  {
    stage: 'Ages 11-14 (Development)',
    detail: 'Understanding threats, vulnerabilities, and system protection strategies.',
  },
  {
    stage: 'Ages 15-18 (Advanced)',
    detail: 'Cybersecurity principles, system protection, and responsible digital innovation.',
  },
  {
    stage: 'Advanced Learners (Innovation Pathways)',
    detail: 'Applied cybersecurity projects, ethical security awareness, and system protection design.',
  },
];

const skillsOutcomes = [
  'Digital safety and threat awareness',
  'Critical thinking and risk evaluation',
  'Ethical technology use and responsibility',
  'Systems awareness and attention to detail',
  'Confidence navigating digital environments safely',
];

const integratedPrograms = [
  'Coding and Software Development',
  'Artificial Intelligence and Machine Learning',
  'IoT and Smart Systems',
  'Robotics and Automation',
  'STEMpreneurship and technology innovation',
];

const careerPathways = [
  'Cybersecurity and Information Security',
  'Digital Forensics',
  'Network and Systems Protection',
  'Software and Systems Security',
  'Technology and security innovation',
];

const joinWays = [
  'STEMlens Clubs in partner schools',
  'STEMlens Center-based programs (Nairobi)',
  'Holiday bootcamps and cybersecurity workshops',
  'Advanced and personalized innovation pathways',
];

export default function Cybersecurity() {
  return (
    <section
      id="cybersecurity"
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
            Cybersecurity
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-[#2F2F35] mb-5">
            Protecting Digital Systems and Building Responsible Technology Leaders
          </h2>
          <p className="max-w-4xl text-base sm:text-lg text-[#4B5563] leading-relaxed">
            The STEMlens Cybersecurity program introduces learners to the foundations of digital safety,
            system protection, and responsible technology use.
          </p>
          <p className="max-w-4xl text-base sm:text-lg text-[#4B5563] leading-relaxed mt-3">
            Learners understand how risks arise and how individuals and organizations safeguard data,
            devices, and networks through ethical and responsible digital behavior.
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
              <ShieldCheck className="w-5 h-5 text-[#0B1E3B]" />
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
              Learners gain clarity on both risks and how systems are protected.
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
              {howLearningHappens.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              This builds digital awareness, responsibility, and resilience.
            </p>
          </motion.article>
        </div>

        <motion.article
          className="bg-white rounded-2xl shadow-xl border border-[#2F2F35]/20 p-6 sm:p-7 lg:p-8 mb-8 lg:mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-[#2F2F35] mb-4">Age Groups and Progression</h3>
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
              <Layers className="w-5 h-5 text-[#4E4E56]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#4E4E56] mb-4">Skills and Learning Outcomes</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {skillsOutcomes.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              These skills prepare learners for secure participation in modern digital environments.
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
              <Lock className="w-5 h-5 text-[#0B1E3B]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-4">Integration Across STEMlens Programs</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {integratedPrograms.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              Learners understand how security underpins all modern technologies.
            </p>
          </motion.article>
        </div>

        <motion.article
          className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-7 lg:p-8 mb-8 lg:mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="inline-flex w-10 h-10 rounded-full bg-[#2F2F35]/10 border border-[#2F2F35]/20 items-center justify-center mb-4">
            <Briefcase className="w-5 h-5 text-[#2F2F35]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#2F2F35] mb-4">Career and Future Pathways</h3>
          <motion.ul className="grid gap-3 sm:grid-cols-2" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
            {careerPathways.map((item) => (
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
            Learners gain exposure to critical and fast-growing global careers.
          </p>
        </motion.article>

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
            Every modern system depends on cybersecurity for safety, trust, and reliability.
          </p>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-4xl">
            The STEMlens Cybersecurity program prepares learners to protect themselves, their communities,
            and the digital systems shaping the future.
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
