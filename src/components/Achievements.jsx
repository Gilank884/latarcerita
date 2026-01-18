import { Trophy, Star, Smile, FolderCheck } from 'lucide-react';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Achievements = () => {
    const sectionRef = useRef(null);
    const statsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(statsRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out"
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const addToRefs = (el) => {
        if (el && !statsRef.current.includes(el)) {
            statsRef.current.push(el);
        }
    };

    return (
        <section ref={sectionRef} className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Patterns */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-600/30 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
                    <div>
                        <h2 className="text-sky-400 font-semibold uppercase tracking-wider mb-2">Pencapaian Kami</h2>
                        <h3 className="text-3xl md:text-5xl font-bold leading-tight">Membangun Kepercayaan Melalui Hasil Nyata</h3>
                    </div>
                    <div>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            Kami tidak hanya berbicara tentang kode, kami berbicara tentang dampak. Di balik setiap angka adalah cerita sukses klien yang kami bantu tumbuh dan berkembang di era digital.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div ref={addToRefs} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:bg-slate-800 transition-colors group">
                        <div className="w-12 h-12 bg-sky-500/20 rounded-lg flex items-center justify-center text-sky-400 mb-4 group-hover:scale-110 transition-transform">
                            <FolderCheck size={28} />
                        </div>
                        <p className="text-4xl font-bold mb-1">150+</p>
                        <p className="text-slate-400 text-sm">Proyek Terselesaikan</p>
                    </div>
                    <div ref={addToRefs} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:bg-slate-800 transition-colors group">
                        <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
                            <Smile size={28} />
                        </div>
                        <p className="text-4xl font-bold mb-1">98%</p>
                        <p className="text-slate-400 text-sm">Kepuasan Klien</p>
                    </div>
                    <div ref={addToRefs} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:bg-slate-800 transition-colors group">
                        <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                            <Trophy size={28} />
                        </div>
                        <p className="text-4xl font-bold mb-1">12</p>
                        <p className="text-slate-400 text-sm">Penghargaan Industri</p>
                    </div>
                    <div ref={addToRefs} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:bg-slate-800 transition-colors group">
                        <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                            <Star size={28} />
                        </div>
                        <p className="text-4xl font-bold mb-1">5.0</p>
                        <p className="text-slate-400 text-sm">Rating Rata-rata</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
