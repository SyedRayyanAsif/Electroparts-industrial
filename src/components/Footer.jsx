export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-blue-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-4 lg:gap-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                E
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                ElectroParts
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Premium electrical spare parts and components you can trust — for
              industrial, commercial and residential projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3 text-gray-400">
              {["Home", "Products", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Contact Us
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>Email: info@electroparts.com</li>
              <li>Phone: +90 555 000 00 00</li>
              <li>Ankara, Turkey</li>
            </ul>
          </div>

          {/* Social (placeholder - add real links later) */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Follow Us
            </h4>
            <div className="flex gap-5">
              {["Twitter", "LinkedIn", "Instagram"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={platform}
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {/* You can replace with real SVG icons later */}
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-900/30 py-6 text-center text-sm text-gray-500 bg-blue-950/30">
        © {new Date().getFullYear()} ElectroParts. All rights reserved.
      </div>
    </footer>
  );
}
