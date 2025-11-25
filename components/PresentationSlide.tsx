import React from 'react';
import { Artifact } from '../types';
import { Target, AlertTriangle, Zap, Award, BadgeCheck, ArrowRight, Activity, Terminal, ShieldAlert, FlaskConical, Flame, Factory, Globe, Brain } from 'lucide-react';

interface PresentationSlideProps {
  data: Artifact;
  index: number;
}

// Reusable "Neo-Brutalist Box" for absolute text clarity
const ContentBox: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`bg-white border-2 border-black p-5 shadow-[6px_6px_0px_0px_black] ${className}`}>
    {children}
  </div>
);

// Labels now enforce Black text on Colored background for maximum contrast
const SectionLabel = ({ icon: Icon, text, colorClass }: { icon: any, text: string, colorClass: string }) => (
  <div className={`flex items-center gap-2 border-4 border-black px-4 py-2 ${colorClass} shadow-[4px_4px_0px_0px_black] mb-4 inline-flex text-black`}>
    <Icon className="w-6 h-6 stroke-[3px]" />
    <span className="font-black text-lg tracking-wide uppercase font-steps">{text}</span>
  </div>
);

// Custom "Moonshine Still" Graphic for Distillery
const MoonshineStill = () => (
  <div className="absolute right-4 bottom-0 hidden lg:flex flex-col items-center opacity-80 pointer-events-none z-0 scale-75 origin-bottom-right">
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M40 160 C40 120 160 120 160 160 L160 190 L40 190 Z" fill="#b87333" stroke="black" strokeWidth="4" />
         <rect x="85" y="80" width="30" height="50" fill="#b87333" stroke="black" strokeWidth="4" />
         <rect x="75" y="70" width="50" height="15" fill="#b87333" stroke="black" strokeWidth="4" />
         <path d="M125 77 L150 77 L150 140 L180 140" stroke="black" strokeWidth="4" fill="none" />
         <circle cx="180" cy="140" r="10" fill="#23A6D5" stroke="black" strokeWidth="4" />
         <circle cx="60" cy="150" r="5" fill="white" stroke="black" strokeWidth="2" />
         <circle cx="140" cy="170" r="3" fill="white" stroke="black" strokeWidth="2" />
      </svg>
  </div>
);

// Custom "Network Tower" Graphic for Digital Equity
const NetworkTower = () => (
  <div className="absolute right-4 bottom-0 hidden lg:flex flex-col items-center opacity-80 pointer-events-none z-0 scale-75 origin-bottom-right">
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
         {/* Tower Base */}
         <path d="M80 190 L120 190 L110 100 L90 100 Z" fill="#333" stroke="black" strokeWidth="4" />
         {/* Tower Top */}
         <circle cx="100" cy="80" r="20" fill="#FCD34D" stroke="black" strokeWidth="4" />
         {/* Signals */}
         <path d="M100 50 L100 20" stroke="black" strokeWidth="4" />
         <path d="M130 80 L160 80" stroke="black" strokeWidth="4" />
         <path d="M70 80 L40 80" stroke="black" strokeWidth="4" />
         <path d="M120 60 L140 40" stroke="black" strokeWidth="4" />
         <path d="M80 60 L60 40" stroke="black" strokeWidth="4" />
         {/* Laptop Icon base */}
         <rect x="60" y="170" width="80" height="20" fill="#23A6D5" stroke="black" strokeWidth="4" />
      </svg>
  </div>
);

// Custom "Polyglot Brain" Graphic for Technical Mastery
const PolyglotBrain = () => (
  <div className="absolute right-4 bottom-0 hidden lg:flex flex-col items-center opacity-80 pointer-events-none z-0 scale-75 origin-bottom-right">
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
         {/* Brain Shape */}
         <path d="M50 100 C50 50 150 50 150 100 C150 150 100 150 100 150 C50 150 50 100 50 100 Z" fill="#FF90E8" stroke="black" strokeWidth="4" />
         {/* Nodes */}
         <circle cx="80" cy="90" r="5" fill="black" />
         <circle cx="120" cy="90" r="5" fill="black" />
         <circle cx="100" cy="120" r="5" fill="black" />
         {/* Connections */}
         <line x1="80" y1="90" x2="120" y2="90" stroke="black" strokeWidth="2" />
         <line x1="80" y1="90" x2="100" y2="120" stroke="black" strokeWidth="2" />
         <line x1="120" y1="90" x2="100" y2="120" stroke="black" strokeWidth="2" />
         {/* Speech Bubble */}
         <rect x="120" y="40" width="60" height="40" fill="white" stroke="black" strokeWidth="4" />
         <text x="150" y="65" textAnchor="middle" fontFamily="monospace" fontWeight="bold" fontSize="16">Hello</text>
      </svg>
  </div>
);

