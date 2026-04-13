import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Facebook, Twitter, Linkedin, Mail, type LucideIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
};

const aboutLinks: FooterLink[] = [
  { label: 'Who We Are', href: '#who-we-are' },
  { label: 'Mission & Vision', href: '#mission-vision' },
  { label: 'Impact & Global Reach', href: '#impact-global' },
];

const programLinks: FooterLink[] = [
  { label: 'Coding & Programming', href: '#coding-programming' },
  { label: 'Robotics & Automation', href: '#robotics-automation' },
  { label: 'STEMpreneurship', href: '#stempreneurship' },
];

const partnerLinks: FooterLink[] = [
  { label: 'Partners & Supporters', href: '#partners-supporters' },
  { label: 'Media & Publications', href: '#media-publications' },
];

const quickLinks: FooterLink[] = [
  { label: 'Shop', href: '#shop' },
  { label: 'Join STEMlens', href: '#careers' },
  { label: 'Contact Us', href: 'mailto:hello@stemlens.org' },
];

const legalLinks: FooterLink[] = [
  { label: 'Privacy Policy', href: 'mailto:hello@stemlens.org?subject=Privacy%20Policy%20Request' },
  { label: 'Terms of Use', href: 'mailto:hello@stemlens.org?subject=Terms%20of%20Use%20Request' },
];

const socialLinks: SocialLink[] = [
  { label: 'Facebook', href: 'https://www.facebook.com', icon: Facebook, external: true },
  { label: 'Twitter', href: 'https://www.twitter.com', icon: Twitter, external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: Linkedin, external: true },
  { label: 'Email STEMlens', href: 'mailto:hello@stemlens.org', icon: Mail },
];

export default function Footer() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const columnsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [email, setEmail] = useState('');
  const year = new Date().getFullYear();

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current || !cardRef.current) {
        return;
      }

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          end: '+=80%',
          scrub: 0.6,
          pin: false,
        },
      });

      scrollTl.fromTo(
        cardRef.current,
        { y: '6vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0
      );

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
      className="relative w-full bg-[#0B1E3B] pt-6 lg:pt-8 z-10"
    >
      <div ref={cardRef} className="relative w-[92vw] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 mb-6 lg:mb-8">
          <div ref={(el) => { columnsRef.current[0] = el; }}>
            <h4 className="text-white font-bold text-base lg:text-lg mb-4">
              About Us
            </h4>
            <ul className="space-y-2">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/90 hover:text-white hover:underline transition-all duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div ref={(el) => { columnsRef.current[1] = el; }}>
            <h4 className="text-white font-bold text-base lg:text-lg mb-4">
              Programs
            </h4>
            <ul className="space-y-2">
              {programLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/90 hover:text-white hover:underline transition-all duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div ref={(el) => { columnsRef.current[2] = el; }}>
            <h4 className="text-white font-bold text-base lg:text-lg mb-4">
              Partners
            </h4>
            <ul className="space-y-2">
              {partnerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/90 hover:text-white hover:underline transition-all duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div ref={(el) => { columnsRef.current[3] = el; }}>
            <h4 className="text-white font-bold text-base lg:text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/90 hover:text-white hover:underline transition-all duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div ref={(el) => { columnsRef.current[4] = el; }} className="col-span-2 md:col-span-3 lg:col-span-1">
            <h4 className="text-white font-bold text-base lg:text-lg mb-4">
              Stay Connected
            </h4>
            <p className="text-white/90 text-sm mb-4">
              Subscribe to receive the latest STEMlens news and updates.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white text-sm placeholder:text-white/60 focus:outline-none focus:border-white/50 focus:bg-white/25 transition-all w-full sm:w-auto"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-[#D62828] to-[#e74c3c] text-white text-base font-bold rounded-xl hover:from-[#b91d1d] hover:to-[#c62828] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 whitespace-nowrap w-full sm:w-auto transform active:scale-95 focus:outline-none focus:ring-4 focus:ring-white/30"
              >
                Sign Up
              </button>
            </form>
            <div className="flex gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.external ? '_blank' : undefined}
                    rel={social.external ? 'noreferrer' : undefined}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white/90 hover:bg-white/30 hover:text-white hover:scale-110 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/80 text-sm text-center sm:text-left font-medium">
            &copy; {year} STEMlens Network. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/80 text-sm hover:text-white hover:underline transition-all duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
