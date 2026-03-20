import { useLayoutEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const testimonials = [
    {
        text: "Photobooth dari Latar Cerita beneran jadi bintang di acara pernikahan kami! Antriannya tertib karena cetaknya cepet banget, dan hasilnya tajam banget.",
        author: "Aditya & Sekar",
        role: "Pasangan Pengantin",
        initial: "A"
    },
    {
        text: "Sangat profesional. Tim datang tepat waktu dan setup-nya rapi banget. Template foto yang dibikinin juga cantik dan sesuai banget sama tema kantor kami.",
        author: "Rina Wijaya",
        role: "Event Organizer, Bank Mandiri",
        initial: "R"
    },
    {
        text: "Fitur download via QR Code-nya juara! Tamu undangan langsung bisa upload ke Instagram tanpa nunggu lama. Sangat direkomendasikan!",
        author: "Kevin Sanjaya",
        role: "Birthday Celebrant",
        initial: "K"
    }
];

const Testimonials = () => {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".testimonial-header",
                {
                    y: 20,
                    opacity: 0
                },
                {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.6
                }
            );

            gsap.fromTo(".testimonial-card",
                {
                    y: 40,
                    opacity: 0
                },
                {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                        toggleActions: "play none none none"
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out"
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="testimonial-header text-center text-3xl font-bold text-slate-900 mb-12">Kata Mereka Tentang Kami</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="testimonial-card bg-slate-50 p-8 rounded-2xl relative hover:bg-slate-100 transition-colors duration-300"
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
