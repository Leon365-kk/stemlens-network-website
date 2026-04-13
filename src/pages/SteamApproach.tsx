import { motion } from 'framer-motion';
import {
  Atom,
  SearchCode,
  Cpu,
  Palette,
  Trophy,
  Compass,
  Rocket,
} from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';

const approachBlocks = [
  {
    title: 'Problem-Centered Learning',
    description:
      'Programs begin with real challenges, not predefined answers. Learners investigate issues in their schools and communities and build practical solutions.',
    outcome: 'Outcome: stronger critical thinking, systems awareness, and confidence.',
    Icon: SearchCode,
  },
  {
    title: 'Advanced Technologies as Innovation Tools',
    description:
      'Learners use programming, robotics, AI, data science, cybersecurity, drones, and smart systems as tools for analysis, design, and experimentation.',
    outcome: 'Outcome: deeper technical fluency and real innovation practice.',
    Icon: Cpu,
  },
  {
    title: 'Creativity and Human-Centered Design',
    description:
      'Our STEAM model blends engineering with design thinking, storytelling, creative coding, and science communication to produce useful and human-centered solutions.',
    outcome: 'Outcome: solutions that work technically and communicate clearly.',
    Icon: Palette,
  },
  {
    title: 'Applied Learning Beyond the Classroom',
    description:
      'Competitions, engineering challenges, strategic games like chess, and performance activities help learners apply STEM concepts in dynamic real contexts.',
    outcome: 'Outcome: resilience, teamwork, leadership, and strategic thinking.',
    Icon: Trophy,
  },
  {
    title: 'Building Identity, Confidence, and Direction',
    description:
      'Early exposure to emerging technologies helps learners identify strengths, understand future pathways, and make informed academic and career choices.',
    outcome: 'Outcome: STEM becomes part of who learners are, not just what they study.',
    Icon: Compass,
  },
];

const approachStyles = [
  {
    cardBorder: 'border-[#0B1E3B]/20',
    iconWrap: 'bg-[#0B1E3B]/10 border-[#0B1E3B]/20',
    iconText: 'text-[#0B1E3B]',
    titleText: 'text-[#0B1E3B]',
    outcomeText: 'text-[#0B1E3B]',
  },
  {
    cardBorder: 'border-[#EB3134]/25',
    iconWrap: 'bg-[#EB3134]/10 border-[#EB3134]/20',
    iconText: 'text-[#EB3134]',
    titleText: 'text-[#B72024]',
    outcomeText: 'text-[#B72024]',
  },
  {
    cardBorder: 'border-[#2F2F35]/25',
    iconWrap: 'bg-[#2F2F35]/10 border-[#2F2F35]/20',
    iconText: 'text-[#2F2F35]',
    titleText: 'text-[#2F2F35]',
    outcomeText: 'text-[#2F2F35]',
  },
  {
    cardBorder: 'border-[#64646A]/30',
    iconWrap: 'bg-[#64646A]/10 border-[#64646A]/25',
    iconText: 'text-[#64646A]',
    titleText: 'text-[#4E4E56]',
    outcomeText: 'text-[#4E4E56]',
  },
  {
    cardBorder: 'border-[#EB3134]/25',
    iconWrap: 'bg-[#EB3134]/10 border-[#EB3134]/20',
    iconText: 'text-[#EB3134]',
    titleText: 'text-[#B72024]',
    outcomeText: 'text-[#B72024]',
  },
];

export default function SteamApproach() {
  return (
    <section
      id="steam-approach"
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
            Our Approach to STEAM
          </h1>
          <p className="max-w-3xl text-base sm:text-lg text-[#4B5563] leading-relaxed">
            At STEMlens, STEM is not just a set of subjects. It is a way to understand systems,
            ask better questions, and design solutions for real challenges.
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
            <Atom className="w-5 h-5 text-[#EB3134]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2F2F35] mb-3">Our STEM Philosophy</h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3">
            Young people learn best when science, technology, engineering, and mathematics connect to
            real life. We do not teach isolated concepts. We teach how problems emerge, how systems
            interact, and how solutions are designed, tested, and improved.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Our goal is to develop thinkers, innovators, and leaders, not only learners.
          </p>
        </motion.article>

        <motion.section
          className="grid gap-4 sm:gap-5 md:grid-cols-2 mb-8 lg:mb-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {approachBlocks.map((block, index) => {
            const Icon = block.Icon;
            const style = approachStyles[index % approachStyles.length];
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
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3">{block.description}</p>
                <p className={`text-sm font-semibold ${style.outcomeText}`}>{block.outcome}</p>
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
          <div className="inline-flex w-11 h-11 rounded-full bg-white/20 items-center justify-center mb-4">
            <Rocket className="w-5 h-5" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">From Learning to Innovation and Leadership</h3>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-4 max-w-4xl">
            At its core, STEMlens is about transformation. We help learners observe challenges,
            think critically, design solutions, collaborate effectively, and own the impact of their ideas.
          </p>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-4xl">
            This prepares young people not only for academic success, but for leadership, innovation,
            and meaningful participation in shaping the future.
          </p>
        </motion.article>
      </div>
    </section>
  );
}
