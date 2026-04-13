import { motion } from 'framer-motion';
import {
  Sparkles,
  Network,
  Cpu,
  Lightbulb,
  Users2,
  Milestone,
  Globe2,
  Target,
} from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';
import ApplicationForm from '../components/ApplicationForm';


const memberAccess = [
  'STEM programs, innovation labs, and maker spaces',
  'Real-world innovation projects and engineering challenges',
  'National and international competitions and showcases',
  'Mentorship from engineers, innovators, researchers, and industry leaders',
  'Leadership development and global exposure opportunities',
];

const memberExperiences = [
  'Robotics, coding, AI, drones, and engineering programs',
  'Innovation bootcamps, hackathons, and maker labs',
  'Technology showcases, demo days, and innovation exhibitions',
  'Global speaker sessions and youth innovation forums',
  'Collaboration with peers across schools, universities, and countries',
];

const beyondClassroom = [
  'Climate and sustainability innovation',
  'Smart technologies and intelligent systems',
  'Community and social impact solutions',
  'Entrepreneurship and product development',
];

const leadershipGrowth = [
  'Leadership and teamwork skills',
  'Communication and presentation ability',
  'Confidence in innovation and problem solving',
  'Global awareness and innovation mindset',
];

const whoCanJoin = [
  'Primary and secondary school students',
  'TVET and university students',
  'Early-career youth and emerging innovators',
  'Learners joining through schools, institutions, or independently',
  'Learners with diverse accessibility and learning needs, including those with hearing, visual, speech, physical, and neurodiverse profiles',
];

