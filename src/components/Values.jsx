import { Target, Users, Lightbulb, Heart } from 'lucide-react';

const Values = () => {
    const values = [
        {
            icon: <Lightbulb size={24} />,
            title: "Kreativitas",
            desc: "Menghadirkan konsep photobooth yang unik dan segar untuk setiap tema acara Anda."
        },
        {
            icon: <Target size={24} />,
            title: "Kualitas",
            desc: "Memberikan hasil foto dan cetakan terbaik dengan standar peralatan profesional."
        },
        {
            icon: <Heart size={24} />,
            title: "Kebahagiaan",
            desc: "Fokus utama kami adalah menciptakan senyum dan tawa bagi setiap tamu yang hadir."
        },
        {
            icon: <Users size={24} />,
            title: "Kerja Tim",
            desc: "Crew yang kompak dan handal memastikan kelancaran operasional di lokasi acara."
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
