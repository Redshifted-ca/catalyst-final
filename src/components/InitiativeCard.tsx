import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface InitiativeCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

const InitiativeCard = ({
  title,
  description,
  buttonText,
  buttonHref,
}: InitiativeCardProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-3xl font-bold">{title}</h3>
      <p className="text-lg text-white/90">{description}</p>
      <Button
        asChild
        className="bg-white text-primary hover:bg-white/90 font-semibold px-6 py-6 rounded-xl transition-all duration-300 hover:scale-105"
      >
        <a href={buttonHref} className="inline-flex items-center gap-2" target="_blank" rel="noopener noreferrer">
          {buttonText}
          <ArrowRight className="w-5 h-5" />
        </a>
      </Button>
    </div>
  );
};

export default InitiativeCard;
