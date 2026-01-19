import React from "react";
import {
  ShieldCheck,
  Zap,
  Truck,
  Users,
  BadgePercent,
  Wrench,
  ArrowRight,
} from "lucide-react";

export default function WhyUs() {
  const reasons = [
    {
      title: "Certified Quality",
      desc: "Full IEC, CE, and ISO compliance for high-spec projects.",
      icon: ShieldCheck,
    },
    {
      title: "100% Reliability",
      desc: "Components stress-tested for 24/7 industrial uptime.",
      icon: Zap,
    },
    {
      title: "Ankara Logistics",
      desc: "Strategic hub location ensuring <24hr local dispatch.",
      icon: Truck,
    },
    {
      title: "Expert Support",
      desc: "15+ years of electrical engineering field experience.",
      icon: Wrench,
    },
    {
      title: "Market Pricing",
      desc: "Direct-from-factory rates for Turkish contractors.",
      icon: BadgePercent,
    },
    {
      title: "Scalable Supply",
      desc: "Reliable partner for 500+ industrial enterprises.",
      icon: Users,
    },
  ];

  return (
    <section className="relative py-24 bg-[#ffffff] text-white overflow-hidden">
      {/* Structural Accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Section 1: The Authority Column */}
          <div className="lg:w-2/5">
            <div className="inline-block px-3 py-1 border border-blue-500/30 bg-blue-600 rounded-sm mb-6">
              <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">
                The ElectroParts Standard
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black tracking-tighter mb-8 leading-[0.9]">
              ENGINEERING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800">
                RELIABILITY.
              </span>
            </h2>
            <p className="text-black text-shadow-2xs text-lg leading-relaxed max-w-md mb-12">
              We eliminate technical bottlenecks in your supply chain with
              certified hardware and local expertise.
            </p>

            {/* Social Proof Metric */}
            <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg backdrop-blur-md">
              <div className="text-4xl font-black text-white">500+</div>
              <div className="text-sm text-white font-medium uppercase tracking-widest leading-tight">
                Active Industrial <br /> Partners in Turkey
              </div>
            </div>
          </div>

          {/* Section 2: The Technical Grid */}
          <div
            className="lg:w-3/5 grid sm:grid-cols-2 gap-px bg-white
           rounded-sm overflow-hidden shadow-2xl shadow-blue-900/20"
          >
            {reasons.map((reason, idx) => (
              <div
                key={idx}
                className="group bg-[#01184a] p-10 hover:bg-blue-800 transition-all duration-300"
              >
                <div className="mb-6 p-3 w-fit rounded-lg bg-white/10 text-blue-500 group-hover:bg-blue-800 group-hover:text-white transition-all duration-300">
                  <reason.icon size={28} strokeWidth={1.5} />
                </div>
                <h4 className="text-lg font-bold mb-3 tracking-tight">
                  {reason.title}
                </h4>
                <p className="text-white text-sm leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between p-8 border bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl">
          <p className="text-white font-medium mb-6 md:mb-0">
            Need a bulk technical specification quote?
          </p>
          <button className="flex items-center gap-3 px-8 py-4 bg-white text-black hover:bg-blue-600 hover:text-white font-bold transition-all duration-300 group rounded-xl">
            REQUEST ESTIMATE
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
