import React, { useState, useEffect } from 'react';
import { Rocket, Calendar, MapPin, Menu, X, ChevronRight, Zap, Star, Box, Hammer, Trophy, Award, TrendingUp, Heart, Plus, Minus, Clock, HelpCircle, Terminal, Instagram, Mail, BookOpen, Wrench, ArrowRight, ArrowDownRight, ArrowUpRight } from 'lucide-react';
import * as AspectRatioModule from '@radix-ui/react-aspect-ratio';

const AspectRatio = AspectRatioModule.Root;

// --- Types ---
interface NavItem {
  label: string;
  href: string;
}

interface TrackProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// --- Components ---

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { label: 'Getting Started', href: '#about' },
    { label: 'Tracks', href: '#tracks' },
    { label: 'Sponsors', href: '#sponsors' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <a href="#" className="flex items-center">
            <div className="p-2 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-lg">
              <Rocket className="h-10 w-10   text-white" />
            </div>
            <img 
              src="/src/assets/catalystlogo.png" 
              alt="Catalyst logo" 
              className="h-10 md:h-14 w-auto object-contain" 
            />
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-slate-300 hover:text-cyan-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">
                  {item.label}
                </a>
              ))}
              <a href="http://tiny.cc/catalyst-hack">
              <button className="bg-white text-slate-900 hover:bg-cyan-400 hover:text-black px-5 py-2 rounded-full font-bold transition-all transform hover:scale-105">
                Register Now
              </button>
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-cyan-400">
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
            <button className="w-full text-center mt-4 bg-cyan-500 text-white px-5 py-3 rounded-md font-bold">
              Register Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};


