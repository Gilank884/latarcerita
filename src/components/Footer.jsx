import { Instagram, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-transparent px-6 pb-12 mt-20">
            <div className="max-w-7xl mx-auto bg-white text-slate-600 p-10 md:p-16 rounded-[32px] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative overflow-hidden">
                {/* Accent Border */}
                <div className="absolute top-0 left-0 w-full h-2 bg-sky-600"></div>

                {/* Background Decor */}
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl"></div>

                <div className="grid md:grid-cols-4 gap-12 relative z-10">
                    <div className="col-span-1 md:col-span-2">
                        <a href="#" className="flex items-center gap-3 mb-8 group">
                            <img
                                src="/Logo.png"
                                alt="Latar Cerita Logo"
                                className="h-16 w-auto object-contain transition-transform group-hover:scale-105"
                            />
                        </a>
                        <p className="text-slate-500 mb-8 max-w-sm font-medium leading-relaxed">
                            Abadikan setiap momen berharga Anda dengan layanan photobooth profesional. Kami menghadirkan keceriaan dan kenangan instan untuk setiap acara Anda.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/latarceritaa_/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 text-slate-400 flex items-center justify-center hover:bg-sky-600 hover:text-white hover:border-sky-500 transition-all active:scale-95">
                                <Instagram size={22} />

                            </a>
                            <a href="mailto:latarcerita.official@gmail.com" className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 text-slate-400 flex items-center justify-center hover:bg-sky-600 hover:text-white hover:border-sky-500 transition-all active:scale-95">
                                <Mail size={22} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-slate-900 font-black uppercase tracking-widest text-xs mb-8">Layanan</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-slate-500 hover:text-sky-600 transition-colors font-bold text-sm">Digital Photobooth</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-sky-600 transition-colors font-bold text-sm">Physical Prints</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-sky-600 transition-colors font-bold text-sm">Custom Backdrop</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-sky-600 transition-colors font-bold text-sm">Event Photography</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-slate-900 font-black uppercase tracking-widest text-xs mb-8">Perusahaan</h4>
                        <ul className="space-y-4">
                            <li><a href="#about" className="text-slate-500 hover:text-sky-600 transition-colors font-bold text-sm">Tentang Kami</a></li>
                            <li><a href="#portfolio" className="text-slate-500 hover:text-sky-600 transition-colors font-bold text-sm">Portofolio</a></li>
                            <li><a href="#pricing" className="text-slate-500 hover:text-sky-600 transition-colors font-bold text-sm">Harga</a></li>
                            <li><a href="#services" className="text-slate-500 hover:text-sky-600 transition-colors font-bold text-sm">Layanan</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                    <p>&copy; {new Date().getFullYear()} Latar Cerita Photobooth. All rights reserved.</p>
                    <p className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        Status: Systems Operational
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
