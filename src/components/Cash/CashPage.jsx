import { useState, useEffect } from 'react';
import TransactionForm from './TransactionForm';
import TransactionTable from './TransactionTable';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../context/AuthContext';
import {
  Download,
  Bell,
  PlusCircle,
  Loader2
} from 'lucide-react';

const CashPage = ({ branchName }) => {
  const { selectedBranchId } = useAuth();
  const [transactions, setTransactions] = useState([]);
  const [editingTransaction, setEditingTransaction] = useState(null);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [filterType, setFilterType] = useState('Semua');
  const [searchTerm, setSearchTerm] = useState('');
  const [notification, setNotification] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch transactions from Supabase
  const fetchTransactions = async () => {
    if (!selectedBranchId) return;
    setLoading(true);
    const { data, error } = await supabase
      .from('transactions')
      .select('*')
      .eq('branch_id', selectedBranchId)
      .order('transaction_date', { ascending: false });

    if (data) {
      // Map database fields to UI fields
      const mappedData = data.map(t => ({
        id: t.id,
        date: t.transaction_date,
        type: t.transaction_type,
        amount: t.amount,
        description: t.note,
        category: t.category || 'Umum'
      }));
      setTransactions(mappedData);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTransactions();
  }, [selectedBranchId]);

  const handleSaveTransaction = async (data) => {
    const payload = {
      branch_id: selectedBranchId,
      transaction_type: data.type,
      amount: data.amount,
      note: data.description,
      transaction_date: data.date,
      category: data.category
    };

    if (editingTransaction) {
      const { error } = await supabase
        .from('transactions')
        .update(payload)
        .eq('id', data.id);

      if (!error) {
        showNotification('Transaksi berhasil diperbarui!', 'success');
        fetchTransactions();
      }
    } else {
      const { error } = await supabase
        .from('transactions')
        .insert([payload]);

      if (!error) {
        showNotification('Transaksi baru berhasil disimpan!', 'success');
        fetchTransactions();
      }
    }
    setEditingTransaction(null);
    setIsFormModalOpen(false);
  };

  const handleDeleteTransaction = async (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus transaksi ini?')) {
      const { error } = await supabase
        .from('transactions')
        .delete()
        .eq('id', id);

      if (!error) {
        showNotification('Transaksi berhasil dihapus.', 'info');
        fetchTransactions();
      }
    }
  };

  const handleEditTransaction = (transaction) => {
    setEditingTransaction(transaction);
    setIsFormModalOpen(true);
  };

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  // Calculations
  const initialBalance = transactions
    .filter(t => t.type === 'Modal')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalIncome = transactions
    .filter(t => t.type === 'Pendapatan')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalExpense = transactions
    .filter(t => t.type === 'Pengeluaran')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const finalBalance = totalIncome - totalExpense;

  // Filtered transactions
  const filteredTransactions = transactions.filter(t => {
    const matchesType = filterType === 'Semua' || t.type === filterType;
    const matchesSearch = t.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(number);
  };

  return (
    <div className="space-y-6 animate-fade-in pb-10">
      {/* Notification Toast */}
      {notification && (
        <div className={`fixed top-10 right-10 z-[200] flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl animate-slide-in-right ${notification.type === 'success' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-white'
          }`}>
          <Bell size={20} className="animate-bounce" />
          <span className="font-bold">{notification.message}</span>
        </div>
      )}

      {/* Integrated Finance Header Card */}
      <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-8">
          {/* Header Top: Title & Actions */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <h1 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                Cash <span className="text-rose-600">Flow</span>
                <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-lg border border-slate-100 uppercase tracking-widest">Analytics</span>
              </h1>
              <p className="text-slate-500 text-xs font-medium mt-1">
                Manage branch finance data for {branchName}.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setEditingTransaction(null);
                  setIsFormModalOpen(true);
                }}
                className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-xl shadow-lg shadow-slate-100 text-sm font-bold hover:bg-blue-600 transition-all active:scale-95"
              >
                <PlusCircle size={16} />
                Input Transaksi
              </button>
              <button className="p-2.5 bg-slate-50 rounded-xl text-slate-400 hover:text-slate-600 transition-all">
                <Download size={18} />
              </button>
            </div>
          </div>

          {/* Header Bottom: Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-slate-50/50 rounded-2xl border border-slate-100/50">
            {/* Saldo Awal */}
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Saldo Awal</p>
              <p className="text-lg font-black text-slate-700">{formatRupiah(initialBalance)}</p>
            </div>
            {/* Pendapatan */}
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pendapatan</p>
              <p className="text-lg font-black text-emerald-600">+{formatRupiah(totalIncome)}</p>
            </div>
            {/* Pengeluaran */}
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pengeluaran</p>
              <p className="text-lg font-black text-rose-600">-{formatRupiah(totalExpense)}</p>
            </div>
            {/* Saldo Akhir */}
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Saldo Akhir</p>
              <p className="text-xl font-black text-slate-900">{formatRupiah(finalBalance)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Transaction Form Modal */}
      {isFormModalOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-fade-in">
          <div className="w-full max-w-2xl transform transition-all animate-slide-up">
            <TransactionForm
              onSave={handleSaveTransaction}
              editData={editingTransaction}
              onCancelEdit={() => setIsFormModalOpen(false)}
            />
          </div>
        </div>
      )}

      {/* Transaction List */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-black text-slate-800 tracking-tight flex items-center gap-3">
            Transaction History
            <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-bold text-slate-400">
              {filteredTransactions.length} Items
            </span>
          </h3>
        </div>

        {loading ? (
          <div className="bg-white rounded-[32px] p-24 flex flex-col items-center justify-center border border-slate-100 shadow-sm">
            <Loader2 className="animate-spin text-rose-500 mb-4" size={32} />
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Fetching Financial Data...</p>
          </div>
        ) : (
          <TransactionTable
            transactions={filteredTransactions}
            onEdit={handleEditTransaction}
            onDelete={handleDeleteTransaction}
            filterType={filterType}
            setFilterType={setFilterType}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        )}
      </div>
    </div>
  );
};

export default CashPage;
