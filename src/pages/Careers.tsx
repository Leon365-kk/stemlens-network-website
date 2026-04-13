import { motion } from 'framer-motion';
import {
  Briefcase,
  Users,
  Rocket,
  GraduationCap,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';

const whyWorkItems = [
  'Passionate about STEM, innovation, and youth development',
  'Committed to ethical practice and meaningful contribution',
  'Curious, collaborative, and growth-oriented',
  'Interested in building programs, systems, and innovation pathways',
];

const whoWeWorkWith = [
  'STEM educators and facilitators',
  'Engineers, technologists, and innovators',
  'Researchers and curriculum designers',
  'Mentors, coaches, and program leads',
  'Operations, partnerships, and communications professionals',
];

const growthExposureItems = [
  'Contribute to meaningful STEM and innovation programs',
  'Engage with innovation challenges, research, and accelerator initiatives',
  'Collaborate with schools, institutions, and global partners',
  'Support the development of future innovators and leaders',
];

export default function Careers() {
  return (
    <section
      id="careers"
      className="relative w-full min-h-screen bg-gradient-to-br from-white via-[#F8FAFC] to-[#F1F5F9] pt-28 pb-16 sm:pb-20 lg:pt-32 lg:pb-24"
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.header
          className="mb-12 lg:mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <p className="inline-flex items-center rounded-full border border-[#EB3134]/25 bg-white/80 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-[0.08em] text-[#EB3134] uppercase mb-5">
            About STEMlens
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#0B1E3B] leading-tight mb-5">
            Careers at STEMlens Network
          </h1>
          <p className="max-w-4xl text-base sm:text-lg text-[#4B5563] leading-relaxed">
            At STEMlens, we build more than programs. We build systems that prepare young people to
            become innovators, problem-solvers, and future leaders through STEM.
          </p>
          <p className="max-w-4xl text-base sm:text-lg text-[#4B5563] leading-relaxed mt-3">
            Our work sits at the intersection of education, innovation, and real-world impact, driven
            by purpose, integrity, and meaningful contribution.
          </p>
        </motion.header>

        <motion.article
          className="bg-white rounded-2xl shadow-xl border border-[#EB3134]/20 p-6 sm:p-7 lg:p-8 mb-8 lg:mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
        >
          <div className="inline-flex w-11 h-11 rounded-full bg-[#EB3134]/10 border border-[#EB3134]/20 items-center justify-center mb-4">
            <Briefcase className="w-5 h-5 text-[#EB3134]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2F2F35] mb-3">Why Work With STEMlens</h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
            Working with STEMlens means joining a mission-driven STEM and innovation institution focused
            on long-term impact.
          </p>
          <motion.ul className="grid gap-3 sm:grid-cols-2" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
            {whyWorkItems.map((item) => (
              <motion.li
                key={item}
                variants={fadeUp}
                className="rounded-xl border border-gray-200 bg-[#F8FAFC] px-4 py-3 text-sm sm:text-base text-gray-700 leading-relaxed"
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
            We value people who take ownership, think critically, and contribute to shaping the future
            through education and innovation.
          </p>
        </motion.article>

        <div className="grid gap-5 md:grid-cols-2 mb-8 lg:mb-10">
          <motion.article
            className="rounded-2xl border border-[#0B1E3B]/20 bg-[#F4F8FF] p-6 sm:p-7"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-4">Who We Work With</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {whoWeWorkWith.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              Engagements may be full-time, part-time, contract-based, or project-based depending on
              program needs and institutional growth.
            </p>
          </motion.article>

          <motion.article
            className="rounded-2xl border border-[#2F2F35]/20 bg-[#F7F7F8] p-6 sm:p-7"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-4">Accelerator and Incubator Pathways</h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
              STEMlens supports Accelerator and Incubator Pathways that help transform ideas into
              real-world solutions.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
              These pathways create opportunities for educators, mentors, technologists, and professionals
              to contribute to innovation development, mentorship, and venture-building.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Professionals may participate as facilitators, mentors, advisors, or collaborators.
            </p>
          </motion.article>
        </div>

        <motion.article
          className="rounded-2xl border border-[#64646A]/25 bg-[#F6F6F8] p-6 sm:p-7 lg:p-8 mb-8 lg:mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
        >
          <div className="inline-flex w-10 h-10 rounded-full bg-[#64646A]/10 border border-[#64646A]/20 items-center justify-center mb-4">
            <GraduationCap className="w-5 h-5 text-[#4E4E56]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#4E4E56] mb-3">Professional Growth and Exposure</h3>
          <motion.ul className="grid gap-3 sm:grid-cols-2" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
            {growthExposureItems.map((item) => (
              <motion.li
                key={item}
                variants={fadeUp}
                className="rounded-xl border border-[#64646A]/20 bg-white px-4 py-3 text-sm sm:text-base text-gray-700 leading-relaxed"
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
            Team members gain valuable experience within a growing STEM and innovation ecosystem.
          </p>
        </motion.article>

        <motion.article
          className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-7 lg:p-8 mb-8 lg:mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-3">Career Pathways and Industry Exposure</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3">
            STEMlens supports individuals through mentorship, collaboration, and participation in
            innovation and education initiatives.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            These experiences contribute to professional development and engagement within broader
            innovation and education ecosystems. STEMlens does not operate as a recruitment agency.
            Employment and placement decisions are made independently by partner organizations.
          </p>
        </motion.article>

        <motion.article
          className="bg-gradient-to-br from-[#2F2F35] via-[#0B1E3B] to-[#EB3134] rounded-2xl shadow-xl border border-white/20 p-6 sm:p-7 lg:p-10 text-white mb-8 lg:mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="inline-flex w-11 h-11 rounded-full bg-white/20 items-center justify-center mb-4">
            <Rocket className="w-5 h-5" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Current Opportunities</h3>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-4">
            STEMlens periodically offers roles, internships, fellowships, and consultancy opportunities
            across programs, innovation initiatives, and institutional operations.
          </p>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-6">
            If there are active openings, you may apply using the link below.
          </p>
          <a
            href="#current-opportunities"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-[#0B1E3B] text-sm sm:text-base font-semibold hover:bg-[#F1F5F9] transition-colors"
          >
            Apply for Current Opportunities
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.article>

        <motion.article
          className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-7 lg:p-8 mb-8 lg:mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-3">Join the STEMlens Talent Pool</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
            If no current role matches your profile, you are welcome to express interest in future
            opportunities. This allows STEMlens to contact you when relevant openings become available.
          </p>
          <a
            href="#talent-pool"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#0B1E3B] text-white text-sm sm:text-base font-semibold hover:bg-[#1a3a5c] transition-colors"
          >
            Join the STEMlens Talent Pool
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.article>

        <motion.article
          className="rounded-2xl border border-[#EB3134]/20 bg-[#FFF6F6] p-6 sm:p-7 lg:p-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="inline-flex w-10 h-10 rounded-full bg-[#EB3134]/10 border border-[#EB3134]/20 items-center justify-center mb-4">
            <ShieldCheck className="w-5 h-5 text-[#EB3134]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#B72024] mb-3">Equal Opportunity</h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            STEMlens is committed to building an inclusive, ethical, and respectful working environment.
            We welcome individuals from diverse backgrounds who share our mission, values, and commitment
            to advancing STEM education and innovation.
          </p>
        </motion.article>
      </div>
    </section>
  );
}
