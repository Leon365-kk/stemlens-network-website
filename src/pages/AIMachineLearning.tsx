import { motion } from 'framer-motion';
import {
  Brain,
  Database,
  Cpu,
  Layers,
  Briefcase,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';

const learnerExploreItems = [
  'How intelligent systems use data to recognize patterns and make predictions',
  'How machine learning models learn, improve, and make decisions',
  'How AI powers robotics, smart devices, and real-world systems',
  'How to build and test simple AI-driven models and solutions',
  'How bias, data quality, and design affect system performance',
];

const learnerBuildItems = [
  'Simple prediction and classification models',
  'Data analysis and pattern recognition projects',
  'AI-powered tools and intelligent applications',
  'Smart automation and decision-support systems',
  'Early-stage intelligent product and innovation concepts',
];

const ageGroups = [
  {
    stage: 'Ages 9-12 (Foundations)',
    detail: 'Introduction to intelligent systems, data, and basic AI concepts.',
  },
  {
    stage: 'Ages 13-15 (Development)',
    detail: 'Machine learning principles, structured projects, and real-world applications.',
  },
  {
    stage: 'Ages 16-18 (Advanced)',
    detail: 'Advanced AI concepts, intelligent system design, and innovation projects.',
  },
  {
    stage: 'Advanced Learners (Innovation Pathways)',
    detail: 'AI-driven innovation, competitions, and early product development.',
  },
];

const skillsOutcomes = [
  'Data literacy and analytical thinking',
  'Logical reasoning and structured problem solving',
  'Understanding intelligent system behavior',
  'Responsible and ethical technology awareness',
  'Confidence working with emerging technologies',
];

const integratedPrograms = [
  'Robotics and Automation',
  'IoT and Smart Systems',
  'Coding and Software Development',
  'Data Science and Analytics',
  'STEMpreneurship and innovation pathways',
];

const careerPathways = [
  'Artificial Intelligence and Machine Learning',
  'Data Science and Analytics',
  'Robotics and Intelligent Systems',
  'Software and Systems Engineering',
  'Technology Innovation and Entrepreneurship',
];

const joinWays = [
  'STEMlens Clubs in partner schools',
  'STEMlens Center-based programs (Nairobi)',
  'Holiday bootcamps and innovation workshops',
  'Advanced and personalized innovation pathways',
];

const internetImages = [
  {
    src: 'https://images.pexels.com/photos/30879378/pexels-photo-30879378.jpeg?cs=srgb&dl=pexels-kenneth-chiamaka-ejiofor-2149965804-30879378.jpg&fm=jpg',
    alt: 'Black learners in a computer lab session',
  },
  {
    src: 'https://images.pexels.com/photos/5905838/pexels-photo-5905838.jpeg?cs=srgb&dl=pexels-katerina-holmes-5905838.jpg&fm=jpg',
    alt: 'Black student using a laptop in a classroom',
  },
  {
    src: 'https://images.pexels.com/photos/8438865/pexels-photo-8438865.jpeg?cs=srgb&dl=pexels-pavel-danilyuk-8438865.jpg&fm=jpg',
    alt: 'Robotic arm representing intelligent automation',
  },
];

export default function AIMachineLearning() {
  return (
    <section
      id="ai-machine-learning"
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
            AI &amp; Machine Learning
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-[#2F2F35] mb-5">
            Understanding Intelligent Systems and Shaping Responsible Technology
          </h2>
          <p className="max-w-4xl text-base sm:text-lg text-[#4B5563] leading-relaxed">
            The STEMlens AI &amp; Machine Learning program introduces learners to how intelligent systems
            work, how data drives decisions, and how technology can be designed responsibly to serve
            people and communities.
          </p>
          <p className="max-w-4xl text-base sm:text-lg text-[#4B5563] leading-relaxed mt-3">
            Learners explore AI as a practical, understandable, and human-centered field, building
            foundational skills and confidence as creators and responsible innovators.
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
              <Brain className="w-5 h-5 text-[#0B1E3B]" />
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
              Learners understand both how AI works and how it should be used responsibly.
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
              <Database className="w-5 h-5 text-[#EB3134]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#B72024] mb-4">What Learners Build</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {learnerBuildItems.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              This builds practical skills, confidence, and innovation readiness.
            </p>
          </motion.article>
        </div>

        <motion.section
          className="grid gap-4 sm:gap-5 md:grid-cols-3 mb-8 lg:mb-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {internetImages.map((image) => (
            <motion.figure
              key={image.src}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md"
            >
              <img src={image.src} alt={image.alt} className="w-full h-64 sm:h-72 object-cover" loading="lazy" />
            </motion.figure>
          ))}
        </motion.section>

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
              Learners grow from technology users into intelligent system creators.
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
              <Cpu className="w-5 h-5 text-[#0B1E3B]" />
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
              Learners understand how intelligent systems interact with real-world technologies.
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
            Learners gain early exposure to high-impact future careers.
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
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Why This Program Matters</h3>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-4 max-w-4xl">
            Artificial intelligence is transforming industries, economies, and societies.
          </p>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-4xl">
            At STEMlens, learners do not just learn how AI works. They learn how to apply it responsibly
            to solve real-world problems and build meaningful technologies, preparing them to become
            confident innovators and responsible leaders.
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
