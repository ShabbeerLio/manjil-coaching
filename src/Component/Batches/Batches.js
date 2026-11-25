import { useEffect, useRef, useState } from "react";
import "./Batches.css";

const COPY = {
  en: {
    eyebrow: "Batch timings",
    title: "New batches start",
    sub: "Pick the batch that fits your day. Both batches follow the same syllabus and weekly tests.",
    call: "Call to enrol",
    morning: "Morning batch",
    evening: "Evening batch",
    hrs: ["4 hours", "6 hours"],
    live: "LIVE",
    now: "Now",
    run: (b) => `${b} is running now`,
    next: (b, t) => `Next: ${b} at ${t}`,
  },
  hi: {
    eyebrow: "बैच का समय",
    title: "नए बैच शुरू",
    sub: "अपने दिन के हिसाब से बैच चुनिए। दोनों बैच में वही पाठ्यक्रम और वीकली टेस्ट होते हैं।",
    call: "एडमिशन के लिए कॉल करें",
    morning: "सुबह का बैच",
    evening: "शाम का बैच",
    hrs: ["4 घंटे", "6 घंटे"],
    live: "चालू",
    now: "अभी",
    run: (b) => `${b} अभी चल रहा है`,
    next: (b, t) => `अगला: ${b}, ${t}`,
  },
};
const HOURS = [6, 9, 12, 15, 18, 21];
const label = (h) => (h === 12 ? "12 pm" : h > 12 ? h - 12 + " pm" : h + " am");
const pct = (h) => ((h - 6) / 16) * 100;

// current hour in India (Nashik), as a decimal like 14.5
function istHour() {
  const p = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).formatToParts(new Date());
  return (
    (Number(p.find((x) => x.type === "hour").value) % 24) +
    Number(p.find((x) => x.type === "minute").value) / 60
  );
}

const Sun = () => (
  <svg
    className="icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
  </svg>
);
const Moon = () => (
  <svg
    className="icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 14.5A8.5 8.5 0 119.5 4a7 7 0 0010.5 10.5z" />
  </svg>
);

export default function Batches({ lang, phone }) {
  const c = COPY[lang],
    ref = useRef(null),
    [h, setH] = useState(istHour());

  useEffect(() => {
    const id = setInterval(() => setH(istHour()), 60000);
    return () => clearInterval(id);
  }, []);
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
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const morningLive = h >= 7 && h < 11,
    eveningLive = h >= 15 && h < 21;
  let status;
  if (morningLive) status = c.run(c.morning);
  else if (eveningLive) status = c.run(c.evening);
  else if (h >= 11 && h < 15) status = c.next(c.evening, "3 pm");
  else status = c.next(c.morning, "7 am");
  const live = morningLive || eveningLive;

  return (
    <section id="timings" className="block light batches" ref={ref}>
      <div className="bgrid">
        <div className="bcopy">
          <p className="b-eyebrow rv" style={{ "--d": 0 }}>
            {c.eyebrow}
          </p>
          <h2 className="rv" style={{ "--d": 1 }}>
            {c.title}
          </h2>
          <p className="b-sub rv" style={{ "--d": 2 }}>
            {c.sub}
          </p>
          <p
            className={"livepill rv" + (live ? "" : " off")}
            style={{ "--d": 3 }}
          >
            <i />
            {status}
          </p>
          <a className="b-btn rv" style={{ "--d": 4 }} href={"tel:+91" + phone}>
            {c.call}
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>

        <div className="timing-box">
          <div
            className={"slot rv" + (morningLive ? " is-live" : "")}
            style={{ "--d": 2 }}
          >
            <Sun />
            <span>{c.morning}</span>
            <strong>7 am – 11 am</strong>
            <em className="dur">{c.hrs[0]}</em>
            {morningLive && <b className="badge">{c.live}</b>}
          </div>
          <div
            className={"slot night rv" + (eveningLive ? " is-live" : "")}
            style={{ "--d": 3 }}
          >
            <Moon />
            <span>{c.evening}</span>
            <strong>3 pm – 9 pm</strong>
            <em className="dur">{c.hrs[1]}</em>
            {eveningLive && <b className="badge">{c.live}</b>}
          </div>
        </div>

        <div className="tline rv" style={{ "--d": 4 }} aria-hidden="true">
          <div className="track">
            <i
              className="seg m"
              style={{ left: pct(7) + "%", width: pct(11) - pct(7) + "%" }}
            />
            <i
              className="seg e"
              style={{ left: pct(15) + "%", width: pct(21) - pct(15) + "%" }}
            />
            {h >= 6 && h <= 22 && (
              <i
                className="now"
                data-label={c.now}
                style={{ left: pct(h) + "%" }}
              />
            )}
          </div>
          <ul className="hours">
            {HOURS.map((x) => (
              <li key={x} style={{ left: pct(x) + "%" }}>
                {label(x)}
              </li>
            ))}
          </ul>
          <p className="legend">
            <span className="lm">{c.morning}</span>
            <span className="le">{c.evening}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
