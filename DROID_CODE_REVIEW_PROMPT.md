# Droid Code Review Prompt

Use this prompt when asking Droid to perform a comprehensive review of this repository.

```text
You are reviewing the 1540BO public website repository.

Repository context:
- This is the public/static website for 1540BO.
- The codebase is mainly static HTML, CSS, JavaScript, translation data, and image assets.
- The customer support and AI operations backend is a separate project named 1540mail.
- The public support address currently being standardized is support@1540bo.com, but older site content may still reference support@1540bo.io.
- The site includes pages such as:
  - index.html
  - affiliate.html
  - help.html
  - help-account.html
  - help-deposit.html
  - help-withdrawal.html
  - help-affiliate.html
  - help-trading.html
  - help-other.html
  - provider.html
  - vip.html
  - terms.html
  - privacy.html
- Important assets and source folders include:
  - assets/css/
  - assets/js/
  - assets/images/
  - help_pages/
  - 1540bo-logo.png

Your task:
Perform a comprehensive code review. Prioritize concrete bugs, broken UX, security/privacy risks, inconsistent content, broken links, maintainability issues, and missing tests or validation. Do not only summarize the project. Lead with findings.

Review scope:
1. HTML correctness
   - Invalid nesting
   - Missing alt text
   - Broken anchors
   - Duplicate IDs
   - Inconsistent page structure
   - Missing required metadata
   - Wrong language attributes
   - Bad canonical/social metadata if present

2. CSS and responsive layout
   - Mobile layout breakage
   - Overflow or clipped text
   - Buttons or links too small to tap
   - Inconsistent spacing, typography, colors, and component treatment
   - Repeated CSS that should be consolidated
   - Unused or conflicting selectors

3. JavaScript behavior
   - Runtime errors
   - Missing null checks
   - Event handlers that fail on pages without matching elements
   - Support modal behavior
   - Language/i18n switching behavior
   - Mailto form generation
   - Accessibility of modals and menus

4. Content and support flow
   - Any remaining references to support@1540bo.io that should become support@1540bo.com
   - Inconsistent brand spelling: 1540BO vs 1540bo
   - Confusing or contradictory deposit/withdrawal/support instructions
   - Affiliate policy inconsistencies
   - Terms/privacy/provider page inconsistencies

5. Security and privacy
   - Any accidental secrets, API keys, credentials, or tokens
   - Unsafe external links without rel attributes where relevant
   - Forms that expose sensitive information in URLs or mailto links
   - Misleading claims around payments, withdrawals, compliance, or user data handling

6. Accessibility
   - Keyboard navigation
   - Focus management
   - Color contrast risks
   - Dialog semantics
   - Screen reader labels
   - Heading order
   - Form label associations

7. SEO and performance
   - Missing title/description
   - Large unoptimized images
   - Render blocking or duplicate font loads
   - Cacheable assets
   - Unused image files
   - Broken image paths

8. Deployment and repository hygiene
   - Files that should not be committed
   - Backup/zip/screenshot files that should be ignored or moved
   - Missing README or operational notes
   - Missing simple validation script for links/assets

Output format:
- Start with "Findings".
- Order findings by severity: Critical, High, Medium, Low.
- For every finding, include:
  - Severity
  - File path
  - Line number if possible
  - What is wrong
  - Why it matters
  - Concrete fix
- After findings, include:
  - "Open Questions"
  - "Suggested Fix Plan"
  - "Quick Checks To Run"

Important review rules:
- Do not invent issues. If you are unsure, mark it as "needs verification".
- Prefer specific file references over general advice.
- Do not rewrite the whole project unless asked.
- Do not ignore content/legal/payment wording risks just because this is a static site.
- Treat user-facing support and withdrawal/deposit instructions as high-risk content.

Please now review the repository.
```

