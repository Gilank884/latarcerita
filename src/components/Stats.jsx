const Stats = () => {
    const stats = [
        { value: "50+", label: "Proyek Selesai" },
        { value: "30+", label: "Klien Puas" },
        { value: "99%", label: "Tingkat Retensi" },
        { value: "24/7", label: "Support" },
    ];

    return (
        <section className="py-20 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-800/50">
                    {stats.map((stat, index) => (
                        <div key={index} className="p-4">
                            <div className="text-4xl md:text-5xl font-bold text-sky-400 mb-2">{stat.value}</div>
                            <div className="text-sm md:text-base text-slate-400">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
