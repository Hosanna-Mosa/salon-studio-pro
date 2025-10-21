import { Instagram, Facebook, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-accent">Salon</span>Studio
            </h3>
            <p className="text-white/80">
              Professional barbering and styling services where style meets comfort.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
            <div className="space-y-2 text-white/80">
              <p>Monday - Saturday</p>
              <p className="text-accent">10:00 AM - 9:00 PM</p>
              <p>Sunday</p>
              <p className="text-accent">11:00 AM - 7:00 PM</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-white/80">
              <p>123 Style Street, Fashion District</p>
              <p>Mumbai, Maharashtra 400001</p>
              <p className="text-accent">+91 98765 43210</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © 2024 Salon Studio. All rights reserved.
          </p>

          <div className="flex space-x-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent transition-colors duration-300"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent transition-colors duration-300"
            >
              <Facebook size={24} />
            </a>
            <a
              href="tel:+919876543210"
              className="text-white hover:text-accent transition-colors duration-300"
            >
              <Phone size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
