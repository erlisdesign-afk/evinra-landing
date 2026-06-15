import { B, TealBtn, GhostBtn } from "../brand";
import { Navbar, Footer, DemoFormSection, useInView, IconCheck, IconArrowRight } from "../components/shared";

const HARDWARE_GRID = [
  {
    category: "Consumer Tablets",
    icon: "📱",
    items: [
      { name: "iPad 9th Gen (or higher)", notes: "Recommended starter device" },
      { name: "iPad Mini 6th Gen", notes: "Compact gate use" },
      { name: "Samsung Galaxy Tab Active 3", notes: "Ruggedized Android option" },
      { name: "Samsung Galaxy Tab Active 4 Pro", notes: "Highest-spec rugged Android" },
    ],
  },
  {
    category: "Consumer Smartphones",
    icon: "📲",
    items: [
      { name: "iPhone 12 or newer", notes: "Entry-level gate device" },
      { name: "iPhone 14 Pro / 15 series", notes: "Fastest camera scanning speed" },
      { name: "Samsung Galaxy S21+", notes: "Android alternative" },
    ],
  },
  {
    category: "Enterprise Scanners",
    icon: "⚡",
    items: [
      { name: "Zebra TC21", notes: "Entry enterprise — best for high-volume gates" },
      { name: "Zebra TC26", notes: "Enhanced wireless, preferred for outdoor" },
      { name: "Zebra TC52", notes: "Premium build, IP67 dust/water resistant" },
      { name: "Zebra TC57", notes: "Maximum field durability, extended battery" },
    ],
  },
  {
    category: "Bluetooth Peripherals",
    icon: "🔌",
    items: [
      { name: "Socket Mobile CHS 7Ci", notes: "1D barcode companion scanner" },
      { name: "Socket Mobile CHS 7Qi", notes: "2D QR companion scanner — recommended" },
      { name: "Socket Mobile DuraScan D860", notes: "Rugged companion for Zebra setups" },
    ],
  },
  {
    category: "Cash Drawer & Receipt",
    icon: "💳",
    items: [
      { name: "Star Micronics SM-S230i", notes: "Bluetooth receipt printer" },
      { name: "APG Vasario Series", notes: "Cash drawer — USB or wireless" },
      { name: "Epson TM-T88VII", notes: "High-volume receipt at fixed POS stations" },
    ],
  },
  {
    category: "Network Infrastructure",
    icon: "📡",
    items: [
      { name: "Cradlepoint R1900 LTE Router", notes: "Primary field LTE gateway" },
      { name: "Peplink MAX BR1 Mini", notes: "Failover and multi-carrier bonding" },
      { name: "UniFi AP WiFi 6", notes: "On-site local network access points" },
    ],
  },
];

const REQUIREMENTS = [
  { label: "iOS", value: "13.0 or higher" },
  { label: "Android", value: "9.0 (Pie) or higher" },
  { label: "Storage", value: "Minimum 2 GB free for offline ticket cache" },
  { label: "Camera", value: "Auto-focus with 1080p or higher resolution" },
  { label: "Bluetooth", value: "4.0+ for peripheral pairing" },
  { label: "WiFi", value: "802.11ac (WiFi 5) for local network sync" },
];

