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
            Multi-Vendor Cash Management
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-[1.07] tracking-tight mb-6">
            Stop Doing Math at 2 AM.<br/>
            <span style={{ color: B.teal }}>Automate Your Vendor Payouts.</span>
          </h1>
          <p className="text-[15px] leading-relaxed mb-8" style={{ color: B.mutedLight }}>
            Eliminate the end-of-night spreadsheet nightmare. Evinra digitizes your vendor contracts, tracks every offline cash sale in real-time, and automatically calculates commission splits so you can close your books in minutes, not days.
          </p>
          <div className="flex flex-wrap gap-3 mb-4">
            <TealBtn href="/request-a-demo">Request a Demo <IconArrowRight className="w-4 h-4"/></TealBtn>
            <GhostBtn href="#dashboard">See the Cash Dashboard →</GhostBtn>
          </div>
          <p className="text-xs" style={{ color: B.muted }}>Built for multi-vendor festivals, fairs, and touring shows.</p>
        </div>
      </div>
    </section>
  );
}

function Agitator() {
  const [ref, inView] = useInView();
  const cols = [
    { h: "The \"He Said, She Said\"", body: "Chasing down food truck owners at midnight to figure out who owes what based on hand-written receipts destroys trust and wastes time. Without a unified digital ledger, commission disputes become a massive headache for your accounting team." },
    { h: "The 2 AM Excel Errors", body: "You shouldn't be forcing an exhausted operations manager to manually type physical cash counts into a fragile Excel sheet in a dark trailer. Manual data entry after a 16-hour shift guarantees calculation errors and mismatched books." },
    { h: "Zero Live Visibility", body: "If a vendor is having a record-breaking sales day, you shouldn't have to wait until Sunday night to find out. Traditional envelope-and-cash systems leave you completely blind to your event's actual financial performance while the gates are open." },
  ];
  return (
    <section ref={ref} style={{ backgroundColor: B.navyDeep }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Chasing Down Receipts is Costing You Money and Sleep.</h2>
          <p className="text-sm leading-relaxed" style={{ color: B.mutedLight }}>Trying to manage dozens of independent food trucks, merchandise tents, and midway games with physical cash boxes and manual Excel sheets is a recipe for blind spots and lost revenue.</p>
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

function DigitizeSection() {
  const [ref, inView] = useInView();
  const items = [
    { h: "Custom Commission Rules", body: "Easily configure unique revenue splits for every single vendor. Charge a flat fee for the merch tent, take 20% from the food trucks, and split the midway games 50/50." },
    { h: "Automated Calculations", body: "Every time a vendor makes a sale on their Evinra POS, the platform instantly calculates your exact cut in the background. No calculators required." },
    { h: "Digital Vendor Profiles", body: "Keep all vendor contact information, signed agreements, and historical sales data organized natively inside one central platform." },
  ];
  return (
    <section id="dashboard" ref={ref} style={{ backgroundColor: B.bg }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl font-bold mb-3" style={{ color: B.text }}>Digitize the Deal. Automate the Math.</h2>
          <p className="text-sm leading-relaxed" style={{ color: B.muted }}>Set your vendor terms before the gates even open, and let the software handle the heavy lifting.</p>
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

function VisibilitySection() {
  const [ref, inView] = useInView();
  const items = [
    { h: "Real-Time Unified Dashboards", body: "Watch cash and credit sales roll in live from every single vendor tent across your entire footprint, all aggregated into a single operational dashboard." },
    { h: "Native POS Integration", body: "Because your vendors use Evinra's offline POS terminals, their sales data feeds directly into your back office. Even if the WiFi drops, the data syncs perfectly the moment a signal returns." },
    { h: "Granular Staff Tracking", body: "Track exactly which vendor employee processed which transaction, protecting both you and the vendor owner from internal cash shrinkage." },
  ];
  return (
    <section ref={ref} style={{ backgroundColor: B.navyDarkest }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Total Financial Visibility While the Gates Are Open.</h2>
          <p className="text-sm leading-relaxed" style={{ color: B.mutedLight }}>Stop waiting until tear-down to know how much money you made.</p>
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

function CloseBooks() {
  const [ref, inView] = useInView();
  const items = [
    { h: "Instant Ledger Generation", body: "When the event ends, generate an exact, line-by-line payout report for every vendor with one click." },
    { h: "Match Cash to Software", body: "Quickly verify the physical cash in the till against the Evinra software ledger to immediately flag any discrepancies before the vendor leaves the site." },
    { h: "Frictionless Payouts", body: "Export clean, accurate CSV data directly to your accounting software or bank to process vendor payouts rapidly, keeping your partners happy and eager to return next season." },
  ];
  return (
    <section ref={ref} style={{ backgroundColor: B.bg }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl font-bold mb-3" style={{ color: B.text }}>Close Your Physical Boxes and Digital Books in Minutes.</h2>
          <p className="text-sm leading-relaxed" style={{ color: B.muted }}>Get your team out of the trailer and send them home. Evinra turns a multi-hour accounting nightmare into a simple, frictionless sign-off.</p>
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

function EcosystemSection() {
  const [ref, inView] = useInView();
  const items = [
    { h: "Unified Event Reporting", body: "See your vendor commission revenue right next to your digital ticket sales and VIP upgrades in one master financial report." },
    { h: "Hardware Consolidation", body: "The same rugged tablets scanning tickets at the front gate can be handed to vendors to use as their cash POS. Maximize your hardware investment." },
  ];
  return (
    <section ref={ref} style={{ backgroundColor: B.navyDeep }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Cash Management Built into the Core Ecosystem.</h2>
          <p className="text-sm leading-relaxed" style={{ color: B.mutedLight }}>Taping a third-party accounting app to your ticketing system creates data silos. Evinra handles it all natively.</p>
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

export default function MultiVendorCash() {
  return (
    <div>
      <Navbar/>
      <main>
        <Hero/>
        <Agitator/>
        <DigitizeSection/>
        <VisibilitySection/>
        <CloseBooks/>
        <EcosystemSection/>
        <DemoFormSection
          title="Stop Losing Sleep Over Spreadsheet Errors."
          subtitle="See the cash dashboard, explore the vendor profiles, and get your questions answered. No sales talk, just a walkthrough."
          btnLabel="Get My Walkthrough →"
          formTitle="See Evinra in Action"
        />
      </main>
      <Footer/>
    </div>
  );
}
