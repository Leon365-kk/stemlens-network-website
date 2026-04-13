import { motion } from 'framer-motion';
import {
  BarChart3,
  TrendingUp,
  Globe,
  Target,
  Award,
  Building,
  CheckCircle,
} from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';

const programOutputs = [
  'Number of learners and innovators trained and supported',
  'Number of schools, TVET institutions, and universities engaged',
  'Number of innovation programs, labs, and clubs implemented',
  'Number of innovation teams and individual participants',
];

const innovationOutcomes = [
  'Number of innovation projects and prototypes developed',
  'Number of projects presented in Innovation Showcases and Innovation Cup',
  'Number of innovations advancing into accelerator and incubation pathways',
  'Number of solutions progressing toward real-world implementation',
];

const innovationPipeline = [
  'STEMlens Innovation Challenge — Entry platform',
  'Innovation Showcases — Presentation and evaluation stage',
  'STEMlens Innovation Cup — Flagship elite competition',
  'Accelerator and Incubator Pathways — Advanced innovation development',
  'Real-world implementation and global innovation opportunities',
];

const globalParticipation = [
  'Number of national and international competitions participated in',
  'Number of learners representing STEMlens globally',
  'Number of global innovation programs and platforms engaged',
  'Number of countries represented through STEMlens participation',
];

const institutionalPartnerships = [
  'Number of partner schools, TVET institutions, and universities',
  'Number of institutional innovation programs implemented',
  'Number of industry, research, and innovation partnerships',
  'Number of collaborative innovation initiatives',
];

const evidenceSupport = [
  'Program participation and innovation records',
  'Innovation project documentation and prototype development',
  'Competition entries and global participation records',
  'Institutional partnerships and collaboration records',
];

const continuousGrowth = [
  'Long-term innovation and venture outcomes',
  'Global innovation participation and representation',
  'Institutional partnerships and ecosystem expansion',
  'Leadership and innovation progression pathways',
];

const exploreButtons = [
  'Explore Innovation Outcomes',
  'Read Student and Innovator Stories',
  'View Competition Achievements',
  'Explore Global Participation',
  'View Institutional Partnerships',
];

export default function ImpactDashboard() {
  return (
    <section
      id="impact-dashboard"
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
            Impact
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#0B1E3B] leading-tight mb-4">
            Impact Dashboard
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#2F2F35] mb-5">
            Measuring Innovation, Participation, and Global Engagement
          </h2>
          <p className="max-w-5xl text-base sm:text-lg text-[#4B5563] leading-relaxed mb-4">
            The STEMlens Impact Dashboard provides a measurable overview of our reach, innovation outcomes, and institutional growth across STEM education and innovation pathways.
          </p>
          <p className="max-w-5xl text-base sm:text-lg font-semibold text-[#0B1E3B] leading-relaxed mb-4">
            These indicators reflect STEMlens Network's commitment to developing innovators, strengthening institutions, and contributing to global innovation ecosystems.
          </p>
          <div className="inline-flex items-center rounded-lg bg-[#F8FAFC] border border-[#0B1E3B]/20 px-4 py-2 text-sm text-[#0B1E3B]">
            <CheckCircle className="w-4 h-4 mr-2 text-[#EB3134]" />
            Reporting Scope: This dashboard reflects cumulative outcomes across STEMlens programs, innovation platforms, and institutional partnerships, and is updated as programs expand and new innovation outcomes are achieved.
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
            <BarChart3 className="w-5 h-5 text-[#0B1E3B]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-4">Program Outputs: Building Innovation Capacity</h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            STEMlens delivers structured programs and innovation platforms that enable learners and institutions to engage in real-world STEM and innovation.
          </p>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            Key indicators include:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
            {programOutputs.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            These outputs reflect STEMlens' expanding innovation ecosystem.
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
              <Target className="w-5 h-5 text-[#B72024]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-3">Innovation Outcomes: Advancing Real-World Solutions</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              STEMlens supports innovators in developing practical technologies and solutions.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Key indicators include:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {innovationOutcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              These outcomes demonstrate applied innovation and solution development.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-[#0B1E3B]/15 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#0B1E3B]/10 border border-[#0B1E3B]/20 items-center justify-center mb-4">
              <TrendingUp className="w-5 h-5 text-[#0B1E3B]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-3">Impact Across the STEMlens Innovation Pipeline</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              STEMlens tracks innovation progression across all stages of development:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {innovationPipeline.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              This structured pipeline supports long-term innovation growth and leadership development.
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
            className="rounded-2xl border border-[#EB3134]/20 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#EB3134]/10 border border-[#EB3134]/20 items-center justify-center mb-4">
              <Globe className="w-5 h-5 text-[#B72024]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-3">Global Participation and Representation</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              STEMlens learners and innovators participate in global innovation platforms and international programs.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Key indicators include:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {globalParticipation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              These experiences connect learners to global innovation ecosystems.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-[#0B1E3B]/15 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#0B1E3B]/10 border border-[#0B1E3B]/20 items-center justify-center mb-4">
              <Building className="w-5 h-5 text-[#0B1E3B]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-3">Institutional Partnerships and Ecosystem Growth</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              STEMlens collaborates with institutions across education, research, and technology sectors.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Key indicators include:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {institutionalPartnerships.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              These partnerships strengthen institutional innovation capacity.
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
            <CheckCircle className="w-5 h-5 text-[#2F2F35]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#2F2F35] mb-3">Evidence and Impact Verification</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
            STEMlens impact data is supported by:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
            {evidenceSupport.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Detailed evidence is reflected across innovation outcomes, participant stories, and institutional programs.
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
            <Award className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Continuous Impact Tracking and Growth</h3>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-4">
            As STEMlens expands globally, the Impact Dashboard continues to grow to include:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-white/90 mb-4">
            {continuousGrowth.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed">
            STEMlens remains committed to measurable, real-world innovation impact.
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
            <BarChart3 className="w-5 h-5 text-[#0B1E3B]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-3">Explore STEMlens Impact</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
            Discover detailed insights into our innovation outcomes and global impact.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {exploreButtons.map((label) => (
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
