import { B, TealBtn } from "../brand";
import { Navbar, Footer, DemoFormSection, useInView, IconArrowRight } from "../components/shared";

function MockupBeforeAfter() {
  const before = [
    { label: "Ticketing App", sub: "Online sales only" },
    { label: "Spreadsheet", sub: "CSV reconciliation" },
    { label: "3rd-party POS", sub: "No offline mode" },
  ];
  return (
    <div className="relative w-full max-w-sm mx-auto lg:mx-0 lg:ml-auto select-none">
      <div className="rounded-2xl border overflow-hidden" style={{ backgroundColor: "#0B111C", borderColor: "#1A2840" }}>
        <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: "#1A2840" }}>
          <span className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: "#EF4444" }}>Before Evinra</span>
        </div>
        <div className="p-4 space-y-2">
          {before.map(({ label, sub }) => (
            <div key={label} className="flex items-center gap-3 rounded-xl px-3 py-3 border"
              style={{ backgroundColor: "#0D1520", borderColor: "#1A2840" }}>
              <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: "rgba(239,68,68,0.1)" }}>
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth={2.5} strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-white">{label}</p>
                <p className="text-[10px]" style={{ color: "#4E6490" }}>{sub}</p>
              </div>
            </div>
          ))}
          <div className="flex flex-col items-center py-2 gap-1">
            {[0,1,2].map(i => (
              <div key={i} className="w-0.5 h-2 rounded-full" style={{ backgroundColor: "rgba(239,68,68,0.2)" }}/>
            ))}
            <span className="text-[9px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded"
              style={{ backgroundColor: "rgba(239,68,68,0.08)", color: "#EF4444" }}>Fragmented</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center my-3">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke={B.teal} strokeWidth={2} strokeLinecap="round">
          <line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/>
        </svg>
      </div>
      <div className="rounded-2xl border overflow-hidden" style={{ backgroundColor: "#0B111C", borderColor: `${B.teal}40` }}>
        <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: `${B.teal}20` }}>
          <span className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: B.tealLight }}>With Evinra</span>
        </div>
        <div className="p-4">
          <div className="rounded-xl border px-4 py-4" style={{ backgroundColor: "#0D1520", borderColor: `${B.teal}30` }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${B.teal}20` }}>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke={B.teal} strokeWidth={2} strokeLinecap="round">
                  <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-white">Evinra Platform</p>
                <p className="text-[10px]" style={{ color: B.tealLight }}>One system, every operation</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {["Online Tickets","Gate Entry","POS & Cash","Settlement","Reporting","Offline Sync"].map(f => (
                <div key={f} className="rounded-lg px-1.5 py-2 text-center"
                  style={{ backgroundColor: `${B.teal}10` }}>
                  <p className="text-[9px] font-semibold leading-tight" style={{ color: B.tealLight }}>{f}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative pt-28 pb-20" style={{ backgroundColor: B.navyDarkest }}>
      <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 55% 45% at 70% 55%, ${B.navyDeep} 0%, transparent 70%)` }}/>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-6 border text-xs font-medium" style={{ backgroundColor: "rgba(32,153,145,0.1)", borderColor: "rgba(32,153,145,0.25)", color: B.tealLight }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: B.teal }}/>
              Our Story
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-[1.07] tracking-tight mb-6">
              We Built Evinra Because the<br/>
              <span style={{ color: B.teal }}>Industry Standard Is Broken</span>
            </h1>
            <p className="text-[15px] leading-relaxed" style={{ color: B.mutedLight }}>
              We are the tech team fighting for independent producers. Fairs, circuses, and touring productions deserve the exact same powerhouse tools as the mega-stadiums—without the ridiculous fees or the trap of multi-year contracts.
            </p>
          </div>
          <MockupBeforeAfter />
        </div>
      </div>
    </section>
  );
}

