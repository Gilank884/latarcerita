import { useState, useEffect } from 'react';
import { Home, Camera, Image as ImageIcon, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', icon: <Home size={20} />, href: '/' },
    { name: 'Cheese', icon: <Camera size={20} />, href: '/photobooth' },
    { name: 'Gallery', icon: <ImageIcon size={20} />, href: '/portfolio' },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
      <nav
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => { setIsHovered(false); setHoveredItem(null); }}
        className={`relative flex items-center justify-between w-full max-w-5xl h-16 px-8 rounded-2xl transition-all duration-500 border border-white/40 ${isHovered && !hoveredItem
          ? 'bg-blue-900 border-blue-800 shadow-[0_25px_60px_rgba(30,58,138,0.3)]'
          : isScrolled
            ? 'bg-white/90 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)]'
            : 'bg-white/70 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)]'
          }`}
      >
        {/* Hover Message Overlay */}
        <div
          className={`absolute inset-0 flex items-center justify-center pr-12 transition-all duration-500 pointer-events-none ${isHovered && !hoveredItem ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
        >
          <span className="text-2xl font-bold text-white tracking-wide" style={{ fontFamily: "'Caveat', cursive" }}>
            Abadikan Momenmu Disini !
          </span>
        </div>

        {/* Logo and Menu Content (Fade out on hover) */}
        <div className={`flex items-center justify-between w-full transition-all duration-500 ${isHovered && !hoveredItem ? 'opacity-0 scale-98' : 'opacity-100 scale-100'}`}>
          {/* Logo on the left */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            onMouseEnter={() => setHoveredItem('logo')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <img src="/Logo.png" alt="Logo" className="h-10 w-auto object-contain" />
            <span className="text-3xl font-bold text-blue-900 tracking-tight" style={{ fontFamily: "'Caveat', cursive" }}>
              LatarCerita
            </span>
          </Link>

          {/* Menu in the middle */}
          <div className="flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`flex items-center gap-2 px-5 py-2 rounded-xl transition-all group ${isActive
                    ? 'bg-blue-900 text-white shadow-lg shadow-blue-200'
                    : 'text-slate-600 hover:bg-white/60 hover:text-blue-600'
                    }`}
                >
                  <span className={`${isActive ? 'scale-110' : 'group-hover:scale-110'} transition-transform`}>
                    {item.icon}
                  </span>
                  <span className="text-sm font-bold tracking-tight hidden md:block">
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Right side elements */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block w-[1px] h-6 bg-slate-200 mx-1"></div>
            <button
              className="p-2.5 rounded-xl text-slate-500 hover:bg-white/60 hover:text-blue-600 transition-all"
              onMouseEnter={() => setHoveredItem('theme')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Moon size={20} />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
