import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../context/AuthContext';
import EventForm from './EventForm';
import { 
  Search, 
  Filter, 
  Plus, 
  Calendar, 
  MapPin, 
  Clock, 
  User, 
  ChevronRight,
  MoreVertical,
  CheckCircle2,
  Timer,
  X,
  Loader2,
  Bell
} from 'lucide-react';
import { formatDate } from '../../lib/dateUtils';

const EventsPage = () => {
  const { selectedBranchId } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [notification, setNotification] = useState(null);
  
  const fetchEvents = async () => {
    if (!selectedBranchId) return;
    setLoading(true);
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .eq('branch_id', selectedBranchId)
      .order('event_date', { ascending: false });
    
    if (data) setEvents(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchEvents();
  }, [selectedBranchId]);

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleSaveEvent = async (formData) => {
    const payload = {
      ...formData,
      branch_id: selectedBranchId
    };

    if (editingEvent) {
      const { error } = await supabase
        .from('events')
        .update(payload)
        .eq('id', editingEvent.id);
      
      if (!error) {
        showNotification('Event updated successfully!', 'success');
        fetchEvents();
      }
    } else {
      const { error } = await supabase
        .from('events')
        .insert([payload]);
      
      if (!error) {
        showNotification('New event created!', 'success');
        fetchEvents();
      }
    }
    setIsFormModalOpen(false);
    setEditingEvent(null);
  };

  const metrics = {
    submitted: events.filter(e => e.status === 'Submitted').length,
    approved: events.filter(e => e.status === 'Approved').length,
    rejected: events.filter(e => e.status === 'Rejected').length,
    success: events.filter(e => e.status === 'Success').length,
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Submitted': return 'text-slate-400 bg-slate-50 border-slate-100';
      case 'Approved': return 'text-blue-500 bg-blue-50 border-blue-100';
      case 'Rejected': return 'text-rose-500 bg-rose-50 border-rose-100';
      case 'Success': return 'text-emerald-500 bg-emerald-50 border-emerald-100';
      default: return 'text-slate-400 bg-slate-50 border-slate-100';
    }
  };

  return (
    <div className="space-y-6 animate-fade-in pb-10">
      {/* Notification Toast */}
      {notification && (
        <div className="fixed top-10 right-10 z-[200] flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl animate-slide-in-right bg-slate-900 text-white">
          <Bell size={20} className="animate-bounce text-blue-400" />
          <span className="font-bold">{notification.message}</span>
        </div>
      )}

      {/* Integrated Events Header Card */}
      <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-8">
          {/* Header Top: Title & Actions */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <h1 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                Events <span className="text-blue-600">Project</span>
                <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-lg border border-slate-100 uppercase tracking-widest">Management</span>
              </h1>
              <p className="text-slate-500 text-xs font-medium mt-1">
                Track and manage all your creative sessions.
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input 
                  type="text"
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2.5 rounded-xl border border-slate-100 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-xs font-bold w-48 lg:w-64"
                />
              </div>
              <button 
                onClick={() => {
                  setEditingEvent(null);
                  setIsFormModalOpen(true);
                }}
                className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-blue-600 transition-all active:scale-95 shadow-lg shadow-slate-100"
              >
                <Plus size={18} />
                New Event
              </button>
            </div>
          </div>

          {/* Header Bottom: Status Metrics - Dynamic */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-slate-50/50 rounded-2xl border border-slate-100/50">
            {[
              { label: 'Submitted', value: metrics.submitted, icon: <Timer size={14} />, color: 'text-slate-400', bg: 'bg-white' },
              { label: 'Approved', value: metrics.approved, icon: <CheckCircle2 size={14} />, color: 'text-blue-500', bg: 'bg-white' },
              { label: 'Rejected', value: metrics.rejected, icon: <X size={14} />, color: 'text-rose-500', bg: 'bg-white' },
              { label: 'Success', value: metrics.success, icon: <CheckCircle2 size={14} />, color: 'text-emerald-500', bg: 'bg-white' }
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

      {/* Events List - Dynamic Rendering */}
      <div className="space-y-2">
        {loading ? (
          <div className="bg-white rounded-[32px] p-24 flex flex-col items-center justify-center border border-slate-100 shadow-sm">
             <Loader2 className="animate-spin text-blue-600 mb-4" size={32} />
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Loading Projects...</p>
          </div>
        ) : events.length === 0 ? (
          <div className="bg-white rounded-[32px] p-24 flex flex-col items-center justify-center border border-dashed border-slate-200">
             <Calendar size={48} className="text-slate-200 mb-4" />
             <p className="text-sm font-medium text-slate-400">No events found for this branch.</p>
          </div>
        ) : (
          events.filter(e => e.title.toLowerCase().includes(searchTerm.toLowerCase()) || e.client_name.toLowerCase().includes(searchTerm.toLowerCase())).map((event, index) => (
            <div 
              key={event.id} 
              className="bg-white rounded-2xl border border-slate-100 p-2.5 flex items-center group hover:shadow-md transition-all hover:border-blue-100"
            >
              {/* No. */}
              <div className="w-10 flex-shrink-0 flex items-center justify-center border-r border-slate-50 mr-4">
                 <span className="text-[10px] font-black text-slate-200">{index + 1}</span>
              </div>

              {/* Column 1: Thumb & Main Info */}
              <div className="flex items-center gap-4 flex-1 min-w-0 pr-6">
                <div className="h-10 w-10 rounded-xl overflow-hidden flex-shrink-0 border border-slate-50 bg-slate-50">
                  <img 
                    src={event.image_url || `https://picsum.photos/seed/${event.id}/100/100`} 
                    alt={event.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[8px] font-black uppercase tracking-widest text-blue-500">{event.event_type}</span>
                    <span className="h-1 w-1 rounded-full bg-slate-200"></span>
                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">{event.client_name}</span>
                  </div>
                  <h3 className="text-xs font-black text-slate-800 truncate group-hover:text-blue-600 transition-colors">
                    {event.title}
                  </h3>
                </div>
              </div>

              {/* Column 2: Date & Time */}
              <div className="hidden md:flex flex-col justify-center w-36 px-6 border-l border-slate-50">
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500">
                  <Calendar size={12} className="text-slate-300 flex-shrink-0" />
                  <span>{formatDate(event.event_date)}</span>
                </div>
                <div className="flex items-center gap-2 text-[9px] font-bold text-slate-400">
                  <Clock size={12} className="text-slate-300 flex-shrink-0" />
                  <span>{event.event_time}</span>
                </div>
              </div>

              {/* Column 3: Location */}
              <div className="hidden lg:flex items-center gap-2 w-48 px-6 border-l border-slate-50">
                <MapPin size={12} className="text-slate-300 flex-shrink-0" />
                <span className="text-[10px] font-bold text-slate-500 truncate">{event.location}</span>
              </div>

              {/* Column 4: Status */}
              <div className="flex items-center justify-center w-32 px-6 border-l border-slate-50">
                <span className={`w-full text-center py-1 rounded-lg text-[8px] font-black uppercase border tracking-widest ${getStatusStyle(event.status)}`}>
                  {event.status}
                </span>
              </div>

              {/* Column 5: Action */}
              <div className="flex items-center justify-end w-16 pl-6 border-l border-slate-50">
                <button 
                  onClick={() => {
                    setEditingEvent(event);
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

export default EventsPage;
