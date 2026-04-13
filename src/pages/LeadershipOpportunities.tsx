import { motion } from 'framer-motion';
import {
  Sparkles,
  Target,
  ShieldCheck,
  Users2,
  Workflow,
  GraduationCap,
  Briefcase,
  TrendingUp,
  Award,
  Globe2,
  Network,
} from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';
import ApplicationForm from '../components/ApplicationForm';


const whyLeadershipMatters = [
  'Confidence leading teams and innovation projects',
  'Strong communication, decision-making, and problem-solving skills',
  'Responsibility, accountability, and professional capability',
  'The ability to turn ideas into meaningful action',
];

const leadershipRoles = [
  'Club and Program Leaders',
  'Innovation and Project Leads',
  'Peer Mentors and Facilitators',
  'STEMlens Ambassadors and Representatives',
  'Youth Leadership and Advisory Council Members',
];

const trainingAndPreparation = [
  'Leadership development workshops',
  'Communication and public speaking training',
  'Mentorship and leadership guidance',
  'Project and team management preparation',
];

const leadershipResponsibilities = [
  'Leading innovation projects and initiatives',
  'Mentoring junior learners and innovators',
  'Supporting STEMlens programs and innovation activities',
  'Representing STEMlens in schools, institutions, and global platforms',
];

const whatLeadersGain = [
  'Real leadership and project management experience',
  'Mentorship and professional development support',
  'Certificates, recognition, and leadership references',
  'Access to fellowships, global programs, and advanced opportunities',
];

const whoCanApply = [
  'STEMlens Club members and program participants',
  'Mentorship and fellowship participants',
  'TVET, university students, and emerging innovators',
  'STEMlens alumni and ambassadors',
  'Participants demonstrating initiative, responsibility, and leadership potential',
];

