
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
    story: 'Got hired by a master distiller who still ran everything by hand. Working side-by-side in the workshop, he taught me iron smelting, electronics, woodworking, still fabrication, and even how to solder custom PCB control boxes. Those late-night lessons made it obvious that if we blended his craft knowledge with modern automation, we could build a stealthy, tech-enabled distillery OS without compromising authenticity.',
    goal: 'Transform a traditional American copper-still manufacturer into a tech-enabled enterprise. Bring order, automation, and intelligence to legacy manual operations without disturbing the handcrafted brand identity.',
    constraints: '• **Sole Technical Resource**: No engineering team, roadmap, or version control. I played every role—Backend Architect, DevOps, UI Designer, and AI Researcher.\n• **Legacy Infrastructure**: Operations relied on manual paper spreadsheets and ad-hoc SMS. Solutions needed to fit an established non-technical workflow.\n• **Budget & Resources**: Strict "No-SaaS" constraint. Built entirely on Open Source to minimize OpEx.\n• **Operational Reliability**: Systems managed critical customer communications, demanding 100% uptime and graceful fallbacks during API outages.',
    workflow: 'Think of it as a smart assistant living behind your business phone number:\n\n• **Ingestion**: A customer texts your number. Your Android phone (using the Tasker app) quietly forwards that message plus the caller’s number to a secure web app.\n• **Dispatch Logic**: The web app acts like a dispatcher. First it checks your Google Sheet —basically your customer/order Rolodex—to see who’s texting and what they bought. If needed it also pulls product facts from Shopify or the knowledge files you’ve uploaded (price sheets, manuals, etc.).\n• **AI Processing**: With that context gathered, the dispatcher asks Claude (the AI brain) to craft a friendly, accurate reply. Claude is kept on a tight leash: rate limiters prevent overload, and the AI only sees the snippets of data it truly needs.\n• **Response Loop**: The reply goes back to Tasker, which sends the SMS out from your phone exactly as if you typed it. To the customer, it feels like a fast, personal response from the distillery.\n• **Admin Control**: Behind the scenes you get a secure dashboard where you can log in with a PIN, upload new documents, tweak personality, review chat logs, and monitor health stats. Deploying it is just hosting the web app (Railway, Render, etc.) and pointing Tasker to the hosted /reply URL—no servers to maintain.\n\n**FLOW:** Customer Text → Tasker Forward → Web App Match → AI Draft → Tasker Reply → Admin Dashboard.',
    actions: '• **Inventing TextAI.bot**: Engineered a hybrid cloud/on-device agent (Node/Tasker/Claude) that intercepts SMS, performs RAG on Shopify/Sheets, and generates context-aware replies.\n• **Full-Stack Timesheets**: Built a secure web portal (React/TS/SQLite/Prisma) with JWT auth and RBAC, replacing paper logs with real-time dashboards.\n• **DevOps & Reliability**: Established CI/CD pipelines (Render/Vercel), environment separation (Dev/Prod), and structured logging to bring enterprise discipline to the factory floor.\n• **System Integration**: Orchestrated React, Tailwind, Node.js, and Google/Shopify APIs, ensuring secure and scalable data flow via Cloudflare DNS.',
    results: '• **"Silent Worker"**: TextAI.bot automates hundreds of daily customer queries (orders, shipping) overnight with zero manual intervention.\n• **>50% Cost Reduction**: Achieved by building custom integrations vs. purchasing expensive SaaS suites.\n• **Operational Velocity**: Order lookups became instantaneous; configuration changes dropped from hours to minutes.\n• **Cultural Impact**: Empowered the owner to manage communications via dashboards; reinforced customer trust with instant, accurate responses.',
    proof: 'LIVE PROD SYSTEM • >50% OPEX SAVINGS • CUSTOMER TRUST • ANALYTICS DASHBOARD • REFERENCE|https://drive.google.com/file/d/1upYPPEQ72YYqJcMmdmqUxZ_1LT_jev8_/view?usp=drive_link',
    images: [
      'https://i.postimg.cc/y83Hrk0S/image.png',
      'https://i.postimg.cc/3RYQR1Vs/image.png',
      'https://i.postimg.cc/dtLPLLN3/image.png'
    ]
  },
  {
    id: 2,
    title: 'DIGITAL NAVIGATOR / INSTRUCTOR',
    subtitle: 'DIGITAL EQUITY GRANT',
    story: 'Got hired as a part-timer because i know 6 languages. They had seniors and newcomers who literally didn’t know how to double-click. The mandate was "zero to hero" digital literacy: start with mouse basics, end with telehealth, email, and job portals. That experience rewired how I design curriculum and interfaces—everything had to be visual, localized, and failure-proof.',
    goal: 'Execute a $4M Massachusetts Broadband Institute (MBI) grant to eliminate the "Digital Divide" in Gateway Cities. The mission was not just access, but EQUITY—empowering seniors, immigrants, and low-income residents to enter the modern digital economy independently.',
    constraints: '• **Zero-Baseline Literacy**: Most students (ages 65+) had never touched a keyboard. I had to teach "double-click" mechanics and mouse usage before we could even touch software.\n• **Linguistic Fragmentation**: Classrooms were a chaotic mix of Spanish, Haitian Creole, and Khmer speakers. Standard English curricula were useless; instruction required real-time, multilingual adaptation.\n• **Infrastructure Deserts**: Operating in neighborhoods with zero broadband infrastructure. We weren’t just deploying software; we were deploying connectivity (Hotspots/LTE) to homes that had none.',
    actions: '• **Curriculum Engineering**: I rebuilt the state-provided syllabus into modular, visual-first "micro-lessons" focused on high-utility tasks (Telehealth, Gmail, Zoom) rather than abstract theory.\n• **Hyper-Localized Delivery**: Conducted 10-week intensive cohorts at community hubs (Coalition for a Better Acre), translating technical concepts into culturally relevant analogies in real-time.\n• **Hardware Ops**: Orchestrated the procurement, configuration, security patching, and distribution of 500+ Chromebooks, ensuring devices were "unbrickable" for novice users.',
    results: '• **100% Certification Rate**: Every graduating student achieved functional independence—sending emails, joining video calls, and accessing government portals without assistance.\n• **Economic Activation**: Graduates immediately used their new skills to apply for jobs and access healthcare, directly reducing social isolation metrics.\n• **Scalable Playbook**: My adapted curriculum and "train-the-trainer" delivery model became the standard operating procedure for future grant cycles across the state.',
    proof: '$4M GRANT EXECUTION • 500+ GRADUATES • OFFICIAL PRESS STORY|https://www.uml.edu/news/stories/2024/digital-equity-grant.aspx'
  },
  {
    id: 3,
    title: 'CASHGIGZERO',
    subtitle: 'SOLO ENTREPRENEURSHIP PROJECT',
    story: 'After seeing both the craft economy and community tech gaps, I set out to build a Craigslist-style marketplace that was fully anonymized, privacy-first, and cash-only. The goal: make it effortless for neighbors to post gigs and pay each other without surrendering personal data. It’s the fusion of disciplined systems engineering with my obsession for user trust.',
    goal: 'Build a production-grade, anonymous gig marketplace that removes friction from hiring while protecting user privacy. Transform a weekend MVP script into a scalable product solving real problems under extreme resource constraints.',
    constraints: '• **Sole Founder Context**: I handled Product, Backend, Frontend, DevOps, QA, and Security entirely solo while completing a Master’s degree.\n• **Zero Budget**: Bootstrapped on Fly.io free tier. Architecture had to be hyper-efficient (SQLite + persistent volumes) to survive without funding.\n• **Privacy & Compliance**: Required complex Craigslist-style 2-way email masking and spam protection without access to enterprise tools.',
    actions: '• **Email Relay Engine**: Engineered a custom 2-way masking system (Node/SMTP) that anonymizes buyer/seller comms, supporting webhooks and IMAP polling.\n• **Trust & Safety Layer**: Built a bespoke moderation dashboard with IP fingerprinting, honeypots, and keyword filtering to block 200+ spam posts automatically.\n• **Full-Stack Execution**: Deployed a Dockerized container on Fly.io, managing persistent SQLite storage and rigorous integration testing (30%+ coverage) for high reliability.',
    results: '• **Market Traction**: Scaled from 0 to **500+ posts/month** in 90 days with ~15 active daily message threads.\n• **Technical Feat**: Successfully replicated Craigslist’s core relay tech solo in weeks using Open Source tools.\n• **Operational Efficiency**: 97% reduction in scams via automated fingerprint bans; system runs at **$0/month** infrastructure cost.',
    proof: 'GITHUB REPO|https://github.com/haneeshkapa/CashGigZero/ • LIVE APP|http://cashgigzero.xyz/ • 500+ POSTS/MO',
    images: [
      'https://i.postimg.cc/05wt6p0N/image.png',
      'https://i.postimg.cc/VL4X56p8/image.png',
      'https://i.postimg.cc/kgz6ttyZ/image.png',
      'https://i.postimg.cc/8zJsDzSg/image.png',
      'https://i.postimg.cc/sgTLs33z/image.png'
    ]
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
    <div className="h-screen w-screen overflow-hidden flex flex-col bg-[#888] p-1 md:p-3 font-inter selection:bg-[#B8FF01] selection:text-black">
      
      {/* Main Device Frame */}
      <div className="flex-1 bg-white border-4 border-black shadow-[8px_8px_0px_0px_#1a1a1a] flex flex-col overflow-hidden relative">
        
        {/* OS Top Bar */}
        <div className="bg-black text-white px-3 py-1.5 flex justify-between items-center border-b-4 border-black z-50 font-steps shrink-0">
            <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                </div>
                <span className="font-mono text-[10px] hidden md:inline opacity-70">
                    DOSSIER_V1.0 // {new Date().toLocaleDateString()}
                </span>
            </div>
            <div className="flex items-center gap-3">
                 <div className="flex items-center gap-1.5 text-[10px] font-mono opacity-70">
                    <Wifi size={12} />
                    <span className="hidden md:inline">ON</span>
                 </div>
                 <div className="flex items-center gap-1.5 text-[10px] font-mono opacity-70">
                    <Battery size={12} />
                    <span className="hidden md:inline">100%</span>
                 </div>
            </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden bg-[#E0E0E0] relative scroll-smooth">
             {currentSlide === 0 ? (
                 <TitleSlide onStart={nextSlide} />
             ) : (
                 <PresentationSlide 
                    data={ARTIFACTS[currentSlide - 1]} 
                    index={currentSlide} 
                 />
             )}
        </div>

        {/* Bottom Navigation Bar */}
        <div className="bg-[#FFC947] border-t-4 border-black p-2 grid grid-cols-[1fr_auto_1fr] items-center gap-2 z-50 relative shrink-0">
            
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 h-1 bg-black" style={{ width: `${progress}%` }}></div>

            {/* Left: Status */}
            <div className="flex items-center justify-start pl-2">
                 <div className={`w-2 h-2 rounded-full ${currentSlide === 0 ? 'bg-red-500' : 'bg-[#B8FF01]'} border border-black mr-2`}></div>
                 <span className="font-mono text-[10px] font-bold text-black uppercase tracking-widest opacity-80 hidden sm:inline">
                    {currentSlide === 0 ? 'LOCKED' : 'ACTIVE'}
                 </span>
            </div>

            {/* Center: Nav Controls */}
            <div className="flex items-center justify-center gap-3">
                <button 
                    onClick={prevSlide} 
                    disabled={currentSlide === 0}
                    className="bg-white text-black border-2 border-black p-1.5 shadow-[2px_2px_0px_0px_black] active:translate-y-[1px] active:shadow-none disabled:opacity-50 disabled:shadow-none transition-all"
                >
                    <ChevronLeft size={18} strokeWidth={3} />
                </button>

                <div className="flex flex-col items-center min-w-[80px]">
                    <span className="font-black font-steps text-lg tracking-widest text-black leading-none">
                        {String(currentSlide + 1).padStart(2, '0')}/{String(totalSlides).padStart(2, '0')}
                    </span>
                </div>

                <button 
                    onClick={nextSlide} 
                    disabled={currentSlide === totalSlides - 1}
                    className="bg-black text-white border-2 border-black p-1.5 shadow-[2px_2px_0px_0px_white] active:translate-y-[1px] active:shadow-none disabled:opacity-50 disabled:shadow-none transition-all"
                >
                    <ChevronRight size={18} strokeWidth={3} />
                </button>
            </div>

            {/* Right: Tools */}
            <div className="flex justify-end pr-2">
                <button 
                    onClick={toggleFullscreen}
                    className="bg-white text-black border-2 border-black p-1.5 shadow-[2px_2px_0px_0px_black] hover:bg-[#B8FF01] active:translate-y-[1px] active:shadow-none transition-all"
                    title="Toggle Fullscreen"
                >
                    {isFullscreen ? <Minimize2 size={16} strokeWidth={3} /> : <Maximize2 size={16} strokeWidth={3} />}
                </button>
            </div>
        </div>

      </div>
    </div>
  );
}
