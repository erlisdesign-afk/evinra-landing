import { useState } from "react";
import { B } from "../brand";
import { EvinraLogo } from "../components/shared";

const BOTTLENECKS = [
  "Offline scanning & gate connectivity",
  "Walk-up sales & cash management",
  "Multi-vendor settlement & commissions",
  "Staff permissions & scheduling",
  "Hardware management & inventory",
  "Post-event financial reporting",
];

function StepIndicator({ current, total }) {
  return (
    <div className="flex items-center gap-2 mb-8">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className={`w-6 h-6 rounded-full text-xs flex items-center justify-center font-semibold transition-colors`}
            style={{
              backgroundColor: i < current ? B.teal : i === current ? B.teal : "transparent",
              border: `2px solid ${i <= current ? B.teal : `${B.navy}60`}`,
              color: i <= current ? "#fff" : B.muted,
            }}>
            {i < current ? (
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}><path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            ) : i + 1}
          </div>
          {i < total - 1 && <div className="w-8 h-px" style={{ backgroundColor: i < current ? B.teal : `${B.navy}40` }}/>}
        </div>
      ))}
    </div>
  );
}

export default function RequestDemo() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    company: "", eventType: "", gateCount: "",
    bottlenecks: [], message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (key, val) => setForm(prev => ({ ...prev, [key]: val }));
  const toggleBottleneck = (b) => set("bottlenecks",
    form.bottlenecks.includes(b)
      ? form.bottlenecks.filter(x => x !== b)
      : [...form.bottlenecks, b]
  );

  const inputCls = "w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors";
  const inputStyle = { borderColor: "#E2E8F0", backgroundColor: "#fff", color: B.text };
  const inputFocus = (e) => { e.currentTarget.style.borderColor = B.teal; e.currentTarget.style.boxShadow = `0 0 0 3px ${B.teal}18`; };
  const inputBlur = (e) => { e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.boxShadow = "none"; };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6" style={{ backgroundColor: B.navyDarkest }}>
        <div className="text-center max-w-lg">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: `${B.teal}20` }}>
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke={B.teal} strokeWidth={2.5}><path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">We'll be in touch within 24 hours.</h2>
          <p className="text-sm leading-relaxed mb-8" style={{ color: B.mutedLight }}>
            A real member of the Evinra team — not an SDR with a script — will reach out to schedule a walkthrough tailored to your operation.
          </p>
          <a href="/" className="text-sm font-semibold" style={{ color: B.tealLight }}>← Back to Evinra</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: B.navyDarkest }}>
      {/* Minimal nav */}
      <header className="border-b" style={{ borderColor: `${B.navy}40` }}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/"><EvinraLogo variant="light" className="h-6"/></a>
          <a href="/" className="text-sm" style={{ color: B.muted }}>← Back to Evinra</a>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: copy */}
          <div className="lg:col-span-2">
            <h1 className="text-2xl font-bold text-white mb-4 leading-snug">Schedule Your<br/>Evinra Walkthrough.</h1>
            <p className="text-sm leading-relaxed mb-8" style={{ color: B.mutedLight }}>
              A 45-minute call with an actual operator who has run Evinra in the field. No demo script. No feature bingo. We'll look at your current operation and show you exactly what changes.
            </p>
            <div className="space-y-4">
              {[
                { title: "Real People", body: "You'll hear from someone who has actually used Evinra at a fairground — not a sales rep reading slides." },
                { title: "No Pressure", body: "We walk through the software, answer your questions, and let you decide. No follow-up cadence if you're not interested." },
                { title: "Operational Focus", body: "Bring your current vendor contracts, hardware inventory, and settlement process. We work from what you have." },
              ].map(({ title, body }) => (
                <div key={title} className="rounded-xl p-5 border" style={{ backgroundColor: B.navyDeep, borderColor: `${B.navy}60` }}>
                  <p className="text-sm font-semibold text-white mb-1">{title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: B.mutedLight }}>{body}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-5 rounded-xl border" style={{ backgroundColor: "rgba(32,153,145,0.08)", borderColor: `${B.teal}30` }}>
              <p className="text-xs font-semibold mb-1" style={{ color: B.tealLight }}>Prefer phone?</p>
              <a href="tel:+1-800-EVINRA-1" className="text-sm font-medium text-white">+1 (800) EVINRA-1</a>
              <p className="text-xs mt-1" style={{ color: B.muted }}>Mon–Fri, 9 AM–6 PM ET</p>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl p-8 border" style={{ backgroundColor: "#fff", borderColor: "#E2E8F0" }}>
              <StepIndicator current={step} total={3}/>

              {step === 0 && (
                <div>
                  <h3 className="text-base font-semibold mb-5" style={{ color: B.text }}>Tell us who you are.</h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: B.muted }}>First Name *</label>
                      <input className={inputCls} style={inputStyle} value={form.firstName} onChange={e => set("firstName", e.target.value)} onFocus={inputFocus} onBlur={inputBlur} placeholder="Maria"/>
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: B.muted }}>Last Name *</label>
                      <input className={inputCls} style={inputStyle} value={form.lastName} onChange={e => set("lastName", e.target.value)} onFocus={inputFocus} onBlur={inputBlur} placeholder="Torres"/>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-xs font-medium mb-1.5" style={{ color: B.muted }}>Work Email *</label>
                    <input type="email" className={inputCls} style={inputStyle} value={form.email} onChange={e => set("email", e.target.value)} onFocus={inputFocus} onBlur={inputBlur} placeholder="maria@statefair.com"/>
                  </div>
                  <div className="mb-4">
                    <label className="block text-xs font-medium mb-1.5" style={{ color: B.muted }}>Phone</label>
                    <input type="tel" className={inputCls} style={inputStyle} value={form.phone} onChange={e => set("phone", e.target.value)} onFocus={inputFocus} onBlur={inputBlur} placeholder="+1 (555) 000-0000"/>
                  </div>
                  <div className="mb-6">
                    <label className="block text-xs font-medium mb-1.5" style={{ color: B.muted }}>Company / Organization *</label>
                    <input className={inputCls} style={inputStyle} value={form.company} onChange={e => set("company", e.target.value)} onFocus={inputFocus} onBlur={inputBlur} placeholder="Sunstate Fairs LLC"/>
                  </div>
                  <button
                    onClick={() => setStep(1)}
                    disabled={!form.firstName || !form.lastName || !form.email || !form.company}
                    className="w-full py-3 rounded-lg text-sm font-semibold text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    style={{ backgroundColor: B.teal }}
                    onMouseEnter={e => !e.currentTarget.disabled && (e.currentTarget.style.backgroundColor = B.tealDark)}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = B.teal}>
                    Continue →
                  </button>
                </div>
              )}

              {step === 1 && (
                <div>
                  <h3 className="text-base font-semibold mb-5" style={{ color: B.text }}>Tell us about your operation.</h3>
                  <div className="mb-4">
                    <label className="block text-xs font-medium mb-1.5" style={{ color: B.muted }}>Event Type *</label>
                    <select className={inputCls} style={inputStyle} value={form.eventType} onChange={e => set("eventType", e.target.value)} onFocus={inputFocus} onBlur={inputBlur}>
                      <option value="">Select your event type</option>
                      <option>State / County Fair</option>
                      <option>Traveling Carnival</option>
                      <option>Music Festival</option>
                      <option>Outdoor Market / Night Market</option>
                      <option>Touring Production</option>
                      <option>Trade Show / Expo</option>
                      <option>Other Outdoor Event</option>
                    </select>
                  </div>
                  <div className="mb-5">
                    <label className="block text-xs font-medium mb-1.5" style={{ color: B.muted }}>Gate / Entry Points</label>
                    <select className={inputCls} style={inputStyle} value={form.gateCount} onChange={e => set("gateCount", e.target.value)} onFocus={inputFocus} onBlur={inputBlur}>
                      <option value="">Select range</option>
                      <option>1–3 gates</option>
                      <option>4–8 gates</option>
                      <option>9–15 gates</option>
                      <option>16+ gates</option>
                    </select>
                  </div>
                  <div className="mb-6">
                    <label className="block text-xs font-medium mb-2" style={{ color: B.muted }}>Biggest operational bottlenecks (select all that apply)</label>
                    <div className="grid grid-cols-2 gap-2">
                      {BOTTLENECKS.map(b => (
                        <button key={b} type="button"
                          onClick={() => toggleBottleneck(b)}
                          className="text-left px-3 py-2.5 rounded-lg border text-xs transition-colors"
                          style={{
                            borderColor: form.bottlenecks.includes(b) ? B.teal : "#E2E8F0",
                            backgroundColor: form.bottlenecks.includes(b) ? `${B.teal}10` : "#fff",
                            color: form.bottlenecks.includes(b) ? B.tealDark : B.muted,
                          }}>
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button onClick={() => setStep(0)} className="px-5 py-3 rounded-lg border text-sm font-medium transition-colors" style={{ borderColor: "#E2E8F0", color: B.muted }}>← Back</button>
                    <button
                      onClick={() => setStep(2)}
                      disabled={!form.eventType}
                      className="flex-1 py-3 rounded-lg text-sm font-semibold text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                      style={{ backgroundColor: B.teal }}
                      onMouseEnter={e => !e.currentTarget.disabled && (e.currentTarget.style.backgroundColor = B.tealDark)}
                      onMouseLeave={e => e.currentTarget.style.backgroundColor = B.teal}>
                      Continue →
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h3 className="text-base font-semibold mb-2" style={{ color: B.text }}>Anything else we should know?</h3>
                  <p className="text-xs mb-5" style={{ color: B.muted }}>Current tools, timeline, specific use cases — the more context you give us, the more useful the call.</p>
                  <div className="mb-6">
                    <textarea
                      rows={5}
                      className={inputCls}
                      style={{ ...inputStyle, resize: "none" }}
                      value={form.message}
                      onChange={e => set("message", e.target.value)}
                      onFocus={inputFocus}
                      onBlur={inputBlur}
                      placeholder="We currently use TicketSocket for ticketing and square for vendor POS. Main pain point is reconciling everything on Monday morning..."/>
                  </div>
                  <div className="mb-5 p-4 rounded-lg border" style={{ backgroundColor: B.bg, borderColor: "#E2E8F0" }}>
                    <p className="text-xs font-medium mb-2" style={{ color: B.text }}>Review your submission</p>
                    <p className="text-xs" style={{ color: B.muted }}>{form.firstName} {form.lastName} · {form.email} · {form.company}</p>
                    <p className="text-xs mt-1" style={{ color: B.muted }}>{form.eventType}{form.gateCount ? ` · ${form.gateCount}` : ""}</p>
                    {form.bottlenecks.length > 0 && <p className="text-xs mt-1" style={{ color: B.muted }}>Bottlenecks: {form.bottlenecks.join(", ")}</p>}
                  </div>
                  <div className="flex gap-3">
                    <button onClick={() => setStep(1)} className="px-5 py-3 rounded-lg border text-sm font-medium" style={{ borderColor: "#E2E8F0", color: B.muted }}>← Back</button>
                    <button
                      onClick={() => setSubmitted(true)}
                      className="flex-1 py-3 rounded-lg text-sm font-semibold text-white"
                      style={{ backgroundColor: B.teal }}
                      onMouseEnter={e => e.currentTarget.style.backgroundColor = B.tealDark}
                      onMouseLeave={e => e.currentTarget.style.backgroundColor = B.teal}>
                      Request Demo →
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
