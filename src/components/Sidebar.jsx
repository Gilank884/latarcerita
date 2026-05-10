import { useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { 
  X, 
  Calendar, 
  Package, 
  Wallet, 
  Zap, 
  LogOut,
  ChevronRight,
  LayoutDashboard
} from 'lucide-react';

const menuItems = [
  { id: 'dashboard', name: 'Dashboard', icon: <LayoutDashboard size={22} />, color: 'bg-blue-100 text-blue-600' },
  { id: 'events', name: 'Events', icon: <Zap size={22} />, color: 'bg-amber-100 text-amber-600' },
  { id: 'calendar', name: 'Calendar', icon: <Calendar size={22} />, color: 'bg-indigo-100 text-indigo-600' },
  { id: 'inventory', name: 'Inventory', icon: <Package size={22} />, color: 'bg-emerald-100 text-emerald-600' },
  { id: 'cash', name: 'Cash', icon: <Wallet size={22} />, color: 'bg-rose-100 text-rose-600' },
];

const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen, selectedBranch, logout, activeTab, setActiveTab } = useAuth();
  const sidebarRef = useRef(null);
  const overlayRef = useRef(null);
  const contentRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  
  const isPersistent = location.pathname.startsWith('/admin');

  useEffect(() => {
    if (isPersistent) return;

    if (isSidebarOpen) {
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.3, display: 'block' });
      gsap.to(sidebarRef.current, { x: 0, duration: 0.5, ease: 'power3.out' });
      gsap.fromTo(contentRef.current.children, 
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: 'power2.out', delay: 0.2 }
      );
    } else {
      gsap.to(sidebarRef.current, { x: '-100%', duration: 0.4, ease: 'power3.in' });
      gsap.to(overlayRef.current, { opacity: 0, duration: 0.3, display: 'none' });
    }
  }, [isSidebarOpen, isPersistent]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    if (!isPersistent) setIsSidebarOpen(false);
  };

  const renderContent = (isFull = true) => (
    <div className="flex h-full flex-col p-6 bg-slate-50/50">
      {/* Branding Section - Refined */}
      <div className="mb-12 px-2">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-slate-200">
            <LayoutDashboard size={20} />
          </div>
          <div>
            <h2 className="text-sm font-black text-slate-900 uppercase tracking-tighter leading-none">LatarCerita</h2>
            <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mt-1">Management Portal</p>
          </div>
        </div>
        
        <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
          <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Active Branch</p>
          <div className="flex items-center justify-between">
            <span className="text-sm font-black text-slate-800 truncate">{selectedBranch || 'Main Branch'}</span>
            <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-sm shadow-emerald-100"></div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav ref={isFull ? contentRef : null} className="flex-1 space-y-1.5 px-2">
        {menuItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              className={`group relative flex w-full items-center gap-4 rounded-xl px-4 py-3.5 transition-all overflow-hidden ${
                isActive 
                  ? 'bg-white text-blue-600 shadow-sm border border-slate-100' 
                  : 'text-slate-500 hover:bg-slate-100/50 hover:text-slate-900'
              }`}
            >
              {/* Active Indicator Bar */}
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-600 rounded-r-full"></div>
              )}
              
              <div className={`flex h-9 w-9 items-center justify-center rounded-xl transition-all ${
                isActive ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-400 group-hover:bg-white group-hover:shadow-sm'
              }`}>
                {item.icon}
              </div>
              <span className={`text-[13px] font-black uppercase tracking-widest ${isActive ? 'text-blue-600' : 'group-hover:text-slate-900'}`}>
                {item.name}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Footer - User Profile Card */}
      <div className="mt-auto px-2 pt-6 border-t border-slate-200/60">
        <div className="bg-slate-900 rounded-[24px] p-4 text-white relative overflow-hidden group">
          <div className="flex items-center gap-3 relative z-10">
            <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/10 overflow-hidden">
              <img src="https://ui-avatars.com/api/?name=Admin&background=random" alt="Admin" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-black truncate uppercase tracking-widest">Admin</p>
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Master Control</p>
            </div>
            <button 
              onClick={handleLogout}
              className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-rose-500 transition-all"
            >
              <LogOut size={16} />
            </button>
          </div>
          {/* Decorative background circle */}
          <div className="absolute -bottom-4 -right-4 h-20 w-20 bg-blue-600/20 rounded-full blur-2xl group-hover:bg-blue-600/40 transition-all"></div>
        </div>
      </div>
    </div>
  );

  if (isPersistent) {
    return (
      <div className="fixed left-0 top-0 z-[120] h-full w-[300px] bg-white border-r border-slate-100">
        {renderContent(false)}
      </div>
    );
  }

  return (
    <>
      <div 
        ref={overlayRef}
        className="fixed inset-0 z-[110] bg-black/20 backdrop-blur-[2px]"
        style={{ display: 'none', opacity: 0 }}
        onClick={() => setIsSidebarOpen(false)}
      />

      <div 
        ref={sidebarRef}
        className="fixed left-0 top-0 z-[120] h-full w-full max-w-[320px] bg-white shadow-[20px_0_50px_rgba(0,0,0,0.1)] transition-transform"
        style={{ transform: 'translateX(-100%)' }}
      >
        {renderContent(true)}
      </div>
    </>
  );
};

export default Sidebar;
