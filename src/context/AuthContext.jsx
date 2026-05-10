import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem('isLoggedIn') === 'true');
  const [selectedBranch, setSelectedBranch] = useState(() => localStorage.getItem('selectedBranch'));
  const [selectedBranchId, setSelectedBranchId] = useState(() => localStorage.getItem('selectedBranchId'));
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => localStorage.getItem('isLoggedIn') === 'true');
  const [showBranchModal, setShowBranchModal] = useState(false);
  const [showPinModal, setShowPinModal] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
    if (selectedBranch) localStorage.setItem('selectedBranch', selectedBranch);
    else localStorage.removeItem('selectedBranch');
    
    if (selectedBranchId) localStorage.setItem('selectedBranchId', selectedBranchId);
    else localStorage.removeItem('selectedBranchId');
  }, [isLoggedIn, selectedBranch, selectedBranchId]);

  const login = () => {
    setShowPinModal(true);
  };

  const verifyPin = async (pin) => {
    setLoading(true);
    try {
      // Check branches table for a matching PIN
      const { data, error } = await supabase
        .from('branches')
        .select('*')
        .eq('access_pin', pin)
        .maybeSingle();

      if (data && !error) {
        setShowPinModal(false);
        setIsLoggedIn(true);
        selectBranch(data);
        setLoading(false);
        return true;
      }
    } catch (err) {
      console.error('Login error:', err);
    }
    setLoading(false);
    return false;
  };

  const logout = () => {
    setIsLoggedIn(false);
    setSelectedBranch(null);
    setSelectedBranchId(null);
    setIsSidebarOpen(false);
    setActiveTab('dashboard');
    localStorage.clear();
  };

  const selectBranch = (branch) => {
    setSelectedBranch(branch.name);
    setSelectedBranchId(branch.id);
    setShowBranchModal(false);
    setIsSidebarOpen(true);
    setActiveTab('dashboard');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        selectedBranch,
        selectedBranchId,
        isSidebarOpen,
        showBranchModal,
        showPinModal,
        activeTab,
        loading,
        login,
        logout,
        selectBranch,
        verifyPin,
        setIsSidebarOpen,
        setShowBranchModal,
        setShowPinModal,
        toggleSidebar,
        setActiveTab,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