export default function LeadershipOpportunities() {
  return (
    <section
      id="leadership"
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
            Leadership Opportunities
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#2F2F35] mb-5">
            From Learners to Leaders
          </h2>
          <p className="max-w-5xl text-base sm:text-lg text-[#4B5563] leading-relaxed mb-4">
            STEMlens Leadership Opportunities empower learners, fellows, and alumni to step into
            meaningful roles where they lead innovation projects, mentor others, and represent STEMlens
            within their communities and globally.
          </p>
          <p className="max-w-5xl text-base sm:text-lg text-[#4B5563] leading-relaxed mb-4">
            Leadership at STEMlens is not defined by titles, but by initiative, responsibility, and
            impact.
          </p>
          <p className="max-w-5xl text-base sm:text-lg font-semibold text-[#0B1E3B] leading-relaxed mb-6">
            This is where learners grow into confident innovators, mentors, and global leaders.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            <button
              onClick={() => document.getElementById('leadership-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center rounded-xl border border-[#0B1E3B]/20 bg-white px-4 py-3 text-sm sm:text-base font-semibold text-[#0B1E3B] transition-all hover:border-[#EB3134]/35 hover:text-[#B72024] hover:bg-[#F8FAFC]"
            >
              Apply Now
            </button>
            <a
              href="mailto:hello@stemlens.org?subject=Leadership%20Nomination"
              className="inline-flex items-center justify-center rounded-xl border border-[#0B1E3B]/20 bg-white px-4 py-3 text-sm sm:text-base font-semibold text-[#0B1E3B] transition-all hover:border-[#EB3134]/35 hover:text-[#B72024] hover:bg-[#F8FAFC]"
            >
              Nominate a Leader
            </a>
            <a
              href="mailto:hello@stemlens.org?subject=Leadership%20Partnership"
              className="inline-flex items-center justify-center rounded-xl border border-[#0B1E3B]/20 bg-white px-4 py-3 text-sm sm:text-base font-semibold text-[#0B1E3B] transition-all hover:border-[#EB3134]/35 hover:text-[#B72024] hover:bg-[#F8FAFC]"
            >
              Partner with STEMlens
            </a>
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
            <Target className="w-5 h-5 text-[#0B1E3B]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-4">Why Leadership Matters</h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            Leadership transforms learning into real-world impact. Through STEMlens leadership pathways,
            participants develop:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
            {whyLeadershipMatters.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Leadership prepares young people to contribute meaningfully to innovation, technology, and
            society.
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
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-3">Leadership Roles at STEMlens</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Participants can take on a range of leadership roles across the STEMlens ecosystem,
              including:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {leadershipRoles.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Each role provides real leadership experience and responsibility.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-[#0B1E3B]/15 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#0B1E3B]/10 border border-[#0B1E3B]/20 items-center justify-center mb-4">
              <Workflow className="w-5 h-5 text-[#0B1E3B]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-3">How Leadership Works</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Leadership opportunities follow a structured and supported pathway:
            </p>
            <p className="text-sm sm:text-base font-semibold text-[#2F2F35] leading-relaxed mb-4">
              Application or Nomination -&gt; Leadership Training -&gt; Active Leadership -&gt; Progression and
              Advancement
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Leaders receive mentorship, preparation, and ongoing support throughout their leadership
              journey.
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
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-3">Leadership Training and Preparation</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              STEMlens leaders receive structured preparation to support their success and effectiveness.
              This includes:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {trainingAndPreparation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              This ensures leaders are prepared to lead responsibly and effectively.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-[#EB3134]/20 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#EB3134]/10 border border-[#EB3134]/20 items-center justify-center mb-4">
              <Briefcase className="w-5 h-5 text-[#B72024]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#B72024] mb-3">Leadership Responsibilities</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              STEMlens leaders actively contribute to the growth and strength of the innovation ecosystem.
              Responsibilities may include:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {leadershipResponsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Leadership at STEMlens involves meaningful responsibility and real contribution.
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
            <TrendingUp className="w-5 h-5 text-[#0B1E3B]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-3">Leadership Progression Pathway</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
            STEMlens provides progressive leadership pathways that grow with experience and contribution:
          </p>
          <p className="text-sm sm:text-base font-semibold text-[#2F2F35] leading-relaxed">
            Emerging Leader -&gt; Program Leader -&gt; Senior Leader -&gt; Global Representative
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-4">
            This structured pathway develops leadership capability and prepares participants for advanced
            roles within STEMlens and beyond.
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
            className="rounded-2xl border border-[#2F2F35]/15 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#2F2F35]/10 border border-[#2F2F35]/15 items-center justify-center mb-4">
              <Award className="w-5 h-5 text-[#2F2F35]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-3">What Leaders Gain</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              STEMlens leaders gain valuable experience and long-term benefits, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {whatLeadersGain.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Leadership experience strengthens academic, innovation, and career pathways.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-[#EB3134]/20 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#EB3134]/10 border border-[#EB3134]/20 items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5 text-[#B72024]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#B72024] mb-3">Who Can Apply</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Leadership opportunities are open to participants across the STEMlens ecosystem, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {whoCanApply.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              STEMlens is committed to ensuring leadership opportunities remain inclusive and accessible to
              participants with diverse accessibility and learning profiles.
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
              <Globe2 className="w-5 h-5 text-[#0B1E3B]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-3">Global Representation Opportunities</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Outstanding STEMlens leaders may represent STEMlens in national and international
              competitions, conferences, partnerships, and global innovation platforms. These
              opportunities allow leaders to collaborate, contribute, and represent their communities at
              regional and global levels.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-[#2F2F35]/15 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#2F2F35]/10 border border-[#2F2F35]/15 items-center justify-center mb-4">
              <Award className="w-5 h-5 text-[#2F2F35]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-3">Leadership Recognition</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              STEMlens leadership roles are formally recognized and become part of each participant&apos;s
              innovation and leadership portfolio. Leadership experience strengthens university
              applications, fellowships, professional opportunities, and long-term career pathways.
            </p>
          </motion.article>
        </motion.section>

        <motion.article
          className="bg-gradient-to-br from-[#2F2F35] via-[#0B1E3B] to-[#EB3134] rounded-2xl shadow-xl border border-white/20 p-6 sm:p-7 lg:p-10 text-white mb-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="inline-flex w-10 h-10 rounded-full bg-white/15 border border-white/20 items-center justify-center mb-4">
            <Network className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Leadership Within the STEMlens Ecosystem</h3>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-4">
            Leadership is part of the long-term STEMlens innovation pathway:
          </p>
          <p className="text-sm sm:text-base font-semibold text-white leading-relaxed mb-4">
            Clubs &amp; Programs -&gt; Mentorship -&gt; Fellowships -&gt; Leadership -&gt; Global Representation
            -&gt; Alumni Leadership
          </p>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed">
            Participants grow into mentors, fellows, ambassadors, and global innovation leaders.
          </p>
        </motion.article>

        <motion.section
          id="leadership-form"
          className="bg-white rounded-2xl shadow-xl border border-[#EB3134]/20 p-6 sm:p-7 lg:p-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="inline-flex w-10 h-10 rounded-full bg-[#0B1E3B]/10 border border-[#0B1E3B]/20 items-center justify-center mb-4">
            <Sparkles className="w-5 h-5 text-[#0B1E3B]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-3">Begin Your Leadership Journey</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
            Step forward. Lead innovation projects. Mentor others. Represent your community. Create
            meaningful impact.
          </p>
          
          <ApplicationForm 
            title="Apply for Leadership Opportunity"
            subtitle="Take the next step in your leadership development journey"
            formType="leadership"
          />
        </motion.section>
      </div>
    </section>
  );
}
