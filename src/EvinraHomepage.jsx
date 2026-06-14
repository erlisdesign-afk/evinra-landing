import { useState, useEffect, useRef } from "react";

/* ─── ICONS (inline SVG, no emoji) ─── */
const IconX = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconChevronDown = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconArrowRight = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconDollar = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconWifi = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path d="m1 1 22 22M16.72 11.06A10.94 10.94 0 0 1 19 12.55M5 12.55a10.94 10.94 0 0 1 5.17-2.39M10.71 5.05A16 16 0 0 1 22.56 9M1.42 9a15.91 15.91 0 0 1 4.7-2.88M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconPuzzle = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-3.407 0l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.404 2.404 0 0 1 1 12c0-.617.236-1.234.706-1.704L3.317 8.69a.979.979 0 0 1 .836-.276c.47.07.803.48.968.925a2.501 2.501 0 1 0 3.214-3.214c-.445-.165-.855-.497-.925-.968a.979.979 0 0 1 .276-.837l1.61-1.61a2.404 2.404 0 0 1 3.407 0l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconCheck = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
    <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconGate = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M9 21V9" strokeLinecap="round" />
  </svg>
);
const IconCash = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7Z" />
    <circle cx="12" cy="12" r="3" />
    <path d="M6 12h.01M18 12h.01" />
  </svg>
);
const IconUsers = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const IconChart = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path d="M3 3v18h18" strokeLinecap="round" strokeLinejoin="round" />
    <path d="m19 9-5 5-4-4-3 3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconPhone = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);
const IconMail = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const IconTwitter = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const IconLinkedIn = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const IconInstagram = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

/* ─── HOOK: scroll position ─── */
function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, [threshold]);
  return scrolled;
}

/* ─── HOOK: intersection observer for animations ─── */
function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold: 0.15, ...options });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

/* ─── NAV DROPDOWN ─── */
const NAV_ITEMS = [
  {
    label: "The Platform",
    items: [
      { label: "White-Label Ticketing", href: "/features/white-label-ticketing" },
      { label: "Offline Event POS", href: "/features/offline-event-pos" },
      { label: "Multi-Vendor Cash Management", href: "/features/multi-vendor-cash-management" },
      { label: "Multi-Gate Check-In", href: "/features/multi-gate-check-in" },
      { label: "Hardware & Equipment", href: "/hardware-requirements" },
    ],
  },
  {
    label: "For Event Operators",
    items: [
      { label: "Fairs & Festivals", href: "/fairs-and-festivals" },
      { label: "Touring Productions", href: "/touring-productions" },
      { label: "Traveling Circuses", href: "/traveling-circuses" },
      { label: "Independent Promoters", href: "#" },
    ],
  },
  {
    label: "Why Evinra",
    items: [
      { label: "Our Story", href: "/our-story" },
      { label: "Field Results", href: "/field-results" },
    ],
  },
];

