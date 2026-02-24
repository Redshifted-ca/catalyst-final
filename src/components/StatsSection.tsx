import { Users, Lightbulb, Calendar, Award } from "lucide-react";
import ElectricBorder from "./ElectricBorder"; // Adjust path as needed

const StatsSection = () => {
  const stats = [
    {
      icon: Award,
      value: "1st",
      label: "Hardware Hackathon for Highschoolers in Canada",
      color: "text-primary",
      borderColor: "#5227FF",
    },
    {
      icon: Users,
      value: "30+",
      label: "Students Introduced to the World of Hardware.",
      color: "text-primary",
      borderColor: "#FF27B5",
    },
    {
      icon: Calendar,
      value: "4+",
      label: "Non-profit Workshops Hosted Around the City",
      color: "text-secondary",
      borderColor: "#27FFFF",
    },
    {
      icon: Lightbulb,
      value: "70+",
      label: "Projects Built by Students led by Students",
      color: "text-accent",
      borderColor: "#FFD027",
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">
          Our Impact
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <ElectricBorder
                key={index}
                color={stat.borderColor}
                speed={1.5}
                chaos={1.2}
                thickness={2}
                className="h-full"
              >
                <div className="flex flex-col items-center text-center p-6 bg-card rounded-2xl h-full transition-all duration-300 hover:-translate-y-2">
                  <div className={`${stat.color} mb-4`}>
                    <Icon className="w-12 h-12" strokeWidth={1.5} />
                  </div>
                  <div className="text-4xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              </ElectricBorder>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;