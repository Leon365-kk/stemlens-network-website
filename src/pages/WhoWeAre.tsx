import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';

export default function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      className="relative w-full min-h-screen bg-gradient-to-br from-white via-[#F8FAFC] to-[#F1F5F9] pt-28 pb-16 sm:pb-20 lg:pt-32 lg:pb-24"
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230B1E3B' fill-opacity='0.02'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm0 0c0 5.5 4.5 10 10 10s10-4.5 10-10-4.5-10-10-10-10 4.5-10 10z'/%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.header
          className="text-center mb-12 lg:mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <p className="inline-flex items-center rounded-full border border-[#EB3134]/25 bg-white/80 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-[0.08em] text-[#EB3134] uppercase mb-5">
            About STEMlens
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#0B1E3B] leading-tight mb-5">
            Who We Are
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-[#4B5563] leading-relaxed">
            STEMlens Network is a youth-centered STEM institution in Nairobi building practical skills,
            leadership, and innovation capacity for Africa&apos;s next generation.
          </p>
        </motion.header>

        <motion.div
          className="grid gap-5 sm:gap-6 md:grid-cols-2 mb-8 lg:mb-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.article
            variants={fadeUp}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 sm:p-6 lg:p-8"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-3">Our Mission</h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              We help young people become capable problem-solvers through hands-on STEM, mentorship,
              and real projects with community impact.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="bg-gradient-to-br from-[#2F2F35] to-[#0B1E3B] rounded-2xl shadow-lg border border-[#64646A]/35 p-5 sm:p-6 lg:p-8 text-white"
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-3">Our Position</h2>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              We work across schools, institutions, and partner ecosystems to connect education with
              innovation, leadership, and opportunity.
            </p>
          </motion.article>
        </motion.div>

        <motion.div
          className="grid gap-5 sm:gap-6 md:grid-cols-2 mb-8 lg:mb-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.article
            variants={fadeUp}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 sm:p-6 lg:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-4">What We Do</h3>
            <ul className="space-y-3 text-sm sm:text-base text-gray-600 leading-relaxed">
              <li className="flex gap-2">
                <span className="text-[#EB3134] mt-1">&bull;</span>
                <span>Deliver applied STEM programs in robotics, coding, engineering, and AI.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#EB3134] mt-1">&bull;</span>
                <span>Run innovation challenges that turn ideas into prototypes and solutions.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#EB3134] mt-1">&bull;</span>
                <span>Build leadership, communication, and teamwork alongside technical skills.</span>
              </li>
            </ul>
          </motion.article>

          <motion.article
            variants={fadeUp}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 sm:p-6 lg:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-4">Who We Serve</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              We serve learners, educators, schools, and institutions committed to future-focused STEM
              education and innovation.
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="#stem-academy" className="px-3 py-1 rounded-full bg-[#F6F7FB] text-xs sm:text-sm text-[#0B1E3B] font-medium hover:bg-[#EB3134]/10 hover:text-[#EB3134] transition-colors">
                Students
              </a>
              <a href="#community" className="px-3 py-1 rounded-full bg-[#F6F7FB] text-xs sm:text-sm text-[#0B1E3B] font-medium hover:bg-[#EB3134]/10 hover:text-[#EB3134] transition-colors">
                Educators
              </a>
              <a href="#partners-supporters" className="px-3 py-1 rounded-full bg-[#F6F7FB] text-xs sm:text-sm text-[#0B1E3B] font-medium hover:bg-[#EB3134]/10 hover:text-[#EB3134] transition-colors">
                Schools
              </a>
              <a href="#partners-supporters" className="px-3 py-1 rounded-full bg-[#F6F7FB] text-xs sm:text-sm text-[#0B1E3B] font-medium hover:bg-[#EB3134]/10 hover:text-[#EB3134] transition-colors">
                Partners
              </a>
            </div>
          </motion.article>
        </motion.div>

        <motion.article
          className="bg-gradient-to-br from-[#2F2F35] via-[#0B1E3B] to-[#EB3134] rounded-2xl shadow-xl border border-white/20 p-6 sm:p-7 lg:p-10 text-white mb-8 lg:mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">What Makes STEMlens Different</h3>
          <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-5 max-w-3xl">
            We are not a traditional classroom program. Our model combines structured learning,
            project execution, and mentorship so learners build capability through doing.
          </p>
          <motion.div className="grid gap-3 sm:grid-cols-2" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
            <motion.div variants={fadeUp} className="rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-sm sm:text-base">
              Hands-on labs and project work
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-sm sm:text-base">
              Industry and mentor engagement
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-sm sm:text-base">
              Leadership and communication development
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-sm sm:text-base">
              Pathways to global opportunities
            </motion.div>
          </motion.div>
        </motion.article>

        <motion.article
          className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-7 lg:p-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-4">Our Role in the World</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
            We align youth innovation with real development priorities. Learners build solutions in:
          </p>
          <motion.div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mb-6" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
            <motion.div variants={fadeUp} className="rounded-xl border border-gray-200 bg-[#F8FAFC] px-4 py-3 text-sm text-[#0B1E3B] font-medium">
              Climate resilience
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-xl border border-gray-200 bg-[#F8FAFC] px-4 py-3 text-sm text-[#0B1E3B] font-medium">
              Digital inclusion
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-xl border border-gray-200 bg-[#F8FAFC] px-4 py-3 text-sm text-[#0B1E3B] font-medium">
              Health innovation
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-xl border border-gray-200 bg-[#F8FAFC] px-4 py-3 text-sm text-[#0B1E3B] font-medium">
              Food systems
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-xl border border-gray-200 bg-[#F8FAFC] px-4 py-3 text-sm text-[#0B1E3B] font-medium">
              Sustainable cities
            </motion.div>
          </motion.div>
          <p className="text-base sm:text-lg font-semibold text-[#0B1E3B] leading-relaxed max-w-4xl">
            Our goal is clear: prepare ethical, skilled innovators who can solve real problems and lead
            meaningful progress.
          </p>
        </motion.article>

        <motion.div
          className="text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.a
            href="#join"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#EB3134] to-[#D62828] text-white font-bold rounded-xl hover:from-[#D62828] hover:to-[#B91D1D] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform active:scale-95"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join STEMlens Today
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
          <p className="mt-4 text-sm text-gray-600">
            Ready to start your STEM journey? <a href="#contact" className="text-[#EB3134] hover:underline font-medium">Contact us</a> to learn more.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
