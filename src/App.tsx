import React, { useState, useEffect } from 'react';
import { Rocket, Calendar, MapPin, Menu, X, ChevronRight, Zap, Star, Box, Hammer, Trophy, Award, TrendingUp, Heart, Plus, Minus, Clock, HelpCircle, Terminal, Instagram, Mail, BookOpen, Wrench, ArrowRight, ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

// --- Types ---
interface NavItem {
  label: string;
  href: string;
}


// --- Components ---
{/*
const CryptoText: React.FC<{ pattern: string; className?: string }> = ({ pattern, className = '' }) => {
  const [displayText, setDisplayText] = useState(pattern);
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  
  useEffect(() => {
    let currentIndex = 0;
    const charPositions = pattern.split('').map((char, idx) => 
      (char !== ' ' && char !== ',' && char !== '.' && char !== ':') ? idx : -1
    ).filter(idx => idx !== -1);
    
    const interval = setInterval(() => {
      setDisplayText(prev => {
        const arr = prev.split('');
        const posToChange = charPositions[currentIndex % charPositions.length];
        arr[posToChange] = chars[Math.floor(Math.random() * chars.length)];
        currentIndex++;
        return arr.join('');
      });
    }, 80);
    
    return () => clearInterval(interval);
  }, [pattern]);
  
  return <span className={`${className} font-mono`} style={{ letterSpacing: '0.05em' }}>{displayText}</span>;
};
*/}
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const startFade = windowHeight * 0.25; // Start at 1/4 page
      const endFade = windowHeight * 0.5; // Fully opaque at 1/2 page
      
      if (scrollY < startFade) {
        setScrollOpacity(0);
      } else if (scrollY > endFade) {
        setScrollOpacity(1);
      } else {
        const opacity = (scrollY - startFade) / (endFade - startFade);
        setScrollOpacity(opacity);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { label: 'Getting Started', href: '#about' },
    { label: 'Tracks', href: '#tracks' },
    { label: 'Sponsors', href: '#sponsors' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <nav 
      className="fixed w-full z-50 transition-all duration-300"
      style={{
        background: scrollOpacity > 0 ? `linear-gradient(to right, rgba(15, 23, 42, ${0.98 * scrollOpacity}), rgba(8, 47, 73, ${0.95 * scrollOpacity}), rgba(15, 23, 42, ${0.98 * scrollOpacity}))` : 'transparent',
        backdropFilter: scrollOpacity > 0 ? 'blur(12px)' : 'none',
        borderBottom: scrollOpacity > 0 ? `1px solid rgba(34, 211, 238, ${0.5 * scrollOpacity})` : 'none',
        boxShadow: scrollOpacity > 0 ? `0 0 ${60 * scrollOpacity}px rgba(34, 211, 238, ${0.3 * scrollOpacity}), 0 -10px ${60 * scrollOpacity}px rgba(139, 92, 246, ${0.2 * scrollOpacity})` : 'none',
      }}
    >
      {/* Animated gradient overlay - only when scrolled */}
      {scrollOpacity > 0 && (
        <div 
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/15 to-cyan-500/10 animate-pulse pointer-events-none" 
          style={{ opacity: scrollOpacity, animationDuration: '3s' }} 
        />
      )}
      
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-20">
          {/* Left: Catalyst Logo */}
          <a href="#" className="group flex items-center relative">
            {/* Subtle white glow effect behind logo - contained */}
            <div className="absolute inset-0 bg-white/30 blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300 rounded-full scale-90" />
            <img 
              src="/catalystlogo.png" 
              alt="Catalyst logo" 
              className="h-12 md:h-16 w-auto object-contain relative z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300" 
            />
          </a>
          
          {/* Center: Nav Items */}
          <div className="hidden md:flex items-baseline space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-slate-200 hover:text-cyan-300 transition-colors px-3 py-2 rounded-md text-sm font-medium relative group">
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
              </a>
            ))}
            <a href="http://tiny.cc/catalyst-build" target="_blank" rel="noopener noreferrer">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-400 hover:to-purple-500 px-5 py-2 rounded-full font-bold transition-all transform hover:scale-110 shadow-[0_0_25px_rgba(34,211,238,0.5)] hover:shadow-[0_0_35px_rgba(34,211,238,0.8)] cursor-pointer">
                Register Now
              </button>
            </a>
          </div>

          {/* Right: Redshifted Logo (Desktop) */}
          <a href="https://redshifted.ca" target="_blank" rel="noopener noreferrer" className="hidden md:block group relative">
            {/* Glow effect behind Redshifted logo */}
            <div className="absolute -inset-3 bg-white/20 blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            <img 
              src="/redshifted-logo.png" 
              alt="Redshifted logo" 
              className="h-8 md:h-10 w-auto object-contain opacity-90 group-hover:opacity-100 group-hover:brightness-150 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all duration-300" 
            />
          </a>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-cyan-400 cursor-pointer">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                {item.label}
              </a>
            ))}
            <button className="w-full text-center mt-4 bg-cyan-500 text-white px-5 py-3 rounded-md font-bold cursor-pointer">
              Register Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};


