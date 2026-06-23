import { useState } from "react";
import { B } from "../brand";
import { Link } from "react-router-dom";

const fmt = (n) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

function MinimalNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4" style={{ backgroundColor: B.navyDarkest, borderBottom: `1px solid rgba(255,255,255,0.06)` }}>
      <Link to="/" className="flex items-center gap-2 no-underline">
        <div className="w-7 h-7 rounded-md flex items-center justify-center" style={{ backgroundColor: B.teal }}>
          <span className="text-white text-xs font-bold">E</span>
        </div>
        <span className="text-white font-semibold text-sm">Evinra</span>
      </Link>
      <Link to="/request-a-demo"
        className="text-sm font-semibold px-4 py-2 rounded-md text-white"
        style={{ backgroundColor: B.teal }}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = B.tealDark}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = B.teal}>
        Book a Walkthrough →
      </Link>
    </nav>
  );
}

function MinimalFooter() {
  return (
    <footer className="py-8 text-center text-xs" style={{ backgroundColor: B.navyDarkest, borderTop: `1px solid rgba(255,255,255,0.06)`, color: B.muted }}>
      <div className="flex items-center justify-center flex-wrap gap-4">
        <Link to="/privacy" className="hover:text-white transition-colors no-underline" style={{ color: B.muted }}>Privacy Policy</Link>
        <Link to="/terms" className="hover:text-white transition-colors no-underline" style={{ color: B.muted }}>Terms of Service</Link>
        <Link to="/contact" className="hover:text-white transition-colors no-underline" style={{ color: B.muted }}>Contact Us</Link>
        <Link to="/" className="hover:text-white transition-colors no-underline" style={{ color: B.muted }}>Return to Evinra.com</Link>
      </div>
    </footer>
  );
}

