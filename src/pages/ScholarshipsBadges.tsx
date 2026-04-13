import { motion } from 'framer-motion';
import {
  Award,
  Handshake,
  BadgeCheck,
  Layers,
  Users2,
  Milestone,
  Globe2,
  Sparkles,
} from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';
import ApplicationForm from '../components/ApplicationForm';

const topButtons = [
  'Apply for Scholarship',
  'View Badge Requirements',
  'Check Eligibility'
];

const sponsorButtons = [
  'Sponsor a Scholarship',
  'Partner with STEMlens'
];

const scholarshipSupport = [
  'STEMlens Clubs and Programs',
  'Mentorship and Fellowship pathways',
  'Innovation camps, competitions, and global opportunities',
  'Access to tools, resources, and innovation kits',
];

const scholarshipTypes = [
  'Merit Scholarships - recognizing excellence and innovation',
  'Access Scholarships - supporting learners facing financial barriers',
  'Leadership Scholarships - for emerging leaders',
  'Impact Scholarships - recognizing meaningful contribution',
  'Global Opportunity Scholarships - supporting international participation',
];

const badgeBenefits = [
  'Build verified innovation portfolios',
  'Showcase skills and achievements',
  'Strengthen university and career applications',
  'Demonstrate leadership and readiness',
];

const badgeLevels = [
  'Foundation - participation and foundational skills',
  'Intermediate - applied skills and project engagement',
  'Advanced - leadership and innovation capability',
  'Excellence - outstanding achievement and ecosystem leadership',
];

const whoCanApply = [
  'STEMlens club members',
  'Mentorship and fellowship participants',
  'Secondary school, TVET, and university students',
  'STEMlens alumni and emerging innovators',
  'Learners with diverse accessibility and learning needs',
];

export default function ScholarshipsBadges() {
  return (
    <section
      id="scholarships"
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
            Scholarships &amp; Badges
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#2F2F35] mb-5">
            Access. Recognition. Opportunity.
          </h2>
          <p className="max-w-5xl text-base sm:text-lg text-[#4B5563] leading-relaxed mb-4">
            STEMlens Scholarships &amp; Badges expand access to opportunity, recognize achievement, and
            support learners as they grow into innovators and leaders.
          </p>
          <p className="max-w-5xl text-base sm:text-lg text-[#4B5563] leading-relaxed mb-4">
            Scholarships provide access to programs, mentorship, and global opportunities. Badges provide
            formal recognition of skills, leadership, and innovation progress.
          </p>
          <p className="max-w-5xl text-base sm:text-lg text-[#4B5563] leading-relaxed mb-6">
            Together, they support learners throughout their journey within the STEMlens ecosystem.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {topButtons.map((label) => (
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
              <Award className="w-5 h-5 text-[#0B1E3B]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-3">STEMlens Scholarships</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              STEMlens Scholarships provide financial and program support to learners who demonstrate
              potential, commitment, and innovation capability. Scholarships support participation in:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {scholarshipSupport.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Scholarships ensure opportunity is not limited by circumstance.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-[#EB3134]/20 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#EB3134]/10 border border-[#EB3134]/20 items-center justify-center mb-4">
              <Handshake className="w-5 h-5 text-[#B72024]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-3">Types of Scholarships</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              STEMlens offers several scholarship pathways, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {scholarshipTypes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Each scholarship supports long-term growth and opportunity.
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
              <BadgeCheck className="w-5 h-5 text-[#2F2F35]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-3">STEMlens Badges</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              STEMlens Badges are formal digital credentials awarded for skills, innovation, leadership,
              and ecosystem contribution. Badges help learners:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {badgeBenefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Badges make progress visible and recognized.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-[#0B1E3B]/15 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#0B1E3B]/10 border border-[#0B1E3B]/20 items-center justify-center mb-4">
              <Layers className="w-5 h-5 text-[#0B1E3B]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-3">Badge Levels</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Badges reflect progressive levels of achievement:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {badgeLevels.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              This ensures recognition reflects real growth.
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
              <Users2 className="w-5 h-5 text-[#B72024]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-3">Who Can Apply</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Scholarships and badges are available to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {whoCanApply.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Opportunities align with each learner&apos;s stage of growth and contribution.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-[#2F2F35]/15 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#2F2F35]/10 border border-[#2F2F35]/15 items-center justify-center mb-4">
              <Milestone className="w-5 h-5 text-[#2F2F35]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-3">Growth and Recognition Pathway</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              STEMlens Scholarships and Badges support progression across the innovation ecosystem:
            </p>
            <p className="text-sm sm:text-base font-semibold text-[#2F2F35] leading-relaxed mb-4">
              Clubs &amp; Programs -&gt; Badges -&gt; Mentorship -&gt; Fellowships -&gt; Leadership -&gt; Global
              Opportunities
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Learners are recognized, supported, and prepared for future innovation pathways.
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
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-3">For Sponsors and Partners</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
            Supporting STEMlens Scholarships expands access and develops future innovators and leaders.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
            Sponsors contribute to education access, innovation development, and measurable global impact.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 max-w-3xl">
            {sponsorButtons.map((label) => (
              <button
                key={label}
                type="button"
                className="inline-flex items-center justify-center rounded-xl border border-[#0B1E3B]/20 bg-[#F8FAFC] px-4 py-3 text-sm sm:text-base font-semibold text-[#0B1E3B] transition-all hover:border-[#EB3134]/35 hover:text-[#B72024] hover:bg-white"
              >
                {label}
              </button>
            ))}
          </div>
        </motion.article>

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
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">Apply for Scholarships & Badges</h3>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-8">
            STEMlens Scholarships &amp; Badges help learners access opportunity, gain recognition, and grow
            into innovators and leaders.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <ApplicationForm 
              title="Apply for Scholarship"
              subtitle="Access opportunities and gain recognition for your achievements"
              formType="scholarship"
            />
          </div>
        </motion.section>
      </div>
    </section>
  );
}
