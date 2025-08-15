const serviceImages = [
  "https://tse3.mm.bing.net/th/id/OIP.VWRYBcguP8BbMfA50zzp3wHaE6?pid=Api&P=0&h=180", // Hair Care & Styling
  "https://tse1.mm.bing.net/th/id/OIP.vhTqx5RNEGV8GCYlZJSlvAHaDV?pid=Api&P=0&h=180", // Skin & Face Treatments
  "https://tse4.mm.bing.net/th/id/OIP.3Ip1dIx1R6jBilVDJvZMOwHaFS?pid=Api&P=0&h=180", // Hair Removal
  "https://tse2.mm.bing.net/th/id/OIP.FEkz38m9MirdxoxzLVCwbgHaGN?pid=Api&P=0&h=180", // Nail Care
  "https://tse3.mm.bing.net/th/id/OIP.fJFBJuIw_nBaLLR5sT-VxgHaES?pid=Api&P=0&h=180", // Makeup Services
  "https://tse2.mm.bing.net/th/id/OIP.PBV8IucLeqtFf1CVeQ_-uQHaFc?pid=Api&P=0&h=180", // Body Care & Spa
  "https://tse3.mm.bing.net/th/id/OIP.9obmjkN6GBHsP2f81jWx-AHaE8?pid=Api&P=0&h=180", // Grooming & Others
];

const services = [
  {
    category: "Hair Care & Styling",
    items: [
      "Haircuts",
      "Hair styling",
      "Hair coloring",
      "Hair treatments",
      "Extensions & wigs",
      "Scalp treatments",
      "Bridal styling"
    ]
  },
  {
    category: "Skin & Face Treatments",
    items: [
      "Facials",
      "Clean-ups",
      "Exfoliation",
      "Chemical peels",
      "Microdermabrasion",
      "Dermaplaning",
      "Skin tightening"
    ]
  },
  {
    category: "Hair Removal",
    items: [
      "Waxing",
      "Threading",
      "Laser hair removal",
      "Sugaring"
    ]
  },
  {
    category: "Nail Care",
    items: [
      "Manicure & Pedicure",
      "Nail art",
      "Gel/Acrylic nails",
      "Paraffin treatment"
    ]
  },
  {
    category: "Makeup Services",
    items: [
      "Bridal makeup",
      "Event makeup",
      "HD/Airbrush makeup",
      "Eye makeup"
    ]
  },
  {
    category: "Body Care & Spa",
    items: [
      "Massage",
      "Body scrubs & wraps",
      "Detox treatments"
    ]
  },
  {
    category: "Grooming & Others",
    items: [
      "Eyebrow shaping",
      "Eyelash extensions",
      "Beard grooming",
      "Hair spa packages",
      "Beauty consultation"
    ]
  }
];

const Services = () => (
  <section className="w-full py-8">
    <div className="max-w-6xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-rose-700 text-center">Our Services</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <div
            key={service.category}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
          >
            <img
              src={serviceImages[idx]}
              alt={service.category}
              className="w-full object-cover aspect-video"
              loading="lazy"
            />
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-lg font-semibold mb-2 text-rose-600">{service.category}</h3>
              <ul className="list-disc ml-5 text-gray-700 space-y-0.5 text-sm">
                {service.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;