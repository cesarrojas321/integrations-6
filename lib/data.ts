// [name, color, glyph, icon?]  — icon is an optional path under /public.
// When icon is present it renders the real logo; otherwise the colored letter glyph is the fallback.
export const APPS: [string, string, string, string?][] = [
  ["Slack", "#491749", "#", "/integrations/slack.svg"],
  ["Salesforce", "#1A98D5", "SF", "/integrations/salesforce.svg"],
  ["SAP", "#0A6EB4", "SAP", "/integrations/sap.svg"],
  ["NetSuite", "#1B3A6B", "N", "/integrations/netsuite.webp"],
  ["HubSpot", "#FF5C35", "H", "/integrations/hubspot.svg"],
  ["Workday", "#0875A8", "W", "/integrations/workday.svg"],
  ["Jira", "#1868DB", "J", "/integrations/jira.svg"],
  ["ServiceNow", "#1B7A6E", "S"],
  ["Microsoft 365", "#D8420E", "M", "/integrations/microsoft.svg"],
  ["Google", "#2E7D46", "G", "/integrations/google.svg"],
  ["Stripe", "#5433C2", "St", "/integrations/stripe.svg"],
  ["Shopify", "#5E8E3E", "Sh"],
  ["QuickBooks", "#1C7A3D", "Q"],
  ["Zendesk", "#22413A", "Z"],
  ["Marketo", "#3247A3", "Mk"],
  ["Snowflake", "#1A9BD7", "Sn"],
];

export const GLYPH_COLOR: Record<string, string> = {
  Sh: "#5E8E3E", N: "#1B3A6B", "@": "#475569", Q: "#1C7A3D",
  SF: "#1A98D5", "#": "#491749", H: "#FF5C35", W: "#0875A8",
  M: "#D8420E", J: "#1868DB", Z: "#22413A", Sn: "#1A9BD7", St: "#5433C2",
};

export interface CatalogItem {
  filter: string;
  dept: string;
  flow: [string, string];
  title: string;
  desc: string;
  saves: string;
}

export const CATALOG: CatalogItem[] = [
  { filter: "finance", dept: "Finance", flow: ["Sh", "N"], title: "Order-to-Cash sync", desc: "New Shopify orders create invoices in NetSuite and post revenue to your ledger automatically.", saves: "32 hrs/mo" },
  { filter: "finance", dept: "Finance", flow: ["@", "Q"], title: "AP invoice capture", desc: "Inbound vendor invoices are parsed, matched to POs, and queued for approval in QuickBooks.", saves: "24 hrs/mo" },
  { filter: "sales", dept: "Sales & CRM", flow: ["SF", "#"], title: "Lead routing engine", desc: "Score and assign inbound leads in Salesforce, then alert the right rep in Slack within seconds.", saves: "18 hrs/mo" },
  { filter: "sales", dept: "Sales & CRM", flow: ["H", "N"], title: "Closed-won handoff", desc: "When a deal is won in HubSpot, provision the customer in NetSuite and start onboarding.", saves: "21 hrs/mo" },
  { filter: "hr", dept: "People & HR", flow: ["W", "M"], title: "Employee onboarding", desc: "New hires in Workday trigger account creation across Microsoft 365, Slack, and your apps.", saves: "28 hrs/mo" },
  { filter: "hr", dept: "People & HR", flow: ["J", "@"], title: "PTO & approvals", desc: "Time-off requests route to managers and sync to payroll and the team calendar on approval.", saves: "12 hrs/mo" },
  { filter: "ops", dept: "Operations", flow: ["Z", "#"], title: "Support escalation", desc: "High-priority Zendesk tickets create Jira issues and page the on-call engineer instantly.", saves: "16 hrs/mo" },
  { filter: "ops", dept: "Operations", flow: ["Sn", "M"], title: "Daily ops reporting", desc: "Pull metrics from Snowflake every morning and deliver a formatted digest to leadership.", saves: "20 hrs/mo" },
  { filter: "finance", dept: "Finance", flow: ["St", "Sn"], title: "Revenue reconciliation", desc: "Match Stripe payouts against your data warehouse and flag any discrepancies automatically.", saves: "26 hrs/mo" },
];

export interface Product {
  id: string;
  title: string;
  desc: string;
  price: number;
  was: number | null;
  ribbon: string | null;
  type: string;
  rating: number;
  sold: number;
}

export const PRODUCTS: Record<string, Omit<Product, "id">[]> = {
  workshops: [
    { title: "Automation Foundations", desc: "Live 3-hour cohort. Build your first production recipe end-to-end with us.", price: 299, was: null, ribbon: "LIVE", type: "Cohort · 3 hours", rating: 4.9, sold: 88 },
    { title: "Advanced Recipe Design", desc: "Two-session masterclass on complex orchestration, error handling, and scale.", price: 499, was: 599, ribbon: "POPULAR", type: "Cohort · 2 × 3 hours", rating: 5.0, sold: 54 },
    { title: "Team Enablement Intensive", desc: "Private workshop for your team, tailored to your stack and use cases.", price: 1500, was: null, ribbon: null, type: "Private · Up to 12 seats", rating: 5.0, sold: 27 },
    { title: "Office Hours Membership", desc: "Weekly live Q&A with Yisuka architects. Bring your recipes, get unstuck.", price: 79, was: null, ribbon: "MONTHLY", type: "Membership · per month", rating: 4.8, sold: 162 },
  ],
};

export interface TeamMember {
  name: string;
  role: string;
  certs: string;
}

export const TEAM: TeamMember[] = [
  { name: "Yael Suka", role: "Founder · Lead Architect", certs: "Workato Pro · 9 yrs" },
  { name: "Marcus Bell", role: "Integration Engineer", certs: "Workato Pro · NetSuite" },
  { name: "Priya Nair", role: "Solutions Architect", certs: "Salesforce · MuleSoft" },
  { name: "Devon Cole", role: "Automation Educator", certs: "Lead instructor" },
];
