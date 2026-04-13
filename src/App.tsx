import React from "react";

// ─── Google Fonts ─────────────────────────────────────────────────────────────
const FONT_URL = "https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap";

// ─── Data ─────────────────────────────────────────────────────────────────────
const EVENT_META = [
  { label: "開催日", value: "2026年5月6日（水・振休）" },
  { label: "時間",   value: "12:30 - 18:00" },
  { label: "会場",   value: "すみだ産業会館 8F サンライズホール (錦糸町駅 徒歩1分)" },
  { label: "ブース", value: "え-10 / mosslet" },
];

const PRICING = [
  { label: "1枚",          price: "100",   unit: "円" },
  { label: "12枚フルセット", price: "1,000", unit: "円" },
];

const EXCHANGE_RULES = [
  "交換は mosslet ブースとの1対1交換のみです",
  "自作ポストカードをお持ちの方のみご参加いただけます",
  "異なる絵柄1枚につき1枚交換・最大3絵柄まで（同一絵柄の重複不可）",
  "印刷方法や用紙は問いません",
];

const NOTICES = [
  "ブースをご覧になる際は、お隣のブースにはみ出さないようお願いいたします。",
  "通路を塞がないようご配慮ください。混雑時にはお声がけや列整理をさせていただく場合があります。",
  "ブース前に待機列が発生した場合は、当方にて整理・誘導いたします。ご協力をお願いいたします。",
  "ブースの撮影は可能ですが、他の参加者様・スタッフ・作者本人が写り込まないようご配慮をお願いいたします。混雑時の撮影はご遠慮ください。",
];

const MENU_ITEMS = [
  {
    title: "野原にて",
    subtitle: "Where Wildflowers Keep Their Secrets",
    desc: "野の花が秘密を守る場所。\n少女たちは、まだ名前のない季節の中で微笑む。",
    tag: "",
    images: ["/images/1-01.png", "/images/1-02.png", "/images/1-03.png"]
  },
  {
    title: "幸福の訪れを告げる",
    subtitle: "A Whisper Carried on Blue Wings",
    desc: "青い羽が運ぶのは、春の訪れの気配。\n言葉にならないやさしい知らせ。",
    tag: "",
    images: ["/images/2-01.png", "/images/2-02.png", "/images/2-03.png"]
  },
  {
    title: "別れを飛び越えて",
    subtitle: "Beyond the Garden of Farewells",
    desc: "別れは終わりではなく、やわらかな通う道。\n花の園を越えた先で、また巡り会うために。",
    tag: "",
    images: ["/images/3-01.png", "/images/3-02.png", "/images/3-04.png"]
  },
  {
    title: "なんかいい",
    subtitle: "Small Comforts in Quiet Afternoons",
    desc: "ぬくもりは、ささやかな時間の中にある。\n甘いものと、少しの夢。",
    tag: "なんかいい展2 人気シリーズ",
    images: ["/images/4-01.png", "/images/4-02.png", "/images/4-03.png"]
  }
];

