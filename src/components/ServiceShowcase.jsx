import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Layout, Smartphone, Globe, Search, Menu, Bell, Home, User, Mail, ArrowRight } from 'lucide-react';

const ServiceShowcase = () => {
    const sectionRef = useRef(null);
    const landingRef = useRef(null);
    const webRef = useRef(null);
    const mobileRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                }
            });

            tl.from(landingRef.current, {
                x: -50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            })
                .from(webRef.current, {
                    x: 50,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out"
                }, "-=0.4")
                .from(mobileRef.current, {
                    x: -50,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out"
                }, "-=0.4");

            // Floating animations
            [landingRef.current, webRef.current, mobileRef.current].forEach((ref, index) => {
                gsap.to(ref, {
                    y: index % 2 === 0 ? -10 : 10,
                    duration: 3 + index,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: index * 0.5
                });
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-sm font-semibold text-sky-500 uppercase tracking-wider mb-2">Platform Compatibility</h2>
                    <h3 className="text-3xl font-bold text-slate-900">Digital Experience di Berbagai Perangkat</h3>
                </div>

                <div className="space-y-32">

                    {/* Company Profile Section */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div ref={landingRef} className="relative w-full">
                            <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                                {/* Browser Toolbar */}
                                <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 flex items-center gap-4">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="flex-1 bg-white border border-slate-200 rounded-md h-8 flex items-center px-3 text-xs text-slate-400">
                                        latarcerita.com
                                    </div>
                                </div>

                                {/* Company Profile Content Mockup */}
                                <div className="relative bg-white min-h-[350px]">
                                    {/* Navbar Mockup */}
                                    <div className="flex justify-between items-center p-6 border-b border-slate-50">
                                        <div className="h-6 w-24 bg-slate-800 rounded"></div>
                                        <div className="flex gap-4">
                                            <div className="h-4 w-12 bg-slate-200 rounded"></div>
                                            <div className="h-4 w-12 bg-slate-200 rounded"></div>
                                        </div>
                                    </div>
                                    {/* Hero Mockup */}
                                    <div className="p-8 text-center">
                                        <div className="h-8 w-3/4 bg-slate-900 rounded mx-auto mb-4"></div>
                                        <div className="h-8 w-1/2 bg-slate-900 rounded mx-auto mb-6"></div>
                                        <div className="h-4 w-2/3 bg-slate-200 rounded mx-auto mb-2"></div>
                                        <div className="h-4 w-2/3 bg-slate-200 rounded mx-auto mb-8"></div>
                                        <div className="flex justify-center gap-4">
                                            <div className="h-10 w-32 bg-sky-500 rounded-full"></div>
                                            <div className="h-10 w-32 border border-slate-200 rounded-full"></div>
                                        </div>
                                    </div>
                                    {/* Feature Grid Mockup */}
                                    <div className="grid grid-cols-3 gap-4 px-8 pb-8 mt-4">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="h-24 bg-slate-50 rounded-lg"></div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Label */}
                            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-slate-500 font-medium flex items-center gap-2">
                                <Globe size={20} /> Website Company Profile
                            </div>
                        </div>

                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-semibold uppercase tracking-wider mb-6">
                                <Globe size={14} /> Website Company Profile
                            </div>
                            <h4 className="text-3xl font-bold text-slate-900 mb-6">
                                Representasi Digital Identitas Perusahaan
                            </h4>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                Website profesional yang dirancang untuk membangun kredibilitas dan kepercayaan. Tampilkan visi, misi, dan keunggulan bisnis Anda kepada dunia dengan desain elegan dan informatif.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Desain responsif & elegan",
                                    "Optimasi SEO untuk visibilitas maksimal",
                                    "Struktur konten yang jelas & profesional",
                                    "Integrasi kontak & lokasi bisnis"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700">
                                        <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                                            <ArrowRight size={14} />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Web Application Section */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold uppercase tracking-wider mb-6">
                                <Layout size={14} /> Web Application
                            </div>
                            <h4 className="text-3xl font-bold text-slate-900 mb-6">
                                Dashboard Kuat untuk Manajemen Bisnis
                            </h4>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                Kelola seluruh operasional bisnis Anda melalui dashboard web yang komprehensif. Didesain untuk kenyamanan penggunaan di desktop dengan visualisasi data yang mendalam.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Akses mudah dari browser manapun",
                                    "Visualisasi data real-time",
                                    "Manajemen user dan permission yang detail",
                                    "Export laporan otomatis (PDF/Excel)"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700">
                                        <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                                            <ArrowRight size={14} />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div ref={webRef} className="relative w-full order-1 lg:order-2">
                            <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
                                {/* Browser Toolbar */}
                                <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 flex items-center gap-4">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="flex-1 bg-white border border-slate-200 rounded-md h-8 flex items-center px-3 text-xs text-slate-400">
                                        latarcerita.com/dashboard
                                    </div>
                                </div>

                                {/* Browser Content */}
                                <div className="p-6 grid grid-cols-4 gap-6 bg-slate-50/50 min-h-[300px]">
                                    {/* Sidebar */}
                                    <div className="col-span-1 space-y-3 hidden sm:block">
                                        <div className="h-2 w-20 bg-slate-200 rounded mb-6"></div>
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <div key={i} className="h-8 bg-white rounded border border-slate-100 w-full"></div>
                                        ))}
                                    </div>
                                    {/* Main Content */}
                                    <div className="col-span-4 sm:col-span-3 space-y-4">
                                        <div className="flex justify-between items-center mb-4">
                                            <div className="h-6 w-32 bg-slate-800 rounded"></div>
                                            <div className="h-8 w-24 bg-sky-500 rounded"></div>
                                        </div>
                                        <div className="grid grid-cols-3 gap-4 mb-4">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="h-24 bg-white rounded-lg border border-slate-200 p-4 shadow-sm">
                                                    <div className="h-8 w-8 bg-sky-100 rounded-full mb-2"></div>
                                                    <div className="h-2 w-16 bg-slate-100 rounded"></div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="h-40 bg-white rounded-lg border border-slate-200 p-4 shadow-sm flex items-end gap-2 justify-between px-8 pb-4">
                                            {[40, 60, 45, 70, 50, 80, 65].map((h, i) => (
                                                <div key={i} className="w-6 bg-indigo-500 rounded-t-sm" style={{ height: `${h}%` }}></div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Label */}
                            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-slate-500 font-medium flex items-center gap-2">
                                <Layout size={20} /> Web Application
                            </div>
                        </div>
                    </div>

                    {/* Mobile App Section */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div ref={mobileRef} className="relative flex justify-center lg:justify-end">
                            <div className="w-[280px] h-[580px] bg-slate-900 rounded-[2.5rem] border-8 border-slate-900 shadow-2xl overflow-hidden relative transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                                {/* Notch */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-slate-900 rounded-b-xl z-20"></div>

                                {/* Mobile Screen */}
                                <div className="w-full h-full bg-white text-slate-800 pt-10 px-4 pb-8 flex flex-col relative z-10">
                                    {/* Header */}
                                    <div className="flex justify-between items-center mb-6">
                                        <Menu size={20} className="text-slate-600" />
                                        <span className="font-bold text-slate-900">My App</span>
                                        <div className="relative">
                                            <Bell size={20} className="text-slate-600" />
                                            <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></div>
                                        </div>
                                    </div>

                                    {/* Greeting */}
                                    <div className="mb-6">
                                        <div className="text-sm text-slate-500">Welcome back,</div>
                                        <div className="text-2xl font-bold text-slate-900">Alex S.</div>
                                    </div>

                                    {/* Search */}
                                    <div className="bg-slate-100 rounded-full h-10 flex items-center px-4 mb-6">
                                        <Search size={16} className="text-slate-400 mr-2" />
                                        <div className="h-2 w-24 bg-slate-200 rounded"></div>
                                    </div>

                                    {/* Featured Card */}
                                    <div className="bg-gradient-to-br from-sky-500 to-indigo-600 rounded-2xl p-4 text-white mb-6 shadow-lg shadow-sky-500/20">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 bg-white/20 rounded-full backdrop-blur-sm"></div>
                                            <div>
                                                <div className="h-3 w-20 bg-white/30 rounded mb-1"></div>
                                                <div className="h-2 w-12 bg-white/20 rounded"></div>
                                            </div>
                                        </div>
                                        <div className="h-8 w-24 bg-white rounded-lg mt-2"></div>
                                    </div>

                                    {/* List Items */}
                                    <div className="space-y-3 flex-1 overflow-hidden">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-bold text-sm">Recent Activity</span>
                                            <span className="text-xs text-sky-600">See all</span>
                                        </div>
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-colors">
                                                <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-500">
                                                    <Smartphone size={18} />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="h-3 w-24 bg-slate-200 rounded mb-1.5"></div>
                                                    <div className="h-2 w-16 bg-slate-100 rounded"></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Bottom Nav */}
                                    <div className="mt-auto border-t border-slate-100 pt-4 flex justify-between px-4 text-slate-400">
                                        <div className="flex flex-col items-center gap-1 text-sky-600">
                                            <Home size={20} />
                                            <span className="text-[10px] font-medium">Home</span>
                                        </div>
                                        <Mail size={20} />
                                        <User size={20} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-600 text-xs font-semibold uppercase tracking-wider mb-6">
                                <Smartphone size={14} /> Mobile Apps
                            </div>
                            <h4 className="text-3xl font-bold text-slate-900 mb-6">
                                Akses Bisnis dalam Genggaman
                            </h4>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                Tetap terhubung dengan bisnis Anda di mana saja. Aplikasi mobile native (iOS & Android) memberikan performa cepat dan pengalaman pengguna yang intuitif.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Notifikasi Real-time",
                                    "Akses Offline Mode",
                                    "Integrasi GPS & Kamera",
                                    "UI/UX Native yang Responsif"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700">
                                        <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                                            <ArrowRight size={14} />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceShowcase;
