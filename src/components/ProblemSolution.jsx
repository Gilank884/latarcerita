import { useLayoutEffect, useRef } from 'react';
import { AlertCircle, CheckCircle2, XCircle, ArrowRight, Zap, Shield, Smartphone, Monitor, Globe } from 'lucide-react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const problems = [
    { id: 1, text: "Belum punya website profesional", desc: "Melewatkan ribuan potensi klien di dunia digital." },
    { id: 2, text: "Website tidak meyakinkan", desc: "Desain kuno membuat klien ragu dengan bisnis Anda." },
    { id: 3, text: "Sistem kerja masih manual", desc: "Banyak waktu terbuang untuk proses repetitif." },
    { id: 4, text: "Data berantakan & sulit dicari", desc: "Informasi penting sering hilang saat dibutuhkan." },
    { id: 5, text: "Sulit mengelola operasional bisnis", desc: "Pusing dengan manajemen yang tidak terintegrasi." },
];

const solutions = [
    { id: 1, text: "Website Modern & Cepat", icon: <Globe className="text-sky-500" />, desc: "Tampil profesional dengan performa maksimal." },
    { id: 2, text: "Sistem Sesuai Alur Bisnis", icon: <Monitor className="text-indigo-500" />, desc: "Otomasi yang dirancang khusus untuk Anda." },
    { id: 3, text: "Aplikasi Mudah Digunakan", icon: <Smartphone className="text-amber-500" />, desc: "User experience yang ramah untuk siapa saja." },
    { id: 4, text: "Bisa Custom Sesuai Kebutuhan", icon: <Zap className="text-purple-500" />, desc: "Fitur yang berkembang bersama bisnis Anda." },
    { id: 5, text: "Harga Transparan & Jelas", icon: <Shield className="text-emerald-500" />, desc: "Investasi terukur tanpa biaya tersembunyi." },
];

const ProblemSolution = () => {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Problems Animation
            gsap.fromTo(".problem-card",
                {
                    x: -50,
                    opacity: 0
                },
                {
                    scrollTrigger: {
                        trigger: ".problem-container",
                        start: "top 80%",
                        toggleActions: "play none none none"
                    },
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out"
                }
            );

            // Solutions Animation
            gsap.fromTo(".solution-card",
                {
                    y: 50,
                    opacity: 0
                },
                {
                    scrollTrigger: {
                        trigger: ".solution-container",
                        start: "top 80%",
                        toggleActions: "play none none none"
                    },
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2,
                    ease: "back.out(1.7)"
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.03)_0%,transparent_70%)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-start">

                    {/* Problem Section */}
                    <div className="problem-container">
                        <div className="mb-12">
                            <h2 className="text-sm font-bold text-red-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                                <AlertCircle size={18} /> Tantangan Bisnis
                            </h2>
                            <h3 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                                Masalah yang Sering <br /> <span className="text-slate-400 italic">Dihadapi Bisnis</span>
                            </h3>
                        </div>

                        <div className="space-y-4">
                            {problems.map((item, i) => (
                                <div
                                    key={item.id}
                                    className="problem-card flex items-start gap-5 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:border-red-100 transition-all duration-300 group"
                                >
                                    <div className="w-10 h-10 rounded-full bg-red-100 text-red-500 flex items-center justify-center shrink-0 group-hover:bg-red-500 group-hover:text-white transition-colors">
                                        <XCircle size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">{item.text}</h4>
                                        <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Solution Section */}
                    <div className="solution-container">
                        <div className="mb-12">
                            <h2 className="text-sm font-bold text-sky-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                                <CheckCircle2 size={18} /> Solusi Digital
                            </h2>
                            <h3 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                                Transformasi Menuju <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600 italic">Masa Depan Digital</span>
                            </h3>
                        </div>

                        <div className="grid gap-6">
                            {solutions.map((item, i) => (
                                <div
                                    key={item.id}
                                    className="solution-card p-6 rounded-[2rem] bg-white border border-slate-200 shadow-sm hover:shadow-2xl hover:border-sky-200 transition-all duration-500 flex items-center gap-6 group relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-sky-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-black text-slate-900 mb-1 group-hover:text-sky-600 transition-colors uppercase text-sm tracking-tight">{item.text}</h4>
                                        <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                    <ArrowRight className="ml-auto text-slate-300 group-hover:text-sky-500 group-hover:translate-x-1 transition-all" size={20} />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;
