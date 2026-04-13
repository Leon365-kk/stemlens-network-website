import { useState, useEffect, useCallback, useRef } from 'react';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Programs from './sections/Programs';
import Solutions from './sections/Solutions';
import Pipeline from './sections/Pipeline';
import Impact from './sections/Impact';
import Partners from './sections/Partners';
import JoinCTA from './sections/JoinCTA';
import Footer from './sections/Footer';
import WhoWeAre from './pages/WhoWeAre';
import MissionVision from './pages/MissionVision';
import SteamApproach from './pages/SteamApproach';
import ImpactGlobalReach from './pages/ImpactGlobalReach';
import PartnersSupporters from './pages/PartnersSupporters';
import Careers from './pages/Careers';
import MediaPublications from './pages/MediaPublications';
import ThreeDDesignEngineering from './pages/ThreeDDesignEngineering';
import AIMachineLearning from './pages/AIMachineLearning';
import ArtScience from './pages/ArtScience';
import CodingProgramming from './pages/CodingProgramming';
import Cybersecurity from './pages/Cybersecurity';
import DataScienceAnalytics from './pages/DataScienceAnalytics';
import DigitalTechnologiesMedia from './pages/DigitalTechnologiesMedia';
import DroneRemoteSensing from './pages/DroneRemoteSensing';
import ElectronicsEmbeddedSystems from './pages/ElectronicsEmbeddedSystems';
import EngineeringDesignSystemsThinking from './pages/EngineeringDesignSystemsThinking';
import IoTSmartSystems from './pages/IoTSmartSystems';
import PublicSpeakingIntellectualProperty from './pages/PublicSpeakingIntellectualProperty';
import RoboticsAutomation from './pages/RoboticsAutomation';
import SpaceQuest from './pages/SpaceQuest';
import STEMpreneurship from './pages/STEMpreneurship';
import Shop from './pages/Shop';
import StarterKits from './pages/StarterKits';
import AcceleratorIncubatorPathways from './pages/AcceleratorIncubatorPathways';
import GlobalEngagement from './pages/GlobalEngagement';
import GlobalYouthPlatforms from './pages/GlobalYouthPlatforms';
import InnovationEcosystem from './pages/InnovationEcosystem';
import InnovationShowcases from './pages/InnovationShowcases';
import PrototypingLabs from './pages/PrototypingLabs';
import InnovationChallenge from './pages/InnovationChallenge';
import InnovationCup from './pages/InnovationCup';
import AlumniNetwork from './pages/AlumniNetwork';
import InnovatorsClub from './pages/InnovatorsClub';
import ClubsPrograms from './pages/ClubsPrograms';
import LeadershipOpportunities from './pages/LeadershipOpportunities';
import MentorshipFellowships from './pages/MentorshipFellowships';
import ScholarshipsBadges from './pages/ScholarshipsBadges';
import CompetitionAchievements from './pages/CompetitionAchievements';
import GlobalParticipation from './pages/GlobalParticipation';
import ImpactDashboard from './pages/ImpactDashboard';
import ImpactOverview from './pages/ImpactOverview';
import InnovationOutcomes from './pages/InnovationOutcomes';
import InstitutionalPartnerships from './pages/InstitutionalPartnerships';
import StudentStories from './pages/StudentStories';
import { sanitizeAndValidateRoute } from './utils/sanitization';
import { SECURITY_CONFIG, SecurityUtils, SecurityMonitor } from './config/security';
import './App.css';

// Define allowed routes for security
const ALLOWED_ROUTES = [
  'home',
  'who-we-are',
  'mission-vision',
  'steam-approach',
  'impact-global',
  'partners-supporters',
  'careers',
  'media-publications',
  '3d-design-engineering',
  'ai-machine-learning',
  'artscience',
  'coding-programming',
  'cybersecurity',
  'data-science-analytics',
  'digital-tech-media',
  'drone-remote-sensing',
  'electronics-embedded',
  'engineering-design',
  'iot-smart-systems',
  'public-speaking-ip',
  'robotics-automation',
  'spacequest',
  'stempreneurship',
  'shop',
  'starter-kits',
  'accelerator-incubator-pathways',
  'global-engagement',
  'global-youth-platforms',
  'innovation-ecosystem',
  'innovation-showcases',
  'prototyping-labs',
  'innovation-challenge',
  'innovation-cup',
  'alumni-network',
  'innovators-club',
  'clubs-programs',
  'leadership',
  'mentorship',
  'scholarships',
  'competition-achievements',
  'global-participation',
  'impact-dashboard',
  'impact-overview',
  'innovation-outcomes',
  'institutional-partnerships',
  'student-stories',
] as const;

type AllowedRoute = typeof ALLOWED_ROUTES[number];

