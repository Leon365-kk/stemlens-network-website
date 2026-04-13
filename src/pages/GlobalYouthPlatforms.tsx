import { motion } from 'framer-motion';
import {
  Globe2,
  Users2,
  Link2,
  Presentation,
  Compass,
  Sparkles,
} from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';

const whyPlatformsMatter = [
  'Engage with peers across countries and cultures',
  'Understand global innovation and development systems',
  'Contribute ideas to international conversations',
  'Build networks that support future opportunities',
  'Develop a global mindset and leadership identity',
];

const globalConnections = [
  'Global youth forums and leadership platforms',
  'International innovation and STEM communities',
  'Youth representation and delegation opportunities',
  'Global innovation programs and summits',
];

const preparationCapabilities = [
  'Public speaking and presentation skills',
  'Cross-cultural communication competence',
  'Professional conduct and global etiquette',
  'Leadership and systems thinking capability',
];

const longTermPathways = [
  'International mentorship and fellowships',
  'Global academic and innovation pathways',
  'Leadership and exchange programs',
  'Participation in global innovation ecosystems',
];

const accessRoutes = [
  'STEMlens Clubs and Center programs',
  'Leadership and fellowship pathways',
  'Global exchanges and innovation programs',
  'International competitions and representation opportunities',
];

const ctaButtons = ['Sign Up', 'Register Interest', 'Partnership Enquiry'];

export default function GlobalYouthPlatforms() {
  return (
    <section
      id="global-youth-platforms"
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
            Global Youth Platforms
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#2F2F35] mb-5">
            Connecting Learners to the World
          </h2>
          <p className="max-w-5xl text-base sm:text-lg text-[#4B5563] leading-relaxed mb-4">
            STEMlens Network connects young people to leading global youth platforms where innovation,
            leadership, and international collaboration are shaping the future.
          </p>
          <p className="max-w-5xl text-base sm:text-lg text-[#4B5563] leading-relaxed mb-4">
            These platforms give learners exposure to global standards, networks, and opportunities,
            ensuring their ideas, skills, and voices extend beyond local boundaries.
          </p>
          <p className="max-w-5xl text-base sm:text-lg text-[#4B5563] leading-relaxed">
            Through global engagement, STEMlens prepares learners to participate confidently in
            international innovation and leadership spaces.
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
            <Globe2 className="w-5 h-5 text-[#0B1E3B]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-4">Why Global Youth Platforms Matter</h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            The future is global. Young people who engage internationally develop broader perspectives,
            stronger confidence, and greater leadership readiness.
          </p>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            Global platforms help learners:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
            {whyPlatformsMatter.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Learners are empowered to see themselves as global contributors.
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
              <Link2 className="w-5 h-5 text-[#B72024]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-3">
              How STEMlens Connects Learners Globally
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Through partnerships and institutional relationships, STEMlens enables learners to access:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {globalConnections.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Participation may include both virtual and in-person global engagements.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-[#0B1E3B]/15 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#0B1E3B]/10 border border-[#0B1E3B]/20 items-center justify-center mb-4">
              <Presentation className="w-5 h-5 text-[#0B1E3B]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-3">
              Preparing Learners for Global Participation
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              STEMlens prepares learners to engage professionally and confidently by developing:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {preparationCapabilities.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Learners are prepared not just to attend global platforms, but to contribute meaningfully.
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
              <Compass className="w-5 h-5 text-[#2F2F35]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-3">Long-Term Global Pathways</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Global engagement opens doors to future opportunities, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {longTermPathways.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              These experiences shape long-term academic, professional, and leadership journeys.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-[#EB3134]/20 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#EB3134]/10 border border-[#EB3134]/20 items-center justify-center mb-4">
              <Users2 className="w-5 h-5 text-[#B72024]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#B72024] mb-3">Why This Matters at STEMlens</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              At STEMlens, global engagement is part of developing future innovators and leaders. Learners
              move from local participation to global contribution, using STEM, innovation, and leadership
              to shape the future.
            </p>
          </motion.article>
        </motion.section>

        <motion.section
          className="bg-gradient-to-br from-[#2F2F35] via-[#0B1E3B] to-[#EB3134] rounded-2xl shadow-xl border border-white/20 p-6 sm:p-7 lg:p-10 text-white"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="inline-flex w-10 h-10 rounded-full bg-white/15 border border-white/20 items-center justify-center mb-4">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Join Global Youth Platform Opportunities</h3>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-4">
            Learners can access global platforms through:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-white/90 mb-5">
            {accessRoutes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-6">
            To enrol: Click Sign Up to register interest. Our team will follow up with upcoming global
            opportunities.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {ctaButtons.map((label) => (
              <button
                key={label}
                type="button"
                className="inline-flex items-center justify-center rounded-xl border border-white/35 bg-white/10 px-4 py-3 text-sm sm:text-base font-semibold text-white transition-all hover:bg-white hover:text-[#0B1E3B]"
              >
                {label}
              </button>
            ))}
          </div>
        </motion.section>
      </div>
    </section>
  );
}
