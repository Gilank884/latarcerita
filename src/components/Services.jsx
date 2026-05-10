import { Camera, Sparkles, Layout, Download } from 'lucide-react';
import { useLayoutEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const services = [
    {
        icon: <Camera size={32} />,
        title: "Sesi Foto Interaktif",
        description: "Nikmati pengalaman berfoto dengan hitung mundur 3 detik yang membuat setiap momen lebih spontan dan seru.",
        color: "bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white",
        glowColor: "bg-sky-500"
    },
    {
        icon: <Sparkles size={32} />,
        title: "Filter Hitam Putih Estetik",
        description: "Sentuhan klasik dengan filter grayscale berkualitas tinggi yang dioptimalkan untuk hasil foto yang elegan dan timeless.",
        color: "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white",
        glowColor: "bg-indigo-500"
    },
    {
        icon: <Layout size={32} />,
        title: "Frame Eksklusif & Kustom",
        description: "Berbagai pilihan bingkai foto unik yang dapat disesuaikan sepenuhnya dengan tema dan nuansa acara spesial Anda.",
        color: "bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white",
        glowColor: "bg-amber-500"
    },
    {
        icon: <Download size={32} />,
        title: "Akses & Download Instan",
        description: "Unduh hasil foto Anda secara langsung ke perangkat dalam hitungan detik untuk dibagikan ke media sosial.",
        color: "bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white",
        glowColor: "bg-rose-500"
    },
];

const Services = () => {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".service-card",
                {
                    y: 50,
                    opacity: 0
                },
                {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                        toggleActions: "play none none none"
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out"
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="services" className="py-24 lg:py-40 bg-slate-50 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-50/50 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-6 text-center mb-24 relative z-10">
                <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Layanan Kami</h2>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
                    Fitur Unggulan <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Photobooth LatarCerita</span>
                </h3>
            </div>

            <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative z-10">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="service-card group bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 relative overflow-hidden"
                    >
                        {/* Decorative Gradient Background on Hover */}
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 ${service.glowColor}`}></div>
                        
                        <div className="flex flex-col h-full">
                            <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6 ${service.color}`}>
                                {service.icon}
                            </div>
                            
                            <h4 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                                {service.title}
                            </h4>
                            
                            <p className="text-slate-500 leading-relaxed text-lg font-medium group-hover:text-slate-600 transition-colors duration-300">
                                {service.description}
                            </p>
                            
                            <div className="mt-8 flex items-center gap-2 text-blue-600 font-bold opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
                                <span className="text-sm uppercase tracking-widest">Detail Fitur</span>
                                <div className="w-8 h-[2px] bg-blue-600"></div>
                            </div>
                        </div>

                        {/* Corner Accent */}
                        <div className={`absolute -right-4 -bottom-4 w-24 h-24 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${service.glowColor}`}></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
