import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Programs from './sections/Programs';
import Solutions from './sections/Solutions';
import Pipeline from './sections/Pipeline';
import Impact from './sections/Impact';
import Partners from './sections/Partners';
import JoinCTA from './sections/JoinCTA';
import Footer from './sections/Footer';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Wait for all ScrollTriggers to be created
    const timeout = setTimeout(() => {
      const triggers = ScrollTrigger.getAll();
      const maxScroll = ScrollTrigger.maxScroll(window);

      if (!maxScroll || triggers.length === 0) return;

      // Build ranges and snap targets from actual pinned sections
      const pinnedRanges = triggers
        .filter((st) => st.vars.pin)
        .sort((a, b) => a.start - b.start)
        .map((st) => ({
          start: st.start / maxScroll,
          end: (st.end ?? st.start) / maxScroll,
          center: (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll,
        }));

      // Create global snap
      ScrollTrigger.create({
        snap: {
          snapTo: (value: number) => {
            // Check if within any pinned range (with small buffer)
            const inPinned = pinnedRanges.some(
              (r) => value >= r.start - 0.02 && value <= r.end + 0.02
            );
            if (!inPinned) return value; // free scroll

            // Find nearest pinned center
            const target = pinnedRanges.reduce(
              (closest, r) =>
                Math.abs(r.center - value) < Math.abs(closest - value)
                  ? r.center
                  : closest,
              pinnedRanges[0]?.center ?? 0
            );
            return target;
          },
          duration: { min: 0.15, max: 0.35 },
          delay: 0,
          ease: 'power2.out',
        },
      });
    }, 100);

    return () => {
      clearTimeout(timeout);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#F6F7FB]">
      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main className="relative">
        <Hero />
        <Programs />
        <Solutions />
        <Pipeline />
        <Impact />
        <Partners />
        <JoinCTA />
        <Footer />
      </main>
    </div>
  );
}

export default App;
