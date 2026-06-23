import { B, TealBtn, GhostBtn } from "../brand";
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
            Looking for a Better TicketSocket Alternative?<br/>
            <span style={{ color: B.teal }}>Meet Evinra.</span>
          </h1>
          <p className="text-[15px] leading-relaxed mb-8" style={{ color: B.mutedLight }}>
            You don't have to sacrifice physical reliability for brand control. Discover why high-volume independent promoters, fairs, and touring productions are choosing Evinra for transparent pricing, native offline POS functionality, and complete event lifecycle management.
          </p>
          <div className="flex flex-wrap gap-3">
            <TealBtn href="/request-a-demo">See Evinra in Action <IconArrowRight className="w-4 h-4"/></TealBtn>
            <GhostBtn href="#comparison">See the Comparison Chart →</GhostBtn>
          </div>
        </div>
        <MockupCoverage />
      </div>
    </section>
  );
}

function ComparisonTable() {
  const [ref, inView] = useInView();
  return (
    <section id="comparison" ref={ref} style={{ backgroundColor: B.bg }}>
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
          <h2 className="text-3xl font-bold mb-3" style={{ color: B.text }}>Basic Offline Caching vs. A True Local Network.</h2>
          <p className="text-sm leading-relaxed" style={{ color: B.muted }}>Not all offline modes are created equal. There is a fundamental difference between a scanner that caches a ticket list and a platform that runs a real, closed-loop local network across your entire footprint.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { label: "The TicketSocket Offline Mode", accent: false, body: "TicketSocket's offline functionality works by downloading a snapshot of your ticket list to each individual device. Each gate operates in isolation. If two people try to use the same screenshot ticket at two different gates simultaneously, neither gate knows the other exists — the duplicate walks right in." },
            { label: "Evinra's Closed-Loop Local Network", accent: true, body: "Evinra creates an on-site peer-to-peer network between all your devices using your local WiFi or a mobile hotspot. When Gate A scans a ticket, that invalidation is broadcast across the entire local network in milliseconds. Gate B rejects the duplicate before the fraudster even reaches the scanner." },
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
          <h2 className="text-3xl font-bold text-white mb-3">A Ticketing Platform vs. A Complete Production Ecosystem.</h2>
          <p className="text-sm leading-relaxed" style={{ color: B.muted }}>Selling the ticket is only the first step. Who handles the physical gates, the cash vendors, the hardware inventory, and the post-event reconciliation?</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { label: "The TicketSocket Handoff", accent: false, body: "TicketSocket is an excellent tool for the online presale window. But the moment your attendee walks up to a physical gate, you're on your own. Vendor cash management, hardware tracking, multi-gate fraud sync, and post-event settlement all require separate third-party tools — and separate monthly invoices." },
            { label: "Evinra's End-to-End Platform", accent: true, body: "Evinra runs the entire production lifecycle on one platform. The software that sold the ticket online is the same software scanning the gate, managing the food truck POS, tracking your hardware inventory, and generating your post-event settlement report. One vendor. One login. One source of truth for your entire operation." },
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

function CalcBanner({ h2, cta, href }) {
  return (
    <section style={{ backgroundColor: B.navyDeep }}>
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col sm:flex-row items-center justify-between gap-6">
        <h2 className="text-2xl font-bold text-white max-w-xl">{h2}</h2>
        <a href={href}
          className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-md text-white"
          style={{ backgroundColor: B.teal, whiteSpace: "nowrap" }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = B.tealDark}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = B.teal}>
          {cta}
        </a>
      </div>
    </section>
  );
}

function RevenueTraps() {
  const [ref, inView] = useInView();
  const items = [
    { h: "Zero Percentage Cuts on Your Ticket Revenue", body: "Evinra charges a flat, transparent software rate — not a percentage of every ticket you sell. As your event grows and you sell more tickets, your software cost stays the same." },
    { h: "You Set the Convenience Fee. You Keep It.", body: "If you charge a $3 convenience fee per ticket, that $3 goes straight to your bank account. We don't take a cut of fees you created to cover your own operational costs." },
    { h: "No Multi-Year Lock-In Contracts", body: "We offer a zero lock-in option. Evinra earns your business every season by building better software, not by trapping you in a contract with painful exit clauses." },
    { h: "Your Attendee Data is Yours. Always.", body: "We don't resell your attendee lists. We don't market competing events to your ticket buyers. Your audience is your most valuable asset — it stays in your hands." },
  ];
  return (
    <section ref={ref} className="border-b" style={{ backgroundColor: B.bg, borderColor: "#E2E8F0" }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-xl mb-12">
          <h2 className="text-3xl font-bold mb-3" style={{ color: B.text }}>Keep More of Your Revenue with Zero Contract Traps.</h2>
          <p className="text-sm leading-relaxed" style={{ color: B.muted }}>The real cost of a ticketing platform isn't the monthly fee — it's the percentage points quietly bled on every transaction, every season, for years.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map(({ h, body }, i) => (
            <div key={h}
              className={`rounded-xl p-7 border transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ backgroundColor: "#fff", borderColor: "#E2E8F0", transitionDelay: `${i * 80}ms` }}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `rgba(32,153,145,0.1)` }}>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke={B.teal} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
              <h3 className="text-base font-semibold mb-2" style={{ color: B.text }}>{h}</h3>
              <p className="text-sm leading-relaxed" style={{ color: B.muted }}>{body}</p>
            </div>
          ))}
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
        <RevenueTraps/>
        <CalcBanner
          h2="See the Math for Yourself."
          cta="Run the Competitive Math →"
          href="/roi-calculator"
        />
        <DemoFormSection
          title="Ready to Upgrade to a Truly Rugged Box Office?"
          subtitle="See the offline network architecture, check the gate hardware, and get your questions answered. No sales talk, just a walkthrough."
          btnLabel="See Evinra in Action →"
          formTitle="See Evinra in Action"
        />
      </main>
      <Footer/>
    </div>
  );
}
