import { Instagram, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

                <div className="col-span-1 md:col-span-2">
                    <a href="#" className="text-2xl font-bold text-white mb-4 block">
                        Latar<span className="text-sky-500">Cerita</span>
                    </a>
                    <p className="text-slate-400 mb-6 max-w-sm">
                        Partner digital terpercaya untuk transformasi bisnis Anda. Kami menggabungkan kreativitas dan teknologi untuk hasil yang berdampak.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-colors">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-colors">
                            <Twitter size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-6">Layanan</h4>
                    <ul className="space-y-3">
                        <li><a href="#" className="hover:text-sky-400 transition-colors">Website Development</a></li>
                        <li><a href="#" className="hover:text-sky-400 transition-colors">App Development</a></li>
                        <li><a href="#" className="hover:text-sky-400 transition-colors">Custom Systems (ERP/Odoo)</a></li>
                        <li><a href="#" className="hover:text-sky-400 transition-colors">UI/UX Design</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-6">Perusahaan</h4>
                    <ul className="space-y-3">
                        <li><a href="#about" className="hover:text-sky-400 transition-colors">Tentang Kami</a></li>
                        <li><a href="#portfolio" className="hover:text-sky-400 transition-colors">Portofolio</a></li>
                        <li><a href="#contact" className="hover:text-sky-400 transition-colors">Kontak</a></li>
                        <li><a href="#" className="hover:text-sky-400 transition-colors">Karir</a></li>
                    </ul>
                </div>

            </div>
            <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
                &copy; {new Date().getFullYear()} Latar Cerita Digital Agency. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
