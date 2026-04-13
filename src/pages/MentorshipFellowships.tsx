import { motion } from 'framer-motion';
import {
  Handshake,
  Compass,
  Users2,
  GraduationCap,
  ShieldCheck,
  TrendingUp,
  Briefcase,
  Globe2,
  Milestone,
  Sparkles,
} from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';
import ApplicationForm from '../components/ApplicationForm';

const topButtons = [
  'Apply for Mentorship',
  'Join Fellowship Program',
  'Become a Mentor'
];

const whyMentorshipMatters = [
  'Gain clarity on academic, research, and career pathways',
  'Learn directly from engineers, researchers, university faculty, and industry professionals',
  'Build confidence, leadership capability, and innovation mindset',
  'Access global opportunities, networks, and platforms',
];

const mentorshipSupport = [
  'One-on-one or small-group mentorship',
  'Guidance aligned to their interests, projects, and innovation goals',
  'Exposure to real-world STEM, engineering, and research pathways',
  'Support in developing projects, ideas, and leadership capability',
];

const fellowshipComponents = [
  'Innovation, engineering, and research projects',
  'Entrepreneurship and venture development opportunities',
  'Leadership and professional development experiences',
  'Global exposure, collaboration, and innovation platforms',
];

const whoCanParticipate = [
  'Secondary school learners',
  'TVET, university, and tertiary students',
  'STEMlens club members and alumni',
  'Young innovators and early-career professionals',
  'Learners with diverse accessibility and learning needs, including those with hearing, visual, speech, physical, and neurodiverse profiles',
];

const participantBenefits = [
  'Clear academic, research, and career direction',
  'Mentorship from experienced engineers, researchers, and innovation leaders',
  'Access to global STEM and innovation networks',
  'Leadership and professional development experience',
  'Confidence to pursue innovation, research, and global opportunities',
];

const leadershipAmbassadorPaths = [
  'Mentoring junior learners and innovators',
  'Supporting STEMlens programs and innovation initiatives',
  'Representing STEMlens in global programs, competitions, and partnerships',
  'Contributing to the growth and development of the STEMlens innovation community',
];

const mentorBenefits = [
  'Meaningful engagement with emerging innovators and future leaders',
  'Opportunities to contribute to innovation, education, and research development',
  'Connection to a global STEM and innovation ecosystem',
  'Recognition and leadership within the STEMlens network',
];

