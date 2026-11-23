// 專題。每篇一個物件，最新的放最前面。圖表資料放在 charts，文字分 zh / en。
window.FEATURES = [
{
 id: "ant-vs-spcx",
 date: "2026-11-19",
 charts: {
  dayone: {
   xMin: 0, xMax: 40, xStep: 10, unit: "%",
   rows: [
    {key:"spcx", open:11.1, high:30.8, close:19.2, tip:"IPO $135｜開盤 $150.00｜盤中最高 $176.52｜收盤 $160.95", tipEn:"IPO $135 | open $150.00 | high $176.52 | close $160.95"},
    {key:"ant", open:34.3, high:38.7, close:17.1, tip:"IPO $83｜開盤 $111.50｜盤中最高 $115.10｜收盤 $97.17", tipEn:"IPO $83 | open $111.50 | high $115.10 | close $97.17"}
   ]
  },
  phases: {
   total: 154.7, unit: "億股", unitEn: "B",
   parts: [
    {v:16.1, en:1.61, n:"上市至 2/2（5 批）", nEn:"Listing to Feb 2 (5 tranches)"},
    {v:40.7, en:4.07, n:"2026 全年財報後（6 批）", nEn:"After 2026 annual results (6)"},
    {v:48.0, en:4.80, n:"2027 Q1 財報或第 180 天後（5 批）", nEn:"After Q1 2027 results or day 180 (5)"},
    {v:30.9, en:3.09, n:"2027 Q2 財報後（6 批）", nEn:"After Q2 2027 results (6)"},
    {v:19.0, en:1.90, n:"2027 Q3 財報或第 365 天", nEn:"Q3 2027 results or day 365"}
   ]
  },
  ladder: {
   xMin: 55, xMax: 125, xStep: 10,
   refs: [[83,"IPO $83","IPO $83"],[97.17,"首日收盤 $97.17","Day-one close $97.17"]],
   rows: [
    {t:"悲觀", tEn:"Bear", lo:66, hi:66, lab:"約 $66", labEn:"~$66", v:"約 1.2 兆美元", vEn:"~$1.2T"},
    {t:"基本", tEn:"Base", lo:83, hi:90, lab:"$83–90", labEn:"$83–90", v:"約 1.5–1.6 兆美元", vEn:"~$1.5–1.6T"},
    {t:"樂觀", tEn:"Bull", lo:115, hi:115, lab:"約 $115", labEn:"~$115", v:"約 2.1 兆美元", vEn:"~$2.1T"}
   ]
  },
  price: {
   xMax: 160, yMin: -40, yMax: 60, yStep: 20, unit: "%",
   series: [
    {key:"spcx", dashed:true, pts:[[0,19.2],[4,56.6],[54,-19.8],[55,-14.9],[56,-1.5],[116,27.3],[126,8.1],[131,18.0],[132,7.2],[140,-0.2],[146,-8.4],[150,5.2],[154,3.0]],
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
   ref: [1,"1x＝原始 IPO 發售股數（不含超額配售）","1x = original IPO shares (excl. over-allotment)"]
  }
 },
 zh: {
  kicker: "專題｜IPO",
  title: "Anthropic 與 SpaceX 上市走勢對比：解鎖會怎麼影響 ANT？",
  dek: "SpaceX 上市後兩個月內把首日漲幅全部吐回，低點出現在首份財報後、第一次大解鎖前一天。Anthropic 首日漲 17%，但解鎖從第一天就開始。這篇用兩檔的價格路徑與解鎖時間表，推演 ANT 接下來半年的三種情境。",
  asof: "資料截至美東 2026 年 11 月 19 日（ANT 首日）與 11 月 13 日（SPCX）",
  blocks: [
   {summary:["兩檔首日漲幅相近（SPCX +19.2%、ANT +17.1%），但 ANT 開在全天高點附近、收盤回吐過半。","依 TECHi 整理的時間表，ANT 的累計可解鎖量在 2027/1/19 首次超過原始 IPO 發售股數，真正的大關是 2026 全年財報後。","三種情境只依 SPCX 一檔的歷史路徑類比，是情境示意，不是估值模型的目標價。"]},
   {toc:true},
   {kpis:[["ANT 首日漲幅","+17.1%","收 $97.17，IPO 價 $83"],["首日收盤市值","約 1.77 兆美元","以完全稀釋約 181.7 億股計"],["至 2/2 可解鎖","16.1 億股","原始發售量的 1.64 倍；含超額配售為 1.43 倍"],["下一批解鎖","12/15","2.99 億股［8］"]]},
   {h:"重點"},
   {list:["兩檔首日漲幅相近（SPCX +19.2%、ANT +17.1%），但 ANT 開在 $111.50 後一路回吐，SPCX 首日收在高位、之後再漲兩天［4］［9］。","SPCX 從高點到低點跌掉將近一半，低點在首份財報隔天、第一次大解鎖前一天；解鎖當天股價反而上漲［9］。","ANT 的解鎖分批更密：到第 75 天（2/2）可解鎖量是原始發售量的 1.64 倍，和 SPCX 第 55 天一次放出的量相同；真正的大關是 2026 全年財報後［8］。"]},
   {h:"首日對比"},
   {num:true, table:[["","SPCX","ANT"],["IPO 價","$135［9］","$83［1］"],["開盤","$150.00","$111.50［4］"],["盤中最高","$176.52","$115.10［4］"],["首日收盤","$160.95（+19.2%）","$97.17（+17.1%）［4］"],["收盤相對開盤","+7.3%","−12.9%"],["首日成交量","未查到","約 8.4 億股［4］"],["原始 IPO 發售股數","約 5.56 億股［9］","9.8 億股（由 8.25 億股擴大）［1］"],["含超額配售","約 6.39 億股（上限）［9］","約 11.27 億股（據報全額行使）［11］"]]},
   {p:"漲幅數字接近，結構不同。SPCX 首日收在開盤之上，隔兩天收盤漲到 $211.39；ANT 開盤即是當天高點附近，追價買盤在首日就被消化。據 Bloomberg 報導，ANT 第二個交易日盤前一度跌逾 10%［12］，本文未納入其後的收盤價。"},
   {chart:"dayone", h:"圖一｜首日價格區間（相對 IPO 價）", desc:"兩條橫條比較 SPCX 與 ANT 首日的開盤、盤中最高與收盤，皆以相對 IPO 價的漲幅表示。SPCX 開盤 +11.1%、最高 +30.8%、收盤 +19.2%；ANT 開盤 +34.3%、最高 +38.7%、收盤 +17.1%。", note:"橫條從 IPO 價延伸到盤中最高價。ANT 開在全天高點附近、收盤回吐過半；SPCX 收在開盤之上。ANT 首日數字只有 FinanceFeeds 引用 Nasdaq 的單一來源［4］。"},
   {chart:"price", h:"圖二｜上市後收盤價相對 IPO 價（SPCX 關鍵觀察點；ANT 僅首日）", desc:"SPCX 上市後 154 天內 13 個報導中的收盤點，相對 IPO 價從首日 +19.2%、6/16 高點 +56.6%、8/5 低點 −19.8%，到 11/13 的 +3.0%。ANT 只有首日一點 +17.1%。", note:"橫軸為上市後的日曆天數。SPCX 的點來自報導中的關鍵收盤，虛線只是連接，不代表逐日走勢；8/6、8/7 由當日漲幅推算［9］。ANT 只有首日資料，不能和 SPCX 比較走勢。"},
   {h:"SPCX 的路徑：觀察與待驗證的假設"},
   {list:["觀察：6/16 收盤高點後，到 8/5 跌到 $108.27，比 IPO 價低 19.8%［9］。","觀察：8/5 是首份財報隔天，8/6 解鎖約 9.12 億股當天漲 6.1%、隔天再漲 15.8%［9］。假設：市場可能在解鎖前已反映部分賣壓；但價格先跌後漲本身無法證明這點，還需要對照財報內容、成交量與同期大盤。","觀察：10/23 再解鎖約 13 億股，股價在 $144–149 之間；10/30 才跌破 IPO 價，11/5 收 $123.62［9］。所引來源沒有說明這段下跌的原因；是否代表解鎖影響遞減，資料不足以判斷。"]},
   {chart:"unlock", h:"圖三｜累計可解鎖股數 ÷ 原始 IPO 發售股數", desc:"階梯線顯示累計可解鎖股數相對原始 IPO 發售股數的倍數。SPCX 第 55 天一次到 1.64 倍，第 136 天累計 6.91 倍；ANT 分五批，第 61 天（1/19）超過 1 倍，第 75 天（2/2）達 1.64 倍。", note:"可解鎖不等於實際賣出。分母為原始 IPO 發售股數，不含超額配售：SPCX 約 5.56 億股，ANT 9.8 億股［1］。若改用含超額配售的約 11.27 億股，ANT 第 75 天為 1.43 倍［11］。SPCX 8/20 至 10/9 每批約 3.2–3.3 億股，取 3.25 億估算［9］；ANT 只畫到日期已確定的 2/2［8］。"},
   {p:"到第 75 天，ANT 的可解鎖量是原始發售量的 1.64 倍，和 SPCX 第 55 天一次放出的量一樣。差別是 ANT 每兩到三週放一批，賣壓比較分散；但也可能讓上市初期較難出現 SPCX 那種籌碼稀少的軋空。"},
   {h:"ANT 解鎖時間表"},
   {num:true, note:"來源：TECHi 依 S-1/A 的整理［8］［2］，未對照最終公開說明書。", table:[["日期或觸發","可賣上限","累計"],["11/19 首日（員工與非創辦人內部人，最多 10% 持股）","3.16 億股","3.16 億股"],["12/15、2027/1/5","各 2.99 億股","9.14 億股"],["1/19、2/2","各 3.49 億股","16.1 億股"],["2026 全年財報後第二個交易日","17 億股","33.1 億股"],["財報後第 13、27、41、55、69 天","各 4.74 億股","56.8 億股"],["2027 Q1 財報或 5/17（先到者）；創辦人此時最多可賣持股的 29%","30 億股","86.8 億股"],["Q1 財報後第 34、48、62、76 天","各 4.49 億股","104.8 億股"],["2027 Q2 財報後第二個交易日","5.62 億股","110.4 億股"],["Q2 財報後第 27、41、55、69、83 天","各 5.05 億股","135.7 億股"],["2027 Q3 財報或 11/18（先到者），含創辦人其餘持股","19 億股","154.7 億股"]]},
   {chart:"phases", h:"圖四｜154.7 億股鎖定股分五個階段釋出", desc:"一條分段長條把 154.7 億股鎖定股分成五個釋出階段：上市至 2/2 共 16.1 億股、2026 全年財報後 40.7 億股、2027 Q1 財報或第 180 天後 48.0 億股、2027 Q2 財報後 30.9 億股、2027 Q3 財報或第 365 天 19.0 億股。", note:"各階段為該階段內各批可賣上限的合計，依上表加總；可解鎖不等於實際賣出［8］。"},
   {p:"另有兩點：260 億美元的 Class N 私募以 IPO 價 $83 認購約 3.13 億股［1］，買方是 AMD、博通、Google、美光、微軟、Nvidia 與台積電旗下公司［2］；這批股票不受承銷商鎖定，但屬受限制證券，據 TECHi 一般六個月內不能轉售［8］。主辦承銷商 Goldman Sachs 與 Morgan Stanley 可提前解除鎖定［2］。"},
   {h:"三種情境"},
   {chart:"ladder", h:"圖五｜三種情境落在哪個價位（情境示意，非目標價）", desc:"價格軸從 $55 到 $125，標出 IPO 價 $83 與首日收盤 $97.17。悲觀情境約 $66，基本情境 $83 至 $90，樂觀情境約 $115。", note:"橫軸為 ANT 股價。直線為 IPO 價與首日收盤；估值以完全稀釋約 181.7 億股換算。"},
   {scen:[
     {t:"基本", px:"$83–90", v:"約 1.5–1.6 兆美元", p:"12 月到 2 月持續有解鎖賣壓，AI 板塊情緒偏弱，股價回測 IPO 價附近。", cond:"各批解鎖如期釋出、沒有重大正面消息、AI 類股維持弱勢。", fail:"股價在財報前站穩首日收盤 $97 以上，或跌破 $83 並持續。", calc:"IPO 價 $83 至約 +8% 的 $90，乘完全稀釋約 181.7 億股。"},
     {t:"樂觀", px:"約 $115", v:"約 2.1 兆美元", p:"財報強勁，加上指數納入帶來被動買盤，回到首日盤中高點。", cond:"2026 全年財報優於預期，且如報導於 12/21 納入 Nasdaq-100［4］［7］。", fail:"財報不如預期、AI 類股續跌，或指數納入延後。", calc:"首日盤中高點 $115.10［4］乘約 181.7 億股。"},
     {t:"悲觀", px:"約 $66", v:"約 1.2 兆美元", p:"跌破 IPO 價，並在財報與大量解鎖疊加時探底。", cond:"財報不如預期，且與 2026 全年財報後的大量解鎖時間重疊。", fail:"財報前股價守住 IPO 價 $83。", calc:"比照 SPCX 低點較 IPO 價低約 20%［9］：$83 × 0.8 ≈ $66，乘約 181.7 億股。"}
   ], badge:"情境示意，非估值模型目標價。三個價位都只依 SPCX 一檔股票的歷史路徑類比，樣本只有一個。"},
   {p:"估值以完全稀釋股數約 181.7 億股計算，依 Fortune、TechCrunch 報導的 $83 對應約 1.5 兆美元（完全稀釋）反推［5］［6］。TECHi 估的完全稀釋股數約 175 億股［8］，各情境的估值可能差幾個百分點。首日收盤 $97.17 對應約 1.77 兆美元。"},
   {h:"觀察清單"},
   {table:[["日期","事件"],["2026/12/8","SPCX 180 天主要鎖定期到期，可作為大型解鎖的參照［9］"],["2026/12/15","ANT 第一批定期解鎖，2.99 億股［8］"],["2026/12/21","ANT 據報納入 Nasdaq-100（次級來源）［4］［7］"],["2027/1/19","依本表估算，累計可解鎖量首次超過原始 IPO 發售股數（12.6 億股 > 9.8 億股）［8］"],["2026 全年財報日（未公告）","最大一關：累計可解鎖量從 16.1 億股跳到 33.1 億股，之後分五批再放 23.7 億股［8］"],["2027/5/17","ANT 創辦人開始可以賣（若 Q1 財報先公布則更早）［8］"]]},
   {h:"方法與限制"},
   {p:"IPO 價 $83、原始發售 9.8 億股、超額配售權 1.47 億股與 Class N 私募，已對照 SEC 的定價文件（11 月 18 日 FWP）［1］。超額配售權行使只有媒體報導［11］［12］，未見公司公告。首日開盤、最高、收盤與成交量只有 FinanceFeeds 引用 Nasdaq 的數字［4］；SPCX 股價與解鎖量來自 Quantral 整理［9］，未對照交易所資料。解鎖時間表取自 TECHi 依 S-1/A 的整理［8］，最終公開說明書（424B4）本次讀取失敗，引用前請再核對。情境為個人推演，不構成投資建議。"}
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
   ["Wikipedia：SpaceX IPO","https://en.wikipedia.org/wiki/Initial_public_offering_of_SpaceX",true],
   ["CNBC：承銷商行使超額配售權，IPO 募資合計 935 億美元（11 月 20 日）","https://www.cnbc.com/2026/11/20/anthropic-ipo-greenshoe.html",true],
   ["The Next Web：第二個交易日盤前下跌（引述 Bloomberg）","https://thenextweb.com/news/anthropic-shares-fall-day-two-greenshoe-119-5bn-ark-invest",true]
  ]
 },
 en: {
  kicker: "Feature | IPO",
  title: "Anthropic vs SpaceX after listing: how will lock-up expiries hit ANT?",
  dek: "SpaceX gave back its whole first-day gain within two months, and its low came just before its first earnings-linked unlock. Anthropic rose 17% on day one, but its unlocks start on day one. Using both stocks' price paths and unlock calendars, this piece sets out three scenarios for ANT over the next six months.",
  asof: "Data as of the US close on 19 Nov 2026 (ANT day one) and 13 Nov 2026 (SPCX)",
  blocks: [
   {summary:["Day-one gains were similar (SPCX +19.2%, ANT +17.1%), but ANT opened near its high of the day and gave back more than half by the close.","On TECHi's calendar, ANT's cumulative eligible supply first exceeds the original IPO size on 19 Jan 2027; the real test comes after the 2026 annual results.","The three scenarios rest on one stock's history (SPCX). They are illustrations, not valuation-model price targets."]},
   {toc:true},
   {kpis:[["ANT day-one gain","+17.1%","Close $97.17 vs $83 IPO"],["Day-one market value","~$1.77T","On ~18.17B fully diluted shares"],["Eligible for sale by Feb 2","1.61B shares","1.64x the original offering; 1.43x including the option"],["Next unlock","Dec 15","299M shares [8]"]]},
   {h:"Key points"},
   {list:["Day-one gains were similar (SPCX +19.2%, ANT +17.1%), but ANT opened at $111.50 and faded all day, while SPCX closed near its highs and rallied for two more days [4] [9].","SPCX lost almost half its value from peak to trough. The low came the day after its first earnings and the day before its first big unlock; the stock rose on the unlock itself [9].","ANT's unlocks are more frequent: by day 75 (Feb 2) eligible supply equals 1.64x the original offering, the same as SPCX released in one go on day 55; the real test comes after the 2026 annual results [8]."]},
   {h:"Day one compared"},
   {num:true, table:[["","SPCX","ANT"],["IPO price","$135 [9]","$83 [1]"],["Open","$150.00","$111.50 [4]"],["Intraday high","$176.52","$115.10 [4]"],["Close","$160.95 (+19.2%)","$97.17 (+17.1%) [4]"],["Close vs open","+7.3%","−12.9%"],["Day-one volume","not found","~840M shares [4]"],["Original IPO shares","~556M [9]","980M (upsized from 825M) [1]"],["Including the option","~639M (maximum) [9]","~1.127B (reported fully exercised) [11]"]]},
   {p:"The headline gains are close; the shape is not. SPCX closed above its open and reached a $211.39 close two sessions later. ANT's open was near its high of the day, and chasing demand was absorbed on day one. Bloomberg reported ANT down more than 10% in premarket trading on day two [12]; later closes are not included here."},
   {chart:"dayone", h:"Chart 1 | Day-one price range vs IPO price", desc:"Two bars compare SPCX and ANT on day one: open, intraday high and close, each as a gain over the IPO price. SPCX opened +11.1%, peaked +30.8% and closed +19.2%; ANT opened +34.3%, peaked +38.7% and closed +17.1%.", note:"Each bar runs from the IPO price to the intraday high. ANT opened near its high of the day and gave back more than half by the close; SPCX closed above its open. ANT's day-one figures come from a single source, FinanceFeeds citing Nasdaq [4]."},
   {chart:"price", h:"Chart 2 | Close vs IPO price after listing (SPCX key observations; ANT day one only)", desc:"Thirteen reported SPCX closes over 154 days after listing, relative to the IPO price: +19.2% on day one, a +56.6% peak on Jun 16, a −19.8% low on Aug 5, and +3.0% on Nov 13. ANT has a single point, +17.1% on day one.", note:"X-axis is calendar days since listing. SPCX points are key closes from press reports; the dashed line only joins them and is not a daily path. Aug 6 and 7 are derived from reported daily moves [9]. ANT has day-one data only, so the two paths cannot be compared."},
   {h:"The SPCX path: observations and untested hypotheses"},
   {list:["Observation: from the Jun 16 peak close the stock fell to $108.27 on Aug 5, 19.8% below the IPO price [9].","Observation: Aug 5 was the day after the first earnings report; on the Aug 6 unlock of ~912M shares the stock rose 6.1%, then 15.8% the next day [9]. Hypothesis: the market may have priced some of the supply in advance; but a fall followed by a rise does not prove that on its own. It needs checking against the earnings content, volume and the wider market.","Observation: ~1.3B more shares unlocked on Oct 23 and the stock traded at $144–149; it only fell below the IPO price on Oct 30 and closed at $123.62 on Nov 5 [9]. The sources give no reason for that slide, and the data cannot show whether later unlocks mattered less."]},
   {chart:"unlock", h:"Chart 3 | Cumulative shares eligible for sale ÷ original IPO shares", desc:"Step lines show cumulative eligible shares as a multiple of the original IPO shares. SPCX reached 1.64x in one step on day 55 and 6.91x by day 136; ANT moves in five steps, passing 1x on day 61 (Jan 19) and reaching 1.64x on day 75 (Feb 2).", note:"Eligible is not sold. The base is the original IPO size, excluding the over-allotment: ~556M for SPCX and 980M for ANT [1]. On the ~1.127B including the option, ANT's day-75 figure is 1.43x [11]. SPCX's Aug 20–Oct 9 tranches were reported at 320–330M each; 325M is used [9]. ANT stops at Feb 2, the last fixed date [8]."},
   {p:"By day 75 ANT's eligible supply equals 1.64x its original offering, the same as SPCX released at once on day 55. ANT releases a batch every two to three weeks, which spreads the selling, but may also make an SPCX-style squeeze on a tiny float less likely early on."},
   {h:"ANT unlock calendar"},
   {num:true, note:"Source: TECHi's summary of the S-1/A [8] [2], not checked against the final prospectus.", table:[["Date or trigger","Up to","Cumulative"],["Nov 19, day one (employees and non-founder insiders, up to 10% of holdings)","316M","316M"],["Dec 15, Jan 5 2027","299M each","914M"],["Jan 19, Feb 2","349M each","1.61B"],["Second trading day after 2026 annual results","1.7B","3.31B"],["Days 13, 27, 41, 55, 69 after those results","474M each","5.68B"],["Q1 2027 results or May 17, whichever first; founders may then sell up to 29% of their holdings","3.0B","8.68B"],["Days 34, 48, 62, 76 after Q1 results","449M each","10.48B"],["Second trading day after Q2 2027 results","562M","11.04B"],["Days 27, 41, 55, 69, 83 after Q2 results","505M each","13.57B"],["Q3 2027 results or Nov 18, whichever first, including founders' remaining shares","1.9B","15.47B"]]},
   {chart:"phases", h:"Chart 4 | 15.47B locked-up shares released in five phases", desc:"A segmented bar splits 15.47B locked-up shares into five release phases: 1.61B from listing to Feb 2, 4.07B after the 2026 annual results, 4.80B after Q1 2027 results or day 180, 3.09B after Q2 2027 results, and 1.90B at Q3 2027 results or day 365.", note:"Each phase sums the maximum sellable in its tranches, from the table above. Eligible is not sold [8]."},
   {p:"Two more points: the $26B Class N private placement bought about 313M shares at the $83 IPO price [1]; the buyers are AMD, Broadcom, Google, Micron, Microsoft, Nvidia and a TSMC affiliate [2]. These shares are not under the underwriters' lock-up but are restricted securities, and according to TECHi generally cannot be resold for six months [8]. Lead underwriters Goldman Sachs and Morgan Stanley can release locked-up shares early [2]."},
   {h:"Three scenarios"},
   {chart:"ladder", h:"Chart 5 | Where the three scenarios sit (illustrations, not price targets)", desc:"A price axis from $55 to $125 marks the $83 IPO price and the $97.17 day-one close. The bear scenario sits at about $66, the base at $83 to $90, and the bull at about $115.", note:"The axis is ANT's share price. Vertical lines mark the IPO price and the day-one close; valuations use ~18.17B fully diluted shares."},
   {scen:[
     {t:"Base", px:"$83–90", v:"~$1.5–1.6T", p:"Unlock supply from December to February and weak AI sentiment pull the stock back toward the IPO price.", cond:"Unlocks proceed on schedule, no major positive news, AI stocks stay weak.", fail:"The stock holds above the $97 day-one close before results, or breaks below $83 and stays there.", calc:"From the $83 IPO price to about $90 (+8%), times ~18.17B fully diluted shares."},
     {t:"Bull", px:"~$115", v:"~$2.1T", p:"Strong results plus passive buying from index inclusion take it back to the day-one intraday high.", cond:"The 2026 annual results beat expectations and ANT joins the Nasdaq-100 on 21 Dec as reported [4] [7].", fail:"Results disappoint, AI stocks keep falling, or index entry is delayed.", calc:"The $115.10 day-one intraday high [4] times ~18.17B shares."},
     {t:"Bear", px:"~$66", v:"~$1.2T", p:"ANT breaks its IPO price and bottoms where earnings and heavy unlocks coincide.", cond:"Results disappoint and coincide with the large unlock after the 2026 annual results.", fail:"The stock holds the $83 IPO price before results.", calc:"Like SPCX's low about 20% below its IPO price [9]: $83 × 0.8 ≈ $66, times ~18.17B shares."}
   ], badge:"Illustrations, not valuation-model price targets. All three prices are drawn by analogy from a single stock's history (SPCX), a sample of one."},
   {p:"Valuations use ~18.17B fully diluted shares, backed out from the ~$1.5T fully diluted valuation at $83 reported by Fortune and TechCrunch [5] [6]. TECHi estimates about 17.5B fully diluted shares [8], so each scenario's valuation could be a few per cent different. The $97.17 day-one close is about $1.77T."},
   {h:"Watch list"},
   {table:[["Date","Event"],["Dec 8, 2026","SPCX's main 180-day lock-up ends, a reference for large unlocks [9]"],["Dec 15, 2026","ANT's first scheduled unlock, 299M shares [8]"],["Dec 21, 2026","ANT reported to join the Nasdaq-100 (secondary source) [4] [7]"],["Jan 19, 2027","On this calendar, cumulative eligible supply first exceeds the original IPO size (1.26B > 980M) [8]"],["2026 annual results (date TBA)","The big one: cumulative eligible supply jumps from 1.61B to 3.31B, then 2.37B more in five steps [8]"],["May 17, 2027","ANT founders may start selling (earlier if Q1 results come first) [8]"]]},
   {h:"Method and limits"},
   {p:"The $83 price, the 980M original shares, the 147M-share option and the Class N placement have been checked against the SEC pricing document (FWP of 18 Nov) [1]. The option's exercise is reported only by the press [11] [12], with no company announcement seen. ANT's day-one open, high, close and volume come only from FinanceFeeds, citing Nasdaq [4]; SPCX prices and unlock sizes come from Quantral's summary [9] and have not been checked against exchange data. The unlock calendar is TECHi's summary of the S-1/A [8]; the final prospectus (424B4) could not be read this time, so verify before citing. The scenarios are my own and are not investment advice."}
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
   ["Wikipedia: SpaceX IPO","https://en.wikipedia.org/wiki/Initial_public_offering_of_SpaceX",true],
   ["CNBC: underwriters exercise the greenshoe, IPO raises $93.5B in total (20 Nov)","https://www.cnbc.com/2026/11/20/anthropic-ipo-greenshoe.html",true],
   ["The Next Web: day-two premarket fall (citing Bloomberg)","https://thenextweb.com/news/anthropic-shares-fall-day-two-greenshoe-119-5bn-ark-invest",true]
  ]
 }
}
];
// 專題頁的樣式與繪製。index.html 只呼叫 window.renderFeatures(容器, 語言)。
(function(){
 const css = `
 :root{--c-ant:#2c7a0c;--c-spcx:#2f6fd0;--ph1:#d3e8b5;--ph2:#a6cf74;--ph3:#6fa83f;--ph4:#3f8a1c;--ph5:#22600a;--card:#ffffff}
 @media (prefers-color-scheme: dark){:root:not([data-theme="light"]){--c-ant:#5f8f1a;--c-spcx:#4a85dc;--ph1:#2a4211;--ph2:#3e6219;--ph3:#5f8f1a;--ph4:#86bc25;--ph5:#b9dd7d;--card:#0c0c0c}}
 :root[data-theme="dark"]{--c-ant:#5f8f1a;--c-spcx:#4a85dc;--ph1:#2a4211;--ph2:#3e6219;--ph3:#5f8f1a;--ph4:#86bc25;--ph5:#b9dd7d;--card:#0c0c0c}
 .feat{max-width:820px;padding-top:26px}
 .feat .fhead{border-bottom:1px solid var(--rule);padding-bottom:18px;margin-bottom:6px}
 .feat .fk{display:inline-flex;gap:10px;align-items:center;font-size:12.5px;font-weight:700;letter-spacing:.06em;color:var(--accent)}
 .feat .fk time{color:var(--muted);font-weight:500;letter-spacing:0;font-variant-numeric:tabular-nums}
 .feat h2{font-family:var(--display);font-weight:900;font-size:32px;line-height:1.3;margin:8px 0 12px;text-wrap:balance}
 .feat .dek{font-size:17.5px;line-height:1.7;margin:0 0 10px;max-width:64ch}
 .feat .asof{font-size:12.5px;color:var(--muted);margin:0}
 .feat .kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--rule);border:1px solid var(--rule);border-radius:10px;overflow:hidden;margin:18px 0 8px}
 .feat .kpi{background:var(--card);padding:14px 16px}
 .feat .kpi .kl{font-size:12.5px;color:var(--muted);font-weight:500}
 .feat .kpi .kv{font-family:var(--body);font-weight:700;font-size:26px;line-height:1.25;margin:4px 0 2px;letter-spacing:-.01em}
 .feat .kpi .ks{font-size:12.5px;color:var(--muted)}
 .feat h3{font-family:var(--display);font-weight:900;font-size:21px;margin:34px 0 10px;padding-bottom:8px;border-bottom:2px solid var(--ink)}
 .feat p{margin:0 0 12px;max-width:68ch}
 .feat ul{margin:0 0 12px;padding-left:20px;max-width:68ch}
 .feat li{margin-bottom:6px}
 .feat .tw{overflow-x:auto;margin:4px 0 14px}
 .feat table{border-collapse:collapse;width:100%;font-size:14px;font-variant-numeric:tabular-nums}
 .feat th,.feat td{text-align:left;padding:8px 12px 8px 0;border-bottom:1px solid var(--rule);vertical-align:top}
 .feat th{font-size:12px;color:var(--muted);font-weight:700;letter-spacing:.04em;border-bottom:1.5px solid var(--ink)}
 .feat table.num td:not(:first-child),.feat table.num th:not(:first-child){text-align:right;white-space:nowrap;padding-left:12px}
 .feat table.num td:first-child{color:var(--ink)}
 .feat tbody tr:hover td{background:var(--surface)}
 .feat figure{margin:26px 0 18px;padding:18px 18px 12px;border:1px solid var(--rule);border-radius:10px;background:var(--card);position:relative}
 .feat figcaption{font-family:var(--display);font-weight:900;font-size:17px;margin:0 0 4px}
 .feat .legend{display:flex;flex-wrap:wrap;gap:6px 18px;font-size:13px;color:var(--muted);margin:2px 0 6px}
 .feat .legend span{display:inline-flex;align-items:center;gap:6px}
 .feat .legend i{width:16px;height:3px;border-radius:2px;display:inline-block}
 .feat .legend i.sq{width:10px;height:10px;border-radius:3px}
 .feat .legend svg{width:14px;height:14px}
 .feat svg.ch{width:100%;height:auto;display:block;overflow:visible;touch-action:pan-y}
 .feat svg text{font-family:var(--body);fill:var(--muted);font-size:12px;font-variant-numeric:tabular-nums}
 .feat svg .lab{font-size:12.5px;font-weight:700;fill:var(--ink)}
 .feat svg .ann{font-size:11.5px;fill:var(--muted)}
 .feat svg .in{font-size:12.5px;font-weight:700}
 .feat .fnote{font-size:12.5px;color:var(--muted);margin-top:6px;line-height:1.6}
 .feat figure details{margin-top:6px}
 .feat figure details table{font-size:13px;margin-top:6px}
 .feat .tip{position:absolute;pointer-events:none;background:var(--ink);color:var(--paper);font-size:12.5px;line-height:1.5;padding:7px 10px;border-radius:6px;max-width:260px;opacity:0;transition:opacity .08s;z-index:3;box-shadow:0 4px 14px rgba(0,0,0,.18)}
 .feat .tip b{font-weight:700}
 .feat .scen{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:6px 0 14px}
 .feat .sc{background:var(--card);border:1px solid var(--rule);border-top:4px solid var(--rule);padding:12px 14px;border-radius:0 0 8px 8px}
 .feat .sc.s0{border-top-color:var(--c-ant)}
 .feat .sc b{display:block;font-size:12.5px;color:var(--muted);letter-spacing:.04em}
 .feat .sc .px{font-family:var(--body);font-weight:700;font-size:24px;line-height:1.3}
 .feat .sc .v{font-size:12.5px;color:var(--muted);margin-bottom:6px}
 .feat .sc p{font-size:14px;margin:0}
 .feat .fsrc{font-size:13px;color:var(--muted);display:grid;gap:4px;margin-top:6px;counter-reset:s}
 .feat .fsrc a{counter-increment:s}
 .feat .fsrc a::before{content:counter(s) ". ";color:var(--muted)}
 .feat .sum{background:var(--surface);border-left:4px solid var(--c-ant);border-radius:0 8px 8px 0;padding:12px 16px;margin:18px 0 0}
 .feat .sum b{display:block;font-size:12.5px;color:var(--accent);letter-spacing:.06em;margin-bottom:4px}
 .feat .sum ol{margin:0;padding-left:20px;max-width:none}
 .feat .sum li{margin-bottom:4px}
 .feat .toc{margin:14px 0 0;font-size:13.5px;display:flex;flex-wrap:wrap;gap:6px 8px;align-items:center}
 .feat .toc span{color:var(--muted);font-weight:700;font-size:12.5px;margin-right:4px}
 .feat .toc a{border:1px solid var(--rule);border-radius:999px;padding:2px 10px;text-decoration:none;color:var(--ink)}
 .feat .toc a:hover{border-color:var(--accent);color:var(--accent)}
 .feat h3{scroll-margin-top:16px}
 .feat a.ref{font-size:.82em;text-decoration:none;color:var(--accent);margin:0 1px;font-variant-numeric:tabular-nums;white-space:nowrap}
 .feat .badge{font-size:13px;color:var(--ink);background:var(--surface);border:1px solid var(--rule);border-radius:8px;padding:8px 12px;margin:4px 0 10px}
 .feat .badge::before{content:"!";display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:50%;background:var(--ink);color:var(--paper);font-size:12px;font-weight:700;margin-right:8px;vertical-align:1px}
 .feat .sc dl{margin:10px 0 0;font-size:13px;display:grid;gap:6px}
 .feat .sc dt{font-weight:700;color:var(--muted);font-size:12px;letter-spacing:.04em}
 .feat .sc dd{margin:0}
 .feat .tnote{font-size:12.5px;color:var(--muted);margin:-8px 0 14px}
 .feat .swipe{display:none;font-size:12px;color:var(--muted);margin:4px 0 -2px}
 .feat .fsrc a{scroll-margin-top:16px}
 .feat .fsrc a:target{background:var(--accent-soft)}
 @media (max-width:640px){.feat .tw table.num,.feat .tw table.wide{min-width:560px}.feat .swipe{display:block}}
 @media (max-width:820px){.feat h2{font-size:25px}.feat .scen{grid-template-columns:1fr}.feat .kpis{grid-template-columns:repeat(2,1fr)}.feat figure{padding:14px 12px 10px}.feat .kpi .kv{font-size:22px}}
 `;
 const st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
 const NS = "http://www.w3.org/2000/svg";
 const s = (tag, at, txt) => { const e = document.createElementNS(NS, tag); for (const k in at) e.setAttribute(k, at[k]); if (txt != null) e.textContent = txt; return e; };
 const h = (tag, cls, txt) => { const e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; };
 const NAMES = {spcx:"SpaceX（SPCX）", ant:"Anthropic（ANT）"}, NAMES_EN = {spcx:"SpaceX (SPCX)", ant:"Anthropic (ANT)"};
 const sign = v => (v > 0 ? "+" : v < 0 ? "−" : "") + Math.abs(v);
 const narrowNow = () => window.innerWidth < 640;

 function tipper(fig){
  const tip = h("div","tip"); fig.appendChild(tip);
  return {
   show(lines, cx, cy){
    tip.textContent = ""; lines.forEach((l,i) => { if (i) tip.appendChild(document.createElement("br")); if (i === 0){ tip.appendChild(h("b", null, l)); } else tip.appendChild(document.createTextNode(l)); });
    tip.style.opacity = 1;
    const fw = fig.clientWidth, tw = tip.offsetWidth, th = tip.offsetHeight;
    let left = cx + 14; if (left + tw > fw - 6) left = cx - tw - 14;
    let top = cy - th - 10; if (top < 4) top = cy + 14;
    tip.style.left = Math.max(4, left) + "px"; tip.style.top = top + "px";
   },
   hide(){ tip.style.opacity = 0; }
  };
 }
 const figPos = (fig, svg, W, x, y) => { const fr = fig.getBoundingClientRect(), sr = svg.getBoundingClientRect(), k = sr.width / W; return [sr.left - fr.left + x * k, sr.top - fr.top + y * k]; };
 function legend(fig, items){ const lg = h("div","legend"); items.forEach(([kind, color, label]) => { const sp = h("span"); if (kind === "line"){ const i = h("i"); i.style.background = color; sp.appendChild(i); } else if (kind === "sq"){ const i = h("i","sq"); i.style.background = color; sp.appendChild(i); } else { const g = s("svg", {viewBox:"0 0 14 14"}); if (kind === "dot") g.appendChild(s("circle", {cx:7, cy:7, r:5, fill:color})); if (kind === "ring") g.appendChild(s("circle", {cx:7, cy:7, r:4.5, fill:"var(--card)", stroke:color, "stroke-width":2})); if (kind === "tick") g.appendChild(s("rect", {x:5.5, y:1, width:3, height:12, rx:1.5, fill:color})); if (kind === "dash"){ g.appendChild(s("line", {x1:0, x2:14, y1:7, y2:7, stroke:color, "stroke-width":1.75, "stroke-dasharray":"2 3"})); g.appendChild(s("circle", {cx:7, cy:7, r:3, fill:color})); } sp.appendChild(g); } sp.appendChild(document.createTextNode(label)); lg.appendChild(sp); }); fig.appendChild(lg); }
 function dataTable(fig, head, rows, lang){ const det = h("details"); det.appendChild(h("summary", null, lang === "en" ? "Show data table" : "看數據表")); const w = h("div","tw"); const tb = h("table","num"); const hr = h("tr"); head.forEach(t => hr.appendChild(h("th", null, t))); tb.appendChild(hr); rows.forEach(r => { const tr = h("tr"); r.forEach(c => tr.appendChild(h("td", null, c))); tb.appendChild(tr); }); w.appendChild(tb); det.appendChild(w); fig.appendChild(det); }

 // 折線／階梯圖：圖二、圖三
 function lineChart(fig, c, lang, kind){
  const narrow = narrowNow(), en = lang === "en", names = en ? NAMES_EN : NAMES;
  const W = narrow ? 360 : 720, H = narrow ? 250 : 320, m = {l:44, r: narrow ? 40 : 86, t:22, b:34};
  const x = v => m.l + v / c.xMax * (W - m.l - m.r);
  const y = v => m.t + (c.yMax - v) / (c.yMax - c.yMin) * (H - m.t - m.b);
  legend(fig, c.series.map(se => [kind === "price" && se.dashed ? "dash" : (kind === "price" && se.pts.length === 1 ? "dot" : "line"), "var(--c-" + se.key + ")", names[se.key] + (kind === "price" ? (se.pts.length === 1 ? (en ? ", day one only" : "，僅首日") : (en ? ", key closes" : "，關鍵收盤點")) : "")]));
  const svg = s("svg", {class:"ch", viewBox:`0 0 ${W} ${H}`, role:"img", "aria-label": fig.querySelector("figcaption").textContent});
  for (let v = c.yMin; v <= c.yMax + 1e-9; v += c.yStep){
   const base = (kind === "price" && v === 0);
   svg.appendChild(s("line", {x1:m.l, x2:W - m.r, y1:y(v), y2:y(v), stroke: base ? "var(--muted)" : "var(--rule)", "stroke-width": base ? 1.25 : 1}));
   svg.appendChild(s("text", {x:m.l - 8, y:y(v) + 4, "text-anchor":"end"}, kind === "price" ? sign(v) + "%" : v + "x"));
  }
  for (let d = 0; d <= c.xMax; d += (narrow ? 40 : 20)) svg.appendChild(s("text", {x:x(d), y:H - m.b + 18, "text-anchor":"middle"}, String(d)));
  svg.appendChild(s("text", {class:"ann", x:W - m.r, y:H - 2, "text-anchor":"end"}, en ? "days since listing" : "上市後天數"));
  if (kind === "price") svg.appendChild(s("text", {class:"ann", x:x(100), y:y(0) + 16, "text-anchor":"middle"}, en ? "IPO price" : "IPO 價"));
  if (c.ref){ const r = c.ref; svg.appendChild(s("line", {x1:m.l, x2:W - m.r, y1:y(r[0]), y2:y(r[0]), stroke:"var(--muted)", "stroke-width":1.25})); svg.appendChild(s("text", {class:"ann", x:m.l + 6, y:y(r[0]) - 6}, en ? r[2] : r[1])); }
  (c.events || []).forEach(ev => {
   svg.appendChild(s("line", {x1:x(ev[0]), x2:x(ev[0]), y1:m.t - 6, y2:H - m.b, stroke:"var(--c-spcx)", "stroke-width":1, opacity:.45}));
   const lab = en ? ev[2] : ev[1];
   svg.appendChild(s("text", {class:"ann", x:x(ev[0]) + 5, y:m.t - 8}, narrow ? lab.replace("SPCX ","") : lab));
  });
  const pts = [];
  c.series.forEach(se => {
   const col = "var(--c-" + se.key + ")";
   if (se.pts.length > 1){
    let d = "";
    se.pts.forEach((p, i) => { if (i === 0) d += `M${x(p[0])},${y(p[1])}`; else if (c.step) d += `H${x(p[0])}V${y(p[1])}`; else d += `L${x(p[0])},${y(p[1])}`; });
    if (c.step){ const lp = se.pts[se.pts.length - 1]; d += `H${x(lp[0]) + 8}`; }
    const base = y(0);
    const first = se.pts[0], lastX = c.step ? x(se.pts[se.pts.length - 1][0]) + 8 : x(se.pts[se.pts.length - 1][0]);
    if (kind === "price" && !se.dashed) svg.appendChild(s("path", {d: d + `L${lastX},${base}L${x(first[0])},${base}Z`, fill:col, opacity:.1}));
    const at = {d, fill:"none", stroke:col, "stroke-width":2, "stroke-linejoin":"round", "stroke-linecap":"round"}; if (se.dashed){ at["stroke-dasharray"] = "2 5"; at["stroke-width"] = 1.75; }
    svg.appendChild(s("path", at));
    if (se.dashed) se.pts.forEach(p => svg.appendChild(s("circle", {cx:x(p[0]), cy:y(p[1]), r:4, fill:col, stroke:"var(--card)", "stroke-width":2})));
   }
   const tips = en ? se.tipsEn : se.tips;
   se.pts.forEach((p, i) => { pts.push({se, p, tip:tips[i]}); });
  });
  // 標註：峰值、低點、終點
  const lab = (tx, ty, text, anchor) => svg.appendChild(s("text", {class:"lab", x:tx, y:ty, "text-anchor":anchor || "start"}, text));
  c.series.forEach(se => {
   const lp = se.pts[se.pts.length - 1], col = "var(--c-" + se.key + ")";
   svg.appendChild(s("circle", {cx:x(lp[0]) + (c.step ? 8 : 0), cy:y(lp[1]), r: se.pts.length === 1 ? 5.5 : 4.5, fill:col, stroke:"var(--card)", "stroke-width":2}));
   const tag = se.key === "ant" ? "ANT" : "SPCX";
   const val = kind === "price" ? sign(lp[1]) + "%" : lp[1] + "x";
   if (se.pts.length === 1) lab(x(lp[0]) + 10, y(lp[1]) + 22, (en ? "ANT, day one only " : "ANT 僅首日 ") + val);
   else lab(x(lp[0]) + (c.step ? 16 : 10), y(lp[1]) + 4, narrow ? tag : tag + " " + val);
  });
  if (kind === "price" && !narrow){
   const sp = c.series.find(se => se.key === "spcx").pts;
   const hi = sp.reduce((a,b) => b[1] > a[1] ? b : a), lo = sp.reduce((a,b) => b[1] < a[1] ? b : a);
   svg.appendChild(s("circle", {cx:x(hi[0]), cy:y(hi[1]), r:4, fill:"var(--c-spcx)", stroke:"var(--card)", "stroke-width":2}));
   svg.appendChild(s("text", {class:"ann", x:x(hi[0]) + 8, y:y(hi[1]) + 4}, (en ? "Jun 16 peak " : "6/16 高點 ") + sign(hi[1]) + "%"));
   svg.appendChild(s("circle", {cx:x(lo[0]), cy:y(lo[1]), r:4, fill:"var(--c-spcx)", stroke:"var(--card)", "stroke-width":2}));
   svg.appendChild(s("text", {class:"ann", x:x(lo[0]) - 8, y:y(lo[1]) + 16, "text-anchor":"end"}, (en ? "Aug 5 low " : "8/5 低點 ") + sign(lo[1]) + "%"));
  }
  // 十字準線與提示
  const T = tipper(fig);
  const cross = s("line", {y1:m.t, y2:H - m.b, stroke:"var(--muted)", "stroke-width":1, opacity:0});
  const hl = s("circle", {r:6, fill:"none", stroke:"var(--ink)", "stroke-width":2, opacity:0});
  svg.appendChild(cross); svg.appendChild(hl);
  const pick = px => { let best = null; pts.forEach(o => { const dx = Math.abs(x(o.p[0]) - px); if (!best || dx < best.dx) best = {o, dx}; }); return best && best.o; };
  const showAt = o => {
   const cx = x(o.p[0]), cy = y(o.p[1]);
   cross.setAttribute("x1", cx); cross.setAttribute("x2", cx); cross.setAttribute("opacity", .6);
   hl.setAttribute("cx", cx); hl.setAttribute("cy", cy); hl.setAttribute("opacity", 1);
   const val = kind === "price" ? sign(o.p[1]) + "%" : o.p[1] + "x";
   const [fx, fy] = figPos(fig, svg, W, cx, cy);
   T.show([names[o.se.key], o.tip, (kind === "price" ? (en ? "vs IPO price " : "相對 IPO 價 ") : (en ? "Multiple of original IPO shares " : "原始發售量的 ")) + val, (en ? "Day " : "第 ") + o.p[0] + (en ? "" : " 天")], fx, fy);
  };
  const hide = () => { cross.setAttribute("opacity", 0); hl.setAttribute("opacity", 0); T.hide(); };
  const ov = s("rect", {x:m.l, y:m.t, width:W - m.l - m.r + 12, height:H - m.t - m.b, fill:"transparent"});
  ov.addEventListener("pointermove", ev => { const sr = svg.getBoundingClientRect(); const px = (ev.clientX - sr.left) * W / sr.width; const o = pick(px); if (o) showAt(o); });
  ov.addEventListener("pointerdown", ev => { const sr = svg.getBoundingClientRect(); const px = (ev.clientX - sr.left) * W / sr.width; const o = pick(px); if (o) showAt(o); });
  ov.addEventListener("pointerleave", ev => { if (ev.pointerType === "mouse") hide(); });
  svg.appendChild(ov);
  pts.forEach(o => { const hit = s("circle", {cx:x(o.p[0]), cy:y(o.p[1]), r:12, fill:"transparent", tabindex:0, "aria-label": names[o.se.key] + " " + o.tip}); hit.addEventListener("focus", () => showAt(o)); hit.addEventListener("blur", hide); hit.addEventListener("pointerenter", () => showAt(o)); svg.appendChild(hit); });
  fig.appendChild(svg);
  dataTable(fig, [en ? "Series" : "標的", en ? "Day" : "天數", en ? "Value" : "數值", en ? "Note" : "說明"], pts.map(o => [names[o.se.key], String(o.p[0]), kind === "price" ? sign(o.p[1]) + "%" : o.p[1] + "x", o.tip]), lang);
 }

 // 圖一：首日價格區間
 function dayone(fig, c, lang){
  const narrow = narrowNow(), en = lang === "en", names = en ? NAMES_EN : NAMES;
  legend(fig, [["ring","var(--muted)", en ? "Open" : "開盤"],["dot","var(--muted)", en ? "Close" : "收盤"],["tick","var(--muted)", en ? "Intraday high (bar end)" : "盤中最高（橫條末端）"]]);
  const lw = narrow ? 64 : 128, W = narrow ? 360 : 720, rowH = 54, m = {t:8, b:30, r:22};
  const H = m.t + c.rows.length * rowH + m.b;
  const x = v => lw + (v - c.xMin) / (c.xMax - c.xMin) * (W - lw - m.r);
  const svg = s("svg", {class:"ch", viewBox:`0 0 ${W} ${H}`, role:"img", "aria-label": fig.querySelector("figcaption").textContent});
  for (let v = c.xMin; v <= c.xMax; v += c.xStep){ svg.appendChild(s("line", {x1:x(v), x2:x(v), y1:m.t, y2:H - m.b, stroke: v === 0 ? "var(--muted)" : "var(--rule)", "stroke-width": v === 0 ? 1.25 : 1})); svg.appendChild(s("text", {x:x(v), y:H - m.b + 18, "text-anchor":"middle"}, v === 0 ? (en ? "IPO" : "IPO 價") : "+" + v + "%")); }
  const T = tipper(fig);
  c.rows.forEach((r, i) => {
   const cy = m.t + i * rowH + rowH / 2, col = "var(--c-" + r.key + ")";
   svg.appendChild(s("rect", {x:0, y:cy - 6, width:10, height:10, rx:3, fill:col}));
   svg.appendChild(s("text", {class:"lab", x:16, y:cy + 4}, narrow ? r.key.toUpperCase() : names[r.key]));
   const x0 = x(0), x1 = x(r.high), bh = 14;
   svg.appendChild(s("path", {d:`M${x0},${cy - bh/2}H${x1 - 4}a4,4 0 0 1 4,4V${cy + bh/2 - 4}a4,4 0 0 1 -4,4H${x0}Z`, fill:col, opacity:.22}));
   svg.appendChild(s("rect", {x:x1 - 1.5, y:cy - bh/2 - 3, width:3, height:bh + 6, rx:1.5, fill:col}));
   svg.appendChild(s("line", {x1:x(r.open), x2:x(r.close), y1:cy, y2:cy, stroke:col, "stroke-width":2}));
   svg.appendChild(s("circle", {cx:x(r.open), cy, r:5.5, fill:"var(--card)", stroke:col, "stroke-width":2.5}));
   svg.appendChild(s("circle", {cx:x(r.close), cy, r:6, fill:col, stroke:"var(--card)", "stroke-width":2}));
   const left = r.close < r.open;
   svg.appendChild(s("text", {class:"lab", x:x(r.close) + (left ? -10 : 10), y:cy - 12, "text-anchor": left ? "end" : "start"}, (en ? "close " : "收 ") + "+" + r.close + "%"));
   if (!narrow) svg.appendChild(s("text", {class:"ann", x:x(r.open) + (left ? 10 : -10), y:cy + 22, "text-anchor": left ? "start" : "end"}, (en ? "open +" : "開 +") + r.open + "%"));
   const hit = s("rect", {x:0, y:cy - rowH/2, width:W, height:rowH, fill:"transparent", tabindex:0, "aria-label": names[r.key] + " " + (en ? r.tipEn : r.tip)});
   const show = () => { const [fx, fy] = figPos(fig, svg, W, x(r.close), cy); T.show([names[r.key], en ? r.tipEn : r.tip, (en ? "Open +" : "開盤 +") + r.open + "%｜" + (en ? "high +" : "最高 +") + r.high + "%｜" + (en ? "close +" : "收盤 +") + r.close + "%"], fx, fy); };
   hit.addEventListener("pointerenter", show); hit.addEventListener("focus", show); hit.addEventListener("pointerleave", T.hide); hit.addEventListener("blur", T.hide);
   svg.appendChild(hit);
  });
  fig.appendChild(svg);
  dataTable(fig, [en ? "Stock" : "標的", en ? "Open" : "開盤", en ? "High" : "最高", en ? "Close" : "收盤"], c.rows.map(r => [names[r.key], "+" + r.open + "%", "+" + r.high + "%", "+" + r.close + "%"]), lang);
 }

 // 圖四：分段長條
 const resolveColor = c => { const p = document.createElement("span"); p.style.color = c; p.style.display = "none"; document.body.appendChild(p); const v = getComputedStyle(p).color; p.remove(); return v; };
 const lum = col => { const m = col.match(/\d+(\.\d+)?/g); if (!m) return 1; const [r,g,b] = m.slice(0,3).map(v => { v = +v / 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }); return 0.2126*r + 0.7152*g + 0.0722*b; };
 function phases(fig, c, lang){
  const narrow = narrowNow(), en = lang === "en";
  const W = narrow ? 360 : 720, bh = 28, gap = 2, H = bh + 30;
  const svg = s("svg", {class:"ch", viewBox:`0 0 ${W} ${H}`, role:"img", "aria-label": fig.querySelector("figcaption").textContent});
  const T = tipper(fig);
  const total = c.parts.reduce((a,p) => a + p.v, 0), usable = W - gap * (c.parts.length - 1);
  let x0 = 0, cum = 0; const legendItems = [];
  fig.appendChild(svg);
  c.parts.forEach((p, i) => {
   const w = p.v / total * usable, col = "var(--ph" + (i + 1) + ")";
   const r = s("rect", {x:x0, y:0, width:w, height:bh, rx:4, fill:col});
   svg.appendChild(r);
   const val = en ? p.en.toFixed(2).replace(/0$/,"") + "B" : p.v.toFixed(1) + " 億";
   const t = s("text", {class:"in", x:x0 + 8, y:bh / 2 + 4.5}, val); svg.appendChild(t);
   t.style.fill = lum(resolveColor(col)) > 0.3 ? "#111111" : "#ffffff";
   let printed = true; if (t.getComputedTextLength() + 14 > w){ t.remove(); printed = false; }
   cum += p.v;
   const share = Math.round(p.v / total * 100) + "%";
   const hit = s("rect", {x:x0, y:0, width:w, height:bh, fill:"transparent", tabindex:0, "aria-label": (en ? p.nEn : p.n) + " " + val + " " + share});
   const cx = x0 + w / 2, cumNow = cum;
   const show = () => { const [fx, fy] = figPos(fig, svg, W, cx, 0); T.show([en ? p.nEn : p.n, (en ? "Up to " : "可賣上限 ") + val + "（" + share + "）", (en ? "Cumulative " : "累計 ") + (en ? (cumNow / 10).toFixed(2) + "B" : cumNow.toFixed(1) + " 億")], fx, fy); };
   hit.addEventListener("pointerenter", show); hit.addEventListener("focus", show); hit.addEventListener("pointerleave", T.hide); hit.addEventListener("blur", T.hide);
   svg.appendChild(hit);
   legendItems.push(["sq", col, (en ? p.nEn : p.n) + (printed ? "" : "：" + val)]);
   x0 += w + gap;
  });
  svg.appendChild(s("text", {x:0, y:bh + 20}, en ? "Listing" : "上市"));
  svg.appendChild(s("text", {x:W, y:bh + 20, "text-anchor":"end"}, (en ? "Total " : "合計 ") + (en ? "15.47B" : c.total + " 億股")));
  const lg = h("div","legend"); lg.style.flexDirection = "column"; lg.style.gap = "4px"; lg.style.marginTop = "10px";
  legendItems.forEach(([k, col, label]) => { const sp = h("span"); const i = h("i","sq"); i.style.background = col; sp.appendChild(i); sp.appendChild(document.createTextNode(label)); lg.appendChild(sp); });
  fig.appendChild(lg);
  dataTable(fig, [en ? "Phase" : "階段", en ? "Up to" : "可賣上限", en ? "Share" : "占比"], c.parts.map(p => [en ? p.nEn : p.n, en ? p.en.toFixed(2) + "B" : p.v.toFixed(1) + " 億股", Math.round(p.v / total * 100) + "%"]), lang);
 }

 // 圖五：情境價格位置
 function ladder(fig, c, lang){
  const narrow = narrowNow(), en = lang === "en";
  const lw = narrow ? 52 : 150, W = narrow ? 360 : 720, rowH = 46, m = {t:26, b:30, r:18};
  const H = m.t + c.rows.length * rowH + m.b;
  const x = v => lw + (v - c.xMin) / (c.xMax - c.xMin) * (W - lw - m.r);
  const svg = s("svg", {class:"ch", viewBox:`0 0 ${W} ${H}`, role:"img", "aria-label": fig.querySelector("figcaption").textContent});
  for (let v = c.xMin + 5; v <= c.xMax; v += c.xStep){ svg.appendChild(s("line", {x1:x(v), x2:x(v), y1:m.t, y2:H - m.b, stroke:"var(--rule)", "stroke-width":1})); svg.appendChild(s("text", {x:x(v), y:H - m.b + 18, "text-anchor":"middle"}, "$" + v)); }
  c.refs.forEach(([v, zh, e], i) => { svg.appendChild(s("line", {x1:x(v), x2:x(v), y1:m.t - 6, y2:H - m.b, stroke:"var(--ink)", "stroke-width":1.25, opacity:.55})); svg.appendChild(s("text", {class:"ann", x:x(v) + (i ? 5 : -5), y:m.t - 10, "text-anchor": i ? "start" : "end"}, en ? e : zh)); });
  const T = tipper(fig);
  c.rows.forEach((r, i) => {
   const cy = m.t + i * rowH + rowH / 2;
   svg.appendChild(s("text", {class:"lab", x:0, y:cy + (narrow ? 4 : -2)}, en ? r.tEn : r.t));
   if (!narrow) svg.appendChild(s("text", {class:"ann", x:0, y:cy + 14}, en ? r.vEn : r.v));
   const col = "var(--c-ant)";
   if (r.hi > r.lo){ svg.appendChild(s("rect", {x:x(r.lo), y:cy - 7, width:x(r.hi) - x(r.lo), height:14, rx:7, fill:col, opacity:.85})); }
   else svg.appendChild(s("circle", {cx:x(r.lo), cy, r:7, fill:col, stroke:"var(--card)", "stroke-width":2}));
   svg.appendChild(s("text", {class:"lab", x:x(r.hi) + 12, y:cy + 4}, en ? r.labEn : r.lab));
   const hit = s("rect", {x:0, y:cy - rowH/2, width:W, height:rowH, fill:"transparent", tabindex:0, "aria-label": (en ? r.tEn : r.t) + " " + (en ? r.labEn : r.lab)});
   const vs = (((r.lo + r.hi) / 2) / 83 - 1) * 100;
   const show = () => { const [fx, fy] = figPos(fig, svg, W, x(r.hi), cy); T.show([(en ? r.tEn : r.t), (en ? r.labEn : r.lab) + "｜" + (en ? r.vEn : r.v), (en ? "vs IPO price " : "相對 IPO 價 ") + (vs >= 0 ? "+" : "−") + Math.abs(vs).toFixed(0) + "%"], fx, fy); };
   hit.addEventListener("pointerenter", show); hit.addEventListener("focus", show); hit.addEventListener("pointerleave", T.hide); hit.addEventListener("blur", T.hide);
   svg.appendChild(hit);
  });
  fig.appendChild(svg);
  dataTable(fig, [en ? "Scenario" : "情境", en ? "Price" : "股價", en ? "Valuation" : "估值"], c.rows.map(r => [en ? r.tEn : r.t, en ? r.labEn : r.lab, en ? r.vEn : r.v]), lang);
 }

 function drawFigure(fig, f, b, lang){
  const c = f.charts[b.chart];
  fig.dataset.desc = b.desc || "";
  if (b.chart === "dayone") dayone(fig, c, lang);
  else if (b.chart === "phases") phases(fig, c, lang);
  else if (b.chart === "ladder") ladder(fig, c, lang);
  else lineChart(fig, c, lang, b.chart);
  const svg = fig.querySelector("svg.ch"); if (svg){ const id = "fg" + Math.random().toString(36).slice(2,8); svg.removeAttribute("aria-label"); const t = s("title", {id:id + "t"}, b.h); const d = s("desc", {id:id + "d"}, b.desc || ""); svg.insertBefore(d, svg.firstChild); svg.insertBefore(t, svg.firstChild); svg.setAttribute("aria-labelledby", id + "t " + id + "d"); }
 }
 // 文字中的［n］／[n] 轉成連到來源清單的連結
 function rich(el, text, uid){ const re = /[［\[](\d{1,2})[］\]]/g; let last = 0, m; while ((m = re.exec(text))){ if (m.index > last) el.appendChild(document.createTextNode(text.slice(last, m.index))); const a = h("a","ref", "[" + m[1] + "]"); a.href = "#" + uid + "-s" + m[1]; a.setAttribute("aria-label", "source " + m[1]); el.appendChild(a); last = re.lastIndex; } if (last < text.length) el.appendChild(document.createTextNode(text.slice(last))); return el; }
 const hr = (tag, cls, text, uid) => rich(h(tag, cls), text, uid);

 let lastArgs = null, rT = null;
 window.renderFeatures = function(root, lang){
  lastArgs = [root, lang];
  root.textContent = "";
  const F = window.FEATURES || [], en = lang === "en";
  F.forEach(f => {
   const d = f[lang] || f.zh, uid = f.id + "-" + lang; const art = h("article","feat"); root.appendChild(art);
   const hd = h("header","fhead");
   const k = h("div","fk"); k.appendChild(document.createTextNode(d.kicker)); const tm = h("time", null, f.date); tm.setAttribute("datetime", f.date); k.appendChild(tm); hd.appendChild(k);
   hd.appendChild(h("h2", null, d.title));
   hd.appendChild(h("p","dek", d.dek));
   hd.appendChild(h("p","asof", d.asof));
   art.appendChild(hd);
   const heads = d.blocks.filter(b => b.h && !b.chart).map(b => b.h).concat([en ? "Sources" : "來源"]);
   const slug = t => uid + "-h" + heads.indexOf(t);
   const tableWrap = (rows, cls, note) => { const w = h("div","tw"); const tb = h("table", cls); const th = h("thead"), tbd = h("tbody"); rows.forEach((r, i) => { const tr = h("tr"); r.forEach(c => tr.appendChild(hr(i === 0 ? "th" : "td", null, c, uid))); (i === 0 ? th : tbd).appendChild(tr); }); tb.appendChild(th); tb.appendChild(tbd); const sw = h("div","swipe", en ? "Swipe sideways to see the full table" : "← 左右滑動看完整表格 →"); art.appendChild(sw); w.appendChild(tb); art.appendChild(w); if (note) art.appendChild(hr("p","tnote", note, uid)); };
   d.blocks.forEach(b => {
    if (b.summary){ const box = h("section","sum"); box.appendChild(h("b", null, en ? "In three sentences" : "三句結論")); const ol = h("ol"); b.summary.forEach(x => ol.appendChild(hr("li", null, x, uid))); box.appendChild(ol); art.appendChild(box); }
    else if (b.toc){ const nav = h("nav","toc"); nav.setAttribute("aria-label", en ? "Contents" : "目錄"); nav.appendChild(h("span", null, en ? "Contents" : "目錄")); heads.forEach(t => { const a = h("a", null, t); a.href = "#" + slug(t); nav.appendChild(a); }); art.appendChild(nav); }
    else if (b.kpis){ const g = h("div","kpis"); b.kpis.forEach(([l, v, sub]) => { const t = h("div","kpi"); t.appendChild(h("div","kl", l)); t.appendChild(h("div","kv", v)); if (sub) t.appendChild(hr("div","ks", sub, uid)); g.appendChild(t); }); art.appendChild(g); }
    else if (b.chart){ const fig = h("figure"); fig.appendChild(h("figcaption", null, b.h)); art.appendChild(fig); drawFigure(fig, f, b, lang); if (b.note) fig.insertBefore(hr("div","fnote", b.note, uid), fig.querySelector("details")); }
    else if (b.h){ const t = h("h3", null, b.h); t.id = slug(b.h); art.appendChild(t); }
    else if (b.p) art.appendChild(hr("p", null, b.p, uid));
    else if (b.list){ const ul = h("ul"); b.list.forEach(x => ul.appendChild(hr("li", null, x, uid))); art.appendChild(ul); }
    else if (b.table) tableWrap(b.table, b.num ? "num" : "wide", b.note);
    else if (b.scen){
     if (b.badge) art.appendChild(h("div","badge", b.badge));
     const g = h("div","scen"); b.scen.forEach((x, i) => { const c = h("div","sc s" + i); c.appendChild(h("b", null, x.t + (en ? " (illustration)" : "（情境示意）"))); c.appendChild(h("div","px", x.px)); c.appendChild(h("div","v", x.v)); c.appendChild(hr("p", null, x.p, uid)); if (x.cond || x.fail || x.calc){ const dl = h("dl"); [[en ? "Holds if" : "成立條件", x.cond],[en ? "Fails if" : "失效條件", x.fail],[en ? "How it is calculated" : "計算方式", x.calc]].forEach(([dt, dd]) => { if (!dd) return; dl.appendChild(h("dt", null, dt)); dl.appendChild(hr("dd", null, dd, uid)); }); c.appendChild(dl); } g.appendChild(c); }); art.appendChild(g); }
   });
   const st = h("h3", null, en ? "Sources" : "來源"); st.id = slug(en ? "Sources" : "來源"); art.appendChild(st);
   const sl = h("div","fsrc");
   d.sources.forEach(([n, u, sec], i) => { const a = h("a", null, n + (sec ? (en ? " (secondary)" : "（次級）") : "")); a.href = u; a.target = "_blank"; a.rel = "noopener"; a.id = uid + "-s" + (i + 1); sl.appendChild(a); });
   art.appendChild(sl);
  });
 };
 // 觸控：點圖表以外的地方收起提示框
 document.addEventListener("pointerdown", ev => { if (ev.pointerType === "mouse") return; document.querySelectorAll(".feat .tip").forEach(t => { if (!t.parentElement.contains(ev.target)) t.style.opacity = 0; }); });
 // 跨過手機與桌機寬度時重畫，讓圖表版型跟著切換
 let wasNarrow = narrowNow();
 window.addEventListener("resize", () => { clearTimeout(rT); rT = setTimeout(() => { const n = narrowNow(); if (n !== wasNarrow && lastArgs && lastArgs[0].isConnected && lastArgs[0].classList.contains("on")){ wasNarrow = n; window.renderFeatures(lastArgs[0], lastArgs[1]); } else wasNarrow = n; }, 150); });
})();
