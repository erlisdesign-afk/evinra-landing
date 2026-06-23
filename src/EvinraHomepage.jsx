import { useState, useEffect, useRef } from "react";

/* ─── BRAND LOGO (SVG inline, colores exactos del brand) ─── */
const EvinraLogo = ({ variant = "light", className = "h-9" }) => {
  const wordmark = variant === "light" ? "#FFFFFF" : "#3A4B70";
  return (
    <svg className={className} viewBox="0 0 3211 797" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Evinra">
      <path fillRule="evenodd" clipRule="evenodd" d="M732.671 409.158C721.393 296.283 704.913 201.451 617.689 144.998C564.238 110.403 503.251 97.9116 440.188 100.153C377.114 102.394 317.176 119.183 266.316 157.49C125.878 263.24 131.44 536.847 270.871 641.107C357.765 706.072 482.772 713.033 580.318 670.161C637.048 645.24 723.665 625.603 785.546 629.695C760.841 667.457 729.587 699.41 692.37 725.668C625.05 773.166 546.442 793.06 464.914 795.959C409.129 797.933 353.437 791.507 300.572 773.135C252.827 756.542 209.411 731.6 172.358 697.087C135.306 662.573 107.341 621.038 87.4066 574.589C65.3334 523.153 54.9599 468.068 52.9756 412.283C50.9914 356.499 57.4376 300.817 75.7994 247.942C92.3826 200.197 117.335 156.78 151.848 119.728C186.361 82.6752 227.896 54.7109 274.346 34.7761C325.781 12.6926 380.867 2.32937 436.651 0.345143C492.436 -1.63908 548.118 4.7968 600.993 23.1689C648.737 39.7521 692.154 64.704 729.207 99.2173C766.249 133.72 794.223 175.276 814.158 221.715C856.269 319.847 838.73 440.515 818.98 540.281C593.2 484.014 492.868 618.571 223.558 523.451C478.7 548.578 610.646 397.304 732.692 409.147L732.671 409.158Z" fill={variant === "light" ? "#5A7AAF" : "#3A4B70"}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M33.835 211.17C33.835 211.17 37.7109 275.858 124.719 311.595C147.954 321.136 177.121 328.62 213.721 332.26C426.702 353.418 513.566 172.339 725.436 159.447C798.133 155.026 859.562 164.505 884.421 207.706C908.365 249.323 918.204 335.93 905.281 395.066C857.269 331.077 800.806 313.949 738.452 321.547C604.994 337.801 444.529 467.259 282.028 492.633C226.326 501.33 166.131 500.169 116.165 483.637C93.4646 476.132 72.8616 465.439 55.754 451.077C-4.06066 400.834 -22.3608 308.058 33.8144 211.16L33.835 211.17Z" fill="#209991"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M85.5345 222.719C75.2947 211.081 43.5059 199.175 33.8418 211.153C33.8418 211.153 34.6643 242.345 67.5223 274.926C71.7889 256.841 78.7697 239.97 85.5345 222.729V222.719Z" fill="#12615C"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M836.02 430.061C855.266 424.046 903.576 415.153 905.303 395.075C904.295 365.938 840.173 337.419 839.536 337.614C841.057 370.061 838.23 398.005 836.02 430.061Z" fill="#12615C"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M729.98 383.79C804.713 361.943 838.27 398.348 838.27 398.348C839.257 384.685 839.668 350.552 839.247 336.961C814.408 318.845 759.826 316.491 721.488 324.181C723.462 338.749 729.631 380.932 729.98 383.79Z" fill="#263148"/>
      <path d="M1421.89 432.309C1405.64 373.873 1357.7 340.128 1294.32 340.128C1230.95 340.128 1183.01 373.873 1166.75 432.309H1421.89ZM1162.69 510.498C1174.07 579.634 1225.26 619.963 1294.32 619.963C1339.83 619.963 1378.02 602.679 1401.58 570.58H1493.4C1462.52 649.593 1390.2 698.152 1294.32 698.152C1165.94 698.152 1079 610.086 1079 480.045C1079 350.004 1165.94 261.938 1294.32 261.938C1422.7 261.938 1509.65 350.004 1509.65 480.045C1509.65 490.745 1508.83 500.621 1508.02 510.498H1162.69Z" fill={wordmark}/>
      <path d="M1664.87 685.807L1501.55 274.284H1589.31L1713.63 591.156L1835.51 274.284H1923.26L1759.94 685.807H1664.87Z" fill={wordmark}/>
      <path d="M1948.9 146.712C1948.9 117.905 1969.22 98.1523 1998.47 98.1523C2027.72 98.1523 2048.03 117.905 2048.03 146.712C2048.03 176.342 2027.72 196.918 1998.47 196.918C1969.22 196.918 1948.9 176.342 1948.9 146.712ZM1955.4 685.807V274.284H2040.72V685.807H1955.4Z" fill={wordmark}/>
      <path d="M2186.63 480.045V685.807H2101.31V274.284H2186.63V324.49C2216.69 286.63 2261.38 261.938 2323.13 261.938C2434.45 261.938 2503.52 343.42 2503.52 452.885V685.807H2418.2V451.239C2418.2 383.749 2384.07 340.128 2315.82 340.128C2241.07 340.128 2186.63 391.98 2186.63 480.045Z" fill={wordmark}/>
      <path d="M2645.36 685.807H2560.05V274.284H2645.36V304.737C2679.49 266.054 2729.06 251.239 2792.43 267.7L2777.81 341.774C2685.18 326.136 2645.36 380.457 2645.36 480.045V685.807Z" fill={wordmark}/>
      <path d="M3125.68 685.807V639.716C3094.81 675.107 3048.49 698.152 2985.93 698.152C2863.23 698.152 2776.29 610.086 2776.29 480.045C2776.29 350.004 2863.23 261.938 2985.93 261.938C3048.49 261.938 3094.81 284.984 3125.68 320.375V274.284H3211V685.807H3125.68ZM2857.54 480.045C2857.54 568.111 2912.8 619.963 2991.61 619.963C3071.24 619.963 3125.68 568.111 3125.68 480.045C3125.68 391.98 3071.24 340.128 2991.61 340.128C2912.8 340.128 2857.54 391.98 2857.54 480.045Z" fill={wordmark}/>
    </svg>
  );
};

/* ─── ICONS ─── */
const IconChevronDown = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconArrowRight = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconX = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconCheck = ({ className, style }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
    <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconMenu = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round"/>
  </svg>
);
const IconDollar = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconWifiOff = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path d="m1 1 22 22M16.72 11.06A10.94 10.94 0 0 1 19 12.55M5 12.55a10.94 10.94 0 0 1 5.17-2.39M10.71 5.05A16 16 0 0 1 22.56 9M1.42 9a15.91 15.91 0 0 1 4.7-2.88M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconPuzzle = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-3.407 0l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.404 2.404 0 0 1 1 12c0-.617.236-1.234.706-1.704L3.317 8.69a.979.979 0 0 1 .836-.276c.47.07.803.48.968.925a2.501 2.501 0 1 0 3.214-3.214c-.445-.165-.855-.497-.925-.968a.979.979 0 0 1 .276-.837l1.61-1.61a2.404 2.404 0 0 1 3.407 0l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconGate = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9" strokeLinecap="round"/>
  </svg>
);
const IconCash = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7Z"/>
    <circle cx="12" cy="12" r="3"/><path d="M6 12h.01M18 12h.01"/>
  </svg>
);
const IconUsers = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IconChart = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path d="M3 3v18h18" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="m19 9-5 5-4-4-3 3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconPhone = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/>
  </svg>
);
const IconMail = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);
const IconTwitter = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const IconLinkedIn = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const IconInstagram = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

