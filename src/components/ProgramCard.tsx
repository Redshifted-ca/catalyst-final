import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface ProgramCardProps {
  title: string;
  description: string;
  ageGroup: string;
  highlights: string[];
  image: string;
  imageAlt: string;
  buttons: Array<{
    text: string;
    link: string;
    variant?: "default" | "outline";
  }>;
  variant?: "primary" | "secondary";
}

const ProgramCard = ({
  title,
  description,
  ageGroup,
  highlights,
  image,
  imageAlt,
  buttons,
  variant = "primary",
}: ProgramCardProps) => {
  const isReversed = variant === "secondary";

  return (
    <div
      className={`flex flex-col ${
        isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-8 items-center bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300`}
    >
      <div className="lg:w-1/2 w-full p-4">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-80 lg:h-[28rem] object-cover rounded-xl shadow-md"
        />
      </div>
      <div className="lg:w-1/2 w-full p-8 lg:p-12">
        <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
          {ageGroup}
        </div>
        <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
          {title}
        </h3>
        <p className="text-lg text-muted-foreground mb-6">{description}</p>
        <ul className="space-y-3 mb-8">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span className="text-foreground">{highlight}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-4">
          {buttons.map((button, index) => (
            <Button
              key={index}
              asChild
              variant={button.variant || "default"}
              className={`font-semibold px-6 py-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg ${
                button.variant === "outline"
                  ? "border-2"
                  : "bg-primary hover:bg-primary/90 text-primary-foreground"
              }`}
            >
              <a href={button.link} className="inline-flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                {button.text}
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
