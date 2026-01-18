import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
    return (
        <section id="contact" className="py-28 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-600 via-sky-700 to-indigo-900"></div>

            {/* Animated Decor */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-sky-400/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-indigo-400/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10 text-white group">
                <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase transition-transform duration-1000 group-hover:scale-105">
                    Siap Mulai <span className="text-sky-300 italic">Proyek</span> Anda?
                </h2>
                <p className="text-sky-100 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                    Jangan lewatkan kesempatan untuk mendigitalisasi bisnis Anda sekarang. Konsultasikan kebutuhan Anda dengan tim ahli kami secara gratis.
                </p>
                <div className="flex flex-wrap gap-6 justify-center">
                    <Link
                        to="/start-project"
                        className="inline-flex justify-center items-center px-10 py-5 rounded-full bg-white text-sky-700 font-black shadow-2xl shadow-sky-900/40 hover:bg-sky-50 transition-all hover:scale-110 active:scale-95 uppercase tracking-widest text-sm"
                    >
                        Mulai Proyek
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                    <a
                        href="https://wa.me/6282332901726"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex justify-center items-center px-10 py-5 rounded-full bg-sky-500/10 text-white font-black border-2 border-white/20 hover:bg-white/10 transition-all hover:scale-110 active:scale-95 uppercase tracking-widest text-sm backdrop-blur-sm"
                    >
                        Konsultasi Gratis
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTA;
