import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-green-500">Pure</span>Dairy
            </h3>
            <p className="text-gray-400 mb-4">
              Delivering fresh and pure dairy products to your doorstep with love and care.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-green-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-green-600 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-green-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-green-500 transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-green-500 transition-colors">Products</a></li>
              <li><a href="#contact" className="hover:text-green-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-500 transition-colors">Milk Varieties</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Ghee & Butter</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Paneer & Cheese</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Sweets</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex gap-2">
                <MapPin size={20} className="flex-shrink-0 text-green-500" />
                <span className="text-sm">123 Dairy Lane, Green Valley, City</span>
              </li>
              <li className="flex gap-2">
                <Phone size={20} className="flex-shrink-0 text-green-500" />
                <span className="text-sm">+91 123 456 7890</span>
              </li>
              <li className="flex gap-2">
                <Mail size={20} className="flex-shrink-0 text-green-500" />
                <span className="text-sm">info@puredairy.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 PureDairy. All rights reserved. Made with love for fresh dairy.</p>
        </div>
      </div>
    </footer>
  );
}