/* ─── HOOKS ─── */
function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, [threshold]);
  return scrolled;
}

function useInView(options = {}) {
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

/* ─── BRAND TOKENS ─── */
const B = {
  navyDarkest: "#0D1520",
  navyDeep:    "#263148",
  navy:        "#3A4B70",
  navyLight:   "#4E6490",
  teal:        "#209991",
  tealDark:    "#12615C",
  tealLight:   "#2ABDB5",
  bg:          "#F8FAFC",
  bgSubtle:    "#EEF2F7",
  text:        "#0D1520",
  muted:       "#5A6B8A",
  mutedLight:  "#8A9BB8",
};

/* ─── REUSABLE: Teal CTA Button ─── */
const TealBtn = ({ href, children, className = "" }) => (
  <a href={href}
    className={`inline-flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-md text-white cursor-pointer transition-colors duration-150 ${className}`}
    style={{ backgroundColor: B.teal }}
    onMouseEnter={e => e.currentTarget.style.backgroundColor = B.tealDark}
    onMouseLeave={e => e.currentTarget.style.backgroundColor = B.teal}>
    {children}
  </a>
);

/* ─── NAV DROPDOWN ─── */
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
    { label: "Our Story",     href: "/our-story" },
    { label: "Field Results", href: "/field-results" },
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
        className="flex items-center gap-1 text-sm font-medium text-slate-200 hover:text-white transition-colors duration-150 cursor-pointer py-1">
        {item.label}
        <IconChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}/>
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-2xl border border-slate-100 py-1.5 z-50">
          {item.items.map(sub => (
            <a key={sub.label} href={sub.href}
              className="block px-4 py-2.5 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors duration-150">
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
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "shadow-xl" : ""}`}
      style={{ backgroundColor: scrolled ? B.navyDarkest : "transparent" }}>
      {/* Teal top accent line */}
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
        <div className="lg:hidden border-t border-white/10 px-6 py-5 space-y-5"
          style={{ backgroundColor: B.navyDarkest }}>
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

/* ─── SECTION 1: HERO ─── */
function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden dot-grid" style={{ backgroundColor: B.navyDarkest }}>
      {/* Deep navy radial base */}
      <div aria-hidden className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 70% 60% at 72% 50%, ${B.navyDeep} 0%, transparent 68%)` }}/>
      {/* Teal glow — bottom-left anchor */}
      <div aria-hidden className="absolute -bottom-24 -left-24 w-[480px] h-[480px] pointer-events-none rounded-full"
        style={{ background: `radial-gradient(circle, rgba(32,153,145,0.09) 0%, transparent 65%)`, filter: "blur(40px)" }}/>
      {/* Teal glow — right center */}
      <div aria-hidden className="absolute right-0 top-1/3 w-80 h-80 pointer-events-none"
        style={{ background: `radial-gradient(circle, rgba(32,153,145,0.07) 0%, transparent 70%)`, filter: "blur(60px)" }}/>

      {/* Right panel — iPad mockup */}
      <div aria-hidden className="absolute right-0 top-0 bottom-0 w-[54%] hidden lg:flex items-center justify-center pr-4 pointer-events-none">
        <div className="relative w-[96%]">

          {/* iPad frame */}
          <div className="relative rounded-[2rem] shadow-[0_48px_96px_-24px_rgba(0,0,0,0.85),0_0_0_1px_rgba(255,255,255,0.07)]"
            style={{ backgroundColor: "#18181B", padding: "9px" }}>
            {/* Power button right */}
            <div className="absolute right-[-4px] top-[88px] w-[4px] h-9 rounded-l-sm" style={{ backgroundColor: "#27272A" }}/>
            {/* Volume up/down left */}
            <div className="absolute left-[-4px] top-[76px] w-[4px] h-7 rounded-r-sm" style={{ backgroundColor: "#27272A" }}/>
            <div className="absolute left-[-4px] top-[112px] w-[4px] h-7 rounded-r-sm" style={{ backgroundColor: "#27272A" }}/>

            {/* Screen */}
            <div className="rounded-[1.4rem] overflow-hidden flex flex-col" style={{ backgroundColor: "#F1F5F9", aspectRatio: "4/3" }}>

              {/* App top bar */}
              <div className="flex items-center justify-between px-3 py-1.5 shrink-0" style={{ backgroundColor: "#fff", borderBottom: "1px solid #E2E8F0" }}>
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded flex items-center justify-center" style={{ backgroundColor: B.teal }}>
                    <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2.5}><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span className="text-[8px] font-bold tracking-tight" style={{ color: B.text }}>evinra</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke={B.muted} strokeWidth={2}><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
                  <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke={B.muted} strokeWidth={2}><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                  <div className="w-4 h-4 rounded-full flex items-center justify-center text-[5px] font-bold text-white" style={{ backgroundColor: B.teal }}>YB</div>
                </div>
              </div>

              {/* Body: sidebar + main */}
              <div className="flex flex-1 overflow-hidden">

                {/* Sidebar */}
                <div className="flex flex-col shrink-0 border-r overflow-hidden" style={{ width: "16%", backgroundColor: "#fff", borderColor: "#E2E8F0" }}>
                  <div className="px-1.5 pt-2 pb-1 overflow-hidden">
                    <p className="text-[5px] font-bold uppercase tracking-widest px-1 mb-0.5" style={{ color: B.muted }}>Operations</p>
                    {[["Today",false],["Places",false],["Shows",false],["Venue",true],["Stock & Merch",false],["Suppliers",false],["POS Sales",false]].map(([item, active]) => (
                      <div key={item} className="flex items-center gap-1 px-1 py-[2.5px] rounded mb-[1px]"
                        style={{ backgroundColor: active ? "rgba(32,153,145,0.12)" : "transparent" }}>
                        <div className="w-1.5 h-1.5 rounded-[2px] shrink-0" style={{ backgroundColor: active ? B.teal : "#CBD5E1" }}/>
                        <span className="text-[5.5px] font-medium truncate leading-none" style={{ color: active ? B.teal : B.muted }}>{item}</span>
                      </div>
                    ))}
                    <p className="text-[5px] font-bold uppercase tracking-widest px-1 mb-0.5 mt-1.5" style={{ color: B.muted }}>Settlement &amp; Reports</p>
                    {["P&L","Shows Settlement","Tour Office","Day-of-Show","All Expenses","Wrap Report","Costing Insights"].map(item => (
                      <div key={item} className="flex items-center gap-1 px-1 py-[2px] rounded mb-[1px]">
                        <div className="w-1.5 h-1.5 rounded-[2px] shrink-0" style={{ backgroundColor: "#CBD5E1" }}/>
                        <span className="text-[5.5px] truncate leading-none" style={{ color: B.muted }}>{item}</span>
                      </div>
                    ))}
                    <p className="text-[5px] font-bold uppercase tracking-widest px-1 mb-0.5 mt-1.5" style={{ color: B.muted }}>Configurations</p>
                    {["Settings","Access & Roles","POS Gateway","Items & SKUs","Crew & Staff"].map(item => (
                      <div key={item} className="flex items-center gap-1 px-1 py-[2px] rounded mb-[1px]">
                        <div className="w-1.5 h-1.5 rounded-[2px] shrink-0" style={{ backgroundColor: "#CBD5E1" }}/>
                        <span className="text-[5.5px] truncate leading-none" style={{ color: B.muted }}>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto px-1.5 py-1.5 border-t" style={{ borderColor: "#E2E8F0" }}>
                    <div className="flex items-center gap-1 px-1 py-[2px]">
                      <div className="w-1.5 h-1.5 rounded-[2px] shrink-0" style={{ backgroundColor: "#CBD5E1" }}/>
                      <span className="text-[5.5px]" style={{ color: B.muted }}>Help</span>
                    </div>
                  </div>
                </div>

                {/* Main content */}
                <div className="flex flex-col flex-1 overflow-hidden" style={{ backgroundColor: "#F8FAFC" }}>

                  {/* Back + title */}
                  <div className="px-3 pt-2 pb-1.5 border-b" style={{ borderColor: "#E2E8F0", backgroundColor: "#fff" }}>
                    <div className="flex items-center gap-1 mb-1">
                      <svg className="w-2 h-2" viewBox="0 0 24 24" fill="none" stroke={B.teal} strokeWidth={2.5}><path d="M15 18l-6-6 6-6" strokeLinecap="round"/></svg>
                      <span className="text-[6px] font-medium" style={{ color: B.teal }}>Back Venue List</span>
                    </div>
                    <p className="text-[9px] font-bold mb-1.5" style={{ color: B.text }}>Venue Details</p>
                    <div className="grid grid-cols-4 gap-1.5">
                      {[
                        { label:"BASIC INFO",  lines:["Week 26 · COLUMBUS","Evinra Show Productions","Lackeland Ice Arena","Florida"] },
                        { label:"CONTACT",     lines:["Flores, Juanita","(207) 555-0119","debbie.baker@example.com"] },
                        { label:"PLAY DATE",   lines:["Mon, October 06, 2024","01:06 AM  /  03:44 AM"] },
                        { label:"COST",        lines:["Rent Cost","$27,949.00","Paid Amount","$65,749.00"] },
                      ].map(({ label, lines }) => (
                        <div key={label} className="rounded border p-1.5" style={{ borderColor: "#E2E8F0", backgroundColor: "#F8FAFC" }}>
                          <p className="text-[5px] font-bold uppercase tracking-widest mb-1" style={{ color: B.teal }}>{label}</p>
                          {lines.map(l => <p key={l} className="text-[5.5px] leading-tight" style={{ color: B.muted }}>{l}</p>)}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tabs */}
                  <div className="flex items-center border-b overflow-hidden px-2" style={{ borderColor: "#E2E8F0", backgroundColor: "#fff" }}>
                    {["Contract","Promotions","Insurance","Layout","Permits","Equipment","Security Fire/EMS","Water Connection","Expenses","Manager Notes","Taxes","Finance"].map((tab, i) => (
                      <div key={tab} className="px-1.5 py-1 text-[5px] font-medium shrink-0 border-b-[1.5px] whitespace-nowrap"
                        style={{ borderColor: i === 11 ? B.teal : "transparent", color: i === 11 ? B.teal : B.muted }}>
                        {tab}
                      </div>
                    ))}
                  </div>

                  {/* Finance tab body */}
                  <div className="flex-1 overflow-hidden px-2.5 py-1.5">

                    {/* Price inputs row */}
                    <div className="grid grid-cols-3 gap-2 mb-1.5">
                      {/* Box Office */}
                      <div className="rounded border p-1.5" style={{ borderColor: "#E2E8F0", backgroundColor: "#fff" }}>
                        <p className="text-[5.5px] font-semibold mb-1" style={{ color: B.text }}>Box Office Ticket Price</p>
                        <div className="grid grid-cols-2 gap-1">
                          {[["Adult","0.00"],["VIP Adult","0.00"],["Child","0.00"],["VIP Child","0.00"]].map(([l,v]) => (
                            <div key={l} className="flex items-center gap-0.5">
                              <span className="text-[4.5px] rounded px-0.5 py-px shrink-0" style={{ backgroundColor: "#E2E8F0", color: B.muted }}>{l}</span>
                              <span className="text-[5px] font-mono" style={{ color: B.text }}>{v}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      {/* Midway */}
                      <div className="rounded border p-1.5" style={{ borderColor: "#E2E8F0", backgroundColor: "#fff" }}>
                        <p className="text-[5.5px] font-semibold mb-1" style={{ color: B.text }}>Midway</p>
                        <div className="flex items-center gap-0.5">
                          <span className="text-[4.5px] rounded px-0.5 py-px" style={{ backgroundColor: "#E2E8F0", color: B.muted }}>Ticket Price</span>
                          <span className="text-[5px] font-mono font-semibold" style={{ color: B.text }}>7.00</span>
                        </div>
                      </div>
                      {/* Commission Rates */}
                      <div className="rounded border p-1.5" style={{ borderColor: "#E2E8F0", backgroundColor: "#fff" }}>
                        <p className="text-[5.5px] font-semibold mb-1" style={{ color: B.text }}>Commission Rates</p>
                        <div className="grid grid-cols-2 gap-1">
                          {[["VIP Upgrade","0.00"],["Midway","0.00"],["Concession","0.015"],["Others","0.00"]].map(([l,v]) => (
                            <div key={l} className="flex items-center gap-0.5">
                              <span className="text-[4.5px] rounded px-0.5 py-px shrink-0" style={{ backgroundColor: "#E2E8F0", color: B.muted }}>{l}</span>
                              <span className="text-[5px] font-mono" style={{ color: B.text }}>{v}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Play date + cash beginning */}
                    <div className="flex items-center justify-between mb-1 px-0.5">
                      <div className="flex items-center gap-1">
                        <span className="text-[5.5px] font-medium" style={{ color: B.muted }}>Play Date</span>
                        <div className="flex items-center gap-0.5 rounded border px-1 py-px" style={{ borderColor: "#E2E8F0", backgroundColor: "#fff" }}>
                          <span className="text-[5px] font-mono" style={{ color: B.text }}>08/25/2024</span>
                          <svg className="w-1.5 h-1.5" viewBox="0 0 24 24" fill="none" stroke={B.muted} strokeWidth={2}><polyline points="6 9 12 15 18 9"/></svg>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-0.5">
                          <div className="w-3 h-3 rounded flex items-center justify-center" style={{ backgroundColor: "#DCFCE7" }}>
                            <svg className="w-2 h-2" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth={2}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                          </div>
                          <div className="w-3 h-3 rounded flex items-center justify-center" style={{ backgroundColor: "#FEE2E2" }}>
                            <svg className="w-2 h-2" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth={2}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                          </div>
                        </div>
                        <span className="text-[5.5px] font-semibold" style={{ color: B.muted }}>CASH BEGINNING: <span style={{ color: B.text }}>$56,778.64</span></span>
                      </div>
                    </div>

                    {/* Finance table */}
                    <div className="rounded border overflow-hidden" style={{ borderColor: "#E2E8F0" }}>
                      {/* Header */}
                      <div className="grid text-[5px] font-bold uppercase tracking-wide"
                        style={{ gridTemplateColumns: "1.4fr 0.8fr 0.8fr 0.8fr 0.65fr 0.85fr 0.85fr 0.4fr", backgroundColor: "#F1F5F9", color: B.muted, borderBottom: "1px solid #E2E8F0" }}>
                        <div className="px-1.5 py-1"/>
                        {["Gross Sales","Commission","Net Sales","Per Cap.","Online/C. Card","Cash on Hand",""].map((h,i) => (
                          <div key={i} className="px-1 py-1 text-right">{h}</div>
                        ))}
                      </div>
                      {[
                        { cat:"BOX OFFICE", g:"$710.68", c:"$351.02", n:"$473.85", p:"$710.68", o:"$446.61", ch:"$450.54" },
                        { cat:"MIDWAY",     g:"$630.44", c:"$328.85", n:"$106.58", p:"$630.44", o:"$105.55", ch:"$475.22" },
                        { cat:"CONCESSION", g:"$854.08", c:"$219.78", n:"$779.58", p:"$854.08", o:"$490.51", ch:"$202.87" },
                        { cat:"NOVELTIES",  g:"$782.01", c:"$739.65", n:"$943.65", p:"$782.01", o:"$293.01", ch:"$928.41" },
                        { cat:"PARKING",    g:"$948.55", c:"$589.99", n:"$576.28", p:"$948.55", o:"$396.84", ch:"$275.43" },
                        { cat:"OTHERS",     g:"$948.55", c:"$589.99", n:"$576.28", p:"$948.55", o:"$396.84", ch:"$275.43" },
                      ].map((row, i) => (
                        <div key={row.cat} className="grid text-[5px] border-b items-center"
                          style={{ gridTemplateColumns: "1.4fr 0.8fr 0.8fr 0.8fr 0.65fr 0.85fr 0.85fr 0.4fr", borderColor: "#F1F5F9", backgroundColor: i % 2 === 0 ? "#fff" : "#F8FAFC" }}>
                          <div className="px-1.5 py-[3px] font-semibold" style={{ color: B.teal }}>{row.cat}</div>
                          {[row.g,row.c,row.n,row.p,row.o,row.ch].map((v,j) => (
                            <div key={j} className="px-1 py-[3px] text-right font-mono" style={{ color: B.text }}>{v}</div>
                          ))}
                          <div className="px-1 py-[3px] flex justify-end">
                            <span className="text-[4.5px] font-semibold px-1 py-px rounded text-white" style={{ backgroundColor: B.teal }}>+Add</span>
                          </div>
                        </div>
                      ))}
                      {/* Total row */}
                      <div className="grid text-[5px] font-bold border-t-2 items-center"
                        style={{ gridTemplateColumns: "1.4fr 0.8fr 0.8fr 0.8fr 0.65fr 0.85fr 0.85fr 0.4fr", borderColor: B.teal, backgroundColor: "#F8FAFC" }}>
                        <div className="px-1.5 py-[3px]" style={{ color: B.text }}>TOTAL</div>
                        {["$406.27","$169.43","$601.13","$406.27","$767.50","$778.35"].map((v,i) => (
                          <div key={i} className="px-1 py-[3px] text-right font-mono" style={{ color: B.teal }}>{v}</div>
                        ))}
                        <div className="px-1">
                          <span className="text-[4.5px] font-semibold px-1 py-px rounded text-white" style={{ backgroundColor: B.teal }}>+Add</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom summary */}
                    <div className="flex gap-3 mt-1">
                      <div className="flex-1">
                        <div className="flex items-center gap-1 mb-0.5">
                          <span className="text-[5px] font-medium" style={{ color: B.muted }}>DROP COUNT</span>
                          <div className="flex-1 rounded border px-1 py-px" style={{ borderColor: "#E2E8F0", backgroundColor: "#fff" }}>
                            <span className="text-[5px] font-mono" style={{ color: B.text }}>0</span>
                          </div>
                        </div>
                        {[["EXPENSES","$300.13"],["SALES TAXES","$300.13"],["NET INCOME","$301.00"]].map(([k,v], i) => (
                          <div key={k} className="flex justify-between text-[5px] py-[1.5px]" style={{ borderTop: i === 0 ? `1px solid #E2E8F0` : "none" }}>
                            <span style={{ color: B.muted }}>{k}</span>
                            <span className="font-bold font-mono" style={{ color: i === 2 ? B.teal : B.text }}>{v}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex-1 space-y-[1.5px]">
                        {[["TOTAL EXPENSES","$300.13"],["CASH EXPENSES","$0.00"],["CASH AVAILABLE","$0.00"],["DEPOSITS/TRANSFERS","$601.13"],["CASH ENDING BALANCE","$0.00"]].map(([k,v]) => (
                          <div key={k} className="flex justify-between text-[5px] py-[1px]">
                            <span style={{ color: B.muted }}>{k}</span>
                            <span className="font-bold font-mono" style={{ color: B.teal }}>{v}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Save bar */}
                  <div className="flex items-center gap-1.5 px-3 py-1.5 border-t shrink-0" style={{ borderColor: "#E2E8F0", backgroundColor: B.navyDarkest }}>
                    <button className="px-2 py-0.5 rounded text-[6px] font-semibold border" style={{ borderColor: "rgba(255,255,255,0.25)", color: "#fff" }}>Save</button>
                    <button className="px-2 py-0.5 rounded text-[6px] font-semibold text-white" style={{ backgroundColor: B.teal }}>Close Finance</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating card: net income */}
          <div className="absolute -bottom-4 -right-6 rounded-xl p-3 border shadow-2xl"
            style={{ backgroundColor: B.navyDarkest, borderColor: `rgba(32,153,145,0.35)`, boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }}>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(32,153,145,0.15)" }}>
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke={B.teal} strokeWidth={2.5}><path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-white">Books closed in 4 hrs</p>
                <p className="text-[10px]" style={{ color: B.muted }}>Net Income $301.00 · Week 26</p>
              </div>
            </div>
          </div>

          {/* Floating card: offline badge */}
          <div className="absolute -top-4 -left-6 rounded-xl px-3 py-2 border shadow-2xl"
            style={{ backgroundColor: B.navyDarkest, borderColor: `${B.navy}70`, boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }}>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: B.teal }}/>
              <span className="text-[11px] font-semibold text-white">100% Offline Mode</span>
            </div>
            <p className="text-[10px] mt-0.5" style={{ color: B.muted }}>0 bars · 0 issues</p>
          </div>
        </div>
        <div aria-hidden className="absolute inset-0"
          style={{ background: `linear-gradient(to right, ${B.navyDarkest} 0%, transparent 40%)` }}/>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="max-w-[520px]">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-7 border text-xs font-medium"
            style={{ backgroundColor: "rgba(32,153,145,0.1)", borderColor: "rgba(32,153,145,0.25)", color: B.tealLight }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: B.teal }}/>
            Built for outdoor event operators
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.07] tracking-tight mb-6 text-white">
            Sell the Tickets.<br/>
            Run the Show.<br/>
            <span style={{ color: B.teal }}>Keep the Revenue.</span>
          </h1>

          <p className="text-[15px] leading-relaxed mb-8 max-w-md" style={{ color: B.mutedLight }}>
            Stop taping your operations together. Evinra is the only platform that combines low-fee, white-label ticketing with a rugged, native event management system built for outdoor operators.
          </p>

          <div className="flex flex-wrap gap-3 mb-5">
            <a href="/request-a-demo"
              className="btn-teal inline-flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-md text-white cursor-pointer"
              style={{ backgroundColor: B.teal }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = B.tealDark}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = B.teal}>
              Request a Demo <IconArrowRight className="w-4 h-4"/>
            </a>
            <a href="#solution"
              className="inline-flex items-center gap-2 text-sm font-medium px-5 py-3 rounded-md border transition-colors duration-150 cursor-pointer"
              style={{ borderColor: "rgba(255,255,255,0.18)", color: "#CBD5E1", transition: "border-color 150ms, color 150ms, transform 120ms var(--ease-out-expo)" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)"; e.currentTarget.style.color = "#CBD5E1"; }}>
              See How It Works →
            </a>
          </div>
          <p className="text-xs" style={{ color: B.muted }}>Replace your software Frankenstein with one native system.</p>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 2: STATS ─── */
const STATS = [
  { value: "Up to 50%", label: "Lower Ticketing Fees" },
  { value: "99.9%",     label: "Uptime Target" },
  { value: "35+",       label: "Scans Per Min, Per Device" },
  { value: "100,000+",  label: "Attendee Capacity" },
];

function Stats() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} className="border-y" style={{ backgroundColor: B.navyDeep, borderColor: `${B.navy}80` }}>
      <div className="max-w-7xl mx-auto px-6 py-0">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div key={s.label}
              className={`px-6 py-10 lg:py-12 transition-all duration-500 ${i > 0 ? "border-l" : ""} ${i >= 2 ? "border-t lg:border-t-0" : ""}`}
              style={{
                borderColor: `${B.navy}70`,
                transitionDelay: `${i * 90}ms`,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.5s var(--ease-out-expo) ${i * 90}ms, transform 0.5s var(--ease-out-expo) ${i * 90}ms`,
              }}>
              <p className="text-4xl lg:text-5xl font-bold tracking-tight leading-none mb-2" style={{ color: B.teal }}>{s.value}</p>
              <p className="text-xs font-medium" style={{ color: B.mutedLight }}>{s.label}</p>
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
    body: "A 5-15% ticketing fee might seem like the standard cost of doing business... until you do the math on a sold-out weekend. Stop bleeding your profit margins just for the privilege of selling a ticket. Traditional apps take a cut of your hard-earned crowd while slapping their own logo on your checkout.",
  },
  {
    Icon: IconWifiOff,
    title: "Failing Gate WiFi",
    body: "There is nothing worse than a dropped connection with 500 angry people waiting in line. Cloud-dependent ticketing apps routinely crumble in rural fairgrounds and packed festival fields. When your gates rely strictly on a fragile internet signal, your ticket revenue stops the second it goes down.",
  },
  {
    Icon: IconPuzzle,
    title: "The Software Frankenstein",
    body: "You shouldn't have to export Excel sheets from your ticketing app just to calculate vendor payouts in a completely different system. Taping together mismatched software and third-party hardware creates massive blind spots, lost cash, and major reconciliation headaches at the end of the night.",
  },
];

function Enemy() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} className="border-b" style={{ backgroundColor: B.bg, borderColor: "#E2E8F0" }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight" style={{ color: B.text }}>
            The "Industry Standard" is Costing You Time, Money, and Your Sanity.
          </h2>
        </div>

        {/* Numbered horizontal list — not 3-equal-cards */}
        <div className="space-y-0">
          {PAIN_POINTS.map(({ Icon, title, body }, i) => (
            <div key={title}
              className="grid lg:grid-cols-[80px_280px_1fr] gap-6 lg:gap-10 items-start py-10 border-t"
              style={{
                borderColor: "#E2E8F0",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s var(--ease-out-expo) ${i * 120}ms, transform 0.5s var(--ease-out-expo) ${i * 120}ms`,
              }}>
              {/* Number + icon */}
              <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-3">
                <span className="text-4xl font-bold tabular-nums leading-none" style={{ color: "#E2E8F0" }}>0{i + 1}</span>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `rgba(32,153,145,0.1)` }}>
                  <Icon className="w-4 h-4" style={{ color: B.teal }}/>
                </div>
              </div>
              {/* Title */}
              <h3 className="text-lg font-semibold leading-snug pt-1" style={{ color: B.text }}>{title}</h3>
              {/* Body */}
              <p className="text-sm leading-relaxed" style={{ color: B.muted, maxWidth: "56ch" }}>{body}</p>
            </div>
          ))}
          <div className="border-t" style={{ borderColor: "#E2E8F0" }}/>
        </div>
      </div>
    </section>
  );
}

/* ─── MOCKUP: White-label checkout on device ─── */
function MockupCheckout() {
  return (
    <div className="rounded-2xl border overflow-hidden shadow-[0_24px_48px_-12px_rgba(13,21,32,0.14)]"
      style={{ backgroundColor: "#fff", borderColor: "#E2E8F0" }}>
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b" style={{ backgroundColor: "#F8FAFC", borderColor: "#E2E8F0" }}>
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/80"/>
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"/>
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/80"/>
        <div className="flex-1 mx-3 rounded-md px-3 py-1 text-[11px] font-mono" style={{ backgroundColor: "#EEF2F7", color: "#5A6B8A" }}>
          tickets.sunstatefairs.com/checkout
        </div>
      </div>
      <div className="p-5">
        {/* Brand header */}
        <div className="flex items-center gap-2 mb-5 pb-4 border-b" style={{ borderColor: "#EEF2F7" }}>
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: B.teal }}>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2}><path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3z" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <span className="text-sm font-bold" style={{ color: B.text }}>Sunstate Fairs</span>
          <span className="ml-auto text-[10px] font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: "rgba(32,153,145,0.1)", color: B.teal }}>
            Secure Checkout
          </span>
        </div>
        {/* Event info */}
        <div className="mb-4">
          <p className="text-[11px] mb-0.5" style={{ color: B.muted }}>Southeast Regional Fair · June 14–22, 2026</p>
          <p className="text-sm font-semibold" style={{ color: B.text }}>Select Ticket Type</p>
        </div>
        {/* Ticket options */}
        <div className="space-y-2 mb-5">
          {[
            { type: "Adult (18+)", price: "$22.00", selected: true },
            { type: "Child (3–17)", price: "$14.00", selected: false },
            { type: "VIP Pass", price: "$55.00", selected: false },
          ].map(({ type, price, selected }) => (
            <div key={type}
              className="flex items-center justify-between rounded-lg px-3 py-2.5 border cursor-pointer"
              style={{ borderColor: selected ? B.teal : "#E2E8F0", backgroundColor: selected ? "rgba(32,153,145,0.05)" : "#fff" }}>
              <div className="flex items-center gap-2.5">
                <span className="w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center shrink-0"
                  style={{ borderColor: selected ? B.teal : "#CBD5E1" }}>
                  {selected && <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: B.teal }}/>}
                </span>
                <span className="text-xs font-medium" style={{ color: B.text }}>{type}</span>
              </div>
              <span className="text-xs font-bold" style={{ color: selected ? B.teal : B.muted }}>{price}</span>
            </div>
          ))}
        </div>
        {/* Qty row */}
        <div className="flex items-center justify-between mb-4 text-xs" style={{ color: B.muted }}>
          <span>2 × Adult</span>
          <span className="font-bold text-sm" style={{ color: B.text }}>$44.00</span>
        </div>
        {/* CTA */}
        <div className="w-full py-2.5 rounded-md text-xs font-semibold text-white text-center mb-3"
          style={{ backgroundColor: B.teal }}>
          Complete Purchase →
        </div>
        <p className="text-center text-[10px]" style={{ color: B.mutedLight }}>
          Powered by <span style={{ color: B.teal }}>Evinra</span> · 2.9% + $0.30 per ticket
        </p>
      </div>
    </div>
  );
}

