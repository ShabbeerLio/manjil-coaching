import "./Hero.css";
import heroBg from "../../Assets/hero.jpg";

const COPY = {
  en: {
    eyebrow: "Grow · Learn · Succeed",
    h1: ["MANJIL", "Coaching Classes "],
    lead: "Coaching from Jr. KG to 12th Science in Sanju Nagar, Nashik, with a separate teacher for every subject.",
    pills: ["Jr. KG – 10th", "11th–12th Science", "NEET · CET"],
    call: "Call to enrol",
    map: "Open in Maps",
    big: "1st–12th",
    badge: ["Admission", "Open now"],
  },
  hi: {
    eyebrow: "बढ़ो · सीखो · सफल बनो",
    h1: ["MANJIL", "Coaching Classes "],
    lead: "नाशिक के संजू नगर में जूनियर केजी से 12वीं साइंस तक की कोचिंग, हर विषय के लिए अलग टीचर।",
    pills: ["जूनियर केजी – 10वीं", "11वीं–12वीं साइंस", "NEET · CET"],
    call: "एडमिशन के लिए कॉल करें",
    map: "मैप में खोलें",
    big: "1ली–12वीं",
    badge: ["एडमिशन", "चालू"],
  },
};

const Spark = ({ className }) => (
  <svg className={"spark " + className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0c.9 7 5 11 12 12-7 1-11 5-12 12-1-7-5-11-12-12 7-1 11-5 12-12z" />
  </svg>
);

export default function Hero({ lang, logo, phone, mapUrl }) {
  const c = COPY[lang];
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">{c.eyebrow}</p>
          <h1>
            <span className="accent">{c.h1[0]}</span>
            <br />
            {c.h1[1]}
            <br />
            {c.h1[2]}
          </h1>
          <p className="lead">{c.lead}</p>
          <ul className="pills">{c.pills.map((p) => <li key={p}>{p}</li>)}</ul>
          <div className="actions">
            <a className="cta" href={"tel:+91" + phone}>
              {c.call}
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
            <a className="textlink" href={mapUrl} target="_blank" rel="noreferrer">{c.map}</a>
          </div>
        </div>

        <div className="orbit">
          <span className="ring" />
          <span className="ring arc" />
          <div className="disc" style={{ "--bg": `url(${heroBg})` }}>
            <img src={logo} alt="Manjil Coaching Classes" />
          </div>
          <div className="stat" aria-label={c.big + " " + c.badge.join(" ")}>
            <div>
              <strong>{c.big}</strong>
              <span>{c.badge[0]}</span>
              <span>{c.badge[1]}</span>
            </div>
          </div>
          <a className="fab" href={"tel:+91" + phone} aria-label={c.call}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" /></svg>
          </a>
          <Spark className="s1" />
          <Spark className="s2" />
          <span className="dot" />
        </div>
      </div>
    </section>
  );
}