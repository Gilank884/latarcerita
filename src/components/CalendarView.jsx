import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';
import { 
  ChevronLeft, 
  ChevronRight, 
  MoreHorizontal, 
  Plus,
  MapPin,
  Clock,
  User,
  Calendar as CalendarIcon,
  Loader2,
  Bell
} from 'lucide-react';
import EventForm from './Events/EventForm';

const CalendarView = () => {
  const { selectedBranchId } = useAuth();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState({});
  const [loading, setLoading] = useState(true);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [notification, setNotification] = useState(null);

  const fetchEvents = async () => {
    if (!selectedBranchId) return;
    setLoading(true);
    
    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).toISOString();
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).toISOString();

    const { data, error } = await supabase
      .from('events')
      .select('*')
      .eq('branch_id', selectedBranchId)
      .gte('event_date', startOfMonth)
      .lte('event_date', endOfMonth);
    
    if (data) {
      const grouped = data.reduce((acc, event) => {
        const day = new Date(event.event_date).getDate();
        if (!acc[day]) acc[day] = [];
        acc[day].push({
          title: event.title,
          type: event.event_type,
          color: event.event_type === 'Wedding' ? 'bg-rose-500' : event.event_type === 'Corporate' ? 'bg-blue-500' : 'bg-emerald-500'
        });
        return acc;
      }, {});
      setEvents(grouped);
    }
    setLoading(false);
  };

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  useEffect(() => {
    fetchEvents();
  }, [selectedBranchId, currentDate]);

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleSaveEvent = async (formData) => {
    const payload = {
      ...formData,
      branch_id: selectedBranchId
    };

    const { error } = await supabase
      .from('events')
      .insert([payload]);
    
    if (!error) {
      showNotification('New event created!', 'success');
      fetchEvents();
    }
    
    setIsFormModalOpen(false);
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const renderDays = () => {
    const calendarDays = [];
    
    // Previous month blanks
    for (let i = 0; i < firstDayOfMonth; i++) {
      calendarDays.push(<div key={`blank-${i}`} className="h-16 border-b border-r border-slate-100 bg-slate-50/10"></div>);
    }
    
    // Actual days
    for (let day = 1; day <= daysInMonth; day++) {
      const dayEvents = events[day] || [];
      const isToday = day === new Date().getDate() && currentDate.getMonth() === new Date().getMonth();

      calendarDays.push(
        <div key={day} className="h-16 border-b border-r border-slate-100 p-1.5 transition-all hover:bg-slate-50 group">
          <div className="flex justify-start mb-0.5">
            <span className={`text-[9px] font-black w-4 h-4 flex items-center justify-center rounded-full ${isToday ? 'bg-blue-600 text-white' : 'text-slate-300 group-hover:text-slate-500'}`}>
              {day}
            </span>
          </div>
          
          <div className="space-y-0.5">
            {dayEvents.map((event, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-1 group/item"
              >
                <div className={`w-0.5 h-2.5 rounded-full ${event.color} flex-shrink-0`}></div>
                <span className="text-[7px] font-black text-slate-500 truncate group-hover/item:text-blue-600 transition-colors">
                  {event.title.split(':')[0]}
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return calendarDays;
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden animate-fade-in shadow-sm w-full">
      {/* Integrated Calendar Header Card */}
      <div className="p-8 border-b border-slate-100 bg-white">
        {/* Header Top: Module Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
              Calendar <span className="text-blue-600">Schedule</span>
              <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-lg border border-slate-100 uppercase tracking-widest">Branch</span>
            </h1>
            <p className="text-slate-500 text-xs font-medium mt-1">
              Track and manage your branch schedule and event sessions.
            </p>
          </div>
          <button 
            onClick={() => setIsFormModalOpen(true)}
            className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all active:scale-95 shadow-lg shadow-slate-100"
          >
            <Plus size={18} />
            <span>Book Event</span>
          </button>
        </div>

        {/* Header Bottom: Navigation & Month */}
        <div className="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-100/50">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 bg-white rounded-xl flex items-center justify-center text-slate-900 shadow-sm border border-slate-100">
               <CalendarIcon size={20} />
            </div>
            <h2 className="text-xl font-black text-slate-900 tracking-tight">
              {months[currentDate.getMonth()]} <span className="text-blue-600">{currentDate.getFullYear()}</span>
            </h2>
          </div>
          
          <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-100/50 shadow-sm">
            <button 
              onClick={prevMonth}
              className="p-1.5 hover:bg-slate-50 rounded-lg transition-all text-slate-400 hover:text-blue-600"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={() => setCurrentDate(new Date())}
              className="px-4 text-[10px] font-black text-slate-500 hover:text-blue-600 uppercase tracking-widest transition-colors"
            >
              Today
            </button>
            <button 
              onClick={nextMonth}
              className="p-1.5 hover:bg-slate-50 rounded-lg transition-all text-slate-400 hover:text-blue-600"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Weekdays - Clean */}
      <div className="grid grid-cols-7 border-b border-slate-100">
        {days.map(day => (
          <div key={day} className="py-2 text-center bg-slate-50/50">
            <span className="text-[7px] font-black uppercase tracking-[0.3em] text-slate-400">{day}</span>
          </div>
        ))}
      </div>

      {/* Grid - Clean Line */}
      <div className="relative">
        {loading && (
          <div className="absolute inset-0 z-10 bg-white/60 backdrop-blur-[1px] flex items-center justify-center">
            <div className="flex flex-col items-center gap-2">
              <Loader2 className="animate-spin text-blue-600" size={32} />
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Syncing Schedule...</p>
            </div>
          </div>
        )}
        <div className={`grid grid-cols-7 transition-all duration-500 ${loading ? 'opacity-40 grayscale-[0.5]' : 'opacity-100'}`}>
          {renderDays()}
        </div>
      </div>

      {/* Minimalist Legend Footer */}
      <div className="px-6 py-2 bg-slate-50/30 flex items-center gap-6 justify-center">
        {['Wedding', 'Corporate', 'Personal'].map((type, i) => (
          <div key={type} className="flex items-center gap-1.5">
            <div className={`w-1 h-1 rounded-full ${i === 0 ? 'bg-rose-500' : i === 1 ? 'bg-blue-500' : 'bg-emerald-500'}`}></div>
            <span className="text-[7px] font-black text-slate-400 uppercase tracking-widest">{type}</span>
          </div>
        ))}
      </div>

      {/* Notification Toast */}
      {notification && (
        <div className="fixed top-10 right-10 z-[200] flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl animate-slide-in-right bg-slate-900 text-white">
          <Bell size={20} className="animate-bounce text-blue-400" />
          <span className="font-bold">{notification.message}</span>
        </div>
      )}

      {/* Event Form Modal */}
      {isFormModalOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-fade-in">
          <div className="w-full max-w-2xl transform transition-all animate-slide-up rounded-none overflow-hidden">
            <EventForm 
              onSave={handleSaveEvent} 
              editData={editingEvent}
              onCancelEdit={() => {
                setIsFormModalOpen(false);
                setEditingEvent(null);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarView;
