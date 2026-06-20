import { B, TealBtn, GhostBtn } from "../brand";
import { Navbar, Footer, DemoFormSection, useInView, IconCheck, IconArrowRight } from "../components/shared";

function MockupOfflinePOS() {
  return (
    <div className="relative">
      <div className="rounded-[2.5rem] border-[7px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(13,21,32,0.5)]"
        style={{ backgroundColor: "#0D1520", borderColor: "#1A2840" }}>
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-2.5 pb-1.5" style={{ backgroundColor: "#0D1520" }}>
          <span className="text-[10px] font-semibold font-mono" style={{ color: "#4E6490" }}>9:41</span>
          <div className="w-14 h-3.5 rounded-full" style={{ backgroundColor: "#1A2840" }}/>
          <div className="flex items-center gap-1.5">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth={2}>
              <path d="M1 1l22 22M16.72 11.06A10.94 10.94 0 0 1 19 12.55M5 12.55a10.94 10.94 0 0 1 5.17-2.39M10.71 5.05A16 16 0 0 1 22.56 9M1.42 9a15.91 15.91 0 0 1 4.7-2.88M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[10px] font-semibold" style={{ color: "#22C55E" }}>87%</span>
          </div>
        </div>
        {/* App shell */}
        <div className="px-4 pb-6" style={{ backgroundColor: "#111D2E" }}>
          <div className="flex items-center justify-between mb-4 pt-1">
            <span className="text-xs font-semibold text-white">Gate 2 · Evinra POS</span>
            <span className="flex items-center gap-1.5 text-[10px] font-semibold px-2.5 py-1 rounded-full"
              style={{ backgroundColor: "rgba(32,153,145,0.15)", color: B.tealLight }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: B.tealLight }}/>
              OFFLINE
            </span>
          </div>
          {/* Scan zone */}
          <div className="rounded-xl border-2 border-dashed flex flex-col items-center justify-center py-10 mb-4"
            style={{ borderColor: "rgba(32,153,145,0.3)", backgroundColor: "rgba(32,153,145,0.03)" }}>
            <svg className="w-12 h-12 mb-3" viewBox="0 0 24 24" fill="none" stroke={B.teal} strokeWidth={1.5}>
              <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" strokeLinecap="round"/>
              <line x1="7" y1="12" x2="17" y2="12" stroke={B.teal} strokeWidth={2.5} strokeLinecap="round"/>
            </svg>
            <p className="text-sm font-semibold" style={{ color: B.tealLight }}>Ready to Scan</p>
            <p className="text-xs mt-0.5" style={{ color: B.muted }}>Camera or handheld scanner</p>
          </div>
          {/* Recent scans */}
          <p className="text-[10px] font-semibold uppercase tracking-widest mb-2" style={{ color: B.muted }}>Recent Scans</p>
          <div className="space-y-1.5">
            {[
              { id: "#TK-8821", type: "Adult GA", time: "4s ago" },
              { id: "#TK-8820", type: "Adult GA", time: "9s ago" },
              { id: "#TK-8819", type: "Child 3–17", time: "23s ago" },
            ].map(({ id, type, time }) => (
              <div key={id} className="flex items-center justify-between rounded-lg px-3 py-2.5"
                style={{ backgroundColor: "#0D1520" }}>
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "rgba(34,197,94,0.15)" }}>
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth={2.5}><path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <div>
                    <p className="text-xs font-mono font-semibold text-white">{id}</p>
                    <p className="text-[10px]" style={{ color: B.muted }}>{type}</p>
                  </div>
                </div>
                <span className="text-[10px]" style={{ color: B.muted }}>{time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Floating cache badge */}
      <div className="absolute -top-4 -right-4 rounded-xl px-3.5 py-2.5 border shadow-xl z-10"
        style={{ backgroundColor: B.navyDarkest, borderColor: "rgba(32,153,145,0.4)", boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }}>
        <p className="text-[10px] font-medium mb-0.5" style={{ color: B.muted }}>Synced offline</p>
        <p className="text-xl font-bold font-mono" style={{ color: B.teal }}>4,219</p>
        <p className="text-[9px]" style={{ color: B.muted }}>tickets cached</p>
      </div>
    </div>
  );
}

