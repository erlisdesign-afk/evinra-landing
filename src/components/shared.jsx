import { useState, useEffect, useRef } from "react";
import { B, TealBtn } from "../brand";

/* ─── HOOKS ─── */
export function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, [threshold]);
  return scrolled;
}

export function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold: 0.12, ...options });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

/* ─── BRAND LOGO ─── */
export const EvinraLogo = ({ variant = "light", className = "h-7" }) => {
  const w = variant === "light" ? "#FFFFFF" : "#3A4B70";
  const icon = variant === "light" ? "#5A7AAF" : "#3A4B70";
  return (
    <svg className={className} viewBox="0 0 3211 797" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Evinra">
      <path fillRule="evenodd" clipRule="evenodd" d="M732.671 409.158C721.393 296.283 704.913 201.451 617.689 144.998C564.238 110.403 503.251 97.9116 440.188 100.153C377.114 102.394 317.176 119.183 266.316 157.49C125.878 263.24 131.44 536.847 270.871 641.107C357.765 706.072 482.772 713.033 580.318 670.161C637.048 645.24 723.665 625.603 785.546 629.695C760.841 667.457 729.587 699.41 692.37 725.668C625.05 773.166 546.442 793.06 464.914 795.959C409.129 797.933 353.437 791.507 300.572 773.135C252.827 756.542 209.411 731.6 172.358 697.087C135.306 662.573 107.341 621.038 87.4066 574.589C65.3334 523.153 54.9599 468.068 52.9756 412.283C50.9914 356.499 57.4376 300.817 75.7994 247.942C92.3826 200.197 117.335 156.78 151.848 119.728C186.361 82.6752 227.896 54.7109 274.346 34.7761C325.781 12.6926 380.867 2.32937 436.651 0.345143C492.436 -1.63908 548.118 4.7968 600.993 23.1689C648.737 39.7521 692.154 64.704 729.207 99.2173C766.249 133.72 794.223 175.276 814.158 221.715C856.269 319.847 838.73 440.515 818.98 540.281C593.2 484.014 492.868 618.571 223.558 523.451C478.7 548.578 610.646 397.304 732.692 409.147L732.671 409.158Z" fill={icon}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M33.835 211.17C33.835 211.17 37.7109 275.858 124.719 311.595C147.954 321.136 177.121 328.62 213.721 332.26C426.702 353.418 513.566 172.339 725.436 159.447C798.133 155.026 859.562 164.505 884.421 207.706C908.365 249.323 918.204 335.93 905.281 395.066C857.269 331.077 800.806 313.949 738.452 321.547C604.994 337.801 444.529 467.259 282.028 492.633C226.326 501.33 166.131 500.169 116.165 483.637C93.4646 476.132 72.8616 465.439 55.754 451.077C-4.06066 400.834 -22.3608 308.058 33.8144 211.16L33.835 211.17Z" fill="#209991"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M85.5345 222.719C75.2947 211.081 43.5059 199.175 33.8418 211.153C33.8418 211.153 34.6643 242.345 67.5223 274.926C71.7889 256.841 78.7697 239.97 85.5345 222.729V222.719Z" fill="#12615C"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M836.02 430.061C855.266 424.046 903.576 415.153 905.303 395.075C904.295 365.938 840.173 337.419 839.536 337.614C841.057 370.061 838.23 398.005 836.02 430.061Z" fill="#12615C"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M729.98 383.79C804.713 361.943 838.27 398.348 838.27 398.348C839.257 384.685 839.668 350.552 839.247 336.961C814.408 318.845 759.826 316.491 721.488 324.181C723.462 338.749 729.631 380.932 729.98 383.79Z" fill="#263148"/>
      <path d="M1421.89 432.309C1405.64 373.873 1357.7 340.128 1294.32 340.128C1230.95 340.128 1183.01 373.873 1166.75 432.309H1421.89ZM1162.69 510.498C1174.07 579.634 1225.26 619.963 1294.32 619.963C1339.83 619.963 1378.02 602.679 1401.58 570.58H1493.4C1462.52 649.593 1390.2 698.152 1294.32 698.152C1165.94 698.152 1079 610.086 1079 480.045C1079 350.004 1165.94 261.938 1294.32 261.938C1422.7 261.938 1509.65 350.004 1509.65 480.045C1509.65 490.745 1508.83 500.621 1508.02 510.498H1162.69Z" fill={w}/>
      <path d="M1664.87 685.807L1501.55 274.284H1589.31L1713.63 591.156L1835.51 274.284H1923.26L1759.94 685.807H1664.87Z" fill={w}/>
      <path d="M1948.9 146.712C1948.9 117.905 1969.22 98.1523 1998.47 98.1523C2027.72 98.1523 2048.03 117.905 2048.03 146.712C2048.03 176.342 2027.72 196.918 1998.47 196.918C1969.22 196.918 1948.9 176.342 1948.9 146.712ZM1955.4 685.807V274.284H2040.72V685.807H1955.4Z" fill={w}/>
      <path d="M2186.63 480.045V685.807H2101.31V274.284H2186.63V324.49C2216.69 286.63 2261.38 261.938 2323.13 261.938C2434.45 261.938 2503.52 343.42 2503.52 452.885V685.807H2418.2V451.239C2418.2 383.749 2384.07 340.128 2315.82 340.128C2241.07 340.128 2186.63 391.98 2186.63 480.045Z" fill={w}/>
      <path d="M2645.36 685.807H2560.05V274.284H2645.36V304.737C2679.49 266.054 2729.06 251.239 2792.43 267.7L2777.81 341.774C2685.18 326.136 2645.36 380.457 2645.36 480.045V685.807Z" fill={w}/>
      <path d="M3125.68 685.807V639.716C3094.81 675.107 3048.49 698.152 2985.93 698.152C2863.23 698.152 2776.29 610.086 2776.29 480.045C2776.29 350.004 2863.23 261.938 2985.93 261.938C3048.49 261.938 3094.81 284.984 3125.68 320.375V274.284H3211V685.807H3125.68ZM2857.54 480.045C2857.54 568.111 2912.8 619.963 2991.61 619.963C3071.24 619.963 3125.68 568.111 3125.68 480.045C3125.68 391.98 3071.24 340.128 2991.61 340.128C2912.8 340.128 2857.54 391.98 2857.54 480.045Z" fill={w}/>
    </svg>
  );
};

