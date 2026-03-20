import { useRef, useLayoutEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const steps = [
    { num: "01", title: "Konsultasi", desc: "Diskusikan tema acara, lokasi, dan kebutuhan paket yang paling pas untuk Anda." },
    { num: "02", title: "Booking", desc: "Amankan tanggal acara Anda dengan pembayaran uang muka yang transparan." },
    { num: "03", title: "Design", desc: "Kami buatkan template frame foto dan backdrop sesuai dengan tema acara Anda." },
    { num: "04", title: "Setup", desc: "Tim kami datang 1-2 jam sebelum acara untuk memasang alat dan memastikan semua siap." },
    { num: "05", title: "Showtime", desc: "Tamu Anda bisa mulai berfoto seru dengan berbagai properti unik yang kami sediakan." },
    { num: "06", title: "Gallery", desc: "Dapatkan akses ke galeri online untuk mendownload semua foto setelah acara selesai." },
];

const Process = () => {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".process-step",
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
                    stagger: 0.2,
                    ease: "power3.out"
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
            {/* Background Blur */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-slate-50 rounded-[100%] blur-3xl -z-10"></div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-sm font-semibold text-sky-500 uppercase tracking-wider mb-2">Workflow Layanan</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Bagaimana Kami Bekerja</h3>
                    <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Kami memastikan setiap proses berjalan lancar agar Anda tidak perlu khawatir tentang dokumentasi di hari bahagia Anda.</p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-sky-200 to-transparent -z-10"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="process-step relative pt-8 md:pt-0 group">
                            <div className="w-20 h-20 rounded-2xl bg-white border-4 border-slate-50 group-hover:border-sky-100 text-sky-600 text-2xl font-bold flex items-center justify-center mx-auto mb-8 relative z-10 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                {step.num}
                            </div>
                            <div className="text-center px-4">
                                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">{step.title}</h4>
                                <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Extra Description Box */}
                <div className="mt-20 p-8 bg-slate-50 rounded-3xl border border-slate-100 text-center max-w-4xl mx-auto">
                    <p className="text-lg text-slate-700 italic">"Kami percaya bahwa setiap senyuman layak diabadikan dengan sempurna. Kami hadir untuk memastikan tamu Anda pulang dengan kenangan yang tak terlupakan."</p>
                </div>
            </div>
        </section>
    );
};

export default Process;
