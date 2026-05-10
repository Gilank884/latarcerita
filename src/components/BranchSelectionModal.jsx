import { useEffect, useRef, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import gsap from 'gsap';
import { X, MapPin, ArrowRight, Loader2 } from 'lucide-react';

const BranchSelectionModal = () => {
  const { showBranchModal, setShowBranchModal, selectBranch } = useAuth();
  const [branches, setBranches] = useState([]);
  const [loading, setLoading] = useState(true);
  const modalRef = useRef(null);
  const overlayRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBranches = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('branches')
        .select('*')
        .order('name', { ascending: true });
      
      if (data) setBranches(data);
      setLoading(false);
    };

    if (showBranchModal) {
      fetchBranches();
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.3, display: 'flex' });
      gsap.fromTo(modalRef.current, 
        { scale: 0.9, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
      );
    } else {
      if (modalRef.current) gsap.to(modalRef.current, { scale: 0.9, opacity: 0, y: 20, duration: 0.3, ease: 'power3.in' });
      if (overlayRef.current) gsap.to(overlayRef.current, { opacity: 0, duration: 0.3, display: 'none' });
    }
  }, [showBranchModal]);

  const handleBranchSelect = (branch) => {
    selectBranch(branch);
    navigate('/admin');
  };

  if (!showBranchModal) return null;

  return (
    <div 
      ref={overlayRef}
      className="fixed inset-0 z-[100] items-center justify-center bg-black/40 backdrop-blur-sm px-4"
      style={{ display: 'none', opacity: 0 }}
      onClick={() => setShowBranchModal(false)}
    >
      <div 
        ref={modalRef}
        className="relative w-full max-w-lg overflow-hidden rounded-none bg-white p-8 shadow-2xl border-t-8 border-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={() => setShowBranchModal(false)}
          className="absolute right-6 top-6 p-2 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="mb-10">
          <h2 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">Pilih <span className="text-blue-600">Cabang</span></h2>
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Select branch to continue to dashboard</p>
        </div>

        <div className="space-y-3">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader2 className="animate-spin text-blue-600 mb-4" size={32} />
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Syncing Branches...</p>
            </div>
          ) : branches.length === 0 ? (
            <div className="text-center py-12 border-2 border-dashed border-slate-100">
              <p className="text-slate-400 text-sm font-medium">No branches found.</p>
            </div>
          ) : (
            branches.map((branch) => (
              <button
                key={branch.id}
                onClick={() => handleBranchSelect(branch)}
                className="group flex w-full items-center justify-between rounded-none border border-slate-100 bg-slate-50/30 p-5 text-left transition-all hover:border-slate-900 hover:bg-white hover:shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-none bg-slate-100 text-slate-900 transition-colors group-hover:bg-slate-900 group-hover:text-white border border-slate-200">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-black text-slate-800 uppercase tracking-tight group-hover:text-blue-600">{branch.name}</h3>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{branch.location || 'Branch Office'}</p>
                  </div>
                </div>
                <ArrowRight className="text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-slate-900" size={20} />
              </button>
            ))
          )}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">
            Latar Cerita Management System
          </p>
        </div>
      </div>
    </div>
  );
};

export default BranchSelectionModal;
