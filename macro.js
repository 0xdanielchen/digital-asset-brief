// 美元指數與美債利差，每日一筆，最新的放最前面。每日排程只在陣列最前面加一個物件。
// 欄位：date（台北日期）、zh / en：{asof, rows[[指標, 最新, 變動]], regime, driver, view, outlook[], note}、links[[名稱, 網址, 是否次級來源]]
window.MACRO = [
{
 date: "2026-11-17",
 zh: {
  asof: "資料截至 11/16 美股收盤；殖利率為 11/13 財政部數字",
  rows: [["美元指數 DXY","約 103.5","日 +0.1% 至 +0.2%；近一週 +1.28%"],["美債 10 年期","5.15%","一週 +29 bp"],["美債 2 年期","4.88%","一週 +37 bp"],["10Y−2Y 利差","27 bp","一週 −8 bp（11/6 為 35 bp）"]],
  regime: "美元走強、利差收窄（2 年期升得比 10 年期快）",
  driver: "緊縮預期升溫，資金成本被抬高，是流動性最緊的組合。",
  view: "過去一週短端利率升幅大於長端，美元同步創 2025 年 4 月以來新高，市場在為聯準會升息定價。這個組合下，高估值科技股與加密資產通常同步承壓；那斯達克 11/16 下跌 2.49%，已進入修正區間。",
  outlook: ["短端利率若續升、利差再收窄，仍停留在這個象限，風險資產壓力延續。","觀察 10 年期能否站穩 5% 以上：11/16 市場報價回落約 4 bp 到 5.115%，若長端回落而短端不動，利差會再壓縮。","對穩定幣業務：短端利率走高會提高美元穩定幣準備資產的收益，發行人與銀行之間收益歸屬的問題會更受關注。"],
  note: "象限以近一週變動判斷。DXY 無免費官方來源，引用市場報價，各家略有出入。以上為市場觀察，不構成投資建議。"
 },
 en: {
  asof: "Data to the US close on 16 Nov; yields are US Treasury figures for 13 Nov",
  rows: [["US Dollar Index (DXY)","about 103.5","+0.1% to +0.2% on the day; +1.28% over the past week"],["US 10-year yield","5.15%","+29 bp over the week"],["US 2-year yield","4.88%","+37 bp over the week"],["10Y−2Y spread","27 bp","−8 bp over the week (35 bp on 6 Nov)"]],
  regime: "Stronger dollar, flatter curve (2-year rising faster than 10-year)",
  driver: "Tightening expectations are building and funding costs are rising. This is the tightest liquidity combination.",
  view: "Over the past week short-end yields rose more than long-end yields while the dollar reached its highest level since April 2025. The market is pricing a Federal Reserve hike. In this combination, highly valued technology stocks and crypto assets tend to come under pressure together; the Nasdaq fell 2.49% on 16 Nov and is in correction territory.",
  outlook: ["If short-end yields keep rising and the spread narrows further, the regime holds and pressure on risk assets continues.","Watch whether the 10-year holds above 5%: market quotes on 16 Nov eased about 4 bp to 5.115%. If the long end falls while the short end stays put, the spread compresses further.","For stablecoin business: higher short-end rates raise the income on US dollar stablecoin reserves, which sharpens the question of who keeps that income, the issuer or the bank."],
  note: "The regime is judged on the one-week change. DXY has no free official source; market quotes are used and vary slightly by provider. Market commentary only, not investment advice."
 },
 links: [["U.S. Treasury: Daily Par Yield Curve Rates","https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?type=daily_treasury_yield_curve&field_tdr_date_value_month=202611",false],["The Close, 16 Nov 2026","https://theweekendspread.substack.com/p/the-close-monday-november-16-2026",true],["TokenPost: Dollar Index weekly move","https://www.tokenpost.com/news/investing/58788",true]]
}
];
