import { useEffect, useRef } from "react";
import "./Why.css";

const D = {
  user: "M12 12a4 4 0 100-8 4 4 0 000 8zM4 21a8 8 0 0116 0",
  users:
    "M9 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM2 20a7 7 0 0114 0M17 4.5a3.5 3.5 0 010 6.5M18 14a6 6 0 013.5 6",
  compass: "M12 3a9 9 0 100 18 9 9 0 000-18zM15.5 8.5l-2 5-5 2 2-5z",
  pencil: "M4 20l1-4L16 5l3 3L8 19zM14 7l3 3",
  flask: "M9 3h6M10 3v6L5 19a1.5 1.5 0 001.3 2h11.4A1.5 1.5 0 0019 19l-5-10V3",
  clip: "M8 4h8v3H8zM6 5h2M16 5h2v16H6V5M9 14l2 2 4-4",
  sigma: "M18 5H6l6 7-6 7h12",
  mic: "M12 3a3 3 0 013 3v5a3 3 0 01-6 0V6a3 3 0 013-3zM5 11a7 7 0 0014 0M12 18v3",
  star: "M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z",
};
const FAC_ICONS = ["user", "users", "compass", "pencil", "flask"];
const FOCUS_ICONS = ["clip", "sigma", "mic", "star"];

function List({ items, icons, offset = 0 }) {
  return (
    <ul className="wlist">
      {items.map((text, i) => (
        <li key={text} className="rv" style={{ "--d": i + offset }}>
          <span className="chip">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d={D[icons[i % icons.length]]} />
            </svg>
          </span>
          <span className="wtext">{text}</span>
          <svg className="go" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </li>
      ))}
    </ul>
  );
}

export default function Why({ facTitle, fac, focusTitle, focus }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      el && el.classList.add("in");
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="why" className="why" ref={ref}>
      <i className="orb o1" />
      <i className="orb o2" />
      <div className="wgrid">
        <div className="wcard rv" style={{ "--d": 0 }}>
          <h2>{facTitle}</h2>
          <List items={fac} icons={FAC_ICONS} offset={1} />
        </div>
        <div className="wcard rv" style={{ "--d": 1 }}>
          <h2>{focusTitle}</h2>
          <List items={focus} icons={FOCUS_ICONS} offset={2} />
        </div>
      </div>
    </section>
  );
}