export const PresentationSlide: React.FC<PresentationSlideProps> = ({ data, index }) => {
  
  const parseBullets = (text: string) => text.split('•').filter(Boolean).map(t => t.trim());
  
  // Theme Identification
  const isDistillery = data.title.includes('DISTILLERY');
  const isDigital = data.title.includes('DIGITAL EQUITY');
  const isPolyglot = data.title.includes('MASTERY') || data.title.includes('POLYGLOT');

  return (
    <div className="w-full min-h-full bg-[#E0E0E0] p-4 md:p-8 pb-32 font-inter text-black relative">
      
      {/* HEADER */}
      <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_black] mb-8 relative overflow-hidden">
         {/* Decor Lines */}
         <div className="absolute top-0 right-0 w-32 h-full bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-20"></div>
         
         {/* Conditional Graphics */}
         {isDistillery && <MoonshineStill />}
         {isDigital && <NetworkTower />}
         {isPolyglot && <PolyglotBrain />}

         <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-3 mb-3">
               <span className="bg-black text-white px-3 py-1 font-bold text-sm tracking-wider uppercase font-steps">
                  ARTIFACT_#{index.toString().padStart(2, '0')}
               </span>
               <span className="bg-[#FF90E8] border-2 border-black px-3 py-1 font-bold text-sm uppercase shadow-[2px_2px_0px_0px_black] text-black font-steps">
                  {data.subtitle}
               </span>
               {isDistillery && (
                   <span className="bg-[#b87333] text-white border-2 border-black px-3 py-1 font-bold text-sm uppercase shadow-[2px_2px_0px_0px_black] font-steps flex items-center gap-2">
                       <Factory size={14} /> MANUFACTURING_TECH
                   </span>
               )}
               {isDigital && (
                   <span className="bg-[#23A6D5] text-white border-2 border-black px-3 py-1 font-bold text-sm uppercase shadow-[2px_2px_0px_0px_black] font-steps flex items-center gap-2">
                       <Globe size={14} /> PUBLIC_SECTOR
                   </span>
               )}
               {isPolyglot && (
                   <span className="bg-[#B8FF01] text-black border-2 border-black px-3 py-1 font-bold text-sm uppercase shadow-[2px_2px_0px_0px_black] font-steps flex items-center gap-2">
                       <Brain size={14} /> R&D_ENGINEERING
                   </span>
               )}
            </div>
            <h1 className="text-3xl md:text-5xl font-black uppercase leading-[0.9] tracking-tighter mt-2 max-w-4xl font-steps text-black">
               {data.title}
            </h1>
         </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* LEFT COLUMN: CONTEXT (Goal & Constraints) */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          
          {/* GOAL */}
          <div className="relative">
            <SectionLabel icon={Target} text="OBJECTIVE" colorClass="bg-[#FCD34D]" />
            <div className="bg-[#FCD34D] border-4 border-black p-4 shadow-[8px_8px_0px_0px_black]">
               {/* Text is boxed in white for 100% readability */}
               <ContentBox>
                  <p className="font-medium text-base md:text-lg leading-relaxed text-black">
                     {data.goal}
                  </p>
               </ContentBox>
            </div>
          </div>

          {/* CONSTRAINTS */}
          <div className="relative">
            <SectionLabel icon={ShieldAlert} text="BLOCKERS" colorClass="bg-[#FF5D5D]" />
            <div className="bg-[#FF5D5D] border-4 border-black p-4 shadow-[8px_8px_0px_0px_black] relative">
               {/* Warning Strip */}
               <div className="absolute -right-2 -top-4 bg-black text-[#FF5D5D] px-3 py-1 font-steps font-bold text-sm border-2 border-white rotate-6 z-10 shadow-[2px_2px_0px_0px_white]">
                  HIGH_PRIORITY
               </div>

               <div className="space-y-4">
                  {parseBullets(data.constraints).map((item, i) => {
                     const [bold, ...rest] = item.split(':');
                     return (
                        <ContentBox key={i} className="flex flex-col">
                           <span className="bg-black text-white px-2 py-1 self-start text-xs font-bold uppercase mb-2 font-steps tracking-widest">
                              {bold.replace(/\*\*/g, '')}
                           </span>
                           <span className="text-base md:text-lg font-medium leading-snug text-black">
                              {rest.join(':').replace(/\*\*/g, '') || bold.replace(/\*\*/g, '')}
                           </span>
                        </ContentBox>
                     );
                  })}
                  {parseBullets(data.constraints).length === 0 && (
                      <ContentBox><p className="font-medium text-lg text-black">{data.constraints}</p></ContentBox>
                  )}
               </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: EXECUTION (Actions & Results) */}
        <div className="lg:col-span-8 flex flex-col gap-8">

          {/* ACTIONS */}
          <div>
            <SectionLabel icon={Zap} text="EXECUTION_LOG" colorClass="bg-white" />
            <div className="border-4 border-black p-6 md:p-8 bg-white shadow-[8px_8px_0px_0px_black] relative">
                {/* Decorative grid background inside */}
               <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
               
               <div className="relative z-10 grid gap-5">
                  {parseBullets(data.actions).map((action, i) => {
                     const [title, ...desc] = action.split(':');
                     return (
                        <div key={i} className="flex group">
                           {/* Number Block */}
                           <div className="w-14 bg-black text-white font-black text-2xl flex items-center justify-center border-y-2 border-l-2 border-black group-hover:bg-[#B8FF01] group-hover:text-black transition-colors shrink-0 font-steps">
                              {i + 1}
                           </div>
                           {/* Content Block */}
                           <div className="flex-1 border-2 border-black bg-white p-4 md:p-5 group-hover:-translate-y-1 group-hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.15)] transition-all">
                              {desc.length > 0 ? (
                                 <>
                                    <div className="font-black text-[#23A6D5] text-lg md:text-xl uppercase mb-2 font-steps tracking-tight">
                                        {title.replace(/\*\*/g, '')}
                                    </div>
                                    <div className="font-medium text-base md:text-lg leading-relaxed text-black">
                                        {desc.join(':').replace(/\*\*/g, '')}
                                    </div>
                                 </>
                              ) : (
                                 <div className="font-medium text-lg text-black">{title}</div>
                              )}
                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>
          </div>

          {/* BOTTOM ROW: RESULTS & PROOF */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             
             {/* RESULTS */}
             <div>
                <SectionLabel icon={Activity} text="IMPACT_METRICS" colorClass="bg-[#23A6D5]" />
                <div className="bg-[#23A6D5] border-4 border-black p-5 shadow-[8px_8px_0px_0px_black]">
                   <div className="space-y-3">
                      {parseBullets(data.results).map((res, i) => (
                         <ContentBox key={i} className="flex items-start gap-3">
                            <ArrowRight className="w-6 h-6 shrink-0 stroke-[3px] text-[#23A6D5] mt-1" />
                            <span className="font-bold text-base md:text-lg leading-snug text-black">{res.replace(/\*\*/g, '')}</span>
                         </ContentBox>
                      ))}
                   </div>
                </div>
             </div>

             {/* PROOF */}
             <div>
               <SectionLabel icon={BadgeCheck} text="VERIFICATION" colorClass="bg-[#B8FF01]" />
               <div className="bg-[#B8FF01] border-4 border-black p-5 shadow-[8px_8px_0px_0px_black] h-full min-h-[180px] flex flex-col items-center justify-center text-center relative">
                  
                  <div className="absolute top-2 left-2 w-2 h-2 bg-black rounded-full"></div>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-black rounded-full"></div>
                  <div className="absolute bottom-2 left-2 w-2 h-2 bg-black rounded-full"></div>
                  <div className="absolute bottom-2 right-2 w-2 h-2 bg-black rounded-full"></div>

                  <div className="font-black text-sm uppercase tracking-widest mb-6 border-b-2 border-black pb-2 w-full font-steps text-black">
                     EVIDENCE_CHAIN
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-3">
                     {data.proof.split('•').map((p, i) => (
                        <span key={i} className="bg-white border-2 border-black px-3 py-2 font-black text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] uppercase tracking-tight text-black">
                           {p.trim()}
                        </span>
                     ))}
                  </div>

                  <div className="mt-6 font-mono text-[10px] opacity-60 text-black">
                     HASH: {Math.random().toString(36).substring(7).toUpperCase()}
                  </div>
               </div>
             </div>

          </div>

        </div>

      </div>
    </div>
  );
};