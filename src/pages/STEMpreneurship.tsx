import { motion } from 'framer-motion';
import {
  Lightbulb,
  Rocket,
  Layers,
  Workflow,
  Globe,
  Target,
  Link,
  Briefcase,
  ArrowRight,
} from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';

const stemlensDifference = [
  'Hands-on innovation and venture-building experiences',
  'Applying STEM tools to design and build real-world solutions',
  'Integration with robotics, AI, IoT, engineering, and emerging technologies',
  'Participation in innovation challenges, competitions, and showcases',
  'Mentorship and guidance through structured innovation pathways',
  'Exposure to global innovation ecosystems through STEM Odyssey and STEMlens programs',
];

const learnersBuild = [
  'Mobile apps solving real community challenges',
  'Smart systems using sensors and automation',
  'Robotics-based innovation solutions',
  'Environmental and sustainability technologies',
  'AI-powered tools and intelligent systems',
  'Assistive technologies and smart devices',
];

const technologyEcosystem = [
  'Coding and Programming',
  'Artificial Intelligence and Machine Learning',
  'Robotics and Automation',
  'IoT and Smart Systems',
  '3D Design and Engineering',
  'Drone and Remote Sensing',
  'ArtScience and Creative Innovation',
];

const innovationPathway = [
  {
    stage: 'Junior Innovators (Ages 7-10)',
    detail: 'Develop curiosity, identify problems, and explore solution ideas.',
  },
  {
    stage: 'Emerging Innovators (Ages 11-14)',
    detail: 'Design solutions and build early prototypes.',
  },
  {
    stage: 'Advanced Innovators (Ages 15-18)',
    detail: 'Test, refine, and improve innovation projects.',
  },
  {
    stage: 'Founder Pathway (Advanced Track)',
    detail: 'Present solutions, participate in showcases, and explore scaling opportunities.',
  },
];

const globalOpportunities = [
  'STEMlens Innovation Cup and innovation challenges',
  'Hackathons and technology competitions',
  'Pitch sessions and venture showcases',
  'STEM Odyssey global exposure programs',
  'Partner innovation platforms and events',
];

const innovationTechnicalSkills = [
  'Problem-solving and solution design',
  'Prototyping and product development',
  'Applying technology to real-world challenges',
];

const leadershipVentureSkills = [
  'Communication and pitching',
  'Leadership and teamwork',
  'Innovation mindset and initiative',
];

const futureGlobalSkills = [
  'Systems thinking and critical thinking',
  'Ethical and responsible innovation',
  'Confidence to build and lead innovation projects',
];

const futurePathways = [
  'Technology entrepreneurship and startups',
  'Engineering and product development',
  'Innovation and research careers',
  'Social innovation and global impact initiatives',
  'Emerging technology and leadership pathways',
];

const integrationPrograms = [
  'Robotics and Automation',
  'Artificial Intelligence and Machine Learning',
  'SpaceQuest and Remote Sensing',
  'Drone Technology',
  'Innovation Labs and Maker Space',
  'STEMlens Innovation Cup',
];

