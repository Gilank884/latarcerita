import { Target, Users, Lightbulb, Heart } from 'lucide-react';

const Values = () => {
    const values = [
        {
            icon: <Target size={24} />,
            title: "Visi Kami",
            desc: "Menjadi katalis inovasi digital yang terpercaya bagi UMKM dan perusahaan berkembang di Indonesia."
        },
        {
            icon: <Users size={24} />,
            title: "Misi Kami",
            desc: "Menghadirkan solusi teknologi yang user-friendly, estetis, dan fungsional untuk mendukung operasional bisnis."
        },
        {
            icon: <Lightbulb size={24} />,
            title: "Inovasi",
            desc: "Selalu mengeksplorasi teknologi terbaru untuk memberikan solusi yang paling relevan dan efektif."
        },
        {
            icon: <Heart size={24} />,
            title: "Integritas",
            desc: "Bekerja dengan transparansi dan kejujuran untuk membangun hubungan jangka panjang dengan klien."
        }
    ];

    return (
        <section className="py-24 bg-slate-50 relative">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-semibold text-sky-500 uppercase tracking-wider mb-2">Core Values</h2>
                    <h3 className="text-3xl font-bold text-slate-900">Fondasi Budaya Kerja Kami</h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                            <div className="w-14 h-14 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                                {item.icon}
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                            <p className="text-sm text-slate-600 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Values;
