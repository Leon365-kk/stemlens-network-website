import { useState } from 'react';
import SafeImage from '../components/SafeImage';
import AssetErrorBoundary from '../components/AssetErrorBoundary';
import { SDG_GOALS, SDG_GRID, SDG_ANIMATION } from '../constants/sdg';

// Import all SDG images
import goal6 from '../sdgs/E-WEB-Goal-06.png';
import goal7 from '../sdgs/E-WEB-Goal-07.png';
import goal8 from '../sdgs/E-WEB-Goal-08.png';
import goal9 from '../sdgs/E-WEB-Goal-09.png';
import goal10 from '../sdgs/E-WEB-Goal-10.png';
import goal11 from '../sdgs/E-WEB-Goal-11.png';
import goal12 from '../sdgs/E-WEB-Goal-12.png';
import goal13 from '../sdgs/E-WEB-Goal-13.png';
import goal14 from '../sdgs/E-WEB-Goal-14.png';
import goal15 from '../sdgs/E-WEB-Goal-15.png';
import goal16 from '../sdgs/E-WEB-Goal-16.png';
import goal17 from '../sdgs/E-WEB-Goal-17.png';

const sdgs = [
  { id: SDG_GOALS.CLEAN_WATER, image: goal6, title: 'Clean Water and Sanitation', description: 'Ensure availability and sustainable management of water and sanitation for all.' },
  { id: SDG_GOALS.CLEAN_ENERGY, image: goal7, title: 'Affordable and Clean Energy', description: 'Ensure access to affordable, reliable, sustainable and modern energy for all.' },
  { id: SDG_GOALS.ECONOMIC_GROWTH, image: goal8, title: 'Decent Work and Economic Growth', description: 'Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all.' },
  { id: SDG_GOALS.INDUSTRY_INNOVATION, image: goal9, title: 'Industry, Innovation and Infrastructure', description: 'Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation.' },
  { id: SDG_GOALS.REDUCED_INEQUALITIES, image: goal10, title: 'Reduced Inequalities', description: 'Reduce inequality within and among countries.' },
  { id: SDG_GOALS.SUSTAINABLE_CITIES, image: goal11, title: 'Sustainable Cities and Communities', description: 'Make cities and human settlements inclusive, safe, resilient and sustainable.' },
  { id: SDG_GOALS.RESPONSIBLE_CONSUMPTION, image: goal12, title: 'Responsible Consumption and Production', description: 'Ensure sustainable consumption and production patterns.' },
  { id: SDG_GOALS.CLIMATE_ACTION, image: goal13, title: 'Climate Action', description: 'Take urgent action to combat climate change and its impacts.' },
  { id: SDG_GOALS.LIFE_BELOW_WATER, image: goal14, title: 'Life Below Water', description: 'Conserve and sustainably use the oceans, seas and marine resources for sustainable development.' },
  { id: SDG_GOALS.LIFE_ON_LAND, image: goal15, title: 'Life on Land', description: 'Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss.' },
  { id: SDG_GOALS.PEACE_JUSTICE, image: goal16, title: 'Peace, Justice and Strong Institutions', description: 'Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels.' },
  { id: SDG_GOALS.PARTNERSHIPS, image: goal17, title: 'Partnerships for the Goals', description: 'Strengthen the means of implementation and revitalize the global partnership for sustainable development.' },
];

export default function SDGs() {
  const [hoveredGoal, setHoveredGoal] = useState<number | null>(null);

  return (
    <section id="sdgs" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0B1E3B] mb-6">
            Sustainable Development Goals
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            STEMlens Network is committed to advancing the United Nations Sustainable Development Goals through innovative STEM education, research, and community engagement. Our initiatives align with these global targets to create a more sustainable and equitable future.
          </p>
        </div>

        {/* SDGs Grid */}
        <div className={`grid grid-cols-${SDG_GRID.COLUMNS_SMALL} md:grid-cols-${SDG_GRID.COLUMNS_MEDIUM} lg:grid-cols-${SDG_GRID.COLUMNS_LARGE} gap-${SDG_GRID.GAP}`}>
          {sdgs.map((sdg) => (
            <div
              key={sdg.id}
              className={`relative group cursor-pointer transform transition-all duration-${SDG_ANIMATION.TRANSITION_DURATION} hover:scale-[${SDG_ANIMATION.HOVER_SCALE}]`}
              onMouseEnter={() => setHoveredGoal(sdg.id)}
              onMouseLeave={() => setHoveredGoal(null)}
            >
              {/* SDG Card */}
              <div className={`bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-${SDG_ANIMATION.SHADOW_DURATION}`}>
                {/* SDG Image */}
                <AssetErrorBoundary assetType="image">
                  <div className={`relative h-[${SDG_GRID.CARD_HEIGHT}px] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100`}>
                    <SafeImage
                      src={sdg.image}
                      alt={`SDG ${sdg.id}: ${sdg.title}`}
                      className="max-w-full max-h-full object-contain p-4"
                      onError={(error) => {
                        console.warn(`SDG ${sdg.id} image failed to load:`, error);
                      }}
                    />
                  </div>
                </AssetErrorBoundary>
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-semibold text-[#0B1E3B]">
                  Goal {sdg.id}
                </div>
                
                {/* SDG Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-sm text-[#0B1E3B] mb-2 line-clamp-2">
                    {sdg.title}
                  </h3>
                  
                  {/* Expandable Description */}
                  <div className={`overflow-hidden transition-all duration-300 ${
                    hoveredGoal === sdg.id ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {sdg.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#0B1E3B] to-[#1a3a6a] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Join Us in Advancing the SDGs
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Together, we can leverage STEM education and innovation to achieve these global goals and create lasting impact.
            </p>
            <button className="bg-white text-[#0B1E3B] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Involved
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