export default function STEMpreneurship() {
  return (
    <section
      id="stempreneurship"
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
            STEM Academy
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#0B1E3B] leading-tight mb-3">
            STEMpreneurship
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-[#2F2F35] mb-5">
            Turning STEM Ideas into Real-World Solutions and Future Innovators
          </h2>
          <p className="max-w-4xl text-base sm:text-lg text-[#4B5563] leading-relaxed">
            STEMpreneurship is the innovation and venture-building pathway that empowers learners to
            transform STEM knowledge into real-world solutions, products, and meaningful impact.
          </p>
          <p className="max-w-4xl text-base sm:text-lg text-[#4B5563] leading-relaxed mt-3">
            Learners begin to see themselves not just as students, but as innovators, creators, and
            future founders.
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
            <Lightbulb className="w-5 h-5 text-[#EB3134]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#B72024] mb-4">The STEMlens STEMpreneurship Difference</h3>
          <motion.ul className="grid gap-3 sm:grid-cols-2" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
            {stemlensDifference.map((item) => (
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
            This reflects how real innovation labs, startups, and technology ventures are created and developed.
          </p>
        </motion.article>

        <div className="grid gap-5 lg:grid-cols-2 mb-8 lg:mb-10">
          <motion.article
            className="bg-white rounded-2xl shadow-xl border border-[#0B1E3B]/20 p-6 sm:p-7"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="inline-flex w-11 h-11 rounded-full bg-[#0B1E3B]/10 border border-[#0B1E3B]/20 items-center justify-center mb-4">
              <Rocket className="w-5 h-5 text-[#0B1E3B]" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-4">What Learners Build and Create</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {learnersBuild.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              Learners build solutions that are technically grounded, meaningful, and scalable.
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
            <div className="inline-flex w-10 h-10 rounded-full bg-[#2F2F35]/10 border border-[#2F2F35]/20 items-center justify-center mb-4">
              <Layers className="w-5 h-5 text-[#2F2F35]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-4">Powered by the STEMlens Technology Ecosystem</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {technologyEcosystem.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              This ensures innovation is driven by real technical capability.
            </p>
          </motion.article>
        </div>

        <motion.article
          className="bg-white rounded-2xl shadow-xl border border-[#0B1E3B]/20 p-6 sm:p-7 lg:p-8 mb-8 lg:mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="inline-flex w-10 h-10 rounded-full bg-[#0B1E3B]/10 border border-[#0B1E3B]/20 items-center justify-center mb-4">
            <Workflow className="w-5 h-5 text-[#0B1E3B]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-4">Structured Innovation and Venture Pathway</h3>
          <motion.div className="grid gap-4 sm:grid-cols-2" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
            {innovationPathway.map((pathway) => (
              <motion.article
                key={pathway.stage}
                variants={fadeUp}
                className="rounded-xl border border-gray-200 bg-[#F8FAFC] p-4 sm:p-5"
              >
                <h4 className="text-base sm:text-lg font-semibold text-[#0B1E3B] mb-2">{pathway.stage}</h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{pathway.detail}</p>
              </motion.article>
            ))}
          </motion.div>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
            This structured journey helps learners move from idea to real-world impact.
          </p>
        </motion.article>

        <div className="grid gap-5 lg:grid-cols-2 mb-8 lg:mb-10">
          <motion.article
            className="rounded-2xl border border-[#64646A]/25 bg-[#F6F6F8] p-6 sm:p-7"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#64646A]/10 border border-[#64646A]/20 items-center justify-center mb-4">
              <Globe className="w-5 h-5 text-[#4E4E56]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#4E4E56] mb-4">Innovation Challenges and Global Opportunities</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {globalOpportunities.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              Promising projects may progress into advanced innovation tracks, mentorship, and further development opportunities.
            </p>
          </motion.article>

          <motion.article
            className="rounded-2xl border border-[#0B1E3B]/20 bg-[#F4F8FF] p-6 sm:p-7"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#0B1E3B]/10 border border-[#0B1E3B]/20 items-center justify-center mb-4">
              <Target className="w-5 h-5 text-[#0B1E3B]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-4">Skills Learners Develop</h3>
            <p className="text-sm sm:text-base font-semibold text-[#0B1E3B] mb-2">Innovation and Technical Skills</p>
            <motion.ul className="space-y-2 mb-4" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {innovationTechnicalSkills.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base font-semibold text-[#0B1E3B] mb-2">Leadership and Venture Skills</p>
            <motion.ul className="space-y-2 mb-4" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {leadershipVentureSkills.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base font-semibold text-[#0B1E3B] mb-2">Future and Global Skills</p>
            <motion.ul className="space-y-2" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {futureGlobalSkills.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.article>
        </div>

        <div className="grid gap-5 md:grid-cols-2 mb-8 lg:mb-10">
          <motion.article
            className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-7"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#2F2F35]/10 border border-[#2F2F35]/20 items-center justify-center mb-4">
              <Briefcase className="w-5 h-5 text-[#2F2F35]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-4">Future Pathways and Impact</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {futurePathways.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              Today&apos;s STEMpreneurship learners become tomorrow&apos;s innovators, founders, and technology leaders.
            </p>
          </motion.article>

          <motion.article
            className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-7"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#2F2F35]/10 border border-[#2F2F35]/20 items-center justify-center mb-4">
              <Link className="w-5 h-5 text-[#2F2F35]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-4">Integration with STEMlens Programs</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {integrationPrograms.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              This ecosystem enables learners to transform STEM knowledge into real innovation outcomes.
            </p>
          </motion.article>
        </div>

        <motion.article
          className="bg-white rounded-2xl shadow-xl border border-[#EB3134]/20 p-6 sm:p-7 lg:p-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-[#B72024] mb-4">Begin the STEMpreneurship Journey</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
            Join STEMlens STEMpreneurship and start building solutions, innovations, and ventures that shape the future.
          </p>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href="#join-stempreneurship"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#EB3134] text-white text-sm font-semibold hover:bg-[#C72629] transition-colors"
            >
              Join STEMpreneurship
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#register-school"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#0B1E3B] text-white text-sm font-semibold hover:bg-[#163766] transition-colors"
            >
              Register Your School
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#partner-with-stemlens"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#2F2F35] text-white text-sm font-semibold hover:bg-[#3E3E46] transition-colors"
            >
              Partner With STEMlens
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#explore-innovation-programs"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#64646A] text-white text-sm font-semibold hover:bg-[#54545A] transition-colors"
            >
              Explore STEMlens Innovation Programs
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
