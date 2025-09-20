import React, { useEffect, useState } from 'react';

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-amber-600 shadow-lg py-3' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h1 className={`text-2xl font-bold transition-colors duration-300 ${isScrolled ? 'text-white' : 'text-white'}`}>
                <a href="/">Afghanistan Tourism</a>
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="/" className={`font-bold transition-colors duration-300 ${isScrolled ? 'text-white hover:text-amber-100' : 'text-white hover:text-amber-200'}`}>Home</a>
              <a href="/tours" className={`transition-colors duration-300 ${isScrolled ? 'text-white hover:text-amber-100' : 'text-white hover:text-amber-200'}`}>Tours</a>
              <a href="/hotels" className={`transition-colors duration-300 ${isScrolled ? 'text-white hover:text-amber-100' : 'text-white hover:text-amber-200'}`}>Hotels</a>
              <a href="/transfers" className={`transition-colors duration-300 ${isScrolled ? 'text-white hover:text-amber-100' : 'text-white hover:text-amber-200'}`}>Transfers</a>
              <a href="/restaurants" className={`transition-colors duration-300 ${isScrolled ? 'text-white hover:text-amber-100' : 'text-white hover:text-amber-200'}`}>Restaurants</a>
              <a href="/about" className={`transition-colors duration-300 ${isScrolled ? 'text-white hover:text-amber-100' : 'text-white hover:text-amber-200'}`}>About</a>
              <a href="/contact" className={`transition-colors duration-300 ${isScrolled ? 'text-white hover:text-amber-100' : 'text-white hover:text-amber-200'}`}>Contact</a>
            </nav>
            
            {/* User Actions */}
            <div className="flex items-center space-x-4">
              <a href="/search" className={`transition-colors duration-300 ${isScrolled ? 'text-white hover:text-amber-100' : 'text-white hover:text-amber-200'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </a>
              <a href="/wishlist" className={`transition-colors duration-300 ${isScrolled ? 'text-white hover:text-amber-100' : 'text-white hover:text-amber-200'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </a>
              <a href="/cart" className={`transition-colors duration-300 relative ${isScrolled ? 'text-white hover:text-amber-100' : 'text-white hover:text-amber-200'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className={`absolute -top-2 -right-2 text-xs rounded-full h-5 w-5 flex items-center justify-center ${isScrolled ? 'bg-white text-amber-600' : 'bg-white text-amber-600'}`}>3</span>
              </a>
              <a href="/login" className={`px-4 py-2 rounded-lg transition-all duration-300 ${isScrolled ? 'bg-white text-amber-600 hover:bg-amber-100 font-medium' : 'bg-white text-amber-600 hover:bg-amber-100 font-medium'}`}>
                Sign In
              </a>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-amber-400">Afghanistan Tourism</h3>
              <p className="text-gray-300 mb-4">
                Discover the hidden treasures of Afghanistan with our expertly crafted tours and experiences.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Need Help?</h3>
              <ul className="space-y-2">
                <li><a href="tel:+93234567890" className="text-gray-300 hover:text-white transition flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2H5a2 2 0 01-2 2V5z" />
                  </svg>
                  +93 23 456 7890
                </a></li>
                <li><a href="mailto:info@afghanistantourism.com" className="text-gray-300 hover:text-white transition flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@afghanistantourism.com
                </a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">About</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-300 hover:text-white transition">About Us</a></li>
                <li><a href="/faq" className="text-gray-300 hover:text-white transition">FAQ</a></li>
                <li><a href="/login" className="text-gray-300 hover:text-white transition">Login</a></li>
                <li><a href="/register" className="text-gray-300 hover:text-white transition">Register</a></li>
                <li><a href="/terms" className="text-gray-300 hover:text-white transition">Terms & Conditions</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Discover</h3>
              <ul className="space-y-2">
                <li><a href="/blog" className="text-gray-300 hover:text-white transition">Community Blog</a></li>
                <li><a href="/guides" className="text-gray-300 hover:text-white transition">Tour Guides</a></li>
                <li><a href="/wishlist" className="text-gray-300 hover:text-white transition">Wishlist</a></li>
                <li><a href="/gallery" className="text-gray-300 hover:text-white transition">Gallery</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Afghanistan Tourism. All rights reserved.</p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <span className="text-gray-400 text-sm">English</span>
                <span className="text-gray-400 text-sm">AFN</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Scroll to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-amber-600 text-white p-3 rounded-full shadow-lg hover:bg-amber-700 transition z-50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Layout;