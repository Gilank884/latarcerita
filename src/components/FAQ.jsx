import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "Berapa lama waktu pengerjaan website?",
        answer: "Waktu pengerjaan bergantung pada kompleksitas proyek. Untuk landing page sederhana biasanya memakan waktu 1-2 minggu, sedangkan sistem custom bisa memakan waktu 1-3 bulan."
    },
    {
        question: "Apakah ada layanan maintenance setelah website selesai?",
        answer: "Tentu! Kami menyediakan garansi bug selama 1 bulan dan opsi kontrak maintenance bulanan untuk memastikan website Anda tetap aman dan up-to-date."
    },
    {
        question: "Apakah website sudah termasuk hosting dan domain?",
        answer: "Paket kami fleksibel. Kami bisa menyertakan hosting dan domain dalam penawaran, atau Anda bisa menggunakan penyedia layanan sendiri dan kami akan membantu setup-nya."
    },
    {
        question: "Apakah bisa request fitur khusus di luar paket?",
        answer: "Sangat bisa. Kami spesialis dalam pengembangan sistem custom. Silakan diskusikan kebutuhan unik bisnis Anda, dan kami akan merancang solusi yang tepat."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900">Pertanyaan Umum</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                            <button
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="font-semibold text-slate-900 pr-8">{faq.question}</span>
                                {openIndex === index ? <Minus size={20} className="text-sky-500 shrink-0" /> : <Plus size={20} className="text-slate-400 shrink-0" />}
                            </button>
                            <div
                                className={`px-6 text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
