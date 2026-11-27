// 專題。每篇一個物件，最新的放最前面。圖表資料放在 charts，文字分 zh / en。
window.FEATURES = [
{
 id: "btc-ai-zero",
 date: "2026-11-27",
 charts: {
  exposed: {
   type: "hbar", max: 200, ticks: [0, 50, 100, 150, 200], fmt: "{v}",
   rows: [
    {zh:"P2WPKH 重複使用", en:"P2WPKH reused", v:180.1, lab:"180.1 萬 BTC", labEn:"1.80m BTC", note:"地址重複使用：花費過一次後公鑰已上鏈", noteEn:"Address reuse: the key went on-chain at the first spend"},
    {zh:"P2PK", en:"P2PK", v:171.7, lab:"171.7 萬 BTC", labEn:"1.72m BTC", note:"公鑰直接寫在輸出裡，不花費也已曝光", noteEn:"Public key sits in the output itself, exposed even if never spent", hl:true},
    {zh:"P2SH 重複使用", en:"P2SH reused", v:129.9, lab:"129.9 萬 BTC", labEn:"1.30m BTC", note:"地址重複使用", noteEn:"Address reuse"},
    {zh:"P2PKH 重複使用", en:"P2PKH reused", v:120.2, lab:"120.2 萬 BTC", labEn:"1.20m BTC", note:"地址重複使用", noteEn:"Address reuse"},
    {zh:"P2WSH 重複使用", en:"P2WSH reused", v:69.1, lab:"69.1 萬 BTC", labEn:"0.69m BTC", note:"地址重複使用", noteEn:"Address reuse"},
    {zh:"P2TR（Taproot）", en:"P2TR (Taproot)", v:19.8, lab:"19.8 萬 BTC", labEn:"0.20m BTC", note:"地址內含公鑰", noteEn:"The address itself carries the key", hl:true}
   ]
  },
  race: {
   type: "timeline", x0: 2025.95, x1: 2027.15, today: "2026-11-27",
   kinds: {law:{zh:"標準定案", en:"Standard finalised"}, launch:{zh:"研究或報告發表", en:"Research or report published"}, draft:{zh:"草案或未經同行審查", en:"Draft or not yet peer-reviewed"}, plan:{zh:"預估", en:"Expected"}},
   rows: [
    {zh:"AI 研究", en:"AI research", ev:[
     {d:"2026-07-28", k:"launch", zh:"Anthropic：7 輪 AES-128 攻擊快 200–800 倍；HAWK 金鑰強度減半［2］", en:"Anthropic: 7-round AES-128 attack 200–800x faster; HAWK key strength halved [2]"},
     {d:"2026-08-10", k:"launch", zh:"Anthropic：黎曼 ζ 函數臨界線零點比例下界 41.6% → 67.2%［3］", en:"Anthropic: lower bound on zeta zeros on the critical line raised from 41.6% to 67.2% [3]"},
     {d:"2026-10-26", k:"draft", zh:"OpenAI、Anthropic 各自發表指數時間假說反證（未經同行審查）［4］［5］", en:"OpenAI and Anthropic each publish refutations of the Exponential Time Hypothesis (not yet peer-reviewed) [4][5]"}
    ]},
    {zh:"標準與監理", en:"Standards", ev:[
     {d:"2024-08-13", k:"law", zh:"NIST 發布三項後量子密碼標準（FIPS 203、204、205）［12］", en:"NIST publishes three post-quantum standards (FIPS 203, 204, 205) [12]"},
     {d:"2026-11-19", k:"launch", zh:"IOSCO 發布量子運算對金融市場影響報告［11］", en:"IOSCO publishes report on quantum computing and financial markets [11]"}
    ]},
    {zh:"比特幣協議", en:"Bitcoin", ev:[
     {d:"2026-02-11", k:"draft", zh:"BIP-360（P2MR）以草案併入 BIP 庫［8］［10］", en:"BIP-360 (P2MR) merged into the BIPs repository as a draft [8][10]"},
     {d:"2026-04-14", k:"draft", zh:"BIP-361（後量子遷移與舊簽章退場）草案公開［9］［10］", en:"BIP-361 (post-quantum migration and legacy signature sunset) draft published [9][10]"}
    ]}
   ]
  }
 },
 zh: {
  kicker: "專題｜比特幣",
  title: "AI 會讓比特幣歸零嗎？檢查 Chamath 的論點",
  dek: "Chamath Palihapitiya 在 Social Capital 研究文章中主張，AI 加速數學與密碼學研究，可能讓比特幣的安全假設失效。他提出的時間差風險值得認真看，但公開段落引用的證據有一項與原始來源不符，另一項尚未經過審查。這篇逐一核對，整理比特幣實際的曝險與升級進度，最後談台灣的銀行該準備什麼。",
  asof: "資料截至 2026 年 11 月 27 日；Chamath 文章只讀到公開段落，付費部分未讀",
  orig: ["原文：Chamath Palihapitiya〈Will Bitcoin inevitably go to zero?〉，Social Capital Research，2026 年 11 月 27 日（部分內容需付費）","https://research.socialcapital.com/p/will-bitcoin-inevitably-go-to-zero"],
  blocks: [
   {summary:["Chamath 公開段落最有力的論點是時間差：如果 AI 大幅加快密碼學突破，從發現弱點到能實際利用的時間，可能比比特幣完成升級所需的時間短［1］。","但他引用的證據有誤或過度延伸：Anthropic 的成果是提高黎曼 ζ 函數零點比例的下界，不是證明黎曼猜想；AES 攻擊只針對 7 輪簡化版；指數時間假說反證尚未經同行審查；三者都沒有涉及比特幣使用的橢圓曲線［2］［3］［5］。","真正可量化的曝險是約 691 萬 BTC（約占流通量 33%）的公鑰已經公開，而比特幣的後量子提案仍是草案［6］［8］［9］。對台灣的銀行，重點是保管的金鑰管理與加密敏捷度，不是預測 BTC 會不會歸零。"]},
   {toc:true},
   {kpis:[["公鑰已曝光的 BTC","約 691 萬","約占流通量 33%（2026 年 2 月）［6］"],["其中 P2PK","約 172 萬","公鑰直接寫在輸出裡［6］"],["BIP-360、361","仍為草案","未選定後量子簽章，也沒有啟用時程［10］"],["IOSCO 估計","2030–2035","可能出現破解現行密碼的量子電腦（次級來源轉述）［10］［11］"]]},
   {h:"Chamath 的論點"},
   {p:"文章的前提是：數位系統的「安全」只代表目前已知最快的破解方法需要不切實際的時間。如果新的數學方法能把破解成本降低好幾個數量級，原本不可行的攻擊就會變得可行。他認為 AI 代理正大幅加快這類數學發現，而比特幣除了程式碼之外沒有任何其他保障，是這個風險最典型的測試對象［1］。"},
   {p:"公開段落把比特幣的安全拆成三部分：鎖的排列方式、鎖本身（SHA-256 雜湊與 ECDSA 簽章），以及維護帳本的工作量證明。他是否認為比特幣能被修補，寫在付費段落，本文沒有讀到［1］。"},
   {h:"引用的證據核對"},
   {note:"「判讀」為本文依原始來源的整理。", table:[["文章說法","原始來源","判讀"],["Claude 與數學家 Levent Alpöge 約六週產出黎曼猜想的證明［1］","Anthropic 8 月 10 日發表的是把臨界線上零點比例的下界從 41.6% 提高到 67.2%，已用 Lean 形式化驗證；Alpöge 是檢視者之一。Anthropic 表示不預期這套方法能證明黎曼猜想［3］","與原始來源不符"],["AI 代理推翻了 27 年的指數時間假說［1］","OpenAI 與 Anthropic 10 月各自發表反證，雙方都說模型在 10 月 16 日找到核心演算法。截至 10 月 28 日沒有獨立認證；參與審查的學者表明不代表背書［4］［5］","待核實"],["Claude Mythos Preview 對 7 輪 AES-128 的攻擊快 200 至 800 倍，對現行系統沒有實際影響［1］","與 Anthropic 7 月 28 日原文一致。同一份研究也把後量子簽章候選 HAWK 的有效金鑰強度減半；Anthropic 表示兩者都不影響現行系統［2］","正確"],["1977 年估計分解 125 位數要 4 京年，1994 年 8 個月就分解了 129 位數［1］","史實大致相符［13］。但 RSA 依賴大數分解，比特幣簽章依賴 secp256k1 橢圓曲線，無法用這段歷史推算比特幣的時程","正確，但不能外推"]]},
   {p:"四項證據裡，兩項站得住，一項與原始來源不符，一項還在審查。更關鍵的是，沒有一項直接涉及橢圓曲線離散對數，也就是比特幣簽章依賴的數學問題。這些成果能支持「AI 正在加快數學研究」，但還不足以推出「比特幣的簽章會被破解」，更推不出必然歸零。"},
   {h:"比特幣真正的攻擊面"},
   {table:[["攻擊面","若被攻破會怎樣","能否升級"],["簽章（ECDSA、Schnorr，皆用 secp256k1）","有人能從公開的公鑰算出私鑰，就能轉走公鑰已曝光的幣；節點會照規則接受這些有效簽章，無法分辨誰才是真正持有人","可以新增後量子簽章（BIP-360 是第一步），但持有人必須自己把幣轉到新地址；從不移動的幣最難處理［8］［9］"],["挖礦（SHA-256 工作量證明）","取得壓倒性算力優勢者可以阻擋交易或重組近期區塊；但無法替別人簽章，也無法讓完整節點接受超額發行","可以更換挖礦演算法，但會影響全部礦工的設備投資，需要整個社群共識"]]},
   {p:"兩個攻擊面的後果不同。簽章被破解，影響的是「誰擁有哪些幣」；挖礦被壓制，影響的是交易確認是否可靠。對持有人而言，前者是直接的財產風險。"},
   {h:"多少 BTC 的公鑰已經曝光"},
   {chart:"exposed", h:"圖一｜公鑰已曝光的 BTC，依類型（萬 BTC）", desc:"水平長條依類型列出公鑰已公開的 BTC 數量，單位萬 BTC：P2WPKH 重複使用 180.1、P2PK 171.7、P2SH 重複使用 129.9、P2PKH 重複使用 120.2、P2WSH 重複使用 69.1、Taproot 19.8。合計約 691 萬 BTC。", note:"Project Eleven 依 2026 年 2 月區塊高度 936,882 統計［6］。藍色為地址類型本身就公開公鑰；綠色為地址被重複使用。其他來源估計約 600 萬至 690 萬 BTC，口徑與日期不同［7］［10］。"},
   {p:"約 72% 的曝光來自地址重複使用，持有人只要把幣轉到新地址就能大幅降低風險。比較難處理的是 P2PK：公鑰直接寫在輸出裡，只要這些幣不移動，就一直曝光。如果遺失或沉睡的幣比例高，社群就要面對兩難：繼續承認舊簽章，攻擊者可能轉走這些幣；停用舊簽章，來不及遷移的合法持有人也會失去動用資產的能力［7］［9］。"},
   {p:"交易所與保管機構是另一層。保管機構常用多方簽核或多方運算（MPC），但後量子版本的門檻簽章仍在研究階段；據 CoinDesk 報導，BitGo 與 Silence Laboratories 5 月完成模擬交易，尚未進入正式運作［7］。"},
   {h:"誰跑得快：研究進度與升級進度"},
   {chart:"race", h:"圖二｜AI 研究、標準與比特幣升級的時間線（2026 年；更早的事件標在左緣）", desc:"時間軸分三列：AI 研究在 2026 年 7 月、8 月、10 月各有一項成果；標準與監理有 2024 年 8 月 NIST 後量子標準與 2026 年 11 月 IOSCO 報告；比特幣協議有 2026 年 2 月 BIP-360 與 4 月 BIP-361 兩項草案。", note:"BIP-360、361 狀態皆為草案；據 TFTC，BIP-361 的部署段落已暫時撤下，等待社群選定後量子簽章［10］。"},
   {p:"AI 研究的節奏以月計，比特幣的升級以年計。BIP-360 提議新的輸出類型，降低公鑰長期曝光的風險；BIP-361 討論如何遷移與何時停用舊簽章。兩者都還沒選定後量子簽章演算法，也沒有啟用時程［8］［9］［10］。這就是 Chamath 論點中最站得住的部分：風險不在今天，而在警示期可能縮短。"},
   {h:"兩種情境的差別"},
   {list:["有預警：弱點先以學術成果出現，錢包、交易所與持有人有時間遷移。市場可能波動，但所有權可以保住。","突襲：第一個公開訊號就是大量舊幣被轉走。市場可能在社群形成共識前先大跌，凍結或承認舊幣的爭議也會在壓力下進行。","兩種情境對估值的影響差很多，關鍵變數是警示期長短，而不是比特幣「必然」怎樣。這是情境示意，不是價格預測。"]},
   {h:"台灣的銀行可以怎麼看", bank:true, lead:"重點：先把保管的金鑰管理做成可以升級，比判斷比特幣會不會歸零更重要。"},
   {list:["把加密敏捷度寫進保管業務設計。記錄每個地址的類型，避免地址重複使用，並先演練把資產遷移到新地址或新簽章的流程。","檢查保管與 MPC 供應商的後量子路線圖。盡職調查時詢問門檻簽章的升級計畫與時程；這部分業界仍在研究階段［7］。","風險揭露寫情境，不寫結論。對客戶與內部風控，把「簽章被破解」與「挖礦被壓制」分開列為情境，說明影響與應變，而不是預測歸零。","這不只是加密資產的問題。銀行網站、訊息與憑證用的也是同類公鑰密碼；NIST 標準已經定案，IOSCO 也建議金融業現在就開始準備［11］［12］。","持續追蹤四個指標。BIP-360 是否啟用、比特幣社群選定哪種後量子簽章、指數時間假說反證的審查結果，以及 IOSCO 等國際組織的後續要求。"]},
   {h:"方法與限制"},
   {p:"Chamath 文章只讀到公開段落，他對比特幣能否修補的結論在付費段落［1］。黎曼 ζ 與密碼分析成果以 Anthropic 原文為準［2］［3］；指數時間假說反證以 arXiv 預印本與新聞報導為準，尚未經同行審查［4］［5］。曝光 BTC 數量取自 Project Eleven 的 2026 年 2 月統計［6］，不同機構口徑不同，也無法區分遺失或沉睡的幣。BIP 狀態與 IOSCO 報告內容部分來自 TFTC 轉述［10］，IOSCO 原文本次未讀取。本文不構成投資建議。"}
  ],
  sources: [
   ["Social Capital Research：Will Bitcoin inevitably go to zero?（Chamath Palihapitiya，11 月 27 日）","https://research.socialcapital.com/p/will-bitcoin-inevitably-go-to-zero",false],
   ["Anthropic：用 Claude 找出密碼學弱點（7 月 28 日）","https://www.anthropic.com/research/discovering-cryptographic-weaknesses",false],
   ["Anthropic：黎曼 ζ 函數臨界線零點下界（8 月 10 日）","https://www.anthropic.com/research/riemann-zeta",false],
   ["arXiv：ETH is Dead, Long Live SH（MIT 等）","https://arxiv.org/pdf/2611.02650",false],
   ["Let's Data Science：OpenAI 與 Anthropic 各自推翻指數時間假說","https://letsdatascience.com/blog/openai-anthropic-broke-1999-conjecture-both-found-it-oct-16",true],
   ["Project Eleven：比特幣橢圓曲線簽章曝險","https://report.projecteleven.com/section-2/elliptic-curve-digital-signatures",true],
   ["CoinDesk：量子風險延伸到保管機構、跨鏈橋與 600 萬枚幣（11 月 22 日）","https://www.coindesk.com/tech/2026/11/22/bitcoin-s-quantum-security-challenge-extends-to-bridges-custodians-and-millions-of-coins",true],
   ["BIP-360（GitHub）","https://github.com/bitcoin/bips/blob/master/bip-0360.mediawiki",false],
   ["BIP-361（GitHub）","https://github.com/bitcoin/bips/blob/master/bip-0361.mediawiki",false],
   ["TFTC：IOSCO 報告與 BIP-360 進度（11 月 21 日）","https://www.tftc.io/iosco-quantum-risk-report-bitcoin-bip-360-post-quantum",true],
   ["IOSCO：Implications of Quantum Computing on Financial Markets（PDF）","https://www.iosco.org/library/pubdocs/pdf/IOSCOPD833.pdf",false],
   ["NIST：三項後量子密碼 FIPS 標準核定（2024 年 8 月）","https://csrc.nist.gov/news/2024/postquantum-cryptography-fips-approved",false],
   ["Wikipedia：RSA numbers（RSA-129）","https://en.wikipedia.org/wiki/RSA_numbers",true]
  ]
 },
 en: {
  kicker: "Feature | Bitcoin",
  title: "Will AI send Bitcoin to zero? Checking Chamath's argument",
  dek: "In a Social Capital research piece, Chamath Palihapitiya argues that AI-accelerated mathematics and cryptography could undermine the assumptions behind Bitcoin's security. His point about timing deserves attention, but one piece of evidence in the public section contradicts its primary source and another has yet to be reviewed. This feature checks each claim, sets out Bitcoin's actual exposure and upgrade progress, and considers what Taiwan's banks should prepare.",
  asof: "Data as of 27 November 2026; only the public section of Chamath's article was read, not the paywalled part",
  orig: ["Original article: Chamath Palihapitiya, 'Will Bitcoin inevitably go to zero?', Social Capital Research, 27 November 2026 (partly paywalled)","https://research.socialcapital.com/p/will-bitcoin-inevitably-go-to-zero"],
  blocks: [
   {summary:["The strongest point in Chamath's public section is about timing: if AI sharply speeds up cryptographic breakthroughs, the gap between finding a weakness and exploiting it could be shorter than the time Bitcoin needs to upgrade [1].","But some of his evidence is wrong or overstretched: Anthropic raised a lower bound on zeros of the Riemann zeta function rather than proving the Riemann hypothesis; the AES attack targets a 7-round reduced version; the refutation of the Exponential Time Hypothesis has not been peer-reviewed; and none of the three touches the elliptic curve Bitcoin uses [2][3][5].","The exposure that can actually be measured is about 6.91m BTC, roughly 33% of supply, whose public keys are already visible, while Bitcoin's post-quantum proposals are still drafts [6][8][9]. For Taiwan's banks, the priority is key management and crypto-agility in custody, not forecasting whether BTC goes to zero."]},
   {toc:true},
   {kpis:[["BTC with exposed public keys","~6.91m","~33% of supply (Feb 2026) [6]"],["Of which P2PK","~1.72m","Public key written into the output [6]"],["BIP-360 and BIP-361","Still drafts","No post-quantum signature chosen, no activation timeline [10]"],["IOSCO estimate","2030–2035","Window in which a cryptographically relevant quantum computer is plausible (as reported, secondary) [10][11]"]]},
   {h:"Chamath's argument"},
   {p:"The article starts from the premise that a digital system is 'secure' only because the fastest known way to break it would take an impractically long time. New mathematics that cuts the cost of an attack by several orders of magnitude could make the impractical practical. He argues that AI agents are rapidly accelerating such discoveries, and that Bitcoin, backed by nothing but its code, is the archetypal test of this risk [1]."},
   {p:"The public section splits Bitcoin's security into three parts: how the locks are arranged, the locks themselves (SHA-256 hashing and ECDSA signatures), and the proof of work that maintains the ledger. Whether he thinks Bitcoin can be patched is in the paywalled section, which this feature has not read [1]."},
   {h:"Checking the evidence"},
   {note:"The 'Assessment' column is this feature's reading of the primary sources.", table:[["Claim in the article","Primary source","Assessment"],["Claude produced a proof of the Riemann hypothesis with mathematician Levent Alpöge over about six weeks [1]","On 10 August Anthropic published a result raising the lower bound on the share of zeta zeros on the critical line from 41.6% to 67.2%, formally verified in Lean; Alpöge was one of its examiners. Anthropic says it does not expect these techniques to prove the Riemann hypothesis [3]","Contradicts the source"],["AI agents overturned the 27-year-old Exponential Time Hypothesis [1]","OpenAI and Anthropic each published refutations in October, both saying their models found the core algorithm on 16 October. As of 28 October no one had independently certified either; reviewing academics said their involvement was not an endorsement [4][5]","Unverified"],["Claude Mythos Preview's attack on 7-round AES-128 is 200 to 800 times faster, with no practical effect on systems in use [1]","Matches Anthropic's 28 July post. The same work halved the effective key strength of HAWK, a post-quantum signature candidate; Anthropic says neither affects deployed systems [2]","Accurate"],["A 1977 estimate put factoring a 125-digit number at 40 quadrillion years; a 129-digit number was factored in eight months in 1994 [1]","Broadly matches the historical record [13]. But RSA rests on factoring, while Bitcoin signatures rest on the secp256k1 elliptic curve, so this history gives no timeline for Bitcoin","Accurate, but not transferable"]]},
   {p:"Of the four pieces of evidence, two hold up, one contradicts its source and one is still under review. More importantly, none of them touches the elliptic-curve discrete logarithm, the problem Bitcoin's signatures rely on. Together they support the claim that AI is speeding up mathematical research. They do not show that Bitcoin's signatures will be broken, let alone that it must go to zero."},
   {h:"Bitcoin's real attack surfaces"},
   {table:[["Attack surface","If broken","Can it be upgraded?"],["Signatures (ECDSA and Schnorr, both on secp256k1)","Anyone able to derive private keys from public keys could move coins whose keys are exposed; nodes would accept the valid signatures and could not tell who the rightful owner is","A post-quantum signature can be added (BIP-360 is a first step), but holders must move their own coins to new addresses; coins that never move are the hardest case [8][9]"],["Mining (SHA-256 proof of work)","An attacker with overwhelming hash power could censor transactions or reorganise recent blocks, but could not sign for others or make full nodes accept extra issuance","The mining algorithm can be changed, but that would strand miners' hardware and needs community-wide consensus"]]},
   {p:"The two surfaces fail differently. A signature break changes who owns which coins; a mining attack undermines how reliable confirmations are. For holders, the first is a direct property risk."},
   {h:"How much BTC already has an exposed key"},
   {chart:"exposed", h:"Figure 1 | BTC with exposed public keys, by type (10,000 BTC)", desc:"Horizontal bars show BTC with publicly visible keys by type, in units of 10,000 BTC: P2WPKH reused 180.1, P2PK 171.7, P2SH reused 129.9, P2PKH reused 120.2, P2WSH reused 69.1, Taproot 19.8. Total about 6.91m BTC.", note:"Project Eleven count at block height 936,882, February 2026 [6]. Blue marks address types that reveal the key by design; green marks reused addresses. Other sources estimate roughly 6.0m to 6.9m BTC, using different methods and dates [7][10]."},
   {p:"About 72% of the exposure comes from address reuse, which holders can largely fix by moving coins to a fresh address. P2PK is harder: the key is written into the output, so the coins stay exposed for as long as they do not move. If many of them are lost or dormant, the community faces a dilemma. Keep honouring old signatures and an attacker might take the coins; retire them and legitimate holders who miss the deadline lose access [7][9]."},
   {p:"Exchanges and custodians add another layer. Custodians often rely on multi-party approval or multi-party computation (MPC), but post-quantum threshold signatures are still at the research stage. CoinDesk reports that BitGo and Silence Laboratories completed a simulated transaction in May, with no production deployment yet [7]."},
   {h:"Who moves faster: research or upgrades"},
   {chart:"race", h:"Figure 2 | AI research, standards and Bitcoin upgrades (2026; earlier events pinned to the left edge)", desc:"A timeline in three rows: AI research has results in July, August and October 2026; standards and supervision have NIST's post-quantum standards in August 2024 and IOSCO's report in November 2026; Bitcoin has two drafts, BIP-360 in February 2026 and BIP-361 in April 2026.", note:"BIP-360 and BIP-361 are both drafts. According to TFTC, BIP-361's deployment section has been pulled until the community settles on a post-quantum signature [10]."},
   {p:"AI research moves in months; Bitcoin upgrades move in years. BIP-360 proposes a new output type that reduces long-term key exposure, and BIP-361 sets out how to migrate and when to retire old signatures. Neither has chosen a post-quantum signature algorithm or set an activation timeline [8][9][10]. That is the most defensible part of Chamath's argument: the risk is not today, but a warning period that may be shrinking."},
   {h:"Two scenarios"},
   {list:["With warning: a weakness first appears as an academic result, giving wallets, exchanges and holders time to migrate. Markets may swing, but ownership can be preserved.","Without warning: the first public signal is a wave of old coins being moved. Prices could fall before the community reaches consensus, and the decision to freeze or honour old coins would be made under pressure.","The valuation impact of the two differs greatly. The key variable is the length of the warning period, not any inevitable outcome. These are illustrations, not price forecasts."]},
   {h:"What Taiwan's banks can take from this", bank:true, lead:"Bottom line: making custody key management upgradeable matters more than calling whether Bitcoin goes to zero."},
   {list:["Build crypto-agility into custody design. Record the type of every address, avoid address reuse and rehearse moving assets to new addresses or signature schemes.","Check custody and MPC vendors' post-quantum roadmaps. Ask about plans and timelines for threshold signatures during due diligence; the industry is still at the research stage here [7].","Disclose scenarios, not conclusions. For clients and internal risk, treat a signature break and a mining attack as separate scenarios, with their impact and response, rather than forecasting zero.","This is not only a crypto-asset issue. Bank websites, messaging and certificates use the same kind of public-key cryptography; NIST's standards are final and IOSCO advises the financial sector to start preparing now [11][12].","Track four signals. They are whether BIP-360 activates, which post-quantum signature Bitcoin chooses, the outcome of reviews of the Exponential Time Hypothesis refutations, and follow-up requirements from IOSCO and other international bodies."]},
   {h:"Method and limitations"},
   {p:"Only the public section of Chamath's article was read; his conclusion on whether Bitcoin can be patched is behind the paywall [1]. The zeta and cryptanalysis results follow Anthropic's own posts [2][3]. The Exponential Time Hypothesis refutations rely on an arXiv preprint and press coverage and have not been peer-reviewed [4][5]. Exposed BTC figures come from Project Eleven's February 2026 count [6]; methods vary between providers, and the data cannot separate lost or dormant coins. Some BIP status details and the IOSCO findings are as reported by TFTC [10]; the IOSCO report itself was not read for this feature. Nothing here is investment advice."}
  ],
  sources: [
   ["Social Capital Research: Will Bitcoin inevitably go to zero? (Chamath Palihapitiya, 27 November)","https://research.socialcapital.com/p/will-bitcoin-inevitably-go-to-zero",false],
   ["Anthropic: Discovering cryptographic weaknesses with Claude (28 July)","https://www.anthropic.com/research/discovering-cryptographic-weaknesses",false],
   ["Anthropic: lower bound on zeta zeros on the critical line (10 August)","https://www.anthropic.com/research/riemann-zeta",false],
   ["arXiv: ETH is Dead, Long Live SH (MIT and others)","https://arxiv.org/pdf/2611.02650",false],
   ["Let's Data Science: OpenAI and Anthropic each refute the Exponential Time Hypothesis","https://letsdatascience.com/blog/openai-anthropic-broke-1999-conjecture-both-found-it-oct-16",true],
   ["Project Eleven: Bitcoin elliptic-curve signature exposure","https://report.projecteleven.com/section-2/elliptic-curve-digital-signatures",true],
   ["CoinDesk: quantum threat extends to custodians, bridges and 6 million coins (22 November)","https://www.coindesk.com/tech/2026/11/22/bitcoin-s-quantum-security-challenge-extends-to-bridges-custodians-and-millions-of-coins",true],
   ["BIP-360 (GitHub)","https://github.com/bitcoin/bips/blob/master/bip-0360.mediawiki",false],
   ["BIP-361 (GitHub)","https://github.com/bitcoin/bips/blob/master/bip-0361.mediawiki",false],
   ["TFTC: IOSCO report and BIP-360 status (21 November)","https://www.tftc.io/iosco-quantum-risk-report-bitcoin-bip-360-post-quantum",true],
   ["IOSCO: Implications of Quantum Computing on Financial Markets (PDF)","https://www.iosco.org/library/pubdocs/pdf/IOSCOPD833.pdf",false],
   ["NIST: post-quantum cryptography FIPS approved (August 2024)","https://csrc.nist.gov/news/2024/postquantum-cryptography-fips-approved",false],
   ["Wikipedia: RSA numbers (RSA-129)","https://en.wikipedia.org/wiki/RSA_numbers",true]
  ]
 }
},
{
 id: "asia-stablecoin-pace",
 date: "2026-11-27",
 charts: {
  pace: {
   type: "timeline", x0: 2025.0, x1: 2027.3, today: "2026-11-27",
   rows: [
    {zh:"香港", en:"Hong Kong", ev:[
     {d:"2025-08-01", k:"law", zh:"《穩定幣條例》生效［2］", en:"Stablecoins Ordinance commences [2]"},
     {d:"2026-04-10", k:"launch", zh:"首批牌照：滙豐、碇點金融（Anchorpoint）［3］［4］", en:"First licences: HSBC and Anchorpoint [3][4]"},
     {d:"2026-08", k:"launch", zh:"港元穩定幣 HKDAP 向機構推出（8 月，日期待核實）［5］", en:"HKDAP rolled out to institutions (August; exact day unverified) [5]"},
     {d:"2026-10-30", k:"draft", zh:"碇點金融與 Visa、Mastercard 研究卡組織結算［6］", en:"Anchorpoint explores settlement on Visa and Mastercard [6]"}
    ]},
    {zh:"日本", en:"Japan", ev:[
     {d:"2023-06-01", k:"law", zh:"修正《資金決濟法》施行，穩定幣定位為電子決濟手段", en:"Amended Payment Services Act in force; stablecoins become electronic payment instruments"},
     {d:"2025-10-27", k:"launch", zh:"JPYC 發行（資金移動業，單筆 100 萬日圓上限）［10］", en:"JPYC launches (funds-transfer licence, ¥1m transfer cap) [10]"},
     {d:"2026-06-24", k:"launch", zh:"JPYSC 發行（SBI 新生信託銀行，信託型）［11］", en:"JPYSC launches (SBI Shinsei Trust Bank, trust type) [11]"},
     {d:"2026-10-16", k:"draft", zh:"三大銀行完成共同發行概念驗證［13］", en:"Three megabanks complete joint-issuance proof of concept [13]"},
     {d:"2027-03", k:"plan", zh:"三大銀行目標 2026 會計年度內上線［13］", en:"Megabanks target live use within FY2026 [13]"}
    ]},
    {zh:"新加坡", en:"Singapore", ev:[
     {d:"2023-08-15", k:"law", zh:"MAS 定案單一貨幣穩定幣框架［7］", en:"MAS finalises single-currency stablecoin framework [7]"},
     {d:"2026-10-16", k:"draft", zh:"《支付服務法》修正諮詢截止［8］", en:"Payment Services Act amendment consultation closes [8]"},
     {d:"2026-11-18", k:"draft", zh:"發布存款代幣化指引［9］", en:"Guide on deposit tokenisation published [9]"}
    ]},
    {zh:"台灣", en:"Taiwan", ev:[
     {d:"2026-07-22", k:"law", zh:"《虛擬資產服務法》公布［15］", en:"Virtual Asset Service Act promulgated [15]"},
     {d:"2026-09-22", k:"draft", zh:"銀行可申請試辦存款代幣［17］", en:"Banks may apply to pilot deposit tokens [17]"},
     {d:"2026-11-03", k:"draft", zh:"穩定幣發行子法草案預告［16］", en:"Draft issuance regulations published [16]"},
     {d:"2026-11-24", k:"draft", zh:"央行預告準備金繳存及查核辦法草案［15］", en:"CBC publishes draft reserve requirement rules [15]"},
     {d:"2027-02", k:"plan", zh:"據報 2027 年第一季施行（次級來源）［18］", en:"Reportedly takes effect Q1 2027 (secondary) [18]"}
    ]},
    {zh:"韓國", en:"South Korea", ev:[
     {d:"2026-11-24", k:"draft", zh:"《數位資產基本法》政府版公布［14］", en:"Government Digital Asset Basic Act draft published [14]"}
    ]},
    {zh:"泰國", en:"Thailand", ev:[
     {d:"2026-10-20", k:"draft", zh:"泰國央行泰銖穩定幣原則諮詢（至 11/17）［19］", en:"Bank of Thailand consults on baht stablecoin principles (to 17 Nov) [19]"},
     {d:"2026-11-13", k:"draft", zh:"泰國證交會擬每日 500 萬泰銖移轉上限（至 11/26）［20］［21］", en:"Thai SEC proposes THB 5m daily transfer cap (to 26 Nov) [20][21]"}
    ]}
   ]
  },
  nonusd: {
   type: "hbar", max: 900, ticks: [0, 300, 600, 900], fmt: "{v}",
   rows: [
    {zh:"歐元", en:"Euro", v:810, lab:"8.1 億美元", labEn:"$810m", note:"EURC 4.99 億、EURCV 1.87 億美元", noteEn:"EURC $499m, EURCV $187m", hl:true},
    {zh:"日圓", en:"Yen", v:145, lab:"1.45 億美元", labEn:"$145m", note:"JPYSC 1.27 億、JPYC 0.15 億美元", noteEn:"JPYSC $127m, JPYC $15m"},
    {zh:"港元", en:"Hong Kong dollar", v:13.2, lab:"1,320 萬美元", labEn:"$13.2m", note:"主要為 HKDAP", noteEn:"Mostly HKDAP"},
    {zh:"新加坡元", en:"Singapore dollar", v:12.8, lab:"1,280 萬美元", labEn:"$12.8m", note:"主要為 XSGD", noteEn:"Mostly XSGD"},
    {zh:"韓元", en:"Korean won", v:0.5, lab:"約 50 萬美元", labEn:"~$0.5m", note:"尚無持牌發行人", noteEn:"No licensed issuer yet"}
   ]
  },
  hist: {
   type: "smallmult",
   labels: ["2023/12","2024/06","2024/12","2025/06","2025/12","2026/06","2026/11"],
   panels: [
    {key:"spcx", zh:"美元穩定幣（億美元）", en:"USD stablecoins ($bn)", unit:" 億美元", unitEn:"bn",
     v:[130.4,160.7,202.9,247.5,303.0,301.9,282.2], min:100, max:320, ticks:[100,200,300],
     zhO:{v:[1304,1607,2029,2475,3030,3019,2822], min:1000, max:3200, ticks:[1000,2000,3000]}},
    {key:"ant", zh:"歐元穩定幣（億美元）", en:"EUR stablecoins ($bn)", unit:" 億美元", unitEn:"bn",
     v:[0.31,0.24,0.29,0.48,0.66,0.66,0.81], min:0, max:1, ticks:[0,0.5,1],
     zhO:{v:[3.1,2.4,2.9,4.8,6.6,6.6,8.1], min:0, max:10, ticks:[0,5,10]}}
   ]
  }
 },
 zh: {
  kicker: "專題｜穩定幣",
  title: "亞洲穩定幣誰走得快？再看美元與歐元穩定幣的差距",
  dek: "香港與日本已有持牌本幣穩定幣上線，新加坡、台灣的法律或框架已定、細則還在走，韓國與泰國仍在草案階段。但亞洲本幣穩定幣合計只有約 1.7 億美元；歐元穩定幣在 MiCA 上路兩年多後，規模也只有美元的約 0.3%。這篇整理六個亞洲法域的進度，並比較美元與歐元兩套制度，最後談台灣的銀行可以怎麼看。",
  asof: "流通量為 DefiLlama 以美元計的數字，截至 2026 年 11 月 26–27 日；法規進度截至 11 月 27 日",
  blocks: [
   {summary:["亞洲進度可分三段：香港、日本已有持牌本幣穩定幣流通；新加坡、台灣法律或框架已定，修法與子法仍在進行；韓國、泰國還在草案與諮詢。","規模都很小：亞洲本幣穩定幣合計約 1.7 億美元，低於台灣央行草案中「單一檔次超過 100 億元新臺幣才須繳存準備金」的門檻（以草案的 28:1 概估約 3.6 億美元）［1］［15］。","歐元穩定幣規模約為美元的 0.3%，說明監理明確不會自動帶來需求；各地共同的方向是由銀行或銀行聯盟擔任發行人。"]},
   {toc:true},
   {kpis:[["美元穩定幣流通量","2,836 億美元","USDT 1,736 億、USDC 692 億［1］"],["歐元穩定幣","8.1 億美元","約為美元的 0.3%（約 1/350）［1］"],["亞洲本幣穩定幣合計","約 1.7 億美元","日圓 1.45 億占多數［1］"],["已有持牌本幣穩定幣","香港、日本","新加坡 XSGD 已流通，新制修法未完成"]]},
   {h:"亞洲六個法域走到哪裡"},
   {p:"下圖把各法域的法律生效、發牌或上線、草案與諮詢，以及已公布的預計時程放在同一條時間軸上。實心點是法律生效或框架定案，綠色方塊是發牌或上線，空心圈是草案、諮詢或試驗，虛線圈是預計時程。"},
   {chart:"pace", h:"圖一｜亞洲六個法域的穩定幣里程碑（2025 年至 2027 年初；更早的事件標在左緣）", desc:"時間軸列出香港、日本、新加坡、台灣、韓國與泰國的穩定幣里程碑。香港 2025 年 8 月條例生效、2026 年 4 月首批發牌；日本 2023 年 6 月修法施行、2025 年 10 月 JPYC 與 2026 年 6 月 JPYSC 發行；新加坡 2023 年 8 月框架定案、2026 年修法諮詢；台灣 2026 年 7 月專法公布、11 月子法與央行準備金草案預告；韓國 2026 年 11 月政府版草案；泰國 2026 年 10 至 11 月兩項諮詢。", note:"日期以官方文件為準；香港 HKDAP 推出只確認到月份，台灣 2027 年第一季施行為媒體報導［18］。日本 2027 年 3 月指三大銀行「2026 會計年度內」的目標，不是法定日期。"},
   {h:"各法域現況"},
   {note:"流通量來自 DefiLlama［1］，含未受當地監理的發行人，只代表鏈上供給，不代表支付使用量。", table:[["法域","法律狀態","已流通的本幣穩定幣","銀行角色","本幣穩定幣流通量"],["香港","條例 2025/8/1 生效［2］","HKDAP（碇點金融）；滙豐港元穩定幣上線時程待核實［3］［4］［5］","滙豐為首批持牌人；發鈔行參與代幣化存款測試","約 1,320 萬美元"],["日本","2023/6 修法施行；金融廳研究會正檢討準備資產與 100 萬日圓上限［12］","JPYC、JPYSC［10］［11］","信託銀行發行 JPYSC；三大銀行完成共同發行概念驗證［13］","約 1.45 億美元"],["新加坡","2023 年框架定案［7］，《支付服務法》修正諮詢 10/16 截止，擬禁止付息［8］","XSGD 等；新制下的「MAS 監理穩定幣」標示待修法完成［8］","存款代幣化另有指引，上鏈不改變存款性質［9］","約 1,280 萬美元"],["台灣","專法 2026/7/22 公布；子法與央行準備金辦法草案預告中［15］［16］","無","銀行可申請試辦存款代幣［17］；央行草案由受託銀行代為撥轉準備金［15］","無"],["韓國","政府版草案 11/24 公布，尚待國會審議［14］","無持牌發行人","韓元穩定幣須由銀行持股過半的聯盟發行［14］","約 50 萬美元"],["泰國","央行原則與證交會移轉上限兩項諮詢［19］［20］","無持牌發行人","待諮詢結果","未列入統計"]]},
   {p:"如果只看法規，台灣不算慢：專法已公布，進度在新加坡之後、韓國與泰國之前。真正的差距在市場端，香港與日本已經有人實際發行、有人開始用；台灣要等子法定案、發行人取得許可後，才會出現第一檔新臺幣穩定幣。"},
   {h:"本幣穩定幣的規模"},
   {chart:"nonusd", h:"圖二｜非美元穩定幣流通量（百萬美元）", desc:"水平長條比較五種非美元穩定幣的流通量，以百萬美元計：歐元 810、日圓 145、港元 13.2、新加坡元 12.8、韓元約 0.5。", note:"以美元換算，匯率變動會影響數字。美元穩定幣約 2,836 億美元，畫進同一張圖會讓其他長條看不見，所以不列入［1］。"},
   {p:"亞洲四種本幣合計約 1.7 億美元，其中日圓占八成以上。換個尺度看，台灣央行草案的繳存門檻是單一檔次流通超過 100 億元新臺幣，以草案的 28:1 概估約 3.6 億美元［15］；目前整個亞洲的本幣穩定幣加起來都還沒有到這個數字。對發行人而言，準備金繳存在初期多半不會是成本重點，準備資產的管理與贖回能力才是。"},
   {h:"美元與歐元：規模差在哪裡"},
   {chart:"hist", h:"圖三｜美元與歐元穩定幣流通量（各自縱軸）", desc:"兩個小圖分別畫出美元與歐元穩定幣流通量。美元從 2023 年 12 月約 1,304 億美元增加到 2025 年 12 月約 3,030 億美元，2026 年 11 月約 2,822 億美元。歐元從約 3.1 億美元增加到約 8.1 億美元。", note:"兩張圖縱軸不同，不能直接比較線的高低。最後一點為 11 月 26 日，與前一點只隔五個月。歐元穩定幣以美元計，期間歐元升值也會使數字變大［1］。"},
   {p:"美元穩定幣從高點回落約 7%，歐元穩定幣同期增加約 23%，但兩者規模仍差約 350 倍。MiCA 的電子貨幣代幣規範 2024 年 6 月起適用，制度比美國早到位，規模卻沒有跟上。原因可能包括鏈上交易仍以美元計價、歐元利率較低使發行人收益較少，以及合規要求讓部分交易所下架不合規的穩定幣；這些是推論，本文沒有資料可以拆分各自的影響。"},
   {h:"兩套制度比較"},
   {note:"美國部分依 OCC 最終規則與 Gibson Dunn 解析［22］［23］；歐盟部分依 EBA 說明［24］［25］。", table:[["項目","美元（GENIUS Act）","歐元（MiCA 電子貨幣代幣）"],["法律與生效","2025 年 7 月簽署；2027/1/18 生效，OCC 規則同日生效［22］","2024/6/30 起適用［24］"],["誰可以發行","銀行子公司、聯邦核准的非銀行發行人；小型發行人可選州制［23］","信用機構或電子貨幣機構［24］"],["準備資產","一比一，隔離保管，限現金、存款、短期國庫券等高流動資產［22］［23］","一比一；一定比例須存放於銀行，重大代幣比例更高［24］"],["付息","禁止［22］","禁止［24］"],["大型發行人","規模大者原則上納入聯邦監理［23］","重大代幣由 EBA 直接監理；USDC 為首例，11/12 起［25］"],["目前流通量","約 2,836 億美元［1］","約 8.1 億美元［1］"],["銀行聯盟","21 家機構合資，先發美元、2027 上半年上線為目標［26］","Qivalis，37 家銀行，10/14 取得荷蘭央行電子貨幣機構授權（次級來源）［27］"]]},
   {p:"兩套制度在一比一準備與禁止付息上幾乎一致，差在發行人範圍：美國允許非銀行發行人取得聯邦許可，歐盟只限信用機構與電子貨幣機構。另一個共通點是銀行聯盟：美國有 21 家機構的合資案，歐元有 37 家銀行的 Qivalis，亞洲則有韓國要求銀行持股過半、日本三大銀行共同發行。"},
   {h:"台灣的銀行可以怎麼看", bank:true, lead:"重點：先找到用途、評估聯盟發行；準備資產保管與受託銀行業務現在就能先做。"},
   {list:["先想用途，再想發行。歐元的例子說明，規則清楚但沒有使用場景，規模就上不來。新臺幣穩定幣較可能先落在企業支付、代幣化資產交割與跨境收付，這些也正是存款代幣試辦可以先驗證的地方［17］。","評估聯盟發行。韓國、日本、美國、歐元區的銀行都在走聯合發行，台灣的銀行可以比較單獨申請與共同設立發行機構，在成本、治理與通路上的差異。","準備資產保管是現成的業務。央行草案規定準備金補足或提領由受託銀行代為撥轉［15］；不論誰發行，受託銀行的保管、撥轉與報表能力都需要先建好。","美元穩定幣的需求不會等新臺幣。客戶接觸的主要還是 USDT、USDC；銀行在合規通路、出入金與保管上的角色，可能比發行本幣更早帶來收入。","把繳存門檻放進試算。100 億元新臺幣的門檻在初期很可能碰不到，但準備資產收益、贖回流動性與付息禁令，會直接影響發行的商業模式。"]},
   {h:"方法與限制"},
   {p:"流通量取自 DefiLlama［1］，屬次級資料，以美元換算，包含未受當地監理的發行人，也不區分鏈上重複計算；只代表供給，不代表支付使用量。時間軸日期以主管機關文件為主；香港 HKDAP 推出日期只確認到月份，台灣 2027 年第一季施行為媒體報導，韓國草案尚未經國會審議，泰國兩項諮詢的結果尚未公布。美元與歐元制度比較為摘要，引用前請回到原始規則核對。"}
  ],
  sources: [
   ["DefiLlama 穩定幣數據","https://defillama.com/stablecoins",true],
   ["香港特區政府：《穩定幣條例》8 月 1 日生效","https://www.info.gov.hk/gia/general/202506/06/P2025060600275.htm",false],
   ["香港金管局：持牌穩定幣發行人名冊","https://www.hkma.gov.hk/eng/regulatory-resources/registers/register-of-licensed-stablecoin-issuers/",false],
   ["滙豐：取得香港穩定幣發行人牌照","https://www.about.hsbc.com.hk/news-and-media/hsbc-welcomes-hkmas-grant-of-a-hong-kong-stablecoin-issuer-licence",false],
   ["碇點金融新聞稿","https://anchorpoint.hk/media-press/",false],
   ["碇點金融：與 Visa、Mastercard 研究 HKDAP（PDF）","https://anchorpoint.hk/uploads/2026/10/Anchorpoint-to-Explore-Enabling-HKDAP-as-The-First-Regulated-Stablecoin-in-Asia-Supported-Across-Both-Mastercard-and-Visas-Global-Networks.pdf",false],
   ["MAS：定案穩定幣監理框架（2023）","https://www.mas.gov.sg/news/media-releases/2023/mas-finalises-stablecoin-regulatory-framework",false],
   ["MAS：穩定幣修法諮詢","https://www.mas.gov.sg/news/media-releases/2026/mas-consults-on-legislative-amendments-to-implement-stablecoin-regulatory-framework",false],
   ["MAS：存款代幣化指引（PDF）","https://www.mas.gov.sg/-/media/mas-media-library/regulation/guidelines/ppd/guide-on-the-tokenisation-of-bank-deposits/guide-on-the-tokenisation-of-bank-deposits_18-nov-2026vf.pdf",false],
   ["The Block：JPYC 發行","https://theblock.co/news/business/2025-10-27-japan-jpyc-launches-yen-stablecoin-376199",true],
   ["The Block：SBI 發行 JPYSC","https://www.theblock.co/news/defi/2026-06-24-japan-sbi-group-launches-jpysc-405952",true],
   ["金融廳研究會事務局資料（日文）","https://www.fsa.go.jp/singi/digital_2026/shiryo/261102/jimukyoku.pdf",false],
   ["三菱日聯銀行：三行共同發行概念驗證（PDF）","https://www.bk.mufg.jp/global/newsroom/news2026/pdf/newse1016_1.pdf",false],
   ["韓國金融委員會：數位資產基本法政府版（韓文）","https://www.fsc.go.kr/no010101/88199",false],
   ["中央銀行：穩定幣發行準備金繳存及查核辦法草案","https://www.cbc.gov.tw/tw/cp-302-195226-fa371-1.html",false],
   ["金管會 11 月 3 日新聞稿：穩定幣發行子法草案","https://www.fsc.gov.tw/ch/home.jsp?id=96&parentpath=0,2&mcustomize=news_view.jsp&dataserno=202611030002&dtable=News",false],
   ["金管會 9 月 22 日新聞稿：存款代幣試辦","https://www.fsc.gov.tw/ch/home.jsp?id=96&parentpath=0,2&mcustomize=news_view.jsp&dataserno=202609220001&dtable=News",false],
   ["聯合報：專法預計第一季施行","https://udn.com/news/story/7239/9871143",true],
   ["泰國央行：泰銖穩定幣原則諮詢（泰文）","https://www.bot.or.th/th/laws-and-rules/public-hearing/public-hearing-20261020-Stablecoin.html",false],
   ["泰國證交會：穩定幣每日移轉上限諮詢","https://www.sec.or.th/EN/Pages/News_Detail.aspx?SECID=13562&NewsNo=253&NewsYear=2026&Lang=EN",false],
   ["The Block：泰國擬設每日上限","https://www.theblock.co/news/regulation/2026-11-13-thailand-seeks-daily-stablecoin-cap-439676",true],
   ["OCC：GENIUS Act 最終規則","https://www.occ.gov/news-issuances/news-releases/2026/nr-occ-2026-92.html",false],
   ["Gibson Dunn：OCC 支付穩定幣框架解析","https://www.gibsondunn.com/the-genius-act-occ-finalizes-its-payment-stablecoin-framework/",true],
   ["EBA：MiCA 資產參考代幣與電子貨幣代幣","https://www.eba.europa.eu/regulation-and-policy/asset-referenced-and-e-money-tokens-mica",false],
   ["EBA：USDC 列為首個重大電子貨幣代幣","https://www.eba.europa.eu/publications-and-media/press-releases/eba-classifies-usdc-first-significant-e-money-token-european-union",false],
   ["桑坦德：21 家機構籌設穩定幣公司","https://www.santander.com/en/press-room/press-releases/2026/09/group-of-leading-international-financial-institutions-to-establish-stablecoin-enterprise",false],
   ["The Block：德銀託管上線與 Qivalis 授權","https://www.theblock.co/news/business/2026-11-11-deutsche-bank-goes-live-with-digital-asset-custody-service-signs-asset-management-deal-437851",true]
  ]
 },
 en: {
  kicker: "Feature | Stablecoins",
  title: "Who is moving fastest on stablecoins in Asia, and how far behind the dollar is the euro?",
  dek: "Hong Kong and Japan already have licensed local-currency stablecoins in circulation. Singapore and Taiwan have a framework or law in place, with rules still being finalised, while South Korea and Thailand remain at the draft stage. Yet Asian local-currency stablecoins add up to only about $170m, and more than two years after MiCA took effect, euro stablecoins are about 0.3% the size of dollar ones. This feature maps progress across six Asian jurisdictions, compares the US and EU regimes, and sets out what Taiwan's banks might take from it.",
  asof: "Supply figures are DefiLlama USD values as of 26–27 November 2026; regulatory status as of 27 November",
  blocks: [
   {summary:["Asia moves in three groups: Hong Kong and Japan have licensed local-currency stablecoins in circulation; Singapore and Taiwan have a framework or law, with amendments and rules still in progress; South Korea and Thailand are at draft and consultation stage.","Volumes are tiny: Asian local-currency stablecoins total about $170m, below the NT$10bn per-token threshold above which Taiwan's central bank draft requires reserves (roughly $360m at the draft's 28:1 estimate) [1][15].","Euro stablecoins are about 0.3% the size of dollar ones, a sign that regulatory clarity does not create demand on its own; the shared direction everywhere is banks or bank consortia acting as issuers."]},
   {toc:true},
   {kpis:[["USD stablecoin supply","$283.6bn","USDT $173.6bn, USDC $69.2bn [1]"],["EUR stablecoins","$810m","About 0.3% of USD (roughly 1/350) [1]"],["Asian local-currency total","~$170m","Yen accounts for $145m [1]"],["Licensed local coins live","Hong Kong, Japan","Singapore's XSGD circulates; its new regime awaits legislation"]]},
   {h:"Where six Asian jurisdictions stand"},
   {p:"The chart puts each jurisdiction's laws in force, licences or launches, drafts and consultations, and announced targets on a single timeline. A solid dot marks a law in force or a finalised framework, a green square a licence or launch, an open ring a draft, consultation or pilot, and a dashed ring an expected date."},
   {chart:"pace", h:"Figure 1 | Stablecoin milestones in six Asian jurisdictions (2025 to early 2027; earlier events pinned to the left edge)", desc:"Timeline of stablecoin milestones in Hong Kong, Japan, Singapore, Taiwan, South Korea and Thailand. Hong Kong's ordinance took effect in August 2025 and first licences followed in April 2026; Japan's amended law took effect in June 2023, with JPYC launching in October 2025 and JPYSC in June 2026; Singapore finalised its framework in August 2023 and consulted on amendments in 2026; Taiwan promulgated its act in July 2026 and published draft rules and central bank reserve rules in November; South Korea published a government draft in November 2026; Thailand ran two consultations in October and November 2026.", note:"Dates follow official documents. Hong Kong's HKDAP rollout is confirmed only to the month, and Taiwan's Q1 2027 start date comes from press reports [18]. Japan's March 2027 marker reflects the megabanks' target of going live within FY2026, not a statutory date."},
   {h:"Status by jurisdiction"},
   {note:"Supply figures from DefiLlama [1] include issuers not regulated locally and reflect on-chain supply, not payment use.", table:[["Jurisdiction","Legal status","Local-currency coins in circulation","Role of banks","Local-currency supply"],["Hong Kong","Ordinance in force since 1 Aug 2025 [2]","HKDAP (Anchorpoint); HSBC's HKD coin launch timing unverified [3][4][5]","HSBC among first licensees; note-issuing banks in tokenised deposit trials","~$13.2m"],["Japan","Amended law in force since June 2023; FSA study group reviewing reserves and the ¥1m cap [12]","JPYC, JPYSC [10][11]","Trust bank issues JPYSC; three megabanks completed a joint-issuance proof of concept [13]","~$145m"],["Singapore","Framework finalised in 2023 [7]; PSA amendment consultation closed 16 Oct, proposing an interest ban [8]","XSGD and others; the 'MAS-regulated stablecoin' label awaits legislation [8]","Separate guide on deposit tokenisation: going on-chain does not change a deposit's nature [9]","~$12.8m"],["Taiwan","Act promulgated 22 Jul 2026; draft rules and CBC reserve rules out for comment [15][16]","None","Banks may pilot deposit tokens [17]; under the CBC draft, the custodian bank moves reserve funds [15]","None"],["South Korea","Government draft published 24 Nov; awaits National Assembly approval [14]","No licensed issuer","Won stablecoins to be issued by consortia majority-owned by banks [14]","~$0.5m"],["Thailand","Two consultations: central bank principles and SEC transfer cap [19][20]","No licensed issuer","Pending consultation outcomes","Not tracked"]]},
   {p:"On regulation alone, Taiwan is not slow: its act is law, putting it behind Singapore but ahead of South Korea and Thailand. The real gap is in the market. Hong Kong and Japan already have issuers and early users; Taiwan's first NT dollar stablecoin can only appear once the rules are final and an issuer is licensed."},
   {h:"How big local-currency stablecoins are"},
   {chart:"nonusd", h:"Figure 2 | Non-USD stablecoin supply ($m)", desc:"Horizontal bars compare the supply of five non-USD stablecoins in millions of US dollars: euro 810, yen 145, Hong Kong dollar 13.2, Singapore dollar 12.8, Korean won about 0.5.", note:"Converted to US dollars, so exchange-rate moves affect the figures. USD stablecoins, at about $283.6bn, are left out because they would make every other bar invisible [1]."},
   {p:"The four Asian currencies total about $170m, more than 80% of it in yen. For scale, Taiwan's central bank draft only requires reserves on supply above NT$10bn per token, roughly $360m at the draft's 28:1 estimate [15]. All of Asia's local-currency stablecoins combined have yet to reach that figure. For early issuers, reserve deposits are unlikely to be the main cost; managing reserve assets and meeting redemptions will be."},
   {h:"Dollar versus euro: where the gap lies"},
   {chart:"hist", h:"Figure 3 | USD and EUR stablecoin supply (separate axes)", desc:"Two small charts show USD and EUR stablecoin supply. USD supply rose from about $130bn in December 2023 to about $303bn in December 2025 and stood at about $282bn in November 2026. EUR supply rose from about $0.31bn to about $0.81bn.", note:"The two charts use different vertical axes, so line heights cannot be compared directly. The last point is 26 November, only five months after the previous one. EUR supply is measured in US dollars, so euro appreciation also lifts the figure [1]."},
   {p:"USD stablecoins are about 7% below their peak while EUR stablecoins grew about 23% over the same period, yet the dollar side is still roughly 350 times larger. MiCA's e-money token rules have applied since June 2024, earlier than the US regime, but volumes have not followed. Possible reasons include on-chain trading still being priced in dollars, lower euro rates leaving issuers less income, and exchanges delisting non-compliant tokens. These are inferences; the data here cannot separate their effects."},
   {h:"The two regimes compared"},
   {note:"US details from the OCC final rule and Gibson Dunn's analysis [22][23]; EU details from the EBA [24][25].", table:[["Item","USD (GENIUS Act)","EUR (MiCA e-money tokens)"],["Law and start date","Signed July 2025; effective 18 Jan 2027, with the OCC rule taking effect the same day [22]","Applied since 30 Jun 2024 [24]"],["Who may issue","Bank subsidiaries and federally approved non-bank issuers; smaller issuers may opt for state regimes [23]","Credit institutions or e-money institutions [24]"],["Reserves","1:1, segregated, limited to cash, deposits, short-dated Treasuries and similar liquid assets [22][23]","1:1, with a minimum share held as bank deposits, higher for significant tokens [24]"],["Interest","Prohibited [22]","Prohibited [24]"],["Large issuers","Larger issuers generally move under federal supervision [23]","Significant tokens supervised directly by the EBA; USDC is the first, from 12 Nov [25]"],["Current supply","~$283.6bn [1]","~$810m [1]"],["Bank consortia","21 institutions, dollar first, targeting H1 2027 launch [26]","Qivalis, 37 banks, authorised as an e-money institution by the Dutch central bank on 14 Oct (secondary) [27]"]]},
   {p:"The two regimes align closely on 1:1 reserves and the interest ban. The difference is who may issue: the US lets non-banks obtain federal approval, while the EU limits issuance to credit and e-money institutions. Bank consortia are the other common thread: 21 institutions in the US joint venture, 37 banks behind Qivalis for the euro, and in Asia, Korea's bank-majority requirement and Japan's three-megabank issuance."},
   {h:"What Taiwan's banks can take from this", bank:true, lead:"Bottom line: find the use case and weigh a consortium first; reserve custody and custodian-bank services can start now."},
   {list:["Start with use cases, then issuance. The euro shows that clear rules without real uses do not build volume. NT dollar stablecoins are likelier to start in corporate payments, settlement of tokenised assets and cross-border collections, which are exactly what deposit-token pilots can test first [17].","Weigh a consortium. Banks in Korea, Japan, the US and the euro area are issuing together. Taiwan's banks can compare applying alone with setting up a joint issuer on cost, governance and distribution.","Reserve custody is ready-made business. The CBC draft has the custodian bank move funds when reserves are topped up or withdrawn [15]. Whoever issues, custody, payment and reporting capabilities need to be in place.","Demand for dollar stablecoins will not wait for the NT dollar. Clients mainly use USDT and USDC; a bank's role in compliant access, on- and off-ramps and custody may earn revenue before any local issuance.","Model the threshold. The NT$10bn threshold is unlikely to bind early on, but reserve yield, redemption liquidity and the interest ban will shape the business case directly."]},
   {h:"Method and limitations"},
   {p:"Supply figures come from DefiLlama [1], a secondary source. They are converted to US dollars, include issuers not regulated locally and do not adjust for cross-chain double counting; they measure supply, not payment use. Timeline dates rely mainly on regulators' documents. Hong Kong's HKDAP rollout is confirmed only to the month, Taiwan's Q1 2027 start date comes from press reports, Korea's draft has not been through the National Assembly and the outcomes of Thailand's two consultations are not yet public. The US–EU comparison is a summary; check the underlying rules before citing it."}
  ],
  sources: [
   ["DefiLlama stablecoin data","https://defillama.com/stablecoins",true],
   ["Hong Kong Government: Stablecoins Ordinance to commence on 1 August","https://www.info.gov.hk/gia/general/202506/06/P2025060600275.htm",false],
   ["HKMA: register of licensed stablecoin issuers","https://www.hkma.gov.hk/eng/regulatory-resources/registers/register-of-licensed-stablecoin-issuers/",false],
   ["HSBC: Hong Kong stablecoin issuer licence","https://www.about.hsbc.com.hk/news-and-media/hsbc-welcomes-hkmas-grant-of-a-hong-kong-stablecoin-issuer-licence",false],
   ["Anchorpoint press releases","https://anchorpoint.hk/media-press/",false],
   ["Anchorpoint: exploring HKDAP with Visa and Mastercard (PDF)","https://anchorpoint.hk/uploads/2026/10/Anchorpoint-to-Explore-Enabling-HKDAP-as-The-First-Regulated-Stablecoin-in-Asia-Supported-Across-Both-Mastercard-and-Visas-Global-Networks.pdf",false],
   ["MAS: stablecoin framework finalised (2023)","https://www.mas.gov.sg/news/media-releases/2023/mas-finalises-stablecoin-regulatory-framework",false],
   ["MAS: consultation on stablecoin legislative amendments","https://www.mas.gov.sg/news/media-releases/2026/mas-consults-on-legislative-amendments-to-implement-stablecoin-regulatory-framework",false],
   ["MAS: guide on the tokenisation of bank deposits (PDF)","https://www.mas.gov.sg/-/media/mas-media-library/regulation/guidelines/ppd/guide-on-the-tokenisation-of-bank-deposits/guide-on-the-tokenisation-of-bank-deposits_18-nov-2026vf.pdf",false],
   ["The Block: JPYC launches","https://theblock.co/news/business/2025-10-27-japan-jpyc-launches-yen-stablecoin-376199",true],
   ["The Block: SBI launches JPYSC","https://www.theblock.co/news/defi/2026-06-24-japan-sbi-group-launches-jpysc-405952",true],
   ["FSA study group secretariat paper (Japanese)","https://www.fsa.go.jp/singi/digital_2026/shiryo/261102/jimukyoku.pdf",false],
   ["MUFG Bank: three-bank joint issuance proof of concept (PDF)","https://www.bk.mufg.jp/global/newsroom/news2026/pdf/newse1016_1.pdf",false],
   ["Korea FSC: government Digital Asset Basic Act draft (Korean)","https://www.fsc.go.kr/no010101/88199",false],
   ["Central Bank of the Republic of China (Taiwan): draft stablecoin reserve rules (Chinese)","https://www.cbc.gov.tw/tw/cp-302-195226-fa371-1.html",false],
   ["FSC press release, 3 November: draft issuance regulations (Chinese)","https://www.fsc.gov.tw/ch/home.jsp?id=96&parentpath=0,2&mcustomize=news_view.jsp&dataserno=202611030002&dtable=News",false],
   ["FSC press release, 22 September: deposit-token pilots (Chinese)","https://www.fsc.gov.tw/ch/home.jsp?id=96&parentpath=0,2&mcustomize=news_view.jsp&dataserno=202609220001&dtable=News",false],
   ["UDN: act expected to take effect in Q1 (Chinese)","https://udn.com/news/story/7239/9871143",true],
   ["Bank of Thailand: baht stablecoin consultation (Thai)","https://www.bot.or.th/th/laws-and-rules/public-hearing/public-hearing-20261020-Stablecoin.html",false],
   ["Thai SEC: consultation on daily stablecoin transfer cap","https://www.sec.or.th/EN/Pages/News_Detail.aspx?SECID=13562&NewsNo=253&NewsYear=2026&Lang=EN",false],
   ["The Block: Thailand seeks daily stablecoin cap","https://www.theblock.co/news/regulation/2026-11-13-thailand-seeks-daily-stablecoin-cap-439676",true],
   ["OCC: GENIUS Act final rule","https://www.occ.gov/news-issuances/news-releases/2026/nr-occ-2026-92.html",false],
   ["Gibson Dunn: OCC payment stablecoin framework","https://www.gibsondunn.com/the-genius-act-occ-finalizes-its-payment-stablecoin-framework/",true],
   ["EBA: asset-referenced and e-money tokens under MiCA","https://www.eba.europa.eu/regulation-and-policy/asset-referenced-and-e-money-tokens-mica",false],
   ["EBA: USDC classified as first significant e-money token","https://www.eba.europa.eu/publications-and-media/press-releases/eba-classifies-usdc-first-significant-e-money-token-european-union",false],
   ["Santander: 21 institutions to establish a stablecoin enterprise","https://www.santander.com/en/press-room/press-releases/2026/09/group-of-leading-international-financial-institutions-to-establish-stablecoin-enterprise",false],
   ["The Block: Deutsche Bank custody launch and Qivalis authorisation","https://www.theblock.co/news/business/2026-11-11-deutsche-bank-goes-live-with-digital-asset-custody-service-signs-asset-management-deal-437851",true]
  ]
 }
},
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
.feat table.wide td:first-child,.feat table.wide th:first-child{min-width:5.2em}
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
 .fpick{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:10px;margin:22px 0 0;max-width:820px}
 .fcard{font:inherit;text-align:left;background:var(--card);border:1px solid var(--rule);border-left:4px solid var(--rule);border-radius:0 8px 8px 0;padding:10px 14px;cursor:pointer;color:var(--ink);display:flex;flex-direction:column;gap:2px}
 .fcard:hover{border-left-color:var(--muted)}
 .fcard[aria-pressed="true"]{border-left-color:var(--bright);background:var(--surface)}
 .fcard .fd{font-size:12px;color:var(--muted);font-weight:700;letter-spacing:.04em}
 .fcard .ft{font-family:var(--display);font-weight:600;font-size:15.5px;line-height:1.45}
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
.feat .orig{margin:10px 0 0;font-size:14.5px;font-weight:700;max-width:none}
.feat .orig a{color:var(--accent);text-decoration:underline;text-underline-offset:3px}
.feat .toc a.hot{background:var(--c-ant);border-color:var(--c-ant);color:#fff;font-weight:700}
.feat .toc a.hot:hover{color:#fff;opacity:.9}
.feat .sum .jump{display:inline-block;margin-top:6px;font-weight:700;color:var(--accent);text-decoration:none;font-size:14px}
.feat .sum .jump:hover{text-decoration:underline}
.feat .bank{margin:34px 0 8px;border:2px solid var(--c-ant);border-radius:12px;padding:18px 18px 8px;background:var(--surface)}
.feat .bank .bk{font-size:12.5px;font-weight:700;letter-spacing:.08em;color:var(--accent);margin:0 0 2px}
.feat .bank h3{margin:0 0 8px;border:0;padding:0}
.feat .bank p.blead{font-weight:700;font-size:16.5px;line-height:1.55;color:var(--ink);margin:0 0 14px;max-width:none!important}
.feat .bank ol{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:1fr 1fr;gap:10px;max-width:none}
.feat .bank li{background:var(--card);border:1px solid var(--rule);border-radius:10px;padding:12px 14px 12px 50px;position:relative;margin:0}
.feat .bank li::before{content:counter(list-item);position:absolute;left:14px;top:12px;width:24px;height:24px;border-radius:50%;background:var(--c-ant);color:#fff;font-weight:700;font-size:13px;line-height:24px;text-align:center}
.feat .bank li b{display:block;font-size:15px;color:var(--ink);margin-bottom:3px}
.feat .bank li span{display:block;font-size:14px;line-height:1.6;color:var(--ink-2,var(--ink))}
.feat .bank li:last-child:nth-child(odd){grid-column:1 / -1}
@media (max-width:640px){.feat .bank{padding:14px 12px 4px}.feat .bank ol{grid-template-columns:1fr}}
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

 // 時間軸：各法域里程碑（列＝法域，橫軸＝時間）
 const KIND = {law:{zh:"生效或定稿", en:"In force or finalised"}, launch:{zh:"發牌或上線", en:"Licensed or launched"}, draft:{zh:"草案、諮詢或試驗", en:"Draft, consultation or pilot"}, plan:{zh:"預計", en:"Expected"}};
 const ym = s => { const [y,m,d] = s.split("-").map(Number); return y + ((m || 1) - 1) / 12 + ((d || 15) - 1) / 365; };
 function markShape(svg, kind, cx, cy){
  if (kind === "law") svg.appendChild(s("circle", {cx, cy, r:6, fill:"var(--ink)", stroke:"var(--card)", "stroke-width":2}));
  else if (kind === "launch") svg.appendChild(s("rect", {x:cx - 6, y:cy - 6, width:12, height:12, rx:2.5, fill:"var(--c-ant)", stroke:"var(--card)", "stroke-width":2}));
  else if (kind === "draft") svg.appendChild(s("circle", {cx, cy, r:5.5, fill:"var(--card)", stroke:"var(--muted)", "stroke-width":2.25}));
  else svg.appendChild(s("circle", {cx, cy, r:5.5, fill:"var(--card)", stroke:"var(--muted)", "stroke-width":1.5, "stroke-dasharray":"2 2"}));
 }
 function timeline(fig, c, lang){
  const narrow = narrowNow(), en = lang === "en", K = c.kinds ? Object.assign({}, KIND, c.kinds) : KIND;
  const lg = h("div","legend"); ["law","launch","draft","plan"].forEach(k => { const sp = h("span"); const g = s("svg", {viewBox:"0 0 14 14"}); markShape(g, k, 7, 7); sp.appendChild(g); sp.appendChild(document.createTextNode(en ? K[k].en : K[k].zh)); lg.appendChild(sp); }); fig.appendChild(lg);
  const lw = (narrow ? (en ? 84 : 62) : (en ? 104 : 92)) + (c.rows.some(r => r.ev.some(e => ym(e.d) < c.x0)) ? (narrow ? 34 : 40) : 0), W = narrow ? 360 : 720, rowH = narrow ? 40 : 44, m = {t:20, b:28, r:14};
  const H = m.t + c.rows.length * rowH + m.b;
  const x = v => lw + (v - c.x0) / (c.x1 - c.x0) * (W - lw - m.r);
  const svg = s("svg", {class:"ch", viewBox:`0 0 ${W} ${H}`});
  for (let y = Math.ceil(c.x0); y <= c.x1; y++){ svg.appendChild(s("line", {x1:x(y), x2:x(y), y1:m.t - 6, y2:H - m.b, stroke:"var(--rule)", "stroke-width":1})); svg.appendChild(s("text", {x:x(y) + 4, y:H - m.b + 18}, String(y))); }
  const tx = x(ym(c.today));
  svg.appendChild(s("line", {x1:tx, x2:tx, y1:m.t - 10, y2:H - m.b, stroke:"var(--accent)", "stroke-width":1.25}));
  svg.appendChild(s("text", {class:"ann", x:tx - 4, y:m.t - 12, "text-anchor":"end"}, (en ? "Today " : "今天 ") + c.today.slice(5).replace("-","/")));
  const T = tipper(fig); const items = [];
  c.rows.forEach((r, i) => {
   const cy = m.t + i * rowH + rowH / 2;
   if (i % 2 === 0) svg.appendChild(s("rect", {x:0, y:cy - rowH/2, width:W, height:rowH, fill:"var(--surface)", opacity:.55}));
   svg.appendChild(s("text", {class:"lab", x:0, y:cy + 4}, en ? r.en : r.zh));
   const xs = r.ev.map(e => x(Math.max(c.x0, ym(e.d))));
   if (xs.length > 1) svg.appendChild(s("line", {x1:Math.min(...xs), x2:Math.max(...xs), y1:cy, y2:cy, stroke:"var(--rule)", "stroke-width":2}));
   r.ev.forEach(e => { const v = ym(e.d), early = v < c.x0; items.push({r, e, cx:x(early ? c.x0 : v), cy, early}); });
  });
  items.forEach(o => { markShape(svg, o.e.k, o.cx, o.cy); if (o.early) svg.appendChild(s("text", {class:"ann", x:o.cx - 9, y:o.cy + 4, "text-anchor":"end"}, "\u2190" + o.e.d.slice(0, 4))); });
  items.forEach(o => {
   const hit = s("circle", {cx:o.cx, cy:o.cy, r:11, fill:"transparent", tabindex:0, "aria-label": (en ? o.r.en : o.r.zh) + " " + o.e.d + " " + (en ? o.e.en : o.e.zh)});
   const show = () => { const [fx, fy] = figPos(fig, svg, W, o.cx, o.cy); T.show([(en ? o.r.en : o.r.zh) + "｜" + o.e.d, (en ? o.e.en : o.e.zh).replace(/\s*[［\[]\d+[］\]]/g, ""), en ? K[o.e.k].en : K[o.e.k].zh], fx, fy); };
   hit.addEventListener("pointerenter", show); hit.addEventListener("pointerdown", show); hit.addEventListener("focus", show); hit.addEventListener("pointerleave", ev => { if (ev.pointerType === "mouse") T.hide(); }); hit.addEventListener("blur", T.hide);
   svg.appendChild(hit);
  });
  fig.appendChild(svg);
  dataTable(fig, [en ? "Jurisdiction" : "法域", en ? "Date" : "日期", en ? "Milestone" : "里程碑", en ? "Type" : "類型"], items.map(o => [en ? o.r.en : o.r.zh, o.e.d, en ? o.e.en : o.e.zh, en ? K[o.e.k].en : K[o.e.k].zh]), lang);
 }
 // 水平長條：單一數列
 function hbar(fig, c, lang){
  const narrow = narrowNow(), en = lang === "en";
  const lw = narrow ? 96 : 170, W = narrow ? 360 : 720, rowH = 34, m = {t:6, b:26, r: narrow ? 70 : 90};
  const H = m.t + c.rows.length * rowH + m.b;
  const max = c.max || Math.max(...c.rows.map(r => r.v));
  const x = v => lw + v / max * (W - lw - m.r);
  const svg = s("svg", {class:"ch", viewBox:`0 0 ${W} ${H}`});
  (c.ticks || []).forEach(v => { svg.appendChild(s("line", {x1:x(v), x2:x(v), y1:m.t, y2:H - m.b, stroke: v === 0 ? "var(--muted)" : "var(--rule)", "stroke-width": v === 0 ? 1.25 : 1})); svg.appendChild(s("text", {x:x(v), y:H - m.b + 18, "text-anchor":"middle"}, c.fmt ? c.fmt.replace("{v}", v.toLocaleString("en-US")) : String(v))); });
  const T = tipper(fig);
  c.rows.forEach((r, i) => {
   const cy = m.t + i * rowH + rowH / 2, bh = 16, x0 = x(0), x1 = Math.max(x(r.v), x0 + 2);
   svg.appendChild(s("text", {class:"lab", x:0, y:cy + 4}, en ? r.en : r.zh));
   svg.appendChild(s("path", {d:`M${x0},${cy - bh/2}H${x1 - Math.min(4, x1 - x0)}a${Math.min(4, x1 - x0)},${Math.min(4, x1 - x0)} 0 0 1 ${Math.min(4, x1 - x0)},${Math.min(4, x1 - x0)}V${cy + bh/2 - Math.min(4, x1 - x0)}a${Math.min(4, x1 - x0)},${Math.min(4, x1 - x0)} 0 0 1 -${Math.min(4, x1 - x0)},${Math.min(4, x1 - x0)}H${x0}Z`, fill: r.hl ? "var(--c-spcx)" : "var(--c-ant)"}));
   svg.appendChild(s("text", {class:"lab", x:x1 + 8, y:cy + 4}, en ? r.labEn : r.lab));
   const hit = s("rect", {x:0, y:cy - rowH/2, width:W, height:rowH, fill:"transparent", tabindex:0, "aria-label": (en ? r.en : r.zh) + " " + (en ? r.labEn : r.lab)});
   const show = () => { const [fx, fy] = figPos(fig, svg, W, x1, cy); T.show([en ? r.en : r.zh, en ? r.labEn : r.lab, (en ? r.noteEn : r.note) || ""].filter(Boolean), fx, fy); };
   hit.addEventListener("pointerenter", show); hit.addEventListener("pointerdown", show); hit.addEventListener("focus", show); hit.addEventListener("pointerleave", ev => { if (ev.pointerType === "mouse") T.hide(); }); hit.addEventListener("blur", T.hide);
   svg.appendChild(hit);
  });
  fig.appendChild(svg);
  dataTable(fig, [en ? "Item" : "項目", en ? "Value" : "數值", en ? "Note" : "說明"], c.rows.map(r => [en ? r.en : r.zh, en ? r.labEn : r.lab, (en ? r.noteEn : r.note) || ""]), lang);
 }
 // 小倍數：每個面板各自的縱軸，不共用尺度
 function smallmult(fig, c, lang){
  const narrow = narrowNow(), en = lang === "en";
  const wrap = h("div"); wrap.style.display = "grid"; wrap.style.gridTemplateColumns = narrow ? "1fr" : "1fr 1fr"; wrap.style.gap = "14px 22px"; fig.appendChild(wrap);
  const T = tipper(fig); const rowsAll = [];
  c.panels.forEach(pn0 => {
   const pn = Object.assign({}, pn0, (en ? pn0.enO : pn0.zhO) || {});
   const box = h("div"); wrap.appendChild(box);
   const hd = h("div", null, en ? pn.en : pn.zh); hd.style.fontWeight = "700"; hd.style.fontSize = "13.5px"; hd.style.margin = "0 0 2px"; box.appendChild(hd);
   const W = 340, H = 190, m = {l:42, r:50, t:14, b:26};
   const n = c.labels.length, x = i => m.l + i / (n - 1) * (W - m.l - m.r);
   const y = v => m.t + (pn.max - v) / (pn.max - pn.min) * (H - m.t - m.b);
   const svg = s("svg", {class:"ch", viewBox:`0 0 ${W} ${H}`}); box.appendChild(svg);
   pn.ticks.forEach(v => { svg.appendChild(s("line", {x1:m.l, x2:W - m.r, y1:y(v), y2:y(v), stroke:"var(--rule)", "stroke-width":1})); svg.appendChild(s("text", {x:m.l - 6, y:y(v) + 4, "text-anchor":"end"}, v.toLocaleString("en-US"))); });
   [0, Math.floor((n - 1) / 2), n - 1].forEach(i => svg.appendChild(s("text", {x:x(i), y:H - 6, "text-anchor":"middle"}, c.labels[i])));
   const col = "var(--c-" + pn.key + ")";
   let d = ""; pn.v.forEach((v, i) => d += (i ? "L" : "M") + x(i) + "," + y(v));
   svg.appendChild(s("path", {d: d + `L${x(n - 1)},${y(pn.min)}L${x(0)},${y(pn.min)}Z`, fill:col, opacity:.1}));
   svg.appendChild(s("path", {d, fill:"none", stroke:col, "stroke-width":2, "stroke-linejoin":"round"}));
   pn.v.forEach((v, i) => {
    svg.appendChild(s("circle", {cx:x(i), cy:y(v), r: i === n - 1 ? 4.5 : 3, fill:col, stroke:"var(--card)", "stroke-width":2}));
    const hit = s("circle", {cx:x(i), cy:y(v), r:12, fill:"transparent", tabindex:0, "aria-label": (en ? pn.en : pn.zh) + " " + c.labels[i] + " " + v});
    const show = () => { const [fx, fy] = figPos(fig, svg, W, x(i), y(v)); T.show([en ? pn.en : pn.zh, c.labels[i] + "：" + v + (en ? pn.unitEn : pn.unit)], fx, fy); };
    hit.addEventListener("pointerenter", show); hit.addEventListener("pointerdown", show); hit.addEventListener("focus", show); hit.addEventListener("pointerleave", ev => { if (ev.pointerType === "mouse") T.hide(); }); hit.addEventListener("blur", T.hide);
    svg.appendChild(hit);
    rowsAll.push([en ? pn.en : pn.zh, c.labels[i], v + (en ? pn.unitEn : pn.unit)]);
   });
   svg.appendChild(s("text", {class:"lab", x:x(n - 1) + 8, y:y(pn.v[n - 1]) + 4}, pn.v[n - 1].toLocaleString("en-US")));
  });
  dataTable(fig, [en ? "Series" : "數列", en ? "Date" : "時間", en ? "Value" : "數值"], rowsAll, lang);
 }

 function drawFigure(fig, f, b, lang){
  const c = f.charts[b.chart];
  fig.dataset.desc = b.desc || "";
  const type = c.type || b.chart;
  if (type === "timeline") timeline(fig, c, lang);
  else if (type === "hbar") hbar(fig, c, lang);
  else if (type === "smallmult") smallmult(fig, c, lang);
  else if (type === "dayone") dayone(fig, c, lang);
  else if (b.chart === "phases") phases(fig, c, lang);
  else if (b.chart === "ladder") ladder(fig, c, lang);
  else lineChart(fig, c, lang, b.chart);
  const svg = fig.querySelector("svg.ch"); if (svg){ const id = "fg" + Math.random().toString(36).slice(2,8); svg.removeAttribute("aria-label"); const t = s("title", {id:id + "t"}, b.h); const d = s("desc", {id:id + "d"}, b.desc || ""); svg.insertBefore(d, svg.firstChild); svg.insertBefore(t, svg.firstChild); svg.setAttribute("aria-labelledby", id + "t " + id + "d"); }
 }
 // 文字中的［n］／[n] 轉成連到來源清單的連結
 function rich(el, text, uid){ const re = /[［\[](\d{1,2})[］\]]/g; let last = 0, m; while ((m = re.exec(text))){ if (m.index > last) el.appendChild(document.createTextNode(text.slice(last, m.index))); const a = h("a","ref", "[" + m[1] + "]"); a.href = "#" + uid + "-s" + m[1]; a.setAttribute("aria-label", "source " + m[1]); el.appendChild(a); last = re.lastIndex; } if (last < text.length) el.appendChild(document.createTextNode(text.slice(last))); return el; }
 const hr = (tag, cls, text, uid) => rich(h(tag, cls), text, uid);

 let lastArgs = null, rT = null, selId = null;
 window.renderFeatures = function(root, lang){
  lastArgs = [root, lang];
  root.textContent = "";
  const all = window.FEATURES || [], en = lang === "en";
  if (!all.some(f => f.id === selId)) selId = all.length ? all[0].id : null;
  if (all.length > 1){
   const nav = h("nav","fpick"); nav.setAttribute("aria-label", en ? "Features" : "專題列表");
   all.forEach(f => { const d = f[lang] || f.zh; const b = h("button","fcard"); b.type = "button"; b.setAttribute("aria-pressed", String(f.id === selId)); b.appendChild(h("span","fd", d.kicker + "　" + f.date)); b.appendChild(h("span","ft", d.title)); b.addEventListener("click", () => { selId = f.id; window.renderFeatures(root, lang); root.scrollIntoView({block:"start"}); }); nav.appendChild(b); });
   root.appendChild(nav);
  }
  const F = all.filter(f => f.id === selId);
  F.forEach(f => {
   const d = f[lang] || f.zh, uid = f.id + "-" + lang; const art = h("article","feat"); root.appendChild(art);
   const hd = h("header","fhead");
   const k = h("div","fk"); k.appendChild(document.createTextNode(d.kicker)); const tm = h("time", null, f.date); tm.setAttribute("datetime", f.date); k.appendChild(tm); hd.appendChild(k);
   hd.appendChild(h("h2", null, d.title));
   hd.appendChild(h("p","dek", d.dek));
   hd.appendChild(h("p","asof", d.asof));
   if (d.orig){ const op = h("p","orig"); const a = h("a", null, d.orig[0] + " ↗"); a.href = d.orig[1]; a.target = "_blank"; a.rel = "noopener"; op.appendChild(a); hd.appendChild(op); }
   art.appendChild(hd);
   const heads = d.blocks.filter(b => b.h && !b.chart).map(b => b.h).concat([en ? "Sources" : "來源"]);
   const slug = t => uid + "-h" + heads.indexOf(t);
   const tableWrap = (rows, cls, note) => { const w = h("div","tw"); const tb = h("table", cls); const th = h("thead"), tbd = h("tbody"); rows.forEach((r, i) => { const tr = h("tr"); r.forEach(c => tr.appendChild(hr(i === 0 ? "th" : "td", null, c, uid))); (i === 0 ? th : tbd).appendChild(tr); }); tb.appendChild(th); tb.appendChild(tbd); const sw = h("div","swipe", en ? "Swipe sideways to see the full table" : "← 左右滑動看完整表格 →"); art.appendChild(sw); w.appendChild(tb); art.appendChild(w); if (note) art.appendChild(hr("p","tnote", note, uid)); };
   let bankBox = null; const bankH = (d.blocks.find(b => b.bank) || {}).h;
   d.blocks.forEach(b => {
    if (b.summary){ const box = h("section","sum"); box.appendChild(h("b", null, en ? "In three sentences" : "三句結論")); const ol = h("ol"); b.summary.forEach(x => ol.appendChild(hr("li", null, x, uid))); box.appendChild(ol); if (bankH){ const j = h("a","jump", "→ " + bankH); j.href = "#" + slug(bankH); box.appendChild(j); } art.appendChild(box); }
    else if (b.toc){ const nav = h("nav","toc"); nav.setAttribute("aria-label", en ? "Contents" : "目錄"); nav.appendChild(h("span", null, en ? "Contents" : "目錄")); heads.forEach(t => { const a = h("a", t === bankH ? "hot" : null, t); a.href = "#" + slug(t); nav.appendChild(a); }); art.appendChild(nav); }
    else if (b.kpis){ const g = h("div","kpis"); b.kpis.forEach(([l, v, sub]) => { const t = h("div","kpi"); t.appendChild(h("div","kl", l)); t.appendChild(h("div","kv", v)); if (sub) t.appendChild(hr("div","ks", sub, uid)); g.appendChild(t); }); art.appendChild(g); }
    else if (b.chart){ const fig = h("figure"); fig.appendChild(h("figcaption", null, b.h)); art.appendChild(fig); drawFigure(fig, f, b, lang); if (b.note) fig.insertBefore(hr("div","fnote", b.note, uid), fig.querySelector("details")); }
    else if (b.h && b.bank){ const box = h("section","bank"); box.appendChild(h("div","bk", en ? "FOR TAIWAN'S BANKS" : "給台灣銀行")); const t = h("h3", null, b.h); t.id = slug(b.h); box.appendChild(t); if (b.lead) box.appendChild(hr("p","blead", b.lead, uid)); art.appendChild(box); bankBox = box; }
    else if (b.h){ const t = h("h3", null, b.h); t.id = slug(b.h); art.appendChild(t); }
    else if (b.p) art.appendChild(hr("p", null, b.p, uid));
    else if (b.list && bankBox){ const ol = h("ol"); b.list.forEach(x => { const li = h("li"); const m = x.match(en ? /^(.+?\.)\s+([\s\S]*)$/ : /^(.+?)。([\s\S]*)$/); if (m){ li.appendChild(h("b", null, en ? m[1].replace(/\.$/, "") : m[1])); li.appendChild(hr("span", null, m[2], uid)); } else li.appendChild(hr("span", null, x, uid)); ol.appendChild(li); }); bankBox.appendChild(ol); bankBox = null; }
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
