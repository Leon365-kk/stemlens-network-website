import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Accreditations() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 0.8,
          toggleActions: 'play reverse play reverse',
        },
      });

      // Title animation
      tl.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        0
      );

      // Intro animation
      tl.fromTo(
        introRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        0.2
      );

      // Section animations
      sectionRefs.current.forEach((section, index) => {
        if (section) {
          tl.fromTo(
            section,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
            0.4 + index * 0.15
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="accreditations"
      ref={sectionRef}
      className="relative w-full bg-gradient-to-br from-[#F6F7FB] to-white py-16 lg:py-24"
    >
      {/* Background decoration */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230B1E3B' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h1
            ref={titleRef}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1E3B] mb-6"
          >
            Accreditations & Recognition
          </h1>
          <div
            ref={introRef}
            className="max-w-4xl mx-auto"
          >
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              STEMlens Network is committed to maintaining high standards in STEM education, innovation, governance, and youth development.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our accreditations, recognitions, and institutional alignments reflect our commitment to quality, accountability, and global relevance.
            </p>
          </div>
        </div>

        {/* Our Accreditations and Certifications */}
        <div
          ref={(el) => (sectionRefs.current[0] = el)}
          className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 lg:p-10 mb-8 lg:mb-10"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#0B1E3B] to-[#1a3a5c] rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838z"/>
                <path d="M3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1h4a1 1 0 110 2H7a1 1 0 01-1-1z"/>
              </svg>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#0B1E3B]">
              Our Accreditations and Certifications
            </h2>
          </div>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            STEMlens Network maintains and pursues appropriate institutional registrations, certifications, and accreditations relevant to its programs and operations.
            These accreditations reflect our commitment to quality assurance, ethical practice, and alignment with recognized standards.
          </p>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
            <p className="text-gray-700 font-medium text-center">
              Please see our accreditations and certifications below.
            </p>
            <div className="mt-4 flex justify-center">
              <button className="px-6 py-3 bg-[#0B1E3B] text-white rounded-lg hover:bg-[#1a3a5c] transition-colors duration-200">
                View Accreditations
              </button>
            </div>
          </div>
        </div>

        {/* Recognition & Institutional Engagement */}
        <div
          ref={(el) => (sectionRefs.current[1] = el)}
          className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 lg:p-10 mb-8 lg:mb-10"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#D62828] to-[#b91d1d] rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#0B1E3B]">
              Recognition & Institutional Engagement
            </h2>
          </div>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            STEMlens Network is recognized through its participation, collaboration, and engagement within STEM education, innovation ecosystems, and youth development platforms.
          </p>
          
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <p className="text-gray-700 font-medium mb-4">Our recognition and institutional engagement include:</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#D62828] mr-3 mt-1">•</span>
                <span className="text-gray-600">Invitations to participate in STEM and youth innovation initiatives</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D62828] mr-3 mt-1">•</span>
                <span className="text-gray-600">Participation in regional and global STEM education and innovation platforms</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D62828] mr-3 mt-1">•</span>
                <span className="text-gray-600">Engagement with schools, institutions, and partner organizations</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D62828] mr-3 mt-1">•</span>
                <span className="text-gray-600">Participation in competitions, exchanges, and innovation programs</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D62828] mr-3 mt-1">•</span>
                <span className="text-gray-600">Collaboration with educators, institutions, and innovation ecosystems</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border border-red-100">
            <p className="text-gray-700 font-medium text-center">
              Please see our recognitions, invitations, and institutional acknowledgements below.
            </p>
            <div className="mt-4 flex justify-center">
              <button className="px-6 py-3 bg-[#D62828] text-white rounded-lg hover:bg-[#b91d1d] transition-colors duration-200">
                View Recognitions
              </button>
            </div>
          </div>
        </div>

        {/* Affiliations & Standards Alignment */}
        <div
          ref={(el) => (sectionRefs.current[2] = el)}
          className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 lg:p-10 mb-8 lg:mb-10"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#0B1E3B]">
              Affiliations & Standards Alignment
            </h2>
          </div>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            STEMlens Network programs are designed and delivered in alignment with globally recognized frameworks and priorities in STEM education, innovation, and youth development.
          </p>
          
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <p className="text-gray-700 font-medium mb-4">Our programs align with:</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">•</span>
                <span className="text-gray-600">STEM and STEAM education best practices</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">•</span>
                <span className="text-gray-600">Project-based and experiential learning methodologies</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">•</span>
                <span className="text-gray-600">Innovation and entrepreneurship development frameworks</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">•</span>
                <span className="text-gray-600">Ethical and responsible use of technology</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">•</span>
                <span className="text-gray-600">Digital skills and innovation readiness priorities</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">•</span>
                <span className="text-gray-600">The United Nations Sustainable Development Goals (SDGs)</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <p className="text-gray-700 mb-3">
              This alignment ensures that learners develop skills that are relevant, responsible, and globally applicable.
            </p>
            <p className="text-gray-700 font-medium text-center">
              Please see our affiliations and standards alignments below.
            </p>
            <div className="mt-4 flex justify-center">
              <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-emerald-600 transition-colors duration-200">
                View Affiliations
              </button>
            </div>
          </div>
        </div>

        {/* Learner Recognition and Credentials */}
        <div
          ref={(el) => (sectionRefs.current[3] = el)}
          className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 lg:p-10 mb-8 lg:mb-10"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
              </svg>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#0B1E3B]">
              Learner Recognition and Credentials
            </h2>
          </div>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            Learners who participate in STEMlens programs may receive certificates, digital badges, or formal acknowledgements based on participation, skills development, and project completion.
          </p>
          
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <p className="text-gray-700 mb-3">
              These recognitions reflect learner progress, innovation participation, and capability development, and support learners as they pursue further education, competitions, and future opportunities.
            </p>
            <p className="text-gray-700 font-medium text-center">
              Please see examples of learner recognition, certificates, and credentials below.
            </p>
            <div className="mt-4 flex justify-center">
              <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-indigo-600 transition-colors duration-200">
                View Credentials
              </button>
            </div>
          </div>
        </div>

        {/* Institutional Integrity and Continuous Development */}
        <div
          ref={(el) => (sectionRefs.current[4] = el)}
          className="bg-gradient-to-br from-[#0B1E3B] to-[#1a3a5c] rounded-2xl shadow-xl border border-blue-200/20 p-8 lg:p-10 text-white"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold">
              Institutional Integrity and Continuous Development
            </h2>
          </div>
          
          <p className="text-white/90 mb-6 leading-relaxed">
            STEMlens Network maintains a clear and evolving institutional record that reflects our commitment to transparency, quality, and meaningful impact.
          </p>
          
          <p className="text-white/90 mb-6 leading-relaxed">
            We continuously strengthen our programs, partnerships, and institutional capacity to ensure alignment with global standards and emerging innovation ecosystems.
          </p>
          
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
            <p className="text-white font-medium text-center text-lg">
              STEMlens Network values recognition that reflects quality, integrity, and real-world impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
