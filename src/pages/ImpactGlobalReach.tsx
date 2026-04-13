import { motion } from 'framer-motion';
import {
  BarChart3,
  School,
  Rocket,
  Globe2,
  GraduationCap,
  Handshake,
  Target,
} from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';

const practicePoints = [
  'Develop practical skills in robotics, programming, engineering, data science, and emerging technologies.',
  'Identify real challenges in schools and communities.',
  'Design, build, and refine solutions through guided innovation projects.',
  'Build confidence, teamwork, leadership, and problem-solving capability.',
];

const outcomeBlocks = [
  {
    title: 'Strengthening Schools and Educators',
    description:
      'STEMlens works with schools and educators to embed practical STEM learning in real classroom environments. This improves learner engagement and supports long-term capability development.',
    Icon: School,
  },
  {
    title: 'Innovation and Leadership Outcomes',
    description:
      'Learners progress from foundational STEM exposure to prototyping, innovation challenges, and accelerator pathways that build communication, design, and leadership skills.',
    Icon: Rocket,
  },
  {
    title: 'Geographic and Global Reach',
    description:
      'Based in Nairobi, STEMlens works with schools, institutions, and partners across Kenya and the wider region while connecting learners to global innovation ecosystems.',
    Icon: Globe2,
  },
  {
    title: 'Global Exposure and Engagement',
    description:
      'Through competitions, exchanges, and collaborative projects, learners gain global awareness and apply their skills in broader innovation and development contexts.',
    Icon: GraduationCap,
  },
  {
    title: 'Growing Through Strategic Partnerships',
    description:
      'Partnerships with schools, institutions, industry, and global collaborators expand access, strengthen innovation ecosystems, and keep programs relevant and inclusive.',
    Icon: Handshake,
  },
  {
    title: 'Alignment with Global Priorities',
    description:
      'Our programs support education, innovation, digital inclusion, climate resilience, and sustainable development through practical skill and capability building.',
    Icon: Target,
  },
];

const outcomeStyles = [
  {
    cardBorder: 'border-[#0B1E3B]/20',
    iconWrap: 'bg-[#0B1E3B]/10 border-[#0B1E3B]/20',
    iconText: 'text-[#0B1E3B]',
    titleText: 'text-[#0B1E3B]',
  },
  {
    cardBorder: 'border-[#EB3134]/25',
    iconWrap: 'bg-[#EB3134]/10 border-[#EB3134]/20',
    iconText: 'text-[#EB3134]',
    titleText: 'text-[#B72024]',
  },
  {
    cardBorder: 'border-[#2F2F35]/25',
    iconWrap: 'bg-[#2F2F35]/10 border-[#2F2F35]/20',
    iconText: 'text-[#2F2F35]',
    titleText: 'text-[#2F2F35]',
  },
  {
    cardBorder: 'border-[#64646A]/30',
    iconWrap: 'bg-[#64646A]/10 border-[#64646A]/25',
    iconText: 'text-[#64646A]',
    titleText: 'text-[#4E4E56]',
  },
  {
    cardBorder: 'border-[#0B1E3B]/20',
    iconWrap: 'bg-[#0B1E3B]/10 border-[#0B1E3B]/20',
    iconText: 'text-[#0B1E3B]',
    titleText: 'text-[#0B1E3B]',
  },
  {
    cardBorder: 'border-[#EB3134]/25',
    iconWrap: 'bg-[#EB3134]/10 border-[#EB3134]/20',
    iconText: 'text-[#EB3134]',
    titleText: 'text-[#B72024]',
  },
];

const focusAreas = [
  'Education',
  'Innovation',
  'Digital Inclusion',
  'Climate Resilience',
  'Technology Access',
  'Sustainable Development',
];

export default function ImpactGlobalReach() {
  return (
    <section
      id="impact-global"
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
            About STEMlens
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#0B1E3B] leading-tight mb-5">
            Impact &amp; Global Reach
          </h1>
          <p className="max-w-4xl text-base sm:text-lg text-[#4B5563] leading-relaxed">
            STEMlens transforms STEM learning into real capability, confidence, and innovation. Our
            impact is measured not only by participation, but by how learners think critically, design
            solutions, collaborate effectively, and apply skills to real-world challenges.
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
            <BarChart3 className="w-5 h-5 text-[#EB3134]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2F2F35] mb-3">Impact in Practice</h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
            STEMlens engages learners across primary, secondary, and early tertiary levels through school
            programs, innovation labs, clubs, and mentorship pathways.
          </p>
          <motion.ul className="grid gap-3 sm:grid-cols-2" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
            {practicePoints.map((point) => (
              <motion.li
                key={point}
                variants={fadeUp}
                className="rounded-xl border border-gray-200 bg-[#F8FAFC] px-4 py-3 text-sm sm:text-base text-gray-700 leading-relaxed"
              >
                {point}
              </motion.li>
            ))}
          </motion.ul>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
            Impact is reflected in how learners approach challenges, apply their skills, and grow into
            capable innovators.
          </p>
        </motion.article>

        <motion.section
          className="grid gap-4 sm:gap-5 md:grid-cols-2 mb-8 lg:mb-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {outcomeBlocks.map((block, index) => {
            const Icon = block.Icon;
            const style = outcomeStyles[index % outcomeStyles.length];
            return (
              <motion.article
                key={block.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className={`rounded-2xl border ${style.cardBorder} bg-[#F8FAFC] p-5 sm:p-6 lg:p-7 shadow-sm`}
              >
                <div className={`inline-flex w-10 h-10 rounded-full border ${style.iconWrap} items-center justify-center mb-3`}>
                  <Icon className={`w-4 h-4 ${style.iconText}`} />
                </div>
                <h3 className={`text-lg sm:text-xl font-bold mb-3 ${style.titleText}`}>{block.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{block.description}</p>
              </motion.article>
            );
          })}
        </motion.section>

        <motion.article
          className="bg-gradient-to-br from-[#2F2F35] via-[#0B1E3B] to-[#EB3134] rounded-2xl shadow-xl border border-white/20 p-6 sm:p-7 lg:p-10 text-white"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Our Definition of Impact</h3>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-4 max-w-4xl">
            At STEMlens, impact means transformation. It is seen in young people who develop the
            confidence to explore, the skills to innovate, and the leadership to create meaningful change
            in their communities and beyond.
          </p>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-6 max-w-4xl">
            STEMlens empowers learners not only to understand the future, but to help shape it.
          </p>

          <motion.div className="flex flex-wrap gap-2" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
            {focusAreas.map((area, index) => (
              <motion.span
                key={area}
                variants={fadeUp}
                whileHover={{ scale: 1.03 }}
                className={`px-3 py-1 rounded-full border text-xs sm:text-sm ${
                  index % 4 === 0
                    ? 'bg-[#EB3134]/25 border-[#EB3134]/35 text-white'
                    : index % 4 === 1
                      ? 'bg-[#0B1E3B]/50 border-[#93A8CC]/35 text-white'
                      : index % 4 === 2
                        ? 'bg-[#2F2F35]/45 border-[#9B9BA1]/35 text-white'
                        : 'bg-[#64646A]/35 border-[#B5B5BC]/35 text-white'
                }`}
              >
                {area}
              </motion.span>
            ))}
          </motion.div>
        </motion.article>
      </div>
    </section>
  );
}
