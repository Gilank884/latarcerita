import { Zap, ShieldCheck, Scale, MousePointerClick } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import GridBackground from './GridBackground';

const advantages = [
    {
        icon: <Zap size={24} />,
        title: "Cepat & Efisien",
        description: "Proses pengembangan yang terstruktur memastikan proyek selesai tepat waktu tanpa mengurangi kualitas.",
    },
    {
        icon: <MousePointerClick size={24} />,
        title: "Fleksibel",
        description: "Setiap solusi disesuaikan dengan kebutuhan unik bisnis Anda, bukan template kaku yang membatasi.",
    },
    {
        icon: <ShieldCheck size={24} />,
        title: "Aman & Reliable",
        description: "Standar keamanan modern untuk melindungi data Anda dan menjamin uptime sistem yang tinggi.",
    },
    {
        icon: <Scale size={24} />,
        title: "Skalabel",
        description: "Teknologi yang siap tumbuh seiring dengan perkembangan skala bisnis Anda di masa depan.",
    },
];

const Advantages = () => {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const cardRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(headerRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            });

            gsap.from(cardRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%",
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const addToRefs = (el) => {
        if (el && !cardRef.current.includes(el)) {
            cardRef.current.push(el);
        }
    };

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
                    <div ref={headerRef}>
                        <h2 className="text-sky-400 font-semibold tracking-wide uppercase mb-3">Kenapa Memilih Kami?</h2>
                        <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            Standar Kualitas untuk <br /> Hasil Terbaik.
                        </h3>
                        <p className="text-slate-300 text-lg max-w-lg mb-8">
                            Kami tidak hanya menulis kode, kami membangun pondasi digital yang kuat untuk keberlanjutan bisnis Anda.
                        </p>
                        <a href="#contact" className="inline-block px-6 py-3 rounded-lg bg-white text-slate-900 font-medium hover:bg-sky-50 transition-colors transform hover:-translate-y-1 hover:shadow-lg">
                            Diskusikan Ide Anda
                        </a>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {advantages.map((item, index) => (
                            <div
                                key={index}
                                ref={addToRefs}
                                className="group bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-sky-500/30 transition-all duration-300"
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
