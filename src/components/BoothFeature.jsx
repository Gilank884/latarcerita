import { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import boothImage from '../assets/booth.jpg';
import hoverImage from '../assets/foto.png';

const features = [
    {
        title: "4K Camera",
        description: "Kamera 4K mirrorless kami akan menangkap gambar yang tajam dan beresolusi tinggi, sempurna untuk dicetak, dibagikan, dan diposting."
    },
    {
        title: "Beauty Dish",
        description: "Pengaturan pencahayaan profesional untuk memastikan setiap orang terlihat terbaik dalam setiap jepretan."
    },
    {
        title: "Touch Screens",
        description: "Antarmuka intuitif bagi tamu untuk melihat diri mereka sendiri dan memilih hasil tangkapan favorit mereka."
    },
    {
        title: "Printer",
        description: "Cetakan berkualitas lab berkecepatan tinggi tersedia dalam hitungan detik untuk dibawa pulang oleh tamu Anda."
    }
];

const BoothFeature = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const [isImgHovered, setIsImgHovered] = useState(false);

    return (
        <section className="bg-white py-12 lg:py-16 px-6 md:px-12 lg:px-24 overflow-hidden relative min-h-[85vh] flex items-center">
            {/* Mesh Gradient Background Accents (Latar Cerita Style) */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-sky-50/50 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-20 relative z-10 w-full">
                {/* Text Content */}
                <div className="lg:w-1/2 w-full lg:pl-16">
                    <h2 className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em] mb-2">Eksklusivitas Kami</h2>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-[1.2] tracking-tight pb-1" style={{ fontFamily: "'Caveat', cursive" }}>
                        Latar Cerita <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">Photobooth</span>
                    </h3>
                    <p className="text-slate-500 text-sm md:text-base mb-6 leading-relaxed font-medium">
                        Photobooth kayu buatan tangan kami mencakup kamera, pencahayaan, printer, dan layar sentuh dalam satu sistem elegan yang serasi dengan dekorasi acara Anda.
                    </p>

                    <div className="space-y-1">
                        {features.map((feature, index) => (
                            <div key={index} className="border-t border-slate-100">
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                    className="w-full py-4 flex items-center justify-between text-left focus:outline-none group transition-all"
                                >
                                    <span className={`text-base font-bold transition-colors ${openIndex === index ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-900'}`}>
                                        {feature.title}
                                    </span>
                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${openIndex === index ? 'bg-blue-600 text-white' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'}`}>
                                        {openIndex === index ? (
                                            <ChevronUp className="w-4 h-4" />
                                        ) : (
                                            <ChevronDown className="w-4 h-4" />
                                        )}
                                    </div>
                                </button>
                                <div 
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <p className="text-slate-500 text-sm leading-relaxed max-w-md font-medium">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                        <div className="border-t border-slate-100"></div>
                    </div>
                </div>

                {/* Image Content */}
                <div className="lg:w-1/2 w-full flex justify-center">
                    <div 
                        className="relative group max-w-[320px] w-full"
                        onMouseEnter={() => setIsImgHovered(true)}
                        onMouseLeave={() => setIsImgHovered(false)}
                    >
                        {/* Decorative background element */}
                        <div className="absolute -inset-4 bg-blue-500/10 rounded-[50px] blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                        
                        <div className="relative rounded-[30px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.08)] border-4 border-white aspect-[4/5]">
                            {/* Base Image */}
                            <img 
                                src={boothImage} 
                                alt="Latar Cerita Wooden Photobooth" 
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${isImgHovered ? 'opacity-0' : 'opacity-100'}`}
                            />
                            {/* Hover Image */}
                            <img 
                                src={hoverImage} 
                                alt="Latar Cerita Photo Result" 
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${isImgHovered ? 'opacity-100' : 'opacity-0'}`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BoothFeature;