/* ─── ICONS ─── */
export const IconChevronDown = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>);
export const IconArrowRight = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>);
export const IconX = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/></svg>);
export const IconCheck = ({ className, style }) => (<svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}><path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>);
export const IconMenu = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round"/></svg>);
export const IconPhone = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>);
export const IconMail = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>);
export const IconTwitter = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>);
export const IconLinkedIn = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>);
export const IconInstagram = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>);

/* ─── NAVBAR ─── */
const NAV_ITEMS = [
  { label: "The Platform", items: [
    { label: "White-Label Ticketing",        href: "/features/white-label-ticketing" },
    { label: "Offline Event POS",            href: "/features/offline-event-pos" },
    { label: "Multi-Vendor Cash Management", href: "/features/multi-vendor-cash-management" },
    { label: "Multi-Gate Check-In",          href: "/features/multi-gate-check-in" },
    { label: "Hardware & Equipment",         href: "/hardware-requirements" },
  ]},
  { label: "For Event Operators", items: [
    { label: "Fairs & Festivals",     href: "/fairs-and-festivals" },
    { label: "Touring Productions",   href: "/touring-productions" },
    { label: "Traveling Circuses",    href: "/traveling-circuses" },
    { label: "Independent Promoters", href: "#" },
  ]},
  { label: "Why Evinra", items: [
    { label: "Our Story",              href: "/our-story" },
    { label: "Field Results",          href: "/field-results" },
    { label: "Vs. TicketSocket",       href: "/compare/ticketsocket-alternative" },
  ]},
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
      <button onClick={() => setOpen(v => !v)}
        className="flex items-center gap-1 text-sm font-medium text-slate-200 hover:text-white cursor-pointer py-1"
        style={{ transition: "color 150ms ease" }}>
        {item.label}
        <IconChevronDown className={`w-3.5 h-3.5`} style={{ transition: "transform 200ms cubic-bezier(0.16,1,0.3,1)", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}/>
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2.5 w-60 rounded-xl py-2 z-50"
          style={{
            backgroundColor: "#111D2E",
            border: "1px solid rgba(58,75,112,0.6)",
            boxShadow: "0 20px 48px -8px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}>
          {item.items.map(sub => (
            <a key={sub.label} href={sub.href}
              className="block px-4 py-2.5 text-sm font-medium transition-colors duration-150"
              style={{ color: B.mutedLight }}
              onMouseEnter={e => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.backgroundColor = "rgba(58,75,112,0.35)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = B.mutedLight; e.currentTarget.style.backgroundColor = "transparent"; }}>
              {sub.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export function Navbar() {
  const scrolled = useScrolled();
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-40"
      style={{
        backgroundColor: scrolled ? "rgba(13,21,32,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(58,75,112,0.4)" : "none",
        transition: "background-color 300ms ease, backdrop-filter 300ms ease, border-color 300ms ease",
      }}>
      <div className="h-0.5 w-full" style={{ backgroundColor: B.teal }}/>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/"><EvinraLogo variant="light" className="h-7"/></a>
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_ITEMS.map(item => <NavDropdown key={item.label} item={item}/>)}
          <a href="/pricing" className="text-sm font-medium text-slate-200 hover:text-white transition-colors duration-150">Pricing</a>
          <a href="#" className="text-sm font-medium text-slate-200 hover:text-white transition-colors duration-150">Founding Program</a>
        </nav>
        <div className="hidden lg:flex items-center gap-5">
          <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-150 cursor-pointer">Login</a>
          <TealBtn href="/request-a-demo">Request a Demo</TealBtn>
        </div>
        <button onClick={() => setMobileOpen(v => !v)} className="lg:hidden text-white cursor-pointer p-1" aria-label="Toggle menu">
          {mobileOpen ? <IconX className="w-6 h-6"/> : <IconMenu className="w-6 h-6"/>}
        </button>
      </div>
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 px-6 py-5 space-y-5" style={{ backgroundColor: B.navyDarkest }}>
          {NAV_ITEMS.map(item => (
            <div key={item.label}>
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: B.teal }}>{item.label}</p>
              {item.items.map(sub => (
                <a key={sub.label} href={sub.href} className="block py-1.5 text-sm text-slate-300 hover:text-white">{sub.label}</a>
              ))}
            </div>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a href="#" className="text-sm text-slate-300">Login</a>
            <TealBtn href="/request-a-demo" className="text-center justify-center">Request a Demo</TealBtn>
          </div>
        </div>
      )}
    </header>
  );
}

/* ─── FOOTER ─── */
const FOOTER_COLS = [
  { title: "Core Software", links: [
    { label: "White Label Ticketing",         href: "/features/white-label-ticketing" },
    { label: "Offline Event POS",             href: "/features/offline-event-pos" },
    { label: "Event Check-In Software",       href: "/features/multi-gate-check-in" },
    { label: "Multi-Vendor Cash Management",  href: "/features/multi-vendor-cash-management" },
    { label: "Hardware & Equipment",          href: "/hardware-requirements" },
  ]},
  { title: "For Event Operators", links: [
    { label: "Fairs & Festivals",     href: "/fairs-and-festivals" },
    { label: "Touring Productions",   href: "/touring-productions" },
    { label: "Traveling Circuses",    href: "/traveling-circuses" },
    { label: "Independent Promoters", href: "#" },
  ]},
  { title: "Compare", links: [
    { label: "Evinra vs. TicketSocket", href: "/compare/ticketsocket-alternative" },
    { label: "Evinra vs. Cvent",        href: "/compare/cvent-alternative" },
    { label: "Evinra vs. Etix",         href: "#" },
    { label: "Evinra vs. Eventbrite",   href: "#" },
  ]},
  { title: "Company", links: [
    { label: "Our Story",      href: "/our-story" },
    { label: "Field Results",  href: "/field-results" },
    { label: "Request a Demo", href: "/request-a-demo" },
    { label: "Contact Us",     href: "/contact" },
  ]},
];

export function Footer() {
  return (
    <footer className="border-t" style={{ backgroundColor: "#060D14", borderColor: "rgba(255,255,255,0.05)" }}>
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-1">
            <EvinraLogo variant="light" className="h-7 mb-4"/>
            <p className="text-xs leading-relaxed mb-5" style={{ color: B.muted }}>
              Run the entire event lifecycle on one platform. Take your brand, your data, and your ticket revenue back.
            </p>
            <div className="flex items-center gap-3">
              {[{ Icon: IconTwitter, label: "Twitter" }, { Icon: IconLinkedIn, label: "LinkedIn" }, { Icon: IconInstagram, label: "Instagram" }].map(({ Icon, label }) => (
                <a key={label} href="#" aria-label={label}
                  className="w-8 h-8 rounded-md flex items-center justify-center cursor-pointer transition-colors duration-150"
                  style={{ backgroundColor: B.navyDeep }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = B.navy}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = B.navyDeep}>
                  <Icon className="w-4 h-4" style={{ color: B.muted }}/>
                </a>
              ))}
            </div>
          </div>
          {FOOTER_COLS.map(col => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: B.navy }}>{col.title}</p>
              <ul className="space-y-2.5">
                {col.links.map(link => (
                  <li key={link.label}>
                    <a href={link.href} className="text-xs cursor-pointer transition-colors duration-150"
                      style={{ color: B.muted }}
                      onMouseEnter={e => e.currentTarget.style.color = "#CBD5E1"}
                      onMouseLeave={e => e.currentTarget.style.color = B.muted}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
          <p className="text-xs" style={{ color: B.navy }}>© 2026 Evinra. All rights reserved.</p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Service"].map(l => (
              <a key={l} href="#" className="text-xs cursor-pointer" style={{ color: B.navy }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── SHARED: Demo Form Section ─── */
export function DemoFormSection({ title = "Ready to Take Your Gates Back?", subtitle = "Schedule a custom technical walkthrough. We'll look at your current hardware, identify your bottlenecks, and show you exactly how Evinra handles the heavy lifting. No sales talk, just a look under the hood.", btnLabel = "Get My Walkthrough →" }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", bottleneck: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const inputBase = { width: "100%", backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "6px", padding: "10px 12px", fontSize: "14px", color: "#fff", outline: "none", transition: "border-color 150ms", fontFamily: "inherit" };
  const handleSubmit = (e) => { e.preventDefault(); setSubmitting(true); setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 800); };
  return (
    <section className="dot-grid" style={{ backgroundColor: B.navyDarkest }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="rounded-xl p-8 border" style={{ backgroundColor: B.navyDeep, borderColor: `${B.navy}60`, boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)" }}>
            <h4 className="text-base font-semibold text-white mb-1">Request a Demo</h4>
            <p className="text-xs mb-6" style={{ color: B.muted }}>{subtitle}</p>
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: "rgba(32,153,145,0.15)" }}>
                  <IconCheck className="w-6 h-6" style={{ color: B.teal }}/>
                </div>
                <p className="font-semibold text-white">We'll be in touch shortly.</p>
                <p className="text-xs mt-1" style={{ color: B.muted }}>Check your inbox within 15 minutes.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[{ id: "name", label: "Name", type: "text", placeholder: "Your full name", req: true }, { id: "email", label: "Work Email", type: "email", placeholder: "you@company.com", req: true }, { id: "phone", label: "Phone", type: "tel", placeholder: "+1 (000) 000-0000", req: false, opt: true }].map(f => (
                  <div key={f.id}>
                    <label htmlFor={`df-${f.id}`} className="block text-xs font-medium mb-1.5" style={{ color: B.mutedLight }}>{f.label}{f.opt && <span style={{ color: B.muted }}> (Optional)</span>}</label>
                    <input id={`df-${f.id}`} type={f.type} required={f.req} placeholder={f.placeholder} style={inputBase} value={form[f.id]} onChange={e => setForm(p => ({ ...p, [f.id]: e.target.value }))} onFocus={e => e.target.style.borderColor = B.teal} onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}/>
                  </div>
                ))}
                <div>
                  <label htmlFor="df-bottleneck" className="block text-xs font-medium mb-1.5" style={{ color: B.mutedLight }}>What is the main bottleneck you're trying to fix? <span style={{ color: B.muted }}>(Optional)</span></label>
                  <textarea id="df-bottleneck" rows={3} placeholder="e.g. Scanner downtime, ticketing fees, vendor reconciliation..." style={{ ...inputBase, resize: "none" }} value={form.bottleneck} onChange={e => setForm(p => ({ ...p, bottleneck: e.target.value }))} onFocus={e => e.target.style.borderColor = B.teal} onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}/>
                </div>
                <button type="submit" disabled={submitting} className="w-full text-sm font-semibold py-3 rounded-md text-white flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 transition-colors duration-150" style={{ backgroundColor: B.teal }} onMouseEnter={e => !submitting && (e.currentTarget.style.backgroundColor = B.tealDark)} onMouseLeave={e => (e.currentTarget.style.backgroundColor = B.teal)}>
                  {submitting ? "Sending..." : btnLabel}
                </button>
              </form>
            )}
          </div>
          <div className="flex flex-col justify-center lg:pt-8">
            <p className="text-lg font-semibold text-white mb-2">Hate filling out forms?</p>
            <p className="text-sm mb-1" style={{ color: B.mutedLight }}>Skip the line and talk to our event specialists directly.</p>
            <p className="text-xs mb-8" style={{ color: B.muted }}>Implementation slots are filling up before the peak event season.</p>
            <div className="space-y-5">
              {[{ href: "tel:+17863257738", Icon: IconPhone, p: "+1 (786) 325-7738", s: "Available Mon–Fri, 8am–8pm EST" }, { href: "mailto:sales@evinra.com", Icon: IconMail, p: "sales@evinra.com", s: "15-minute response time during business hours" }].map(({ href, Icon, p, s }) => (
                <a key={href} href={href} className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-150" style={{ backgroundColor: B.navyDeep }} onMouseEnter={e => e.currentTarget.style.backgroundColor = B.navy} onMouseLeave={e => e.currentTarget.style.backgroundColor = B.navyDeep}>
                    <Icon className="w-5 h-5" style={{ color: B.teal }}/>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white group-hover:underline">{p}</p>
                    <p className="text-xs" style={{ color: B.muted }}>{s}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SHARED: Img Placeholder ─── */
export const ImgPlaceholder = ({ label, className = "aspect-[4/3]" }) => (
  <div className={`rounded-xl flex items-center justify-center border text-xs font-mono text-center px-4 ${className}`}
    style={{ backgroundColor: B.bgSubtle, borderColor: "#E2E8F0", color: "#9BAAC0" }}>
    {label}
  </div>
);

export const ImgPlaceholderDark = ({ label, className = "aspect-[4/3]" }) => (
  <div className={`rounded-xl flex items-center justify-center border text-xs font-mono text-center px-4 ${className}`}
    style={{ backgroundColor: B.navyDeep, borderColor: `${B.navy}60`, color: B.muted }}>
    {label}
  </div>
);
