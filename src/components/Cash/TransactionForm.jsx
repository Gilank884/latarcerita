import { useState, useEffect } from 'react';
import { PlusCircle, Save, X } from 'lucide-react';

const TransactionForm = ({ onSave, editData, onCancelEdit }) => {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    type: 'Pendapatan',
    category: '',
    amount: '',
    description: ''
  });

  useEffect(() => {
    if (editData) {
      setFormData(editData);
    }
  }, [editData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'amount') {
      // Allow only numbers
      const val = value.replace(/\D/g, '');
      setFormData({ ...formData, [name]: val });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.category || !formData.amount || !formData.description) {
      alert('Semua field harus diisi!');
      return;
    }
    onSave({ ...formData, amount: parseInt(formData.amount), id: editData?.id || Date.now() });
    setFormData({
      date: new Date().toISOString().split('T')[0],
      type: 'Pendapatan',
      category: '',
      amount: '',
      description: ''
    });
  };

  const formatRupiah = (val) => {
    if (!val) return '';
    return new Intl.NumberFormat('id-ID').format(val);
  };

  return (
    <div className="bg-white p-8 rounded-none border border-slate-100 shadow-2xl animate-fade-in border-t-8 border-slate-900">
      <div className="flex items-center gap-3 mb-10">
        <div className="h-12 w-12 bg-slate-50 text-slate-900 flex items-center justify-center border border-slate-100">
          <PlusCircle size={28} />
        </div>
        <h3 className="text-3xl font-black text-slate-900 tracking-tight">
          {editData ? 'Edit Transaksi' : 'Input Transaksi'}
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tanggal */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Tanggal</label>
            <input 
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-6 py-5 rounded-none bg-slate-50 border-2 border-transparent focus:border-slate-900 focus:bg-white outline-none transition-all font-bold text-slate-800"
            />
          </div>

          {/* Jenis Transaksi */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Jenis Transaksi</label>
            <select 
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-6 py-5 rounded-none bg-slate-50 border-2 border-transparent focus:border-slate-900 focus:bg-white outline-none transition-all font-bold text-slate-800 appearance-none"
            >
              <option value="Pendapatan">Pendapatan</option>
              <option value="Pengeluaran">Pengeluaran</option>
              <option value="Modal">Modal</option>
            </select>
          </div>

          {/* Kategori */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Kategori</label>
            <input 
              type="text"
              name="category"
              placeholder="Contoh: Gaji, Listrik, Alat..."
              value={formData.category}
              onChange={handleChange}
              className="w-full px-6 py-5 rounded-none bg-slate-50 border-2 border-transparent focus:border-slate-900 focus:bg-white outline-none transition-all font-bold text-slate-800"
            />
          </div>

          {/* Nominal */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Nominal (Rp)</label>
            <div className="relative">
              <span className="absolute left-6 top-1/2 -translate-y-1/2 font-black text-slate-900">Rp</span>
              <input 
                type="text"
                name="amount"
                placeholder="0"
                value={formData.amount}
                onChange={handleChange}
                className="w-full pl-16 pr-6 py-5 rounded-none bg-slate-50 border-2 border-transparent focus:border-slate-900 focus:bg-white outline-none transition-all font-black text-slate-900"
              />
              {formData.amount && (
                <div className="absolute right-6 top-1/2 -translate-y-1/2 text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-1">
                   {formatRupiah(formData.amount)}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Deskripsi */}
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Deskripsi</label>
          <textarea 
            name="description"
            rows="2"
            placeholder="Keterangan transaksi..."
            value={formData.description}
            onChange={handleChange}
            className="w-full px-6 py-5 rounded-none bg-slate-50 border-2 border-transparent focus:border-slate-900 focus:bg-white outline-none transition-all font-bold text-slate-800 resize-none"
          ></textarea>
        </div>

        <div className="flex gap-4 pt-6">
          <button 
            type="submit"
            className="flex-1 flex items-center justify-center gap-3 bg-slate-900 text-white py-5 rounded-none font-black uppercase tracking-widest hover:bg-blue-600 transition-all active:scale-95 shadow-xl shadow-slate-100"
          >
            <Save size={20} />
            {editData ? 'Simpan Perubahan' : 'Simpan Transaksi'}
          </button>
          <button 
            type="button"
            onClick={onCancelEdit}
            className="flex items-center justify-center gap-3 bg-slate-100 text-slate-500 px-10 rounded-none font-black uppercase tracking-widest hover:bg-slate-200 transition-all active:scale-95"
          >
            <X size={20} />
            Batal
          </button>
        </div>
      </form>
    </div>
  );
};

export default TransactionForm;
