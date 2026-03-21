import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { Camera, Heart, Star, Sparkles, Image as ImageIcon, Send, Zap } from 'lucide-react';

const HeroAnime = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Entrance animations
            gsap.from(".hero-content-anim", {
                y: 80,
                opacity: 0,
                duration: 1.5,
                stagger: 0.2,
                ease: "power4.out"
            });

            // Wavy shapes slow movement
            gsap.to(".shapes-float", {
                y: 30,
                x: 20,
                duration: 10,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

            // Floating icons animation
            gsap.to(".floating-icon", {
                y: "random(-25, 25)",
                x: "random(-20, 20)",
                rotation: "random(-20, 20)",
                duration: "random(4, 7)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const decorativeIcons = [
        { Icon: Camera, top: '15%', left: '10%', size: 40, opacity: 'opacity-20' },
        { Icon: Star, top: '25%', right: '12%', size: 30, opacity: 'opacity-15' },
        { Icon: Sparkles, bottom: '20%', left: '18%', size: 35, opacity: 'opacity-15' },
        { Icon: Heart, top: '45%', right: '8%', size: 25, opacity: 'opacity-10' },
        { Icon: ImageIcon, bottom: '15%', right: '15%', size: 45, opacity: 'opacity-15' },
        { Icon: Zap, top: '55%', left: '12%', size: 30, opacity: 'opacity-10' },
        { Icon: Send, bottom: '35%', left: '25%', size: 24, opacity: 'opacity-10' },
    ];

    return (
        <section ref={sectionRef} className="relative min-h-[95vh] flex items-center justify-center pt-48 pb-32 overflow-hidden bg-white">

            {/* Background Decorations (Pattern & Gradient) */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* Dot Pattern */}
                <div className="absolute inset-0 opacity-[0.3]"
                    style={{
                        backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`,
                        backgroundSize: '32px 32px'
                    }}
                ></div>

                {/* Mesh Gradients */}
                <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-50 rounded-full blur-[120px] opacity-60"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-sky-50 rounded-full blur-[120px] opacity-60"></div>
                <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] bg-blue-100/30 rounded-full blur-[100px] opacity-40"></div>
                <div className="absolute bottom-[30%] left-[10%] w-[40%] h-[40%] bg-sky-100/20 rounded-full blur-[130px] opacity-30"></div>

                {/* Floating Icons */}
                {decorativeIcons.map(({ Icon, top, left, right, bottom, size, opacity }, index) => (
                    <div
                        key={index}
                        className={`absolute floating-icon ${opacity} text-blue-900 hidden lg:block`}
                        style={{ top, left, right, bottom }}
                    >
                        <Icon size={size} strokeWidth={1.5} />
                    </div>
                ))}
            </div>

            <div className="container max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center">

                    {/* Floating Decorative Blobs */}
                    <div className="shapes-float absolute top-0 lg:top-[-120px] text-blue-100 opacity-40 -z-10">
                        <svg width="450" height="450" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="currentColor" d="M45.7,-77.2C58.3,-71,67.1,-57.4,74.5,-43.3C81.9,-29.3,87.9,-14.6,87.7,0.1C87.5,14.8,81.1,29.7,73,43.4C64.9,57.1,55,69.5,42.4,77.5C29.8,85.5,14.9,89.1,-0.1,89.3C-15.1,89.4,-30.2,86.2,-43.8,78.8C-57.3,71.3,-69.3,59.7,-77.9,46C-86.4,32.3,-91.5,16.2,-91,0.3C-90.5,-15.6,-84.4,-31.2,-75.4,-44.6C-66.4,-57.9,-54.6,-68.9,-41.2,-74.6C-27.7,-80.3,-13.9,-80.7,0.4,-81.4C14.7,-82.1,29.3,-83.1,45.7,-77.2Z" transform="translate(100 100)" />
                        </svg>
                    </div>
                    <div className="shapes-float absolute bottom-0 right-[-120px] text-sky-100 opacity-30 -z-10 rotate-180">
                        <svg width="350" height="350" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="currentColor" d="M38.8,-65.4C50.1,-58.5,59.1,-47.9,66.1,-35.8C73.1,-23.7,78.2,-10.1,77.5,3.3C76.8,16.7,70.3,29.9,61.4,41.2C52.5,52.5,41.2,61.8,28.6,67.3C16,72.8,2.1,74.5,-12.3,72.5C-26.7,70.5,-41.5,64.8,-53.1,54.9C-64.7,45,-73.2,30.9,-77.1,15.6C-81,0.3,-80.3,-16.2,-73.9,-30.3C-67.5,-44.4,-55.4,-56.1,-41.6,-61.8C-27.8,-67.5,-12.3,-67.2,1.3,-69.3C14.9,-71.4,27.5,-72.3,38.8,-65.4Z" transform="translate(100 100)" />
                        </svg>
                    </div>

                    {/* Headline */}
                    <h1 className="hero-content-anim text-7xl md:text-9xl lg:text-[160px] font-bold text-slate-950 leading-[0.8] tracking-tight mb-12" style={{ fontFamily: "'Caveat', cursive" }}>
                        Ciptakan Cerita<br />
                        <span className="inline-block pr-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-sky-400">Terbaikmu</span>
                    </h1>

                    <p className="hero-content-anim text-lg md:text-xl text-slate-500 max-w-2xl mb-12 font-medium leading-relaxed">
                        Setiap sudut punya cerita, setiap moment butuh ruang untuk bercerita.
                    </p>

                    <div className="hero-content-anim">
                        <Link
                            to="/photobooth"
                            className="inline-block px-14 py-6 rounded-2xl bg-blue-900 text-white font-bold text-3xl hover:bg-blue-950 hover:shadow-[0_20px_40px_rgba(30,58,138,0.15)] hover:-translate-y-1 transition-all active:scale-95 shadow-2xl shadow-blue-100"
                            style={{ fontFamily: "'Caveat', cursive" }}
                        >
                            Gabung Jadi Kreator
                        </Link>
                    </div>

                </div>
            </div>

            <style jsx>{`
                .container {
                    perspective: 1000px;
                }
            `}</style>
        </section>
    );
};

export default HeroAnime;
