const translations = {
  en: {
    meta: {
      title: "1540BO | Digital Options Trading",
      affiliateTitle: "1540BO | Affiliate Program Terms",
      vipTitle: "1540BO | VIP Program",
      termsTitle: "1540BO | Terms of Service",
      privacyTitle: "1540BO | Privacy Policy",
    },
    nav: {
      login: "Log in",
      features: "Features",
      affiliate: "Affiliate",
      vip: "VIP Program",
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
          text:
            "Baseline percentages apply to cash wagering and net loss. As you climb, daily rakeback, weekly and monthly cashback, and rank-up bonuses increase dramatically.",
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
            { rank: "1", tier: "Bronze 1", requirement: "$0", bonus: "-", daily: "0.10%", weekly: "3.5%", monthly: "1.5%" },
            { rank: "2", tier: "Bronze 2", requirement: "$2,500", bonus: "$2.5", daily: "0.12%", weekly: "4.0%", monthly: "1.5%" },
            { rank: "3", tier: "Bronze 3", requirement: "$5,000", bonus: "$2.5", daily: "0.14%", weekly: "4.5%", monthly: "2.0%" },
            { rank: "4", tier: "Bronze 4", requirement: "$10,000", bonus: "$5", daily: "0.16%", weekly: "5.0%", monthly: "2.0%" },
            { rank: "5", tier: "Silver 1", requirement: "$25,000", bonus: "$15", daily: "0.18%", weekly: "5.5%", monthly: "2.5%" },
            { rank: "6", tier: "Silver 2", requirement: "$50,000", bonus: "$25", daily: "0.20%", weekly: "6.0%", monthly: "2.5%" },
            { rank: "7", tier: "Silver 3", requirement: "$100,000", bonus: "$50", daily: "0.23%", weekly: "6.5%", monthly: "3.0%" },
            { rank: "8", tier: "Silver 4", requirement: "$200,000", bonus: "$100", daily: "0.26%", weekly: "7.0%", monthly: "3.0%" },
            { rank: "9", tier: "Gold 1", requirement: "$350,000", bonus: "$150", daily: "0.30%", weekly: "7.5%", monthly: "3.5%" },
            { rank: "10", tier: "Gold 2", requirement: "$500,000", bonus: "$150", daily: "0.34%", weekly: "8.0%", monthly: "3.5%" },
            { rank: "11", tier: "Gold 3", requirement: "$750,000", bonus: "$250", daily: "0.38%", weekly: "8.5%", monthly: "4.0%" },
            { rank: "12", tier: "Gold 4", requirement: "$1,000,000", bonus: "$250", daily: "0.42%", weekly: "9.0%", monthly: "4.0%" },
            { rank: "13", tier: "Platinum 1", requirement: "$1,500,000", bonus: "$500", daily: "0.46%", weekly: "9.5%", monthly: "4.5%" },
            { rank: "14", tier: "Platinum 2", requirement: "$2,000,000", bonus: "$500", daily: "0.50%", weekly: "10.0%", monthly: "5.0%" },
            { rank: "15", tier: "Platinum 3", requirement: "$3,000,000", bonus: "$1,000", daily: "0.55%", weekly: "10.5%", monthly: "5.5%" },
            { rank: "16", tier: "Platinum 4", requirement: "$5,000,000", bonus: "$2,000", daily: "0.60%", weekly: "11.0%", monthly: "6.0%" },
            { rank: "17", tier: "Diamond 1", requirement: "$7,500,000", bonus: "$2,500", daily: "0.65%", weekly: "11.5%", monthly: "6.5%" },
            { rank: "18", tier: "Diamond 2", requirement: "$10,000,000", bonus: "$2,500", daily: "0.70%", weekly: "12.0%", monthly: "7.0%" },
            { rank: "19", tier: "Diamond 3", requirement: "$15,000,000", bonus: "$5,000", daily: "0.75%", weekly: "13.0%", monthly: "7.5%" },
            { rank: "20", tier: "Diamond 4", requirement: "$25,000,000", bonus: "$10,000", daily: "0.80%", weekly: "14.0%", monthly: "8.0%" },
          ],
        },
      },
      rules: {
        heading: "Program rules",
        active: {
          label: "Rule 1",
          heading: "Active boost",
          intro: "Consistent trading activity unlocks additional cashback percentages on top of the baseline table values.",
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
          intro: "Rank promotions are instant once lifetime wagering meets the requirement. Maintenance is reviewed monthly per level.",
          bullets: [
            "Promotion occurs immediately when cumulative wagering satisfies the next rank threshold.",
            "Tier protection: once you enter a tier (Bronze, Silver, Gold, Platinum, Diamond) you never drop to a lower tier.",
            "Level maintenance is evaluated on the first day of each month using the previous month's wagering volume.",
            "If the maintenance requirement is missed, the level decreases within the current tier, but never below Level 1 of that tier.",
          ],
          reminder: "Maintenance is calculated on cash wagering only. Level 1 within the reached tier is the minimum floor after review.",
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
        subtitle: "Participating in the VIP program constitutes acceptance of these terms and the general site terms.",
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
          "This document is the legally binding agreement between you and 1540bo regarding the binary options platform 1540bo.io.",
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
                "These Terms of Service (the “Terms”) set out the conditions under which users may access and trade on the binary options service 1540bo.io operated by 1540bo. By using the service, you agree to be bound by the Terms.",
              ],
            },
            article2: {
              heading: "Article 2 (Definitions)",
              intro: "The defined terms used in the Terms have the following meanings.",
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
              body: [
                "The service offers the following contract types.",
              ],
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
          "This policy describes how 1540bo collects, uses, shares, and safeguards personal information when you use our trading services.",
        ctaPrimary: "Contact support",
        ctaSecondary: "View Terms of Service",
        alertTitle: "Read before sharing personal data",
        alertBody:
          "Compliance with this policy is mandatory for all account holders. Provide documents only after understanding how your information is processed and protected.",
      },
      overview: {
        heading: "How we handle your personal information",
        paragraphs: [
          "The sections below set out the rules that govern personal data handled through 1540bo.io, from acquisition to disposal.",
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
            "1540bo (the “Company”) establishes this Privacy Policy to govern the handling of user information, including personal data, within the service “1540bo.io”.",
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
              title: "Information collected automatically when the service is used",
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
          note:
            "Any provision of personal data to third parties will be carried out strictly in accordance with the Act on the Protection of Personal Information and related regulations.",
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
          fee:
            "A handling fee of JPY 1,000 (tax inclusive) is charged for each disclosure request.",
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
      disclaimer: "authorised and regulated by JoumallandFRC 2487765 SDC170086",
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
    },
    nav: {
      login: "ログイン",
      features: "特長",
      affiliate: "アフィリエイト",
      vip: "VIPプログラム",
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
          text:
            "還元率は現金ベットと純損失を基準に計算され、ランクが上がるほどデイリー・ウィークリー・マンスリーのキャッシュバックと昇格ボーナスが増加します。",
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
            { rank: "1", tier: "ブロンズ 1", requirement: "$0", bonus: "-", daily: "0.10%", weekly: "3.5%", monthly: "1.5%" },
            { rank: "2", tier: "ブロンズ 2", requirement: "$2,500", bonus: "$2.5", daily: "0.12%", weekly: "4.0%", monthly: "1.5%" },
            { rank: "3", tier: "ブロンズ 3", requirement: "$5,000", bonus: "$2.5", daily: "0.14%", weekly: "4.5%", monthly: "2.0%" },
            { rank: "4", tier: "ブロンズ 4", requirement: "$10,000", bonus: "$5", daily: "0.16%", weekly: "5.0%", monthly: "2.0%" },
            { rank: "5", tier: "シルバー 1", requirement: "$25,000", bonus: "$15", daily: "0.18%", weekly: "5.5%", monthly: "2.5%" },
            { rank: "6", tier: "シルバー 2", requirement: "$50,000", bonus: "$25", daily: "0.20%", weekly: "6.0%", monthly: "2.5%" },
            { rank: "7", tier: "シルバー 3", requirement: "$100,000", bonus: "$50", daily: "0.23%", weekly: "6.5%", monthly: "3.0%" },
            { rank: "8", tier: "シルバー 4", requirement: "$200,000", bonus: "$100", daily: "0.26%", weekly: "7.0%", monthly: "3.0%" },
            { rank: "9", tier: "ゴールド 1", requirement: "$350,000", bonus: "$150", daily: "0.30%", weekly: "7.5%", monthly: "3.5%" },
            { rank: "10", tier: "ゴールド 2", requirement: "$500,000", bonus: "$150", daily: "0.34%", weekly: "8.0%", monthly: "3.5%" },
            { rank: "11", tier: "ゴールド 3", requirement: "$750,000", bonus: "$250", daily: "0.38%", weekly: "8.5%", monthly: "4.0%" },
            { rank: "12", tier: "ゴールド 4", requirement: "$1,000,000", bonus: "$250", daily: "0.42%", weekly: "9.0%", monthly: "4.0%" },
            { rank: "13", tier: "プラチナ 1", requirement: "$1,500,000", bonus: "$500", daily: "0.46%", weekly: "9.5%", monthly: "4.5%" },
            { rank: "14", tier: "プラチナ 2", requirement: "$2,000,000", bonus: "$500", daily: "0.50%", weekly: "10.0%", monthly: "5.0%" },
            { rank: "15", tier: "プラチナ 3", requirement: "$3,000,000", bonus: "$1,000", daily: "0.55%", weekly: "10.5%", monthly: "5.5%" },
            { rank: "16", tier: "プラチナ 4", requirement: "$5,000,000", bonus: "$2,000", daily: "0.60%", weekly: "11.0%", monthly: "6.0%" },
            { rank: "17", tier: "ダイアモンド 1", requirement: "$7,500,000", bonus: "$2,500", daily: "0.65%", weekly: "11.5%", monthly: "6.5%" },
            { rank: "18", tier: "ダイアモンド 2", requirement: "$10,000,000", bonus: "$2,500", daily: "0.70%", weekly: "12.0%", monthly: "7.0%" },
            { rank: "19", tier: "ダイアモンド 3", requirement: "$15,000,000", bonus: "$5,000", daily: "0.75%", weekly: "13.0%", monthly: "7.5%" },
            { rank: "20", tier: "ダイアモンド 4", requirement: "$25,000,000", bonus: "$10,000", daily: "0.80%", weekly: "14.0%", monthly: "8.0%" },
          ],
        },
      },
      rules: {
        heading: "適用ルール",
        active: {
          label: "ルール1",
          heading: "アクティブブースト",
          intro: "一定の稼働日数を満たすことで、ウィークリー／マンスリーのキャッシュバック率に上乗せが発生します。",
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
          intro: "昇格は累計ベット額を達成した時点で即時に行われ、維持判定は毎月1日に実施されます。",
          bullets: [
            "累計ベット額が条件を満たした時点で即時昇格。",
            "一度到達したティア（ブロンズ〜ダイアモンド）から下位ティアへ降格することはありません。",
            "毎月1日に前月のベット額を基準として各レベルの維持判定を実施します。",
            "条件未達の場合は同一ティア内で降格し、レベル1が最低ラインとなります。",
          ],
          reminder: "判定は現金ベット額を基準とし、各ティアのレベル1が降格後の下限となります。",
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
        subtitle: "本プログラムへの参加には、本規約および一般利用規約への同意が必要です。",
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
          "本規約は、1540bo（以下「当社」といいます。）が提供するバイナリーオプション取引サービス「1540bo.io」に関する法的拘束力のある契約です。",
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
                "本利用規約（以下、「本規約」といいます。）は、1540bo（以下、「当社」といいます。）が提供するバイナリーオプション取引サービス「1540bo.io」（以下、「本サービス」といいます。）の利用条件を定めるものです。本サービスの利用者（以下、「利用者」といいます。）は、本規約に同意の上、本サービスを利用するものとします。",
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
          "本ポリシーは、1540boが取引サービスの提供に際して取得・利用・共有・保護する個人情報の取扱いを説明します。",
        ctaPrimary: "サポートに問い合わせる",
        ctaSecondary: "利用規約を見る",
        alertTitle: "個人情報提供前の重要な確認",
        alertBody:
          "本ポリシーはすべての口座保有者に適用されます。情報の取扱いと保護内容を理解したうえで書類をご提出ください。",
      },
      overview: {
        heading: "個人情報の取扱い方針",
        paragraphs: [
          "以下の各条項は、1540bo.ioにおける個人情報の取得から廃棄までの取扱い規範を定めています。",
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
            "1540bo（以下「当社」といいます。）は、本サービス「1540bo.io」における利用者情報（個人情報を含みます。）の取扱いについて、本プライバシーポリシーを定めます。",
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
          intro: "当社は、適法かつ公正な手段により個人情報を取得し、偽りその他不正の手段による取得は行いません。主な取得情報は次のとおりです。",
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
          intro: "当社は、以下の場合または法令で認められる場合を除き、あらかじめ利用者の同意を得ることなく個人情報を第三者に提供しません。",
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
      disclaimer: "authorised and regulated by JoumallandFRC 2487765 SDC170086",
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
    },
    nav: {
      login: "เข้าสู่ระบบ",
      features: "จุดเด่น",
      affiliate: "พันธมิตร",
      vip: "โปรแกรมวีไอพี",
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
          text:
            "อัตราที่แสดงคำนวณจากยอดเดิมพันเงินสดและผลขาดทุนสุทธิ ยิ่งระดับสูง ยิ่งได้รับเงินคืนรายวัน รายสัปดาห์ รายเดือน และโบนัสเลื่อนระดับมากขึ้น",
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
            { rank: "1", tier: "บรอนซ์ 1", requirement: "$0", bonus: "-", daily: "0.10%", weekly: "3.5%", monthly: "1.5%" },
            { rank: "2", tier: "บรอนซ์ 2", requirement: "$2,500", bonus: "$2.5", daily: "0.12%", weekly: "4.0%", monthly: "1.5%" },
            { rank: "3", tier: "บรอนซ์ 3", requirement: "$5,000", bonus: "$2.5", daily: "0.14%", weekly: "4.5%", monthly: "2.0%" },
            { rank: "4", tier: "บรอนซ์ 4", requirement: "$10,000", bonus: "$5", daily: "0.16%", weekly: "5.0%", monthly: "2.0%" },
            { rank: "5", tier: "ซิลเวอร์ 1", requirement: "$25,000", bonus: "$15", daily: "0.18%", weekly: "5.5%", monthly: "2.5%" },
            { rank: "6", tier: "ซิลเวอร์ 2", requirement: "$50,000", bonus: "$25", daily: "0.20%", weekly: "6.0%", monthly: "2.5%" },
            { rank: "7", tier: "ซิลเวอร์ 3", requirement: "$100,000", bonus: "$50", daily: "0.23%", weekly: "6.5%", monthly: "3.0%" },
            { rank: "8", tier: "ซิลเวอร์ 4", requirement: "$200,000", bonus: "$100", daily: "0.26%", weekly: "7.0%", monthly: "3.0%" },
            { rank: "9", tier: "โกลด์ 1", requirement: "$350,000", bonus: "$150", daily: "0.30%", weekly: "7.5%", monthly: "3.5%" },
            { rank: "10", tier: "โกลด์ 2", requirement: "$500,000", bonus: "$150", daily: "0.34%", weekly: "8.0%", monthly: "3.5%" },
            { rank: "11", tier: "โกลด์ 3", requirement: "$750,000", bonus: "$250", daily: "0.38%", weekly: "8.5%", monthly: "4.0%" },
            { rank: "12", tier: "โกลด์ 4", requirement: "$1,000,000", bonus: "$250", daily: "0.42%", weekly: "9.0%", monthly: "4.0%" },
            { rank: "13", tier: "แพลทินัม 1", requirement: "$1,500,000", bonus: "$500", daily: "0.46%", weekly: "9.5%", monthly: "4.5%" },
            { rank: "14", tier: "แพลทินัม 2", requirement: "$2,000,000", bonus: "$500", daily: "0.50%", weekly: "10.0%", monthly: "5.0%" },
            { rank: "15", tier: "แพลทินัม 3", requirement: "$3,000,000", bonus: "$1,000", daily: "0.55%", weekly: "10.5%", monthly: "5.5%" },
            { rank: "16", tier: "แพลทินัม 4", requirement: "$5,000,000", bonus: "$2,000", daily: "0.60%", weekly: "11.0%", monthly: "6.0%" },
            { rank: "17", tier: "ไดมอนด์ 1", requirement: "$7,500,000", bonus: "$2,500", daily: "0.65%", weekly: "11.5%", monthly: "6.5%" },
            { rank: "18", tier: "ไดมอนด์ 2", requirement: "$10,000,000", bonus: "$2,500", daily: "0.70%", weekly: "12.0%", monthly: "7.0%" },
            { rank: "19", tier: "ไดมอนด์ 3", requirement: "$15,000,000", bonus: "$5,000", daily: "0.75%", weekly: "13.0%", monthly: "7.5%" },
            { rank: "20", tier: "ไดมอนด์ 4", requirement: "$25,000,000", bonus: "$10,000", daily: "0.80%", weekly: "14.0%", monthly: "8.0%" },
          ],
        },
      },
      rules: {
        heading: "กฎการใช้งาน",
        active: {
          label: "กฎข้อที่ 1",
          heading: "Active Boost",
          intro: "การมีกิจกรรมต่อเนื่องช่วยเพิ่มเปอร์เซ็นต์เงินคืนให้สูงกว่าตารางพื้นฐาน",
          weekly: {
            title: "Weekly Active Boost",
            detail: "วางเดิมพันอย่างน้อย $0.1 ใน 5 วันขึ้นไปภายในสัปดาห์เดียว จะได้รับ +0.5% เพิ่มเติมในเงินคืนรายสัปดาห์",
          },
          monthly: {
            title: "Monthly Active Boost",
            detail: "วางเดิมพันอย่างน้อย $0.1 ใน 20 วันขึ้นไปภายในเดือน จะได้รับ +1.0% เพิ่มเติมในเงินคืนรายเดือน",
          },
        },
        downgrade: {
          label: "กฎข้อที่ 2",
          heading: "การรักษาระดับ",
          intro: "เมื่อยอดเดิมพันสะสมถึงเกณฑ์ จะเลื่อนระดับทันที แต่การรักษาระดับจะตรวจสอบรายเดือน",
          bullets: [
            "เลื่อนระดับทันทีเมื่อยอดเดิมพันสะสมถึงเกณฑ์ถัดไป",
            "สิทธิ์ช่วงชั้นได้รับการคุ้มครอง เมื่อเข้าช่วงชั้นแล้วจะไม่ถูกลดลง",
            "ตรวจสอบสถานะในวันแรกของเดือนโดยใช้ยอดเดิมพันเดือนก่อนหน้า",
            "หากไม่ถึงเกณฑ์ จะลดระดับเฉพาะภายในช่วงชั้นนั้น และระดับ 1 คือขั้นต่ำ",
          ],
          reminder: "คำนวณเฉพาะยอดเดิมพันเงินสด ระดับ 1 ในช่วงชั้นที่เข้าถึงแล้วคือจุดต่ำสุดหลังการประเมิน",
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
        subtitle: "การเข้าร่วมโปรแกรมแสดงว่าคุณยอมรับข้อกำหนดนี้และข้อกำหนดการใช้งานเว็บไซต์",
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
          "เอกสารนี้เป็นสัญญาที่มีผลผูกพันทางกฎหมายระหว่างคุณกับ 1540bo เกี่ยวกับแพลตฟอร์มไบนารีออปชัน 1540bo.io.",
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
                "ข้อกำหนดการใช้บริการฉบับนี้ (ต่อไปเรียกว่า “ข้อกำหนด”) กำหนดเงื่อนไขการใช้บริการเทรดไบนารี่ออปชัน “1540bo.io” (ต่อไปเรียกว่า “บริการ”) ซึ่งให้บริการโดย 1540bo (ต่อไปเรียกว่า “บริษัท”) ผู้ใช้บริการ (ต่อไปเรียกว่า “ผู้ใช้”) ต้องยอมรับข้อกำหนดนี้ก่อนใช้งานบริการ.",
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
              body: [
                "บริการนี้มีสัญญาให้เลือกดังต่อไปนี้.",
              ],
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
              body: [
                "เมื่อใช้บริการ ผู้ใช้ต้องไม่กระทำการดังต่อไปนี้.",
              ],
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
          "นโยบายนี้อธิบายวิธีที่ 1540bo รวบรวม ใช้งาน แบ่งปัน และปกป้องข้อมูลส่วนบุคคลเมื่อคุณใช้บริการเทรดของเรา",
        ctaPrimary: "ติดต่อฝ่ายสนับสนุน",
        ctaSecondary: "ดูข้อกำหนดการให้บริการ",
        alertTitle: "โปรดอ่านก่อนส่งข้อมูลส่วนบุคคล",
        alertBody:
          "นโยบายนี้มีผลกับผู้ถือบัญชีทุกคน โปรดส่งเอกสารหลังจากเข้าใจกระบวนการจัดการและการปกป้องข้อมูลของคุณแล้ว",
      },
      overview: {
        heading: "แนวทางการจัดการข้อมูลส่วนบุคคล",
        paragraphs: [
          "หัวข้อด้านล่างกำหนดหลักเกณฑ์การจัดการข้อมูลส่วนบุคคลใน 1540bo.io ตั้งแต่การเก็บ การใช้ ไปจนถึงการลบทำลาย",
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
            "1540bo (เรียกว่า “บริษัท”) จัดทำนโยบายฉบับนี้เพื่อกำกับการจัดการข้อมูลผู้ใช้ รวมถึงข้อมูลส่วนบุคคล ภายในบริการ “1540bo.io”.",
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
          intro: "บริษัทจะเก็บข้อมูลผ่านวิธีที่ชอบด้วยกฎหมายและเป็นธรรมเท่านั้น และจะไม่ใช้วิธีการหลอกลวงหรือไม่สุจริต ข้อมูลหลักที่ได้รับมีดังนี้",
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
          intro: "บริษัทจะไม่เปิดเผยข้อมูลส่วนบุคคลให้บุคคลที่สามโดยไม่ได้รับความยินยอมจากผู้ใช้ ยกเว้นกรณีต่อไปนี้หรือในกรณีที่กฎหมายอนุญาต.",
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
          intro: "บริษัทอาจใช้ข้อมูลส่วนบุคคลร่วมกับหน่วยงานในเครือภายใต้ขอบเขตดังต่อไปนี้.",
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
      disclaimer: "authorised and regulated by JoumallandFRC 2487765 SDC170086",
      links: {
        terms: "ข้อกำหนด",
        privacy: "นโยบายความเป็นส่วนตัว",
        security: "ความปลอดภัย",
        contact: "ติดต่อเรา",
      },
    },
  },
};

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
  return price.toLocaleString(currentLang === "th" ? "th-TH" : currentLang === "ja" ? "ja-JP" : "en-US", options);
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
        ["rank", "tier", "requirement", "bonus", "daily", "weekly", "monthly"].forEach((key) => {
          const td = document.createElement("td");
          td.textContent = row && row[key] !== undefined ? row[key] : "";
          tr.appendChild(td);
        });
        rewardTableBody.appendChild(tr);
      });
    }
  }

  const maintenanceTableBody = document.querySelector("#vip-maintenance-table tbody");
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
  const storedLang = getStoredLanguagePreference();
  if (storedLang && storedLang !== currentLang) {
    currentLang = storedLang;
  }
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
