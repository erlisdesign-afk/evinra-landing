import { B, TealBtn, GhostBtn } from "../brand";
import { Navbar, Footer, DemoFormSection, ImgPlaceholderDark, ImgPlaceholder, useInView, IconCheck, IconArrowRight } from "../components/shared";

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
            Your Gates Keep Moving.<br/>
            <span style={{ color: B.teal }}>Even With Zero Bars.</span>
          </h1>
          <p className="text-[15px] leading-relaxed mb-8" style={{ color: B.mutedLight }}>
            Stop blaming the internet when the lines stop moving. Evinra's native offline POS is engineered to process walk-up sales, scan tickets, and sync data seamlessly with zero bars of service.
          </p>
          <div className="flex flex-wrap gap-3 mb-5">
            <TealBtn href="/request-a-demo">Request a Demo <IconArrowRight className="w-4 h-4"/></TealBtn>
            <GhostBtn href="#hardware">See the Hardware Specs →</GhostBtn>
          </div>
        </div>
        <ImgPlaceholderDark label="[ IMG-01: Evinra POS scanning screen on iPad/Zebra in field environment ]" className="aspect-[4/3]"/>
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

function WalkUpSales() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} className="border-b" style={{ backgroundColor: B.bg, borderColor: "#E2E8F0" }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-500 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: B.text }}>Process Walk-Up Sales Without the Bottleneck.</h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: B.muted }}>
              Selling tickets online is easy. Processing high-volume cash and card sales in a muddy field is where standard apps fail.
            </p>
            <div className="grid gap-5">
              <div className="rounded-xl p-5 border" style={{ backgroundColor: "#fff", borderColor: "#E2E8F0" }}>
                <h4 className="text-sm font-semibold mb-2" style={{ color: B.text }}>The TicketSocket Runaround</h4>
                <p className="text-xs leading-relaxed" style={{ color: B.muted }}>TicketSocket is an incredible engine for selling tickets online. But when it comes to the physical reality of your gates—managing cash tills, walk-up sales, and rapid-fire entry—their offline capabilities are limited. They are a ticketing app trying to survive in a physical environment.</p>
              </div>
              <div className="rounded-xl p-5 border" style={{ backgroundColor: "#fff", borderColor: `${B.teal}30` }}>
                <div className="w-1 h-5 rounded mb-3" style={{ backgroundColor: B.teal }}/>
                <h4 className="text-sm font-semibold mb-2" style={{ color: B.text }}>Evinra's Operational DNA</h4>
                <p className="text-xs leading-relaxed" style={{ color: B.muted }}>Evinra was built operational-first. Our native point-of-sale is engineered specifically for the field. It seamlessly handles both your digital tickets and your physical cash drawers on the same rugged device, keeping your lines moving at a rapid 35+ scans per minute.</p>
              </div>
            </div>
          </div>
          <div className={`transition-all duration-500 delay-100 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`}>
            <ImgPlaceholder label="[ IMG-02: Walk-up sale being processed on Evinra POS — cash/card screen ]" className="aspect-[4/3]"/>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureGrid() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} style={{ backgroundColor: B.navyDarkest }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-xl mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Everything the Field Demands.</h2>
          <p className="text-sm leading-relaxed" style={{ color: B.muted }}>Built for outdoor operators, not office managers.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map(({ title, body }, i) => (
            <div key={title}
              className={`rounded-xl p-6 border transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ backgroundColor: B.navyDeep, borderColor: `${B.navy}60`, transitionDelay: `${i * 70}ms` }}>
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
          <h2 className="text-3xl font-bold mb-4" style={{ color: B.text }}>Field-Tested & Approved.</h2>
          <p className="text-sm leading-relaxed" style={{ color: B.muted }}>We push gear to the absolute limit to guarantee our 35+ scans-per-minute benchmark. Here is the hardware we actively test, trust, and deploy in the mud.</p>
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

export default function OfflinePOS() {
  return (
    <div>
      <Navbar/>
      <main>
        <Hero/>
        <SurviveField/>
        <WalkUpSales/>
        <FeatureGrid/>
        <HardwareSection/>
        <DemoFormSection
          title="Ready to Take Your Gates Back?"
          subtitle="Schedule a custom technical walkthrough. We'll look at your current hardware, identify your bottlenecks, and show you exactly how Evinra handles the heavy lifting. No sales talk, just a look under the hood."
          btnLabel="Speak to a Field Technician →"
        />
      </main>
      <Footer/>
    </div>
  );
}
