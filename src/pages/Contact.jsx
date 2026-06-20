import { useState } from "react";
import { B, TealBtn } from "../brand";
import { Navbar, Footer, useInView } from "../components/shared";

const inputCls = "w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors";
const inputStyle = { borderColor: "#E2E8F0", backgroundColor: "#fff", color: B.text };
const onFocus = (e) => { e.currentTarget.style.borderColor = B.teal; e.currentTarget.style.boxShadow = `0 0 0 3px ${B.teal}18`; };
const onBlur = (e) => { e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.boxShadow = "none"; };

const DEPARTMENTS = [
  {
    name: "Sales & Demo Requests",
    desc: "Schedule a technical walkthrough. We'll map Evinra to your specific operation — not a scripted pitch.",
    cta: "Request a Walkthrough →",
    href: "/request-a-demo",
    external: false,
  },
  {
    name: "Customer Support",
    desc: "For existing Evinra customers with technical questions, hardware issues, or configuration help.",
    cta: "Email Support →",
    href: "mailto:support@evinra.com",
    external: true,
  },
  {
    name: "Press & Partnerships",
    desc: "Media inquiries, co-marketing proposals, integration partnerships, and Founding Partner Program questions.",
    cta: "Email the Team →",
    href: "mailto:partnerships@evinra.com",
    external: true,
  },
];

function Hero() {
  return (
    <section className="relative pt-28 pb-20" style={{ backgroundColor: B.navyDarkest }}>
      <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 55% 45% at 70% 55%, ${B.navyDeep} 0%, transparent 70%)` }}/>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-[1.07] tracking-tight mb-6">
            Get in Touch with<br/>
            <span style={{ color: B.teal }}>the Evinra Team.</span>
          </h1>
          <p className="text-[15px] leading-relaxed" style={{ color: B.mutedLight }}>
            Whether you're evaluating Evinra for an upcoming season, need technical support, or want to talk partnerships — you're talking to a real person, not a ticket queue.
          </p>
        </div>
      </div>
    </section>
  );
}

function DepartmentGrid() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} style={{ backgroundColor: B.navyDeep }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-xl mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Who Do You Need to Reach?</h2>
          <p className="text-sm leading-relaxed" style={{ color: B.mutedLight }}>Route your message to the right team and get a faster, more useful response.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {DEPARTMENTS.map(({ name, desc, cta, href, external }, i) => (
            <div key={name}
              className={`rounded-xl p-7 border flex flex-col transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ backgroundColor: B.navyDarkest, borderColor: `${B.navy}60`, transitionDelay: `${i * 80}ms` }}>
              <h3 className="text-base font-semibold text-white mb-3">{name}</h3>
              <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: B.muted }}>{desc}</p>
              <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="inline-flex items-center text-sm font-semibold transition-colors"
                style={{ color: B.tealLight }}
                onMouseEnter={e => e.currentTarget.style.color = B.teal}
                onMouseLeave={e => e.currentTarget.style.color = B.tealLight}>
                {cta}
              </a>
            </div>
          ))}
        </div>

        {/* Direct contact bar */}
        <div className="mt-10 rounded-xl p-6 border flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8" style={{ backgroundColor: "rgba(32,153,145,0.06)", borderColor: `${B.teal}25` }}>
          <div>
            <p className="text-xs font-semibold mb-1" style={{ color: B.tealLight }}>Prefer a direct line?</p>
            <a href="tel:+17863257738" className="text-sm font-semibold text-white">+1 (786) 325-7738</a>
            <span className="text-xs ml-2" style={{ color: B.muted }}>Mon–Fri, 8am–8pm EST</span>
          </div>
          <div className="sm:border-l sm:pl-8" style={{ borderColor: `${B.navy}60` }}>
            <p className="text-xs font-semibold mb-1" style={{ color: B.tealLight }}>General email</p>
            <a href="mailto:sales@evinra.com" className="text-sm font-medium" style={{ color: B.mutedLight }}
              onMouseEnter={e => e.currentTarget.style.color = B.tealLight}
              onMouseLeave={e => e.currentTarget.style.color = B.mutedLight}>
              sales@evinra.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const set = (key, val) => setForm(prev => ({ ...prev, [key]: val }));
  const [ref, inView] = useInView();

  return (
    <section ref={ref} style={{ backgroundColor: B.bg }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className={`transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            <h2 className="text-3xl font-bold mb-3" style={{ color: B.text }}>Send Us a Message.</h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: B.muted }}>
              Not sure which team you need? Fill this out and we'll route your message to the right person within one business day.
            </p>
            <div className="space-y-3 text-sm" style={{ color: B.muted }}>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke={B.teal} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                <span>Replies within one business day — usually faster.</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke={B.teal} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                <span>You're talking to a real person, not a bot or ticketing queue.</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke={B.teal} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                <span>For demo requests, go to <a href="/request-a-demo" className="font-medium" style={{ color: B.teal }}>Request a Demo</a> for a faster response.</span>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`} style={{ transitionDelay: "100ms" }}>
            {submitted ? (
              <div className="rounded-2xl p-10 border text-center" style={{ backgroundColor: "#fff", borderColor: "#E2E8F0" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: `${B.teal}15` }}>
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke={B.teal} strokeWidth={2.5}><path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: B.text }}>Message received.</h3>
                <p className="text-sm" style={{ color: B.muted }}>We'll get back to you within one business day.</p>
              </div>
            ) : (
              <div className="rounded-2xl p-8 border" style={{ backgroundColor: "#fff", borderColor: "#E2E8F0" }}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: B.muted }}>Full Name *</label>
                    <input className={inputCls} style={inputStyle} value={form.name} onChange={e => set("name", e.target.value)} onFocus={onFocus} onBlur={onBlur} placeholder="Maria Torres"/>
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: B.muted }}>Email *</label>
                    <input type="email" className={inputCls} style={inputStyle} value={form.email} onChange={e => set("email", e.target.value)} onFocus={onFocus} onBlur={onBlur} placeholder="maria@statefair.com"/>
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: B.muted }}>Subject *</label>
                    <select className={inputCls} style={{ ...inputStyle, appearance: "none", backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%235A6B8A' stroke-width='2.5'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center" }}
                      value={form.subject} onChange={e => set("subject", e.target.value)} onFocus={onFocus} onBlur={onBlur}>
                      <option value="">Select a topic...</option>
                      <option value="demo">Request a Demo</option>
                      <option value="support">Customer Support</option>
                      <option value="press">Press Inquiry</option>
                      <option value="partnership">Partnership Proposal</option>
                      <option value="founding">Founding Partner Program</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: B.muted }}>Message *</label>
                    <textarea rows={4} className={inputCls} style={{ ...inputStyle, resize: "none" }} value={form.message} onChange={e => set("message", e.target.value)} onFocus={onFocus} onBlur={onBlur} placeholder="Tell us how we can help..."/>
                  </div>
                  <button
                    onClick={() => setSubmitted(true)}
                    disabled={!form.name || !form.email || !form.subject || !form.message}
                    className="w-full py-3.5 rounded-lg text-sm font-semibold text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    style={{ backgroundColor: B.teal }}
                    onMouseEnter={e => !e.currentTarget.disabled && (e.currentTarget.style.backgroundColor = "#1a7d77")}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = B.teal}>
                    Send Message →
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

export default function Contact() {
  return (
    <div>
      <Navbar/>
      <main>
        <Hero/>
        <DepartmentGrid/>
        <ContactForm/>
      </main>
      <Footer/>
    </div>
  );
}
