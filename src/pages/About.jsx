const About = () => (
  <section className="w-full py-8">
    <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg p-8 md:p-12">
      <img
        src="/salon-hero.jpeg"
        alt="About Salon"
        className="w-full md:w-1/3 h-64 md:h-80 object-cover rounded-xl mb-6 md:mb-0 md:mr-10 shadow"
        loading="lazy"
      />
      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-rose-700">
          About Our Salon
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          At Salon, we blend expertise, artistry, and a true passion for beauty to deliver exceptional results tailored to every client. Our highly skilled team, elegant interiors, and serene ambiance ensure a memorable experience that leaves you feeling refreshed and confident. Discover a new level of care and sophistication with us.
        </p>
      </div>
    </div>
  </section>
);

export default About;