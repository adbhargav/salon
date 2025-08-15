const Home = () => (
  <section className="w-full bg-gradient-to-r from-rose-50 via-white to-rose-100 py-0 md:py-8">
    <div className="relative w-full h-80 md:h-[500px] overflow-hidden rounded-b-3xl shadow-lg">
      <img
        src="/salon-hero.jpeg"
        alt="Salon Interior"
        className="object-cover w-full h-full"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/30 flex items-center">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
            Welcome to <span className="text-rose-300">Salon</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/90 font-medium mb-6 md:max-w-2xl drop-shadow">
            Where timeless elegance meets modern beauty. Experience curated hair, skin, and spa artistry in a luxurious atmosphere designed for your comfort and confidence.
          </p>
         <a
  href="#book"
  aria-label="Book an appointment"
  className="inline-block px-8 py-3 rounded-full bg-rose-600 text-white font-semibold text-base shadow-md hover:bg-rose-700 transition"
>
  Book Appointment
</a>
          
        </div>
      </div>
    </div>
  </section>
);

export default Home;