function Hero() {
  return (
    <section className="relative pt-28 pb-20" style={{ backgroundColor: B.navyDarkest }}>
      <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 55% 45% at 68% 50%, ${B.navyDeep} 0%, transparent 70%)` }}/>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-6 border text-xs font-medium" style={{ backgroundColor: "rgba(32,153,145,0.1)", borderColor: "rgba(32,153,145,0.25)", color: B.tealLight }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: B.teal }}/>
            Hardware Requirements
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-[1.07] tracking-tight mb-6">
            The Gear That Keeps<br/>
            <span style={{ color: B.teal }}>Your Gates Moving.</span>
          </h1>
          <p className="text-[15px] leading-relaxed mb-8" style={{ color: B.mutedLight }}>
            Evinra runs on hardware you can buy anywhere — from an iPad you already own to enterprise Zebra scanners built for the most demanding gate environments. Every device on this list has been field-tested under load.
          </p>
          <div className="flex flex-wrap gap-3">
            <TealBtn href="/request-a-demo">Talk to a Field Technician <IconArrowRight className="w-4 h-4"/></TealBtn>
            <GhostBtn href="#min-requirements">See Minimum Specs →</GhostBtn>
          </div>
        </div>
      </div>
    </section>
  );
}

function OfflineBubble() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} style={{ backgroundColor: B.navyDeep }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-500 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}>
            <h2 className="text-3xl font-bold text-white mb-5">Every Device Creates Its Own Offline Bubble.</h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: B.mutedLight }}>
              Before your gates open, every Evinra device downloads a complete local copy of the ticket database, staff permissions, and pricing configuration. When cellular service drops — and it will drop — the device doesn't pause to reconnect. It keeps scanning from local storage.
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: B.mutedLight }}>
              Anti-fraud sync between gates happens over a closed local WiFi network you bring to the field. A ticket scanned at Gate 1 is invalidated at Gates 2 through 10 in real time, with zero internet dependency.
            </p>
            <ul className="space-y-3">
              {[
                "Device database sync before gates open",
                "Closed-loop LAN for multi-gate fraud prevention",
                "Background internet sync when connectivity returns",
                "35+ scans per minute maintained offline",
              ].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm text-white">
                  <IconCheck className="w-4 h-4 shrink-0" style={{ color: B.teal }}/>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className={`rounded-2xl p-8 border transition-all duration-500 delay-100 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`} style={{ backgroundColor: B.navyDarkest, borderColor: `${B.navy}60` }}>
            <p className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: B.tealLight }}>Network Architecture at a Fair</p>
            {[
              { step: "Pre-Event", label: "All devices download complete ticket DB via WiFi or LTE" },
              { step: "Gates Open", label: "Devices scan locally — no cloud dependency" },
              { step: "During Show", label: "LAN sync invalidates tickets across all gates in real time" },
              { step: "Connectivity", label: "Background sync to cloud runs when internet is available" },
              { step: "Close", label: "Full settlement snapshot pushed on gate closure" },
            ].map(({ step, label }, i) => (
              <div key={step} className="flex gap-4 py-3 border-b last:border-0" style={{ borderColor: `${B.navy}60` }}>
                <span className="text-xs font-bold w-20 shrink-0 pt-0.5" style={{ color: B.teal }}>{step}</span>
                <span className="text-xs leading-snug" style={{ color: B.mutedLight }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HardwareGridSection() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} style={{ backgroundColor: B.bg }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-xl mb-12">
          <h2 className="text-3xl font-bold mb-3" style={{ color: B.text }}>Field-Tested. Operator-Approved.</h2>
          <p className="text-sm leading-relaxed" style={{ color: B.muted }}>Every device below has passed our 35+ scans-per-minute threshold under real field conditions. Not a spec sheet — a field report.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {HARDWARE_GRID.map(({ category, icon, items }, i) => (
            <div key={category}
              className={`rounded-xl p-6 border transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ backgroundColor: "#fff", borderColor: "#E2E8F0", transitionDelay: `${i * 70}ms` }}>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">{icon}</span>
                <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: B.teal }}>{category}</p>
              </div>
              <ul className="space-y-2.5">
                {items.map(({ name, notes }) => (
                  <li key={name}>
                    <p className="text-sm font-medium" style={{ color: B.text }}>{name}</p>
                    <p className="text-xs" style={{ color: B.muted }}>{notes}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MinRequirements() {
  const [ref, inView] = useInView();
  return (
    <section id="min-requirements" ref={ref} style={{ backgroundColor: B.navyDarkest }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-xl mb-10">
          <h2 className="text-3xl font-bold text-white mb-3">Minimum Device Requirements.</h2>
          <p className="text-sm" style={{ color: B.muted }}>Evinra runs on modern consumer hardware. No proprietary devices required.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
          {REQUIREMENTS.map(({ label, value }, i) => (
            <div key={label}
              className={`flex justify-between items-center rounded-xl p-4 border transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ backgroundColor: B.navyDeep, borderColor: `${B.navy}60`, transitionDelay: `${i * 60}ms` }}>
              <span className="text-sm font-medium" style={{ color: B.mutedLight }}>{label}</span>
              <span className="text-sm font-semibold text-white">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhiteGloveSection() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} className="border-b" style={{ backgroundColor: B.bg, borderColor: "#E2E8F0" }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className={`transition-all duration-500 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}>
            <h2 className="text-3xl font-bold mb-5" style={{ color: B.text }}>White-Glove Hardware Delivery.</h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: B.muted }}>
              If you're setting up Evinra for the first time or expanding into enterprise Zebra hardware, we don't hand you a box and a manual. We pre-configure every device — apps installed, credentials loaded, Evinra activated — and ship it to your venue address.
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: B.muted }}>
              Your gate crew opens the case, powers on, and scans. That's the full setup process.
            </p>
            <ul className="space-y-3">
              {[
                "Pre-configured devices shipped to your venue",
                "No IT setup required for gate crew",
                "Bulk device provisioning for large deployments",
                "Return-ready packaging for multi-stop touring circuits",
              ].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm" style={{ color: B.navy }}>
                  <IconCheck className="w-4 h-4 shrink-0" style={{ color: B.teal }}/>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <TealBtn href="/request-a-demo">Talk About Hardware Setup →</TealBtn>
            </div>
          </div>
          <div className={`rounded-2xl p-8 border transition-all duration-500 delay-100 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`} style={{ backgroundColor: B.navyDeep, borderColor: `${B.navy}60` }}>
            <p className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: B.tealLight }}>White-Glove Process</p>
            {[
              ["Device Selection", "We help you pick the right hardware mix for your gate count and field environment"],
              ["Pre-Configuration", "Every device ships with Evinra installed, configured, and tested"],
              ["Venue Delivery", "Devices arrive at your venue ready to power on — not a box of parts"],
              ["First-Show Support", "Live support available for your first deployment"],
              ["Return Logistics", "Pre-labeled return kits for equipment coming back after touring stops"],
            ].map(([step, desc], i) => (
              <div key={step} className="py-3 border-b last:border-0" style={{ borderColor: `${B.navy}60` }}>
                <p className="text-sm font-semibold text-white mb-1">{step}</p>
                <p className="text-xs leading-snug" style={{ color: B.mutedLight }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Hardware() {
  return (
    <div>
      <Navbar/>
      <main>
        <Hero/>
        <OfflineBubble/>
        <HardwareGridSection/>
        <MinRequirements/>
        <WhiteGloveSection/>
        <DemoFormSection title="Not Sure What Hardware You Need?" subtitle="Tell us your gate count, venue type, and current setup. We'll give you a specific hardware recommendation with no upsell pressure — just the right gear for your operation." btnLabel="Get a Hardware Recommendation →"/>
      </main>
      <Footer/>
    </div>
  );
}
