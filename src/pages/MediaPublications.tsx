import { motion } from 'framer-motion';
import {
  Newspaper,
  FileText,
  Mic,
  BookOpen,
  Megaphone,
  Presentation,
  Mail,
  ArrowRight,
} from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';

const mediaHighlights = [
  'Youth-led innovation and STEM learning',
  'Education, skills development, and innovation programs',
  'Partnerships, exchanges, and global engagement',
  'Student, educator, and institutional success stories',
  'Events, competitions, and innovation initiatives',
];

const publicationTypes = [
  'Program reports and impact reports',
  'Institutional briefs and program summaries',
  'Research summaries and youth innovation insights',
  'Education and innovation case studies',
  'Thought leadership articles and opinion pieces',
];

const youthVoices = [
  'Their innovation journeys and learning experiences',
  'Projects and solutions they have developed',
  'Skills and confidence gained through STEM',
  'Their aspirations, leadership growth, and future pathways',
];

const researchAreas = [
  'Insights on STEM education models and methodologies',
  'Youth innovation ecosystem development',
  'Experiential and project-based learning approaches',
  'Emerging skills and innovation readiness',
  'Program evaluation insights and learning outcomes',
];

const pressResources = [
  'Official organizational descriptions and program summaries',
  'Leadership profiles and official statements',
  'Press releases and announcements',
  'Approved images, media assets, and visual resources',
];

const speakingContributions = [
  'Conferences and summits',
  'Panel discussions and roundtables',
  'Workshops and public forums',
  'Education and innovation events',
];

export default function MediaPublications() {
  return (
    <section
      id="media-publications"
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
            Media &amp; Publications
          </h1>
          <p className="max-w-4xl text-base sm:text-lg text-[#4B5563] leading-relaxed">
            STEMlens documents and shares its work across STEM education, youth innovation, and
            community-based problem solving to inform practice, strengthen partnerships, and contribute to
            global conversations on the future of learning and innovation.
          </p>
          <p className="max-w-4xl text-base sm:text-lg text-[#4B5563] leading-relaxed mt-3">
            This section reflects our commitment to transparency, knowledge sharing, and advancing
            innovation ecosystems.
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
            <Newspaper className="w-5 h-5 text-[#EB3134]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2F2F35] mb-3">In the Media</h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
            STEMlens and its programs are featured across digital platforms, partner channels, and
            education and innovation forums.
          </p>
          <motion.ul className="grid gap-3 sm:grid-cols-2" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
            {mediaHighlights.map((item) => (
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
            Please see selected media features, press mentions, and media coverage below.
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
            <div className="inline-flex w-10 h-10 rounded-full bg-[#0B1E3B]/10 border border-[#0B1E3B]/20 items-center justify-center mb-4">
              <FileText className="w-5 h-5 text-[#0B1E3B]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-4">Publications &amp; Institutional Reports</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {publicationTypes.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              These publications support evidence-based practice and strengthen STEM and innovation
              ecosystems. Please see reports and institutional documents below.
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
              <Mic className="w-5 h-5 text-[#2F2F35]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-4">Youth Voices &amp; Innovation Stories</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {youthVoices.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              These stories demonstrate real-world impact and transformation through STEMlens programs.
              Please see youth stories and innovation highlights below.
            </p>
          </motion.article>
        </div>

        <div className="grid gap-5 md:grid-cols-2 mb-8 lg:mb-10">
          <motion.article
            className="rounded-2xl border border-[#64646A]/25 bg-[#F6F6F8] p-6 sm:p-7"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#64646A]/10 border border-[#64646A]/20 items-center justify-center mb-4">
              <BookOpen className="w-5 h-5 text-[#4E4E56]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#4E4E56] mb-4">Research, Insights &amp; Knowledge Sharing</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {researchAreas.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              Where applicable, research outputs and knowledge resources are shared here. Please see
              research summaries and insights below.
            </p>
          </motion.article>

          <motion.article
            className="rounded-2xl border border-[#EB3134]/20 bg-[#FFF6F6] p-6 sm:p-7"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="inline-flex w-10 h-10 rounded-full bg-[#EB3134]/10 border border-[#EB3134]/20 items-center justify-center mb-4">
              <Megaphone className="w-5 h-5 text-[#EB3134]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#B72024] mb-4">Press &amp; Media Resources</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {pressResources.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              These resources support journalists, partners, and collaborators seeking information about
              STEMlens. Please see press resources and media assets below.
            </p>
          </motion.article>
        </div>

        <motion.article
          className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-7 lg:p-8 mb-8 lg:mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="inline-flex w-10 h-10 rounded-full bg-[#0B1E3B]/10 border border-[#0B1E3B]/20 items-center justify-center mb-4">
            <Presentation className="w-5 h-5 text-[#0B1E3B]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-3">Speaking Engagements &amp; Public Contributions</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
            STEMlens leadership and representatives contribute to conversations on STEM education,
            innovation, and youth development through public engagement.
          </p>
          <motion.ul className="grid gap-3 sm:grid-cols-2" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
            {speakingContributions.map((item) => (
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
            These contributions strengthen dialogue, collaboration, and knowledge exchange across
            education and innovation communities.
          </p>
        </motion.article>

        <motion.article
          className="bg-gradient-to-br from-[#2F2F35] via-[#0B1E3B] to-[#EB3134] rounded-2xl shadow-xl border border-white/20 p-6 sm:p-7 lg:p-10 text-white"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="inline-flex w-11 h-11 rounded-full bg-white/20 items-center justify-center mb-4">
            <Mail className="w-5 h-5" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Media Inquiries</h3>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-6 max-w-4xl">
            For media requests, interviews, features, or publication collaborations, please contact
            STEMlens through the link below.
          </p>
          <a
            href="#media-contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-[#0B1E3B] text-sm sm:text-base font-semibold hover:bg-[#F1F5F9] transition-colors"
          >
            Media Contact Form / Media Contact Information
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.article>
      </div>
    </section>
  );
}
