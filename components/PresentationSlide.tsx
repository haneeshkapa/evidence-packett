

import React, { useState } from 'react';
import { Artifact } from '../types';
import { Target, AlertTriangle, Zap, Award, BadgeCheck, ArrowRight, Activity, Terminal, ShieldAlert, FlaskConical, Flame, Factory, Globe, Brain, Rocket, ExternalLink, ScrollText, Image as ImageIcon, X, Workflow } from 'lucide-react';

interface PresentationSlideProps {
  data: Artifact;
  index: number;
}

// Reusable "Neo-Brutalist Box" for absolute text clarity
const ContentBox: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`bg-white border-2 border-black p-3 md:p-4 shadow-[4px_4px_0px_0px_black] ${className}`}>
    {children}
  </div>
);

// Labels now enforce Black text on Colored background for maximum contrast
const SectionLabel = ({ icon: Icon, text, colorClass }: { icon: any, text: string, colorClass: string }) => (
  <div className={`flex items-center gap-2 border-2 md:border-4 border-black px-3 py-1 ${colorClass} shadow-[3px_3px_0px_0px_black] mb-3 inline-flex text-black`}>
    <Icon className="w-4 h-4 md:w-5 md:h-5 stroke-[3px]" />
    <span className="font-black text-sm md:text-base tracking-wide uppercase font-steps">{text}</span>
  </div>
);

