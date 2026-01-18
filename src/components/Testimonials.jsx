import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const testimonials = [
    {
        text: "Latar Cerita benar-benar memahami visi bisnis kami. Website baru kami tidak hanya terlihat bagus, tapi juga meningkatkan konversi penjualan secara signifikan.",
        author: "Budi Santoso",
        role: "CEO, Retail Maju Jaya",
        initial: "B"
    },
    {
        text: "Kerja sama yang sangat profesional. Tim sangat responsif terhadap masukan dan hasil akhirnya melebihi ekspektasi kami. Sistem Odoo yang dibangun sangat membantu operasional.",
        author: "Sarah Widya",
        role: "Operational Manager, Logistik Cepat",
        initial: "S"
    },
    {
        text: "Desain UI/UX aplikasinya sangat modern dan intuitif. Pengguna kami sangat menyukainya. Terima kasih Latar Cerita!",
        author: "Rizky Pratama",
        role: "Founder, Startup Kita",
        initial: "R"
    }
];

const Testimonials = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const cardRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(titleRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                y: 20,
                opacity: 0,
                duration: 0.6
            });

            gsap.from(cardRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const addToRefs = (el) => {
        if (el && !cardRef.current.includes(el)) {
            cardRef.current.push(el);
        }
    };

    return (
        <section ref={sectionRef} className="py-20 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-6">
                <h2 ref={titleRef} className="text-center text-3xl font-bold text-slate-900 mb-12">Kata Mereka Tentang Kami</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            ref={addToRefs}
                            className="bg-slate-50 p-8 rounded-2xl relative hover:bg-slate-100 transition-colors duration-300"
                        >
                            <div className="text-6xl text-sky-200 font-serif absolute top-4 left-6">"</div>
                            <p className="text-slate-700 leading-relaxed relative z-10 mb-6 pt-6 italic">
                                {item.text}
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600">
                                    {item.initial}
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900 text-sm">{item.author}</div>
                                    <div className="text-slate-500 text-xs">{item.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
