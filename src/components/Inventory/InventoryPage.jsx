import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../context/AuthContext';
import InventoryForm from './InventoryForm';
import { 
  Search, 
  Plus, 
  Package, 
  ChevronRight, 
  MoreVertical,
  CheckCircle2,
  AlertCircle,
  Clock,
  MapPin,
  Layers,
  Wrench,
  Loader2,
  Bell
} from 'lucide-react';

const InventoryPage = () => {
  const { selectedBranchId } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [inventoryItems, setInventoryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [notification, setNotification] = useState(null);

  const fetchInventory = async () => {
    if (!selectedBranchId) return;
    setLoading(true);
    const { data, error } = await supabase
      .from('inventory')
      .select('*')
      .eq('branch_id', selectedBranchId)
      .order('item_name', { ascending: true });
    
    if (data) setInventoryItems(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchInventory();
  }, [selectedBranchId]);

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleSaveItem = async (formData) => {
    const payload = {
      ...formData
    };

    if (editingItem) {
      const { error } = await supabase
        .from('inventory')
        .update(payload)
        .eq('id', editingItem.id);
      
      if (!error) {
        showNotification('Item updated successfully!', 'success');
        fetchInventory();
      }
    } else {
      const { error } = await supabase
        .from('inventory')
        .insert([payload]);
      
      if (!error) {
        showNotification('New item added to inventory!', 'success');
        fetchInventory();
      }
    }
    setIsFormModalOpen(false);
    setEditingItem(null);
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Available': return 'text-emerald-500 bg-emerald-50 border-emerald-100';
      case 'Repair': return 'text-rose-500 bg-rose-50 border-rose-100';
      default: return 'text-slate-400 bg-slate-50 border-slate-100';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Available': return <CheckCircle2 size={12} />;
      case 'Repair': return <Wrench size={12} />;
      default: return null;
    }
  };

  const totalStock = inventoryItems.reduce((acc, curr) => acc + curr.quantity, 0);
  const availableStock = inventoryItems.filter(i => i.status === 'Available').reduce((acc, curr) => acc + curr.quantity, 0);
  const repairStock = inventoryItems.filter(i => i.status === 'Repair').reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="space-y-6 animate-fade-in pb-10">
      {/* Notification Toast */}
      {notification && (
        <div className="fixed top-10 right-10 z-[200] flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl animate-slide-in-right bg-slate-900 text-white">
          <Bell size={20} className="animate-bounce text-emerald-400" />
          <span className="font-bold">{notification.message}</span>
        </div>
      )}

      {/* Integrated Inventory Header Card */}
      <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-8">
          {/* Header Top: Title & Actions */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <h1 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                Inventory <span className="text-emerald-600">Assets</span>
                <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-lg border border-slate-100 uppercase tracking-widest">Stock</span>
              </h1>
              <p className="text-slate-500 text-xs font-medium mt-1">
                Manage your equipment and branch assets.
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input 
                  type="text"
                  placeholder="Search assets..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2.5 rounded-xl border border-slate-100 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all text-xs font-bold w-48 lg:w-64"
                />
              </div>
              <button 
                onClick={() => {
                  setEditingItem(null);
                  setIsFormModalOpen(true);
                }}
                className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-emerald-600 transition-all active:scale-95 shadow-lg shadow-slate-100"
              >
                <Plus size={18} />
                Add Item
              </button>
            </div>
          </div>

          {/* Header Bottom: Quick Stats - Dynamic */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-slate-50/50 rounded-2xl border border-slate-100/50">
            {[
              { label: 'Total Stock', value: totalStock, icon: <Package size={14} />, color: 'text-slate-500' },
              { label: 'Available', value: availableStock, icon: <CheckCircle2 size={14} />, color: 'text-emerald-500' },
              { label: 'Need Repair', value: repairStock, icon: <Wrench size={14} />, color: 'text-rose-500' }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-3 rounded-xl border border-slate-100/50 shadow-sm flex items-center gap-3">
                <div className={`h-8 w-8 rounded-lg flex items-center justify-center ${stat.color} bg-slate-50`}>
                  {stat.icon}
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1">{stat.label}</p>
                  <p className="text-base font-black text-slate-900 leading-none">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inventory Form Modal */}
      {isFormModalOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-fade-in">
          <div className="w-full max-w-2xl transform transition-all animate-slide-up rounded-none overflow-hidden">
            <InventoryForm 
              onSave={handleSaveItem} 
              editData={editingItem}
              onCancelEdit={() => {
                setIsFormModalOpen(false);
                setEditingItem(null);
              }}
            />
          </div>
        </div>
      )}

      {/* Inventory List - Aligned Row Style */}
      <div className="space-y-2">
        <div className="bg-slate-50/50 rounded-xl p-3 flex items-center border border-transparent">
          <div className="w-10 text-center text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">No</div>
          <div className="flex-1 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 pl-14">Item Name</div>
          <div className="w-32 px-6 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 border-l border-slate-200/50 text-center">Quantity</div>
          <div className="w-40 px-6 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 border-l border-slate-200/50 text-center">Status</div>
          <div className="w-16 border-l border-slate-200/50"></div>
        </div>

        {loading ? (
          <div className="bg-white rounded-3xl p-20 flex flex-col items-center justify-center border border-slate-100">
             <Loader2 className="animate-spin text-emerald-500 mb-4" size={32} />
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Fetching Assets...</p>
          </div>
        ) : inventoryItems.length === 0 ? (
          <div className="bg-white rounded-3xl p-20 flex flex-col items-center justify-center border border-dashed border-slate-200">
             <Package size={48} className="text-slate-200 mb-4" />
             <p className="text-sm font-medium text-slate-400">No inventory assets found in this branch.</p>
          </div>
        ) : (
          inventoryItems.filter(i => i.item_name.toLowerCase().includes(searchTerm.toLowerCase())).map((item, index) => (
            <div 
              key={item.id} 
              className="bg-white rounded-2xl border border-slate-100 p-2.5 flex items-center group hover:shadow-md transition-all hover:border-emerald-100"
            >
              {/* No. */}
              <div className="w-10 flex-shrink-0 flex items-center justify-center border-r border-slate-50 mr-4">
                 <span className="text-[10px] font-black text-slate-200">{index + 1}</span>
              </div>

              {/* Column 1: Item Name */}
              <div className="flex items-center gap-4 flex-1 min-w-0 pr-6">
                <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-300 group-hover:text-emerald-500 transition-colors border border-slate-100/50">
                  <Layers size={20} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs font-black text-slate-800 truncate group-hover:text-emerald-600 transition-colors">
                    {item.item_name}
                  </h3>
                  <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Category: {item.category || 'Gear'}</p>
                </div>
              </div>

              {/* Column 2: Quantity */}
              <div className="flex items-center justify-center w-32 px-6 border-l border-slate-50">
                <span className="text-sm font-black text-slate-700">{item.quantity}</span>
                <span className="text-[10px] font-bold text-slate-300 ml-1.5 uppercase">Pcs</span>
              </div>

              {/* Column 3: Status */}
              <div className="flex items-center justify-center w-40 px-6 border-l border-slate-50">
                <span className={`w-full flex items-center justify-center gap-1.5 py-1 rounded-lg text-[8px] font-black uppercase border tracking-widest ${getStatusStyle(item.status)}`}>
                  {getStatusIcon(item.status)}
                  {item.status}
                </span>
              </div>

              {/* Column 5: Action */}
              <div className="flex items-center justify-end w-16 pl-6 border-l border-slate-50">
                <button 
                  onClick={() => {
                    setEditingItem(item);
                    setIsFormModalOpen(true);
                  }}
                  className="h-8 w-8 rounded-xl bg-slate-50 text-slate-300 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default InventoryPage;
