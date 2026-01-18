import { ArrowRight } from 'lucide-react';

const CTA = () => {
    return (
        <section id="contact" className="py-24 bg-sky-600 relative overflow-hidden">
            {/* Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-sky-500 skew-x-12 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-sky-700 rounded-full blur-3xl opacity-50"></div>

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10 text-white">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Siap Mewujudkan Ide Digital Anda?</h2>
                <p className="text-sky-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                    Jangan biarkan ide hebat Anda hanya menjadi wacana. Diskusikan kebutuhan Anda dengan kami dan mari bangun sesuatu yang luar biasa bersama.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#" className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-white text-sky-600 font-bold hover:bg-sky-50 transition-all shadow-lg hover:shadow-xl hover:scale-105">
                        Konsultasi Gratis
                    </a>
                    <a href="#" className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-sky-700 text-white font-bold border border-sky-500 hover:bg-sky-800 transition-all hover:scale-105">
                        Hubungi WhatsApp <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTA;
