import { useState } from "react";
import "./App.css";
import logo from "./Assets/Manjil_Coaching_Classes_Logo__1_-removebg-preview.png";
import Hero from "./Component/Hero/Hero";
import About from "./Component/About/About";
import { Showcase, HowItWorks, CtaBanner, Testimonials, News, Footer } from "./Component/Sections/Sections";
import Why from "./Component/Why/Why";
import Batches from "./Component/Batches/Batches";

const PHONES = [
  { name: "Md. Nawab Sir", tel: "7634919471" },
  { name: "Md. Nawab Sir (Whatsapp)", tel: "8676860163" },
];
const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(
    "Saroj Complex, Chunchale Shiwar Road, Sanju Nagar, Nashik 422010",
  );

const SUBJECTS = [
  "Physics",
  "Chemistry",
  "Maths",
  "Biology",
  "English",
  "Science",
  "NEET",
  "CET",
  "ICSE",
  "SSC",
  "CBSE",
];

const T = {
  en: {
    nav: ["Classes", "About", "Timings", "Contact"],
    badge: ["Hurry up!", "Admission", "started"],
    tagline: "Grow. Learn. Succeed.",
    lead: "Coaching from Jr. KG to 12th Science in Sanju Nagar, Nashik. A separate teacher for every subject.",
    call: "Call to enrol",
    visit: "Open in Maps",
    pills: ["Jr. KG – 10th", "11th–12th Science", "NEET · CET"],
    classesTitle: "Find your batch",
    classes: [
      {
        t: "Jr. KG to 10th",
        d: "ICSE, SSC and CBSE patterns in English, Semi English and Urdu medium.",
        i: "book",
      },
      {
        t: "11th and 12th Science",
        d: "All subjects, with the main focus on Science and Maths.",
        i: "atom",
      },
      {
        t: "NEET and CET",
        d: "New batches starting now. Admissions open for 1st to 12th.",
        i: "target",
      },
    ],
    facTitle: "What you get",
    fac: [
      "A separate teacher for each subject",
      "Lady teachers available",
      "Guidance for the admission process",
      "Hand-written notes provided",
      "Practical-based lectures",
    ],
    focusTitle: "Our main focus",
    focus: [
      "Weekly test series",
      "Science and Maths",
      "Monthly guest lecture",
      "Personality and skill development",
    ],
    timeTitle: "New batches start",
    morning: "Morning batch",
    evening: "Evening batch",
    addrTitle: "Visit or call",
    addr: [
      "Saroj Complex, Plot No. 6,",
      "Above New India Hotel, Chunchale Shiwar Road,",
      "Sanju Nagar, Nashik - 422010",
    ],
    toggle: "हिन्दी",
  },
  hi: {
    nav: ["कक्षाएँ", "क्यों मंज़िल", "समय", "संपर्क"],
    badge: ["जल्दी करें!", "एडमिशन", "शुरू"],
    tagline: "बढ़ो. सीखो. सफल बनो.",
    lead: "नाशिक के संजू नगर में जूनियर केजी से 12वीं साइंस तक की कोचिंग। हर विषय के लिए अलग टीचर।",
    call: "एडमिशन के लिए कॉल करें",
    visit: "मैप में खोलें",
    pills: ["जूनियर केजी – 10वीं", "11वीं–12वीं साइंस", "NEET · CET"],
    classesTitle: "अपना बैच चुनें",
    classes: [
      {
        t: "जूनियर केजी से 10वीं",
        d: "ICSE, SSC और CBSE पैटर्न। इंग्लिश, सेमी इंग्लिश और उर्दू माध्यम।",
        i: "book",
      },
      {
        t: "11वीं और 12वीं साइंस",
        d: "सभी विषय, मुख्य फोकस साइंस और गणित पर।",
        i: "atom",
      },
      {
        t: "NEET और CET",
        d: "नए बैच शुरू हो रहे हैं। 1ली से 12वीं तक एडमिशन चालू।",
        i: "target",
      },
    ],
    facTitle: "आपको क्या मिलेगा",
    fac: [
      "हर सब्जेक्ट के लिए अलग टीचर",
      "लेडीज टीचर उपलब्ध",
      "एडमिशन प्रक्रिया में मार्गदर्शन",
      "हाथ से लिखे नोट्स",
      "प्रैक्टिकल आधारित लेक्चर",
    ],
    focusTitle: "हमारा मुख्य फोकस",
    focus: [
      "वीकली टेस्ट सीरीज़",
      "साइंस और गणित",
      "मंथली गेस्ट लेक्चर",
      "पर्सनैलिटी और स्किल डेवलपमेंट",
    ],
    timeTitle: "नए बैच शुरू",
    morning: "सुबह का बैच",
    evening: "शाम का बैच",
    addrTitle: "आइए या कॉल कीजिए",
    addr: [
      "सरोज कॉम्प्लेक्स, प्लॉट नं. 6,",
      "न्यू इंडिया होटल के ऊपर, चुंचाले शिवार रोड,",
      "संजू नगर, नाशिक - 422010",
    ],
    toggle: "English",
  },
};

