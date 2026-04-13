import { motion } from 'framer-motion';
import {
  Handshake,
  Users,
  Building2,
  Briefcase,
  FlaskConical,
  Landmark,
  Globe2,
  ArrowRight,
} from 'lucide-react';
import unescoLogo from '../logos/unesco.png';
import africanUnionLogo from '../logos/african_union.png';
import unicefLogo from '../logos/unicef.png';
import wiserLogo from '../logos/wiser.png';
import gpeLogo from '../logos/gpe.png';
import unepLogo from '../logos/unep.png';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';

const partnerBenefits = [
  'Engagement with motivated and future-focused young people',
  'Collaboration on meaningful STEM and innovation initiatives',
  'Visibility within education, technology, and innovation ecosystems',
  'Contribution to workforce readiness and innovation development',
  'Alignment with global priorities including education, innovation, and sustainability',
];

const partnerTypes = [
  { label: 'Schools, universities, and TVET institutions', Icon: Building2 },
  { label: 'Technology companies and industry partners', Icon: Briefcase },
  { label: 'Science centers and innovation hubs', Icon: FlaskConical },
  { label: 'Foundations and development organizations', Icon: Handshake },
  { label: 'Government and public institutions', Icon: Landmark },
  { label: 'Global and international organizations', Icon: Globe2 },
];

const engagementModels = [
  'Supporting STEM programs and innovation initiatives',
  'Providing mentorship, expertise, or technical support',
  'Sponsoring equipment, programs, or learner opportunities',
  'Collaborating on research, innovation, or ecosystem initiatives',
  'Hosting workshops, exposure visits, or learning opportunities',
];

const partnershipPrinciples = [
  'Support youth development and ethical innovation',
  'Strengthen education and innovation ecosystems',
  'Align with our mission and values',
  'Contribute to long-term impact',
];

const partners = [
  { name: 'UNESCO', logo: unescoLogo },
  { name: 'African Union', logo: africanUnionLogo },
  { name: 'UNICEF', logo: unicefLogo },
  { name: 'Wiser', logo: wiserLogo },
  { name: 'Global Partnership', logo: gpeLogo },
  { name: 'UNEP', logo: unepLogo },
];

export default function PartnersSupporters() {
  return (
    <section
      id="partners-supporters"
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
            Partners &amp; Supporters
          </h1>
          <p className="max-w-4xl text-base sm:text-lg text-[#4B5563] leading-relaxed">
            STEMlens works in partnership with institutions that believe in practical STEM education,
            youth innovation, and long-term impact. Together, we connect education, industry, research,
            and global innovation platforms.
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
            <Handshake className="w-5 h-5 text-[#EB3134]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2F2F35] mb-3">Why Partner With STEMlens</h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
            Partnering with STEMlens means contributing to a structured youth innovation institution
            with real educational and societal impact.
          </p>
          <motion.ul className="grid gap-3 sm:grid-cols-2" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
            {partnerBenefits.map((item) => (
              <motion.li
                key={item}
                variants={fadeUp}
                className="rounded-xl border border-gray-200 bg-[#F8FAFC] px-4 py-3 text-sm sm:text-base text-gray-700 leading-relaxed"
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
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
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E3B] mb-4">Who We Partner With</h3>
            <motion.div className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {partnerTypes.map(({ label, Icon }) => (
                <motion.div key={label} variants={fadeUp} className="flex items-start gap-3">
                  <div className="inline-flex w-8 h-8 rounded-full bg-white border border-[#0B1E3B]/20 items-center justify-center mt-0.5">
                    <Icon className="w-4 h-4 text-[#0B1E3B]" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{label}</p>
                </motion.div>
              ))}
            </motion.div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              These partnerships strengthen learning, innovation, and youth leadership development.
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
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F35] mb-4">How Partners Engage</h3>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
              {engagementModels.map((item) => (
                <motion.li key={item} variants={fadeUp} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-5">
              Engagement models are flexible and aligned with shared goals.
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
          <h3 className="text-2xl sm:text-3xl font-bold text-[#4E4E56] mb-4">Our Partnership Principles</h3>
          <motion.ul className="grid gap-3 sm:grid-cols-2" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
            {partnershipPrinciples.map((item) => (
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
            Strong partnerships are built on trust, shared purpose, and meaningful outcomes.
          </p>
        </motion.article>

        <motion.article
          className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-7 lg:p-8 mb-8 lg:mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1E3B] mb-3">Our Partners and Supporters</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
            STEMlens works with a growing network of partners and supporters across education, technology,
            research, and development ecosystems.
          </p>

          <motion.div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 items-center" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
            {partners.map((partner) => (
              <motion.div
                key={partner.name}
                variants={fadeUp}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="bg-[#F8FAFC] border border-gray-200 rounded-xl p-4 sm:p-5 flex items-center justify-center"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-10 sm:h-12 lg:h-14 w-auto object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.article>

        <motion.article
          className="bg-gradient-to-br from-[#2F2F35] via-[#0B1E3B] to-[#EB3134] rounded-2xl shadow-xl border border-white/20 p-6 sm:p-7 lg:p-10 text-white"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Partner With STEMlens Network</h3>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-6 max-w-4xl">
            Organizations interested in partnering with STEMlens are welcome to explore collaboration
            opportunities.
          </p>
          <a
            href="#contact-us"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-[#0B1E3B] text-sm sm:text-base font-semibold hover:bg-[#F1F5F9] transition-colors"
          >
            Partnership Inquiry Form / Contact Link
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.article>
      </div>
    </section>
  );
}
