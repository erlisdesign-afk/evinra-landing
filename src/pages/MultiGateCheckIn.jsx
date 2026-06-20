import { B, TealBtn, GhostBtn } from "../brand";
import { Navbar, Footer, DemoFormSection, useInView, IconArrowRight } from "../components/shared";

function Hero() {
  return (
    <section className="relative pt-28 pb-20" style={{ backgroundColor: B.navyDarkest }}>
      <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 55% 45% at 70% 55%, ${B.navyDeep} 0%, transparent 70%)` }}/>
      <div className="relative max-w-7xl mx-auto px-6 max-w-2xl">
        <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-6 border text-xs font-medium" style={{ backgroundColor: "rgba(32,153,145,0.1)", borderColor: "rgba(32,153,145,0.25)", color: B.tealLight }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: B.teal }}/>
          Multi-Gate Check-In
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold text-white leading-[1.07] tracking-tight mb-6">
          Secure Your Perimeter.<br/>
          <span style={{ color: B.teal }}>Sync Your Gates in Real-Time.</span>
        </h1>
        <p className="text-[15px] leading-relaxed mb-8 max-w-xl" style={{ color: B.mutedLight }}>
          Stop ticket fraud and kill gate bottlenecks across your entire footprint. Evinra's multi-gate synchronization keeps your check-ins, VIP upgrades, and capacity counts perfectly accurate across dozens of entrances simultaneously.
        </p>
        <div className="flex flex-wrap gap-3 mb-4">
          <TealBtn href="/request-a-demo">Request a Demo <IconArrowRight className="w-4 h-4"/></TealBtn>
          <GhostBtn href="#sync">See the Scanning Tech →</GhostBtn>
        </div>
        <p className="text-xs" style={{ color: B.muted }}>Sub-second scanning. Native offline syncing.</p>
      </div>
    </section>
  );
}

function Agitator() {
  const [ref, inView] = useInView();
  const cols = [
    { h: "Rampant Ticket Fraud", body: "If your gates don't sync instantly, what stops an attendee from screenshotting their QR code and sending it to three friends waiting at different entrances? Disconnected gates create massive blind spots that fraudsters exploit to walk in for free." },
    { h: "Dangerous Blind Spots", body: "When you're running a massive fairground with six different entry and exit points, relying on delayed cloud data or manual clickers is a disaster. You need to know exactly how many people are in the venue at any given second for Fire Marshal compliance and crowd safety." },
    { h: "Angry Crowds & Dropped Signals", body: "Nothing ruins an attendee's experience faster than standing in a stagnant line for 45 minutes because the gate scanners keep hitting the \"loading\" wheel. Slow, cloud-dependent scanners cause massive bottlenecks during your peak Friday night rush." },
  ];
  return (
    <section ref={ref} style={{ backgroundColor: B.navyDeep }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">A Disconnected Gate is a Leaking Gate.</h2>
          <p className="text-sm leading-relaxed" style={{ color: B.mutedLight }}>When your scanning hardware is slow, or your gates can't talk to each other, you lose control of your crowd and your revenue.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cols.map(({ h, body }, i) => (
            <div key={h} className={`rounded-xl p-7 border transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ backgroundColor: B.navyDarkest, borderColor: `${B.navy}60`, transitionDelay: `${i * 80}ms` }}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(239,68,68,0.1)" }}>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth={2.5} strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
              </div>
              <h3 className="text-base font-semibold text-white mb-3">{h}</h3>
              <p className="text-sm leading-relaxed" style={{ color: B.muted }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SyncSection() {
  const [ref, inView] = useInView();
  const items = [
    { h: "Instant Gate-to-Gate Sync", body: "The millisecond a ticket is scanned at the East Gate, it is globally invalidated across every other scanner on your footprint. If their friend tries to use a screenshot at the West Gate 10 seconds later, they are stopped." },
    { h: "Sub-Second Validation", body: "Keep the lines flying. Evinra validates barcodes and QR codes locally in milliseconds, allowing your staff to process massive crowds without pausing for a server ping." },
    { h: "Clear Staff Alerts", body: "Give your gate staff confidence. Bright, unmistakable visual cues and distinct audio tones instantly tell the scanner operator if a ticket is valid, duplicate, or fake, eliminating hesitation." },
  ];
  return (
    <section id="sync" ref={ref} style={{ backgroundColor: B.bg }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl font-bold mb-3" style={{ color: B.text }}>Kill the Screenshot. Stop Double-Scans Instantly.</h2>
          <p className="text-sm leading-relaxed" style={{ color: B.muted }}>Evinra creates an impenetrable net across your entire venue, ensuring a ticket can only be used once.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map(({ h, body }, i) => (
            <div key={h} className={`rounded-xl p-7 border transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
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

function CrowdControl() {
  const [ref, inView] = useInView();
  const items = [
    { h: "Live Capacity Tracking", body: "Monitor your exact ingress and egress numbers from the central dashboard. Know precisely how many people are currently inside the venue to ensure safety compliance and optimize your food and beverage deployments." },
    { h: "Granular VIP & Lane Routing", body: "Program specific scanners to only accept specific ticket tiers. If a General Admission ticket tries to scan into the VIP hospitality lane, the scanner rejects it and directs them to the proper gate." },
    { h: "Frictionless Pass-Outs (Re-entry)", body: "Easily scan attendees out of the venue so they can grab a jacket from their car, automatically updating their ticket status so they can scan smoothly back in later." },
  ];
  return (
    <section ref={ref} style={{ backgroundColor: B.navyDarkest }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Total Control Over Your Crowd Flow.</h2>
          <p className="text-sm leading-relaxed" style={{ color: B.mutedLight }}>Managing an event isn't just about letting people in; it's about putting them in the right place.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map(({ h, body }, i) => (
            <div key={h} className={`rounded-xl p-7 border transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ backgroundColor: B.navyDeep, borderColor: `${B.navy}60`, transitionDelay: `${i * 80}ms` }}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `rgba(32,153,145,0.12)` }}>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke={B.teal} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{h}</h3>
              <p className="text-sm leading-relaxed" style={{ color: B.muted }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Lifecycle() {
  const [ref, inView] = useInView();
  const items = [
    { h: "Live Gate Velocity Reporting", body: "See exactly which gates are processing the most attendees in real-time, allowing you to instantly redeploy staff to relieve bottlenecks." },
    { h: "Native Offline Redundancy", body: "Even if the festival internet completely dies, Evinra's offline architecture ensures your gates keep scanning and communicating with each other seamlessly." },
  ];
  return (
    <section ref={ref} style={{ backgroundColor: B.bg }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl font-bold mb-3" style={{ color: B.text }}>Connected to the Core Ecosystem.</h2>
          <p className="text-sm leading-relaxed" style={{ color: B.muted }}>Your gate data is too valuable to live in a silo. Evinra sends your live door numbers straight to your master operations platform.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
          {items.map(({ h, body }, i) => (
            <div key={h} className={`rounded-xl p-7 border transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ backgroundColor: "#fff", borderColor: "#E2E8F0", transitionDelay: `${i * 80}ms` }}>
              <h3 className="text-sm font-semibold mb-2" style={{ color: B.text }}>{h}</h3>
              <p className="text-sm leading-relaxed" style={{ color: B.muted }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function MultiGateCheckIn() {
  return (
    <div>
      <Navbar/>
      <main>
        <Hero/>
        <Agitator/>
        <SyncSection/>
        <CrowdControl/>
        <Lifecycle/>
        <DemoFormSection
          title="Stop the Fraud. Kill the Bottlenecks."
          subtitle="See the sub-second scanning, check the hardware specs, and get your questions answered. No sales talk, just a walkthrough."
          btnLabel="Get My Walkthrough →"
          formTitle="See Evinra in Action"
        />
      </main>
      <Footer/>
    </div>
  );
}
