import React from "react";

// ─── Google Fonts ─────────────────────────────────────────────────────────────
const FONT_URL = "https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap";

// ─── Data ─────────────────────────────────────────────────────────────────────
const EVENT_META = [
  { label: "開催日", value: "2026年5月6日（水・振休）" },
  { label: "時間",   value: "12:30 - 18:00" },
  { label: "ブース", value: "（ブース番号確定後に更新予定）/ mosslet" },
];

const PRICING = [
  { label: "1枚",          price: "100",   unit: "円" },
  { label: "12枚フルセット", price: "1,000", unit: "円" },
];

const EXCHANGE_RULES = [
  "交換は mosslet ブースとの1対1交換のみです",
  "自作ポストカードをお持ちの方のみご参加いただけます",
  "異なる絵柄1枚につき1枚交換・最大3絵柄まで（同じ絵柄を複数枚お持ちいただいても1枚のみの交換となります）",
  "当方ポストカードも絵柄ごとに1枚まで。同一絵柄を複数枚交換することはできません",
  "印刷方法や用紙は問いません",
];

const NOTICES = [
  "ブースをご覧になる際は、お隣のブースにはみ出さないようお願いいたします。",
  "通路を塞がないようご配慮ください。混雑時にはお声がけや列整理をさせていただく場合があります。",
  "ブースの撮影は可能ですが、他の参加者様・スタッフ・作者本人が写り込まないようご配慮をお願いいたします。混雑時の撮影はご遠慮ください。",
];

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
  --sage-bg: #eaf0e8;
  --sage-border: #c4d9c0;
  --amber-bg: #fef8e8;
  --amber-border: #f4e099;
  --amber-text: #7a5710;
}
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: var(--font-body);
  background: var(--bg);
  color: var(--body);
  -webkit-font-smoothing: antialiased;
}
`;

const IconArrow = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
);

const IconInfo = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
);

const IconWarn = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
);

// プロパティの型定義（TypeScriptエラー回避用）
interface SectionHeadProps { eyebrow: string; title: string; id: string; }

const SectionHead = ({ eyebrow, title, id }: SectionHeadProps) => (
  <div style={{ marginBottom: "2.5rem" }}>
    <span style={{ display: "inline-flex", padding: "3px 12px", borderRadius: "999px", fontSize: "11px", fontWeight: 600, background: "var(--sage-bg)", color: "var(--sage)", border: "1px solid var(--sage-border)" }}>{eyebrow}</span>
    <h2 id={id} style={{ marginTop: "0.75rem", fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--ink)" }}>{title}</h2>
    <div style={{ height: "1px", background: "var(--border)", marginTop: "1.5rem" }} />
  </div>
);

export default function App() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href={FONT_URL} rel="stylesheet" />
      <style>{GLOBAL_CSS}</style>

      <nav style={{ position: "sticky", top: 0, zIndex: 40, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 1.5rem", height: "3.25rem", background: "rgba(247,245,240,0.88)", borderBottom: "1px solid var(--border)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)" } as any}>
        <span style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}>mosslet</span>
        <span style={{ fontSize: "11px", color: "var(--muted)" }}>生成AIなんでも展示会 Vol.5</span>
      </nav>

      <main style={{ maxWidth: "72rem", margin: "0 auto", padding: "2rem 1.5rem" }}>
        <header style={{ padding: "4rem 0" }}>
          <p style={{ fontSize: "11px", fontWeight: 600, color: "var(--sage)", marginBottom: "1rem" }}>Booth Exhibition Notice — mosslet</p>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 4rem)", color: "var(--ink)", lineHeight: 1.2 }}>生成AIなんでも展示会 Vol.5 出展のお知らせ</h1>
          <p style={{ marginTop: "2rem", lineHeight: 1.8 }}>テーマは「作る楽しさを広げる」。全12絵柄のポストカードを展示・販売、さらに交換企画も行います。</p>
        </header>

        <section style={{ padding: "4rem 0" }}>
          <SectionHead eyebrow="Exhibition & Sales" title="展示・販売について" id="purchase" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
            {PRICING.map(p => (
              <div key={p.label} style={{ background: "white", padding: "1.5rem", borderRadius: "1rem", border: "1px solid var(--border)" }}>
                <div style={{ fontSize: "11px", color: "var(--muted)" }}>{p.label}</div>
                <div style={{ fontSize: "2rem", fontFamily: "var(--font-display)" }}>{p.price}<span style={{ fontSize: "1rem" }}>{p.unit}</span></div>
              </div>
            ))}
            <div style={{ background: "var(--sage-bg)", padding: "1.5rem", borderRadius: "1rem", color: "var(--sage)" }}>
              <IconInfo /><p style={{ fontSize: "13px", marginTop: "0.5rem", color: "var(--ink)" }}>お支払いは現金のみです。</p>
            </div>
          </div>
        </section>

        <section style={{ padding: "4rem 0" }}>
          <SectionHead eyebrow="Card Exchange" title="ポストカード交換企画" id="exchange" />
          <div style={{ background: "white", padding: "1.5rem", borderRadius: "1rem", border: "1px solid var(--border)" }}>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {EXCHANGE_RULES.map((r, i) => (
                <li key={i} style={{ display: "flex", gap: "1rem", marginBottom: "1rem", fontSize: "14px" }}>
                  <span style={{ background: "var(--sage-bg)", color: "var(--sage)", width: "1.5rem", height: "1.5rem", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i+1}</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <a href="https://canva.link/z0sz1nkhmn14nud" target="_blank" style={{ background: "var(--ink)", color: "white", padding: "10px", borderRadius: "20px", textAlign: "center", textDecoration: "none", fontSize: "13px" }}>縦型テンプレート取得 <IconArrow /></a>
              <a href="https://canva.link/vvdbm7te2p71ir4" target="_blank" style={{ background: "var(--ink)", color: "white", padding: "10px", borderRadius: "20px", textAlign: "center", textDecoration: "none", fontSize: "13px" }}>横型テンプレート取得 <IconArrow /></a>
            </div>
          </div>
        </section>

        <section style={{ padding: "4rem 0" }}>
          <SectionHead eyebrow="Notes" title="当日のお願い" id="notices" />
          <div style={{ background: "var(--amber-bg)", padding: "1.5rem", borderRadius: "1rem", color: "var(--amber-text)", display: "flex", gap: "1rem" }}>
            <IconWarn />
            <div style={{ fontSize: "13px" }}>混雑時は列整理にご協力ください。他の方の写り込みに注意して撮影をお願いします。</div>
          </div>
        </section>
      </main>

      <footer style={{ background: "var(--ink)", color: "white", padding: "4rem 1.5rem", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem" }}>う1 / mosslet でお待ちしております</p>
        <p style={{ opacity: 0.5, fontSize: "11px", marginTop: "2rem" }}>© 2026 mosslet</p>
      </footer>
    </>
  );
}