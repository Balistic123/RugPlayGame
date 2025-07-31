import { p as push, a as pop, d as attr, o as stringify } from './index3-CthgjPPi.js';
import { S as Separator } from './separator-gqbA9xdr.js';
import { B as Button } from './button-Cg_QiDbD.js';
import { C as Card } from './card-23nZlDN1.js';
import { C as Card_content } from './card-content-Nxnnhqv4.js';
import './volume-settings-DX3g8058.js';
import { A as Alert } from './alert-9IclKPUx.js';
import { A as Alert_description } from './alert-description-DJRrBUyj.js';
import { A as Alert_title } from './alert-title-CYgtcVF_.js';
import { g as goto } from './client-s_UYc3Sk.js';
import { S as SEO } from './SEO-Cqzi3OcQ.js';
import { S as Shield_check } from './shield-check-BKIM_XIg.js';
import { T as Triangle_alert } from './triangle-alert-D5MhYm9H.js';
import './index2-D4eROfHK.js';
import './clsx-ChV9xqsO.js';
import './utils2-CLIgW4-x.js';
import './create-id-Bxd404XN.js';
import './index-server-DH7p7JOq.js';
import './index-opKo-a_0.js';
import './exports-Cv9LZeD1.js';
import './stores-Be-B7Xuq.js';
import './Icon2-Bqt4BCIy.js';

