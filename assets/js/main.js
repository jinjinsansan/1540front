const translations = {
  en: {
    meta: {
      title: "1540BO | Digital Options Trading",
      affiliateTitle: "1540BO | Affiliate Program Terms",
    },
    nav: {
      login: "Log in",
      features: "Features",
      affiliate: "Affiliate",
      terms: "Terms of Service",
      privacy: "Privacy Policy",
      support: "Support",
    },
    cta: {
      demo: "Try demo",
      start: "Start trading",
    },
    affiliate: {
      cta: {
        join: "Join the program",
      },
      hero: {
        badge: "Affiliate Agreement",
        title: "1540bo.io Affiliate Program Terms",
        lead: "This agreement establishes the legally binding relationship between 1540bo.io and affiliates who promote our services and refer players. Submitting an application to join the program constitutes acceptance of every provision herein.",
        metrics: {
          model: {
            label: "Payout model",
            value: "Bet-share structure",
            desc: "Calculated daily from the total wagering volume.",
          },
          cycle: {
            label: "Payment cycle",
            value: "Daily calculation · Paid T+2",
            desc: "Settled in Coordinated Universal Time and credited automatically to your wallet.",
          },
          ranks: {
            label: "Rank system",
            value: "Nine tiers",
            desc: "Rates adjust according to monthly deposit counts.",
          },
        },
        panel: {
          heading: "Partner essentials",
          items: [
            "Accurate registration data and account security",
            "Brand-aligned, compliant promotion",
            "Adherence to every applicable jurisdictional rule",
            "Transparent payout table and settlement",
          ],
          cta: "Read the key clauses",
        },
      },
      intro: {
        heading: "About these terms",
        paragraphs: [
          "Our affiliate program is designed to build long-term partnerships through transparent economics and enterprise-grade risk controls. Affiliates are expected to promote responsibly and provide referees with a secure trading environment.",
          "The following clauses outline registration criteria, prohibited conduct, reward calculations, and termination conditions in detail. Review the entire document before commencing any affiliate activity.",
        ],
      },
      articles: {
        article1: {
          label: "Article 1",
          heading: "Definitions",
          items: [
            {
              term: "Affiliate",
              desc: ": An individual or entity that agrees to these terms, receives approval from us, and participates in the program.",
            },
            {
              term: "Referred player",
              desc: ": A player who registers with 1540bo.io via the affiliate's unique tracking link, makes a deposit, and places wagers.",
            },
            {
              term: "Affiliate reward (bet-share)",
              desc: ": The remuneration paid to the affiliate under Article 4, calculated from the referred players' total wagered volume.",
            },
            {
              term: "Total wagered volume",
              desc: ": The aggregate value of all bets placed by referred players.",
            },
          ],
        },
        article2: {
          label: "Article 2",
          heading: "Affiliate registration and approval",
          items: [
            "Applicants must submit the program request via the form prescribed by us.",
            "We reserve the right, at our sole discretion, to review applications and approve or reject them without disclosing reasons.",
            "Affiliates must keep their registration details accurate and up to date at all times.",
            "Affiliates are fully responsible for safeguarding their account credentials, including passwords.",
          ],
        },
        article3: {
          label: "Article 3",
          heading: "Affiliate obligations and marketing conduct",
          intro: "Affiliates must promote our services honestly and lawfully, and must not undertake activities that damage the brand or violate public order. The following actions are prohibited.",
          items: [
            "Targeting or appealing to minors (persons under the legal age in their jurisdiction).",
            "Sending spam emails, indiscriminate direct messages, or any outreach deemed harassing.",
            "Using misleading or exaggerated claims such as 'guaranteed wins' or 'risk-free profits.'",
            "Infringing the intellectual property rights of us or any third party.",
            "Misrepresenting oneself as 1540bo.io or implying official endorsement.",
          ],
          outro: "All promotional activity must comply with every applicable law, regulation, and guideline in relevant jurisdictions, including advertising and gaming requirements.",
        },
        article4: {
          label: "Article 4",
          heading: "Affiliate reward structure",
          items: [
            "Reward model: the program uses a bet-share structure that pays a percentage of referred players' total wagered volume.",
            "Eligible volume: both cash wagers and reward (bonus) wagers placed by referred players are included.",
            "Affiliate ranks: nine tiers determined by the monthly number of deposit transactions linked to the affiliate. Rankings are reassessed on the first day of each month based on the prior month's results.",
          ],
          table: {
            headers: {
              rank: "Affiliate rank",
              deposits: "Monthly deposit count",
              share: "Bet-share rate",
            },
            rows: [
              { rank: "Rank 9", deposits: "41+ deposits", share: "0.10%" },
              { rank: "Rank 8", deposits: "36-40 deposits", share: "0.09%" },
              { rank: "Rank 7", deposits: "31-35 deposits", share: "0.08%" },
              { rank: "Rank 6", deposits: "26-30 deposits", share: "0.07%" },
              { rank: "Rank 5", deposits: "21-25 deposits", share: "0.06%" },
              { rank: "Rank 4", deposits: "16-20 deposits", share: "0.05%" },
              { rank: "Rank 3", deposits: "11-15 deposits", share: "0.04%" },
              { rank: "Rank 2", deposits: "6-10 deposits", share: "0.03%" },
              { rank: "Rank 1", deposits: "1-5 deposits", share: "0.02%" },
            ],
          },
          note: "Bet-share rates are determined by the monthly rank, while actual payouts are calculated daily in accordance with Article 5.",
        },
        article5: {
          label: "Article 5",
          heading: "Reward payments",
          items: [
            "Calculation window: daily from 00:00 to 23:59 UTC.",
            "Applicable rate: the month's affiliate rank determines the daily bet-share rate.",
            "Payment timing: rewards generated during the calculation window are credited to the affiliate reward wallet at 08:00 UTC on the second day thereafter (e.g., revenue from 11 November is paid on 13 November).",
            "Payment thresholds: we may set a minimum payout amount (e.g., $0.01). Balances below the threshold carry forward until the minimum is met.",
            "Withdrawal limits: in principle, rewards are withdrawable without wagering requirements; exceptions may apply for suspected fraud or when general withdrawal minimums are not met.",
          ],
        },
        article6: {
          label: "Article 6",
          heading: "Prohibited conduct (fraud)",
          items: [
            "Self-affiliation: creating accounts for oneself or closely related persons via one's tracking link.",
            "Artificial inflation: coordinating with referred players to place abnormal bets or abuse bonuses purely to generate rewards.",
            "Any action we deem fraudulent.",
          ],
          outro: "If such misconduct is detected, we may immediately terminate the affiliate status, forfeit unpaid rewards, and reclaim previously paid amounts.",
        },
        article7: {
          label: "Article 7",
          heading: "Term and termination",
          items: [
            "This agreement becomes effective on the date we approve the affiliate and remains in force until terminated.",
            "Either party may terminate the agreement for any reason with 30 days' written notice.",
            "We may terminate immediately, without notice, in the event of a material breach, especially of Articles 3 or 6.",
            "Upon termination, the affiliate must cease using our logos, banners, and all marketing materials without delay.",
          ],
        },
        article8: {
          label: "Article 8",
          heading: "General provisions",
          items: [
            "Amendments: we may revise these terms or the reward table at any time, with changes taking effect upon notice via email or dashboard.",
            "Relationship: affiliates are independent contractors and are not our employees, agents, partners, or joint venturers.",
            "Disclaimer: we are not liable for any loss or damage arising from affiliate activities.",
            "Governing law: this agreement is governed by the laws of the jurisdiction we specify and interpreted accordingly.",
          ],
        },
      },
      update: {
        label: "Last updated",
        date: "11 November 2025",
        note: "Terms may be amended without prior notice. Always consult our official channels for the latest information.",
      },
    },
    hero: {
      title: "Ultra-short binary options around the clock",
      subtitle: "Capture every opportunity",
      badges: "Globally licensed • Top crypto pairs • Same-day withdrawals",
      card: {
        title: "Instant order routing",
        execSpeed: "Average execution speed",
        assets: "Tradable assets",
        payout: "Max payout",
      },
    },
    rates: {
      title: "Live market rates",
      subtitle: "Track the most popular crypto pairs in real time.",
      categories: {
        crypto: "Crypto asset",
        fx: "FX pair",
        metal: "Precious metal",
      },
    },
    features: {
      title: "Why traders choose 1540BO",
      subtitle:
        "Seconds-fast binary options windows mean every opportunity is tradable, with an interface built for both pros and newcomers.",
      cards: {
        speed: {
          title: "Millisecond execution",
          text: "Cross-venue routing and deep liquidity pools keep every order filled without slippage spikes.",
        },
        security: {
          title: "Institutional security",
          text: "Tier-1 custodianship, segregation of client funds, and global compliance frameworks.",
        },
        analytics: {
          title: "Trader-first interface",
          text: "Intuitive UI layouts keep every action within easy reach for rapid decisions.",
        },
        support: {
          title: "Pro desk support",
          text: "Veteran risk managers and native-language analysts available 24/7 across five regions.",
        },
      },
    },
    platform: {
      title: "Global platform visibility",
      subtitle:
        "Binary options focus on rapid up/down calls; every user worldwide accesses the same predictive layouts tuned for higher visual clarity.",
      points: {
        one: "Synced layouts across devices",
        two: "One-touch up/down tickets",
        three: "Live sentiment overlays",
        four: "24/7 access to top crypto pairs",
        meta: {
          one: "Switch between desktop and mobile without losing context.",
          two: "Rapid expiry selection with focused call/put actions.",
          three: "Visual heat-maps surface high-probability zones.",
          four: "New tradable pairs roll out regularly to keep markets fresh.",
        },
      },
      visual: {
        title: "Order desk overview",
        buy: "Buy order • BTC/USD • $500 notional @ 1.5x",
        sell: "Sell order • EUR/USD • $800 notional @ 1.7x",
        history: "Closed trades • 98.4% win ratio today",
      },
    },
    steps: {
      title: "Start in three steps",
      items: {
        one: {
          title: "Register",
          text: "Account opens in just 2 minutes",
        },
        two: {
          title: "Practice",
          text: "Trade risk-free on the demo account until your strategy is consistent.",
        },
        three: {
          title: "Go live",
          text: "Fund securely and deploy live trades with transparent payouts.",
        },
      },
    },
    payments: {
      title: "Crypto Deposit Options",
      subtitle: "Multiple cryptocurrencies supported",
      note: "Withdrawals settle in seconds—limited only by each chain's network speed.",
    },
    testimonials: {
      title: "Crypto NEWS",
      subtitle: "Check Bloomberg, CoinTelegraph, CoinMarketCap, and other crypto news sources",
      items: {
        one: {
          text: "“Execution speed is unreal—hedging my FX exposure now takes seconds, not minutes.”",
          name: "Ayumi K. • Tokyo",
        },
        two: {
          text: "“Transparent pricing and quick withdrawals give my clients the confidence to scale.”",
          name: "Michael R. • Singapore",
        },
        three: {
          text: "“The multilingual desk understands local regulations, which keeps our compliance spotless.”",
          name: "Supalak P. • Bangkok",
        },
      },
    },
    footer: {
      disclaimer:
        "Trading digital options involves significant risk and may result in the loss of all invested capital. Consider whether you understand how the product works and whether you can afford the risk.",
      links: {
        terms: "Terms",
        privacy: "Privacy",
        security: "Security",
        contact: "Contact",
      },
    },
  },
  ja: {
    meta: {
      title: "1540BO｜デジタルオプション取引",
      affiliateTitle: "1540BO｜アフィリエイトプログラム利用規約",
    },
    nav: {
      login: "ログイン",
      features: "特長",
      affiliate: "アフィリエイト",
      terms: "利用規約",
      privacy: "プライバシーポリシー",
      support: "サポート",
    },
    cta: {
      demo: "デモ口座を試す",
      start: "本番口座を開く",
    },
    affiliate: {
      cta: {
        join: "今すぐ参加",
      },
      hero: {
        badge: "Affiliate Agreement",
        title: "1540bo.io アフィリエイトプログラム利用規約",
        lead: "本規約は、1540bo.io を宣伝しプレイヤーを紹介するアフィリエイターと当社との間で締結される法的拘束力のある契約です。プログラムへの参加申請をもって、本規約の全条項に同意したものとみなされます。",
        metrics: {
          model: {
            label: "報酬モデル",
            value: "ベットシェア方式",
            desc: "総ベット額に応じて日次で計算。",
          },
          cycle: {
            label: "支払サイクル",
            value: "毎日計算・翌々日反映",
            desc: "世界標準時で決済、ウォレットに自動配分。",
          },
          ranks: {
            label: "ランク体系",
            value: "全9段階",
            desc: "月間入金件数に応じて料率が決定。",
          },
        },
        panel: {
          heading: "パートナーとしての基本",
          items: [
            "正確な登録情報とアカウント管理",
            "ブランド価値を守るプロモーション",
            "関連法域の規制準拠",
            "透明な報酬テーブルと支払い",
          ],
          cta: "主要条項を読む",
        },
      },
      intro: {
        heading: "本規約について",
        paragraphs: [
          "当社のアフィリエイトプログラムは、透明性の高い報酬設計と企業レベルのリスク管理により、長期的なパートナーシップを構築することを目的としています。アフィリエイターは誠実で法令遵守のプロモーション活動を行い、被紹介者に対して責任ある取引環境を提供することが求められます。",
          "以下の条項では、登録要件、禁止行為、報酬計算方法、契約終了条件までを詳細に定めています。アフィリエイト活動を開始する前に、必ず全文を確認してください。",
        ],
      },
      articles: {
        article1: {
          label: "第1条",
          heading: "定義",
          items: [
            {
              term: "アフィリエイター",
              desc: "：本規約に同意し、当社から承認を受け、本プログラムに参加する個人または法人。",
            },
            {
              term: "被紹介者",
              desc: "：アフィリエイター固有のトラッキングリンクを経由して 1540bo.io に新規登録し、入金およびプレイを行ったプレイヤー。",
            },
            {
              term: "アフィリエイト報酬（ベットシェア）",
              desc: "：被紹介者の総ベット額に基づき、第4条に従ってアフィリエイターに支払われる報酬。",
            },
            {
              term: "総ベット額",
              desc: "：被紹介者が行ったベットの合計金額。",
            },
          ],
        },
        article2: {
          label: "第2条",
          heading: "アフィリエイターの登録と承認",
          items: [
            "本プログラムへの参加希望者は、当社指定の登録フォームから申請を行うものとします。",
            "当社は独自の裁量により申請を審査し、承認または拒否する権利を有し、理由の開示義務を負いません。",
            "アフィリエイターは登録情報を常に正確かつ最新の状態に維持する義務を負います。",
            "アフィリエイターは自身のアカウントセキュリティ（パスワード管理など）に全責任を負います。",
          ],
        },
        article3: {
          label: "第3条",
          heading: "アフィリエイターの義務とマーケティング活動",
          intro: "アフィリエイターは誠実かつ合法的な方法で当社サービスを宣伝し、ブランド価値や公序良俗を損なう行為を行ってはなりません。以下の活動は禁止されています。",
          items: [
            "未成年者（居住国の法定年齢未満）を対象とする、または未成年者にアピールするマーケティング。",
            "スパムメール、無差別ダイレクトメッセージなど迷惑行為とみなされる宣伝。",
            "「必勝」「確実な利益」「損失なし」等の虚偽または誇張された表現の使用。",
            "当社または第三者の知的財産権を侵害する行為。",
            "アフィリエイター自身が当社であるかのように誤認させる行為。",
          ],
          outro: "すべての宣伝活動は、関連する法域の法律・規制・ガイドライン（広告表示規制、ギャンブル規制等）に準拠する必要があります。",
        },
        article4: {
          label: "第4条",
          heading: "アフィリエイト報酬の構造",
          items: [
            "報酬モデル：被紹介者の総ベット額の一定割合を報酬として支払うベットシェアモデルを採用します。",
            "報酬計算対象（A案）：総ベット額には、被紹介者が行ったキャッシュベットとリワードベットの両方が含まれます。",
            "アフィリエイトランク：月間入金件数に基づき全9段階で料率を決定します。月間入金件数は、対象月における全被紹介者の入金回数の合計を指します。ランクは毎月1日に前月実績を基に再判定されます。",
          ],
          table: {
            headers: {
              rank: "アフィリエイトランク",
              deposits: "月間入金件数",
              share: "ベットシェア率",
            },
            rows: [
              { rank: "ランク 9", deposits: "41件 以上", share: "0.10%" },
              { rank: "ランク 8", deposits: "36～40件", share: "0.09%" },
              { rank: "ランク 7", deposits: "31～35件", share: "0.08%" },
              { rank: "ランク 6", deposits: "26～30件", share: "0.07%" },
              { rank: "ランク 5", deposits: "21～25件", share: "0.06%" },
              { rank: "ランク 4", deposits: "16～20件", share: "0.05%" },
              { rank: "ランク 3", deposits: "11～15件", share: "0.04%" },
              { rank: "ランク 2", deposits: "6～10件", share: "0.03%" },
              { rank: "ランク 1", deposits: "1～5件", share: "0.02%" },
            ],
          },
          note: "※ 上記のベットシェア率は月間ランクに基づき決定されますが、実際の報酬支払いは第5条に基づきデイリーで行われます。",
        },
        article5: {
          label: "第5条",
          heading: "報酬の支払い",
          items: [
            "計算期間：アフィリエイト報酬は毎日、世界標準時（UTC）00:00〜23:59を計算期間とします。",
            "適用料率：日々の報酬計算には、その月のアフィリエイトランクのベットシェア率を適用します。",
            "支払いタイミング：計算期間に発生した報酬は翌々日 UTC 08:00 にアフィリエイターの報酬ウォレットへ支払われます（例：11月11日分は11月13日 08:00 UTC に支払い）。",
            "支払い条件：当社は最低支払額（例：$0.01）を設定する権利を有し、未達の場合は繰越となる場合があります。",
            "引き出し制限：原則として引き出し制限を設けませんが、不正が疑われる場合や最低出金額に満たない場合はこの限りではありません。",
          ],
        },
        article6: {
          label: "第6条",
          heading: "禁止事項（不正行為）",
          items: [
            "自己アフィリエイトの禁止：自身または密接な関係者による登録・プレイを通じた報酬獲得行為。",
            "報酬の不正な水増し：被紹介者と共謀し、報酬発生のみを目的とする異常なベットやボーナス乱用。",
            "その他、当社が不正と判断する一切の行為。",
          ],
          outro: "上記不正行為が発覚した場合、当社はアフィリエイター資格の即時剥奪、未払い報酬の没収、過去に支払った報酬の返還請求を行う権利を有します。",
        },
        article7: {
          label: "第7条",
          heading: "契約期間と終了",
          items: [
            "本契約は、当社がアフィリエイターの登録を承認した日に発効し、終了されるまで有効です。",
            "いずれの当事者も、30日前の書面通知によって理由を問わず本契約を終了できます。",
            "アフィリエイターが本規約の重大な違反（特に第3条および第6条）を行った場合、当社は事前の通知なしに本契約を即時終了することができます。",
            "契約終了後、アフィリエイターは当社のロゴ、バナー、その他すべてのマーケティング素材の使用を直ちに中止するものとします。",
          ],
        },
        article8: {
          label: "第8条",
          heading: "一般条項",
          items: [
            "規約の変更：当社は、独自の裁量により、本規約および報酬テーブル（料率、計算方法、ランク条件を含む）を、随時変更する権利を有します。変更は、当社がアフィリエイターに通知した時点（Eメール、管理画面上での告知など）で発効します。",
            "関係：アフィリエイターは、当社の独立した契約者であり、従業員、代理人、パートナー、または合弁事業の構成員ではありません。",
            "免責事項：当社は、アフィリエイト活動から生じたいかなる損失または損害についても責任を負いません。",
            "準拠法：本規約は、当社が定める法域の法律に準拠し、同法に従って解釈されるものとします。",
          ],
        },
      },
      update: {
        label: "最終更新日",
        date: "2025年11月11日",
        note: "本規約内容は予告なく改定される場合があります。最新情報は常に当社公式チャネルでご確認ください。",
      },
    },
    hero: {
      title: "超短時間バイナリーオプション取引を24時間365日提供",
      subtitle: "あらゆる機会に取引可能",
      badges: "国際ライセンス取得 • 人気暗号資産ペア・即日出金対応",
      card: {
        title: "インスタントオーダールーティング",
        execSpeed: "平均約定スピード",
        assets: "取扱銘柄数",
        payout: "最大ペイアウト",
      },
    },
    rates: {
      title: "リアルタイムレート",
      subtitle: "人気暗号資産の最新価格をひと目で把握",
      categories: {
        crypto: "暗号資産",
        fx: "FXペア",
        metal: "貴金属",
      },
    },
    features: {
      title: "1540BOが選ばれる理由",
      subtitle:
        "わずか数十秒単位のバイナリーオプション取引機会があることであらゆる機会を取引可能。プロも初心者も取引しやすいUI設計。",
      cards: {
        speed: {
          title: "ミリ秒執行",
          text: "複数市場へのルーティングと深い流動性でスリッページを抑制。",
        },
        security: {
          title: "機関投資家レベルのセキュリティ",
          text: "資金分別管理と世界基準のコンプライアンスで安心を確保。",
        },
        analytics: {
          title: "取引しやすいUI設計",
          text: "直感で取引出来るユーザーインターフェースを統合",
        },
        support: {
          title: "プロデスクサポート",
          text: "経験豊富なリスクマネージャーが母国語で24時間対応。",
        },
      },
    },
    platform: {
      title: "世界中のユーザーの取引を同じプラットフォーム上で確認可能",
      subtitle:
        "バイナリーオプション取引で最も重要である上昇下降の予測スタイルを世界中のユーザーが同時にアクセス。視覚的に取引勝率を高めやすい設計",
      points: {
        one: "デバイス間で同期されるレイアウト",
        two: "ワンタップで上昇／下降チケット",
        three: "リアルタイムのセンチメント可視化",
        four: "人気暗号資産取引を24時間365日取引可能",
        meta: {
          one: "PCとモバイルを行き来しても文脈を失わないUI",
          two: "満期選択とコール／プット判断を一画面に集約",
          three: "ヒートマップで高勝率ゾーンが即座に見える",
          four: "定期的に取引可能ペアを増加",
        },
      },
      visual: {
        title: "オーダーデスク概要",
        buy: "買い注文 • BTC/USD • 名目500ドル @1.5x",
        sell: "売り注文 • EUR/USD • 名目800ドル @1.7x",
        history: "決済済み取引 • 本日の勝率98.4%",
      },
    },
    steps: {
      title: "3ステップで開始",
      items: {
        one: {
          title: "アカウント登録",
          text: "わずか２分で口座開設完了",
        },
        two: {
          title: "デモで練習",
          text: "戦略が固まるまでリスクゼロで取引を体験。",
        },
        three: {
          title: "本番稼働",
          text: "安全に入金し、透明なペイアウトでライブ取引。",
        },
      },
    },
    payments: {
      title: "暗号資産入出金オプション",
      subtitle: "複数の暗号資産を取り扱い",
      note: "暗号資産の出金スピードはわずか数秒以内（各ネットワークの処理速度のみ）",
    },
    testimonials: {
      title: "暗号資産NEWS",
      subtitle: "ブルームバーグ・コインテレグラフ・コインマーケットキャップ・その他の暗号資産NEWSをチェック",
      items: {
        one: {
          title: "ビットコイン、史上最高値を更新",
          text: "機関投資家の関心が高まる中、ビットコインが新たな価格水準に到達。市場アナリストは今後数ヶ月でさらなる上昇を予測している。",
          date: "2025年11月14日",
          link: "続きを読む →",
        },
        two: {
          title: "イーサリアム2.0アップデート完了",
          text: "イーサリアムネットワークの大規模アップグレードが成功裏に完了。取引速度の向上とガス代の削減が実現され、DeFiエコシステムに新たな可能性をもたらす。",
          date: "2025年11月13日",
          link: "続きを読む →",
        },
        three: {
          title: "暗号資産市場、時価総額3兆ドル突破",
          text: "世界的な採用拡大により、暗号資産市場全体の時価総額が過去最高を記録。主要アルトコインも軒並み上昇し、市場の成熟度を示している。",
          date: "2025年11月12日",
          link: "続きを読む →",
        },
      },
    },
    footer: {
      disclaimer:
        "デジタルオプション取引には大きなリスクが伴い、投資資金の全額を失う可能性があります。仕組みの理解度とリスク許容度を十分にご確認ください。",
      links: {
        terms: "利用規約",
        privacy: "プライバシー",
        security: "セキュリティ",
        contact: "お問い合わせ",
      },
    },
  },
  th: {
    meta: {
      title: "1540BO | แพลตฟอร์มดิจิทัลออปชัน",
      affiliateTitle: "1540BO | ข้อกำหนดโปรแกรมพันธมิตร",
    },
    nav: {
      login: "เข้าสู่ระบบ",
      features: "จุดเด่น",
      affiliate: "พันธมิตร",
      terms: "ข้อกำหนดการใช้บริการ",
      privacy: "นโยบายความเป็นส่วนตัว",
      support: "บริการ",
    },
    cta: {
      demo: "ทดลองบัญชีเดโม",
      start: "เปิดบัญชีจริง",
    },
    affiliate: {
      cta: {
        join: "เข้าร่วมโปรแกรมทันที",
      },
      hero: {
        badge: "ข้อตกลงพันธมิตร",
        title: "ข้อกำหนดโปรแกรมพันธมิตร 1540bo.io",
        lead: "ข้อตกลงฉบับนี้กำหนดความสัมพันธ์ที่มีผลผูกพันระหว่าง 1540bo.io กับพันธมิตรที่โปรโมตบริการและแนะนำผู้เล่น เมื่อยื่นสมัครเข้าร่วมโปรแกรม ถือว่าคุณยอมรับข้อกำหนดทั้งหมดทันที.",
        metrics: {
          model: {
            label: "รูปแบบค่าตอบแทน",
            value: "โครงสร้าง Bet-share",
            desc: "คำนวณรายวันจากยอดเดิมพันรวม.",
          },
          cycle: {
            label: "รอบการจ่าย",
            value: "คำนวณทุกวัน · โอนใน T+2",
            desc: "ตัดยอดตามเวลา UTC และโอนเข้ากระเป๋าโดยอัตโนมัติ.",
          },
          ranks: {
            label: "ระดับพันธมิตร",
            value: "ทั้งหมด 9 ระดับ",
            desc: "ปรับอัตราตามจำนวนการฝากประจำเดือน.",
          },
        },
        panel: {
          heading: "พื้นฐานสำหรับพาร์ทเนอร์",
          items: [
            "ข้อมูลลงทะเบียนและการดูแลบัญชีที่ถูกต้อง",
            "การโปรโมตที่รักษาภาพลักษณ์แบรนด์",
            "ปฏิบัติตามข้อกำหนดในทุกเขตอำนาจ",
            "ตารางค่าตอบแทนและการจ่ายที่โปร่งใส",
          ],
          cta: "อ่านข้อกำหนดสำคัญ",
        },
      },
      intro: {
        heading: "เกี่ยวกับข้อกำหนดนี้",
        paragraphs: [
          "โปรแกรมพันธมิตรของเรามุ่งสร้างความร่วมมือระยะยาวด้วยโครงสร้างค่าตอบแทนที่โปร่งใสและการจัดการความเสี่ยงระดับองค์กร พันธมิตรต้องโปรโมตอย่างรับผิดชอบและมอบประสบการณ์ที่ปลอดภัยให้ผู้เล่นที่แนะนำ.",
          "เงื่อนไขด้านล่างอธิบายรายละเอียดเกี่ยวกับเกณฑ์การสมัคร การกระทำต้องห้าม วิธีคำนวณค่าตอบแทน และเงื่อนไขการยุติสัญญา กรุณาศึกษาเอกสารทั้งหมดก่อนเริ่มกิจกรรมพันธมิตร.",
        ],
      },
      articles: {
        article1: {
          label: "มาตรา 1",
          heading: "คำจำกัดความ",
          items: [
            {
              term: "พันธมิตร",
              desc: ": บุคคลหรือองค์กรที่ยอมรับข้อกำหนดนี้ ได้รับการอนุมัติ และเข้าร่วมโปรแกรม.",
            },
            {
              term: "ผู้เล่นที่ถูกแนะนำ",
              desc: ": ผู้เล่นที่ลงทะเบียนกับ 1540bo.io ผ่านลิงก์ติดตามเฉพาะของพันธมิตร ทำการฝากเงิน และวางเดิมพัน.",
            },
            {
              term: "ค่าตอบแทนพันธมิตร (Bet-share)",
              desc: ": ผลตอบแทนที่จ่ายให้พันธมิตรตามมาตรา 4 โดยคำนวณจากยอดเดิมพันรวมของผู้เล่นที่แนะนำ.",
            },
            {
              term: "ยอดเดิมพันรวม",
              desc: ": ยอดรวมของการเดิมพันทั้งหมดที่ผู้เล่นที่แนะนำได้วาง.",
            },
          ],
        },
        article2: {
          label: "มาตรา 2",
          heading: "การลงทะเบียนและการอนุมัติพันธมิตร",
          items: [
            "ผู้สมัครต้องส่งคำขอผ่านแบบฟอร์มที่บริษัทกำหนด.",
            "บริษัทมีสิทธิ์พิจารณา อนุมัติ หรือปฏิเสธตามดุลยพินิจ โดยไม่ต้องเปิดเผยเหตุผล.",
            "พันธมิตรต้องรักษาข้อมูลลงทะเบียนให้ถูกต้องและเป็นปัจจุบันอยู่เสมอ.",
            "พันธมิตรต้องรับผิดชอบการรักษาความปลอดภัยบัญชีของตนเอง เช่น การจัดการรหัสผ่าน.",
          ],
        },
        article3: {
          label: "มาตรา 3",
          heading: "หน้าที่และแนวทางการตลาดของพันธมิตร",
          intro: "พันธมิตรต้องโปรโมตบริการอย่างสุจริตและถูกกฎหมาย ห้ามดำเนินการที่ทำลายภาพลักษณ์หรือขัดต่อความสงบเรียบร้อย การกระทำต่อไปนี้ถือว่าถูกห้าม.",
          items: [
            "การกำหนดเป้าหมายหรือสื่อสารกับผู้เยาว์ (ผู้ที่อายุต่ำกว่ากฎหมายในถิ่นพำนัก).",
            "การส่งอีเมลสแปม ข้อความโดยไม่เลือก หรือการติดต่อที่ถือว่าเป็นการรบกวน.",
            "การใช้ข้อความเกินจริง เช่น \"รับประกันชนะ\" หรือ \"ไร้ความเสี่ยง\".",
            "การละเมิดทรัพย์สินทางปัญญาของบริษัทหรือบุคคลที่สาม.",
            "การแสดงตนเสมือนเป็น 1540bo.io หรืออ้างความเกี่ยวข้องโดยไม่มีสิทธิ์.",
          ],
          outro: "กิจกรรมโปรโมตทั้งหมดต้องปฏิบัติตามกฎหมาย ระเบียบ และแนวปฏิบัติที่เกี่ยวข้องในทุกเขตอำนาจ รวมถึงข้อกำหนดด้านโฆษณาและการพนัน.",
        },
        article4: {
          label: "มาตรา 4",
          heading: "โครงสร้างค่าตอบแทนพันธมิตร",
          items: [
            "รูปแบบค่าตอบแทน: ใช้โครงสร้าง Bet-share โดยแบ่งเปอร์เซ็นต์จากยอดเดิมพันรวมของผู้เล่นที่แนะนำ.",
            "ยอดที่นับรวม: รวมทั้งการเดิมพันด้วยเงินสดและโบนัสของผู้เล่นที่แนะนำ.",
            "ระดับพันธมิตร: แบ่งเป็น 9 ระดับตามจำนวนครั้งการฝากในแต่ละเดือน และพิจารณาใหม่ทุกวันที่ 1 ของเดือนถัดไป.",
          ],
          table: {
            headers: {
              rank: "ระดับพันธมิตร",
              deposits: "จำนวนการฝากต่อเดือน",
              share: "อัตรา Bet-share",
            },
            rows: [
              { rank: "ระดับ 9", deposits: "41 ครั้งขึ้นไป", share: "0.10%" },
              { rank: "ระดับ 8", deposits: "36-40 ครั้ง", share: "0.09%" },
              { rank: "ระดับ 7", deposits: "31-35 ครั้ง", share: "0.08%" },
              { rank: "ระดับ 6", deposits: "26-30 ครั้ง", share: "0.07%" },
              { rank: "ระดับ 5", deposits: "21-25 ครั้ง", share: "0.06%" },
              { rank: "ระดับ 4", deposits: "16-20 ครั้ง", share: "0.05%" },
              { rank: "ระดับ 3", deposits: "11-15 ครั้ง", share: "0.04%" },
              { rank: "ระดับ 2", deposits: "6-10 ครั้ง", share: "0.03%" },
              { rank: "ระดับ 1", deposits: "1-5 ครั้ง", share: "0.02%" },
            ],
          },
          note: "อัตรา Bet-share กำหนดตามระดับรายเดือน แต่การจ่ายจริงจะคำนวณรายวันตามมาตรา 5.",
        },
        article5: {
          label: "มาตรา 5",
          heading: "การจ่ายค่าตอบแทน",
          items: [
            "ช่วงคำนวณ: ทุกวัน ตั้งแต่ 00:00 ถึง 23:59 (UTC).",
            "อัตราที่ใช้: ใช้อัตราของระดับพันธมิตรประจำเดือนนั้นในการคำนวณแต่ละวัน.",
            "เวลาจ่าย: ค่าตอบแทนที่เกิดขึ้นจะโอนเข้ากระเป๋ารางวัลของพันธมิตรเวลา 08:00 UTC ในอีกสองวันถัดไป (เช่น รายได้วันที่ 11 พ.ย. จ่ายวันที่ 13 พ.ย.).",
            "เงื่อนไขการจ่าย: บริษัทอาจกำหนดจำนวนจ่ายขั้นต่ำ (เช่น $0.01) และยอดที่ต่ำกว่าจะสะสมจนถึงเกณฑ์ต่ำสุด.",
            "ข้อจำกัดการถอน: โดยหลักแล้วสามารถถอนได้โดยไม่มีเงื่อนไขการทำเทิร์น แต่บริษัทอาจระงับในกรณีสงสัยว่ามีการทุจริตหรือยอดไม่ถึงขั้นต่ำการถอนตามข้อกำหนดทั่วไป.",
          ],
        },
        article6: {
          label: "มาตรา 6",
          heading: "การกระทำต้องห้าม (การทุจริต)",
          items: [
            "ห้ามผูกลิงก์กับตนเองหรือผู้ใกล้ชิดเพื่อสร้างบัญชีและรับค่าตอบแทน.",
            "ห้ามสมรู้ร่วมคิดกับผู้เล่นที่แนะนำเพื่อวางเดิมพันผิดปกติหรือใช้โบนัสในทางที่ผิดเพื่อเพิ่มค่าตอบแทน.",
            "การกระทำใด ๆ ที่บริษัทเห็นว่าเป็นการทุจริต.",
          ],
          outro: "หากตรวจพบการทุจริต บริษัทมีสิทธิตัดสิทธิ์พันธมิตรทันที ริบค่าตอบแทนที่ยังไม่จ่าย และเรียกคืนค่าตอบแทนที่เคยจ่ายไป.",
        },
        article7: {
          label: "มาตรา 7",
          heading: "ระยะเวลาสัญญาและการยุติ",
          items: [
            "ข้อตกลงมีผลตั้งแต่วันที่บริษัทอนุมัติพันธมิตร และมีผลต่อเนื่องจนกว่าจะถูกยุติ.",
            "คู่สัญญาฝ่ายใดฝ่ายหนึ่งสามารถยุติสัญญาได้ด้วยหนังสือแจ้งล่วงหน้า 30 วันโดยไม่ต้องระบุเหตุผล.",
            "บริษัทอาจยุติสัญญาได้ทันทีโดยไม่แจ้งล่วงหน้า หากพบการละเมิดร้ายแรง โดยเฉพาะมาตรา 3 หรือ 6.",
            "เมื่อสัญญายุติ พันธมิตรต้องหยุดใช้โลโก้ แบนเนอร์ และสื่อการตลาดทั้งหมดของบริษัททันที.",
          ],
        },
        article8: {
          label: "มาตรา 8",
          heading: "ข้อกำหนดทั่วไป",
          items: [
            "การแก้ไข: บริษัทอาจปรับปรุงข้อกำหนดหรือโครงสร้างค่าตอบแทนได้ตลอดเวลา โดยมีผลเมื่อมีการแจ้งผ่านอีเมลหรือแดชบอร์ด.",
            "ความสัมพันธ์: พันธมิตรเป็นคู่สัญญาอิสระ ไม่ใช่พนักงาน ตัวแทน หุ้นส่วน หรือผู้ร่วมทุนของบริษัท.",
            "ข้อจำกัดความรับผิด: บริษัทไม่รับผิดชอบต่อความสูญเสียหรือความเสียหายใด ๆ จากการดำเนินการของพันธมิตร.",
            "กฎหมายที่ใช้บังคับ: ข้อตกลงนี้อยู่ภายใต้กฎหมายของเขตอำนาจที่บริษัทกำหนด และตีความตามกฎหมายนั้น.",
          ],
        },
      },
      update: {
        label: "อัปเดตล่าสุด",
        date: "11 พฤศจิกายน 2025",
        note: "ข้อกำหนดอาจเปลี่ยนแปลงโดยไม่แจ้งล่วงหน้า โปรดตรวจสอบข้อมูลล่าสุดจากช่องทางอย่างเป็นทางการของบริษัทเสมอ.",
      },
    },
    hero: {
      title: "ดิจิทัลออปชันระยะสั้นพิเศษเปิดให้เทรด 24/7",
      subtitle: "คว้าโอกาสการเทรดทุกรูปแบบ",
      badges: "ได้รับใบอนุญาตทั่วโลก • คู่คริปโตยอดนิยม • ถอนเงินภายในวันเดียว",
      card: {
        title: "ส่งคำสั่งแบบทันที",
        execSpeed: "ความเร็วเฉลี่ยในการจัดการคำสั่ง",
        assets: "จำนวนสินทรัพย์",
        payout: "อัตราผลตอบแทนสูงสุด",
      },
    },
    rates: {
      title: "อัตราตลาดสด",
      subtitle: "ติดตามคู่คริปโตยอดนิยมแบบเรียลไทม์",
      categories: {
        crypto: "คริปโต",
        fx: "คู่เงิน",
        metal: "โลหะมีค่า",
      },
    },
    features: {
      title: "เหตุผลที่เทรดเดอร์เลือก 1540BO",
      subtitle:
        "หน้าต่างเทรดระดับไม่กี่วินาทีทำให้คว้าโอกาสได้ทุกจังหวะ พร้อม UI ที่เป็นมิตรต่อทั้งมืออาชีพและผู้เริ่มต้น",
      cards: {
        speed: {
          title: "ประมวลผลระดับมิลลิวินาที",
          text: "การส่งคำสั่งข้ามศูนย์ซื้อขายและสภาพคล่องลึก ลดความคลาดเคลื่อนของราคา",
        },
        security: {
          title: "ความปลอดภัยมาตรฐานสถาบัน",
          text: "ดูแลเงินลูกค้าแยกบัญชีและปฏิบัติตามกฎเกณฑ์ระดับโลก",
        },
        analytics: {
          title: "อินเทอร์เฟซที่ออกแบบเพื่อการเทรด",
          text: "จัดวาง UI ให้ใช้งานง่ายและสั่งการได้ทันที",
        },
        support: {
          title: "ทีมซัพพอร์ตมืออาชีพ",
          text: "ผู้จัดการความเสี่ยงที่มีประสบการณ์ให้บริการหลายภาษา 24/7",
        },
      },
    },
    platform: {
      title: "เห็นการเทรดของผู้ใช้ทั่วโลกบนแพลตฟอร์มเดียว",
      subtitle:
        "การเทรด Binary Option แบบทำนายขึ้นลงพร้อมกันทั่วโลก ด้วยเลย์เอาต์ที่ช่วยให้เห็นจังหวะชนะได้ชัดเจน",
      points: {
        one: "เลย์เอาต์ซิงก์กันทุกอุปกรณ์",
        two: "ตั๋วขึ้น/ลงแบบสัมผัสเดียว",
        three: "แผนที่ความรู้สึกตลาดแบบเรียลไทม์",
        four: "เทรดคู่คริปโตยอดนิยมได้ 24/7",
        meta: {
          one: "สลับเดสก์ท็อป-มือถือได้ทันทีโดยไม่เสียบริบท",
          two: "เลือกอายุสัญญาและคอล/พุตในจอเดียว",
          three: "ฮีทแมพช่วยให้เห็นจุดน่าทำกำไรทันที",
          four: "เพิ่มคู่เทรดใหม่อย่างต่อเนื่องให้เลือกทำกำไร",
        },
      },
      visual: {
        title: "ภาพรวมจุดส่งคำสั่ง",
        buy: "คำสั่งซื้อ • BTC/USD • มูลค่า $500 @ 1.5x",
        sell: "คำสั่งขาย • EUR/USD • มูลค่า $800 @ 1.7x",
        history: "ปิดดีลแล้ว • อัตราชนะวันนี้ 98.4%",
      },
    },
    steps: {
      title: "เริ่มง่ายใน 3 ขั้นตอน",
      items: {
        one: {
          title: "ลงทะเบียน",
          text: "เปิดบัญชีได้ภายใน 2 นาที",
        },
        two: {
          title: "ทดลอง",
          text: "ฝึกกลยุทธ์บนบัญชีเดโมโดยไม่ต้องเสี่ยงทุนจริง",
        },
        three: {
          title: "เทรดจริง",
          text: "ฝากเงินปลอดภัยและเริ่มเทรดด้วยการจ่ายผลตอบแทนโปร่งใส",
        },
      },
    },
    payments: {
      title: "ตัวเลือกการฝากด้วยคริปโต",
      subtitle: "รองรับคริปโตหลายสกุล",
      note: "การถอนคริปโตใช้เวลาเพียงไม่กี่วินาที ขึ้นอยู่กับความเร็วของเครือข่าย",
    },
    testimonials: {
      title: "ข่าวคริปโต",
      subtitle: "ตรวจสอบ Bloomberg, CoinTelegraph, CoinMarketCap และแหล่งข่าวคริปโตอื่นๆ",
      items: {
        one: {
          text: "“ความเร็วในการส่งคำสั่งสุดยอด ทำให้การป้องกันความเสี่ยง FX ใช้เวลาเพียงไม่กี่วินาที”",
          name: "Ayumi K. • Tokyo",
        },
        two: {
          text: "“ราคาโปร่งใสและถอนเงินไวทำให้ลูกค้าของผมมั่นใจในการเพิ่มขนาดพอร์ต”",
          name: "Michael R. • Singapore",
        },
        three: {
          text: "“ทีมสนับสนุนหลายภาษาเข้าใจกฎระเบียบท้องถิ่น ทำให้เราปฏิบัติตามได้อย่างราบรื่น”",
          name: "Supalak P. • Bangkok",
        },
      },
    },
    footer: {
      disclaimer:
        "การเทรดออปชันดิจิทัลมีความเสี่ยงสูง อาจสูญเสียเงินลงทุนทั้งหมด ควรทำความเข้าใจและประเมินความเสี่ยงก่อนตัดสินใจ",
      links: {
        terms: "ข้อกำหนด",
        privacy: "นโยบายความเป็นส่วนตัว",
        security: "ความปลอดภัย",
        contact: "ติดต่อเรา",
      },
    },
  },
};