const FEATURES = [
  { title: "100% Native Offline Functionality", body: "No cached web app. No polling for connectivity. Evinra is built native — it runs entirely on the device regardless of whether there's a single bar of service." },
  { title: "35+ Scans Per Minute, Per Device", body: "Our architecture guarantees gate velocity. Each device processes tickets locally at sub-second speed, then syncs to the network the moment connectivity returns." },
  { title: "Multi-Gate Anti-Fraud Sync", body: "Devices share a closed-loop local network independent of the internet. A ticket scanned at Gate 1 is invalidated at Gates 2 through 10 in real time, with zero cloud dependency." },
  { title: "Walk-Up Cash & Card Sales", body: "Evinra's POS handles on-site ticket sales, merchandise, and upsells natively — on the same device that's scanning admission tickets at the front gate." },
  { title: "Download First, Sync Later", body: "Before gates open, every device downloads the complete ticket database and permissions. When the internet drops, your crew keeps working. Sync happens automatically in the background when connectivity returns." },
  { title: "Built-In Hardware Inventory", body: "Track every scanner, wristband bundle, and cash box from a single dashboard. Know exactly what's deployed, where it is, and when it was last synced." },
];

const HARDWARE = [
  { category: "Everyday Tech", items: ["iPad 9th Gen (or higher)", "iPhone 12+"] },
  { category: "Rugged Tablets", items: ["Samsung Galaxy Tab Active Series"] },
  { category: "Heavy-Duty Gate Scanners", items: ["Zebra TC21", "Zebra TC26", "Zebra TC52", "Zebra TC57"] },
  { category: "Scanning Peripherals", items: ["Socket Mobile Bluetooth QR Scanners"] },
];

function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden" style={{ backgroundColor: B.navyDarkest }}>
      <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 60% 50% at 70% 50%, ${B.navyDeep} 0%, transparent 70%)` }}/>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-6 border text-xs font-medium" style={{ backgroundColor: "rgba(32,153,145,0.1)", borderColor: "rgba(32,153,145,0.25)", color: B.tealLight }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: B.teal }}/>
            Offline Event POS
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-[1.07] tracking-tight mb-6">
            Keep the Gates Moving.<br/>
            <span style={{ color: B.teal }}>The Offline Event POS That Never Drops.</span>
          </h1>
          <p className="text-[15px] leading-relaxed mb-8" style={{ color: B.mutedLight }}>
            Stop letting rural cell towers and fragile WiFi dictate your revenue. Evinra is a native offline point-of-sale and ticket scanning system built to process high-volume cash and digital sales in the mud, in the dark, and completely off the grid.
          </p>
          <div className="flex flex-wrap gap-3 mb-5">
            <TealBtn href="/request-a-demo">Request a Demo <IconArrowRight className="w-4 h-4"/></TealBtn>
            <GhostBtn href="#hardware">See the Hardware Specs →</GhostBtn>
          </div>
        </div>
        <MockupOfflinePOS />
      </div>
    </section>
  );
}

function SurviveField() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} style={{ backgroundColor: B.navyDeep }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Don't Take Our Word For It. Built to Survive the Field.</h2>
          <p className="text-sm leading-relaxed" style={{ color: B.mutedLight }}>
            The industry standard is to blame the internet when the lines stop moving. We built a system that simply doesn't care if the internet exists. Evinra is engineered to process walk-up sales, scan tickets, and sync data seamlessly with zero bars of service.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { value: "35+", label: "Scans Per Minute, Per Device" },
            { value: "100%", label: "Native Offline Functionality" },
            { value: "99.9%", label: "Uptime Target Infrastructure" },
          ].map((s, i) => (
            <div key={s.label}
              className={`rounded-xl p-6 border text-center transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ backgroundColor: B.navyDarkest, borderColor: `${B.navy}60`, transitionDelay: `${i * 80}ms` }}>
              <p className="text-4xl font-bold text-white mb-2" style={{ color: B.teal }}>{s.value}</p>
              <p className="text-xs font-medium" style={{ color: B.muted }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MockupWalkUpSale() {
  const items = [
    { label: "Adult GA (x2)", price: "$44.00" },
    { label: "Child 3–17 (x1)", price: "$14.00" },
  ];
  return (
    <div className="relative max-w-xs mx-auto lg:mx-0 lg:ml-auto">
      <div className="rounded-2xl overflow-hidden shadow-[0_24px_48px_-12px_rgba(13,21,32,0.45)] border"
        style={{ backgroundColor: "#0D1520", borderColor: "#1A2840" }}>
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b" style={{ borderColor: "#1A2840" }}>
          <div>
            <p className="text-xs font-semibold text-white">New Sale</p>
            <p className="text-[10px]" style={{ color: "#4E6490" }}>Gate 2 · Till #1</p>
          </div>
          <span className="flex items-center gap-1.5 text-[10px] font-semibold px-2 py-1 rounded-full"
            style={{ backgroundColor: "rgba(32,153,145,0.15)", color: B.tealLight }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: B.tealLight }}/>
            OFFLINE
          </span>
        </div>
        {/* Items */}
        <div className="px-5 pt-4 pb-2 space-y-2">
          {items.map(({ label, price }) => (
            <div key={label} className="flex items-center justify-between">
              <span className="text-xs" style={{ color: "#94A3B8" }}>{label}</span>
              <span className="text-xs font-semibold text-white">{price}</span>
            </div>
          ))}
          <div className="border-t pt-2 mt-1 flex items-center justify-between" style={{ borderColor: "#1A2840" }}>
            <span className="text-sm font-bold text-white">Total</span>
            <span className="text-sm font-bold" style={{ color: B.tealLight }}>$58.00</span>
          </div>
        </div>
        {/* Payment methods */}
        <div className="px-5 pt-3 pb-4">
          <p className="text-[10px] font-semibold uppercase tracking-widest mb-2.5" style={{ color: "#4E6490" }}>Payment Method</p>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {[
              { label: "Cash", active: false },
              { label: "Card", active: true },
            ].map(({ label, active }) => (
              <button key={label} className="rounded-lg py-2.5 text-xs font-semibold transition-all"
                style={{
                  backgroundColor: active ? B.teal : "#111D2E",
                  color: active ? "#fff" : "#4E6490",
                  border: `1px solid ${active ? B.teal : "#1A2840"}`,
                }}>
                {label}
              </button>
            ))}
          </div>
          <button className="w-full rounded-xl py-3 text-sm font-bold text-white"
            style={{ backgroundColor: B.teal }}>
            Process Sale →
          </button>
          <p className="text-center text-[10px] mt-2.5" style={{ color: "#4E6490" }}>
            Syncs automatically when connection restores
          </p>
        </div>
      </div>
    </div>
  );
}

