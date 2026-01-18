import { Target, Users, Play, Award } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const About = () => {
    const sectionRef = useRef(null);
    const videoRef = useRef(null);
    const contentRef = useRef(null);
    const floatingCardRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(videoRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
                x: -50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });

            gsap.from(contentRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
                x: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                delay: 0.2
            });

            gsap.from(floatingCardRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
                y: 30,
                opacity: 0,
                duration: 1,
                ease: "back.out(1.7)",
                delay: 0.5
            });

            // Floating animation for the card
            gsap.to(floatingCardRef.current, {
                y: "-=10",
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="about" className="py-20 lg:py-32 bg-slate-50 overflow-hidden relative">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-sky-200/40 rounded-full blur-3xl mix-blend-multiply filter animate-blob"></div>
                <div className="absolute top-40 right-10 w-64 h-64 bg-indigo-200/40 rounded-full blur-3xl mix-blend-multiply filter animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-20 left-1/3 w-64 h-64 bg-pink-200/40 rounded-full blur-3xl mix-blend-multiply filter animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <div ref={videoRef} className="relative">
                        <div className="relative w-full aspect-video bg-slate-900 rounded-2xl shadow-2xl overflow-hidden group border border-slate-200/50">
                            {/* Video Element */}
                            <div className="absolute inset-0 bg-slate-900/20 z-10 group-hover:bg-slate-900/0 transition-colors duration-500 pointer-events-none"></div>
                            <video
                                src="/hero.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>

                        {/* Floating Icon Component */}
                        <div
                            ref={floatingCardRef}
                            className="absolute -bottom-8 -right-8 z-30 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4 max-w-[200px]"
                        >
                            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 shrink-0">
                                <Award size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 font-medium">Pengalaman</p>
                                <p className="text-sm font-bold text-slate-900">10+ Tahun</p>
                            </div>
                        </div>

                        {/* Additional Decorative Elements behind video */}
                        <div className="absolute -z-10 inset-4 bg-gradient-to-tr from-sky-500 to-indigo-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                    </div>

                    <div ref={contentRef}>
                        <h2 className="text-sm font-semibold text-sky-500 uppercase tracking-wider mb-2">Tentang Kami</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Mitra Digital untuk Pertumbuhan Bisnis Anda</h3>

                        <p className="text-slate-600 leading-relaxed mb-6">
                            Latar Cerita lahir dari semangat untuk membantu bisnis menjembatani kesenjangan digital. Kami bukan sekadar vendor, melainkan mitra strategis yang menerjemahkan visi Anda menjadi solusi teknologi yang nyata dan berdampak.
                        </p>

                        <div className="space-y-8 mt-8">
                            <div className="flex gap-4 group">
                                <div className="w-12 h-12 shrink-0 rounded-lg bg-sky-50 group-hover:bg-sky-100 flex items-center justify-center text-sky-600 transition-colors">
                                    <Target size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-slate-900 mb-2">Visi Kami</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Menjadi kekuatan pendorong utama transformasi digital di Indonesia, memberdayakan setiap entitas bisnis—dari skala mikro hingga korporasi—untuk mencapai potensi maksimal mereka melalui teknologi yang inovatif, berkelanjutan, dan relevan dengan perkembangan zaman.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 group">
                                <div className="w-12 h-12 shrink-0 rounded-lg bg-indigo-50 group-hover:bg-indigo-100 flex items-center justify-center text-indigo-600 transition-colors">
                                    <Users size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-slate-900 mb-2">Misi Kami</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-2">
                                        1. <strong>Inovasi Tanpa Henti:</strong> Terus mengeksplorasi dan mengadopsi teknologi terbaru untuk memberikan solusi terbaik bagi klien.
                                    </p>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-2">
                                        2. <strong>Kolaborasi Bermakna:</strong> Membangun hubungan kemitraan jangka panjang yang didasarkan pada kepercayaan, transparansi, dan tujuan bersama.
                                    </p>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        3. <strong>Edukasi Digital:</strong> Tidak hanya membangun sistem, tetapi juga memberikan pemahaman teknologi kepada klien kami untuk kemandirian digital mereka.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 pt-8 border-t border-slate-200">
                            <div className="grid grid-cols-3 gap-8">
                                <div>
                                    <p className="text-3xl font-bold text-slate-900">50+</p>
                                    <p className="text-xs text-slate-500 mt-1">Proyek Selesai</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-slate-900">30+</p>
                                    <p className="text-xs text-slate-500 mt-1">Klien Puas</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-slate-900">24/7</p>
                                    <p className="text-xs text-slate-500 mt-1">Support</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
