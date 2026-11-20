// 專題。每篇一個物件，最新的放最前面。圖表資料放在 charts，文字分 zh / en。
window.FEATURES = [
{
 id: "ant-vs-spcx",
 date: "2026-11-19",
 charts: {
  price: {
   xMax: 160, yMin: -40, yMax: 60, yStep: 20, unit: "%",
   series: [
    {key:"spcx", pts:[[0,19.2],[4,56.6],[54,-19.8],[55,-14.9],[56,-1.5],[116,27.3],[126,8.1],[131,18.0],[132,7.2],[140,-0.2],[146,-8.4],[150,5.2],[154,3.0]],
     tips:["6/12 首日收 $160.95","6/16 收盤高點 $211.39","8/5 收盤低點 $108.27（首份財報隔天）","8/6 解鎖日 約 $114.9","8/7 約 $133.0","10/6 $171.92","10/16 $146.03（8 個交易日跌 15.1%）","10/21 $159.31（Q3 財報隔天）","10/22 $144.75","10/30 $134.72（跌破 IPO 價）","11/5 $123.62","11/9 $142.07","11/13 $139.11"],
     tipsEn:["Jun 12 day-one close $160.95","Jun 16 peak close $211.39","Aug 5 low close $108.27 (day after first earnings)","Aug 6 unlock day ~$114.9","Aug 7 ~$133.0","Oct 6 $171.92","Oct 16 $146.03 (down 15.1% in 8 sessions)","Oct 21 $159.31 (day after Q3 results)","Oct 22 $144.75","Oct 30 $134.72 (below IPO price)","Nov 5 $123.62","Nov 9 $142.07","Nov 13 $139.11"]},
    {key:"ant", pts:[[0,17.1]], tips:["11/19 首日收 $97.17（開盤 $111.50，+34%）"], tipsEn:["Nov 19 day-one close $97.17 (opened $111.50, +34%)"]}
   ],
   events: [[55,"SPCX 解鎖 9.1 億股","SPCX unlock 912M"],[133,"SPCX 解鎖 13 億股","SPCX unlock 1.3B"]]
  },
  unlock: {
   xMax: 140, yMin: 0, yMax: 7, yStep: 1, unit: "x", step: true,
   series: [
    {key:"spcx", pts:[[55,1.64],[69,2.23],[89,2.81],[104,3.40],[119,3.98],[133,6.32],[136,6.91]],
     tips:["8/6 首批 約 9.12 億股","8/20 約 3.25 億股","9/9 約 3.25 億股","9/24 約 3.25 億股","10/9 約 3.25 億股","10/23 約 13 億股（Q3 財報後）","10/26 約 3.28 億股"],
     tipsEn:["Aug 6 first tranche ~912M","Aug 20 ~325M","Sep 9 ~325M","Sep 24 ~325M","Oct 9 ~325M","Oct 23 ~1.3B (after Q3 results)","Oct 26 ~328M"]},
    {key:"ant", pts:[[0,0.32],[26,0.63],[47,0.93],[61,1.29],[75,1.64]],
     tips:["11/19 首日 3.16 億股","12/15 2.99 億股","1/5 2.99 億股","1/19 3.49 億股","2/2 3.49 億股，累計 16.1 億股"],
     tipsEn:["Nov 19 day one 316M","Dec 15 299M","Jan 5 299M","Jan 19 349M","Feb 2 349M, 1.61B cumulative"]}
   ],
   ref: [1,"1x＝IPO 發行股數","1x = IPO shares sold"]
  }
 },
 zh: {
  kicker: "專題｜IPO",
  title: "Anthropic 與 SpaceX 上市走勢對比：解鎖會怎麼影響 ANT？",
  dek: "SpaceX 上市後兩個月內把首日漲幅全部吐回，低點出現在財報與第一次大解鎖之前。Anthropic 首日漲 17%，但解鎖從第一天就開始。這篇用兩檔的價格路徑與解鎖時間表，推演 ANT 接下來半年的三種情境。",
  asof: "資料截至美東 2026 年 11 月 19 日（ANT 首日）與 11 月 13 日（SPCX）",
  blocks: [
   {h:"重點"},
   {list:["兩檔首日漲幅相近（SPCX +19.2%、ANT +17.1%），但 ANT 開在 $111.50 後一路回吐，SPCX 首日收在高位、之後再漲兩天。","SPCX 從高點到低點跌掉將近一半，低點在首份財報隔天、第一次大解鎖前一天；解鎖當天反而反彈。","ANT 的解鎖分批更密：到第 75 天可解鎖量是發行量的 1.64 倍，和 SPCX 第 55 天一次放出的量相同。真正的大關是 2026 全年財報後。"]},
   {h:"首日對比"},
   {table:[["","SPCX","ANT"],["IPO 價","$135","$83"],["開盤","$150.00","$111.50"],["盤中最高","$176.52","$115.10"],["首日收盤","$160.95（+19.2%）","$97.17（+17.1%）"],["收盤相對開盤","+7.3%","−12.9%"],["首日成交量","未查到","約 8.4 億股"],["IPO 發行股數","約 5.56 億股","9.8 億股（原 8.25 億股，擴大發行；另有 1.47 億股超額配售權）"]]},
   {p:"漲幅數字接近，結構不同。SPCX 首日收在開盤之上，隔兩天收盤漲到 $211.39；ANT 開盤即是當天高點附近，追價買盤在首日就被消化。"},
   {chart:"price", h:"圖一｜上市後收盤價相對 IPO 價", note:"橫軸為上市後的日曆天數。SPCX 只連接報導中出現的關鍵收盤點，不是逐日走勢；8/6、8/7 由當日漲幅推算。"},
   {h:"SPCX 的路徑說明了什麼"},
   {list:["首日後的軋空延續不久：6/16 收盤高點後，到 8/5 跌到 $108.27，比 IPO 價低 19.8%。","低點出在財報，不在解鎖：8/5 是首份財報隔天，8/6 解鎖約 9.12 億股當天漲 6.1%、隔天再漲 15.8%。市場在解鎖前就把賣壓計價了。","後續解鎖影響遞減：10/23 再解鎖約 13 億股，股價在 $144–149 守住；10/30 才跌破 IPO 價，11/5 收 $123.62。所引來源沒有說明這段下跌的原因，但解鎖前後股價並未明顯下跌。"]},
   {chart:"unlock", h:"圖二｜累計可解鎖股數 ÷ IPO 發行股數", note:"可解鎖不等於實際賣出。SPCX 以約 5.56 億股為分母，8/20 至 10/9 每批約 3.2–3.3 億股取 3.25 億估算；ANT 以約 9.8 億股為分母，只畫到日期已確定的 2/2。"},
   {p:"到第 75 天，ANT 的可解鎖量是發行量的 1.64 倍，和 SPCX 第 55 天一次放出的量一樣。差別是 ANT 每兩到三週放一批，賣壓比較分散，但也意味著上市初期很難出現 SPCX 那種籌碼極度稀少的軋空。"},
   {h:"ANT 解鎖時間表"},
   {table:[["日期或觸發","可賣上限","累計"],["11/19 首日（員工與非創辦人內部人，最多 10% 持股）","3.16 億股","3.16 億股"],["12/15、2027/1/5","各 2.99 億股","9.14 億股"],["1/19、2/2","各 3.49 億股","16.1 億股"],["2026 全年財報後第二個交易日","17 億股","33.1 億股"],["財報後第 13、27、41、55、69 天","各 4.74 億股","56.8 億股"],["2027 Q1 財報或 5/17（先到者）；創辦人此時最多可賣持股的 29%","30 億股","86.8 億股"],["Q1 財報後第 34、48、62、76 天","各 4.49 億股","104.8 億股"],["2027 Q2 財報後第二個交易日","5.62 億股","110.4 億股"],["Q2 財報後第 27、41、55、69、83 天","各 5.05 億股","135.7 億股"],["2027 Q3 財報或 11/18（先到者），含創辦人其餘持股","19 億股","154.7 億股"]]},
   {p:"時間表與股數取自 TECHi 依 S-1/A 的整理（次級來源），未對照最終公開說明書。另有兩點：260 億美元的 Class N 私募以 IPO 價 $83 認購約 3.13 億股，買方是 AMD、博通、Google、美光、微軟、Nvidia 與台積電旗下公司；這批股票不受承銷商鎖定，但屬受限制證券，據 TECHi 一般六個月內不能轉售。主辦承銷商 Goldman Sachs 與 Morgan Stanley 可提前解除鎖定。"},
   {h:"三種情境"},
   {scen:[
     {t:"基本", px:"$83–90", v:"約 1.5–1.6 兆美元", p:"12 月到 2 月持續有解鎖賣壓，AI 板塊情緒偏弱，股價回測 IPO 價附近。參照 SPCX，低點較可能出現在 2026 全年財報前後、大量解鎖之前。"},
     {t:"樂觀", px:"約 $115", v:"約 2.1 兆美元", p:"財報強勁，加上指數納入帶來被動買盤，重回首日高點。據 StockAnalysis 與 FinanceFeeds 報導，ANT 預計 12 月 21 日開盤納入 Nasdaq-100（次級來源）；SPCX 依同一快速納入規則，上市 15 個交易日後納入。"},
     {t:"悲觀", px:"約 $66", v:"約 1.2 兆美元", p:"比照 SPCX 低點比 IPO 價低約 20%，跌破 IPO 價並在財報與解鎖疊加時探底。"}
   ]},
   {p:"估值以完全稀釋股數約 181.7 億股計算，依 Fortune、TechCrunch 報導的 $83 對應約 1.5 兆美元（完全稀釋）反推。TECHi 估的完全稀釋股數約 175 億股，各情境的估值可能差幾個百分點。首日收盤 $97.17 對應約 1.77 兆美元。"},
   {h:"觀察清單"},
   {table:[["日期","事件"],["2026/12/15","ANT 第一批定期解鎖"],["2026/12/21","ANT 據報納入 Nasdaq-100（次級來源）"],["2027/2/2","ANT 累計可解鎖量超過發行量（16.1 億股）"],["2026 全年財報日（未公告）","最大一關：解鎖量從 16 億股跳到 33 億股，之後分五批再放 24 億股"],["2027/5/17","ANT 創辦人開始可以賣（或更早，若 Q1 財報先公布）"],["2026/12/8","SPCX 180 天主要鎖定期到期，可作為大型解鎖的參照"]]},
   {h:"方法與限制"},
   {p:"IPO 價 $83、發行 9.8 億股、超額配售權 1.47 億股與 Class N 私募，已對照 SEC 的定價文件（11 月 18 日 FWP）。首日開盤、最高、收盤與成交量只有 FinanceFeeds 引用 Nasdaq 的數字；SPCX 股價與解鎖量來自 Quantral 整理，未對照交易所資料。解鎖時間表取自 TECHi 依 S-1/A 的整理，最終公開說明書（424B4）本次讀取失敗，引用前請再核對。情境為個人推演，不構成投資建議。"}
  ],
  sources: [
   ["Anthropic 定價文件 FWP（SEC EDGAR，11 月 18 日）","https://www.sec.gov/Archives/edgar/data/0002130357/000162828026074937/anthropicpbc-fwppricing.htm",false],
   ["Anthropic S-1/A（SEC EDGAR）","https://www.sec.gov/Archives/edgar/data/0002130357/000162828026072484/anthropicpbc-sx1ax2.htm",false],
   ["CNBC：Anthropic IPO 定價 $83","https://www.cnbc.com/2026/11/18/anthropic-ipo-ai-offering-price.html",true],
   ["FinanceFeeds：ANT 首日走勢","https://financefeeds.com/anthropic-ant-stock-closes-debut-97-17-price-prediction/",true],
   ["Fortune：$83、9.8 億股、1.5 兆美元","https://fortune.com/2026/11/18/anthropic-prices-ipo-83-per-share-1-5-trillion/",true],
   ["TechCrunch：定價與擴大發行","https://techcrunch.com/2026/11/18/anthropic-reportedly-prices-ipo-at-83-a-share-above-projected-range/",true],
   ["StockAnalysis：Nasdaq-100 納入時間","https://stockanalysis.com/news/anthropic-prices-ipo-83-per-share/",true],
   ["TECHi：ANT 解鎖時間表","https://www.techi.com/anthropic-ipo-lock-up-share-release-calendar/",true],
   ["Quantral：SPCX 上市後走勢與解鎖","https://quantral.com/blog/spacex-ipo",true],
   ["Wikipedia：SpaceX IPO","https://en.wikipedia.org/wiki/Initial_public_offering_of_SpaceX",true]
  ]
 },
 en: {
  kicker: "Feature | IPO",
  title: "Anthropic vs SpaceX after listing: how will lock-up expiries hit ANT?",
  dek: "SpaceX gave back its whole first-day gain within two months, and its low came just before its first earnings-linked unlock. Anthropic rose 17% on day one, but its unlocks start on day one. Using both stocks' price paths and unlock calendars, this piece sets out three scenarios for ANT over the next six months.",
  asof: "Data as of the US close on 19 Nov 2026 (ANT day one) and 13 Nov 2026 (SPCX)",
  blocks: [
   {h:"Key points"},
   {list:["Day-one gains were similar (SPCX +19.2%, ANT +17.1%), but ANT opened at $111.50 and faded all day, while SPCX closed near its highs and rallied for two more days.","SPCX lost almost half its value from peak to trough. The low came the day after its first earnings and the day before its first big unlock; the stock rose on the unlock itself.","ANT's unlocks are more frequent: by day 75 the shares eligible for sale equal 1.64x the IPO, the same as SPCX released in one go on day 55. The real test is after the 2026 annual results."]},
   {h:"Day one compared"},
   {table:[["","SPCX","ANT"],["IPO price","$135","$83"],["Open","$150.00","$111.50"],["Intraday high","$176.52","$115.10"],["Close","$160.95 (+19.2%)","$97.17 (+17.1%)"],["Close vs open","+7.3%","−12.9%"],["Day-one volume","not found","~840M shares"],["IPO shares sold","~556M","980M (upsized from 825M; plus a 147M-share option)"]]},
   {p:"The headline gains are close; the shape is not. SPCX closed above its open and reached a $211.39 close two sessions later. ANT's open was near its high of the day, and chasing demand was absorbed on day one."},
   {chart:"price", h:"Chart 1 | Close vs IPO price after listing", note:"X-axis is calendar days since listing. The SPCX line joins only the key closes reported in the press, not every session; Aug 6 and 7 are derived from reported daily moves."},
   {h:"What the SPCX path shows"},
   {list:["The post-debut squeeze was short: from the Jun 16 peak close to $108.27 on Aug 5, 19.8% below the IPO price.","The low came on earnings, not the unlock: Aug 5 was the day after the first earnings report; on the Aug 6 unlock of ~912M shares the stock rose 6.1%, then 15.8% the next day. The market priced the supply in advance.","Later unlocks mattered less: ~1.3B more shares unlocked on Oct 23 and the stock held $144–149; it only fell below the IPO price on Oct 30 and closed at $123.62 on Nov 5. The sources cited give no reason for that slide, but the stock did not drop noticeably around the unlocks."]},
   {chart:"unlock", h:"Chart 2 | Cumulative shares eligible for sale ÷ IPO shares sold", note:"Eligible is not sold. SPCX uses ~556M as the base and ~325M for each Aug 20–Oct 9 tranche (reported as 320–330M); ANT uses ~980M and stops at Feb 2, the last fixed date."},
   {p:"By day 75 ANT's eligible supply equals 1.64x its IPO, the same as SPCX released at once on day 55. ANT releases a batch every two to three weeks, which spreads the selling, but also makes an SPCX-style squeeze on a tiny float unlikely early on."},
   {h:"ANT unlock calendar"},
   {table:[["Date or trigger","Up to","Cumulative"],["Nov 19, day one (employees and non-founder insiders, up to 10% of holdings)","316M","316M"],["Dec 15, Jan 5 2027","299M each","914M"],["Jan 19, Feb 2","349M each","1.61B"],["Second trading day after 2026 annual results","1.7B","3.31B"],["Days 13, 27, 41, 55, 69 after those results","474M each","5.68B"],["Q1 2027 results or May 17, whichever first; founders may then sell up to 29% of their holdings","3.0B","8.68B"],["Days 34, 48, 62, 76 after Q1 results","449M each","10.48B"],["Second trading day after Q2 2027 results","562M","11.04B"],["Days 27, 41, 55, 69, 83 after Q2 results","505M each","13.57B"],["Q3 2027 results or Nov 18, whichever first, including founders' remaining shares","1.9B","15.47B"]]},
   {p:"The calendar and share counts come from TECHi's summary of the S-1/A (secondary source) and have not been checked against the final prospectus. Two more points: the $26B Class N private placement bought about 313M shares at the $83 IPO price; the buyers are AMD, Broadcom, Google, Micron, Microsoft, Nvidia and a TSMC affiliate. These shares are not under the underwriters' lock-up but are restricted securities, and according to TECHi generally cannot be resold for six months. Lead underwriters Goldman Sachs and Morgan Stanley can release locked-up shares early."},
   {h:"Three scenarios"},
   {scen:[
     {t:"Base", px:"$83–90", v:"~$1.5–1.6T", p:"Unlock supply from December to February and weak AI sentiment pull the stock back toward the IPO price. On the SPCX pattern, the low is more likely around the 2026 annual results, before the big unlock."},
     {t:"Bull", px:"~$115", v:"~$2.1T", p:"Strong results plus passive buying from index inclusion take it back to the day-one high. StockAnalysis and FinanceFeeds report that ANT is set to join the Nasdaq-100 at the open on 21 Dec (secondary sources); SPCX joined under the same fast-entry rule 15 trading days after listing."},
     {t:"Bear", px:"~$66", v:"~$1.2T", p:"Like SPCX's low about 20% below its IPO price, ANT breaks $83 and bottoms where earnings and unlocks coincide."}
   ]},
   {p:"Valuations use ~18.17B fully diluted shares, backed out from the ~$1.5T fully diluted valuation at $83 reported by Fortune and TechCrunch. TECHi estimates about 17.5B fully diluted shares, so each scenario's valuation could be a few per cent different. The $97.17 day-one close is about $1.77T."},
   {h:"Watch list"},
   {table:[["Date","Event"],["Dec 15, 2026","ANT's first scheduled unlock"],["Dec 21, 2026","ANT reported to join the Nasdaq-100 (secondary source)"],["Feb 2, 2027","ANT's cumulative unlocks pass the IPO size (1.61B)"],["2026 annual results (date TBA)","The big one: eligible supply jumps from 1.6B to 3.3B, then 2.4B more in five steps"],["May 17, 2027","ANT founders may start selling (earlier if Q1 results come first)"],["Dec 8, 2026","SPCX's main 180-day lock-up ends, a reference for large unlocks"]]},
   {h:"Method and limits"},
   {p:"The $83 price, the 980M shares sold, the 147M-share option and the Class N placement have been checked against the SEC pricing document (FWP of 18 Nov). ANT's day-one open, high, close and volume come only from FinanceFeeds, citing Nasdaq; SPCX prices and unlock sizes come from Quantral's summary and have not been checked against exchange data. The unlock calendar is TECHi's summary of the S-1/A; the final prospectus (424B4) could not be read this time, so verify before citing. The scenarios are my own and are not investment advice."}
  ],
  sources: [
   ["Anthropic pricing FWP (SEC EDGAR, 18 Nov)","https://www.sec.gov/Archives/edgar/data/0002130357/000162828026074937/anthropicpbc-fwppricing.htm",false],
   ["Anthropic S-1/A (SEC EDGAR)","https://www.sec.gov/Archives/edgar/data/0002130357/000162828026072484/anthropicpbc-sx1ax2.htm",false],
   ["CNBC: Anthropic prices at $83","https://www.cnbc.com/2026/11/18/anthropic-ipo-ai-offering-price.html",true],
   ["FinanceFeeds: ANT day one","https://financefeeds.com/anthropic-ant-stock-closes-debut-97-17-price-prediction/",true],
   ["Fortune: $83, 980M shares, $1.5T","https://fortune.com/2026/11/18/anthropic-prices-ipo-83-per-share-1-5-trillion/",true],
   ["TechCrunch: pricing and upsizing","https://techcrunch.com/2026/11/18/anthropic-reportedly-prices-ipo-at-83-a-share-above-projected-range/",true],
   ["StockAnalysis: Nasdaq-100 timing","https://stockanalysis.com/news/anthropic-prices-ipo-83-per-share/",true],
   ["TECHi: ANT unlock calendar","https://www.techi.com/anthropic-ipo-lock-up-share-release-calendar/",true],
   ["Quantral: SPCX since listing","https://quantral.com/blog/spacex-ipo",true],
   ["Wikipedia: SpaceX IPO","https://en.wikipedia.org/wiki/Initial_public_offering_of_SpaceX",true]
  ]
 }
}
];

