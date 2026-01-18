import { Hexagon, Triangle, Circle, Square, Star } from 'lucide-react';

const LogoCloud = () => {
    const logos = [
        { icon: <Hexagon size={32} />, name: "HexaTech" },
        { icon: <Triangle size={32} />, name: "TriForce" },
        { icon: <Circle size={32} />, name: "CircleOne" },
        { icon: <Square size={32} />, name: "SquareBiz" },
        { icon: <Star size={32} />, name: "StarDust" },
    ];

    return (
        <section className="py-12 bg-slate-50 border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">
                    Dipercaya oleh Perusahaan Inovatif
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {logos.map((logo, index) => (
                        <div key={index} className="flex items-center gap-2 group cursor-default">
                            <span className="text-sky-600 group-hover:scale-110 transition-transform duration-300">
                                {logo.icon}
                            </span>
                            <span className="font-bold text-slate-700 text-lg">{logo.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LogoCloud;