const assets = [
  { pair: "BTC/USD", price: 63250.23, change: 1.24, decimals: 2, volatility: 0.0018, categoryKey: "rates.categories.crypto" },
  { pair: "ETH/USD", price: 3420.58, change: -0.74, decimals: 2, volatility: 0.0024, categoryKey: "rates.categories.crypto" },
  { pair: "XRP/USD", price: 0.54, change: 0.32, decimals: 4, volatility: 0.0032, categoryKey: "rates.categories.crypto" },
  { pair: "ADA/USD", price: 0.68, change: -0.15, decimals: 4, volatility: 0.0036, categoryKey: "rates.categories.crypto" },
  { pair: "SOL/USD", price: 148.37, change: 1.82, decimals: 2, volatility: 0.004, categoryKey: "rates.categories.crypto" },
  { pair: "BNB/USD", price: 575.9, change: 0.55, decimals: 2, volatility: 0.0021, categoryKey: "rates.categories.crypto" },
  { pair: "DOGE/USD", price: 0.16, change: -0.48, decimals: 4, volatility: 0.0045, categoryKey: "rates.categories.crypto" },
  { pair: "LTC/USD", price: 86.42, change: 0.64, decimals: 2, volatility: 0.0025, categoryKey: "rates.categories.crypto" },
];

