import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import gsap from 'gsap';
import { X, Lock, ShieldCheck, AlertCircle } from 'lucide-react';

const PinEntryModal = () => {
  const { showPinModal, setShowPinModal, verifyPin } = useAuth();
  const navigate = useNavigate();
  const [pin, setPin] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState(false);
  const modalRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (showPinModal) {
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.3, display: 'flex' });
      gsap.fromTo(modalRef.current,
        { scale: 0.8, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: 'back.out(1.7)' }
      );
    } else {
      if (modalRef.current) gsap.to(modalRef.current, { scale: 0.8, opacity: 0, y: 30, duration: 0.3, ease: 'power3.in' });
      if (overlayRef.current) gsap.to(overlayRef.current, { opacity: 0, duration: 0.3, display: 'none' });
      setPin(['', '', '', '', '', '']);
      setError(false);
    }
  }, [showPinModal]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!showPinModal) return;

      if (e.key >= '0' && e.key <= '9') {
        handleKeyPress(e.key);
      } else if (e.key === 'Backspace') {
        handleDelete();
      } else if (e.key === 'Escape') {
        setShowPinModal(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showPinModal, pin]);

  const handleKeyPress = (num) => {
    setError(false);
    const currentPinStr = pin.join('');
    if (currentPinStr.length < 6) {
      const newPinStr = currentPinStr + num;
      const newPinArr = ['', '', '', '', '', ''];
      for (let i = 0; i < newPinStr.length; i++) {
        newPinArr[i] = newPinStr[i];
      }
      setPin(newPinArr);

      if (newPinStr.length === 6) {
        verifyPin(newPinStr).then(isValid => {
          if (!isValid) {
            setError(true);
            if (modalRef.current) gsap.to(modalRef.current, { x: 10, duration: 0.05, repeat: 5, yoyo: true, ease: 'none' });
            setTimeout(() => setPin(['', '', '', '', '', '']), 500);
          } else {
            navigate('/admin');
          }
        });
      }
    }
  };

  const handleDelete = () => {
    setError(false);
    const currentPinStr = pin.join('');
    if (currentPinStr.length > 0) {
      const newPinStr = currentPinStr.slice(0, -1);
      const newPinArr = ['', '', '', '', '', ''];
      for (let i = 0; i < newPinStr.length; i++) {
        newPinArr[i] = newPinStr[i];
      }
      setPin(newPinArr);
    }
  };

  const handleClear = () => {
    setPin(['', '', '', '', '', '']);
    setError(false);
  };

  if (!showPinModal) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[150] items-center justify-center bg-slate-900/40 backdrop-blur-md px-4"
      style={{ display: 'none', opacity: 0 }}
      onClick={() => setShowPinModal(false)}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-[340px] overflow-hidden rounded-none bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.2)] text-center border-t-4 border-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setShowPinModal(false)}
          className="absolute right-4 top-4 p-1 text-slate-300 hover:text-slate-600 transition-all"
        >
          <X size={20} />
        </button>

        <div className="mb-6">
          <div className="mx-auto w-12 h-12 bg-slate-50 flex items-center justify-center text-slate-900 mb-3 border border-slate-100">
            <Lock size={24} />
          </div>
          <h2 className="text-xl font-black text-slate-900 tracking-tight mb-1">Enter PIN</h2>
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest px-2">6-Digit Admin Access</p>
        </div>

        {/* PIN Display */}
        <div className="flex justify-center gap-1.5 mb-6">
          {pin.map((digit, index) => (
            <div
              key={index}
              className={`w-9 h-11 flex items-center justify-center text-xl font-black transition-all border-2 ${error
                  ? 'border-rose-500 bg-rose-50 text-rose-600'
                  : digit
                    ? 'border-slate-900 bg-white text-slate-900'
                    : 'border-slate-100 bg-slate-50 text-slate-200'
                }`}
            >
              {digit ? '•' : ''}
            </div>
          ))}
        </div>

        {/* Numeric Keypad */}
        <div className="grid grid-cols-3 gap-2 mb-6 mx-auto">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleKeyPress(num.toString())}
              className="h-12 bg-slate-50 text-lg font-black text-slate-700 hover:bg-slate-900 hover:text-white transition-all active:scale-95 border border-slate-100"
            >
              {num}
            </button>
          ))}
          <button
            onClick={handleClear}
            className="h-12 bg-slate-50 text-[10px] font-black text-slate-400 hover:bg-rose-50 hover:text-rose-600 transition-all uppercase tracking-tighter border border-slate-100"
          >
            Clear
          </button>
          <button
            onClick={() => handleKeyPress('0')}
            className="h-12 bg-slate-50 text-lg font-black text-slate-700 hover:bg-slate-900 hover:text-white transition-all active:scale-95 border border-slate-100"
          >
            0
          </button>
          <button
            onClick={handleDelete}
            className="h-12 bg-slate-50 text-[10px] font-black text-slate-400 hover:bg-slate-200 hover:text-slate-700 transition-all uppercase tracking-tighter border border-slate-100"
          >
            Del
          </button>
        </div>

        {error ? (
          <div className="flex items-center justify-center gap-2 text-rose-500 font-bold mb-4">
            <AlertCircle size={14} />
            <span className="text-[10px] uppercase tracking-widest">Incorrect PIN</span>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2 text-slate-300 mb-4 font-bold">
            <ShieldCheck size={14} />
            <span className="text-[9px] uppercase tracking-widest">Secure Link</span>
          </div>
        )}


      </div>
    </div>
  );
};

export default PinEntryModal;
