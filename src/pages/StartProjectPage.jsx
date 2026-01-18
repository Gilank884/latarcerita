import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import {
    Layout,
    Monitor,
    Smartphone,
    Check,
    ArrowRight,
    ChevronLeft,
    MessageCircle,
    Zap,
    Globe,
    ShieldCheck,
    Rocket,
    Send,
    ExternalLink,
    Search,
    Bell,
    Home,
    User,
    Mail,
    Menu,
    ChevronRight
} from 'lucide-react';

// --- Reusable Mockup Components (internal to this page for modularity) ---
const BrowserMockup = ({ type = "dashboard", color = "indigo" }) => {
    const colorClass = color === "indigo" ? "bg-indigo-600" : "bg-sky-500";
    return (
        <div className="relative w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
            <div className="bg-slate-50 border-b border-slate-200 px-3 py-2 flex items-center gap-2">
                <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 bg-white border border-slate-200 rounded h-4 flex items-center px-2 text-[6px] text-slate-300 font-mono italic">
                    https://latarcerita.dev/preview
                </div>
            </div>
            <div className="p-3 bg-white min-h-[120px]">
                {type === "dashboard" ? (
                    <div className="grid grid-cols-4 gap-2">
                        <div className="col-span-1 space-y-1">
                            {[1, 2, 3, 4].map(i => <div key={i} className="h-4 bg-slate-50 rounded w-full"></div>)}
                        </div>
                        <div className="col-span-3 space-y-2">
                            <div className="flex justify-between">
                                <div className="h-4 w-16 bg-slate-800 rounded"></div>
                                <div className={`h-4 w-8 ${colorClass} rounded`}></div>
                            </div>
                            <div className="grid grid-cols-3 gap-1">
                                {[1, 2, 3].map(i => <div key={i} className="h-8 bg-slate-50 rounded"></div>)}
                            </div>
                            <div className="h-10 bg-slate-100 rounded w-full"></div>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <div className="h-4 w-12 bg-slate-900 rounded"></div>
                            <div className="flex gap-2">
                                <div className="h-1 w-4 bg-slate-200 rounded"></div>
                                <div className="h-1 w-4 bg-slate-200 rounded"></div>
                            </div>
                        </div>
                        <div className="h-10 w-4/5 bg-slate-900 rounded mx-auto mt-4"></div>
                        <div className="h-2 w-1/2 bg-slate-100 rounded-full mx-auto"></div>
                        <div className="flex justify-center gap-2">
                            <div className={`h-5 w-12 ${colorClass} rounded-full`}></div>
                            <div className="h-5 w-12 border border-slate-200 rounded-full"></div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const MobileMockupSmall = ({ color = "sky" }) => {
    const colorClass = color === "sky" ? "bg-sky-500" : "bg-indigo-600";
    return (
        <div className="relative mx-auto w-[120px] h-[240px] bg-slate-950 rounded-[2rem] border-[4px] border-slate-950 shadow-xl overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 w-12 bg-slate-950 rounded-b-lg z-20"></div>
            <div className="w-full h-full bg-white pt-6 px-3 flex flex-col relative z-10">
                <div className="flex justify-between items-center mb-4">
                    <div className="h-4 w-4 bg-slate-100 rounded-full"></div>
                    <div className="h-4 w-10 bg-slate-100 rounded-full"></div>
                </div>
                <div className="space-y-4">
                    <div className="h-5 w-full bg-slate-900 rounded-lg"></div>
                    <div className={`${colorClass} rounded-2xl p-3 text-white`}>
                        <div className="h-2 w-8 bg-white/20 rounded mb-2"></div>
                        <div className="h-4 w-16 bg-white rounded"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="h-10 bg-slate-50 rounded-xl border border-slate-100"></div>
                        <div className="h-10 bg-slate-50 rounded-xl border border-slate-100"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SERVICE_CARDS = [
    {
        id: 'web-profile',
        title: "Website Company Profile",
        mockup: <BrowserMockup type="landing" color="sky" />,
        desc: "Visual memukau untuk membangun kredibilitas brand Anda.",
        color: "bg-sky-500",
        shadow: "shadow-sky-500/10",
        accent: "text-sky-600"
    },
    {
        id: 'web-app',
        title: "Web Application / Sistem",
        mockup: <BrowserMockup type="dashboard" color="indigo" />,
        desc: "Solusi otomatisasi workflow & manajemen operasional bisnis.",
        color: "bg-indigo-600",
        shadow: "shadow-indigo-600/10",
        accent: "text-indigo-600"
    },
    {
        id: 'mobile-app',
        title: "Mobile Application",
        mockup: <MobileMockupSmall color="sky" />,
        desc: "Aplikasi Android & iOS native langsung di tangan pelanggan.",
        color: "bg-amber-500",
        shadow: "shadow-amber-500/10",
        accent: "text-amber-600"
    }
];

const PACKAGES = {
    'web-profile': [
        { id: 'basic', name: 'Paket Awal', priceText: '1 - 2,5 Juta', price: 1000000, features: ['Single Page / Landing Page Responsif', 'Setup Domain & Hosting 1 Tahun', 'Integrasi WhatsApp & Sosial Media', 'Optimasi Kecepatan Basic', 'Revisi Desain Minor 2x'] },
        { id: 'pro', name: 'Paket Berkembang', priceText: '3 - 5 Juta', price: 3000000, features: ['Multi-page (Beranda, Layanan, Kontak, dll)', 'Desain Modern & Custom Branding', 'Sistem Manajemen Konten (CMS)', 'SEO Setup Dasar (Google Indexing)', 'Revisi Desain Minor 3x'] },
        { id: 'enterprise', name: 'Paket Profesional', priceText: '6 - 10 Juta', price: 6000000, features: ['Desain UI/UX Eksklusif & Animasi', 'Fitur Blog / Artikel / Galeri Dinamis', 'Optimasi Kecepatan & Keamanan Lanjutan', 'Analytics Dashboard Terintegrasi', 'Prioritas Support & Maintenance 1 Bulan'] }
    ],
    'web-app': [
        { id: 'basic', name: 'Paket Core', priceText: '5 - 10 Juta', price: 5000000, features: ['Manajemen Data CRUD Sederhana', 'Autentikasi User (Login/Register)', 'Dashboard Admin Basic', 'Export Data (Excel/PDF)', 'Setup Database Relasional'] },
        { id: 'pro', name: 'Paket Scale', priceText: '10 - 25 Juta', price: 10000000, features: ['Manajemen Role & Akses Kompleks', 'Integrasi API Pihak Ketiga', 'Laporan Statistik & Grafik Dinamis', 'Sistem Notifikasi Realtime', 'Deployment VPS & Security Hardening'] },
        { id: 'enterprise', name: 'Paket Prime', priceText: '30 Juta+', price: 30000000, features: ['Arsitektur Microservices Scalable', 'Multi-tenancy (SaaS Architecture)', 'Payment Gateway & Billing System', 'Audit Log & Keamanan Tingkat Lanjut', 'SLA Support & Dedicated Server Setup'] }
    ],
    'mobile-app': [
        { id: 'basic', name: 'Paket Spark', priceText: '8 - 12 Juta', price: 8000000, features: ['Tampilan UI Mobile-First Modern', 'Fitur Informasi Statis & Dinamis', 'Push Notification Dasar', 'Publish ke Google Play Store', 'API Integration Basic'] },
        { id: 'pro', name: 'Paket Boost', priceText: '15 - 30 Juta', price: 15000000, features: ['User Account & Profile Management', 'Fitur Transaksi / Order', 'Integrasi Maps / Lokasi GPS', 'Chat System / Messaging', 'Publish Play Store & App Store'] },
        { id: 'enterprise', name: 'Paket Prime', priceText: '40 Juta+', price: 40000000, features: ['Native / Hybrid High-Perf', 'Algoritma Kustom / AI Integration', 'Realtime Tracking & Complex Logic', 'Payment Gateway Integration', 'Maintenance & Update Berkala'] }
    ]
};

const ADDONS = [
    { id: 'api', name: 'Integrasi API Pihak ke-3', priceText: '1 - 3 Juta', price: 1000000 },
    { id: 'payment', name: 'Payment Gateway Integration', priceText: '2 - 5 Juta', price: 2000000 },
    { id: 'chat', name: 'Realtime Chat / Notif', priceText: '2 - 6 Juta', price: 2000000 },
    { id: 'seo', name: 'Full SEO Optimization', priceText: 'Kontak Kami', price: 0 },
];

const StartProjectPage = () => {
    const navigate = useNavigate();
    const containerRef = useRef(null);
    const cardRefs = useRef([]);
    const titleRef = useRef(null);
    const [phase, setPhase] = useState('intro'); // intro | selection | form
    const [step, setStep] = useState(1);
    const [projectType, setProjectType] = useState(null);
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [selectedAddons, setSelectedAddons] = useState([]);
    const [formData, setFormData] = useState({ name: '', company: '', email: '', brief: '' });

    // --- ANIMATIONS ---

    useEffect(() => {
        if (phase === 'intro') {
            const tl = gsap.timeline();

            // 1. Initial Reset
            gsap.set(cardRefs.current, { y: 60, opacity: 0, scale: 0.95 });
            gsap.set(titleRef.current, { scale: 0.8, opacity: 0 });

            // 2. Card Stagger
            tl.to(cardRefs.current, {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1,
                stagger: 0.2,
                ease: "power4.out"
            });

            // 3. Main Text Reveal - delayed after cards
            tl.to(titleRef.current, {
                scale: 1,
                opacity: 1,
                duration: 1.5,
                ease: "back.out(1.2)"
            }, "+=0.3");

            // 4. Transition to Selection - Clear and smooth
            tl.to(".intro-view", {
                opacity: 0,
                y: -50,
                duration: 0.8,
                ease: "power2.inOut",
                delay: 2.5, // Time to read the text
                onComplete: () => setPhase('selection')
            });
        }
    }, [phase]);

    useEffect(() => {
        if (phase === 'selection') {
            gsap.from(".selection-anim", {
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            });
        }
    }, [phase]);

    // --- LOGIC ---

    const formatPrice = (num) => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(num);
    };

    const handleSelectType = (id) => {
        setProjectType(id);
        setPhase('form');
        setStep(1);
    };

    const toggleAddon = (addon) => {
        if (selectedAddons.find(a => a.id === addon.id)) {
            setSelectedAddons(selectedAddons.filter(a => a.id !== addon.id));
        } else {
            setSelectedAddons([...selectedAddons, addon]);
        }
    };

    const calculateTotal = () => {
        let total = selectedPackage ? selectedPackage.price : 0;
        selectedAddons.forEach(a => total += a.price);
        return total;
    };

    const reset = () => {
        setPhase('selection');
        setStep(1);
        setProjectType(null);
        setSelectedPackage(null);
        setSelectedAddons([]);
    };

    // --- COMPONENTS ---

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
                        <div className="text-center">
                            <h4 className="text-2xl font-black text-slate-900 mb-2">Pilih Paket Layanan</h4>
                            <p className="text-slate-500">Sesuaikan dengan kapasitas dan target bisnis Anda.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {PACKAGES[projectType].map((pkg) => (
                                <div
                                    key={pkg.id}
                                    onClick={() => setSelectedPackage(pkg)}
                                    className={`p-8 rounded-[2rem] border-2 cursor-pointer transition-all duration-300 flex flex-col items-center text-center ${selectedPackage?.id === pkg.id ? 'border-sky-500 bg-sky-50/50 ring-4 ring-sky-500/10' : 'border-slate-100 bg-white hover:border-slate-200 shadow-sm'}`}
                                >
                                    <h5 className="text-xl font-bold text-slate-900 mb-2">{pkg.name}</h5>
                                    <p className="text-2xl font-black text-sky-600 mb-6">{pkg.priceText}</p>
                                    <div className="h-px w-10 bg-slate-200 mb-6"></div>
                                    <ul className="space-y-3 mb-8 text-sm text-slate-500 font-medium">
                                        {pkg.features.map((f, i) => <li key={i} className="flex items-center gap-2 justify-center"><Check size={14} className="text-emerald-500" /> {f}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
                        <div className="text-center">
                            <h4 className="text-2xl font-black text-slate-900 mb-2">Fitur Tambahan (Opsional)</h4>
                            <p className="text-slate-500">Tingkatkan performa proyek Anda dengan fitur unggulan kami.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                            {ADDONS.map((addon) => (
                                <div
                                    key={addon.id}
                                    onClick={() => toggleAddon(addon)}
                                    className={`p-6 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between ${selectedAddons.find(a => a.id === addon.id) ? 'border-indigo-500 bg-indigo-50/50' : 'border-slate-100 bg-white shadow-sm'}`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${selectedAddons.find(a => a.id === addon.id) ? 'bg-indigo-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
                                            <Zap size={18} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-800 text-sm">{addon.name}</p>
                                            <p className="text-xs text-slate-500">+{addon.priceText}</p>
                                        </div>
                                    </div>
                                    {selectedAddons.find(a => a.id === addon.id) && <Check size={20} className="text-indigo-600" />}
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
                        <div className="text-center">
                            <h4 className="text-2xl font-black text-slate-900 mb-2">Informasi Kontak</h4>
                            <p className="text-slate-500">Beri tahu kami siapa Anda dan visi singkat proyek ini.</p>
                        </div>
                        <div className="max-w-xl mx-auto grid gap-5">
                            <input
                                type="text" placeholder="Nama Lengkap"
                                value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-sky-500 focus:bg-white outline-none transition-all font-medium"
                            />
                            <input
                                type="text" placeholder="Nama Perusahaan (Optional)"
                                value={formData.company} onChange={e => setFormData({ ...formData, company: e.target.value })}
                                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-sky-500 focus:bg-white outline-none transition-all font-medium"
                            />
                            <input
                                type="email" placeholder="Alamat Email"
                                value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-sky-500 focus:bg-white outline-none transition-all font-medium"
                            />
                            <textarea
                                placeholder="Jelaskan singkat kebutuhan proyek Anda..."
                                rows={4}
                                value={formData.brief} onChange={e => setFormData({ ...formData, brief: e.target.value })}
                                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-sky-500 focus:bg-white outline-none transition-all font-medium"
                            />
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div className="space-y-8 animate-in fade-in zoom-in-95 duration-700">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 scale-110 animate-bounce">
                                <Check size={40} />
                            </div>
                            <h4 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">Estimasi Proyek Berhasil Dihitung!</h4>
                            <p className="text-slate-500 max-w-md mx-auto">Terima kasih telah melengkapi data. Kami siap membantu mewujudkan proyek digital Anda.</p>
                        </div>

                        <div className="max-w-2xl mx-auto bg-slate-50 rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-sm">
                            <div className="bg-slate-900 p-8 text-white relative">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl"></div>
                                <div className="flex justify-between items-center relative z-10">
                                    <div>
                                        <p className="text-sky-400 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Estimasi Mulai Dari</p>
                                        <h2 className="text-4xl font-black tracking-tight">{formatPrice(calculateTotal())}</h2>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-slate-400 text-xs font-bold uppercase mb-1">Status Proyek</p>
                                        <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-black tracking-widest uppercase">Planning Phase</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 space-y-6">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Layanan & Paket:</span>
                                    <span className="text-slate-900 font-black">{SERVICE_CARDS.find(c => c.id === projectType)?.title} - {selectedPackage?.name}</span>
                                </div>
                                {selectedAddons.length > 0 && (
                                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200">
                                        {selectedAddons.map(a => (
                                            <span key={a.id} className="px-3 py-1.5 bg-white border border-slate-100 rounded-lg text-[10px] font-bold text-slate-600 flex items-center gap-1.5 shadow-sm">
                                                <Zap size={10} className="text-indigo-500" /> {a.name}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div ref={containerRef} className="bg-white min-h-screen relative overflow-hidden flex flex-col items-center justify-center p-6">

            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.05),transparent)] pointer-events-none"></div>

            {/* Interactive Floating Background Elements */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-sky-200/20 rounded-full blur-[50px] animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-indigo-200/20 rounded-full blur-[70px] animate-pulse delay-700"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-sky-50/10 via-white/0 to-indigo-50/10 -z-10"></div>

            <button
                onClick={() => navigate('/')}
                className="absolute top-10 left-10 w-12 h-12 bg-white border border-slate-100 rounded-full flex items-center justify-center text-slate-800 hover:bg-slate-50 transition-all shadow-sm z-50 group"
            >
                <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            </button>

            {phase === 'intro' && (
                <div className="max-w-7xl w-full flex flex-col items-center intro-view py-20 px-10">
                    <div className="grid lg:grid-cols-3 gap-10 w-full mb-20">
                        {SERVICE_CARDS.map((card, i) => (
                            <div
                                key={card.id}
                                ref={el => cardRefs.current[i] = el}
                                className={`p-10 rounded-[3.5rem] bg-white border border-slate-100 shadow-2xl ${card.shadow} flex flex-col items-center text-center group hover:-translate-y-4 transition-all duration-700 cursor-default opacity-0 scale-95`}
                            >
                                <div className="w-full mb-10 transform group-hover:scale-105 transition-transform duration-700">
                                    {card.mockup}
                                </div>
                                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 ${card.accent} text-[10px] font-black uppercase tracking-widest mb-4`}>
                                    <Zap size={12} className="fill-current" /> {card.title}
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight leading-tight">{card.title}</h3>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-[200px]">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {phase === 'selection' && (
                <div className="max-w-7xl w-full flex flex-col items-center py-20 px-6">
                    <div className="text-center mb-16 selection-anim">
                        <h2 className="text-sm font-black text-sky-500 uppercase tracking-[0.3em] mb-4">Langkah Pertama</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Pilih Kategori <span className="text-slate-400">Proyek Anda</span></h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 w-full">
                        {SERVICE_CARDS.map((card) => (
                            <div
                                key={card.id}
                                onClick={() => handleSelectType(card.id)}
                                className="group relative selection-anim cursor-pointer"
                            >
                                <div className={`absolute -inset-2 bg-gradient-to-br ${card.color === 'bg-sky-500' ? 'from-sky-400 to-indigo-500' : card.color === 'bg-indigo-600' ? 'from-indigo-600 to-purple-600' : 'from-amber-400 to-orange-600'} rounded-[3rem] blur-xl opacity-0 group-hover:opacity-20 transition duration-700`}></div>

                                <div className="relative bg-white border border-slate-100 p-8 rounded-[3rem] shadow-xl hover:-translate-y-4 transition-all duration-700 flex flex-col h-full">
                                    <div className="w-full mb-10 overflow-hidden rounded-2xl">
                                        {card.mockup}
                                    </div>
                                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 ${card.accent} text-[9px] font-black uppercase tracking-widest mb-4 w-fit`}>
                                        <Zap size={10} className="fill-current" /> Premium Solution
                                    </div>
                                    <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight leading-none group-hover:text-sky-600 transition-colors">
                                        {card.title}
                                    </h4>
                                    <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 flex-1">
                                        {card.desc}
                                    </p>
                                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Pilih Kategori</span>
                                        <div className={`w-10 h-10 rounded-full ${card.color} text-white flex items-center justify-center shadow-lg transform group-hover:rotate-45 transition-transform duration-500`}>
                                            <ArrowRight size={18} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {phase === 'form' && (
                <div className="max-w-5xl w-full bg-white/50 backdrop-blur-3xl rounded-[4rem] border border-white/80 shadow-2xl p-8 md:p-16 relative mt-10">

                    {/* Stepper Progress */}
                    <div className="flex justify-center gap-4 mb-16">
                        {[1, 2, 3, 4].map((s) => (
                            <div key={s} className="flex items-center gap-4">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black transition-all duration-500 ${step >= s ? 'bg-slate-900 text-white shadow-lg' : 'bg-slate-100 text-slate-300'}`}>
                                    {step > s ? <Check size={18} /> : s}
                                </div>
                                {s < 4 && <div className={`w-8 h-1 rounded-full transition-all duration-500 ${step > s ? 'bg-slate-900' : 'bg-slate-100'}`}></div>}
                            </div>
                        ))}
                    </div>

                    <div className="min-h-[400px]">
                        {renderStep()}
                    </div>

                    <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-6">
                        <div className="flex gap-4">
                            {step > 1 && step < 4 && (
                                <button
                                    onClick={() => setStep(step - 1)}
                                    className="px-8 py-4 text-slate-600 font-black flex items-center gap-2 hover:bg-slate-50 rounded-full transition-all"
                                >
                                    <ChevronLeft size={20} /> Kembali
                                </button>
                            )}
                            {step === 1 && (
                                <button
                                    onClick={reset}
                                    className="px-8 py-4 text-slate-400 font-bold text-sm"
                                >
                                    Ubah Jenis Proyek
                                </button>
                            )}
                        </div>

                        {step < 4 ? (
                            <button
                                onClick={() => setStep(step + 1)}
                                disabled={(step === 1 && !selectedPackage) || (step === 3 && (!formData.name || !formData.email))}
                                className="px-12 py-5 bg-slate-900 text-white font-black rounded-full shadow-2xl hover:bg-sky-500 transition-all disabled:opacity-30 disabled:cursor-not-allowed group flex items-center gap-3 active:scale-95"
                            >
                                Lanjutkan Tahap <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        ) : (
                            <button
                                onClick={() => {
                                    const message = `Halo Latar Cerita, saya ${formData.name} ingin memesan layanan ${SERVICE_CARDS.find(c => c.id === projectType)?.title} (${selectedPackage?.name}). Estimasi total: ${formatPrice(calculateTotal())}. Brief: ${formData.brief}`;
                                    window.open(`https://wa.me/6282332901726?text=${encodeURIComponent(message)}`, '_blank');
                                }}
                                className="px-14 py-6 bg-emerald-500 text-white font-black rounded-full shadow-2xl shadow-emerald-500/30 hover:bg-emerald-400 hover:scale-105 active:scale-95 transition-all flex items-center gap-4 text-lg overflow-hidden relative group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-white/30 to-emerald-400/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                <span className="relative z-10 flex items-center gap-3">Kirim & Mulai Proyek <Send size={24} /></span>
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default StartProjectPage;
