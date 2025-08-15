import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here, you can handle real submission (API call, etc.)
  };

  return (
    <section id="contact" className="w-full py-8 flex justify-center bg-gradient-to-br from-rose-50 via-white to-rose-100">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-xl p-8 md:p-12">
        <h2 className="text-3xl font-extrabold mb-6 text-rose-700 text-center">
          Book an Appointment
        </h2>
        {submitted ? (
          <div className="text-center text-rose-700 font-semibold text-lg">
            Thank you for booking!<br />We will contact you soon.
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 font-medium text-gray-700">Name</label>
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-200"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block mb-1 font-medium text-gray-700">Email</label>
                <input
                  required
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-200"
                  placeholder="you@email.com"
                />
              </div>
              <div className="flex-1">
                <label className="block mb-1 font-medium text-gray-700">Phone</label>
                <input
                  required
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-200"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">Service</label>
              <select
                required
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-rose-200"
              >
                <option value="">Select a service</option>
                <option>Hair Care & Styling</option>
                <option>Skin & Face Treatments</option>
                <option>Hair Removal</option>
                <option>Nail Care</option>
                <option>Makeup Services</option>
                <option>Body Care & Spa</option>
                <option>Grooming & Others</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">Preferred Date & Time</label>
              <input
                required
                name="date"
                type="datetime-local"
                value={form.date}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-200"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">Message (optional)</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-200"
                placeholder="Any specific request?"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-rose-700 text-white font-semibold rounded-lg shadow hover:bg-rose-800 transition"
            >
              Book Appointment
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;