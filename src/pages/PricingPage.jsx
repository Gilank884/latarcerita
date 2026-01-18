import { Check, Laptop, Smartphone, Globe, Layers, ShieldCheck, Clock, Zap, MessageCircle, ArrowRight, Layout, Menu, Bell, Home, Mail, User, Search } from 'lucide-react';

// Data defined outside to prevent re-creation and potential shadowing issues
const SERVICES_DATA = [
    { icon: <Globe size={32} />, title: "Website Company Profile", desc: "Representasi digital profesional untuk membangun kredibilitas bisnis Anda." },
    { icon: <Laptop size={32} />, title: "Web Application / SaaS", desc: "Sistem kompleks berbasis web untuk efisiensi operasional dan layanan pelanggan." },
    { icon: <Smartphone size={32} />, title: "Mobile Application", desc: "Aplikasi Android & iOS untuk menjangkau pelanggan di genggaman mereka." },
];

const PRICING_DATA = {
    web: [
        {
            name: "Paket Awal",
            price: "1 - 2,5 Juta",
            desc: "Solusi cepat untuk bisnis yang baru mulai tampil online.",
            features: ["Single Page / Landing Page Responsif", "Setup Domain & Hosting 1 Tahun", "Integrasi WhatsApp & Sosial Media", "Optimasi Kecepatan Basic", "Revisi Desain Minor 2x"]
        },
        {
            name: "Paket Berkembang",
            price: "3 - 5 Juta",
            desc: "Pilihan ideal untuk UMKM yang ingin meningkatkan kredibilitas.",
            features: ["Multi-page (Beranda, Layanan, Kontak, dll)", "Desain Modern & Custom Branding", "Sistem Manajemen Konten (CMS)", "SEO Setup Dasar (Google Indexing)", "Revisi Desain Minor 3x"]
        },
        {
            name: "Paket Profesional",
            price: "6 - 10 Juta",
            desc: "Website premium dengan performa dan interaktivitas tinggi.",
            features: ["Desain UI/UX Eksklusif & Animasi", "Fitur Blog / Artikel / Galeri Dinamis", "Optimasi Kecepatan & Keamanan Lanjutan", "Analytics Dashboard Terintegrasi", "Prioritas Support & Maintenance 1 Bulan"]
        },
    ],
    app: [
        {
            name: "Paket Core",
            price: "5 - 10 Juta",
            desc: "Sistem dasar untuk digitalisasi proses bisnis sederhana.",
            features: ["Manajemen Data CRUD Sederhana", "Autentikasi User (Login/Register)", "Dashboard Admin Basic", "Export Data (Excel/PDF)", "Setup Database Relasional"]
        },
        {
            name: "Paket Scale",
            price: "10 - 25 Juta",
            desc: "Sistem handal untuk operasional bisnis yang sedang tumbuh.",
            features: ["Manajemen Role & Akses Kompleks", "Integrasi API Pihak Ketiga", "Laporan Statistik & Grafik Dinamis", "Sistem Notifikasi Realtime", "Deployment VPS & Security Hardening"]
        },
        {
            name: "Paket Prime",
            price: "30 Juta+",
            desc: "Solusi Enterprise untuk skala bisnis besar dan high-traffic.",
            features: ["Arsitektur Microservices Scalable", "Multi-tenancy (SaaS Architecture)", "Payment Gateway & Billing System", "Audit Log & Keamanan Tingkat Lanjut", "SLA Support & Dedicated Server Setup"]
        },
    ],
    mobile: [
        {
            name: "Paket Spark",
            price: "8 - 12 Juta",
            desc: "Aplikasi mobile ringan untuk kebutuhan informasi dan branding.",
            features: ["Tampilan UI Mobile-First Modern", "Fitur Informasi Statis & Dinamis", "Push Notification Dasar", "Publish ke Google Play Store", "API Integration Basic"]
        },
        {
            name: "Paket Boost",
            price: "15 - 30 Juta",
            desc: "Aplikasi fungsional untuk interaksi pengguna yang lebih dalam.",
            features: ["User Account & Profile Management", "Fitur Transaksi / Booking / Order", "Integrasi Maps / Lokasi GPS", "Chat System / In-App Messaging", "Publish Play Store & App Store (Bantuan)"]
        },
        {
            name: "Paket Prime",
            price: "40 Juta+",
            desc: "Super app dengan fitur kompleks dan performa tinggi.",
            features: ["Pengembangan Native / Hybrid High-Perf", "Algoritma Kustom / AI Integration", "Realtime Tracking & Complex Logic", "Payment Gateway Integration", "Maintenance & Update Berkala"]
        },
    ]
};

