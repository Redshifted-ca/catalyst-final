import React, { useState, useEffect } from 'react';
import {Menu, X, Star, Heart, Clock, Moon, Utensils} from 'lucide-react';


interface NavItem {
  label: string;
  href: string;
}

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
    { label: 'Getting Started', href: '/#about' },
    { label: 'Tracks', href: '/#tracks' },
    { label: 'Sponsors', href: '/#sponsors' },
    { label: 'FAQ', href: '/#faq' },
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
          <a href="/#" className="group flex items-center relative">
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

const RamadanNotice: React.FC = () => {
  
  return (
    <section className="relative py-20 bg-slate-950 flex items-center justify-center overflow-hidden">
      
      {/* --- BACKGROUND DECOR --- */}
      {/* Golden Moon Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      {/* Floating Stars */}
      <div className="absolute top-10 right-[20%] text-amber-500/20 animate-pulse"><Star className="w-4 h-4" /></div>
      <div className="absolute bottom-10 left-[20%] text-amber-500/20 animate-pulse delay-700"><Star className="w-6 h-6" /></div>

      <div className="relative z-10 max-w-2xl w-full mx-4">
        
        {/* --- CARD CONTAINER --- */}
        <div className="bg-slate-900/60 backdrop-blur-xl border border-amber-500/30 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(245,158,11,0.1)]">
          
          {/* Header Bar */}
          <div className="bg-amber-500/10 border-b border-amber-500/20 p-6 flex items-center gap-4">
            <div className="p-3 bg-amber-500/20 rounded-full text-amber-400">
              <Moon className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide">Ramadan Accommodations</h2>
              <p className="text-amber-200/60 text-sm font-medium uppercase tracking-wider">Crew Notice</p>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 md:p-8 space-y-8">
            
            <p className="text-slate-300 leading-relaxed text-lg">
              For all participants celebrating Ramadan, we want to ensure you have a comfortable and spiritually accommodating experience at <span className="text-white font-bold">Redshifted Catalyst</span>.
            </p>

            {/* Prayer Times Section */}
            <div className="bg-slate-950/50 rounded-xl p-6 border border-white/5">
              <div className="flex items-center gap-3 mb-4 text-amber-400">
                <Clock className="w-5 h-5" />
                <h3 className="font-bold uppercase tracking-wider text-sm">Quiet Room & Prayer Times</h3>
              </div>
              <p className="text-slate-400 text-sm mb-4">
                A designated quiet room will be available for prayer and reflection during the following times:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {['12:15 PM - 12:30 PM', '3:20 PM - 3:35 PM', '7:20 PM - 7:30 PM'].map((time, i) => (
                  <div key={i} className="bg-slate-800/50 border border-white/10 rounded-lg py-2 px-3 text-center text-slate-200 font-mono text-sm">
                    {time}
                  </div>
                ))}
              </div>
            </div>

            {/* Food Schedule Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-amber-400">
                <Utensils className="w-5 h-5" />
                <h3 className="font-bold uppercase tracking-wider text-sm">Iftar & Dining</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-amber-500/10 to-transparent border-l-4 border-amber-500">
                  <span className="font-mono font-bold text-amber-400 shrink-0">8:00 PM</span>
                  <p className="text-slate-200 text-sm">
                    <span className="font-bold text-white">Main Dinner</span> will be served.
                  </p>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/30 border-l-4 border-slate-600">
                  <span className="font-mono font-bold text-slate-400 shrink-0">5:30 PM</span>
                  <div className="text-sm text-slate-300">
                    <p className="mb-2"><span className="text-white font-medium">Regular snacks</span> provided.</p>
                    <p className="text-slate-400 italic">
                      If you would like to break your fast immediately after 5:30 PM with specific items, please feel free to bring your own food.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer / CTA */}
            <div className="border-t border-white/10 pt-6 text-center">
              <p className="text-slate-400 text-sm mb-6">
                Please let us know if there are any other accommodations we can provide to support you.
              </p>
              
              <div className="inline-flex flex-col items-center">
                <div className="flex items-center gap-2 text-xl font-bold text-white mb-1">
                  Ramadan Mubarak <Heart className="w-5 h-5 text-amber-500 fill-amber-500" />
                </div>
                <span className="text-sm text-slate-500 font-mono">
                  — The Redshifted Team
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

function main() {
  return (
    <div className="relative bg-slate-950 min-h-screen selection:bg-cyan-500 selection:text-white font-sans overflow-x-hidden">
      <Navbar />
      <RamadanNotice />
    </div>
  );
}

export default main; 