// Simple router component
function AppRouter() {
  const [currentPage, setCurrentPage] = useState<AllowedRoute>('home');
  const navigationAttempts = useRef<number[]>([]);
  const lastNavigationTime = useRef<number>(Date.now());

  // Rate limiting and security logging
  const handleHashChange = useCallback(() => {
    const now = Date.now();
    
    // Rate limiting: prevent rapid navigation attempts
    navigationAttempts.current.push(now);
    navigationAttempts.current = navigationAttempts.current.filter(
      time => now - time < SECURITY_CONFIG.RATE_LIMIT.TIME_WINDOW_MS
    );
    
    if (SecurityUtils.isRateLimitExceeded(
      navigationAttempts.current,
      SECURITY_CONFIG.RATE_LIMIT.MAX_ATTEMPTS_PER_SECOND,
      SECURITY_CONFIG.RATE_LIMIT.TIME_WINDOW_MS
    )) {
      SecurityMonitor.logSecurityEvent(
        'RATE_LIMIT_EXCEEDED',
        'Too many navigation attempts detected',
        {
          attempts: navigationAttempts.current.length,
          timeWindow: SECURITY_CONFIG.RATE_LIMIT.TIME_WINDOW_MS,
        }
      );
      setCurrentPage('home');
      return;
    }

    const hash = window.location.hash;
    
    // Log suspicious navigation attempts
    if (hash.length > SECURITY_CONFIG.VALIDATION.MAX_HASH_LENGTH || 
        SecurityUtils.containsSuspiciousPatterns(hash)) {
      const securityReport = SecurityUtils.generateSecurityReport(hash, 'navigation');
      SecurityMonitor.logSecurityEvent(
        'SUSPICIOUS_NAVIGATION',
        'Suspicious navigation attempt detected',
        securityReport
      );
    }
    
    // Sanitize and validate the hash against allowed routes
    const sanitizedRoute = sanitizeAndValidateRoute(hash, ALLOWED_ROUTES);
    setCurrentPage(sanitizedRoute);
    
    lastNavigationTime.current = now;
  }, []);

  // Handle navigation
  useEffect(() => {
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Check initial hash
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [handleHashChange]);

  const renderPage = () => {
    switch (currentPage) {
      case 'who-we-are':
        return <WhoWeAre />;
      case 'mission-vision':
        return <MissionVision />;
      case 'steam-approach':
        return <SteamApproach />;
      case 'impact-global':
        return <ImpactGlobalReach />;
      case 'partners-supporters':
        return <PartnersSupporters />;
      case 'careers':
        return <Careers />;
      case 'media-publications':
        return <MediaPublications />;
      case '3d-design-engineering':
        return <ThreeDDesignEngineering />;
      case 'ai-machine-learning':
        return <AIMachineLearning />;
      case 'artscience':
        return <ArtScience />;
      case 'coding-programming':
        return <CodingProgramming />;
      case 'cybersecurity':
        return <Cybersecurity />;
      case 'data-science-analytics':
        return <DataScienceAnalytics />;
      case 'digital-tech-media':
        return <DigitalTechnologiesMedia />;
      case 'drone-remote-sensing':
        return <DroneRemoteSensing />;
      case 'electronics-embedded':
        return <ElectronicsEmbeddedSystems />;
      case 'engineering-design':
        return <EngineeringDesignSystemsThinking />;
      case 'iot-smart-systems':
        return <IoTSmartSystems />;
      case 'public-speaking-ip':
        return <PublicSpeakingIntellectualProperty />;
      case 'robotics-automation':
        return <RoboticsAutomation />;
      case 'spacequest':
        return <SpaceQuest />;
      case 'stempreneurship':
        return <STEMpreneurship />;
      case 'shop':
        return <Shop />;
      case 'starter-kits':
        return <StarterKits />;
      case 'accelerator-incubator-pathways':
        return <AcceleratorIncubatorPathways />;
      case 'global-engagement':
        return <GlobalEngagement />;
      case 'global-youth-platforms':
        return <GlobalYouthPlatforms />;
      case 'innovation-ecosystem':
        return <InnovationEcosystem />;
      case 'innovation-showcases':
        return <InnovationShowcases />;
      case 'prototyping-labs':
        return <PrototypingLabs />;
      case 'innovation-challenge':
        return <InnovationChallenge />;
      case 'innovation-cup':
        return <InnovationCup />;
      case 'alumni-network':
        return <AlumniNetwork />;
      case 'innovators-club':
        return <InnovatorsClub />;
      case 'clubs-programs':
        return <ClubsPrograms />;
      case 'leadership':
        return <LeadershipOpportunities />;
      case 'mentorship':
        return <MentorshipFellowships />;
      case 'scholarships':
        return <ScholarshipsBadges />;
      case 'competition-achievements':
        return <CompetitionAchievements />;
      case 'global-participation':
        return <GlobalParticipation />;
      case 'impact-dashboard':
        return <ImpactDashboard />;
      case 'impact-overview':
        return <ImpactOverview />;
      case 'innovation-outcomes':
        return <InnovationOutcomes />;
      case 'institutional-partnerships':
        return <InstitutionalPartnerships />;
      case 'student-stories':
        return <StudentStories />;
      default:
        return (
          <>
            <Hero />
            <Programs />
            <Solutions />
            <Pipeline />
            <Impact />
            <Partners />
            <JoinCTA />
          </>
        );
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F6F7FB] flex flex-col">
      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main className="relative bg-[#F6F7FB] flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default AppRouter;