const WORKFLOW_DATA = [
    { num: 1, title: "Konsultasi", desc: "Diskusi mendalam tentang kebutuhan dan target Anda." },
    { num: 2, title: "Penawaran", desc: "Estimasi biaya dan waktu pengerjaan yang transparan." },
    { num: 3, title: "Desain", desc: "Perancangan wireframe dan UI/UX modern." },
    { num: 4, title: "Development", desc: "Penulisan kode yang bersih dan performa tinggi." },
    { num: 5, title: "Testing", desc: "Uji coba fungsionalitas di berbagai perangkat." },
    { num: 6, title: "Launching", desc: "Deployment ke server live dan serah terima." },
];

const PricingPage = () => {
    return (
        <div className="bg-white pt-20">
            {/* Render Verification Tag */}
            <div className="hidden">Pricing Page Rendered v4.1</div>

            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 px-6 overflow-hidden bg-slate-50">
                {/* Tailwind Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>

                {/* Abstract Background Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-100 rounded-full blur-[100px] opacity-60 translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-100 rounded-full blur-[80px] opacity-50 -translate-x-1/3 translate-y-1/3"></div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                        Solusi Website, Sistem, dan <br className="hidden md:block" /> <span className="text-sky-500">Aplikasi untuk Bisnis Anda</span>
                    </h1>
                    <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
                        Bangun website, sistem, dan aplikasi modern dengan harga transparan, teknologi terkini, dan dapat disesuaikan sepenuhnya dengan kebutuhan bisnis Anda.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <a href="#pricing" className="px-8 py-3 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-lg">
                            Lihat Harga
                        </a>
                        <a href="https://wa.me/628123456789" className="px-8 py-3 rounded-full bg-sky-50 text-sky-600 font-medium hover:bg-sky-100 transition-all hover:scale-105 active:scale-95">
                            Konsultasi Gratis
                        </a>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        {SERVICES_DATA.map((item, idx) => {
                            return (
                                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                                    <div className="w-16 h-16 rounded-2xl bg-sky-50 text-sky-500 flex items-center justify-center mb-6 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-semibold text-sky-500 uppercase tracking-wider mb-2">Penawaran Kami</h2>
                    <h3 className="text-3xl font-bold text-slate-900">Pilih Paket Sesuai Kebutuhan</h3>
                </div>

                {/* Website Pricing */}
                <div className="mb-20">
                    <h4 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                        <Globe className="text-sky-500" /> Website Company Profile
                    </h4>
                    <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                        {PRICING_DATA.web.map((plan, idx) => {
                            return (
                                <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-sky-300 hover:shadow-xl transition-all relative overflow-hidden flex flex-col h-full min-h-[400px]">
                                    {idx === 1 && <div className="absolute top-0 right-0 bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>}
                                    <div className="mb-8">
                                        <h5 className="text-xl font-bold text-slate-900 mb-1">{plan.name}</h5>
                                        <p className="text-sm text-slate-500 h-10 mb-4">{plan.desc}</p>
                                        <p className="text-2xl font-bold text-sky-600">{plan.price}</p>
                                    </div>
                                    <ul className="space-y-3 mb-8 flex-1">
                                        {plan.features.map((feat, fIdx) => (
                                            <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-600">
                                                <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" /> <span>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <button className="w-full py-3 rounded-xl border-2 border-slate-900 text-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-colors mt-auto">Pilih Paket</button>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Web App Pricing */}
                <div className="mb-20">
                    <h4 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                        <Laptop className="text-indigo-500" /> Web Application / SaaS
                    </h4>
                    <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                        {PRICING_DATA.app.map((plan, idx) => {
                            return (
                                <div key={idx} className="bg-slate-900 text-white p-8 rounded-2xl border border-slate-700 hover:border-indigo-400 hover:shadow-2xl transition-all flex flex-col h-full min-h-[400px]">
                                    <div className="mb-8">
                                        <h5 className="text-xl font-bold mb-1">{plan.name}</h5>
                                        <p className="text-sm text-slate-400 h-10 mb-4">{plan.desc}</p>
                                        <p className="text-2xl font-bold text-indigo-400">{plan.price}</p>
                                    </div>
                                    <ul className="space-y-3 mb-8 flex-1">
                                        {plan.features.map((feat, fIdx) => (
                                            <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-300">
                                                <Check size={16} className="text-indigo-400 shrink-0 mt-0.5" /> <span>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <button className="w-full py-3 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-500 transition-colors mt-auto">Konsultasi Detail</button>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Mobile Pricing */}
                <div className="mb-20">
                    <h4 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                        <Smartphone className="text-rose-500" /> Mobile Application
                    </h4>
                    <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                        {PRICING_DATA.mobile.map((plan, idx) => {
                            return (
                                <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-rose-300 hover:shadow-xl transition-all flex flex-col h-full min-h-[400px]">
                                    <div className="mb-8">
                                        <h5 className="text-xl font-bold text-slate-900 mb-1">{plan.name}</h5>
                                        <p className="text-sm text-slate-500 h-10 mb-4">{plan.desc}</p>
                                        <p className="text-2xl font-bold text-rose-500">{plan.price}</p>
                                    </div>
                                    <ul className="space-y-3 mb-8 flex-1">
                                        {plan.features.map((feat, fIdx) => (
                                            <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-600">
                                                <Check size={16} className="text-rose-500 shrink-0 mt-0.5" /> <span>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <button className="w-full py-3 rounded-xl border-2 border-rose-500 text-rose-500 font-bold hover:bg-rose-500 hover:text-white transition-colors mt-auto">Tanya Detail</button>
                                </div>
                            );
                        })}
                    </div>
                    <p className="mt-6 text-center text-slate-500 text-sm">*Harga di atas adalah estimasi. Untuk pengembangan dual platform (Android + iOS) dikenakan biaya tambahan 40-70%.</p>
                </div>
            </section>

            {/* Custom Solution Section - Dashboard Mockup Style */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="bg-slate-900 rounded-[2rem] p-8 md:p-16 overflow-hidden relative shadow-2xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-widest mb-8 border border-indigo-500/30 shadow-sm">
                                <ShieldCheck size={16} /> Enterprise & Custom
                            </div>
                            <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-[1.15]">
                                Butuh Solusi yang <br /> <span className="text-indigo-400">Lebih Kompleks?</span>
                            </h3>
                            <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                                Kami ahli dalam membangun **Custom ERP, CRM, Marketplace**, hingga **SaaS** skala besar yang didesain khusus mengikuti workflow unik bisnis Anda dengan arsitektur yang aman dan scalable.
                            </p>
                            <a href="https://wa.me/628123456789" className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-indigo-600 text-white font-bold hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/20 active:scale-95">
                                <MessageCircle size={22} /> Diskusi Proyek Enterprise
                            </a>
                        </div>

                        {/* Browser Visual Mockup */}
                        <div className="relative group">
                            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-sky-500 rounded-[1.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                            <div className="relative bg-white rounded-xl shadow-2xl border border-slate-700 overflow-hidden transform group-hover:rotate-1 transition-transform duration-700">
                                {/* Browser Chrome */}
                                <div className="bg-slate-800 border-b border-slate-700 px-4 py-3 flex items-center gap-4">
                                    <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
                                    </div>
                                    <div className="flex-1 bg-slate-900 border border-slate-700 rounded-md h-7 flex items-center px-4 text-[10px] text-slate-500 font-mono">
                                        enterprise-system.latarcerita.dev/dashboard
                                    </div>
                                </div>

                                {/* Mockup Content */}
                                <div className="p-6 grid grid-cols-4 gap-4 bg-slate-50 min-h-[320px]">
                                    {/* Sidebar */}
                                    <div className="col-span-1 space-y-4 hidden sm:block">
                                        <div className="h-2.5 w-16 bg-slate-200 rounded mb-6"></div>
                                        {[1, 2, 3, 4, 5, 6].map(i => (
                                            <div key={i} className="h-7 bg-white rounded border border-slate-100 w-full flex items-center px-2 shadow-sm">
                                                <div className="w-2 h-2 rounded-full bg-indigo-400 mr-2"></div>
                                                <div className="h-1.5 w-10 bg-slate-50 rounded"></div>
                                            </div>
                                        ))}
                                    </div>
                                    {/* Content area */}
                                    <div className="col-span-4 sm:col-span-3 space-y-5">
                                        <div className="flex justify-between items-center mb-2">
                                            <div className="h-5 w-40 bg-slate-800 rounded"></div>
                                            <div className="h-8 w-24 bg-sky-500 rounded-lg shadow-sm"></div>
                                        </div>
                                        <div className="grid grid-cols-3 gap-3">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="h-20 bg-white rounded-xl border border-slate-200 p-3 shadow-sm flex flex-col justify-between">
                                                    <div className="h-1.5 w-12 bg-slate-100 rounded"></div>
                                                    <div className="h-5 w-16 bg-slate-800 rounded"></div>
                                                </div>
                                            ))}
                                        </div>
                                        {/* Chart Area */}
                                        <div className="h-36 bg-white rounded-xl border border-slate-200 p-5 shadow-sm flex items-end justify-between gap-1.5 px-8 pb-4">
                                            {[40, 75, 50, 95, 65, 85, 55, 70].map((h, i) => (
                                                <div key={i} className="w-full max-w-[14px] bg-indigo-500 rounded-t shadow-sm" style={{ height: `${h}%` }}></div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Workflow Section */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-sm font-semibold text-sky-500 uppercase tracking-widest mb-3">Workflow</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Alur Pengerjaan Proyek</h3>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
                        {WORKFLOW_DATA.map((step, idx) => {
                            return (
                                <div key={idx} className="text-center group">
                                    <div className="w-14 h-14 mx-auto bg-white rounded-2xl border-2 border-sky-100 flex items-center justify-center font-bold text-sky-600 mb-6 group-hover:bg-sky-500 group-hover:text-white group-hover:border-sky-500 transition-all shadow-sm rotate-3 group-hover:rotate-0">
                                        {step.num}
                                    </div>
                                    <h5 className="font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors uppercase text-sm tracking-wide">{step.title}</h5>
                                    <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{step.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>



            {/* CTA Section */}
            <section className="py-24 px-6 mb-20">
                <div className="max-w-5xl mx-auto bg-gradient-to-br from-sky-600 to-indigo-800 rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-sky-400/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Siap Memulai Proyek Anda?</h2>
                        <p className="text-sky-100 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                            Jangan ragu untuk mendiskusikan kebutuhan bisnis Anda. Konsultasi gratis dan dapatkan penawaran harga yang transparan sekarang juga.
                        </p>
                        <div className="flex gap-5 justify-center flex-wrap">
                            <a href="https://wa.me/6282332901726" className="px-10 py-4 rounded-full bg-white text-sky-600 font-bold hover:shadow-xl transition-all flex items-center gap-3 transform active:scale-95">
                                <MessageCircle size={22} /> Chat di WhatsApp
                            </a>
                            <a href="#contact" className="px-10 py-4 rounded-full border-2 border-white/30 text-white font-bold hover:bg-white/10 transition-all backdrop-blur-sm">
                                Jadwal Konsultasi
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PricingPage;