/* ─── MOCKUP: Offline POS on iPad ─── */
function MockupOfflinePOS() {
  return (
    <div className="relative">
      {/* iPad frame */}
      <div className="rounded-[2.5rem] border-[7px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(13,21,32,0.4)]"
        style={{ backgroundColor: "#0D1520", borderColor: "#1A2840" }}>
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-2.5 pb-1.5" style={{ backgroundColor: "#0D1520" }}>
          <span className="text-[10px] font-semibold font-mono" style={{ color: "#4E6490" }}>9:41</span>
          <div className="w-14 h-3.5 rounded-full" style={{ backgroundColor: "#1A2840" }}/>
          <div className="flex items-center gap-1.5">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth={2}>
              <path d="M1 1l22 22M16.72 11.06A10.94 10.94 0 0 1 19 12.55M5 12.55a10.94 10.94 0 0 1 5.17-2.39M10.71 5.05A16 16 0 0 1 22.56 9M1.42 9a15.91 15.91 0 0 1 4.7-2.88M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[10px] font-semibold" style={{ color: "#22C55E" }}>87%</span>
          </div>
        </div>
        {/* App shell */}
        <div className="px-4 pb-5" style={{ backgroundColor: "#111D2E", minHeight: "320px" }}>
          {/* Header */}
          <div className="flex items-center justify-between mb-4 pt-1">
            <span className="text-xs font-semibold text-white">Gate 2 · Evinra POS</span>
            <span className="flex items-center gap-1.5 text-[10px] font-semibold px-2.5 py-1 rounded-full"
              style={{ backgroundColor: "rgba(32,153,145,0.15)", color: B.tealLight }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: B.tealLight, animation: "pulse 2s infinite" }}/>
              OFFLINE
            </span>
          </div>
          {/* Scan zone */}
          <div className="rounded-xl border-2 border-dashed flex flex-col items-center justify-center py-7 mb-4"
            style={{ borderColor: "rgba(32,153,145,0.3)", backgroundColor: "rgba(32,153,145,0.03)" }}>
            <svg className="w-9 h-9 mb-2.5" viewBox="0 0 24 24" fill="none" stroke={B.teal} strokeWidth={1.5}>
              <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" strokeLinecap="round"/>
              <line x1="7" y1="12" x2="17" y2="12" stroke={B.teal} strokeWidth={2.5} strokeLinecap="round"/>
            </svg>
            <p className="text-xs font-semibold" style={{ color: B.tealLight }}>Ready to Scan</p>
            <p className="text-[10px] mt-0.5" style={{ color: B.muted }}>Camera or handheld scanner</p>
          </div>
          {/* Recent scans list */}
          <p className="text-[9px] font-semibold uppercase tracking-widest mb-2" style={{ color: B.muted }}>Recent</p>
          <div className="space-y-1.5">
            {[
              { id: "#TK-8821", type: "Adult GA", time: "4s ago" },
              { id: "#TK-8820", type: "Adult GA", time: "9s ago" },
              { id: "#TK-8819", type: "Child 3–17", time: "23s ago" },
            ].map(({ id, type, time }) => (
              <div key={id} className="flex items-center justify-between rounded-lg px-3 py-2"
                style={{ backgroundColor: "#0D1520" }}>
                <div className="flex items-center gap-2.5">
                  <span className="w-4.5 h-4.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "rgba(34,197,94,0.15)" }}>
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth={2.5}><path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <div>
                    <p className="text-[11px] font-mono font-semibold text-white">{id}</p>
                    <p className="text-[9px]" style={{ color: B.muted }}>{type}</p>
                  </div>
                </div>
                <span className="text-[9px]" style={{ color: B.muted }}>{time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Floating offline counter badge */}
      <div className="absolute -top-4 -right-4 rounded-xl px-3.5 py-2.5 border shadow-xl z-10"
        style={{ backgroundColor: B.navyDarkest, borderColor: "rgba(32,153,145,0.4)", boxShadow: "0 8px 32px rgba(0,0,0,0.45)" }}>
        <p className="text-[10px] font-medium mb-0.5" style={{ color: B.muted }}>Synced offline</p>
        <p className="text-xl font-bold font-mono" style={{ color: B.teal }}>4,219</p>
        <p className="text-[9px]" style={{ color: B.muted }}>tickets cached</p>
      </div>
    </div>
  );
}

/* ─── SECTION 4: SOLUTION ─── */
const CheckItem = ({ children }) => (
  <li className="flex items-start gap-3 text-sm" style={{ color: B.navy }}>
    <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
      style={{ backgroundColor: "rgba(32,153,145,0.12)" }}>
      <IconCheck className="w-3 h-3" style={{ color: B.teal }}/>
    </span>
    {children}
  </li>
);

function Solution() {
  const [ref, inView] = useInView();
  return (
    <section id="solution" ref={ref} className="border-b" style={{ backgroundColor: "#fff", borderColor: "#E2E8F0" }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: B.text }}>Fix the Gates. Keep the Cash.</h2>
          <p className="text-sm leading-relaxed" style={{ color: B.muted }}>
            Start by upgrading the two systems that cost you the most money when they break: your ticketing and your point-of-sale.
          </p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-12 items-center mb-16 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: B.text }}>White-Label Ticketing That Protects Your Margins</h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: B.muted }}>
              Stop acting as a lead generator for third-party ticketing apps. Evinra gives you a fully branded, white-label checkout experience that lives directly on your domain. You keep control of your customer data, you control the branding, and most importantly, you keep the revenue that used to bleed out to convenience fees.
            </p>
            <ul className="space-y-3 mb-7">
              <CheckItem>Custom checkout flows (General admission, VIP, seated)</CheckItem>
              <CheckItem>Instant payouts directly to your merchant account</CheckItem>
              <CheckItem>Complete ownership of your attendee data</CheckItem>
            </ul>
            <a href="/features/white-label-ticketing"
              className="inline-flex items-center gap-1 text-sm font-semibold cursor-pointer"
              style={{ color: B.teal }}>
              Explore White-Label Ticketing <IconArrowRight className="w-4 h-4"/>
            </a>
          </div>
          <MockupCheckout />
        </div>

        <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-500 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="order-2 lg:order-1"><MockupOfflinePOS /></div>
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold mb-4" style={{ color: B.text }}>Native Offline POS Built for the Field</h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: B.muted }}>
              Never lose a sale to a dead router again. Evinra's POS is natively built to function fully offline. Your staff can keep scanning tickets and processing cash sales at lightning speed, even in a muddy field with zero cell service. The moment a signal returns, the entire system syncs automatically across all your gates.
            </p>
            <ul className="space-y-3 mb-7">
              <CheckItem>Continuous ticket scanning without WiFi</CheckItem>
              <CheckItem>Sub-second processing speeds to kill gate bottlenecks</CheckItem>
              <CheckItem>Compatible with rugged, field-tested hardware</CheckItem>
            </ul>
            <a href="/features/offline-event-pos"
              className="inline-flex items-center gap-1 text-sm font-semibold cursor-pointer"
              style={{ color: B.teal }}>
              Explore Offline POS <IconArrowRight className="w-4 h-4"/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 5: LIFECYCLE ─── */
