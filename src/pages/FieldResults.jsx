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
      <div className="grid grid-cols-6 border-b" style={{ borderColor: "#E2E8F0", backgroundColor: B.bg }}>
        {[["G1","41"],["G2","38"],["G3","35"],["G4","29"],["G5","37"],["G6","—"]].map(([gate, scans], i) => (
          <div key={gate} className={`px-4 py-2.5 text-center ${i < 5 ? "border-r" : ""}`} style={{ borderColor: "#E2E8F0" }}>
            <p className="text-[9px] font-semibold uppercase tracking-wide mb-0.5" style={{ color: B.muted }}>{gate}</p>
            <p className="text-sm font-bold font-mono" style={{ color: i < 5 ? B.teal : "#CBD5E1" }}>{scans}</p>
            <p className="text-[9px]" style={{ color: B.muted }}>s/min</p>
          </div>
        ))}
      </div>
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
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full w-16 text-center shrink-0"
              style={{
                backgroundColor: status === "settled" ? "rgba(32,153,145,0.1)" : "rgba(58,75,112,0.15)",
                color: status === "settled" ? B.teal : B.navy,
              }}>
              {status === "settled" ? "Settled" : "Live"}
            </span>
          </div>
        ))}
      </div>
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

const GATES = [
  { id: "G1", scans: 41, pct: 85 },
  { id: "G2", scans: 38, pct: 79 },
  { id: "G3", scans: 35, pct: 73 },
  { id: "G4", scans: 29, pct: 60 },
  { id: "G5", scans: 37, pct: 77 },
  { id: "G6", scans: 12, pct: 25 },
];

function MockupGateVelocity() {
  return (
    <div className="rounded-2xl border overflow-hidden" style={{ backgroundColor: B.navyDarkest, borderColor: `${B.navy}60` }}>
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
      <div className="flex items-center justify-between px-6 py-3 border-t" style={{ borderColor: `${B.navy}60`, backgroundColor: "#060D14" }}>
        <span className="text-[11px]" style={{ color: B.muted }}>G6 velocity below threshold — alert sent to supervisor</span>
        <span className="text-[11px] font-semibold" style={{ color: B.teal }}>Peak: 48 scans/min · Gate 1</span>
      </div>
    </div>
  );
}

const METRICS = [
  { value: "100,000+", label: "Attendee Capacity", desc: "Engineered to support massive crowds without crashing or slowing down." },
  { value: "35+",      label: "Scans Per Minute",  desc: "Lightning-fast gate velocity per device to kill bottlenecks instantly." },
  { value: "250,000+", label: "Weekend Scans",     desc: "Designed to handle massive multi-day ticket volume seamlessly." },
  { value: "99.9%",   label: "Uptime Target",      desc: "Built on an offline-first infrastructure that survives dead cell zones." },
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
            Tested in the Field.<br/>
            <span style={{ color: B.teal }}>Proven at the Gates.</span>
          </h1>
          <p className="text-[15px] leading-relaxed" style={{ color: B.mutedLight }}>
            We didn't build this for sterile convention centers. Evinra is engineered and tested for the physical chaos of outdoor fairs, traveling circuses, and touring productions.
          </p>
        </div>
      </div>
    </section>
  );
}

function RawPerformance() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} style={{ backgroundColor: B.navyDeep }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-xl mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">The Raw Performance Data.</h2>
          <p className="text-sm leading-relaxed" style={{ color: B.mutedLight }}>
            When the gates open, promises don't matter. Only performance does. Here is what the platform is engineered to handle.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {METRICS.map(({ value, label, desc }, i) => (
            <div key={label}
              className={`rounded-xl p-6 border transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ backgroundColor: B.navyDarkest, borderColor: `${B.navy}60`, transitionDelay: `${i * 80}ms` }}>
              <p className="text-3xl font-bold mb-1" style={{ color: B.teal }}>{value}</p>
              <p className="text-xs font-semibold text-white mb-2">{label}</p>
              <p className="text-[11px] leading-snug" style={{ color: B.muted }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReclaimingBoxOffice() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} style={{ backgroundColor: B.bg }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-xl mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: B.teal }}>Field Report</p>
          <h2 className="text-3xl font-bold mb-6" style={{ color: B.text }}>Reclaiming the Box Office.</h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: B.muted }}>
            Every ticket sold was generating revenue for two businesses: the circus and their ticketing provider. The circus handled the travel, production, performers, and promotion. The ticketing platform collected hefty fees and kept ownership of the customer data.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: B.muted }}>
            Evinra changed that equation. With a fully branded checkout experience, the circus reduced ticketing fees by up to 50%, gained complete access to buyer data, and built direct relationships with their audience instead of renting them from a third party.
          </p>
        </div>
        <div className={`rounded-2xl p-8 border transition-all duration-500 mb-10 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          style={{ backgroundColor: B.navyDeep, borderColor: `${B.navy}60` }}>
          <svg className="w-6 h-6 mb-5 opacity-40" viewBox="0 0 24 24" fill="currentColor" style={{ color: B.teal }}>
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
          <p className="text-base leading-relaxed text-white mb-5">
            "We were locked into expensive contracts and losing control of our own gates. The ticketing platform Yoaldis and his team built gave us our brand back and immediately protected our profit margins."
          </p>
          <p className="text-xs font-medium" style={{ color: B.tealLight }}>— Director of a Multi-City Touring Circus</p>
        </div>
        <MockupSettlement />
      </div>
    </section>
  );
}

function WhyLinesNeverStop() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} className="border-b" style={{ backgroundColor: B.navyDarkest, borderColor: `${B.navy}60` }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className={`transition-all duration-500 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}>
            <h2 className="text-3xl font-bold text-white mb-4">Why the Lines Never Stop Moving.</h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: B.mutedLight }}>
              We don't blame the internet when things go wrong. We built a system that survives without it.
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: B.mutedLight }}>
              Rural cell towers crash when 5,000 fans show up at once. When that happens, traditional cloud-dependent apps freeze, the spinning wheel of death appears, and your revenue stops.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: B.mutedLight }}>
              Evinra fixes this with a "download first, sync later" workflow. Your devices download all tickets and permissions before the gates even open. When the internet drops, your scanners validate locally, completely off the grid. The millisecond a connection returns, the system automatically synchronizes the data in the background.
            </p>
          </div>
          <div className={`transition-all duration-500 delay-100 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`}>
            <MockupGateVelocity />
          </div>
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
        <RawPerformance/>
        <ReclaimingBoxOffice/>
        <WhyLinesNeverStop/>
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
