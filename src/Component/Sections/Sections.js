import { useEffect, useRef, useState } from "react";
import "./Sections.css";

/* ---------- scroll reveal: adds .in once the section is on screen ---------- */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.classList.add("in");
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
  return ref;
}
const Arrow = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
const Ico = ({ d }) => (
  <svg className="ico" viewBox="0 0 24 24" aria-hidden="true">
    <path d={d} />
  </svg>
);
const P = {
  phone:
    "M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z",
  cal: "M4 6h16v14H4zM4 10h16M8 3v4M16 3v4M9 15l2 2 4-4",
  cup: "M8 4h8v5a4 4 0 01-8 0zM8 6H4v1a3 3 0 003 3M16 6h4v1a3 3 0 01-3 3M12 13v4M8 20h8M10 17h4",
  pin: "M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11zM12 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
  clock: "M12 3a9 9 0 100 18 9 9 0 000-18zM12 7v5l3 2",
  book: "M4 5a2 2 0 012-2h12v16H6a2 2 0 00-2 2zM4 19a2 2 0 012-2h12M9 7h5",
  atom: "M12 10.4a1.6 1.6 0 110 3.2 1.6 1.6 0 010-3.2zM2 12c0-2 4.5-4 10-4s10 2 10 4-4.5 4-10 4S2 14 2 12z",
};

