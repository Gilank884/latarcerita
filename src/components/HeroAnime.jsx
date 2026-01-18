import { useEffect, useRef, useState } from 'react';
import { animate, createTimeline, stagger } from 'animejs';
import { ArrowRight, Code, Layout, Rocket, Sparkles } from 'lucide-react';

const HeroAnime = () => {
    const containerRef = useRef(null);
    const [gridRows, setGridRows] = useState([]);
    const [gridCols, setGridCols] = useState([]);

    useEffect(() => {
        // Calculate grid size based on window
        const rows = Math.ceil(window.innerHeight / 50);
        const cols = Math.ceil(window.innerWidth / 50);
        const rArr = Array.from({ length: rows }, (_, i) => i);
        const cArr = Array.from({ length: cols }, (_, i) => i);
        setGridRows(rArr);
        setGridCols(cArr);

        // Initial Animation Timeline
        const tl = createTimeline({
            easing: 'easeOutExpo',
            duration: 1000
        });

        // 1. Grid Entrance
        tl.add('.anime-grid-dot', {
            scale: [0, 1],
            opacity: [0, 0.3],
            delay: stagger(20, { grid: [cols, rows], from: 'center' }),
            duration: 800
        });

        // 2. Main Text Stagger
        tl.add('.hero-text-el', {
            translateY: [50, 0],
            opacity: [0, 1],
            delay: stagger(100),
        }, '-=400');

        // 3. Visual Element Entrance
        tl.add('.hero-visual-el', {
            translateX: [50, 0],
            opacity: [0, 1],
            duration: 1200,
        }, '-=800');

        // Floating Animation for Visual Elements
        animate('.floating-icon', {
            translateY: [-10, 10],
            direction: 'alternate',
            loop: true,
            easing: 'easeInOutSine',
            duration: 2000,
            delay: stagger(300)
        });

    }, []);

    const handleDotHover = (e) => {
        animate(e.target, {
            scale: [1, 2.5],
            opacity: [0.3, 0.8],
            backgroundColor: '#0ea5e9', // Sky blue 500
            direction: 'alternate',
            duration: 500,
            easing: 'easeInOutQuad'
        });
    };

    return (
        <section ref={containerRef} className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">

            {/* Interactive Background Grid */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none lg:pointer-events-auto">
                <div
                    className="flex flex-wrap"
                    style={{ width: '120vw', height: '120vh', marginLeft: '-10vw', marginTop: '-10vh' }}
                >
                    {gridRows.map(r => (
                        gridCols.map(c => (
                            <div
                                key={`${r}-${c}`}
                                className="w-[50px] h-[50px] flex items-center justify-center p-4"
                            >
                                <div
                                    className="anime-grid-dot w-1.5 h-1.5 rounded-full bg-slate-200 transition-colors"
                                    onMouseEnter={handleDotHover}
                                ></div>
                            </div>
                        ))
                    ))}
                </div>
            </div>

            {/* Content Container */}
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Text Content */}
                <div className="max-w-2xl">
                    <div className="hero-text-el inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-sky-600 text-xs font-semibold uppercase tracking-wider mb-6 opacity-0">
                        <Sparkles size={14} className="text-amber-400" />
                        <span>Interactive Digital Experience</span>
                    </div>

                    <h1 className="hero-text-el text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6 opacity-0">
                        Membangun <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">Ekosistem Digital</span> yang Hidup.
                    </h1>

                    <p className="hero-text-el text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg opacity-0">
                        Solusi website dan aplikasi interaktif yang tidak hanya fungsional, tetapi juga memberikan pengalaman visual yang memukau bagi pengguna Anda.
                    </p>

                    <div className="hero-text-el flex flex-col sm:flex-row gap-4 opacity-0">
                        <a
                            href="#contact"
                            className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-slate-900 text-white font-semibold shadow-xl shadow-slate-200 hover:bg-slate-800 transition-transform active:scale-95"
                            onMouseEnter={(e) => animate(e.target, { scale: 1.05, duration: 300 })}
                            onMouseLeave={(e) => animate(e.target, { scale: 1, duration: 300 })}
                        >
                            Mulai Sekarang
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                        <a
                            href="#services"
                            className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition-transform active:scale-95"
                            onMouseEnter={(e) => animate(e.target, { scale: 1.05, duration: 300 })}
                            onMouseLeave={(e) => animate(e.target, { scale: 1, duration: 300 })}
                        >
                            Pelajari Lebih Lanjut
                        </a>
                    </div>
                </div>

                {/* Visual / Interactive Mockup */}
                <div className="hero-visual-el relative lg:h-[600px] flex items-center justify-center perspective-1000 opacity-0">
                    <div className="relative w-full aspect-square max-w-md lg:max-w-full bg-gradient-to-br from-white/90 to-sky-50/90 backdrop-blur-xl rounded-[2.5rem] border border-white/50 shadow-2xl p-8 flex flex-col justify-between z-20 overflow-hidden transform rotate-y-6 hover:rotate-y-0 transition-transform duration-700">

                        {/* Decorative blobs */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-200/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                        {/* Floating Cards */}
                        <div className="floating-icon bg-white p-4 rounded-2xl shadow-lg border border-slate-50 mb-6 w-2/3 self-start">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-500">
                                    <Layout size={18} />
                                </div>
                                <div className="h-2 w-20 bg-slate-200 rounded"></div>
                            </div>
                            <div className="h-2 w-full bg-slate-100 rounded mb-1"></div>
                            <div className="h-2 w-4/5 bg-slate-100 rounded"></div>
                        </div>

                        <div className="floating-icon bg-slate-900 text-white p-5 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow w-3/4 self-center z-10">
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                </div>
                                <Rocket size={20} className="text-sky-400" />
                            </div>
                            <div className="space-y-3 font-mono text-xs opacity-80">
                                <div className="flex gap-2">
                                    <span className="text-pink-400">const</span>
                                    <span className="text-sky-300">future</span>
                                    <span>=</span>
                                    <span className="text-yellow-300">"loading..."</span>
                                </div>
                                <div className="flex gap-2 pl-4">
                                    <span className="text-purple-400">await</span>
                                    <span>launch(</span>
                                    <span className="text-green-400">project</span>
                                    <span>);</span>
                                </div>
                            </div>
                        </div>

                        <div className="floating-icon bg-white p-4 rounded-2xl shadow-lg border border-slate-50 mt-6 w-2/3 self-end">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-500">
                                    <Code size={18} />
                                </div>
                                <div>
                                    <div className="h-2 w-24 bg-slate-200 rounded mb-1"></div>
                                    <div className="h-2 w-16 bg-slate-100 rounded"></div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Background Glows for visual */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-sky-200/20 blur-[100px] -z-10 rounded-full"></div>
                </div>

            </div>
        </section>
    );
};

export default HeroAnime;