const API_ENDPOINT = window.TICKER_API_ENDPOINT ?? null;

const assetElements = new Map();
let currentLang = "en";

function translate(key, lang = currentLang) {
  const fallback = translations.en;
  const target = translations[lang] || fallback;
  const path = key.split(".");
  let value = path.reduce((acc, segment) => (acc ? acc[segment] : undefined), target);
  if (value !== undefined) {
    return value;
  }
  return path.reduce((acc, segment) => (acc ? acc[segment] : undefined), fallback) ?? key;
}

function applyTranslations(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  const pageKey = document.body.dataset.page || "home";
  const specificMetaKey = `meta.${pageKey}Title`;
  let pageTitle = translate(specificMetaKey, lang);
  if (pageTitle === specificMetaKey) {
    pageTitle = translate("meta.title", lang);
  }
  document.title = pageTitle;
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.dataset.i18n;
    el.textContent = translate(key, lang);
  });
  renderTicker();
}

function formatPrice(price, decimals) {
  const options = {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  };
  return price.toLocaleString(currentLang === "th" ? "th-TH" : currentLang === "ja" ? "ja-JP" : "en-US", options);
}

function formatChange(change) {
  const sign = change >= 0 ? "+" : "";
  return `${sign}${change.toFixed(2)}%`;
}

