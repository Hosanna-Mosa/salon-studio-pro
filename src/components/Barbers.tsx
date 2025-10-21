import { Card, CardContent } from "@/components/ui/card";
import barber1 from "@/assets/barber-1.jpg";
import barber2 from "@/assets/barber-2.jpg";
import barber3 from "@/assets/barber-3.jpg";

const barbers = [
  {
    name: "Raj Kumar",
    title: "Master Barber",
    experience: "8 Years Experience",
    image: barber1,
  },
  {
    name: "Amit Sharma",
    title: "Senior Stylist",
    experience: "6 Years Experience",
    image: barber2,
  },
  {
    name: "Vikram Singh",
    title: "Expert Barber",
    experience: "5 Years Experience",
    image: barber3,
  },
];

const Barbers = () => {
  return (
    <section id="barbers" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our <span className="text-gradient-gold">Expert Barbers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Skilled professionals dedicated to making you look your best
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {barbers.map((barber, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover-lift border-border bg-card transition-all duration-300 hover:border-accent/50"
            >
              <div className="relative overflow-hidden">
                <img
                  src={barber.image}
                  alt={barber.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="text-center py-6">
                <h3 className="text-2xl font-bold mb-1">{barber.name}</h3>
                <p className="text-accent font-semibold mb-2">{barber.title}</p>
                <p className="text-sm text-muted-foreground">{barber.experience}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Barbers;
