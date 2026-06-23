import { useState, useRef } from "react";
import { B, TealBtn, GhostBtn } from "../brand";
import { Navbar, Footer, useInView, IconArrowRight } from "../components/shared";
import { Link } from "react-router-dom";

/* ─── INLINE CALCULATOR LEAD MAGNET ─── */
function CalcLeadMagnet() {
  const [step, setStep] = useState(1);
  const [volume, setVolume] = useState(25000);
  const [price, setPrice] = useState(45);
  const [email, setEmail] = useState("");
  const [ref, inView] = useInView();

  const grossRevenue = volume * price;
  const competitorFee = grossRevenue * 0.065;
  const evinraFee = grossRevenue * 0.018;
  const savings = competitorFee - evinraFee;
  const fmt = (n) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

  return (
    <section id="calculator" ref={ref} style={{ backgroundColor: B.navyDeep }}>
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className={`transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">See How Much Margin You Can Reclaim.</h2>
            <p className="text-sm" style={{ color: B.mutedLight }}>Run the numbers against your current platform in 30 seconds.</p>
          </div>

          {step === 1 && (
            <div className="rounded-2xl p-8 border" style={{ backgroundColor: B.navyDarkest, borderColor: `${B.navy}60` }}>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-xs font-semibold mb-3 uppercase tracking-wide" style={{ color: B.mutedLight }}>
                    Annual Ticket Volume
                  </label>
                  <div className="flex items-center gap-3 mb-2">
                    <input type="range" min={1000} max={200000} step={1000} value={volume}
                      onChange={e => setVolume(Number(e.target.value))}
                      className="flex-1 accent-teal-500 cursor-pointer" style={{ accentColor: B.teal }}/>
                    <span className="text-white font-bold text-base w-24 text-right">{volume.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-xs" style={{ color: B.muted }}>
                    <span>1,000</span><span>200,000</span>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-3 uppercase tracking-wide" style={{ color: B.mutedLight }}>
                    Average Ticket Price
                  </label>
                  <div className="flex items-center gap-3 mb-2">
                    <input type="range" min={10} max={250} step={5} value={price}
                      onChange={e => setPrice(Number(e.target.value))}
                      className="flex-1 cursor-pointer" style={{ accentColor: B.teal }}/>
                    <span className="text-white font-bold text-base w-24 text-right">${price}</span>
                  </div>
                  <div className="flex justify-between text-xs" style={{ color: B.muted }}>
                    <span>$10</span><span>$250</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl p-6 mb-6" style={{ backgroundColor: B.navyDeep }}>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-xs mb-1" style={{ color: B.muted }}>Gross Revenue</p>
                    <p className="text-lg font-bold text-white">{fmt(grossRevenue)}</p>
                  </div>
                  <div>
                    <p className="text-xs mb-1" style={{ color: B.muted }}>Legacy Platform Fees (~6.5%)</p>
                    <p className="text-lg font-bold" style={{ color: "#EF4444" }}>-{fmt(competitorFee)}</p>
                  </div>
                  <div>
                    <p className="text-xs mb-1" style={{ color: B.muted }}>Estimated Annual Savings</p>
                    <p className="text-lg font-bold" style={{ color: B.tealLight }}>+{fmt(savings)}</p>
                  </div>
                </div>
              </div>

              <button onClick={() => setStep(2)}
                className="w-full py-3.5 rounded-lg text-sm font-semibold text-white transition-colors"
                style={{ backgroundColor: B.teal }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = B.tealDark}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = B.teal}>
                Unlock My Full Savings Report →
              </button>
              <p className="text-xs text-center mt-3" style={{ color: B.muted }}>No credit card. No sales calls without your permission.</p>
            </div>
          )}

          {step === 2 && (
            <div className="rounded-2xl p-8 border max-w-md mx-auto" style={{ backgroundColor: B.navyDarkest, borderColor: `${B.navy}60` }}>
              <h3 className="text-lg font-bold text-white mb-2">Your custom audit is almost ready.</h3>
              <p className="text-sm mb-6" style={{ color: B.mutedLight }}>We'll send your personalized margin breakdown and a competitive cost audit to your inbox.</p>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@yourcompany.com"
                className="w-full rounded-lg border px-4 py-3 text-sm mb-4 outline-none"
                style={{ backgroundColor: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.1)", color: "#fff" }}
                onFocus={e => e.currentTarget.style.borderColor = B.teal}
                onBlur={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"}/>
              <button onClick={() => email && setStep(3)}
                disabled={!email}
                className="w-full py-3.5 rounded-lg text-sm font-semibold text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ backgroundColor: B.teal }}
                onMouseEnter={e => !e.currentTarget.disabled && (e.currentTarget.style.backgroundColor = B.tealDark)}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = B.teal}>
                Send My Report →
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="rounded-2xl p-10 border text-center max-w-md mx-auto" style={{ backgroundColor: B.navyDarkest, borderColor: `${B.teal}30` }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: `${B.teal}15` }}>
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke={B.teal} strokeWidth={2.5}><path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Your Custom Audit is on the Way.</h3>
              <p className="text-sm mb-6" style={{ color: B.mutedLight }}>Check your inbox. In the meantime, book a walkthrough to see the platform live.</p>
              <Link to="/request-a-demo"
                className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-md text-white"
                style={{ backgroundColor: B.teal }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = B.tealDark}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = B.teal}>
                Book a Custom Walkthrough →
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─── ACCORDION ─── */
function Accordion({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="space-y-3">
      {items.map(({ q, a }, i) => (
        <div key={i} className="rounded-xl border overflow-hidden" style={{ borderColor: "#E2E8F0" }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-4 text-left text-sm font-semibold transition-colors"
            style={{ backgroundColor: open === i ? "#fff" : B.bg, color: B.text }}>
            {q}
            <svg className="w-4 h-4 shrink-0 transition-transform" style={{ transform: open === i ? "rotate(180deg)" : "none", color: B.teal }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          {open === i && (
            <div className="px-6 pb-5 pt-1 text-sm leading-relaxed border-t" style={{ backgroundColor: "#fff", color: B.muted, borderColor: "#E2E8F0" }}>
              {a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── PAGE SECTIONS ─── */
function Hero() {
  return (
    <section className="relative pt-28 pb-20" style={{ backgroundColor: B.navyDarkest }}>
      <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 60% 50% at 60% 60%, ${B.navyDeep} 0%, transparent 70%)` }}/>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-6 border text-xs font-medium" style={{ backgroundColor: "rgba(32,153,145,0.1)", borderColor: "rgba(32,153,145,0.25)", color: B.tealLight }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: B.teal }}/>
            Transparent Pricing
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-[1.07] tracking-tight mb-6">
            Transparent Event Software Cost & Ticketing Fees.
          </h1>
          <p className="text-[15px] leading-relaxed mb-8 max-w-2xl" style={{ color: B.mutedLight }}>
            No percentage cuts on your ticket revenue. No forced multi-year contracts. No "convenience fees" flowing to us. We charge a flat software rate so you can actually forecast your costs.
          </p>
          <div className="flex flex-wrap gap-3">
            <TealBtn href="#calculator">Run My Numbers <IconArrowRight className="w-4 h-4"/></TealBtn>
            <GhostBtn href="/request-a-demo">Request a Custom Quote →</GhostBtn>
          </div>
        </div>
      </div>
    </section>
  );
}