function renderTicker() {
  const track = document.getElementById("ticker-track");
  if (!track) return;
  track.innerHTML = "";
  assetElements.clear();
  assets.forEach((asset) => {
    const item = document.createElement("div");
    item.className = "ticker-item";

    const pairRow = document.createElement("div");
    pairRow.className = "pair";
    const pairLabel = document.createElement("span");
    pairLabel.textContent = asset.pair;
    const changeLabel = document.createElement("span");
    changeLabel.className = `change ${asset.change >= 0 ? "positive" : "negative"}`;
    changeLabel.textContent = formatChange(asset.change);
    pairRow.append(pairLabel, changeLabel);

    const priceRow = document.createElement("div");
    priceRow.className = "price";
    priceRow.textContent = formatPrice(asset.price, asset.decimals);

    const metaRow = document.createElement("div");
    metaRow.className = "meta";
    metaRow.textContent = translate(asset.categoryKey);

    item.append(pairRow, priceRow, metaRow);
    track.append(item);
    assetElements.set(asset.pair, { priceRow, changeLabel, metaRow });
  });
}

function updateTickerValues(skipDrift = false) {
  assets.forEach((asset) => {
    if (!skipDrift && !API_ENDPOINT) {
      const drift = (Math.random() - 0.5) * asset.volatility;
      const nextPrice = asset.price * (1 + drift);
      asset.price = parseFloat(nextPrice.toFixed(asset.decimals));
      const momentum = asset.change * 0.85 + drift * 100;
      asset.change = parseFloat(momentum.toFixed(2));
    }

    const nodes = assetElements.get(asset.pair);
    if (!nodes) return;
    nodes.priceRow.textContent = formatPrice(asset.price, asset.decimals);
    nodes.changeLabel.textContent = formatChange(asset.change);
    nodes.changeLabel.classList.toggle("positive", asset.change >= 0);
    nodes.changeLabel.classList.toggle("negative", asset.change < 0);
    nodes.metaRow.textContent = translate(asset.categoryKey);
  });
}

