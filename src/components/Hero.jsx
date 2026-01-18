import { useEffect, useRef } from 'react';
import { ArrowRight, Code, Layout, Rocket } from 'lucide-react';
import gsap from 'gsap';
import GridBackground from './GridBackground';

const Hero = () => {
    const containerRef = useRef(null);
    const headlineRef = useRef(null);
    const subheadlineRef = useRef(null);
    const ctaRef = useRef(null);
    const visualRef = useRef(null);
    const floatItemsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.fromTo(headlineRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, delay: 0.2 }
            )
                .fromTo(subheadlineRef.current,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8 },
                    "-=0.6"
                )
                .fromTo(ctaRef.current,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.6 },
                    "-=0.4"
                )
                .fromTo(visualRef.current,
                    { x: 30, opacity: 0 },
                    { x: 0, opacity: 1, duration: 1 },
                    "-=0.8"
                );

            // Floating animation for UI elements
            floatItemsRef.current.forEach((item, i) => {
                gsap.to(item, {
                    y: -15,
                    duration: 2 + i * 0.5,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: i * 0.2
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const addToFloatRefs = (el) => {
        if (el && !floatItemsRef.current.includes(el)) {
            floatItemsRef.current.push(el);
        }
    };

    return (
        <section ref={containerRef} className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <GridBackground />

            {/* Enhanced Background Decor */}
            <div className="absolute top-0 right-0 -z-10 w-3/4 h-3/4 bg-blue-100/30 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 -z-10 w-1/2 h-1/2 bg-sky-100/30 blur-[100px] rounded-full -translate-x-1/4 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

                {/* Content */}
                <div className="max-w-2xl relative z-10">

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-600 text-xs font-semibold uppercase tracking-wider mb-6 animate-fade-in-up">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                        </span>
                        Available for New Projects
                    </div>

                    <h1 ref={headlineRef} className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
                        Membangun <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">Identitas Digital</span> yang Berkarakter.
                    </h1>
                    <p ref={subheadlineRef} className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
                        Kami membantu brand Anda tampil profesional dengan website, aplikasi, dan sistem yang modern, cepat, dan efektif.
                    </p>
                    <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
                        <a href="#contact" className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-slate-200 group">
                            Mulai Proyek
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#services" className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold hover:border-slate-300 hover:bg-slate-50 transition-all hover:scale-105 active:scale-95">
                            Lihat Layanan
                        </a>
                    </div>
                </div>

                {/* Visual / Mockup */}
                <div ref={visualRef} className="relative lg:h-[600px] flex items-center justify-center perspective-1000">
                    <div className="relative w-full aspect-square max-w-md lg:max-w-full bg-gradient-to-br from-white/80 to-sky-50/80 backdrop-blur-xl rounded-3xl border border-sky-100 shadow-2xl p-8 flex flex-col justify-between overflow-hidden transform rotate-y-6 hover:rotate-y-0 transition-transform duration-700 ease-out">

                        {/* Abstract UI Elements representing development */}
                        <div ref={addToFloatRefs} className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 mb-4">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center text-sky-600">
                                    <Layout size={20} />
                                </div>
                                <div>
                                    <div className="h-4 w-24 bg-slate-100 rounded mb-1"></div>
                                    <div className="h-3 w-16 bg-slate-50 rounded"></div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-2 w-full bg-slate-50 rounded-full"></div>
                                <div className="h-2 w-5/6 bg-slate-50 rounded-full"></div>
                            </div>
                        </div>

                        <div ref={addToFloatRefs} className="bg-slate-900 rounded-xl shadow-xl shadow-indigo-500/20 p-5 text-white z-10 self-center w-full">
                            <div className="flex justify-between items-start mb-4">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                    <Rocket size={24} className="text-sky-400" />
                                </div>
                                <div className="text-xs font-mono text-slate-400">v2.0.1</div>
                            </div>
                            <div className="space-y-3">
                                <div className="h-3 w-32 bg-white/20 rounded-full"></div>
                                <div className="h-3 w-24 bg-white/20 rounded-full"></div>
                            </div>
                        </div>

                        <div ref={addToFloatRefs} className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 mt-4 self-end w-3/4">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500">
                                    <Code size={16} />
                                </div>
                                <div className="h-3 w-full bg-slate-100 rounded-full"></div>
                            </div>
                        </div>

                        {/* Floating dots/decorations */}
                        <div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-sky-400 opacity-10 blur-xl animate-pulse"></div>
                        <div className="absolute bottom-20 left-12 w-32 h-32 rounded-full bg-indigo-400 opacity-10 blur-xl animate-bounce"></div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