const MODULES = [
  { Icon: IconGate,  title: "Multi-Gate Synchronization",   body: "Running a massive fairground? Keep your data accurate across miles of fencing. Evinra syncs check-ins, VIP upgrades, and capacity counts across dozens of gates simultaneously." },
  { Icon: IconCash,  title: "Multi-Vendor Cash Management", body: "Eliminate the end-of-night Excel nightmare. Track exactly which vendor sold what, reconcile cash boxes instantly, and calculate revenue splits without the guesswork." },
  { Icon: IconUsers, title: "Granular Team Permissions",    body: "Touring with a massive crew and seasonal volunteers? Assign strict, role-based access to your POS devices so your staff can only see and do exactly what you authorize." },
  { Icon: IconChart, title: "Unified Financial Reporting",  body: "See your entire event's health from a single dashboard. Track live gate velocity, total revenue, and vendor performance before the gates even close." },
];

function ModuleCard({ Icon, title, body, delay, inView, direction }) {
  return (
    <div className={`rounded-xl p-5 border transition-all duration-500 ${inView
      ? "opacity-100 translate-x-0"
      : direction === "left" ? "opacity-0 -translate-x-6" : "opacity-0 translate-x-6"
    }`}
      style={{ backgroundColor: B.navyDeep, borderColor: `${B.navy}60`, transitionDelay: `${delay}ms` }}>
      <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
        style={{ backgroundColor: "rgba(32,153,145,0.12)" }}>
        <Icon className="w-5 h-5" style={{ color: B.teal }}/>
      </div>
      <h4 className="text-sm font-semibold text-white mb-1.5">{title}</h4>
      <p className="text-xs leading-relaxed" style={{ color: B.muted }}>{body}</p>
    </div>
  );
}

