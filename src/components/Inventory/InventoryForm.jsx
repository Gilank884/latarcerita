import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../context/AuthContext';
import { PlusCircle, Save, X, Package, Layers, MapPin, Wrench, CheckCircle2, Home } from 'lucide-react';

const InventoryForm = ({ onSave, editData, onCancelEdit }) => {
  const { selectedBranchId } = useAuth();
  const [branches, setBranches] = useState([]);
  const [formData, setFormData] = useState({
    item_name: '',
    category: 'Equipment',
    quantity: 1,
    status: 'Available',
    branch_id: selectedBranchId
  });

  useEffect(() => {
    const fetchBranches = async () => {
      const { data } = await supabase.from('branches').select('id, name');
      if (data) setBranches(data);
    };
    fetchBranches();
  }, []);

  useEffect(() => {
    if (editData) {
      setFormData(editData);
    }
  }, [editData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'quantity') {
      const val = parseInt(value.replace(/\D/g, '')) || 0;
      setFormData({ ...formData, [name]: val });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.item_name || !formData.branch_id) {
      alert('Mohon lengkapi data wajib (Nama Item & Branch)!');
      return;
    }
    onSave(formData);
  };

  return (
    <div className="bg-white p-8 rounded-none border border-slate-100 shadow-2xl animate-fade-in border-t-8 border-slate-900">
      <div className="flex items-center gap-3 mb-8">
        <div className="h-12 w-12 bg-slate-50 text-slate-900 flex items-center justify-center border border-slate-100">
          <PlusCircle size={28} />
        </div>
        <h3 className="text-3xl font-black text-slate-900 tracking-tight">
          {editData ? 'Edit Asset' : 'Add New Asset'}
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Branch Selection - New */}
        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Assign to Branch</label>
          <div className="relative">
            <Home className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <select
              name="branch_id"
              value={formData.branch_id}
              onChange={handleChange}
              className="w-full pl-16 pr-6 py-5 rounded-none bg-slate-50 border-2 border-transparent focus:border-slate-900 focus:bg-white outline-none transition-all font-bold text-slate-800 appearance-none"
            >
              <option value="">Select Branch</option>
              {branches.map(b => (
                <option key={b.id} value={b.id}>{b.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Item Name */}
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Item Name</label>
            <div className="relative">
              <Layers className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                name="item_name"
                placeholder="e.g. Sony A7III, Tripod..."
                value={formData.item_name}
                onChange={handleChange}
                className="w-full pl-16 pr-6 py-5 rounded-none bg-slate-50 border-2 border-transparent focus:border-slate-900 focus:bg-white outline-none transition-all font-bold text-slate-800"
              />
            </div>
          </div>

          {/* Category */}
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-6 py-5 rounded-none bg-slate-50 border-2 border-transparent focus:border-slate-900 focus:bg-white outline-none transition-all font-bold text-slate-800 appearance-none"
            >
              <option value="Equipment">Equipment (Gear)</option>
              <option value="Consumables">Consumables (Paper, Ink)</option>
              <option value="Furniture">Furniture (Backdrop, Table)</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Quantity */}
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Quantity (Pcs)</label>
            <div className="relative">
              <Package className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                name="quantity"
                placeholder="0"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full pl-16 pr-6 py-5 rounded-none bg-slate-50 border-2 border-transparent focus:border-slate-900 focus:bg-white outline-none transition-all font-black text-slate-900"
              />
            </div>
          </div>

          {/* Status */}
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Current Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-6 py-5 rounded-none bg-slate-50 border-2 border-transparent focus:border-slate-900 focus:bg-white outline-none transition-all font-bold text-slate-800 appearance-none"
            >
              <option value="Available">Available (Ready)</option>
              <option value="Repair">Under Repair</option>
              <option value="Lost">Missing / Lost</option>
            </select>
          </div>
        </div>

        {/* Location */}


        <div className="flex gap-4 pt-6">
          <button
            type="submit"
            className="flex-1 flex items-center justify-center gap-3 bg-slate-900 text-white py-5 rounded-none font-black uppercase tracking-widest hover:bg-emerald-600 transition-all active:scale-95 shadow-xl shadow-slate-100"
          >
            <Save size={20} />
            {editData ? 'Save Changes' : 'Add Item'}
          </button>
          <button
            type="button"
            onClick={onCancelEdit}
            className="flex items-center justify-center gap-3 bg-slate-100 text-slate-500 px-10 rounded-none font-black uppercase tracking-widest hover:bg-slate-200 transition-all active:scale-95"
          >
            <X size={20} />
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default InventoryForm;
