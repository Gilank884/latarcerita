import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Globe, Laptop, Smartphone, Zap } from 'lucide-react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const pricingBrief = [
    {
        category: "Website",
        icon: <Globe className="text-sky-500" />,
        packages: [
            { name: "Paket Awal", price: "1 - 2,5 Juta" },
            { name: "Paket Berkembang", price: "3 - 5 Juta" },
            { name: "Paket Profesional", price: "6 - 10 Juta" }
        ],
        accent: "border-sky-100 bg-sky-50/20"
    },
    {
        category: "Sistem",
        icon: <Laptop className="text-indigo-500" />,
        packages: [
            { name: "Paket Core", price: "5 - 10 Juta" },
            { name: "Paket Scale", price: "10 - 25 Juta" },
            { name: "Paket Prime", price: "30 Juta+" }
        ],
        accent: "border-indigo-100 bg-indigo-50/20"
    },
    {
        category: "Mobile App",
        icon: <Smartphone className="text-amber-500" />,
        packages: [
            { name: "Paket Spark", price: "8 - 12 Juta" },
            { name: "Paket Boost", price: "15 - 30 Juta" },
            { name: "Paket Prime", price: "40 Juta+" }
        ],
        accent: "border-amber-100 bg-amber-50/20"
    }
];

const PricingPreview = () => {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".pricing-card",
                {
                    y: 60,
                    opacity: 0
                },
                {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    },
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out"
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-sky-500 uppercase tracking-[0.3em] mb-4">Investasi Bisnis</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none mb-6">Paket & <span className="text-slate-400">Harga Terbaik</span></h3>
                    <p className="text-slate-600 max-w-2xl mx-auto">Tersedia berbagai pilihan paket yang dapat disesuaikan dengan skala dan kebutuhan unik bisnis Anda.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {pricingBrief.map((item, i) => (
                        <div
                            key={i}
                            className={`pricing-card p-10 rounded-[3rem] bg-white border border-slate-200 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center group`}
                        >
                            <div className="w-16 h-16 rounded-3xl bg-slate-50 flex items-center justify-center mb-8 border border-slate-100 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h4 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tight italic">{item.category}</h4>

                            <div className="w-full space-y-4 mb-10">
                                {item.packages.map((pkg, idx) => (
                                    <div key={idx} className="flex justify-between items-center p-4 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-white transition-colors">
                                        <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">{pkg.name}</span>
                                        <span className="text-sm font-black text-sky-600">{pkg.price}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                to="/services"
                                className="mt-auto inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-sky-500 transition-colors"
                            >
                                Lihat Detail Fitur <ArrowRight size={14} />
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        to="/services"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-slate-900 text-white font-black rounded-full shadow-2xl shadow-indigo-200 hover:bg-sky-500 transition-all active:scale-95 group uppercase tracking-widest text-sm"
                    >
                        Lihat Seluruh Layanan & Harga <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PricingPreview;
