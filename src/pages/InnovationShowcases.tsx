import { motion } from 'framer-motion';
import {
  Presentation,
  Lightbulb,
  Users2,
  Mic2,
  Trophy,
  Sparkles,
  Globe2,
} from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';

const showcasePurpose = [
  'Present projects, prototypes, and research developed through STEMlens programs and labs',
  'Share ideas with peers, educators, and industry experts',
  'Receive feedback from professionals and innovation partners',
  'Build confidence and professional presentation skills',
];

const featuredInnovations = [
  'Robotics and intelligent systems',
  'AI and digital technology solutions',
  'Environmental and sustainability innovations',
  'Smart community and infrastructure solutions',
  'Research and youth-led innovation insights',
];

const attendees = [
  'Schools and educators',
  'Universities and research institutions',
  'Industry and technology partners',
  'Government and development organizations',
  'Families, communities, and the public',
];

const learnerSkills = [
  'Public speaking and presentation skills',
  'Confidence presenting ideas and innovations',
  'Professional communication and engagement',
  'Ability to explain complex solutions clearly',
];

const progressionPathways = [
  'STEMlens Innovation Cup and innovation challenges',
  'Prototyping Labs and STEMpreneurship pathways',
  'Mentorship, incubation, and accelerator programs',
  'National and international competitions and exchanges',
  'Real-world implementation and venture development',
];

const ctaActions = [
  'Present Your Innovation',
  'Register Your School',
  'Partner With STEMlens',
  'Explore STEMlens Innovation Programs',
];

export default function InnovationShowcases() {
  return (
    <section
      id="innovation-showcases"
      className="relative w-full min-h-screen bg-gradient-to-br from-white via-[#F8FAFC] to-[#F1F5F9] pt-28 pb-16 sm:pb-20 lg:pt-32 lg:pb-24"
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.header
          className="mb-10 lg:mb-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <p className="inline-flex items-center rounded-full border border-[#EB3134]/25 bg-white/80 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-[0.08em] text-[#EB3134] uppercase mb-5">
            Innovation
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#0B1E3B] leading-tight mb-4">
            Innovation Showcases
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#2F2F35] mb-5">
            Presenting Ideas, Solutions, and Future Innovators
          </h2>
          <p className="max-w-5xl text-base sm:text-lg text-[#4B5563] leading-relaxed mb-4">
            Innovation Showcases at STEMlens Network provide a platform for learners to present their
            ideas, projects, and solutions to real audiences. These showcases celebrate creativity,
            technical achievement, and innovation while giving learners real-world experience presenting
            and defending their work.
          </p>
          <p className="max-w-5xl text-base sm:text-lg text-[#4B5563] leading-relaxed">
            Innovation Showcases serve as key milestones in the STEMlens innovation pathway, transforming
            learning into visible achievement and real opportunity.
          </p>
        </motion.header>

        <motion.article
          className="bg-white rounded-2xl shadow-xl border border-[#0B1E3B]/15 p-6 sm:p-7 lg:p-8 mb-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="inline-flex w-11 h-11 rounded-full bg-[#0B1E3B]/10 border border-[#0B1E3B]/20 items-center justify-center mb-4">
            <Presentation className="w-5 h-5 text-[#0B1E3B]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-4">Purpose of Innovation Showcases</h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            Innovation Showcases allow learners to:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
            {showcasePurpose.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Learners experience how innovation is shared in real-world environments.
          </p>
        </motion.article>

        <motion.section
          className="grid gap-6 md:grid-cols-2 mb-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-[#EB3134]/20 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#EB3134]/10 border border-[#EB3134]/20 items-center justify-center mb-4">
              <Lightbulb className="w-5 h-5 text-[#B72024]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-3">What Is Featured</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Showcases highlight a wide range of learner innovations, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {featuredInnovations.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Projects reflect both technical capability and real-world relevance.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-[#0B1E3B]/15 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#0B1E3B]/10 border border-[#0B1E3B]/20 items-center justify-center mb-4">
              <Users2 className="w-5 h-5 text-[#0B1E3B]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-3">Who Attends</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Innovation Showcases bring together:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {attendees.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              These showcases serve as platforms for partners and stakeholders to discover emerging
              youth innovation and solutions.
            </p>
          </motion.article>
        </motion.section>

        <motion.section
          className="grid gap-6 md:grid-cols-2 mb-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-[#2F2F35]/15 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#2F2F35]/10 border border-[#2F2F35]/15 items-center justify-center mb-4">
              <Mic2 className="w-5 h-5 text-[#2F2F35]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-3">Skills Learners Develop</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Through Innovation Showcases, learners build:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {learnerSkills.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Learners develop the confidence to present as innovators and future leaders.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-[#EB3134]/20 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#EB3134]/10 border border-[#EB3134]/20 items-center justify-center mb-4">
              <Trophy className="w-5 h-5 text-[#B72024]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#B72024] mb-3">
              Recognition and Innovation Pathways
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Outstanding projects may progress into:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {progressionPathways.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Innovation continues beyond presentation into real-world impact.
            </p>
          </motion.article>
        </motion.section>

        <motion.article
          className="rounded-2xl border border-[#0B1E3B]/15 bg-white p-6 sm:p-7 lg:p-8 shadow-sm mb-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="inline-flex w-10 h-10 rounded-full bg-[#0B1E3B]/10 border border-[#0B1E3B]/20 items-center justify-center mb-4">
            <Globe2 className="w-5 h-5 text-[#0B1E3B]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-3">Building a Culture of Innovation</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
            Innovation Showcases create a culture where ideas are valued, shared, and developed. They
            position learners not just as students, but as innovators presenting solutions to real
            audiences.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Showcases are held throughout the year at STEMlens centers, partner institutions, and major
            innovation events.
          </p>
        </motion.article>

        <motion.article
          className="bg-gradient-to-br from-[#2F2F35] via-[#0B1E3B] to-[#EB3134] rounded-2xl shadow-xl border border-white/20 p-6 sm:p-7 lg:p-10 text-white mb-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="inline-flex w-10 h-10 rounded-full bg-white/15 border border-white/20 items-center justify-center mb-4">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Why Innovation Showcases Matter</h3>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-4 max-w-5xl">
            At STEMlens, innovation is not hidden in classrooms. Innovation Showcases bring ideas into
            the public space, connecting learners with real-world networks, opportunities, and pathways.
          </p>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-5xl">
            They prepare learners for leadership, entrepreneurship, and participation in global innovation
            ecosystems.
          </p>
        </motion.article>

        <motion.section
          className="bg-white rounded-2xl shadow-xl border border-[#EB3134]/20 p-6 sm:p-7 lg:p-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-3">
            Participate in STEMlens Innovation Showcases
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {ctaActions.map((action) => (
              <button
                key={action}
                type="button"
                className="inline-flex items-center justify-center rounded-xl border border-[#0B1E3B]/20 bg-[#F8FAFC] px-4 py-3 text-sm sm:text-base font-semibold text-[#0B1E3B] transition-all hover:border-[#EB3134]/35 hover:text-[#B72024] hover:bg-white"
              >
                {action}
              </button>
            ))}
          </div>
        </motion.section>
      </div>
    </section>
  );
}
