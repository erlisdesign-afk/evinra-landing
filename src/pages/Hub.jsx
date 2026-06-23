import { useState } from "react";
import { B, TealBtn } from "../brand";
import { Navbar, Footer, useInView, IconArrowRight } from "../components/shared";
import { Link } from "react-router-dom";

const PILLARS = [
  {
    title: "Gate Velocity & Admissions",
    articles: [
      { title: "How to Clear 5,000 Attendees in the First Hour Without Creating a Crush", tag: "Operations" },
      { title: "Sub-Second Scanning: What Hardware Actually Matters at Peak Entry", tag: "Hardware" },
      { title: "Gate Staffing Ratios for Large Outdoor Events", tag: "Field Guide" },
    ],
  },
  {
    title: "Hardware & Offline Networks",
    articles: [
      { title: "Building a Peer-to-Peer Scanner Network for Dead Cell Zones", tag: "Technical" },
      { title: "Which Barcode Scanners Hold Up in Rain, Dust, and Direct Sunlight", tag: "Hardware" },
      { title: "Offline-First Architecture: Why Local Sync Beats Cloud-Dependent Systems", tag: "Technical" },
    ],
  },
  {
    title: "Cash Flow & Vendor Routing",
    articles: [
      { title: "How to Close Out 30 Vendor Booths in Under 20 Minutes", tag: "Operations" },
      { title: "Real-Time Vendor Sales Dashboards: What Data Actually Matters", tag: "Analytics" },
      { title: "Structuring Vendor Agreements to Simplify Settlement Day", tag: "Field Guide" },
    ],
  },
  {
    title: "Ticketing Strategy & Margins",
    articles: [
      { title: "The Per-Ticket Fee Breakdown: What Platforms Actually Charge vs. What They Advertise", tag: "Finance" },
      { title: "When to Use Convenience Fees (And How to Price Them)", tag: "Finance" },
      { title: "White-Label vs. Third-Party Ticketing: A Financial Comparison", tag: "Analysis" },
    ],
  },
];

const BLUEPRINTS = [
  {
    title: "The 48-Hour Pre-Flight Checklist",
    desc: "The complete gate-to-gate readiness check every production manager needs to run two days before opening. Covers hardware setup, network testing, staff permissions, and contingency plans.",
    tag: "Field Blueprint",
  },
  {
    title: "The Event Director's Guide to Reclaiming Margin",
    desc: "A step-by-step financial audit framework for identifying hidden ticketing costs, restructuring vendor agreements, and calculating the real cost-per-attendee of your current software stack.",
    tag: "Financial Guide",
  },
  {
    title: "How to Build a White-Label Ticketing Funnel",
    desc: "From domain configuration to custom receipt emails to gate scanner setup, this guide walks through every step of launching a fully branded ticket checkout on your own website.",
    tag: "Implementation Guide",
  },
];

function Hero() {
  const [query, setQuery] = useState("");
  return (
    <section className="relative pt-28 pb-16" style={{ backgroundColor: B.navyDarkest }}>
      <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 60% 50% at 50% 60%, ${B.navyDeep} 0%, transparent 70%)` }}/>
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-6 border text-xs font-medium" style={{ backgroundColor: "rgba(32,153,145,0.1)", borderColor: "rgba(32,153,145,0.25)", color: B.tealLight }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: B.teal }}/>
          Free Resource Center
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold text-white leading-[1.07] tracking-tight mb-4">
          The Event Operations Hub.
        </h1>
        <p className="text-[15px] leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: B.mutedLight }}>
          Tactical guides, field blueprints, and real data for outdoor event operators who need answers before the gates open — not after.
        </p>
        <div className="relative max-w-2xl mx-auto">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke={B.muted} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder='Search for "offline scanning", "vendor payouts", or "reducing ticketing fees"...'
            className="w-full rounded-xl border pl-11 pr-4 py-4 text-sm outline-none"
            style={{ backgroundColor: B.navyDeep, borderColor: `${B.navy}80`, color: "#fff" }}
            onFocus={e => e.currentTarget.style.borderColor = B.teal}
            onBlur={e => e.currentTarget.style.borderColor = `${B.navy}80`}/>
        </div>
      </div>
    </section>
  );
}

function ArticleCard({ title, tag, dark = false }) {
  return (
    <div className="rounded-lg p-5 border cursor-pointer group transition-colors"
      style={{ backgroundColor: dark ? B.navyDarkest : "#fff", borderColor: dark ? `${B.navy}60` : "#E2E8F0" }}>
      <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded mb-3" style={{ backgroundColor: `rgba(32,153,145,0.1)`, color: B.teal }}>{tag}</span>
      <h4 className="text-sm font-semibold leading-snug group-hover:underline" style={{ color: dark ? "#fff" : B.text }}>{title}</h4>
      <div className="flex items-center gap-1 mt-3 text-xs font-medium" style={{ color: B.teal }}>
        Read more <IconArrowRight className="w-3 h-3"/>
      </div>
    </div>
  );
}

function PillarsSection() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} style={{ backgroundColor: B.bg }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10">
          {PILLARS.map(({ title, articles }, i) => (
            <div key={title} className={`transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`} style={{ transitionDelay: `${i * 80}ms` }}>
              <h3 className="text-base font-bold mb-4" style={{ color: B.text }}>{title}</h3>
              <div className="space-y-3">
                {articles.map(a => <ArticleCard key={a.title} {...a}/>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlueprintsSection() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} style={{ backgroundColor: B.navyDeep }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Field Blueprints.</h2>
          <p className="text-sm leading-relaxed" style={{ color: B.mutedLight }}>Long-form guides written from the field, for the field. These cover the decisions that actually matter in the 72 hours before your event opens.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {BLUEPRINTS.map(({ title, desc, tag }, i) => (
            <div key={title} className={`rounded-xl p-7 border cursor-pointer group transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ backgroundColor: B.navyDarkest, borderColor: `${B.navy}60`, transitionDelay: `${i * 80}ms` }}>
              <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded mb-4" style={{ backgroundColor: `rgba(32,153,145,0.12)`, color: B.teal }}>{tag}</span>
              <h3 className="text-base font-semibold text-white mb-3 group-hover:underline leading-snug">{title}</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: B.muted }}>{desc}</p>
              <div className="flex items-center gap-1 text-xs font-medium" style={{ color: B.teal }}>
                Read the blueprint <IconArrowRight className="w-3 h-3"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadMagnet() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} style={{ backgroundColor: B.navyDarkest }}>
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className={`transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <h2 className="text-3xl font-bold text-white mb-4">Are Hidden Fees the Biggest Bottleneck of All?</h2>
          <p className="text-[15px] leading-relaxed mb-8 max-w-xl mx-auto" style={{ color: B.mutedLight }}>
            Most operators focus on gate speed and vendor routing — and miss the thousands of dollars leaking out through platform fees every season. Run your numbers in 30 seconds.
          </p>
          <TealBtn href="/roi-calculator">Calculate Your Savings <IconArrowRight className="w-4 h-4"/></TealBtn>
        </div>
      </div>
    </section>
  );
}

export default function Hub() {
  return (
    <div>
      <Navbar/>
      <main>
        <Hero/>
        <PillarsSection/>
        <BlueprintsSection/>
        <LeadMagnet/>
      </main>
      <Footer/>
    </div>
  );
}
