import { Menu, X, Facebook, Instagram, Phone, Mail, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [networkDropdown, setNetworkDropdown] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="bg-green-700 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+1234567890" className="flex items-center gap-1 hover:text-green-200">
              <Phone size={14} />
              <span>+91 123 456 7890</span>
            </a>
            <a href="mailto:info@dairy.com" className="flex items-center gap-1 hover:text-green-200">
              <Mail size={14} />
              <span>info@dairy.com</span>
            </a>
          </div>
          <div className="flex gap-3">
            <a href="#" className="hover:text-green-200"><Facebook size={16} /></a>
            <a href="#" className="hover:text-green-200"><Instagram size={16} /></a>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-green-700">
            <span className="text-green-600">Pure</span>Dairy
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          <ul className="hidden md:flex gap-8 items-center">        
           
            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-green-600 font-medium">
                Dairy Products
                <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="#products" className="block px-4 py-2 hover:bg-green-50 hover:text-green-600">Milk Varieties</a>
                <a href="#products" className="block px-4 py-2 hover:bg-green-50 hover:text-green-600">Curd</a>
                 <a href="#products" className="block px-4 py-2 hover:bg-green-50 hover:text-green-600">Ghee</a>
                <a href="#products" className="block px-4 py-2 hover:bg-green-50 hover:text-green-600">Lassi</a>
              </div>
            </li>
            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-green-600 font-medium">
                Other Products
                <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="#" className="block px-4 py-2 hover:bg-green-50 hover:text-green-600">Sunflower Oil</a>
                <a href="#" className="block px-4 py-2 hover:bg-green-50 hover:text-green-600">Coconut Shell</a>
                <a href="#" className="block px-4 py-2 hover:bg-green-50 hover:text-green-600">Moringa</a>
              </div>
            </li>
             <li><a href="#about" className="hover:text-green-600 font-medium">About</a></li>
            <li><a href="#contact" className="hover:text-green-600 font-medium">Contact</a></li>
          </ul>
        </div>

        {isMenuOpen && (
          <ul className="md:hidden pt-4 pb-2 space-y-3">
            <li><a href="#home" className="block hover:text-green-600 font-medium">Home</a></li>
            <li><a href="#about" className="block hover:text-green-600 font-medium">About</a></li>
            <li>
              <button
                onClick={() => setProductsDropdown(!productsDropdown)}
                className="w-full text-left flex items-center justify-between hover:text-green-600 font-medium"
              >
                Products
                <ChevronDown size={16} className={productsDropdown ? 'rotate-180' : ''} />
              </button>
              {productsDropdown && (
                <ul className="pl-4 space-y-2 mt-2">
                  <li><a href="#products" className="block hover:text-green-600">Milk Varieties</a></li>
                  <li><a href="#products" className="block hover:text-green-600">Dairy Products</a></li>
                  <li><a href="#products" className="block hover:text-green-600">Ice Cream</a></li>
                </ul>
              )}
            </li>
            <li>
              <button
                onClick={() => setNetworkDropdown(!networkDropdown)}
                className="w-full text-left flex items-center justify-between hover:text-green-600 font-medium"
              >
                Network
                <ChevronDown size={16} className={networkDropdown ? 'rotate-180' : ''} />
              </button>
              {networkDropdown && (
                <ul className="pl-4 space-y-2 mt-2">
                  <li><a href="#" className="block hover:text-green-600">Distribution Centers</a></li>
                  <li><a href="#" className="block hover:text-green-600">Retail Partners</a></li>
                  <li><a href="#" className="block hover:text-green-600">Franchise</a></li>
                </ul>
              )}
            </li>
            <li><a href="#contact" className="block hover:text-green-600 font-medium">Contact</a></li>
          </ul>
        )}
      </nav>
    </header>
  );
}