function NavDropdown({ item }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const fn = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white transition-colors duration-150 cursor-pointer py-1"
      >
        {item.label}
        <IconChevronDown className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-slate-100 py-1 z-50">
          {item.items.map((sub) => (
            <a
              key={sub.label}
              href={sub.href}
              className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors duration-150"
            >
              {sub.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── NAVBAR ─── */
function Navbar() {
  const scrolled = useScrolled();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-slate-900/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-white font-bold text-xl tracking-tight shrink-0">
          Evinra
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <NavDropdown key={item.label} item={item} />
          ))}
          <a href="/pricing" className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-150">
            Pricing
          </a>
          <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-150">
            Founding Program
          </a>
        </nav>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-5">
          <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-150 cursor-pointer">
            Login
          </a>
          <a
            href="/request-a-demo"
            className="bg-white text-slate-900 text-sm font-semibold px-4 py-2 rounded-md hover:bg-slate-100 transition-colors duration-150 cursor-pointer"
          >
            Request a Demo
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden text-white cursor-pointer p-1"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <IconX className="w-6 h-6" /> : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800 px-6 py-4 space-y-4">
          {NAV_ITEMS.map((item) => (
            <div key={item.label}>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">{item.label}</p>
              {item.items.map((sub) => (
                <a key={sub.label} href={sub.href} className="block py-1.5 text-sm text-slate-300 hover:text-white">
                  {sub.label}
                </a>
              ))}
            </div>
          ))}
          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <a href="#" className="text-sm text-slate-300">Login</a>
            <a href="/request-a-demo" className="bg-white text-slate-900 text-sm font-semibold px-4 py-2.5 rounded-md text-center">
              Request a Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ─── SECTION 1: HERO ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
      {/* Background placeholder — replace with real event photo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700"
      >
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "radial-gradient(circle at 60% 40%, #1e40af22 0%, transparent 60%), radial-gradient(circle at 80% 80%, #0f172a 0%, transparent 50%)" }}
        />
        {/* Image label */}
        <div className="absolute bottom-6 right-6 text-xs text-slate-600 font-mono">
          [ Hero background: real event/festival photo ]
        </div>
      </div>

      {/* Left fade for text legibility */}
      <div aria-hidden="true" className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-20 w-full">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
            <span className="text-xs font-medium text-slate-200">Built for outdoor event operators</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-6">
            Sell the Tickets.<br />
            Run the Show.<br />
            Keep the Revenue.
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
            Stop taping your operations together. Evinra is the only platform that combines low-fee, white-label ticketing with a rugged, native event management system built for outdoor operators.
          </p>

          <div className="flex flex-wrap gap-3 mb-5">
            <a
              href="/request-a-demo"
              className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold px-6 py-3 rounded-md hover:bg-slate-100 transition-colors duration-150 cursor-pointer text-sm"
            >
              Request a Demo
              <IconArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#solution"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-medium px-6 py-3 rounded-md hover:bg-white/10 transition-colors duration-150 cursor-pointer text-sm"
            >
              See How It Works →
            </a>
          </div>

          <p className="text-xs text-slate-500">
            Replace your software Frankenstein with one native system.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 2: STATS ─── */
const STATS = [
  { value: "Up to 50%", label: "Lower Ticketing Fees" },
  { value: "99.9%", label: "Uptime Target Infrastructure" },
  { value: "35+", label: "Scans Per Minute, Per Device" },
  { value: "100,000+", label: "Attendee Capacity" },
];

function Stats() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} className="bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`text-center transition-all duration-500 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <p className="text-3xl lg:text-4xl font-bold text-slate-900 mb-1">{s.value}</p>
              <p className="text-sm text-slate-500 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 3: THE ENEMY ─── */
const PAIN_POINTS = [
  {
    Icon: IconDollar,
    title: "The 'Standard Fee' Trap",
    body: "Traditional ticketing platforms charge 5–15% of every ticket sold. They built their business model on taking a cut of yours. Every seat you fill, every gate you open, they collect. Your marketing budget, your production costs, your crew—and then a platform fee on top of every transaction.",
  },
  {
    Icon: IconWifi,
    title: "Failing Gate WiFi",
    body: "Rural fairgrounds and touring venues weren't built for 5,000 smartphones and cloud-dependent apps. The moment the local cell tower overloads, your scanners freeze, your lines stop moving, and your revenue stops flowing. Yet your ticketing provider blames the internet—never their architecture.",
  },
  {
    Icon: IconPuzzle,
    title: "The Software Frankenstein",
    body: "Ticketing in one app. Vendors tracked in a spreadsheet. Cash boxes reconciled in a separate accounting tool. Staff permissions managed via a third-party HR system. You spend event day praying these integrations hold together, instead of running your show.",
  },
];

function Enemy() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} className="bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
            The "Industry Standard" is Costing You Time, Money, and Your Sanity.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {PAIN_POINTS.map(({ Icon, title, body }, i) => (
            <div
              key={title}
              className={`transition-all duration-500 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 4: THE SOLUTION ─── */
function Solution() {
  const [ref, inView] = useInView();
  return (
    <section id="solution" ref={ref} className="bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Fix the Gates. Keep the Cash.
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Start by upgrading the two systems that cost you the most money when they break: your ticketing and your point-of-sale.
          </p>
        </div>

        {/* Block 1: text left, image right */}
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center mb-16 transition-all duration-600 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3 block">White-Label Ticketing</span>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              White-Label Ticketing That Protects Your Margins
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Every ticket sold on a third-party platform is a customer you don't own. Your attendees buy from Ticketmaster, Eventbrite, or TicketSocket—not from you. Evinra flips this. Your checkout lives on your domain, carries your brand, and builds your audience.
            </p>
            <ul className="space-y-3 mb-7">
              {["Custom checkout flows on your domain", "Instant payouts, no payout holds", "Complete ownership of attendee data"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                  <IconCheck className="w-4 h-4 text-slate-900 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a href="/features/white-label-ticketing" className="inline-flex items-center gap-1 text-sm font-semibold text-slate-900 hover:gap-2 transition-all duration-150 cursor-pointer">
              Explore White-Label Ticketing <IconArrowRight className="w-4 h-4" />
            </a>
          </div>
          {/* Image placeholder */}
          <div className="rounded-xl bg-slate-100 border border-slate-200 aspect-[4/3] flex items-center justify-center">
            <p className="text-xs text-slate-400 font-mono text-center px-4">[ Mockup: White-label checkout on device ]</p>
          </div>
        </div>

        {/* Block 2: image left, text right */}
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-600 delay-100 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Image placeholder */}
          <div className="rounded-xl bg-slate-100 border border-slate-200 aspect-[4/3] flex items-center justify-center order-2 lg:order-1">
            <p className="text-xs text-slate-400 font-mono text-center px-4">[ Mockup: Offline POS on iPad/Zebra device ]</p>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3 block">Offline Event POS</span>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Native Offline POS Built for the Field
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Standard point-of-sale apps were designed for coffee shops, not muddy fields with 10,000 attendees and zero cell signal. Evinra's POS runs entirely on local device caching. The internet can go down. Your gates keep moving.
            </p>
            <ul className="space-y-3 mb-7">
              {["Continuous scanning without WiFi", "Sub-second processing speeds", "Compatible with rugged hardware"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                  <IconCheck className="w-4 h-4 text-slate-900 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a href="/features/offline-event-pos" className="inline-flex items-center gap-1 text-sm font-semibold text-slate-900 hover:gap-2 transition-all duration-150 cursor-pointer">
              Explore Offline POS <IconArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 5: LIFECYCLE ─── */
const MODULES = [
  { Icon: IconGate, title: "Multi-Gate Synchronization", body: "All gates share a closed-loop local network. A ticket scanned at Gate 1 is instantly invalidated at Gates 2–10, even with zero internet." },
  { Icon: IconCash, title: "Multi-Vendor Cash Management", body: "Digitize vendor contracts, track real-time sales per booth, and auto-calculate commission splits the moment gates close." },
  { Icon: IconUsers, title: "Granular Team Permissions", body: "Give each staff member exactly the access they need. Gate staff scan tickets. Box office managers handle cash. Admins see everything." },
  { Icon: IconChart, title: "Unified Financial Reporting", body: "One dashboard shows ticketing revenue, POS sales, vendor commissions, and cash reconciliation. Close your books in minutes." },
];

function Lifecycle() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ticketing Apps Stop at the Front Door. Evinra Runs the Entire Show.
          </h2>
          <p className="text-slate-400 leading-relaxed">
            Don't tape together disparate integrations just to run your event. Once a ticket is scanned, Evinra seamlessly expands into a native, all-in-one management platform. No plugins. No data silos. Just one unified system.
          </p>
        </div>

        {/* Central graphic + 4 modules */}
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left modules */}
          <div className="space-y-6">
            {MODULES.slice(0, 2).map(({ Icon, title, body }, i) => (
              <div
                key={title}
                className={`border border-slate-700 rounded-xl p-5 transition-all duration-500 ${
                  inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-9 h-9 rounded-lg bg-slate-700 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-2">{title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          {/* Central dashboard placeholder */}
          <div
            className={`rounded-2xl bg-slate-800 border border-slate-600 aspect-square flex flex-col items-center justify-center p-6 transition-all duration-500 delay-200 ${
              inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-3">
              <span className="text-slate-900 font-bold text-lg">E</span>
            </div>
            <p className="text-white font-semibold text-center text-sm mb-1">Evinra Platform</p>
            <p className="text-slate-500 text-xs text-center">One connected ecosystem</p>
            <div className="mt-4 w-full text-center">
              <p className="text-xs text-slate-600 font-mono">[ Platform dashboard mockup ]</p>
            </div>
          </div>

          {/* Right modules */}
          <div className="space-y-6">
            {MODULES.slice(2).map(({ Icon, title, body }, i) => (
              <div
                key={title}
                className={`border border-slate-700 rounded-xl p-5 transition-all duration-500 ${
                  inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                }`}
                style={{ transitionDelay: `${(i + 2) * 100}ms` }}
              >
                <div className="w-9 h-9 rounded-lg bg-slate-700 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-2">{title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 6: DIFFERENTIATORS ─── */
function Differentiator() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} className="bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Finally, Software That Survives the Real World.
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Your events don't happen in a sterile office. Evinra is built for the physical chaos of the field, the mud, and the midnight tear-downs.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Plug-and-Play Hardware",
              body: "Stop buying proprietary, fragile scanners that break after one season. Evinra runs flawlessly on the hardware you already trust—from everyday iPads to heavy-duty Zebra scanners. Plus, our built-in inventory tracking ensures you never lose a scanner, wristband, or cash box in transit.",
            },
            {
              title: "Automated Vendor Payouts",
              body: "Stop chasing down food truck owners at 2 AM to figure out who owes what. Evinra digitizes your vendor contracts and automatically calculates commissions based on real-time gate data. Close your physical cash boxes and your digital books in minutes.",
            },
          ].map(({ title, body }, i) => (
            <div
              key={title}
              className={`bg-slate-50 border border-slate-200 rounded-xl p-8 transition-all duration-500 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <h4 className="text-lg font-semibold text-slate-900 mb-3">{title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 7: FOUNDER'S NOTE ─── */
function FounderNote() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} className="bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Text */}
          <div
            className={`transition-all duration-600 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6 leading-snug">
              "I was paying them to hold my own money hostage."
            </h2>
            <p className="text-slate-600 leading-relaxed italic border-l-2 border-slate-300 pl-5 mb-6 text-sm">
              That's what the director of a massive touring circus told me. She was doing all the heavy lifting: moving tents, managing a massive crew, taking all the physical risk... but her ticketing provider had all the leverage. They were sitting on her payouts for weeks, taking a large cut of her gross, and locking her into an 8-year contract. She realized she wasn't running her own box office anymore: she was acting as a high-volume lead generator for a software giant. That was the trigger. We realized operators didn't need another generic app: they needed to fire the middlemen. We built Evinra so independent producers could take their gates, their data, and their revenue back.
            </p>
            {/* Testimonial */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <p className="text-slate-700 text-sm italic leading-relaxed mb-4">
                "We were locked into expensive contracts and losing control of our own gates. The ticketing platform Yoaldis and his team built gave us our brand back and immediately protected our profit margins."
              </p>
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div>
                  <p className="text-xs font-semibold text-slate-900">Veteran Event Operator</p>
                  <p className="text-xs text-slate-500">Director of a Multi-City Touring Circus</p>
                </div>
                <a href="/field-results" className="text-xs font-medium text-slate-900 underline underline-offset-2 hover:no-underline transition-all cursor-pointer">
                  Read how she eliminated gate downtime →
                </a>
              </div>
            </div>
          </div>

          {/* Founder photo placeholder + signature */}
          <div
            className={`transition-all duration-600 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <div className="rounded-xl bg-slate-200 border border-slate-200 aspect-[3/4] flex items-end p-5">
              <div>
                <p className="text-xs text-slate-500 font-mono mb-2">[ Photo: Yoaldis in the field ]</p>
                <div className="bg-white/90 rounded-lg px-4 py-3">
                  <p className="text-sm font-semibold text-slate-900">Yoaldis</p>
                  <p className="text-xs text-slate-500">Founder, Evinra</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 8: FINAL CTA / FORM ─── */
function ContactForm() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: "", email: "", phone: "", bottleneck: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="request-demo" ref={ref} className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Stop Losing Revenue to Manual Chaos.
          </h2>
          <p className="text-slate-400 leading-relaxed">
            Your competitors are already automating their gates and dropping their ticketing fees. Ready to see Evinra in action?
          </p>
        </div>

        <div
          className={`grid lg:grid-cols-2 gap-12 transition-all duration-600 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Form */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <h4 className="text-lg font-semibold text-white mb-1">Request a Demo</h4>
            <p className="text-sm text-slate-400 mb-6">
              See the dashboard, check the hardware specs, and get your questions answered. No sales talk, just a walkthrough.
            </p>
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
                  <IconCheck className="w-6 h-6 text-white" />
                </div>
                <p className="font-semibold text-white">We'll be in touch shortly.</p>
                <p className="text-sm text-slate-400 mt-1">Check your inbox within 15 minutes.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-slate-400 mb-1.5">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-white/50 transition-colors duration-150"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-slate-400 mb-1.5">Work Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-white/50 transition-colors duration-150"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-medium text-slate-400 mb-1.5">
                    Phone <span className="text-slate-600">(Optional)</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    className="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-white/50 transition-colors duration-150"
                    placeholder="+1 (000) 000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="bottleneck" className="block text-xs font-medium text-slate-400 mb-1.5">
                    What is the main bottleneck you're trying to fix? <span className="text-slate-600">(Optional)</span>
                  </label>
                  <textarea
                    id="bottleneck"
                    rows={3}
                    value={form.bottleneck}
                    onChange={(e) => setForm((f) => ({ ...f, bottleneck: e.target.value }))}
                    className="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-white/50 transition-colors duration-150 resize-none"
                    placeholder="e.g. Scanner downtime at gates, ticketing fees, vendor reconciliation..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-slate-900 font-semibold py-3 rounded-md hover:bg-slate-100 transition-colors duration-150 cursor-pointer text-sm flex items-center justify-center gap-2"
                >
                  Get My Walkthrough <IconArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Contact block */}
          <div className="flex flex-col justify-center">
            <p className="text-lg font-semibold text-white mb-2">Hate filling out forms?</p>
            <p className="text-slate-400 text-sm mb-1">Skip the line and talk to our event specialists directly.</p>
            <p className="text-slate-500 text-xs mb-8">Implementation slots are filling up before the peak event season.</p>

            <div className="space-y-5">
              <a
                href="tel:+17863257738"
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors duration-150">
                  <IconPhone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white group-hover:underline">+1 (786) 325-7738</p>
                  <p className="text-xs text-slate-500">Available Mon–Fri, 8am–8pm EST</p>
                </div>
              </a>
              <a
                href="mailto:sales@evinra.com"
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors duration-150">
                  <IconMail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white group-hover:underline">sales@evinra.com</p>
                  <p className="text-xs text-slate-500">15-minute response time during business hours</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
const FOOTER_COLS = [
  {
    title: "Core Software",
    links: [
      { label: "White Label Ticketing Platform", href: "/features/white-label-ticketing" },
      { label: "Offline Event POS System", href: "/features/offline-event-pos" },
      { label: "Event Check-In Software", href: "/features/multi-gate-check-in" },
      { label: "Ticketing Software Comparison", href: "/compare/ticketsocket-alternative" },
      { label: "Online Event Management", href: "#" },
      { label: "Box Office Software & Hardware", href: "/hardware-requirements" },
      { label: "Ticketing Solutions for Venues", href: "#" },
      { label: "Multi-Vendor Cash Reconciliation", href: "/features/multi-vendor-cash-management" },
      { label: "Unified Financial Reporting", href: "/features/unified-financial-reporting" },
    ],
  },
  {
    title: "For Event Operators",
    links: [
      { label: "Fairs & Festivals", href: "/fairs-and-festivals" },
      { label: "Touring Productions", href: "/touring-productions" },
      { label: "Traveling Circuses", href: "/traveling-circuses" },
      { label: "Independent Promoters", href: "#" },
    ],
  },
  {
    title: "Compare",
    links: [
      { label: "Evinra vs. TicketSocket", href: "/compare/ticketsocket-alternative" },
      { label: "Evinra vs. Cvent", href: "/compare/cvent-alternative" },
      { label: "Evinra vs. Etix", href: "#" },
      { label: "Evinra vs. Eventbrite", href: "#" },
    ],
  },
  {
    title: "Resources & Company",
    links: [
      { label: "Our Story", href: "/our-story" },
      { label: "The Event Operator's Hub", href: "#" },
      { label: "Profit Margin Calculator", href: "#" },
      { label: "Founding Partner Program", href: "#" },
      { label: "Request a Demo", href: "/request-a-demo" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1">
            <p className="font-bold text-xl mb-3">Evinra</p>
            <p className="text-xs text-slate-500 leading-relaxed mb-5">
              Run the entire event lifecycle on one platform. Take your brand, your data, and your ticket revenue back.
            </p>
            <div className="flex items-center gap-3">
              {[
                { Icon: IconTwitter, href: "#", label: "Twitter" },
                { Icon: IconLinkedIn, href: "#", label: "LinkedIn" },
                { Icon: IconInstagram, href: "#", label: "Instagram" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-md bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors duration-150 cursor-pointer"
                >
                  <Icon className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">{col.title}</p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-slate-500 hover:text-slate-300 transition-colors duration-150 cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">© 2026 Evinra. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-xs text-slate-600 hover:text-slate-400 transition-colors duration-150 cursor-pointer">Privacy Policy</a>
            <a href="#" className="text-xs text-slate-600 hover:text-slate-400 transition-colors duration-150 cursor-pointer">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── ROOT ─── */
export default function EvinraHomepage() {
  return (
    <div className="font-sans antialiased" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Google Fonts */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');`}</style>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Enemy />
        <Solution />
        <Lifecycle />
        <Differentiator />
        <FounderNote />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
