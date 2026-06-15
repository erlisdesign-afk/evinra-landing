import { B, TealBtn } from "../brand";
import { Navbar, Footer, DemoFormSection, useInView, IconArrowRight } from "../components/shared";

const TIMELINE = [
  { year: "2018–2019", title: "The Problem Gets Personal", body: "Our founding team spent three consecutive fair seasons managing technology for a regional touring circuit. Three different ticketing platforms. Two separate POS vendors. One nightmare of CSV reconciliation every Monday morning. The system wasn't failing — it was working exactly as designed. It was designed for offices, not fields." },
  { year: "2020", title: "The Paper Napkin", body: "A global event shutdown turned a logistical nightmare into a design problem. If the industry was going to rebuild, it had to rebuild with software engineered for how outdoor events actually work — not retrofitted office tools with 'event' in the product name. The first architecture sketches were done on a paper napkin at a diner in central Florida." },
  { year: "2021", title: "The First Build", body: "We spent a year building for exactly one client: ourselves. No investors, no outside pressure. Every feature was stress-tested in a real field environment before it was considered done. The offline POS hit 35+ scans per minute at the 47th iteration. We shipped at the 52nd." },
  { year: "2022", title: "First External Deployment", body: "Evinra ran its first external event in the summer of 2022 — a traveling state fair circuit with 9 gate entry points, 14 food vendors, and a 48-hour settlement window. We closed the books in under 4 hours. That operator is still a client." },
  { year: "2023–Present", title: "The Ecosystem Expands", body: "We opened the platform to a small cohort of operators across fairs, festivals, and traveling productions. Every request gets evaluated against one question: does it make the field easier, or does it only make the dashboard look better? The roadmap is built from the field up." },
];

const VALUES = [
  { title: "Field-First, Always", body: "Every feature decision starts with one question: does this work without internet at a fairground in rural Kansas? If it doesn't, it doesn't ship." },
  { title: "You Own Your Data", body: "Every attendee record, every transaction, every commission calculation belongs to the operator. We don't resell, aggregate, or hold your data hostage on contract expiration." },
  { title: "Operators, Not Platforms", body: "We work for the people running the events, not the platforms taking the fees. We don't monetize your attendees. We build tools that make you better at your job." },
  { title: "Zero Lock-In", body: "Month-to-month terms, full data portability, no exit fees. If we're not the best tool for your operation, you should be free to find out." },
];

