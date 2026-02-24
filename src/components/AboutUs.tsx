import communityImage from "../assets/community-team.jpg";

const AboutUsSection = () => {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary/5 to-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              About Redshifted
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Redshifted is a nonprofit organization dedicated to making STEM
                education accessible and exciting for all young people in Ottawa.
              </p>
              <p>
                We believe every student deserves the opportunity to explore,
                create, and innovate. Whether you're taking apart your first
                circuit or leading a team at Canada's first hardware hackathon,
                Redshifted is here to support your journey.
              </p>
              <p className="italic text-foreground font-medium">
                "Redshifted is more than just workshops and hackathons—it's a
                community where curiosity meets opportunity."
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src={communityImage}
              alt="Redshifted community"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground px-8 py-4 rounded-xl shadow-xl">
              <p className="text-2xl font-bold">Building Tomorrow's Innovators</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
