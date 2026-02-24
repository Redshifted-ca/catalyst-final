import { Mail, Instagram, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
          Get In Touch
        </h2>
        <p className="text-xl text-muted-foreground mb-12">
          Have questions or want to get involved? We'd love to hear from you!
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center p-6 bg-card rounded-2xl shadow-md">
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email Us</h3>
            <a
              href="mailto:programs@redshifted.ca"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              programs@redshifted.ca
            </a>
          </div>

          <div className="flex flex-col items-center p-6 bg-card rounded-2xl shadow-md">
            <div className="bg-secondary/10 p-4 rounded-full mb-4">
              <Instagram className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <a
              href="https://instagram.com/redshifted.ottawa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-secondary transition-colors"
            >
              @redshifted.ottawa
            </a>
          </div>

          <div className="flex flex-col items-center p-6 bg-card rounded-2xl shadow-md">
            <div className="bg-accent/10 p-4 rounded-full mb-4">
              <MessageSquare className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-lg font-semibold mb-2">General Inquiries</h3>
            <a
              href="mailto:andy.han@redshifted.ca"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              andy.han@redshifted.ca
            </a>
          </div>
        </div>

        <div className="mt-12">
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 rounded-xl text-lg transition-all duration-300 hover:scale-105"
          >
            <a href="http://tiny.cc/ftat001" target="_blank" rel="noopener noreferrer">
              Get in the know!
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
