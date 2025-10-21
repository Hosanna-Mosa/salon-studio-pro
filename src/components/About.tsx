const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to <span className="text-gradient-gold">Salon Studio</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Where style meets comfort. Our expert barbers specialize in modern and classic
            haircuts tailored to you. With years of experience and a passion for perfection,
            we ensure every client leaves looking and feeling their absolute best.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">8+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">5K+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">3</div>
              <div className="text-sm text-muted-foreground">Expert Barbers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
