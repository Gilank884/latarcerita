import { Check, Laptop, Smartphone, Globe, Layers, ShieldCheck, Clock, Zap, MessageCircle } from 'lucide-react';

const PricingPage = () => {
    const services = [
        { icon: <Globe size={32} />, title: "Website Company Profile", desc: "Representasi digital profesional untuk membangun kredibilitas bisnis Anda." },
        { icon: <Laptop size={32} />, title: "Web Application / SaaS", desc: "Sistem kompleks berbasis web untuk efisiensi operasional dan layanan pelanggan." },
        { icon: <Smartphone size={32} />, title: "Mobile Application", desc: "Aplikasi Android & iOS untuk menjangkau pelanggan di genggaman mereka." },
    ];

    const pricing = {
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

    const workflow = [
        { num: 1, title: "Konsultasi", desc: "Diskusi mendalam tentang kebutuhan dan target Anda." },
        { num: 2, title: "Penawaran", desc: "Estimasi biaya dan waktu pengerjaan yang transparan." },
        { num: 3, title: "Desain", desc: "Perancangan wireframe dan UI/UX modern." },
        { num: 4, title: "Development", desc: "Penulisan kode yang bersih dan performa tinggi." },
        { num: 5, title: "Testing", desc: "Uji coba fungsionalitas di berbagai perangkat." },
        { num: 6, title: "Launching", desc: "Deployment ke server live dan serah terima." },
    ];

    const whyUs = [
        { icon: <ShieldCheck size={20} />, text: "Harga Transparan" },
        { icon: <Layers size={20} />, text: "Bisa Customize" },
        { icon: <Check size={20} />, text: "Revisi Jelas" },
        { icon: <MessageCircle size={20} />, text: "Support Lifetime" },
        { icon: <Zap size={20} />, text: "Teknologi Modern" },
        { icon: <Clock size={20} />, text: "Pengerjaan Tepat Waktu" },
    ];

    const addons = [
        { name: "Tambah Halaman", price: "150rb - 300rb / hal" },
        { name: "Desain Custom Halaman", price: "250rb - 500rb" },
        { name: "Modul Baru", price: "500rb - 1,5 Juta" },
        { name: "Integrasi API Pihak ke-3", price: "1 Juta - 3 Juta" },
        { name: "Payment Gateway", price: "2 Juta - 5 Juta" },
        { name: "Realtime Chat / Notif", price: "2 Juta - 6 Juta" },
    ];

    return (
        <div className="bg-white pt-20">
            {/* Hero Section */}
            <section className="py-20 lg:py-32 px-6 max-w-7xl mx-auto text-center">
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
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                                <div className="w-16 h-16 rounded-2xl bg-sky-50 text-sky-500 flex items-center justify-center mb-6 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
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
                    <div className="grid md:grid-cols-3 gap-8">
                        {pricing.web.map((plan, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-sky-300 hover:shadow-xl transition-all relative overflow-hidden flex flex-col h-full">
                                {idx === 1 && <div className="absolute top-0 right-0 bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>}
                                <h5 className="text-xl font-bold text-slate-900 mb-1">{plan.name}</h5>
                                <p className="text-sm text-slate-500 mb-4">{plan.desc}</p>
                                <p className="text-2xl font-bold text-sky-600 mb-6">{plan.price}</p>
                                <ul className="space-y-3 mb-8 flex-1">
                                    {plan.features.map((feat, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-600">
                                            <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" /> <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className="w-full py-3 rounded-xl border-2 border-slate-900 text-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-colors mt-auto">Pilih Paket</button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Web App Pricing */}
                <div className="mb-20">
                    <h4 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                        <Laptop className="text-indigo-500" /> Web Application / SaaS
                    </h4>
                    <div className="grid md:grid-cols-3 gap-8">
                        {pricing.app.map((plan, idx) => (
                            <div key={idx} className="bg-slate-900 text-white p-8 rounded-2xl border border-slate-700 hover:border-indigo-400 hover:shadow-2xl transition-all flex flex-col h-full">
                                <h5 className="text-xl font-bold mb-1">{plan.name}</h5>
                                <p className="text-sm text-slate-400 mb-4">{plan.desc}</p>
                                <p className="text-2xl font-bold text-indigo-400 mb-6">{plan.price}</p>
                                <ul className="space-y-3 mb-8 flex-1">
                                    {plan.features.map((feat, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-300">
                                            <Check size={16} className="text-indigo-400 shrink-0 mt-0.5" /> <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className="w-full py-3 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-500 transition-colors mt-auto">Konsultasi</button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Pricing */}
                <div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                        <Smartphone className="text-rose-500" /> Mobile Application
                    </h4>
                    <div className="grid md:grid-cols-3 gap-8">
                        {pricing.mobile.map((plan, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-rose-300 hover:shadow-xl transition-all flex flex-col h-full">
                                <h5 className="text-xl font-bold text-slate-900 mb-1">{plan.name}</h5>
                                <p className="text-sm text-slate-500 mb-4">{plan.desc}</p>
                                <p className="text-2xl font-bold text-rose-500 mb-6">{plan.price}</p>
                                <ul className="space-y-3 mb-8 flex-1">
                                    {plan.features.map((feat, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-600">
                                            <Check size={16} className="text-rose-500 shrink-0 mt-0.5" /> <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className="w-full py-3 rounded-xl border-2 border-rose-500 text-rose-500 font-bold hover:bg-rose-500 hover:text-white transition-colors mt-auto">Tanya Detail</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Custom Solution Section */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="bg-slate-900 rounded-3xl p-8 md:p-12 overflow-hidden relative">
                    <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                        <div>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-bold mb-6 border border-indigo-500/30">Enterprise & Custom</span>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Butuh Solusi yang Lebih <br /> <span className="text-indigo-400">Kompleks & Spesifik?</span></h3>
                            <p className="text-slate-300 text-lg mb-8">Jangan khawatir jika kebutuhan Anda tidak masuk dalam paket di atas. Kami ahli dalam membangun **Custom ERP, CRM, Marketplace**, hingga **SaaS** skala besar sesuai workflow bisnis Anda.</p>
                            <a href="https://wa.me/628123456789" className="inline-flex px-8 py-3.5 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-500 transition-all items-center gap-2"><MessageCircle size={20} /> Diskusi Proyek Custom</a>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" alt="Custom Dashboard" className="w-full h-auto" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Workflow Section */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <h3 className="text-3xl font-bold text-slate-900 text-center mb-16">Alur Pengerjaan Proyek</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {workflow.map((step, idx) => (
                            <div key={idx} className="text-center">
                                <div className="w-12 h-12 mx-auto bg-white rounded-full border-2 border-sky-200 flex items-center justify-center font-bold text-sky-600 mb-4 shadow-sm">{step.num}</div>
                                <h5 className="font-bold text-slate-900 mb-2">{step.title}</h5>
                                <p className="text-xs text-slate-500">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us & Customize */}
            <section className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-8">Kenapa Memilih Kami?</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {whyUs.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-sky-50/50 border border-sky-100">
                                <div className="text-sky-600">{item.icon}</div>
                                <span className="font-medium text-slate-700">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-8">Butuh Fitur Khusus?</h3>
                    <div className="space-y-4">
                        {addons.map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between p-4 border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                <span className="font-medium text-slate-700">{item.name}</span>
                                <span className="text-sm font-bold text-slate-900 bg-slate-100 px-3 py-1 rounded-full">{item.price}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto bg-gradient-to-r from-sky-500 to-indigo-600 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Mulai Proyek Anda Sekarang</h2>
                    <p className="text-sky-100 text-lg mb-10 max-w-2xl mx-auto">Konsultasikan ide Anda secara gratis. Kami berikan estimasi cepat dan harga yang transparan tanpa biaya tersembunyi.</p>
                    <div className="flex gap-4 justify-center">
                        <a href="https://wa.me/628123456789" className="px-8 py-4 rounded-full bg-white text-sky-600 font-bold hover:bg-sky-50 transition-all shadow-lg flex items-center gap-2"><MessageCircle size={20} /> Chat Sekarang</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PricingPage;
