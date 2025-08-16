const Header = () => (
  <header className="flex justify-between items-center px-3 py-3 bg-white shadow-sm sticky top-0 z-30">
    <div className="font-bold text-xl text-rose-700">Glamour</div>
    <nav className="flex items-center space-x-3">
      <a href="#home" className="text-gray-700 hover:text-rose-700 font-medium text-sm">Home</a>
      <a href="#about" className="text-gray-700 hover:text-rose-700 font-medium text-sm">About</a>
      <a href="#services" className="text-gray-700 hover:text-rose-700 font-medium text-sm">Services</a>
      <a href="#contact" className="ml-2 px-2.5 py-1.5 rounded bg-rose-700 text-white hover:bg-rose-800 font-semibold text-xs transition">Book</a>
    </nav>
  </header>
);

export default Header;
