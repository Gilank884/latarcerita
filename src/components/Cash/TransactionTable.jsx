import { Edit2, Trash2, Search, Filter, ArrowUpRight, ArrowDownRight, Wallet } from 'lucide-react';
import { formatDate } from '../../lib/dateUtils';

const TransactionTable = ({ transactions, onEdit, onDelete, filterType, setFilterType, searchTerm, setSearchTerm }) => {
  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(number);
  };

  const getTypeStyle = (type) => {
    switch (type) {
      case 'Pendapatan': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'Pengeluaran': return 'bg-rose-50 text-rose-600 border-rose-100';
      case 'Modal': return 'bg-blue-50 text-blue-600 border-blue-100';
      default: return 'bg-slate-50 text-slate-600 border-slate-100';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Pendapatan': return <ArrowUpRight size={14} />;
      case 'Pengeluaran': return <ArrowDownRight size={14} />;
      case 'Modal': return <Wallet size={14} />;
      default: return null;
    }
  };

  return (
    <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden animate-fade-in">
      {/* Table Controls */}
      <div className="p-8 border-b border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-slate-50/30">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Cari deskripsi atau kategori..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-6 py-3.5 rounded-2xl bg-white border border-slate-200 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all font-bold text-slate-700"
          />
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex bg-white p-1 rounded-xl border border-slate-200">
            {['Semua', 'Pendapatan', 'Pengeluaran', 'Modal'].map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-4 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all ${
                  filterType === type 
                    ? 'bg-slate-900 text-white shadow-md' 
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Table Content */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50/50">
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 text-center w-16">No</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Tanggal</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Jenis</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Kategori</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Deskripsi</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Nominal</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {transactions.length === 0 ? (
              <tr>
                <td colSpan="6" className="px-8 py-20 text-center">
                  <div className="flex flex-col items-center justify-center text-slate-300">
                    <Filter size={48} className="mb-4 opacity-20" />
                    <p className="font-bold">Tidak ada data transaksi ditemukan.</p>
                  </div>
                </td>
              </tr>
            ) : (
            transactions.map((t, index) => (
                <tr key={t.id} className="hover:bg-slate-50/80 transition-colors group">
                  <td className="px-8 py-4 text-center">
                    <span className="text-[10px] font-black text-slate-300">{index + 1}</span>
                  </td>
                  <td className="px-8 py-4">
                    <span className="font-bold text-slate-600 text-xs">{formatDate(t.date)}</span>
                  </td>
                  <td className="px-8 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-black uppercase border ${getTypeStyle(t.type)}`}>
                      {getTypeIcon(t.type)}
                      {t.type}
                    </span>
                  </td>
                  <td className="px-8 py-4">
                    <span className="font-bold text-slate-800 text-sm">{t.category}</span>
                  </td>
                  <td className="px-8 py-4">
                    <p className="text-xs font-medium text-slate-500 max-w-xs truncate">{t.description}</p>
                  </td>
                  <td className="px-8 py-4">
                    <span className={`text-sm font-black ${t.type === 'Pengeluaran' ? 'text-rose-600' : 'text-slate-900'}`}>
                      {t.type === 'Pengeluaran' ? '- ' : '+ '}
                      {formatRupiah(t.amount)}
                    </span>
                  </td>
                  <td className="px-8 py-4">
                    <div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                        onClick={() => onEdit(t)}
                        className="p-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                      >
                        <Edit2 size={14} />
                      </button>
                      <button 
                        onClick={() => onDelete(t.id)}
                        className="p-1.5 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white transition-all shadow-sm"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;