// ─── Shared CSS ───────────────────────────────────────────────────────────────
const GLOBAL_CSS = `
:root {
  --font-display: 'DM Serif Display', Georgia, 'Times New Roman', serif;
  --font-body:    'DM Sans', system-ui, sans-serif;
  --bg:           #f7f5f0;
  --bg-alt:       #eeeae2;
  --card:         #ffffff;
  --ink:          #19170f;
  --body:         #4b4740;
  --muted:        #98928a;
  --border:       #e2ddd5;
  --sage:         #3a6144;
  --sage-bg:      #eaf0e8;
  --sage-border:  #c4d9c0;
  --amber-bg:     #fef8e8;
  --amber-border: #f4e099;
  --amber-text:   #7a5710;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: var(--font-body);
  background: var(--bg);
  color: var(--body);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

:focus-visible {
  outline: 2px solid var(--sage);
  outline-offset: 3px;
  border-radius: 4px;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

.text-pretty { text-wrap: pretty; }
.link-btn { transition: opacity 150ms ease-out; }
.link-btn:hover { opacity: 0.78; }

.nav-blur {
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
}

.hero-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; align-items: flex-end; }
@media (min-width: 960px) { .hero-grid { grid-template-columns: minmax(0,1.4fr) minmax(0,0.7fr); gap: 4rem; } }

.pricing-grid { display: grid; grid-template-columns: 1fr; gap: 1rem; }
@media (min-width: 640px) { .pricing-grid { grid-template-columns: 1fr 1fr; } }

.exchange-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; }
@media (min-width: 900px) { .exchange-grid { grid-template-columns: minmax(0,1.2fr) minmax(280px,0.8fr); } }

/* ─── Menu Section Layout (Refactored) ─── */
.menu-row { 
  display: flex; 
  flex-direction: column; 
  gap: 1.5rem; 
  padding-bottom: 3.5rem; 
  margin-bottom: 3.5rem; 
  border-bottom: 1px solid var(--border); 
}
@media (min-width: 768px) { 
  .menu-row { 
    flex-direction: row; 
    align-items: flex-start; 
    gap: 3rem; 
  }
  .menu-row-text { 
    flex: 1; 
    min-width: 250px; 
    position: sticky; /* PCではテキストを追従させる */
    top: 5rem; 
  }
  .menu-row-visuals { 
    flex: 2.2; 
    min-width: 0; /* Flexboxのはみ出し防止 */
  }
}

/* モバイル: 横スクロールカルーセル / PC: 3列グリッド */
.menu-images { 
  display: flex; 
  gap: 1rem; 
  overflow-x: auto; 
  scroll-snap-type: x mandatory; 
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; /* Firefox */
  /* コンテナのpaddingを打ち消して画面端までスワイプ可能に */
  margin: 0 calc(-1 * clamp(1.5rem, 5vw, 4rem));
  padding: 0 clamp(1.5rem, 5vw, 4rem) 1rem clamp(1.5rem, 5vw, 4rem);
}
.menu-images::-webkit-scrollbar { display: none; /* Chrome/Safari */ }
.menu-images > * { 
  /* モバイル時は次の画像が少し見える幅に設定 */
  flex: 0 0 calc(85vw - clamp(1.5rem, 5vw, 4rem)); 
  max-width: 320px;
  scroll-snap-align: center; 
}

@media (min-width: 640px) { 
  .menu-images { 
    display: grid; 
    grid-template-columns: repeat(3, 1fr); 
    overflow-x: visible; 
    margin: 0; 
    padding: 0; 
  }
  .menu-images > * { 
    flex: auto; 
    max-width: none; 
  }
}

/* 画像ラッパーとホバーアニメーション */
.img-wrapper {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  background: rgba(0,0,0,0.03);
  isolation: isolate; /* Safariの角丸バグ防止 */
}
.img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s cubic-bezier(0.33, 1, 0.68, 1);
}
@media (hover: hover) {
  .img-wrapper:hover img { transform: scale(1.04); }
}

.aspect-portrait { aspect-ratio: 2 / 3; }
.aspect-square { aspect-ratio: 1 / 1; }

.canvas-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
@media (min-width: 640px) { .canvas-grid { grid-template-columns: repeat(4, 1fr); } }
`;

// ─── Icons ───
const IconArrow = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    <path d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
);

const IconWarn = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: "2px", flexShrink: 0 }} aria-hidden="true" focusable="false">
    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
    <line x1="12" y1="9" x2="12" y2="13"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);

const IconInfo = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: "2px", flexShrink: 0 }} aria-hidden="true" focusable="false">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="16" x2="12" y2="12"/>
    <line x1="12" y1="8" x2="12.01" y2="8"/>
  </svg>
);

