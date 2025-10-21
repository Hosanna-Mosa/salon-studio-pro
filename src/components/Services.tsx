import { Scissors, Sparkles, Palette, Baby, User, Wind } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Scissors,
    title: "Premium Haircut",
    description: "Modern and classic cuts tailored to your style",
    price: "₹399",
  },
  {
    icon: User,
    title: "Beard Trim & Styling",
    description: "Professional beard grooming and shaping",
    price: "₹199",
  },
  {
    icon: Palette,
    title: "Hair Coloring",
    description: "Expert hair coloring with premium products",
    price: "₹799",
  },
  {
    icon: Sparkles,
    title: "Facial & Spa",
    description: "Relaxing facial treatments and skin care",
    price: "₹599",
  },
  {
    icon: Baby,
    title: "Kids Haircut",
    description: "Gentle and fun haircuts for children",
    price: "₹299",
  },
  {
    icon: Wind,
    title: "Hair Treatment",
    description: "Deep conditioning and scalp treatments",
    price: "₹499",
  },
];

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience premium grooming services designed to elevate your style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover-lift border-border bg-card transition-all duration-300 hover:border-accent/50"
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-accent">{service.price}</span>
                  <Button
                    onClick={scrollToContact}
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-primary"
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
