import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabase';
import CalendarView from '../components/CalendarView';
import CashPage from '../components/Cash/CashPage';
import EventsPage from '../components/Events/EventsPage';
import InventoryPage from '../components/Inventory/InventoryPage';
import { 
  Zap, 
  Calendar as CalendarIcon, 
  Package, 
  Wallet,
  TrendingUp,
  Users,
  Clock,
  ArrowRight,
  LayoutDashboard,
  DollarSign,
  PlusCircle,
  Loader2
} from 'lucide-react';

const AdminPage = () => {
  const { selectedBranch, selectedBranchId, activeTab, setActiveTab } = useAuth();
  const [stats, setStats] = useState({ totalEvents: 0, netProfit: 0, monthlyData: Array(12).fill(0) });
  const [loading, setLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchStats = async () => {
      if (!selectedBranchId) return;
      setLoading(true);
      
      // Fetch Total Events
      const { count: eventsCount } = await supabase
        .from('events')
        .select('*', { count: 'exact', head: true })
        .eq('branch_id', selectedBranchId);
      
      // Fetch Transactions for Net Profit and Chart
      const { data: transactions } = await supabase
        .from('transactions')
        .select('transaction_type, amount, transaction_date')
        .eq('branch_id', selectedBranchId);
      
      let profit = 0;
      let monthlyIncome = Array(12).fill(0);

      if (transactions) {
        const income = transactions.filter(t => t.transaction_type === 'Pendapatan').reduce((acc, curr) => acc + curr.amount, 0);
        const expense = transactions.filter(t => t.transaction_type === 'Pengeluaran').reduce((acc, curr) => acc + curr.amount, 0);
        profit = income - expense;

        // Group by month for chart
        transactions.forEach(t => {
          if (t.transaction_type === 'Pendapatan') {
            const date = new Date(t.transaction_date);
            const month = date.getMonth();
            monthlyIncome[month] += t.amount;
          }
        });
      }

      setStats({
        totalEvents: eventsCount || 0,
        netProfit: profit,
        monthlyData: monthlyIncome
      });
      setLoading(false);
    };

    if (activeTab === 'dashboard') fetchStats();
  }, [selectedBranchId, activeTab]);

  const renderDashboard = () => {
    const formatRupiah = (num) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(num);

    // Generate Chart Path
    const maxIncome = Math.max(...stats.monthlyData, 1000000); // Avoid division by zero
    const points = stats.monthlyData.map((val, i) => {
      const x = (i / 11) * 1000;
      const y = 80 - (val / maxIncome) * 60; // Scale to fit SVG height
      return { x, y };
    });

    if (points.length === 0) return null;

    let lineD = `M ${points[0].x},${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const xc = (points[i].x + points[i + 1].x) / 2;
      const yc = (points[i].y + points[i + 1].y) / 2;
      lineD += ` Q ${points[i].x},${points[i].y} ${xc},${yc}`;
    }
    lineD += ` L ${points[points.length - 1].x},${points[points.length - 1].y}`;

    const areaD = `${lineD} L 1000,100 L 0,100 Z`;

    return (
      <div className="space-y-6">
        {/* Top Stats - Minimalist style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
            <div className="relative z-10">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Total Events</p>
              <div className="flex items-end gap-3">
                <h3 className="text-4xl font-black text-slate-900 tracking-tight">
                  {loading ? '...' : stats.totalEvents}
                </h3>
                <span className="text-emerald-500 font-black text-xs mb-1">+0%</span>
              </div>
            </div>
            <div className="absolute top-1/2 -right-4 -translate-y-1/2 opacity-[0.03] transform rotate-12 group-hover:scale-110 transition-transform duration-500">
               <CalendarIcon size={120} />
            </div>
          </div>

          <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
            <div className="relative z-10">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Pendapatan Bersih</p>
              <div className="flex items-end gap-3">
                <h3 className="text-4xl font-black text-slate-900 tracking-tight">
                  {loading ? '...' : formatRupiah(stats.netProfit)}
                </h3>
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse mb-2"></div>
              </div>
            </div>
            <div className="absolute top-1/2 -right-4 -translate-y-1/2 opacity-[0.03] transform rotate-12 group-hover:scale-110 transition-transform duration-500">
               <DollarSign size={120} />
            </div>
          </div>
        </div>

        {/* Income Flow Chart */}
        <div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h4 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                Income Flow
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
              </h4>
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mt-1">Growth Overview</p>
            </div>
          </div>

          <div className="h-64 w-full relative">
            {/* Minimalist SVG Chart */}
            <svg className="w-full h-full" viewBox="0 0 1000 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartGradientMain" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Area */}
              <path 
                d={areaD} 
                fill="url(#chartGradientMain)" 
                className="transition-all duration-1000"
              />
              {/* Main Line */}
              <path 
                d={lineD} 
                fill="none" 
                stroke="#3b82f6" 
                strokeWidth="2.5" 
                strokeLinecap="round"
                className="drop-shadow-lg transition-all duration-1000"
              />
            </svg>
            
            {/* Simple Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-[0.03]">
              <div className="w-full border-t border-slate-900"></div>
              <div className="w-full border-t border-slate-900"></div>
              <div className="w-full border-t border-slate-900"></div>
            </div>

            {/* Months Legend */}
            <div className="absolute -bottom-6 left-0 right-0 flex justify-between px-2 text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
              <span>Oct</span>
              <span>Nov</span>
              <span>Dec</span>
            </div>
          </div>
        </div>

      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] pl-[320px] transition-all relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] -z-10 -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-[320px] w-[300px] h-[300px] bg-indigo-50/30 rounded-full blur-[100px] -z-10"></div>
      
      <div className="max-w-[1200px] mx-auto p-8">
        {/* Admin Header / Top Bar */}
        <div className="flex items-center justify-between mb-8 bg-white/70 backdrop-blur-xl p-4 rounded-2xl border border-white/50 shadow-sm">
          <div className="flex items-center gap-4">
             <div className="h-10 w-10 bg-slate-900 rounded-xl flex items-center justify-center text-white shadow-sm">
                <LayoutDashboard size={20} />
             </div>
             <div>
               <span className="text-lg font-black text-slate-800 tracking-tight">LatarCerita</span>
               <span className="ml-2 text-[10px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded-full border border-blue-100">PRO</span>
             </div>
          </div>
          <div className="flex items-center gap-5">
             <div className="flex items-center gap-2 pr-5 border-r border-slate-100">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Online</span>
             </div>
             <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-slate-100 border border-slate-200 overflow-hidden">
                  <img src="https://ui-avatars.com/api/?name=Admin&background=0D8ABC&color=fff" alt="Avatar" />
                </div>
                <span className="text-xs font-bold text-slate-700">Admin</span>
             </div>
          </div>
        </div>

        {/* Dynamic Content Based on Tab */}
        <div className="animate-fade-in">
          {activeTab === 'dashboard' && (
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-black text-slate-900 tracking-tight">
                    Welcome, <span className="text-blue-600">{selectedBranch || 'Branch'}</span>
                  </h1>
                  <p className="text-slate-500 text-sm font-medium mt-1">
                    Manage your creative stories and metrics.
                  </p>
                </div>
                <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">
                  <Clock size={16} className="text-blue-500" />
                  <span className="text-sm font-bold text-slate-700">
                    {currentTime.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                  </span>
                </div>
              </div>
              
              {renderDashboard()}
            </div>
          )}

          {activeTab === 'calendar' && (
            <CalendarView />
          )}

          {activeTab === 'events' && (
            <EventsPage />
          )}

          {activeTab === 'cash' && (
            <CashPage branchName={selectedBranch} />
          )}

          {activeTab === 'inventory' && (
            <InventoryPage />
          )}

          {activeTab !== 'dashboard' && activeTab !== 'calendar' && activeTab !== 'events' && activeTab !== 'cash' && activeTab !== 'inventory' && (
            <div className="flex flex-col items-center justify-center py-48 bg-white/50 backdrop-blur-sm rounded-[40px] border-2 border-dashed border-slate-200">
              <div className="h-24 w-24 bg-white shadow-xl rounded-3xl flex items-center justify-center text-slate-300 mb-6 transform rotate-3">
                 <LayoutDashboard size={48} />
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-2 uppercase tracking-tight">
                {activeTab} <span className="text-blue-600">Module</span>
              </h2>
              <p className="text-slate-500 font-medium">This module is currently under active development.</p>
              <button 
                onClick={() => setActiveTab('dashboard')}
                className="mt-8 px-8 py-3 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
              >
                Back to Dashboard
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
