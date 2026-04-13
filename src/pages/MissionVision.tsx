import { motion } from 'framer-motion';
import {
  Target,
  Eye,
  Compass,
  Lightbulb,
  ShieldCheck,
  Users,
  HeartHandshake,
  Globe2,
} from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';

const values = [
  {
    title: 'Curiosity',
    description:
      'We encourage exploration, questioning, and lifelong learning because curiosity drives discovery.',
    Icon: Compass,
  },
  {
    title: 'Innovation with Purpose',
    description:
      'We design programs that solve real problems and create meaningful impact for people and communities.',
    Icon: Lightbulb,
  },
  {
    title: 'Integrity and Responsibility',
    description:
      'We promote ethical thinking, accountability, and responsible use of knowledge and technology.',
    Icon: ShieldCheck,
  },
  {
    title: 'Collaboration',
    description:
      'We value teamwork across disciplines and perspectives because stronger solutions are built together.',
    Icon: Users,
  },
  {
    title: 'Inclusion and Equity',
    description:
      'We believe every young person deserves access to high-quality STEM learning and opportunity.',
    Icon: HeartHandshake,
  },
  {
    title: 'Global Citizenship',
    description:
      'We prepare learners to understand global challenges and contribute responsibly in a connected world.',
    Icon: Globe2,
  },
];

const valueStyles = [
  {
    card: 'border-[#EB3134]/20 bg-[#FFF6F6]',
    iconWrap: 'border-[#EB3134]/20 bg-[#EB3134]/10',
    iconText: 'text-[#EB3134]',
    titleText: 'text-[#B72024]',
  },
  {
    card: 'border-[#0B1E3B]/20 bg-[#F4F8FF]',
    iconWrap: 'border-[#0B1E3B]/20 bg-[#0B1E3B]/10',
    iconText: 'text-[#0B1E3B]',
    titleText: 'text-[#0B1E3B]',
  },
  {
    card: 'border-[#2F2F35]/20 bg-[#F7F7F8]',
    iconWrap: 'border-[#2F2F35]/20 bg-[#2F2F35]/10',
    iconText: 'text-[#2F2F35]',
    titleText: 'text-[#2F2F35]',
  },
  {
    card: 'border-[#64646A]/25 bg-[#F6F6F8]',
    iconWrap: 'border-[#64646A]/25 bg-[#64646A]/10',
    iconText: 'text-[#64646A]',
    titleText: 'text-[#4E4E56]',
  },
  {
    card: 'border-[#0B1E3B]/20 bg-[#F4F8FF]',
    iconWrap: 'border-[#0B1E3B]/20 bg-[#0B1E3B]/10',
    iconText: 'text-[#0B1E3B]',
    titleText: 'text-[#0B1E3B]',
  },
  {
    card: 'border-[#EB3134]/20 bg-[#FFF6F6]',
    iconWrap: 'border-[#EB3134]/20 bg-[#EB3134]/10',
    iconText: 'text-[#EB3134]',
    titleText: 'text-[#B72024]',
  },
];

export default function MissionVision() {
  return (
    <section
      id="mission-vision"
      className="relative w-full min-h-screen bg-gradient-to-br from-white via-[#F8FAFC] to-[#F1F5F9] pt-28 pb-16 sm:pb-20 lg:pt-32 lg:pb-24"
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.header
          className="text-center mb-12 lg:mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <p className="inline-flex items-center rounded-full border border-[#EB3134]/25 bg-white/80 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-[0.08em] text-[#EB3134] uppercase mb-5">
            About STEMlens
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#0B1E3B] leading-tight mb-5">
            Mission, Vision &amp; Values
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-[#4B5563] leading-relaxed">
            The principles that guide how we teach, partner, and develop the next generation of innovators.
          </p>
        </motion.header>

        <motion.div
          className="grid gap-5 sm:gap-6 md:grid-cols-2 mb-8 lg:mb-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.article
            variants={fadeUp}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-lg border border-[#EB3134]/20 p-6 sm:p-7 lg:p-8"
          >
            <div className="inline-flex w-11 h-11 rounded-full bg-[#EB3134]/10 border border-[#EB3134]/20 items-center justify-center mb-4">
              <Target className="w-5 h-5 text-[#EB3134]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2F2F35] mb-3">Our Mission</h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3">
              Equip young people with strong STEM foundations, innovation capability, and leadership
              skills to solve real-world problems and advance sustainable development.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              We do not only teach technology. We prepare learners to apply it responsibly to improve
              lives and strengthen communities.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="bg-gradient-to-br from-[#2F2F35] to-[#0B1E3B] rounded-2xl shadow-lg border border-[#64646A]/35 p-6 sm:p-7 lg:p-8 text-white"
          >
            <div className="inline-flex w-11 h-11 rounded-full bg-white/20 items-center justify-center mb-4">
              <Eye className="w-5 h-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Our Vision</h2>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-3">
              A future where young people are confident problem-solvers, ethical innovators, and
              responsible global citizens.
            </p>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              We envision a generation prepared not just to participate in the future, but to shape it.
            </p>
          </motion.article>
        </motion.div>

        <motion.section
          className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-7 lg:p-8 mb-8 lg:mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-2">Our Values</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-6">
            These values guide our programs, partnerships, and leadership development.
          </p>

          <motion.div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
            {values.map((value, index) => {
              const Icon = value.Icon;
              const style = valueStyles[index % valueStyles.length];
              return (
                <motion.article
                  key={value.title}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className={`rounded-xl border p-4 sm:p-5 ${style.card}`}
                >
                  <div className={`inline-flex w-9 h-9 rounded-full items-center justify-center border mb-3 ${style.iconWrap}`}>
                    <Icon className={`w-4 h-4 ${style.iconText}`} />
                  </div>
                  <h4 className={`text-base sm:text-lg font-semibold mb-2 ${style.titleText}`}>{value.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </motion.section>

        <motion.article
          className="bg-gradient-to-br from-[#2F2F35] via-[#0B1E3B] to-[#EB3134] rounded-2xl shadow-xl border border-white/20 p-6 sm:p-7 lg:p-10 text-white"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Our Commitment</h3>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-4 max-w-4xl">
            STEMlens is committed to developing innovators who combine technical skill with ethical
            leadership, creativity, and social responsibility.
          </p>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-6 max-w-4xl">
            Through STEM education and innovation pathways, we empower young people to transform ideas
            into solutions and learning into lasting impact.
          </p>

          <motion.div className="flex flex-wrap gap-2" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
            <motion.span variants={fadeUp} className="px-3 py-1 rounded-full bg-[#EB3134]/25 border border-[#EB3134]/35 text-xs sm:text-sm">
              Education
            </motion.span>
            <motion.span variants={fadeUp} className="px-3 py-1 rounded-full bg-[#0B1E3B]/50 border border-[#93A8CC]/35 text-xs sm:text-sm">
              Innovation
            </motion.span>
            <motion.span variants={fadeUp} className="px-3 py-1 rounded-full bg-[#2F2F35]/45 border border-[#9B9BA1]/35 text-xs sm:text-sm">
              Digital Inclusion
            </motion.span>
            <motion.span variants={fadeUp} className="px-3 py-1 rounded-full bg-[#64646A]/35 border border-[#B5B5BC]/35 text-xs sm:text-sm">
              Climate Action
            </motion.span>
            <motion.span variants={fadeUp} className="px-3 py-1 rounded-full bg-[#EB3134]/25 border border-[#EB3134]/35 text-xs sm:text-sm">
              Sustainable Development
            </motion.span>
          </motion.div>
        </motion.article>
      </div>
    </section>
  );
}