const ICONS = {
  book: (
    <path d="M4 5a2 2 0 012-2h12v16H6a2 2 0 00-2 2zM4 19a2 2 0 012-2h12M9 7h5" />
  ),
  atom: (
    <>
      <circle cx="12" cy="12" r="1.6" />
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
    </>
  ),
  moon: <path d="M20 14.5A8.5 8.5 0 119.5 4a7 7 0 0010.5 10.5z" />,
};
const Icon = ({ name }) => (
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
    {ICONS[name]}
  </svg>
);

export default function App() {
  const [lang, setLang] = useState("en");
  const t = T[lang];
  const ids = ["classes", "why", "timings", "contact"];
  const marquee = [...SUBJECTS, ...SUBJECTS];

  return (
    <div lang={lang}>
      <header className="top">
        <a className="brand" href="#top">
          <img src={logo} alt="Manjil Coaching Classes" />
        </a>
        <nav aria-label="Main">
          {t.nav.map((n, i) => (
            <a key={ids[i]} href={"#" + ids[i]}>
              {n}
            </a>
          ))}
        </nav>
        <button
          className="lang"
          onClick={() => setLang(lang === "en" ? "hi" : "en")}
        >
          {t.toggle}
        </button>
      </header>

      <main id="top">
        <Hero lang={lang} logo={logo} phone={PHONES[0].tel} mapUrl={MAP_URL} />

        <div className="marquee" aria-hidden="true">
          <div>
            {marquee.map((s, i) => (
              <span key={i}>{s}</span>
            ))}
          </div>
        </div>

        <section id="classes" className="block light">
          <h2>{t.classesTitle}</h2>
          <div className="grid3">
            {t.classes.map((c) => (
              <article key={c.t} className="course">
                <Icon name={c.i} />
                <div className="course-box">
                  <h3>{c.t}</h3>
                  <p>{c.d}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <About id={"why"} lang={lang} logo={logo} />
        {/* <section className="block dark">
          <div className="split">
            <div className="glass">
              <h2>{t.facTitle}</h2>
              <ul className="ticks">
                {t.fac.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
            <div className="glass">
              <h2>{t.focusTitle}</h2>
              <ul className="ticks">
                {t.focus.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          </div>
        </section> */}
        <Why facTitle={t.facTitle} fac={t.fac} focusTitle={t.focusTitle} focus={t.focus} />

        {/* <section id="timings" className="block light">
          <div className="grid2">
            <h1>{t.timeTitle}</h1>
            <div className="timing-box">
              <div className="slot">
                <Icon name="sun" />
                <span>{t.morning}</span>
                <strong>7 am – 11 am</strong>
              </div>
              <div className="slot night">
                <Icon name="moon" />
                <span>{t.evening}</span>
                <strong>3 pm – 9 pm</strong>
              </div>
            </div>
          </div>
        </section> */}
        <Batches lang={lang} phone={PHONES[0].tel} />
        {/* classes */}
        <Showcase lang={lang} mapUrl={MAP_URL} />
        {/* why */}
        <HowItWorks lang={lang} />
        {/* timings */}
        <CtaBanner lang={lang} phone={PHONES[0].tel} />
        <Testimonials lang={lang} logo={logo} />
        {/* <News lang={lang} phone={PHONES[0].tel} /> */}
        {/* contact */}
        {/* <section id="contact" className="block dark">
          <div className="split">
            <div>
              <h2>{t.addrTitle}</h2>
              <address>
                {t.addr.map((l) => (
                  <span key={l}>{l}</span>
                ))}
              </address>
              <a
                className="btn gold"
                href={MAP_URL}
                target="_blank"
                rel="noreferrer"
              >
                {t.visit}
              </a>
            </div>
            <div className="phones">
              {PHONES.map((p) => (
                <a key={p.tel} href={"tel:+91" + p.tel}>
                  <span>{p.name}</span>
                  <strong>{p.tel}</strong>
                </a>
              ))}
            </div>
          </div>
        </section> */}
      </main>
      <Footer lang={lang} logo={logo} phones={PHONES} addr={t.addr} mapUrl={MAP_URL} />
    </div>
  );
}