async function fetchLiveRates() {
  if (!API_ENDPOINT) return;
  try {
    const response = await fetch(API_ENDPOINT);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    data.forEach((incoming) => {
      const target = assets.find((asset) => asset.pair === incoming.pair);
      if (!target) return;
      target.price = Number(incoming.price) || target.price;
      target.change = Number(incoming.change) || target.change;
    });
    updateTickerValues(true);
  } catch (error) {
    console.error("Failed to fetch live rates", error);
  }
}

function syncLangActiveState(lang) {
  document.querySelectorAll(".lang-switch button, .mobile-lang-switch button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

function initLanguageSwitcher() {
  const desktopSwitcher = document.querySelector(".lang-switch");
  desktopSwitcher?.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLButtonElement)) return;
    const lang = target.dataset.lang;
    if (!lang || !translations[lang]) return;
    applyTranslations(lang);
    syncLangActiveState(lang);
  });

  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");

  document.querySelectorAll(".mobile-lang-switch button").forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.getAttribute("data-lang");
      if (!lang || !translations[lang]) return;
      applyTranslations(lang);
      syncLangActiveState(lang);
      mobileMenuToggle?.classList.remove("active");
      mobileMenu?.classList.remove("active");
      document.body.classList.remove("locked-scroll");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initLanguageSwitcher();
  applyTranslations(currentLang);
  syncLangActiveState(currentLang);
  setInterval(() => {
    if (API_ENDPOINT) {
      fetchLiveRates();
    } else {
      updateTickerValues();
    }
  }, 5000);
  if (API_ENDPOINT) {
    fetchLiveRates();
  }

  // Mobile Menu Toggle
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav a");

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener("click", () => {
      mobileMenuToggle.classList.toggle("active");
      mobileMenu.classList.toggle("active");
      document.body.classList.toggle("locked-scroll", mobileMenu.classList.contains("active"));
    });

    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenuToggle.classList.remove("active");
        mobileMenu.classList.remove("active");
        document.body.classList.remove("locked-scroll");
      });
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 980 && document.body.classList.contains("locked-scroll")) {
        mobileMenuToggle.classList.remove("active");
        mobileMenu.classList.remove("active");
        document.body.classList.remove("locked-scroll");
      }
    });
  }
});
