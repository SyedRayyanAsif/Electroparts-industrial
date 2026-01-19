export default function Products() {
  const products = [
    {
      title: "Circuit Breakers",
      desc: "Industrial-grade protection with fast trip response and high breaking capacity",
      image:
        "https://res.cloudinary.com/allied-electronics-automation/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,h_457,q_auto,w_800/c_pad,h_457,w_800/70098024_left.jpg?pgw=1&_i=AB",
    },
    {
      title: "Switches & Sockets",
      desc: "Durable, IP-rated designs for safe and reliable control in any environment",
      image:
        "https://thumbs.dreamstime.com/b/electrical-control-panel-components-isolated-white-background-image-features-various-including-circuit-breakers-424306261.jpg",
    },
    {
      title: "Control Panels",
      desc: "Custom-assembled panels for automation, power distribution & monitoring",
      image:
        "https://media.istockphoto.com/id/1139588963/photo/electrical-breaker-inside-electric-panel-in-power-plant.jpg?s=612x612&w=0&k=20&c=7-BsbjHfCM7BAsBKnfZ5beIa5NcKJpWOVjdNtmjTrYQ=",
    },
    {
      title: "Cables & Wiring",
      desc: "High-performance cables with superior insulation and certification",
      image:
        "https://thumbs.dreamstime.com/b/circuit-breaker-contactor-starter-additional-contacts-thermal-relay-electrical-cabinet-electric-control-pumps-148137864.jpg",
    },
    {
      title: "Relays & Contactors",
      desc: "Precision switching solutions for heavy-duty industrial applications",
      image:
        "https://media.istockphoto.com/id/2153670641/photo/modular-contactor-phase-control-relay-and-intermediate-relays-in-electrical-cabinet.jpg?s=612x612&w=0&k=20&c=SQxOhgoAydQJikGw_cgkMpnjsiJhrjfmF8vNCZjvYWM=",
    },
    {
      title: "Industrial Accessories",
      desc: "Terminals, connectors, tools & mounting hardware for complete solutions",
      image:
        "https://www.shutterstock.com/image-photo/industrial-circuit-breaker-contactors-on-260nw-2658134577.jpg",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900">
              Our Premium Product Range{" "}
            </span>
          </h2>
          <p className="mt-5 text-lg text-gray-500 max-w-2xl mx-auto">
            High-quality, certified electrical components engineered for
            durability, safety, and performance in every project.
          </p>
        </div>

        {/* Masonry-style Grid (different heights + responsive) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {products.map((product, index) => (
            <div
              key={product.title}
              className={`group break-inside-avoid rounded-2xl overflow-hidden bg-white shadow-md border border-gray-100 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-2 ${
                index % 3 === 1 ? "lg:mt-12" : "" // Slight offset for masonry feel
              }`}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{product.desc}</p>
              </div>

              {/* Footer / CTA */}
              <div className="px-6 pb-6">
                <button className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Optional CTA at bottom */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-block px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-900 transition-all duration-300 transform hover:-translate-y-1"
          >
            Request Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
}
