const translations = {
  en: {
    meta: {
      title: "1540BO | Digital Options Trading",
      affiliateTitle: "1540BO | Affiliate Program Terms",
      vipTitle: "1540BO | VIP Program",
      termsTitle: "1540BO | Terms of Service",
      privacyTitle: "1540BO | Privacy Policy",
      helpTitle: "1540BO | Help Center",
      helpAccountTitle: "1540BO | Account Help",
      helpTradingTitle: "1540BO | Trading Help",
      helpDepositTitle: "1540BO | Deposit Help",
      helpWithdrawalTitle: "1540BO | Withdrawal Help",
      helpAffiliateTitle: "1540BO | Affiliate Help",
      helpOtherTitle: "1540BO | Resources",
      providerTitle: "1540BO | Provider Program",
    },
    nav: {
      login: "Log in",
      features: "Features",
      affiliate: "Affiliate",
      provider: "Provider",
      vip: "VIP Program",
      terms: "Terms of Service",
      privacy: "Privacy Policy",
      help: "Help Center",
      support: "Support",
    },
    cta: {
      demo: "Try demo",
      start: "Start trading",
    },
    supportForm: {
      badge: "24/7 desk",
      title: "Contact support",
      subtitle:
        "Fill out the form and we'll open an email draft to support@1540bo.io with your details.",
      fields: {
        name: "Full name",
        email: "Contact email",
        account: "Account ID / UID (optional)",
        topic: "Topic",
        subject: "Subject (optional)",
        message: "Message",
      },
      topics: {
        general: "General question",
        account: "Account access & KYC",
        payments: "Deposits & withdrawals",
        vip: "VIP & rewards",
        provider: "Provider / licensing",
      },
      subjects: {
        general: "General support request",
        account: "Account assistance needed",
        payments: "Payments support request",
        vip: "VIP desk request",
        provider: "Provider / licensing inquiry",
      },
      note: "Including TXIDs, timestamps, or screenshots speeds up investigations.",
      disclaimer:
        "Submitting opens your email client so you can review and send the message to support@1540bo.io.",
      submit: "Open email draft",
      close: "Close support form",
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
          intro:
            "Affiliates must promote our services honestly and lawfully, and must not undertake activities that damage the brand or violate public order. The following actions are prohibited.",
          items: [
            "Targeting or appealing to minors (persons under the legal age in their jurisdiction).",
            "Sending spam emails, indiscriminate direct messages, or any outreach deemed harassing.",
            "Using misleading or exaggerated claims such as 'guaranteed wins' or 'risk-free profits.'",
            "Infringing the intellectual property rights of us or any third party.",
            "Misrepresenting oneself as 1540bo.io or implying official endorsement.",
          ],
          outro:
            "All promotional activity must comply with every applicable law, regulation, and guideline in relevant jurisdictions, including advertising and gaming requirements.",
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
          outro:
            "If such misconduct is detected, we may immediately terminate the affiliate status, forfeit unpaid rewards, and reclaim previously paid amounts.",
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
    provider: {
      hero: {
        badge: "Provider Program",
        title: "Launch your own binary options brand in weeks.",
        subtitle:
          "Offer 1540BO liquidity, risk controls, and multilingual UX under your own label while we operate the core infrastructure.",
        bullets: [
          "Deep liquidity across the most demanded crypto pairs",
          "Multi-currency cashier with on-chain settlement rails",
          "Pre-integrated KYC/AML and responsible-trading workflows",
        ],
        meta: "SLA-backed platform • SOC2-ready data flows",
        ctaPrimary: "Book a provider demo",
        ctaSecondary: "Download capability deck",
        metrics: [
          {
            label: "Time to launch",
            value: "6 weeks avg",
            desc: "Branding, cashier, and VIP logic configured",
          },
          {
            label: "Markets",
            value: "Top crypto pairs",
            desc: "Focus on high-liquidity assets",
          },
          {
            label: "Locales",
            value: "3 languages",
            desc: "EN / JP / TH interfaces ready",
          },
        ],
      },
      highlights: {
        heading: "Why operators choose 1540BO as their provider",
        cards: [
          {
            title: "Battle-tested execution stack",
            body: "Millisecond routing, deep liquidity, and automated risk engines keep spreads tight even during volatile sessions.",
          },
          {
            title: "Modular cashier & rewards",
            body: "Plug in our wallet, VIP ladder, and promo toolkit or connect your existing systems via documented APIs.",
          },
          {
            title: "White-glove compliance",
            body: "KYC vendors, reporting templates, and escalation paths are bundled so you can satisfy regulators from day one.",
          },
        ],
      },
      architecture: {
        heading: "Platform architecture you can license",
        intro:
          "Pick the modules you need—core trading engine, cashier, CRM, or marketing automation—and scale at your own pace.",
        modules: [
          {
            title: "Trading core",
            text: "Price feeds, ticket builder, and risk controls with configurable expiries (15s–4h).",
            points: [
              "Dedicated risk dashboard",
              "Transparency feed + dispute audit",
              "Latency monitoring & alerts",
            ],
          },
          {
            title: "Wallet & settlement",
            text: "Multi-chain deposits, auto-converted balances, and withdrawal approval workflows.",
            points: [
              "USDT/TRX/BTC/ETH/LTC/XRP support",
              "Cold-wallet policy templates",
              "TXID reconciliation toolkit",
            ],
          },
          {
            title: "Growth & CRM",
            text: "VIP tiers, missions, broadcast tools, and analytics to engage high-value players.",
            points: [
              "20-rank VIP ladder & bonuses",
              "Campaign scheduler + segmentation",
              "Partner & affiliate tracking",
            ],
          },
        ],
      },
      onboarding: {
        heading: "How provider onboarding works",
        subtitle: "Clear milestones keep both teams aligned from scoping to launch.",
        steps: [
          {
            title: "1. Discovery",
            desc: "Define jurisdictions, product scope, and custom modules. Receive commercial & technical proposals within 5 business days.",
          },
          {
            title: "2. Solution design",
            desc: "Lock visual branding, cashier flows, and data integrations. Sandbox credentials issued for your QA team.",
          },
          {
            title: "3. Compliance & training",
            desc: "Set up KYC vendors, reporting templates, and operational runbooks. Staff training sessions included.",
          },
          {
            title: "4. Launch & optimise",
            desc: "Migrate players, enable live funding, and iterate on VIP or partner programs with dedicated TAM support.",
          },
        ],
      },
      tiers: {
        heading: "Provider service tiers",
        subtitle: "Choose the engagement model that fits your roadmap.",
        table: {
          headers: {
            tier: "Tier",
            focus: "Ideal for",
            includes: "What’s included",
          },
          rows: [
            {
              tier: "Essential",
              focus: "Startups launching their first brand",
              includes:
                "Core trading engine, cashier, VIP ladder, branded web app, standard SLA",
            },
            {
              tier: "Growth",
              focus: "Operators expanding into new regions",
              includes:
                "Everything in Essential + custom KYC routing, partner tracking, marketing automation",
            },
            {
              tier: "Enterprise",
              focus: "Groups needing bespoke integrations",
              includes:
                "Dedicated infrastructure, API extensions, compliance playbooks, 24/7 TAM, quarterly roadmap reviews",
            },
          ],
        },
      },
      compliance: {
        heading: "Built-in compliance & support",
        intro:
          "Stay ahead of regulatory expectations with our documented controls and shared monitoring tools.",
        items: [
          "Multi-vendor KYC/AML orchestration and watchlist screening",
          "Responsible trading toolkit with configurable limits and reality checks",
          "Audit-ready logs for dispute resolution and financial reporting",
          "Security incident runbooks and 24/7 escalation desk",
        ],
        note: "Need a custom jurisdictional review? Our compliance partners can scope it as a bundled engagement.",
        support: {
          heading: "Talk to the provider desk",
          body: "Send your deck or business brief to support@1540bo.io and we will schedule a workshop within 72 hours.",
        },
      },
      cta: {
        heading: "Ready to explore a provider agreement?",
        body: "Tell us about your market, expected monthly volume, and go-live timeline. We'll assemble the right modules and pricing.",
        primary: "Contact support@1540bo.io",
        secondary: "View technical documentation",
      },
    },
    vip: {
      hero: {
        badge: "VIP Program",
        title: "20-tier VIP rewards engineered for committed players",
        subtitle:
          "Advance through lifetime wagering to unlock daily rakeback, weekly and monthly cashback boosts, and one-time rank-up bonuses.",
        ctaPrimary: "Request VIP access",
        ctaSecondary: "Contact support",
        card: {
          title: "Program architecture",
          items: [
            "20 rank levels aligned to cumulative wagering milestones.",
            "Four payout streams: daily rakeback, weekly cashback, monthly cashback, and rank-up bonuses.",
            "Active boost incentives and monthly maintenance rules keep rewards aligned with activity.",
          ],
        },
      },
      overview: {
        heading: "VIP reward framework",
        paragraphs: [
          "The VIP reward program rewards players across a 20-level ladder determined entirely by lifetime wagering volume.",
          "Higher ranks unlock stronger percentages and larger bonuses, with automatic recalculations driven by activity and monthly performance.",
        ],
        points: [
          "Five tiers—Bronze, Silver, Gold, Platinum, Diamond—each containing four rank levels.",
          "Four reward types that accumulate simultaneously: daily rakeback, weekly loss cashback, monthly loss cashback, and rank-up bonuses.",
          "Two supporting rules govern extra boost percentages and monthly level maintenance.",
        ],
      },
      rewards: {
        types: [
          {
            badge: "① Daily",
            title: "Wager rakeback",
            text: "Applies the unlocked percentage to the day’s total wagered amount for instant grind-back value.",
          },
          {
            badge: "② Weekly",
            title: "Loss cashback",
            text: "Calculates on net weekly losses; baseline percentages are augmented by the weekly active boost when requirements are met.",
          },
          {
            badge: "③ Monthly",
            title: "Loss cashback",
            text: "Rewards net monthly losses with boosted percentages that scale higher for consistent traders via the monthly active boost.",
          },
          {
            badge: "④ Rank-up",
            title: "One-time bonus",
            text: "A fixed cash reward is credited the first time each rank milestone is reached.",
          },
        ],
        summary: {
          label: "Rewards",
          heading: "20 ranks & four payout streams",
          text: "Baseline percentages apply to cash wagering and net loss. As you climb, daily rakeback, weekly and monthly cashback, and rank-up bonuses increase dramatically.",
          note: "Displayed percentages exclude active boost adjustments; see the program rules for boost details.",
        },
        table: {
          headers: {
            rank: "Rank",
            tier: "Tier",
            requirement: "Cumulative wagering requirement",
            bonus: "Rank-up bonus",
            daily: "Daily rakeback",
            weekly: "Weekly cashback",
            monthly: "Monthly cashback",
          },
          rows: [
            {
              rank: "1",
              tier: "Bronze 1",
              requirement: "$0",
              bonus: "-",
              daily: "0.10%",
              weekly: "3.5%",
              monthly: "1.5%",
            },
            {
              rank: "2",
              tier: "Bronze 2",
              requirement: "$2,500",
              bonus: "$2.5",
              daily: "0.12%",
              weekly: "4.0%",
              monthly: "1.5%",
            },
            {
              rank: "3",
              tier: "Bronze 3",
              requirement: "$5,000",
              bonus: "$2.5",
              daily: "0.14%",
              weekly: "4.5%",
              monthly: "2.0%",
            },
            {
              rank: "4",
              tier: "Bronze 4",
              requirement: "$10,000",
              bonus: "$5",
              daily: "0.16%",
              weekly: "5.0%",
              monthly: "2.0%",
            },
            {
              rank: "5",
              tier: "Silver 1",
              requirement: "$25,000",
              bonus: "$15",
              daily: "0.18%",
              weekly: "5.5%",
              monthly: "2.5%",
            },
            {
              rank: "6",
              tier: "Silver 2",
              requirement: "$50,000",
              bonus: "$25",
              daily: "0.20%",
              weekly: "6.0%",
              monthly: "2.5%",
            },
            {
              rank: "7",
              tier: "Silver 3",
              requirement: "$100,000",
              bonus: "$50",
              daily: "0.23%",
              weekly: "6.5%",
              monthly: "3.0%",
            },
            {
              rank: "8",
              tier: "Silver 4",
              requirement: "$200,000",
              bonus: "$100",
              daily: "0.26%",
              weekly: "7.0%",
              monthly: "3.0%",
            },
            {
              rank: "9",
              tier: "Gold 1",
              requirement: "$350,000",
              bonus: "$150",
              daily: "0.30%",
              weekly: "7.5%",
              monthly: "3.5%",
            },
            {
              rank: "10",
              tier: "Gold 2",
              requirement: "$500,000",
              bonus: "$150",
              daily: "0.34%",
              weekly: "8.0%",
              monthly: "3.5%",
            },
            {
              rank: "11",
              tier: "Gold 3",
              requirement: "$750,000",
              bonus: "$250",
              daily: "0.38%",
              weekly: "8.5%",
              monthly: "4.0%",
            },
            {
              rank: "12",
              tier: "Gold 4",
              requirement: "$1,000,000",
              bonus: "$250",
              daily: "0.42%",
              weekly: "9.0%",
              monthly: "4.0%",
            },
            {
              rank: "13",
              tier: "Platinum 1",
              requirement: "$1,500,000",
              bonus: "$500",
              daily: "0.46%",
              weekly: "9.5%",
              monthly: "4.5%",
            },
            {
              rank: "14",
              tier: "Platinum 2",
              requirement: "$2,000,000",
              bonus: "$500",
              daily: "0.50%",
              weekly: "10.0%",
              monthly: "5.0%",
            },
            {
              rank: "15",
              tier: "Platinum 3",
              requirement: "$3,000,000",
              bonus: "$1,000",
              daily: "0.55%",
              weekly: "10.5%",
              monthly: "5.5%",
            },
            {
              rank: "16",
              tier: "Platinum 4",
              requirement: "$5,000,000",
              bonus: "$2,000",
              daily: "0.60%",
              weekly: "11.0%",
              monthly: "6.0%",
            },
            {
              rank: "17",
              tier: "Diamond 1",
              requirement: "$7,500,000",
              bonus: "$2,500",
              daily: "0.65%",
              weekly: "11.5%",
              monthly: "6.5%",
            },
            {
              rank: "18",
              tier: "Diamond 2",
              requirement: "$10,000,000",
              bonus: "$2,500",
              daily: "0.70%",
              weekly: "12.0%",
              monthly: "7.0%",
            },
            {
              rank: "19",
              tier: "Diamond 3",
              requirement: "$15,000,000",
              bonus: "$5,000",
              daily: "0.75%",
              weekly: "13.0%",
              monthly: "7.5%",
            },
            {
              rank: "20",
              tier: "Diamond 4",
              requirement: "$25,000,000",
              bonus: "$10,000",
              daily: "0.80%",
              weekly: "14.0%",
              monthly: "8.0%",
            },
          ],
        },
      },
      rules: {
        heading: "Program rules",
        active: {
          label: "Rule 1",
          heading: "Active boost",
          intro:
            "Consistent trading activity unlocks additional cashback percentages on top of the baseline table values.",
          weekly: {
            title: "Weekly active boost",
            detail:
              "Place wagers worth at least $0.1 on five or more days in a week to add +0.5% to the weekly loss-cashback rate for that week.",
          },
          monthly: {
            title: "Monthly active boost",
            detail:
              "Place wagers worth at least $0.1 on twenty or more days in a month to add +1.0% to the monthly loss-cashback rate for that month.",
          },
        },
        downgrade: {
          label: "Rule 2",
          heading: "Rank maintenance",
          intro:
            "Rank promotions are instant once lifetime wagering meets the requirement. Maintenance is reviewed monthly per level.",
          bullets: [
            "Promotion occurs immediately when cumulative wagering satisfies the next rank threshold.",
            "Tier protection: once you enter a tier (Bronze, Silver, Gold, Platinum, Diamond) you never drop to a lower tier.",
            "Level maintenance is evaluated on the first day of each month using the previous month's wagering volume.",
            "If the maintenance requirement is missed, the level decreases within the current tier, but never below Level 1 of that tier.",
          ],
          reminder:
            "Maintenance is calculated on cash wagering only. Level 1 within the reached tier is the minimum floor after review.",
        },
        maintenanceTable: {
          headers: {
            rank: "Rank",
            tier: "Tier",
            requirement: "Monthly wagering to maintain level",
          },
          rows: [
            { rank: "1", tier: "Bronze 1", requirement: "$0" },
            { rank: "2", tier: "Bronze 2", requirement: "$100" },
            { rank: "3", tier: "Bronze 3", requirement: "$250" },
            { rank: "4", tier: "Bronze 4", requirement: "$500" },
            { rank: "5", tier: "Silver 1", requirement: "$1,000" },
            { rank: "6", tier: "Silver 2", requirement: "$2,500" },
            { rank: "7", tier: "Silver 3", requirement: "$5,000" },
            { rank: "8", tier: "Silver 4", requirement: "$10,000" },
            { rank: "9", tier: "Gold 1", requirement: "$20,000" },
            { rank: "10", tier: "Gold 2", requirement: "$30,000" },
            { rank: "11", tier: "Gold 3", requirement: "$50,000" },
            { rank: "12", tier: "Gold 4", requirement: "$75,000" },
            { rank: "13", tier: "Platinum 1", requirement: "$100,000" },
            { rank: "14", tier: "Platinum 2", requirement: "$150,000" },
            { rank: "15", tier: "Platinum 3", requirement: "$200,000" },
            { rank: "16", tier: "Platinum 4", requirement: "$300,000" },
            { rank: "17", tier: "Diamond 1", requirement: "$500,000" },
            { rank: "18", tier: "Diamond 2", requirement: "$750,000" },
            { rank: "19", tier: "Diamond 3", requirement: "$1,000,000" },
            { rank: "20", tier: "Diamond 4", requirement: "$1,500,000" },
          ],
        },
      },
      terms: {
        heading: "VIP program terms",
        subtitle:
          "Participating in the VIP program constitutes acceptance of these terms and the general site terms.",
        articles: [
          {
            label: "Article 1",
            heading: "Program participation",
            items: [
              "All registered players are automatically eligible for the VIP program.",
              "Only one account per player is eligible; duplicate or linked accounts are not considered.",
              "The company reserves the right to refuse or revoke participation at its sole discretion.",
            ],
          },
          {
            label: "Article 2",
            heading: "VIP rank system",
            items: [
              "The program consists of 20 ranks organised into tiers (Bronze, Silver, Gold, Platinum, Diamond) and levels 1–4 within each tier.",
              "Rank promotion is determined by cumulative wagering volume and is applied immediately upon meeting each threshold.",
              "Tier downgrades never occur once a tier is reached; only level adjustments within the tier are possible.",
              "Monthly level reviews occur on the first day of each month using the previous month’s wagering and the maintenance table.",
            ],
          },
          {
            label: "Article 3",
            heading: "Reward categories",
            items: [
              "Daily reward (wager rakeback): percentage applied to the day’s total wagered amount and credited daily.",
              "Weekly reward (loss cashback): percentage applied to the week’s net loss (total wagers minus total wins) and credited once per week.",
              "Monthly reward (loss cashback): percentage applied to the month’s net loss and credited once per month.",
              "Rank-up bonus: a fixed amount credited the first time each rank is achieved.",
            ],
          },
          {
            label: "Article 4",
            heading: "Active boost",
            items: [
              "Weekly boost: wagering at least $0.1 on five or more days in a week adds +0.5% to the weekly cashback rate.",
              "Monthly boost: wagering at least $0.1 on twenty or more days in a month adds +1.0% to the monthly cashback rate.",
            ],
          },
          {
            label: "Article 5",
            heading: "Reward conditions",
            items: [
              "Unless otherwise stated, calculations are based on cash wagers and cash net losses; bonus wagers may be excluded.",
              "Rank-up bonuses are credited as bonus funds; wagering requirements or expiry may apply.",
              "The company may define additional conditions such as rollover requirements, validity periods, or caps.",
            ],
          },
          {
            label: "Article 6",
            heading: "Prohibited conduct",
            items: [
              "Creating multiple accounts, exploiting system issues, colluding with other players, or any behaviour deemed abusive is forbidden.",
              "Betting patterns designed solely to generate rewards (e.g., extremely low-risk looping) may be considered abuse.",
              "Detected abuse may result in VIP removal, rank reduction, forfeiture of rewards, or account suspension.",
            ],
          },
          {
            label: "Article 7",
            heading: "General provisions",
            items: [
              "The company may modify, suspend, or terminate the program—or its reward rates and conditions—without prior notice.",
              "All decisions regarding eligibility, calculations, and interpretation are final and binding.",
              "If these terms conflict with the general site terms, the general site terms take precedence.",
            ],
          },
        ],
      },
      update: {
        label: "Last updated",
        date: "11 November 2025",
        note: "Program specifications are subject to change without notice. Refer to official communications for the latest details.",
      },
    },
    terms: {
      hero: {
        badge: "Terms of Service",
        title: "Know the rules before you trade binary options",
        subtitle:
          "These terms govern your access to 1540bo.io. Read every chapter carefully and proceed only after accepting the obligations and risks.",
        ctaPrimary: "Contact compliance",
        ctaSecondary: "Visit support center",
        alertTitle: "High-risk financial product warning",
        alertBody:
          "Binary options are leveraged, time-sensitive instruments. Failing to follow these terms may result in account suspension and the total loss of your stake.",
      },
      overview: {
        heading: "How to read these terms",
        paragraphs: [
          "This document is the legally binding agreement between you and galactic-triablazers Ltd, registered at Sea Urchin Street, San Pedro, Ambergris Caye, Belize, regarding the binary options platform 1540bo.io.",
          "By using the service you agree to every clause below; if you cannot agree, do not create or use an account.",
        ],
        highlights: [
          "Definitions establish how trades, underlying assets, and payout terminology are interpreted.",
          "Account obligations cover identity verification, anti-social force exclusions, and ongoing change notifications.",
          "Later chapters explain trading mechanics, funding rules, risk disclosures, prohibited conduct, and dispute handling.",
        ],
      },
      chapters: {
        chapter1: {
          label: "Chapter 1",
          heading: "General provisions",
          articles: {
            article1: {
              heading: "Article 1 (Purpose of these terms)",
              body: [
                "These Terms of Service (the “Terms”) set out the conditions under which users may access and trade on the binary options service 1540bo.io operated by galactic-triablazers Ltd (“galactic-triablazers”), whose registered address is Sea Urchin Street, San Pedro, Ambergris Caye, Belize. By using the service, you agree to be bound by the Terms.",
              ],
            },
            article2: {
              heading: "Article 2 (Definitions)",
              intro:
                "The defined terms used in the Terms have the following meanings.",
              items: [
                "Binary options trading: Transactions that predict whether the price of a designated underlying asset will be above or below the strike price at a specified future time.",
                "Underlying asset: The financial instrument that serves as the target of a binary options trade.",
                "Strike price: The price of the underlying asset at the time the trade is initiated.",
                "Determination time: The time at which the outcome of a trade is determined.",
                "Purchase amount: The amount paid by the user per trade.",
                "Payout amount: The amount the user receives if the prediction is correct.",
              ],
            },
          },
        },
        chapter2: {
          label: "Chapter 2",
          heading: "Trading accounts",
          articles: {
            article3: {
              heading: "Article 3 (Opening an account)",
              body: [
                "Applicants who wish to use the service must agree to these Terms and apply for an account using the method prescribed by the company.",
                "The company reviews each application against its own criteria and, if approved, will notify the applicant that the account has been opened.",
                "The company may refuse an application under its sole discretion in the following cases. The company shall have no obligation to disclose the reason for refusal.",
              ],
              items: [
                "If the application contains any false statements, errors, or omissions.",
                "If the applicant has previously had a contract with the company terminated.",
                "If the company otherwise considers the applicant unsuitable.",
              ],
            },
            article4: {
              heading: "Article 4 (Identity verification)",
              body: [
                "In accordance with laws to prevent the transfer of criminal proceeds, the company conducts identity verification. Users must submit the identification documents specified by the company.",
              ],
            },
            article5: {
              heading: "Article 5 (Exclusion of anti-social forces)",
              body: [
                "Users represent and warrant that they are not, and will not become, members of organized crime groups or other anti-social forces.",
              ],
            },
            article6: {
              heading: "Article 6 (Changes to registered details)",
              body: [
                "If any registered information such as the user’s name, address, or contact details changes, the user must promptly notify the company using the prescribed procedure.",
              ],
            },
          },
        },
        chapter3: {
          label: "Chapter 3",
          heading: "Trading",
          articles: {
            article7: {
              heading: "Article 7 (Types of trades)",
              body: ["The service offers the following contract types."],
              items: [
                "Binary BTC",
                "ETH Channel",
                "XRP Crypto",
                "XRP Black hole",
                "ETH SpeedUp",
                "BTC High Roller",
                "Any additional trades designated by the company.",
              ],
            },
            article8: {
              heading: "Article 8 (Orders)",
              body: [
                "Users place orders through the trading platform provided by the company and in the manner stipulated by the company.",
              ],
            },
            article9: {
              heading: "Article 9 (Execution)",
              body: [
                "An order is considered executed when it is accepted by the company’s system.",
              ],
            },
            article10: {
              heading: "Article 10 (Trading hours)",
              body: [
                "Trading is generally available 24 hours a day, 365 days a year; however, the service may be temporarily suspended for system maintenance or other reasons.",
              ],
            },
            article11: {
              heading: "Article 11 (Fees)",
              body: [
                "Trading fees are free of charge. Separate fees may be set for deposits or withdrawals.",
              ],
            },
          },
        },
        chapter4: {
          label: "Chapter 4",
          heading: "Deposits and withdrawals",
          articles: {
            article12: {
              heading: "Article 12 (Deposits)",
              body: [
                "Users may deposit funds denominated in the currencies specified by the company (USDT and other crypto assets) into their trading account using the prescribed method.",
              ],
            },
            article13: {
              heading: "Article 13 (Withdrawals)",
              body: [
                "Users may request withdrawals from their trading account using the method prescribed by the company.",
              ],
              items: [
                "In principle, withdrawals will only be sent to an account held in the user’s own name.",
                "If identity verification has not been completed, the company may withhold withdrawals.",
              ],
            },
          },
        },
        chapter5: {
          label: "Chapter 5",
          heading: "Risk disclosure",
          articles: {
            article14: {
              heading: "Article 14 (Understanding the risks)",
              body: [
                "Binary options trading can deliver high returns but also carries the risk of losing the entire investment principal.",
                "Users must fully understand the mechanics and risks of the trades and participate at their own judgment and responsibility.",
                "The company bears no liability for any losses incurred by users through trading.",
              ],
            },
          },
        },
        chapter6: {
          label: "Chapter 6",
          heading: "Prohibited conduct",
          articles: {
            article15: {
              heading: "Article 15 (Prohibited acts)",
              body: [
                "When using the service, users must not engage in the following conduct.",
              ],
              items: [
                "Acts that violate laws or public order and morals.",
                "Criminal acts or conduct connected to criminal activity.",
                "Actions that damage or interfere with the company’s servers or networks.",
                "Conduct that may hinder the operation of the service.",
                "Collecting or storing personal information of other users.",
                "Impersonating other users.",
                "Providing benefits, directly or indirectly, to anti-social forces in connection with the service.",
                "Any other conduct the company deems inappropriate.",
              ],
            },
          },
        },
        chapter7: {
          label: "Chapter 7",
          heading: "Miscellaneous",
          articles: {
            article16: {
              heading: "Article 16 (Disclaimers)",
              items: [
                "The company bears no liability for losses arising from system failures, communication outages, natural disasters, or other causes beyond the company’s control.",
                "The company bears no liability for losses arising from changes, suspension, or termination of the service.",
              ],
            },
            article17: {
              heading: "Article 17 (Termination of contract)",
              items: [
                "If a user violates any clause of these Terms.",
                "If it is discovered that the user’s registered details are false.",
                "If the company otherwise judges that continued use of the service is inappropriate.",
              ],
            },
            article18: {
              heading: "Article 18 (Governing law and jurisdiction)",
              items: [
                "These Terms are governed by the laws of Japan.",
                "Any disputes related to the service shall fall under the exclusive jurisdiction of the court having authority over the company’s head office.",
              ],
            },
          },
        },
      },
      update: {
        label: "Last updated",
        date: "11 November 2025",
        note: "These Terms may be revised without prior notice. Check official announcements for the latest version.",
      },
    },
    privacy: {
      hero: {
        badge: "Privacy Policy",
        title: "1540bo.io Privacy Policy",
        subtitle:
          "This policy describes how galactic-triablazers Ltd collects, uses, shares, and safeguards personal information when you use our trading services for 1540bo.io.",
        ctaPrimary: "Contact support",
        ctaSecondary: "View Terms of Service",
        alertTitle: "Read before sharing personal data",
        alertBody:
          "Compliance with this policy is mandatory for all account holders. Provide documents only after understanding how your information is processed and protected.",
      },
      overview: {
        heading: "How we handle your personal information",
        paragraphs: [
          "galactic-triablazers Ltd, registered at Sea Urchin Street, San Pedro, Ambergris Caye, Belize, operates 1540bo.io and is responsible for the personal data handling lifecycle described below, from acquisition to disposal.",
          "They align with the Act on the Protection of Personal Information of Japan and apply to every user of the service.",
        ],
        highlights: [
          "Legal basis and scope of personal data we obtain",
          "Purposes of use, third-party sharing, and joint utilisation",
          "Your rights regarding disclosure, correction, and complaints",
        ],
      },
      sections: {
        section1: {
          label: "Section 1",
          heading: "General provisions",
          body: [
            "galactic-triablazers Ltd (“galactic-triablazers” or the “Company”), registered at Sea Urchin Street, San Pedro, Ambergris Caye, Belize, establishes this Privacy Policy to govern the handling of user information, including personal data, within the service “1540bo.io”.",
          ],
        },
        section2: {
          label: "Section 2",
          heading: "Definition of personal information",
          body: [
            "“Personal information” refers to information about a living individual that can identify a specific person, as defined by the Act on the Protection of Personal Information of Japan, including data that can be easily matched with other information to enable identification.",
          ],
        },
        section3: {
          label: "Section 3",
          heading: "Methods of gathering personal information",
          intro:
            "We obtain personal data through lawful and fair means and never by deceitful or otherwise improper methods. The main categories are as follows.",
          groups: [
            {
              title: "Information provided directly by users",
              items: [
                "Name, address, date of birth, telephone number, email address, and other registration details.",
                "Information contained in identity verification documents such as passports or driver’s licences.",
                "Any other information voluntarily submitted via application forms or support communications.",
              ],
            },
            {
              title:
                "Information collected automatically when the service is used",
              items: [
                "Trading history and account balances recorded on 1540bo.io.",
                "IP addresses, cookie identifiers, device information, and similar technical telemetry.",
              ],
            },
          ],
        },
        section4: {
          label: "Section 4",
          heading: "Purposes of use",
          items: [
            "To provide and operate the service.",
            "To accept identity verification, account-opening requests, and trading instructions from users.",
            "To report trading results, custody balances, and related information to users.",
            "To respond to enquiries and provide customer support, including identity confirmation.",
            "To send emails announcing new features, updates, campaigns, and other services offered by the Company.",
            "To deliver maintenance notices, important announcements, and other necessary communications.",
            "To identify users who violate the Terms of Service or attempt to use the service for fraudulent or improper purposes and to refuse their access.",
            "To comply with laws and regulations, including identity verification under the Act on Prevention of Transfer of Criminal Proceeds.",
            "For purposes incidental to the uses listed above.",
          ],
        },
        section5: {
          label: "Section 5",
          heading: "Provision of personal information to third parties",
          intro:
            "We do not provide personal information to third parties without prior consent from the user, except in the following cases or when permitted under applicable laws and regulations.",
          items: [
            "When it is necessary to protect a person’s life, body, or property and obtaining consent is difficult.",
            "When it is especially necessary to improve public health or promote the sound upbringing of children and obtaining consent is difficult.",
            "When cooperation with national or local governmental bodies is required to execute matters prescribed by law, and obtaining consent could impede such execution.",
            "When advance notice or publication of prescribed matters has been made and a notification has been filed with the Personal Information Protection Commission.",
          ],
          note: "Any provision of personal data to third parties will be carried out strictly in accordance with the Act on the Protection of Personal Information and related regulations.",
        },
        section6: {
          label: "Section 6",
          heading: "Joint use of personal information",
          intro: "We may share personal data within the scope described below.",
          groups: [
            {
              title: "Items subject to joint use",
              items: [
                "Name, address, date of birth, telephone number, email address, and similar contact details.",
                "Identity verification results and information related to transactions on 1540bo.io.",
                "Other data necessary to achieve the purposes described in Section 4.",
              ],
            },
            {
              title: "Scope of joint users",
              body: "Companies that belong to the 1540bo corporate group.",
            },
            {
              title: "Purposes of joint use",
              body: "The same purposes listed in Section 4 of this Privacy Policy.",
            },
            {
              title: "Party responsible for management",
              body: "1540bo, which oversees the secure management of jointly used data.",
            },
          ],
        },
        section7: {
          label: "Section 7",
          heading: "Security control measures",
          body: [
            "We implement appropriate organisational, physical, and technical safeguards to prevent leakage, loss, or damage of personal data and to ensure secure management.",
          ],
        },
        section8: {
          label: "Section 8",
          heading: "Disclosure, correction, and suspension of use",
          body: [
            "When we receive a request from a user to disclose, correct, add to, delete, suspend the use of, or erase personal data, we will respond without delay after confirming the requester’s identity, unless an exemption under law applies.",
            "If we determine that we are not obligated to respond under applicable law, we will notify the requester accordingly.",
          ],
          fee: "A handling fee of JPY 1,000 (tax inclusive) is charged for each disclosure request.",
        },
        section9: {
          label: "Section 9",
          heading: "Use of cookies and similar technologies",
          body: [
            "We may use cookies and similar technologies to enhance convenience, understand usage trends, and measure advertising effectiveness.",
            "You can disable cookies through your browser settings, but doing so may prevent you from using parts of the service.",
          ],
        },
        section10: {
          label: "Section 10",
          heading: "Changes to the Privacy Policy",
          body: [
            "We may revise this Privacy Policy whenever necessary.",
            "If a revision requires user consent under law, the revised policy will apply only to users who agree through the method specified by the Company. We will announce the effective date and details of revisions via our website or other appropriate means.",
          ],
        },
        section11: {
          label: "Section 11",
          heading: "Contact",
          body: [
            "For questions regarding this Privacy Policy, please contact us via the support centre available within 1540bo.io.",
            "We will respond after verifying your identity when necessary and will handle enquiries in accordance with this Policy.",
          ],
        },
      },
      update: {
        label: "Status",
        date: "19 November 2025",
        note: "This Privacy Policy is effective as of the date above and may be updated in line with future regulatory guidance.",
      },
    },
    help: {
      detail: {
        back: "Back to Help index",
      },
      index: {
        hero: {
          badge: "Help Center",
          title: "Find the right 1540BO guide in seconds.",
          subtitle:
            "Step-by-step answers for registration, trading, wallet operations, and partner growth.",
          note: "Pick a category below to open detailed checklists, screenshots, and escalation routes.",
          meta: "Updated 11 Dec 2025 · EN / 日本語 / ไทย",
          cta: "Browse guides",
        },
        panel: {
          title: "Before contacting support",
          items: [
            "Confirm you are signed in to the correct account and network.",
            "Gather screenshots, TXIDs, and timestamps so we can trace your request.",
            "Use the dedicated child pages for KYC, deposits, withdrawals, or partner payouts.",
          ],
          note: "These steps resolve most questions without waiting for an agent.",
        },
        catalog: {
          heading: "Choose a help category",
          subtitle:
            "Each card opens a detailed article with checklists, FAQs, and escalation contacts.",
        },
        cards: {
          account: {
            eyebrow: "Account",
            title: "Registration & security",
            body: "KYC walkthrough, device hygiene, and recovering locked accounts.",
            cta: "Open playbook",
          },
          trading: {
            eyebrow: "Trading",
            title: "Binary options flow",
            body: "Top-game layout tour plus ticket building and risk routines.",
            cta: "See guide",
          },
          deposit: {
            eyebrow: "Wallet",
            title: "Deposits & credits",
            body: "Supported currencies, confirmation times, and troubleshooting delays.",
            cta: "Review steps",
          },
          withdrawal: {
            eyebrow: "Wallet",
            title: "Withdrawals & compliance",
            body: "Requirements, timelines, and what to send if a payout stays on hold.",
            cta: "Follow checklist",
          },
          affiliate: {
            eyebrow: "Partners",
            title: "Affiliate operations",
            body: "Application criteria, tracking, payouts, and compliance guardrails.",
            cta: "Read playbook",
          },
          other: {
            eyebrow: "Resources",
            title: "Additional tools",
            body: "Responsible trading assets, status feeds, and in-app tips.",
            cta: "Explore",
          },
        },
        support: {
          heading: "Still need personal help?",
          body: "Our operations desk monitors support@1540bo.io 24/7. Include screenshots, TXIDs, and timestamps for the fastest resolution.",
          cta: "Email support desk",
          secondary: "See contact roster",
        },
      },
      account: {
        title: "Account - Registration and Security",
        intro:
          "To use the 1540BO platform safely, account registration and security settings are essential. This page details KYC (Know Your Customer) procedures, device security management, and account recovery contact settings.",
        updated: "Last updated: December 08, 2025",
        kyc: {
          title: "KYC (Know Your Customer) Procedures",
          intro:
            "1540BO requires all users to complete KYC procedures in compliance with international regulatory standards to provide a secure trading environment. Completing KYC allows you to increase withdrawal limits and access all features.",
          table: {
            stepHeader: "Step",
            contentHeader: "Content",
            step1: {
              label: "Step 1",
              content:
                "Identity Document Submission: From your account settings page, upload color photos of a valid government-issued ID (passport, driver's license, etc.).",
            },
            step2: {
              label: "Step 2",
              content:
                "Proof of Address Submission: Submit a utility bill or bank statement issued within the last 3 months showing your name and current address.",
            },
            step3: {
              label: "Step 3",
              content:
                "Review: Submitted documents will be reviewed by our compliance team. Reviews are typically completed within 24 hours.",
            },
          },
          note: {
            label: "Note:",
            text: "All four corners of submitted documents must be visible, and text must be clearly legible. Blurred or edited images will not be approved.",
          },
        },
        security: {
          title: "Device Hygiene and Security",
          intro:
            "To protect your account from unauthorized access, we strongly recommend the following security measures:",
          item1:
            "Set a Strong Password: Use a complex password combining uppercase, lowercase, numbers, and symbols that is difficult to guess.",
          item2:
            "Enable Two-Factor Authentication (2FA): We recommend using an authenticator app like Google Authenticator to add an extra security layer during login.",
          item3:
            "Avoid Public Wi-Fi: Public Wi-Fi networks can be insecure. Use a trusted network when conducting financial transactions.",
          item4:
            "Regular Password Changes: Strengthen security by changing your password regularly, such as once every three months.",
        },
        recovery: {
          title: "Account Recovery and Contacts",
          intro:
            "It's important to accurately register recovery contacts in case you forget your password or lose access to your account.",
          item1:
            "Email Address: Your registered email is used for password resets and important notifications. Always keep it up to date.",
          item2:
            "Phone Number: (Optional) Registering a phone number enables SMS-based account recovery.",
          support:
            "If you encounter any issues accessing your account, please contact our support desk immediately:",
          contact: "Support Email: support@1540bo.io",
        },
        relatedLinks: {
          title: "Related Links",
          trading: "Trading Guide",
          deposit: "Wallet Deposit Procedures",
        },
      },
      trading: {
        title: "Trading - Binary Options Flow",
        intro:
          "1540BO's binary options trading features simple and intuitive operations. This guide explains the entire flow from basic Top Game screen usage to creating trading tickets and risk management.",
        updated: "Last updated: December 08, 2025",
        overview: {
          title: "Top Game Screen Overview",
          intro:
            "After logging in, the 'Top Game' screen is displayed first. All information necessary for trading is consolidated here.",
          table: {
            elementHeader: "Element",
            descriptionHeader: "Description",
            row1: {
              label: "Trading Pairs",
              content:
                "Select cryptocurrency pairs to trade, such as BTC/USDT or ETH/USDT. Real-time prices are displayed.",
            },
            row2: {
              label: "Price Chart",
              content:
                "Visually check price movements of selected trading pairs. Analyze past price trends to predict future prices.",
            },
            row3: {
              label: "Expiry Time",
              content:
                "Select the time when trade judgment occurs. Various options are available, from ultra-short-term of tens of seconds to long-term of several hours.",
            },
            row4: {
              label: "Trading History",
              content:
                "Check past trading results (win/loss), bet amounts, payout amounts, etc.",
            },
          },
        },
        ticket: {
          title: "Creating Trading Tickets",
          intro: "Creating a trading ticket is completed in just 3 steps.",
          steps: [
            "Select Trading Pair: Choose the cryptocurrency pair you want to trade.",
            "Select Expiry Time: Set the time to end the trade (expiry).",
            "Predict Direction and Bet: Click the 'Call' button if you predict the price will rise. Click the 'Put' button if you predict the price will fall. Enter the bet amount and confirm the trade.",
          ],
          note: {
            label: "Point:",
            text: "1540BO visualizes the sentiment (market psychology) of traders worldwide with a heatmap. You can develop trading strategies by referencing other traders' movements.",
          },
        },
        risk: {
          title: "Risk Management and Payout",
          intro:
            "Binary options have fixed payout rates, making risk management easy. Before starting a trade, you can accurately grasp potential profits and losses.",
          items: [
            "Payout Rate: The percentage of profit obtained when a trade succeeds. Payout rates vary depending on the trading pair and market conditions.",
            "Risk: If a trade fails, losses are limited to the bet amount. Losses exceeding the bet amount will not occur.",
          ],
          outro:
            "Practice responsible trading and trade based on your own fund management plan.",
        },
        contact: {
          title: "Contact Us",
          text: "If you have any questions about trading, please feel free to contact our 24-hour support team.",
          email: "Support Email: support@1540bo.io",
        },
        relatedLinks: {
          title: "Related Links",
          account: "Account - Registration and Security",
          deposit: "Wallet - Deposit Procedures",
        },
      },
      deposit: {
        title: "Wallet - Deposit & Crediting Guide",
        intro:
          "1540BO enables fast and secure deposits using multiple cryptocurrencies. This page details supported blockchains, how to check deposit addresses, and what to do if deposits are delayed.",
        updated: "Last updated: December 08, 2025",
        supported: {
          title: "Supported Cryptocurrencies and Networks",
          intro:
            "Our platform supports the following major cryptocurrencies and networks (blockchains). When making a deposit, be sure to select the correct network. If you send to the wrong network, your assets may be lost.",
          table: {
            cryptoHeader: "Cryptocurrency",
            networkHeader: "Supported Networks",
            row1: { crypto: "USDT", network: "ERC20 (Ethereum), TRC20 (TRON)" },
            row2: { crypto: "BTC", network: "Bitcoin" },
            row3: { crypto: "ETH", network: "ERC20 (Ethereum)" },
            row4: { crypto: "TRX", network: "TRC20 (TRON)" },
            row5: { crypto: "LTC", network: "Litecoin" },
            row6: { crypto: "XRP", network: "Ripple" },
          },
        },
        steps: {
          title: "Deposit Procedure",
          items: [
            "Go to Wallet Page: After logging in, access the 'Wallet' section from the dashboard.",
            "Select Deposit: Choose the 'Deposit' tab and select the cryptocurrency you want to deposit.",
            "Select Network: Choose the corresponding network (e.g., ERC20, TRC20).",
            "Check Deposit Address: Copy the displayed dedicated deposit address or scan the QR code. Send cryptocurrency from your external wallet or exchange to this address.",
          ],
          note: {
            label: "Important:",
            text: "Each cryptocurrency has its own dedicated deposit address. Be sure to send to the correct address.",
          },
        },
        timing: {
          title: "Confirmations and Reflection Time",
          intro:
            "Blockchain transactions are approved through multiple 'confirmations'. The time until deposits are reflected in your account varies depending on network congestion and required confirmations.",
          items: [
            "Standard Reflection Time: Normally reflected in your account within 5 to 30 minutes after sending.",
            "Confirmation Count: Deposit completes when the confirmation count set by each network is reached.",
          ],
        },
        troubleshooting: {
          title: "Deposit Delay Troubleshooting",
          intro:
            "If your deposit is not reflected after 30 minutes, please check the following:",
          steps: [
            "Check Sending Status: Confirm in your external wallet or exchange that the transfer completed successfully.",
            "Check Transaction ID (TXID): Use a blockchain explorer (e.g., Etherscan, Tronscan) to track the transaction status with the Transaction ID (TXID).",
            "Reconfirm Address and Network: Double-check that the destination address and selected network were correct.",
          ],
          contact:
            "If the problem persists after checking the above, please contact our support team with the following information:",
          items2: [
            "Transaction ID (TXID)",
            "Type and amount of cryptocurrency sent",
            "Date and time of transfer",
          ],
          email: "Support Email: support@1540bo.io",
        },
        relatedLinks: {
          title: "Related Links",
          withdrawal: "Wallet - Withdrawal & Compliance",
          trading: "Trading Guide",
        },
      },
      withdrawal: {
        title: "Wallet - Withdrawal & Compliance",
        intro:
          "At 1540BO, safe and fast withdrawal processing is our top priority. This page explains withdrawal requirements, processing times, and important compliance information.",
        updated: "Last updated: December 08, 2025",
        requirements: {
          title: "Withdrawal Requirements",
          intro:
            "For smooth withdrawal processing, please confirm that you meet the following conditions in advance:",
          table: {
            conditionHeader: "Condition",
            detailHeader: "Details",
            row1: {
              condition: "Complete KYC Verification",
              detail:
                "All users must complete KYC verification before their first withdrawal. This prevents fraud and ensures account security.",
            },
            row2: {
              condition: "Minimum Withdrawal Amount",
              detail:
                "Each cryptocurrency has a set minimum withdrawal amount. Withdrawal requests cannot be below this amount.",
            },
            row3: {
              condition: "Trading Volume Requirements",
              detail:
                "In certain conditions, such as receiving bonuses, you may need to meet minimum trading volume requirements. See promotion terms for details.",
            },
          },
        },
        timing: {
          title: "Withdrawal Processing Time",
          intro:
            "Withdrawal requests are processed sequentially by our finance team. After security checks are completed, cryptocurrency is sent to the specified wallet address.",
          items: [
            "Standard Processing Time: Normally completed within 24 hours of withdrawal request.",
            "Network Time: Depending on blockchain network conditions, arrival may take additional time.",
          ],
          note: {
            label: "Same-day Withdrawal:",
            text: "1540BO supports same-day withdrawals, and in most cases, withdrawal processing is completed within a few hours.",
          },
        },
        holds: {
          title: "Responding to Withdrawal Holds",
          intro:
            "Withdrawal requests may have a 'Hold' status. This occurs when additional security verification is needed or when there are issues with registration information.",
          reasons: "Main Hold Reasons:",
          items: [
            "High-value withdrawal requests",
            "Access from unusual IP addresses",
            "Registration information and withdrawal wallet information don't match",
          ],
          contact:
            "If your withdrawal is held, our support team will contact you at your registered email address. Please follow instructions and provide the necessary information.",
        },
        fees: {
          title: "Withdrawal Fees",
          text: "Withdrawals incur fees (miner fees) paid to the blockchain network. These fees vary depending on network congestion. You can check the latest fees on the withdrawal request screen.",
        },
        contact: {
          title: "Contact Us",
          text: "If you have questions or issues regarding withdrawals, please contact our support team anytime.",
          email: "Support Email: support@1540bo.io",
        },
        relatedLinks: {
          title: "Related Links",
          deposit: "Wallet - Deposit Procedures",
          account: "Account - Registration and Security",
        },
      },
      affiliate: {
        title: "Partners - Affiliate Operations Playbook",
        intro:
          "1540BO's affiliate program offers industry-leading compensation and a highly transparent tracking system. This playbook supports you from application through operations to revenue maximization.",
        updated: "Last updated: December 08, 2025",
        overview: {
          title: "Affiliate Program Overview",
          intro:
            "By joining this program, you can earn ongoing commissions based on referred users' trading activity. This program is ideal for anyone engaged in digital marketing, including bloggers, influencers, and website operators.",
          table: {
            featureHeader: "Feature",
            detailHeader: "Details",
            row1: {
              feature: "High Commission Rates",
              detail:
                "Competitive compensation based on referred users' trading volume.",
            },
            row2: {
              feature: "Real-time Tracking",
              detail:
                "View clicks, registrations, active traders, and generated commissions in real-time on a dedicated dashboard.",
            },
            row3: {
              feature: "Abundant Marketing Materials",
              detail:
                "Freely use high-conversion marketing materials including banners, landing pages, and promotional articles.",
            },
            row4: {
              feature: "Dedicated Support",
              detail:
                "A dedicated account manager supports questions and consultations regarding affiliate operations.",
            },
          },
        },
        flow: {
          title: "Operations Flow",
          steps: [
            "Application and Review: Submit the application form from the official website's affiliate page. Our team will review your application and contact you with results, usually within 3 business days.",
            "Tracking and Promotion: After approval, you'll receive your dedicated affiliate code (tracking link). Share this link on websites, blogs, SNS, etc. to direct new users to 1540BO.",
            "Earning and Settlement of Commissions: When referred users start trading, commissions are generated based on their trading volume. Commissions are totaled monthly and automatically paid to your specified cryptocurrency wallet.",
          ],
        },
        compliance: {
          title: "Compliance Requirements",
          intro:
            "For healthy program operation, please comply with the following:",
          items: [
            "Prohibition of False/Exaggerated Advertising: Expressions that mislead users or promotions guaranteeing profits are strictly prohibited.",
            "Prohibition of Spam: Spam activities such as indiscriminate email sending or commenting on unrelated websites are prohibited.",
            "Prohibition of Self-Affiliate: You cannot earn commissions on your own trades.",
          ],
          warning: {
            label: "Note:",
            text: "If violations are confirmed, measures such as suspension of affiliate status or confiscation of generated commissions may be taken.",
          },
        },
        contact: {
          title: "Contact Us",
          text: "For questions about the affiliate program, please contact:",
          email: "Affiliate Support: partners@1540bo.io",
        },
        relatedLinks: {
          title: "Related Links",
          resources: "Resources - Other Operational Information",
        },
      },
      other: {
        title: "Resources - Other Operational Information",
        intro:
          "This page provides additional information and tools to maximize your use of 1540BO, along with our support structure to help you trade with confidence.",
        updated: "Last updated: December 08, 2025",
        tips: {
          title: "Top Game Usage Tips",
          intro:
            "Strategic approaches are essential for success in binary options trading. Below are basic tips useful for everyone from beginners to advanced traders:",
          items: [
            "Trend Following Strategy: A basic strategy where you analyze price charts and select 'Call' or 'Put' in the direction of clear upward or downward trends.",
            "Using Technical Analysis: Use technical indicators like Moving Average or RSI to judge market overheating and turning points.",
            "Monitoring Economic News: Major economic indicator releases and financial news can significantly impact market prices. Make it a habit to check the economic calendar before trading.",
          ],
        },
        responsible: {
          title: "Responsible Trading",
          intro:
            "1540BO promotes 'responsible trading' so customers can continue healthy trading activities. Please use the following tools and resources so trading doesn't negatively impact your life:",
          table: {
            toolHeader: "Tool/Resource",
            descHeader: "Description",
            row1: {
              tool: "Bankroll Planning Guide",
              desc: "Use a downloadable checklist to define daily or weekly trading caps and review them regularly with your account manager.",
            },
            row2: {
              tool: "Temporary Account Suspension",
              desc: "If you want to take a break from trading for a period, you can use the option to temporarily suspend your account.",
            },
            row3: {
              tool: "Consultation Services",
              desc: "If you have concerns about trading, we recommend consulting specialized counseling organizations. Contact our support team for details.",
            },
          },
          warning: {
            label: "Warning:",
            text: "Binary options trading can offer high returns but also carries the risk of losing your investment principal. Trade carefully within your surplus funds.",
          },
        },
        support: {
          title: "Support Structure",
          intro:
            "To quickly resolve customer issues and questions, 1540BO provides 24-hour customer support.",
          tips: "Tips for Inquiries:",
          text: "To resolve issues faster, please provide the following information when possible:",
          items: [
            "Screenshots: Capture of the screen where the problem occurred",
            "Transaction ID (TXID): For deposit/withdrawal issues",
            "Date and Time of Occurrence: Exact time the problem occurred",
          ],
          email: "Support Email: support@1540bo.io",
        },
        relatedLinks: {
          title: "Related Links",
          faq: "FAQ (Frequently Asked Questions)",
          terms: "Terms of Service",
        },
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
      subtitle:
        "Check Bloomberg, CoinTelegraph, CoinMarketCap, and other crypto news sources",
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
        "Galactic-triablazers Ltd\nSea Urchin Street, San Pedro, Ambergris Caye, Belize\nRegulated by BVP-FX-23Q2-K7N9-M3",
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
      vipTitle: "1540BO｜VIPプログラム",
      termsTitle: "1540BO｜利用規約",
      privacyTitle: "1540BO｜プライバシーポリシー",
      helpTitle: "1540BO｜ヘルプセンター",
      helpAccountTitle: "1540BO｜アカウントヘルプ",
      helpTradingTitle: "1540BO｜取引ヘルプ",
      helpDepositTitle: "1540BO｜入金ヘルプ",
      helpWithdrawalTitle: "1540BO｜出金ヘルプ",
      helpAffiliateTitle: "1540BO｜アフィリエイトヘルプ",
      helpOtherTitle: "1540BO｜運営リソース",
      providerTitle: "1540BO｜ビジネスオーナー向け",
    },
    nav: {
      login: "ログイン",
      features: "特長",
      affiliate: "アフィリエイト",
      provider: "プロバイダー",
      vip: "VIPプログラム",
      terms: "利用規約",
      privacy: "プライバシーポリシー",
      help: "ヘルプ",
      support: "サポート",
    },
    cta: {
      demo: "デモ口座を試す",
      start: "本番口座を開く",
    },
    supportForm: {
      badge: "24時間サポート",
      title: "サポートへのお問い合わせ",
      subtitle:
        "以下のフォームに入力すると、support@1540bo.io 宛てのメール下書きが自動的に開きます。",
      fields: {
        name: "氏名",
        email: "連絡用メールアドレス",
        account: "アカウントID / UID（任意）",
        topic: "カテゴリ",
        subject: "件名（任意）",
        message: "お問い合わせ内容",
      },
      topics: {
        general: "一般的な質問",
        account: "アカウント / KYC",
        payments: "入出金 / キャッシャー",
        vip: "VIP / リワード",
        provider: "プロバイダー / ライセンス",
      },
      subjects: {
        general: "一般サポート問い合わせ",
        account: "アカウントサポートの依頼",
        payments: "入出金に関するサポート依頼",
        vip: "VIPデスクへの依頼",
        provider: "プロバイダー / ライセンス相談",
      },
      note: "TXID・発生時刻・スクリーンショットを添付すると対応が早くなります。",
      disclaimer:
        "送信するとメールアプリが立ち上がり、support@1540bo.io 宛てに内容を確認して送信できます。",
      submit: "メール下書きを開く",
      close: "フォームを閉じる",
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
          intro:
            "アフィリエイターは誠実かつ合法的な方法で当社サービスを宣伝し、ブランド価値や公序良俗を損なう行為を行ってはなりません。以下の活動は禁止されています。",
          items: [
            "未成年者（居住国の法定年齢未満）を対象とする、または未成年者にアピールするマーケティング。",
            "スパムメール、無差別ダイレクトメッセージなど迷惑行為とみなされる宣伝。",
            "「必勝」「確実な利益」「損失なし」等の虚偽または誇張された表現の使用。",
            "当社または第三者の知的財産権を侵害する行為。",
            "アフィリエイター自身が当社であるかのように誤認させる行為。",
          ],
          outro:
            "すべての宣伝活動は、関連する法域の法律・規制・ガイドライン（広告表示規制、ギャンブル規制等）に準拠する必要があります。",
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
          outro:
            "上記不正行為が発覚した場合、当社はアフィリエイター資格の即時剥奪、未払い報酬の没収、過去に支払った報酬の返還請求を行う権利を有します。",
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
    provider: {
      hero: {
        badge: "プロバイダープログラム",
        title: "数週間で自社ブランドのバイナリーオプションをローンチ",
        subtitle:
          "1540BOの流動性・リスク管理・多言語UXを自社ラベルで提供し、基盤運用は当社が担います。",
        bullets: [
          "人気暗号資産ペア取り扱い",
          "マルチカレンシー入出金とオンチェーン決済レール",
          "KYC/AML・責任ある取引ワークフローを標準搭載",
        ],
        meta: "SLA保証のインフラ / SOC2対応のデータフロー",
        ctaPrimary: "デモを予約",
        ctaSecondary: "機能概要資料をダウンロード",
        metrics: [
          {
            label: "平均ローンチ期間",
            value: "約6週間",
            desc: "ブランド・キャッシャー・VIPロジックを構築",
          },
          {
            label: "提供マーケット",
            value: "人気暗号資産ペア",
            desc: "需要の高い銘柄に特化",
          },
          {
            label: "対応言語",
            value: "3ロケール",
            desc: "EN / 日本語 / ไทย UI",
          },
        ],
      },
      highlights: {
        heading: "1540BOを選ぶビジネスオーナーの理由",
        cards: [
          {
            title: "実績あるエグゼキューション",
            body: "ミリ秒ルーティングと深い流動性、オートリスクエンジンでボラティリティ時でも安定したスプレッドを実現します。",
          },
          {
            title: "モジュール型キャッシャー＆報酬",
            body: "ウォレット、VIPラダー、プロモツールをそのまま活用することも、APIで既存システムと接続することも可能です。",
          },
          {
            title: "コンプライアンス支援",
            body: "KYCベンダー、レポート雛形、エスカレーションルートをセットで提供し、初日から規制対応を行えます。",
          },
        ],
      },
      architecture: {
        heading: "ライセンス可能なアーキテクチャ",
        intro:
          "必要なモジュールだけを選択（取引エンジン／キャッシャー／CRM／マーケ）し、ロードマップに合わせて段階的に拡張できます。",
        modules: [
          {
            title: "トレーディングコア",
            text: "価格配信、チケットビルダー、リスク管理。15秒〜4時間までの有効期限を設定可能です。",
            points: [
              "専用リスクダッシュボード",
              "透明性フィードとディスプート監査",
              "レイテンシ監視とアラート",
            ],
          },
          {
            title: "ウォレット＆決済",
            text: "マルチチェーン入金、自動残高換算、出金承認ワークフローを提供します。",
            points: [
              "USDT / TRX / BTC / ETH / LTC / XRP",
              "コールドウォレット運用テンプレート",
              "TXID突合ツール",
            ],
          },
          {
            title: "グロース＆CRM",
            text: "VIPランク、ミッション、ブロードキャスト、アナリティクスで高価値プレイヤーを育成。",
            points: [
              "20ランクのVIPラダーとボーナス",
              "キャンペーンスケジューラとセグメント配信",
              "パートナー／アフィリエイトトラッキング",
            ],
          },
        ],
      },
      onboarding: {
        heading: "導入プロセス",
        subtitle: "スコープ決定からローンチまで明確なマイルストーンで伴走します。",
        steps: [
          {
            title: "1. ディスカバリー",
            desc: "対象法域・商品範囲・カスタム要件を整理。5営業日以内に商用／技術提案を提示します。",
          },
          {
            title: "2. ソリューション設計",
            desc: "ブランドビジュアル、キャッシャーフロー、データ連携を確定。QA用サンドボックスを発行します。",
          },
          {
            title: "3. コンプライアンス＆トレーニング",
            desc: "KYCベンダー設定、レポートテンプレ、運用Runbookを整備。スタッフ向けトレーニングを実施します。",
          },
          {
            title: "4. ローンチ＆最適化",
            desc: "プレイヤー移行と資金有効化を行い、VIP/パートナープログラムを専任TAMと共に改善します。",
          },
        ],
      },
      tiers: {
        heading: "サービスティア",
        subtitle: "ロードマップに合わせた契約モデルを選択できます。",
        table: {
          headers: {
            tier: "ティア",
            focus: "適したお客様",
            includes: "主な提供内容",
          },
          rows: [
            {
              tier: "Essential",
              focus: "初めて自社ブランドを立ち上げる事業者",
              includes:
                "取引エンジン、キャッシャー、VIPラダー、ブランドWebアプリ、標準SLA",
            },
            {
              tier: "Growth",
              focus: "新地域へ拡大するオペレーター",
              includes:
                "Essentialに加えてカスタムKYCルーティング、パートナートラッキング、マーケ自動化を提供",
            },
            {
              tier: "Enterprise",
              focus: "専用連携が必要なグループ企業",
              includes:
                "専用インフラ、API拡張、コンプライアンスPlaybook、24/7 TAM、四半期レビュー",
            },
          ],
        },
      },
      compliance: {
        heading: "コンプライアンスとサポート",
        intro:
          "規制要件を満たすためのコントロールとモニタリングツールを標準で提供します。",
        items: [
          "マルチベンダーKYC/AMLオーケストレーションとウォッチリスト照合",
          "設定可能なベット制限・リマインダーを備えた責任ある取引ツール",
          "ディスプート・財務報告に備えた監査証跡",
          "セキュリティインシデントRunbookと24/7エスカレーションデスク",
        ],
        note: "特定法域の追加レビューも、提携コンプライアンス会社がワンストップで対応可能です。",
        support: {
          heading: "プロバイダーデスクへご相談ください",
          body: "事業概要や想定ボリュームを support@1540bo.io までお送りください。72時間以内にワークショップを調整します。",
        },
      },
      cta: {
        heading: "プロバイダー契約をご検討ですか？",
        body: "マーケット・月次ボリューム・ローンチ希望時期を共有いただければ、最適なモジュールと見積を提示します。",
        primary: "support@1540bo.io へ連絡",
        secondary: "技術ドキュメントを見る",
      },
    },
    vip: {
      hero: {
        badge: "VIP Program",
        title: "20段階のVIPリワードでハイボリューム取引を最大化",
        subtitle:
          "累計ベット額に応じてランクが即時昇格し、デイリーリワード・ウィークリー／マンスリーキャッシュバック・昇格ボーナスが拡大します。",
        ctaPrimary: "VIPアクセスを申請",
        ctaSecondary: "サポートに問い合わせる",
        card: {
          title: "プログラム構成",
          items: [
            "累計ベット額に応じた20段階のランクシステム。",
            "デイリー、ウィークリー、マンスリー、昇格ボーナスの4種の報酬が同時に進行。",
            "アクティブブーストと月次レベル判定で、活動量に応じて還元率が調整されます。",
          ],
        },
      },
      overview: {
        heading: "VIPリワードの仕組み",
        paragraphs: [
          "本VIPプログラムは累計ベット額に応じて20段階のランクを設定し、プレイヤーの継続的な取引を報酬化します。",
          "ランクが上がるほど還元率・ボーナス額が強化され、活動状況と月次判定により自動的に再計算されます。",
        ],
        points: [
          "5つのティア（ブロンズ／シルバー／ゴールド／プラチナ／ダイアモンド）×4レベル構成。",
          "デイリーリワード、ウィークリーロスキャッシュバック、マンスリーロスキャッシュバック、昇格ボーナスの4種の報酬。",
          "アクティブブーストとレベル維持ルールという2つの特別ルールを採用。",
        ],
      },
      rewards: {
        types: [
          {
            badge: "① Daily",
            title: "デイリーリワード（ベット額リベート）",
            text: "各ランクの料率を当日の総ベット額に掛け合わせ、即時にベットバックを獲得できます。",
          },
          {
            badge: "② Weekly",
            title: "ウィークリーロスキャッシュバック",
            text: "週間純損失額に対して料率が適用され、条件を満たすとアクティブブーストで+0.5%が加算されます。",
          },
          {
            badge: "③ Monthly",
            title: "マンスリーロスキャッシュバック",
            text: "月間純損失額に対して料率が適用され、月間稼働日数に応じて最大+1.0%のブーストが付与されます。",
          },
          {
            badge: "④ Rank-up",
            title: "昇格ボーナス（ワンタイム）",
            text: "各ランクに初めて到達した際に、一度だけ固定額のボーナスが付与されます。",
          },
        ],
        summary: {
          label: "Rewards",
          heading: "20ランクと4種類の報酬ストリーム",
          text: "還元率は現金ベットと純損失を基準に計算され、ランクが上がるほどデイリー・ウィークリー・マンスリーのキャッシュバックと昇格ボーナスが増加します。",
          note: "表示パーセンテージはアクティブブースト適用前の数値です。詳細は下記ルールをご確認ください。",
        },
        table: {
          headers: {
            rank: "ランク",
            tier: "ティア",
            requirement: "昇格条件（累計ベット額）",
            bonus: "昇格ボーナス",
            daily: "デイリー（賭け額）",
            weekly: "ウィークリー（負け額）",
            monthly: "マンスリー（負け額）",
          },
          rows: [
            {
              rank: "1",
              tier: "ブロンズ 1",
              requirement: "$0",
              bonus: "-",
              daily: "0.10%",
              weekly: "3.5%",
              monthly: "1.5%",
            },
            {
              rank: "2",
              tier: "ブロンズ 2",
              requirement: "$2,500",
              bonus: "$2.5",
              daily: "0.12%",
              weekly: "4.0%",
              monthly: "1.5%",
            },
            {
              rank: "3",
              tier: "ブロンズ 3",
              requirement: "$5,000",
              bonus: "$2.5",
              daily: "0.14%",
              weekly: "4.5%",
              monthly: "2.0%",
            },
            {
              rank: "4",
              tier: "ブロンズ 4",
              requirement: "$10,000",
              bonus: "$5",
              daily: "0.16%",
              weekly: "5.0%",
              monthly: "2.0%",
            },
            {
              rank: "5",
              tier: "シルバー 1",
              requirement: "$25,000",
              bonus: "$15",
              daily: "0.18%",
              weekly: "5.5%",
              monthly: "2.5%",
            },
            {
              rank: "6",
              tier: "シルバー 2",
              requirement: "$50,000",
              bonus: "$25",
              daily: "0.20%",
              weekly: "6.0%",
              monthly: "2.5%",
            },
            {
              rank: "7",
              tier: "シルバー 3",
              requirement: "$100,000",
              bonus: "$50",
              daily: "0.23%",
              weekly: "6.5%",
              monthly: "3.0%",
            },
            {
              rank: "8",
              tier: "シルバー 4",
              requirement: "$200,000",
              bonus: "$100",
              daily: "0.26%",
              weekly: "7.0%",
              monthly: "3.0%",
            },
            {
              rank: "9",
              tier: "ゴールド 1",
              requirement: "$350,000",
              bonus: "$150",
              daily: "0.30%",
              weekly: "7.5%",
              monthly: "3.5%",
            },
            {
              rank: "10",
              tier: "ゴールド 2",
              requirement: "$500,000",
              bonus: "$150",
              daily: "0.34%",
              weekly: "8.0%",
              monthly: "3.5%",
            },
            {
              rank: "11",
              tier: "ゴールド 3",
              requirement: "$750,000",
              bonus: "$250",
              daily: "0.38%",
              weekly: "8.5%",
              monthly: "4.0%",
            },
            {
              rank: "12",
              tier: "ゴールド 4",
              requirement: "$1,000,000",
              bonus: "$250",
              daily: "0.42%",
              weekly: "9.0%",
              monthly: "4.0%",
            },
            {
              rank: "13",
              tier: "プラチナ 1",
              requirement: "$1,500,000",
              bonus: "$500",
              daily: "0.46%",
              weekly: "9.5%",
              monthly: "4.5%",
            },
            {
              rank: "14",
              tier: "プラチナ 2",
              requirement: "$2,000,000",
              bonus: "$500",
              daily: "0.50%",
              weekly: "10.0%",
              monthly: "5.0%",
            },
            {
              rank: "15",
              tier: "プラチナ 3",
              requirement: "$3,000,000",
              bonus: "$1,000",
              daily: "0.55%",
              weekly: "10.5%",
              monthly: "5.5%",
            },
            {
              rank: "16",
              tier: "プラチナ 4",
              requirement: "$5,000,000",
              bonus: "$2,000",
              daily: "0.60%",
              weekly: "11.0%",
              monthly: "6.0%",
            },
            {
              rank: "17",
              tier: "ダイアモンド 1",
              requirement: "$7,500,000",
              bonus: "$2,500",
              daily: "0.65%",
              weekly: "11.5%",
              monthly: "6.5%",
            },
            {
              rank: "18",
              tier: "ダイアモンド 2",
              requirement: "$10,000,000",
              bonus: "$2,500",
              daily: "0.70%",
              weekly: "12.0%",
              monthly: "7.0%",
            },
            {
              rank: "19",
              tier: "ダイアモンド 3",
              requirement: "$15,000,000",
              bonus: "$5,000",
              daily: "0.75%",
              weekly: "13.0%",
              monthly: "7.5%",
            },
            {
              rank: "20",
              tier: "ダイアモンド 4",
              requirement: "$25,000,000",
              bonus: "$10,000",
              daily: "0.80%",
              weekly: "14.0%",
              monthly: "8.0%",
            },
          ],
        },
      },
      rules: {
        heading: "適用ルール",
        active: {
          label: "ルール1",
          heading: "アクティブブースト",
          intro:
            "一定の稼働日数を満たすことで、ウィークリー／マンスリーのキャッシュバック率に上乗せが発生します。",
          weekly: {
            title: "ウィークリー・アクティブブースト",
            detail: "1週間のうち5日以上（1日$0.1以上のベット）で+0.5%を加算。",
          },
          monthly: {
            title: "マンスリー・アクティブブースト",
            detail: "1ヶ月のうち20日以上（1日$0.1以上のベット）で+1.0%を加算。",
          },
        },
        downgrade: {
          label: "ルール2",
          heading: "ランク維持と降格判定",
          intro:
            "昇格は累計ベット額を達成した時点で即時に行われ、維持判定は毎月1日に実施されます。",
          bullets: [
            "累計ベット額が条件を満たした時点で即時昇格。",
            "一度到達したティア（ブロンズ〜ダイアモンド）から下位ティアへ降格することはありません。",
            "毎月1日に前月のベット額を基準として各レベルの維持判定を実施します。",
            "条件未達の場合は同一ティア内で降格し、レベル1が最低ラインとなります。",
          ],
          reminder:
            "判定は現金ベット額を基準とし、各ティアのレベル1が降格後の下限となります。",
        },
        maintenanceTable: {
          headers: {
            rank: "ランク",
            tier: "ティア",
            requirement: "レベル維持条件（月間ベット額）",
          },
          rows: [
            { rank: "1", tier: "ブロンズ 1", requirement: "$0" },
            { rank: "2", tier: "ブロンズ 2", requirement: "$100" },
            { rank: "3", tier: "ブロンズ 3", requirement: "$250" },
            { rank: "4", tier: "ブロンズ 4", requirement: "$500" },
            { rank: "5", tier: "シルバー 1", requirement: "$1,000" },
            { rank: "6", tier: "シルバー 2", requirement: "$2,500" },
            { rank: "7", tier: "シルバー 3", requirement: "$5,000" },
            { rank: "8", tier: "シルバー 4", requirement: "$10,000" },
            { rank: "9", tier: "ゴールド 1", requirement: "$20,000" },
            { rank: "10", tier: "ゴールド 2", requirement: "$30,000" },
            { rank: "11", tier: "ゴールド 3", requirement: "$50,000" },
            { rank: "12", tier: "ゴールド 4", requirement: "$75,000" },
            { rank: "13", tier: "プラチナ 1", requirement: "$100,000" },
            { rank: "14", tier: "プラチナ 2", requirement: "$150,000" },
            { rank: "15", tier: "プラチナ 3", requirement: "$200,000" },
            { rank: "16", tier: "プラチナ 4", requirement: "$300,000" },
            { rank: "17", tier: "ダイアモンド 1", requirement: "$500,000" },
            { rank: "18", tier: "ダイアモンド 2", requirement: "$750,000" },
            { rank: "19", tier: "ダイアモンド 3", requirement: "$1,000,000" },
            { rank: "20", tier: "ダイアモンド 4", requirement: "$1,500,000" },
          ],
        },
      },
      terms: {
        heading: "VIPプログラム利用規約",
        subtitle:
          "本プログラムへの参加には、本規約および一般利用規約への同意が必要です。",
        articles: [
          {
            label: "第1条",
            heading: "プログラムへの参加",
            items: [
              "本プログラムは当社に登録されたすべてのプレイヤーが自動的に対象となります。",
              "1プレイヤーにつき1アカウントのみ有効です。",
              "当社は、理由の如何を問わず、参加を拒否・取り消しする権利を有します。",
            ],
          },
          {
            label: "第2条",
            heading: "VIPランクシステム",
            items: [
              "本プログラムは20段階のランクで構成され、ティア（ブロンズ〜ダイアモンド）とレベル（各ティア1〜4）で表されます。",
              "累計ベット額が条件を満たすと、ランクは即時昇格します。",
              "一度到達したティアから下位ティアへ降格することはありません。",
              "各レベルの維持判定は毎月1日に前月のベット額を基準に実施します。",
            ],
          },
          {
            label: "第3条",
            heading: "報酬の種類と計算",
            items: [
              "デイリーリワード（ベット額リベート）：ランクに応じた料率を当日の総ベット額に適用し、毎日付与します。",
              "ウィークリーロスキャッシュバック：週間純損失額にランク料率を乗じ、所定の曜日に付与します。",
              "マンスリーロスキャッシュバック：月間純損失額にランク料率を乗じ、所定の日に付与します。",
              "昇格ボーナス：ランク2以上に初めて到達した際、一度だけ固定額のボーナスを付与します。",
            ],
          },
          {
            label: "第4条",
            heading: "アクティブブースト",
            items: [
              "ウィークリー・アクティブブースト：週5日以上（1日$0.1以上）のベットで、その週のウィークリー料率に+0.5%。",
              "マンスリー・アクティブブースト：月20日以上の稼働で、その月のマンスリー料率に+1.0%。",
            ],
          },
          {
            label: "第5条",
            heading: "報酬の条件",
            items: [
              "特に明記がない限り、計算対象は現金ベットおよび現金ベースの純損失です。ボーナスベットは対象外となる場合があります。",
              "昇格ボーナスはボーナスとして付与され、賭け条件や有効期限が設定される場合があります。",
              "当社は賭け条件・有効期限・上限など追加条件を設定する権利を有します。",
            ],
          },
          {
            label: "第6条",
            heading: "禁止事項と悪用",
            items: [
              "複数アカウントの作成、システム不具合の悪用、他プレイヤーとの共謀など、不正とみなされる行為を禁止します。",
              "リワード獲得のみを目的とした異常なベットパターンは、乱用と判断される場合があります。",
              "不正・乱用が発覚した場合、VIP資格の剥奪、ランク降格、報酬没収、アカウント凍結などを行う権利を有します。",
            ],
          },
          {
            label: "第7条",
            heading: "一般条項",
            items: [
              "当社は独自の裁量により、事前通知なく本プログラムや報酬内容を変更・中断・終了する権利を有します。",
              "本プログラムの運営・資格・計算・解釈に関する当社の決定は最終的なものとします。",
              "本規約と一般利用規約が矛盾する場合は、一般利用規約が優先されます。",
            ],
          },
        ],
      },
      update: {
        label: "最終更新日",
        date: "2025年11月11日",
        note: "本プログラムの仕様は予告なく変更される場合があります。最新情報は公式アナウンスをご確認ください。",
      },
    },
    terms: {
      hero: {
        badge: "利用規約",
        title: "取引を始める前に必ず規約とリスクをご確認ください",
        subtitle:
          "本規約は1540bo.ioの利用条件を定めるものです。各章を丁寧に読み、内容に同意した場合のみ取引を行ってください。",
        ctaPrimary: "コンプライアンス窓口に連絡",
        ctaSecondary: "サポートセンターに戻る",
        alertTitle: "ハイリスク商品に関する警告",
        alertBody:
          "バイナリーオプションは時間制限とレバレッジを伴う高リスク商品です。本規約に反した場合、口座停止や投資元本の全損リスクが生じます。",
      },
      overview: {
        heading: "本規約の読み方",
        paragraphs: [
          "本規約は、Sea Urchin Street, San Pedro, Ambergris Caye, Belize に登録された galactic-triablazers Ltd（以下「当社」といいます。）が提供するバイナリーオプション取引サービス「1540bo.io」に関する法的拘束力のある契約です。",
          "本サービスを利用する利用者は、以下の条項すべてに同意したものとみなされます。同意できない場合は、口座を開設・利用しないでください。",
        ],
        highlights: [
          "第1章では、取引や用語の定義を明確化し、解釈の基準を定めています。",
          "第2章では、口座開設、本人確認、反社会的勢力の排除、届出事項変更など利用者の義務を規定しています。",
          "以降の章で、取引ルール、入出金手続、リスク開示、禁止事項、紛争解決の枠組みを詳細に説明します。",
        ],
      },
      chapters: {
        chapter1: {
          label: "第1章",
          heading: "総則",
          articles: {
            article1: {
              heading: "第1条（本約款の趣旨）",
              body: [
                "本利用規約（以下、「本規約」といいます。）は、所在地を Sea Urchin Street, San Pedro, Ambergris Caye, Belize に置く galactic-triablazers Ltd（以下、「当社」といいます。）が提供するバイナリーオプション取引サービス「1540bo.io」（以下、「本サービス」といいます。）の利用条件を定めるものです。本サービスの利用者（以下、「利用者」といいます。）は、本規約に同意の上、本サービスを利用するものとします。",
              ],
            },
            article2: {
              heading: "第2条（用語の定義）",
              intro: "本規約で使用する用語の定義は、次の各号のとおりとします。",
              items: [
                "バイナリーオプション取引：特定の原資産について、一定時間後の価格が判定価格を上回るか下回るかを予測する取引をいいます。",
                "原資産：バイナリーオプション取引の対象となる金融商品をいいます。",
                "判定価格：取引開始時点の原資産の価格をいいます。",
                "判定時刻：取引の結果を判定する時刻をいいます。",
                "購入金額：利用者が取引1回あたりに支払う金額をいいます。",
                "ペイアウト金額：予測が的中した場合に利用者が受け取る金額をいいます。",
              ],
            },
          },
        },
        chapter2: {
          label: "第2章",
          heading: "取引口座",
          articles: {
            article3: {
              heading: "第3条（取引口座の開設）",
              body: [
                "本サービスの利用を希望する者は、本規約に同意の上、当社所定の方法により取引口座の開設を申し込むものとします。",
                "当社は、当社の基準に基づき申込者の審査を行い、口座開設を承認する場合には、申込者に対して口座開設完了の通知を行います。",
                "当社は、申込者が以下の各号のいずれかに該当する場合、口座開設を拒否することができるものとします。この場合、当社はその理由を開示する義務を負わないものとします。",
              ],
              items: [
                "申込内容に虚偽、誤記または記載漏れがあった場合",
                "過去に当社から契約を解除されたことがある場合",
                "その他、当社が不適当と判断した場合",
              ],
            },
            article4: {
              heading: "第4条（本人確認）",
              body: [
                "当社は、犯罪による収益の移転防止に関する法律に基づき、利用者の本人確認を行います。利用者は、当社が指定する本人確認書類を提出するものとします。",
              ],
            },
            article5: {
              heading: "第5条（反社会的勢力の排除）",
              body: [
                "利用者は、自らが暴力団、暴力団員、暴力団関係企業、総会屋、その他の反社会的勢力に該当しないことを表明し、かつ将来にわたっても該当しないことを確約するものとします。",
              ],
            },
            article6: {
              heading: "第6条（届出事項の変更）",
              body: [
                "利用者は、氏名、住所、連絡先など、当社への届出事項に変更があった場合、速やかに当社所定の方法により変更手続きを行うものとします。",
              ],
            },
          },
        },
        chapter3: {
          label: "第3章",
          heading: "取引",
          articles: {
            article7: {
              heading: "第7条（取引の種類）",
              body: [
                "本サービスで提供する取引の種類は、以下のとおりとします。",
              ],
              items: [
                "Binary BTC",
                "ETH Channel",
                "XRP Crypto",
                "XRP Black hole",
                "ETH SpeedUp",
                "BTC High Roller",
                "その他、当社が別途定める取引",
              ],
            },
            article8: {
              heading: "第8条（注文）",
              body: [
                "利用者は、当社所定の取引プラットフォームを通じて、当社の定める方法で注文を行うものとします。",
              ],
            },
            article9: {
              heading: "第9条（約定）",
              body: [
                "注文は、当社システムで受け付けた時点で約定するものとします。",
              ],
            },
            article10: {
              heading: "第10条（取引時間）",
              body: [
                "本サービスの取引時間は、原則として24時間365日としますが、システムメンテナンス等のために一時的に停止することがあります。",
              ],
            },
            article11: {
              heading: "第11条（手数料）",
              body: [
                "取引手数料は無料とします。ただし、入出金にかかる手数料は、別途定めるものとします。",
              ],
            },
          },
        },
        chapter4: {
          label: "第4章",
          heading: "入出金",
          articles: {
            article12: {
              heading: "第12条（入金）",
              body: [
                "利用者は、当社所定の方法により、当社が指定する通貨（USDT、暗号資産）を取引口座に入金することができます。",
              ],
            },
            article13: {
              heading: "第13条（出金）",
              body: [
                "利用者は、当社所定の方法により、取引口座からの出金を請求することができます。",
              ],
              items: [
                "出金は、原則として利用者本人名義の口座に対してのみ行われます。",
                "当社は、本人確認手続きが完了していない場合、出金を留保することができるものとします。",
              ],
            },
          },
        },
        chapter5: {
          label: "第5章",
          heading: "リスク",
          articles: {
            article14: {
              heading: "第14条（リスクの理解）",
              body: [
                "バイナリーオプション取引は、高いリターンが期待できる一方で、投資元本を失うリスクがあります。",
                "利用者は、本取引の仕組みやリスクを十分に理解し、自己の判断と責任において取引を行うものとします。",
                "当社は、本取引によって利用者に生じたいかなる損害についても、一切の責任を負わないものとします。",
              ],
            },
          },
        },
        chapter6: {
          label: "第6章",
          heading: "禁止事項",
          articles: {
            article15: {
              heading: "第15条（禁止事項）",
              body: [
                "利用者は、本サービスの利用にあたり、以下の各号に該当する行為を行ってはならないものとします。",
              ],
              items: [
                "法令または公序良俗に違反する行為",
                "犯罪行為に関連する行為",
                "当社のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為",
                "当社のサービスの運営を妨害するおそれのある行為",
                "他の利用者に関する個人情報等を収集または蓄積する行為",
                "他の利用者に成りすます行為",
                "当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為",
                "その他、当社が不適切と判断する行為",
              ],
            },
          },
        },
        chapter7: {
          label: "第7章",
          heading: "その他",
          articles: {
            article16: {
              heading: "第16条（免責事項）",
              items: [
                "当社は、システム障害、通信回線の障害、天災地変、その他当社の責に帰すことのできない事由により生じた損害について、一切の責任を負わないものとします。",
                "当社は、本サービスの内容の変更、中断または終了によって利用者に生じた損害について、一切の責任を負わないものとします。",
              ],
            },
            article17: {
              heading: "第17条（契約の解除）",
              items: [
                "利用者が本規約のいずれかの条項に違反した場合",
                "届出事項に虚偽の事実があることが判明した場合",
                "その他、当社が本サービスの利用を適当でないと判断した場合",
              ],
            },
            article18: {
              heading: "第18条（準拠法及び合意管轄）",
              items: [
                "本規約の解釈にあたっては、日本法を準拠法とします。",
                "本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。",
              ],
            },
          },
        },
      },
      update: {
        label: "最終更新日",
        date: "2025年11月11日",
        note: "本規約は予告なく改定される場合があります。最新情報は公式アナウンスでご確認ください。",
      },
    },
    privacy: {
      hero: {
        badge: "プライバシーポリシー",
        title: "1540bo.io プライバシーポリシー",
        subtitle:
          "本ポリシーは、Sea Urchin Street, San Pedro, Ambergris Caye, Belize に所在する galactic-triablazers Ltd が、取引サービスの提供に際して取得・利用・共有・保護する個人情報の取扱いを説明します。",
        ctaPrimary: "サポートに問い合わせる",
        ctaSecondary: "利用規約を見る",
        alertTitle: "個人情報提供前の重要な確認",
        alertBody:
          "本ポリシーはすべての口座保有者に適用されます。情報の取扱いと保護内容を理解したうえで書類をご提出ください。",
      },
      overview: {
        heading: "個人情報の取扱い方針",
        paragraphs: [
          "galactic-triablazers Ltd（所在地：Sea Urchin Street, San Pedro, Ambergris Caye, Belize）が運営する 1540bo.io における個人情報の取得から廃棄までの取扱い規範を、以下の各条項で定めています。",
          "日本の個人情報保護法に準拠し、本サービスをご利用いただくすべての方に適用されます。",
        ],
        highlights: [
          "取得する個人情報とその法的根拠",
          "利用目的・第三者提供・共同利用の範囲",
          "開示・訂正等の権利とお問い合わせ窓口",
        ],
      },
      sections: {
        section1: {
          label: "第1条",
          heading: "総則",
          body: [
            "galactic-triablazers Ltd（所在地：Sea Urchin Street, San Pedro, Ambergris Caye, Belize、以下「当社」といいます。）は、本サービス「1540bo.io」における利用者情報（個人情報を含みます。）の取扱いについて、本プライバシーポリシーを定めます。",
          ],
        },
        section2: {
          label: "第2条",
          heading: "個人情報の定義",
          body: [
            "「個人情報」とは、個人情報保護法に定める生存する個人に関する情報であり、氏名、生年月日その他の記述等により特定の個人を識別できるもの、または他の情報と照合することで容易に特定の個人を識別できるものをいいます。",
          ],
        },
        section3: {
          label: "第3条",
          heading: "個人情報の取得方法",
          intro:
            "当社は、適法かつ公正な手段により個人情報を取得し、偽りその他不正の手段による取得は行いません。主な取得情報は次のとおりです。",
          groups: [
            {
              title: "利用者から直接ご提供いただく情報",
              items: [
                "氏名、住所、生年月日、電話番号、メールアドレスその他の登録情報。",
                "パスポート、運転免許証等の本人確認書類に記載された情報。",
                "各種申込フォームやサポート対応を通じて任意にご提供いただくその他の情報。",
              ],
            },
            {
              title: "本サービス利用に伴い自動的に取得する情報",
              items: [
                "1540bo.io上で記録される取引履歴および口座残高。",
                "IPアドレス、Cookie識別子、端末情報等の技術的テレメトリー。",
              ],
            },
          ],
        },
        section4: {
          label: "第4条",
          heading: "個人情報の利用目的",
          items: [
            "本サービスを提供・運営するため。",
            "本人確認、口座開設申込、取引指図等を受け付けるため。",
            "取引結果、預り残高等を利用者へ報告するため。",
            "お問い合わせへの回答および本人確認を行うため。",
            "本サービスの新機能、更新情報、キャンペーン等並びに当社の他サービス案内のメールを送信するため。",
            "メンテナンスや重要なお知らせ等を必要に応じて連絡するため。",
            "利用規約等に違反した利用者、不正・不当な目的で本サービスを利用しようとする利用者を特定し、ご利用をお断りするため。",
            "犯罪による収益の移転防止法に基づく本人確認等、法令等を遵守するため。",
            "上記利用目的に付随する目的のため。",
          ],
        },
        section5: {
          label: "第5条",
          heading: "個人情報の第三者提供",
          intro:
            "当社は、以下の場合または法令で認められる場合を除き、あらかじめ利用者の同意を得ることなく個人情報を第三者に提供しません。",
          items: [
            "人の生命、身体または財産の保護のために必要がある場合で本人の同意を得ることが困難なとき。",
            "公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合で本人の同意を得ることが困難なとき。",
            "国の機関または地方公共団体等が法令に定める事務を遂行するために協力する必要があり、本人の同意取得によって当該事務の遂行に支障を及ぼすおそれがあるとき。",
            "あらかじめ定められた事項を告知または公表し、個人情報保護委員会に届出をしたとき。",
          ],
          note: "個人情報の第三者提供は、個人情報保護法その他関係法令に従い適切に実施します。",
        },
        section6: {
          label: "第6条",
          heading: "個人情報の共同利用",
          intro: "当社は、以下の範囲で個人情報を共同利用することがあります。",
          groups: [
            {
              title: "共同利用される項目",
              items: [
                "氏名、住所、生年月日、電話番号、メールアドレス等の連絡先情報。",
                "本人確認結果および1540bo.io上の取引に関する情報。",
                "第4条に定める利用目的を達成するために必要なその他のデータ。",
              ],
            },
            {
              title: "共同利用者の範囲",
              body: "1540boグループ各社。",
            },
            {
              title: "共同利用の目的",
              body: "本プライバシーポリシー第4条に記載の利用目的と同一です。",
            },
            {
              title: "個人情報管理責任者",
              body: "共同利用されるデータの安全管理を統括する1540bo。",
            },
          ],
        },
        section7: {
          label: "第7条",
          heading: "個人情報の安全管理措置",
          body: [
            "当社は個人情報の漏えい、滅失またはき損を防止し、安全管理を図るため、組織的・人的・物理的・技術的な必要かつ適切な措置を講じます。",
          ],
        },
        section8: {
          label: "第8条",
          heading: "個人情報の開示・訂正・利用停止等",
          body: [
            "利用者から個人情報の開示、訂正、追加、削除、利用停止または消去を求められた場合、法令に定める例外を除き、ご本人確認のうえ遅滞なく対応します。",
            "法令により当社が応じる義務がないと判断した場合には、その旨を速やかに通知します。",
          ],
          fee: "開示請求1件につき1,000円（税込）の手数料をご負担いただきます。",
        },
        section9: {
          label: "第9条",
          heading: "Cookie等の利用",
          body: [
            "当社は、利便性の向上、利用状況の把握、広告効果測定等を目的としてCookieおよび類似技術を利用することがあります。",
            "ブラウザの設定でCookieを無効にすることができますが、その場合本サービスの一部がご利用いただけないことがあります。",
          ],
        },
        section10: {
          label: "第10条",
          heading: "プライバシーポリシーの変更",
          body: [
            "当社は必要に応じて本ポリシーを変更することがあります。",
            "法令上利用者の同意が必要となる変更を行う場合、変更後のポリシーは所定の方法で同意した利用者にのみ適用し、施行時期および内容を当社ウェブサイト等で周知または通知します。",
          ],
        },
        section11: {
          label: "第11条",
          heading: "お問い合わせ窓口",
          body: [
            "本ポリシーに関するお問い合わせは、1540bo.io内のサポートセンターよりご連絡ください。",
            "必要に応じてご本人確認を行ったうえで、本ポリシーに従い迅速に対応いたします。",
          ],
        },
      },
      update: {
        label: "ステータス",
        date: "2025年11月19日",
        note: "本プライバシーポリシーは上記日付現在のものであり、規制動向に合わせて更新される場合があります。",
      },
    },
    help: {
      detail: {
        back: "ヘルプ目次に戻る",
      },
      index: {
        hero: {
          badge: "ヘルプセンター",
          title: "1540BOガイドセンター",
          subtitle:
            "口座登録、取引、ウォレット運用、パートナー活動を手順付きで案内します。",
          note: "カテゴリを選ぶと、チェックリストやスクリーンショット、エスカレーション経路が開きます。",
          meta: "更新日: 2025年12月11日 ｜ 対応言語: EN / 日本語 / ไทย",
          cta: "ガイドを表示",
        },
        panel: {
          title: "サポートへ連絡する前に",
          items: [
            "正しいアカウントとネットワークにログインしているか確認してください。",
            "スクリーンショット・TXID・発生時刻を用意するとトレースが迅速になります。",
            "KYC・入金・出金・パートナー精算は各ページの手順を参照してください。",
          ],
          note: "これらを確認するだけで多くの問題が解決します。",
        },
        catalog: {
          heading: "ヘルプカテゴリを選択",
          subtitle:
            "各カードから詳細ガイド（チェックリスト／FAQ／連絡先）を開けます。",
        },
        cards: {
          account: {
            eyebrow: "アカウント",
            title: "登録とセキュリティ",
            body: "KYC手順、デバイス衛生、ロックされたアカウントの復旧方法をまとめています。",
            cta: "プレイブックを開く",
          },
          trading: {
            eyebrow: "取引",
            title: "バイナリーオプション手順",
            body: "トップゲーム画面のツアー、チケット作成、リスク手順を解説します。",
            cta: "ガイドを見る",
          },
          deposit: {
            eyebrow: "ウォレット",
            title: "入金と反映手順",
            body: "対応通貨とネットワーク、確認時間、遅延時の対処法を案内します。",
            cta: "手順を読む",
          },
          withdrawal: {
            eyebrow: "ウォレット",
            title: "出金とコンプライアンス",
            body: "必要条件、タイムライン、保留時に送るべき情報を確認できます。",
            cta: "チェックリストを見る",
          },
          affiliate: {
            eyebrow: "パートナー",
            title: "アフィリエイト運用",
            body: "申請、キャンペーン運用、精算とコンプライアンスのルールを確認できます。",
            cta: "プレイブックを読む",
          },
          other: {
            eyebrow: "リソース",
            title: "追加ツール",
            body: "責任ある取引リソース、ステータスフィード、アプリ内ヒントをまとめています。",
            cta: "詳しく見る",
          },
        },
        support: {
          heading: "個別サポートが必要ですか？",
          body: "Opsチームは support@1540bo.io を24時間監視しています。スクショ・TXID・時刻を添えると最速でご案内できます。",
          cta: "support@1540bo.io へメール",
          secondary: "連絡先一覧を見る",
        },
      },
      account: {
        title: "アカウント - 登録とセキュリティ",
        intro:
          "1540BOプラットフォームを安全にご利用いただくため、アカウントの登録とセキュリティ設定は非常に重要です。このページでは、本人確認（KYC）手続き、デバイスのセキュリティ管理、およびアカウント復旧のための連絡先設定について詳しく解説します。",
        updated: "最終更新日: 2025年12月08日",
        kyc: {
          title: "本人確認（KYC）手続き",
          intro:
            "1540BOでは、すべてのユーザーに安全な取引環境を提供するため、国際的な規制基準に準拠した本人確認（KYC）手続きを義務付けています。KYCを完了することで、出金上限額の引き上げや、すべての機能へのアクセスが可能になります。",
          table: {
            stepHeader: "手順",
            contentHeader: "内容",
            step1: {
              label: "ステップ1",
              content:
                "身分証明書の提出: アカウント設定ページから、政府発行の有効な身分証明書（パスポート、運転免許証など）のカラー写真をアップロードしてください。",
            },
            step2: {
              label: "ステップ2",
              content:
                "住所証明書の提出: 3ヶ月以内に発行された公共料金の請求書や銀行の取引明細書など、氏名と現住所が確認できる書類を提出してください。",
            },
            step3: {
              label: "ステップ3",
              content:
                "審査: 提出された書類は、当社のコンプライアンスチームによって審査されます。通常、審査は24時間以内に完了します。",
            },
          },
          note: {
            label: "注意:",
            text: "提出される書類は、四隅がすべて写っており、文字が鮮明に読み取れる必要があります。不鮮明な画像や加工された画像は承認されません。",
          },
        },
        security: {
          title: "デバイスの衛生管理とセキュリティ",
          intro:
            "お客様のアカウントを不正アクセスから守るため、以下のセキュリティ対策を強く推奨します。",
          item1:
            "強力なパスワードの設定: 推測されにくい、大文字、小文字、数字、記号を組み合わせた複雑なパスワードを使用してください。",
          item2:
            "二段階認証（2FA）の有効化: Google Authenticatorなどの認証アプリを利用して、ログイン時に追加のセキュリティ層を設けることをお勧めします。",
          item3:
            "公共Wi-Fiの利用回避: 公共のWi-Fiネットワークはセキュリティが脆弱な場合があります。金融取引を行う際は、信頼できるネットワークをご利用ください。",
          item4:
            "定期的なパスワード変更: 3ヶ月に一度など、定期的にパスワードを変更することで、セキュリティを強化できます。",
        },
        recovery: {
          title: "アカウント復旧と連絡先",
          intro:
            "パスワードを忘れた場合や、アカウントにアクセスできなくなった場合に備え、復旧用の連絡先を正確に登録しておくことが重要です。",
          item1:
            "メールアドレス: 登録されているメールアドレスは、パスワードリセットや重要なお知らせの通知に使用されます。常に最新の状態に保ってください。",
          item2:
            "電話番号: （オプション）電話番号を登録すると、SMSを利用したアカウント復旧が可能になります。",
          support:
            "万が一、アカウントへのアクセスに問題が発生した場合は、以下のサポート窓口まで速やかにご連絡ください。",
          contact: "サポートメール: support@1540bo.io",
        },
        relatedLinks: {
          title: "関連リンク",
          trading: "取引ガイド",
          deposit: "ウォレット入金手順",
        },
      },
      trading: {
        title: "取引 - バイナリーオプションの流れ",
        intro:
          "1540BOのバイナリーオプション取引は、シンプルで直感的な操作性が特徴です。このガイドでは、トップゲーム画面の基本的な使い方から、取引チケットの作成、リスク管理までの一連の流れを解説します。",
        updated: "最終更新日: 2025年12月08日",
        overview: {
          title: "トップゲーム画面の概要",
          intro:
            "ログイン後、最初に表示されるのが「トップゲーム」画面です。ここには、取引に必要なすべての情報が集約されています。",
          table: {
            elementHeader: "要素",
            descriptionHeader: "説明",
            row1: {
              label: "取引ペア",
              content:
                "BTC/USDT、ETH/USDTなど、取引対象となる暗号資産のペアを選択します。リアルタイムの価格が表示されます。",
            },
            row2: {
              label: "価格チャート",
              content:
                "選択した取引ペアの価格変動を視覚的に確認できます。過去の価格動向を分析し、将来の価格を予測します。",
            },
            row3: {
              label: "ベット額",
              content:
                "取引前にベット額を入力し、想定ペイアウト％を確認してから注文します。",
            },
            row4: {
              label: "取引履歴",
              content:
                "過去の取引結果（勝ち/負け）、ベット額、ペイアウト額などを確認できます。",
            },
          },
        },
        ticket: {
          title: "取引",
          intro: "1540BOでの取引は、次の2ステップで完了します。",
          steps: [
            "取引ペアの選択: 取引したい暗号資産ペアを選びます。",
            "方向の予測とベット: 価格が上昇すると予測する場合は「コール（Call）」、下落と見る場合は「プット（Put）」を選び、ベット額を入力して取引を確定します。",
          ],
          note: {
            label: "ポイント:",
            text: "1540BOでは、世界中のトレーダーのセンチメント（市場心理）をヒートマップで可視化しています。他のトレーダーの動向を参考に、取引戦略を立てることができます。",
          },
        },
        risk: {
          title: "リスク管理とペイアウト",
          intro:
            "バイナリーオプションは、ペイアウト率が固定されているため、リスク管理が容易です。取引を開始する前に、潜在的な利益と損失を正確に把握できます。",
          items: [
            "ペイアウト率: 取引が成功した場合に得られる利益の割合です。ペイアウト率は取引ペアや市場の状況によって変動します。",
            "リスク: 取引が失敗した場合の損失は、ベット額に限定されます。ベット額以上の損失が発生することはありません。",
          ],
          outro:
            "責任ある取引を心掛け、ご自身の資金管理計画に基づいて取引を行ってください。",
        },
        contact: {
          title: "お問い合わせ",
          text: "取引に関するご不明な点がございましたら、24時間対応のサポートチームまでお気軽にお問い合わせください。",
          email: "サポートメール: support@1540bo.io",
        },
        relatedLinks: {
          title: "関連リンク",
          account: "アカウント - 登録とセキュリティ",
          deposit: "ウォレット - 入金・反映手順",
        },
      },
      deposit: {
        title: "ウォレット - 入金・反映手順",
        intro:
          "1540BOでは、複数の暗号資産（仮想通貨）を使用した迅速かつ安全な入金が可能です。このページでは、対応しているブロックチェーン、入金アドレスの確認方法、および入金が遅延した場合の対処法について詳しく説明します。",
        updated: "最終更新日: 2025年12月08日",
        supported: {
          title: "対応暗号資産とネットワーク",
          intro:
            "当プラットフォームでは、以下の主要な暗号資産およびネットワーク（ブロックチェーン）に対応しています。入金を行う際は、必ず正しいネットワークを選択してください。誤ったネットワークに送金した場合、資産が失われる可能性があります。",
          table: {
            cryptoHeader: "暗号資産",
            networkHeader: "対応ネットワーク",
            row1: {
              crypto: "USDT",
              network: "ERC20 (Ethereum), TRC20 (TRON)",
            },
            row2: { crypto: "BTC", network: "Bitcoin" },
            row3: { crypto: "ETH", network: "ERC20 (Ethereum)" },
            row4: { crypto: "TRX", network: "TRC20 (TRON)" },
            row5: { crypto: "LTC", network: "Litecoin" },
            row6: { crypto: "XRP", network: "Ripple" },
          },
        },
        steps: {
          title: "入金手順",
          items: [
            "ウォレットページへ移動: ログイン後、ダッシュボードから「ウォレット」セクションにアクセスします。",
            "入金を選択: 「入金」タブを選び、入金したい暗号資産を選択します。",
            "ネットワークの選択: 対応するネットワーク（例: ERC20, TRC20）を選択します。",
            "入金アドレスの確認: 表示された専用の入金アドレスをコピーするか、QRコードをスキャンします。このアドレス宛に、お持ちの外部ウォレットまたは取引所から暗号資産を送金してください。",
          ],
          note: {
            label: "重要:",
            text: "各暗号資産には、それぞれ専用の入金アドレスが割り当てられています。必ず正しいアドレスに送金してください。",
          },
        },
        timing: {
          title: "確認回数と反映時間",
          intro:
            "ブロックチェーン上での取引は、複数の「確認（Confirmation）」を経て承認されます。入金がお客様のアカウントに反映されるまでの時間は、ネットワークの混雑状況や必要な確認回数によって異なります。",
          items: [
            "標準的な反映時間: 通常、送金後5分から30分程度でアカウントに反映されます。",
            "確認回数: 各ネットワークで定められた確認回数に達すると、入金が完了します。",
          ],
        },
        troubleshooting: {
          title: "入金遅延時のトラブルシューティング",
          intro:
            "入金が30分以上経っても反映されない場合は、以下の点をご確認ください。",
          steps: [
            "送金ステータスの確認: ご利用の外部ウォレットや取引所で、送金が正常に完了しているか確認してください。",
            "トランザクションID（TXID）の確認: ブロックチェーンエクスプローラー（例: Etherscan, Tronscan）を使用して、トランザクションID（TXID）で取引の状況を追跡します。",
            "アドレスとネットワークの再確認: 送金先のアドレスと選択したネットワークが正しかったか、再度確認してください。",
          ],
          contact:
            "上記を確認しても問題が解決しない場合は、以下の情報を添えてサポートチームまでご連絡ください。",
          items2: [
            "トランザクションID（TXID）",
            "送金した暗号資産の種類と数量",
            "送金日時",
          ],
          email: "サポートメール: support@1540bo.io",
        },
        relatedLinks: {
          title: "関連リンク",
          withdrawal: "ウォレット - 出金・コンプライアンス",
          trading: "取引ガイド",
        },
      },
      withdrawal: {
        title: "ウォレット - 出金・コンプライアンス",
        intro:
          "1540BOでは、安全かつ迅速な出金処理を最優先事項としています。このページでは、出金の必要条件、処理時間、およびコンプライアンスに関する重要な情報について説明します。",
        updated: "最終更新日: 2025年12月08日",
        requirements: {
          title: "出金の必要条件",
          intro:
            "スムーズな出金処理のため、以下の条件を満たしていることを事前にご確認ください。",
          table: {
            conditionHeader: "条件",
            detailHeader: "詳細",
            row1: {
              condition: "本人確認（KYC）の完了",
              detail:
                "すべてのユーザーは、初回の出金前に本人確認（KYC）手続きを完了する必要があります。これは、不正行為を防止し、アカウントのセキュリティを確保するためです。",
            },
            row2: {
              condition: "最小出金額",
              detail:
                "各暗号資産には、最小出金額が設定されています。出金申請額がこの額を下回ることはできません。",
            },
            row3: {
              condition: "取引量要件",
              detail:
                "ボーナスを受け取った場合など、特定の条件下で最低取引量を満たす必要がある場合があります。詳細はプロモーションの利用規約をご確認ください。",
            },
          },
        },
        timing: {
          title: "出金処理時間",
          intro:
            "出金申請は、当社の財務チームによって順次処理されます。セキュリティチェック完了後、暗号資産は指定されたウォレットアドレスに送金されます。",
          items: [
            "標準処理時間: 通常、出金申請から24時間以内に処理が完了します。",
            "ネットワーク時間: ブロックチェーンのネットワーク状況によっては、着金までにさらに時間がかかる場合があります。",
          ],
          note: {
            label: "即日出金対応:",
            text: "1540BOは即日出金に対応しており、ほとんどの場合、数時間以内に出金処理が完了します。",
          },
        },
        holds: {
          title: "出金保留時の対応",
          intro:
            "出金申請が「保留」ステータスになる場合があります。これは、追加のセキュリティ確認が必要な場合や、登録情報に不備がある場合などに発生します。",
          reasons: "主な保留理由:",
          items: [
            "高額な出金申請",
            "通常とは異なるIPアドレスからのアクセス",
            "登録情報と出金先ウォレット情報が一致しない",
          ],
          contact:
            "出金が保留された場合は、サポートチームから登録メールアドレス宛にご連絡いたします。指示に従い、必要な情報をご提供ください。",
        },
        fees: {
          title: "出金手数料",
          text: "出金時には、ブロックチェーンネットワークに支払うための手数料（マイナーフィー）が発生します。この手数料は、ネットワークの混雑状況に応じて変動します。出金申請画面にて、最新の手数料をご確認いただけます。",
        },
        contact: {
          title: "お問い合わせ",
          text: "出金に関するご質問や問題が発生した場合は、いつでもサポートチームにご連絡ください。",
          email: "サポートメール: support@1540bo.io",
        },
        relatedLinks: {
          title: "関連リンク",
          deposit: "ウォレット - 入金・反映手順",
          account: "アカウント - 登録とセキュリティ",
        },
      },
      affiliate: {
        title: "パートナー - アフィリエイト運用プレイブック",
        intro:
          "1540BOのアフィリエイトプログラムは、業界最高水準の報酬体系と、透明性の高いトラッキングシステムを提供します。このプレイブックでは、アフィリエイトの申請から運用、そして収益の最大化までをサポートします。",
        updated: "最終更新日: 2025年12月08日",
        overview: {
          title: "アフィリエイトプログラムの概要",
          intro:
            "当プログラムに参加することで、紹介したユーザーの取引活動に応じて継続的なコミッションを得ることができます。ブロガー、インフルエンサー、ウェブサイト運営者など、デジタルマーケティングに携わるすべての方に最適なプログラムです。",
          table: {
            featureHeader: "特徴",
            detailHeader: "詳細",
            row1: {
              feature: "高いコミッション率",
              detail:
                "紹介されたユーザーの取引量に基づき、競争力のある報酬を提供します。",
            },
            row2: {
              feature: "リアルタイムトラッキング",
              detail:
                "専用ダッシュボードで、クリック数、登録者数、アクティブトレーダー数、そして発生したコミッションをリアルタイムで確認できます。",
            },
            row3: {
              feature: "豊富なマーケティング素材",
              detail:
                "バナー、ランディングページ、プロモーション記事など、コンバージョン率の高いマーケティング素材を自由にご利用いただけます。",
            },
            row4: {
              feature: "専任のサポート",
              detail:
                "アフィリエイト運用に関するご質問や相談に対応するため、専任のアカウントマネージャーがサポートします。",
            },
          },
        },
        flow: {
          title: "運用フロー",
          steps: [
            "申請と審査: 公式サイトのアフィリエイトページから申請フォームを送信してください。当社のチームが申請内容を審査し、通常3営業日以内に結果をご連絡します。",
            "トラッキングとプロモーション: 承認後、あなた専用のアフィリエイトコード（トラッキングリンク）が発行されます。ウェブサイト、ブログ、SNSなどでこのリンクを共有し、新規ユーザーを1540BOに誘導します。",
            "コミッションの獲得と精算: 紹介したユーザーが取引を開始すると、その取引量に応じてコミッションが発生します。コミッションは毎月集計され、指定された暗号資産ウォレットに自動的に支払われます。",
          ],
        },
        compliance: {
          title: "遵守事項",
          intro:
            "アフィリエイトプログラムの健全な運営のため、以下の事項を遵守してください。",
          items: [
            "虚偽・誇大な広告の禁止: ユーザーを誤解させるような表現や、利益を保証するような宣伝は固く禁じられています。",
            "スパム行為の禁止: 無差別なメール送信や、関連性のないウェブサイトへのコメント投稿など、スパムと見なされる行為は禁止です。",
            "自己アフィリエイトの禁止: 自身の取引に対してコミッションを得ることはできません。",
          ],
          warning: {
            label: "注意:",
            text: "規約違反が確認された場合、アフィリエイト資格の停止や、発生したコミッションの没収といった措置が取られることがあります。",
          },
        },
        contact: {
          title: "お問い合わせ",
          text: "アフィリエイトプログラムに関するご質問は、以下までお問い合わせください。",
          email: "アフィリエイトサポート: partners@1540bo.io",
        },
        relatedLinks: {
          title: "関連リンク",
          resources: "リソース - その他の運営情報",
        },
      },
      other: {
        title: "リソース - その他の運営情報",
        intro:
          "このページでは、1540BOを最大限に活用するための追加情報やツール、そしてお客様が安心して取引に取り組めるためのサポート体制についてご案内します。",
        updated: "最終更新日: 2025年12月08日",
        tips: {
          title: "トップゲーム活用術",
          intro:
            "バイナリーオプション取引で成功を収めるためには、戦略的なアプローチが不可欠です。以下に、初心者から上級者まで役立つ基本的な活用術を紹介します。",
          items: [
            "トレンドフォロー戦略: 価格チャートを分析し、上昇トレンドまたは下降トレンドが明確な場合に、その方向に沿って「コール」または「プット」を選択する基本的な戦略です。",
            "テクニカル分析の活用: 移動平均線（Moving Average）や相対力指数（RSI）などのテクニカル指標を利用して、市場の過熱感や転換点を判断します。",
            "経済ニュースの注視: 主要な経済指標の発表や金融ニュースは、市場価格に大きな影響を与える可能性があります。取引前に経済カレンダーを確認する習慣をつけましょう。",
          ],
        },
        responsible: {
          title: "責任ある取引",
          intro:
            "1540BOは、お客様が健全な取引活動を継続できるよう、「責任ある取引」を推進しています。取引が生活に悪影響を及ぼすことがないよう、以下のツールやリソースをご活用ください。",
          table: {
            toolHeader: "ツール・リソース",
            descHeader: "説明",
            row1: {
              tool: "資金管理ガイド",
              desc: "日次・週次の取引上限を自分で決めるためのチェックリストです。担当マネージャーと共有し、計画的に見直しましょう。",
            },
            row2: {
              tool: "アカウントの一時停止",
              desc: "一定期間、取引を休息したい場合は、アカウントを一時的に停止するオプションを利用できます。",
            },
            row3: {
              tool: "相談窓口",
              desc: "取引に関する悩みを抱えている場合は、専門のカウンセリング機関への相談をお勧めします。詳細はサポートチームまでお問い合わせください。",
            },
          },
          warning: {
            label: "警告:",
            text: "バイナリーオプション取引は、高いリターンが期待できる一方で、投資元本を失うリスクも伴います。余剰資金の範囲内で、慎重に取引を行ってください。",
          },
        },
        support: {
          title: "サポート体制",
          intro:
            "お客様が抱える問題や疑問を迅速に解決するため、1540BOでは24時間体制のカスタマーサポートを提供しています。",
          tips: "お問い合わせの際のヒント:",
          text: "問題をより早く解決するために、お問い合わせの際は以下の情報を可能な限りご提供ください。",
          items: [
            "スクリーンショット: 問題が発生している画面のキャプチャ",
            "トランザクションID（TXID）: 入出金に関する問題の場合",
            "発生日時: 問題が起きた正確な時刻",
          ],
          email: "サポートメール: support@1540bo.io",
        },
        relatedLinks: {
          title: "関連リンク",
          faq: "よくある質問（FAQ）",
          terms: "利用規約",
        },
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
      subtitle:
        "ブルームバーグ・コインテレグラフ・コインマーケットキャップ・その他の暗号資産NEWSをチェック",
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
        "Galactic-triablazers Ltd\nSea Urchin Street, San Pedro, Ambergris Caye, Belize\nRegulated by BVP-FX-23Q2-K7N9-M3",
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
      vipTitle: "1540BO | โปรแกรมวีไอพี",
      termsTitle: "1540BO | ข้อกำหนดการให้บริการ",
      privacyTitle: "1540BO | นโยบายความเป็นส่วนตัว",
      helpTitle: "1540BO | ศูนย์ช่วยเหลือ",
      helpAccountTitle: "1540BO | ศูนย์ช่วยเหลือบัญชี",
      helpTradingTitle: "1540BO | ศูนย์ช่วยเหลือการเทรด",
      helpDepositTitle: "1540BO | ศูนย์ช่วยเหลือการฝาก",
      helpWithdrawalTitle: "1540BO | ศูนย์ช่วยเหลือการถอน",
      helpAffiliateTitle: "1540BO | ศูนย์ช่วยเหลือพันธมิตร",
      helpOtherTitle: "1540BO | ศูนย์ช่วยเหลืออื่นๆ",
      providerTitle: "1540BO | โซลูชันผู้ให้บริการ",
    },
    nav: {
      login: "เข้าสู่ระบบ",
      features: "จุดเด่น",
      affiliate: "พันธมิตร",
      provider: "ผู้ให้บริการ",
      vip: "โปรแกรมวีไอพี",
      terms: "ข้อกำหนดการใช้บริการ",
      privacy: "นโยบายความเป็นส่วนตัว",
      help: "ศูนย์ช่วยเหลือ",
      support: "บริการ",
    },
    cta: {
      demo: "ทดลองบัญชีเดโม",
      start: "เปิดบัญชีจริง",
    },
    supportForm: {
      badge: "ซัพพอร์ต 24/7",
      title: "ติดต่อฝ่ายซัพพอร์ต",
      subtitle:
        "กรอกแบบฟอร์มนี้แล้วระบบจะเปิดอีเมลถึง support@1540bo.io พร้อมข้อมูลที่คุณระบุ",
      fields: {
        name: "ชื่อ-นามสกุล",
        email: "อีเมลสำหรับติดต่อกลับ",
        account: "Account ID / UID (ไม่บังคับ)",
        topic: "หัวข้อ",
        subject: "หัวข้อเพิ่มเติม (ไม่บังคับ)",
        message: "รายละเอียดข้อความ",
      },
      topics: {
        general: "คำถามทั่วไป",
        account: "บัญชี / KYC",
        payments: "การฝาก-ถอน",
        vip: "VIP / รางวัล",
        provider: "โปรแกรมผู้ให้บริการ",
      },
      subjects: {
        general: "คำขอซัพพอร์ตทั่วไป",
        account: "ขอความช่วยเหลือเกี่ยวกับบัญชี",
        payments: "ขอความช่วยเหลือด้านการชำระเงิน",
        vip: "คำขอถึง VIP Desk",
        provider: "สอบถามโปรแกรมผู้ให้บริการ",
      },
      note: "การแนบ TXID เวลาที่เกิดเหตุ หรือสกรีนช็อตจะช่วยให้ตรวจสอบได้เร็วขึ้น",
      disclaimer:
        "เมื่อกดส่ง ระบบจะเปิดอีเมลไคลเอนต์เพื่อให้คุณตรวจและส่งข้อความไปยัง support@1540bo.io",
      submit: "เปิดหน้าต่างอีเมล",
      close: "ปิดฟอร์มซัพพอร์ต",
    },
    help: {
      detail: {
        back: "กลับไปหน้าสารบัญศูนย์ช่วยเหลือ",
      },
      index: {
        hero: {
          badge: "ศูนย์ช่วยเหลือ",
          title: "หาคู่มือ 1540BO ที่ต้องการได้ภายในไม่กี่วินาที",
          subtitle:
            "มีขั้นตอนทีละขั้นสำหรับการสมัคร การเทรด การจัดการวอลเล็ต และงานพันธมิตร",
          note: "เลือกหมวดเพื่อเปิดเช็กลิสต์ ภาพหน้าจอ และเส้นทางเอสคาเลชันแบบละเอียด",
          meta: "อัปเดต 11 ธ.ค. 2025 · รองรับ EN / 日本語 / ไทย",
          cta: "เปิดดูคู่มือ",
        },
        panel: {
          title: "ก่อนติดต่อฝ่ายสนับสนุน",
          items: [
            "ตรวจสอบว่าเข้าสู่ระบบด้วยบัญชีและเน็ตเวิร์กที่ถูกต้อง",
            "เตรียมสกรีนช็อต TXID และเวลาที่เกิดเหตุเพื่อให้ตรวจสอบได้เร็ว",
            "ใช้หน้าลูกสำหรับ KYC ฝาก ถอน หรือรายได้พันธมิตร",
          ],
          note: "ทำตามนี้มักแก้ปัญหาได้โดยไม่ต้องรอเจ้าหน้าที่",
        },
        catalog: {
          heading: "เลือกหมวดความช่วยเหลือ",
          subtitle:
            "ทุกการ์ดเปิดบทความที่มีเช็กลิสต์ คำถามพบบ่อย และช่องทางเอสคาเลชัน",
        },
        cards: {
          account: {
            eyebrow: "บัญชี",
            title: "ลงทะเบียนและความปลอดภัย",
            body: "รวมขั้นตอน KYC การดูแลอุปกรณ์ และการกู้คืนบัญชีที่ถูกล็อก",
            cta: "เปิดดูรายละเอียด",
          },
          trading: {
            eyebrow: "การเทรด",
            title: "เวิร์กโฟลว์บอปชัน",
            body: "ทัวร์เลย์เอาท์ Top Game พร้อมขั้นตอนสร้างตั๋วและการจัดการความเสี่ยง",
            cta: "อ่านคู่มือ",
          },
          deposit: {
            eyebrow: "วอลเล็ต",
            title: "การฝากและการบันทึกยอด",
            body: "สกุลเงิน/เน็ตเวิร์กที่รองรับ เวลาคอนเฟิร์ม และวิธีตามเคสดีเลย์",
            cta: "ดูขั้นตอน",
          },
          withdrawal: {
            eyebrow: "วอลเล็ต",
            title: "การถอนและคอมพลายแอนซ์",
            body: "เงื่อนไข ไทม์ไลน์ และข้อมูลที่ต้องส่งเมื่อการถอนค้าง",
            cta: "เช็กลิสต์",
          },
          affiliate: {
            eyebrow: "พันธมิตร",
            title: "การดำเนินงานพันธมิตร",
            body: "เกณฑ์สมัคร การติดตาม รายงาน และข้อห้าม",
            cta: "เปิดเพลย์บุ๊ก",
          },
          other: {
            eyebrow: "ทรัพยากร",
            title: "เครื่องมือเพิ่มเติม",
            body: "รวมทรัพยากรเพื่อการเทรดอย่างรับผิดชอบ ฟีดสถานะ และทิปในแอป",
            cta: "ดูทั้งหมด",
          },
        },
        support: {
          heading: "ยังต้องการความช่วยเหลือแบบส่วนตัว?",
          body: "ทีม Ops เฝ้า support@1540bo.io ตลอด 24 ชม. โปรดแนบสกรีนช็อต TXID และเวลาเพื่อให้ตอบกลับเร็วที่สุด",
          cta: "อีเมล support@1540bo.io",
          secondary: "ดูช่องทางติดต่อ",
        },
      },
      account: {
        hero: {
          badge: "บัญชี",
          title: "เช็กลิสต์สมัครและยืนยันตัวตน",
          subtitle:
            "ทำขั้นตอนเหล่านี้ก่อนเติมเงิน ทุกขั้นตรงกับ flow บนหน้าท็อปเกม",
          meta: "เดสก์ท็อปและโมบาย",
        },
        sections: [
          {
            heading: "สิ่งที่ต้องเตรียม",
            text: "เตรียมครบ onboarding จะใช้เวลาไม่ถึง 5 นาที",
            items: [
              "บัตรประชาชน/พาสปอร์ตที่ตรงกับประเทศที่เลือกและรูปเซลฟี",
              "อีเมลหรือเบอร์ที่ไม่เคยใช้ใน 1540BO",
              "แอปยืนยันตัวตนบนอุปกรณ์ที่ปลอดภัย",
            ],
          },
          {
            heading: "สมัครตามลำดับที่ถูกต้อง",
            text: "ทำตาม flow เดียวกับ https://1540bo.io/auth/login (กด “Create account”)",
            items: [
              "กรอกอีเมล+รหัสผ่านและยอมรับประกาศความเสี่ยง",
              "กรอกรหัส OTP ภายใน 10 นาทีเพื่อไม่ให้เซสชันหมด",
              "กรอกโปรไฟล์สั้น ๆ (ประเทศ โค้ดแนะนำ ไทม์โซน)",
              "เปิด 2FA ทันที มิฉะนั้นหน้าถอนจะถูกล็อก",
            ],
          },
          {
            heading: "ยกระดับความปลอดภัย",
            text: "ป้องกันยอดเงินและรางวัลอ้างอิง",
            items: [
              "ลงทะเบียนอุปกรณ์ที่เชื่อถือได้อย่างน้อย 2 เครื่องและทบทวนทุกเดือน",
              "ใช้ passkey/ไบโอเมตริกบน Safari หรือ Chrome เมื่อระบบแนะนำ",
              "ไม่แชร์ API key หรือคุกกี้เซสชันกับเครื่องมือภายนอก",
            ],
          },
          {
            heading: "ลำดับการปลดล็อกฟีเจอร์",
            text: "รู้ว่าแต่ละระดับให้สิทธิ์อะไร",
            items: [
              "ระดับ 1 (อีเมล+โทร) ใช้เดโมได้ทันที",
              "ระดับ 2 (เอกสาร+เซลฟี) ปลดล็อกฝาก/ถอนภายใน ~15 นาที",
              "ระดับ 3 (หลักฐานที่อยู่) ต้องใช้เมื่อมียอดเกิน 50,000 USDT ต่อเดือน",
            ],
          },
        ],
        callout: {
          title: "ต้องการให้ทีมตรวจ KYC แบบแมนนวล?",
          body: "แนบ UID อีเมล และลิงก์ไฟล์ที่เข้ารหัสเพื่อให้ตรวจได้รวดเร็ว",
          cta: "อีเมลทีม KYC",
        },
      },
      trading: {
        hero: {
          badge: "การเทรด",
          title: "เวิร์กโฟลว์ไบนารี่ออปชัน",
          subtitle:
            "ผูกทุกขั้นตั้งแต่เลือกสินทรัพย์ไปจนถึง audit หลังจบตามหน้าท็อปเกม",
          meta: "Ticket v4.2 · เดสก์ท็อป/โมบาย",
        },
        sections: [
          {
            heading: "เข้าใจเลย์เอาท์",
            text: "UI Top Game แบ่งข้อมูลเป็น 3 คอลัมน์",
            items: [
              "ซ้าย: รายการสินทรัพย์ รายการโปรด และแท็กความผันผวน",
              "กลาง: กราฟ pulse ตัวเลือกหมดอายุ และปุ่ม Call/Put",
              "ขวา: ประวัติโพสิชันพร้อมสถานะปิด มัลติเพลเยอร์ และ UID",
            ],
          },
          {
            heading: "สร้างตั๋วอย่างแม่นยำ",
            text: "ตรวจเช็กกฎเหล่านี้ก่อนกดซื้อ",
            items: [
              "เลือกเวลาหมดอายุก่อน (15/30/60 วินาทีหรือกำหนดเอง)",
              "ใส่จำนวนเงิน ตรวจสอบ % ผลตอบแทน แล้วค่อยเลือก Call/Put",
              "ใช้ sentiment meter และ depth เพื่อเลี่ยงฝั่งที่หนาแน่นผิดปกติ",
            ],
          },
          {
            heading: "ควบคุมความเสี่ยง",
            text: "รักษา bankroll และข้อมูลตรวจสอบ",
            items: [
              "จำกัดความเสี่ยงไม่เกิน 2% ของทุนแต่ละเซสชันต่อโพสิชัน",
              "ติดป้าย Notes > Strategy เพื่อคัดกรองกลยุทธ์ที่เวิร์ก",
              "พักทันทีเมื่อ latency เกิน 300 มิลลิวินาที (ตัวบอกสถานะเป็นสีเหลือง)",
            ],
          },
          {
            heading: "ตรวจสอบทุกเซสชัน",
            text: "ทำให้การโต้แย้งง่ายและเร็ว",
            items: [
              "ดาวน์โหลด CSV จาก History > Export เมื่อจบวัน",
              "เทียบรหัสแฮชการตัดสินกับ transparency feed หากพบความผิดปกติ",
              "ถ้ามี anomaly ให้ส่งอีเมล support@1540bo.io ภายใน 12 ชม.",
            ],
          },
        ],
        callout: {
          title: "อยากขยายลิมิตหรือกำหนดหมดอายุพิเศษ?",
          body: "VIP desk ช่วยปลดลิมิต เพิ่ม stake สูง และจัดรีวิวความเสี่ยงแบบเจาะจง",
          cta: "ดูสิทธิ์ VIP",
        },
      },
      deposit: {
        hero: {
          badge: "วอลเล็ต",
          title: "คู่มือการฝากและการบันทึกยอด",
          subtitle: "ใช้ช่องทาง on-chain อย่างปลอดภัยและเตรียมหลักฐานให้พร้อม",
          meta: "Wallet v3",
        },
        sections: [
          {
            heading: "ช่องทางที่รองรับ",
            text: "เลือกวิธีที่ตรงกับการดูแลสินทรัพย์ของคุณ",
            items: [
              "คริปโต: USDT-TRC20, BTC, ETH, TRX, XRP, LTC",
              "ฟิอัต/สเตเบิล ผ่าน OTC ที่ได้รับอนุมัติ (ติดต่อทีม)",
              "ขั้นต่ำ 10 USDT หรือเทียบเท่า",
            ],
          },
          {
            heading: "ขั้นตอนฝาก",
            text: "ทุกครั้งต้องคัดลอกที่อยู่ใหม่จาก Wallet > Deposit",
            items: [
              "เลือกสินทรัพย์และเครือข่าย สร้างที่อยู่ใช้ครั้งเดียว",
              "ส่งจากวอลเล็ตของคุณเองและบันทึก TXID",
              "รอจำนวนคอนเฟิร์มที่ระบบกำหนด (TRON 1 บล็อก / ETH 2 บล็อก)",
              "หาก 30 นาทีแล้วยังไม่เข้า ค่อยเปิดเคส",
            ],
          },
          {
            heading: "แนวทางที่ดีที่สุด",
            text: "ลดการตรวจสอบและความล่าช้า",
            items: [
              "โอนจากวอลเล็ตที่ควบคุมเองเท่านั้น—exchange บางแห่งปล่อยแฮชช้า",
              "อย่าส่งข้ามเครือข่าย (ERC20 ไป TRC20 จะกู้คืนไม่ได้)",
              "ยอดใหญ่ควรทำธุรกรรมทดสอบเล็กก่อน",
            ],
          },
          {
            heading: "เมื่อยอดยังไม่อัปเดต",
            text: "เตรียมข้อมูลเหล่านี้ก่อนคุยกับทีม Ops",
            items: [
              "TXID + สกรีนช็อตจาก blockchain explorer + จำนวนเงิน",
              "สกรีนช็อตวอลเล็ตที่แสดงสถานะ Sent พร้อมเวลา",
              "ยืนยันว่าที่อยู่ฝากรอบล่าสุดเป็นที่อยู่ใหม่",
            ],
          },
        ],
        callout: {
          title: "ต้องการ whitelist วอลเล็ตดีลเลอร์?",
          body: "ส่งที่อยู่ cold wallet หลักฐานการเป็นเจ้าของ และเพดานรายวันที่ต้องการให้ทีม Ops อนุมัติ",
          cta: "ติดต่อทีมวอลเล็ต",
        },
      },
      withdrawal: {
        hero: {
          badge: "วอลเล็ต",
          title: "คู่มือการถอนและการตรวจสอบ",
          subtitle: "รู้เงื่อนไขและ SLA ก่อนส่งคำร้อง",
          meta: "ผู้ใช้ระดับมาตรฐาน",
        },
        sections: [
          {
            heading: "ตรวจสอบก่อนยื่น",
            text: "ต้องครบถ้วนก่อนระบบจะอนุมัติ",
            items: [
              "KYC ระดับ 2 ผ่านแล้ว",
              "เปิด 2FA และตั้งรหัสถอน",
              "มีที่อยู่วอลเล็ตส่วนตัว (ไม่ใช่ที่อยู่ฝากของ exchange)",
            ],
          },
          {
            heading: "ขั้นตอนส่งคำขอ",
            text: "ทำใน Wallet > Withdraw",
            items: [
              "เลือกสินทรัพย์+เครือข่าย กรอกที่อยู่ (และ Memo/Tag หากต้องใช้)",
              "ใส่จำนวน ตรวจสอบค่าธรรมเนียมที่ระบบแสดง",
              "ยืนยันผ่าน 2FA และรหัส OTP ที่ส่งอีเมล",
            ],
          },
          {
            heading: "เวลาและลิมิต",
            text: "เข้าใจ SLA ก่อนติดตาม",
            items: [
              "เวลาตรวจมาตรฐาน 5–30 นาที",
              "คำขอเกิน 10,000 USDT อาจต้องวิดีโอคอลยืนยัน",
              "ลิมิตถอนได้ต่อวันรีเซ็ต 00:00 UTC ตามระดับ VIP",
            ],
          },
          {
            heading: "ถ้าถูกถือ",
            text: "ตอบกลับไวเพื่อรักษาคิว",
            items: [
              "ตรวจอีเมลว่ามีคำขอเอกสารหรือไม่ (ID / source of funds)",
              "ส่งเอกสารที่ขอภายใน 24 ชั่วโมง",
              "หาก 12 ชม. ยังไม่คืบหน้า ค่อยอีเมล payout@1540bo.io",
            ],
          },
        ],
        callout: {
          title: "อยากใช้เลนตรวจแบบด่วน?",
          body: "ลูกค้า VIP ระดับ 10 ขึ้นไปสามารถขอเลนถอนเฉพาะและที่อยู่ที่อนุมัติล่วงหน้า",
          cta: "อีเมลทีม payout",
        },
      },
      affiliate: {
        hero: {
          badge: "พันธมิตร",
          title: "เพลย์บุ๊กการดำเนินงานพันธมิตร",
          subtitle: "ทบทวนกฎและเช็กลิสต์ก่อนส่งทราฟฟิกเข้า 1540BO",
          meta: "Bet-share · 9 ระดับ",
        },
        sections: [
          {
            heading: "เตรียมตัวก่อนสมัคร",
            text: "พิสูจน์ว่าคุณส่งทราฟฟิกได้อย่างถูกกฎหมาย",
            items: [
              "อ่านข้อกำหนดพันธมิตรฉบับเต็ม",
              "ลิสต์ช่องทางที่คุณควบคุม (เว็บ โซเชียล สื่อโฆษณา)",
              "ยืนยันว่าปิดกั้นพื้นที่ต้องห้ามได้",
            ],
          },
          {
            heading: "การติดตามและแอสเซท",
            text: "ปฏิบัติตามไกด์ไลน์แบรนด์",
            items: [
              "ใช้ลิงก์ติดตามที่ออกจากแดชบอร์ดของคุณเองเท่านั้น",
              "โหลดแบนเนอร์จาก CDN อย่างเป็นทางการเพื่อรับอัปเดตอัตโนมัติ",
              "วาง badge คอมพลายแอนซ์และดีสคลเมอร์ข้าง CTA ทุกครั้ง",
            ],
          },
          {
            heading: "รายงานและการจ่าย",
            text: "รู้สูตรคำนวณรายได้",
            items: [
              "รายงาน bet-share รายวันอัปเดต 08:00 UTC (T+2)",
              "เทียบจำนวนฝากกับ CRM ของคุณให้ตรงกับเกณฑ์ระดับ",
              "ตั้งวอลเล็ตและยอดขั้นต่ำได้ที่ Partner > Wallet",
            ],
          },
          {
            heading: "รั้วคอมพลายแอนซ์",
            text: "ฝ่าฝืนมีสิทธิโดนยึดรายได้",
            items: [
              "ห้ามใช้คำโฆษณาเช่น “การันตีชนะ” หรือ “ไร้ความเสี่ยง”",
              "ห้ามยิงโฆษณาไปยังผู้เยาว์หรือประเทศที่ถูกบล็อก",
              "ส่งครีเอทีฟใหม่ให้ตรวจอย่างน้อย 48 ชม. ก่อนปล่อย",
            ],
          },
        ],
        callout: {
          title: "ต้องการสื่อร่วมทำการตลาด?",
          body: "Partner Studio สามารถโลคัลไลซ์วิดีโอ อีเมล และแลนดิ้งเพจให้ตรงกับสไตล์ Top Game",
          cta: "อีเมล partners@1540bo.io",
        },
      },
      provider: {
        hero: {
          badge: "โซลูชันผู้ให้บริการ",
          title: "เปิดแบรนด์ไบนารี่ออปชันของคุณเองภายในไม่กี่สัปดาห์",
          subtitle:
            "ยกเอาสภาพคล่อง การจัดการความเสี่ยง และ UX หลายภาษาของ 1540BO ไปใช้ภายใต้แบรนด์ของคุณ ทีมเราดูแลองค์ประกอบหลักให้ทั้งหมด",
          bullets: [
          "รองรับคู่คริปโตยอดนิยมที่มีสภาพคล่องสูง",
            "ระบบฝากถอนหลายสกุลพร้อมเรลล์ on-chain",
            "เวิร์กโฟลว์ KYC/AML และ Responsible Trading ที่ตั้งค่าเรียบร้อย",
          ],
          meta: "มี SLA รับประกัน • กระบวนการพร้อม SOC2",
          ctaPrimary: "จองเดโม",
          ctaSecondary: "ดาวน์โหลดเอกสารความสามารถ",
          metrics: [
            { label: "เวลา go-live", value: "เฉลี่ย 6 สัปดาห์", desc: "ตั้งค่าแบรนด์ แคชเชียร์ และ VIP" },
            { label: "ตลาด", value: "คู่คริปโตยอดนิยม", desc: "โฟกัสสินทรัพย์ที่มีดีมานด์สูง" },
            { label: "ภาษา", value: "3 ภาษา", desc: "EN / 日本語 / ไทย" },
          ],
        },
        highlights: {
          heading: "เหตุผลที่ผู้ประกอบการเลือกเรา",
          cards: [
            {
              title: "สแตกการเทรดที่พิสูจน์แล้ว",
              body: "รูตคำสั่งระดับมิลลิวินาที สภาพคล่องลึก และเอนจินบริหารความเสี่ยงช่วยคุมสเปรดช่วงผันผวน",
            },
            {
              title: "โมดูลแคชเชียร์และรางวัล",
              body: "ใช้วอลเล็ต VIP และเครื่องมือโปรโมตของเรา หรือเชื่อมระบบที่มีอยู่ผ่าน API",
            },
            {
              title: "ที่ปรึกษาคอมพลายแอนซ์",
              body: "มีผู้ให้บริการ KYC แบบฟอร์มรายงาน และเส้นทางเอสคาเลชันพร้อมใช้งาน",
            },
          ],
        },
        architecture: {
          heading: "โมดูลที่ให้สิทธิ์ใช้งานได้",
          intro: "เลือกเฉพาะส่วนที่ต้องการ ไม่ว่าจะเป็นเอนจินเทรด แคชเชียร์ CRM หรือมาร์เก็ตติ้ง แล้วขยายตามแผน",
          modules: [
            {
              title: "แกนการเทรด",
              text: "ฟีดราคา ตัวสร้างตั๋ว และการควบคุมความเสี่ยง ตั้งเวลาได้ 15 วินาทีถึง 4 ชั่วโมง",
              points: [
                "แดชบอร์ดความเสี่ยง",
                "ฟีดความโปร่งใสและล็อกข้อพิพาท",
                "มอนิเตอร์ latency พร้อมเตือน",
              ],
            },
            {
              title: "วอลเล็ตและการชำระเงิน",
              text: "รองรับการฝากหลายเครือข่าย การคำนวณยอดอัตโนมัติ และเวิร์กโฟลว์อนุมัติถอน",
              points: [
                "USDT / TRX / BTC / ETH / LTC / XRP",
                "เทมเพลตนโยบาย cold wallet",
                "ชุดเทียบ TXID",
              ],
            },
            {
              title: "การเติบโต & CRM",
              text: "VIP ลำดับ 20 ระดับ ภารกิจ และเครื่องมือ broadcast",
              points: [
                "VIP ladder + โบนัส",
                "ตัวจัดตารางแคมเปญ",
                "การติดตามพันธมิตร/แคมเปญ",
              ],
            },
          ],
        },
        onboarding: {
          heading: "ขั้นตอนการเริ่ม",
          subtitle: "รู้ทุกไมล์สโตนตั้งแต่กำหนดสโคปจนเปิดให้บริการ",
          steps: [
            { title: "1. Discovery", desc: "กำหนดประเทศ สินค้า และโมดูลที่ต้องการ รับข้อเสนอภายใน 5 วันทำการ" },
            { title: "2. Solution Design", desc: "ล็อกแบรนด์ แคชเชียร์ และข้อมูลเชื่อม พร้อม sandbox ให้ทีม QA" },
            { title: "3. Compliance & Training", desc: "ตั้งค่า KYC เทมเพลตรายงาน และ runbook พร้อมอบรมทีม" },
            { title: "4. Launch & Optimise", desc: "ย้ายผู้เล่น เปิดฝากถอนจริง และปรับโปรแกรมกับทีม TAM" },
          ],
        },
        tiers: {
          heading: "แพ็กเกจ",
          subtitle: "เลือกโมเดลที่เหมาะกับแผนธุรกิจ",
          table: {
            headers: { tier: "แพ็กเกจ", focus: "เหมาะกับ", includes: "สิ่งที่ได้รับ" },
            rows: [
              { tier: "Essential", focus: "สตาร์ทอัปที่เปิดแบรนด์ครั้งแรก", includes: "เอนจินเทรด แคชเชียร์ VIP Web App และ SLA มาตรฐาน" },
              { tier: "Growth", focus: "ผู้ประกอบการที่ขยายภูมิภาค", includes: "ทุกอย่างใน Essential เพิ่มการจัดเส้นทาง KYC ระบบพันธมิตร และมาร์เก็ตติ้งอัตโนมัติ" },
              { tier: "Enterprise", focus: "กลุ่มธุรกิจที่ต้องการการเชื่อมต่อเฉพาะ", includes: "โครงสร้างพื้นฐานเฉพาะ ส่วนขยาย API playbook คอมพลายแอนซ์ และ TAM 24/7" },
            ],
          },
        },
        compliance: {
          heading: "คอมพลายแอนซ์ในตัว",
          intro: "เครื่องมือและเทมเพลตช่วยให้ผ่านข้อกำหนดได้เร็ว",
          items: [
            "การประสาน KYC/AML หลายผู้ให้บริการและการตรวจรายชื่อ",
            "เครื่องมือ Responsible Trading ที่ตั้งลิมิตและการเตือนได้",
            "ล็อกพร้อมตรวจสอบสำหรับข้อพิพาทและรายงาน",
            "runbook ด้านความปลอดภัยและทีมเอสคาเลชัน 24/7",
          ],
          note: "ต้องการรีวิวเชิงลึกสำหรับกฎท้องถิ่น? เราสามารถจัดทีมที่ปรึกษาให้ภายใต้สcope",
          support: {
            heading: "พูดคุยกับ Provider Desk",
            body: "ส่งข้อมูลธุรกิจมายัง support@1540bo.io แล้วเราจะนัดเวิร์กช็อปภายใน 72 ชั่วโมง",
          },
        },
        cta: {
          heading: "พร้อมสำรวจสัญญาผู้ให้บริการหรือยัง?",
          body: "แจ้งตลาดเป้าหมาย ปริมาณต่อเดือน และไทม์ไลน์ go-live เพื่อรับโมดูลและราคาเหมาะสม",
          primary: "ติดต่อ support@1540bo.io",
          secondary: "ดูเอกสารเทคนิค",
        },
      },
      other: {
        hero: {
          badge: "ทรัพยากร",
          title: "ทรัพยากรการปฏิบัติงานอื่น ๆ",
          subtitle:
            "รวมทิปส์ Top Game ฟีดสถานะ และเครื่องมือส่งเสริมการเทรดอย่างรับผิดชอบ",
          meta: "Live Ops Reference",
        },
        sections: [
          {
            heading: "ทิปส์สำหรับ Top Game",
            text: "ใช้ https://1540bo.io/top-game ให้เต็มประสิทธิภาพ",
            items: [
              "ใช้ตัวสลับ Top Game เพื่อย้ายห้องแนะนำได้ทันที",
              "การ์ดทัวร์นาเมนต์อัปเดตรายชั่วโมง—ตรวจทุกครั้งก่อนโปรโมต",
              "เมนูด้านล่างบนมือถือมี layout เหมือนเดสก์ท็อป",
            ],
          },
          {
            heading: "สถานะและการบำรุงรักษา",
            text: "แจ้งผู้เล่นล่วงหน้าได้ง่าย",
            items: [
              "บุ๊กมาร์ก status.1540bo.io และสมัครรับการแจ้งเตือน",
              "เข้าร่วม @bo1540_alert (Telegram/LINE) เพื่อรับ push",
              "ตรวจ log การเปลี่ยนแปลงหลังเมนเทนทุกครั้ง",
            ],
          },
          {
            heading: "ชุดเครื่องมือความรับผิดชอบ",
            text: "ช่วยผู้เล่นควบคุมจังหวะ",
            items: [
              "ตั้งลิมิตขาดทุนต่อวันใน Settings > Limits",
              "เปิดการเตือน reality check ทุก 30 นาทีในหน้าท็อปเกม",
              "แทรกลิงก์ microsite ความเสี่ยงในอีเมล onboarding",
            ],
          },
          {
            heading: "ชุดเครื่องมือซัพพอร์ต",
            text: "ให้ Ops ดีบักได้รวดเร็ว",
            items: [
              "ใช้ตัวอัปโหลดในแชทเพื่อส่ง HAR และสกรีนช็อต",
              'ติดแท็กตั๋วด้วย "/status" + UID เพื่อค้นหาได้ไว',
              "เหตุฉุกเฉินให้ส่งรายละเอียดไป security@1540bo.io",
            ],
          },
        ],
        callout: {
          title: "อัปเดตข่าวสารให้ทัน",
          body: "VIP broadcast channel แชร์ Ops note ปฏิทินแคมเปญ และประกาศฉุกเฉินก่อนใคร",
          cta: "เปิดข่าว VIP",
        },
      },
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
          intro:
            "พันธมิตรต้องโปรโมตบริการอย่างสุจริตและถูกกฎหมาย ห้ามดำเนินการที่ทำลายภาพลักษณ์หรือขัดต่อความสงบเรียบร้อย การกระทำต่อไปนี้ถือว่าถูกห้าม.",
          items: [
            "การกำหนดเป้าหมายหรือสื่อสารกับผู้เยาว์ (ผู้ที่อายุต่ำกว่ากฎหมายในถิ่นพำนัก).",
            "การส่งอีเมลสแปม ข้อความโดยไม่เลือก หรือการติดต่อที่ถือว่าเป็นการรบกวน.",
            'การใช้ข้อความเกินจริง เช่น "รับประกันชนะ" หรือ "ไร้ความเสี่ยง".',
            "การละเมิดทรัพย์สินทางปัญญาของบริษัทหรือบุคคลที่สาม.",
            "การแสดงตนเสมือนเป็น 1540bo.io หรืออ้างความเกี่ยวข้องโดยไม่มีสิทธิ์.",
          ],
          outro:
            "กิจกรรมโปรโมตทั้งหมดต้องปฏิบัติตามกฎหมาย ระเบียบ และแนวปฏิบัติที่เกี่ยวข้องในทุกเขตอำนาจ รวมถึงข้อกำหนดด้านโฆษณาและการพนัน.",
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
          outro:
            "หากตรวจพบการทุจริต บริษัทมีสิทธิตัดสิทธิ์พันธมิตรทันที ริบค่าตอบแทนที่ยังไม่จ่าย และเรียกคืนค่าตอบแทนที่เคยจ่ายไป.",
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
    vip: {
      hero: {
        badge: "VIP Program",
        title: "โปรแกรม VIP 20 ระดับเพื่อผู้เล่นที่เทรดจริงจัง",
        subtitle:
          "ไต่ระดับจากยอดเดิมพันสะสมเพื่อปลดล็อกเงินคืนรายวัน เงินคืนขาดทุนรายสัปดาห์/รายเดือน และโบนัสเลื่อนระดับแบบครั้งเดียว",
        ctaPrimary: "ขอสิทธิ์เข้าร่วม VIP",
        ctaSecondary: "ติดต่อฝ่ายสนับสนุน",
        card: {
          title: "โครงสร้างโปรแกรม",
          items: [
            "บันได VIP 20 ระดับอิงจากยอดเดิมพันสะสมทั้งหมด",
            "สิทธิประโยชน์ 4 ประเภท: เงินคืนรายวัน รายสัปดาห์ รายเดือน และโบนัสเลื่อนระดับ",
            "มีกฎ Active Boost และกฎดูแลสถานะรายเดือนเพื่อให้ผลตอบแทนสอดคล้องกับกิจกรรม",
          ],
        },
      },
      overview: {
        heading: "โครงสร้างรางวัล VIP",
        paragraphs: [
          "โปรแกรม VIP ให้รางวัลตามยอดเดิมพันสะสมทั้งหมด โดยกำหนด 20 ระดับที่เลื่อนให้โดยอัตโนมัติ",
          "เมื่อระดับสูงขึ้น อัตราเงินคืนและโบนัสจะเพิ่มขึ้น พร้อมการประเมินอัตโนมัติจากกิจกรรมและผลงานรายเดือน",
        ],
        points: [
          "5 ช่วงชั้น Bronze, Silver, Gold, Platinum และ Diamond โดยแต่ละช่วงมี 4 ระดับ",
          "รางวัล 4 ประเภททำงานพร้อมกัน: เงินคืนรายวัน รายสัปดาห์ รายเดือน และโบนัสเลื่อนระดับ",
          "มีกฎพิเศษ 2 ข้อ ได้แก่ Active Boost และเกณฑ์รักษาระดับรายเดือน",
        ],
      },
      rewards: {
        types: [
          {
            badge: "① Daily",
            title: "เงินคืนรายวัน (Wager Rakeback)",
            text: "คำนวณจากเปอร์เซ็นต์ที่ปลดล็อกแล้วคูณกับยอดเดิมพันรวมของวัน เพื่อคืนมูลค่าทันที",
          },
          {
            badge: "② Weekly",
            title: "เงินคืนขาดทุนรายสัปดาห์",
            text: "พิจารณาจากผลขาดทุนสุทธิรายสัปดาห์ และเพิ่ม +0.5% เมื่อผ่านเงื่อนไข Active Boost",
          },
          {
            badge: "③ Monthly",
            title: "เงินคืนขาดทุนรายเดือน",
            text: "คำนวณจากผลขาดทุนสุทธิรายเดือน พร้อมโอกาสรับ +1.0% ผ่านเงื่อนไข Active Boost รายเดือน",
          },
          {
            badge: "④ Rank-up",
            title: "โบนัสเลื่อนระดับ",
            text: "รับโบนัสเงินสดตามที่กำหนดครั้งเดียวเมื่อเลื่อนถึงแต่ละระดับครั้งแรก",
          },
        ],
        summary: {
          label: "Rewards",
          heading: "20 ระดับ & 4 ช่องทางรางวัล",
          text: "อัตราที่แสดงคำนวณจากยอดเดิมพันเงินสดและผลขาดทุนสุทธิ ยิ่งระดับสูง ยิ่งได้รับเงินคืนรายวัน รายสัปดาห์ รายเดือน และโบนัสเลื่อนระดับมากขึ้น",
          note: "เปอร์เซ็นต์ที่แสดงยังไม่รวม Active Boost โปรดอ่านกฎโปรแกรมสำหรับรายละเอียด",
        },
        table: {
          headers: {
            rank: "ระดับ",
            tier: "ช่วงชั้น",
            requirement: "ยอดเดิมพันสะสมเพื่อเลื่อนระดับ",
            bonus: "โบนัสเลื่อนระดับ",
            daily: "เงินคืนรายวัน",
            weekly: "เงินคืนรายสัปดาห์",
            monthly: "เงินคืนรายเดือน",
          },
          rows: [
            {
              rank: "1",
              tier: "บรอนซ์ 1",
              requirement: "$0",
              bonus: "-",
              daily: "0.10%",
              weekly: "3.5%",
              monthly: "1.5%",
            },
            {
              rank: "2",
              tier: "บรอนซ์ 2",
              requirement: "$2,500",
              bonus: "$2.5",
              daily: "0.12%",
              weekly: "4.0%",
              monthly: "1.5%",
            },
            {
              rank: "3",
              tier: "บรอนซ์ 3",
              requirement: "$5,000",
              bonus: "$2.5",
              daily: "0.14%",
              weekly: "4.5%",
              monthly: "2.0%",
            },
            {
              rank: "4",
              tier: "บรอนซ์ 4",
              requirement: "$10,000",
              bonus: "$5",
              daily: "0.16%",
              weekly: "5.0%",
              monthly: "2.0%",
            },
            {
              rank: "5",
              tier: "ซิลเวอร์ 1",
              requirement: "$25,000",
              bonus: "$15",
              daily: "0.18%",
              weekly: "5.5%",
              monthly: "2.5%",
            },
            {
              rank: "6",
              tier: "ซิลเวอร์ 2",
              requirement: "$50,000",
              bonus: "$25",
              daily: "0.20%",
              weekly: "6.0%",
              monthly: "2.5%",
            },
            {
              rank: "7",
              tier: "ซิลเวอร์ 3",
              requirement: "$100,000",
              bonus: "$50",
              daily: "0.23%",
              weekly: "6.5%",
              monthly: "3.0%",
            },
            {
              rank: "8",
              tier: "ซิลเวอร์ 4",
              requirement: "$200,000",
              bonus: "$100",
              daily: "0.26%",
              weekly: "7.0%",
              monthly: "3.0%",
            },
            {
              rank: "9",
              tier: "โกลด์ 1",
              requirement: "$350,000",
              bonus: "$150",
              daily: "0.30%",
              weekly: "7.5%",
              monthly: "3.5%",
            },
            {
              rank: "10",
              tier: "โกลด์ 2",
              requirement: "$500,000",
              bonus: "$150",
              daily: "0.34%",
              weekly: "8.0%",
              monthly: "3.5%",
            },
            {
              rank: "11",
              tier: "โกลด์ 3",
              requirement: "$750,000",
              bonus: "$250",
              daily: "0.38%",
              weekly: "8.5%",
              monthly: "4.0%",
            },
            {
              rank: "12",
              tier: "โกลด์ 4",
              requirement: "$1,000,000",
              bonus: "$250",
              daily: "0.42%",
              weekly: "9.0%",
              monthly: "4.0%",
            },
            {
              rank: "13",
              tier: "แพลทินัม 1",
              requirement: "$1,500,000",
              bonus: "$500",
              daily: "0.46%",
              weekly: "9.5%",
              monthly: "4.5%",
            },
            {
              rank: "14",
              tier: "แพลทินัม 2",
              requirement: "$2,000,000",
              bonus: "$500",
              daily: "0.50%",
              weekly: "10.0%",
              monthly: "5.0%",
            },
            {
              rank: "15",
              tier: "แพลทินัม 3",
              requirement: "$3,000,000",
              bonus: "$1,000",
              daily: "0.55%",
              weekly: "10.5%",
              monthly: "5.5%",
            },
            {
              rank: "16",
              tier: "แพลทินัม 4",
              requirement: "$5,000,000",
              bonus: "$2,000",
              daily: "0.60%",
              weekly: "11.0%",
              monthly: "6.0%",
            },
            {
              rank: "17",
              tier: "ไดมอนด์ 1",
              requirement: "$7,500,000",
              bonus: "$2,500",
              daily: "0.65%",
              weekly: "11.5%",
              monthly: "6.5%",
            },
            {
              rank: "18",
              tier: "ไดมอนด์ 2",
              requirement: "$10,000,000",
              bonus: "$2,500",
              daily: "0.70%",
              weekly: "12.0%",
              monthly: "7.0%",
            },
            {
              rank: "19",
              tier: "ไดมอนด์ 3",
              requirement: "$15,000,000",
              bonus: "$5,000",
              daily: "0.75%",
              weekly: "13.0%",
              monthly: "7.5%",
            },
            {
              rank: "20",
              tier: "ไดมอนด์ 4",
              requirement: "$25,000,000",
              bonus: "$10,000",
              daily: "0.80%",
              weekly: "14.0%",
              monthly: "8.0%",
            },
          ],
        },
      },
      rules: {
        heading: "กฎการใช้งาน",
        active: {
          label: "กฎข้อที่ 1",
          heading: "Active Boost",
          intro:
            "การมีกิจกรรมต่อเนื่องช่วยเพิ่มเปอร์เซ็นต์เงินคืนให้สูงกว่าตารางพื้นฐาน",
          weekly: {
            title: "Weekly Active Boost",
            detail:
              "วางเดิมพันอย่างน้อย $0.1 ใน 5 วันขึ้นไปภายในสัปดาห์เดียว จะได้รับ +0.5% เพิ่มเติมในเงินคืนรายสัปดาห์",
          },
          monthly: {
            title: "Monthly Active Boost",
            detail:
              "วางเดิมพันอย่างน้อย $0.1 ใน 20 วันขึ้นไปภายในเดือน จะได้รับ +1.0% เพิ่มเติมในเงินคืนรายเดือน",
          },
        },
        downgrade: {
          label: "กฎข้อที่ 2",
          heading: "การรักษาระดับ",
          intro:
            "เมื่อยอดเดิมพันสะสมถึงเกณฑ์ จะเลื่อนระดับทันที แต่การรักษาระดับจะตรวจสอบรายเดือน",
          bullets: [
            "เลื่อนระดับทันทีเมื่อยอดเดิมพันสะสมถึงเกณฑ์ถัดไป",
            "สิทธิ์ช่วงชั้นได้รับการคุ้มครอง เมื่อเข้าช่วงชั้นแล้วจะไม่ถูกลดลง",
            "ตรวจสอบสถานะในวันแรกของเดือนโดยใช้ยอดเดิมพันเดือนก่อนหน้า",
            "หากไม่ถึงเกณฑ์ จะลดระดับเฉพาะภายในช่วงชั้นนั้น และระดับ 1 คือขั้นต่ำ",
          ],
          reminder:
            "คำนวณเฉพาะยอดเดิมพันเงินสด ระดับ 1 ในช่วงชั้นที่เข้าถึงแล้วคือจุดต่ำสุดหลังการประเมิน",
        },
        maintenanceTable: {
          headers: {
            rank: "ระดับ",
            tier: "ช่วงชั้น",
            requirement: "ยอดเดิมพันรายเดือนเพื่อรักษาระดับ",
          },
          rows: [
            { rank: "1", tier: "บรอนซ์ 1", requirement: "$0" },
            { rank: "2", tier: "บรอนซ์ 2", requirement: "$100" },
            { rank: "3", tier: "บรอนซ์ 3", requirement: "$250" },
            { rank: "4", tier: "บรอนซ์ 4", requirement: "$500" },
            { rank: "5", tier: "ซิลเวอร์ 1", requirement: "$1,000" },
            { rank: "6", tier: "ซิลเวอร์ 2", requirement: "$2,500" },
            { rank: "7", tier: "ซิลเวอร์ 3", requirement: "$5,000" },
            { rank: "8", tier: "ซิลเวอร์ 4", requirement: "$10,000" },
            { rank: "9", tier: "โกลด์ 1", requirement: "$20,000" },
            { rank: "10", tier: "โกลด์ 2", requirement: "$30,000" },
            { rank: "11", tier: "โกลด์ 3", requirement: "$50,000" },
            { rank: "12", tier: "โกลด์ 4", requirement: "$75,000" },
            { rank: "13", tier: "แพลทินัม 1", requirement: "$100,000" },
            { rank: "14", tier: "แพลทินัม 2", requirement: "$150,000" },
            { rank: "15", tier: "แพลทินัม 3", requirement: "$200,000" },
            { rank: "16", tier: "แพลทินัม 4", requirement: "$300,000" },
            { rank: "17", tier: "ไดมอนด์ 1", requirement: "$500,000" },
            { rank: "18", tier: "ไดมอนด์ 2", requirement: "$750,000" },
            { rank: "19", tier: "ไดมอนด์ 3", requirement: "$1,000,000" },
            { rank: "20", tier: "ไดมอนด์ 4", requirement: "$1,500,000" },
          ],
        },
      },
      terms: {
        heading: "ข้อกำหนดโปรแกรม VIP",
        subtitle:
          "การเข้าร่วมโปรแกรมแสดงว่าคุณยอมรับข้อกำหนดนี้และข้อกำหนดการใช้งานเว็บไซต์",
        articles: [
          {
            label: "มาตรา 1",
            heading: "การเข้าร่วมโปรแกรม",
            items: [
              "ผู้เล่นที่ลงทะเบียนกับบริษัทจะถูกเพิ่มในโปรแกรมโดยอัตโนมัติ",
              "จำกัด 1 บัญชีต่อผู้เล่นต่อโปรแกรม",
              "บริษัทสงวนสิทธิ์ปฏิเสธหรือยกเลิกการเข้าร่วมตามดุลยพินิจ",
            ],
          },
          {
            label: "มาตรา 2",
            heading: "ระบบระดับ VIP",
            items: [
              "ประกอบด้วย 20 ระดับ แบ่งเป็นช่วงชั้น Bronze, Silver, Gold, Platinum และ Diamond โดยแต่ละช่วงมี 4 ระดับย่อย",
              "เลื่อนระดับโดยอัตโนมัติเมื่อยอดเดิมพันสะสมถึงเกณฑ์",
              "เมื่อเข้าสู่ช่วงชั้นแล้วจะไม่ถูกลดลงไปช่วงชั้นล่าง",
              "ตรวจสอบระดับในวันแรกของเดือนโดยใช้งานเดิมพันเดือนก่อนและตารางเกณฑ์รักษาระดับ",
            ],
          },
          {
            label: "มาตรา 3",
            heading: "ประเภทรางวัล",
            items: [
              "เงินคืนรายวัน: ใช้อัตราตามระดับคูณยอดเดิมพันรวมของวัน และเครดิตทุกวัน",
              "เงินคืนรายสัปดาห์: ใช้อัตราตามระดับคูณผลขาดทุนสุทธิรายสัปดาห์ (ยอดเดิมพันรวมลบยอดชนะ) และเครดิตตามรอบที่กำหนด",
              "เงินคืนรายเดือน: ใช้อัตราตามระดับคูณผลขาดทุนสุทธิรายเดือน และเครดิตตามรอบที่กำหนด",
              "โบนัสเลื่อนระดับ: เงินสดจำนวนคงที่เมื่อเลื่อนถึงระดับใหม่ครั้งแรก",
            ],
          },
          {
            label: "มาตรา 4",
            heading: "Active Boost",
            items: [
              "Weekly Active Boost: เดิมพันอย่างน้อย $0.1 ใน 5 วันขึ้นไปภายในสัปดาห์ เพิ่ม +0.5% ให้เงินคืนรายสัปดาห์",
              "Monthly Active Boost: เดิมพันอย่างน้อย $0.1 ใน 20 วันขึ้นไปภายในเดือน เพิ่ม +1.0% ให้เงินคืนรายเดือน",
            ],
          },
          {
            label: "มาตรา 5",
            heading: "เงื่อนไขรางวัล",
            items: [
              "เว้นแต่จะระบุเป็นอย่างอื่น การคำนวณจะใช้ยอดเดิมพันเงินสดและผลขาดทุนสุทธิจากเงินสด โบนัสอาจถูกตัดออก",
              "โบนัสเลื่อนระดับจะเครดิตเป็นโบนัสและอาจมีเงื่อนไขการทำเทิร์นหรือวันหมดอายุ",
              "บริษัทอาจกำหนดเงื่อนไขเพิ่มเติม เช่น ยอดหมุนเวียน ระยะเวลาใช้สิทธิ์ หรือเพดานจ่าย",
            ],
          },
          {
            label: "มาตรา 6",
            heading: "การกระทำที่ห้าม",
            items: [
              "ห้ามสร้างบัญชีหลายบัญชี ใช้ช่องโหว่ของระบบ สมรู้ร่วมคิด หรือการกระทำที่บริษัทเห็นว่าเป็นการทุจริต",
              "ห้ามวางเดิมพันผิดธรรมชาติที่มุ่งหวังสร้างรางวัลเท่านั้น เช่น การวนเดิมพันความเสี่ยงต่ำ",
              "หากพบการทุจริต บริษัทอาจตัดสิทธิ์ VIP ลดระดับ ยึดรางวัล หรือระงับบัญชี",
            ],
          },
          {
            label: "มาตรา 7",
            heading: "ข้อกำหนดทั่วไป",
            items: [
              "บริษัทอาจแก้ไข ระงับ หรือยุติโปรแกรม รวมถึงอัตรารางวัล ได้โดยไม่ต้องแจ้งล่วงหน้า",
              "การตัดสินของบริษัทเกี่ยวกับคุณสมบัติ การคำนวณ และการตีความถือเป็นที่สิ้นสุด",
              "หากข้อกำหนดนี้ขัดแย้งกับข้อกำหนดการใช้งานเว็บไซต์ ให้ยึดข้อกำหนดการใช้งานเป็นหลัก",
            ],
          },
        ],
      },
      update: {
        label: "อัปเดตล่าสุด",
        date: "11 พฤศจิกายน 2025",
        note: "รายละเอียดโปรแกรมอาจเปลี่ยนแปลงโดยไม่แจ้งล่วงหน้า โปรดติดตามประกาศอย่างเป็นทางการเสมอ",
      },
    },
    terms: {
      hero: {
        badge: "ข้อกำหนดการให้บริการ",
        title: "โปรดอ่านข้อกำหนดและความเสี่ยงก่อนเริ่มเทรดไบนารีออปชัน",
        subtitle:
          "ข้อกำหนดฉบับนี้กำหนดเงื่อนไขการใช้งาน 1540bo.io โปรดอ่านทุกบทอย่างละเอียด และทำการเทรดเมื่อคุณยอมรับข้อผูกพันและความเสี่ยงทั้งหมดแล้วเท่านั้น.",
        ctaPrimary: "ติดต่อทีมกำกับดูแล",
        ctaSecondary: "กลับไปศูนย์ช่วยเหลือ",
        alertTitle: "คำเตือนผลิตภัณฑ์ความเสี่ยงสูง",
        alertBody:
          "ไบนารี่ออปชันเป็นผลิตภัณฑ์ที่มีเลเวอเรจและจำกัดเวลา การละเมิดข้อกำหนดอาจนำไปสู่การระงับบัญชีและการสูญเสียเงินทุนทั้งหมด.",
      },
      overview: {
        heading: "แนวทางการอ่านข้อกำหนดนี้",
        paragraphs: [
          "เอกสารนี้เป็นสัญญาที่มีผลผูกพันทางกฎหมายระหว่างคุณกับ galactic-triablazers Ltd ซึ่งจดทะเบียนที่ Sea Urchin Street, San Pedro, Ambergris Caye, Belize เกี่ยวกับแพลตฟอร์มไบนารี่ออปชัน 1540bo.io.",
          "เมื่อใช้บริการถือว่าคุณยอมรับเงื่อนไขทุกข้อ หากไม่ยอมรับกรุณาอย่าสร้างหรือใช้งานบัญชี.",
        ],
        highlights: [
          "บทที่ 1 อธิบายคำจำกัดความของคำสำคัญและกรอบการตีความธุรกรรม.",
          "บทที่ 2 กำหนดหน้าที่ของผู้ใช้เกี่ยวกับการเปิดบัญชี การยืนยันตัวตน การปฏิเสธกลุ่มมิจฉาชีพ และการแจ้งเปลี่ยนแปลงข้อมูล.",
          "บทถัดไปกล่าวถึงวิธีการเทรด กฎการเงิน การเปิดเผยความเสี่ยง ข้อห้าม และกระบวนการจัดการข้อพิพาท.",
        ],
      },
      chapters: {
        chapter1: {
          label: "บทที่ 1",
          heading: "บททั่วไป",
          articles: {
            article1: {
              heading: "มาตรา 1 (วัตถุประสงค์ของข้อกำหนด)",
              body: [
                "ข้อกำหนดการใช้บริการฉบับนี้ (ต่อไปเรียกว่า “ข้อกำหนด”) กำหนดเงื่อนไขการใช้บริการเทรดไบนารี่ออปชัน “1540bo.io” (ต่อไปเรียกว่า “บริการ”) ซึ่งให้บริการโดย galactic-triablazers Ltd (ต่อไปเรียกว่า “บริษัท”) ที่มีที่อยู่จดทะเบียนอยู่ที่ Sea Urchin Street, San Pedro, Ambergris Caye, Belize ผู้ใช้บริการ (ต่อไปเรียกว่า “ผู้ใช้”) ต้องยอมรับข้อกำหนดนี้ก่อนใช้งานบริการ.",
              ],
            },
            article2: {
              heading: "มาตรา 2 (คำจำกัดความ)",
              intro: "คำศัพท์ที่ใช้ในข้อกำหนดนี้มีความหมายดังต่อไปนี้.",
              items: [
                "การเทรดไบนารี่ออปชัน: การทำธุรกรรมเพื่อทายว่าราคาของสินทรัพย์อ้างอิงจะสูงหรือต่ำกว่าราคากำหนด ณ เวลาเฉพาะในอนาคต.",
                "สินทรัพย์อ้างอิง: สินทรัพย์ทางการเงินที่ใช้เป็นเป้าหมายของการเทรดไบนารี่ออปชัน.",
                "ราคากำหนด: ราคาของสินทรัพย์อ้างอิงในขณะที่เริ่มต้นสัญญา.",
                "เวลาตัดสิน: เวลาที่ใช้ตัดสินผลของสัญญา.",
                "จำนวนเงินซื้อ: จำนวนเงินที่ผู้ใช้ชำระต่อหนึ่งรายการ.",
                "จำนวนเงินจ่ายออก: จำนวนเงินที่ผู้ใช้ได้รับเมื่อทายถูกต้อง.",
              ],
            },
          },
        },
        chapter2: {
          label: "บทที่ 2",
          heading: "บัญชีเทรด",
          articles: {
            article3: {
              heading: "มาตรา 3 (การเปิดบัญชี)",
              body: [
                "ผู้ที่ต้องการใช้บริการต้องยอมรับข้อกำหนดนี้และสมัครเปิดบัญชีตามวิธีการที่บริษัทกำหนด.",
                "บริษัทจะพิจารณาใบสมัครตามเกณฑ์ภายใน และหากอนุมัติจะส่งแจ้งการเปิดบัญชีให้ผู้สมัครทราบ.",
                "บริษัทอาจปฏิเสธใบสมัครได้ตามดุลยพินิจ และบริษัทไม่จำเป็นต้องเปิดเผยเหตุผลในการปฏิเสธ.",
              ],
              items: [
                "กรณีมีข้อมูลเท็จ ข้อผิดพลาด หรือขาดตกบกพร่องในใบสมัคร",
                "กรณีผู้สมัครเคยถูกบริษัทบอกเลิกสัญญามาก่อน",
                "กรณีอื่นที่บริษัทเห็นว่าไม่เหมาะสม",
              ],
            },
            article4: {
              heading: "มาตรา 4 (การยืนยันตัวตน)",
              body: [
                "บริษัทจะดำเนินการยืนยันตัวตนตามกฎหมายป้องกันการฟอกเงิน ผู้ใช้ต้องส่งเอกสารยืนยันตัวตนตามที่บริษัทกำหนด.",
              ],
            },
            article5: {
              heading: "มาตรา 5 (การปฏิเสธกลุ่มมิจฉาชีพ)",
              body: [
                "ผู้ใช้ยืนยันว่าตนไม่ใช่ และจะไม่กลายเป็น สมาชิกของกลุ่มอาชญากรรม บริษัทนอมินี หรือองค์กรอื่นที่เข้าข่ายเป็นกลุ่มมิจฉาชีพ.",
              ],
            },
            article6: {
              heading: "มาตรา 6 (การเปลี่ยนแปลงข้อมูลที่แจ้งไว้)",
              body: [
                "หากข้อมูลที่แจ้งไว้กับบริษัท เช่น ชื่อ ที่อยู่ หรือข้อมูลติดต่อ มีการเปลี่ยนแปลง ผู้ใช้ต้องแจ้งแก้ไขตามวิธีที่บริษัทกำหนดโดยทันที.",
              ],
            },
          },
        },
        chapter3: {
          label: "บทที่ 3",
          heading: "การเทรด",
          articles: {
            article7: {
              heading: "มาตรา 7 (ประเภทของสัญญา)",
              body: ["บริการนี้มีสัญญาให้เลือกดังต่อไปนี้."],
              items: [
                "Binary BTC",
                "ETH Channel",
                "XRP Crypto",
                "XRP Black hole",
                "ETH SpeedUp",
                "BTC High Roller",
                "รายการอื่น ๆ ที่บริษัทกำหนดเพิ่มเติม",
              ],
            },
            article8: {
              heading: "มาตรา 8 (การส่งคำสั่ง)",
              body: [
                "ผู้ใช้ต้องส่งคำสั่งผ่านแพลตฟอร์มของบริษัทตามวิธีที่บริษัทกำหนด.",
              ],
            },
            article9: {
              heading: "มาตรา 9 (การจับคู่คำสั่ง)",
              body: [
                "คำสั่งถือว่าเสร็จสมบูรณ์เมื่อระบบของบริษัทรับคำสั่งไว้แล้ว.",
              ],
            },
            article10: {
              heading: "มาตรา 10 (เวลาทำการ)",
              body: [
                "โดยหลักการ บริการพร้อมให้เทรดตลอด 24 ชั่วโมง 365 วัน แต่บริษัทอาจหยุดให้บริการชั่วคราวเพื่อซ่อมบำรุงระบบหรือเหตุอื่น.",
              ],
            },
            article11: {
              heading: "มาตรา 11 (ค่าธรรมเนียม)",
              body: [
                "ไม่มีการเรียกเก็บค่าธรรมเนียมการเทรด อย่างไรก็ตาม บริษัทอาจกำหนดค่าธรรมเนียมสำหรับการฝากหรือถอนเงิน.",
              ],
            },
          },
        },
        chapter4: {
          label: "บทที่ 4",
          heading: "การฝากและถอน",
          articles: {
            article12: {
              heading: "มาตรา 12 (การฝากเงิน)",
              body: [
                "ผู้ใช้สามารถฝากเงินในสกุลเงินที่บริษัทกำหนด (USDT และคริปโตเคอร์เรนซีอื่น) เข้าบัญชีเทรดได้ตามวิธีที่บริษัทระบุ.",
              ],
            },
            article13: {
              heading: "มาตรา 13 (การถอนเงิน)",
              body: [
                "ผู้ใช้สามารถยื่นคำขอถอนเงินจากบัญชีเทรดได้ตามวิธีที่บริษัทกำหนด.",
              ],
              items: [
                "โดยหลักการ การถอนจะโอนไปยังบัญชีที่มีชื่อผู้ใช้เท่านั้น.",
                "หากการยืนยันตัวตนยังไม่เสร็จสมบูรณ์ บริษัทอาจระงับการถอนได้ชั่วคราว.",
              ],
            },
          },
        },
        chapter5: {
          label: "บทที่ 5",
          heading: "ความเสี่ยง",
          articles: {
            article14: {
              heading: "มาตรา 14 (การทำความเข้าใจความเสี่ยง)",
              body: [
                "การเทรดไบนารี่ออปชันอาจให้ผลตอบแทนสูง แต่มีความเสี่ยงที่จะสูญเสียเงินลงทุนทั้งหมด.",
                "ผู้ใช้ต้องศึกษากลไกและความเสี่ยงอย่างถี่ถ้วน และตัดสินใจเทรดด้วยดุลยพินิจและความรับผิดชอบของตนเอง.",
                "บริษัทไม่รับผิดชอบต่อความเสียหายใด ๆ ที่เกิดกับผู้ใช้จากการเทรด.",
              ],
            },
          },
        },
        chapter6: {
          label: "บทที่ 6",
          heading: "ข้อห้าม",
          articles: {
            article15: {
              heading: "มาตรา 15 (การกระทำที่ห้าม)",
              body: ["เมื่อใช้บริการ ผู้ใช้ต้องไม่กระทำการดังต่อไปนี้."],
              items: [
                "การกระทำที่ผิดกฎหมายหรือขัดต่อความสงบเรียบร้อย",
                "การกระทำที่เกี่ยวข้องกับอาชญากรรม",
                "การทำลายหรือรบกวนการทำงานของเซิร์ฟเวอร์หรือเครือข่ายของบริษัท",
                "การกระทำที่อาจขัดขวางการให้บริการของบริษัท",
                "การเก็บรวบรวมหรือจัดเก็บข้อมูลส่วนบุคคลของผู้ใช้อื่นโดยไม่ได้รับอนุญาต",
                "การสวมรอยหรือแอบอ้างเป็นผู้ใช้อื่น",
                "การให้ผลประโยชน์ต่อกลุ่มมิจฉาชีพโดยตรงหรือโดยอ้อมผ่านบริการของบริษัท",
                "การกระทำอื่นใดที่บริษัทเห็นว่าไม่เหมาะสม",
              ],
            },
          },
        },
        chapter7: {
          label: "บทที่ 7",
          heading: "บทบัญญัติอื่น",
          articles: {
            article16: {
              heading: "มาตรา 16 (ข้อจำกัดความรับผิด)",
              items: [
                "บริษัทไม่รับผิดชอบต่อความเสียหายที่เกิดจากความขัดข้องของระบบ การสื่อสาร ภัยพิบัติ หรือเหตุอื่นที่อยู่นอกเหนือการควบคุมของบริษัท.",
                "บริษัทไม่รับผิดชอบต่อความเสียหายที่เกิดจากการเปลี่ยนแปลง ระงับ หรือยุติการให้บริการ.",
              ],
            },
            article17: {
              heading: "มาตรา 17 (การยกเลิกสัญญา)",
              items: [
                "เมื่อผู้ใช้ละเมิดข้อใดข้อหนึ่งของข้อกำหนดนี้",
                "เมื่อพบว่าข้อมูลที่แจ้งไว้เป็นเท็จ",
                "กรณีอื่นที่บริษัทเห็นว่าไม่เหมาะสมให้ผู้ใช้ใช้บริการต่อไป",
              ],
            },
            article18: {
              heading: "มาตรา 18 (กฎหมายที่ใช้บังคับและศาลที่มีอำนาจ)",
              items: [
                "ข้อกำหนดนี้อยู่ภายใต้กฎหมายญี่ปุ่น.",
                "หากเกิดข้อพิพาท ให้ศาลที่มีเขตอำนาจเหนือสำนักงานใหญ่ของบริษัทเป็นศาลที่มีอำนาจพิจารณาแต่เพียงผู้เดียว.",
              ],
            },
          },
        },
      },
      update: {
        label: "อัปเดตล่าสุด",
        date: "11 พฤศจิกายน 2025",
        note: "ข้อกำหนดนี้อาจปรับปรุงโดยไม่แจ้งล่วงหน้า โปรดติดตามประกาศอย่างเป็นทางการเสมอ",
      },
    },
    privacy: {
      hero: {
        badge: "นโยบายความเป็นส่วนตัว",
        title: "นโยบายความเป็นส่วนตัวของ 1540bo.io",
        subtitle:
          "นโยบายนี้อธิบายวิธีที่ galactic-triablazers Ltd จัดเก็บ ใช้งาน แบ่งปัน และปกป้องข้อมูลส่วนบุคคลเมื่อคุณใช้บริการเทรดของ 1540bo.io",
        ctaPrimary: "ติดต่อฝ่ายสนับสนุน",
        ctaSecondary: "ดูข้อกำหนดการให้บริการ",
        alertTitle: "โปรดอ่านก่อนส่งข้อมูลส่วนบุคคล",
        alertBody:
          "นโยบายนี้มีผลกับผู้ถือบัญชีทุกคน โปรดส่งเอกสารหลังจากเข้าใจกระบวนการจัดการและการปกป้องข้อมูลของคุณแล้ว",
      },
      overview: {
        heading: "แนวทางการจัดการข้อมูลส่วนบุคคล",
        paragraphs: [
          "galactic-triablazers Ltd ซึ่งมีที่อยู่ที่ Sea Urchin Street, San Pedro, Ambergris Caye, Belize เป็นผู้ดำเนินการ 1540bo.io และกำหนดหลักเกณฑ์การจัดการข้อมูลส่วนบุคคลตั้งแต่การเก็บ การใช้ ไปจนถึงการลบทำลายตามที่ระบุด้านล่าง",
          "นโยบายนี้สอดคล้องกับกฎหมายคุ้มครองข้อมูลส่วนบุคคลของญี่ปุ่นและใช้กับผู้ใช้ทุกคนของบริการ",
        ],
        highlights: [
          "ขอบเขตข้อมูลและฐานกฎหมายที่เราเก็บ",
          "วัตถุประสงค์การใช้งาน การเปิดเผยแก่บุคคลที่สาม และการใช้ร่วมกัน",
          "สิทธิในการขอเปิดเผย แก้ไข และช่องทางการสอบถาม",
        ],
      },
      sections: {
        section1: {
          label: "มาตรา 1",
          heading: "บททั่วไป",
          body: [
            "galactic-triablazers Ltd (เรียกว่า “บริษัท”) ซึ่งมีที่อยู่จดทะเบียนที่ Sea Urchin Street, San Pedro, Ambergris Caye, Belize จัดทำนโยบายฉบับนี้เพื่อกำกับการจัดการข้อมูลผู้ใช้ รวมถึงข้อมูลส่วนบุคคล ภายในบริการ “1540bo.io”.",
          ],
        },
        section2: {
          label: "มาตรา 2",
          heading: "ความหมายของข้อมูลส่วนบุคคล",
          body: [
            "“ข้อมูลส่วนบุคคล” หมายถึงข้อมูลเกี่ยวกับบุคคลธรรมดาที่มีชีวิตตามที่กฎหมายคุ้มครองข้อมูลส่วนบุคคลของญี่ปุ่นกำหนด ซึ่งสามารถระบุตัวบุคคลได้จากข้อมูลนั้นเอง หรือเมื่อพิจารณาร่วมกับข้อมูลอื่นที่สามารถนำมาจับคู่ได้โดยง่าย.",
          ],
        },
        section3: {
          label: "มาตรา 3",
          heading: "วิธีการเก็บข้อมูลส่วนบุคคล",
          intro:
            "บริษัทจะเก็บข้อมูลผ่านวิธีที่ชอบด้วยกฎหมายและเป็นธรรมเท่านั้น และจะไม่ใช้วิธีการหลอกลวงหรือไม่สุจริต ข้อมูลหลักที่ได้รับมีดังนี้",
          groups: [
            {
              title: "ข้อมูลที่ผู้ใช้ส่งให้โดยตรง",
              items: [
                "ชื่อ ที่อยู่ วันเกิด หมายเลขโทรศัพท์ ที่อยู่อีเมล และข้อมูลลงทะเบียนอื่นๆ.",
                "รายละเอียดในเอกสารยืนยันตัวตน เช่น หนังสือเดินทางหรือใบขับขี่.",
                "ข้อมูลเพิ่มเติมที่ผู้ใช้ส่งผ่านแบบฟอร์มสมัครหรือการสื่อสารกับทีมสนับสนุน.",
              ],
            },
            {
              title: "ข้อมูลที่เก็บอัตโนมัติเมื่อใช้บริการ",
              items: [
                "ประวัติการเทรดและยอดคงเหลือในบัญชีบน 1540bo.io.",
                "ที่อยู่ IP ตัวระบุคุกกี้ ข้อมูลอุปกรณ์ และเทเลเมทรีทางเทคนิคอื่นๆ.",
              ],
            },
          ],
        },
        section4: {
          label: "มาตรา 4",
          heading: "วัตถุประสงค์ในการใช้ข้อมูล",
          items: [
            "เพื่อให้บริการและดำเนินแพลตฟอร์ม.",
            "เพื่อรับคำขอยืนยันตัวตน การเปิดบัญชี และคำสั่งเทรดจากผู้ใช้.",
            "เพื่อรายงานผลการเทรด ยอดเงินคงเหลือ และข้อมูลที่เกี่ยวข้องให้ผู้ใช้ทราบ.",
            "เพื่อตอบคำถามและให้บริการลูกค้า รวมถึงการตรวจสอบตัวตน.",
            "เพื่อส่งอีเมลเกี่ยวกับฟีเจอร์ใหม่ การอัปเดต แคมเปญ และบริการอื่นของบริษัท.",
            "เพื่อแจ้งประกาศสำคัญหรือการบำรุงรักษาตามความจำเป็น.",
            "เพื่อระบุตัวผู้ใช้ที่ฝ่าฝืนข้อกำหนดหรือพยายามใช้บริการในทางที่ไม่เหมาะสมและปฏิเสธการให้บริการ.",
            "เพื่อปฏิบัติตามกฎหมายและข้อบังคับ รวมถึงการยืนยันตัวตนตามกฎหมายป้องกันการฟอกเงินของญี่ปุ่น.",
            "เพื่อวัตถุประสงค์อื่นที่เกี่ยวเนื่องกับการใช้งานข้างต้น.",
          ],
        },
        section5: {
          label: "มาตรา 5",
          heading: "การเปิดเผยข้อมูลให้บุคคลที่สาม",
          intro:
            "บริษัทจะไม่เปิดเผยข้อมูลส่วนบุคคลให้บุคคลที่สามโดยไม่ได้รับความยินยอมจากผู้ใช้ ยกเว้นกรณีต่อไปนี้หรือในกรณีที่กฎหมายอนุญาต.",
          items: [
            "เมื่อจำเป็นเพื่อคุ้มครองชีวิต ร่างกาย หรือทรัพย์สินของบุคคล และไม่สามารถขอความยินยอมได้.",
            "เมื่อจำเป็นอย่างยิ่งต่อการส่งเสริมสุขภาพสาธารณะหรือการเลี้ยงดูเด็กให้เติบโตอย่างเหมาะสม และไม่สามารถขอความยินยอมได้.",
            "เมื่อจำเป็นต้องให้ความร่วมมือกับหน่วยงานของรัฐหรือท้องถิ่นในการปฏิบัติหน้าที่ตามกฎหมาย และการขอความยินยอมอาจเป็นอุปสรรคต่อการปฏิบัติหน้าที่นั้น.",
            "เมื่อบริษัทได้แจ้งหรือประกาศรายละเอียดที่กฎหมายกำหนดล่วงหน้า และได้ยื่นแจ้งต่อคณะกรรมการคุ้มครองข้อมูลส่วนบุคคลแล้ว.",
          ],
          note: "การเปิดเผยข้อมูลส่วนบุคคลแก่บุคคลที่สามจะดำเนินการตามกฎหมายคุ้มครองข้อมูลส่วนบุคคลของญี่ปุ่นและกฎหมายที่เกี่ยวข้องอย่างเคร่งครัด.",
        },
        section6: {
          label: "มาตรา 6",
          heading: "การใช้ข้อมูลร่วมกัน",
          intro:
            "บริษัทอาจใช้ข้อมูลส่วนบุคคลร่วมกับหน่วยงานในเครือภายใต้ขอบเขตดังต่อไปนี้.",
          groups: [
            {
              title: "รายการข้อมูลที่ใช้ร่วมกัน",
              items: [
                "ชื่อ ที่อยู่ วันเกิด หมายเลขโทรศัพท์ อีเมล และข้อมูลการติดต่ออื่นๆ.",
                "ผลการยืนยันตัวตนและข้อมูลเกี่ยวกับธุรกรรมที่ทำบน 1540bo.io.",
                "ข้อมูลอื่นที่จำเป็นเพื่อให้เป็นไปตามวัตถุประสงค์ในมาตรา 4.",
              ],
            },
            {
              title: "หน่วยงานที่ใช้ร่วมกัน",
              body: "บริษัทในเครือของ 1540bo.",
            },
            {
              title: "วัตถุประสงค์ในการใช้ร่วมกัน",
              body: "เป็นไปตามวัตถุประสงค์ที่ระบุไว้ในมาตรา 4 ของนโยบายฉบับนี้.",
            },
            {
              title: "ผู้รับผิดชอบในการกำกับดูแล",
              body: "1540bo เป็นผู้กำกับดูแลการจัดการข้อมูลที่ใช้ร่วมกัน.",
            },
          ],
        },
        section7: {
          label: "มาตรา 7",
          heading: "มาตรการด้านความปลอดภัย",
          body: [
            "บริษัทจะใช้มาตรการด้านองค์กร บุคลากร กายภาพ และเทคโนโลยีที่เหมาะสมเพื่อป้องกันการรั่วไหล สูญหาย หรือความเสียหายของข้อมูลส่วนบุคคลและจัดการข้อมูลอย่างปลอดภัย.",
          ],
        },
        section8: {
          label: "มาตรา 8",
          heading: "การขอเปิดเผย แก้ไข และระงับการใช้ข้อมูล",
          body: [
            "หากผู้ใช้ร้องขอให้เปิดเผย แก้ไข เพิ่ม ลบ ระงับการใช้ หรือทำลายข้อมูลส่วนบุคคล บริษัทจะดำเนินการโดยไม่ล่าช้าหลังจากตรวจสอบตัวตน เว้นแต่กรณีที่เข้าข้อยกเว้นตามกฎหมาย.",
            "หากบริษัทพิจารณาว่าไม่มีกฎหมายบังคับให้ต้องดำเนินการ จะมีการแจ้งให้ผู้ร้องขอทราบโดยเร็ว.",
          ],
          fee: "มีค่าธรรมเนียมการขอเปิดเผยข้อมูลครั้งละ 1,000 เยน (รวมภาษี).",
        },
        section9: {
          label: "มาตรา 9",
          heading: "การใช้คุกกี้และเทคโนโลยีที่เกี่ยวข้อง",
          body: [
            "บริษัทอาจใช้คุกกี้และเทคโนโลยีที่คล้ายกันเพื่อเพิ่มความสะดวก วิเคราะห์รูปแบบการใช้งาน และวัดผลโฆษณา.",
            "ผู้ใช้สามารถปิดการใช้งานคุกกี้ได้ในเบราว์เซอร์ แต่การทำเช่นนั้นอาจทำให้ไม่สามารถใช้บางส่วนของบริการได้.",
          ],
        },
        section10: {
          label: "มาตรา 10",
          heading: "การปรับปรุงนโยบายความเป็นส่วนตัว",
          body: [
            "บริษัทอาจปรับปรุงนโยบายฉบับนี้เมื่อเห็นสมควร.",
            "หากการแก้ไขต้องได้รับความยินยอมตามกฎหมาย นโยบายที่แก้ไขจะใช้กับผู้ใช้ที่ให้ความยินยอมผ่านช่องทางที่บริษัทกำหนดเท่านั้น และบริษัทจะแจ้งวันมีผลและรายละเอียดผ่านเว็บไซต์หรือวิธีการที่เหมาะสม.",
          ],
        },
        section11: {
          label: "มาตรา 11",
          heading: "ช่องทางการติดต่อ",
          body: [
            "หากมีคำถามเกี่ยวกับนโยบายนี้ โปรดติดต่อผ่านศูนย์บริการผู้ใช้ภายใน 1540bo.io.",
            "บริษัทอาจตรวจสอบตัวตนตามความจำเป็นและจะตอบกลับภายใต้นโยบายฉบับนี้.",
          ],
        },
      },
      update: {
        label: "สถานะ",
        date: "19 พฤศจิกายน 2025",
        note: "นโยบายฉบับนี้มีผล ณ วันที่ระบุ และอาจได้รับการปรับปรุงตามแนวทางกำกับดูแลในอนาคต",
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
      subtitle:
        "ตรวจสอบ Bloomberg, CoinTelegraph, CoinMarketCap และแหล่งข่าวคริปโตอื่นๆ",
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
        "Galactic-triablazers Ltd\nSea Urchin Street, San Pedro, Ambergris Caye, Belize\nRegulated by BVP-FX-23Q2-K7N9-M3",
      links: {
        terms: "ข้อกำหนด",
        privacy: "นโยบายความเป็นส่วนตัว",
        security: "ความปลอดภัย",
        contact: "ติดต่อเรา",
      },
    },
  },
};

const SUPPORT_EMAIL = "support@1540bo.io";

const STORAGE_KEYS = {
  lang: "1540bo:lang",
};

function persistLanguagePreference(lang) {
  try {
    window.localStorage.setItem(STORAGE_KEYS.lang, lang);
  } catch (error) {
    // localStorage might be unavailable (e.g., privacy mode); ignore.
  }
}

function getStoredLanguagePreference() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEYS.lang);
    if (stored && translations[stored]) {
      return stored;
    }
  } catch (error) {
    // ignore lookup errors and fall back to default language.
  }
  return null;
}

const assets = [
  {
    pair: "BTC/USD",
    price: 63250.23,
    change: 1.24,
    decimals: 2,
    volatility: 0.0018,
    categoryKey: "rates.categories.crypto",
  },
  {
    pair: "ETH/USD",
    price: 3420.58,
    change: -0.74,
    decimals: 2,
    volatility: 0.0024,
    categoryKey: "rates.categories.crypto",
  },
  {
    pair: "XRP/USD",
    price: 0.54,
    change: 0.32,
    decimals: 4,
    volatility: 0.0032,
    categoryKey: "rates.categories.crypto",
  },
  {
    pair: "ADA/USD",
    price: 0.68,
    change: -0.15,
    decimals: 4,
    volatility: 0.0036,
    categoryKey: "rates.categories.crypto",
  },
  {
    pair: "SOL/USD",
    price: 148.37,
    change: 1.82,
    decimals: 2,
    volatility: 0.004,
    categoryKey: "rates.categories.crypto",
  },
  {
    pair: "BNB/USD",
    price: 575.9,
    change: 0.55,
    decimals: 2,
    volatility: 0.0021,
    categoryKey: "rates.categories.crypto",
  },
  {
    pair: "DOGE/USD",
    price: 0.16,
    change: -0.48,
    decimals: 4,
    volatility: 0.0045,
    categoryKey: "rates.categories.crypto",
  },
  {
    pair: "LTC/USD",
    price: 86.42,
    change: 0.64,
    decimals: 2,
    volatility: 0.0025,
    categoryKey: "rates.categories.crypto",
  },
];

const API_ENDPOINT = window.TICKER_API_ENDPOINT ?? null;

const assetElements = new Map();
let currentLang = "en";

function translate(key, lang = currentLang) {
  const fallback = translations.en;
  const target = translations[lang] || fallback;
  const path = key.split(".");
  let value = path.reduce(
    (acc, segment) => (acc ? acc[segment] : undefined),
    target,
  );
  if (value !== undefined) {
    return value;
  }
  return (
    path.reduce((acc, segment) => (acc ? acc[segment] : undefined), fallback) ??
    key
  );
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
  persistLanguagePreference(lang);
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.dataset.i18n;
    el.textContent = translate(key, lang);
  });
  renderVipContent(lang);
  renderTicker();
}

function formatPrice(price, decimals) {
  const options = {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  };
  return price.toLocaleString(
    currentLang === "th" ? "th-TH" : currentLang === "ja" ? "ja-JP" : "en-US",
    options,
  );
}

function formatChange(change) {
  const sign = change >= 0 ? "+" : "";
  return `${sign}${change.toFixed(2)}%`;
}

function renderVipContent(lang) {
  if (document.body.dataset.page !== "vip") return;

  const rewardTableBody = document.querySelector("#vip-rewards-table tbody");
  if (rewardTableBody) {
    const rows = translate("vip.rewards.table.rows", lang);
    if (Array.isArray(rows)) {
      rewardTableBody.innerHTML = "";
      rows.forEach((row) => {
        const tr = document.createElement("tr");
        [
          "rank",
          "tier",
          "requirement",
          "bonus",
          "daily",
          "weekly",
          "monthly",
        ].forEach((key) => {
          const td = document.createElement("td");
          td.textContent = row && row[key] !== undefined ? row[key] : "";
          tr.appendChild(td);
        });
        rewardTableBody.appendChild(tr);
      });
    }
  }

  const maintenanceTableBody = document.querySelector(
    "#vip-maintenance-table tbody",
  );
  if (maintenanceTableBody) {
    const rows = translate("vip.rules.maintenanceTable.rows", lang);
    if (Array.isArray(rows)) {
      maintenanceTableBody.innerHTML = "";
      rows.forEach((row) => {
        const tr = document.createElement("tr");
        ["rank", "tier", "requirement"].forEach((key) => {
          const td = document.createElement("td");
          td.textContent = row && row[key] !== undefined ? row[key] : "";
          tr.appendChild(td);
        });
        maintenanceTableBody.appendChild(tr);
      });
    }
  }
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
  document
    .querySelectorAll(".lang-switch button, .mobile-lang-switch button")
    .forEach((btn) => {
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

function injectSupportFormModal() {
  if (document.querySelector(".support-modal") || !document.body) return;
  const modal = document.createElement("div");
  modal.className = "support-modal";
  modal.setAttribute("aria-hidden", "true");
  modal.innerHTML = `
    <div class="support-modal__overlay" data-support-close></div>
    <div class="support-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="support-form-title">
      <button class="support-modal__close" type="button" data-support-close>
        <span aria-hidden="true">&times;</span>
        <span class="sr-only" data-i18n="supportForm.close"></span>
      </button>
      <div class="support-modal__content">
        <p class="support-modal__badge" data-i18n="supportForm.badge"></p>
        <h2 id="support-form-title" data-i18n="supportForm.title"></h2>
        <p class="support-modal__subtitle" data-i18n="supportForm.subtitle"></p>
        <form id="support-form" class="support-form" novalidate>
          <div class="support-form__fields">
            <label class="support-form__field">
              <span data-i18n="supportForm.fields.name"></span>
              <input type="text" name="fullName" autocomplete="name" required />
            </label>
            <label class="support-form__field">
              <span data-i18n="supportForm.fields.email"></span>
              <input type="email" name="contactEmail" autocomplete="email" required />
            </label>
            <label class="support-form__field">
              <span data-i18n="supportForm.fields.account"></span>
              <input type="text" name="accountId" autocomplete="off" />
            </label>
            <label class="support-form__field">
              <span data-i18n="supportForm.fields.topic"></span>
              <select name="topic" required>
                <option value="general" selected data-i18n="supportForm.topics.general"></option>
                <option value="account" data-i18n="supportForm.topics.account"></option>
                <option value="payments" data-i18n="supportForm.topics.payments"></option>
                <option value="vip" data-i18n="supportForm.topics.vip"></option>
                <option value="provider" data-i18n="supportForm.topics.provider"></option>
              </select>
            </label>
            <label class="support-form__field support-form__field--full">
              <span data-i18n="supportForm.fields.subject"></span>
              <input type="text" name="customSubject" autocomplete="off" />
            </label>
            <label class="support-form__field support-form__field--full">
              <span data-i18n="supportForm.fields.message"></span>
              <textarea name="message" rows="5" required></textarea>
            </label>
          </div>
          <p class="support-form__note" data-i18n="supportForm.note"></p>
          <p class="support-form__disclaimer" data-i18n="supportForm.disclaimer"></p>
          <div class="support-form__actions">
            <button type="submit" class="btn primary" data-i18n="supportForm.submit"></button>
          </div>
        </form>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

function initSupportForm() {
  const modal = document.querySelector(".support-modal");
  if (!modal) return;
  const form = modal.querySelector("#support-form");
  if (!(form instanceof HTMLFormElement)) return;

  const autoTriggerSelectors = [
    'a[data-i18n="nav.support"]',
    'a[data-i18n="footer.links.contact"]',
    'button[data-i18n="vip.hero.ctaSecondary"]',
    'a[data-i18n="help.index.support.cta"]',
    'a[data-i18n="help.index.support.secondary"]',
    'a[data-i18n="provider.hero.ctaPrimary"]',
    'button[data-i18n="provider.hero.ctaPrimary"]',
    'a[data-i18n="provider.cta.primary"]',
  ];

  autoTriggerSelectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((node) => {
      node.dataset.supportTrigger = "true";
      if (node instanceof HTMLButtonElement && !node.getAttribute("type")) {
        node.type = "button";
      }
    });
  });

  const focusTarget = form.querySelector("input[name='fullName']");

  const closeMobileMenu = () => {
    const toggle = document.querySelector(".mobile-menu-toggle");
    const menu = document.querySelector(".mobile-menu");
    if (toggle?.classList.contains("active")) {
      toggle.classList.remove("active");
      menu?.classList.remove("active");
      document.body.classList.remove("locked-scroll");
    }
  };

  const openModal = () => {
    closeMobileMenu();
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("locked-scroll");
    focusTarget?.focus();
  };

  const closeModal = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    const menuOpen = document
      .querySelector(".mobile-menu")
      ?.classList.contains("active");
    if (!menuOpen) {
      document.body.classList.remove("locked-scroll");
    }
  };

  modal.querySelectorAll("[data-support-close]").forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      closeModal();
    });
  });

  document.addEventListener("click", (event) => {
    const trigger = event.target instanceof Element ? event.target.closest("[data-support-trigger]") : null;
    if (!trigger) return;
    event.preventDefault();
    openModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (typeof form.reportValidity === "function" && !form.reportValidity()) {
      return;
    }
    const formData = new FormData(form);
    const name = (formData.get("fullName") || "").toString().trim();
    const email = (formData.get("contactEmail") || "").toString().trim();
    const accountId = (formData.get("accountId") || "").toString().trim();
    const topic = (formData.get("topic") || "general").toString();
    const customSubject = (formData.get("customSubject") || "").toString().trim();
    const message = (formData.get("message") || "").toString().trim();
    const subjectKey = `supportForm.subjects.${topic}`;
    const derivedSubject =
      customSubject ||
      translate(subjectKey, currentLang) ||
      translate("supportForm.subjects.general", currentLang);
    const topicLabel = translate(`supportForm.topics.${topic}`, currentLang);
    const bodyLines = [
      `Topic: ${topicLabel}`,
      `Name: ${name || "-"}`,
      `Email: ${email || "-"}`,
      `Account: ${accountId || "-"}`,
      "",
      message || "(no message provided)",
    ];
    const mailtoURL = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(derivedSubject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = mailtoURL;
    form.reset();
    closeModal();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const storedLang = getStoredLanguagePreference();
  if (storedLang && storedLang !== currentLang) {
    currentLang = storedLang;
  }
  injectSupportFormModal();
  initSupportForm();
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
      document.body.classList.toggle(
        "locked-scroll",
        mobileMenu.classList.contains("active"),
      );
    });

    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenuToggle.classList.remove("active");
        mobileMenu.classList.remove("active");
        document.body.classList.remove("locked-scroll");
      });
    });

    window.addEventListener("resize", () => {
      if (
        window.innerWidth > 980 &&
        document.body.classList.contains("locked-scroll")
      ) {
        mobileMenuToggle.classList.remove("active");
        mobileMenu.classList.remove("active");
        document.body.classList.remove("locked-scroll");
      }
    });
  }
});