/* =============== 1. SHOWCASE (image + pulsing button + copy) =============== */
const SHOW = {
  en: {
    eyebrow: "Learn from today",
    title: "Transform Your Future Through Practical Learning",
    p: "Practical-based lectures, hand-written notes and a weekly test series help every student understand the subject instead of just memorising it.",
    btn: "How it works",
    visit: "Visit our classroom",
  },
  hi: {
    eyebrow: "आज से सीखिए",
    title: "प्रैक्टिकल पढ़ाई से बदलिए अपना भविष्य",
    p: "प्रैक्टिकल आधारित लेक्चर, हाथ से लिखे नोट्स और वीकली टेस्ट सीरीज़ से हर विद्यार्थी विषय को रटता नहीं, समझता है।",
    btn: "कैसे काम करता है",
    visit: "हमारी क्लास देखने आइए",
  },
};
export function Showcase({ lang, photo, mapUrl }) {
  const c = SHOW[lang],
    ref = useReveal();
  return (
    <section className="show reveal" ref={ref}>
      <div className="show-grid">
        <div className="show-media rv" style={{ "--d": 0 }}>
          <i className="dots" />
          <i className="blob2" />
          <div
            className="photo"
            style={photo ? { backgroundImage: `url(${photo})` } : undefined}
          />
          <a
            className="play"
            href={mapUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={c.visit}
          >
            <span className="pulse" />
            <span className="pulse p2" />
            <Ico d={P.pin} />
          </a>
        </div>
        <div className="show-copy">
          <p className="s-eyebrow rv" style={{ "--d": 1 }}>
            {c.eyebrow}
          </p>
          <h2 className="rv" style={{ "--d": 2 }}>
            {c.title}
          </h2>
          <p className="s-p rv" style={{ "--d": 3 }}>
            {c.p}
          </p>
          <a className="s-btn rv" style={{ "--d": 4 }} href="#how">
            {c.btn}
            <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}

/* =============== 2. HOW IT WORKS =============== */
const HOW = {
  en: {
    eyebrow: "How to join",
    title: "How Does Manjil Work?",
    steps: [
      {
        t: "Visit or call us",
        d: "Talk to us about your child's class and board. We guide you through the admission process.",
      },
      {
        t: "Pick your batch",
        d: "Choose the morning (7–11 am) or evening (3–9 pm) batch that suits your day.",
      },
      {
        t: "Start learning",
        d: "Attend practical lectures, get hand-written notes and take a test every week.",
      },
    ],
  },
  hi: {
    eyebrow: "कैसे जुड़ें",
    title: "मंज़िल कैसे काम करता है?",
    steps: [
      {
        t: "आइए या कॉल कीजिए",
        d: "अपने बच्चे की कक्षा और बोर्ड के बारे में बात कीजिए। एडमिशन प्रक्रिया में हम मार्गदर्शन करते हैं।",
      },
      {
        t: "अपना बैच चुनिए",
        d: "सुबह (7–11) या शाम (3–9) का बैच चुनिए जो आपके दिन के अनुसार हो।",
      },
      {
        t: "पढ़ाई शुरू कीजिए",
        d: "प्रैक्टिकल लेक्चर में बैठिए, हाथ से लिखे नोट्स लीजिए और हर हफ्ते टेस्ट दीजिए।",
      },
    ],
  },
};
export function HowItWorks({ lang }) {
  const c = HOW[lang],
    ref = useReveal();
  const icons = [P.phone, P.cal, P.cup],
    tones = ["orange", "green", "gold"];
  return (
    <section id="how" className="how reveal" ref={ref}>
      <i className="zig" />
      <i className="dotcol" />
      <p className="s-eyebrow center rv" style={{ "--d": 0 }}>
        {c.eyebrow}
      </p>
      <h2 className="center rv" style={{ "--d": 1 }}>
        {c.title}
      </h2>
      <div className="steps">
        {c.steps.map((s, i) => (
          <div key={s.t} className="step-wrap">
            <div className="step rv" style={{ "--d": i + 2 }}>
              <span className={"orb " + tones[i]}>
                <Ico d={icons[i]} />
              </span>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
            {i < 2 && (
              <svg
                className={"arrow" + (i ? " flip" : "")}
                viewBox="0 0 160 60"
                aria-hidden="true"
              >
                <path pathLength="1" d="M6 14C40 62 100 62 148 16" />
                <path pathLength="1" className="head" d="M134 14l15 2-6 14" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

/* =============== 3. CTA BANNER =============== */
const CTA = {
  en: {
    eyebrow: "Let us help",
    title: "Finding The Right Batch For Your Child",
    btn: "Call to enrol",
  },
  hi: {
    eyebrow: "हम मदद करेंगे",
    title: "आपके बच्चे के लिए सही बैच ढूँढिए",
    btn: "एडमिशन के लिए कॉल करें",
  },
};
export function CtaBanner({ lang, phone }) {
  const c = CTA[lang],
    ref = useReveal();
  return (
    <section className="cta-wrap reveal" ref={ref} id={"contact"}>
      <div className="cta-card rv" style={{ "--d": 0 }}>
        <i className="c1" />
        <i className="c2" />
        <i className="c3" />
        <span className="bars">
          <b />
          <b />
          <b />
        </span>
        <span className="chev">
          <b />
          <b />
          <b />
          <b />
          <b />
        </span>
        <div>
          <p className="cta-eyebrow">{c.eyebrow}</p>
          <h2>{c.title}</h2>
        </div>
        <a className="white-btn" href={"tel:+91" + phone}>
          {c.btn}
          <Arrow />
        </a>
      </div>
    </section>
  );
}

/* =============== 4. TESTIMONIALS (auto-rotating) =============== */
/* TODO before launch: replace these sample entries with real reviews from students or parents. */
const REVIEWS = [
  {
    name: { en: "Parent / student name", hi: "अभिभावक / विद्यार्थी का नाम" },
    role: { en: "Class and board", hi: "कक्षा और बोर्ड" },
    quote: {
      en: "Replace this with a real review from a student or parent of Manjil Coaching Classes.",
      hi: "इसे मंज़िल कोचिंग क्लासेस के किसी विद्यार्थी या अभिभावक की असली राय से बदलिए।",
    },
    i: "A",
  },
  {
    name: { en: "Parent / student name", hi: "अभिभावक / विद्यार्थी का नाम" },
    role: { en: "Class and board", hi: "कक्षा और बोर्ड" },
    quote: {
      en: "Add a second review here. Short and specific reviews work best.",
      hi: "यहाँ दूसरी राय जोड़िए। छोटी और खास राय सबसे अच्छी रहती है।",
    },
    i: "B",
  },
  {
    name: { en: "Parent / student name", hi: "अभिभावक / विद्यार्थी का नाम" },
    role: { en: "Class and board", hi: "कक्षा और बोर्ड" },
    quote: { en: "Add a third review here.", hi: "यहाँ तीसरी राय जोड़िए।" },
    i: "C",
  },
];
const TES = {
  en: { eyebrow: "Testimonial", title: "Our Students Feedback" },
  hi: { eyebrow: "प्रशंसा", title: "हमारे विद्यार्थियों की राय" },
};
export function Testimonials({ lang, logo, photo }) {
  const c = TES[lang],
    ref = useReveal();
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setTimeout(() => setI((n) => (n + 1) % REVIEWS.length), 6000);
    return () => clearTimeout(id);
  }, [i]);
  const r = REVIEWS[i];
  return (
    <section className="tes reveal" ref={ref}>
      <div className="tes-grid">
        <div className="tes-photo rv" style={{ "--d": 0 }}>
          <i className="ol o1" />
          <i className="ol o2" />
          <div
            className="tphoto"
            style={photo ? { backgroundImage: `url(${photo})` } : undefined}
          >
            {!photo && <img src={logo} alt="" />}
          </div>
        </div>
        <div className="tes-copy">
          <p className="s-eyebrow rv" style={{ "--d": 1 }}>
            {c.eyebrow}
          </p>
          <h2 className="rv" style={{ "--d": 2 }}>
            {c.title}
          </h2>
          <div className="quote rv" style={{ "--d": 3 }} aria-live="polite">
            <blockquote key={i}>“ {r.quote[lang]} ”</blockquote>
            <p className="who" key={"w" + i}>
              <strong>{r.name[lang]}</strong>
              <span>{r.role[lang]}</span>
            </p>
          </div>
          <div className="avatars rv" style={{ "--d": 4 }}>
            {REVIEWS.map((a, n) => (
              <button
                key={a.i}
                className={n === i ? "on" : ""}
                onClick={() => setI(n)}
                aria-label={"Review " + (n + 1)}
              >
                <svg viewBox="0 0 44 44">
                  <circle cx="22" cy="22" r="20" />
                </svg>
                <span>{a.i}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =============== 5. NEWS & UPDATES =============== */
const NEWS = {
  en: {
    eyebrow: "News & updates",
    title: "Latest From Manjil",
    btn: "Call for details",
    read: "Read more",
    items: [
      {
        tag: "Admissions",
        t: "Admissions are open from Jr. KG to 12th",
        m: "All boards",
        i: "book",
      },
      {
        tag: "NEET · CET",
        t: "New NEET and CET batches are starting",
        m: "Science",
        i: "atom",
      },
      {
        tag: "Timings",
        t: "Morning (7–11 am) and evening (3–9 pm) batches",
        m: "Choose yours",
        i: "clock",
      },
    ],
  },
  hi: {
    eyebrow: "समाचार और अपडेट",
    title: "मंज़िल की ताज़ा खबरें",
    btn: "जानकारी के लिए कॉल करें",
    read: "और जानें",
    items: [
      {
        tag: "एडमिशन",
        t: "जूनियर केजी से 12वीं तक एडमिशन चालू",
        m: "सभी बोर्ड",
        i: "book",
      },
      {
        tag: "NEET · CET",
        t: "NEET और CET के नए बैच शुरू हो रहे हैं",
        m: "साइंस",
        i: "atom",
      },
      {
        tag: "समय",
        t: "सुबह (7–11) और शाम (3–9) के बैच",
        m: "अपना चुनिए",
        i: "clock",
      },
    ],
  },
};
export function News({ lang, phone }) {
  const c = NEWS[lang],
    ref = useReveal();
  return (
    <section className="news reveal" ref={ref}>
      <i className="leaf" />
      <i className="dotsb" />
      <div className="news-head">
        <div>
          <p className="s-eyebrow rv" style={{ "--d": 0 }}>
            {c.eyebrow}
          </p>
          <h2 className="rv" style={{ "--d": 1 }}>
            {c.title}
          </h2>
        </div>
        <a className="s-btn rv" style={{ "--d": 2 }} href={"tel:+91" + phone}>
          {c.btn}
          <Arrow />
        </a>
      </div>
      <div className="news-grid">
        {c.items.map((n, k) => (
          <article key={n.t} className="ncard rv" style={{ "--d": k + 2 }}>
            <div className="nart">
              <Ico d={P[n.i]} />
              <span className="ntag">{n.tag}</span>
            </div>
            <p className="nmeta">{n.m}</p>
            <h3>{n.t}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

/* =============== 6. FOOTER =============== */
const FOOT = {
  en: {
    about:
      "Manjil Coaching Classes: Jr. KG to 12th Science, NEET and CET coaching in Sanju Nagar, Nashik.",
    explore: "Explore",
    classes: "Classes",
    contact: "Contact info",
    links: [
      ["About us", "#about"],
      ["Classes", "#classes"],
      ["Why Manjil", "#why"],
      ["Timings", "#timings"],
      ["Contact", "#contact"],
    ],
    cls: [
      "Jr. KG – 10th (ICSE, SSC, CBSE)",
      "11th & 12th Science",
      "NEET batch",
      "CET batch",
    ],
    rights: "All rights reserved.",
  },
  hi: {
    about:
      "मंज़िल कोचिंग क्लासेस: नाशिक के संजू नगर में जूनियर केजी से 12वीं साइंस, NEET और CET की कोचिंग।",
    explore: "खोजें",
    classes: "कक्षाएँ",
    contact: "संपर्क जानकारी",
    links: [
      ["हमारे बारे में", "#about"],
      ["कक्षाएँ", "#classes"],
      ["क्यों मंज़िल", "#why"],
      ["समय", "#timings"],
      ["संपर्क", "#contact"],
    ],
    cls: [
      "जूनियर केजी – 10वीं (ICSE, SSC, CBSE)",
      "11वीं और 12वीं साइंस",
      "NEET बैच",
      "CET बैच",
    ],
    rights: "सर्वाधिकार सुरक्षित।",
  },
};
export function Footer({ lang, logo, phones, addr, mapUrl }) {
  const c = FOOT[lang],
    ref = useReveal();
  return (
    <footer className="foot reveal" ref={ref}>
      <i className="fd" />
      <i className="fs" />
      <div className="foot-grid">
        <div className="rv" style={{ "--d": 0 }}>
          <img className="flogo" src={logo} alt="Manjil Coaching Classes" />
          <p>{c.about}</p>
        </div>
        <div className="rv" style={{ "--d": 1 }}>
          <h4>{c.explore}</h4>
          <ul>
            {c.links.map(([l, h]) => (
              <li key={h}>
                <a href={h}>
                  <Arrow />
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="rv" style={{ "--d": 2 }}>
          <h4>{c.classes}</h4>
          <ul>
            {c.cls.map((l) => (
              <li key={l}>
                <a href="#classes">
                  <Arrow />
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="rv" style={{ "--d": 3 }}>
          <h4>{c.contact}</h4>
          <ul className="cinfo">
            <li>
              <Ico d={P.pin} />
              <a href={mapUrl} target="_blank" rel="noreferrer">
                {addr.join(" ")}
              </a>
            </li>
            {phones.map((p) => (
              <li key={p.tel}>
                <Ico d={P.phone} />
                <a href={"tel:+91" + p.tel}>
                  {p.name}: {p.tel}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="copy">
        © {new Date().getFullYear()} Manjil Coaching Classes, Nashik. {c.rights}
      </p>
    </footer>
  );
}
