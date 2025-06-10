import { useEffect, useState } from "react";

function HeroSection() {
  const [fade, setFade] = useState(false);

  // trigger fade 5 s after mount
  useEffect(() => {
    const id = setTimeout(() => setFade(true), 5000);
    return () => clearTimeout(id);
  }, []);

  return (
    <section className="relative h-[85vh] w-screen overflow-hidden">
      {/* video background */}
      <video
        src="/video-car-pulling-away.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        playsInline
      />
      {/* black overlay for fade */}
      <div
        className={`absolute inset-0 bg-neutral-900 transition-opacity duration-[3000ms] ${
          fade ? "opacity-90" : "opacity-0"
        }`}
      />

      {/* content after fade */}
      <div
        className={`relative z-10 flex h-full flex-col items-center justify-center text-center text-neutral-200 transition-opacity duration-[2000ms] delay-[1000ms] ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        <img src="/logo-autoxs.png" alt="AutoXS Malta" className="w-64 md:w-xl mb-6" />
        <h1 className="text-4xl md:text-6xl font-heading font-bold leading-12">
          Quality<br/>Car&nbsp;Care<br/>Products
        </h1>
      </div>
    </section>
  );
}

export default HeroSection;