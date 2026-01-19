// export default function Hero() {
//   return (
//     <section className="relative bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 py-28 md:py-32 overflow-hidden">
//       {/* Optional subtle overlay pattern or texture for depth (uncomment if you like) */}
//       {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08)_0%,transparent_50%)]" /> */}

//       <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center z-10">
//         {/* Left: Text Content */}
//         <div className="text-center lg:text-left">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg">
//             Premium Electrical Spare Parts
//           </h1>
//           <p className="mt-6 text-xl md:text-2xl text-blue-100 font-light max-w-xl mx-auto lg:mx-0">
//             Reliable, high-quality components for industrial, commercial, and
//             residential projects. Trust in performance that lasts.
//           </p>

//           <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//             <button className="px-8 py-4 bg-white text-blue-900 font-semibold text-lg rounded-xl shadow-lg hover:bg-blue-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
//               Request a Quote
//             </button>
//             {/* Optional secondary button */}
//             <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold text-lg rounded-xl hover:bg-white/10 transition-all duration-300">
//               Explore Products
//             </button>
//           </div>
//         </div>

//         {/* Right: Image (visible on medium+ screens) */}
//         <div className="hidden lg:block relative">
//           <div className="absolute -inset-4 bg-gradient-to-tr from-blue-400/20 to-transparent rounded-3xl blur-2xl opacity-70" />
//           <img
//             src="/hero-electrical.jpg"
//             alt="Premium electrical spare parts and components"
//             className="relative w-full rounded-2xl shadow-2xl object-cover border border-white/20"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

import Aurora from "./Aurora";

export default function Hero() {
  return (
    <section className="relative w-full h-[600px] bg-slate-950 overflow-hidden flex items-center justify-center">
      {/* The Aurora Background Layer */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#0e15f9", "#ffffff", "#3201f2"]} // Your Blue/White/Deep Blue mix
          blend={0.5}
          amplitude={1.0}
          speed={0.5} // Slow it down for a "premium" feel. Fast is for gaming sites.
        />
      </div>

      {/* The Content Layer - Must be relative and have a higher Z-index */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-4">
          ELECTRO
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-400">
            PARTS
          </span>
        </h1>
        <p className="text-blue-100/80 text-lg md:text-xl max-w-2xl mx-auto font-medium tracking-wide">
          Powering the next generation of industrial infrastructure in Turkey.
        </p>

        <div className="mt-10 flex gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-slate-950 font-bold rounded-sm hover:bg-blue-500 hover:text-white transition-all uppercase tracking-widest text-xs">
            View Products
          </button>
        </div>
      </div>

      {/* Bottom Fade: Smooths the transition into the next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0f1a] to-transparent z-20" />
    </section>
  );
}
