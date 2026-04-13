import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import stemlensLogo from '../logos/stemlens-network-logo.png';
import SafeImage from '../components/SafeImage';
import AssetErrorBoundary from '../components/AssetErrorBoundary';
import VirtualDropdown from '../components/VirtualDropdown';
import { HEIGHTS } from '../constants/ui';
import { SCROLL_THRESHOLDS } from '../constants/scroll';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    community: false,
    about: false,
    stemAcademy: false,
    innovation: false,
    impact: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLDS.NAVIGATION_SCROLL);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (dropdownName: keyof typeof dropdowns) => {
    setDropdowns(prev => ({
      ...prev,
      [dropdownName]: !prev[dropdownName],
      // Close all other dropdowns
      ...(Object.keys(prev).reduce((acc, key) => {
        if (key !== dropdownName) {
          acc[key as keyof typeof dropdowns] = false;
        }
        return acc;
      }, {} as Partial<typeof dropdowns>))
    }));
  };

  const closeDropdown = (dropdownName: keyof typeof dropdowns) => {
    setDropdowns(prev => ({
      ...prev,
      [dropdownName]: false,
    }));
  };

  const impactDropdownItems = [
    { label: 'Competition Achievements', href: '#competition-achievements' },
    { label: 'Global Participation', href: '#global-participation' },
    { label: 'Impact Dashboard', href: '#impact-dashboard' },
    { label: 'Impact Overview', href: '#impact-overview' },
    { label: 'Innovation Outcomes', href: '#innovation-outcomes' },
    { label: 'Institutional Partnerships', href: '#institutional-partnerships' },
    { label: 'Research and Publications', href: '#research-publications' },
    { label: 'Student and Innovator Stories', href: '#student-stories' },
  ];

  const innovationDropdownItems = [
    { label: 'Accelerator and Incubator Pathways', href: '#accelerator-incubator-pathways' },
    { label: 'Global Engagement', href: '#global-engagement' },
    { label: 'Global Youth Platforms', href: '#global-youth-platforms' },
    { label: 'Innovation Ecosystem', href: '#innovation-ecosystem' },
    { label: 'Innovation Showcases', href: '#innovation-showcases' },
    { label: 'Prototyping & Labs', href: '#prototyping-labs' },
    { label: 'STEMlens Innovation Challenge', href: '#innovation-challenge' },
    { label: 'STEMlens Innovation Cup', href: '#innovation-cup' },
  ];

  const stemAcademyDropdownItems = [
    { label: '3D Design & Engineering', href: '#3d-design-engineering' },
    { label: 'AI & Machine Learning', href: '#ai-machine-learning' },
    { label: 'ArtScience', href: '#artscience' },
    { label: 'Coding & Programming', href: '#coding-programming' },
    { label: 'Cybersecurity', href: '#cybersecurity' },
    { label: 'Data Science & Analytics', href: '#data-science-analytics' },
    { label: 'Digital Technologies & Media', href: '#digital-tech-media' },
    { label: 'Drone & Remote Sensing', href: '#drone-remote-sensing' },
    { label: 'Electronics & Embedded Systems', href: '#electronics-embedded' },
    { label: 'Engineering Design & Systems Thinking', href: '#engineering-design' },
    { label: 'IoT & Smart Systems', href: '#iot-smart-systems' },
    { label: 'Public Speaking & Intellectual Property', href: '#public-speaking-ip' },
    { label: 'Robotics & Automation', href: '#robotics-automation' },
    { label: 'SpaceQuest', href: '#spacequest' },
    { label: 'STEMpreneurship', href: '#stempreneurship' },
    { label: '3D Printing / Starter Kits', href: '#starter-kits' },
  ];

  const aboutDropdownItems = [
    { label: 'Who We Are', href: '#who-we-are' },
    { label: 'Our Mission & Vision', href: '#mission-vision' },
    { label: 'Our Approach to STEAM', href: '#steam-approach' },
    { label: 'Impact & Global Reach', href: '#impact-global' },
    { label: 'Our Team & Advisors', href: '#team-advisors' },
    { label: 'Partners & Supporters', href: '#partners-supporters' },
    { label: 'Careers at STEMlens', href: '#careers' },
    { label: 'Media & Publications', href: '#media-publications' },
  ];

  const communityDropdownItems = [
    { label: 'Alumni Network', href: '#alumni-network' },
    { label: 'Clubs & Programs', href: '#clubs-programs' },
    { label: 'Join the STEMlens Innovators Club', href: '#innovators-club' },
    { label: 'Leadership Opportunities', href: '#leadership' },
    { label: 'Mentorship & Fellowships', href: '#mentorship' },
    { label: 'Scholarships & Badges', href: '#scholarships' },
  ];

  const navLinks = [
    { label: 'About', href: '#about', hasDropdown: true },
    { label: 'STEM Academy', href: '#stem-academy', hasDropdown: true },
    { label: 'Innovation', href: '#innovation', hasDropdown: true },
    { label: 'Community', href: '#community', hasDropdown: true },
    { label: 'Impact', href: '#impact', hasDropdown: true },
    { label: 'Shop', href: '#shop' },
    { label: 'Join', href: '#join', isButton: true },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-18 xl:h-20">
          {/* Logo */}
          <AssetErrorBoundary assetType="logo">
            <a href="#" className="flex items-center gap-2 z-10">
              <SafeImage
                src={stemlensLogo}
                alt="STEMlens Network"
                className={`h-${HEIGHTS.NAVIGATION_SMALL} sm:h-${HEIGHTS.NAVIGATION_MEDIUM} lg:h-${HEIGHTS.NAVIGATION_LARGE} xl:h-${HEIGHTS.NAVIGATION_EXTRA_LARGE} w-auto`}
                onError={(error) => {
                  console.warn('Navigation logo failed to load:', error);
                }}
              />
            </a>
          </AssetErrorBoundary>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center gap-4 lg:gap-6 xl:gap-8 flex-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative">
                {link.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => {
                        if (link.label === 'About') {
                          toggleDropdown('about');
                        } else if (link.label === 'Community') {
                          toggleDropdown('community');
                        } else if (link.label === 'STEM Academy') {
                          toggleDropdown('stemAcademy');
                        } else if (link.label === 'Innovation') {
                          toggleDropdown('innovation');
                        } else if (link.label === 'Impact') {
                          toggleDropdown('impact');
                        }
                      }}
                      className={`flex items-center gap-1 text-xs sm:text-sm font-medium transition-colors hover:text-[#D62828] ${
                        isScrolled ? 'text-[#0B1E3B]' : 'text-[#0B1E3B]'
                      }`}
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${
                        (link.label === 'About' && dropdowns.about) || 
                        (link.label === 'Community' && dropdowns.community) ||
                        (link.label === 'STEM Academy' && dropdowns.stemAcademy) ||
                        (link.label === 'Innovation' && dropdowns.innovation) ||
                        (link.label === 'Impact' && dropdowns.impact)
                          ? 'rotate-180' : ''
                      }`} />
                    </button>
                    {link.label === 'About' && dropdowns.about && (
                      <div className="absolute top-full left-0 mt-2 w-64 sm:w-72 lg:w-80 bg-white rounded-xl shadow-2xl border border-gray-200/50 backdrop-blur-sm py-3 z-50 frame-container">
                        {aboutDropdownItems.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            className="flex items-center gap-3 px-4 py-3 text-xs sm:text-sm text-[#0B1E3B] hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:text-[#D62828] transition-all duration-200 border-b border-gray-100/50 last:border-b-0 frame-item"
                            onClick={() => closeDropdown('about')}
                          >
                            <span>{item.label}</span>
                          </a>
                        ))}
                      </div>
                    )}
                    {link.label === 'STEM Academy' && dropdowns.stemAcademy && (
                      <VirtualDropdown
                        items={stemAcademyDropdownItems}
                        isOpen={dropdowns.stemAcademy}
                        onClose={() => closeDropdown('stemAcademy')}
                        onItemClick={(item) => {
                          // Navigate to the item's href
                          window.location.href = item.href;
                        }}
                        className="w-72 sm:w-80 lg:w-96"
                        enableSearch={true}
                        placeholder="Search STEM programs..."
                      />
                    )}
                    {link.label === 'Innovation' && dropdowns.innovation && (
                      <div className="absolute top-full left-0 mt-2 w-72 sm:w-80 lg:w-96 bg-white rounded-xl shadow-2xl border border-gray-200/50 backdrop-blur-sm py-3 z-50 max-h-96 overflow-y-auto frame-container">
                        {innovationDropdownItems.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            className="flex items-center gap-3 px-4 py-3 text-xs sm:text-sm text-[#0B1E3B] hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:text-[#D62828] transition-all duration-200 border-b border-gray-100/50 last:border-b-0 frame-item"
                            onClick={() => closeDropdown('innovation')}
                          >
                            <span>{item.label}</span>
                          </a>
                        ))}
                      </div>
                    )}
                    {link.label === 'Impact' && dropdowns.impact && (
                      <div className="absolute top-full left-0 mt-2 w-72 sm:w-80 lg:w-96 bg-white rounded-xl shadow-2xl border border-gray-200/50 backdrop-blur-sm py-3 z-50 max-h-96 overflow-y-auto frame-container">
                        {impactDropdownItems.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            className="flex items-center gap-3 px-4 py-3 text-xs sm:text-sm text-[#0B1E3B] hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:text-[#D62828] transition-all duration-200 border-b border-gray-100/50 last:border-b-0 frame-item"
                            onClick={() => closeDropdown('impact')}
                          >
                            <span>{item.label}</span>
                          </a>
                        ))}
                      </div>
                    )}
                    {link.label === 'Community' && dropdowns.community && (
                      <div className="absolute top-full left-0 mt-2 w-64 sm:w-72 lg:w-80 bg-white rounded-xl shadow-2xl border border-gray-200/50 backdrop-blur-sm py-3 z-50 frame-container">
                        {communityDropdownItems.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            className="flex items-center gap-3 px-4 py-3 text-xs sm:text-sm text-[#0B1E3B] hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:text-[#D62828] transition-all duration-200 border-b border-gray-100/50 last:border-b-0 frame-item"
                            onClick={() => closeDropdown('community')}
                          >
                            <span>{item.label}</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : link.isButton ? (
                  <button
                    className="px-3 py-1.5 sm:px-4 sm:py-2 border-2 border-[#0B1E3B] text-[#0B1E3B] text-xs sm:text-sm font-semibold rounded-lg hover:bg-[#0B1E3B] hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                ) : (
                  <a
                    href={link.href}
                    className={`text-xs sm:text-sm font-medium transition-colors hover:text-[#D62828] ${
                      isScrolled ? 'text-[#0B1E3B]' : 'text-[#0B1E3B]'
                    }`}
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 z-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#0B1E3B]" />
            ) : (
              <Menu className="w-6 h-6 text-[#0B1E3B]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-3 sm:py-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => {
                          if (link.label === 'About') {
                            toggleDropdown('about');
                          } else if (link.label === 'Community') {
                            toggleDropdown('community');
                          } else if (link.label === 'STEM Academy') {
                            toggleDropdown('stemAcademy');
                          } else if (link.label === 'Innovation') {
                            toggleDropdown('innovation');
                          } else if (link.label === 'Impact') {
                            toggleDropdown('impact');
                          }
                        }}
                        className="flex items-center justify-between w-full text-[#0B1E3B] font-medium px-2 py-2 hover:text-[#D62828] transition-colors"
                      >
                        <span>{link.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${
                          (link.label === 'About' && dropdowns.about) || 
                          (link.label === 'Community' && dropdowns.community) ||
                          (link.label === 'STEM Academy' && dropdowns.stemAcademy) ||
                          (link.label === 'Innovation' && dropdowns.innovation) ||
                          (link.label === 'Impact' && dropdowns.impact)
                            ? 'rotate-180' : ''
                        }`} />
                      </button>
                      {link.label === 'About' && dropdowns.about && (
                        <div className="pl-4 pr-3 py-3 space-y-1 max-h-64 overflow-y-auto bg-gray-50/50 rounded-lg mx-2 frame-container-mobile">
                          {aboutDropdownItems.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="flex items-center gap-3 text-sm text-[#0B1E3B] hover:bg-white hover:text-[#D62828] hover:shadow-sm hover:rounded-md transition-all duration-200 py-3 px-3 border-b border-gray-200/30 last:border-b-0 frame-item-mobile"
                              onClick={() => {
                                closeDropdown('about');
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              <span>{item.label}</span>
                            </a>
                          ))}
                        </div>
                      )}
                      {link.label === 'STEM Academy' && dropdowns.stemAcademy && (
                        <VirtualDropdown
                          items={stemAcademyDropdownItems}
                          isOpen={dropdowns.stemAcademy}
                          onClose={() => closeDropdown('stemAcademy')}
                          onItemClick={(item) => {
                            window.location.href = item.href;
                            setIsMobileMenuOpen(false);
                          }}
                          className="w-full mx-2"
                          enableSearch={true}
                          placeholder="Search STEM programs..."
                          maxHeight={256} // max-h-64 in pixels
                        />
                      )}
                      {link.label === 'Innovation' && dropdowns.innovation && (
                        <div className="pl-4 pr-3 py-3 space-y-1 max-h-64 overflow-y-auto bg-gray-50/50 rounded-lg mx-2 frame-container-mobile">
                          {innovationDropdownItems.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="flex items-center gap-3 text-sm text-[#0B1E3B] hover:bg-white hover:text-[#D62828] hover:shadow-sm hover:rounded-md transition-all duration-200 py-3 px-3 border-b border-gray-200/30 last:border-b-0 frame-item-mobile"
                              onClick={() => {
                                closeDropdown('innovation');
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              <span>{item.label}</span>
                            </a>
                          ))}
                        </div>
                      )}
                      {link.label === 'Impact' && dropdowns.impact && (
                        <div className="pl-4 pr-3 py-3 space-y-1 max-h-64 overflow-y-auto bg-gray-50/50 rounded-lg mx-2 frame-container-mobile">
                          {impactDropdownItems.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="flex items-center gap-3 text-sm text-[#0B1E3B] hover:bg-white hover:text-[#D62828] hover:shadow-sm hover:rounded-md transition-all duration-200 py-3 px-3 border-b border-gray-200/30 last:border-b-0 frame-item-mobile"
                              onClick={() => {
                                closeDropdown('impact');
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              <span>{item.label}</span>
                            </a>
                          ))}
                        </div>
                      )}
                      {link.label === 'Community' && dropdowns.community && (
                        <div className="pl-4 pr-3 py-3 space-y-1 max-h-64 overflow-y-auto bg-gray-50/50 rounded-lg mx-2 frame-container-mobile">
                          {communityDropdownItems.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="flex items-center gap-3 text-sm text-[#0B1E3B] hover:bg-white hover:text-[#D62828] hover:shadow-sm hover:rounded-md transition-all duration-200 py-3 px-3 border-b border-gray-200/30 last:border-b-0 frame-item-mobile"
                              onClick={() => {
                                closeDropdown('community');
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              <span>{item.label}</span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : link.isButton ? (
                    <button
                      className="w-full px-4 py-3 border-2 border-[#0B1E3B] text-[#0B1E3B] font-semibold rounded-lg hover:bg-[#0B1E3B] hover:text-white transition-colors mx-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="text-[#0B1E3B] font-medium px-2 py-2 hover:text-[#D62828] transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
