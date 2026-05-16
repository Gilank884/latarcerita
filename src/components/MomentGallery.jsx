import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const MomentGallery = () => {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".gallery-item", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power3.out"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const moments = [
        // Set 1 (Rows 1-2) - 5 items horizontal
        { id: 1, image: "/Gallery/foto1.jpg", className: "md:col-span-2 h-[140px] lg:h-[180px]" },
        { id: 2, image: "/Gallery/foto2.jpg", className: "md:col-span-3 h-[140px] lg:h-[180px]" },
        { id: 3, image: "/Gallery/foto3.jpg", className: "md:col-span-3 h-[140px] lg:h-[180px]" },
        { id: 4, image: "/Gallery/foto4.jpg", className: "md:col-span-2 h-[140px] lg:h-[180px]" },
        { id: 5, image: "/Gallery/foto5.jpg", className: "md:col-span-2 md:row-span-2 h-full min-h-[300px] lg:min-h-[384px]" },

        { id: 6, image: "/Gallery/foto6.jpg", className: "md:col-span-3 h-[140px] lg:h-[180px]" },
        { id: 7, image: "/Gallery/foto7.jpg", className: "md:col-span-2 h-[140px] lg:h-[180px]" },
        { id: 8, image: "/Gallery/foto8.jpg", className: "md:col-span-2 h-[140px] lg:h-[180px]" },
        { id: 9, image: "/Gallery/foto9.jpg", className: "md:col-span-3 h-[140px] lg:h-[180px]" },

        // Set 2 (Rows 3-4) - Tall item on the LEFT
        { id: 15, image: "/Gallery/foto14.jpg", className: "md:col-span-2 md:row-span-2 h-full min-h-[300px] lg:min-h-[384px]" },
        { id: 11, image: "/Gallery/foto10.jpg", className: "md:col-span-2 h-[140px] lg:h-[180px]" },
        { id: 12, image: "/Gallery/foto11.jpg", className: "md:col-span-3 h-[140px] lg:h-[180px]" },
        { id: 13, image: "/Gallery/foto12.jpg", className: "md:col-span-3 h-[140px] lg:h-[180px]" },
        { id: 14, image: "/Gallery/foto13.jpg", className: "md:col-span-2 h-[140px] lg:h-[180px]" },

        { id: 16, image: "/Gallery/foto15.jpg", className: "md:col-span-3 h-[140px] lg:h-[180px]" },
        { id: 17, image: "/Gallery/foto16.jpg", className: "md:col-span-2 h-[140px] lg:h-[180px]" },
        { id: 18, image: "/Gallery/foto17.jpg", className: "md:col-span-2 h-[140px] lg:h-[180px]" },
        { id: 19, image: "/Gallery/foto18.jpg", className: "md:col-span-3 h-[140px] lg:h-[180px]" },
    ];

    return (
        <section ref={sectionRef} className="py-10 bg-white overflow-hidden">
            <div className="w-full px-8 lg:px-24">

                <div className="mb-10 text-center lg:text-left">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2" style={{ fontFamily: "'Caveat', cursive" }}>
                        Latar Cerita Gallery
                    </h2>
                </div>

                <div
                    ref={containerRef}
                    className="grid grid-cols-1 md:grid-cols-12 gap-2 lg:gap-3"
                >
                    {moments.map((moment) => (
                        <div
                            key={moment.id}
                            className={`gallery-item relative overflow-hidden group cursor-pointer shadow-sm ${moment.className}`}
                        >
                            <img
                                src={moment.image}
                                alt={`Moment ${moment.id}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MomentGallery;
