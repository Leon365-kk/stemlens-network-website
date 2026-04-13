import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import solutionImage from '../../assets/asset_1.jpg';
import SafeImage from '../components/SafeImage';
import AssetErrorBoundary from '../components/AssetErrorBoundary';
import { 
  ANIMATION_TIMING, 
  ANIMATION_VALUES, 
  EASING 
} from '../constants/animations';
import { 
  VIEWPORT_HEIGHTS, 
  VIEWPORT_WIDTHS, 
  BORDER_RADIUS, 
  SHADOWS 
} from '../constants/layout';
import { TYPOGRAPHY } from '../constants/ui';

gsap.registerPlugin(ScrollTrigger);

export default function Solutions() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardARef = useRef<HTMLDivElement>(null);
  const cardBRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current || !cardARef.current || !cardBRef.current || 
          !headlineRef.current || !bodyRef.current || !ctaRef.current) {
        return;
      }

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: ANIMATION_TIMING.SCROLL_START,
          end: ANIMATION_TIMING.SCROLL_END,
          scrub: ANIMATION_TIMING.SCRUB_SPEED,
          pin: false,
        },
      });

      // Card A (image)
      scrollTl.fromTo(
        cardARef.current,
        { x: ANIMATION_VALUES.X_NEGATIVE_LARGE, opacity: ANIMATION_VALUES.OPACITY_HIDDEN },
        { x: ANIMATION_VALUES.X_ZERO, opacity: ANIMATION_VALUES.OPACITY_VISIBLE, ease: EASING.NONE },
        ANIMATION_TIMING.DELAY_IMMEDIATE
      );

      // Card B (text)
      scrollTl.fromTo(
        cardBRef.current,
        { x: ANIMATION_VALUES.X_POSITIVE_LARGE, opacity: ANIMATION_VALUES.OPACITY_HIDDEN },
        { x: ANIMATION_VALUES.X_ZERO, opacity: ANIMATION_VALUES.OPACITY_VISIBLE, ease: EASING.NONE },
        ANIMATION_TIMING.DELAY_IMMEDIATE
      );

      // Headline
      scrollTl.fromTo(
        headlineRef.current,
        { y: ANIMATION_VALUES.Y_NEGATIVE_MEDIUM, opacity: ANIMATION_VALUES.OPACITY_HIDDEN },
        { y: ANIMATION_VALUES.Y_ZERO, opacity: ANIMATION_VALUES.OPACITY_VISIBLE, ease: EASING.NONE },
        ANIMATION_TIMING.DELAY_SHORT
      );

      // Body + CTA
      scrollTl.fromTo(
        bodyRef.current,
        { y: ANIMATION_VALUES.Y_NEGATIVE_TINY, opacity: ANIMATION_VALUES.OPACITY_HIDDEN },
        { y: ANIMATION_VALUES.Y_ZERO, opacity: ANIMATION_VALUES.OPACITY_VISIBLE, ease: EASING.NONE },
        ANIMATION_TIMING.DELAY_MEDIUM
      );
      scrollTl.fromTo(
        ctaRef.current,
        { y: ANIMATION_VALUES.Y_NEGATIVE_TINY, opacity: ANIMATION_VALUES.OPACITY_HIDDEN },
        { y: ANIMATION_VALUES.Y_ZERO, opacity: ANIMATION_VALUES.OPACITY_VISIBLE, ease: EASING.NONE },
        ANIMATION_TIMING.DELAY_LONG
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#F6F7FB] py-4 lg:py-6"
    >
      <div className="relative w-full px-4 sm:px-6 lg:px-12 min-h-[auto] lg:min-h-[80vh] flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0">
        {/* Card A - Image */}
        <div
          ref={cardARef}
          className={`relative w-full lg:w-[${VIEWPORT_WIDTHS.EXTRA_LARGE}] lg:absolute lg:left-[${VIEWPORT_WIDTHS.SMALL}] lg:top-[${VIEWPORT_HEIGHTS.SMALL}] lg:h-[${VIEWPORT_HEIGHTS.EXTRA_LARGE}] rounded-[${BORDER_RADIUS.LARGE}px] overflow-hidden shadow-[${SHADOWS.CARD}] order-2 lg:order-1`}
        >
          <AssetErrorBoundary assetType="image">
            <div className="red-overlay w-full h-full">
              <SafeImage
                src={solutionImage}
                alt="STEM students working on innovative solutions and technology projects"
                className="w-full h-full object-cover min-h-[260px] lg:min-h-0"
                onError={(error) => {
                  console.warn('Solutions image failed to load:', error);
                }}
              />
            </div>
          </AssetErrorBoundary>
        </div>

        {/* Card B - Text Content */}
        <div
          ref={cardBRef}
          className={`relative w-full lg:w-[${VIEWPORT_WIDTHS.MEDIUM}] lg:absolute lg:left-[${VIEWPORT_WIDTHS.LARGE}] lg:top-[${VIEWPORT_HEIGHTS.SMALL}] lg:h-[${VIEWPORT_HEIGHTS.EXTRA_LARGE}] bg-white rounded-[${BORDER_RADIUS.LARGE}px] shadow-[${SHADOWS.CARD}] border border-[rgba(11,30,59,0.10)] p-5 sm:p-6 lg:p-8 flex flex-col justify-center order-1 lg:order-2`}
        >
          <h2
            ref={headlineRef}
            className={`text-xl sm:text-2xl lg:text-[clamp(${TYPOGRAPHY.XXL}px,2.5vw,${TYPOGRAPHY.COLOSSAL}px)] font-bold text-[#0B1E3B] leading-[${TYPOGRAPHY.NORMAL}] tracking-[${TYPOGRAPHY.TIGHT_TRACKING}em] mb-3 lg:mb-4`}
          >
            STEM to Real-World Solutions
          </h2>
          <p
            ref={bodyRef}
            className={`text-sm sm:text-base text-[#6B7A90] leading-[${TYPOGRAPHY.RELAXED}] mb-4 lg:mb-5`}
          >
            Turning ideas into impact in climate, food systems, and communities.
          </p>
          <button
            ref={ctaRef}
            className="self-start px-5 py-2.5 bg-[#D62828] text-white text-sm font-semibold rounded-lg hover:bg-[#b91d1d] transition-all hover:-translate-y-1"
          >
            See Youth Innovation
          </button>
        </div>
      </div>
    </section>
  );
}
