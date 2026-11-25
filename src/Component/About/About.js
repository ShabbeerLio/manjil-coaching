import "./About.css";

const COPY = {
  en: {
    eyebrow: "About us",
    title: "A separate teacher for every subject.",
    p1: "Manjil Coaching Classes in Sanju Nagar, Nashik coaches students from Jr. KG to 10th (ICSE, SSC and CBSE patterns, in English, Semi English and Urdu medium) and 11th–12th Science.",
    p2: "Every student gets hand-written notes, practical-based lectures and guidance through the admission process, with lady teachers available.",
    sub: "Why families choose Manjil",
    stats: [
      { n: "Weekly", d: "Test series, so progress is measured every week." },
      { n: "Monthly", d: "Guest lectures, plus personality and skill development." },
    ],
    cta: "Talk to us",
    circle: ["NEET · CET", "Batches starting"],
  },
  hi: {
    eyebrow: "हमारे बारे में",
    title: "हर विषय के लिए अलग टीचर।",
    p1: "नाशिक के संजू नगर में मंज़िल कोचिंग क्लासेस जूनियर केजी से 10वीं (ICSE, SSC और CBSE पैटर्न; इंग्लिश, सेमी इंग्लिश और उर्दू माध्यम) और 11वीं–12वीं साइंस की कोचिंग देती है।",
    p2: "हर विद्यार्थी को हाथ से लिखे नोट्स, प्रैक्टिकल आधारित लेक्चर और एडमिशन प्रक्रिया में मार्गदर्शन मिलता है। लेडीज टीचर भी उपलब्ध हैं।",
    sub: "परिवार मंज़िल को क्यों चुनते हैं",
    stats: [
      { n: "हर हफ्ते", d: "टेस्ट सीरीज़, ताकि प्रगति हर हफ्ते मापी जा सके।" },
      { n: "हर महीने", d: "गेस्ट लेक्चर, साथ में पर्सनैलिटी और स्किल डेवलपमेंट।" },
    ],
    cta: "हमसे बात करें",
    circle: ["NEET · CET", "बैच शुरू हो रहे हैं"],
  },
};

// photos: optional [bigPhotoUrl, smallPhotoUrl]. Without them, branded placeholders show.
export default function About({ lang, logo, photos = [] }) {
  const c = COPY[lang];
  const style = (src) => (src ? { backgroundImage: `url(${src})` } : undefined);
  console.log(c,"cccc")
  return (
    <section id="why" className="about">
      <div className="about-grid">
        <div className="collage">
          <div className={"blob big" + (photos[0] ? " has-photo" : "")} style={style(photos[0])}>
            {!photos[0] && <img src={logo} alt="" />}
          </div>
          <div className={"blob small" + (photos[1] ? " has-photo" : "")} style={style(photos[1])}>
            {!photos[1] && <span>Grow<br />Learn<br />Succeed</span>}
          </div>
          <div className="round-stat">
            <strong>{c?.circle[0]}</strong>
            <span>{c?.circle[1]}</span>
          </div>
          <span className="arc-ring" />
        </div>

        <div className="about-copy">
          <p className="eyebrow">{c?.eyebrow}</p>
          <h2>{c?.title}</h2>
          <p className="about-p">{c?.p1}</p>
          <p className="about-p">{c?.p2}</p>
          <h3>{c?.sub}</h3>
          <div className="facts">
            {c?.stats.map((s) => (
              <div key={s.n}>
                <strong>{s.n}</strong>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
          <a className="cta" href="#contact">
            {c?.cta}
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}