// ─── Primitives ───
const Tag = ({ children }) => (
  <span style={{ display: "inline-flex", alignItems: "center", padding: "3px 12px", borderRadius: "999px", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", background: "var(--sage-bg)", color: "var(--sage)", border: "1px solid var(--sage-border)" }}>
    {children}
  </span>
);

const Rule = () => <div aria-hidden="true" style={{ height: "1px", background: "var(--border)", margin: "1.5rem 0 0" }} />;

const SectionHead = ({ eyebrow, title, id }) => (
  <div style={{ marginBottom: "2.5rem" }}>
    <Tag>{eyebrow}</Tag>
    <h2 id={id} style={{ marginTop: "0.75rem", fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(1.75rem, 4vw, 2.5rem)", lineHeight: 1.15, color: "var(--ink)", wordBreak: "keep-all", overflowWrap: "anywhere" }}>
      {title}
    </h2>
    <Rule />
  </div>
);

const Card = ({ children, style, className }) => (
  <div className={className} style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "1.5rem", boxShadow: "0 1px 12px rgba(0,0,0,0.05)", ...style }}>
    {children}
  </div>
);

// ─── Nav ───
const Nav = () => (
  <nav aria-label="サイトナビゲーション" className="nav-blur" style={{ position: "sticky", top: 0, zIndex: 40, display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "space-between", padding: "0 clamp(1.5rem, 5vw, 4rem)", height: "3.25rem", background: "rgba(247,245,240,0.88)", borderBottom: "1px solid var(--border)" }}>
    <span style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--ink)", letterSpacing: "0.01em" }}>mosslet</span>
    <span style={{ fontSize: "11px", color: "var(--muted)", letterSpacing: "0.08em" }}>生成AIなんでも展示会 Vol.5</span>
  </nav>
);

// ─── Hero ───
const Hero = () => (
  <header style={{ background: "var(--bg)", overflow: "hidden", position: "relative" }}>
    <div aria-hidden="true" style={{ position: "absolute", top: 0, right: 0, width: "min(560px, 80vw)", height: "min(560px, 80vw)", background: "radial-gradient(circle at 65% 25%, rgba(58,97,68,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
    <div className="hero-grid" style={{ position: "relative", maxWidth: "72rem", margin: "0 auto", padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem) clamp(3.5rem, 7vw, 6rem)" }}>
      <div>
        <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--sage)", marginBottom: "1.5rem" }}>
          Booth Exhibition Notice — mosslet
        </p>
        <h1>
          <span style={{ display: "block", fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)", lineHeight: 1.15, color: "var(--ink)", wordBreak: "keep-all", overflowWrap: "break-word" }}>生成AIなんでも展示会 Vol.5</span>
          <span style={{ display: "block", marginTop: "0.5em", fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "clamp(1rem, 2.5vw, 1.375rem)", letterSpacing: "0.06em", color: "var(--muted)" }}>出展のお知らせ</span>
        </h1>
        <p className="text-pretty" style={{ marginTop: "2rem", fontSize: "clamp(0.9rem, 2vw, 1.0625rem)", lineHeight: 1.9, color: "var(--body)" }}>
          テーマは<strong style={{ color: "var(--ink)", fontWeight: 600 }}>「作る楽しさを広げる」</strong>。<br />
          生成AIで制作した全12絵柄のポストカードを展示・販売します。ご来場者とのポストカード交換企画も実施予定です。
        </p>
      </div>

      <aside aria-label="開催情報" style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "1.5rem", boxShadow: "0 1px 12px rgba(0,0,0,0.05)", padding: "clamp(1.25rem, 3vw, 1.75rem)" }}>
        <p style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "1rem" }}>開催情報</p>
        {EVENT_META.map(({ label, value }, i) => (
          <div key={label} style={{ display: "flex", gap: "1rem", padding: "0.75rem 0", borderTop: i !== 0 ? "1px solid var(--border)" : "none" }}>
            <span style={{ fontSize: "11px", fontWeight: 500, color: "var(--muted)", flexShrink: 0, width: "3.25rem", paddingTop: "2px", letterSpacing: "0.04em" }}>{label}</span>
            <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--ink)", lineHeight: 1.6 }}>{value}</span>
          </div>
        ))}
      </aside>
    </div>
  </header>
);

