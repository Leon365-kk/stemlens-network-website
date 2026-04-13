import { motion } from 'framer-motion';
import {
  Sparkles,
  Wrench,
  Workflow,
  Cpu,
  Milestone,
  Rocket,
  Building2,
  Accessibility,
} from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';

const topButtons = ['Join a STEMlens Club', 'Bring STEMlens to Your School', 'Register Interest'];
const bottomButtons = ['Join a STEMlens Club', 'Bring STEMlens to Your School', 'Register Interest'];

const learnerActivities = [
  'Robotics, coding, and engineering projects',
  'Artificial intelligence, drones, and emerging technologies',
  'Design, prototyping, and innovation challenges',
  'Team collaboration and real-world problem solving',
  'Presentations, demonstrations, and innovation showcases',
];

const learningAreas = [
  'Robotics and Automation',
  'Coding and Software Development',
  'Artificial Intelligence and Machine Learning',
  'Drone Technology and Remote Sensing',
  '3D Design and Engineering',
  'Cybersecurity and Digital Safety',
  'Space Science and Innovation',
  'Entrepreneurship and Design Thinking',
];

const progressionPathways = [
  'Junior Innovators (7-10): Foundations, exploration, and creative learning',
  'Rising Innovators (11-14): Applied skills, engineering projects, and teamwork',
  'Future Innovators (15-18): Advanced innovation, competitions, and leadership',
  'Youth Innovators (18+): Specialization, research, mentorship, and global opportunities',
];

const outcomes = [
  'Real engineering, coding, and technology skills',
  'Confidence designing and presenting innovation projects',
  'Experience working collaboratively in innovation teams',
  'Access to competitions, showcases, and global programs',
  'Clear pathways into STEM education, careers, and leadership',
];

const deliveryFormats = [
  'School-based STEMlens Clubs',
  'STEMlens Center programs',
  'University and institutional partnerships',
  'Holiday innovation camps and bootcamps',
  'Individual enrollment pathways',
];

export default function ClubsPrograms() {
  return (
    <section
      id="clubs-programs"
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
            STEMlens Clubs &amp; Programs
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#2F2F35] mb-5">
            Where Passion Becomes Practice
          </h2>
          <p className="max-w-5xl text-base sm:text-lg text-[#4B5563] leading-relaxed mb-4">
            STEMlens Clubs &amp; Programs are structured, hands-on innovation pathways where learners
            develop real skills in robotics, coding, artificial intelligence, engineering, and creative
            problem-solving.
          </p>
          <p className="max-w-5xl text-base sm:text-lg text-[#4B5563] leading-relaxed mb-4">
            Delivered in schools, universities, and STEMlens Centers, these programs help learners move
            from curiosity to capability through guided projects, mentorship, and real-world application.
          </p>
          <p className="max-w-5xl text-base sm:text-lg text-[#4B5563] leading-relaxed mb-4">
            STEMlens Clubs are not extracurricular activities. They are innovation communities where
            learners grow into confident creators, engineers, and future leaders.
          </p>
          <p className="max-w-5xl text-base sm:text-lg font-semibold text-[#0B1E3B] leading-relaxed mb-6">
            More than clubs. A future-ready pathway into innovation.
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
            <Wrench className="w-5 h-5 text-[#0B1E3B]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-4">What Learners Do</h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            Through structured weekly sessions and guided innovation experiences, learners engage in:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
            {learnerActivities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Learners actively design, build, test, and improve real solutions.
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
              <Workflow className="w-5 h-5 text-[#B72024]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-3">How Learning Works</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              STEMlens Clubs follow a structured innovation cycle designed to develop both technical and
              creative capability:
            </p>
            <p className="text-sm sm:text-base font-semibold text-[#2F2F35] leading-relaxed mb-4">
              Explore -&gt; Build -&gt; Create -&gt; Showcase -&gt; Advance
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Learners discover concepts, apply them through hands-on projects, present their work, and
              progress into more advanced innovation pathways. This ensures continuous skill development,
              confidence building, and real-world readiness.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-[#0B1E3B]/15 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#0B1E3B]/10 border border-[#0B1E3B]/20 items-center justify-center mb-4">
              <Cpu className="w-5 h-5 text-[#0B1E3B]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-3">Learning Areas</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              STEMlens Clubs expose learners to future-ready disciplines across science, engineering, and
              technology, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {learningAreas.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Learners apply these disciplines through real innovation projects and engineering challenges.
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
              <Milestone className="w-5 h-5 text-[#2F2F35]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-3">Age and Progression Pathways</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              STEMlens Clubs provide structured pathways that grow with learners over time:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {progressionPathways.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Learners progress through increasingly advanced innovation pathways as their skills develop.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-[#EB3134]/20 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#EB3134]/10 border border-[#EB3134]/20 items-center justify-center mb-4">
              <Rocket className="w-5 h-5 text-[#B72024]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#B72024] mb-3">Outcomes and Opportunities</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Through STEMlens Clubs &amp; Programs, learners gain:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Clubs serve as launchpads into the broader STEMlens innovation ecosystem.
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
              <Building2 className="w-5 h-5 text-[#0B1E3B]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-3">Flexible Program Formats</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              STEMlens Clubs and Programs are delivered through multiple accessible formats:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              {deliveryFormats.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              This ensures learners can participate regardless of location or institution.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-[#2F2F35]/15 bg-white p-6 sm:p-7 shadow-sm"
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#2F2F35]/10 border border-[#2F2F35]/15 items-center justify-center mb-4">
              <Accessibility className="w-5 h-5 text-[#2F2F35]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-3">Inclusive and Accessible Participation</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              STEMlens Clubs are designed as inclusive innovation environments open to learners of diverse
              backgrounds and accessibility profiles.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              This includes learners with hearing, visual, speech, physical, and neurodiverse profiles,
              as well as learners with diverse accessibility and learning needs.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              STEMlens is committed to ensuring that all learners can meaningfully participate, innovate,
              and develop their potential.
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
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Why STEMlens Clubs Matter</h3>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-4">
            STEMlens Clubs help learners move from curiosity to capability:
          </p>
          <p className="text-sm sm:text-base font-semibold text-white leading-relaxed mb-4">
            &quot;I&apos;m curious about technology&quot; -&gt; &quot;I can design, build, and innovate.&quot;
          </p>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed">
            They develop innovators, engineers, problem-solvers, and future leaders prepared to shape the
            world.
          </p>
        </motion.article>

        <motion.section
          className="bg-white rounded-2xl shadow-xl border border-[#EB3134]/20 p-6 sm:p-7 lg:p-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-3">Join STEMlens Clubs &amp; Programs</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
            Learners can join through their schools, universities, or directly through STEMlens.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
            Schools and institutions can partner with STEMlens to establish innovation clubs and programs
            within their learning environments.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {bottomButtons.map((label) => (
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
