// Header.tsx
import React, { useState, useEffect } from "react";
import "../index.css";

const navItems = [
  { name: "About", href: "#about", icon: "👤" },
  { name: "Journey", href: "#journey", icon: "🗺️" },
  { name: "Skills", href: "#skills", icon: "💪" },
  { name: "Projects", href: "#projects", icon: "🚀" },
  { name: "Contact", href: "#contact", icon: "📧" },
];

const Header: React.FC = () => {
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const onScroll = () => {
      const sections = navItems.map(i => i.href.substring(1));
      const scrollPos = window.scrollY + 100;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos && el.offsetTop + el.clientHeight > scrollPos) {
          setActive(id);
          break;
        }
      }
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = (href: string) => {
    const id = href.substring(1);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMobileOpen(false);
  };

  return (
    <header className={`header ${isDark ? "dark" : "light"} ${scrolled ? "scrolled" : ""}`}>
      <div className="logo" onClick={() => navigate("#about")}>
        <div className="logo-icon">AK</div>
        <div className="logo-text">
          <h1>Amrit Kalash</h1>
          <span>Data Engineer</span>
        </div>
      </div>

      <nav className="desktop-nav">
        {navItems.map(item => (
          <a
            key={item.name}
            onClick={() => navigate(item.href)}
            className={`nav-link ${active === item.href.substring(1) ? "active" : ""}`}
          >
            <span className="icon">{item.icon}</span>
            {item.name}
          </a>
        ))}
        <button className="btn resume" onClick={() => alert("Downloading Resume…")}>
          📄 Resume
        </button>
        <button className="btn theme-toggle" onClick={() => setIsDark(d => !d)}>
          {isDark ? "☀️" : "🌙"}
        </button>
      </nav>

      <button className="mobile-toggle" onClick={() => setMobileOpen(o => !o)}>
        <span /><span /><span />
      </button>

      {mobileOpen && (
        <div className="mobile-menu">
          {navItems.map(item => (
            <a
              key={item.name}
              onClick={() => navigate(item.href)}
              className={`mobile-link ${active === item.href.substring(1) ? "active" : ""}`}
            >
              <span className="icon">{item.icon}</span>
              {item.name}
            </a>
          ))}
          <div className="mobile-actions">
            <button onClick={() => alert("Downloading Resume…")}>📄 Resume</button>
            <button onClick={() => setIsDark(d => !d)}>{isDark ? "☀️" : "🌙"}</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
