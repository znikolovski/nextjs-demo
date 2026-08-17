/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Calendar: { input: unknown; output: unknown; }
  Date: { input: unknown; output: unknown; }
  Json: { input: unknown; output: unknown; }
  Time: { input: unknown; output: unknown; }
};

export type AllFragmentModels = ArticleListModelModel | CompRateModel | DisclaimerModel | FeatureItemModel | FooterColumnModel | GenericContentFragmentModel | HeroBannerModel | HlcCheckboxModel | HlcCompareCardModel | HlcToggleOptionModel | HomeLoanProductModel | HomeLoansPageModel | LinkModelModel | MdcResultMappingModelModel | NavLinkModel | PageModel | ProductCardModel | QuickLinkModelModel | RateEntryModel | SectionGroupModel | SectionNavItemModel | SiteChromeModel;

export type ArchiveRef = {
  _authorUrl?: Maybe<Scalars['String']['output']>;
  _path?: Maybe<Scalars['ID']['output']>;
  _publishUrl?: Maybe<Scalars['String']['output']>;
  format?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export enum ArrayMode {
  All = 'ALL',
  AllOrEmpty = 'ALL_OR_EMPTY',
  AtLeastOnce = 'AT_LEAST_ONCE',
  Instances = 'INSTANCES'
}

export type ArticleListModelModel = {
  _metadata?: Maybe<TypedMetaData>;
  _model?: Maybe<ModelInfo>;
  _path?: Maybe<Scalars['ID']['output']>;
  _tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _variation?: Maybe<Scalars['String']['output']>;
  _variations?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  articleReferences?: Maybe<Array<Maybe<LinkModelModel>>>;
  pictogram?: Maybe<Reference>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ArticleListModelModelArrayFilter = {
  _apply?: InputMaybe<ArrayMode>;
  _instances?: InputMaybe<Scalars['Int']['input']>;
  _match?: InputMaybe<ArticleListModelModelFilter>;
};

export type ArticleListModelModelConnection = {
  edges: Array<Maybe<ArticleListModelModelEdge>>;
  pageInfo: PageInfo;
};

export type ArticleListModelModelEdge = {
  cursor: Scalars['String']['output'];
  node: ArticleListModelModel;
};

export type ArticleListModelModelFilter = {
  _logOp?: InputMaybe<LogOp>;
  _path?: InputMaybe<IdFilter>;
  _tags?: InputMaybe<StringArrayFilter>;
  _variation?: InputMaybe<StringFilter>;
  _variations?: InputMaybe<StringArrayFilter>;
  articleReferences?: InputMaybe<LinkModelModelArrayFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ArticleListModelModelResult = {
  _references?: Maybe<Array<Maybe<Reference>>>;
  item: ArticleListModelModel;
};

export type ArticleListModelModelResults = {
  _references?: Maybe<Array<Maybe<Reference>>>;
  items: Array<Maybe<ArticleListModelModel>>;
};

export type BooleanArrayFilter = {
  _expressions: Array<InputMaybe<BooleanArrayFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type BooleanArrayFilterExpression = {
  _apply?: InputMaybe<ArrayMode>;
  _instances?: InputMaybe<Scalars['Int']['input']>;
  _operator?: InputMaybe<BooleanOperator>;
  value?: InputMaybe<Scalars['Boolean']['input']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
};

export type BooleanArrayMetadata = {
  name: Scalars['String']['output'];
  value: Array<Maybe<Scalars['Boolean']['output']>>;
};

export type BooleanFilter = {
  _expressions: Array<InputMaybe<BooleanFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type BooleanFilterExpression = {
  _operator?: InputMaybe<BooleanOperator>;
  value?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BooleanMetadata = {
  name: Scalars['String']['output'];
  value: Scalars['Boolean']['output'];
};

export enum BooleanOperator {
  Equals = 'EQUALS'
}

export type CalendarArrayFilter = {
  _expressions: Array<InputMaybe<CalendarArrayFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type CalendarArrayFilterExpression = {
  _apply?: InputMaybe<ArrayMode>;
  _instances?: InputMaybe<Scalars['Int']['input']>;
  _operator?: InputMaybe<CalendarOperator>;
  value?: InputMaybe<Scalars['Calendar']['input']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['Calendar']['input']>>>;
};

export type CalendarArrayMetadata = {
  name: Scalars['String']['output'];
  value: Array<Maybe<Scalars['Calendar']['output']>>;
};

export type CalendarFilter = {
  _expressions: Array<InputMaybe<CalendarFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type CalendarFilterExpression = {
  _operator?: InputMaybe<CalendarOperator>;
  value?: InputMaybe<Scalars['Calendar']['input']>;
};

export type CalendarMetadata = {
  name: Scalars['String']['output'];
  value: Scalars['Calendar']['output'];
};

export enum CalendarOperator {
  After = 'AFTER',
  At = 'AT',
  AtOrAfter = 'AT_OR_AFTER',
  AtOrBefore = 'AT_OR_BEFORE',
  Before = 'BEFORE',
  NotAt = 'NOT_AT'
}

export type CompRateModel = {
  _metadata?: Maybe<TypedMetaData>;
  _model?: Maybe<ModelInfo>;
  _path?: Maybe<Scalars['ID']['output']>;
  _tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _variation?: Maybe<Scalars['String']['output']>;
  _variations?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  notemark?: Maybe<Scalars['String']['output']>;
  rate?: Maybe<Scalars['String']['output']>;
};

export type CompRateModelArrayFilter = {
  _apply?: InputMaybe<ArrayMode>;
  _instances?: InputMaybe<Scalars['Int']['input']>;
  _match?: InputMaybe<CompRateModelFilter>;
};

export type CompRateModelConnection = {
  edges: Array<Maybe<CompRateModelEdge>>;
  pageInfo: PageInfo;
};

export type CompRateModelEdge = {
  cursor: Scalars['String']['output'];
  node: CompRateModel;
};

export type CompRateModelFilter = {
  _logOp?: InputMaybe<LogOp>;
  _path?: InputMaybe<IdFilter>;
  _tags?: InputMaybe<StringArrayFilter>;
  _variation?: InputMaybe<StringFilter>;
  _variations?: InputMaybe<StringArrayFilter>;
  notemark?: InputMaybe<StringFilter>;
  rate?: InputMaybe<StringFilter>;
};

export type CompRateModelResult = {
  _references?: Maybe<Array<Maybe<Reference>>>;
  item: CompRateModel;
};

export type CompRateModelResults = {
  _references?: Maybe<Array<Maybe<Reference>>>;
  items: Array<Maybe<CompRateModel>>;
};

export type DateArrayFilter = {
  _expressions: Array<InputMaybe<DateArrayFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type DateArrayFilterExpression = {
  _apply?: InputMaybe<ArrayMode>;
  _instances?: InputMaybe<Scalars['Int']['input']>;
  _operator?: InputMaybe<DateOperator>;
  value?: InputMaybe<Scalars['Date']['input']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
};

export type DateFilter = {
  _expressions: Array<InputMaybe<DateFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type DateFilterExpression = {
  _operator?: InputMaybe<DateOperator>;
  value?: InputMaybe<Scalars['Date']['input']>;
};

export enum DateOperator {
  After = 'AFTER',
  At = 'AT',
  AtOrAfter = 'AT_OR_AFTER',
  AtOrBefore = 'AT_OR_BEFORE',
  Before = 'BEFORE',
  NotAt = 'NOT_AT'
}

export type DisclaimerModel = {
  _metadata?: Maybe<TypedMetaData>;
  _model?: Maybe<ModelInfo>;
  _path?: Maybe<Scalars['ID']['output']>;
  _tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _variation?: Maybe<Scalars['String']['output']>;
  _variations?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  headerText?: Maybe<Scalars['String']['output']>;
  text?: Maybe<MultiFormatString>;
};

export type DisclaimerModelArrayFilter = {
  _apply?: InputMaybe<ArrayMode>;
  _instances?: InputMaybe<Scalars['Int']['input']>;
  _match?: InputMaybe<DisclaimerModelFilter>;
};

export type DisclaimerModelConnection = {
  edges: Array<Maybe<DisclaimerModelEdge>>;
  pageInfo: PageInfo;
};

export type DisclaimerModelEdge = {
  cursor: Scalars['String']['output'];
  node: DisclaimerModel;
};

export type DisclaimerModelFilter = {
  _logOp?: InputMaybe<LogOp>;
  _path?: InputMaybe<IdFilter>;
  _tags?: InputMaybe<StringArrayFilter>;
  _variation?: InputMaybe<StringFilter>;
  _variations?: InputMaybe<StringArrayFilter>;
  headerText?: InputMaybe<StringFilter>;
  text?: InputMaybe<MultiFormatStringFilter>;
};

export type DisclaimerModelResult = {
  _references?: Maybe<Array<Maybe<Reference>>>;
  item: DisclaimerModel;
};

export type DisclaimerModelResults = {
  _references?: Maybe<Array<Maybe<Reference>>>;
  items: Array<Maybe<DisclaimerModel>>;
};

export type DocumentRef = {
  _authorUrl?: Maybe<Scalars['String']['output']>;
  _path?: Maybe<Scalars['ID']['output']>;
  _publishUrl?: Maybe<Scalars['String']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  format?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type FeatureItemModel = {
  _metadata?: Maybe<TypedMetaData>;
  _model?: Maybe<ModelInfo>;
  _path?: Maybe<Scalars['ID']['output']>;
  _tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _variation?: Maybe<Scalars['String']['output']>;
  _variations?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  description?: Maybe<MultiFormatString>;
  title?: Maybe<Scalars['String']['output']>;
};

export type FeatureItemModelArrayFilter = {
  _apply?: InputMaybe<ArrayMode>;
  _instances?: InputMaybe<Scalars['Int']['input']>;
  _match?: InputMaybe<FeatureItemModelFilter>;
};

export type FeatureItemModelConnection = {
  edges: Array<Maybe<FeatureItemModelEdge>>;
  pageInfo: PageInfo;
};

export type FeatureItemModelEdge = {
  cursor: Scalars['String']['output'];
  node: FeatureItemModel;
};

export type FeatureItemModelFilter = {
  _logOp?: InputMaybe<LogOp>;
  _path?: InputMaybe<IdFilter>;
  _tags?: InputMaybe<StringArrayFilter>;
  _variation?: InputMaybe<StringFilter>;
  _variations?: InputMaybe<StringArrayFilter>;
  description?: InputMaybe<MultiFormatStringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type FeatureItemModelResult = {
  _references?: Maybe<Array<Maybe<Reference>>>;
  item: FeatureItemModel;
};

export type FeatureItemModelResults = {
  _references?: Maybe<Array<Maybe<Reference>>>;
  items: Array<Maybe<FeatureItemModel>>;
};

export type FloatArrayFilter = {
  _expressions: Array<InputMaybe<FloatArrayFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type FloatArrayFilterExpression = {
  _apply?: InputMaybe<ArrayMode>;
  _instances?: InputMaybe<Scalars['Int']['input']>;
  _operator?: InputMaybe<FloatOperator>;
  _sensitiveness?: InputMaybe<Scalars['Float']['input']>;
  value?: InputMaybe<Scalars['Float']['input']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type FloatArrayMetadata = {
  name: Scalars['String']['output'];
  value: Array<Maybe<Scalars['Float']['output']>>;
};

export type FloatFilter = {
  _expressions: Array<InputMaybe<FloatFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type FloatFilterExpression = {
  _operator?: InputMaybe<FloatOperator>;
  _sensitiveness?: InputMaybe<Scalars['Float']['input']>;
  value?: InputMaybe<Scalars['Float']['input']>;
};

export type FloatMetadata = {
  name: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

export enum FloatOperator {
  Equal = 'EQUAL',
  Greater = 'GREATER',
  GreaterEqual = 'GREATER_EQUAL',
  Lower = 'LOWER',
  LowerEqual = 'LOWER_EQUAL',
  Unequal = 'UNEQUAL'
}

export type FooterColumnModel = {
  _metadata?: Maybe<TypedMetaData>;
  _model?: Maybe<ModelInfo>;
  _path?: Maybe<Scalars['ID']['output']>;
  _tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _variation?: Maybe<Scalars['String']['output']>;
  _variations?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  links?: Maybe<Array<Maybe<NavLinkModel>>>;
  sectionTitle?: Maybe<Scalars['String']['output']>;
};

export type FooterColumnModelArrayFilter = {
  _apply?: InputMaybe<ArrayMode>;
  _instances?: InputMaybe<Scalars['Int']['input']>;
  _match?: InputMaybe<FooterColumnModelFilter>;
};

export type FooterColumnModelConnection = {
  edges: Array<Maybe<FooterColumnModelEdge>>;
  pageInfo: PageInfo;
};

export type FooterColumnModelEdge = {
  cursor: Scalars['String']['output'];
  node: FooterColumnModel;
};

export type FooterColumnModelFilter = {
  _logOp?: InputMaybe<LogOp>;
  _path?: InputMaybe<IdFilter>;
  _tags?: InputMaybe<StringArrayFilter>;
  _variation?: InputMaybe<StringFilter>;
  _variations?: InputMaybe<StringArrayFilter>;
  links?: InputMaybe<NavLinkModelArrayFilter>;
  sectionTitle?: InputMaybe<StringFilter>;
};

export type FooterColumnModelResult = {
  _references?: Maybe<Array<Maybe<Reference>>>;
  item: FooterColumnModel;
};

export type FooterColumnModelResults = {
  _references?: Maybe<Array<Maybe<Reference>>>;
  items: Array<Maybe<FooterColumnModel>>;
};

export type GenericContentFragmentModel = {
  _metadata?: Maybe<TypedMetaData>;
  _model?: Maybe<ModelInfo>;
  _path?: Maybe<Scalars['ID']['output']>;
  _tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _variation?: Maybe<Scalars['String']['output']>;
  _variations?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  cfText?: Maybe<MultiFormatString>;
};

export type GenericContentFragmentModelArrayFilter = {
  _apply?: InputMaybe<ArrayMode>;
  _instances?: InputMaybe<Scalars['Int']['input']>;
  _match?: InputMaybe<GenericContentFragmentModelFilter>;
};

export type GenericContentFragmentModelConnection = {
  edges: Array<Maybe<GenericContentFragmentModelEdge>>;
  pageInfo: PageInfo;
};

export type GenericContentFragmentModelEdge = {
  cursor: Scalars['String']['output'];
  node: GenericContentFragmentModel;
};

export type GenericContentFragmentModelFilter = {
  _logOp?: InputMaybe<LogOp>;
  _path?: InputMaybe<IdFilter>;
  _tags?: InputMaybe<StringArrayFilter>;
  _variation?: InputMaybe<StringFilter>;
  _variations?: InputMaybe<StringArrayFilter>;
  cfText?: InputMaybe<MultiFormatStringFilter>;
};

export type GenericContentFragmentModelResult = {
  _references?: Maybe<Array<Maybe<Reference>>>;
  item: GenericContentFragmentModel;
};

export type GenericContentFragmentModelResults = {
  _references?: Maybe<Array<Maybe<Reference>>>;
  items: Array<Maybe<GenericContentFragmentModel>>;
};

export type HeroBannerModel = {
  _metadata?: Maybe<TypedMetaData>;
  _model?: Maybe<ModelInfo>;
  _path?: Maybe<Scalars['ID']['output']>;
  _tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _variation?: Maybe<Scalars['String']['output']>;
  _variations?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  image?: Maybe<Scalars['String']['output']>;
  primaryCtaLabel?: Maybe<Scalars['String']['output']>;
  primaryCtaUrl?: Maybe<Scalars['String']['output']>;
  secondaryCtaLabel?: Maybe<Scalars['String']['output']>;
  secondaryCtaUrl?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<MultiFormatString>;
  title?: Maybe<Scalars['String']['output']>;
};

export type HeroBannerModelArrayFilter = {
  _apply?: InputMaybe<ArrayMode>;
  _instances?: InputMaybe<Scalars['Int']['input']>;
  _match?: InputMaybe<HeroBannerModelFilter>;
};

export type HeroBannerModelConnection = {
  edges: Array<Maybe<HeroBannerModelEdge>>;
  pageInfo: PageInfo;
};

export type HeroBannerModelEdge = {
  cursor: Scalars['String']['output'];
  node: HeroBannerModel;
};

export type HeroBannerModelFilter = {
  _logOp?: InputMaybe<LogOp>;
  _path?: InputMaybe<IdFilter>;
  _tags?: InputMaybe<StringArrayFilter>;
  _variation?: InputMaybe<StringFilter>;
  _variations?: InputMaybe<StringArrayFilter>;
  image?: InputMaybe<StringFilter>;
  primaryCtaLabel?: InputMaybe<StringFilter>;
  primaryCtaUrl?: InputMaybe<StringFilter>;
  secondaryCtaLabel?: InputMaybe<StringFilter>;
  secondaryCtaUrl?: InputMaybe<StringFilter>;
  subtitle?: InputMaybe<MultiFormatStringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type HeroBannerModelResult = {
  _references?: Maybe<Array<Maybe<Reference>>>;
  item: HeroBannerModel;
};

export type HeroBannerModelResults = {
  _references?: Maybe<Array<Maybe<Reference>>>;
  items: Array<Maybe<HeroBannerModel>>;
};

export type HlcCheckboxModel = {
  _metadata?: Maybe<TypedMetaData>;
  _model?: Maybe<ModelInfo>;
  _path?: Maybe<Scalars['ID']['output']>;
  _tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _variation?: Maybe<Scalars['String']['output']>;
  _variations?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  fieldDescription?: Maybe<MultiFormatString>;
  fieldTitle?: Maybe<Scalars['String']['output']>;
  wpWarningMsg?: Maybe<MultiFormatString>;
};

export type HlcCheckboxModelArrayFilter = {
  _apply?: InputMaybe<ArrayMode>;
  _instances?: InputMaybe<Scalars['Int']['input']>;
  _match?: InputMaybe<HlcCheckboxModelFilter>;
};

export type HlcCheckboxModelConnection = {
  edges: Array<Maybe<HlcCheckboxModelEdge>>;
  pageInfo: PageInfo;
};

export type HlcCheckboxModelEdge = {
  cursor: Scalars['String']['output'];
  node: HlcCheckboxModel;
};

export type HlcCheckboxModelFilter = {
  _logOp?: InputMaybe<LogOp>;
  _path?: InputMaybe<IdFilter>;
  _tags?: InputMaybe<StringArrayFilter>;
  _variation?: InputMaybe<StringFilter>;
  _variations?: InputMaybe<StringArrayFilter>;
  fieldDescription?: InputMaybe<MultiFormatStringFilter>;
  fieldTitle?: InputMaybe<StringFilter>;
  wpWarningMsg?: InputMaybe<MultiFormatStringFilter>;
};

export type HlcCheckboxModelResult = {
  _references?: Maybe<Array<Maybe<Reference>>>;
  item: HlcCheckboxModel;
};

export type HlcCheckboxModelResults = {
  _references?: Maybe<Array<Maybe<Reference>>>;
  items: Array<Maybe<HlcCheckboxModel>>;
};

export type HlcCompareCardModel = {
  _metadata?: Maybe<TypedMetaData>;
  _model?: Maybe<ModelInfo>;
  _path?: Maybe<Scalars['ID']['output']>;
  _tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _variation?: Maybe<Scalars['String']['output']>;
  _variations?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  accordionTitle?: Maybe<Scalars['String']['output']>;
  additionalText?: Maybe<MultiFormatString>;
  additionalTextInterestOnly?: Maybe<MultiFormatString>;
  analyticsLabel?: Maybe<Scalars['String']['output']>;
  benefitsContent?: Maybe<MultiFormatString>;
  benefitsContentWithoutWealthPackage?: Maybe<MultiFormatString>;
  cardTitle?: Maybe<Scalars['String']['output']>;
  collapseOnDesktop?: Maybe<Scalars['Boolean']['output']>;
  columnOneSuffix?: Maybe<Scalars['String']['output']>;
  columnOneTitle?: Maybe<MultiFormatString>;
  columnOneValueKey?: Maybe<Scalars['String']['output']>;
  columnTwoSuffix?: Maybe<Scalars['String']['output']>;
  columnTwoTitle?: Maybe<MultiFormatString>;
  columnTwoValueKey?: Maybe<Scalars['String']['output']>;
  defaultRepaymentType?: Maybe<Scalars['String']['output']>;
  digihomeLvrMessage1?: Maybe<MultiFormatString>;
  expandOnMobile?: Maybe<Scalars['Boolean']['output']>;
  fallbackDescription1?: Maybe<MultiFormatString>;
  feeContent?: Maybe<MultiFormatString>;
  feeContentWithoutPackage?: Maybe<MultiFormatString>;
  hideAccordion?: Maybe<Scalars['Boolean']['output']>;
  hideRepayment?: Maybe<Scalars['Boolean']['output']>;
  includeDivider?: Maybe<Scalars['Boolean']['output']>;
  loanAmountExceedMessage1?: Maybe<MultiFormatString>;
  lvrEightyInterestOwnerMessage?: Maybe<MultiFormatString>;
  lvrInterestInvestmentMessage?: Maybe<MultiFormatString>;
  minLoanMessage1?: Maybe<MultiFormatString>;
  productCategory?: Maybe<Scalars['String']['output']>;
  productDescription?: Maybe<MultiFormatString>;
  sectionTitle?: Maybe<Scalars['String']['output']>;
  sectionTitleInterest?: Maybe<Scalars['String']['output']>;
  tellMeMoreLink?: Maybe<MultiFormatString>;
  tradeoffsContent?: Maybe<MultiFormatString>;
  tradeoffsWithoutPackage?: Maybe<MultiFormatString>;
};

export type HlcCompareCardModelArrayFilter = {
  _apply?: InputMaybe<ArrayMode>;
  _instances?: InputMaybe<Scalars['Int']['input']>;
  _match?: InputMaybe<HlcCompareCardModelFilter>;
};

export type HlcCompareCardModelConnection = {
  edges: Array<Maybe<HlcCompareCardModelEdge>>;
  pageInfo: PageInfo;
};

export type HlcCompareCardModelEdge = {
  cursor: Scalars['String']['output'];
  node: HlcCompareCardModel;
};

export type HlcCompareCardModelFilter = {
  _logOp?: InputMaybe<LogOp>;
  _path?: InputMaybe<IdFilter>;
  _tags?: InputMaybe<StringArrayFilter>;
  _variation?: InputMaybe<StringFilter>;
  _variations?: InputMaybe<StringArrayFilter>;
  accordionTitle?: InputMaybe<StringFilter>;
  additionalText?: InputMaybe<MultiFormatStringFilter>;
  additionalTextInterestOnly?: InputMaybe<MultiFormatStringFilter>;
  analyticsLabel?: InputMaybe<StringFilter>;
  benefitsContent?: InputMaybe<MultiFormatStringFilter>;
  benefitsContentWithoutWealthPackage?: InputMaybe<MultiFormatStringFilter>;
  cardTitle?: InputMaybe<StringFilter>;
  collapseOnDesktop?: InputMaybe<BooleanFilter>;
  columnOneSuffix?: InputMaybe<StringFilter>;
  columnOneTitle?: InputMaybe<MultiFormatStringFilter>;
  columnOneValueKey?: InputMaybe<StringFilter>;
  columnTwoSuffix?: InputMaybe<StringFilter>;
  columnTwoTitle?: InputMaybe<MultiFormatStringFilter>;
  columnTwoValueKey?: InputMaybe<StringFilter>;
  defaultRepaymentType?: InputMaybe<StringFilter>;
  digihomeLvrMessage1?: InputMaybe<MultiFormatStringFilter>;
  expandOnMobile?: InputMaybe<BooleanFilter>;
  fallbackDescription1?: InputMaybe<MultiFormatStringFilter>;
  feeContent?: InputMaybe<MultiFormatStringFilter>;
  feeContentWithoutPackage?: InputMaybe<MultiFormatStringFilter>;
  hideAccordion?: InputMaybe<BooleanFilter>;
  hideRepayment?: InputMaybe<BooleanFilter>;
  includeDivider?: InputMaybe<BooleanFilter>;
  loanAmountExceedMessage1?: InputMaybe<MultiFormatStringFilter>;
  lvrEightyInterestOwnerMessage?: InputMaybe<MultiFormatStringFilter>;
  lvrInterestInvestmentMessage?: InputMaybe<MultiFormatStringFilter>;
  minLoanMessage1?: InputMaybe<MultiFormatStringFilter>;
  productCategory?: InputMaybe<StringFilter>;
  productDescription?: InputMaybe<MultiFormatStringFilter>;
  sectionTitle?: InputMaybe<StringFilter>;
  sectionTitleInterest?: InputMaybe<StringFilter>;
  tellMeMoreLink?: InputMaybe<MultiFormatStringFilter>;
  tradeoffsContent?: InputMaybe<MultiFormatStringFilter>;
  tradeoffsWithoutPackage?: InputMaybe<MultiFormatStringFilter>;
};

export type HlcCompareCardModelResult = {
  _references?: Maybe<Array<Maybe<Reference>>>;
  item: HlcCompareCardModel;
};

export type HlcCompareCardModelResults = {
  _references?: Maybe<Array<Maybe<Reference>>>;
  items: Array<Maybe<HlcCompareCardModel>>;
};

export type HlcToggleOptionModel = {
  _metadata?: Maybe<TypedMetaData>;
  _model?: Maybe<ModelInfo>;
  _path?: Maybe<Scalars['ID']['output']>;
  _tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _variation?: Maybe<Scalars['String']['output']>;
  _variations?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  amountFieldDefaultValue?: Maybe<Scalars['String']['output']>;
  amountFieldTitle?: Maybe<MultiFormatString>;
  defaultOptionId?: Maybe<Scalars['String']['output']>;
  fieldDescription?: Maybe<MultiFormatString>;
  fieldTitle?: Maybe<Scalars['String']['output']>;
  fieldType?: Maybe<Scalars['String']['output']>;
  option1Id?: Maybe<Scalars['String']['output']>;
  option1Label?: Maybe<Scalars['String']['output']>;
  option2Id?: Maybe<Scalars['String']['output']>;
  option2Label?: Maybe<Scalars['String']['output']>;
  option3Id?: Maybe<Scalars['String']['output']>;
  option3Label?: Maybe<Scalars['String']['output']>;
  productName?: Maybe<Scalars['String']['output']>;
};

export type HlcToggleOptionModelArrayFilter = {
  _apply?: InputMaybe<ArrayMode>;
  _instances?: InputMaybe<Scalars['Int']['input']>;
  _match?: InputMaybe<HlcToggleOptionModelFilter>;
};

export type HlcToggleOptionModelConnection = {
  edges: Array<Maybe<HlcToggleOptionModelEdge>>;
  pageInfo: PageInfo;
};

export type HlcToggleOptionModelEdge = {
  cursor: Scalars['String']['output'];
  node: HlcToggleOptionModel;
};

export type HlcToggleOptionModelFilter = {
  _logOp?: InputMaybe<LogOp>;
  _path?: InputMaybe<IdFilter>;
  _tags?: InputMaybe<StringArrayFilter>;
  _variation?: InputMaybe<StringFilter>;
  _variations?: InputMaybe<StringArrayFilter>;
  amountFieldDefaultValue?: InputMaybe<StringFilter>;
  amountFieldTitle?: InputMaybe<MultiFormatStringFilter>;
  defaultOptionId?: InputMaybe<StringFilter>;
  fieldDescription?: InputMaybe<MultiFormatStringFilter>;
  fieldTitle?: InputMaybe<StringFilter>;
  fieldType?: InputMaybe<StringFilter>;
  option1Id?: InputMaybe<StringFilter>;
  option1Label?: InputMaybe<StringFilter>;
  option2Id?: InputMaybe<StringFilter>;
  option2Label?: InputMaybe<StringFilter>;
  option3Id?: InputMaybe<StringFilter>;
  option3Label?: InputMaybe<StringFilter>;
  productName?: InputMaybe<StringFilter>;
};

export type HlcToggleOptionModelResult = {
  _references?: Maybe<Array<Maybe<Reference>>>;
  item: HlcToggleOptionModel;
};

export type HlcToggleOptionModelResults = {
  _references?: Maybe<Array<Maybe<Reference>>>;
  items: Array<Maybe<HlcToggleOptionModel>>;
};

export type HomeLoanProductModel = {
  _metadata?: Maybe<TypedMetaData>;
  _model?: Maybe<ModelInfo>;
  _path?: Maybe<Scalars['ID']['output']>;
  _tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _variation?: Maybe<Scalars['String']['output']>;
  _variations?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  disclaimers?: Maybe<Array<Maybe<DisclaimerModel>>>;
  lastUpdate?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  productSlug?: Maybe<Scalars['String']['output']>;
  rateEntries?: Maybe<Array<Maybe<RateEntryModel>>>;
  sourceId?: Maybe<Scalars['String']['output']>;
};

export type HomeLoanProductModelArrayFilter = {
  _apply?: InputMaybe<ArrayMode>;
  _instances?: InputMaybe<Scalars['Int']['input']>;
  _match?: InputMaybe<HomeLoanProductModelFilter>;
};

export type HomeLoanProductModelConnection = {
  edges: Array<Maybe<HomeLoanProductModelEdge>>;
  pageInfo: PageInfo;
};

export type HomeLoanProductModelEdge = {
  cursor: Scalars['String']['output'];
  node: HomeLoanProductModel;
};

export type HomeLoanProductModelFilter = {
  _logOp?: InputMaybe<LogOp>;
  _path?: InputMaybe<IdFilter>;
  _tags?: InputMaybe<StringArrayFilter>;
  _variation?: InputMaybe<StringFilter>;
  _variations?: InputMaybe<StringArrayFilter>;
  disclaimers?: InputMaybe<DisclaimerModelArrayFilter>;
  lastUpdate?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  productSlug?: InputMaybe<StringFilter>;
  rateEntries?: InputMaybe<RateEntryModelArrayFilter>;
  sourceId?: InputMaybe<StringFilter>;
};

export type HomeLoanProductModelResult = {
  _references?: Maybe<Array<Maybe<Reference>>>;
  item: HomeLoanProductModel;
};

export type HomeLoanProductModelResults = {
  _references?: Maybe<Array<Maybe<Reference>>>;
  items: Array<Maybe<HomeLoanProductModel>>;
};

export type HomeLoansPageModel = {
  _metadata?: Maybe<TypedMetaData>;
  _model?: Maybe<ModelInfo>;
  _path?: Maybe<Scalars['ID']['output']>;
  _tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _variation?: Maybe<Scalars['String']['output']>;
  _variations?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  hero?: Maybe<HeroBannerModel>;
  productCards?: Maybe<Array<Maybe<ProductCardModel>>>;
  whyChooseItems?: Maybe<Array<Maybe<FeatureItemModel>>>;
};

export type HomeLoansPageModelArrayFilter = {
  _apply?: InputMaybe<ArrayMode>;
  _instances?: InputMaybe<Scalars['Int']['input']>;
  _match?: InputMaybe<HomeLoansPageModelFilter>;
};

export type HomeLoansPageModelConnection = {
  edges: Array<Maybe<HomeLoansPageModelEdge>>;
  pageInfo: PageInfo;
};

export type HomeLoansPageModelEdge = {
  cursor: Scalars['String']['output'];
  node: HomeLoansPageModel;
};

export type HomeLoansPageModelFilter = {
  _logOp?: InputMaybe<LogOp>;
  _path?: InputMaybe<IdFilter>;
  _tags?: InputMaybe<StringArrayFilter>;
  _variation?: InputMaybe<StringFilter>;
  _variations?: InputMaybe<StringArrayFilter>;
  hero?: InputMaybe<HeroBannerModelFilter>;
  productCards?: InputMaybe<ProductCardModelArrayFilter>;
  whyChooseItems?: InputMaybe<FeatureItemModelArrayFilter>;
};

export type HomeLoansPageModelResult = {
  _references?: Maybe<Array<Maybe<Reference>>>;
  item: HomeLoansPageModel;
};

export type HomeLoansPageModelResults = {
  _references?: Maybe<Array<Maybe<Reference>>>;
  items: Array<Maybe<HomeLoansPageModel>>;
};

export type IdArrayFilter = {
  _expressions: Array<InputMaybe<IdArrayFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type IdArrayFilterExpression = {
  _apply?: InputMaybe<ArrayMode>;
  _instances?: InputMaybe<Scalars['Int']['input']>;
  _operator?: InputMaybe<IdOperator>;
  value?: InputMaybe<Scalars['ID']['input']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type IdFilter = {
  _expressions: Array<InputMaybe<IdFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type IdFilterExpression = {
  _operator?: InputMaybe<IdOperator>;
  value?: InputMaybe<Scalars['ID']['input']>;
};

export enum IdOperator {
  Equals = 'EQUALS',
  EqualsNot = 'EQUALS_NOT',
  StartsWith = 'STARTS_WITH'
}

export type ImageRef = {
  _authorUrl?: Maybe<Scalars['String']['output']>;
  _path?: Maybe<Scalars['ID']['output']>;
  _publishUrl?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type IntArrayFilter = {
  _expressions: Array<InputMaybe<IntArrayFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type IntArrayFilterExpression = {
  _apply?: InputMaybe<ArrayMode>;
  _instances?: InputMaybe<Scalars['Int']['input']>;
  _operator?: InputMaybe<IntOperator>;
  value?: InputMaybe<Scalars['Int']['input']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type IntArrayMetadata = {
  name: Scalars['String']['output'];
  value: Array<Maybe<Scalars['Int']['output']>>;
};

export type IntFilter = {
  _expressions: Array<InputMaybe<IntFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type IntFilterExpression = {
  _operator?: InputMaybe<IntOperator>;
  value?: InputMaybe<Scalars['Int']['input']>;
};

export type IntMetadata = {
  name: Scalars['String']['output'];
  value: Scalars['Int']['output'];
};

export enum IntOperator {
  Equal = 'EQUAL',
  Greater = 'GREATER',
  GreaterEqual = 'GREATER_EQUAL',
  Lower = 'LOWER',
  LowerEqual = 'LOWER_EQUAL',
  Unequal = 'UNEQUAL'
}

export type LinkModelModel = {
  _metadata?: Maybe<TypedMetaData>;
  _model?: Maybe<ModelInfo>;
  _path?: Maybe<Scalars['ID']['output']>;
  _tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _variation?: Maybe<Scalars['String']['output']>;
  _variations?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  pageTitle?: Maybe<Scalars['String']['output']>;
  pageUrl?: Maybe<Scalars['String']['output']>;
};

export type LinkModelModelArrayFilter = {
  _apply?: InputMaybe<ArrayMode>;
  _instances?: InputMaybe<Scalars['Int']['input']>;
  _match?: InputMaybe<LinkModelModelFilter>;
};

export type LinkModelModelConnection = {
  edges: Array<Maybe<LinkModelModelEdge>>;
  pageInfo: PageInfo;
};

export type LinkModelModelEdge = {
  cursor: Scalars['String']['output'];
  node: LinkModelModel;
};

export type LinkModelModelFilter = {
  _logOp?: InputMaybe<LogOp>;
  _path?: InputMaybe<IdFilter>;
  _tags?: InputMaybe<StringArrayFilter>;
  _variation?: InputMaybe<StringFilter>;
  _variations?: InputMaybe<StringArrayFilter>;
  pageTitle?: InputMaybe<StringFilter>;
  pageUrl?: InputMaybe<StringFilter>;
};

export type LinkModelModelResult = {
  _references?: Maybe<Array<Maybe<Reference>>>;
  item: LinkModelModel;
};

export type LinkModelModelResults = {
  _references?: Maybe<Array<Maybe<Reference>>>;
  items: Array<Maybe<LinkModelModel>>;
};

export enum LogOp {
  And = 'AND',
  Or = 'OR'
}

export type MdcResultMappingModelModel = {
  _metadata?: Maybe<TypedMetaData>;
  _model?: Maybe<ModelInfo>;
  _path?: Maybe<Scalars['ID']['output']>;
  _tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _variation?: Maybe<Scalars['String']['output']>;
  _variations?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  primaryDropdown?: Maybe<Scalars['String']['output']>;
  resultFragments?: Maybe<Array<Maybe<AllFragmentModels>>>;
  resultHeading?: Maybe<Scalars['String']['output']>;
  secondaryDropdown?: Maybe<Scalars['String']['output']>;
};

export type MdcResultMappingModelModelArrayFilter = {
  _apply?: InputMaybe<ArrayMode>;
  _instances?: InputMaybe<Scalars['Int']['input']>;
  _match?: InputMaybe<MdcResultMappingModelModelFilter>;
};

export type MdcResultMappingModelModelConnection = {
  edges: Array<Maybe<MdcResultMappingModelModelEdge>>;
  pageInfo: PageInfo;
};

export type MdcResultMappingModelModelEdge = {
  cursor: Scalars['String']['output'];
  node: MdcResultMappingModelModel;
};

export type MdcResultMappingModelModelFilter = {
  _logOp?: InputMaybe<LogOp>;
  _path?: InputMaybe<IdFilter>;
  _tags?: InputMaybe<StringArrayFilter>;
  _variation?: InputMaybe<StringFilter>;
  _variations?: InputMaybe<StringArrayFilter>;
  primaryDropdown?: InputMaybe<StringFilter>;
  resultHeading?: InputMaybe<StringFilter>;
  secondaryDropdown?: InputMaybe<StringFilter>;
};

export type MdcResultMappingModelModelResult = {
  _references?: Maybe<Array<Maybe<Reference>>>;
  item: MdcResultMappingModelModel;
};

export type MdcResultMappingModelModelResults = {
  _references?: Maybe<Array<Maybe<Reference>>>;
  items: Array<Maybe<MdcResultMappingModelModel>>;
};

export type ModelInfo = {
  _path?: Maybe<Scalars['ID']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type MultiFormatString = {
  html?: Maybe<Scalars['String']['output']>;
  json?: Maybe<Scalars['Json']['output']>;
  markdown?: Maybe<Scalars['String']['output']>;
  plaintext?: Maybe<Scalars['String']['output']>;
};

export type MultiFormatStringArrayFilter = {
  _apply?: InputMaybe<ArrayMode>;
  _instances?: InputMaybe<Scalars['Int']['input']>;
  _match?: InputMaybe<MultiFormatStringFilter>;
};

export type MultiFormatStringFilter = {
  _logOp?: InputMaybe<LogOp>;
  html?: InputMaybe<StringFilter>;
  markdown?: InputMaybe<StringFilter>;
  plaintext?: InputMaybe<StringFilter>;
};

export type MultimediaRef = {
  _authorUrl?: Maybe<Scalars['String']['output']>;
  _path?: Maybe<Scalars['ID']['output']>;
  _publishUrl?: Maybe<Scalars['String']['output']>;
  format?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type NavLinkModel = {
  _metadata?: Maybe<TypedMetaData>;
  _model?: Maybe<ModelInfo>;
  _path?: Maybe<Scalars['ID']['output']>;
  _tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _variation?: Maybe<Scalars['String']['output']>;
  _variations?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  label?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type NavLinkModelArrayFilter = {
  _apply?: InputMaybe<ArrayMode>;
  _instances?: InputMaybe<Scalars['Int']['input']>;
  _match?: InputMaybe<NavLinkModelFilter>;
};

export type NavLinkModelConnection = {
  edges: Array<Maybe<NavLinkModelEdge>>;
  pageInfo: PageInfo;
};

export type NavLinkModelEdge = {
  cursor: Scalars['String']['output'];
  node: NavLinkModel;
};

export type NavLinkModelFilter = {
  _logOp?: InputMaybe<LogOp>;
  _path?: InputMaybe<IdFilter>;
  _tags?: InputMaybe<StringArrayFilter>;
  _variation?: InputMaybe<StringFilter>;
  _variations?: InputMaybe<StringArrayFilter>;
  label?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type NavLinkModelResult = {
  _references?: Maybe<Array<Maybe<Reference>>>;
  item: NavLinkModel;
};

export type NavLinkModelResults = {
  _references?: Maybe<Array<Maybe<Reference>>>;
  items: Array<Maybe<NavLinkModel>>;
};

export type PageInfo = {
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PageModel = {
  _metadata?: Maybe<TypedMetaData>;
  _model?: Maybe<ModelInfo>;
  _path?: Maybe<Scalars['ID']['output']>;
  _tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _variation?: Maybe<Scalars['String']['output']>;
  _variations?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  path?: Maybe<Scalars['String']['output']>;
  sections?: Maybe<Array<Maybe<AllFragmentModels>>>;
  seoDescription?: Maybe<MultiFormatString>;
  seoTitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type PageModelArrayFilter = {
  _apply?: InputMaybe<ArrayMode>;
  _instances?: InputMaybe<Scalars['Int']['input']>;
  _match?: InputMaybe<PageModelFilter>;
};

export type PageModelConnection = {
  edges: Array<Maybe<PageModelEdge>>;
  pageInfo: PageInfo;
};

export type PageModelEdge = {
  cursor: Scalars['String']['output'];
  node: PageModel;
};

export type PageModelFilter = {
  _logOp?: InputMaybe<LogOp>;
  _path?: InputMaybe<IdFilter>;
  _tags?: InputMaybe<StringArrayFilter>;
  _variation?: InputMaybe<StringFilter>;
  _variations?: InputMaybe<StringArrayFilter>;
  path?: InputMaybe<StringFilter>;
  seoTitle?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type PageModelResult = {
  _references?: Maybe<Array<Maybe<Reference>>>;
  item: PageModel;
};

export type PageModelResults = {
  _references?: Maybe<Array<Maybe<Reference>>>;
  items: Array<Maybe<PageModel>>;
};

export type PageRef = {
  _authorUrl?: Maybe<Scalars['String']['output']>;
  _path?: Maybe<Scalars['ID']['output']>;
  _publishUrl?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ProductCardModel = {
  _metadata?: Maybe<TypedMetaData>;
  _model?: Maybe<ModelInfo>;
  _path?: Maybe<Scalars['ID']['output']>;
  _tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _variation?: Maybe<Scalars['String']['output']>;
  _variations?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  bullets?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  description?: Maybe<MultiFormatString>;
  href?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ProductCardModelArrayFilter = {
  _apply?: InputMaybe<ArrayMode>;
  _instances?: InputMaybe<Scalars['Int']['input']>;
  _match?: InputMaybe<ProductCardModelFilter>;
};

export type ProductCardModelConnection = {
  edges: Array<Maybe<ProductCardModelEdge>>;
  pageInfo: PageInfo;
};

export type ProductCardModelEdge = {
  cursor: Scalars['String']['output'];
  node: ProductCardModel;
};

export type ProductCardModelFilter = {
  _logOp?: InputMaybe<LogOp>;
  _path?: InputMaybe<IdFilter>;
  _tags?: InputMaybe<StringArrayFilter>;
  _variation?: InputMaybe<StringFilter>;
  _variations?: InputMaybe<StringArrayFilter>;
  bullets?: InputMaybe<StringArrayFilter>;
  description?: InputMaybe<MultiFormatStringFilter>;
  href?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ProductCardModelResult = {
  _references?: Maybe<Array<Maybe<Reference>>>;
  item: ProductCardModel;
};

export type ProductCardModelResults = {
  _references?: Maybe<Array<Maybe<Reference>>>;
  items: Array<Maybe<ProductCardModel>>;
};

export type QueryType = {
  /** Get a single `articleListModel`, specified by its path and optional variation */
  articleListModelByPath: ArticleListModelModelResult;
  /** Get multiple `articleListModel` objects */
  articleListModelList: ArticleListModelModelResults;
  /** Get multiple `articleListModel` objects with cursor-based pagination */
  articleListModelPaginated: ArticleListModelModelConnection;
  /** Get a single `compRate`, specified by its path and optional variation */
  compRateByPath: CompRateModelResult;
  /** Get multiple `compRate` objects */
  compRateList: CompRateModelResults;
  /** Get multiple `compRate` objects with cursor-based pagination */
  compRatePaginated: CompRateModelConnection;
  /** Get a single `disclaimer`, specified by its path and optional variation */
  disclaimerByPath: DisclaimerModelResult;
  /** Get multiple `disclaimer` objects */
  disclaimerList: DisclaimerModelResults;
  /** Get multiple `disclaimer` objects with cursor-based pagination */
  disclaimerPaginated: DisclaimerModelConnection;
  /** Get a single `featureItem`, specified by its path and optional variation */
  featureItemByPath: FeatureItemModelResult;
  /** Get multiple `featureItem` objects */
  featureItemList: FeatureItemModelResults;
  /** Get multiple `featureItem` objects with cursor-based pagination */
  featureItemPaginated: FeatureItemModelConnection;
  /** Get a single `footerColumn`, specified by its path and optional variation */
  footerColumnByPath: FooterColumnModelResult;
  /** Get multiple `footerColumn` objects */
  footerColumnList: FooterColumnModelResults;
  /** Get multiple `footerColumn` objects with cursor-based pagination */
  footerColumnPaginated: FooterColumnModelConnection;
  /** Get a single `genericContentFragment`, specified by its path and optional variation */
  genericContentFragmentByPath: GenericContentFragmentModelResult;
  /** Get multiple `genericContentFragment` objects */
  genericContentFragmentList: GenericContentFragmentModelResults;
  /** Get multiple `genericContentFragment` objects with cursor-based pagination */
  genericContentFragmentPaginated: GenericContentFragmentModelConnection;
  /** Get a single `heroBanner`, specified by its path and optional variation */
  heroBannerByPath: HeroBannerModelResult;
  /** Get multiple `heroBanner` objects */
  heroBannerList: HeroBannerModelResults;
  /** Get multiple `heroBanner` objects with cursor-based pagination */
  heroBannerPaginated: HeroBannerModelConnection;
  /** Get a single `hlcCheckbox`, specified by its path and optional variation */
  hlcCheckboxByPath: HlcCheckboxModelResult;
  /** Get multiple `hlcCheckbox` objects */
  hlcCheckboxList: HlcCheckboxModelResults;
  /** Get multiple `hlcCheckbox` objects with cursor-based pagination */
  hlcCheckboxPaginated: HlcCheckboxModelConnection;
  /** Get a single `hlcCompareCard`, specified by its path and optional variation */
  hlcCompareCardByPath: HlcCompareCardModelResult;
  /** Get multiple `hlcCompareCard` objects */
  hlcCompareCardList: HlcCompareCardModelResults;
  /** Get multiple `hlcCompareCard` objects with cursor-based pagination */
  hlcCompareCardPaginated: HlcCompareCardModelConnection;
  /** Get a single `hlcToggleOption`, specified by its path and optional variation */
  hlcToggleOptionByPath: HlcToggleOptionModelResult;
  /** Get multiple `hlcToggleOption` objects */
  hlcToggleOptionList: HlcToggleOptionModelResults;
  /** Get multiple `hlcToggleOption` objects with cursor-based pagination */
  hlcToggleOptionPaginated: HlcToggleOptionModelConnection;
  /** Get a single `homeLoanProduct`, specified by its path and optional variation */
  homeLoanProductByPath: HomeLoanProductModelResult;
  /** Get multiple `homeLoanProduct` objects */
  homeLoanProductList: HomeLoanProductModelResults;
  /** Get multiple `homeLoanProduct` objects with cursor-based pagination */
  homeLoanProductPaginated: HomeLoanProductModelConnection;
  /** Get a single `homeLoansPage`, specified by its path and optional variation */
  homeLoansPageByPath: HomeLoansPageModelResult;
  /** Get multiple `homeLoansPage` objects */
  homeLoansPageList: HomeLoansPageModelResults;
  /** Get multiple `homeLoansPage` objects with cursor-based pagination */
  homeLoansPagePaginated: HomeLoansPageModelConnection;
  /** Get a single `linkModel`, specified by its path and optional variation */
  linkModelByPath: LinkModelModelResult;
  /** Get multiple `linkModel` objects */
  linkModelList: LinkModelModelResults;
  /** Get multiple `linkModel` objects with cursor-based pagination */
  linkModelPaginated: LinkModelModelConnection;
  /** Get a single `mdcResultMappingModel`, specified by its path and optional variation */
  mdcResultMappingModelByPath: MdcResultMappingModelModelResult;
  /** Get multiple `mdcResultMappingModel` objects */
  mdcResultMappingModelList: MdcResultMappingModelModelResults;
  /** Get multiple `mdcResultMappingModel` objects with cursor-based pagination */
  mdcResultMappingModelPaginated: MdcResultMappingModelModelConnection;
  /** Get a single `navLink`, specified by its path and optional variation */
  navLinkByPath: NavLinkModelResult;
  /** Get multiple `navLink` objects */
  navLinkList: NavLinkModelResults;
  /** Get multiple `navLink` objects with cursor-based pagination */
  navLinkPaginated: NavLinkModelConnection;
  /** Get a single `page`, specified by its path and optional variation */
  pageByPath: PageModelResult;
  /** Get multiple `page` objects */
  pageList: PageModelResults;
  /** Get multiple `page` objects with cursor-based pagination */
  pagePaginated: PageModelConnection;
  /** Get a single `productCard`, specified by its path and optional variation */
  productCardByPath: ProductCardModelResult;
  /** Get multiple `productCard` objects */
  productCardList: ProductCardModelResults;
  /** Get multiple `productCard` objects with cursor-based pagination */
  productCardPaginated: ProductCardModelConnection;
  /** Get a single `quickLinkModel`, specified by its path and optional variation */
  quickLinkModelByPath: QuickLinkModelModelResult;
  /** Get multiple `quickLinkModel` objects */
  quickLinkModelList: QuickLinkModelModelResults;
  /** Get multiple `quickLinkModel` objects with cursor-based pagination */
  quickLinkModelPaginated: QuickLinkModelModelConnection;
  /** Get a single `rateEntry`, specified by its path and optional variation */
  rateEntryByPath: RateEntryModelResult;
  /** Get multiple `rateEntry` objects */
  rateEntryList: RateEntryModelResults;
  /** Get multiple `rateEntry` objects with cursor-based pagination */
  rateEntryPaginated: RateEntryModelConnection;
  /** Get a single `sectionGroup`, specified by its path and optional variation */
  sectionGroupByPath: SectionGroupModelResult;
  /** Get multiple `sectionGroup` objects */
  sectionGroupList: SectionGroupModelResults;
  /** Get multiple `sectionGroup` objects with cursor-based pagination */
  sectionGroupPaginated: SectionGroupModelConnection;
  /** Get a single `sectionNavItem`, specified by its path and optional variation */
  sectionNavItemByPath: SectionNavItemModelResult;
  /** Get multiple `sectionNavItem` objects */
  sectionNavItemList: SectionNavItemModelResults;
  /** Get multiple `sectionNavItem` objects with cursor-based pagination */
  sectionNavItemPaginated: SectionNavItemModelConnection;
  /** Get a single `siteChrome`, specified by its path and optional variation */
  siteChromeByPath: SiteChromeModelResult;
  /** Get multiple `siteChrome` objects */
  siteChromeList: SiteChromeModelResults;
  /** Get multiple `siteChrome` objects with cursor-based pagination */
  siteChromePaginated: SiteChromeModelConnection;
};


export type QueryTypeArticleListModelByPathArgs = {
  _path: Scalars['String']['input'];
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeArticleListModelListArgs = {
  _locale?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ArticleListModelModelFilter>;
  includeVariations?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeArticleListModelPaginatedArgs = {
  _locale?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ArticleListModelModelFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeVariations?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeCompRateByPathArgs = {
  _path: Scalars['String']['input'];
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeCompRateListArgs = {
  _locale?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CompRateModelFilter>;
  includeVariations?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeCompRatePaginatedArgs = {
  _locale?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CompRateModelFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeVariations?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeDisclaimerByPathArgs = {
  _path: Scalars['String']['input'];
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeDisclaimerListArgs = {
  _locale?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<DisclaimerModelFilter>;
  includeVariations?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeDisclaimerPaginatedArgs = {
  _locale?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<DisclaimerModelFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeVariations?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeFeatureItemByPathArgs = {
  _path: Scalars['String']['input'];
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeFeatureItemListArgs = {
  _locale?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FeatureItemModelFilter>;
  includeVariations?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeFeatureItemPaginatedArgs = {
  _locale?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FeatureItemModelFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeVariations?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeFooterColumnByPathArgs = {
  _path: Scalars['String']['input'];
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeFooterColumnListArgs = {
  _locale?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FooterColumnModelFilter>;
  includeVariations?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeFooterColumnPaginatedArgs = {
  _locale?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FooterColumnModelFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeVariations?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeGenericContentFragmentByPathArgs = {
  _path: Scalars['String']['input'];
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeGenericContentFragmentListArgs = {
  _locale?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<GenericContentFragmentModelFilter>;
  includeVariations?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeGenericContentFragmentPaginatedArgs = {
  _locale?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<GenericContentFragmentModelFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeVariations?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeHeroBannerByPathArgs = {
  _path: Scalars['String']['input'];
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeHeroBannerListArgs = {
  _locale?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<HeroBannerModelFilter>;
  includeVariations?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeHeroBannerPaginatedArgs = {
  _locale?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<HeroBannerModelFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeVariations?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeHlcCheckboxByPathArgs = {
  _path: Scalars['String']['input'];
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeHlcCheckboxListArgs = {
  _locale?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<HlcCheckboxModelFilter>;
  includeVariations?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeHlcCheckboxPaginatedArgs = {
  _locale?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<HlcCheckboxModelFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeVariations?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeHlcCompareCardByPathArgs = {
  _path: Scalars['String']['input'];
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeHlcCompareCardListArgs = {
  _locale?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<HlcCompareCardModelFilter>;
  includeVariations?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeHlcCompareCardPaginatedArgs = {
  _locale?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<HlcCompareCardModelFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeVariations?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeHlcToggleOptionByPathArgs = {
  _path: Scalars['String']['input'];
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeHlcToggleOptionListArgs = {
  _locale?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<HlcToggleOptionModelFilter>;
  includeVariations?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeHlcToggleOptionPaginatedArgs = {
  _locale?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<HlcToggleOptionModelFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeVariations?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeHomeLoanProductByPathArgs = {
  _path: Scalars['String']['input'];
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeHomeLoanProductListArgs = {
  _locale?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<HomeLoanProductModelFilter>;
  includeVariations?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeHomeLoanProductPaginatedArgs = {
  _locale?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<HomeLoanProductModelFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeVariations?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeHomeLoansPageByPathArgs = {
  _path: Scalars['String']['input'];
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeHomeLoansPageListArgs = {
  _locale?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<HomeLoansPageModelFilter>;
  includeVariations?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeHomeLoansPagePaginatedArgs = {
  _locale?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<HomeLoansPageModelFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeVariations?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeLinkModelByPathArgs = {
  _path: Scalars['String']['input'];
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeLinkModelListArgs = {
  _locale?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<LinkModelModelFilter>;
  includeVariations?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeLinkModelPaginatedArgs = {
  _locale?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<LinkModelModelFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeVariations?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeMdcResultMappingModelByPathArgs = {
  _path: Scalars['String']['input'];
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeMdcResultMappingModelListArgs = {
  _locale?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MdcResultMappingModelModelFilter>;
  includeVariations?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeMdcResultMappingModelPaginatedArgs = {
  _locale?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MdcResultMappingModelModelFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeVariations?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeNavLinkByPathArgs = {
  _path: Scalars['String']['input'];
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeNavLinkListArgs = {
  _locale?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<NavLinkModelFilter>;
  includeVariations?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeNavLinkPaginatedArgs = {
  _locale?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<NavLinkModelFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeVariations?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypePageByPathArgs = {
  _path: Scalars['String']['input'];
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypePageListArgs = {
  _locale?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PageModelFilter>;
  includeVariations?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypePagePaginatedArgs = {
  _locale?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PageModelFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeVariations?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeProductCardByPathArgs = {
  _path: Scalars['String']['input'];
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeProductCardListArgs = {
  _locale?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductCardModelFilter>;
  includeVariations?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeProductCardPaginatedArgs = {
  _locale?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductCardModelFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeVariations?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeQuickLinkModelByPathArgs = {
  _path: Scalars['String']['input'];
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeQuickLinkModelListArgs = {
  _locale?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<QuickLinkModelModelFilter>;
  includeVariations?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeQuickLinkModelPaginatedArgs = {
  _locale?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<QuickLinkModelModelFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeVariations?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeRateEntryByPathArgs = {
  _path: Scalars['String']['input'];
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeRateEntryListArgs = {
  _locale?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<RateEntryModelFilter>;
  includeVariations?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeRateEntryPaginatedArgs = {
  _locale?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<RateEntryModelFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeVariations?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeSectionGroupByPathArgs = {
  _path: Scalars['String']['input'];
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeSectionGroupListArgs = {
  _locale?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SectionGroupModelFilter>;
  includeVariations?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeSectionGroupPaginatedArgs = {
  _locale?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SectionGroupModelFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeVariations?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeSectionNavItemByPathArgs = {
  _path: Scalars['String']['input'];
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeSectionNavItemListArgs = {
  _locale?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SectionNavItemModelFilter>;
  includeVariations?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeSectionNavItemPaginatedArgs = {
  _locale?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SectionNavItemModelFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeVariations?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeSiteChromeByPathArgs = {
  _path: Scalars['String']['input'];
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeSiteChromeListArgs = {
  _locale?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SiteChromeModelFilter>;
  includeVariations?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeSiteChromePaginatedArgs = {
  _locale?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SiteChromeModelFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeVariations?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<Scalars['String']['input']>;
};

export type QuickLinkModelModel = {
  _metadata?: Maybe<TypedMetaData>;
  _model?: Maybe<ModelInfo>;
  _path?: Maybe<Scalars['ID']['output']>;
  _tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _variation?: Maybe<Scalars['String']['output']>;
  _variations?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  pictogram?: Maybe<Reference>;
  text?: Maybe<MultiFormatString>;
  title?: Maybe<Scalars['String']['output']>;
};

export type QuickLinkModelModelArrayFilter = {
  _apply?: InputMaybe<ArrayMode>;
  _instances?: InputMaybe<Scalars['Int']['input']>;
  _match?: InputMaybe<QuickLinkModelModelFilter>;
};

export type QuickLinkModelModelConnection = {
  edges: Array<Maybe<QuickLinkModelModelEdge>>;
  pageInfo: PageInfo;
};

export type QuickLinkModelModelEdge = {
  cursor: Scalars['String']['output'];
  node: QuickLinkModelModel;
};

export type QuickLinkModelModelFilter = {
  _logOp?: InputMaybe<LogOp>;
  _path?: InputMaybe<IdFilter>;
  _tags?: InputMaybe<StringArrayFilter>;
  _variation?: InputMaybe<StringFilter>;
  _variations?: InputMaybe<StringArrayFilter>;
  text?: InputMaybe<MultiFormatStringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type QuickLinkModelModelResult = {
  _references?: Maybe<Array<Maybe<Reference>>>;
  item: QuickLinkModelModel;
};

export type QuickLinkModelModelResults = {
  _references?: Maybe<Array<Maybe<Reference>>>;
  items: Array<Maybe<QuickLinkModelModel>>;
};

export type RateEntryModel = {
  _metadata?: Maybe<TypedMetaData>;
  _model?: Maybe<ModelInfo>;
  _path?: Maybe<Scalars['ID']['output']>;
  _tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _variation?: Maybe<Scalars['String']['output']>;
  _variations?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  annualRate?: Maybe<Scalars['String']['output']>;
  busref?: Maybe<Scalars['String']['output']>;
  catref?: Maybe<Scalars['String']['output']>;
  compRates?: Maybe<Array<Maybe<CompRateModel>>>;
  days?: Maybe<Scalars['String']['output']>;
  futRate?: Maybe<Scalars['String']['output']>;
  halfYearlyRate?: Maybe<Scalars['String']['output']>;
  monthlyRate?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  notemark?: Maybe<Scalars['String']['output']>;
  prefix?: Maybe<Scalars['String']['output']>;
  prodref?: Maybe<Scalars['String']['output']>;
  productWebAddress?: Maybe<Scalars['String']['output']>;
  publishstatus?: Maybe<Scalars['String']['output']>;
  quarterlyRate?: Maybe<Scalars['String']['output']>;
  rate?: Maybe<Scalars['String']['output']>;
  sourceId?: Maybe<Scalars['String']['output']>;
  suffix?: Maybe<Scalars['String']['output']>;
};

export type RateEntryModelArrayFilter = {
  _apply?: InputMaybe<ArrayMode>;
  _instances?: InputMaybe<Scalars['Int']['input']>;
  _match?: InputMaybe<RateEntryModelFilter>;
};

export type RateEntryModelConnection = {
  edges: Array<Maybe<RateEntryModelEdge>>;
  pageInfo: PageInfo;
};

export type RateEntryModelEdge = {
  cursor: Scalars['String']['output'];
  node: RateEntryModel;
};

export type RateEntryModelFilter = {
  _logOp?: InputMaybe<LogOp>;
  _path?: InputMaybe<IdFilter>;
  _tags?: InputMaybe<StringArrayFilter>;
  _variation?: InputMaybe<StringFilter>;
  _variations?: InputMaybe<StringArrayFilter>;
  annualRate?: InputMaybe<StringFilter>;
  busref?: InputMaybe<StringFilter>;
  catref?: InputMaybe<StringFilter>;
  compRates?: InputMaybe<CompRateModelArrayFilter>;
  days?: InputMaybe<StringFilter>;
  futRate?: InputMaybe<StringFilter>;
  halfYearlyRate?: InputMaybe<StringFilter>;
  monthlyRate?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  notemark?: InputMaybe<StringFilter>;
  prefix?: InputMaybe<StringFilter>;
  prodref?: InputMaybe<StringFilter>;
  productWebAddress?: InputMaybe<StringFilter>;
  publishstatus?: InputMaybe<StringFilter>;
  quarterlyRate?: InputMaybe<StringFilter>;
  rate?: InputMaybe<StringFilter>;
  sourceId?: InputMaybe<StringFilter>;
  suffix?: InputMaybe<StringFilter>;
};

export type RateEntryModelResult = {
  _references?: Maybe<Array<Maybe<Reference>>>;
  item: RateEntryModel;
};

export type RateEntryModelResults = {
  _references?: Maybe<Array<Maybe<Reference>>>;
  items: Array<Maybe<RateEntryModel>>;
};

export type Reference = ArchiveRef | ArticleListModelModel | CompRateModel | DisclaimerModel | DocumentRef | FeatureItemModel | FooterColumnModel | GenericContentFragmentModel | HeroBannerModel | HlcCheckboxModel | HlcCompareCardModel | HlcToggleOptionModel | HomeLoanProductModel | HomeLoansPageModel | ImageRef | LinkModelModel | MdcResultMappingModelModel | MultimediaRef | NavLinkModel | PageModel | PageRef | ProductCardModel | QuickLinkModelModel | RateEntryModel | SectionGroupModel | SectionNavItemModel | SiteChromeModel;

export type SectionGroupModel = {
  _metadata?: Maybe<TypedMetaData>;
  _model?: Maybe<ModelInfo>;
  _path?: Maybe<Scalars['ID']['output']>;
  _tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _variation?: Maybe<Scalars['String']['output']>;
  _variations?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  heading?: Maybe<Scalars['String']['output']>;
  items?: Maybe<Array<Maybe<AllFragmentModels>>>;
  layout?: Maybe<Scalars['String']['output']>;
};

export type SectionGroupModelArrayFilter = {
  _apply?: InputMaybe<ArrayMode>;
  _instances?: InputMaybe<Scalars['Int']['input']>;
  _match?: InputMaybe<SectionGroupModelFilter>;
};

export type SectionGroupModelConnection = {
  edges: Array<Maybe<SectionGroupModelEdge>>;
  pageInfo: PageInfo;
};

export type SectionGroupModelEdge = {
  cursor: Scalars['String']['output'];
  node: SectionGroupModel;
};

export type SectionGroupModelFilter = {
  _logOp?: InputMaybe<LogOp>;
  _path?: InputMaybe<IdFilter>;
  _tags?: InputMaybe<StringArrayFilter>;
  _variation?: InputMaybe<StringFilter>;
  _variations?: InputMaybe<StringArrayFilter>;
  heading?: InputMaybe<StringFilter>;
  layout?: InputMaybe<StringFilter>;
};

export type SectionGroupModelResult = {
  _references?: Maybe<Array<Maybe<Reference>>>;
  item: SectionGroupModel;
};

export type SectionGroupModelResults = {
  _references?: Maybe<Array<Maybe<Reference>>>;
  items: Array<Maybe<SectionGroupModel>>;
};

export type SectionNavItemModel = {
  _metadata?: Maybe<TypedMetaData>;
  _model?: Maybe<ModelInfo>;
  _path?: Maybe<Scalars['ID']['output']>;
  _tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _variation?: Maybe<Scalars['String']['output']>;
  _variations?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  image?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type SectionNavItemModelArrayFilter = {
  _apply?: InputMaybe<ArrayMode>;
  _instances?: InputMaybe<Scalars['Int']['input']>;
  _match?: InputMaybe<SectionNavItemModelFilter>;
};

export type SectionNavItemModelConnection = {
  edges: Array<Maybe<SectionNavItemModelEdge>>;
  pageInfo: PageInfo;
};

export type SectionNavItemModelEdge = {
  cursor: Scalars['String']['output'];
  node: SectionNavItemModel;
};

export type SectionNavItemModelFilter = {
  _logOp?: InputMaybe<LogOp>;
  _path?: InputMaybe<IdFilter>;
  _tags?: InputMaybe<StringArrayFilter>;
  _variation?: InputMaybe<StringFilter>;
  _variations?: InputMaybe<StringArrayFilter>;
  image?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SectionNavItemModelResult = {
  _references?: Maybe<Array<Maybe<Reference>>>;
  item: SectionNavItemModel;
};

export type SectionNavItemModelResults = {
  _references?: Maybe<Array<Maybe<Reference>>>;
  items: Array<Maybe<SectionNavItemModel>>;
};

export type SiteChromeModel = {
  _metadata?: Maybe<TypedMetaData>;
  _model?: Maybe<ModelInfo>;
  _path?: Maybe<Scalars['ID']['output']>;
  _tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _variation?: Maybe<Scalars['String']['output']>;
  _variations?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  acknowledgementLinkText?: Maybe<Scalars['String']['output']>;
  acknowledgementLinkUrl?: Maybe<Scalars['String']['output']>;
  footerColumns?: Maybe<Array<Maybe<FooterColumnModel>>>;
  footerText?: Maybe<MultiFormatString>;
  navLinks?: Maybe<Array<Maybe<NavLinkModel>>>;
  sectionNavItems?: Maybe<Array<Maybe<SectionNavItemModel>>>;
};

export type SiteChromeModelArrayFilter = {
  _apply?: InputMaybe<ArrayMode>;
  _instances?: InputMaybe<Scalars['Int']['input']>;
  _match?: InputMaybe<SiteChromeModelFilter>;
};

export type SiteChromeModelConnection = {
  edges: Array<Maybe<SiteChromeModelEdge>>;
  pageInfo: PageInfo;
};

export type SiteChromeModelEdge = {
  cursor: Scalars['String']['output'];
  node: SiteChromeModel;
};

export type SiteChromeModelFilter = {
  _logOp?: InputMaybe<LogOp>;
  _path?: InputMaybe<IdFilter>;
  _tags?: InputMaybe<StringArrayFilter>;
  _variation?: InputMaybe<StringFilter>;
  _variations?: InputMaybe<StringArrayFilter>;
  acknowledgementLinkText?: InputMaybe<StringFilter>;
  acknowledgementLinkUrl?: InputMaybe<StringFilter>;
  footerColumns?: InputMaybe<FooterColumnModelArrayFilter>;
  footerText?: InputMaybe<MultiFormatStringFilter>;
  navLinks?: InputMaybe<NavLinkModelArrayFilter>;
  sectionNavItems?: InputMaybe<SectionNavItemModelArrayFilter>;
};

export type SiteChromeModelResult = {
  _references?: Maybe<Array<Maybe<Reference>>>;
  item: SiteChromeModel;
};

export type SiteChromeModelResults = {
  _references?: Maybe<Array<Maybe<Reference>>>;
  items: Array<Maybe<SiteChromeModel>>;
};

export type StringArrayFilter = {
  _expressions: Array<InputMaybe<StringArrayFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type StringArrayFilterExpression = {
  _apply?: InputMaybe<ArrayMode>;
  _ignoreCase?: InputMaybe<Scalars['Boolean']['input']>;
  _instances?: InputMaybe<Scalars['Int']['input']>;
  _operator?: InputMaybe<StringOperator>;
  value?: InputMaybe<Scalars['String']['input']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type StringArrayMetadata = {
  name: Scalars['String']['output'];
  value: Array<Maybe<Scalars['String']['output']>>;
};

export type StringFilter = {
  _expressions: Array<InputMaybe<StringFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type StringFilterExpression = {
  _ignoreCase?: InputMaybe<Scalars['Boolean']['input']>;
  _operator?: InputMaybe<StringOperator>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type StringMetadata = {
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export enum StringOperator {
  Contains = 'CONTAINS',
  ContainsNot = 'CONTAINS_NOT',
  Equals = 'EQUALS',
  EqualsNot = 'EQUALS_NOT'
}

export type TimeArrayFilter = {
  _expressions: Array<InputMaybe<TimeArrayFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type TimeArrayFilterExpression = {
  _apply?: InputMaybe<ArrayMode>;
  _instances?: InputMaybe<Scalars['Int']['input']>;
  _operator?: InputMaybe<TimeOperator>;
  value?: InputMaybe<Scalars['Time']['input']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
};

export type TimeFilter = {
  _expressions: Array<InputMaybe<TimeFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type TimeFilterExpression = {
  _operator?: InputMaybe<TimeOperator>;
  value?: InputMaybe<Scalars['Time']['input']>;
};

export enum TimeOperator {
  After = 'AFTER',
  At = 'AT',
  AtOrAfter = 'AT_OR_AFTER',
  AtOrBefore = 'AT_OR_BEFORE',
  Before = 'BEFORE',
  NotAt = 'NOT_AT'
}

export type TypedMetaData = {
  booleanArrayMetadata: Array<Maybe<BooleanArrayMetadata>>;
  booleanMetadata: Array<Maybe<BooleanMetadata>>;
  calendarArrayMetadata: Array<Maybe<CalendarArrayMetadata>>;
  calendarMetadata: Array<Maybe<CalendarMetadata>>;
  floatArrayMetadata: Array<Maybe<FloatArrayMetadata>>;
  floatMetadata: Array<Maybe<FloatMetadata>>;
  intArrayMetadata: Array<Maybe<IntArrayMetadata>>;
  intMetadata: Array<Maybe<IntMetadata>>;
  stringArrayMetadata: Array<Maybe<StringArrayMetadata>>;
  stringMetadata: Array<Maybe<StringMetadata>>;
};

export type GetHomeLoansPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomeLoansPageQuery = { homeLoansPageList: { items: Array<{ _path: string | null, hero: { _path: string | null, title: string | null, image: string | null, primaryCtaLabel: string | null, primaryCtaUrl: string | null, secondaryCtaLabel: string | null, secondaryCtaUrl: string | null, subtitle: { html: string | null } | null } | null, whyChooseItems: Array<{ _path: string | null, title: string | null, description: { html: string | null } | null } | null> | null, productCards: Array<{ _path: string | null, title: string | null, image: string | null, bullets: Array<string | null> | null, href: string | null, description: { html: string | null } | null } | null> | null } | null> } };

export type GetPageByPathQueryVariables = Exact<{
  path: string;
}>;


export type GetPageByPathQuery = { pageList: { items: Array<{ _path: string | null, title: string | null, path: string | null, seoTitle: string | null, seoDescription: { html: string | null } | null, sections: Array<
        | { __typename: 'ArticleListModelModel' }
        | { __typename: 'CompRateModel' }
        | { __typename: 'DisclaimerModel' }
        | { __typename: 'FeatureItemModel', _path: string | null, title: string | null, description: { html: string | null } | null }
        | { __typename: 'FooterColumnModel' }
        | { __typename: 'GenericContentFragmentModel' }
        | { __typename: 'HeroBannerModel', _path: string | null, title: string | null, image: string | null, primaryCtaLabel: string | null, primaryCtaUrl: string | null, secondaryCtaLabel: string | null, secondaryCtaUrl: string | null, subtitle: { html: string | null } | null }
        | { __typename: 'HlcCheckboxModel' }
        | { __typename: 'HlcCompareCardModel' }
        | { __typename: 'HlcToggleOptionModel' }
        | { __typename: 'HomeLoanProductModel' }
        | { __typename: 'HomeLoansPageModel' }
        | { __typename: 'LinkModelModel' }
        | { __typename: 'MdcResultMappingModelModel' }
        | { __typename: 'NavLinkModel' }
        | { __typename: 'PageModel' }
        | { __typename: 'ProductCardModel', _path: string | null, title: string | null, image: string | null, bullets: Array<string | null> | null, href: string | null, description: { html: string | null } | null }
        | { __typename: 'QuickLinkModelModel' }
        | { __typename: 'RateEntryModel' }
        | { __typename: 'SectionGroupModel', _path: string | null, heading: string | null, layout: string | null, items: Array<
            | { __typename: 'ArticleListModelModel' }
            | { __typename: 'CompRateModel' }
            | { __typename: 'DisclaimerModel' }
            | { __typename: 'FeatureItemModel', _path: string | null, title: string | null, description: { html: string | null } | null }
            | { __typename: 'FooterColumnModel' }
            | { __typename: 'GenericContentFragmentModel' }
            | { __typename: 'HeroBannerModel' }
            | { __typename: 'HlcCheckboxModel' }
            | { __typename: 'HlcCompareCardModel' }
            | { __typename: 'HlcToggleOptionModel' }
            | { __typename: 'HomeLoanProductModel' }
            | { __typename: 'HomeLoansPageModel' }
            | { __typename: 'LinkModelModel' }
            | { __typename: 'MdcResultMappingModelModel' }
            | { __typename: 'NavLinkModel' }
            | { __typename: 'PageModel' }
            | { __typename: 'ProductCardModel', _path: string | null, title: string | null, image: string | null, bullets: Array<string | null> | null, href: string | null, description: { html: string | null } | null }
            | { __typename: 'QuickLinkModelModel' }
            | { __typename: 'RateEntryModel' }
            | { __typename: 'SectionGroupModel' }
            | { __typename: 'SectionNavItemModel' }
            | { __typename: 'SiteChromeModel' }
           | null> | null }
        | { __typename: 'SectionNavItemModel' }
        | { __typename: 'SiteChromeModel' }
       | null> | null } | null> } };

export type GetSiteChromeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSiteChromeQuery = { siteChromeList: { items: Array<{ _path: string | null, acknowledgementLinkText: string | null, acknowledgementLinkUrl: string | null, navLinks: Array<{ _path: string | null, label: string | null, url: string | null } | null> | null, sectionNavItems: Array<{ _path: string | null, label: string | null, url: string | null, image: string | null } | null> | null, footerColumns: Array<{ _path: string | null, sectionTitle: string | null, links: Array<{ _path: string | null, label: string | null, url: string | null } | null> | null } | null> | null, footerText: { html: string | null } | null } | null> } };

export type ListPagesQueryVariables = Exact<{ [key: string]: never; }>;


export type ListPagesQuery = { pageList: { items: Array<{ _path: string | null, path: string | null, title: string | null } | null> } };