function QuoteSection() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} style={{ backgroundColor: B.navyDeep }}>
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h2 className={`text-3xl lg:text-4xl font-bold text-white mb-8 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          "I was paying them to hold my own money hostage."
        </h2>
        <div className="space-y-4">
          {[
            "Evinra wasn't dreamed up in a Silicon Valley boardroom. It was born in the everyday.",
            "We spent two years in the trenches alongside some of the biggest touring productions and independent operators. We watched you do all the heavy lifting: moving the tents, managing exhausted crews, and taking on 100% of the physical risk to make a live event happen.",
            "But the ticketing companies didn't share that risk. They just showed up to collect their cut.",
            "We watched them lock operators into bad deals and sit on their payouts for weeks. You were putting everything on the line, and the software companies were treating your gates like an ATM.",
            "The breaking point was a conversation with the director of a massive touring circus. She looked at her setup and realized she wasn't running her own box office anymore. She was doing all the work, but her operation was simply acting as a lead generator for a tech giant.",
            "That was the trigger.",
            "Operators didn't need another generic app. You needed a way out. We built Evinra so independent producers could finally fire the middlemen and take their gates, their data, and their cash back.",
          ].map((p, i) => (
            <p key={i} className={`text-sm leading-relaxed transition-all duration-500 ${inView ? "opacity-100" : "opacity-0"}`}
              style={{ color: B.mutedLight, transitionDelay: `${i * 60}ms` }}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function FragmentationSection() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} style={{ backgroundColor: B.bg }}>
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h2 className={`text-3xl lg:text-4xl font-bold mb-6 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`} style={{ color: B.text }}>
          The Nightmare of Taped-Together Software.
        </h2>
        <div className="space-y-4">
          {[
            "But predatory fees were only half the problem. When we looked at how these massive events were actually running on the ground, it was a mess.",
            "Ticketing lived in one app, vendors were tracked in a spreadsheet, and the point-of-sale was completely disconnected. Operators were forced to tape their operations together, crossing their fingers and hoping the integrations wouldn't break when the crowds finally showed up.",
            "The biggest threat was the internet. Live gate operations were entirely dependent on unstable cell service. The second a packed fairground overloaded the local tower, the cloud-dependent scanners froze, the lines bottlenecked, and the revenue stopped flowing.",
          ].map((p, i) => (
            <p key={i} className={`text-sm leading-relaxed transition-all duration-500 ${inView ? "opacity-100" : "opacity-0"}`}
              style={{ color: B.muted, transitionDelay: `${(i + 1) * 75}ms` }}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function FieldChaosSection() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} style={{ backgroundColor: B.navyDarkest }}>
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h2 className={`text-3xl lg:text-4xl font-bold text-white mb-6 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          Built for the Physical Chaos of the Field.
        </h2>
        <div className="space-y-4">
          {[
            "We knew another basic website wasn't going to fix this.",
            "We didn't build Evinra in a vacuum. Our technology team worked side-by-side with real event operators, admissions staff, and concessions teams. We watched how crews actually moved, what caused the bottlenecks, and what hardware actually survived the weather.",
            "We designed Evinra to be operational-first, rather than ticketing-first. We built a native ecosystem that thrives in the physical chaos of the field, the mud, and the midnight tear-downs. It doesn't care if the WiFi drops—your gates keep scanning and your POS keeps processing cash with zero bars of service.",
          ].map((p, i) => (
            <p key={i} className={`text-sm leading-relaxed transition-all duration-500 ${inView ? "opacity-100" : "opacity-0"}`}
              style={{ color: B.mutedLight, transitionDelay: `${(i + 1) * 75}ms` }}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function EcosystemSection() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} style={{ backgroundColor: B.bg }}>
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h2 className={`text-3xl lg:text-4xl font-bold mb-6 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`} style={{ color: B.text }}>
          One Connected Ecosystem.
        </h2>
        <div className="space-y-4">
          {[
            "Our vision is simple: to bring modern, enterprise-level operations to the independent producer. We brought ticketing, admissions, POS, vendors, and financial reporting into one single, connected platform.",
            "No more data silos. No more fragmented software. Just one powerful engine that lets you run the entire show.",
          ].map((p, i) => (
            <p key={i} className={`text-sm leading-relaxed transition-all duration-500 ${inView ? "opacity-100" : "opacity-0"}`}
              style={{ color: i === 1 ? B.navy : B.muted, fontWeight: i === 1 ? 500 : 400, transitionDelay: `${(i + 1) * 75}ms` }}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function OurStory() {
  return (
    <div>
      <Navbar/>
      <main>
        <Hero/>
        <QuoteSection/>
        <FragmentationSection/>
        <FieldChaosSection/>
        <EcosystemSection/>
        <DemoFormSection
          title="Ready to Take Your Gates Back?"
          subtitle="Schedule a custom technical walkthrough. We'll look at your current hardware, identify your bottlenecks, and show you exactly how Evinra handles the heavy lifting. No sales talk, just a look under the hood."
          btnLabel="Request a Demo →"
        />
      </main>
      <Footer/>
    </div>
  );
}