function Hero() {
  return (
    <section className="relative pt-28 pb-20" style={{ backgroundColor: B.navyDarkest }}>
      <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 55% 45% at 70% 55%, ${B.navyDeep} 0%, transparent 70%)` }}/>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-6 border text-xs font-medium" style={{ backgroundColor: "rgba(32,153,145,0.1)", borderColor: "rgba(32,153,145,0.25)", color: B.tealLight }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: B.teal }}/>
            Our Story
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-[1.07] tracking-tight mb-6">
            We Didn't Build Evinra<br/>
            <span style={{ color: B.teal }}>in a Conference Room.</span>
          </h1>
          <p className="text-[15px] leading-relaxed" style={{ color: B.mutedLight }}>
            Evinra was built in the mud, the heat, and the noise of the field — by operators who got tired of patching together tools designed for offices. Every architectural decision has a fairground story behind it.
          </p>
        </div>
      </div>
    </section>
  );
}

function OriginSection() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} style={{ backgroundColor: B.bg }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className={`transition-all duration-500 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-5" style={{ color: B.text }}>Built by Operators. For Operators.</h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: B.muted }}>
              The team that built Evinra spent years on the operational side of the outdoor events industry before writing a single line of code. We managed ticketing logistics for regional touring circuits. We reconciled multi-vendor cash boxes at 2 AM. We watched lines stall because a cloud-dependent scanner lost its connection in a dead zone.
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: B.muted }}>
              There was no shortage of event technology on the market. But none of it was built for the physical reality of what we were doing — and the gaps between the digital promise and the field reality were costing operators real money and real reputations.
            </p>
            <p className="text-sm leading-relaxed font-medium" style={{ color: B.navy }}>
              So we stopped looking for the right tool and built it ourselves.
            </p>
          </div>
          <div className={`transition-all duration-500 delay-100 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`}>
            <div className="rounded-2xl p-8 border" style={{ backgroundColor: B.navyDeep, borderColor: `${B.navy}60` }}>
              <p className="text-sm font-semibold mb-4" style={{ color: B.tealLight }}>The Numbers Behind the Origin</p>
              {[
                ["3", "Fair seasons operating before writing a line of code"],
                ["3", "Ticketing platforms stitched together in peak season"],
                ["47", "POS architecture iterations before hitting 35+ scans/minute"],
                ["4 hrs", "Time to close books after first live multi-vendor deployment"],
              ].map(([num, label]) => (
                <div key={label} className="flex items-start gap-4 py-3 border-b last:border-0" style={{ borderColor: `${B.navy}60` }}>
                  <span className="text-2xl font-bold shrink-0 w-12" style={{ color: B.teal }}>{num}</span>
                  <span className="text-sm leading-snug" style={{ color: B.mutedLight }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} style={{ backgroundColor: B.navyDarkest }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-xl mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">From a Paper Napkin to the Field.</h2>
          <p className="text-sm" style={{ color: B.muted }}>The build was never linear. Here's what it actually looked like.</p>
        </div>
        <div className="relative">
          <div className="absolute left-4 top-3 bottom-3 w-px" style={{ backgroundColor: `${B.navy}80` }}/>
          <div className="space-y-8">
            {TIMELINE.map(({ year, title, body }, i) => (
              <div key={year}
                className={`relative pl-12 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="absolute left-2 top-1 w-4 h-4 rounded-full border-2 flex items-center justify-center" style={{ backgroundColor: B.navyDarkest, borderColor: B.teal }}>
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: B.teal }}/>
                </div>
                <p className="text-xs font-semibold mb-1 uppercase tracking-widest" style={{ color: B.teal }}>{year}</p>
                <h4 className="text-base font-semibold text-white mb-2">{title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: B.muted }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Values() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} style={{ backgroundColor: B.bg }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-xl mb-12">
          <h2 className="text-3xl font-bold mb-3" style={{ color: B.text }}>What We Actually Believe.</h2>
          <p className="text-sm" style={{ color: B.muted }}>Not values-page platitudes. The four principles that filter every product decision.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {VALUES.map(({ title, body }, i) => (
            <div key={title}
              className={`rounded-xl p-7 border transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ backgroundColor: "#fff", borderColor: "#E2E8F0", transitionDelay: `${i * 80}ms` }}>
              <div className="w-1 h-6 rounded mb-4" style={{ backgroundColor: B.teal }}/>
              <h4 className="text-base font-semibold mb-2" style={{ color: B.text }}>{title}</h4>
              <p className="text-sm leading-relaxed" style={{ color: B.muted }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FounderQuote() {
  return (
    <section style={{ backgroundColor: B.navyDeep }}>
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <svg className="w-8 h-8 mx-auto mb-6 opacity-40" viewBox="0 0 24 24" fill="currentColor" style={{ color: B.teal }}>
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
        </svg>
        <blockquote className="text-xl lg:text-2xl font-medium text-white leading-relaxed mb-6">
          The first version of Evinra wasn't a product. It was a survival tool for a specific Friday night in August when three scanners went offline and we had 800 people in a queue. We fixed that Friday. Then we turned the fix into a platform.
        </blockquote>
        <p className="text-sm font-semibold" style={{ color: B.tealLight }}>Evinra Co-Founder</p>
      </div>
    </section>
  );
}

function CTA() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} className="border-b" style={{ backgroundColor: B.bg, borderColor: "#E2E8F0" }}>
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className={`text-3xl font-bold mb-4 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ color: B.text }}>
          The Story Continues in Your Field.
        </h2>
        <p className={`text-sm max-w-lg mx-auto mb-8 transition-all duration-500 delay-75 ${inView ? "opacity-100" : "opacity-0"}`} style={{ color: B.muted }}>
          Evinra grows when the operators using it grow. Every deployment adds a new chapter. See what the platform looks like for your specific operation.
        </p>
        <div className={`flex flex-wrap gap-3 justify-center transition-all duration-500 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <TealBtn href="/request-a-demo">Book a Demo <IconArrowRight className="w-4 h-4"/></TealBtn>
          <a href="/field-results" className="inline-flex items-center gap-2 text-sm font-medium px-5 py-3 rounded-md border transition-colors duration-150"
            style={{ borderColor: B.navy, color: B.navy }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = B.teal; e.currentTarget.style.color = B.teal; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = B.navy; e.currentTarget.style.color = B.navy; }}>
            See Field Results →
          </a>
        </div>
      </div>
    </section>
  );
}

export default function OurStory() {
  return (
    <div>
      <Navbar/>
      <main>
        <Hero/>
        <OriginSection/>
        <Timeline/>
        <Values/>
        <FounderQuote/>
        <CTA/>
        <DemoFormSection title="Let's Talk Shop." subtitle="No demo script, no sales pressure. Tell us what your current operation looks like and we'll show you where Evinra fits." btnLabel="Start the Conversation →"/>
      </main>
      <Footer/>
    </div>
  );
}
