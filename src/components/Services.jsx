import { Monitor, Smartphone, Globe } from 'lucide-react';
import { useLayoutEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const services = [
    {
        icon: <Globe size={32} />,
        title: "Website Company Profile",
        description: "Website modern, cepat, dan SEO-friendly untuk membangun kredibilitas brand Anda.",
        color: "bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white",
        glowColor: "bg-sky-500"
    },
    {
        icon: <Monitor size={32} />,
        title: "Web Application / Sistem",
        description: "Solusi sistem kustom dan aplikasi web untuk otomatisasi operasional bisnis Anda.",
        color: "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white",
        glowColor: "bg-indigo-500"
    },
    {
        icon: <Smartphone size={32} />,
        title: "Mobile Application",
        description: "Aplikasi Android & iOS yang intuitif untuk menjangkau pengguna langsung di tangan mereka.",
        color: "bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white",
        glowColor: "bg-amber-500"
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
                    stagger: 0.1,
                    ease: "power3.out"
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const addToRefs = (el) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    };

    return (
        <section ref={sectionRef} id="services" className="py-20 lg:py-32 bg-white relative">
            <div className="max-w-7xl mx-auto px-6 text-center mb-16">
                <h2 className="text-sm font-semibold text-sky-500 uppercase tracking-wider mb-2">Layanan Kami</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Solusi Komprehensif untuk Kebutuhan Digital</h3>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="service-card group p-8 rounded-2xl border border-slate-100 bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
                    >
                        {/* Hover Glow - Simplified logic */}
                        <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${service.glowColor}`}></div>

                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${service.color}`}>
                            {service.icon}
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
                            {service.title}
                        </h4>
                        <p className="text-slate-600 leading-relaxed text-sm group-hover:text-slate-700">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
