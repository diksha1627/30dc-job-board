import { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-white text-lg font-semibold">Logo</a>
        </div>
        <div className="hidden md:flex">
          <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Home</a>
          <a href="#" className="text-gray-300 hover:text-white px-3 py-2">About</a>
          <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Services</a>
          <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div className={`md:hidden ${isOpen ? '' : 'hidden'}`}>
          <a href="#" className="block text-gray-300 hover:text-white px-3 py-2">Home</a>
          <a href="#" className="block text-gray-300 hover:text-white px-3 py-2">About</a>
          <a href="#" className="block text-gray-300 hover:text-white px-3 py-2">Services</a>
          <a href="#" className="block text-gray-300 hover:text-white px-3 py-2">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
