import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import {
    Code,
    Smartphone,
    ArrowRight,
    X,
    MessageCircle,
    ExternalLink,
    CheckCircle2,
    Globe,
    Search,
    Menu,
    Bell,
    Home,
    User,
    Mail,
    ChevronRight,
    Zap,
    ShieldCheck,
    Cpu,
    Monitor
} from 'lucide-react';

// --- Reusable Mockup Components (Pure Code) ---

const BrowserMockup = ({ type = "dashboard", color = "indigo" }) => {
    const colorClass = color === "indigo" ? "bg-indigo-600" : "bg-sky-500";
    return (
        <div className="relative group w-full max-w-4xl mx-auto">
            <div className={`absolute -inset-2 bg-gradient-to-r ${color === 'indigo' ? 'from-indigo-500 to-purple-600' : 'from-sky-400 to-indigo-500'} rounded-3xl blur opacity-10 group-hover:opacity-30 transition duration-1000`}></div>
            <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transform group-hover:-translate-y-2 transition-all duration-700">
                <div className="bg-slate-50 border-b border-slate-200 px-5 py-4 flex items-center gap-4">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex-1 bg-white border border-slate-200 rounded-lg h-7 flex items-center px-4 text-[10px] text-slate-400 font-mono italic">
                        https://latarcerita.dev/preview-system
                    </div>
                </div>
                <div className="relative bg-white min-h-[350px]">
                    {type === "dashboard" ? (
                        <div className="p-6 grid grid-cols-5 gap-6 bg-slate-50/50 min-h-[350px]">
                            <div className="col-span-1 space-y-4 hidden md:block">
                                <div className="h-2 w-16 bg-slate-200 rounded mb-6"></div>
                                {[1, 2, 3, 4, 5, 6].map(i => (
                                    <div key={i} className="h-7 bg-white rounded-lg border border-slate-100 w-full flex items-center px-3 shadow-sm">
                                        <div className={`w-2 h-2 rounded-full ${colorClass} mr-2`}></div>
                                        <div className="h-1.5 w-10 bg-slate-100 rounded"></div>
                                    </div>
                                ))}
                            </div>
                            <div className="col-span-5 md:col-span-4 space-y-6">
                                <div className="flex justify-between items-center">
                                    <div className="h-6 w-48 bg-slate-800 rounded-lg opacity-90"></div>
                                    <div className={`h-10 w-28 ${colorClass} rounded-xl shadow-lg shadow-indigo-500/10`}></div>
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="h-24 bg-white rounded-2xl border border-slate-100 p-4 shadow-sm flex flex-col justify-between">
                                            <div className="h-2 w-12 bg-slate-100 rounded"></div>
                                            <div className="h-6 w-20 bg-slate-800 rounded-md"></div>
                                        </div>
                                    ))}
                                </div>
                                <div className="h-40 bg-white rounded-2xl border border-slate-100 p-8 shadow-sm flex items-end justify-between gap-3 px-12 pb-6">
                                    {[35, 65, 50, 85, 55, 95, 45, 100, 70, 80].map((h, i) => (
                                        <div key={i} className={`w-full max-w-[12px] ${colorClass} rounded-t-lg opacity-80`} style={{ height: `${h}%` }}></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="min-h-[350px] bg-white flex flex-col">
                            <div className="h-16 w-full border-b border-slate-50 flex justify-between items-center px-10">
                                <div className="h-6 w-32 bg-slate-900 rounded-lg"></div>
                                <div className="flex gap-8">
                                    {[1, 2, 3, 4].map(i => <div key={i} className="h-2 w-12 bg-slate-200 rounded-full"></div>)}
                                </div>
                            </div>
                            <div className="flex-1 p-16 text-center space-y-8 flex flex-col justify-center">
                                <div className="space-y-4">
                                    <div className="h-10 w-4/5 bg-slate-900 rounded-2xl mx-auto"></div>
                                    <div className="h-10 w-3/5 bg-slate-900 rounded-2xl mx-auto mb-10"></div>
                                </div>
                                <p className="h-3 w-2/3 bg-slate-100 rounded-full mx-auto"></p>
                                <div className="flex justify-center gap-5 pt-8">
                                    <div className={`h-12 w-40 ${colorClass} rounded-full shadow-2xl`}></div>
                                    <div className="h-12 w-40 border-2 border-slate-200 rounded-full"></div>
                                </div>
                                <div className="grid grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto w-full">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className={`h-28 ${color === 'indigo' ? 'bg-indigo-50/30' : 'bg-sky-50/30'} rounded-3xl border border-slate-100 shadow-inner`}></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const MobileMockup = ({ color = "sky", rotate = "rotate-0" }) => {
    const colorClass = color === "sky" ? "bg-sky-500" : "bg-indigo-600";
    return (
        <div className={`relative group mx-auto max-w-[300px] h-[600px] ${rotate} hover:rotate-0 transition-all duration-700`}>
            <div className={`absolute -inset-2 bg-gradient-to-br ${color === 'sky' ? 'from-sky-400 to-indigo-600' : 'from-indigo-600 to-purple-600'} rounded-[3.5rem] blur opacity-10 group-hover:opacity-30 transition duration-1000`}></div>
            <div className="w-full h-full bg-slate-950 rounded-[3rem] border-[10px] border-slate-950 shadow-2xl overflow-hidden relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-32 bg-slate-950 rounded-b-2xl z-20"></div>
                <div className="w-full h-full bg-white pt-12 px-6 pb-8 flex flex-col relative z-10">
                    <div className="flex justify-between items-center mb-10">
                        <Menu size={20} className="text-slate-400" />
                        <div className="h-5 w-20 bg-slate-100 rounded-full"></div>
                        <Bell size={20} className="text-slate-400" />
                    </div>
                    <div className="flex-1 space-y-8">
                        <div className="space-y-3">
                            <div className="h-5 w-24 bg-slate-200 rounded-md"></div>
                            <div className="h-10 w-full bg-slate-900 rounded-xl"></div>
                        </div>
                        <div className={`${colorClass} rounded-[2rem] p-6 text-white shadow-2xl shadow-sky-500/20`}>
                            <div className="h-4 w-20 bg-white/20 rounded-md mb-6"></div>
                            <div className="h-8 w-48 bg-white rounded-xl"></div>
                            <div className="flex justify-between items-end mt-10">
                                <div className="h-5 w-24 bg-white/20 rounded-full"></div>
                                <div className="h-10 w-10 bg-black/20 rounded-full"></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="h-28 bg-slate-50 rounded-3xl border border-slate-100"></div>
                            <div className="h-28 bg-slate-50 rounded-3xl border border-slate-100"></div>
                        </div>
                        <div className="space-y-4">
                            {[1].map(i => (
                                <div key={i} className="flex items-center gap-5 p-4 rounded-2xl bg-white border border-slate-100 shadow-md">
                                    <div className={`w-12 h-12 rounded-2xl ${colorClass} flex items-center justify-center text-white shrink-0`}>
                                        <Zap size={22} fill="currentColor" />
                                    </div>
                                    <div className="flex-1 space-y-2.5">
                                        <div className="h-2.5 w-32 bg-slate-200 rounded-full"></div>
                                        <div className="h-2 w-16 bg-slate-100 rounded-full"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between px-4 text-slate-300">
                        <Home size={24} className={color === 'sky' ? 'text-sky-500' : 'text-indigo-600'} />
                        <Search size={24} />
                        <Mail size={24} />
                        <User size={24} />
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- DATA ---

const SERVICE_SECTIONS = [
    {
        id: "web-app",
        title: "Web Application",
        subtitle: "SaaS & Dashboard System",
        desc: "Membangun sistem operasional bisnis yang kompleks dengan arsitektur yang aman, scalable, dan performa tinggi untuk efisiensi tim Anda.",
        mockup: <BrowserMockup type="dashboard" color="indigo" />,
        tech: ["React.js", "Node.js", "PostgreSQL", "Google Cloud", "Redis", "Docker"],
        advantages: [
            "Otomatisasi Laporan & Workflow",
            "Manajemen User & Hak Akses Detail",
            "Akses Real-time dari Mana Saja",
            "Keamanan Data Berlapis"
        ],
        possibilities: [
            "Custom ERP & CRM Enterprise",
            "SaaS (Software as a Service)",
            "System POS & Inventory",
            "Platform Fintech & Marketplace"
        ],
        theme: "indigo"
    },
    {
        id: "company-profile",
        title: "Company Profile",
        subtitle: "Modern Business Website",
        desc: "Website premium yang dirancang untuk membangun kredibilitas brand, menyampaikan pesan perusahaan dengan visual yang memukau.",
        mockup: <BrowserMockup type="landing" color="sky" />,
        tech: ["Next.js", "GSAP Animation", "Tailwind CSS", "Strapi CMS", "Framer Motion"],
        advantages: [
            "Desain UI/UX Eksklusif & Modern",
            "Optimasi SEO & Google Ranking",
            "Interaksi & Animasi yang Halus",
            "Kecepatan Loading Maksimal"
        ],
        possibilities: [
            "Corporate Brand Website",
            "High-end Landing Pages",
            "Professional Portfolios",
            "Educational & NGO Platforms"
        ],
        theme: "sky"
    },
    {
        id: "mobile-app",
        title: "Mobile Application",
        subtitle: "iOS & Android Solutions",
        desc: "Aplikasi mobile dengan performa native yang mulus, dirancang untuk memudahkan akses pelanggan Anda langsung dari genggaman.",
        mockup: <MobileMockup color="sky" />,
        tech: ["Flutter", "Dart", "Supabase", "Firebase", "App Store & Play Store"],
        advantages: [
            "Performa Native & Ringan",
            "Fitur Push Notifications",
            "Integrasi GPS & Hardware Phone",
            "UX yang Intuifit & Responsif"
        ],
        possibilities: [
            "Aplikasi Mobile E-Commerce",
            "Sistem Keanggotaan & Loyalty",
            "Aplikasi Kurir & Operasional",
            "Sistem Pembayaran Digital"
        ],
        theme: "amber"
    }
];

const PortfolioPage = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Hero Animation
            const heroTl = gsap.timeline();
            heroTl.from(".hero-headline", {
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power4.out"
            })
                .from(".hero-sub", {
                    y: 30,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out"
                }, "-=0.6");

            // Section Animations - Robust Timeline approach
            SERVICE_SECTIONS.forEach(service => {
                const sectionSelector = `#${service.id}`;

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionSelector,
                        start: "top 75%", // Trigger when section is 75% from top
                    }
                });

                tl.from(`${sectionSelector} .section-header`, {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.out"
                })
                    .from(`${sectionSelector} .mockup-wrapper`, {
                        y: 50,
                        opacity: 0,
                        duration: 1,
                        ease: "power2.out"
                    }, "-=0.4")
                    .fromTo(`${sectionSelector} .info-card`,
                        { y: 40, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.8,
                            stagger: 0.15,
                            ease: "power2.out",
                            clearProps: "all"
                        },
                        "-=0.6"
                    );
            });
        }, containerRef);

        // Refresh ScrollTrigger after a slight delay to ensure all layouts are rendered
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 500);

        return () => {
            ctx.revert();
            clearTimeout(timer);
        };
    }, []);

    return (
        <div ref={containerRef} className="bg-white min-h-screen pt-20">
            {/* 1. Header Section */}
            <section className="py-24 lg:py-40 px-6 max-w-7xl mx-auto text-center">
                <div className="hero-headline inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                    Portfolio & Solutions
                </div>
                <h1 className="hero-headline text-5xl lg:text-8xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tighter">
                    Crafting <span className="text-sky-500 underline decoration-indigo-500/20">Solutions</span> <br /> That Scale.
                </h1>
                <p className="hero-sub text-lg lg:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed mb-12">
                    Kami hadir untuk menjembatani ide besar Anda dengan eksekusi teknologi yang tepat, fokus pada hasil yang berdampak dan pengalaman pengguna yang luar biasa.
                </p>
            </section>

            {/* 2. Service Sections */}
            <div className="space-y-40 pb-40">
                {SERVICE_SECTIONS.map((service, idx) => (
                    <section key={service.id} id={service.id} className="service-section px-6 max-w-7xl mx-auto overflow-hidden">
                        {/* Title Part */}
                        <div className="section-header flex flex-col md:flex-row md:items-end justify-between mb-20">
                            <div>
                                <span className={`font-bold tracking-[0.3em] uppercase text-xs mb-4 block ${service.theme === 'indigo' ? 'text-indigo-600' : service.theme === 'sky' ? 'text-sky-500' : 'text-amber-500'}`}>
                                    {service.subtitle}
                                </span>
                                <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">{service.title}</h2>
                            </div>
                            <p className="text-slate-500 md:max-w-md mt-6 md:mt-0 text-lg leading-relaxed">{service.desc}</p>
                        </div>

                        {/* Mockup Visual */}
                        <div className="mockup-wrapper mb-24">
                            {service.mockup}
                        </div>

                        {/* Deep-Dive Content Grid */}
                        <div className="info-grid grid md:grid-cols-3 gap-12 lg:gap-20">
                            {/* Tech Section */}
                            <div className="info-card animate-item bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all duration-500">
                                <div className={`w-14 h-14 rounded-2xl ${service.theme === 'indigo' ? 'bg-indigo-600' : service.theme === 'sky' ? 'bg-sky-500' : 'bg-amber-500'} text-white flex items-center justify-center mb-10 shadow-lg`}>
                                    <Cpu size={28} />
                                </div>
                                <h4 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">Tech & Tools</h4>
                                <div className="flex flex-wrap gap-2.5">
                                    {service.tech.map((t, i) => (
                                        <span key={i} className="px-4 py-2.5 bg-white rounded-xl text-xs font-bold text-slate-700 border border-slate-200 shadow-sm">{t}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Advantages Section */}
                            <div className="info-card animate-item bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
                                <div className={`w-14 h-14 rounded-2xl ${service.theme === 'indigo' ? 'bg-indigo-600' : service.theme === 'sky' ? 'bg-sky-500' : 'bg-amber-500'} text-white flex items-center justify-center mb-10 shadow-lg`}>
                                    <ShieldCheck size={28} />
                                </div>
                                <h4 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">Keunggulan</h4>
                                <ul className="space-y-4">
                                    {service.advantages.map((adv, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-600 font-bold text-sm">
                                            <div className={`w-2 h-2 rounded-full ${service.theme === 'indigo' ? 'bg-indigo-500' : service.theme === 'sky' ? 'bg-sky-500' : 'bg-amber-500'}`}></div> {adv}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Possibilities Section */}
                            <div className="info-card animate-item bg-slate-900 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                <div className={`w-14 h-14 rounded-2xl ${service.theme === 'indigo' ? 'bg-indigo-600' : service.theme === 'sky' ? 'bg-sky-500' : 'bg-amber-500'} text-white flex items-center justify-center mb-10 shadow-lg`}>
                                    <Monitor size={28} />
                                </div>
                                <h4 className="text-2xl font-black text-white mb-6 uppercase tracking-tight relative z-10">Apa yang bisa dibuat?</h4>
                                <ul className="space-y-5 relative z-10">
                                    {service.possibilities.map((pos, i) => (
                                        <li key={i} className="flex items-center justify-between text-slate-400 group-hover:text-white transition-colors">
                                            <span className="text-sm font-bold">{pos}</span>
                                            <ChevronRight size={16} className="text-sky-500" />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </section>
                ))}
            </div>

            {/* 3. Footer CTA Section */}
            <section className="py-24 px-6 overflow-hidden">
                <div className="max-w-6xl mx-auto bg-gradient-to-br from-slate-900 to-indigo-950 rounded-[4rem] p-16 md:p-32 text-center text-white relative shadow-2xl overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.1),transparent)]"></div>
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tighter leading-tight">Mulai Transformasi <br /> <span className="text-sky-400">Digital Anda Sekarang?</span></h2>
                        <p className="text-slate-400 text-lg md:text-xl mb-16 max-w-2xl mx-auto leading-relaxed font-medium">
                            Diskusikan kebutuhan unik bisnis Anda dan dapatkan solusi berbasis teknologi yang didesain khusus untuk Anda.
                        </p>
                        <div className="flex flex-wrap gap-6 justify-center">
                            <a href="https://wa.me/6282332901726" className="px-12 py-5 bg-sky-500 text-white font-black rounded-full hover:bg-sky-400 transition-all shadow-2xl shadow-sky-500/20 flex items-center gap-3">
                                <MessageCircle size={24} /> Hubungi Kami (WA)
                            </a>
                            <a href="mailto:latarcerita.official@gmail.com" className="px-12 py-5 bg-white/5 border border-white/10 text-white font-black rounded-full hover:bg-white/10 transition-all backdrop-blur-md">
                                Kirim Email Brief
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PortfolioPage;
