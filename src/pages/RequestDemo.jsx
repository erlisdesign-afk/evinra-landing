import { useState } from "react";
import { B, TealBtn } from "../brand";
import { EvinraLogo } from "../components/shared";

const inputCls = "w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors";
const inputStyle = { borderColor: "#E2E8F0", backgroundColor: "#fff", color: B.text };
const onFocus = (e) => { e.currentTarget.style.borderColor = B.teal; e.currentTarget.style.boxShadow = `0 0 0 3px ${B.teal}18`; };
const onBlur = (e) => { e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.boxShadow = "none"; };

function CheckItem({ children }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: `${B.teal}20` }}>
        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke={B.teal} strokeWidth={3}><path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
      <span className="text-sm leading-snug" style={{ color: B.mutedLight }}>{children}</span>
    </div>
  );
}

export default function RequestDemo() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", bottleneck: "" });
  const [submitted, setSubmitted] = useState(false);
  const set = (key, val) => setForm(prev => ({ ...prev, [key]: val }));

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6" style={{ backgroundColor: B.navyDarkest }}>
        <div className="text-center max-w-lg">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: `${B.teal}20` }}>
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke={B.teal} strokeWidth={2.5}><path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">We'll be in touch within 24 hours.</h2>
          <p className="text-sm leading-relaxed mb-8" style={{ color: B.mutedLight }}>
            A real member of the Evinra team will reach out to schedule a walkthrough tailored to your operation — not a scripted call.
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

      {/* Main 2-column */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left col */}
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-snug">Let's Look Under the Hood.</h1>
            <p className="text-sm leading-relaxed mb-10" style={{ color: B.mutedLight }}>
              We don't do scripted sales pitches or slideshows. We do custom technical walkthroughs based on exactly how you run your operation.
            </p>

            <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: B.tealLight }}>What to Expect on Our Call</p>
            <div className="space-y-4 mb-10">
              <CheckItem>
                <strong className="text-white">Solving Your Bottlenecks</strong> — We'll map Evinra directly to your biggest operational pain points, whether it's offline connectivity, vendor settlement, or gate velocity.
              </CheckItem>
              <CheckItem>
                <strong className="text-white">Hardware Compatibility</strong> — We'll review your current gear and tell you exactly what works, what needs upgrading, and what we can ship pre-configured.
              </CheckItem>
              <CheckItem>
                <strong className="text-white">Margin Analysis</strong> — We'll run a quick fee comparison between your current ticketing platform and Evinra's structure to show you what you're leaving on the table.
              </CheckItem>
            </div>

            {/* Testimonial */}
            <div className="rounded-2xl p-6 border" style={{ backgroundColor: B.navyDeep, borderColor: `${B.navy}60` }}>
              <svg className="w-5 h-5 mb-4 opacity-40" viewBox="0 0 24 24" fill="currentColor" style={{ color: B.teal }}>
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p className="text-sm leading-relaxed text-white mb-4">
                "I thought it was going to be a standard sales call. They spent the first 20 minutes asking me how I run my operation — not showing me slides. By the end, they had already mapped out a hardware spec for my specific gate layout. That's not a pitch. That's a consultation."
              </p>
              <p className="text-xs font-medium" style={{ color: B.tealLight }}>Production Manager, 8-stop Touring Circus</p>
            </div>

            {/* Phone */}
            <div className="mt-6 p-5 rounded-xl border" style={{ backgroundColor: "rgba(32,153,145,0.08)", borderColor: `${B.teal}30` }}>
              <p className="text-xs font-semibold mb-1" style={{ color: B.tealLight }}>Hate filling out forms?</p>
              <p className="text-xs mb-2" style={{ color: B.muted }}>Call or email us directly.</p>
              <a href="tel:+17863257738" className="block text-sm font-semibold text-white mb-0.5">+1 (786) 325-7738</a>
              <p className="text-xs mb-2" style={{ color: B.muted }}>Mon–Fri, 8am–8pm EST</p>
              <a href="mailto:sales@evinra.com" className="text-sm font-medium" style={{ color: B.tealLight }}>sales@evinra.com</a>
            </div>
          </div>

          {/* Right col: form */}
          <div className="rounded-2xl p-8 border" style={{ backgroundColor: "#fff", borderColor: "#E2E8F0" }}>
            <h3 className="text-base font-semibold mb-6" style={{ color: B.text }}>Get Your Custom Walkthrough</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium mb-1.5" style={{ color: B.muted }}>Full Name *</label>
                <input className={inputCls} style={inputStyle} value={form.name} onChange={e => set("name", e.target.value)} onFocus={onFocus} onBlur={onBlur} placeholder="Maria Torres"/>
              </div>
              <div>
                <label className="block text-xs font-medium mb-1.5" style={{ color: B.muted }}>Work Email *</label>
                <input type="email" className={inputCls} style={inputStyle} value={form.email} onChange={e => set("email", e.target.value)} onFocus={onFocus} onBlur={onBlur} placeholder="maria@statefair.com"/>
              </div>
              <div>
                <label className="block text-xs font-medium mb-1.5" style={{ color: B.muted }}>Phone (Optional)</label>
                <input type="tel" className={inputCls} style={inputStyle} value={form.phone} onChange={e => set("phone", e.target.value)} onFocus={onFocus} onBlur={onBlur} placeholder="+1 (555) 000-0000"/>
              </div>
              <div>
                <label className="block text-xs font-medium mb-1.5" style={{ color: B.muted }}>What's your biggest operational bottleneck? (Optional)</label>
                <textarea
                  rows={3}
                  className={inputCls}
                  style={{ ...inputStyle, resize: "none" }}
                  value={form.bottleneck}
                  onChange={e => set("bottleneck", e.target.value)}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  placeholder="e.g. Gate connectivity drops, multi-vendor settlement taking days, walk-up cash management..."/>
              </div>
              <button
                onClick={() => setSubmitted(true)}
                disabled={!form.name || !form.email}
                className="w-full py-3.5 rounded-lg text-sm font-semibold text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ backgroundColor: B.teal }}
                onMouseEnter={e => !e.currentTarget.disabled && (e.currentTarget.style.backgroundColor = B.tealDark)}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = B.teal}>
                Get My Walkthrough →
              </button>
              <p className="text-xs text-center" style={{ color: B.muted }}>No scripts, no pressure. We walk you through the platform, you decide.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom banner */}
      <div className="border-t" style={{ borderColor: `${B.navy}40` }}>
        <div className="max-w-5xl mx-auto px-6 py-5">
          <p className="text-xs text-center" style={{ color: B.muted }}>
            Not looking for a sales walkthrough? For technical assistance, press, or partnerships,{" "}
            <a href="/contact" className="font-medium transition-colors" style={{ color: B.tealLight }}
              onMouseEnter={e => e.currentTarget.style.color = B.teal}
              onMouseLeave={e => e.currentTarget.style.color = B.tealLight}>
              visit our Support &amp; Inquiries page →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
