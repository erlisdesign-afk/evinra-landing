import { B, TealBtn, GhostBtn } from "../brand";
import { Navbar, Footer, DemoFormSection, useInView, IconArrowRight } from "../components/shared";

function Hero() {
  return (
    <section className="relative pt-28 pb-20" style={{ backgroundColor: B.navyDarkest }}>
      <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 55% 45% at 70% 55%, ${B.navyDeep} 0%, transparent 70%)` }}/>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-6 border text-xs font-medium" style={{ backgroundColor: "rgba(32,153,145,0.1)", borderColor: "rgba(32,153,145,0.25)", color: B.tealLight }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: B.teal }}/>
            Unified Financial Reporting
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-[1.07] tracking-tight mb-6">
            Stop Guessing. See Your Event's<br/>
            <span style={{ color: B.teal }}>Total Revenue in Real-Time.</span>
          </h1>
          <p className="text-[15px] leading-relaxed mb-8" style={{ color: B.mutedLight }}>
            Eliminate the end-of-weekend Excel nightmare. Evinra aggregates your online ticket presales, live gate scans, and offline POS cash into one unified master dashboard. Know exactly how much money you made before the tents even come down.
          </p>
          <div className="flex flex-wrap gap-3 mb-4">
            <TealBtn href="/request-a-demo">Request a Demo <IconArrowRight className="w-4 h-4"/></TealBtn>
            <GhostBtn href="#dashboard">See the Master Dashboard →</GhostBtn>
          </div>
          <p className="text-xs" style={{ color: B.muted }}>One platform. Zero data silos. 100% financial clarity.</p>
        </div>
      </div>
    </section>
  );
}

function BlindSpots() {
  const [ref, inView] = useInView();
  const cols = [
    { h: "Data in Silos", body: "When you use one platform to sell online tickets, a completely different app for walk-up sales, and an envelope system for your vendors, your data is fundamentally broken. Trying to combine these disparate CSV files is a recipe for massive accounting errors." },
    { h: "Flying Blind During the Rush", body: "If a VIP section is selling out or a specific food vendor is breaking records, you need to know immediately. Traditional reporting forces you to wait until the next day to analyze your sales, completely eliminating your ability to make profitable on-site adjustments." },
    { h: "The 48-Hour Waiting Game", body: "The event is over, the crew is exhausted, but the stress isn't. Waiting days for third-party ticketing platforms and merchant accounts to release your final sales numbers leaves your operations and accounting teams in a state of prolonged anxiety." },
  ];
  return (
    <section ref={ref} style={{ backgroundColor: B.navyDeep }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Taping Your Data Together is Creating Massive Blind Spots.</h2>
          <p className="text-sm leading-relaxed" style={{ color: B.mutedLight }}>You can't run a profitable, multi-day event when your financial data is scattered across three different apps and a pile of handwritten cash receipts.</p>
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

function DashboardSection() {
  const [ref, inView] = useInView();
  const items = [
    { h: "Holistic Revenue Tracking", body: "Watch your gross revenue tick up in real-time. Evinra perfectly combines your digital presales, your on-site physical walk-ups, and your vendor commissions into one undeniable total." },
    { h: "Cross-Channel Filtering", body: "Want to know exactly how much cash was processed at Gate 3 versus credit cards processed at the VIP tent? Filter your revenue by gate, payment type, or ticket tier instantly." },
    { h: "Mobile Executive View", body: "You don't have to be glued to the trailer. Access the master dashboard securely from your phone while walking the footprint, keeping you in complete control from anywhere on the fairground." },
  ];
  return (
    <section id="dashboard" ref={ref} style={{ backgroundColor: B.bg }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl font-bold mb-3" style={{ color: B.text }}>Online, Offline, and At the Gate: All in One Place.</h2>
          <p className="text-sm leading-relaxed" style={{ color: B.muted }}>Stop toggling between apps. Evinra gives you the total financial pulse of your event on a single screen.</p>
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

function BeyondMoney() {
  const [ref, inView] = useInView();
  const items = [
    { h: "Live Gate Velocity", body: "Monitor your exact \"scans per minute\" across every entrance. If Gate A is processing 500 people an hour but Gate B is only doing 100, you can instantly redeploy staff to kill the bottleneck before attendees get angry." },
    { h: "Staff Performance & Shrinkage", body: "See exactly which volunteer or staff member is logged into which scanner or POS. Track individual sales performance and immediately isolate discrepancies to eliminate internal cash shrinkage." },
    { h: "Inventory Depletion Rates", body: "Track high-value merchandise or VIP add-ons in real-time so your runners can restock the physical tents before you miss a sale." },
  ];
  return (
    <section ref={ref} style={{ backgroundColor: B.navyDarkest }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Go Beyond the Money. Track the Operation.</h2>
          <p className="text-sm leading-relaxed" style={{ color: B.mutedLight }}>Financial health isn't just about cash flow; it's about operational efficiency. Evinra tracks the metrics that actually move the needle.</p>
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

function PostEvent() {
  const [ref, inView] = useInView();
  const items = [
    { h: "Clean, Instant Exports", body: "Download pixel-perfect, organized CSV reports of your entire event lifecycle. No formatting required." },
    { h: "Granular Tax Reporting", body: "Instantly separate convenience fees, state taxes, and gross ticket revenue so you can hand your CPA exactly what they need without the headache." },
    { h: "Historical Comparisons", body: "Easily compare Friday's performance against last year's opening night to identify growth trends and forecast your next season's budget." },
  ];
  return (
    <section ref={ref} style={{ backgroundColor: B.bg }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl font-bold mb-3" style={{ color: B.text }}>Turn the Post-Event Nightmare into a 5-Minute Task.</h2>
          <p className="text-sm leading-relaxed" style={{ color: B.muted }}>When the gates finally close, your accounting team shouldn't have to start from scratch.</p>
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

function NativeTools() {
  const [ref, inView] = useInView();
  const items = [
    { h: "Powered by the Offline POS", body: "Every cash transaction made in the mud instantly feeds this dashboard the moment a signal returns." },
    { h: "Fueled by White-Label Ticketing", body: "Because you own the checkout, every piece of demographic data and ticket revenue flows directly into your hands, not a third-party's database." },
  ];
  return (
    <section ref={ref} style={{ backgroundColor: B.navyDeep }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Real Reports Require Native Tools.</h2>
          <p className="text-sm leading-relaxed" style={{ color: B.mutedLight }}>The reason Evinra's reporting is so powerful is because it's native. It isn't guessing; it's reading the exact data generated by our own tools.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
          {items.map(({ h, body }, i) => (
            <div key={h} className={`rounded-xl p-7 border transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ backgroundColor: B.navyDarkest, borderColor: `${B.navy}60`, transitionDelay: `${i * 80}ms` }}>
              <h3 className="text-sm font-semibold text-white mb-2">{h}</h3>
              <p className="text-sm leading-relaxed" style={{ color: B.muted }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function UnifiedReporting() {
  return (
    <div>
      <Navbar/>
      <main>
        <Hero/>
        <BlindSpots/>
        <DashboardSection/>
        <BeyondMoney/>
        <PostEvent/>
        <NativeTools/>
        <DemoFormSection
          title="Stop Running Your Event in the Dark."
          subtitle="See the live reporting dashboard, check the metrics, and get your questions answered. No sales talk, just a walkthrough."
          btnLabel="Get My Walkthrough →"
          formTitle="See Evinra in Action"
        />
      </main>
      <Footer/>
    </div>
  );
}