function CloudVsOffline() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} className="border-b" style={{ backgroundColor: B.bg, borderColor: "#E2E8F0" }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-xl mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: B.text }}>The "Spinning Wheel of Death" is Costing You Walk-Up Sales.</h2>
          <p className="text-sm leading-relaxed" style={{ color: B.muted }}>
            When 5,000 attendees show up and immediately overload the local cell tower, how does your ticketing app handle the crash?
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className={`rounded-xl p-7 border transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`} style={{ backgroundColor: "#fff", borderColor: "#E2E8F0" }}>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#EF4444" }}>Standard "Cloud-First" Ticketing Apps</p>
            <p className="text-sm leading-relaxed" style={{ color: B.muted }}>
              Every scan, every sale, and every cash transaction requires a live connection back to their servers. When the tower overloads — and it always overloads — the spinning wheel appears, the gate agent freezes, and the line starts backing up. The vendor blames the internet. You lose the walk-up revenue.
            </p>
          </div>
          <div className={`rounded-xl p-7 border transition-all duration-500 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`} style={{ backgroundColor: "rgba(32,153,145,0.03)", borderColor: `${B.teal}30` }}>
            <div className="w-1 h-5 rounded mb-4" style={{ backgroundColor: B.teal }}/>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: B.teal }}>Evinra's Native Offline Ecosystem</p>
            <p className="text-sm leading-relaxed" style={{ color: B.muted }}>
              Evinra doesn't ask for permission from a remote server. Every ticket scan and cash sale runs locally on the device at sub-second speed. The cloud connection is a background sync channel, not a requirement. No connection, no problem. No bars, no stalls.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <MockupWalkUpSale />
        </div>
      </div>
    </section>
  );
}

