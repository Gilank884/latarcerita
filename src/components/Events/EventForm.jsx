import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { PlusCircle, Save, X, Calendar, Clock, MapPin, User, Image as ImageIcon, Loader2, Upload } from 'lucide-react';

const EventForm = ({ onSave, editData, onCancelEdit }) => {
  const [formData, setFormData] = useState({
    title: '',
    client_name: '',
    event_type: 'Digital',
    event_date: new Date().toISOString().split('T')[0],
    event_time: '10:00',
    location: '',
    status: 'Submitted',
    image_url: ''
  });
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (editData) {
      setFormData(editData);
    }
  }, [editData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setUploading(true);
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `event-images/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('events')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('events')
        .getPublicUrl(filePath);

      setFormData(prev => ({ ...prev, image_url: publicUrl }));
    } catch (error) {
      console.error('Upload error:', error);
      alert('Error uploading image: ' + error.message);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.client_name || !formData.location) {
      alert('Mohon lengkapi data wajib (Judul, Klien, Lokasi)!');
      return;
    }
    onSave(formData);
  };

  return (
    <div className="bg-white p-8 rounded-none border border-slate-100 shadow-2xl animate-fade-in max-h-[90vh] overflow-y-auto border-t-8 border-slate-900">
      <div className="flex items-center gap-3 mb-10">
        <div className="h-12 w-12 bg-slate-50 text-slate-900 flex items-center justify-center border border-slate-100">
          <PlusCircle size={28} />
        </div>
        <h3 className="text-3xl font-black text-slate-900 tracking-tight">
          {editData ? 'Edit Event' : 'Create New Event'}
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Title */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Event Title</label>
            <input
              type="text"
              name="title"
              placeholder="Event"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-6 py-5 rounded-none bg-slate-50 border-2 border-transparent focus:border-slate-900 focus:bg-white outline-none transition-all font-bold text-slate-800"
            />
          </div>

          {/* Client Name */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Client Name</label>
            <div className="relative">
              <User className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                name="client_name"
                placeholder="Name of client"
                value={formData.client_name}
                onChange={handleChange}
                className="w-full pl-16 pr-6 py-5 rounded-none bg-slate-50 border-2 border-transparent focus:border-slate-900 focus:bg-white outline-none transition-all font-bold text-slate-800"
              />
            </div>
          </div>

          {/* Event Type */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Event Type</label>
            <select
              name="event_type"
              value={formData.event_type}
              onChange={handleChange}
              className="w-full px-6 py-5 rounded-none bg-slate-50 border-2 border-transparent focus:border-slate-900 focus:bg-white outline-none transition-all font-bold text-slate-800 appearance-none"
            >
              <option value="Digital">Digital (Lite)</option>
              <option value="Standard">Standard (Cetak)</option>
              <option value="Premium">Premium (Custom)</option>
            </select>
          </div>

          {/* Status */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-6 py-5 rounded-none bg-slate-50 border-2 border-transparent focus:border-slate-900 focus:bg-white outline-none transition-all font-bold text-slate-800 appearance-none"
            >
              <option value="Submitted">Submitted</option>
              <option value="Approved">Approved</option>
              <option value="Success">Success</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>

          {/* Date */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Event Date</label>
            <div className="relative">
              <Calendar className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="date"
                name="event_date"
                value={formData.event_date}
                onChange={handleChange}
                className="w-full pl-16 pr-6 py-5 rounded-none bg-slate-50 border-2 border-transparent focus:border-slate-900 focus:bg-white outline-none transition-all font-bold text-slate-800"
              />
            </div>
          </div>

          {/* Time */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Event Time</label>
            <div className="relative">
              <Clock className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                name="event_time"
                placeholder="e.g. 19:00 - 21:00"
                value={formData.event_time}
                onChange={handleChange}
                className="w-full pl-16 pr-6 py-5 rounded-none bg-slate-50 border-2 border-transparent focus:border-slate-900 focus:bg-white outline-none transition-all font-bold text-slate-800"
              />
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Location</label>
          <div className="relative">
            <MapPin className="absolute left-6 top-5 text-slate-400" size={18} />
            <textarea
              name="location"
              rows="2"
              placeholder="Full venue address..."
              value={formData.location}
              onChange={handleChange}
              className="w-full pl-16 pr-6 py-5 rounded-none bg-slate-50 border-2 border-transparent focus:border-slate-900 focus:bg-white outline-none transition-all font-bold text-slate-800 resize-none"
            ></textarea>
          </div>
        </div>

        {/* Image Upload */}
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Event Showcase Image</label>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Preview */}
            <div className="w-full md:w-48 h-48 bg-slate-50 border-2 border-dashed border-slate-200 flex items-center justify-center overflow-hidden">
              {formData.image_url ? (
                <img src={formData.image_url} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <div className="text-center p-4">
                  <ImageIcon size={32} className="mx-auto text-slate-300 mb-2" />
                  <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">No Image selected</p>
                </div>
              )}
            </div>

            {/* Upload Button */}
            <div className="flex-1">
              <label className={`relative flex flex-col items-center justify-center w-full h-48 border-2 border-dashed transition-all cursor-pointer ${uploading ? 'bg-slate-100 border-slate-200' : 'bg-slate-50 border-slate-200 hover:border-slate-900 hover:bg-white'}`}>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={uploading}
                />
                {uploading ? (
                  <div className="flex flex-col items-center gap-2">
                    <Loader2 className="animate-spin text-slate-900" size={24} />
                    <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Uploading to bucket...</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-2">
                    <Upload size={24} className="text-slate-400" />
                    <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Click to upload photo</p>
                    <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">JPG, PNG or WEBP (Max 5MB)</p>
                  </div>
                )}
              </label>
              {formData.image_url && (
                <p className="mt-2 text-[9px] font-bold text-emerald-600 flex items-center gap-1 uppercase tracking-widest">
                  <Save size={10} /> Image uploaded successfully
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-4 pt-6">
          <button
            type="submit"
            className="flex-1 flex items-center justify-center gap-3 bg-slate-900 text-white py-5 rounded-none font-black uppercase tracking-widest hover:bg-blue-600 transition-all active:scale-95 shadow-xl shadow-slate-100"
          >
            <Save size={20} />
            {editData ? 'Save Changes' : 'Create Event'}
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

export default EventForm;
