import { Instagram, Mail, Heart } from "lucide-react";
import redshiftedLogo from "../assets/redshifted-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col justify-center">
            <a href="#" className="inline-block mb-4 -ml-8">
              <img 
                src={redshiftedLogo} 
                alt="Redshifted logo" 
                className="h-20 w-auto"
              />
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
                <a href="#initiatives" className="text-background/80 hover:text-primary transition-colors">
                  Initiatives
                </a>
              </li>
              <li>
                <a href="#programs" className="text-background/80 hover:text-primary transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="#events" className="text-background/80 hover:text-primary transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#faq" className="text-background/80 hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="privacy-and-terms" className="text-background/80 hover:text-primary transition-colors">
                  Privacy & Terms
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
          <p className="mt-2">© {new Date().getFullYear()} Redshifted. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