function NoCostsSection() {
  const [ref, inView] = useInView();
  const items = [
    {
      h: "You Control Convenience Fees",
      body: "We don't take a percentage of ticket sales. If you choose to add a convenience fee to your tickets, every dollar goes directly to you. Evinra charges a flat software rate.",
    },
    {
      h: "Fast Direct Payouts",
      body: "Your ticket revenue flows straight to your own merchant account (Stripe, Square, or your preferred processor). No middleman holding your cash until two weeks after your event.",
    },
    {
      h: "No Multi-Year Traps",
      body: "We don't believe in locking you into a contract and then raising prices when it's too late to switch. You can scale up, scale down, or walk away without penalty.",
    },
  ];
  return (
    <section ref={ref} style={{ backgroundColor: B.bg }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl font-bold mb-3" style={{ color: B.text }}>No Hidden Costs. Zero Lock-In.</h2>
          <p className="text-sm leading-relaxed" style={{ color: B.muted }}>Most pricing pages are designed to confuse. Here's exactly what you pay and what you get.</p>
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

function ModularSection() {
  const [ref, inView] = useInView();
  const items = [
    { h: "A La Carte Deployment", body: "Only pay for the modules you actually use. Don't need white-label ticketing? Don't pay for it. Running a small cash-only show? Skip the online checkout module." },
    { h: "Unlimited Team Seats", body: "Add your entire production team, gate staff managers, and box office operators without worrying about per-seat licensing fees." },
    { h: "White-Label Setup Included", body: "Every plan includes full white-label configuration. Your checkout page, your ticket PDFs, your gate scanners — all showing your brand." },
    { h: "Dedicated Implementation", body: "A real person from our team sets up your system, migrates your data, and runs a dry-run test before your first event." },
  ];
  return (
    <section ref={ref} style={{ backgroundColor: B.navyDarkest }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-4">
          <h2 className="text-3xl font-bold text-white mb-3">Modular Infrastructure. Built for Your Blueprint.</h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: B.mutedLight }}>
            There's no "small business plan" or "enterprise tier." We build a configuration around your actual operation and price it accordingly. Request a quote and we'll spec it out specifically for your event type, volume, and hardware needs.
          </p>
          <TealBtn href="/request-a-demo" className="mb-12">Request a Custom Deployment Quote <IconArrowRight className="w-4 h-4"/></TealBtn>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          {items.map(({ h, body }, i) => (
            <div key={h} className={`rounded-xl p-6 border transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ backgroundColor: B.navyDeep, borderColor: `${B.navy}60`, transitionDelay: `${i * 80}ms` }}>
              <h3 className="text-sm font-semibold text-white mb-2">{h}</h3>
              <p className="text-sm leading-relaxed" style={{ color: B.muted }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [ref, inView] = useInView();
  const testimonials = [
    {
      quote: "We were losing nearly 7% of every ticket to fees. After switching to Evinra's flat-rate model, we recaptured over $40,000 in the first season alone. The math was not complicated.",
      name: "Emily Dawson",
      title: "Executive Director, Heritage Days Festival",
    },
    {
      quote: "The first question I always asked any ticketing company was 'what's the per-ticket fee?' With Evinra, there isn't one. That alone was worth the conversation.",
      name: "Richard Bennett",
      title: "Operations Director, Momentum Live",
    },
  ];
  return (
    <section ref={ref} style={{ backgroundColor: B.navyDeep }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map(({ quote, name, title }, i) => (
            <div key={name} className={`rounded-xl p-8 border transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ backgroundColor: B.navyDarkest, borderColor: `${B.navy}60`, transitionDelay: `${i * 80}ms` }}>
              <svg className="w-6 h-6 mb-4" viewBox="0 0 24 24" fill={`${B.teal}40`}><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
              <p className="text-[15px] leading-relaxed mb-6 text-white">{quote}</p>
              <p className="text-sm font-semibold" style={{ color: B.tealLight }}>{name}</p>
              <p className="text-xs mt-0.5" style={{ color: B.muted }}>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [ref, inView] = useInView();
  const faqs = [
    {
      q: "Do you take a percentage of my ticket revenue?",
      a: "No. Evinra charges a flat software licensing rate based on your usage tier and module configuration. We do not take a cut of every ticket sold. Your gross ticket revenue is yours.",
    },
    {
      q: "What are the convenience fees, and who keeps them?",
      a: "Convenience fees are entirely optional and entirely yours to set. If you choose to charge your attendees a $2.50 processing fee, that $2.50 goes directly into your merchant account. Evinra does not collect or share in convenience fees.",
    },
    {
      q: "Is there a long-term contract requirement?",
      a: "We offer both annual and multi-year agreements, but we don't require multi-year contracts to access our full feature set. Ask us about specific contract structures during your demo.",
    },
    {
      q: "How is Evinra's pricing determined?",
      a: "Your pricing is based on your event footprint: the modules you deploy, your average ticket volume, and your hardware configuration. We spec it out specifically for your operation during the demo process — not from a generic tier table.",
    },
  ];
  return (
    <section ref={ref} style={{ backgroundColor: B.bg }}>
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className={`transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <h2 className="text-3xl font-bold mb-10" style={{ color: B.text }}>Frequently Asked Questions.</h2>
          <Accordion items={faqs}/>
        </div>
      </div>
    </section>
  );
}

export default function Pricing() {
  return (
    <div>
      <Navbar/>
      <main>
        <Hero/>
        <NoCostsSection/>
        <CalcLeadMagnet/>
        <ModularSection/>
        <TestimonialsSection/>
        <FAQSection/>
      </main>
      <Footer/>
    </div>
  );
}
