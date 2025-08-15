const Footer = () => (
  <footer className="bg-white border-t mt-16">
    <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-gray-700 text-sm">
      {/* Salon Info */}
      <div>
        <h3 className="text-lg font-bold text-rose-700 mb-3">Salon</h3>
        <p>
          Where timeless elegance meets modern beauty.<br />
          Experience curated hair, skin, and spa services in a luxurious atmosphere.
        </p>
      </div>
      {/* Quick Links */}
      <div>
        <h3 className="text-lg font-bold text-rose-700 mb-3">Quick Links</h3>
        <ul className="space-y-2">
          <li>
            <a href="#home" className="hover:text-rose-600 transition">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-rose-600 transition">About</a>
          </li>
          <li>
            <a href="#services" className="hover:text-rose-600 transition">Services</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-rose-600 transition">Book Appointment</a>
          </li>
        </ul>
      </div>
      {/* Contact */}
      <div>
        <h3 className="text-lg font-bold text-rose-700 mb-3">Contact</h3>
        <ul className="space-y-2">
          <li>123 Beauty Ave, City</li>
          <li>+1 (555) 123-4567</li>
          <li>salon@email.com</li>
        </ul>
      </div>
      {/* Hours & Social */}
      <div>
        <h3 className="text-lg font-bold text-rose-700 mb-3">Opening Hours</h3>
        <ul className="space-y-2 mb-4">
          <li>Mon–Sat: 9am – 8pm</li>
          <li>Sun: 10am – 5pm</li>
        </ul>
        <div className="flex space-x-3 mt-2">
          <a href="#" aria-label="Instagram" className="hover:text-rose-600 transition">
            <svg className="w-5 h-5 inline" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.5a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm6.25.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0z"/>
            </svg>
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-rose-600 transition">
            <svg className="w-5 h-5 inline" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12.073C22 6.505 17.523 2 12 2S2 6.505 2 12.073C2 17.092 5.656 21.128 10.438 21.954v-6.363h-3.13v-2.56h3.13V10.41c0-3.1 1.893-4.788 4.668-4.788c1.348 0 2.753.242 2.753.242v3.02h-1.551c-1.529 0-2.009.953-2.009 1.93v2.32h3.417l-.546 2.56h-2.871v6.363C18.344 21.128 22 17.092 22 12.073"/>
            </svg>
          </a>
          <a href="#" aria-label="X" className="hover:text-rose-600 transition">
            <svg className="w-5 h-5 inline" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.53 6.47a.75.75 0 0 1 1.06 1.06l-4.08 4.08l4.08 4.08a.75.75 0 1 1-1.06 1.06l-4.08-4.08l-4.08 4.08a.75.75 0 1 1-1.06-1.06l4.08-4.08l-4.08-4.08a.75.75 0 1 1 1.06-1.06l4.08 4.08l4.08-4.08z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div className="text-center text-gray-400 text-xs py-4 border-t">
      &copy; {new Date().getFullYear()} Salon. All rights reserved.
    </div>
  </footer>
);

export default Footer;