import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f1a] text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/TF HUB LOGO.png" 
                alt="TechFacilityHub Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="font-display font-bold text-xl">
                <span className="text-white">TechFacility</span>
                <span className="text-violet-400">Hub</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Smart Facility Management Software for Hospitals & Large Facilities. Digitize maintenance, housekeeping, assets, and workflows with one powerful platform.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-violet-500 hover:text-white transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-violet-500 hover:text-white transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-violet-500 hover:text-white transition-all duration-300">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Modules */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Modules</h4>
            <ul className="space-y-3">
              {[
                "Ticket Management",
                "Asset Management",
                "Housekeeping",
                "Laundry Management",
                "Vendor & AMC",
                "Compliance",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-violet-400 transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Pricing", href: "/#pricing" },
                { label: "Contact", href: "/contact" },
                { label: "Request Demo", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-violet-400 transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-violet-400 mt-0.5 shrink-0" />
                <a href="tel:+918142821645" className="text-gray-400 text-sm hover:text-violet-400 transition-colors">
                  +91 81428 21645
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-violet-400 mt-0.5 shrink-0" />
                <a href="mailto:techfacilityhub@gmail.com" className="text-gray-400 text-sm break-all hover:text-violet-400 transition-colors">
                  techfacilityhub@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-violet-400 mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">Hyderabad, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 TechFacilityHub. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-gray-500 hover:text-violet-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-violet-400 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
