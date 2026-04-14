import { motion } from 'framer-motion';
import {
  Box,
  Lightbulb,
  Layers,
  Rocket,
  Briefcase,
  Target,
  ArrowRight,
} from 'lucide-react';
import labImage from '../../assets/asset_1.jpg';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';

const learnerExploreItems = [
  '3D modeling and digital product design',
  'Engineering design principles and real-world constraints',
  'Measurement, scale, proportion, and structural thinking',
  'Materials awareness and feasibility',
  'Iteration, testing, and design improvement',
  'Human-centered and ergonomic design',
];

const learnerCreateItems = [
  'Robot components and mechanical parts',
  'Product casings and device enclosures',
  'Smart device and IoT system housings',
  'Assistive technology and healthcare solutions',
  'Environmental and sustainability innovations',
  'Architectural and smart city models',
  'Aerospace and satellite design concepts',
];

const ageGroups = [
  {
    stage: 'Ages 7-10 (Foundations)',
    detail: 'Introduction to 3D thinking, basic modeling, and creative design.',
  },
  {
    stage: 'Ages 11-14 (Development)',
    detail: 'Engineering design principles, functional systems, and structured problem solving.',
  },
  {
    stage: 'Ages 15-18 (Advanced)',
    detail: 'Complex system design, innovation projects, and real-world engineering concepts.',
  },
  {
    stage: 'Advanced Learners (Innovation Pathways)',
    detail: 'Prototyping, product development, competitions, and early innovation ventures.',
  },
];

const skillsOutcomes = [
  'Spatial reasoning and engineering thinking',
  'Creative and technical problem solving',
  'Systems thinking and solution design',
  'Confidence designing and presenting ideas',
  'Resilience through testing, iteration, and improvement',
];

const integratedPrograms = [
  'Robotics and Automation',
  'Drone and Aerospace Systems',
  'IoT and Smart Systems',
  'SpaceQuest and satellite design',
  'STEMpreneurship and product development',
];

const careerPathways = [
  'Mechanical and Product Engineering',
  'Architecture and Built Environment Design',
  'Industrial and Product Design',
  'Aerospace and Hardware Innovation',
  'Manufacturing and Prototyping',
  'Technology and Innovation Entrepreneurship',
];

const joinWays = [
  'STEMlens Clubs in partner schools',
  'STEMlens Center-based programs (Nairobi)',
  'Holiday bootcamps and innovation workshops',
  'Personalized small-group and advanced pathways',
];

export default function ThreeDDesignEngineering() {
  return (
    <section
      id="3d-design-engineering"
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
            3D Design &amp; Engineering
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-[#2F2F35] mb-5">
            Turning Ideas into Real-World Inventions
          </h2>
          <p className="max-w-4xl text-base sm:text-lg text-[#4B5563] leading-relaxed">
            The STEMlens 3D Design &amp; Engineering program teaches learners how ideas move from
            imagination to real, testable solutions through modern engineering thinking and digital design tools.
          </p>
          <p className="max-w-4xl text-base sm:text-lg text-[#4B5563] leading-relaxed mt-3">
            At STEMlens, 3D design is more than software. It is a core innovation skill connecting
            creativity, engineering, and real-world problem solving.
          </p>
        </motion.header>

        <motion.article
          className="bg-white rounded-2xl shadow-xl border border-[#0B1E3B]/20 p-6 sm:p-7 lg:p-8 mb-8 lg:mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
        >
          <div className="inline-flex w-11 h-11 rounded-full bg-[#0B1E3B]/10 border border-[#0B1E3B]/20 items-center justify-center mb-4">
            <Lightbulb className="w-5 h-5 text-[#0B1E3B]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-4">What Learners Explore</h3>
          <motion.ul className="grid gap-3 sm:grid-cols-2" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
            {learnerExploreItems.map((item) => (
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
            Learners understand how real products and technologies move from concept to functional systems.
          </p>
        </motion.article>

        <div className="grid gap-5 lg:grid-cols-2 mb-8 lg:mb-10">
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
              <Box className="w-5 h-5 text-[#EB3134]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#B72024] mb-4">What Learners Create</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {learnerCreateItems.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              Where facilities allow, learners prototype designs using tools such as 3D printers,
              bridging digital design with physical creation.
            </p>
          </motion.article>

          <motion.div
            className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.figure variants={fadeUp} className="rounded-2xl overflow-hidden border border-[#0B1E3B]/20 bg-white shadow-md">
              <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <Box className="w-12 h-12 text-blue-600" />
              </div>
              <figcaption className="px-4 py-3 text-sm text-[#2F2F35] font-medium">3D Printer Prototyping Concepts</figcaption>
            </motion.figure>
            <motion.figure variants={fadeUp} className="rounded-2xl overflow-hidden border border-[#64646A]/20 bg-white shadow-md">
              <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                <Layers className="w-12 h-12 text-purple-600" />
              </div>
              <figcaption className="px-4 py-3 text-sm text-[#2F2F35] font-medium">3D Design and CAD Engineering Concepts</figcaption>
            </motion.figure>
            <motion.figure variants={fadeUp} className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md sm:col-span-2 lg:col-span-1">
              <img src={labImage} alt="Learners in an engineering and prototyping lab" className="w-full h-48 sm:h-56 object-cover" />
              <figcaption className="px-4 py-3 text-sm text-[#2F2F35] font-medium">Hands-On Engineering Lab Practice</figcaption>
            </motion.figure>
          </motion.div>
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
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
            Learners progress from foundational design skills to advanced engineering and innovation readiness.
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
            <h3 className="text-xl sm:text-2xl font-bold text-[#4E4E56] mb-4">Skills and Learning Outcomes</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {skillsOutcomes.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              Learners grow from technology users into confident technology creators.
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
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-4">Integration Across STEMlens Programs</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {integratedPrograms.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              Learners see how physical design connects with electronics, software, and intelligent systems.
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
            Learners gain early exposure to real engineering and innovation careers.
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
            The future depends on people who can design, build, and improve real technologies.
          </p>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-4xl">
            3D Design &amp; Engineering at STEMlens equips learners to turn ideas into real solutions,
            preparing them to become engineers, inventors, and innovators capable of shaping future systems.
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