// 專題頁的樣式與繪製。index.html 只呼叫 window.renderFeatures(容器, 語言)。
(function(){
 const css = `
 :root{--c-ant:#2c7a0c;--c-spcx:#2f6fd0}
 @media (prefers-color-scheme: dark){:root:not([data-theme="light"]){--c-ant:#5f8f1a;--c-spcx:#4a85dc}}
 :root[data-theme="dark"]{--c-ant:#5f8f1a;--c-spcx:#4a85dc}
 .feat{max-width:760px;padding-top:22px}
 .feat .fk{font-size:12.5px;font-weight:700;letter-spacing:.06em;color:var(--accent)}
 .feat h2{font-family:var(--display);font-weight:900;font-size:30px;line-height:1.35;margin:6px 0 10px;text-wrap:balance}
 .feat .dek{font-size:17px;margin:0 0 8px}
 .feat .asof{font-size:13px;color:var(--muted);margin:0 0 6px}
 .feat h3{font-family:var(--display);font-weight:900;font-size:20px;margin:28px 0 8px;padding-bottom:6px;border-bottom:2px solid var(--ink)}
 .feat p{margin:0 0 12px}
 .feat ul{margin:0 0 12px;padding-left:20px}
 .feat li{margin-bottom:6px}
 .feat table{border-collapse:collapse;width:100%;font-size:14px;font-variant-numeric:tabular-nums;margin:4px 0 14px}
 .feat th,.feat td{text-align:left;padding:7px 10px 7px 0;border-bottom:1px solid var(--rule);vertical-align:top}
 .feat th{font-size:12.5px;color:var(--muted);font-weight:700;border-bottom:2px solid var(--ink)}
 .feat figure{margin:22px 0 14px;position:relative}
 .feat figcaption{font-family:var(--display);font-weight:900;font-size:17px;margin-bottom:6px}
 .feat .legend{display:flex;gap:16px;font-size:13px;color:var(--muted);margin-bottom:4px}
 .feat .legend span{display:inline-flex;align-items:center;gap:6px}
 .feat .legend i{width:14px;height:3px;border-radius:2px;display:inline-block}
 .feat svg{width:100%;height:auto;display:block;overflow:visible}
 .feat svg text{font-family:var(--body);fill:var(--muted);font-size:12px}
 .feat svg .lab{font-size:12.5px;font-weight:700;fill:var(--ink)}
 .feat .fnote{font-size:12.5px;color:var(--muted);margin-top:4px}
 .feat .tip{position:absolute;pointer-events:none;background:var(--ink);color:var(--paper);font-size:13px;line-height:1.4;padding:6px 9px;border-radius:6px;max-width:240px;opacity:0;transition:opacity .1s;z-index:2}
 .feat .scen{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:6px 0 14px}
 .feat .sc{background:var(--surface);border-top:4px solid var(--rule);padding:12px 14px;border-radius:0 0 6px 6px}
 .feat .sc.s0{border-top-color:var(--bright)}
 .feat .sc b{display:block;font-size:13px;color:var(--muted)}
 .feat .sc .px{font-family:var(--display);font-weight:900;font-size:24px;line-height:1.3}
 .feat .sc .v{font-size:13px;color:var(--muted);margin-bottom:6px}
 .feat .sc p{font-size:14px;margin:0}
 .feat .fsrc{font-size:13px;color:var(--muted);display:flex;flex-direction:column;gap:4px;margin-top:6px}
 .feat .flist{margin:22px 0 0;padding:0;list-style:none}
 @media (max-width:820px){.feat h2{font-size:24px}.feat .scen{grid-template-columns:1fr}}
 `;
 const st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
 const NS = "http://www.w3.org/2000/svg";
 const s = (tag, at, txt) => { const e = document.createElementNS(NS, tag); for (const k in at) e.setAttribute(k, at[k]); if (txt != null) e.textContent = txt; return e; };
 const h = (tag, cls, txt) => { const e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; };
 const NAMES = {spcx:"SpaceX（SPCX）", ant:"Anthropic（ANT）"}, NAMES_EN = {spcx:"SpaceX (SPCX)", ant:"Anthropic (ANT)"};

 function chart(fig, c, lang){
  const narrow = window.innerWidth < 600;
  const W = narrow ? 380 : 640, H = narrow ? 260 : 300, m = {l:44, r: narrow ? 52 : 70, t:16, b:34};
  const x = v => m.l + v / c.xMax * (W - m.l - m.r);
  const y = v => m.t + (c.yMax - v) / (c.yMax - c.yMin) * (H - m.t - m.b);
  const names = lang === "en" ? NAMES_EN : NAMES;
  const lg = h("div","legend");
  c.series.forEach(se => { const sp = h("span"); const i = h("i"); i.style.background = "var(--c-" + se.key + ")"; sp.appendChild(i); sp.appendChild(document.createTextNode(names[se.key])); lg.appendChild(sp); });
  fig.appendChild(lg);
  const svg = s("svg", {viewBox:`0 0 ${W} ${H}`, role:"img"});
  for (let v = c.yMin; v <= c.yMax + 1e-9; v += c.yStep){
   const isBase = (c.unit === "%" && v === 0);
   svg.appendChild(s("line", {x1:m.l, x2:W - m.r, y1:y(v), y2:y(v), stroke: isBase ? "var(--muted)" : "var(--rule)", "stroke-width": isBase ? 1.5 : 1}));
   svg.appendChild(s("text", {x:m.l - 8, y:y(v) + 4, "text-anchor":"end"}, (c.unit === "%" && v > 0 ? "+" : "") + v + c.unit));
  }
  for (let d = 0; d <= c.xMax; d += 20) svg.appendChild(s("text", {x:x(d), y:H - m.b + 18, "text-anchor":"middle"}, String(d)));
  svg.appendChild(s("text", {x:W - m.r, y:H - 4, "text-anchor":"end"}, lang === "en" ? "days since listing" : "上市後天數"));
  if (c.unit === "%") svg.appendChild(s("text", {x:x(100), y:y(0) + 16, "text-anchor":"middle"}, narrow ? (lang === "en" ? "IPO price" : "IPO 價") : (lang === "en" ? "IPO price (SPCX $135, ANT $83)" : "IPO 價（SPCX $135、ANT $83）")));
  if (c.ref){ const r = c.ref; svg.appendChild(s("line", {x1:m.l, x2:W - m.r, y1:y(r[0]), y2:y(r[0]), stroke:"var(--muted)", "stroke-width":1.5, "stroke-dasharray":"4 4"})); svg.appendChild(s("text", {x:m.l + 6, y:y(r[0]) - 6}, lang === "en" ? r[2] : r[1])); }
  (c.events || []).forEach(ev => {
   svg.appendChild(s("line", {x1:x(ev[0]), x2:x(ev[0]), y1:m.t, y2:H - m.b, stroke:"var(--c-spcx)", "stroke-width":1, "stroke-dasharray":"2 4", opacity:.7}));
   svg.appendChild(s("text", {x:x(ev[0]) + (narrow ? -4 : 4), y:m.t, "font-size":11, "text-anchor": narrow ? "end" : "start"}, narrow ? (lang === "en" ? ev[2].replace("SPCX ","") : ev[1].replace("SPCX ","")) : (lang === "en" ? ev[2] : ev[1])));
  });
  const tip = h("div","tip"); fig.appendChild(tip);
  c.series.forEach(se => {
   const col = "var(--c-" + se.key + ")";
   if (se.pts.length > 1){
    let d = "";
    se.pts.forEach((p, i) => {
     if (i === 0) d += `M${x(p[0])},${y(p[1])}`;
     else if (c.step) d += `H${x(p[0])}V${y(p[1])}`;
     else d += `L${x(p[0])},${y(p[1])}`;
    });
    if (c.step){ const lp = se.pts[se.pts.length - 1]; d += `H${x(lp[0]) + 6}`; }
    svg.appendChild(s("path", {d, fill:"none", stroke:col, "stroke-width":2, "stroke-linejoin":"round", "stroke-linecap":"round"}));
   }
   const tips = lang === "en" ? se.tipsEn : se.tips;
   se.pts.forEach((p, i) => {
    svg.appendChild(s("circle", {cx:x(p[0]), cy:y(p[1]), r: se.pts.length === 1 ? 5 : 3.5, fill:col, stroke:"var(--paper)", "stroke-width":2}));
    const hit = s("circle", {cx:x(p[0]), cy:y(p[1]), r:12, fill:"transparent", tabindex:0, "aria-label":tips[i]});
    const show = () => {
     const fr = fig.getBoundingClientRect(), sr = svg.getBoundingClientRect(), k = sr.width / W;
     const val = (p[1] > 0 && c.unit === "%" ? "+" : "") + p[1] + c.unit;
     tip.textContent = lang === "en" ? names[se.key] + ": " + tips[i] + " (" + val + ")" : names[se.key] + "：" + tips[i] + "（" + val + "）";
     let left = sr.left - fr.left + x(p[0]) * k + 10; const top = sr.top - fr.top + y(p[1]) * k - 10;
     tip.style.opacity = 1; const tw = tip.offsetWidth; if (left + tw > fr.width) left = left - tw - 20;
     tip.style.left = Math.max(0, left) + "px"; tip.style.top = top + "px";
    };
    hit.addEventListener("mouseenter", show); hit.addEventListener("focus", show);
    hit.addEventListener("mouseleave", () => tip.style.opacity = 0); hit.addEventListener("blur", () => tip.style.opacity = 0);
    svg.appendChild(hit);
   });
   const lp = se.pts[se.pts.length - 1];
   const lab = se.key === "ant" ? (lang === "en" ? "ANT" : "ANT") : "SPCX";
   svg.appendChild(s("text", {class:"lab", x:x(lp[0]) + (c.step ? 12 : 10), y:y(lp[1]) + (se.key === "ant" && !c.step ? 22 : 4)}, lab + (se.pts.length === 1 && !narrow ? " +17.1%" : "")));
  });
  fig.appendChild(svg);
  const det = h("details"); det.appendChild(h("summary", null, lang === "en" ? "Show data table" : "看數據表"));
  const tb = h("table"); const hr = h("tr"); [lang === "en" ? "Series" : "標的", lang === "en" ? "Day" : "天數", lang === "en" ? "Value" : "數值", lang === "en" ? "Note" : "說明"].forEach(t => hr.appendChild(h("th", null, t))); tb.appendChild(hr);
  c.series.forEach(se => { const tips = lang === "en" ? se.tipsEn : se.tips; se.pts.forEach((p, i) => { const tr = h("tr"); [names[se.key], String(p[0]), (p[1] > 0 && c.unit === "%" ? "+" : "") + p[1] + c.unit, tips[i]].forEach(t => tr.appendChild(h("td", null, t))); tb.appendChild(tr); }); });
  det.appendChild(tb); fig.appendChild(det);
 }

 window.renderFeatures = function(root, lang){
  root.textContent = "";
  const F = window.FEATURES || [];
  F.forEach((f, fi) => {
   const d = f[lang] || f.zh; const art = h("article","feat");
   art.appendChild(h("div","fk", d.kicker + "　" + f.date));
   art.appendChild(h("h2", null, d.title));
   art.appendChild(h("p","dek", d.dek));
   art.appendChild(h("p","asof", d.asof));
   d.blocks.forEach(b => {
    if (b.chart){ const fig = h("figure"); fig.appendChild(h("figcaption", null, b.h)); chart(fig, f.charts[b.chart], lang); if (b.note) fig.appendChild(h("div","fnote", b.note)); art.appendChild(fig); }
    else if (b.h) art.appendChild(h("h3", null, b.h));
    else if (b.p) art.appendChild(h("p", null, b.p));
    else if (b.list){ const ul = h("ul"); b.list.forEach(x => ul.appendChild(h("li", null, x))); art.appendChild(ul); }
    else if (b.table){ const tb = h("table"); b.table.forEach((r, i) => { const tr = h("tr"); r.forEach(c => tr.appendChild(h(i === 0 ? "th" : "td", null, c))); tb.appendChild(tr); }); art.appendChild(tb); }
    else if (b.scen){ const g = h("div","scen"); b.scen.forEach((x, i) => { const c = h("div","sc s" + i); c.appendChild(h("b", null, x.t)); c.appendChild(h("div","px", x.px)); c.appendChild(h("div","v", x.v)); c.appendChild(h("p", null, x.p)); g.appendChild(c); }); art.appendChild(g); }
   });
   art.appendChild(h("h3", null, lang === "en" ? "Sources" : "來源"));
   const sl = h("div","fsrc");
   d.sources.forEach(([n, u, sec]) => { const a = h("a", null, n + (sec ? (lang === "en" ? " (secondary)" : "（次級）") : "")); a.href = u; a.target = "_blank"; a.rel = "noopener"; sl.appendChild(a); });
   art.appendChild(sl);
   root.appendChild(art);
  });
 };
})();
