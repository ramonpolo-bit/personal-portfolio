import { useEffect, useState, type FormEvent } from 'react';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  ExternalLink,
  FileDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Send,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';

type Experience = {
  company: string;
  role: string;
  dates: string;
  location: string;
  summary?: string;
  highlights?: string[];
};

const experiences: Experience[] = [
  {
    company: 'Green Dot Corporation',
    role: 'Corporate Customer Support Manager',
    dates: 'January 2026 — Present',
    location: 'Tampa, FL',
    summary:
      'Lead Tier 3 corporate support operations within a highly regulated financial services environment, resolving complex customer, operational, and compliance-related issues.',
  },
  {
    company: 'Citi',
    role: 'Compl AML Execution Analyst',
    dates: 'October 2024 — September 2025',
    location: 'Florida, United States',
    highlights: [
      'Investigated high-risk alerts and transactional activity to identify suspicious patterns, contributing to timely SAR filings and regulatory compliance.',
      'Conducted in-depth AML investigations, KYC and Enhanced Due Diligence reviews, and trend analysis to recommend improvements to transaction monitoring rules.',
    ],
  },
  {
    company: 'JPMorgan Chase & Co.',
    role: 'Compliance Investigator',
    dates: 'October 2022 — October 2024',
    location: 'Florida, United States',
    highlights: [
      'Identified fraud typologies including account takeover, identity theft, and unauthorized transactions, mitigating financial losses.',
      'Collaborated with cross-functional teams to improve alert quality, reduce false positives, and enhance detection strategies.',
    ],
  },
  {
    company: 'JPMorgan Chase & Co.',
    role: 'Account Specialist III · Business Operations Analyst · Senior Quality Specialist II · Executive Office Specialist II',
    dates: 'July 2015 — October 2022',
    location: 'Tampa, FL',
    summary:
      'Progressed through customer operations, quality, executive office, and business analysis roles, building a strong foundation in root-cause analysis, process improvement, and risk-aware service delivery.',
  },
  {
    company: 'Chase Auto Finance',
    role: 'Auto Finance Specialist',
    dates: 'February 2014 — July 2015',
    location: 'Tampa, FL',
    summary:
      'Assisted clients and branch employees with complex auto loan inquiries, resolving issues with a high level of professionalism while explaining services and products.',
  },
  {
    company: 'Citi',
    role: 'Anti-Money Laundering Compliance Analyst',
    dates: 'November 2010 — December 2012',
    location: 'Tampa, FL',
    summary:
      'Mitigated money laundering and terrorist financing risk in transactional activities for Latin America, testing the quality of data migrated from a legacy system.',
  },
  {
    company: 'Hillsborough County Clerk of Circuit Court',
    role: 'Cash Audit Supervisor',
    dates: 'March 2006 — November 2010',
    location: 'Tampa, FL',
    highlights: [
      'Conducted cash audits and compliance reviews to ensure adherence to financial controls and regulatory standards.',
      'Identified discrepancies and control weaknesses, recommending corrective actions to reduce operational risk.',
    ],
  },
  {
    company: 'HSBC',
    role: 'Senior Account Executive',
    dates: 'November 2004 — January 2006',
    location: 'Palm Harbor, FL',
  },
  {
    company: 'Verizon Wireless',
    role: 'Retail Customer Support / Sales · Credit Specialist',
    dates: 'February 2000 — October 2004',
    location: 'Tampa, FL',
  },
  {
    company: 'EarthWeb',
    role: 'Junior Staff Accountant',
    dates: '1997 — 1999',
    location: 'New York City Metropolitan Area',
  },
  {
    company: 'Early Intervention Service Coordination, MHRA',
    role: 'Billing Clerk',
    dates: '1994 — 1996',
    location: 'New York City Metropolitan Area',
  },
];

const skillGroups = [
  { label: 'Financial Crime', skills: ['AML investigations', 'Fraud detection', 'Transaction monitoring', 'SAR filings', 'KYC / EDD', 'NICE Actimize'] },
  { label: 'Risk & Controls', skills: ['Risk mitigation', 'Compliance reviews', 'Cash audits', 'Internal controls', 'Process improvement', 'Microsoft Excel'] },
  { label: 'Ways of working', skills: ['Cross-functional collaboration', 'Advanced analysis', 'Stakeholder communication', 'Root-cause research', 'Teamwork', 'Spanish — native / bilingual'] },
];

