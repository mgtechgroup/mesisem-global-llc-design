const frameworks = [
  { name: "BSA", fullName: "Bank Secrecy Act" },
  { name: "PATRIOT Act", fullName: "USA PATRIOT Act" },
  { name: "OFAC", fullName: "Office of Foreign Assets Control" },
  { name: "FATF", fullName: "Financial Action Task Force" },
  { name: "GDPR", fullName: "General Data Protection Regulation" },
  { name: "CCPA", fullName: "California Consumer Privacy Act" },
  { name: "NIST CSF", fullName: "NIST Cybersecurity Framework" },
  { name: "ISO 27001", fullName: "ISO 27001 (target)", target: true },
  { name: "SOC 2", fullName: "SOC 2 Type II (target)", target: true },
  { name: "FCPA", fullName: "Foreign Corrupt Practices Act" },
  { name: "UK Bribery Act", fullName: "UK Bribery Act 2010" },
];

export default function TrustBadges() {
  return (
    <section className="py-20 lg:py-28 bg-steel/30 border-y border-metallic-dark/20">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-metallic-light mb-4">
            Compliance Framework
          </h2>
          <p className="text-metallic-mid text-lg max-w-2xl mx-auto">
            Enterprise-grade compliance across financial, data, cybersecurity, and anti-corruption domains.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {frameworks.map((fw, index) => (
            <div
              key={index}
              className="group relative px-4 py-2 bg-steel/50 border border-metallic-dark/30 rounded-sm hover:border-metallic-mid/50 transition-all duration-300 cursor-default"
            >
              <span className="text-metallic-mid text-sm font-medium group-hover:text-metallic-light transition-colors">
                {fw.name}
                {fw.target && (
                  <span className="text-metallic-dark text-xs ml-1">(target)</span>
                )}
              </span>
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-black border border-metallic-dark/50 rounded text-metallic-light text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                {fw.fullName}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-metallic-dark text-sm">
            AML/KYC: Identity verification | Risk scoring | Transaction monitoring | SAR reporting
          </p>
          <p className="text-metallic-dark text-sm mt-1">
            Audit threshold: $5,000,000 USD | Record retention: 7 years
          </p>
        </div>
      </div>
    </section>
  );
}
