import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Sparkles } from 'lucide-react';

const ServicesHero = () => {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.from(titleRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            })
                .from(textRef.current, {
                    y: 30,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out"
                }, "-=0.6");

        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden bg-slate-50">
            {/* Tailwind Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>

            {/* Abstract Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-100 rounded-full blur-[100px] opacity-60 translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-100 rounded-full blur-[80px] opacity-50 -translate-x-1/3 translate-y-1/3"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-sky-600 font-medium text-sm mb-8">
                    <Sparkles size={16} className="text-amber-400" />
                    <span>Solusi Digital End-to-End</span>
                </div>

                <h1 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                    Wujudkan Potensi Bisnis Anda dengan <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">
                        Teknologi Tepat Guna
                    </span>
                </h1>

                <p ref={textRef} className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
                    Kami tidak hanya membuat software. Kami merancang ekosistem digital yang menghubungkan brand Anda dengan audiens, mengotomatisasi operasional, dan mempercepat pertumbuhan bisnis secara berkelanjutan.
                </p>

                <div className="flex flex-wrapjustify-center gap-4">
                    {/* Decorative Elements or Quick Stats could go here later */}
                </div>
            </div>
        </section>
    );
};

export default ServicesHero;
