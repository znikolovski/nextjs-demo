// Mirrors the CFM models in cba-digital/aem.commbank-lego/ui.content/.../conf/commbank-content-fragments/settings/dam/cfm/models/

export interface Disclaimer {
  _path: string;
  headerText: string;
  text: string;
}

export interface CompRate {
  _path: string;
  rate: string;
  notemark: string;
}

export interface RateEntry {
  _path: string;
  sourceId: string;
  busref: string;
  catref: string;
  prodref: string;
  publishstatus: string;
  name: string;
  prefix: string;
  rate: string;
  suffix: string;
  futRate: string;
  monthlyRate: string;
  quarterlyRate: string;
  halfYearlyRate: string;
  annualRate: string;
  notemark: string;
  days: string;
  productWebAddress: string;
  compRates: CompRate[];
}

export type ProductSlug =
  | "variable-rate"
  | "fixed-rate"
  | "extra-homeloan"
  | "simple-homeloan"
  | "digi-homeloan";

export interface HomeLoanProduct {
  _path: string;
  sourceId: string;
  productSlug: ProductSlug;
  name: string;
  lastUpdate: string;
  rateEntries: RateEntry[];
  disclaimers: Disclaimer[];
}

export interface HlcCompareCard {
  _path: string;
  productCategory: ProductSlug;
  cardTitle: string;
  analyticsLabel: string;
  productDescription: string;
  columnOneTitle: string;
  columnOneValueKey: "rate_key1" | "comparison_rate_key_1";
  columnOneSuffix: "percentage-per-annum_1" | "percentage_1" | "none_1";
  columnTwoTitle: string;
  columnTwoValueKey: "comparison_rate_key_2" | "rate_key_2";
  columnTwoSuffix: "percentage-per-annum_2" | "percentage_2" | "none_2";
  hideRepayment: boolean;
  sectionTitle: string;
  additionalText: string;
  defaultRepaymentType: string;
  sectionTitleInterest: string;
  additionalTextInterestOnly: string;
  hideAccordion: boolean;
  collapseOnDesktop: boolean;
  expandOnMobile: boolean;
  includeDivider: boolean;
  accordionTitle: string;
  benefitsContent: string;
  benefitsContentWithoutWealthPackage: string;
  tradeoffsContent: string;
  tradeoffsWithoutPackage: string;
  feeContent: string;
  feeContentWithoutPackage: string;
  tellMeMoreLink: string;
  minLoanMessage1: string;
  fallbackDescription1: string;
  digihomeLvrMessage1: string;
  loanAmountExceedMessage1: string;
  lvrEightyInterestOwnerMessage: string;
  lvrInterestInvestmentMessage: string;
}

export type ToggleProductName =
  | "loan_type"
  | "payback"
  | "loan_amount"
  | "loan_action_type"
  | "deposit";

export interface HlcToggleOption {
  _path: string;
  productName: ToggleProductName;
  fieldType: "Toggle switch" | "Input";
  fieldTitle: string;
  fieldDescription: string;
  option1Id: string;
  option1Label: string;
  option2Id: string;
  option2Label: string;
  option3Id: string;
  option3Label: string;
  defaultOptionId: string;
  amountFieldTitle: string;
  amountFieldDefaultValue: string;
}

export interface HlcCheckbox {
  _path: string;
  fieldTitle: string;
  fieldDescription: string;
  wpWarningMsg: string;
}

// Site chrome (header nav, section-nav, footer) — one singleton SiteChrome
// fragment fetched once per request in app/home-loans/layout.tsx.
export interface NavLink {
  _path: string;
  label: string;
  url: string;
}

export interface SectionNavItem {
  _path: string;
  label: string;
  url: string;
  image: string;
}

export interface FooterColumnData {
  _path: string;
  sectionTitle: string;
  links: NavLink[];
}

export interface SiteChrome {
  _path: string;
  navLinks: NavLink[];
  sectionNavItems: SectionNavItem[];
  footerColumns: FooterColumnData[];
  footerText: string;
  acknowledgementLinkText: string;
  acknowledgementLinkUrl: string;
}

// Home Loans landing page sections — one singleton HomeLoansPage fragment
// fetched once in app/home-loans/page.tsx.
export interface HeroBanner {
  _path: string;
  title: string;
  subtitle: string;
  image: string;
  primaryCtaLabel: string;
  primaryCtaUrl: string;
  secondaryCtaLabel: string;
  secondaryCtaUrl: string;
}

export interface FeatureItem {
  _path: string;
  title: string;
  description: string;
}

export interface ProductCard {
  _path: string;
  title: string;
  image: string;
  bullets: string[];
  description: string;
  href: string;
}

export interface HomeLoansPage {
  _path: string;
  hero: HeroBanner;
  whyChooseItems: FeatureItem[];
  productCards: ProductCard[];
}

// A Section Group explicitly bundles same-kind items (e.g. several Feature
// Items) under one shared layout, authored via the `section-group` CFM —
// this replaces inferring grouping from array adjacency with an explicit
// authoring choice. `items` reuses the same AllFragmentModels union
// mechanism as Page.sections, just one level deeper.
export type GroupItem =
  | (FeatureItem & { __typename: "FeatureItemModel" })
  | (ProductCard & { __typename: "ProductCardModel" });

export type SectionLayout = "horizontal" | "vertical";

export interface SectionGroup {
  _path: string;
  heading?: string;
  layout: SectionLayout;
  items: GroupItem[];
}

// Generic Page abstraction — any Content Fragment authored against the
// `page` CFM (path must start with "pages/") becomes a live route via
// app/[...path]/page.tsx. `sections` is a heterogeneous, author-ordered list
// resolved through AEM's AllFragmentModels union; __typename discriminates
// which section type each item is (see components/sections/registry.ts).
export type Section =
  | (HeroBanner & { __typename: "HeroBannerModel" })
  | (FeatureItem & { __typename: "FeatureItemModel" })
  | (ProductCard & { __typename: "ProductCardModel" })
  | (SectionGroup & { __typename: "SectionGroupModel" });

export interface Page {
  _path: string;
  title: string;
  path: string;
  seoTitle?: string;
  seoDescription?: string;
  sections: Section[];
}
