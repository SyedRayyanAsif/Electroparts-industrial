export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            E
          </div>
          <span className="text-xl font-bold text-gray-900 tracking-tight">
            ElectroParts
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center justify-between gap-10">
          {["Home", "Products", "About", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 font-medium hover:text-blue-600 transition-colors relative group"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button (you can expand this later with state) */}
        <button className="md:hidden text-gray-700 hover:text-blue-600 transition">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