function SpeedSection() {
  const [ref, inView] = useInView();
  const cards = [
    {
      title: "Sub-Second Gate Velocity",
      body: "Your gate devices process each ticket scan in under one second, locally on-device, with no cloud round-trip required. Lines don't stall. Revenue doesn't stop.",
    },
    {
      title: "Seamless Multi-Gate Syncing",
      body: "Your devices share a closed local network. A ticket scanned at Gate 1 is invalidated at Gates 2 through 10 in real time — zero cloud dependency, zero fraud.",
    },
    {
      title: "The Silent Cloud Catch-Up",
      body: "The moment any device picks up a signal — even a single bar — Evinra silently syncs all cached transactions to the cloud. Nothing is ever lost. Nothing is ever manually uploaded.",
    },
  ];
  return (
    <section ref={ref} style={{ backgroundColor: B.navyDarkest }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-xl mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Built for Speed, Not Just Survival.</h2>
          <p className="text-sm leading-relaxed" style={{ color: B.muted }}>Three architectural decisions that keep your gates moving when every other system stops.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {cards.map(({ title, body }, i) => (
            <div key={title}
              className={`rounded-xl p-6 border transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ backgroundColor: B.navyDeep, borderColor: `${B.navy}60`, transitionDelay: `${i * 80}ms` }}>
              <div className="w-1 h-5 rounded mb-4" style={{ backgroundColor: B.teal }}/>
              <h4 className="text-sm font-semibold text-white mb-2">{title}</h4>
              <p className="text-xs leading-relaxed" style={{ color: B.muted }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HardwareSection() {
  const [ref, inView] = useInView();
  return (
    <section id="hardware" ref={ref} className="border-b" style={{ backgroundColor: B.bg, borderColor: "#E2E8F0" }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-xl mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: B.text }}>Plug-and-Play. No Proprietary Lock-Ins.</h2>
          <p className="text-sm leading-relaxed" style={{ color: B.muted }}>Run Evinra on the consumer and enterprise hardware you already trust. No proprietary lock-in, no mandatory hardware bundle.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {HARDWARE.map(({ category, items }, i) => (
            <div key={category}
              className={`rounded-xl p-5 border transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ backgroundColor: "#fff", borderColor: "#E2E8F0", transitionDelay: `${i * 80}ms` }}>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: B.teal }}>{category}</p>
              <ul className="space-y-2">
                {items.map(item => (
                  <li key={item} className="flex items-start gap-2 text-xs" style={{ color: B.navy }}>
                    <IconCheck className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: B.teal }}/>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm mb-3" style={{ color: B.muted }}>Don't see your hardware?</p>
          <TealBtn href="/hardware-requirements">View Full Hardware Compatibility →</TealBtn>
        </div>
      </div>
    </section>
  );
}

function LifecycleSection() {
  const [ref, inView] = useInView();
  const items = [
    {
      title: "Instant Vendor Reconciliation",
      body: "Every food truck, merch booth, and bar tab is tracked against each vendor's commission rate in real time. Settlement books close automatically — no Monday morning spreadsheet.",
    },
    {
      title: "Granular Staff Tracking",
      body: "Assign strict role-based access to every device. Gate staff scan. Supervisors see real-time velocity. Admins access financial reporting. Nobody sees what they shouldn't.",
    },
    {
      title: "Live Financial Dashboards",
      body: "Track gate velocity, total revenue, vendor performance, and cash-box status from a single live dashboard — before your event even closes.",
    },
  ];
  return (
    <section ref={ref} style={{ backgroundColor: B.navyDeep }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-xl mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">The POS is Just the Beginning of the Ecosystem.</h2>
          <p className="text-sm leading-relaxed" style={{ color: B.mutedLight }}>Every scan feeds a connected operational layer that runs your entire event — not just the gate.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {items.map(({ title, body }, i) => (
            <div key={title}
              className={`rounded-xl p-6 border transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ backgroundColor: B.navyDarkest, borderColor: `${B.navy}60`, transitionDelay: `${i * 80}ms` }}>
              <div className="w-1 h-5 rounded mb-4" style={{ backgroundColor: B.teal }}/>
              <h4 className="text-sm font-semibold text-white mb-2">{title}</h4>
              <p className="text-xs leading-relaxed" style={{ color: B.muted }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function OfflinePOS() {
  return (
    <div>
      <Navbar/>
      <main>
        <Hero/>
        <SurviveField/>
        <CloudVsOffline/>
        <SpeedSection/>
        <HardwareSection/>
        <LifecycleSection/>
        <DemoFormSection
          title="Stop Losing Revenue to Dead Routers."
          subtitle="Your competitors are already automating their gates and dropping their ticketing fees. Ready to see the difference?"
          btnLabel="Speak to a Field Technician →"
        />
      </main>
      <Footer/>
    </div>
  );
}
