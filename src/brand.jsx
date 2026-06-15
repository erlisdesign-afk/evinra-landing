/* ─── EVINRA BRAND TOKENS ─── */
export const B = {
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

export const TealBtn = ({ href, children, className = "", onClick }) => (
  <a href={href} onClick={onClick}
    className={`btn-teal inline-flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-md text-white cursor-pointer ${className}`}
    style={{ backgroundColor: B.teal, transition: "background-color 150ms ease, transform 120ms cubic-bezier(0.16,1,0.3,1)" }}
    onMouseEnter={e => e.currentTarget.style.backgroundColor = B.tealDark}
    onMouseLeave={e => e.currentTarget.style.backgroundColor = B.teal}>
    {children}
  </a>
);

export const GhostBtn = ({ href, children, className = "" }) => (
  <a href={href}
    className={`inline-flex items-center gap-2 text-sm font-medium px-5 py-3 rounded-md border cursor-pointer ${className}`}
    style={{ borderColor: "rgba(255,255,255,0.18)", color: "#CBD5E1", transition: "border-color 150ms ease, color 150ms ease, transform 120ms cubic-bezier(0.16,1,0.3,1)" }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)"; e.currentTarget.style.color = "#fff"; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)"; e.currentTarget.style.color = "#CBD5E1"; }}>
    {children}
  </a>
);
