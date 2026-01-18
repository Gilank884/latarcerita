import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const team = [
    {
        name: "Andi Wijaya",
        role: "Founder & Lead Developer",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
    },
    {
        name: "Siti Rahma",
        role: "UI/UX Designer",
        image: "https://images.unsplash.com/photo-1573496359-7013119ac635?q=80&w=200&auto=format&fit=crop",
    },
    {
        name: "Budi Santoso",
        role: "Project Manager",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    },
    {
        name: "Lina Kusuma",
        role: "Content Strategist",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    }
];

const Team = () => {
    const sectionRef = useRef(null);
    const cardRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(cardRef.current, {
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
        if (el && !cardRef.current.includes(el)) {
            cardRef.current.push(el);
        }
    };

    return (
        <section ref={sectionRef} className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-semibold text-sky-500 uppercase tracking-wider mb-2">Tim Kami</h2>
                    <h3 className="text-3xl font-bold text-slate-900">Bertemu dengan Para Ahli</h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-12 max-w-3xl mx-auto">
                    {team.slice(0, 2).map((member, index) => (
                        <div key={index} ref={addToRefs} className="text-center group">
                            <div className="relative w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
                                <div className="absolute inset-0 bg-sky-600/0 group-hover:bg-sky-600/20 transition-colors z-10"></div>
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h4>
                            <p className="text-sky-600 font-medium text-sm">{member.role}</p>

                            {/* Social placeholder or small bio could go here */}
                            <div className="w-12 h-1 bg-sky-200 mx-auto mt-4 rounded-full group-hover:w-24 group-hover:bg-sky-500 transition-all duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
