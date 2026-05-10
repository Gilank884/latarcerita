import { useState, useEffect } from 'react';
import { Home, Camera, User, LayoutDashboard } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const location = useLocation();
  const { isLoggedIn, login, toggleSidebar, selectedBranch } = useAuth();

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

            {isLoggedIn ? (
              <button
                onClick={toggleSidebar}
                onMouseEnter={() => setHoveredItem('user')}
                onMouseLeave={() => setHoveredItem(null)}
                className="flex items-center gap-3 px-4 py-2 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 transition-all border border-blue-100"
              >
                <div className="hidden lg:block text-right">
                  <p className="text-[10px] font-bold uppercase tracking-widest leading-none mb-0.5 opacity-60">Cabang</p>
                  <p className="text-sm font-bold leading-none">{selectedBranch || '...'}</p>
                </div>
                <div className="h-9 w-9 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-md">
                  <User size={18} />
                </div>
              </button>
            ) : (
              <button
                onClick={login}
                onMouseEnter={() => setHoveredItem('login')}
                onMouseLeave={() => setHoveredItem(null)}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-900 text-white hover:bg-blue-800 transition-all shadow-lg shadow-blue-200 font-bold text-sm"
              >
                <LayoutDashboard size={18} />
                <span>Login</span>
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};


export default Navbar;
