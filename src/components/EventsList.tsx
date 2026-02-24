import { Calendar, MapPin, ExternalLink, Sparkles, Star } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

interface Event {
  id: string;
  title: string;
  description?: string;
  date: string;
  location: string;
  link: string;
}

interface EventsListProps {
  events: Event[];
}

const EventsList = ({ events }: EventsListProps) => {
  const [floatingParticles, setFloatingParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    // Generate random floating particles
    const particles = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setFloatingParticles(particles);

    // Pulse animation
    const pulseInterval = setInterval(() => {
      setPulse(prev => !prev);
    }, 2000);

    return () => clearInterval(pulseInterval);
  }, []);

  return (
    <div>
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
        Redshifted Bulletin
      </h2>
      <div className="flex justify-center">
        <div className="grid gap-6 max-w-lg w-full lg:max-w-xl xl:max-w-2xl">
        {events.map((event) => {
          const isExecApp = event.title.toLowerCase().includes('exec');
          
          return (
          <div
            key={event.id}
            className={`bg-card border border-border rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
              isExecApp ? 'relative overflow-hidden' : ''
            }`}
          >
            {isExecApp && (
              <>
                {/* Animated gradient border */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-75"
                  style={{
                    background: 'linear-gradient(45deg, transparent 40%, rgba(var(--primary), 0.1) 50%, transparent 60%)',
                    backgroundSize: '200% 200%',
                    animation: 'gradient-shift 3s ease infinite',
                  }}
                />
                
                {/* Floating particles */}
                {floatingParticles.map((particle) => (
                  <div
                    key={particle.id}
                    className="absolute pointer-events-none"
                    style={{
                      left: `${particle.x}%`,
                      top: `${particle.y}%`,
                      animation: `float 3s ease-in-out infinite`,
                      animationDelay: `${particle.delay}s`,
                    }}
                  >
                    {particle.id % 2 === 0 ? (
                      <Sparkles className="w-4 h-4 text-primary/30" />
                    ) : (
                      <Star className="w-3 h-3 text-primary/40" />
                    )}
                  </div>
                ))}

                {/* Pulsing corner accent */}
                <div 
                  className={`absolute top-4 right-4 transition-all duration-500 ${
                    pulse ? 'scale-110 opacity-100' : 'scale-100 opacity-70'
                  }`}
                >
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
              </>
            )}
            
            <div className="relative z-10">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {event.title}
            </h3>
            <p className="text-muted-foreground mb-4">
              {event.description}
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Calendar className="w-5 h-5 text-primary" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>{event.location}</span>
              </div>
            </div>
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground w-full font-semibold py-6 rounded-xl transition-all duration-300"
            >
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2"
              >
                Register Now
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
            </div>
          </div>
          );
        })}
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default EventsList;
