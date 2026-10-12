import { useState, type ReactNode } from "react";
import "./App.css";

const REGISTRATION_URL = "https://forms.gle/9ABnLHrmUxJtZ9YB9";
const SUBMISSION_URL = "https://forms.gle/4K4HxfKU9UDgdXjAA";

type IconName =
  | "gamepad" | "book" | "trophy" | "lightbulb" | "users"
  | "clock" | "target" | "check" | "code" | "search"
  | "medal" | "arrow" | "mail" | "pin" | "calendar"
  | "shield" | "rocket" | "chevron" | "sparkles";

function Icon({ name, size = 24 }: { name: IconName; size?: number }) {
  const common = {
    width: size, height: size, viewBox: "0 0 24 24",
    fill: "none", stroke: "currentColor", strokeWidth: 1.7,
    strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  const paths: Record<IconName, ReactNode> = {
    gamepad: <><path d="M6 11h4m-2-2v4" /><path d="M15 10h.01M18 12h.01" /><path d="M7 6h10a4 4 0 0 1 3.9 3.1l1 5A3 3 0 0 1 17 17l-3-2H10l-3 2a3 3 0 0 1-4.9-2.9l1-5A4 4 0 0 1 7 6Z" /></>,
    book: <><path d="M12 7v14" /><path d="M3 5.5A2.5 2.5 0 0 1 5.5 3H12v18H5.5A2.5 2.5 0 0 0 3 23V5.5Z" /><path d="M21 5.5A2.5 2.5 0 0 0 18.5 3H12v18h6.5A2.5 2.5 0 0 1 21 23V5.5Z" /></>,
    trophy: <><path d="M8 21h8m-4-4v4" /><path d="M7 4h10v7a5 5 0 0 1-10 0V4Z" /><path d="M7 7H4v2a4 4 0 0 0 4 4m9-6h3v2a4 4 0 0 1-4 4" /></>,
    lightbulb: <><path d="M9 18h6m-5 4h4" /><path d="M8.5 14.5A7 7 0 1 1 15.5 14.5c-1.2 1-1.5 2-1.5 3h-4c0-1-.3-2-1.5-3Z" /></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" /><circle cx="9.5" cy="7" r="4" /><path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></>,
    check: <><circle cx="12" cy="12" r="9" /><path d="m8 12 2.5 2.5L16 9" /></>,
    code: <><path d="m8 8-4 4 4 4m8-8 4 4-4 4m-2-10-4 12" /></>,
    search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 4 4" /></>,
    medal: <><circle cx="12" cy="8" r="5" /><path d="m8.5 12-2 9 5.5-3 5.5 3-2-9" /></>,
    arrow: <><path d="M7 17 17 7M7 7h10v10" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></>,
    shield: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" /><path d="m9 12 2 2 4-4" /></>,
    rocket: <><path d="M4.5 16.5c-1.5 1.3-2 4-2 4s2.7-.5 4-2" /><path d="M12 15 9 12c1-4 4-7 11-9 0 7-3 10-7 11Z" /><path d="m9 12-4 1-2 4 5-1m7-1 1 4 4 2-1-5" /><circle cx="15" cy="8" r="1.5" /></>,
    chevron: <path d="m9 18 6-6-6-6" />,
    sparkles: <><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-2-5.8L4 11l6-2.2L12 3Z" /><path d="m19 14 1.2 2.8L23 18l-2.8 1.2L19 22l-1.2-2.8L15 18l2.8-1.2L19 14Z" /></>,
  };
  return <svg {...common}>{paths[name]}</svg>;
}

const tracks = [
  {
    id: "educational", number: "01", title: "الألعاب التعليمية",
    english: "Educational Games",
    description: "طوّر ألعابًا تفاعلية تساعد في تعليم المفاهيم الأكاديمية بطريقة ممتعة وجذابة.",
    examples: ["ألعاب تعليم الرياضيات", "ألعاب تعلم اللغات", "ألعاب العلوم التفاعلية", "ألعاب التاريخ والجغرافيا"],
    icon: "book" as IconName, color: "cyan",
  },
  {
    id: "sports", number: "02", title: "ألعاب الرياضة",
    english: "Sports Games",
    description: "أنشئ ألعابًا رياضية تحاكي الأنشطة المختلفة وتشجع على الحركة والتحدي.",
    examples: ["ألعاب كرة القدم", "ألعاب اللياقة البدنية", "ألعاب الرياضات الإلكترونية", "ألعاب التحدي والمغامرة"],
    icon: "trophy" as IconName, color: "orange",
  },
  {
    id: "open", number: "03", title: "الابتكار المفتوح",
    english: "Open Innovation",
    description: "أطلق خيالك وابتكر لعبة رقمية من اختيارك، بفكرة جديدة وتجربة تفاعلية مميزة.",
    examples: ["ألعاب المغامرات", "ألعاب الألغاز", "ألعاب الواقع المعزز", "ألعاب اجتماعية تفاعلية"],
    icon: "lightbulb" as IconName, color: "purple",
  },
];

const stages = [
  { number: "01", title: "التسجيل وتقديم الأفكار", english: "Registration and Idea Submission", description: "سجّل فريقك وقدّم فكرة مشروعك للمراجعة.", icon: "check" as IconName },
  { number: "02", title: "التطوير وتقديم المشروع", english: "Development and Project Submission", description: "ابدأ في تطوير مشروعك وقدّم النسخة النهائية.", icon: "code" as IconName },
  { number: "03", title: "التقييم والتحكيم", english: "Evaluation and Judging", description: "سيتم تقييم المشاريع من قبل لجنة التحكيم.", icon: "search" as IconName },
  { number: "04", title: "النتائج النهائية", english: "Final Results", description: "الإعلان عن الفائزين وتوزيع الجوائز.", icon: "trophy" as IconName },
];

const goals = [
  "تطوير مهارات البرمجة والتصميم لدى الطلاب",
  "تعزيز روح العمل الجماعي والتعاون",
  "تحفيز الإبداع والابتكار في تطوير الألعاب",
  "ربط الطلاب بخبراء الصناعة والموجهين",
  "تقديم فرص للتعلم العملي والتطبيقي",
  "بناء مشاريع حقيقية يمكن إضافتها للسيرة الذاتية",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell" dir="rtl">
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu}>
          <img src="/gamex-logo-light.png" alt="GameX" />
          <span>هاكاثون الألعاب الإلكترونية</span>
        </a>
        <button className="menu-toggle" type="button" aria-label="فتح القائمة" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"}>
          <a href="#home" onClick={closeMenu}>الرئيسية</a>
          <a href="#about" onClick={closeMenu}>عن الهاكاثون</a>
          <a href="#tracks" onClick={closeMenu}>المسارات</a>
          <a href="#stages" onClick={closeMenu}>المراحل</a>
        </nav>
        <a className="header-cta" href={REGISTRATION_URL} target="_blank" rel="noreferrer">
          <span>سجّل الآن</span><Icon name="arrow" size={17} />
        </a>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-glow hero-glow-one" /><div className="hero-glow hero-glow-two" />
          <div className="hero-content">
            <div className="eyebrow"><Icon name="sparkles" size={17} /><span>الإبداع يبدأ بفكرة</span></div>
            <h1>حوّل فكرتك إلى <span className="gradient-text">لعبة استثنائية</span></h1>
            <p className="hero-description">
              هاكاثون الألعاب الإلكترونية GameX 2027 مساحة للمبدعين والمطورين لصناعة تجارب ألعاب مبتكرة، والعمل معًا على تحويل الأفكار إلى مشاريع واقعية.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={REGISTRATION_URL} target="_blank" rel="noreferrer">سجّل في الهاكاثون <Icon name="arrow" size={19} /></a>
              <a className="button button-secondary" href="#tracks">اكتشف المسارات <Icon name="chevron" size={18} /></a>
            </div>
            <div className="hero-note"><Icon name="gamepad" size={18} /><span>ابتكر. طوّر. نافس.</span></div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
            <div className="visual-core"><img src="/gamex-logo-light.png" alt="" /></div>
            <div className="floating-chip chip-code"><Icon name="code" size={25} /></div>
            <div className="floating-chip chip-trophy"><Icon name="trophy" size={25} /></div>
            <div className="floating-chip chip-game"><Icon name="gamepad" size={25} /></div>
            <span className="visual-dot dot-one" /><span className="visual-dot dot-two" /><span className="visual-dot dot-three" />
          </div>
          <a className="scroll-hint" href="#about" aria-label="انتقل إلى القسم التالي"><span /></a>
        </section>

        <section className="stats-strip" aria-label="إحصائيات الهاكاثون">
          <div className="stat-item"><span className="stat-icon cyan"><Icon name="users" size={23} /></span><div><strong>+500</strong><span>مشارك</span></div></div>
          <div className="stat-item"><span className="stat-icon orange"><Icon name="clock" size={23} /></span><div><strong>48+</strong><span>ساعة تطوير</span></div></div>
          <div className="stat-item"><span className="stat-icon purple"><Icon name="medal" size={23} /></span><div><strong>+10</strong><span>جائزة</span></div></div>
          <div className="stat-item"><span className="stat-icon green"><Icon name="target" size={23} /></span><div><strong>3</strong><span>مسارات</span></div></div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading">
            <div className="eyebrow"><Icon name="book" size={17} /> تعرّف علينا</div>
            <h2>عن <span className="gradient-text">الهاكاثون</span></h2>
            <p>تجربة تجمع التقنية والإبداع والعمل الجماعي، لتمنح الطلاب فرصة تطوير ألعاب رقمية مبتكرة خلال فترة زمنية محددة.</p>
          </div>
          <div className="about-layout">
            <div className="about-copy">
              <h3>ما هو الهاكاثون؟</h3>
              <p>الهاكاثون هو حدث برمجي مكثف يجتمع فيه المطورون والمصممون والمبدعون للعمل على مشاريع مبتكرة خلال فترة زمنية محددة.</p>
              <p>في هاكاثون الألعاب الإلكترونية GameX 2027، نركز على تطوير ألعاب تفاعلية في مجالات متنوعة تشمل الألعاب التعليمية والرياضية وألعاب الابتكار المفتوح.</p>
              <p>يوفر الهاكاثون بيئة تعليمية داعمة تتيح للمشاركين التعلم من بعضهم البعض ومن الموجهين المتخصصين، والعمل على تحويل أفكارهم إلى واقع.</p>
              <a className="text-link" href="#tracks">تعرّف على المسارات <Icon name="arrow" size={18} /></a>
            </div>
            <div className="about-highlight">
              <div className="highlight-top"><span className="highlight-mark"><Icon name="rocket" size={28} /></span><span className="small-label">من الفكرة إلى التجربة</span></div>
              <h3>مساحتك للإبداع والابتكار</h3>
              <p>طوّر مهاراتك، تعاون مع فريقك، واصنع مشروعًا يعكس فكرتك وشغفك بعالم الألعاب الرقمية.</p>
              <div className="highlight-bottom"><span><Icon name="check" size={17} /> تعلّم تطبيقي</span><span><Icon name="check" size={17} /> عمل جماعي</span><span><Icon name="check" size={17} /> ابتكار رقمي</span></div>
            </div>
          </div>
          <div className="goals-area">
            <div className="subheading"><span className="section-kicker">غايتنا</span><h3>أهداف الهاكاثون</h3><p>نحو تجربة تعليمية تترك أثرًا يتجاوز المنافسة.</p></div>
            <div className="goals-grid">
              {goals.map((goal, index) => <div className="goal-card" key={goal}><span className="goal-number">{String(index + 1).padStart(2, "0")}</span><span className="goal-check"><Icon name="check" size={17} /></span><p>{goal}</p></div>)}
            </div>
          </div>
          <div className="eligibility-grid">
            <article className="info-panel">
              <div className="panel-heading"><span className="panel-icon cyan"><Icon name="users" size={23} /></span><h3>من يمكنه المشاركة؟</h3></div>
              <ul className="clean-list">
                <li><Icon name="check" size={17} /> أن يكون الطالب في المرحلة المتوسطة أو الثانوية.</li>
                <li><Icon name="check" size={17} /> الالتزام بالمشاركة في مراحل الهاكاثون.</li>
                <li><Icon name="check" size={17} /> الموافقة على شروط وأحكام المسابقة.</li>
              </ul>
            </article>
            <article className="info-panel">
              <div className="panel-heading"><span className="panel-icon orange"><Icon name="shield" size={23} /></span><h3>القواعد والشروط</h3></div>
              <ul className="clean-list">
                <li><Icon name="check" size={17} /> أن يكون المشروع عملًا أصيلًا من إنتاج الفريق.</li>
                <li><Icon name="check" size={17} /> يتكون الفريق من ثلاثة إلى أربعة أعضاء.</li>
                <li><Icon name="check" size={17} /> الالتزام بالمواعيد النهائية لتسليم المشاريع.</li>
                <li><Icon name="check" size={17} /> احترام حقوق الملكية الفكرية وعدم نسخ محتوى الآخرين.</li>
                <li><Icon name="check" size={17} /> التعامل بأخلاقية واحترام جميع المشاركين.</li>
                <li><Icon name="check" size={17} /> تقديم مشروع واحد فقط لكل فريق.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section tracks-section" id="tracks">
          <div className="section-heading">
            <div className="eyebrow"><Icon name="gamepad" size={17} /> اختر مسارك</div>
            <h2>مسارات <span className="gradient-text">الهاكاثون</span></h2>
            <p>اختر المسار الذي يناسب اهتماماتك ومهاراتك وابدأ رحلتك في عالم تطوير الألعاب.</p>
          </div>
          <div className="tracks-grid">
            {tracks.map((track) => <article className={`track-card ${track.color}`} key={track.id}>
              <div className="track-card-top"><span className="track-icon"><Icon name={track.icon} size={30} /></span><span className="track-index">{track.number}</span></div>
              <h3>{track.title}</h3><span className="track-english">{track.english}</span>
              <p className="track-description">{track.description}</p>
              <div className="examples-heading">أمثلة على المشاريع</div>
              <ul className="examples-list">{track.examples.map((example) => <li key={example}><span />{example}</li>)}</ul>
              <a className="track-link" href={REGISTRATION_URL} target="_blank" rel="noreferrer">سجّل في هذا المسار <Icon name="arrow" size={18} /></a>
            </article>)}
          </div>
        </section>

        <section className="section stages-section" id="stages">
          <div className="section-heading">
            <div className="eyebrow"><Icon name="calendar" size={17} /> رحلتك في GameX</div>
            <h2>مراحل <span className="gradient-text">الهاكاثون</span></h2>
            <p>تعرّف على المراحل الأربع الرئيسية للهاكاثون وما يُتوقع منك في كل مرحلة.</p>
          </div>
          <div className="timeline">
            {stages.map((stage) => <article className="stage-card" key={stage.number}>
              <div className="stage-marker"><Icon name={stage.icon} size={23} /></div>
              <div className="stage-content"><span className="stage-number">المرحلة {Number(stage.number)}</span><h3>{stage.title}</h3><span className="stage-english">{stage.english}</span><p>{stage.description}</p></div>
            </article>)}
          </div>
          <div className="stage-notes">
            <article className="note-card"><span className="note-icon cyan"><Icon name="calendar" size={23} /></span><div><h3>المواعيد النهائية</h3><p>يجب الالتزام بالمواعيد المحددة لكل مرحلة. لن تُقبل التسليمات المتأخرة.</p></div></article>
            <article className="note-card"><span className="note-icon orange"><Icon name="mail" size={23} /></span><div><h3>التواصل والتحديثات</h3><p>تتم مشاركة التحديثات والإشعارات عبر البريد الإلكتروني المسجل.</p></div></article>
          </div>
        </section>

        <section className="final-cta">
          <div className="cta-glow" /><div className="cta-content">
            <span className="eyebrow"><Icon name="sparkles" size={17} /> فكرتك تستحق أن تُرى</span>
            <h2>هل أنت مستعد لصناعة <span className="gradient-text">لعبتك القادمة؟</span></h2>
            <p>اجمع فريقك، اختر مسارك، وابدأ رحلتك في عالم تطوير الألعاب.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={REGISTRATION_URL} target="_blank" rel="noreferrer">سجّل الآن <Icon name="arrow" size={19} /></a>
              <a className="button button-secondary" href={SUBMISSION_URL} target="_blank" rel="noreferrer">رفع المشاركة <Icon name="rocket" size={19} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="brand footer-logo" href="#home"><img src="/gamex-logo-dark.png" alt="GameX" /><span>هاكاثون الألعاب الإلكترونية GameX 2027</span></a>
            <p>منصة للطلاب لإطلاق إبداعهم وتطوير ألعاب مبتكرة مع فرقهم، والانضمام إلى مجتمع من المطورين الشباب.</p>
          </div>
          <div className="footer-links"><h3>روابط سريعة</h3><a href="#about">عن الهاكاثون</a><a href="#tracks">المسارات</a><a href="#stages">المراحل</a></div>
          <div className="footer-contact"><h3>تواصل معنا</h3><a href="mailto:jedgif@mkhg.moe.gov.sa"><Icon name="mail" size={18} /> jedgif@mkhg.moe.gov.sa</a><span><Icon name="pin" size={18} /> جدة – المملكة العربية السعودية</span></div>
        </div>
        <div className="footer-bottom"><span>© GameX 2027. جميع الحقوق محفوظة.</span><a href="#home">العودة للأعلى ↑</a></div>
      </footer>
    </div>
  );
}

export default App;
