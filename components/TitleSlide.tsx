import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, Fingerprint, QrCode } from 'lucide-react';

interface TitleSlideProps {
  onStart: () => void;
}

export const TitleSlide: React.FC<TitleSlideProps> = ({ onStart }) => {
  return (
    <div className="w-full min-h-full flex flex-col items-center justify-center p-6 font-inter bg-[#F0F0F0] relative overflow-hidden text-black">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>

      <div className="max-w-6xl w-full relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Left: Main Identity Block */}
        <div className="md:col-span-8 bg-white border-4 border-black shadow-[12px_12px_0px_0px_black] p-6 md:p-10 relative flex flex-col justify-between min-h-[500px]">
            
            {/* Decor Headers */}
            <div className="flex justify-between items-start mb-6 border-b-4 border-black pb-4">
                <div className="flex flex-col">
                    <span className="font-black text-xl bg-[#B8FF01] px-2 border-2 border-black inline-block shadow-[2px_2px_0px_0px_black] mb-2 font-steps">
                        CANDIDATE_PROFILE
                    </span>
                    <span className="text-xs font-mono text-gray-500">REF_ID: HK-2024-ENG-AI</span>
                </div>
                <Fingerprint className="w-12 h-12 opacity-20" />
            </div>

            {/* Main Identity Content (Name + Photo) */}
            <div className="flex-1 flex flex-col-reverse md:flex-row items-center md:items-start gap-8 relative z-10">
                
                {/* Text Side */}
                <div className="flex-1 text-center md:text-left pt-4 md:pt-0">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.85] tracking-tighter mb-6 font-steps">
                        HANEESH<br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#23A6D5] to-[#23A6D5] stroke-black" style={{ WebkitTextStroke: '3px black' }}>
                            KAPA
                        </span>
                    </h1>
                    <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4 font-steps">
                        <span className="bg-black text-white text-lg md:text-xl font-bold px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
                            FULL STACK ENGINEER
                        </span>
                        <span className="bg-white text-black text-lg md:text-xl font-bold px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_black]">
                            AI SPECIALIST
                        </span>
                    </div>
                </div>

            </div>

            {/* Bottom Info */}
            <div className="mt-8 pt-6 border-t-4 border-black flex flex-col md:flex-row justify-between items-center md:items-end gap-4 text-center md:text-left">
                <div>
                    <p className="font-bold text-lg">UMass Lowell '25</p>
                    <p className="text-sm text-gray-600">M.S. Computer Science</p>
                </div>
                <QrCode className="w-16 h-16 border-2 border-black p-1 opacity-80" />
            </div>
        </div>

        {/* Right: Action & Links */}
        <div className="md:col-span-4 flex flex-col gap-6">
            
            {/* Links Card */}
            <div className="bg-[#FFC947] border-4 border-black p-6 shadow-[8px_8px_0px_0px_black] flex-1 flex flex-col justify-center">
                <h2 className="font-black text-2xl mb-6 border-b-4 border-black pb-2 font-steps">CONTACT_UPLINK</h2>
                <div className="flex flex-col gap-4">
                    <a 
                        href="mailto:haneesh7kapa2002@gmail.com"
                        className="flex items-center gap-3 bg-white border-2 border-black p-4 font-bold hover:-translate-y-1 hover:translate-x-1 transition-transform shadow-[4px_4px_0px_0px_black] hover:shadow-[6px_6px_0px_0px_black] text-black no-underline group"
                    >
                        <div className="bg-black text-white p-1 group-hover:bg-[#FF5F56] transition-colors"><Mail className="w-5 h-5" /></div>
                        <span className="font-mono text-sm">haneesh7kapa2002@gmail.com</span>
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/haneesh-kapa-365779170/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-white border-2 border-black p-4 font-bold hover:-translate-y-1 hover:translate-x-1 transition-transform shadow-[4px_4px_0px_0px_black] hover:shadow-[6px_6px_0px_0px_black] text-black no-underline group"
                    >
                        <div className="bg-black text-white p-1 group-hover:bg-[#0077B5] transition-colors"><Linkedin className="w-5 h-5" /></div>
                        <span className="font-mono text-sm">/in/haneesh-kapa</span>
                    </a>
                    <a 
                        href="https://github.com/haneeshkapa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-white border-2 border-black p-4 font-bold hover:-translate-y-1 hover:translate-x-1 transition-transform shadow-[4px_4px_0px_0px_black] hover:shadow-[6px_6px_0px_0px_black] text-black no-underline group"
                    >
                        <div className="bg-black text-white p-1 group-hover:bg-[#333] transition-colors"><Github className="w-5 h-5" /></div>
                        <span className="font-mono text-sm">@haneeshkapa</span>
                    </a>
                </div>
            </div>

            {/* Start Button */}
            <button 
                onClick={onStart}
                className="bg-black text-[#B8FF01] border-4 border-black p-6 shadow-[8px_8px_0px_0px_#B8FF01] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all flex items-center justify-center gap-3 group min-h-[120px]"
            >
                <div className="flex flex-col items-start">
                    <span className="text-xs text-gray-400 font-mono mb-1">ACCESS_LEVEL: ADMIN</span>
                    <span className="text-3xl font-black tracking-wider font-steps">ENTER_DOSSIER</span>
                </div>
                <ArrowRight className="w-10 h-10 group-hover:translate-x-2 transition-transform stroke-[3px]" />
            </button>

        </div>

      </div>
    </div>
  );
};