export default function MentorshipFellowships() {
  return (
    <section
      id="mentorship"
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
            Mentorship &amp; Fellowships
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#2F2F35] mb-5">
            Guidance That Shapes Innovators and Future Leaders
          </h2>
          <p className="max-w-5xl text-base sm:text-lg text-[#4B5563] leading-relaxed mb-4">
            STEMlens Mentorship &amp; Fellowships connect learners, university students, and emerging
            innovators with experienced mentors, engineers, researchers, university faculty, industry
            professionals, and global innovation leaders who guide their growth and development.
          </p>
          <p className="max-w-5xl text-base sm:text-lg text-[#4B5563] leading-relaxed mb-4">
            Mentorship provides guidance and direction. Fellowships provide advanced opportunity,
            leadership, and real-world contribution.
          </p>
          <p className="max-w-5xl text-base sm:text-lg text-[#4B5563] leading-relaxed mb-4">
            Together, these pathways help young innovators build confidence, deepen their skills, and
            progress into leadership, research, and global innovation roles.
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

        <motion.article
          className="bg-white rounded-2xl shadow-xl border border-[#0B1E3B]/15 p-6 sm:p-7 lg:p-8 mb-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="inline-flex w-11 h-11 rounded-full bg-[#0B1E3B]/10 border border-[#0B1E3B]/20 items-center justify-center mb-4">
            <Handshake className="w-5 h-5 text-[#0B1E3B]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-4">Mentorship and Fellowship Pathways</h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            STEMlens provides two complementary pathways for growth and development:
          </p>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            Mentorship supports learners and emerging innovators through structured guidance, skill
            development, and long-term growth.
          </p>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            Fellowships provide advanced opportunities for participants to engage in innovation, research,
            leadership, and real-world contribution within the STEMlens ecosystem and global innovation
            community.
          </p>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Together, these pathways support progression from learning to leadership.
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
              <Compass className="w-5 h-5 text-[#B72024]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-3">Why Mentorship Matters</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Innovation grows faster with guidance, support, and exposure. STEMlens mentorship helps
              participants:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {whyMentorshipMatters.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Mentorship transforms curiosity into capability, direction, and long-term purpose.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-[#0B1E3B]/15 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#0B1E3B]/10 border border-[#0B1E3B]/20 items-center justify-center mb-4">
              <Users2 className="w-5 h-5 text-[#0B1E3B]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-3">Mentorship at STEMlens</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Mentorship at STEMlens is structured, supportive, and growth-focused, helping learners and
              emerging innovators progress within STEM and innovation pathways. Participants receive:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {mentorshipSupport.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Mentorship helps participants move forward with clarity and confidence.
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
              <GraduationCap className="w-5 h-5 text-[#2F2F35]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-3">STEMlens Fellowships</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              STEMlens Fellowships provide advanced, immersive opportunities for outstanding learners,
              university students, and young innovators to deepen their skills and expand their impact.
              Fellowships may include:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {fellowshipComponents.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3">
              Fellows may contribute to research initiatives, innovation programs, mentorship, and
              ecosystem development within STEMlens and its partner network.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Fellowships help participants transition from learners to contributors and leaders.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-[#EB3134]/20 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#EB3134]/10 border border-[#EB3134]/20 items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5 text-[#B72024]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#B72024] mb-3">Who Can Participate</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Mentorship and fellowship opportunities are open to participants across different stages of
              their innovation journey, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {whoCanParticipate.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3">
              STEMlens is committed to ensuring mentorship and fellowship pathways remain inclusive and
              accessible to all participants.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Programs are adapted to each participant&apos;s experience level, goals, and development
              pathway.
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
              <TrendingUp className="w-5 h-5 text-[#0B1E3B]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-3">What Participants Gain</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">Participants gain:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {participantBenefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              These experiences accelerate long-term personal and professional growth.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-[#2F2F35]/15 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#2F2F35]/10 border border-[#2F2F35]/15 items-center justify-center mb-4">
              <Briefcase className="w-5 h-5 text-[#2F2F35]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-3">Leadership and Ambassador Opportunities</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Advanced participants and fellows may progress into leadership and ambassador roles within
              the STEMlens ecosystem. These roles may include:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {leadershipAmbassadorPaths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              These opportunities prepare participants to become leaders within the global innovation
              ecosystem.
            </p>
          </motion.article>
        </motion.section>

        <motion.article
          className="rounded-2xl border border-[#EB3134]/20 bg-white p-6 sm:p-7 lg:p-8 shadow-sm mb-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="inline-flex w-10 h-10 rounded-full bg-[#EB3134]/10 border border-[#EB3134]/20 items-center justify-center mb-4">
            <Globe2 className="w-5 h-5 text-[#B72024]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#2F2F35] mb-3">For Mentors</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
            STEMlens mentors play a vital role in shaping future innovators, engineers, researchers, and
            leaders. Mentors gain:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
            {mentorBenefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Mentorship creates lasting impact for both mentors and participants.
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
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">A Structured Growth Pathway</h3>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-4">
            STEMlens provides a clear pathway for long-term development within its innovation ecosystem:
          </p>
          <p className="text-sm sm:text-base font-semibold text-white leading-relaxed">
            Clubs &amp; Programs -&gt; Mentorship -&gt; Fellowships -&gt; Leadership -&gt; Alumni Network
          </p>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed mt-4">
            This pathway ensures continuous growth, leadership development, and global opportunity.
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
            <Sparkles className="w-5 h-5 text-[#0B1E3B]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-3">
            Begin Your Mentorship or Fellowship Journey
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
            Whether you are seeking mentorship, applying for fellowship opportunities, or ready to mentor
            the next generation, STEMlens provides structured pathways to grow, contribute, and lead.
          </p>
          
          <div className="space-y-12">
            <div>
              <h4 className="text-xl font-semibold text-[#0B1E3B] mb-4">Apply for Mentorship</h4>
              <ApplicationForm 
                title="Apply for Mentorship"
                subtitle="Get guidance from industry professionals and experts"
                formType="contact"
              />
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-[#0B1E3B] mb-4">Become a Mentor</h4>
              <ApplicationForm 
                title="Become a Mentor"
                subtitle="Share your expertise and guide the next generation"
                formType="mentorship"
              />
            </div>
          </div>
        </motion.section>
      </div>
    </section>
  );
}