function _page($$payload, $$props) {
  push();
  const CONTACT_EMAIL = "contact@outpoot.com";
  SEO($$payload, {
    title: "Privacy Policy - Rugplay",
    description: "Privacy Policy for Rugplay cryptocurrency simulation game. Learn about data collection, account deletion process, virtual currency privacy, and your rights.",
    keywords: "privacy policy, data protection, account deletion, virtual currency privacy, simulation game privacy"
  });
  $$payload.out += `<!----> <div class="container mx-auto max-w-4xl py-10">`;
  Card($$payload, {
    class: "p-6",
    children: ($$payload2) => {
      $$payload2.out += `<div class="mb-8 flex items-center gap-3">`;
      Shield_check($$payload2, { class: "text-primary h-10 w-10" });
      $$payload2.out += `<!----> <div><h1 class="text-4xl font-bold">Privacy Policy</h1> <p class="text-muted-foreground">Last updated: May 29, 2025</p></div></div> `;
      Alert($$payload2, {
        class: "mb-6",
        children: ($$payload3) => {
          Triangle_alert($$payload3, { class: "h-4 w-4" });
          $$payload3.out += `<!----> `;
          Alert_title($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->Important Notice About Account Deletion`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Alert_description($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->When you delete your account, all personal information is permanently removed, but some
				anonymized data may be retained for platform integrity. This is explained in detail below.`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Separator($$payload2, { class: "my-6" });
      $$payload2.out += `<!----> <div class="space-y-2">`;
      Card_content($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<h2 class="mb-4 text-2xl font-semibold">1. Our Privacy Commitment</h2> <p class="mb-4">We are committed to protecting your privacy while providing a secure and functional crypto
					trading simulation platform. This policy explains exactly what data we collect, how we use
					it, and what happens when you delete your account.</p> <p><strong>Platform Note:</strong> Rugplay is a simulated trading environment using virtual currency
					("*BUSS" or "$") with no real monetary value.</p>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Card_content($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<h2 class="mb-4 text-2xl font-semibold">2. Information We Collect</h2> <div class="space-y-4"><div><h3 class="mb-2 text-lg font-medium">2.1 Account Information</h3> <ul class="ml-6 list-disc space-y-2"><li>Email address</li> <li>Username</li> <li>Profile information (name, bio, profile picture)</li> <li>Account preferences and settings</li> <li>Authentication tokens and session data</li> <li>IP addresses and browser/user agent information (for security and session
								management)</li></ul></div> <div><h3 class="mb-2 text-lg font-medium">2.2 Trading and Financial Data (Simulated)</h3> <ul class="ml-6 list-disc space-y-2"><li>Transaction history (buy/sell orders, amounts, prices, timestamps)</li> <li>Portfolio holdings and balances</li> <li>Trading patterns and preferences</li> <li>Prediction market bets and outcomes</li> <li>Reward claims and promotional code usage</li></ul></div> <div><h3 class="mb-2 text-lg font-medium">2.3 Platform Activity</h3> <ul class="ml-6 list-disc space-y-2"><li>Comments and posts on coin pages</li> <li>Likes and interactions with content</li> <li>Login activity and streaks</li></ul></div></div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Card_content($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<h2 class="mb-4 text-2xl font-semibold">3. How We Use Your Data</h2> <p class="mb-4">We use your data for:</p> <ul class="ml-6 list-disc space-y-2"><li>Providing trading platform functionality</li> <li>Maintaining accurate portfolio and transaction records</li> <li>Calculating market prices and liquidity</li> <li>Fraud prevention and security monitoring</li> <li>Platform analytics and improvements</li> <li>Resolving disputes and maintaining system integrity</li> <li>Operating and resolving prediction markets, which may involve automated decision-making
						as detailed below.</li></ul> <h3 class="mb-2 mt-4 text-lg font-medium">3.1 Automated Decision-Making (Prediction Markets)</h3> <p class="mb-2">Our prediction markets are entirely AI-automated systems that determine outcomes of
					prediction questions without human intervention. The AI processes publicly available
					information and platform data to settle expired prediction questions automatically.</p> <p class="mb-2"><strong>No Guarantee of Accuracy:</strong> AI decisions are not guaranteed to be correct or
					accurate. The automated system may make errors in interpreting data or determining outcomes.</p> <p class="mb-2"><strong>Significance and Envisaged Consequences:</strong> These automated decisions directly
					determine whether your prediction bets are won or lost and the corresponding virtual payouts.
					All outcomes are final once processed.</p> <p><strong>Limitation of Liability:</strong> We are not responsible for any losses, incorrect
					outcomes, or disputes arising from automated AI decisions in prediction markets. By participating,
					you acknowledge and accept the risks of AI-automated resolution systems.</p>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Card_content($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<h2 class="text-destructive mb-4 text-2xl font-semibold">4. Account Deletion and Data Retention</h2> `;
          Alert($$payload3, {
            class: "mb-4",
            children: ($$payload4) => {
              Triangle_alert($$payload4, { class: "h-4 w-4" });
              $$payload4.out += `<!----> `;
              Alert_title($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->14-Day Deletion Process`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              Alert_description($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Account deletion is scheduled 14 days after your request. During this period, your
						account is suspended but you can contact support to cancel the deletion.`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <div class="space-y-4"><div><h3 class="mb-2 text-lg font-medium" style="color: oklch(var(--success))">4.1 What Gets Permanently Deleted</h3> <ul class="ml-6 list-disc space-y-2"><li>Your personal information (name, email, username, bio, profile picture)</li> <li>Authentication sessions (including IP address and user agent history) and login
								tokens</li> <li>OAuth account connections</li> <li>Account preferences and settings</li> <li>Portfolio holdings and balances (*BUSS ("$") and simulated coins)</li> <li>Records of your likes on comments</li> <li>Promo code redemption records linked to your account</li> <li>Your user account record itself</li></ul></div> <div class="rounded-lg border-2 p-4" style="border-color: oklch(0.828 0.189 84.429); background-color: oklch(0.828 0.189 84.429 / 0.1);"><h3 class="mb-2 text-lg font-medium" style="color: oklch(0.828 0.189 84.429)">4.2 What May Remain (Fully Anonymized)</h3> <p class="mb-3" style="color: oklch(0.828 0.189 84.429 / 0.8)"><strong>The following data may remain but is completely disconnected from your identity
								(your User ID is removed):</strong></p> <ul class="ml-6 list-disc space-y-2" style="color: oklch(0.828 0.189 84.429 / 0.8)"><li><strong>Transaction records:</strong> Trading history (buys/sells, amounts, prices, timestamps)
								with your User ID removed.</li> <li><strong>Comment content:</strong> Your comments will have their User ID removed, the
								content replaced with "[deleted]", and marked as deleted. Timestamps and like counts
								(aggregated on the comment itself) are preserved.</li> <li><strong>Prediction bets:</strong> Records of bets placed, with your User ID removed.</li> <li><strong>Created coins:</strong> Simulated coins you created will remain, but your User
								ID as creator will be removed.</li> <li><strong>Created prediction questions:</strong> Prediction questions you created will
								remain, but your User ID as creator will be removed.</li></ul></div> <div><h3 class="mb-2 text-lg font-medium">4.3 Why Some Data Remains Anonymized</h3> <p class="mb-3">Anonymized data serves these legitimate purposes:</p> <ul class="ml-6 list-disc space-y-2"><li><strong>Market Integrity:</strong> Historical transaction data is needed to maintain
								accurate price charts and trading history</li> <li><strong>Platform Function:</strong> Coins and prediction markets must remain functional
								even after creators delete their accounts</li> <li><strong>Community Content:</strong> Comments remain available to preserve discussion
								threads, but with anonymous authorship</li> <li><strong>System Balance:</strong> Transaction records ensure the platform's virtual economy
								remains mathematically consistent</li></ul> <p class="text-muted-foreground mt-3 text-sm"><strong>Important:</strong> This anonymized data cannot be linked back to you in any way
							as all personal identifiers are permanently removed.</p></div> <div><h3 class="mb-2 text-lg font-medium">4.4 Deletion Timeline</h3> <ul class="ml-6 list-disc space-y-2"><li><strong>Immediate:</strong> Account suspended and login disabled</li> <li><strong>14 days later:</strong> Complete deletion process executed automatically</li> <li><strong>Cancellation:</strong> Contact support within 14 days to cancel deletion</li></ul></div></div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Card_content($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<h2 class="mb-4 text-2xl font-semibold">5. Data Security</h2> <p class="mb-4">We implement industry-standard security measures including:</p> <ul class="ml-6 list-disc space-y-2"><li>Encryption of sensitive data in transit and at rest</li> <li>Regular security audits and monitoring</li> <li>Access controls and authentication requirements</li> <li>Secure database configurations and backups</li></ul>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Card_content($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<h2 class="mb-4 text-2xl font-semibold">6. Your Data Protection Rights</h2> <p class="mb-4">Depending on your location, you may have certain rights regarding your personal data,
					including:</p> <ul class="ml-6 list-disc space-y-2"><li><strong>Access:</strong> The right to access the personal data we hold about you.</li> <li><strong>Rectification:</strong> The right to correct inaccurate or incomplete data.</li> <li><strong>Erasure (Deletion):</strong> The right to request deletion of your personal data
						(subject to our retention policy and legal obligations, as described in Section 4).</li> <li><strong>Portability:</strong> The right to export your data in a structured, commonly used,
						and machine-readable format.</li> <li><strong>Restrict Processing:</strong> The right to request restriction of processing your
						personal data under certain conditions.</li> <li><strong>Object to Processing:</strong> The right to object to processing of your personal
						data under certain conditions, including for direct marketing purposes (which we do not currently
						engage in).</li> <li><strong>Rights related to automated decision-making:</strong> The right not to be subject
						to a decision based solely on automated processing, including profiling, which produces legal
						effects concerning you or similarly significantly affects you, except under certain conditions.
						As described in Section 3.1, we use automated decision-making for prediction market resolution,
						and we provide information and recourse options.</li></ul> <p class="mt-3">To exercise these rights, please contact us at <a${attr("href", `mailto:${stringify(CONTACT_EMAIL)}`)} class="text-primary underline">contact@outpoot.com</a>.</p>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Card_content($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<h2 class="mb-4 text-2xl font-semibold">7. Consent and Legal Basis</h2> <div class="space-y-4"><div><h3 class="mb-2 text-lg font-medium">7.1 Explicit Consent Required</h3> <p class="mb-3">By creating an account, you explicitly consent to:</p> <ul class="ml-6 list-disc space-y-2"><li>Our data collection and processing practices</li> <li>The anonymization and retention policy described in Section 4</li> <li>Processing of your trading data for platform functionality</li> <li>14-day deletion process with suspension during the waiting period</li></ul></div> <div><h3 class="mb-2 text-lg font-medium">7.2 Withdrawal of Consent</h3> <p>You can withdraw consent at any time by deleting your account.</p></div></div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Card_content($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<h2 class="mb-4 text-2xl font-semibold">8. Data Sharing</h2> <p class="mb-4">We do not sell or share your personal data with third parties, except:</p> <ul class="ml-6 list-disc space-y-2"><li>When required by law or legal process</li> <li>To prevent fraud or protect platform security</li> <li>With service providers who assist in platform operations (under strict data processing
						agreements)</li></ul>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Card_content($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<h2 class="mb-4 text-2xl font-semibold">9. International Data Transfers</h2> <p class="mb-4">Your data may be processed outside the EU. We ensure adequate protection through standard
					contractual clauses and appropriate safeguards as required by GDPR.</p>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Card_content($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<h2 class="mb-4 text-2xl font-semibold">10. Cookies and Tracking Technologies</h2> <p class="mb-4">We use cookies solely for authentication and session management purposes. These essential
					cookies are necessary to maintain your login state and provide secure access to your
					account.</p>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Card_content($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<h2 class="mb-4 text-2xl font-semibold">11. Contact and Complaints</h2> <p class="mb-4">For privacy-related questions or to exercise your rights:</p> <ul class="ml-6 list-disc space-y-2"><li>Email: <a${attr("href", `mailto:${stringify(CONTACT_EMAIL)}`)} class="text-primary underline">contact@outpoot.com</a></li> <li>To cancel account deletion: Contact us immediately at the above email</li> <li>You have the right to lodge a complaint with your local data protection authority</li></ul>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Card_content($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<h2 class="mb-4 text-2xl font-semibold">12. Policy Updates</h2> <p>We will notify you of material changes to this policy via email and platform
					notifications. Continued use after changes constitutes acceptance of the updated policy.</p>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> <div class="rounded-lg p-4 text-sm" style="background-color: oklch(var(--primary) / 0.1);"><p class="mb-2"><strong>Last Updated:</strong> May 29, 2025</p> <p class="mb-2"><strong>Contact:</strong> <a${attr("href", `mailto:${stringify(CONTACT_EMAIL)}`)} class="text-primary underline">contact@outpoot.com</a></p> <p><strong>Platform:</strong> Rugplay - virtual cryptocurrency trading simulation</p></div></div> `;
      Separator($$payload2, { class: "my-8" });
      $$payload2.out += `<!----> <div class="flex justify-center gap-4">`;
      Button($$payload2, {
        variant: "outline",
        size: "lg",
        onclick: () => goto(),
        children: ($$payload3) => {
          $$payload3.out += `<!---->Terms of Service →`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Button($$payload2, {
        variant: "outline",
        size: "lg",
        onclick: () => goto(),
        children: ($$payload3) => {
          $$payload3.out += `<!---->Export My Data`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-AqTD8owT.js.map