const Hero: React.FC = () => {
  // --- 1. COUNTDOWN LOGIC ---
  const calculateTimeLeft = () => {
    // Target: March 7, 2026 8:00 AM (EST assumed based on Ottawa location)
    const difference = +new Date("2026-03-07T08:00:00") - +new Date();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // --- FLOATING DEBRIS CONFIG ---
  const debrisItems = [
    { id: 1, src: "https://cdn-icons-png.flaticon.com/512/2560/2560576.png", size: "w-16" }, 
    { id: 2, src: "https://cdn-icons-png.flaticon.com/512/1046/1046775.png", size: "w-12" }, 
    { id: 3, src: "https://cdn-icons-png.flaticon.com/512/428/428001.png", size: "w-20" }, 
    { id: 4, src: "https://cdn-icons-png.flaticon.com/512/2165/2165212.png", size: "w-10" }, 
    { id: 5, src: "https://cdn-icons-png.flaticon.com/512/2906/2906274.png", size: "w-14" }, 
    { id: 6, src: "https://cdn-icons-png.flaticon.com/512/644/644667.png", size: "w-12" }, 
  ];

  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const randomized = debrisItems.map((item) => ({
      ...item,
      startY: Math.floor(Math.random() * 80 + 10), 
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 3
    }));
    setItems(randomized);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
      
      {/* --- CSS ENGINE --- */}
      <style>{`
        /* Physics (Black Hole & Debris) */
        @keyframes texture-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes horizon-pulse {
          0%, 100% { box-shadow: 0 0 30px rgba(255, 255, 255, 0.6), inset 0 0 20px black; }
          50% { box-shadow: 0 0 80px rgba(255, 255, 255, 0.9), inset 0 0 50px black; }
        }
        @keyframes converge {
          0% { left: -150px; top: var(--start-y); transform: scale(1) rotate(0deg); opacity: 0; }
          5% { opacity: 0; }
          10% { opacity: 1; }
          60% { left: 60%; top: var(--start-y); transform: scale(0.8) rotate(180deg); }
          100% { left: 80%; top: 50%; transform: scale(0) rotate(720deg); opacity: 0; }
        }
        .debris-item {
          position: absolute;
          opacity: 0;
          animation-name: converge;
          animation-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);
          animation-iteration-count: infinite;
        }
        .disk-gradient {
          background: radial-gradient(circle, rgba(255,255,255,1) 20%, rgba(255,240,200,1) 30%, rgba(255,160,0,1) 45%, rgba(180,40,0,0.9) 60%, transparent 75%);
        }
        .disk-texture {
          background: repeating-conic-gradient(from 0deg, rgba(0,0,0,0.1) 0deg, transparent 5deg, rgba(0,0,0,0.3) 10deg, transparent 15deg);
        }
      `}</style>

      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-950/20 via-slate-950 to-black"></div>
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      </div>

      {/* --- FLOATING DEBRIS LAYER --- */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {items.length > 0 && items.map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt="debris"
            className={`debris-item object-contain ${item.size} drop-shadow-[0_0_10px_rgba(255,165,0,0.5)]`}
            style={{
              // @ts-ignore
              '--start-y': `${item.startY}%`, 
              animationDelay: `${item.delay}s`,
              animationDuration: `${item.duration}s`,
            }}
          />
        ))}
      </div>

      {/* --- GARGANTUA BLACK HOLE --- */}
      <div className="absolute top-1/2 right-[-20%] md:right-[-10%] -translate-y-1/2 w-[1000px] h-[1000px] flex items-center justify-center z-0 pointer-events-none scale-[0.6] md:scale-110">
        <div className="relative w-full h-full rotate-[-25deg]">
            {/* Lensing */}
            <div className="absolute top-[22%] left-1/2 -translate-x-1/2 w-[500px] h-[350px] bg-orange-500/20 rounded-t-full blur-[60px]"></div>
            <div className="absolute top-[24%] left-1/2 -translate-x-1/2 w-[420px] h-[280px] rounded-t-full border-t-[40px] border-orange-200/80 blur-xl mix-blend-screen opacity-90"></div>
            {/* Back Disk */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px]">
                 <div className="w-full h-full rounded-full transform scale-y-[0.12] scale-x-100 relative">
                    <div className="absolute inset-0 rounded-full disk-gradient blur-[6px] opacity-80"></div>
                    <div className="absolute inset-0 rounded-full disk-texture opacity-50 animate-[texture-spin_30s_linear_infinite]"></div>
                 </div>
            </div>
            {/* Event Horizon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] bg-black rounded-full z-20 shadow-[0_0_80px_rgba(255,100,0,0.4)]">
                <div className="absolute inset-0 rounded-full border-[2px] border-white/90 blur-[1px]"></div>
                <div className="absolute inset-[2px] rounded-full bg-black"></div>
            </div>
            {/* Front Disk */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] z-30">
                 <div className="w-full h-full rounded-full transform scale-y-[0.12] scale-x-100 relative">
                     <div className="absolute inset-0 rounded-full disk-gradient mix-blend-screen blur-[2px] [mask-image:linear-gradient(to_bottom,transparent_48%,black_52%)]"></div>
                     <div className="absolute inset-0 rounded-full disk-texture opacity-80 animate-[texture-spin_30s_linear_infinite] [mask-image:linear-gradient(to_bottom,transparent_48%,black_52%)]"></div>
                 </div>
            </div>
            {/* Bottom Lensing */}
            <div className="absolute bottom-[24%] left-1/2 -translate-x-1/2 w-[450px] h-[200px] border-b-[30px] border-orange-600/60 rounded-b-full blur-xl opacity-80"></div>
            <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[550px] h-[250px] bg-red-900/20 rounded-b-full blur-[60px]"></div>
        </div>
      </div>

      {/* --- UI CONTENT LAYER --- */}
      <div className="relative z-40 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center md:items-start text-center md:text-left">
        
        {/* Logo Group - Redshifted + Catalyst */}
        <div className="flex flex-col items-center mb-8">
          {/* Redshifted Logo */}
          <a href="https://redshifted.ca" target="_blank" rel="noopener noreferrer" className="group">
            <img 
              src="/redshifted-logo.png" 
              alt="Redshifted Logo" 
              className="h-10 md:h-12 w-auto opacity-90 group-hover:opacity-100 group-hover:brightness-150 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all duration-300"
            />
          </a>

          {/* Catalyst Logo */}
          <div className="relative group -mt-0 md:-mt-0 -z-10">
            <div className="absolute -inset-10 bg-orange-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
           <img 
             src="/catalystlogo.png" 
             alt="Catalyst Logo" 
             className="relative z-10 w-[280px] md:w-[500px] h-auto drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]"
           />
          </div>
        </div>

        {/* 2. POWERED BY */}
        <div className="flex flex-col items-start gap-2 mb-8">
          <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-slate-500">
            POWERED BY
          </p>
          <a href="https://www.thalesgroup.com/en" target="_blank" rel="noopener noreferrer" className="inline-block group relative">
            {/* Background halo */}
            <div className="absolute -inset-4 bg-white/5 blur-2xl rounded-full opacity-60 group-hover:opacity-100 group-hover:bg-white/10 transition-all duration-300"></div>
            <img 
              src="/sponsors/sponsor_thales.png" 
              alt="Thales Logo" 
              className="relative h-6 md:h-8 w-auto opacity-95 group-hover:opacity-100 group-hover:brightness-110 drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] group-hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.9)] transition-all duration-300"
            />
          </a>
        </div>

        {/* Description Text */}
        <p className="max-w-xl text-lg md:text-xl text-slate-300 mb-8 leading-relaxed drop-shadow-md font-light pl-2">
          Join us at Canada's first hardware hackathon for highschoolers! Start your hardware journey here, or build something you've never tried before. <br/><span className="text-white font-medium">This is a beginner friendly-event.</span>
        </p>

        {/* --- 3. COUNTDOWN TIMER --- */}
        <div className="flex gap-4 md:gap-6 mb-12 pl-2">
           {[
             { label: 'Days', value: timeLeft.days },
             { label: 'Hours', value: timeLeft.hours },
             { label: 'Minutes', value: timeLeft.minutes },
             { label: 'Seconds', value: timeLeft.seconds }
           ].map((item, i) => (
             <div key={i} className="flex flex-col items-center group">
               {/* Outer glow effect */}
               <div className="relative">
                 <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-all duration-500"></div>
                 <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-md border-2 border-white/20 rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.15)] group-hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] group-hover:border-purple-400/50 transition-all duration-300">
                   <span className="text-2xl md:text-3xl font-mono font-bold bg-gradient-to-br from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent tabular-nums drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform duration-300">
                     {item.value < 10 ? `0${item.value}` : item.value}
                   </span>
                 </div>
               </div>
               <span className="text-[10px] uppercase tracking-wider text-slate-400 group-hover:text-cyan-300 mt-2 transition-colors duration-300 font-semibold">{item.label}</span>
             </div>
           ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center md:items-start gap-5 w-full sm:w-auto mb-16 pl-1">
          <a href="http://tiny.cc/catalyst-build" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <button className="group relative w-full sm:w-auto px-8 py-4 bg-white text-slate-950 font-bold text-lg rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,165,0,0.5)] cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-amber-500 to-red-500 opacity-20 group-hover:opacity-50 transition-opacity"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start Mission <Rocket className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </a>
          
          <a href="#faq" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-4 bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-lg text-white font-bold text-lg hover:bg-white/10 hover:border-white/40 transition-all flex items-center justify-center gap-2 cursor-pointer">
              View Trajectory <ChevronRight className="w-5 h-5 text-slate-400" />
            </button>
          </a>
        </div>

        {/* Logistics */}
        <div className="w-full md:w-auto border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-8 flex justify-center md:justify-start">
          <div className="flex flex-col sm:flex-row gap-6 text-sm font-medium">
            <a href="https://www.google.com/calendar/render?action=TEMPLATE&text=Redshifted+Catalyst+-+Canada%27s+First+Hardware+Hackathon+for+High+Schoolers&dates=20260307T130000Z/20260308T030000Z&details=Ever+wanted+to+actually+BUILD+something+cool%3F%0ARedshifted+Catalyst+is+Canada%27s+FIRST+hardware+hackathon+for+high+schoolers%2C+and+it%27s+going+to+be+insane.+Forget+coding+on+a+screen+all+day+-+this+is+about+designing+and+building+real%2C+physical+hardware+projects+with+your+hands.%0A%0AYou%27ll+team+up+with+other+students%2C+get+access+to+tools+and+hardware+%28like+ESP32%29%2C+and+make+something+from+scratch.%0A%0AFREE+%28no+cost+%2B+free+food+%2B+free+merch+%2B+prizes%29%0A%0ASign+up+here%3A+http%3A%2F%2Ftiny.cc%2Fcatalyst-build&location=STEM+Complex%2C+uOttawa%2C+150+Louis-Pasteur+Private"
              title="Add to Google Calendar!"
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-full bg-white/5 border border-white/5 hover:bg-white/10 hover:border-orange-500/30 transition-all group shadow-lg">
            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/5 shadow-lg">
              <Calendar className="w-4 h-4 text-orange-400 group-hover:animate-bounce" />
              <span className="text-slate-200">Saturday, March 7th, 2026</span>
            </div>
            </a>
            <a href="https://www.uottawa.ca/about-us/administration-services/facilities/campus-maps/building/stem-complex" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 hover:border-orange-500/30 transition-all group shadow-lg"
            >
              <MapPin className="w-4 h-4 text-orange-400 group-hover:animate-bounce" />
              <span className="text-slate-200 group-hover:text-white">STEM Complex, uOttawa</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-2xl opacity-20 transform rotate-6"></div>
            <div className="relative bg-slate-900 border border-white/10 rounded-2xl p-8 overflow-hidden">
               {/* Decorative grid */}
               <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
               
               <div className="relative z-10">
                 <div className="flex items-center gap-4 mb-6">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                 </div>
                 <code className="text-cyan-300 font-mono text-sm block">
                   &gt; initiating launch_sequence...<br/>
                   &gt; loading modules: [ROBOTICS, FUN, NEW]<br/>
                   &gt; status: READY_TO_HACK
                 </code>
               </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Innovate Beyond the Atmosphere</h2>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              Catalyst is Canada's first high-school hardware hackathon, where creativity meets technology. Whether you're a beginner or a seasoned hacker, this is your chance to build projects that reach for the stars. <br></br> <br></br>Unlike traditional software hackathons:
            </p>
            <ul className="space-y-4">
              {[
                'Catalyst empowers students to design, build physical hardware',
                'Circuits, sensors, mechanical systems',
                'Is more than just a coding event - it’s a full maker experience',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-200">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

interface HighlightCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  caption: string;
  color: string;
}

const HighlightCard: React.FC<HighlightCardProps> = ({ icon, title, description, image, caption, color }) => {
  // Config for the glow colors
  const glowConfig: { [key: string]: string } = {
    cyan: "from-cyan-400 via-blue-500 to-cyan-400 border-cyan-500/50",
    purple: "from-fuchsia-500 via-purple-500 to-fuchsia-500 border-purple-500/50",
    orange: "from-orange-400 via-red-500 to-yellow-500 border-orange-500/50",
  };

  return (
    <div className="relative h-full flex flex-col">
      {/* 1. THE CONSTANT GLOW BEHIND */}
      {/* -inset-1 makes it slightly larger than the card. opacity-75 makes it very bright. */}
      <div 
        className={`absolute -inset-1.5 bg-gradient-to-r ${glowConfig[color].split(' ')[0]} 
        rounded-xl blur-lg opacity-60 animate-pulse`}
      ></div>

      {/* 2. THE CARD CONTENT */}
      {/* z-10 ensures it sits on top of the glow. h-full ensures cards are same height. */}
      <div className={`relative z-10 h-full flex flex-col bg-slate-950 rounded-xl p-8 border-2 ${glowConfig[color].split(' ')[3]}`}>
        
        {/* HEADER: Icon & Title */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="mb-3 text-white transform scale-125">
            {icon}
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wider font-mono">
            {title}
          </h3>
        </div>

        {/* DESCRIPTION */}
        <p className="text-slate-300 text-center text-lg mb-8 leading-relaxed">
            {description}
        </p>

        {/* IMAGE AREA - Fills available space */}
        <div className="flex-grow w-full rounded-lg overflow-hidden border border-white/10 mb-4 bg-black/50">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
            />
        </div>

        {/* CAPTION */}
        <p className="text-slate-500 text-center text-sm italic font-medium mt-auto">
          {caption}
        </p>

      </div>
    </div>
  );
};

const HighlightsSection: React.FC = () => {
  const highlights = [
    {
      icon: <Zap className="w-8 h-8 text-cyan-400 fill-cyan-400" />,
      title: "Design Your Project",
      description: "Let your imagination run wild. Prototype the ideas you've never thought possible.",
      image: "/about1.png", // Schematic/Tech image
      caption: "Learn. Design. Make. Repeat. Eat. Repeat.",
      color: "cyan"
    },
    {
      icon: <Box className="w-8 h-8 text-purple-400 fill-purple-400" />,
      title: "Build It IRL",
      description: "Build something for the 1st time or 50th time. Use parts you've never tried before.",
      image: "/about2.png", // 3D Printer/Building
      caption: "Teenagers building @ Scrapyard Ottawa 2025",
      color: "purple"
    },
    {
      icon: <Hammer className="w-8 h-8 text-orange-400 fill-orange-400" />,
      title: "Have fun!",
      description: "Top teams get amazing prizes, and everyone leaves with new skills, friends, and memories.",
      image: "/about3.png", // People/Hackathon
      caption: "Group photo @ Lockdown 2025",
      color: "orange"
    }
  ];

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Optional: Background gradient splash behind the whole section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-900/10 blur-[120px] pointer-events-none"></div>

      {/* Container - widen to 95% to fill screen */}
      <div className="w-[95%] max-w-[100rem] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {highlights.map((item, index) => (
            <HighlightCard 
              key={index}
              {...item}
            />
          ))}
        </div>
      </div>
    </section>
  );
};



