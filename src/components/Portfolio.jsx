import { ExternalLink } from 'lucide-react';
import { useLayoutEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const projects = [
    {
        title: "E-Commerce Fashion Brand",
        category: "Website & Branding",
        image: "https://images.unsplash.com/photo-1481438549483-387851aaadd5?q=80&w=2940&auto=format&fit=crop",
        desc: "Redesign website e-commerce dengan fokus pada user experience dan konversi penjualan."
    },
    {
        title: "Sistem Manajemen Gudang",
        category: "Custom System (ERP)",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2940&auto=format&fit=crop",
        desc: "Aplikasi internal untuk tracking stok real-time dan manajemen logistik perusahaan distribusi."
    },
    {
        title: "Fintech Dashboard",
        category: "SaaS / Web App",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
        desc: "Dashboard analitik keuangan dengan visualisasi data interaktif dan reporting otomatis."
    }
];

const Portfolio = () => {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".portfolio-card",
                {
                    y: 60,
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
        <section ref={sectionRef} id="portfolio" className="py-20 lg:py-32 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-sm font-semibold text-sky-500 uppercase tracking-wider mb-2">Portofolio</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Karya & Studi Kasus</h3>
                    </div>
                    <a href="#" className="hidden md:inline-flex items-center text-slate-900 font-medium hover:text-sky-600 transition-colors mt-4 md:mt-0">
                        Lihat Semua Karya <ExternalLink size={16} className="ml-2" />
                    </a>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="portfolio-card group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-300 flex items-center justify-center">
                                    <span className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-white font-medium border border-white/30 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full">
                                        Lihat Detail
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <span className="text-xs font-semibold text-sky-500 uppercase tracking-wider">{project.category}</span>
                                <h4 className="text-xl font-bold text-slate-900 mt-2 mb-2 group-hover:text-sky-600 transition-colors">{project.title}</h4>
                                <p className="text-slate-600 text-sm line-clamp-2">{project.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <a href="#" className="inline-flex items-center text-slate-900 font-medium hover:text-sky-600 transition-colors">
                        Lihat Semua Karya <ExternalLink size={16} className="ml-2" />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Portfolio;
