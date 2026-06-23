import { useState } from "react";
import { B, TealBtn, GhostBtn } from "../brand";
import { Navbar, Footer, useInView, IconArrowRight } from "../components/shared";

const inputCls = "w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors";
const inputStyle = { borderColor: "#E2E8F0", backgroundColor: "#fff", color: B.text };
const onFocus = (e) => { e.currentTarget.style.borderColor = B.teal; e.currentTarget.style.boxShadow = `0 0 0 3px ${B.teal}18`; };
const onBlur = (e) => { e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.boxShadow = "none"; };

function Hero() {
  return (
    <section className="relative pt-28 pb-20" style={{ backgroundColor: B.navyDarkest }}>
      <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 60% 50% at 60% 60%, ${B.navyDeep} 0%, transparent 70%)` }}/>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-6 border text-xs font-medium" style={{ backgroundColor: "rgba(32,153,145,0.1)", borderColor: "rgba(32,153,145,0.25)", color: B.tealLight }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: B.teal }}/>
            10 Spots Available
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-[1.07] tracking-tight mb-6">
            Become a Founding Operator.
          </h1>
          <p className="text-[15px] leading-relaxed mb-8 max-w-2xl" style={{ color: B.mutedLight }}>
            We aren't building this for investors. We're building it for the field. We are opening 10 spots for high-volume operators to partner with us, shape our engineering roadmap, and lock in our absolute lowest transaction rates for life.
          </p>
          <div className="flex flex-wrap gap-3">
            <TealBtn href="#apply">Apply for a Spot <IconArrowRight className="w-4 h-4"/></TealBtn>
            <GhostBtn href="#advantage">See the Advantage →</GhostBtn>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} style={{ backgroundColor: B.navyDeep }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className={`max-w-2xl transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <h2 className="text-3xl font-bold text-white mb-6">Why We Are Doing This.</h2>
          <p className="text-[15px] leading-relaxed mb-5" style={{ color: B.mutedLight }}>
            Most software companies try to guess what you need from behind a desk. We'd rather just build exactly what you tell us to.
          </p>
          <p className="text-[15px] leading-relaxed" style={{ color: B.mutedLight }}>
            We are looking for operators who run massive crowds, deal with dead cell zones, and manage complex offline hardware. We need your on-the-ground experience to help us stress-test our system and refine our features. In return, you get a ticketing and operations platform custom-fitted to your exact headaches, directly from the engineers building it.
          </p>
        </div>
      </div>
    </section>
  );
}

