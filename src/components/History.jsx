import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Briefcase, Award, TrendingUp, Flag } from 'lucide-react';

const historyData = [
    {
        year: "2018",
        title: "Awal Mula Perjalanan",
        desc: "Latar Cerita didirikan di sebuah ruang kerja kecil dengan satu visi sederhana: mendemokratisasi teknologi berkualitas tinggi untuk UMKM yang sering terabaikan oleh agensi besar. Dengan 2 laptop dan semangat membara, kami memulai proyek pertama kami.",
        icon: <Flag size={20} />
    },
    {
        year: "2020",
        title: "Ekspansi & Tantangan",
        desc: "Di tengah pandemi global, kami justru menemukan momentum. Bisnis-bisnis beralih ke digital, dan kami siap membantu. Tim kami tumbuh menjadi 10 orang, dan kami meluncurkan layanan konsultasi transformasi digital penuh.",
        icon: <TrendingUp size={20} />
    },
    {
        year: "2022",
        title: "Penghargaan Pertama",
        desc: "Dedikasi kami pada kualitas desain dan kode membuahkan hasil. Kami memenangkan 'Best SME Tech Partner' di Jakarta Tech Summit. Ini adalah validasi bahwa pendekatan 'human-centric' kami dalam teknologi dihargai.",
        icon: <Award size={20} />
    },
    {
        year: "2024",
        title: "Menuju Masa Depan",
        desc: "Kini, Latar Cerita telah menangani lebih dari 50 klien enterprise dan ratusan UMKM. Kami terus berinovasi dengan AI dan Machine Learning untuk memberikan solusi yang lebih cerdas dan prediksi bisnis yang lebih akurat bagi klien kami.",
        icon: <Briefcase size={20} />
    }
];

const History = () => {
    const sectionRef = useRef(null);
    const itemsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(itemsRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.3,
                ease: "power3.out"
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const addToRefs = (el) => {
        if (el && !itemsRef.current.includes(el)) {
            itemsRef.current.push(el);
        }
    };

    return (
        <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-slate-100 -z-10"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-sky-50 rounded-full blur-3xl opacity-50 -z-10"></div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-semibold text-sky-500 uppercase tracking-wider mb-2">Perjalanan Kami</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Jejak Langkah Menuju Inovasi</h3>
                    <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                        Setiap tahun adalah babak baru dalam cerita kami. Inilah momen-momen penting yang membentuk siapa kami hari ini.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-slate-200 hidden md:block"></div>

                    <div className="space-y-12 md:space-y-24">
                        {historyData.map((item, index) => (
                            <div key={index} ref={addToRefs} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Content Side */}
                                <div className="flex-1 text-center md:text-left">
                                    <div className={`bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300 relative ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                        {/* Arrow Decoration */}
                                        <div className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white border-t border-l border-slate-100 rotate-45 ${index % 2 === 0 ? '-right-2 border-r border-b-0 border-l-0 border-t-slate-100 md:border-t md:border-r' : '-left-2 border-l border-b border-t-0 border-r-0'}`}></div>

                                        <span className="inline-block px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-bold mb-3">
                                            {item.year}
                                        </span>
                                        <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                                        <p className="text-slate-600 leading-relaxed text-sm">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Center Icon */}
                                <div className="relative z-10 shrink-0 w-12 h-12 rounded-full bg-white border-4 border-sky-100 shadow-md flex items-center justify-center text-sky-600">
                                    {item.icon}
                                </div>

                                {/* Spacer Side */}
                                <div className="flex-1 hidden md:block"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default History;
