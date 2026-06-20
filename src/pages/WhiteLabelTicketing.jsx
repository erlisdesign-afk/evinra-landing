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
            White-Label Ticketing
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-[1.07] tracking-tight mb-6">
            Your Brand on the Ticket.<br/>
            <span style={{ color: B.teal }}>Your Money in the Bank.</span>
          </h1>
          <p className="text-[15px] leading-relaxed mb-8" style={{ color: B.mutedLight }}>
            Stop renting your box office. Evinra is the custom event ticketing platform that keeps the spotlight exactly where it belongs: on your event. Reclaim your checkout, eliminate third-party branding, and take 100% ownership of your attendee data.
          </p>
          <div className="flex flex-wrap gap-3 mb-4">
            <TealBtn href="/request-a-demo">Request a Demo <IconArrowRight className="w-4 h-4"/></TealBtn>
            <GhostBtn href="#checkout">See a Custom Checkout →</GhostBtn>
          </div>
          <p className="text-xs" style={{ color: B.muted }}>100% White-Label. Zero Evinra branding on your gates.</p>
        </div>
      </div>
    </section>
  );
}

function Agitator() {
  const [ref, inView] = useInView();
  const cols = [
    { h: "You Are Not a Billboard", body: "When your attendees click \"Buy Tickets,\" they shouldn't be redirected to a jarring, third-party website covered in another company's branding. Traditional apps hijack your checkout experience, making your professional production look like a generic, amateur event." },
    { h: "They Keep Your Customer Data", body: "Who actually owns your audience? If you use a standard ticketing giant, they do. They capture your attendees' email addresses, purchasing habits, and demographics, giving you only basic reports while keeping the high-value marketing data for their own ecosystem." },
    { h: "Marketing Your Competition", body: "The ultimate insult: traditional ticketing platforms use the traffic you generated to cross-sell other events. The moment your attendee finishes checking out, they are hit with email blasts and recommendations for other festivals in your area." },
  ];
  return (
    <section ref={ref} style={{ backgroundColor: B.navyDeep }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Third-Party Ticketing Giants Are Hijacking Your Audience.</h2>
          <p className="text-sm leading-relaxed" style={{ color: B.mutedLight }}>You spend thousands of dollars marketing your event and driving traffic. Why are you sending your hard-earned crowd to a platform that treats them like their customers?</p>
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

function CheckoutSection() {
  const [ref, inView] = useInView();
  const items = [
    { h: "Native Domain Embedding", body: "Stop redirecting your traffic to tickets.somegiantcompany.com. Your checkout lives natively on your own website, keeping your attendees locked into your ecosystem." },
    { h: "100% Customizable UI", body: "Match your exact brand colors, typography, and layout. Whether you're running a dark, moody circus or a vibrant summer festival, the checkout looks like you built it from scratch." },
    { h: "Flexible Ticketing Flows", body: "Easily build custom checkout paths for General Admission, VIP tiers, timed entry slots, and add-on merchandise — all without writing a line of code." },
  ];
  return (
    <section id="checkout" ref={ref} style={{ backgroundColor: B.bg }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl font-bold mb-3" style={{ color: B.text }}>The Invisible Checkout Experience.</h2>
          <p className="text-sm leading-relaxed" style={{ color: B.muted }}>Your attendees should never know Evinra exists. We provide the engine; you get all the credit.</p>
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

function MoneySection() {
  const [ref, inView] = useInView();
  const items = [
    { h: "Direct Merchant Connections", body: "Evinra connects directly to your own Stripe, Square, or preferred merchant account. When a fan buys a ticket, the money goes straight to your bank, not ours." },
    { h: "Instant Cash Flow", body: "Need that early-bird ticket revenue to pay for marketing or vendor deposits? Access your funds immediately to finance your event in real-time." },
    { h: "Keep the Convenience Fees", body: "We charge a transparent, flat software rate. If you choose to add a convenience fee to your tickets, you keep 100% of that profit. Stop bleeding your margins to third parties." },
  ];
  return (
    <section ref={ref} style={{ backgroundColor: B.navyDarkest }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Stop Waiting Until Tuesday for Your Own Cash.</h2>
          <p className="text-sm leading-relaxed" style={{ color: B.mutedLight }}>Traditional ticketing apps hold your payouts hostage until days after your event closes. With Evinra, your money flows directly to you.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map(({ h, body }, i) => (
            <div key={h} className={`rounded-xl p-7 border transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ backgroundColor: B.navyDeep, borderColor: `${B.navy}60`, transitionDelay: `${i * 80}ms` }}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `rgba(32,153,145,0.12)` }}>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke={B.teal} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
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

function DataSection() {
  const [ref, inView] = useInView();
  const items = [
    { h: "Full Marketing Access", body: "Capture every email, demographic detail, and purchasing habit. It's your data to use for Facebook lookalike audiences, email blasts, and retargeting campaigns." },
    { h: "Zero Cross-Selling", body: "We will never email your attendees. We will never show them ads for competing festivals or touring shows in your area. Your audience is strictly yours." },
    { h: "Effortless Exporting", body: "Plug your attendee data directly into your favorite email marketing tools or download your complete historical customer lists with one click." },
  ];
  return (
    <section ref={ref} style={{ backgroundColor: B.bg }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl font-bold mb-3" style={{ color: B.text }}>You Bought the Marketing. You Own the Data.</h2>
          <p className="text-sm leading-relaxed" style={{ color: B.muted }}>The most valuable asset you have isn't the ticket; it's the attendee. Stop handing your customer list over to ticketing apps that use it to grow their own business.</p>
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

function LifecycleSection() {
  const [ref, inView] = useInView();
  const items = [
    { h: "Instant Cloud-to-Gate Sync", body: "A ticket bought on a fan's phone in the parking lot is instantly validated on your physical gate scanners. No manual exporting of lists, and no delays." },
    { h: "Unified Capacity Tracking", body: "Stop trying to combine digital sales and physical walk-ups in your head. Watch your online presales and your on-site cash POS sales populate into one real-time dashboard." },
    { h: "One Native System", body: "The same platform that processes the credit card on your website scans the QR code in the field. No fragile API connections or third-party integrations required." },
  ];
  return (
    <section ref={ref} style={{ backgroundColor: B.navyDeep }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">The Ticket is Just the First Step.</h2>
          <p className="text-sm leading-relaxed" style={{ color: B.mutedLight }}>Evinra doesn't just sell the ticket online — it gets the attendee through the physical gate. Your custom checkout natively feeds directly into our offline ecosystem.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map(({ h, body }, i) => (
            <div key={h} className={`rounded-xl p-6 border transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
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

export default function WhiteLabelTicketing() {
  return (
    <div>
      <Navbar/>
      <main>
        <Hero/>
        <Agitator/>
        <CheckoutSection/>
        <MoneySection/>
        <DataSection/>
        <LifecycleSection/>
        <DemoFormSection
          title="Stop Bleeding Margins to Third-Party Apps."
          subtitle="See a live white-label checkout, check the dashboard, and get your questions answered. No sales talk, just a walkthrough."
          btnLabel="Get My Walkthrough →"
          formTitle="See Evinra in Action"
        />
      </main>
      <Footer/>
    </div>
  );
}
