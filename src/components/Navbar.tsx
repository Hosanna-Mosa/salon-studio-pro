import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">
              <span className={isScrolled ? "text-accent" : "text-accent"}>Salon</span>
              <span className={isScrolled ? "text-white" : "text-white"}>Studio</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-white hover:text-accent transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-white hover:text-accent transition-colors duration-300"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("barbers")}
              className="text-white hover:text-accent transition-colors duration-300"
            >
              Barbers
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-white hover:text-accent transition-colors duration-300"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-accent transition-colors duration-300"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-accent hover:bg-accent/90 text-primary font-semibold"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-primary/95 backdrop-blur-sm pb-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-white hover:text-accent transition-colors duration-300 text-left px-4"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-white hover:text-accent transition-colors duration-300 text-left px-4"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("barbers")}
                className="text-white hover:text-accent transition-colors duration-300 text-left px-4"
              >
                Barbers
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-white hover:text-accent transition-colors duration-300 text-left px-4"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white hover:text-accent transition-colors duration-300 text-left px-4"
              >
                Contact
              </button>
              <div className="px-4">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold"
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
