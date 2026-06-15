import { B, TealBtn } from "../brand";
import { Navbar, Footer, DemoFormSection, useInView, IconCheck, IconArrowRight } from "../components/shared";

function MockupCoverage() {
  const tsRows = [
    { label: "Online ticket sales",      yes: true },
    { label: "White-label checkout",     yes: true },
    { label: "Basic offline scanning",   yes: true },
    { label: "Native offline POS",       yes: false },
    { label: "Multi-gate fraud sync",    yes: false },
    { label: "Vendor cash management",   yes: false },
    { label: "Hardware inventory",       yes: false },
    { label: "Auto commission splits",   yes: false },
  ];
  return (
    <div className="grid grid-cols-2 gap-3">
      {/* TicketSocket column */}
      <div className="rounded-xl border overflow-hidden" style={{ borderColor: `${B.navy}50` }}>
        <div className="px-4 py-3 border-b" style={{ backgroundColor: B.navyDeep, borderColor: `${B.navy}50` }}>
          <p className="text-[11px] font-semibold" style={{ color: B.mutedLight }}>TicketSocket</p>
          <p className="text-[10px]" style={{ color: B.muted }}>Ticketing platform</p>
        </div>
        <div className="divide-y" style={{ backgroundColor: "#0D1520", borderColor: `${B.navy}40` }}>
          {tsRows.map(({ label, yes }) => (
            <div key={label} className="flex items-center gap-2 px-3 py-2">
              {yes
                ? <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke={B.teal} strokeWidth={2.5}><path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                : <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth={2}><path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/></svg>
              }
              <span className="text-[10px] leading-snug" style={{ color: yes ? B.mutedLight : "#374151" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Evinra column */}
      <div className="rounded-xl border overflow-hidden" style={{ borderColor: `rgba(32,153,145,0.4)`, boxShadow: "0 0 24px rgba(32,153,145,0.08)" }}>
        <div className="px-4 py-3 border-b" style={{ backgroundColor: B.navyDeep, borderColor: `rgba(32,153,145,0.3)` }}>
          <p className="text-[11px] font-semibold" style={{ color: B.tealLight }}>Evinra</p>
          <p className="text-[10px]" style={{ color: B.muted }}>Full operations platform</p>
        </div>
        <div className="divide-y" style={{ backgroundColor: "#0D1520", borderColor: `${B.navy}40` }}>
          {tsRows.map(({ label }) => (
            <div key={label} className="flex items-center gap-2 px-3 py-2">
              <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke={B.teal} strokeWidth={2.5}><path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span className="text-[10px] leading-snug" style={{ color: B.mutedLight }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const TABLE_ROWS = [
  { feature: "100% White-Label Checkout",       ts: { yes: true, label: "Yes" },          ev: { yes: true,  label: "Yes" } },
  { feature: "Keep 100% of Convenience Fees",   ts: { yes: true, label: "Yes" },          ev: { yes: true,  label: "Yes" } },
  { feature: "Offline Ticket Scanning",         ts: { yes: true, label: "Yes (Basic Caching)" }, ev: { yes: true, label: "Yes (Device Caching, 35+ scans/min)" } },
  { feature: "Multi-Gate Anti-Fraud Sync",      ts: { yes: false, label: "Cloud-Reliant" }, ev: { yes: true, label: "Local Closed-Loop Network" } },
  { feature: "Native Offline POS (Cash/Sales)", ts: { yes: false, label: "Limited / Third-Party" }, ev: { yes: true, label: "Built for the Field" } },
  { feature: "Automated Vendor Payouts",        ts: { yes: false, label: "Third-Party Apps" }, ev: { yes: true, label: "Fully Integrated" } },
  { feature: "Contract Lock-In",                ts: { yes: false, label: "Multi-Year Common" }, ev: { yes: true, label: "Zero Lock-In Option" } },
];

const CheckIcon = () => (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} style={{ color: B.teal }}>
    <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const XIcon = () => (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} style={{ color: "#EF4444" }}>
    <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden" style={{ backgroundColor: B.navyDarkest }}>
      <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 55% 45% at 65% 50%, ${B.navyDeep} 0%, transparent 70%)` }}/>
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-6 border text-xs font-medium" style={{ backgroundColor: "rgba(32,153,145,0.1)", borderColor: "rgba(32,153,145,0.25)", color: B.tealLight }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: B.teal }}/>
            Evinra vs. TicketSocket
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-[1.07] tracking-tight mb-6">
            TicketSocket Sells the Ticket.<br/>
            <span style={{ color: B.teal }}>Evinra Runs the Show.</span>
          </h1>
          <p className="text-[15px] leading-relaxed mb-8" style={{ color: B.mutedLight }}>
            TicketSocket is a powerful ticketing engine. But when the gates open and the field gets physical, you need more than a ticketing app. You need a complete operational system.
          </p>
          <TealBtn href="/request-a-demo">See Evinra in Action <IconArrowRight className="w-4 h-4"/></TealBtn>
        </div>
        <MockupCoverage />
      </div>
    </section>
  );
}

function ComparisonTable() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} style={{ backgroundColor: B.bg }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-xl mb-10">
          <h2 className="text-3xl font-bold mb-3" style={{ color: B.text }}>Feature by Feature.</h2>
          <p className="text-sm" style={{ color: B.muted }}>The honest comparison. No spin, just specs.</p>
        </div>
        <div className={`rounded-2xl overflow-hidden border transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ borderColor: "#E2E8F0" }}>
          {/* Header */}
          <div className="grid grid-cols-3 text-sm font-semibold" style={{ backgroundColor: B.navyDeep }}>
            <div className="px-5 py-4 text-white">Feature / Capability</div>
            <div className="px-5 py-4 text-center" style={{ color: B.mutedLight }}>TicketSocket</div>
            <div className="px-5 py-4 text-center text-white" style={{ color: B.teal }}>Evinra</div>
          </div>
          {TABLE_ROWS.map((row, i) => (
            <div key={row.feature} className={`grid grid-cols-3 text-sm border-t ${i % 2 === 0 ? "" : ""}`} style={{ borderColor: "#E2E8F0", backgroundColor: i % 2 === 0 ? "#fff" : B.bg }}>
              <div className="px-5 py-4 font-medium" style={{ color: B.text }}>{row.feature}</div>
              <div className="px-5 py-4 flex items-center justify-center gap-2">
                {row.ts.yes ? <CheckIcon/> : <XIcon/>}
                <span className="text-xs" style={{ color: row.ts.yes ? B.navy : "#EF4444" }}>{row.ts.label}</span>
              </div>
              <div className="px-5 py-4 flex items-center justify-center gap-2" style={{ backgroundColor: "rgba(32,153,145,0.04)" }}>
                {row.ev.yes ? <CheckIcon/> : <XIcon/>}
                <span className="text-xs font-medium" style={{ color: row.ev.yes ? B.teal : "#EF4444" }}>{row.ev.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WalkUpSection() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} className="border-b" style={{ backgroundColor: "#fff", borderColor: "#E2E8F0" }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-xl mb-12">
          <h2 className="text-3xl font-bold mb-3" style={{ color: B.text }}>Process Walk-Up Sales Without the Bottleneck.</h2>
          <p className="text-sm leading-relaxed" style={{ color: B.muted }}>Selling tickets online is easy. Processing high-volume cash and card sales in a muddy field is where standard apps fail.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { label: "The TicketSocket Runaround", accent: false, body: "TicketSocket is an incredible engine for selling tickets online. But when it comes to the physical reality of your gates—managing cash tills, walk-up sales, and rapid-fire entry—their offline capabilities are limited. They are a ticketing app trying to survive in a physical environment." },
            { label: "Evinra's Operational DNA", accent: true, body: "Evinra was built operational-first. Our native point-of-sale is engineered specifically for the field. It seamlessly handles both your digital tickets and your physical cash drawers on the same rugged device, keeping your lines moving at a rapid 35+ scans per minute." },
          ].map(({ label, accent, body }, i) => (
            <div key={label}
              className={`rounded-xl p-7 border transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ backgroundColor: "#fff", borderColor: accent ? `${B.teal}40` : "#E2E8F0", transitionDelay: `${i * 100}ms` }}>
              {accent && <div className="w-1 h-6 rounded mb-4" style={{ backgroundColor: B.teal }}/>}
              <h4 className="text-base font-semibold mb-3" style={{ color: B.text }}>{label}</h4>
              <p className="text-sm leading-relaxed" style={{ color: B.muted }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EcosystemSection() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} style={{ backgroundColor: B.navyDarkest }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-xl mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Don't Tape Together Three Separate Apps to Run Your Show.</h2>
          <p className="text-sm leading-relaxed" style={{ color: B.muted }}>Selling the ticket is only 10% of the job. Evinra manages the entire physical production lifecycle natively.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { label: "The TicketSocket Setup", accent: false, body: "Once your attendee buys a ticket, TicketSocket's job is mostly done. To track physical hardware inventory, manage granular staff permissions on-site, handle multi-vendor cash boxes, and calculate food truck commissions, you have to export CSV files and connect disparate third-party apps." },
            { label: "Evinra's Native Ecosystem", accent: true, body: "Evinra is a complete production ecosystem. The exact same software that scanned the ticket at the front gate also tracks your vendor sales and automatically calculates your commission splits in real-time, tracks physical scanner inventory, and populates live financial reporting. Close your physical cash boxes and digital books in minutes, not days." },
          ].map(({ label, accent, body }, i) => (
            <div key={label}
              className={`rounded-xl p-7 border transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ backgroundColor: B.navyDeep, borderColor: accent ? `${B.teal}40` : `${B.navy}60`, transitionDelay: `${i * 100}ms` }}>
              {accent && <div className="w-1 h-6 rounded mb-4" style={{ backgroundColor: B.teal }}/>}
              <h4 className="text-base font-semibold text-white mb-3">{label}</h4>
              <p className="text-sm leading-relaxed" style={{ color: B.muted }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrapVsAdvantage() {
  const [ref, inView] = useInView();
  const rows = [
    ["You pay ticketing fees on every ticket", "You keep 100% of convenience fees"],
    ["Cloud-dependent scanning fails in dead zones", "Device-cached scanning works with zero bars"],
    ["Walk-up sales require a separate third-party app", "Native POS handles cash, card, and digital in one screen"],
    ["Vendor settlements require CSV exports", "Automated commission splits close in real time"],
    ["Multi-year contracts lock you in", "Zero lock-in option — month to month"],
    ["Customer data belongs to the platform", "You own every attendee record"],
  ];
  return (
    <section ref={ref} className="border-b" style={{ backgroundColor: B.bg, borderColor: "#E2E8F0" }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border" style={{ borderColor: "#E2E8F0" }}>
          <div className="p-6 border-r" style={{ backgroundColor: "#fff", borderColor: "#E2E8F0" }}>
            <h3 className="text-base font-bold mb-5" style={{ color: B.text }}>The TicketSocket Trap</h3>
            <ul className="space-y-3">
              {rows.map(([trap]) => (
                <li key={trap} className="flex items-start gap-3 text-sm" style={{ color: "#EF4444" }}>
                  <svg className="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}><path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span style={{ color: B.muted }}>{trap}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6" style={{ backgroundColor: "rgba(32,153,145,0.03)" }}>
            <h3 className="text-base font-bold mb-5" style={{ color: B.teal }}>The Evinra Advantage</h3>
            <ul className="space-y-3">
              {rows.map(([, adv]) => (
                <li key={adv} className="flex items-start gap-3 text-sm">
                  <svg className="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} style={{ color: B.teal }}><path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span style={{ color: B.navy }}>{adv}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function VsTicketSocket() {
  return (
    <div>
      <Navbar/>
      <main>
        <Hero/>
        <ComparisonTable/>
        <WalkUpSection/>
        <EcosystemSection/>
        <TrapVsAdvantage/>
        <DemoFormSection title="Ready to Make the Switch?" subtitle="Schedule a technical walkthrough. We'll map your current TicketSocket setup to Evinra and show you exactly what changes — and what improves." btnLabel="See the Side-by-Side →"/>
      </main>
      <Footer/>
    </div>
  );
}
