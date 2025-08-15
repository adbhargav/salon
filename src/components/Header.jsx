const Header = () => (
  <header className="flex justify-between items-center px-8 py-5 bg-white shadow">
    <div className="font-bold text-2xl text-rose-700">SalonLogo</div>
    <nav className="flex items-center space-x-8">
      <a href="#home" className="text-gray-700 hover:text-rose-700 font-medium">Home</a>
      <a href="#about" className="text-gray-700 hover:text-rose-700 font-medium">About</a>
      <a href="#services" className="text-gray-700 hover:text-rose-700 font-medium">Services</a>
      <a href="#contact" className="ml-4 px-4 py-2 rounded bg-rose-700 text-white hover:bg-rose-800 font-semibold transition">Book Appointment</a>
    </nav>
  </header>
);

export default Header;