// ─── Menu (Refactored) ───
const MenuSection = () => (
  <section aria-labelledby="menu-heading" style={{ background: "var(--bg-alt)", padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)", borderTop: "1px solid var(--border)" }}>
    <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
      <SectionHead eyebrow="Whispers of Spring Collection" title="お品書き" id="menu-heading" />
      
      <div style={{ marginBottom: "3rem" }}>
        <h3 style={{ fontSize: "1.125rem", fontWeight: 600, color: "var(--ink)", marginBottom: "0.5rem" }}>Whispers of Spring and Fur Postcard Collection</h3>
        <p style={{ fontSize: "0.9375rem", color: "var(--body)" }}>5月の花々と動物要素を持つ少女たちをテーマにしたポストカード</p>
      </div>

      <div>
        {MENU_ITEMS.map((item, index) => (
          <div key={index} className="menu-row">
            <div className="menu-row-text">
              <h4 style={{ fontSize: "1.125rem", fontWeight: 600, color: "var(--ink)", marginBottom: "0.25rem" }}>{item.title}</h4>
              <p style={{ fontSize: "0.6875rem", fontWeight: 600, color: "var(--muted)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "1rem" }}>{item.subtitle}</p>
              
              {item.tag && (
                <span style={{ display: "inline-block", fontSize: "0.6875rem", fontWeight: 600, color: "var(--body)", border: "1px solid var(--border)", padding: "2px 8px", borderRadius: "4px", marginBottom: "1rem", background: "var(--card)" }}>
                  {item.tag}
                </span>
              )}
              
              <p className="text-pretty" style={{ fontSize: "0.875rem", lineHeight: 1.85, color: "var(--body)", whiteSpace: "pre-wrap" }}>
                {item.desc}
              </p>
            </div>
            <div className="menu-row-visuals menu-images">
              {item.images.map((img, i) => (
                <div key={i} className="img-wrapper aspect-portrait">
                  <img 
                    src={img} 
                    alt={`${item.title} の作品画像 ${i + 1}`} 
                    loading="lazy" 
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "1.5rem", padding: "clamp(1.5rem, 4vw, 2.5rem)" }}>
          <div className="menu-row" style={{ borderBottom: "none", paddingBottom: 0, marginBottom: 0 }}>
            <div className="menu-row-text">
              <h4 style={{ fontSize: "1.125rem", fontWeight: 600, color: "var(--ink)", marginBottom: "0.5rem" }}>Fragments of a Printing Study</h4>
              <p className="text-pretty" style={{ fontSize: "0.875rem", lineHeight: 1.85, color: "var(--body)", marginBottom: "1rem" }}>
                UV印刷によるキャンバス作品。<br />下地や発色の違いを試しながら、表現の可能性を探りました。
              </p>
              <span style={{ display: "inline-block", fontSize: "0.6875rem", fontWeight: 700, color: "var(--ink)", border: "1px solid var(--ink)", padding: "2px 8px", borderRadius: "4px" }}>
                ※展示のみ
              </span>
            </div>
            <div className="menu-row-visuals canvas-grid">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="img-wrapper aspect-square">
                  <img 
                    src={`/images/5-0${num}.png`} 
                    alt={`キャンバス作品 ${num}`} 
                    loading="lazy" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ─── Purchase ───
const PurchaseSection = () => (
  <section aria-labelledby="purchase-heading" style={{ background: "var(--bg)", padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)" }}>
    <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
      <SectionHead eyebrow="Exhibition & Sales" title="展示・販売について" id="purchase-heading" />
      <div>
        <p className="text-pretty" style={{ fontSize: "0.9375rem", lineHeight: 1.9, color: "var(--body)", marginBottom: "1.75rem" }}>
          当ブースでは、展示しているポストカードをその場でご購入いただけます。
        </p>
        <div className="pricing-grid" style={{ marginBottom: "1rem" }}>
          {PRICING.map(({ label, price, unit }) => (
            <Card key={label} style={{ padding: "clamp(1.5rem, 3vw, 2rem)", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)" }}>{label}</span>
              <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(2.5rem, 6vw, 3.5rem)", color: "var(--ink)", fontVariantNumeric: "tabular-nums", lineHeight: 1 }}>{price}</span>
                <span style={{ fontSize: "1.125rem", color: "var(--body)" }}>{unit}</span>
              </div>
            </Card>
          ))}
        </div>
        <div role="note" aria-label="お支払いについて" style={{ background: "var(--sage-bg)", border: "1px solid var(--sage-border)", borderRadius: "1.5rem", padding: "1.25rem 1.5rem", display: "flex", gap: "0.75rem", color: "var(--sage)" }}>
          <IconInfo />
          <div>
            <h3 style={{ fontSize: "0.8125rem", fontWeight: 600, marginBottom: "0.375rem" }}>お支払いについて</h3>
            <p className="text-pretty" style={{ fontSize: "0.8125rem", lineHeight: 1.85, color: "var(--ink)" }}>お支払いは<strong style={{ fontWeight: 600 }}> 現金のみ </strong>です。小銭や千円札でのお支払いにご協力いただけますと助かります。</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ─── Exchange ───
const ExchangeSection = () => (
  <section aria-labelledby="exchange-heading" style={{ background: "var(--bg-alt)", padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)" }}>
    <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
      <SectionHead eyebrow="Card Exchange" title="ポストカード交換企画" id="exchange-heading" />
      <div className="exchange-grid">
        <div>
          <p className="text-pretty" style={{ fontSize: "0.9375rem", lineHeight: 1.9, color: "var(--body)", marginBottom: "1.75rem" }}>
            「作る楽しさを広げる」試みとして、ご自身で制作したポストカードとの交換企画を行います。ブース内限定の小さな交換企画です。
          </p>
          <Card style={{ padding: "clamp(1.25rem, 3vw, 2rem)" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "1.125rem", color: "var(--ink)", marginBottom: "1.25rem" }}>参加ルール</h3>
            <ul role="list" style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {EXCHANGE_RULES.map((rule, i) => (
                <li key={i} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
                  <span aria-hidden="true" style={{ flexShrink: 0, display: "inline-flex", alignItems: "center", justifyContent: "center", width: "1.375rem", height: "1.375rem", borderRadius: "50%", background: "var(--sage-bg)", color: "var(--sage)", fontSize: "10px", fontWeight: 700, fontVariantNumeric: "tabular-nums", marginTop: "2px" }}>{i + 1}</span>
                  <span className="text-pretty" style={{ fontSize: "0.875rem", lineHeight: 1.85, color: "var(--body)" }}>{rule}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div role="note" style={{ background: "var(--amber-bg)", border: "1px solid var(--amber-border)", borderRadius: "1.5rem", padding: "1.25rem 1.5rem", display: "flex", gap: "0.75rem", color: "var(--amber-text)" }}>
            <IconWarn />
            <div>
              <h3 style={{ fontSize: "0.8125rem", fontWeight: 600, marginBottom: "0.375rem" }}>ご注意</h3>
              <p className="text-pretty" style={{ fontSize: "0.8125rem", lineHeight: 1.85 }}>この企画は<strong style={{ fontWeight: 600 }}> mosslet </strong>ブース限定です。来場者同士での交換・配布や、他サークル様への交換交渉はご遠慮ください。</p>
            </div>
          </div>

          <Card style={{ padding: "1.5rem" }}>
            <h3 style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--ink)", marginBottom: "0.625rem" }}>交換用カードがない方へ</h3>
            <p className="text-pretty" style={{ fontSize: "0.8125rem", lineHeight: 1.85, color: "var(--body)", marginBottom: "1rem" }}>ご自身の画像でコンビニ印刷できるネットプリント用Canvaテンプレートをご用意しています。</p>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <a href="https://canva.link/z0sz1nkhmn14nud" target="_blank" rel="noopener noreferrer" className="link-btn" style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "8px 16px", borderRadius: "999px", fontSize: "0.8125rem", fontWeight: 500, background: "var(--ink)", color: "#fff", textDecoration: "none" }}>
                ポストカード縦型テンプレートを取得 <IconArrow />
              </a>
              <a href="https://canva.link/vvdbm7te2p71ir4" target="_blank" rel="noopener noreferrer" className="link-btn" style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "8px 16px", borderRadius: "999px", fontSize: "0.8125rem", fontWeight: 500, background: "var(--ink)", color: "#fff", textDecoration: "none" }}>
                ポストカード横型テンプレートを取得 <IconArrow />
              </a>
            </div>

            <div style={{ marginTop: "1.5rem", borderTop: "1px solid var(--border)", paddingTop: "1.25rem" }}>
              <h4 style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--ink)", marginBottom: "0.5rem" }}>【テンプレートの使い方】</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem", marginBottom: "1.25rem" }}>
                {[
                  "ご自身で生成・制作した画像をフレーム内に配置します。",
                  "下部のテキスト（Crafted by your name | X: @your name）をご自身の名義・Xアカウントに変更します。",
                  "画像をPDF（印刷用）でダウンロードし、ネットプリントに登録します。"
                ].map((text, index) => (
                  <div key={index} style={{ display: "flex", gap: "0.375rem", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "0.8125rem", lineHeight: 1.85, color: "var(--body)", fontWeight: 600, fontVariantNumeric: "tabular-nums" }}>{index + 1}.</span>
                    <span style={{ fontSize: "0.8125rem", lineHeight: 1.85, color: "var(--body)" }}>{text}</span>
                  </div>
                ))}
              </div>

              <h4 style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--ink)", marginBottom: "0.5rem" }}>【コンビニ印刷時のご注意】</h4>
              <p className="text-pretty" style={{ fontSize: "0.8125rem", lineHeight: 1.85, color: "var(--body)" }}>
                コンビニのコピー機は端まで印刷（フチなし印刷）ができないため、テンプレートはあらかじめ余白分を計算したデザインになっています。<br />
                印刷設定では「小さめ」などの縮小機能は選ばず、必ず<strong style={{ color: "var(--ink)", fontWeight: 600 }}>「そのままのサイズ（原寸）」</strong>で印刷してください。
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </section>
);

// ─── Notices ───
const NoticesSection = () => (
  <section aria-labelledby="notice-heading" style={{ background: "var(--bg)", padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)" }}>
    <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
      <SectionHead eyebrow="Notes & Reminders" title="当日のお願い" id="notice-heading" />
      <Card style={{ padding: "clamp(1.5rem, 4vw, 2.5rem)" }}>
        <p className="text-pretty" style={{ fontSize: "0.875rem", lineHeight: 1.9, color: "var(--body)", marginBottom: "1.5rem" }}>半スペースでの出展のため、当日は以下にご協力をお願いいたします。</p>
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {NOTICES.map((notice, i) => (
            <li key={i} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
              <span aria-hidden="true" style={{ flexShrink: 0, width: "6px", height: "6px", borderRadius: "50%", background: "var(--muted)", marginTop: "0.6rem" }} />
              <span className="text-pretty" style={{ fontSize: "0.875rem", lineHeight: 1.9, color: "var(--body)" }}>{notice}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  </section>
);

// ─── Footer ───
const Footer = () => (
  <footer style={{ background: "var(--ink)", color: "rgba(247,245,240,0.9)", padding: "clamp(3.5rem, 7vw, 5.5rem) clamp(1.5rem, 5vw, 4rem)" }}>
    <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", marginBottom: "2.5rem" }}>
        <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 5vw, 3rem)", lineHeight: 1.25 }}>
          見るだけでも、<br />交換だけでも、<br /><span style={{ opacity: 0.5 }}>購入だけでも歓迎です。</span>
        </p>
        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <a href="https://x.com/kadan_niwa" target="_blank" rel="noopener noreferrer" className="link-btn" style={{ color: "#fff", textDecoration: "none", fontSize: "0.9375rem", fontWeight: 500, display: "inline-flex", alignItems: "center", gap: "0.375rem" }}>
            X (Twitter) <IconArrow />
          </a>
          <a href="https://beacons.ai/kadan" target="_blank" rel="noopener noreferrer" className="link-btn" style={{ color: "#fff", textDecoration: "none", fontSize: "0.9375rem", fontWeight: 500, display: "inline-flex", alignItems: "center", gap: "0.375rem" }}>
            Beacons <IconArrow />
          </a>
          <a href="https://www.genai-expo.com/" target="_blank" rel="noopener noreferrer" className="link-btn" style={{ color: "#fff", textDecoration: "none", fontSize: "0.9375rem", fontWeight: 500, display: "inline-flex", alignItems: "center", gap: "0.375rem" }}>
            公式サイト <IconArrow />
          </a>
        </div>
      </div>

      <div style={{ marginBottom: "2.5rem", borderRadius: "1rem", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)" }}>
        <iframe
          title="Google Maps: すみだ産業会館"
          src="https://maps.google.co.jp/maps?q=東京都墨田区向島3丁目36-7+すみだ産業会館&output=embed"
          width="100%"
          height="320"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div style={{ padding: "1.25rem" }}>
          <p style={{ fontSize: "0.9375rem", color: "#fff", marginBottom: "0.375rem", fontWeight: 500 }}>すみだ産業会館 8F サンライズホール (錦糸町駅 徒歩1分)</p>
          <p style={{ fontSize: "0.8125rem", opacity: 0.7 }}>〒131-0033 東京都墨田区向島3丁目36-7</p>
        </div>
      </div>

      <div aria-hidden="true" style={{ height: "1px", background: "rgba(255,255,255,0.1)", marginBottom: "1.75rem" }} />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem 2rem", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ fontSize: "0.8125rem", opacity: 0.45 }}>え-10 / mosslet にてお待ちしております</p>
        <p style={{ fontSize: "11px", opacity: 0.25 }}>© 2026 mosslet</p>
      </div>
    </div>
  </footer>
);

// ─── App ───
export default function App() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href={FONT_URL} rel="stylesheet" />
      <style>{GLOBAL_CSS}</style>
      <a href="#main-content" style={{ position: "absolute", left: "-9999px", top: "1rem", zIndex: 9999, padding: "0.5rem 1rem", background: "var(--sage)", color: "#fff", borderRadius: "4px", fontSize: "0.875rem", textDecoration: "none" }} onFocus={(e) => { e.currentTarget.style.left = "1rem"; }} onBlur={(e) => { e.currentTarget.style.left = "-9999px"; }}>
        メインコンテンツへスキップ
      </a>
      <Nav />
      <main id="main-content">
        <Hero />
        <MenuSection />
        <PurchaseSection />
        <ExchangeSection />
        <NoticesSection />
      </main>
      <Footer />
    </>
  );
}