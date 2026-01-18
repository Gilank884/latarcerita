import { CheckCircle2, Zap, ShieldCheck, Headphones } from 'lucide-react';

const WhyUs = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-semibold text-sky-500 uppercase tracking-wider mb-2">Kenapa Latar Cerita?</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Nilai Lebih yang Kami Tawarkan</h3>
                    <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                        Di dunia yang penuh dengan opsi, kami membedakan diri melalui detail, dedikasi, dan hasil.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="flex gap-5">
                            <div className="shrink-0 w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600">
                                <Zap size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-slate-900 mb-2">Performace-First Engineering</h4>
                                <p className="text-slate-600 leading-relaxed">
                                    Kami tidak hanya membuat website yang cantik, tapi juga sangat cepat. Kami mengoptimalkan setiap baris kode, aset gambar, dan struktur database untuk memastikan load time di bawah 2 detik.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className="shrink-0 w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600">
                                <ShieldCheck size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-slate-900 mb-2">Security & Scalability</h4>
                                <p className="text-slate-600 leading-relaxed">
                                    Keamanan data Anda adalah prioritas non-negoisabel. Kami menerapkan standar keamanan industri terbaru dan arsitektur yang siap tumbuh (scalable) seiring bisnis Anda membesar.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="flex gap-5">
                            <div className="shrink-0 w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600">
                                <CheckCircle2 size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-slate-900 mb-2">Transparent Process</h4>
                                <p className="text-slate-600 leading-relaxed">
                                    Tidak ada biaya tersembunyi atau jargon membingungkan. Kami memberikan akses real-time ke progress board, sehingga Anda selalu tahu sejauh mana proyek berjalan.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className="shrink-0 w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                                <Headphones size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-slate-900 mb-2">Dedicated Post-Launch Support</h4>
                                <p className="text-slate-600 leading-relaxed">
                                    Hubungan kita tidak berakhir saat website live. Kami memberikan garansi bug-fixing, maintenance rutin, dan dukungan teknis prioritas untuk memastikan bisnis Anda terus berjalan lancar.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
