import { TrendingUp, TrendingDown, Wallet, Landmark } from 'lucide-react';

const SummaryCard = ({ initialBalance, income, expense, finalBalance }) => {
  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(number);
  };

  const cards = [
    { 
      label: 'Saldo Awal', 
      value: initialBalance, 
      icon: <Landmark size={20} />, 
      color: 'bg-slate-100 text-slate-600',
      gradient: 'from-slate-50 to-white'
    },
    { 
      label: 'Total Pendapatan', 
      value: income, 
      icon: <TrendingUp size={20} />, 
      color: 'bg-emerald-100 text-emerald-600',
      gradient: 'from-emerald-50 to-white'
    },
    { 
      label: 'Total Pengeluaran', 
      value: expense, 
      icon: <TrendingDown size={20} />, 
      color: 'bg-rose-100 text-rose-600',
      gradient: 'from-rose-50 to-white'
    },
    { 
      label: 'Saldo Akhir', 
      value: finalBalance, 
      icon: <Wallet size={20} />, 
      color: 'bg-blue-100 text-blue-600',
      gradient: 'from-blue-50 to-white'
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <div 
          key={index} 
          className={`relative overflow-hidden bg-gradient-to-br ${card.gradient} p-5 rounded-2xl border border-white shadow-sm transition-all hover:shadow-md`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className={`h-9 w-9 rounded-xl ${card.color} flex items-center justify-center shadow-sm`}>
              {card.icon}
            </div>
          </div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">{card.label}</p>
          <h3 className="text-lg font-black text-slate-900 tracking-tight">
            {formatRupiah(card.value)}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default SummaryCard;
