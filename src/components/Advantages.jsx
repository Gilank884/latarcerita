import { Zap, Camera, Printer, Palette, Users, Sparkles } from 'lucide-react';
import { useLayoutEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import GridBackground from './GridBackground';

const advantages = [
    {
        icon: <Camera size={24} />,
        title: "Kamera Profesional",
        description: "Kami menggunakan kamera DSLR/Mirrorless high-end untuk hasil foto yang tajam dan jernih.",
    },
    {
        icon: <Printer size={24} />,
        title: "Cetak Tanpa Batas",
        description: "Tamu Anda bisa berfoto sepuasnya dan mendapatkan cetakan fisik instan tanpa batasan.",
    },
    {
        icon: <Palette size={24} />,
        title: "Template Custom",
        description: "Desain frame foto yang dipersonalisasi sesuai tema acara Anda.",
    },
    {
        icon: <Zap size={24} />,
        title: "Lighting Studio",
        description: "Setup pencahayaan studio profesional memastikan setiap wajah terlihat sempurna.",
    },
    {
        icon: <Users size={24} />,
        title: "Team Berpengalaman",
        description: "Crew yang ramah siap membantu tamu Anda bergaya paling seru.",
    },
];

const Advantages = () => {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".advantage-header",
                {
                    y: 30,
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
                    ease: "power3.out"
                }
            );

            gsap.fromTo(".advantage-card",
                {
                    y: 40,
                    opacity: 0
                },
                {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 60%",
                        toggleActions: "play none none none"
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out"
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="advantages" className="py-20 bg-slate-900 text-white relative overflow-hidden">
            <GridBackground className="opacity-10 stroke-slate-700" />

            {/* Background patterns */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-500 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="advantage-header">
                        <h2 className="text-sky-400 font-semibold tracking-wide uppercase mb-3">Kenapa Memilih Kami?</h2>
                        <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            Standar Kualitas untuk <br /> Hasil Terbaik.
                        </h3>
                        <p className="text-slate-300 text-lg max-w-lg mb-8">
                            Kami menghadirkan pengalaman photobooth yang tidak hanya seru, tapi juga memberikan kualitas kenangan fisik terbaik untuk tamu Anda.
                        </p>
                        <a href="#contact" className="inline-block px-6 py-3 rounded-lg bg-white text-slate-900 font-medium hover:bg-sky-50 transition-colors transform hover:-translate-y-1 hover:shadow-lg">
                            Cek Ketersediaan Tanggal
                        </a>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {advantages.map((item, index) => (
                            <div
                                key={index}
                                className="advantage-card group bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-sky-500/30 transition-all duration-300"
                            >
                                <div className="w-10 h-10 bg-sky-500/20 text-sky-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h4 className="text-xl font-bold mb-2 group-hover:text-sky-300 transition-colors">{item.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advantages;
