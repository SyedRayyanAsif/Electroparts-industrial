import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Products from "../components/Products";
import WhyUs from "../components/WhyUs";
import Footer from "../components/Footer";

export default function ElectroParts() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Products />
      <WhyUs />
      <Footer />
    </div>
  );
}

// export default function ElectroParts() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white flex items-center justify-center">
//       <div className="text-center">
//         <h1 className="text-6xl font-extrabold mb-4 drop-shadow-lg">
//           ElectricStore is ALIVE! ⚡
//         </h1>
//         <p className="text-3xl font-semibold">
//           If you see this colorful gradient → Tailwind v4 works!
//         </p>
//       </div>
//     </div>
//   );
// }
