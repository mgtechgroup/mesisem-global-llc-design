import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-steel relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(199, 208, 216, 0.3) 1px, transparent 0)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto section-padding text-center">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-metallic-light mb-6">
          Ready to Scale?
        </h2>
        <p className="text-metallic-mid text-lg sm:text-xl max-w-2xl mx-auto mb-10">
          Whether you&apos;re entering new markets, building secure systems, or scaling a venture — we provide the structured expertise to execute.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact/"
            className="btn-primary text-base uppercase tracking-widest"
          >
            Schedule Consultation
          </Link>
          <Link
            href="/pricing/"
            className="btn-secondary text-base uppercase tracking-widest"
          >
            View Pricing
          </Link>
        </div>
        <p className="mt-8 text-metallic-dark text-sm">
          Consulting rate: $350/hour · Deposit: $150 · Minimum commitment: 3 months
        </p>
      </div>
    </section>
  );
}