function CalculatorSection() {
  const [step, setStep] = useState(1);
  const [volume, setVolume] = useState(25000);
  const [price, setPrice] = useState(45);
  const [email, setEmail] = useState("");

  const grossRevenue = volume * price;
  const legacyFee = grossRevenue * 0.065;
  const evinraFee = grossRevenue * 0.018;
  const savings = legacyFee - evinraFee;
  const savingsPct = ((savings / legacyFee) * 100).toFixed(0);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-32" style={{ backgroundColor: B.navyDarkest }}>
      <div className="w-full max-w-3xl">
        {step === 1 && (
          <>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-6 border text-xs font-medium" style={{ backgroundColor: "rgba(32,153,145,0.1)", borderColor: "rgba(32,153,145,0.25)", color: B.tealLight }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: B.teal }}/>
                Free Tool — No Sign-Up Required
              </div>
              <h1 className="text-4xl font-bold text-white mb-3">Calculate Your True Ticketing Costs</h1>
              <p className="text-sm" style={{ color: B.mutedLight }}>See how much you're losing to platform fees every year — and how much you could recover.</p>
            </div>

            <div className="rounded-2xl p-8 border" style={{ backgroundColor: B.navyDeep, borderColor: `${B.navy}60` }}>
              <div className="space-y-8 mb-8">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-xs font-semibold uppercase tracking-wide" style={{ color: B.mutedLight }}>Annual Ticket Volume</label>
                    <span className="text-white font-bold">{volume.toLocaleString()} tickets</span>
                  </div>
                  <input type="range" min={1000} max={200000} step={1000} value={volume}
                    onChange={e => setVolume(Number(e.target.value))}
                    className="w-full cursor-pointer" style={{ accentColor: B.teal }}/>
                  <div className="flex justify-between text-xs mt-1" style={{ color: B.muted }}>
                    <span>1,000</span><span>200,000</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-xs font-semibold uppercase tracking-wide" style={{ color: B.mutedLight }}>Average Ticket Price</label>
                    <span className="text-white font-bold">${price}</span>
                  </div>
                  <input type="range" min={10} max={250} step={5} value={price}
                    onChange={e => setPrice(Number(e.target.value))}
                    className="w-full cursor-pointer" style={{ accentColor: B.teal }}/>
                  <div className="flex justify-between text-xs mt-1" style={{ color: B.muted }}>
                    <span>$10</span><span>$250</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl p-6 mb-6" style={{ backgroundColor: B.navyDarkest }}>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-xs mb-1.5" style={{ color: B.muted }}>Your Gross Revenue</p>
                    <p className="text-xl font-bold text-white">{fmt(grossRevenue)}</p>
                  </div>
                  <div>
                    <p className="text-xs mb-1.5" style={{ color: B.muted }}>Legacy Platform Takes</p>
                    <p className="text-xl font-bold" style={{ color: "#EF4444" }}>-{fmt(legacyFee)}</p>
                  </div>
                  <div>
                    <p className="text-xs mb-1.5" style={{ color: B.muted }}>You Could Recover</p>
                    <p className="text-xl font-bold" style={{ color: B.tealLight }}>+{fmt(savings)}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 text-center text-xs border-t" style={{ borderColor: `${B.navy}60`, color: B.muted }}>
                  Estimated {savingsPct}% reduction in platform fees based on industry average vs. Evinra flat rate
                </div>
              </div>

              <button onClick={() => setStep(2)}
                className="w-full py-4 rounded-lg text-base font-semibold text-white transition-colors"
                style={{ backgroundColor: B.teal }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = B.tealDark}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = B.teal}>
                Unlock My Savings Report →
              </button>
              <p className="text-xs text-center mt-3" style={{ color: B.muted }}>No credit card. No sales calls without your permission.</p>
            </div>
          </>
        )}

        {step === 2 && (
          <div className="rounded-2xl p-10 border max-w-md mx-auto" style={{ backgroundColor: B.navyDeep, borderColor: `${B.navy}60` }}>
            <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: B.navyDarkest }}>
              <p className="text-xs mb-1" style={{ color: B.muted }}>Estimated annual savings</p>
              <p className="text-2xl font-bold" style={{ color: B.tealLight }}>{fmt(savings)}</p>
              <p className="text-xs mt-1" style={{ color: B.muted }}>on {volume.toLocaleString()} tickets at ${price} avg</p>
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Your detailed report is one step away.</h2>
            <p className="text-sm mb-6" style={{ color: B.mutedLight }}>We'll send a full cost breakdown, competitor comparison, and your personalized margin audit to your inbox.</p>
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
          <div className="text-center max-w-md mx-auto">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: `${B.teal}15`, border: `1px solid ${B.teal}30` }}>
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke={B.teal} strokeWidth={2.5}><path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h2 className="text-3xl font-bold text-white mb-3">The Math is in Your Inbox.</h2>
            <p className="text-sm mb-8" style={{ color: B.mutedLight }}>
              Check your email for your personalized savings report. If you want to see the platform that makes those numbers real, book a walkthrough below.
            </p>
            <Link to="/request-a-demo"
              className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3.5 rounded-md text-white"
              style={{ backgroundColor: B.teal }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = B.tealDark}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = B.teal}>
              Book a Custom Walkthrough →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

function WhySection() {
  const items = [
    {
      h: "No Hidden Add-Ons",
      body: "Our calculator uses the real cost structure: a flat software rate, not a percentage of revenue. No surprise gateway fees, no 'premium' gate-sync charges buried in fine print.",
    },
    {
      h: "Competitive Analysis",
      body: "We compare your current situation against the industry average fee structure so you can see what you're actually paying vs. what the market standard is.",
    },
    {
      h: "Margin Recovery",
      body: "The report maps out where your margin is leaking right now and what you'd recover by switching to a flat-rate model. Specific numbers, not percentages in a slide deck.",
    },
  ];
  return (
    <section style={{ backgroundColor: B.navyDeep }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-xl font-bold text-white mb-8 text-center">Why Run the Math?</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map(({ h, body }) => (
            <div key={h} className="rounded-xl p-7 border" style={{ backgroundColor: B.navyDarkest, borderColor: `${B.navy}60` }}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `rgba(32,153,145,0.12)` }}>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke={B.teal} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
              <h4 className="text-sm font-semibold text-white mb-2">{h}</h4>
              <p className="text-sm leading-relaxed" style={{ color: B.muted }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ROICalculator() {
  return (
    <div style={{ backgroundColor: B.navyDarkest }}>
      <MinimalNav/>
      <main>
        <CalculatorSection/>
        <WhySection/>
      </main>
      <MinimalFooter/>
    </div>
  );
}
