import { motion } from 'framer-motion';
import {
  Globe2,
  Users2,
  GraduationCap,
  Network,
  Handshake,
  Milestone,
} from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';

const whyItMatters = [
  'Sustain lifelong relationships across the STEMlens ecosystem',
  'Support continued academic, professional, and innovation growth',
  'Connect alumni across disciplines, industries, and countries',
  'Amplify alumni leadership and innovation impact',
  'Create pathways for mentorship, collaboration, and leadership',
];

const alumniMembers = [
  'Graduates of STEMlens Clubs and Programs',
  'STEMlens Fellows, Scholars, and Ambassadors',
  'Former student leaders and global representatives',
  'Mentors, educators, and ecosystem contributors',
  'Innovation challenge, exchange, and program participants',
];

const alumniBenefits = [
  'Lifelong membership in the STEMlens global network',
  'Access to leadership, mentorship, and collaboration opportunities',
  'Continued access to innovation programs and global platforms',
  'Visibility and recognition within the STEMlens ecosystem',
];

const engagementPaths = [
  'Mentoring current learners and fellows',
  'Speaking at programs and innovation forums',
  'Collaborating on innovation, research, and startup initiatives',
  'Supporting scholarships and ecosystem development',
  'Representing STEMlens locally and globally',
];

const topCtaButtons = ['Join the Alumni Network', 'Update Alumni Profile', 'Become a Mentor'];
const bottomCtaButtons = ['Join the Alumni Network', 'Become a Mentor', 'Partner With STEMlens'];

export default function AlumniNetwork() {
  return (
    <section
      id="alumni-network"
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
            Community
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#0B1E3B] leading-tight mb-4">
            Alumni Network
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#2F2F35] mb-5">
            A Lifelong Global Community of Innovators and Leaders
          </h2>
          <p className="max-w-5xl text-base sm:text-lg text-[#4B5563] leading-relaxed mb-4">
            The STEMlens Alumni Network is a lifelong global community of innovators, leaders, mentors,
            and changemakers who have progressed through STEMlens programs and continue to create impact
            beyond them.
          </p>
          <p className="max-w-5xl text-base sm:text-lg text-[#4B5563] leading-relaxed mb-4">
            Alumni remain integral members of the STEMlens ecosystem, contributing their experience,
            leadership, and innovation to strengthen the community and inspire future generations.
          </p>
          <p className="max-w-5xl text-base sm:text-lg font-semibold text-[#0B1E3B] leading-relaxed mb-6">
            Once STEMlens, always STEMlens.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {topCtaButtons.map((label) => (
              <button
                key={label}
                type="button"
                className="inline-flex items-center justify-center rounded-xl border border-[#0B1E3B]/20 bg-white px-4 py-3 text-sm sm:text-base font-semibold text-[#0B1E3B] transition-all hover:border-[#EB3134]/35 hover:text-[#B72024] hover:bg-[#F8FAFC]"
              >
                {label}
              </button>
            ))}
          </div>
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
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-4">Why the Alumni Network Matters</h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            The STEMlens Alumni Network exists to:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
            {whyItMatters.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            A strong alumni network transforms individual journeys into global collective impact.
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
              <Users2 className="w-5 h-5 text-[#B72024]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-3">Who Is Part of the Alumni Network</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              The STEMlens Alumni Network includes:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {alumniMembers.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              STEMlens is committed to maintaining an inclusive and globally accessible alumni ecosystem.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-[#0B1E3B]/15 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#0B1E3B]/10 border border-[#0B1E3B]/20 items-center justify-center mb-4">
              <GraduationCap className="w-5 h-5 text-[#0B1E3B]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-3">What Alumni Gain</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Alumni remain connected to a trusted global innovation ecosystem. Benefits include:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {alumniBenefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Alumni membership continues regardless of location or career stage.
            </p>
          </motion.article>
        </motion.section>

        <motion.article
          className="rounded-2xl border border-[#2F2F35]/15 bg-white p-6 sm:p-7 lg:p-8 shadow-sm mb-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="inline-flex w-10 h-10 rounded-full bg-[#2F2F35]/10 border border-[#2F2F35]/15 items-center justify-center mb-4">
            <Handshake className="w-5 h-5 text-[#2F2F35]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#2F2F35] mb-3">Ways Alumni Stay Engaged</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
            Alumni contribute to and strengthen the STEMlens ecosystem by:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
            {engagementPaths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Alumni play a vital role in sustaining and expanding the ecosystem.
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
            <Milestone className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">A Lifelong Innovation and Leadership Journey</h3>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-4">
            STEMlens provides a continuous pathway of growth:
          </p>
          <p className="text-sm sm:text-base font-semibold text-white leading-relaxed mb-4">
            Learner -&gt; Innovator -&gt; Fellow -&gt; Leader -&gt; Mentor -&gt; Partner -&gt; Global Changemaker
          </p>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed">
            Alumni remain part of a lifelong global innovation network.
          </p>
        </motion.article>

        <motion.section
          className="bg-white rounded-2xl shadow-xl border border-[#EB3134]/20 p-6 sm:p-7 lg:p-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="inline-flex w-10 h-10 rounded-full bg-[#0B1E3B]/10 border border-[#0B1E3B]/20 items-center justify-center mb-4">
            <Network className="w-5 h-5 text-[#0B1E3B]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-3">Join the STEMlens Alumni Network</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
            Stay connected. Continue growing. Support future innovators.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {bottomCtaButtons.map((label) => (
              <button
                key={label}
                type="button"
                className="inline-flex items-center justify-center rounded-xl border border-[#0B1E3B]/20 bg-[#F8FAFC] px-4 py-3 text-sm sm:text-base font-semibold text-[#0B1E3B] transition-all hover:border-[#EB3134]/35 hover:text-[#B72024] hover:bg-white"
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
