import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const aboutLinks = [
  'About STEMlens',
  'Leadership',
  'Impact',
  'Careers',
];

const programLinks = [
  'STEM Programs',
  'Youth Innovation Challenge',
  'Global & SDG Work',
];

const partnerLinks = [
  'Schools',
  'Professionals',
  'Institutions',
  'Partners',
];

const quickLinks = [
  'Upcoming Events',
  'Shop & Resources',
  'Media & Publications',
  'Contact Us',
];

export default function Footer() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const columnsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          end: '+=80%',
          scrub: 0.6,
          pin: false,
        },
      });

      // Card
      scrollTl.fromTo(
        cardRef.current,
        { y: '6vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0
      );

      // Columns
      columnsRef.current.forEach((col, i) => {
        if (col) {
          scrollTl.fromTo(
            col,
            { y: 14, opacity: 0 },
            { y: 0, opacity: 1, ease: 'none' },
            0.06 + i * 0.03
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <footer
      id="about"
      ref={sectionRef}
      className="relative w-full bg-[#0B1E3B] pt-6 lg:pt-8"
    >
      <div
        ref={cardRef}
        className="relative w-[92vw] mx-auto"
      >
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {/* About Us */}
          <div ref={(el) => { columnsRef.current[0] = el; }}>
            <h4 className="text-white font-semibold text-sm mb-3">
              About Us
            </h4>
            <ul className="space-y-1.5">
              {aboutLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/70 text-xs hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div ref={(el) => { columnsRef.current[1] = el; }}>
            <h4 className="text-white font-semibold text-sm mb-3">
              Programs
            </h4>
            <ul className="space-y-1.5">
              {programLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/70 text-xs hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners */}
          <div ref={(el) => { columnsRef.current[2] = el; }}>
            <h4 className="text-white font-semibold text-sm mb-3">
              Partners
            </h4>
            <ul className="space-y-1.5">
              {partnerLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/70 text-xs hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div ref={(el) => { columnsRef.current[3] = el; }}>
            <h4 className="text-white font-semibold text-sm mb-3">
              Quick Links
            </h4>
            <ul className="space-y-1.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/70 text-xs hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Connected */}
          <div ref={(el) => { columnsRef.current[4] = el; }} className="col-span-2 md:col-span-3 lg:col-span-1">
            <h4 className="text-white font-semibold text-sm mb-3">
              Stay Connected
            </h4>
            <p className="text-white/70 text-xs mb-3">
              Subscribe to receive the latest STEMlens news and updates.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-xs placeholder:text-white/50 focus:outline-none focus:border-white/40"
                required
              />
              <button
                type="submit"
                className="px-3 py-2 bg-[#D62828] text-white text-xs font-semibold rounded-lg hover:bg-[#b91d1d] transition-colors"
              >
                Sign Up
              </button>
            </form>
            <div className="flex gap-2">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs text-center sm:text-left">
            © 2024 STEMlens Network. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-white/50 text-xs hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/50 text-xs hover:text-white transition-colors"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