function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="section-heading reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {body && <p className="section-intro">{body}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const sectionIds = ['about', 'experience', 'skills', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: '-25% 0px -65% 0px' },
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Ramon Polo home">
          <span className="brand-mark">RP</span>
          <span>Ramon Polo</span>
        </a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'}>
          {['about', 'experience', 'skills'].map((item) => (
            <a key={item} className={activeSection === item ? 'is-active' : ''} href={`#${item}`} onClick={closeMenu}>
              {item}
            </a>
          ))}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let&apos;s connect <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero page-section">
          <div className="hero-copy reveal">
            <p className="hero-kicker"><span className="status-dot" /> Open to the right opportunity</p>
            <h1>Trust, insight, and <em>better decisions.</em></h1>
            <p className="hero-summary">Financial crime &amp; risk professional helping teams turn complex signals into clear, confident action.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#experience">Explore my experience <ChevronRight size={17} /></a>
              <a className="button button-secondary" href="/Ramon-Polo-Resume.txt" download="Ramon-Polo-Resume.txt">Download resume <FileDown size={17} /></a>
              <a className="text-link" href="mailto:ramon.polo@gmail.com">Get in touch <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <div className="hero-visual reveal reveal-delay-1">
            <div className="image-frame">
              <img src="/images/HH34377661_Ramon_Polo_Jr.jpeg" alt="Ramon Polo" />
              <div className="image-caption"><ShieldCheck size={17} /><span>15+ years in financial services</span></div>
            </div>
            <div className="hero-note"><span className="note-line" />Based in<br /><strong>Tampa, Florida</strong></div>
          </div>
          <div className="scroll-cue"><span /> Scroll to explore</div>
        </section>

        <section className="about page-section content-grid" id="about">
          <SectionHeading eyebrow="01 / About" title="A steady hand in complex systems." body="Practical experience, thoughtful analysis, and a bias toward doing the work right." />
          <div className="about-content reveal reveal-delay-1">
            <p className="lead">I&apos;m Ramon, a financial crime and risk professional with 15+ years of experience across banking, fraud prevention, AML investigations, and customer operations.</p>
            <p>My work sits at the intersection of people, process, and protection. I&apos;ve investigated suspicious activity, improved monitoring strategies, strengthened controls, and helped teams resolve high-stakes issues with clarity and care.</p>
            <div className="about-facts">
              <div><strong>15+</strong><span>years of experience</span></div>
              <div><strong>AML</strong><span>investigations &amp; compliance</span></div>
              <div><strong>US</strong><span>financial services experience</span></div>
            </div>
          </div>
        </section>

        <section className="experience page-section" id="experience">
          <div className="content-grid"><SectionHeading eyebrow="02 / Experience" title="A career built on trust." body="Selected roles across financial crime, compliance, operations, and customer protection." /></div>
          <div className="timeline">
            {experiences.map((item, index) => (
              <article className="timeline-item reveal" key={`${item.company}-${item.role}`}>
                <div className="timeline-marker">{String(index + 1).padStart(2, '0')}</div>
                <div className="timeline-date">{item.dates}</div>
                <div className="timeline-card">
                  <p className="company">{item.company}</p>
                  <h3>{item.role}</h3>
                  <p className="location"><MapPin size={14} /> {item.location}</p>
                  {item.summary && <p className="role-summary">{item.summary}</p>}
                  {item.highlights && <ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="skills page-section" id="skills">
          <div className="content-grid"><SectionHeading eyebrow="03 / Capabilities" title="What I bring to the table." body="A balance of investigative rigor, operational fluency, and human judgment." /></div>
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-card reveal" key={group.label}>
                <div className="skill-icon">{index === 0 ? <ShieldCheck size={21} /> : index === 1 ? <BriefcaseBusiness size={21} /> : <Sparkles size={21} />}</div>
                <p className="card-index">0{index + 1}</p>
                <h3>{group.label}</h3>
                <ul>{group.skills.map((skill) => <li key={skill}><Check size={15} />{skill}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="education page-section">
          <div className="content-grid"><SectionHeading eyebrow="Education" title="A foundation in accounting." body="Formal study complemented by years of hands-on financial services experience." /></div>
          <div className="education-list reveal reveal-delay-1">
            <div><p className="company">Borough of Manhattan Community College</p><h3>Associate of Arts and Sciences — Accounting</h3><p>August 1989 — May 1992</p></div>
            <div><p className="company">Pace University · Lubin School of Business</p><h3>Accounting</h3><p>1992 — 1996</p></div>
          </div>
        </section>

        <section className="contact page-section" id="contact">
          <div className="contact-card reveal">
            <div><p className="eyebrow">05 / Contact</p><h2>Let&apos;s make the next decision a good one.</h2><p>Interested in connecting about financial crime, risk, compliance, or operations? Send a note and your email app will open a ready-to-send message.</p><div className="contact-links"><a href="mailto:ramon.polo@gmail.com"><Mail size={18} /> ramon.polo@gmail.com <ArrowUpRight size={16} /></a><a href="https://www.linkedin.com/in/rpolo212" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn <ExternalLink size={15} /></a><a href="https://github.com/ramonpolo-bit" target="_blank" rel="noreferrer"><Github size={18} /> GitHub <ExternalLink size={15} /></a></div></div>
            <form className="contact-form" onSubmit={(event: FormEvent<HTMLFormElement>) => { event.preventDefault(); const data = new FormData(event.currentTarget); const subject = encodeURIComponent(`Portfolio inquiry from ${data.get('name')}`); const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`); window.location.href = `mailto:ramon.polo@gmail.com?subject=${subject}&body=${body}`; setFormSubmitted(true); }}>
              <label htmlFor="name">Name<input id="name" name="name" type="text" placeholder="Your name" required /></label>
              <label htmlFor="email">Email<input id="email" name="email" type="email" placeholder="you@example.com" required /></label>
              <label htmlFor="message">Message<textarea id="message" name="message" placeholder="How can I help?" rows={4} required /></label>
              <button className="button button-primary" type="submit">{formSubmitted ? 'Email draft opened' : 'Send message'} {formSubmitted ? <ShieldCheck size={17} /> : <Send size={17} />}</button>
            </form>
          </div>
        </section>
      </main>

      <footer><span>© {new Date().getFullYear()} Ramon Polo</span><span>Financial crime &amp; risk professional</span><a href="#top">Back to top ↑</a></footer>
    </div>
  );
}

export default App;
