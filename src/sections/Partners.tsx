import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import partnersImage from '../../assets/asset_3.jpg';
import unescoLogo from '../logos/unesco.png';
import africanUnionLogo from '../logos/african_union.png';
import unicefLogo from '../logos/unicef.png';
import wiserLogo from '../logos/wiser.png';
import gpeLogo from '../logos/gpe.png';
import unepLogo from '../logos/unep.png';
import SafeImage from '../components/SafeImage';
import AssetErrorBoundary from '../components/AssetErrorBoundary';

gsap.registerPlugin(ScrollTrigger);

const partners = [
  { name: 'UNESCO', logo: unescoLogo },
  { name: 'African Union', logo: africanUnionLogo },
  { name: 'UNICEF', logo: unicefLogo },
  { name: 'Wiser', logo: wiserLogo },
  { name: 'Global Partnership', logo: gpeLogo },
  { name: 'UNEP', logo: unepLogo },
];

export default function Partners() {
  const sectionRef = useRef<HTMLElement>(null);
  const photoBandRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current || !photoBandRef.current || !cardRef.current || !titleRef.current) {
        return;
      }

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: '+=90%',
          scrub: 0.6,
          pin: false,
        },
      });

      // Photo band
      scrollTl.fromTo(
        photoBandRef.current,
        { y: '-10vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0
      );

      // Logo card
      scrollTl.fromTo(
        cardRef.current,
        { y: '8vh', opacity: 0, scale: 0.98 },
        { y: 0, opacity: 1, scale: 1, ease: 'none' },
        0.05
      );

      // Title
      scrollTl.fromTo(
        titleRef.current,
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.1
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Duplicate partners array for seamless looping
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section
      id="partners"
      ref={sectionRef}
      className="relative w-full bg-[#F6F7FB] py-4 lg:py-6"
    >
      {/* Photo band */}
      <div
        ref={photoBandRef}
        className="relative w-full h-[120px] lg:h-[18vh] overflow-hidden"
      >
        <AssetErrorBoundary assetType="image">
          <div className="red-overlay w-full h-full">
            <SafeImage
              src={partnersImage}
              alt="Partners audience"
              className="w-full h-full object-cover"
              onError={(error) => {
                console.warn('Partners image failed to load:', error);
              }}
            />
          </div>
        </AssetErrorBoundary>
      </div>

      {/* Logo card */}
      <div
        ref={cardRef}
        className="relative w-[92vw] mx-auto bg-white rounded-[18px] shadow-[0_18px_45px_rgba(11,30,59,0.10)] border border-[rgba(11,30,59,0.10)] p-5 sm:p-6 lg:p-8 -mt-6 lg:-mt-12 z-10"
      >
        <h2
          ref={titleRef}
          className="text-lg sm:text-xl lg:text-[clamp(24px,2.8vw,40px)] font-bold text-[#0B1E3B] text-center mb-5 lg:mb-6"
        >
          Our Partners & Supporters
        </h2>

        {/* Partner logos with automatic scrolling */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-left">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex items-center justify-center p-2 mx-6 lg:mx-8 flex-shrink-0 transition-all duration-300 hover:-translate-y-1"
              >
                <AssetErrorBoundary assetType="logo">
                  <SafeImage
                    src={partner.logo}
                    alt={partner.name}
                    className="h-10 lg:h-14 w-auto object-contain"
                    onError={(error) => {
                      console.warn(`Partner logo ${partner.name} failed to load:`, error);
                    }}
                  />
                </AssetErrorBoundary>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
