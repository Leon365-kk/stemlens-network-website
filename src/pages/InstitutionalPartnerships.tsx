import { motion } from 'framer-motion';
import {
  Building,
  Handshake,
  Users,
  Target,
  Globe,
  Award,
  TrendingUp,
  BarChart3,
} from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';

const partnershipEcosystem = [
  'Primary and secondary schools',
  'TVET institutions and technical training centers',
  'Universities and higher education institutions',
  'Industry and technology companies',
  'Research and innovation organizations',
  'Government and public sector institutions',
  'Global STEM, innovation, and education platforms',
];

const partnershipPathways = [
  'STEM education and innovation program implementation',
  'STEMlens Clubs and institutional innovation pathways',
  'Participation in Innovation Challenge and Innovation Cup',
  'Establishment of Maker Spaces, Prototyping Labs, and innovation environments',
  'Global competitions, exchanges, and innovation platforms',
  'Research, innovation, and capacity-building initiatives',
];

const capacityDevelopment = [
  'Establishment of STEM labs, Maker Spaces, and innovation environments',
  'Educator training and institutional support',
  'Innovation program implementation frameworks',
  'Access to tools, curriculum, and innovation guidance',
];

const institutionalBenefits = [
  'Structured STEM and innovation programs',
  'Hands-on learning and innovation infrastructure',
  'Mentorship and expert guidance',
  'Global innovation platforms and competitions',
  'Innovation showcases and leadership opportunities',
  'Pathways into advanced innovation, research, and venture development',
];

const industryCollaboration = [
  'Provide mentorship and expert guidance',
  'Support innovation and venture development',
  'Enable access to real-world technology environments',
  'Facilitate research and innovation collaboration',
  'Connect learners to real-world career and innovation pathways',
];

const globalPartnerships = [
  'Global innovation platforms and competitions',
  'International exchanges and collaboration programs',
  'Research and innovation initiatives',
  'Institutional and ecosystem development',
];

const partnershipOutcomes = [
  'Expanded access to STEM and innovation education',
  'Increased learner participation and innovation activity',
  'Stronger institutional innovation capability',
  'Access to global platforms and opportunities',
  'Development of real-world solutions and innovation pathways',
  'Strengthened institutional credibility and global engagement',
];

const eligiblePartners = [
  'Schools and education institutions',
  'TVET and technical training institutions',
  'Universities and academic institutions',
  'Industry and technology organizations',
  'Research and innovation institutions',
  'Governments and development organizations',
  'Global STEM and innovation platforms',
];

const actionButtons = [
  'Become a Partner',
  'Partner as a School, TVET, or University',
  'Partner as Industry or Technology Organization',
  'Partner as Global or Innovation Organization',
];

export default function InstitutionalPartnerships() {
  return (
    <section
      id="institutional-partnerships"
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
            Institutional Partnerships
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#2F2F35] mb-5">
            Collaborating to Build the Future of Innovation and STEM Education
          </h2>
          <p className="max-w-5xl text-base sm:text-lg text-[#4B5563] leading-relaxed mb-4">
            STEMlens Network partners with schools, TVET institutions, universities, industry, research organizations, governments, and global platforms to expand access to STEM education, innovation, and leadership development.
          </p>
          <p className="max-w-5xl text-base sm:text-lg text-[#4B5563] leading-relaxed mb-4">
            These partnerships enable learners and institutions to access real-world learning environments, innovation infrastructure, mentorship, and global opportunities.
          </p>
          <p className="max-w-5xl text-base sm:text-lg font-semibold text-[#0B1E3B] leading-relaxed">
            Institutional partnerships are central to the STEMlens mission of preparing future innovators, leaders, and problem-solvers.
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
            <Building className="w-5 h-5 text-[#0B1E3B]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-4">Our Partnership Ecosystem</h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            STEMlens collaborates with a diverse network of institutions, including:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
            {partnershipEcosystem.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            This ecosystem strengthens learning, innovation, and institutional capacity.
          </p>
        </motion.article>

        <motion.article
          className="rounded-2xl border border-[#EB3134]/20 bg-white p-6 sm:p-7 lg:p-8 shadow-sm mb-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="inline-flex w-11 h-11 rounded-full bg-[#EB3134]/10 border border-[#EB3134]/20 items-center justify-center mb-4">
            <Handshake className="w-5 h-5 text-[#B72024]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#2F2F35] mb-4">Partnership Pathways</h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            Institutions partner with STEMlens through structured collaboration pathways, including:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
            {partnershipPathways.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Partnerships are designed to create meaningful and sustainable impact.
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
            className="rounded-2xl border border-[#0B1E3B]/15 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#0B1E3B]/10 border border-[#0B1E3B]/20 items-center justify-center mb-4">
              <Target className="w-5 h-5 text-[#0B1E3B]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-3">Institutional Capacity and Infrastructure Development</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              STEMlens supports partner institutions in strengthening innovation capacity through:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {capacityDevelopment.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              This enables institutions to build long-term innovation capability.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-[#EB3134]/20 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#EB3134]/10 border border-[#EB3134]/20 items-center justify-center mb-4">
              <Award className="w-5 h-5 text-[#B72024]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-3">Value for Partner Institutions</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Partner institutions benefit from access to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {institutionalBenefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              This strengthens institutional capability and learner outcomes.
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
            className="rounded-2xl border border-[#0B1E3B]/15 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#0B1E3B]/10 border border-[#0B1E3B]/20 items-center justify-center mb-4">
              <Users className="w-5 h-5 text-[#0B1E3B]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-3">Industry, Research, and Innovation Collaboration</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              STEMlens works with industry, research, and innovation partners to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {industryCollaboration.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              This bridges education and real-world innovation ecosystems.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-[#EB3134]/20 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#EB3134]/10 border border-[#EB3134]/20 items-center justify-center mb-4">
              <Globe className="w-5 h-5 text-[#B72024]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-3">Global and Institutional Partnerships</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              STEMlens collaborates with global and institutional partners to expand access to international opportunities, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {globalPartnerships.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              This strengthens global engagement and institutional growth.
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
            <TrendingUp className="w-5 h-5 text-[#2F2F35]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#2F2F35] mb-3">Partnership Outcomes and Impact</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
            Institutional partnerships enable:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
            {partnershipOutcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Partnerships strengthen both learners and institutions.
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
            <Building className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Who Can Partner with STEMlens</h3>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-4">
            Partnership opportunities are open to:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-white/90 mb-4">
            {eligiblePartners.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed">
            Partnership pathways are tailored to institutional goals and capacity.
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
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-3">Start an Institutional Partnership</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
            STEMlens Network welcomes collaboration with institutions committed to advancing STEM education, innovation, and leadership development.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
            Partnership pathways are designed to create meaningful, measurable, and long-term impact for learners and institutions.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {actionButtons.map((label) => (
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
