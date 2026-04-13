import { motion } from 'framer-motion';
import {
  Code2,
  Workflow,
  Layers,
  Rocket,
  Award,
  Briefcase,
  Target,
  ArrowRight,
} from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';

const learnerExploreItems = [
  'Programming fundamentals and logical reasoning',
  'Algorithms and structured problem solving',
  'Application and web development concepts',
  'Digital system and solution design',
  'Data handling and basic software structures',
  'How software connects users, devices, and services',
];

const languagesTools = [
  'Visual programming platforms such as Scratch',
  'Python and modern programming environments',
  'Web and mobile application development tools',
  'Interactive and data-driven development platforms',
];

const howTaughtSteps = [
  'Identify real problems',
  'Design digital solutions and workflows',
  'Build applications step by step',
  'Test, debug, and improve functionality',
];

const learnerCreateItems = [
  'Mobile apps and interactive websites',
  'Games and simulations',
  'Intelligent tools and simple chatbots',
  'Data dashboards and digital tools',
  'Automation tools and early-stage product concepts',
];

const skillsOutcomes = [
  'Logical and computational thinking',
  'Structured problem solving',
  'Systems thinking and solution design',
  'Attention to detail and debugging skills',
  'Confidence building real digital systems',
];

const realWorldApplications = [
  'Digital platforms and applications',
  'Health and assistive technologies',
  'Smart and connected systems',
  'Environmental and sustainability tools',
];

const levelsProgression = [
  'Foundation Level (Ages 6-10) - Visual programming and logical thinking',
  'Intermediate Level (Ages 10-14) - Structured programming and application development',
  'Advanced Level (Ages 14-18+) - Software development and innovation projects',
];

const integratedPrograms = [
  'Artificial Intelligence and Machine Learning',
  'Robotics and Automation',
  'IoT and Smart Systems',
  'Cybersecurity and Data Science',
  'STEMpreneurship and product development',
];

const hackathonOutcomes = [
  'Design solutions to real-world problems',
  'Collaborate in teams',
  'Build and present digital products',
  'Receive mentorship and expert feedback',
];

const recognitionItems = [
  'Program completion certificates',
  'Project and innovation recognition',
  'Participation in showcases and competitions',
  'Opportunities to advance into specialized pathways',
];

const careerPathways = [
  'Software development and engineering',
  'Mobile and web development',
  'Data science and technology innovation',
  'Technology entrepreneurship',
];

const programFor = [
  'Primary and secondary school learners',
  'STEMlens club members and partner schools',
  'Individual learners and families',
  'Beginners and advanced learners',
];

const joinWays = [
  'STEMlens school clubs',
  'STEMlens center-based programs',
  'Holiday bootcamps and intensive sessions',
  'Advanced innovation pathways',
];

export default function CodingProgramming() {
  return (
    <section
      id="coding-programming"
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
            Coding &amp; Programming
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-[#2F2F35] mb-5">
            Building the Digital Systems That Power the Modern World
          </h2>
          <p className="max-w-4xl text-base sm:text-lg text-[#4B5563] leading-relaxed">
            Coding &amp; Programming at STEMlens equips learners to design, build, and understand digital
            systems powering today&apos;s world, from apps and websites to intelligent platforms and connected technologies.
          </p>
          <p className="max-w-4xl text-base sm:text-lg text-[#4B5563] leading-relaxed mt-3">
            Rather than memorizing syntax, learners build computational thinking, structured problem
            solving, and purposeful digital creation.
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
              <Code2 className="w-5 h-5 text-[#0B1E3B]" />
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
              Learners understand how software powers modern systems.
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
            <h3 className="text-xl sm:text-2xl font-bold text-[#B72024] mb-4">Languages, Tools, and Platforms</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {languagesTools.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              The focus is on transferable skills that apply across technologies.
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
          <h3 className="text-2xl sm:text-3xl font-bold text-[#2F2F35] mb-4">How Coding Is Taught</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
            Learning is practical and project-based.
          </p>
          <motion.ul className="grid gap-3 sm:grid-cols-2" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
            {howTaughtSteps.map((item) => (
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
            This mirrors real-world software development and builds confidence through creation.
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
            <h3 className="text-xl sm:text-2xl font-bold text-[#4E4E56] mb-4">What Learners Create</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {learnerCreateItems.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              Learners gain confidence turning ideas into working digital solutions.
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
              <Rocket className="w-5 h-5 text-[#0B1E3B]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-4">Skills and Learning Outcomes</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {skillsOutcomes.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              These skills support both academic success and innovation.
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
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-4">Real-World Applications</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {realWorldApplications.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              Coding becomes a tool for real-world impact.
            </p>
          </motion.article>

          <motion.article
            className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-7"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-4">Levels and Progression</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {levelsProgression.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              Learners progress based on readiness and skill development.
            </p>
          </motion.article>
        </div>

        <div className="grid gap-5 md:grid-cols-2 mb-8 lg:mb-10">
          <motion.article
            className="rounded-2xl border border-[#0B1E3B]/20 bg-[#F4F8FF] p-6 sm:p-7"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-4">Integration with STEMlens Innovation Pathways</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {integratedPrograms.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              Learners progress from coding to real-world innovation and solution building.
            </p>
          </motion.article>

          <motion.article
            className="rounded-2xl border border-[#2F2F35]/20 bg-[#F7F7F8] p-6 sm:p-7"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-4">Innovation Challenges and Hackathons</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {hackathonOutcomes.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              These experiences build technical and innovation capability.
            </p>
          </motion.article>
        </div>

        <div className="grid gap-5 md:grid-cols-2 mb-8 lg:mb-10">
          <motion.article
            className="rounded-2xl border border-[#EB3134]/20 bg-[#FFF6F6] p-6 sm:p-7"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#EB3134]/10 border border-[#EB3134]/20 items-center justify-center mb-4">
              <Award className="w-5 h-5 text-[#EB3134]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#B72024] mb-4">Certification and Recognition</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {recognitionItems.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              This supports learner growth and achievement.
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
              This provides clarity and direction for future careers.
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
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-4">Who This Program Is For</h3>
          <motion.ul className="grid gap-3 sm:grid-cols-2" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
            {programFor.map((item) => (
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
            Programs are delivered through classes, clubs, labs, and innovation pathways.
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
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Why Coding &amp; Programming Matters</h3>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-4 max-w-4xl">
            Software powers modern life, from communication and healthcare to artificial intelligence and
            global systems.
          </p>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-4xl">
            At STEMlens, learners do not just learn to code. They learn to design systems, solve real
            problems, and build technologies that serve people and communities.
          </p>
        </motion.article>

        <motion.article
          className="bg-white rounded-2xl shadow-xl border border-[#EB3134]/20 p-6 sm:p-7 lg:p-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-[#B72024] mb-4">Enroll in STEMlens Coding &amp; Programming</h3>
          <motion.ul className="grid gap-3 sm:grid-cols-2 mb-5" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
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
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
            Sign up to register interest. Our team will follow up with placement and next intake details.
          </p>

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
