import React, { useState, useEffect } from 'react';
import { PresentationSlide } from './components/PresentationSlide';
import { TitleSlide } from './components/TitleSlide';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Battery, Wifi, Signal } from 'lucide-react';
import { Artifact } from './types';

const ARTIFACTS: Artifact[] = [
  {
    id: 1,
    title: 'THE DISTILLERY NETWORK',
    subtitle: 'AI SOFTWARE ENGINEER (2025 - Present)',
    goal: 'Transform a traditional American copper-still manufacturer into a tech-enabled enterprise. Bring order, automation, and intelligence to legacy manual operations without disturbing the handcrafted brand identity.',
    constraints: '• **Sole Technical Resource**: No engineering team, roadmap, or version control. I played every role—Backend Architect, DevOps, UI Designer, and AI Researcher.\n• **Legacy Infrastructure**: Operations relied on manual paper spreadsheets and ad-hoc SMS. Solutions needed to fit an established non-technical workflow.\n• **Budget & Resources**: Strict "No-SaaS" constraint. Built entirely on Open Source to minimize OpEx.\n• **Operational Reliability**: Systems managed critical customer communications, demanding 100% uptime and graceful fallbacks during API outages.',
    actions: '• **Inventing TextAI.bot**: Engineered a hybrid cloud/on-device agent (Node/Tasker/Claude) that intercepts SMS, performs RAG on Shopify/Sheets, and generates context-aware replies.\n• **Full-Stack Timesheets**: Built a secure web portal (React/TS/SQLite/Prisma) with JWT auth and RBAC, replacing paper logs with real-time dashboards.\n• **DevOps & Reliability**: Established CI/CD pipelines (Render/Vercel), environment separation (Dev/Prod), and structured logging to bring enterprise discipline to the factory floor.\n• **System Integration**: Orchestrated React, Tailwind, Node.js, and Google/Shopify APIs, ensuring secure and scalable data flow via Cloudflare DNS.',
    results: '• **"Silent Worker"**: TextAI.bot automates hundreds of daily customer queries (orders, shipping) overnight with zero manual intervention.\n• **>50% Cost Reduction**: Achieved by building custom integrations vs. purchasing expensive SaaS suites.\n• **Operational Velocity**: Order lookups became instantaneous; configuration changes dropped from hours to minutes.\n• **Cultural Impact**: Empowered the owner to manage communications via dashboards; reinforced customer trust with instant, accurate responses.',
    proof: 'LIVE PROD SYSTEM • >50% OPEX SAVINGS • CUSTOMER TRUST • ANALYTICS DASHBOARD'
  },
  {
    id: 2,
    title: 'DIGITAL EQUITY GRANT',
    subtitle: 'DIGITAL NAVIGATOR / INSTRUCTOR',
    goal: 'Execute a $4M Massachusetts Broadband Institute (MBI) grant to eliminate the "Digital Divide" in Gateway Cities. The mission was not just access, but EQUITY—empowering seniors, immigrants, and low-income residents to enter the modern digital economy independently.',
    constraints: '• **Zero-Baseline Literacy**: Most students (ages 65+) had never touched a keyboard. I had to teach "double-click" mechanics and mouse usage before we could even touch software.\n• **Linguistic Fragmentation**: Classrooms were a chaotic mix of Spanish, Haitian Creole, and Khmer speakers. Standard English curricula were useless; instruction required real-time, multilingual adaptation.\n• **Infrastructure Deserts**: Operating in neighborhoods with zero broadband infrastructure. We weren’t just deploying software; we were deploying connectivity (Hotspots/LTE) to homes that had none.',
    actions: '• **Curriculum Engineering**: I rebuilt the state-provided syllabus into modular, visual-first "micro-lessons" focused on high-utility tasks (Telehealth, Gmail, Zoom) rather than abstract theory.\n• **Hyper-Localized Delivery**: Conducted 10-week intensive cohorts at community hubs (Coalition for a Better Acre), translating technical concepts into culturally relevant analogies in real-time.\n• **Hardware Ops**: Orchestrated the procurement, configuration, security patching, and distribution of 500+ Chromebooks, ensuring devices were "unbrickable" for novice users.',
    results: '• **100% Certification Rate**: Every graduating student achieved functional independence—sending emails, joining video calls, and accessing government portals without assistance.\n• **Economic Activation**: Graduates immediately used their new skills to apply for jobs and access healthcare, directly reducing social isolation metrics.\n• **Scalable Playbook**: My adapted curriculum and "train-the-trainer" delivery model became the standard operating procedure for future grant cycles across the state.',
    proof: '$4M GRANT EXECUTION • 500+ GRADUATES • STATEWIDE MODEL ADOPTION'
  },
  {
    id: 3,
    title: 'TECHNICAL & LINGUISTIC MASTERY',
    subtitle: 'POLYGLOT FULL STACK ENGINEER',
    goal: 'Bridge the gap between rigid machine logic and nuanced human communication. Leverage a unique polyglot background to build systems that are not just technically robust, but culturally and linguistically universal.',
    constraints: '• **Cognitive Context-Switching**: Operating simultaneously as a Full-Stack Engineer and a Linguistic Bridge across 6 distinct languages (Hindi, English, Telugu, Japanese, Spanish, Gujarati).\n• **Resource Scarcity**: Developing enterprise-grade RAG tools (AutoDocs) and marketplaces (CashGigZero) with zero budget, requiring deep optimization of Open Source models.\n• **Accessibility Standards**: Designing complex interfaces that remain intuitive for diverse user bases, from international students to non-technical laborers.',
    actions: '• **AutoDocs Architecture**: Engineered a documentation engine using Claude API + BM25 Vector Search. It parses complex GitHub repos and auto-generates semantic documentation, treating code as a translatable language.\n• **Full-Stack Orchestration**: Built "CashGigZero" (Next.js/PostgreSQL) and the "Off-Campus Housing Platform" (Flutter/MERN), implementing rigorous JWT Auth and RBAC to secure sensitive user data.\n• **Linguistic Debugging**: Utilized native fluency to identify and fix subtle Internationalization (i18n) bugs that automated tests missed, ensuring true semantic correctness across locales.',
    results: '• **Engineering Velocity**: "AutoDocs" slashed developer onboarding time by 40%, answering architectural queries instantly without senior engineer intervention.\n• **Market Adoption**: Housing platform scaled to thousands of active users with zero critical localization failures.\n• **Cross-Functional Synergy**: Acted as the "Rosetta Stone" for diverse teams, translating complex technical blockers into clear business requirements in multiple languages.',
    proof: '6 LANGUAGES • GITHUB: AUTODOCS • LIVE: CASHGIGZERO • 40% FASTER ONBOARDING'
  }
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const totalSlides = ARTIFACTS.length + 1;

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) setCurrentSlide(curr => curr + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(curr => curr - 1);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col bg-[#888] p-2 md:p-4 font-inter selection:bg-[#B8FF01] selection:text-black">
      
      {/* Main Device Frame */}
      <div className="flex-1 bg-white border-[6px] border-black shadow-[12px_12px_0px_0px_#1a1a1a] flex flex-col overflow-hidden relative">
        
        {/* OS Top Bar */}
        <div className="bg-black text-white p-2 flex justify-between items-center border-b-4 border-black z-50 font-steps">
            <div className="flex items-center gap-4">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                </div>
                <span className="text-sm tracking-widest hidden md:block">HK_OS_v2.1 // SYSTEM_ONLINE</span>
            </div>
            <div className="flex items-center gap-4 text-xs">
                <span className="hidden md:inline">PR_MODE: HIGH_CONTRAST</span>
                <div className="flex gap-2">
                    <Wifi size={14} />
                    <Signal size={14} />
                    <Battery size={14} />
                </div>
            </div>
        </div>

        {/* Scrolling Marquee */}
        <div className="bg-[#B8FF01] border-b-4 border-black overflow-hidden whitespace-nowrap py-1 z-40 font-steps text-black">
            <div className="animate-[moveGrid_10s_linear_infinite] inline-block font-bold text-xs tracking-[0.2em]">
               EVIDENCE_PACKET_LOADED /// READY_FOR_REVIEW /// CANDIDATE: HANEESH_KAPA /// STATUS: HIRED? /// CHECK_ARTIFACTS /// 
               EVIDENCE_PACKET_LOADED /// READY_FOR_REVIEW /// CANDIDATE: HANEESH_KAPA /// STATUS: HIRED? /// CHECK_ARTIFACTS /// 
            </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 relative overflow-hidden bg-[#E6E6E6] flex">
          
          {/* Left Sidebar (Decoration) */}
          <div className="hidden md:flex w-12 border-r-4 border-black flex-col items-center justify-between py-4 bg-white z-30 font-steps text-black">
             <div className="text-vertical font-black text-xs tracking-widest rotate-180" style={{ writingMode: 'vertical-rl' }}>
                CONFIDENTIAL_DOSSIER
             </div>
             <div className="w-1 h-24 bg-black/20"></div>
             <div className="text-vertical font-black text-xs tracking-widest rotate-180" style={{ writingMode: 'vertical-rl' }}>
                2024_EDITION
             </div>
          </div>

          {/* Viewport */}
          <div className="flex-1 relative overflow-y-auto overflow-x-hidden scrollbar-hide">
             {currentSlide === 0 && <TitleSlide onStart={nextSlide} />}
             {currentSlide > 0 && (
                <PresentationSlide 
                data={ARTIFACTS[currentSlide - 1]} 
                index={currentSlide}
                />
             )}
          </div>

        </div>

        {/* Navigation Footer */}
        <div className="bg-white border-t-4 border-black p-4 z-50 font-steps">
           <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Progress Bar */}
              <div className="w-full md:w-1/3 order-2 md:order-1 text-black">
                 <div className="flex justify-between mb-1 font-bold text-xs">
                    <span>LOAD_PROGRESS</span>
                    <span>{Math.round(progress)}%</span>
                 </div>
                 <div className="h-6 w-full border-4 border-black p-1 bg-white">
                    <div 
                       className="h-full bg-black transition-all duration-300"
                       style={{ width: `${progress}%` }}
                    ></div>
                 </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-4 order-1 md:order-2 w-full md:w-auto justify-center text-black">
                 
                 <button 
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                    className={`
                       h-14 px-6 border-4 border-black font-black shadow-[4px_4px_0px_0px_black] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all flex items-center gap-2
                       ${currentSlide === 0 ? 'bg-gray-200 opacity-50 cursor-not-allowed' : 'bg-[#FF90E8] hover:bg-black hover:text-[#FF90E8]'}
                    `}
                 >
                    <ChevronLeft strokeWidth={3} />
                    BACK
                 </button>

                 <div className="h-14 w-20 bg-[#FCD34D] text-black border-4 border-black flex items-center justify-center font-black text-xl shadow-[4px_4px_0px_0px_black]">
                    {currentSlide + 1}/{totalSlides}
                 </div>

                 <button 
                    onClick={nextSlide}
                    disabled={currentSlide === totalSlides - 1}
                    className={`
                       h-14 px-6 border-4 border-black font-black shadow-[4px_4px_0px_0px_black] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all flex items-center gap-2
                       ${currentSlide === totalSlides - 1 ? 'bg-gray-200 opacity-50 cursor-not-allowed' : 'bg-[#23A6D5] hover:bg-black hover:text-[#23A6D5]'}
                    `}
                 >
                    NEXT
                    <ChevronRight strokeWidth={3} />
                 </button>

                 <button 
                    onClick={toggleFullscreen}
                    className="h-14 w-14 border-4 border-black bg-[#FCD34D] text-black flex items-center justify-center shadow-[4px_4px_0px_0px_black] hover:bg-black hover:text-[#FCD34D] transition-colors hidden sm:flex"
                 >
                    {isFullscreen ? <Minimize2 strokeWidth={3} /> : <Maximize2 strokeWidth={3} />}
                 </button>

              </div>
           </div>
        </div>

      </div>
    </div>
  );
}