const FlightPaths: React.FC = () => {
  return (
    <section id="tracks" className="relative py-24 bg-slate-950 border-t border-white/10 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight uppercase" style={{ fontFamily: 'monospace' }}>
            CHOOSE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">FLIGHT PATH</span>
          </h2>
          <p className="text-slate-400 text-lg italic">
            Design. Share. Build. Repeat. Make the best project you can, your way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
          
          {/* --- TRACK 1: STARTER / CADET --- */}
          <div className="group flex flex-col h-full bg-slate-900 border-2 border-cyan-500/30 rounded-2xl overflow-hidden hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]">
            
            {/* Text Header */}
            <div className="p-8 pb-4 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Cadet Projects - The beginning of your journey.</h3>
              <p className="text-slate-400 italic">For beginners, or if you're unsure what to build. Start your venture here.</p>
            </div>

            {/* The "Graphic Poster" Area */}
            <div className="relative flex-grow mx-6 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border border-white/5 p-6 min-h-[300px] flex items-center justify-center">
              
              {/* Background Noise/Grid */}
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #22d3ee 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              
              {/* Graphic Composition */}
              <div className="relative w-full h-full max-w-md">
                
                <img src="/cadet.png" alt="Cadet Track" className="w-full h-full object-contain drop-shadow-lg" />
              </div>
            </div>

            {/* Bottom Button */}
            <a href='http://tiny.cc/catalyst-build' target="_blank" rel="noopener noreferrer">
            <button className="mt-auto w-full py-5 bg-cyan-600 hover:bg-cyan-500 text-white font-black uppercase tracking-widest transition-colors flex items-center justify-center gap-2 group-hover:bg-cyan-400 group-hover:text-black cursor-pointer">
              Start Cadet Track <ArrowRight className="w-5 h-5" />
            </button>
            </a>
          </div>

          {/* --- TRACK 2: CUSTOM / ACE --- */}
          <div className="group flex flex-col h-full bg-slate-900 border-2 border-purple-500/30 rounded-2xl overflow-hidden hover:border-purple-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(192,38,211,0.2)]">
            
            {/* Text Header */}
            <div className="p-8 pb-4 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Commander Track - Above and Beyond.</h3>
              <p className="text-slate-400 italic">For epic, primarily self-guided deep exploration into hardware. Beat the universe's challenge.</p>
            </div>

            {/* The "Graphic Poster" Area */}
            <div className="relative flex-grow mx-6 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-white/5 p-6 min-h-[300px] flex items-center justify-center">
              
              {/* Background Noise/Grid */}
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(45deg, #c026d3 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
              
              {/* Graphic Composition */}
              <div className="relative w-full h-full max-w-md">
                
                <img src="/commander.png" alt="Commander Track" className="w-full h-full object-contain drop-shadow-lg" />
              </div>
            </div>

            {/* Bottom Button */}
            <a href='http://tiny.cc/catalyst-build' target="_blank" rel="noopener noreferrer">
            <button className="mt-auto w-full py-5 bg-purple-600 hover:bg-purple-500 text-white font-black uppercase tracking-widest transition-colors flex items-center justify-center gap-2 group-hover:bg-purple-400 group-hover:text-black cursor-pointer">
              Start Commander Track <ArrowRight className="w-5 h-5" />
            </button>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Types ---
interface ScheduleItem {
  time: string;
  event: string;
  type: 'main' | 'food' | 'fun';
}

interface DaySchedule {
  day: string;
  date: string;
  events: ScheduleItem[];
}

interface FAQItem {
  question: string;
  answer: string;
}

// --- Components ---

const LogisticsSection: React.FC = () => {
  // State for FAQ Accordion
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // --- Data ---
  const scheduleData: DaySchedule[] = [
    {
      day: "MISSION DAY 0",
      date: "",
      events: [
        { time: "8:00", event: "Check-in & Swag Pickup", type: "main" },
        { time: "9:00", event: "Opening Ceremony", type: "main" },
        { time: "10:00", event: "Hacking Begins / Team Formation", type: "main" },
        { time: "13:30", event: "uOttawa Robotics Workshop", type: "fun" },
        { time: "14:30", event: "Lunch!", type: "food" },
        { time: "15:00", event: "Chess Tournament", type: "fun" },
        { time: "16:30", event: "Karaoke", type: "fun" },
        { time: "19:00", event: "PROJECT DEMOS!!!", type: "main" },
        { time: "20:00", event: "Dinner :D", type: "food" },
        { time: "21:00", event: "Closing Ceremony/Prizes", type: "main" },
        { time: "21:30", event: "Time to go home :(", type: "fun" },
      ]
    }
  ];

  const faqData: FAQItem[] = [
    {
      question: "Who can attend?",
      answer: "Any student (high school) with a passion to build something new. No previous hacking experience required—we have a 'Cadet' track for beginners!"
    },
    {
      question: "What does it cost?",
      answer: "Absolutely free! Swag, food, and hardware will be provided! Prizes are at the end :)"
    },
    {
      question: "Do I need a team?",
      answer: "You can come solo, but we'll be making teams of 3-4 the standard. Don't have one? Discuss in the server to match partners before the event starts!"
    },
    {
      question: "What hardware is available?",
      answer: "We have a wide range of beginner-intermediate level hardware, including esp32's and breadboards."
    },
    {
      question: "How can I sponsor this event?",
      answer: "Please email andy.han@redshifted.ca for sponsorship opportunities and packages."
    },
    {
      question: "I'm not sure if my parent/guardian will allow me to attend. What should I tell them?",
      answer: "No worries! Please email andy.han@redshifted.ca and we can schedule a short call to answer any questions they have and provide more information about the event."
    }
  ];

  return (
    <section id="faq" className="relative py-24 bg-slate-950 border-t border-white/10">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-900/20 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <Terminal className="w-6 h-6 text-cyan-400" />
            <span className="text-cyan-400 font-mono tracking-widest text-sm">SYSTEM LOGS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white">MISSION CONTROL</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* --- LEFT COLUMN: SCHEDULE --- */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Clock className="w-6 h-6 text-purple-400" />
              <h3 className="text-2xl font-bold text-white">Flight Plan</h3>
            </div>

            <div className="space-y-8 relative">
              {/* Vertical Line */}
              <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-transparent"></div>

              {scheduleData.map((day, dayIndex) => (
                <div key={dayIndex} className="relative">
                  {/* Day Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-14 w-14 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center relative z-10 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                      <span className="text-2xl font-bold text-white">{dayIndex + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-cyan-400 font-bold tracking-wide uppercase text-sm">{day.day}</h4>
                      <span className="text-slate-400 text-sm">{day.date}</span>
                    </div>
                  </div>

                  {/* Events */}
                  <div className="space-y-6 pl-20">
                    {day.events.map((item, i) => (
                      <div key={i} className="group relative">
                        {/* Dot on line */}
                        <div className="absolute -left-[59px] top-2 h-3 w-3 rounded-full bg-slate-950 border-2 border-slate-600 group-hover:border-cyan-400 group-hover:scale-125 transition-all"></div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 p-4 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                          <span className="font-mono text-cyan-300 min-w-[60px]">{item.time}</span>
                          <div>
                            <span className="text-slate-200 font-medium block group-hover:text-white transition-colors">{item.event}</span>
                            <span className={`text-xs px-2 py-0.5 rounded-full border ${
                              item.type === 'main' ? 'border-purple-500/30 text-purple-300 bg-purple-500/10' :
                              item.type === 'food' ? 'border-orange-500/30 text-orange-300 bg-orange-500/10' :
                              'border-cyan-500/30 text-cyan-300 bg-cyan-500/10'
                            }`}>
                              {item.type.toUpperCase()}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- RIGHT COLUMN: FAQ --- */}
          <section>
          <div>
            <div className="flex items-center gap-3 mb-8">
              <HelpCircle className="w-6 h-6 text-cyan-400" />
              <h3 className="text-2xl font-bold text-white">Knowledge Base</h3>
            </div>

            <div className="space-y-4">
              {faqData.map((item, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div 
                    key={index}
                    onClick={() => toggleFaq(index)}
                    className={`group cursor-pointer rounded-xl border transition-all duration-300 overflow-hidden
                      ${isOpen 
                        ? 'bg-slate-900 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.15)]' 
                        : 'bg-slate-950 border-white/10 hover:border-white/30'
                      }`}
                  >
                    <div className="p-6 flex items-start justify-between gap-4">
                      <h4 className={`text-lg font-bold transition-colors ${isOpen ? 'text-cyan-400' : 'text-slate-200 group-hover:text-white'}`}>
                        {item.question}
                      </h4>
                      <div className={`mt-1 p-1 rounded-full transition-colors ${isOpen ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/5 text-slate-400'}`}>
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </div>
                    
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="px-6 pb-6 text-slate-400 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                );
              })}

              {/* FAQ CTA */}
              <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-purple-900/20 to-cyan-900/20 border border-white/10 text-center">
                <p className="text-slate-300 mb-4">Have more questions?</p>
                <a href="https://discord.gg/s9TS3xj3Am" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-bold hover:underline">
                  Join our Discord Server <Terminal className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
        </div>
      </div>
    </section>
    
  );
};

const Sponsors: React.FC = () => {
  const [hoveredSponsor, setHoveredSponsor] = useState<string | null>(null);
  const getHoverClasses = (id: string) => 
    hoveredSponsor === id ? 'scale-[1.04] shadow-2xl z-10' : 'z-0';

  return (
    <section id="sponsors" className="py-24 bg-slate-950 relative border-t border-white/10 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/20 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">PARTNERS</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Powering the next generation of engineers and innovators.
          </p>
        </div>
        
        <div className="space-y-20">
          
          {/* --- TITLE SPONSOR --- */}
          <div className="space-y-8">
            <div className="flex items-center justify-center gap-3">
              <Trophy className="w-8 h-8 text-cyan-400" />
              <h3 className="text-3xl font-bold text-white tracking-widest">TITLE SPONSOR</h3>
              <Trophy className="w-8 h-8 text-cyan-400" />
            </div>
            
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { name: "Thales", logo: "/sponsors/sponsor_thales.png", url: "https://www.thalesgroup.com/en" },
              ].map((sponsor, i) => (
                <div key={i} className="relative group">
                  {/* Outer Glow Effect - Behind the card with pulse animation */}
                  <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 rounded-3xl opacity-0 group-hover:opacity-70 blur-3xl transition-all duration-500 -z-10 group-hover:animate-pulse" />
                  
                  <a
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredSponsor(`title-${i}`)}
                  onMouseLeave={() => setHoveredSponsor(null)}
                    className={`relative w-full md:w-[700px] lg:w-[800px] rounded-3xl border border-cyan-500/30 bg-slate-900 backdrop-blur-md transition-all duration-500 group-hover:scale-105 group-hover:rotate-1 group-hover:border-cyan-400 cursor-pointer block overflow-hidden`}
                >
                    {/* Very subtle inner shimmer only */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/3 to-transparent animate-shimmer" style={{ animation: 'shimmer 2s infinite' }} />
                  </div>
                  
                    {/* Logo and Description */}
                    <div className="relative z-10 w-full p-12 space-y-8">
                    {sponsor.logo ? (
                        <div className="flex justify-center">
                          <img src={sponsor.logo} alt={sponsor.name} className="max-h-12 md:max-h-14 w-auto object-contain group-hover:scale-105 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-500" />
                        </div>
                    ) : (
                        <span className="text-3xl font-bold text-slate-300 group-hover:text-white group-hover:scale-110 transition-all duration-500 relative block text-center">
                        <span className="relative">{sponsor.name}</span>
                      </span>
                    )}
                      
                      {/* Description */}
                      <div className="relative z-10 text-slate-300 text-sm leading-relaxed text-center max-w-2xl mx-auto">
                        <p>Thales Group is a global technology leader in aerospace, defense, security, and digital markets, providing critical systems, products, and services for national security, aviation, space, and cybersecurity, focusing on digital and "deep tech" like AI, big data, and quantum to keep people safe, connected, and protected.</p>
                        <p className="mt-3">They design, develop, and manufacture complex solutions, including aircraft systems, defense equipment, cybersecurity software, space technologies, and identity management for government and commercial clients worldwide.</p>
                      </div>
                  </div>
                  
                  {/* Corner Icon */}
                    <div className="absolute top-4 right-4 z-20 opacity-50 group-hover:opacity-100 group-hover:rotate-12 group-hover:scale-125 transition-all duration-500">
                    <Trophy className="w-6 h-6 text-cyan-500 group-hover:text-cyan-300" />
                  </div>
                  
                  {/* Animated Corner Accents */}
                    <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyan-400/0 group-hover:border-cyan-400/80 transition-all duration-500 rounded-tl-3xl z-20" />
                    <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-cyan-400/0 group-hover:border-cyan-400/80 transition-all duration-500 rounded-br-3xl z-20" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* --- GOLD SPONSORS --- */}
          <div className="space-y-8">
            <div className="flex items-center justify-center gap-3">
              <Award className="w-6 h-6 text-yellow-500" />
              <h3 className="text-2xl font-bold text-yellow-100 tracking-widest">GOLD</h3>
              <Award className="w-6 h-6 text-yellow-500" />
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: "YRI Fellowship", logo: "/sponsors/sponsor_yri.webp", url: "https://yriscience.com/" }, // Removed specific path to avoid 404, replace null with path if you have it
                { name: "Your logo here", logo: null, url: null },
                { name: "Your logo here", logo: null, url: null },
              ].map((sponsor, i) => (
                <div
                  key={i}
                  className="group relative w-full sm:w-[350px] rounded-2xl border border-yellow-500/30 bg-slate-900/50 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(234,179,8,0.2)] overflow-hidden"
                >
                  {sponsor.url ? (
                    <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                      <div className="aspect-video relative w-full flex items-center justify-center p-6">
                        {sponsor.logo ? (
                          <img src={sponsor.logo} alt={sponsor.name} className="max-h-24 w-auto object-contain" />
                        ) : (
                          <span className="text-xl font-bold text-slate-300 group-hover:text-white">
                            {sponsor.name}
                          </span>
                        )}
                      </div>
                    </a>
                  ) : (
                    <div className="aspect-video relative w-full flex items-center justify-center p-6">
                      {sponsor.logo ? (
                        <img src={sponsor.logo} alt={sponsor.name} className="max-h-24 w-auto object-contain" />
                      ) : (
                        <span className="text-xl font-bold text-slate-300 group-hover:text-white">
                          {sponsor.name}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* --- SILVER SPONSORS (Restored Styling) --- */}
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-3">
              <Award className="w-7 h-7 text-slate-400" />
              <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-slate-500">SILVER</h3>
              <Award className="w-7 h-7 text-slate-400" />
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {[
                { name: "CIRA", logo: "/sponsors/sponsor_cira.png", url: "https://www.cira.ca/en/canadian-shield/" },
                { name: "Chessmates Ottawa", logo: "/sponsors/sponsor_chessmatesottawa.jpg", url: "https://www.chessmatesottawa.ca/" },
                { name: "Your logo here", logo: null },
              ].map((sponsor, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredSponsor(`silver-${i}`)}
                  onMouseLeave={() => setHoveredSponsor(null)}
                  className={`
                    group relative w-full sm:w-[280px]
                    rounded-2xl border-2 border-slate-500/40 
                    bg-gradient-to-br from-slate-500/10 via-slate-900/40 to-slate-900/40 
                    backdrop-blur-xl 
                    hover:border-slate-400/80 transition-all hover:scale-105 overflow-hidden
                    aspect-video flex items-center justify-center
                    ${getHoverClasses(`silver-${i}`)}
                  `}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                     {sponsor.logo ? (
                        sponsor.url ? (
                          <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                            {sponsor.name === "Chessmates Ottawa" ? (
                              <div className="relative p-6 rounded-xl border-[1px] border-white bg-white">
                                <img src={sponsor.logo} alt={sponsor.name} className="max-h-24 w-auto object-contain group-hover:scale-110 transition-transform" />
                              </div>
                            ) : (
                              <img src={sponsor.logo} alt={sponsor.name} className="max-h-24 w-auto object-contain group-hover:scale-110 transition-transform" />
                            )}
                          </a>
                        ) : (
                          sponsor.name === "Chessmates Ottawa" ? (
                            <div className="relative p-6 rounded-xl border-[1px] border-white bg-white">
                              <img src={sponsor.logo} alt={sponsor.name} className="max-h-24 w-auto object-contain" />
                            </div>
                          ) : (
                            <img src={sponsor.logo} alt={sponsor.name} className="max-h-24 w-auto object-contain" />
                          )
                        )
                     ) : (
                        <span className="text-lg font-bold text-slate-400 group-hover:text-white transition-colors">
                          {sponsor.name}
                        </span>
                     )}
                  </div>

                  {/* Icon Top Right */}
                  <div className="absolute top-3 right-3 opacity-50">
                    <Award className="w-5 h-5 text-slate-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- BRONZE SPONSORS (Restored Styling) --- */}
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-3">
              <TrendingUp className="w-6 h-6 text-orange-400/60" />
              <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-orange-400">BRONZE</h3>
              <TrendingUp className="w-6 h-6 text-orange-400/60" />
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {[
                { name: "Your logo here", logo: null },
                { name: "Your logo here", logo: null },
                { name: "Your logo here", logo: null },
                { name: "Your logo here", logo: null },
              ].map((sponsor, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredSponsor(`bronze-${i}`)}
                  onMouseLeave={() => setHoveredSponsor(null)}
                  className={`
                    group relative w-[160px] sm:w-[200px]
                    rounded-xl border border-orange-500/20 
                    bg-slate-900/30 backdrop-blur-sm 
                    hover:border-orange-500/40 transition-all hover:scale-105 overflow-hidden
                    aspect-video flex items-center justify-center
                    ${getHoverClasses(`bronze-${i}`)}
                  `}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <span className="text-sm font-medium text-slate-500 group-hover:text-orange-200 transition-colors">
                    {sponsor.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* --- COMMUNITY PARTNERS (Restored Styling) --- */}
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-3">
              <Heart className="w-6 h-6 text-pink-500/60" />
              <h3 className="text-xl md:text-2xl font-bold text-slate-400">COMMUNITY PARTNERS</h3>
              <Heart className="w-6 h-6 text-pink-500/60" />
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {[
                { name: ".xyz", logo: "/sponsors/sponsor_xyz.png", url: "https://gen.xyz" },
                { name: "CTV", logo: "/sponsors/sponsor_ctv.png", url: "https://ctvnews.ca" },
                { name: "AOPS", logo: "/sponsors/sponsor_aops.png", url: "https://artofproblemsolving.com/" },
                { name: "1Password", logo: "/sponsors/sponsor_1pass.png", url: "https://1password.com/" },
                { name: "Ingenium", logo: "/sponsors/sponsor_ingenium.png", url: "https://ingenium.ca/en/" },
              ].map((sponsor, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredSponsor(`community-${i}`)}
                  onMouseLeave={() => setHoveredSponsor(null)}
                  className={`
                    group relative w-[140px] sm:w-[180px]
                    rounded-2xl border-2 border-slate-600/40 
                    bg-gradient-to-br from-slate-700/20 via-slate-900/40 to-slate-900/40 
                    backdrop-blur-xl 
                    hover:border-slate-400/80 transition-all hover:scale-105 overflow-hidden
                    aspect-video flex items-center justify-center
                    ${getHoverClasses(`community-${i}`)}
                  `}
                >
                  <a href={sponsor.url} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20"></a>
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {sponsor.logo ? (
                     <img 
                       src={sponsor.logo} 
                       alt={sponsor.name} 
                       className={`w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity ${
                         sponsor.name === 'AOPS' ? 'max-h-12' : sponsor.name === 'Ingenium' ? 'max-h-10' : 'max-h-16'
                       }`} 
                     />
                  ) : (
                     <span className="text-xs font-bold text-slate-500 group-hover:text-pink-200 transition-colors">
                       {sponsor.name}
                     </span>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number; vx: number; vy: number }>>([]);

  const handleHeartClick = (e: React.MouseEvent<SVGSVGElement>) => {
    e.stopPropagation();
    const footer = document.querySelector('footer');
    if (!footer) return;
    
    const footerRect = footer.getBoundingClientRect();
    const rect = e.currentTarget.getBoundingClientRect();
    
    // Calculate position relative to footer
    const relativeX = rect.left - footerRect.left + rect.width / 2;
    const relativeY = rect.top - footerRect.top + rect.height / 2;
    
    const newHearts = Array.from({ length: 8 }, (_, i) => {
      const angle = (Math.PI * 2 * i) / 8;
      return {
        id: Date.now() + i,
        x: relativeX,
        y: relativeY,
        vx: Math.cos(angle) * 100,
        vy: Math.sin(angle) * 100 - 150,
      };
    });
    
    setHearts(prev => [...prev, ...newHearts]);
    
    setTimeout(() => {
      setHearts(prev => prev.filter(h => !newHearts.find(nh => nh.id === h.id)));
    }, 2000);
  };

  return (
      <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8 bg-purple-900/10 border-t border-background/20 relative overflow-hidden">
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          className="w-3 h-3 text-red-500 fill-red-500 absolute pointer-events-none z-50"
          style={{
            left: `${heart.x}px`,
            top: `${heart.y}px`,
            transform: 'translate(-50%, -50%)',
            animation: `heartFloat-${heart.id} 2s ease-out forwards`,
          }}
        />
      ))}
      <style>{`
        ${hearts.map(heart => `
          @keyframes heartFloat-${heart.id} {
            0% {
              transform: translate(-50%, -50%) scale(1) rotate(0deg);
              opacity: 1;
            }
            50% {
              transform: translate(calc(-50% + ${heart.vx * 0.5}px), calc(-50% + ${heart.vy * 0.5}px)) scale(1.2) rotate(${Math.random() * 360}deg);
              opacity: 0.8;
            }
            100% {
              transform: translate(calc(-50% + ${heart.vx}px), calc(-50% + ${heart.vy + 200}px)) scale(0.5) rotate(${Math.random() * 720}deg);
              opacity: 0;
            }
          }
        `).join('')}
      `}</style>
      <div className="max-w-6xl mx-auto text-amber-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <a href="https://redshifted.ca" target="_blank" rel="noopener noreferrer">
              <img src="/redshifted-logo.png" alt="Redshifted Logo" className="w-64 mb-2" />
            </a>
            <p className="text-background/80">
              Empowering Ottawa's youth through hands-on STEM education and
              innovation.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="http://tiny.cc/catalyst-build" target="_blank" rel="noopener noreferrer">
                  Register
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/80 hover:text-primary transition-colors">
                  About Catalyst
                </a>
              </li>
              <li>
                <a href="#sponsors" className="text-background/80 hover:text-primary transition-colors">
                  Sponsors
                </a>
              </li>
              <li>
                <a href="#faq" className="text-background/80 hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/redshifted.ottawa"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 p-3 rounded-full hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:programs@redshifted.ca"
                className="bg-background/10 p-3 rounded-full hover:bg-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/70">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart onClick={handleHeartClick} className="w-4 h-4 text-primary inline-block transition-all duration-300 hover:scale-125 hover:text-red-500 hover:fill-red-500 hover:rotate-12 hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.8)] hover:animate-pulse cursor-pointer" /> by the Redshifted Team
          </p>
          <p className="mt-2">© {new Date().getFullYear()} Redshifted. </p>
        </div>
      </div>
    </footer>
  );
};

const WhiteHoleHero: React.FC = () => {
  // --- CONFIGURATION FOR FLOATING ITEMS ---
  // Same items, but now they are being created/ejected
  const debrisItems = [
    { id: 1, src: "https://cdn-icons-png.flaticon.com/512/2560/2560576.png", size: "w-16" }, // Laptop
    { id: 2, src: "https://cdn-icons-png.flaticon.com/512/1046/1046775.png", size: "w-12" }, // Mouse
    { id: 3, src: "https://cdn-icons-png.flaticon.com/512/428/428001.png", size: "w-20" }, // Rocket
    { id: 4, src: "https://cdn-icons-png.flaticon.com/512/2165/2165212.png", size: "w-10" }, // Chip
    { id: 5, src: "https://cdn-icons-png.flaticon.com/512/2906/2906274.png", size: "w-14" }, // Coffee
    { id: 6, src: "https://cdn-icons-png.flaticon.com/512/644/644667.png", size: "w-12" }, // Planet
  ];

  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    // Determine where each item lands on the Y axis
    const totalSpan = 90; 
    const segmentSize = totalSpan / debrisItems.length;

    const randomized = debrisItems.map((item, index) => {
      const basePos = 5 + (index * segmentSize); 
      const noise = Math.random() * (segmentSize * 0.8);
      
      return {
        ...item,
        endY: basePos + noise, // The destination Y coordinate  
        delay: Math.random() * 4,
        duration: 5 + Math.random() * 2
      };
    });
    
    // Shuffle
    setItems(randomized.sort(() => Math.random() - 0.5));
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
      
      {/* --- CSS PHYSICS ENGINE --- */}
      <style>{`
        /* 1. Texture Spin (Reverse Direction for Ejection feel) */
        @keyframes texture-spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        /* 2. Ejection Physics (Center -> Outwards) */
        @keyframes eject {
          0% {
            left: 20%; /* Center of White Hole X */
            top: 50%;  /* Center of White Hole Y */
            transform: scale(0) rotate(0deg);
            opacity: 0;
            filter: blur(10px) brightness(10); /* Starts as pure light */
          }
          5% {
            opacity: 0;
          }
          10% {
            opacity: 1;
            filter: blur(0px) brightness(2);
          }
          
          /* The "Expulsion" - Explosive force outwards */
          100% {
             left: 90%; 
             top: var(--end-y); /* Land at random Y */
             transform: scale(1) rotate(360deg);
             opacity: 0; /* Fade out as they drift too far */
          }
        }

        .eject-item {
          position: absolute;
          opacity: 0;
          animation-name: eject;
          /* Cubic-bezier for "Explosion": Fast start, slow end */
          animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
          animation-iteration-count: infinite;
        }

        /* 3. White Hole Gradients */
        .whitehole-gradient {
          /* Pure Energy: White -> Cyan -> Blue -> Transparent */
          background: radial-gradient(circle, 
            rgba(255,255,255,1) 30%, 
            rgba(200,240,255,1) 40%, 
            rgba(50,200,255,0.9) 50%, 
            rgba(0,100,255,0.5) 65%,
            transparent 75%
          );
        }
        
        .whitehole-texture {
          background: repeating-conic-gradient(
            from 0deg, 
            rgba(255,255,255,0.8) 0deg, 
            transparent 5deg, 
            rgba(200,240,255,0.5) 10deg,
            transparent 15deg
          );
        }

        /* 4. The Singularity Pulse */
        @keyframes singularity-pulse {
          0%, 100% { box-shadow: 0 0 50px rgba(255, 255, 255, 0.8), 0 0 100px rgba(0, 200, 255, 0.5); }
          50% { box-shadow: 0 0 100px rgba(255, 255, 255, 1), 0 0 150px rgba(0, 200, 255, 0.8); }
        }
      `}</style>

      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Cold Space Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-950/40 via-slate-950 to-black"></div>
        {/* Stars */}
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      </div>

      {/* --- FLOATING DEBRIS LAYER (EJECTED) --- */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {items.length > 0 && items.map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt="debris"
            className={`eject-item object-contain ${item.size} drop-shadow-[0_0_15px_rgba(200,240,255,0.8)]`}
            style={{
              // @ts-ignore
              '--end-y': `${item.endY}%`, 
              animationDelay: `${item.delay}s`,
              animationDuration: `${item.duration}s`,
            }}
          />
        ))}
      </div>

      {/* --- WHITE HOLE (Left Side) --- */}
      {/* Positioned Left, scales down on mobile */}
      <div className="absolute top-1/2 left-[-30%] md:left-[-20%] lg:left-[-10%] -translate-y-1/2 w-[600px] md:w-[800px] lg:w-[1000px] h-[600px] md:h-[800px] lg:h-[1000px] flex items-center justify-center z-0 pointer-events-none scale-50 sm:scale-75 md:scale-100 lg:scale-110">
        
        {/* TILT: Rotated +20deg (Opposite of black hole) */}
        <div className="relative w-full h-full rotate-[20deg]">

        {/* 1. REAR LENSING (Top Arch - Blue) */}
        <div className="absolute top-[22%] left-1/2 -translate-x-1/2 w-[300px] md:w-[400px] lg:w-[500px] h-[200px] md:h-[280px] lg:h-[350px] bg-blue-400/20 rounded-t-full blur-[40px] md:blur-[50px] lg:blur-[60px]"></div>
        <div className="absolute top-[24%] left-1/2 -translate-x-1/2 w-[250px] md:w-[350px] lg:w-[420px] h-[160px] md:h-[220px] lg:h-[280px] rounded-t-full border-t-[25px] md:border-t-[35px] lg:border-t-[40px] border-cyan-200/80 blur-xl mix-blend-screen opacity-90"></div>
        
        {/* 2. ACCRETION DISK (BACK) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[700px] lg:w-[850px] h-[500px] md:h-[700px] lg:h-[850px]">
             <div className="w-full h-full rounded-full transform scale-y-[0.12] scale-x-100 relative">
            <div className="absolute inset-0 rounded-full whitehole-gradient blur-[4px] md:blur-[5px] lg:blur-[6px] opacity-80"></div>
            {/* Reverse spin for expulsion look */}
            <div className="absolute inset-0 rounded-full whitehole-texture opacity-60 animate-[texture-spin-reverse_30s_linear_infinite]"></div>
             </div>
        </div>

        {/* 3. THE SINGULARITY (White Sphere) */}
        {/* Instead of black, this is solid white/cyan */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] md:w-[200px] lg:w-[260px] h-[150px] md:h-[200px] lg:h-[260px] bg-white rounded-full z-20 animate-[singularity-pulse_3s_ease-in-out_infinite]">
            {/* Intense Blur Glow */}
            <div className="absolute inset-0 rounded-full bg-cyan-100 blur-xl"></div>
        </div>

        {/* 4. ACCRETION DISK (FRONT) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[700px] lg:w-[850px] h-[500px] md:h-[700px] lg:h-[850px] z-30">
             <div className="w-full h-full rounded-full transform scale-y-[0.12] scale-x-100 relative">
             {/* Bright Core */}
             <div className="absolute inset-0 rounded-full whitehole-gradient mix-blend-screen blur-[2px] [mask-image:linear-gradient(to_bottom,transparent_48%,black_52%)]"></div>
             {/* Texture */}
             <div className="absolute inset-0 rounded-full whitehole-texture opacity-90 animate-[texture-spin-reverse_30s_linear_infinite] [mask-image:linear-gradient(to_bottom,transparent_48%,black_52%)]"></div>
             </div>
        </div>

        {/* 5. BOTTOM LENSING */}
        <div className="absolute bottom-[24%] left-1/2 -translate-x-1/2 w-[280px] md:w-[380px] lg:w-[450px] h-[120px] md:h-[160px] lg:h-[200px] border-b-[20px] md:border-b-[25px] lg:border-b-[30px] border-blue-400/60 rounded-b-full blur-xl opacity-80"></div>
        <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[320px] md:w-[450px] lg:w-[550px] h-[150px] md:h-[200px] lg:h-[250px] bg-cyan-900/20 rounded-b-full blur-[40px] md:blur-[50px] lg:blur-[60px]"></div>

        </div>
      </div>

      {/* --- UI CONTENT LAYER (Right Aligned) --- */}
      {/* Aligned to the right/center-right to balance the visual weight */}
      <div className="relative z-40 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center md:items-end text-center md:text-right">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/60 backdrop-blur-md border border-cyan-400/50 mb-8 animate-float shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:border-white transition-colors cursor-default">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
          </span>
          <span className="text-cyan-50 text-xs md:text-sm font-bold tracking-[0.2em] uppercase">Event Genesis</span>
        </div>

        {/* 1. LOGO */}
        <div className="relative group mb-8">
           <div className="absolute -inset-10 bg-cyan-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
           <img 
             src="/catalystlogo.png" 
             alt="Catalyst Logo" 
             className="relative z-10 w-[280px] md:w-[500px] h-auto drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]"
           />
        </div>

        {/* 2. POWERED BY */}
        <div className="flex flex-col items-center md:items-end gap-2 mb-8 pr-2">
          <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-slate-400">
            POWERED BY
          </p>
          <a href="https://www.thalesgroup.com/en" target="_blank" rel="noopener noreferrer" className="inline-block group relative">
            {/* Background halo */}
            <div className="absolute -inset-4 bg-white/5 blur-2xl rounded-full opacity-60 group-hover:opacity-100 group-hover:bg-white/10 transition-all duration-300"></div>
            <img 
              src="/sponsors/sponsor_thales.png" 
              alt="Thales Logo" 
              className="relative h-6 md:h-8 w-auto opacity-95 group-hover:opacity-100 group-hover:brightness-110 drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] group-hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.9)] transition-all duration-300"
            />
          </a>
        </div>

        {/* Description Text */}
        <p className="max-w-xl text-lg md:text-xl text-slate-300 mb-12 leading-relaxed drop-shadow-md font-light pr-2">
          Creation starts here. Witness the birth of new ideas and impossible technologies. <br/><span className="text-white font-medium">This is Canada's first hardware hackathon for high schoolers.

</span>
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center md:items-start gap-5 w-full sm:w-auto mb-16 pr-1">
          <div className="w-full sm:w-auto">
            <a href="http://tiny.cc/catalyst-build" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <button className="group relative w-full sm:w-auto px-8 py-4 bg-white text-slate-950 font-bold text-lg rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,255,0.5)] cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-200 to-white opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Begin Creation <Zap className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform fill-black" />
                </span>
              </button>
            </a>
          </div>
          
          <a href="#faq" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-4 bg-slate-900/40 backdrop-blur-md border border-white/20 rounded-lg text-white font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all flex items-center justify-center gap-2 cursor-pointer">
              View Trajectory <ChevronRight className="w-5 h-5 text-slate-400" />
            </button>
          </a>
        </div>

        {/* Logistics */}
        <div className="w-full md:w-auto border-t md:border-t-0 md:border-r border-white/10 pt-8 md:pt-0 md:pr-8 flex justify-center md:justify-end">
          <div className="flex flex-col sm:flex-row gap-6 text-sm font-medium">
            <a href="https://www.google.com/calendar/render?action=TEMPLATE&text=Redshifted+Catalyst+-+Canada%27s+First+Hardware+Hackathon+for+High+Schoolers&dates=20260307T130000Z/20260308T030000Z&details=Ever+wanted+to+actually+BUILD+something+cool%3F%0ARedshifted+Catalyst+is+Canada%27s+FIRST+hardware+hackathon+for+high+schoolers%2C+and+it%27s+going+to+be+insane.+Forget+coding+on+a+screen+all+day+-+this+is+about+designing+and+building+real%2C+physical+hardware+projects+with+your+hands.%0A%0AYou%27ll+team+up+with+other+students%2C+get+access+to+tools+and+hardware+%28like+ESP32%29%2C+and+make+something+from+scratch.%0A%0AFREE+%28no+cost+%2B+free+food+%2B+free+merch+%2B+prizes%29%0A%0ASign+up+here%3A+http%3A%2F%2Ftiny.cc%2Fcatalyst-build&location=STEM+Complex%2C+uOttawa%2C+150+Louis-Pasteur+Private"
              title="Add to Google Calendar!"
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-full bg-white/5 border border-white/5 hover:bg-white/10 hover:border-orange-500/30 transition-all group shadow-lg">
            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/5 shadow-lg">
              <Calendar className="w-4 h-4 text-cyan-300 group-hover:animate-bounce" />
              <span className="text-slate-200">Saturday, March 7th, 2026</span>
            </div>
            </a>
            
            
            <a href="https://www.uottawa.ca/about-us/administration-services/facilities/campus-maps/building/stem-complex" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 hover:border-cyan-400/50 transition-all group shadow-lg"
            >
              <MapPin className="w-4 h-4 text-cyan-300 group-hover:animate-bounce" />
              <span className="text-slate-200 group-hover:text-white">STEM Complex, uOttawa</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

function App() {
  return (
    <div className="relative bg-slate-950 min-h-screen selection:bg-cyan-500 selection:text-white font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <HighlightsSection />
      <FlightPaths />
      <AboutSection />
      <Sponsors />
      <LogisticsSection />
      <WhiteHoleHero />
      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App; 