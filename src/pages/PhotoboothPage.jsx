import { useState, useEffect, useRef } from 'react';
import { Camera, Download, RefreshCw, ArrowLeft, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const PhotoboothPage = () => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [stream, setStream] = useState(null);
    const [isCountingDown, setIsCountingDown] = useState(false);
    const [countdown, setCountdown] = useState(null);
    const [error, setError] = useState(null);
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState(null);

    // Initial Camera Setup
    useEffect(() => {
        const startCamera = async () => {
            try {
                const mediaStream = await navigator.mediaDevices.getUserMedia({
                    video: { width: 1280, height: 720 },
                    audio: false
                });
                setStream(mediaStream);
                if (videoRef.current) {
                    videoRef.current.srcObject = mediaStream;
                }
            } catch (err) {
                console.error("Error accessing camera:", err);
                setError("Kamera tidak dapat diakses. Pastikan izin kamera sudah diberikan.");
            }
        };

        startCamera();

        return () => {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
        };
    }, []);

    // Countdown Logic
    useEffect(() => {
        if (countdown !== null && countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        } else if (countdown === 0) {
            generateCompoundPhoto();
            setCountdown(null);
        }
    }, [countdown]);

    const startCaptureSession = () => {
        if (isCountingDown || isPreviewOpen) return;
        setCountdown(3);
        setIsCountingDown(true);
    };

    const generateCompoundPhoto = () => {
        if (!videoRef.current || !canvasRef.current) return;

        const video = videoRef.current;
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // We want a portrait-ish high-res output
        const outputWidth = 1200;
        const outputHeight = 1600;
        canvas.width = outputWidth;
        canvas.height = outputHeight;

        const frameImg = new Image();
        frameImg.crossOrigin = "anonymous";
        frameImg.src = "/image/frame.png";

        frameImg.onload = () => {
            // 1. Draw Background (White)
            context.fillStyle = "white";
            context.fillRect(0, 0, canvas.width, canvas.height);

            // 2. Calculate Video Placement (Match the 8% inset in UI)
            // Based on the UI, the video is in an inset. 
            // Let's approximate the inner area of the frame.
            const insetX = outputWidth * 0.082;
            const insetY = outputHeight * 0.062;
            const innerWidth = outputWidth - (insetX * 2);
            const innerHeight = outputHeight * 0.75; // The top part usually holds the photo

            // Draw Video (Mirrored and Grayscale)
            context.save();
            context.filter = 'grayscale(100%) brightness(1.1) contrast(1.1)';
            context.translate(canvas.width, 0);
            context.scale(-1, 1); // Mirror

            // Calculate source dimensions for cropping to cover the inner area
            const videoAspect = video.videoWidth / video.videoHeight;
            const targetAspect = innerWidth / innerHeight;
            let sx, sy, sWidth, sHeight;

            if (videoAspect > targetAspect) {
                sHeight = video.videoHeight;
                sWidth = sHeight * targetAspect;
                sx = (video.videoWidth - sWidth) / 2;
                sy = 0;
            } else {
                sWidth = video.videoWidth;
                sHeight = sWidth / targetAspect;
                sx = 0;
                sy = (video.videoHeight - sHeight) / 2;
            }

            context.drawImage(video, sx, sy, sWidth, sHeight, insetX, insetY, innerWidth, innerHeight);
            context.restore();

            // 3. Draw Frame on Top
            context.drawImage(frameImg, 0, 0, outputWidth, outputHeight);

            // 4. Set Preview
            setCurrentPhoto(canvas.toDataURL('image/png'));
            setIsPreviewOpen(true);
            setIsCountingDown(false);
        };
    };

    const downloadPhoto = () => {
        if (!currentPhoto) return;
        const link = document.createElement('a');
        link.href = currentPhoto;
        link.download = `LatarCerita-Moment-${Date.now()}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen bg-white pt-32 pb-20 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-50 rounded-full blur-[120px] opacity-60"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-sky-50 rounded-full blur-[120px] opacity-60"></div>
            </div>

            <div className="container max-w-7xl mx-auto px-6 relative z-10">
                <Link to="/" className="inline-flex items-center gap-2 text-blue-900 font-bold mb-12 hover:translate-x-[-4px] transition-transform">
                    <ArrowLeft size={20} />
                    <span>Kembali</span>
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Column: CTA */}
                    <div className="lg:col-span-3 flex flex-col items-center lg:items-end order-2 lg:order-1">
                        <button
                            onClick={startCaptureSession}
                            disabled={isCountingDown || !!error || isPreviewOpen}
                            className="group relative px-8 py-6 rounded-2xl bg-blue-900 text-white font-bold text-3xl shadow-2xl shadow-blue-200 transition-all hover:-translate-y-1 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                            style={{ fontFamily: "'Caveat', cursive" }}
                        >
                            <div className="flex flex-col items-center gap-2">
                                <Camera size={32} className="group-hover:rotate-12 transition-transform" />
                                <span>Mulai Fotomu Sekarang</span>
                            </div>
                        </button>
                    </div>

                    {/* Center Column: Frame & Preview */}
                    <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
                        <div className="relative w-full max-w-[500px] aspect-[3/4] group">
                            <img
                                src="/image/frame.png"
                                alt="Photobooth Frame"
                                className="absolute inset-0 w-full h-full z-20 object-contain pointer-events-none drop-shadow-2xl"
                            />

                            <div className="absolute inset-[8%] bg-slate-100 z-10 overflow-hidden flex items-center justify-center rounded-[2px]">
                                {error ? (
                                    <div className="p-8 text-center text-red-500 font-medium">{error}</div>
                                ) : (
                                    <video
                                        ref={videoRef}
                                        autoPlay
                                        playsInline
                                        muted
                                        className="w-full h-full object-cover scale-x-[-1]"
                                        style={{ filter: 'grayscale(100%) brightness(1.1) contrast(1.1)' }}
                                    />
                                )}

                                {countdown !== null && (
                                    <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/10">
                                        <span className="text-9xl font-bold text-white animate-ping">{countdown}</span>
                                    </div>
                                )}
                            </div>

                            <div className={`absolute inset-0 bg-white z-40 transition-opacity duration-100 pointer-events-none ${countdown === 0 ? 'opacity-100' : 'opacity-0'}`}></div>
                        </div>
                    </div>

                    {/* Right Column: Description */}
                    <div className="lg:col-span-3 flex flex-col items-center lg:items-start order-3">
                        <div className="max-w-[200px] text-center lg:text-left">
                            <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-900 text-xs font-bold tracking-wider mb-4 uppercase">Instruksi</span>
                            <h2 className="text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Caveat', cursive" }}>
                                Mulai foto disini
                            </h2>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                Foto akan diambil otomatis dalam 3 detik. Hasilnya akan berbentuk foto dengan frame eksklusif dalam nuansa hitam putih.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Preview Modal */}
            {isPreviewOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-blue-900/40 backdrop-blur-md">
                    <div
                        className="bg-white rounded-3xl shadow-3xl max-w-2xl w-full overflow-hidden flex flex-col items-center p-8 relative animate-in fade-in zoom-in duration-300"
                    >
                        <button
                            onClick={() => setIsPreviewOpen(false)}
                            className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-600"
                        >
                            <X size={24} />
                        </button>

                        <h3 className="text-4xl font-bold text-blue-900 mb-6" style={{ fontFamily: "'Caveat', cursive" }}>
                            Moment Kamu Berharga !
                        </h3>

                        <div className="w-full max-w-[350px] aspect-[3/4] mb-8 shadow-2xl rounded-lg overflow-hidden border-8 border-white">
                            <img src={currentPhoto} alt="Captured Moment" className="w-full h-full object-contain" />
                        </div>

                        <div className="flex gap-4 w-full justify-center">
                            <button
                                onClick={downloadPhoto}
                                className="flex-1 max-w-[200px] py-4 rounded-xl bg-blue-900 text-white font-bold text-xl flex items-center justify-center gap-2 hover:bg-blue-950 transition-all shadow-lg shadow-blue-200"
                                style={{ fontFamily: "'Caveat', cursive" }}
                            >
                                <Download size={20} />
                                <span>Download Foto</span>
                            </button>
                            <button
                                onClick={() => setIsPreviewOpen(false)}
                                className="flex-1 max-w-[200px] py-4 rounded-xl border-2 border-slate-200 text-slate-600 font-bold text-xl flex items-center justify-center gap-2 hover:bg-slate-50 transition-all"
                                style={{ fontFamily: "'Caveat', cursive" }}
                            >
                                <RefreshCw size={20} />
                                <span>Ambil Lagi</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <canvas ref={canvasRef} className="hidden" />
        </div>
    );
};

export default PhotoboothPage;
