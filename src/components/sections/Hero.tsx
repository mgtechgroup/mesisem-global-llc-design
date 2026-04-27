import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-steel">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(199, 208, 216, 0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Globe Grid SVG Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-[800px] h-[800px] animate-spin-slow">
          <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="200" cy="200" r="120" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="200" cy="200" r="60" fill="none" stroke="currentColor" strokeWidth="1" />
          <ellipse cx="200" cy="200" rx="180" ry="60" fill="none" stroke="currentColor" strokeWidth="1" />
          <ellipse cx="200" cy="200" rx="180" ry="60" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(60 200 200)" />
          <ellipse cx="200" cy="200" rx="180" ry="60" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(120 200 200)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto section-padding text-center">
        {/* Infinity Symbol */}
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-10 relative">
            <svg viewBox="0 0 80 40" className="w-full h-full text-metallic-light">
              <path
                d="M20 20C20 8.954 28.954 0 40 0C51.046 0 60 8.954 60 20C60 31.046 51.046 40 40 40C28.954 40 20 31.046 20 20Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M60 20C60 8.954 68.954 0 80 0C91.046 0 100 8.954 100 20C100 31.046 91.046 40 80 40C68.954 40 60 31.046 60 20Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                transform="translate(-40 0)"
              />
            </svg>
          </div>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-metallic-light mb-6 leading-tight">
          Global Enterprise
          <br />
          <span className="text-metallic-mid">Solutions</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-metallic-mid max-w-3xl mx-auto mb-10 leading-relaxed">
          Scalable systems. Secure operations. Venture-backed growth.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact/"
            className="btn-primary text-base uppercase tracking-widest"
          >
            Schedule Consultation
          </Link>
          <Link
            href="/services/"
            className="btn-secondary text-base uppercase tracking-widest"
          >
            Explore Services
          </Link>
        </div>

        <p className="mt-8 text-metallic-dark text-sm">
          Delaware Series LLC | EIN 39-2830581
        </p>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