// Custom "Moonshine Still" Graphic for Distillery
const MoonshineStill = () => (
  <div className="absolute right-4 bottom-0 hidden lg:flex flex-col items-center opacity-80 pointer-events-none z-0 scale-[0.6] origin-bottom-right">
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
  <div className="absolute right-4 bottom-0 hidden lg:flex flex-col items-center opacity-80 pointer-events-none z-0 scale-[0.6] origin-bottom-right">
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

// Custom "Relay Server" Graphic for CashGigZero
const RelayServer = () => (
  <div className="absolute right-4 bottom-0 hidden lg:flex flex-col items-center opacity-80 pointer-events-none z-0 scale-[0.6] origin-bottom-right">
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
         {/* Server Rack */}
         <rect x="50" y="40" width="100" height="140" fill="#222" stroke="black" strokeWidth="4" />
         {/* Lights */}
         <circle cx="70" cy="60" r="5" fill="#B8FF01" />
         <circle cx="70" cy="80" r="5" fill="#B8FF01" />
         <circle cx="70" cy="100" r="5" fill="#B8FF01" />
         {/* Server Lines */}
         <rect x="90" y="55" width="40" height="10" fill="#444" />
         <rect x="90" y="75" width="40" height="10" fill="#444" />
         <rect x="90" y="95" width="40" height="10" fill="#444" />
         {/* Shield Icon Overlay */}
         <path d="M100 120 L130 130 L130 160 C130 170 100 180 100 180 C100 180 70 170 70 160 L70 130 L100 120 Z" fill="#FF5D5D" stroke="black" strokeWidth="3" />
         <path d="M100 130 L100 170" stroke="black" strokeWidth="2" />
         <path d="M85 145 L115 145" stroke="black" strokeWidth="2" />
      </svg>
  </div>
);

// Helper to parse workflow text
const renderWorkflow = (text: string) => {
  const blocks = text.split('\n\n');
  return blocks.map((block, i) => {
    // Flowchart Visualization
    if (block.includes('**FLOW:**')) {
        const flowSteps = block.replace('**FLOW:**', '').split('→').map(s => s.trim());
        return (
            <div key={i} className="mt-3 bg-black/20 border border-white/40 p-2 relative">
                <div className="absolute -top-2 left-2 bg-[#0047AB] px-1 text-[8px] font-mono text-white border border-white/40 uppercase tracking-widest">
                    PIPELINE
                </div>
                <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
                    {flowSteps.map((step, idx) => (
                        <React.Fragment key={idx}>
                             <div className="bg-[#B8FF01] text-black border border-black px-1.5 py-0.5 text-[9px] md:text-[10px] font-bold font-steps shadow-[1px_1px_0px_0px_rgba(0,0,0,0.4)]">
                                 {step}
                             </div>
                             {idx < flowSteps.length - 1 && <div className="w-2 h-px bg-white/50"></div>}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        );
    }
    
    // Nodes / Bullet Points
    if (block.includes('•')) {
        const bullets = block.split('\n').filter(l => l.trim().startsWith('•'));
        return (
            <div key={i} className="flex flex-col gap-2 my-2">
                {bullets.map((bullet, bIdx) => {
                    const cleanBullet = bullet.replace('• ', '');
                    const [title, ...descParts] = cleanBullet.split(':');
                    const desc = descParts.join(':');
                    return (
                        <div key={bIdx} className="bg-white border-2 border-black p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] flex flex-col md:flex-row gap-2 md:items-start group hover:translate-x-1 transition-transform">
                             <div className="bg-black text-white px-1.5 py-0.5 text-[9px] font-bold font-mono shrink-0 self-start mt-0.5">
                                 #{String(bIdx + 1)}
                             </div>
                             <div>
                                 <span className="font-black text-[#0047AB] text-xs uppercase mr-1.5 block md:inline">{title.replace(/\*\*/g, '')}</span>
                                 <span className="text-xs font-medium leading-tight text-black">{desc}</span>
                             </div>
                        </div>
                    );
                })}
            </div>
        );
    }

    // Intro Text
    return <p key={i} className="text-white font-mono text-[10px] md:text-xs leading-relaxed border-l-2 border-[#B8FF01] pl-2 italic opacity-90">{block}</p>;
  });
};


export const PresentationSlide: React.FC<PresentationSlideProps> = ({ data, index }) => {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const parseBullets = (text: string) => text.split('•').filter(Boolean).map(t => t.trim());
  
  // Theme Identification
  const isDistillery = data.title.includes('DISTILLERY');
  const isDigital = data.title.includes('DIGITAL EQUITY');
  const isCashGig = data.title.includes('CASHGIGZERO');

  return (
    <>
    {/* LIGHTBOX OVERLAY */}
    {lightboxImg && (
        <div 
            className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 cursor-pointer backdrop-blur-sm"
            onClick={() => setLightboxImg(null)}
        >
            <div className="relative max-w-[90vw] max-h-[90vh]">
                <button 
                    onClick={() => setLightboxImg(null)}
                    className="absolute -top-12 right-0 text-white hover:text-[#FF5F56] transition-colors"
                >
                    <X size={40} strokeWidth={3} />
                </button>
                <img 
                    src={lightboxImg} 
                    alt="Evidence Enlarged" 
                    className="w-full h-full object-contain border-4 border-white shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                />
                <div className="absolute bottom-4 left-4 bg-black text-[#B8FF01] px-4 py-2 font-steps border-2 border-[#B8FF01]">
                    EVIDENCE_VIEWER_MODE // CLICK_TO_CLOSE
                </div>
            </div>
        </div>
    )}

    <div className="w-full min-h-full bg-[#E0E0E0] p-3 md:p-6 pb-20 font-inter text-black relative">
      
      {/* HEADER */}
      <div className="bg-white border-4 border-black p-4 md:p-5 shadow-[6px_6px_0px_0px_black] mb-4 relative overflow-hidden">
         {/* Decor Lines */}
         <div className="absolute top-0 right-0 w-32 h-full bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-20"></div>
         
         {/* Conditional Graphics */}
         {isDistillery && <MoonshineStill />}
         {isDigital && <NetworkTower />}
         {isCashGig && <RelayServer />}

         <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-2 mb-2">
               <span className="bg-black text-white px-2 py-0.5 font-bold text-xs tracking-wider uppercase font-steps">
                  ARTIFACT_#{index.toString().padStart(2, '0')}
               </span>
               <span className="bg-[#FF90E8] border-2 border-black px-2 py-0.5 font-bold text-xs uppercase shadow-[2px_2px_0px_0px_black] text-black font-steps">
                  {data.subtitle}
               </span>
               {isDistillery && (
                   <span className="bg-[#b87333] text-white border-2 border-black px-2 py-0.5 font-bold text-xs uppercase shadow-[2px_2px_0px_0px_black] font-steps flex items-center gap-1">
                       <Factory size={12} /> MANUFACTURING_TECH
                   </span>
               )}
               {isDigital && (
                   <span className="bg-[#23A6D5] text-white border-2 border-black px-2 py-0.5 font-bold text-xs uppercase shadow-[2px_2px_0px_0px_black] font-steps flex items-center gap-1">
                       <Globe size={12} /> PUBLIC_SECTOR
                   </span>
               )}
               {isCashGig && (
                   <span className="bg-[#B8FF01] text-black border-2 border-black px-2 py-0.5 font-bold text-xs uppercase shadow-[2px_2px_0px_0px_black] font-steps flex items-center gap-1">
                       <Rocket size={12} /> ENTREPRENEURSHIP
                   </span>
               )}
            </div>
            <h1 className="text-2xl md:text-4xl font-black uppercase leading-[0.9] tracking-tighter mt-1 max-w-4xl font-steps text-black">
               {data.title}
            </h1>
         </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">

        {/* LEFT COLUMN: CONTEXT */}
        <div className="lg:col-span-4 flex flex-col gap-4 md:gap-6">
          
          {/* STORY SECTION */}
          {data.story && (
              <div className="relative">
                <SectionLabel icon={ScrollText} text="ORIGIN_STORY" colorClass="bg-black text-white border-white" />
                <div className="bg-black border-2 md:border-4 border-black p-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.5)]">
                   <div className="bg-black border border-white/20 p-3 shadow-[4px_4px_0px_0px_#333]">
                      <p className="font-mono text-xs md:text-sm leading-relaxed text-[#B8FF01]">
                         <span className="opacity-50 select-none mr-2">{'>'}</span>
                         {data.story}
                      </p>
                   </div>
                </div>
              </div>
          )}

          {/* GOAL */}
          <div className="relative">
            <SectionLabel icon={Target} text="OBJECTIVE" colorClass="bg-[#FCD34D]" />
            <div className="bg-[#FCD34D] border-2 md:border-4 border-black p-3 shadow-[6px_6px_0px_0px_black]">
               <ContentBox>
                  <p className="font-medium text-sm md:text-base leading-relaxed text-black">
                     {data.goal}
                  </p>
               </ContentBox>
            </div>
          </div>

          {/* CONSTRAINTS */}
          <div className="relative">
            <SectionLabel icon={ShieldAlert} text="BLOCKERS" colorClass="bg-[#FF5D5D]" />
            <div className="bg-[#FF5D5D] border-2 md:border-4 border-black p-3 shadow-[6px_6px_0px_0px_black] relative">
               <div className="absolute -right-2 -top-3 bg-black text-[#FF5D5D] px-2 py-0.5 font-steps font-bold text-[10px] border-2 border-white rotate-6 z-10 shadow-[2px_2px_0px_0px_white]">
                  HIGH_PRIORITY
               </div>
               <div className="space-y-3">
                  {parseBullets(data.constraints).map((item, i) => {
                     const [bold, ...rest] = item.split(':');
                     return (
                        <ContentBox key={i} className="flex flex-col">
                           <span className="bg-black text-white px-1.5 py-0.5 self-start text-[10px] font-bold uppercase mb-1 font-steps tracking-widest">
                              {bold.replace(/\*\*/g, '')}
                           </span>
                           <span className="text-sm font-medium leading-snug text-black">
                              {rest.join(':').replace(/\*\*/g, '') || bold.replace(/\*\*/g, '')}
                           </span>
                        </ContentBox>
                     );
                  })}
               </div>
            </div>
          </div>

          {/* WORKFLOW SECTION (Enhanced) */}
          {data.workflow && (
            <div className="relative">
               <SectionLabel icon={Workflow} text="ARCHITECTURE" colorClass="bg-[#0047AB] text-white" />
               <div className="bg-[#0047AB] border-2 md:border-4 border-black p-3 shadow-[6px_6px_0px_0px_black] relative overflow-hidden">
                   {/* Blueprint Grid Pattern */}
                   <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
                   <div className="relative z-10">
                       {renderWorkflow(data.workflow)}
                   </div>
               </div>
            </div>
          )}

        </div>

        {/* RIGHT COLUMN: EXECUTION */}
        <div className="lg:col-span-8 flex flex-col gap-4 md:gap-6">

          {/* ACTIONS */}
          <div>
            <SectionLabel icon={Zap} text="EXECUTION_LOG" colorClass="bg-white" />
            <div className="border-2 md:border-4 border-black p-4 md:p-6 bg-white shadow-[6px_6px_0px_0px_black] relative">
               <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
               
               <div className="relative z-10 grid gap-4">
                  {parseBullets(data.actions).map((action, i) => {
                     const [title, ...desc] = action.split(':');
                     return (
                        <div key={i} className="flex group">
                           <div className="w-10 bg-black text-white font-black text-lg flex items-center justify-center border-y-2 border-l-2 border-black group-hover:bg-[#B8FF01] group-hover:text-black transition-colors shrink-0 font-steps">
                              {i + 1}
                           </div>
                           <div className="flex-1 border-2 border-black bg-white p-3 group-hover:-translate-y-1 group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] transition-all">
                              {desc.length > 0 ? (
                                 <>
                                    <div className="font-black text-[#23A6D5] text-base md:text-lg uppercase mb-1 font-steps tracking-tight">
                                        {title.replace(/\*\*/g, '')}
                                    </div>
                                    <div className="font-medium text-sm md:text-base leading-relaxed text-black">
                                        {desc.join(':').replace(/\*\*/g, '')}
                                    </div>
                                 </>
                              ) : (
                                 <div className="font-medium text-base text-black">{title}</div>
                              )}
                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>
          </div>

          {/* BOTTOM ROW: RESULTS & PROOF */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
             
             {/* RESULTS */}
             <div>
                <SectionLabel icon={Activity} text="IMPACT" colorClass="bg-[#23A6D5]" />
                <div className="bg-[#23A6D5] border-2 md:border-4 border-black p-3 md:p-4 shadow-[6px_6px_0px_0px_black]">
                   <div className="space-y-2.5">
                      {parseBullets(data.results).map((res, i) => (
                         <ContentBox key={i} className="flex items-start gap-2">
                            <ArrowRight className="w-5 h-5 shrink-0 stroke-[3px] text-[#23A6D5] mt-0.5" />
                            <span className="font-bold text-sm leading-snug text-black">{res.replace(/\*\*/g, '')}</span>
                         </ContentBox>
                      ))}
                   </div>
                </div>
             </div>

             {/* PROOF */}
             <div className="flex flex-col">
               <SectionLabel icon={BadgeCheck} text="VERIFICATION" colorClass="bg-[#B8FF01]" />
               <div className="bg-[#B8FF01] border-2 md:border-4 border-black p-3 md:p-4 shadow-[6px_6px_0px_0px_black] flex-1 flex flex-col items-center justify-center text-center relative min-h-[160px]">
                  
                  <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 bg-black rounded-full"></div>
                  <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-black rounded-full"></div>
                  <div className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 bg-black rounded-full"></div>
                  <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 bg-black rounded-full"></div>

                  <div className="font-black text-xs uppercase tracking-widest mb-4 border-b-2 border-black pb-1 w-full font-steps text-black">
                     EVIDENCE_CHAIN
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                     {data.proof.split('•').map((p, i) => {
                        const cleanP = p.trim();
                        // Check for Label|URL syntax
                        const [label, url] = cleanP.split('|');

                        if (url) {
                            return (
                                <a 
                                    key={i} 
                                    href={url}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-white border-2 border-black px-2 py-1.5 font-black text-xs shadow-[3px_3px_0px_0px_rgba(0,0,0,0.15)] uppercase tracking-tight text-black hover:bg-[#23A6D5] hover:-translate-y-1 transition-all flex items-center gap-1.5"
                                >
                                   {label}
                                   <ExternalLink size={12} />
                                </a>
                            );
                        }

                        return (
                            <span key={i} className="bg-white border-2 border-black px-2 py-1.5 font-black text-xs shadow-[3px_3px_0px_0px_rgba(0,0,0,0.15)] uppercase tracking-tight text-black cursor-default">
                               {cleanP}
                            </span>
                        );
                     })}
                  </div>

                  {/* VISUAL EVIDENCE GALLERY */}
                  {data.images && data.images.length > 0 && (
                      <div className="w-full mt-1">
                        <div className="font-black text-[10px] uppercase tracking-widest mb-2 text-black font-steps flex items-center justify-center gap-1.5">
                             <ImageIcon size={12} />
                             PHOTOGRAPHIC_RECORDS
                        </div>
                        <div className="grid grid-cols-5 gap-1.5">
                            {data.images.map((imgUrl, idx) => (
                                <button 
                                    key={idx}
                                    onClick={() => setLightboxImg(imgUrl)}
                                    className="aspect-square bg-white border border-black shadow-[1px_1px_0px_0px_black] hover:-translate-y-0.5 hover:shadow-[2px_2px_0px_0px_black] transition-all overflow-hidden group relative"
                                >
                                    <img src={imgUrl} alt={`Evidence ${idx}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                </button>
                            ))}
                        </div>
                      </div>
                  )}

                  <div className="mt-4 font-mono text-[9px] opacity-60 text-black">
                     HASH: {Math.random().toString(36).substring(7).toUpperCase()}
                  </div>
               </div>
             </div>

          </div>

        </div>

      </div>
    </div>
    </>
  );
};
