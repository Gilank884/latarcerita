import { Instagram, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

                <div className="col-span-1 md:col-span-2">
                    <a href="#" className="flex items-center gap-2 mb-4 group">
                        <img
                            src="/Logo.png"
                            alt="Latar Cerita Logo"
                            className="h-8 w-auto object-contain transition-transform group-hover:scale-110"
                        />
                        <span className="text-2xl font-bold text-white tracking-tight">
                            Latar<span className="text-sky-500">Cerita</span>
                        </span>
                    </a>
                    <p className="text-slate-400 mb-6 max-w-sm">
                        Abadikan setiap momen berharga Anda dengan layanan photobooth profesional. Kami menghadirkan keceriaan dan kenangan instan untuk setiap acara Anda.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/latar_ceritaa/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-colors">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-colors">
                            <Twitter size={20} />
                        </a>
                        <a href="mailto:latarcerita.official@gmail.com" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-6">Layanan</h4>
                    <ul className="space-y-3">
                        <li><a href="#" className="hover:text-sky-400 transition-colors">Digital Photobooth</a></li>
                        <li><a href="#" className="hover:text-sky-400 transition-colors">Physical Prints</a></li>
                        <li><a href="#" className="hover:text-sky-400 transition-colors">Custom Backdrop</a></li>
                        <li><a href="#" className="hover:text-sky-400 transition-colors">Event Photography</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-6">Perusahaan</h4>
                    <ul className="space-y-3">
                        <li><a href="#about" className="hover:text-sky-400 transition-colors">Tentang Kami</a></li>
                        <li><a href="#portfolio" className="hover:text-sky-400 transition-colors">Portofolio</a></li>
                        <li><a href="#pricing" className="hover:text-sky-400 transition-colors">Harga</a></li>
                        <li><a href="#services" className="hover:text-sky-400 transition-colors">Layanan</a></li>
                    </ul>
                </div>

            </div>
            <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
                &copy; {new Date().getFullYear()} Latar Cerita Photobooth. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
