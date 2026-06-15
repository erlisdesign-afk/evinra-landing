import { B, TealBtn } from "../brand";
import { Navbar, Footer, DemoFormSection, useInView, IconArrowRight } from "../components/shared";

const VENDORS = [
  { name: "Main Food Court",    revenue: "$8,420",  rate: 18, pct: 84, status: "settled" },
  { name: "Craft Beer Garden",  revenue: "$5,910",  rate: 22, pct: 59, status: "settled" },
  { name: "Midway Games",       revenue: "$3,240",  rate: 15, pct: 32, status: "pending" },
  { name: "Merch Tent A",       revenue: "$2,180",  rate: 12, pct: 22, status: "pending" },
];

function MockupSettlement() {
  return (
    <div className="rounded-2xl border overflow-hidden shadow-[0_24px_48px_-12px_rgba(13,21,32,0.12)]"
      style={{ backgroundColor: "#fff", borderColor: "#E2E8F0" }}>
      {/* Dashboard topbar */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b" style={{ backgroundColor: B.navyDarkest, borderColor: `${B.navy}60` }}>
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-white">Evinra — Vendor Settlement</span>
          <span className="text-[10px] px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: "rgba(32,153,145,0.2)", color: B.tealLight }}>Live</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[11px]" style={{ color: B.muted }}>Southeast Fair · Day 3 of 8</span>
          <span className="text-[11px] font-semibold" style={{ color: B.tealLight }}>Total: $19,750</span>
        </div>
      </div>
      {/* Gate velocity strip */}
      <div className="grid grid-cols-6 border-b" style={{ borderColor: "#E2E8F0", backgroundColor: B.bg }}>
        {[["G1","41"],["G2","38"],["G3","35"],["G4","29"],["G5","37"],["G6","—"]].map(([gate, scans], i) => (
          <div key={gate} className={`px-4 py-2.5 text-center ${i < 5 ? "border-r" : ""}`} style={{ borderColor: "#E2E8F0" }}>
            <p className="text-[9px] font-semibold uppercase tracking-wide mb-0.5" style={{ color: B.muted }}>{gate}</p>
            <p className="text-sm font-bold font-mono" style={{ color: i < 5 ? B.teal : "#CBD5E1" }}>{scans}</p>
            <p className="text-[9px]" style={{ color: B.muted }}>s/min</p>
          </div>
        ))}
      </div>
      {/* Vendor rows */}
      <div className="divide-y" style={{ borderColor: "#F1F5F9" }}>
        {VENDORS.map(({ name, revenue, rate, pct, status }) => (
          <div key={name} className="px-5 py-3.5 flex items-center gap-4">
            <div className="w-32 shrink-0">
              <p className="text-xs font-medium truncate" style={{ color: B.text }}>{name}</p>
              <p className="text-[10px]" style={{ color: B.muted }}>{rate}% commission</p>
            </div>
            <div className="flex-1">
              <div className="h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: "#EEF2F7" }}>
                <div className="h-full rounded-full transition-all duration-700"
                  style={{ width: `${pct}%`, backgroundColor: status === "settled" ? B.teal : B.navy }} />
              </div>
            </div>
            <span className="text-sm font-bold font-mono w-16 text-right shrink-0" style={{ color: B.text }}>{revenue}</span>
            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full w-16 text-center shrink-0`}
              style={{
                backgroundColor: status === "settled" ? "rgba(32,153,145,0.1)" : "rgba(58,75,112,0.15)",
                color: status === "settled" ? B.teal : B.navy,
              }}>
              {status === "settled" ? "Settled" : "Live"}
            </span>
          </div>
        ))}
      </div>
      {/* Footer summary */}
      <div className="flex items-center justify-between px-5 py-3 border-t" style={{ borderColor: "#E2E8F0", backgroundColor: B.bg }}>
        <span className="text-[11px]" style={{ color: B.muted }}>2 of 4 vendors auto-settled · 2 active</span>
        <div className="flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke={B.teal} strokeWidth={2.5}><path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span className="text-[11px] font-semibold" style={{ color: B.teal }}>Books close in &lt; 4 hrs</span>
        </div>
      </div>
    </div>
  );
}

const METRICS = [
  { value: "35+", label: "Scans per minute, per gate device" },
  { value: "< 4 hrs", label: "Average multi-vendor settlement close" },
  { value: "100%", label: "Native offline — no cached web app" },
  { value: "99.9%", label: "Uptime target across active deployments" },
];

const TESTIMONIALS = [
  {
    quote: "We were spending the better part of two days reconciling vendor settlements after every run. With Evinra, we close the books on the drive home. That alone paid for the platform in the first season.",
    role: "Operations Director, 5-stop regional fair circuit",
  },
  {
    quote: "Our gates used to stall every time someone walked in with a bad WiFi signal. Now we scan 40+ tickets a minute with zero bars. The line keeps moving. Complaints went to zero.",
    role: "General Manager, annual outdoor music festival",
  },
];

function Hero() {
  return (
    <section className="relative pt-28 pb-20" style={{ backgroundColor: B.navyDarkest }}>
      <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 55% 45% at 68% 50%, ${B.navyDeep} 0%, transparent 70%)` }}/>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-6 border text-xs font-medium" style={{ backgroundColor: "rgba(32,153,145,0.1)", borderColor: "rgba(32,153,145,0.25)", color: B.tealLight }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: B.teal }}/>
            Field Results
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-[1.07] tracking-tight mb-6">
            These Aren't Case Studies.<br/>
            <span style={{ color: B.teal }}>They're Field Reports.</span>
          </h1>
          <p className="text-[15px] leading-relaxed" style={{ color: B.mutedLight }}>
            Evinra doesn't manufacture success stories. Every metric on this page came from a real deployment, in a real field, with real stakes. Here's what the platform actually does when gates open.
          </p>
        </div>
      </div>
    </section>
  );
}

function MetricsStrip() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} style={{ backgroundColor: B.navyDeep }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {METRICS.map(({ value, label }, i) => (
            <div key={label}
              className={`rounded-xl p-6 text-center border transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ backgroundColor: B.navyDarkest, borderColor: `${B.navy}60`, transitionDelay: `${i * 80}ms` }}>
              <p className="text-3xl font-bold mb-2" style={{ color: B.teal }}>{value}</p>
              <p className="text-xs font-medium leading-snug" style={{ color: B.mutedLight }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudy() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} style={{ backgroundColor: B.bg }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-xl mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: B.teal }}>Case Study</p>
          <h2 className="text-3xl font-bold mb-3" style={{ color: B.text }}>Regional 5-Stop Fair Circuit</h2>
          <p className="text-sm" style={{ color: B.muted }}>Before / After Evinra — same operator, same routes, different results</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className={`rounded-xl p-7 border transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`} style={{ backgroundColor: "#fff", borderColor: "#E2E8F0" }}>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#EF4444" }}>Before Evinra</p>
            <ul className="space-y-3">
              {[
                "48–72 hours to close multi-vendor books after each stop",
                "3 separate platforms for ticketing, POS, and cash tracking",
                "Gate stalls during dead-zone connectivity drops",
                "Manual wristband and scanner inventory tracking via spreadsheet",
                "Monday morning CSV reconciliation every single week",
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm" style={{ color: B.muted }}>
                  <svg className="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth={2.5}><path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className={`rounded-xl p-7 border transition-all duration-500 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`} style={{ backgroundColor: "rgba(32,153,145,0.03)", borderColor: `${B.teal}30` }}>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: B.teal }}>After Evinra</p>
            <ul className="space-y-3">
              {[
                "Books closed in under 4 hours on the drive home",
                "One unified platform — ticketing, POS, and vendor management",
                "35+ scans per minute maintained with zero bars of service",
                "Hardware inventory tracked live from a single dashboard",
                "Automated commission splits: zero manual reconciliation",
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm" style={{ color: B.navy }}>
                  <svg className="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke={B.teal} strokeWidth={2.5}><path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <MockupSettlement />
      </div>
    </section>
  );
}

function Testimonials() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} style={{ backgroundColor: B.navyDarkest }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-xl mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">From the Operators Running It.</h2>
          <p className="text-sm" style={{ color: B.muted }}>Real operators. Real deployments. Unedited.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map(({ quote, role }, i) => (
            <div key={role}
              className={`rounded-xl p-8 border transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ backgroundColor: B.navyDeep, borderColor: `${B.navy}60`, transitionDelay: `${i * 100}ms` }}>
              <svg className="w-6 h-6 mb-5 opacity-50" viewBox="0 0 24 24" fill="currentColor" style={{ color: B.teal }}>
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p className="text-sm leading-relaxed text-white mb-5">"{quote}"</p>
              <p className="text-xs font-medium" style={{ color: B.tealLight }}>{role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const GATES = [
  { id: "G1", scans: 41, peak: 48, pct: 85 },
  { id: "G2", scans: 38, peak: 48, pct: 79 },
  { id: "G3", scans: 35, peak: 48, pct: 73 },
  { id: "G4", scans: 29, peak: 48, pct: 60 },
  { id: "G5", scans: 37, peak: 48, pct: 77 },
  { id: "G6", scans: 12, peak: 48, pct: 25 },
];

function MockupGateVelocity() {
  return (
    <div className="rounded-2xl border overflow-hidden" style={{ backgroundColor: B.navyDarkest, borderColor: `${B.navy}60` }}>
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: `${B.navy}60` }}>
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: B.teal }}/>
          <span className="text-sm font-semibold text-white">Gate Velocity — Live</span>
        </div>
        <div className="flex items-center gap-6 text-[11px]" style={{ color: B.muted }}>
          <span>Total scans today: <span className="font-semibold text-white">14,209</span></span>
          <span>Avg rate: <span className="font-semibold" style={{ color: B.teal }}>32 /min</span></span>
          <span className="px-2 py-0.5 rounded-full" style={{ backgroundColor: "rgba(32,153,145,0.12)", color: B.tealLight }}>100% Offline</span>
        </div>
      </div>
      {/* Gate bars */}
      <div className="grid grid-cols-6 gap-0 divide-x" style={{ borderColor: `${B.navy}40` }}>
        {GATES.map(({ id, scans, pct }) => (
          <div key={id} className="flex flex-col items-center px-4 py-6">
            <div className="w-full flex flex-col items-center justify-end mb-3" style={{ height: 80 }}>
              <div className="w-6 rounded-t-sm transition-all duration-700"
                style={{ height: `${pct}%`, backgroundColor: pct > 70 ? B.teal : pct > 40 ? B.navy : "#374151" }}/>
            </div>
            <p className="text-lg font-bold font-mono mb-0.5" style={{ color: pct > 70 ? B.teal : pct > 40 ? B.mutedLight : B.muted }}>{scans}</p>
            <p className="text-[10px]" style={{ color: B.muted }}>s/min</p>
            <p className="text-[10px] font-semibold mt-1" style={{ color: B.muted }}>{id}</p>
          </div>
        ))}
      </div>
      {/* Footer */}
      <div className="flex items-center justify-between px-6 py-3 border-t" style={{ borderColor: `${B.navy}60`, backgroundColor: "#060D14" }}>
        <span className="text-[11px]" style={{ color: B.muted }}>G6 velocity below threshold — alert sent to supervisor</span>
        <span className="text-[11px] font-semibold" style={{ color: B.teal }}>Peak: 48 scans/min · Gate 1</span>
      </div>
    </div>
  );
}

function WhatEvinraTrack() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} className="border-b" style={{ backgroundColor: B.bg, borderColor: "#E2E8F0" }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-xl mb-12">
          <h2 className="text-3xl font-bold mb-3" style={{ color: B.text }}>What Evinra Tracks While You're Running the Show.</h2>
          <p className="text-sm" style={{ color: B.muted }}>Every data point below is live during an active deployment — not post-processed the next morning.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { title: "Gate-by-Gate Scan Velocity", body: "Per-device scan rate in real time. Know which gate is bottlenecking before the line gets long." },
            { title: "Live Revenue by Vendor", body: "Every food truck, merchandise booth, and bar tab tracked against each vendor's commission rate automatically." },
            { title: "Ticket Validity Status", body: "Across all gates simultaneously, even in dead zones, via closed-loop local network sync." },
            { title: "Hardware Location & Sync", body: "Every scanner, tablet, and cash box: deployed location, last sync time, battery status." },
            { title: "Walk-Up vs. Pre-Sale Mix", body: "Real-time split between pre-sold digital tickets and on-site cash/card sales by gate." },
            { title: "Settlement Preview", body: "Commission calculations, payout totals, and cash-box reconciliation available before the event closes." },
          ].map(({ title, body }, i) => (
            <div key={title}
              className={`rounded-xl p-6 border transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ backgroundColor: "#fff", borderColor: "#E2E8F0", transitionDelay: `${i * 70}ms` }}>
              <div className="w-1 h-5 rounded mb-4" style={{ backgroundColor: B.teal }}/>
              <h4 className="text-sm font-semibold mb-2" style={{ color: B.text }}>{title}</h4>
              <p className="text-xs leading-relaxed" style={{ color: B.muted }}>{body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <MockupGateVelocity />
        </div>
      </div>
    </section>
  );
}

export default function FieldResults() {
  return (
    <div>
      <Navbar/>
      <main>
        <Hero/>
        <MetricsStrip/>
        <CaseStudy/>
        <Testimonials/>
        <WhatEvinraTrack/>
        <DemoFormSection title="See These Results in Your Operation." subtitle="Walk us through your current setup — tools, hardware, team structure. We'll show you exactly how Evinra maps to your workflow and what changes on day one." btnLabel="Schedule the Walkthrough →"/>
      </main>
      <Footer/>
    </div>
  );
}