function AdvantageSection() {
  const [ref, inView] = useInView();
  const items = [
    {
      h: "Lifetime Rate Lock",
      body: "Secure an exclusive, early-adopter transaction percentage. No matter how many features we add or how big the platform grows, your rate never goes up.",
    },
    {
      h: "Priority Custom Deployment",
      body: "Skip the onboarding line. Our implementation team will personally build out your fully white-labeled checkout, configure your custom multi-vendor routing, and prep your offline hardware network so you are ready long before the gates open.",
    },
    {
      h: "Direct Roadmap Access",
      body: "You get a direct line to our lead developers. If you have a specific bottleneck at your gates, fixing it becomes our next priority.",
    },
  ];
  return (
    <section id="advantage" ref={ref} style={{ backgroundColor: B.bg }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl font-bold mb-3" style={{ color: B.text }}>The Unfair Advantage.</h2>
          <p className="text-sm leading-relaxed" style={{ color: B.muted }}>By partnering with us early, you get a level of access and pricing that will never be offered to the public.</p>
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

function WhoSection() {
  const [ref, inView] = useInView();
  const items = [
    {
      h: "High-Volume Operators",
      body: "You manage large-scale fairs, touring productions, or massive multi-day outdoor events.",
    },
    {
      h: "Margin Protectors",
      body: "You are actively losing money to third-party ticketing platforms taking a massive cut of your sales, and you want your revenue back.",
    },
    {
      h: "Complex Logistics",
      body: "You have serious on-the-ground needs, like offline gate scanning, walk-up POS integration, and multi-vendor payouts.",
    },
  ];
  return (
    <section ref={ref} style={{ backgroundColor: B.navyDarkest }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Who Should Apply.</h2>
          <p className="text-sm leading-relaxed" style={{ color: B.mutedLight }}>This isn't for a 50-person local meetup. We are looking for heavy hitters who need real infrastructure.</p>
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

function ApplySection() {
  const [form, setForm] = useState({ name: "", eventType: "", bottleneck: "" });
  const [submitted, setSubmitted] = useState(false);
  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));
  const [ref, inView] = useInView();

  return (
    <section id="apply" ref={ref} style={{ backgroundColor: B.navyDeep }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className={`transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            <h2 className="text-3xl font-bold text-white mb-4">Claim Your Spot.</h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: B.mutedLight }}>
              Submit your details below. We will review your numbers and set up a direct call to see if your operation is a fit for the program.
            </p>
            <div className="space-y-4 text-sm" style={{ color: B.mutedLight }}>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke={B.teal} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                <span>We review every application personally — no autoresponders.</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke={B.teal} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                <span>If you qualify, we set up a direct call within 48 hours.</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke={B.teal} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                <span>10 spots total. Once they're gone, this program closes permanently.</span>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`} style={{ transitionDelay: "100ms" }}>
            {submitted ? (
              <div className="rounded-2xl p-10 border text-center" style={{ backgroundColor: B.navyDarkest, borderColor: `${B.teal}30` }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: `${B.teal}15` }}>
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke={B.teal} strokeWidth={2.5}><path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Application received.</h3>
                <p className="text-sm" style={{ color: B.mutedLight }}>We'll review your numbers and reach out within 48 hours.</p>
              </div>
            ) : (
              <div className="rounded-2xl p-8 border" style={{ backgroundColor: B.navyDarkest, borderColor: `${B.navy}60` }}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: B.mutedLight }}>Name & Role *</label>
                    <input className={inputCls} style={{ ...inputStyle, backgroundColor: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.1)", color: "#fff" }}
                      value={form.name} onChange={e => set("name", e.target.value)}
                      onFocus={e => { e.currentTarget.style.borderColor = B.teal; }}
                      onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
                      placeholder="Maria Torres, Production Manager"/>
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: B.mutedLight }}>Event Type & Annual Ticket Volume *</label>
                    <input className={inputCls} style={{ ...inputStyle, backgroundColor: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.1)", color: "#fff" }}
                      value={form.eventType} onChange={e => set("eventType", e.target.value)}
                      onFocus={e => { e.currentTarget.style.borderColor = B.teal; }}
                      onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
                      placeholder="Multi-day fair, ~80,000 tickets/year"/>
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: B.mutedLight }}>What is your biggest software bottleneck right now? *</label>
                    <textarea rows={4} className={inputCls} style={{ ...inputStyle, backgroundColor: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.1)", color: "#fff", resize: "none" }}
                      value={form.bottleneck} onChange={e => set("bottleneck", e.target.value)}
                      onFocus={e => { e.currentTarget.style.borderColor = B.teal; }}
                      onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
                      placeholder="e.g. Gate connectivity drops mid-rush, vendor settlements taking 3 days, walk-up cash chaos..."/>
                  </div>
                  <button
                    onClick={() => setSubmitted(true)}
                    disabled={!form.name || !form.eventType || !form.bottleneck}
                    className="w-full py-3.5 rounded-lg text-sm font-semibold text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    style={{ backgroundColor: B.teal }}
                    onMouseEnter={e => !e.currentTarget.disabled && (e.currentTarget.style.backgroundColor = B.tealDark)}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = B.teal}>
                    Submit Application →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function FoundingOperators() {
  return (
    <div>
      <Navbar/>
      <main>
        <Hero/>
        <WhySection/>
        <AdvantageSection/>
        <WhoSection/>
        <ApplySection/>
      </main>
      <Footer/>
    </div>
  );
}