export default function InnovatorsClub() {
  return (
    <section
      id="innovators-club"
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
            Join the STEMlens Innovators Club
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#2F2F35] mb-5">
            Where Curious Minds Become Global Innovators and Leaders
          </h2>
          <p className="max-w-5xl text-base sm:text-lg text-[#4B5563] leading-relaxed mb-4">
            The STEMlens Innovators Club is the official global membership community connecting learners,
            university students, and emerging innovators to the STEMlens innovation ecosystem.
          </p>
          <p className="max-w-5xl text-base sm:text-lg text-[#4B5563] leading-relaxed mb-4">
            It is designed for individuals who are curious about the world, passionate about technology,
            and ready to develop the skills, mindset, and experience needed to shape the future.
          </p>
          <p className="max-w-5xl text-base sm:text-lg text-[#4B5563] leading-relaxed mb-4">
            The Innovators Club is more than a club. It is a structured pathway into innovation,
            leadership, global participation, and real-world impact.
          </p>
          <p className="max-w-5xl text-base sm:text-lg font-semibold text-[#0B1E3B] leading-relaxed mb-6">
            STEMlens Innovators are not just learning about the future. They are building it.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            <button
              onClick={() => document.getElementById('join-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center rounded-xl border border-[#0B1E3B]/20 bg-white px-4 py-3 text-sm sm:text-base font-semibold text-[#0B1E3B] transition-all hover:border-[#EB3134]/35 hover:text-[#B72024] hover:bg-[#F8FAFC]"
            >
              Join Now
            </button>
            <a
              href="mailto:hello@stemlens.org?subject=STEMlens%20Innovators%20Club%20Interest"
              className="inline-flex items-center justify-center rounded-xl border border-[#0B1E3B]/20 bg-white px-4 py-3 text-sm sm:text-base font-semibold text-[#0B1E3B] transition-all hover:border-[#EB3134]/35 hover:text-[#B72024] hover:bg-[#F8FAFC]"
            >
              Register Interest
            </a>
            <a
              href="mailto:hello@stemlens.org?subject=STEMlens%20Innovators%20Club%20Inquiry"
              className="inline-flex items-center justify-center rounded-xl border border-[#0B1E3B]/20 bg-white px-4 py-3 text-sm sm:text-base font-semibold text-[#0B1E3B] transition-all hover:border-[#EB3134]/35 hover:text-[#B72024] hover:bg-[#F8FAFC]"
            >
              Contact STEMlens
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
            <Network className="w-5 h-5 text-[#0B1E3B]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-4">What Is the STEMlens Innovators Club</h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            The Innovators Club serves as the official membership platform and entry point into the full
            STEMlens ecosystem. Members gain access to:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
            {memberAccess.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Members become part of a connected global network of innovators, learners, and future
            leaders.
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
              <Cpu className="w-5 h-5 text-[#B72024]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-3">What Members Experience</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              STEMlens Innovators participate in hands-on STEM and innovation experiences that extend
              beyond traditional classroom learning. This includes:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {memberExperiences.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Learning becomes active, creative, and globally connected.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-[#0B1E3B]/15 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#0B1E3B]/10 border border-[#0B1E3B]/20 items-center justify-center mb-4">
              <Lightbulb className="w-5 h-5 text-[#0B1E3B]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-3">Innovation Beyond the Classroom</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Members apply STEM, engineering, and innovation to real-world challenges such as:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {beyondClassroom.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Learners develop the ability to design, build, and apply technology to solve meaningful
              problems.
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
              <Users2 className="w-5 h-5 text-[#2F2F35]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-3">Leadership and Personal Development</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              The Innovators Club develops confident, capable young leaders prepared for future
              opportunities in STEM and beyond. Members build:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {leadershipGrowth.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              STEMlens Innovators grow into individuals capable of contributing to innovation, technology,
              and society.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-[#EB3134]/20 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#EB3134]/10 border border-[#EB3134]/20 items-center justify-center mb-4">
              <Milestone className="w-5 h-5 text-[#B72024]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#B72024] mb-3">A Structured Innovation Pathway</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              The Innovators Club provides a clear pathway for long-term growth within the STEMlens
              ecosystem:
            </p>
            <p className="text-sm sm:text-base font-semibold text-[#2F2F35] leading-relaxed mb-4">
              Club Membership -&gt; Innovation Projects -&gt; Competitions -&gt; Global Platforms and Exchanges
              -&gt; Leadership and Advanced Opportunities
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              STEMlens becomes a continuous journey of learning, innovation, and leadership development.
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
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-3">A Global Innovation Community</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              STEMlens Innovators join a recognized international network of young innovators across
              Africa and beyond.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Members collaborate, compete, and participate in global innovation platforms, research
              initiatives, and STEM programs.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Being a STEMlens Innovator becomes part of a learner&apos;s long-term identity and innovation
              journey.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-[#2F2F35]/15 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#2F2F35]/10 border border-[#2F2F35]/15 items-center justify-center mb-4">
              <Target className="w-5 h-5 text-[#2F2F35]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-3">Who Can Join</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              The STEMlens Innovators Club is open to learners and emerging innovators across different
              stages of their educational and professional journey, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {whoCanJoin.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3">
              No prior experience is required. Curiosity, commitment, and willingness to learn are the
              only requirements.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              STEMlens is designed to be an inclusive innovation ecosystem where all learners can develop
              their potential and contribute to shaping the future.
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
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Why Join the STEMlens Innovators Club</h3>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-4">
            Because the future belongs to those who build it.
          </p>
          <p className="text-sm sm:text-base font-semibold text-white leading-relaxed mb-3">
            Students -&gt; Innovators
          </p>
          <p className="text-sm sm:text-base font-semibold text-white leading-relaxed mb-3">
            Learners -&gt; Leaders
          </p>
          <p className="text-sm sm:text-base font-semibold text-white leading-relaxed mb-4">
            Ideas -&gt; Real-World Impact
          </p>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed">
            STEMlens provides the environment, opportunities, and global platform to support this journey.
          </p>
        </motion.article>

        <motion.section
          id="join-form"
          className="bg-white rounded-2xl shadow-xl border border-[#EB3134]/20 p-6 sm:p-7 lg:p-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-3">Join the STEMlens Innovators Club</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
            Become part of a global community shaping the future through science, technology, engineering,
            and innovation.
          </p>
          <ApplicationForm 
            title="Join the Innovators Club"
            subtitle="Take the first step towards becoming a global innovator"
            formType="join"
          />
        </motion.section>
      </div>
    </section>
  );
}