const Hero: React.FC = () => {
  // Generate random twinkling stars
  const [stars, setStars] = useState<{ id: number; top: string; left: string; size: string; delay: string; duration: string }[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${1 + Math.random() * 3}px`,
      delay: `${Math.random() * 5}s`,
      duration: `${2 + Math.random() * 3}s`,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
      
      {/* --- CUSTOM CSS --- */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); box-shadow: 0 0 5px white; }
        }
        .star-twinkle {
          position: absolute;
          background-color: white;
          border-radius: 50%;
          animation-name: twinkle;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
        /* Cycle the tail brightness to simulate burning gas */
        @keyframes burn {
          0%, 100% { opacity: 0.8; filter: brightness(1); }
          50% { opacity: 1; filter: brightness(1.2); }
        }
      `}</style>

      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black"></div>
        <div className="absolute inset-0 opacity-20 mix-blend-screen" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
        
        {/* Stars */}
        <div className="absolute inset-0">
          {stars.map((star) => (
            <div 
              key={star.id}
              className="star-twinkle"
              style={{
                top: star.top,
                left: star.left,
                width: star.size,
                height: star.size,
                animationDelay: star.delay,
                animationDuration: star.duration
              }}
            />
          ))}
        </div>

        {/* --- THE COMET CONTAINER --- */}
        {/* Positioned slightly off-center to look dynamic */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] flex items-center justify-center">
          
          {/* 1. THE TAIL (Ion/Dust Trail) */}
          {/* Rotated to point up-left, creating the effect of falling down-right */}
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[300px] -translate-y-1/2 -translate-x-[10%] origin-left rotate-[-135deg] pointer-events-none">
            
            {/* Core Tail (Bright Blue/White) */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-200 via-blue-500 to-transparent blur-2xl opacity-80 animate-flow rounded-[100%]"></div>
            
            {/* Outer Glow (Purple/Cyan) */}
            <div className="absolute -inset-10 bg-gradient-to-r from-white via-purple-500 to-transparent blur-[60px] opacity-40 animate-flow-delayed rounded-[100%]"></div>
            
            {/* Speed Lines / Particles effect */}
            <div className="absolute top-1/2 left-0 w-full h-2 bg-white blur-md opacity-60"></div>
            <div className="absolute top-[40%] left-10 w-[80%] h-1 bg-cyan-300 blur-sm opacity-50"></div>
            <div className="absolute top-[60%] left-10 w-[80%] h-1 bg-purple-300 blur-sm opacity-50"></div>
          </div>

          {/* 2. THE NUCLEUS (Spinning Rock) */}
          <div className="relative z-10 w-64 h-64 animate-tumble">
            {/* The Rock Shape - Irregular Border Radius for 'Asteroid' look */}
            <div className="w-full h-full bg-slate-800 rounded-[55%_45%_39%_61%_/_60%_54%_46%_40%] shadow-[inset_-20px_-20px_50px_rgba(0,0,0,0.8),inset_10px_10px_30px_rgba(255,255,255,0.1)] overflow-hidden relative border-4 border-slate-700/50">
              
              {/* Surface Texture (Gradients) */}
              <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,_var(--tw-gradient-stops))] from-slate-800 via-slate-700 to-slate-900 opacity-80"></div>
              
              {/* Craters (Absolute positioned circles rotating with the rock) */}
              <div className="absolute top-[20%] left-[30%] w-12 h-10 bg-slate-900/60 rounded-full shadow-[inset_2px_2px_5px_rgba(0,0,0,0.8)] blur-[1px]"></div>
              <div className="absolute top-[60%] left-[60%] w-16 h-14 bg-slate-900/60 rounded-full shadow-[inset_3px_3px_6px_rgba(0,0,0,0.8)] blur-[1px]"></div>
              <div className="absolute top-[70%] left-[20%] w-8 h-8 bg-slate-900/50 rounded-full shadow-[inset_1px_1px_3px_rgba(0,0,0,0.8)]"></div>
              
            </div>

            {/* Front Atmosphere Glow (Where the comet hits the 'air') */}
            <div className="absolute -inset-4 rounded-full blur-xl mix-blend-screen pointer-events-none"></div>
          </div>

        </div>
      </div>
      {/* --- END COMET --- */}

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 mb-8 animate-float shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:border-cyan-400 transition-colors cursor-default">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-cyan-100 text-xs md:text-sm font-medium tracking-widest uppercase">Incoming Transmission</span>
        </div>

        {/* 1. CATALYST LOGO */}
        <div className="relative group mb-6">
           <div className="absolute -inset-10 bg-cyan-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
           <img 
             src="/src/assets/catalystlogo.png" 
             alt="Catalyst Logo" 
             className="relative z-10 w-[280px] md:w-[450px] h-auto mx-auto drop-shadow-[0_0_35px_rgba(34,211,238,0.4)]"
           />
        </div>

        {/* 2. PRESENTED BY */}
        <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-slate-500 mb-4">
          Presented By
        </p>

        {/* 3. REDSHIFTED LOGO */}
        <div className="mb-10">
          <a href="https://redshifted.ca" target="_blank" rel="noopener noreferrer" className="inline-block group">
             <img 
               src="/src/assets/redshifted-logo.png" 
               alt="Redshifted Logo" 
               className="h-8 md:h-12 w-auto opacity-90 group-hover:opacity-100 group-hover:brightness-125 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300"
             />
          </a>
        </div>

        {/* Description Text */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-10 leading-relaxed drop-shadow-lg font-light">
          Join us as we explore the cosmos. Start your journey here, or build something never seen before. <span className="text-white font-medium">The universe is your playground.</span>
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto mb-16">
          <a href="http://tiny.cc/catalyst-hack" className="w-full sm:w-auto">
            <button className="group relative w-full sm:w-auto px-8 py-4 bg-white text-slate-950 font-bold text-lg rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start Mission <Rocket className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </a>
          
          <a href="#faq" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-4 bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-lg text-white font-bold text-lg hover:bg-white/10 hover:border-white/30 transition-all flex items-center justify-center gap-2">
              View Trajectory <ChevronRight className="w-5 h-5 text-slate-400" />
            </button>
          </a>
        </div>

        {/* Logistics (Date & Location) */}
        <div className="w-full border-t border-white/10 pt-8 flex justify-center">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 text-sm font-medium">
            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/5">
              <Calendar className="w-4 h-4 text-cyan-400" />
              <span className="text-slate-200">Saturday, March 7th, 2026</span>
            </div>
            
            <a href="https://www.uottawa.ca/about-us/administration-services/facilities/campus-maps/building/stem-complex" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 hover:border-cyan-500/30 transition-all group"
            >
              <MapPin className="w-4 h-4 text-cyan-400 group-hover:animate-bounce" />
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
              Catalyst is Ottawa's first high-school hardware hackathon, where creativity meets technology. Whether you're a beginner or a seasoned hacker, this is your chance to build projects that reach for the stars. <br></br> <br></br>Unlike traditional software hackathons:
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

const TrackCard: React.FC<TrackProps> = ({ icon, title, description }) => (
  <div className="group relative p-8 bg-slate-900/50 border border-white/10 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:-translate-y-2">
    <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
    <div className="relative z-10">
      <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <div className="text-cyan-400">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{description}</p>
    </div>
  </div>
);


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
      image: "https://images.unsplash.com/photo-1614726365723-49cfae967a62?q=80&w=1000&auto=format&fit=crop", // Schematic/Tech image
      caption: "Learn. Design. Make. Repeat. Eat. Repeat.",
      color: "cyan"
    },
    {
      icon: <Box className="w-8 h-8 text-purple-400 fill-purple-400" />,
      title: "Build It IRL",
      description: "Build something for the 1st time or 50th time. Use parts you've never tried before.",
      image: "/about3.png", // 3D Printer/Building
      caption: "Teenagers building @ Scrapyard Ottawa 2025, an event our team has helped organise.",
      color: "purple"
    },
    {
      icon: <Hammer className="w-8 h-8 text-orange-400 fill-orange-400" />,
      title: "Have fun!",
      description: "Top teams get amazing prizes, but everyone leaves with new skills, friends, and memories.",
      image: "/about3.png", // People/Hackathon
      caption: "Teenagers demoing @ Scrapyard 2025, an event our team has helped organise.",
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
                
                {/* Element 1 */}
                <div className="absolute top-0 left-15 transform -rotate-6 bg-slate-800 p-4 rounded-lg border border-cyan-500/50 shadow-lg z-10">
                  <BookOpen className="w-8 h-8 text-cyan-400 mb-2" />
                  <span className="font-bold text-white font-mono text-lg">Imagine<br/>something</span>
                </div>

                {/* Arrow 1 */}
                <div className="absolute top-12 left-50 text-cyan-500 animate-pulse">
                   <ArrowDownRight className="w-12 h-12" />
                </div>

                {/* Element 2 */}
                <div className="absolute top-1/2 right-10 transform translate-y-[-50%] rotate-3 bg-slate-800 p-4 rounded-lg border border-cyan-500/50 shadow-lg z-10">
                   <Wrench className="w-8 h-8 text-yellow-400 mb-2" />
                   <span className="font-bold text-white font-mono text-lg">Assemble<br/>Prototype</span>
                </div>

                 {/* Arrow 2 */}
                 <div className="absolute bottom-15 left-50 text-cyan-500 animate-pulse delay-75">
                   <ArrowDownRight className="w-12 h-12 transform rotate-100" />
                </div>

                {/* Element 3 */}
                <div className="absolute bottom-0 left-15 transform rotate-2 bg-slate-800 p-4 rounded-lg border border-cyan-500/50 shadow-lg z-10">
                   <Rocket className="w-8 h-8 text-red-500 mb-2" />
                   <span className="font-bold text-white font-mono text-lg">Liftoff!</span>
                </div>
              </div>
            </div>

            {/* Bottom Button */}
            <a href='https://forms.gle/FEVGkZR9T5gLnjgE7'>
            <button className="mt-auto w-full py-5 bg-cyan-600 hover:bg-cyan-500 text-white font-black uppercase tracking-widest transition-colors flex items-center justify-center gap-2 group-hover:bg-cyan-400 group-hover:text-black">
              Start Cadet Track <ArrowRight className="w-5 h-5" />
            </button>
            </a>
          </div>

          {/* --- TRACK 2: CUSTOM / ACE --- */}
          <div className="group flex flex-col h-full bg-slate-900 border-2 border-purple-500/30 rounded-2xl overflow-hidden hover:border-purple-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(192,38,211,0.2)]">
            
            {/* Text Header */}
            <div className="p-8 pb-4 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Commander Track - Climax of your MC energy.</h3>
              <p className="text-slate-400 italic">For epic, self-guided deep space exploration. Beat the universe's challenge.</p>
            </div>

            {/* The "Graphic Poster" Area */}
            <div className="relative flex-grow mx-6 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-white/5 p-6 min-h-[300px] flex items-center justify-center">
              
              {/* Background Noise/Grid */}
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(45deg, #c026d3 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
              
              {/* Graphic Composition */}
              <div className="relative w-full h-full max-w-md">
                
                {/* Element 1 */}
                <div className="absolute top-4 left-4 transform rotate-3 bg-slate-800 p-4 rounded-lg border border-purple-500/50 shadow-lg z-10">
                  <div className="w-8 h-8 rounded-full border-2 border-purple-400 mb-2 bg-purple-500/20"></div>
                  <span className="font-bold text-white font-mono text-lg">Design<br/>Originals</span>
                </div>

                {/* Arrow 1 */}
                <div className="absolute top-8 left-50 text-purple-400 animate-pulse">
                   <ArrowUpRight className="w-12 h-12 transform rotate-50" />
                </div>

                {/* Element 2 */}
                <div className="absolute top-0 right-4 transform -rotate-3 bg-slate-800 p-4 rounded-lg border border-purple-500/50 shadow-lg z-10">
                   <span className="text-2xl font-bold text-green-400 block mb-1">$$$</span>
                   <span className="font-bold text-white font-mono text-lg">Get<br/>Building</span>
                </div>

                 {/* Arrow 2 */}
                 <div className="absolute bottom-15 right-20 text-purple-400 animate-pulse delay-75">
                   <ArrowDownRight className="w-12 h-12 transform rotate-100" />
                </div>

                {/* Element 3 (Main Image Area) */}
                <div className="absolute bottom-1/10000 left-1/2 transform -translate-x-1/2 bg-slate-800 p-4 rounded-lg border border-purple-500/50 shadow-lg z-10 w-48 text-center">
                   <Trophy className="w-10 h-10 text-yellow-400 mx-auto mb-2" />
                   <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-mono text-xl">BEAT THE<br/>CHALLENGE!</span>
                </div>
              </div>
            </div>

            {/* Bottom Button */}
            <a href='https://forms.gle/FEVGkZR9T5gLnjgE7'>
            <button className="mt-auto w-full py-5 bg-purple-600 hover:bg-purple-500 text-white font-black uppercase tracking-widest transition-colors flex items-center justify-center gap-2 group-hover:bg-purple-400 group-hover:text-black">
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
      day: "MISSION DAY 1",
      date: "Saturday, March 7th",
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
      answer: "$15 solo, $10 per person if you register successfully with a friend. Swag, food, and hardware will be provided! Prizes are at the end :)"
    },
    {
      question: "Do I need a team?",
      answer: "You can come solo, but we'll be making teams of 2-4 the standard. Don't have one? Discuss in the server to match partners before the event starts!"
    },
    {
      question: "What hardware is available?",
      answer: "We have a wide range of beginner-intermediate level hardware, including esp32's and breadboards."
    },
    {
      question: "How can I sponsor this event?",
      answer: "Please email andy.han@redshifted.ca for sponsorship opportunities and packages."
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
                <a href="https://discord.gg/s9TS3xj3Am" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-bold hover:underline">
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
            Powering the next generation of space exploration and innovation.
          </p>
        </div>
        
        <div className="space-y-20">
          
          {/* --- PLATINUM SPONSORS --- */}
          <div className="space-y-8">
            <div className="flex items-center justify-center gap-3">
              <Trophy className="w-8 h-8 text-cyan-400" />
              <h3 className="text-3xl font-bold text-white tracking-widest">PLATINUM</h3>
              <Trophy className="w-8 h-8 text-cyan-400" />
            </div>
            
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { name: "Your logo here", logo: null, url: "#" },
              ].map((sponsor, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredSponsor(`platinum-${i}`)}
                  onMouseLeave={() => setHoveredSponsor(null)}
                  className={`group relative w-full md:w-[600px] rounded-3xl border border-cyan-500/30 bg-slate-900/50 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Aspect Ratio Replacement */}
                  <div className="aspect-video relative w-full flex items-center justify-center p-10">
                    {sponsor.logo ? (
                      <a href={sponsor.url}>
                        <img src={sponsor.logo} alt={sponsor.name} className="max-h-32 w-auto object-contain" />
                      </a>
                    ) : (
                      <span className="text-3xl font-bold text-slate-300 group-hover:text-white transition-colors">
                        {sponsor.name}
                      </span>
                    )}
                  </div>
                  
                  {/* Corner Icon */}
                  <div className="absolute top-4 right-4 opacity-50">
                    <Trophy className="w-6 h-6 text-cyan-500" />
                  </div>
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
                    <a href={sponsor.url}>
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
                { name: "Your logo here", logo: null },
                { name: "Your logo here", logo: null },
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
                        <img src={sponsor.logo} alt={sponsor.name} className="max-h-24 w-auto object-contain" />
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
                     <img src={sponsor.logo} alt={sponsor.name} className="max-h-16 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
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
  return (
      <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8 bg-purple-900/10 border-t border-background/20">
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
                <a href="http://tiny.cc/catalyst-hack" target="_blank" rel="noopener noreferrer">
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
            Made with <Heart className="w-4 h-4 text-primary" /> by the Redshifted Team
          </p>
          <p className="mt-2">© {new Date().getFullYear()} Redshifted. All images are the respective property of their owners with permission.</p>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="bg-slate-950 min-h-screen selection:bg-cyan-500 selection:text-white font-sans">
      <Navbar />
      <Hero />
      <HighlightsSection />
      <FlightPaths />
      <AboutSection />
      <Sponsors />
      <LogisticsSection />
      <Footer />
    </div>
  );
}

export default App; 