function Lifecycle() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} className="dot-grid" style={{ backgroundColor: B.navyDarkest }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ticketing Apps Stop at the Front Door. Evinra Runs the Entire Show.
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: B.muted }}>
            Once a ticket is scanned, Evinra expands into a native, all-in-one management platform. No plugins. No data silos. Just one unified system.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6 items-center">
          <div className="space-y-4">
            {MODULES.slice(0, 2).map(({ Icon, title, body }, i) => (
              <ModuleCard key={title} Icon={Icon} title={title} body={body} delay={i * 100} inView={inView} direction="left"/>
            ))}
          </div>

          {/* Center hub */}
          <div className={`rounded-2xl border aspect-square flex flex-col items-center justify-center p-6 transition-all duration-500 delay-200 ${inView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            style={{ backgroundColor: B.navyDeep, borderColor: B.navy }}>
            <EvinraLogo variant="light" className="h-9 mb-4"/>
            <div className="w-full h-px my-3" style={{ backgroundColor: `${B.navy}60` }}/>
            <p className="text-xs text-center mb-4" style={{ color: B.muted }}>One connected ecosystem</p>
            <div className="grid grid-cols-2 gap-2 w-full">
              {["Ticketing", "POS", "Vendors", "Reports"].map(l => (
                <div key={l} className="text-center rounded px-2 py-1.5 text-xs font-medium"
                  style={{ backgroundColor: "rgba(32,153,145,0.1)", color: B.tealLight }}>{l}</div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {MODULES.slice(2).map(({ Icon, title, body }, i) => (
              <ModuleCard key={title} Icon={Icon} title={title} body={body} delay={(i + 2) * 100} inView={inView} direction="right"/>
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
    <section ref={ref} className="border-b" style={{ backgroundColor: B.bg, borderColor: "#E2E8F0" }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: B.text }}>
            Finally, Software That Survives the Real World.
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: B.muted }}>
            Your events don't happen in a sterile office. Evinra is built for the physical chaos of the field, the mud, and the midnight tear-downs.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Plug-and-Play Hardware", body: "Stop buying proprietary, fragile scanners that break after one season. Evinra runs flawlessly on the hardware you already trust—from everyday iPads to heavy-duty Zebra scanners. Plus, our built-in inventory tracking ensures you never lose a scanner, wristband, or cash box in transit." },
            { title: "Automated Vendor Payouts", body: "Stop chasing down food truck owners at 2 AM to figure out who owes what. Evinra digitizes your vendor contracts and automatically calculates commissions based on real-time gate data. Close your physical cash boxes and your digital books in minutes." },
          ].map(({ title, body }, i) => (
            <div key={title}
              className={`rounded-xl p-8 border transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ backgroundColor: "#fff", borderColor: "#E2E8F0", transitionDelay: `${i * 120}ms` }}>
              <div className="w-1 h-8 rounded-full mb-5" style={{ backgroundColor: B.teal }}/>
              <h4 className="text-base font-semibold mb-3" style={{ color: B.text }}>{title}</h4>
              <p className="text-sm leading-relaxed" style={{ color: B.muted }}>{body}</p>
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
    <section ref={ref} style={{ backgroundColor: B.navyDeep }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div className={`transition-all duration-600 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <span className="text-6xl font-bold leading-none select-none" style={{ color: B.teal, fontVariantNumeric: "normal", lineHeight: 0.8 }}>"</span>
            <h2 className="text-2xl lg:text-3xl font-bold text-white leading-snug -mt-2 mb-6">
              I was paying them to hold my own money hostage.
            </h2>
            <p className="text-sm leading-relaxed italic border-l-2 pl-5 mb-8"
              style={{ color: B.mutedLight, borderColor: B.navy }}>
              That's what the director of a massive touring circus told me. She was doing all the heavy lifting: moving tents, managing a massive crew, taking all the physical risk... but her ticketing provider had all the leverage. They were sitting on her payouts for weeks, taking a large cut of her gross, and locking her into an 8-year contract. She realized she wasn't running her own box office anymore: she was acting as a high-volume lead generator for a software giant. That was the trigger. We realized operators didn't need another generic app: they needed to fire the middlemen. We built Evinra so independent producers could take their gates, their data, and their revenue back.
            </p>
            <div className="rounded-xl p-6 border" style={{ backgroundColor: "rgba(13,21,32,0.5)", borderColor: `${B.navy}60` }}>
              <p className="text-sm text-slate-300 italic leading-relaxed mb-4">
                "We were locked into expensive contracts and losing control of our own gates. The ticketing platform Yoaldis and his team built gave us our brand back and immediately protected our profit margins."
              </p>
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div>
                  <p className="text-xs font-semibold text-white">Director of a Multi-City Touring Circus</p>
                  <p className="text-xs" style={{ color: B.muted }}>Veteran Event Operator</p>
                </div>
                <a href="/field-results" className="text-xs font-medium underline underline-offset-2 cursor-pointer" style={{ color: B.teal }}>
                  Read how she eliminated gate downtime →
                </a>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-600 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <div className="rounded-2xl aspect-[3/4] flex items-end p-6 border"
              style={{ backgroundColor: B.navy, borderColor: `${B.navy}80` }}>
              <div className="w-full">
                <p className="text-xs font-mono mb-3" style={{ color: B.muted }}>[ Photo: Yoaldis in the field ]</p>
                <div className="rounded-lg px-4 py-3 border" style={{ backgroundColor: "rgba(13,21,32,0.7)", borderColor: "rgba(255,255,255,0.08)" }}>
                  <p className="text-sm font-semibold text-white">Yoaldis</p>
                  <p className="text-xs" style={{ color: B.teal }}>Founder, Evinra</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 8: CTA + FORM ─── */
function ContactForm() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: "", email: "", phone: "", bottleneck: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 800);
  };

  const inputBase = {
    width: "100%", backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "6px", padding: "10px 12px", fontSize: "14px", color: "#fff", outline: "none",
    transition: "border-color 150ms", fontFamily: "inherit",
  };

  return (
    <section id="request-demo" ref={ref} style={{ backgroundColor: B.navyDarkest }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Stop Losing Revenue to Manual Chaos.</h2>
          <p className="text-sm leading-relaxed" style={{ color: B.muted }}>
            Your competitors are already automating their gates and dropping their ticketing fees. Ready to see Evinra in action?
          </p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-12 transition-all duration-600 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="rounded-xl p-8 border" style={{ backgroundColor: B.navyDeep, borderColor: `${B.navy}60` }}>
            <h4 className="text-base font-semibold text-white mb-1">Request a Demo</h4>
            <p className="text-xs mb-6" style={{ color: B.muted }}>
              See the dashboard, check the hardware specs, and get your questions answered. No sales talk, just a walkthrough.
            </p>
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: "rgba(32,153,145,0.15)" }}>
                  <IconCheck className="w-6 h-6" style={{ color: B.teal }}/>
                </div>
                <p className="font-semibold text-white">We'll be in touch shortly.</p>
                <p className="text-xs mt-1" style={{ color: B.muted }}>Check your inbox within 15 minutes.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { id: "name",  label: "Name",       type: "text",  placeholder: "Your full name",    req: true },
                  { id: "email", label: "Work Email",  type: "email", placeholder: "you@company.com",   req: true },
                  { id: "phone", label: "Phone",       type: "tel",   placeholder: "+1 (000) 000-0000", req: false, opt: true },
                ].map(f => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="block text-xs font-medium mb-1.5" style={{ color: B.mutedLight }}>
                      {f.label} {f.opt && <span style={{ color: B.muted }}>(Optional)</span>}
                    </label>
                    <input id={f.id} type={f.type} required={f.req} placeholder={f.placeholder}
                      style={inputBase} value={form[f.id]}
                      onChange={e => setForm(p => ({ ...p, [f.id]: e.target.value }))}
                      onFocus={e => e.target.style.borderColor = B.teal}
                      onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}/>
                  </div>
                ))}
                <div>
                  <label htmlFor="bottleneck" className="block text-xs font-medium mb-1.5" style={{ color: B.mutedLight }}>
                    What is the main bottleneck you're trying to fix? <span style={{ color: B.muted }}>(Optional)</span>
                  </label>
                  <textarea id="bottleneck" rows={3} placeholder="e.g. Scanner downtime, ticketing fees, vendor reconciliation..."
                    style={{ ...inputBase, resize: "none" }} value={form.bottleneck}
                    onChange={e => setForm(p => ({ ...p, bottleneck: e.target.value }))}
                    onFocus={e => e.target.style.borderColor = B.teal}
                    onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}/>
                </div>
                <button type="submit" disabled={submitting}
                  className="w-full text-sm font-semibold py-3 rounded-md text-white flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 transition-colors duration-150"
                  style={{ backgroundColor: B.teal }}
                  onMouseEnter={e => !submitting && (e.currentTarget.style.backgroundColor = B.tealDark)}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = B.teal)}>
                  {submitting ? "Sending..." : <><span>Get My Walkthrough</span><IconArrowRight className="w-4 h-4"/></>}
                </button>
              </form>
            )}
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-lg font-semibold text-white mb-2">Hate filling out forms?</p>
            <p className="text-sm mb-1" style={{ color: B.mutedLight }}>Skip the line and talk to our event specialists directly.</p>
            <p className="text-xs mb-10" style={{ color: B.muted }}>Implementation slots are filling up before the peak event season.</p>
            <div className="space-y-5">
              {[
                { href: "tel:+17863257738", Icon: IconPhone, primary: "+1 (786) 325-7738", secondary: "Available Mon–Fri, 8am–8pm EST" },
                { href: "mailto:sales@evinra.com", Icon: IconMail, primary: "sales@evinra.com", secondary: "15-minute response time during business hours" },
              ].map(({ href, Icon, primary, secondary }) => (
                <a key={href} href={href} className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-150"
                    style={{ backgroundColor: B.navyDeep }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = B.navy}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = B.navyDeep}>
                    <Icon className="w-5 h-5" style={{ color: B.teal }}/>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white group-hover:underline">{primary}</p>
                    <p className="text-xs" style={{ color: B.muted }}>{secondary}</p>
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

/* ─── FOOTER ─── */
const FOOTER_COLS = [
  { title: "Core Software", links: [
    { label: "White Label Ticketing Platform",    href: "/features/white-label-ticketing" },
    { label: "Offline Event POS System",          href: "/features/offline-event-pos" },
    { label: "Event Check-In Software",           href: "/features/multi-gate-check-in" },
    { label: "Ticketing Software Comparison",     href: "/compare/ticketsocket-alternative" },
    { label: "Online Event Management",           href: "#" },
    { label: "Box Office Software & Hardware",    href: "/hardware-requirements" },
    { label: "Multi-Vendor Cash Reconciliation",  href: "/features/multi-vendor-cash-management" },
    { label: "Unified Financial Reporting",       href: "#" },
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
  { title: "Resources & Company", links: [
    { label: "Our Story",                href: "/our-story" },
    { label: "The Event Operator's Hub", href: "#" },
    { label: "Profit Margin Calculator", href: "#" },
    { label: "Founding Partner Program", href: "#" },
    { label: "Request a Demo",           href: "/request-a-demo" },
    { label: "Contact Us",               href: "/contact" },
  ]},
];

function Footer() {
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
              {[
                { Icon: IconTwitter,   href: "#", label: "Twitter" },
                { Icon: IconLinkedIn,  href: "#", label: "LinkedIn" },
                { Icon: IconInstagram, href: "#", label: "Instagram" },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} aria-label={label}
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
              <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: B.navy }}>
                {col.title}
              </p>
              <ul className="space-y-2.5">
                {col.links.map(link => (
                  <li key={link.label}>
                    <a href={link.href} className="text-xs transition-colors duration-150 cursor-pointer"
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

        <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: "rgba(255,255,255,0.05)" }}>
          <p className="text-xs" style={{ color: B.navy }}>© 2026 Evinra. All rights reserved.</p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Service"].map(l => (
              <a key={l} href="#" className="text-xs cursor-pointer transition-colors duration-150"
                style={{ color: B.navy }}
                onMouseEnter={e => e.currentTarget.style.color = B.muted}
                onMouseLeave={e => e.currentTarget.style.color = B.navy}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── CALC BANNER ─── */
function CalcBanner({ h2, cta, href }) {
  return (
    <section style={{ backgroundColor: B.navyDeep }}>
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col sm:flex-row items-center justify-between gap-6">
        <h2 className="text-2xl font-bold text-white max-w-xl">{h2}</h2>
        <a href={href}
          className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-md text-white"
          style={{ backgroundColor: B.teal, whiteSpace: "nowrap" }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = B.tealDark}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = B.teal}>
          {cta}
        </a>
      </div>
    </section>
  );
}

/* ─── ROOT ─── */
export default function EvinraHomepage() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Enemy />
        <Solution />
        <CalcBanner
          h2="Stop Guessing Your Fees. Run the Numbers."
          cta="Calculate Your ROI →"
          href="/roi-calculator"
        />
        <Lifecycle />
        <Differentiator />
        <FounderNote />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
