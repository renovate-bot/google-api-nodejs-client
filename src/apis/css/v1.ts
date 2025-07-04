// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
  BaseExternalAccountClient,
  GaxiosResponseWithHTTP2,
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  StreamMethodOptions,
  GlobalOptions,
  GoogleAuth,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {Readable} from 'stream';

export namespace css_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  interface StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?:
      | string
      | OAuth2Client
      | JWT
      | Compute
      | UserRefreshClient
      | BaseExternalAccountClient
      | GoogleAuth;

    /**
     * V1 error format.
     */
    '$.xgafv'?: string;
    /**
     * OAuth access token.
     */
    access_token?: string;
    /**
     * Data format for response.
     */
    alt?: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauth_token?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    upload_protocol?: string;
  }

  /**
   * CSS API
   *
   * Programmatically manage your Comparison Shopping Service (CSS) account data at scale.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const css = google.css('v1');
   * ```
   */
  export class Css {
    context: APIRequestContext;
    accounts: Resource$Accounts;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.accounts = new Resource$Accounts(this.context);
    }
  }

  /**
   * Information about CSS/MC account.
   */
  export interface Schema$Account {
    /**
     * Output only. The type of this account.
     */
    accountType?: string | null;
    /**
     * Automatically created label IDs assigned to the MC account by CSS Center.
     */
    automaticLabelIds?: string[] | null;
    /**
     * The CSS/MC account's short display name.
     */
    displayName?: string | null;
    /**
     * Output only. Immutable. The CSS/MC account's full name.
     */
    fullName?: string | null;
    /**
     * Output only. Immutable. The CSS/MC account's homepage.
     */
    homepageUri?: string | null;
    /**
     * Manually created label IDs assigned to the CSS/MC account by a CSS parent account.
     */
    labelIds?: string[] | null;
    /**
     * The label resource name. Format: accounts/{account\}
     */
    name?: string | null;
    /**
     * The CSS/MC account's parent resource. CSS group for CSS domains; CSS domain for MC accounts. Returned only if the user has access to the parent account. Note: For MC sub-accounts, this is also the CSS domain that is the parent resource of the MCA account, since we are effectively flattening the hierarchy."
     */
    parent?: string | null;
  }
  /**
   * Label assigned by CSS domain or CSS group to one of its sub-accounts.
   */
  export interface Schema$AccountLabel {
    /**
     * Output only. The ID of account this label belongs to.
     */
    accountId?: string | null;
    /**
     * The description of this label.
     */
    description?: string | null;
    /**
     * The display name of this label.
     */
    displayName?: string | null;
    /**
     * Output only. The ID of the label.
     */
    labelId?: string | null;
    /**
     * Output only. The type of this label.
     */
    labelType?: string | null;
    /**
     * Identifier. The resource name of the label. Format: accounts/{account\}/labels/{label\}
     */
    name?: string | null;
  }
  /**
   * Attributes for CSS Product.
   */
  export interface Schema$Attributes {
    /**
     * Additional URL of images of the item.
     */
    additionalImageLinks?: string[] | null;
    /**
     * Set to true if the item is targeted towards adults.
     */
    adult?: boolean | null;
    /**
     * Target age group of the item.
     */
    ageGroup?: string | null;
    /**
     * Product Related Attributes.[14-36] Brand of the item.
     */
    brand?: string | null;
    /**
     * A list of certificates claimed by the CSS for the given product.
     */
    certifications?: Schema$Certification[];
    /**
     * Color of the item.
     */
    color?: string | null;
    /**
     * Allows advertisers to override the item URL when the product is shown within the context of Product Ads.
     */
    cppAdsRedirect?: string | null;
    /**
     * URL directly linking to your the Product Detail Page of the CSS.
     */
    cppLink?: string | null;
    /**
     * URL for the mobile-optimized version of the Product Detail Page of the CSS.
     */
    cppMobileLink?: string | null;
    /**
     * Custom label 0 for custom grouping of items in a Shopping campaign.
     */
    customLabel0?: string | null;
    /**
     * Custom label 1 for custom grouping of items in a Shopping campaign.
     */
    customLabel1?: string | null;
    /**
     * Custom label 2 for custom grouping of items in a Shopping campaign.
     */
    customLabel2?: string | null;
    /**
     * Custom label 3 for custom grouping of items in a Shopping campaign.
     */
    customLabel3?: string | null;
    /**
     * Custom label 4 for custom grouping of items in a Shopping campaign.
     */
    customLabel4?: string | null;
    /**
     * Description of the item.
     */
    description?: string | null;
    /**
     * The list of destinations to exclude for this target (corresponds to unchecked check boxes in Merchant Center).
     */
    excludedDestinations?: string[] | null;
    /**
     * Date on which the item should expire, as specified upon insertion, in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format. The actual expiration date is exposed in `productstatuses` as [googleExpirationDate](https://support.google.com/merchants/answer/6324499) and might be earlier if `expirationDate` is too far in the future. Note: It may take 2+ days from the expiration date for the item to actually get deleted.
     */
    expirationDate?: string | null;
    /**
     * Target gender of the item.
     */
    gender?: string | null;
    /**
     * Google's category of the item (see [Google product taxonomy](https://support.google.com/merchants/answer/1705911)). When querying products, this field will contain the user provided value. There is currently no way to get back the auto assigned google product categories through the API.
     */
    googleProductCategory?: string | null;
    /**
     * Global Trade Item Number ([GTIN](https://support.google.com/merchants/answer/188494#gtin)) of the item.
     */
    gtin?: string | null;
    /**
     * Condition of the headline offer.
     */
    headlineOfferCondition?: string | null;
    /**
     * Number and amount of installments to pay for an item.
     */
    headlineOfferInstallment?: Schema$HeadlineOfferInstallment;
    /**
     * Link to the headline offer.
     */
    headlineOfferLink?: string | null;
    /**
     * Mobile Link to the headline offer.
     */
    headlineOfferMobileLink?: string | null;
    /**
     * Headline Price of the CSS Product.
     */
    headlineOfferPrice?: Schema$Price;
    /**
     * Headline Price of the CSS Product.
     */
    headlineOfferShippingPrice?: Schema$Price;
    /**
     * Number of periods (months or years) and amount of payment per period for an item with an associated subscription contract.
     */
    headlineOfferSubscriptionCost?: Schema$HeadlineOfferSubscriptionCost;
    /**
     * High Price of the CSS Product.
     */
    highPrice?: Schema$Price;
    /**
     * URL of an image of the item.
     */
    imageLink?: string | null;
    /**
     * The list of destinations to include for this target (corresponds to checked check boxes in Merchant Center). Default destinations are always included unless provided in `excludedDestinations`.
     */
    includedDestinations?: string[] | null;
    /**
     * Whether the item is a merchant-defined bundle. A bundle is a custom grouping of different products sold by a merchant for a single price.
     */
    isBundle?: boolean | null;
    /**
     * Shared identifier for all variants of the same product.
     */
    itemGroupId?: string | null;
    /**
     * Low Price of the CSS Product.
     */
    lowPrice?: Schema$Price;
    /**
     * The material of which the item is made.
     */
    material?: string | null;
    /**
     * Manufacturer Part Number ([MPN](https://support.google.com/merchants/answer/188494#mpn)) of the item.
     */
    mpn?: string | null;
    /**
     * The number of identical products in a merchant-defined multipack.
     */
    multipack?: string | null;
    /**
     * The number of CSS Products.
     */
    numberOfOffers?: string | null;
    /**
     * The item's pattern (e.g. polka dots).
     */
    pattern?: string | null;
    /**
     * Publication of this item will be temporarily paused.
     */
    pause?: string | null;
    /**
     * Technical specification or additional product details.
     */
    productDetails?: Schema$ProductDetail[];
    /**
     * The height of the product in the units provided. The value must be between 0 (exclusive) and 3000 (inclusive).
     */
    productHeight?: Schema$ProductDimension;
    /**
     * Bullet points describing the most relevant highlights of a product.
     */
    productHighlights?: string[] | null;
    /**
     * The length of the product in the units provided. The value must be between 0 (exclusive) and 3000 (inclusive).
     */
    productLength?: Schema$ProductDimension;
    /**
     * Categories of the item (formatted as in [products data specification](https://support.google.com/merchants/answer/6324406)).
     */
    productTypes?: string[] | null;
    /**
     * The weight of the product in the units provided. The value must be between 0 (exclusive) and 2000 (inclusive).
     */
    productWeight?: Schema$ProductWeight;
    /**
     * The width of the product in the units provided. The value must be between 0 (exclusive) and 3000 (inclusive).
     */
    productWidth?: Schema$ProductDimension;
    /**
     * Size of the item. Only one value is allowed. For variants with different sizes, insert a separate product for each size with the same `itemGroupId` value (see [https://support.google.com/merchants/answer/6324492](size definition)).
     */
    size?: string | null;
    /**
     * System in which the size is specified. Recommended for apparel items.
     */
    sizeSystem?: string | null;
    /**
     * The cut of the item. It can be used to represent combined size types for apparel items. Maximum two of size types can be provided (see [https://support.google.com/merchants/answer/6324497](size type)).
     */
    sizeTypes?: string[] | null;
    /**
     * Title of the item.
     */
    title?: string | null;
  }
  /**
   * The certification for the product. Use the this attribute to describe certifications, such as energy efficiency ratings, associated with a product.
   */
  export interface Schema$Certification {
    /**
     * The authority or certification body responsible for issuing the certification. At this time, the most common value is "EC" or “European_Commission” for energy labels in the EU.
     */
    authority?: string | null;
    /**
     * The code of the certification. For example, for the EPREL certificate with the link https://eprel.ec.europa.eu/screen/product/dishwashers2019/123456 the code is 123456. The code is required for European Energy Labels.
     */
    code?: string | null;
    /**
     * The name of the certification. At this time, the most common value is "EPREL", which represents energy efficiency certifications in the EU European Registry for Energy Labeling (EPREL) database.
     */
    name?: string | null;
  }
  /**
   * The processed CSS Product.
   */
  export interface Schema$CssProduct {
    /**
     * Output only. A list of product attributes.
     */
    attributes?: Schema$Attributes;
    /**
     * Output only. The two-letter [ISO 639-1](http://en.wikipedia.org/wiki/ISO_639-1) language code for the product.
     */
    contentLanguage?: string | null;
    /**
     * Output only. The status of a product, data validation issues, that is, information about a product computed asynchronously.
     */
    cssProductStatus?: Schema$CssProductStatus;
    /**
     * Output only. A list of custom (CSS-provided) attributes. It can also be used to submit any attribute of the feed specification in its generic form (for example, `{ "name": "size type", "value": "regular" \}`). This is useful for submitting attributes not explicitly exposed by the API, such as additional attributes used for Buy on Google.
     */
    customAttributes?: Schema$CustomAttribute[];
    /**
     * Output only. The feed label for the product.
     */
    feedLabel?: string | null;
    /**
     * The name of the CSS Product. Format: `"accounts/{account\}/cssProducts/{css_product\}"`
     */
    name?: string | null;
    /**
     * Output only. Your unique raw identifier for the product.
     */
    rawProvidedId?: string | null;
  }
  /**
   * This resource represents input data you submit for a CSS Product, not the processed CSS Product that you see in CSS Center, in Shopping Ads, or across Google surfaces.
   */
  export interface Schema$CssProductInput {
    /**
     * A list of CSS Product attributes.
     */
    attributes?: Schema$Attributes;
    /**
     * Required. The two-letter [ISO 639-1](http://en.wikipedia.org/wiki/ISO_639-1) language code for the CSS Product.
     */
    contentLanguage?: string | null;
    /**
     * A list of custom (CSS-provided) attributes. It can also be used for submitting any attribute of the feed specification in its generic form (for example: `{ "name": "size type", "value": "regular" \}`). This is useful for submitting attributes not explicitly exposed by the API, such as additional attributes used for Buy on Google.
     */
    customAttributes?: Schema$CustomAttribute[];
    /**
     * Required. The [feed label](https://developers.google.com/shopping-content/guides/products/feed-labels) for the CSS Product. Feed Label is synonymous to "target country" and hence should always be a valid region code. For example: 'DE' for Germany, 'FR' for France.
     */
    feedLabel?: string | null;
    /**
     * Output only. The name of the processed CSS Product. Format: `accounts/{account\}/cssProducts/{css_product\}` "
     */
    finalName?: string | null;
    /**
     * DEPRECATED. Use expiration_date instead. Represents the existing version (freshness) of the CSS Product, which can be used to preserve the right order when multiple updates are done at the same time. This field must not be set to the future time. If set, the update is prevented if a newer version of the item already exists in our system (that is the last update time of the existing CSS products is later than the freshness time set in the update). If the update happens, the last update time is then set to this freshness time. If not set, the update will not be prevented and the last update time will default to when this request was received by the CSS API. If the operation is prevented, the aborted exception will be thrown.
     */
    freshnessTime?: string | null;
    /**
     * Identifier. The name of the CSS Product input. Format: `accounts/{account\}/cssProductInputs/{css_product_input\}`, where the last section `css_product_input` consists of 3 parts: contentLanguage~feedLabel~offerId. Example: accounts/123/cssProductInputs/de~DE~rawProvidedId123
     */
    name?: string | null;
    /**
     * Required. Your unique identifier for the CSS Product. This is the same for the CSS Product input and processed CSS Product. We only allow ids with alphanumerics, underscores and dashes. See the [products feed specification](https://support.google.com/merchants/answer/188494#id) for details.
     */
    rawProvidedId?: string | null;
  }
  /**
   * The status of the Css Product, data validation issues, that is, information about the Css Product computed asynchronously.
   */
  export interface Schema$CssProductStatus {
    /**
     * Date on which the item has been created, in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format.
     */
    creationDate?: string | null;
    /**
     * The intended destinations for the product.
     */
    destinationStatuses?: Schema$DestinationStatus[];
    /**
     * Date on which the item expires, in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format.
     */
    googleExpirationDate?: string | null;
    /**
     * A list of all issues associated with the product.
     */
    itemLevelIssues?: Schema$ItemLevelIssue[];
    /**
     * Date on which the item has been last updated, in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format.
     */
    lastUpdateDate?: string | null;
  }
  /**
   * A message that represents custom attributes. Exactly one of `value` or `group_values` must not be empty.
   */
  export interface Schema$CustomAttribute {
    /**
     * Subattributes within this attribute group. If `group_values` is not empty, `value` must be empty.
     */
    groupValues?: Schema$CustomAttribute[];
    /**
     * The name of the attribute.
     */
    name?: string | null;
    /**
     * The value of the attribute. If `value` is not empty, `group_values` must be empty.
     */
    value?: string | null;
  }
  /**
   * The destination status of the product status.
   */
  export interface Schema$DestinationStatus {
    /**
     * List of country codes (ISO 3166-1 alpha-2) where the CSS Product is approved.
     */
    approvedCountries?: string[] | null;
    /**
     * The name of the destination
     */
    destination?: string | null;
    /**
     * List of country codes (ISO 3166-1 alpha-2) where the CSS Product is disapproved.
     */
    disapprovedCountries?: string[] | null;
    /**
     * List of country codes (ISO 3166-1 alpha-2) where the CSS Product is pending approval.
     */
    pendingCountries?: string[] | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * A message that represents installment.
   */
  export interface Schema$HeadlineOfferInstallment {
    /**
     * The amount the buyer has to pay per month.
     */
    amount?: Schema$Price;
    /**
     * The up-front down payment amount the buyer has to pay.
     */
    downpayment?: Schema$Price;
    /**
     * The number of installments the buyer has to pay.
     */
    months?: string | null;
  }
  /**
   * The SubscriptionCost of the product.
   */
  export interface Schema$HeadlineOfferSubscriptionCost {
    /**
     * The amount the buyer has to pay per subscription period.
     */
    amount?: Schema$Price;
    /**
     * The type of subscription period. Supported values are: * "`month`" * "`year`"
     */
    period?: string | null;
    /**
     * The number of subscription periods the buyer has to pay.
     */
    periodLength?: string | null;
  }
  /**
   * The ItemLevelIssue of the product status.
   */
  export interface Schema$ItemLevelIssue {
    /**
     * List of country codes (ISO 3166-1 alpha-2) where issue applies to the CSS Product.
     */
    applicableCountries?: string[] | null;
    /**
     * The attribute's name, if the issue is caused by a single attribute.
     */
    attribute?: string | null;
    /**
     * The error code of the issue.
     */
    code?: string | null;
    /**
     * A short issue description in English.
     */
    description?: string | null;
    /**
     * The destination the issue applies to.
     */
    destination?: string | null;
    /**
     * A detailed issue description in English.
     */
    detail?: string | null;
    /**
     * The URL of a web page to help with resolving this issue.
     */
    documentation?: string | null;
    /**
     * Whether the issue can be resolved by the merchant.
     */
    resolution?: string | null;
    /**
     * How this issue affects serving of the CSS Product.
     */
    servability?: string | null;
  }
  /**
   * Response message for the `ListAccountLabels` method.
   */
  export interface Schema$ListAccountLabelsResponse {
    /**
     * The labels from the specified account.
     */
    accountLabels?: Schema$AccountLabel[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for the `ListChildAccounts` method.
   */
  export interface Schema$ListChildAccountsResponse {
    /**
     * The CSS/MC accounts returned for the specified CSS parent account.
     */
    accounts?: Schema$Account[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for the ListCssProducts method.
   */
  export interface Schema$ListCssProductsResponse {
    /**
     * The processed CSS products from the specified account. These are your processed CSS products after applying rules and supplemental feeds.
     */
    cssProducts?: Schema$CssProduct[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for the ListMethodGroups method.
   */
  export interface Schema$ListQuotaGroupsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The methods, current quota usage and limits per each group. The quota is shared between all methods in the group. The groups are sorted in descending order based on quota_usage.
     */
    quotaGroups?: Schema$QuotaGroup[];
  }
  /**
   * The method details per method in the CSS API.
   */
  export interface Schema$MethodDetails {
    /**
     * Output only. The name of the method for example `cssproductsservice.listcssproducts`.
     */
    method?: string | null;
    /**
     * Output only. The path for the method such as `v1/cssproductsservice.listcssproducts`.
     */
    path?: string | null;
    /**
     * Output only. The sub-API that the method belongs to. In the CSS API, this is always `css`.
     */
    subapi?: string | null;
    /**
     * Output only. The API version that the method belongs to.
     */
    version?: string | null;
  }
  /**
   * The price represented as a number and currency.
   */
  export interface Schema$Price {
    /**
     * The price represented as a number in micros (1 million micros is an equivalent to one's currency standard unit, for example, 1 USD = 1000000 micros).
     */
    amountMicros?: string | null;
    /**
     * The currency of the price using three-letter acronyms according to [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217).
     */
    currencyCode?: string | null;
  }
  /**
   * The product details.
   */
  export interface Schema$ProductDetail {
    /**
     * The name of the product detail.
     */
    attributeName?: string | null;
    /**
     * The value of the product detail.
     */
    attributeValue?: string | null;
    /**
     * The section header used to group a set of product details.
     */
    sectionName?: string | null;
  }
  /**
   * The dimension of the product.
   */
  export interface Schema$ProductDimension {
    /**
     * Required. The dimension units. Acceptable values are: * "`in`" * "`cm`"
     */
    unit?: string | null;
    /**
     * Required. The dimension value represented as a number. The value can have a maximum precision of four decimal places.
     */
    value?: number | null;
  }
  /**
   * The weight of the product.
   */
  export interface Schema$ProductWeight {
    /**
     * Required. The weight unit. Acceptable values are: * "`g`" * "`kg`" * "`oz`" * "`lb`"
     */
    unit?: string | null;
    /**
     * Required. The weight represented as a number. The weight can have a maximum precision of four decimal places.
     */
    value?: number | null;
  }
  /**
   * The group information for methods in the CSS API. The quota is shared between all methods in the group. Even if none of the methods within the group have usage the information for the group is returned.
   */
  export interface Schema$QuotaGroup {
    /**
     * Output only. List of all methods group quota applies to.
     */
    methodDetails?: Schema$MethodDetails[];
    /**
     * Identifier. The resource name of the quota group. Format: accounts/{account\}/quotas/{group\} Example: `accounts/12345678/quotas/css-products-insert` Note: The {group\} part is not guaranteed to follow a specific pattern.
     */
    name?: string | null;
    /**
     * Output only. The maximum number of calls allowed per day for the group.
     */
    quotaLimit?: string | null;
    /**
     * Output only. The maximum number of calls allowed per minute for the group.
     */
    quotaMinuteLimit?: string | null;
    /**
     * Output only. The current quota usage, meaning the number of calls already made on a given day to the methods in the group. The daily quota limits reset at at 12:00 PM midday UTC.
     */
    quotaUsage?: string | null;
  }
  /**
   * The request message for the `UpdateLabels` method.
   */
  export interface Schema$UpdateAccountLabelsRequest {
    /**
     * The list of label IDs to overwrite the existing account label IDs. If the list is empty, all currently assigned label IDs will be deleted.
     */
    labelIds?: string[] | null;
    /**
     * Optional. Only required when updating MC account labels. The CSS domain that is the parent resource of the MC account. Format: accounts/{account\}
     */
    parent?: string | null;
  }

  export class Resource$Accounts {
    context: APIRequestContext;
    cssProductInputs: Resource$Accounts$Cssproductinputs;
    cssProducts: Resource$Accounts$Cssproducts;
    labels: Resource$Accounts$Labels;
    quotas: Resource$Accounts$Quotas;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.cssProductInputs = new Resource$Accounts$Cssproductinputs(
        this.context
      );
      this.cssProducts = new Resource$Accounts$Cssproducts(this.context);
      this.labels = new Resource$Accounts$Labels(this.context);
      this.quotas = new Resource$Accounts$Quotas(this.context);
    }

    /**
     * Retrieves a single CSS/MC account by ID.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/css.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const css = google.css('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await css.accounts.get({
     *     // Required. The name of the managed CSS/MC account. Format: accounts/{account\}
     *     name: 'accounts/my-account',
     *     // Optional. Only required when retrieving MC account information. The CSS domain that is the parent resource of the MC account. Format: accounts/{account\}
     *     parent: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountType": "my_accountType",
     *   //   "automaticLabelIds": [],
     *   //   "displayName": "my_displayName",
     *   //   "fullName": "my_fullName",
     *   //   "homepageUri": "my_homepageUri",
     *   //   "labelIds": [],
     *   //   "name": "my_name",
     *   //   "parent": "my_parent"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Accounts$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Accounts$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Account>>;
    get(
      params: Params$Resource$Accounts$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounts$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Account>,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    get(
      params: Params$Resource$Accounts$Get,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    get(callback: BodyResponseCallback<Schema$Account>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Get
        | BodyResponseCallback<Schema$Account>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Account>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Account>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Account>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Accounts$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://css.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Account>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Account>(parameters);
      }
    }

    /**
     * Lists all the accounts under the specified CSS account ID, and optionally filters by label ID and account name.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/css.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const css = google.css('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await css.accounts.listChildAccounts({
     *     // If set, only the MC accounts with the given name (case sensitive) will be returned.
     *     fullName: 'placeholder-value',
     *     // If set, only the MC accounts with the given label ID will be returned.
     *     labelId: 'placeholder-value',
     *     // Optional. The maximum number of accounts to return. The service may return fewer than this value. If unspecified, at most 50 accounts will be returned. The maximum value is 100; values above 100 will be coerced to 100.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListChildAccounts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListChildAccounts` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent account. Must be a CSS group or domain. Format: accounts/{account\}
     *     parent: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accounts": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    listChildAccounts(
      params: Params$Resource$Accounts$Listchildaccounts,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    listChildAccounts(
      params?: Params$Resource$Accounts$Listchildaccounts,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListChildAccountsResponse>>;
    listChildAccounts(
      params: Params$Resource$Accounts$Listchildaccounts,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listChildAccounts(
      params: Params$Resource$Accounts$Listchildaccounts,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListChildAccountsResponse>,
      callback: BodyResponseCallback<Schema$ListChildAccountsResponse>
    ): void;
    listChildAccounts(
      params: Params$Resource$Accounts$Listchildaccounts,
      callback: BodyResponseCallback<Schema$ListChildAccountsResponse>
    ): void;
    listChildAccounts(
      callback: BodyResponseCallback<Schema$ListChildAccountsResponse>
    ): void;
    listChildAccounts(
      paramsOrCallback?:
        | Params$Resource$Accounts$Listchildaccounts
        | BodyResponseCallback<Schema$ListChildAccountsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListChildAccountsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListChildAccountsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListChildAccountsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Listchildaccounts;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Listchildaccounts;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://css.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}:listChildAccounts').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListChildAccountsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListChildAccountsResponse>(parameters);
      }
    }

    /**
     * Updates labels assigned to CSS/MC accounts by a CSS domain.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/css.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const css = google.css('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await css.accounts.updateLabels({
     *     // Required. The label resource name. Format: accounts/{account\}
     *     name: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "labelIds": [],
     *       //   "parent": "my_parent"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountType": "my_accountType",
     *   //   "automaticLabelIds": [],
     *   //   "displayName": "my_displayName",
     *   //   "fullName": "my_fullName",
     *   //   "homepageUri": "my_homepageUri",
     *   //   "labelIds": [],
     *   //   "name": "my_name",
     *   //   "parent": "my_parent"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    updateLabels(
      params: Params$Resource$Accounts$Updatelabels,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateLabels(
      params?: Params$Resource$Accounts$Updatelabels,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Account>>;
    updateLabels(
      params: Params$Resource$Accounts$Updatelabels,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateLabels(
      params: Params$Resource$Accounts$Updatelabels,
      options: MethodOptions | BodyResponseCallback<Schema$Account>,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    updateLabels(
      params: Params$Resource$Accounts$Updatelabels,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    updateLabels(callback: BodyResponseCallback<Schema$Account>): void;
    updateLabels(
      paramsOrCallback?:
        | Params$Resource$Accounts$Updatelabels
        | BodyResponseCallback<Schema$Account>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Account>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Account>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Account>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Updatelabels;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Updatelabels;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://css.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:updateLabels').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Account>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Account>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Get extends StandardParameters {
    /**
     * Required. The name of the managed CSS/MC account. Format: accounts/{account\}
     */
    name?: string;
    /**
     * Optional. Only required when retrieving MC account information. The CSS domain that is the parent resource of the MC account. Format: accounts/{account\}
     */
    parent?: string;
  }
  export interface Params$Resource$Accounts$Listchildaccounts
    extends StandardParameters {
    /**
     * If set, only the MC accounts with the given name (case sensitive) will be returned.
     */
    fullName?: string;
    /**
     * If set, only the MC accounts with the given label ID will be returned.
     */
    labelId?: string;
    /**
     * Optional. The maximum number of accounts to return. The service may return fewer than this value. If unspecified, at most 50 accounts will be returned. The maximum value is 100; values above 100 will be coerced to 100.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListChildAccounts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListChildAccounts` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent account. Must be a CSS group or domain. Format: accounts/{account\}
     */
    parent?: string;
  }
  export interface Params$Resource$Accounts$Updatelabels
    extends StandardParameters {
    /**
     * Required. The label resource name. Format: accounts/{account\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UpdateAccountLabelsRequest;
  }

  export class Resource$Accounts$Cssproductinputs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a CSS Product input from your CSS Center account. After a delete it may take several minutes until the input is no longer available.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/css.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const css = google.css('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await css.accounts.cssProductInputs.delete({
     *     // Required. The name of the CSS product input resource to delete. Format: accounts/{account\}/cssProductInputs/{css_product_input\}, where the last section `css_product_input` consists of 3 parts: contentLanguage~feedLabel~offerId. Example: accounts/123/cssProductInputs/de~DE~rawProvidedId123
     *     name: 'accounts/my-account/cssProductInputs/my-cssProductInput',
     *     // The Content API Supplemental Feed ID. The field must not be set if the action applies to a primary feed. If the field is set, then product action applies to a supplemental feed instead of primary Content API feed.
     *     supplementalFeedId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Accounts$Cssproductinputs$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Accounts$Cssproductinputs$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Accounts$Cssproductinputs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Accounts$Cssproductinputs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Accounts$Cssproductinputs$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Accounts$Cssproductinputs$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Cssproductinputs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Cssproductinputs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://css.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Uploads a CssProductInput to your CSS Center account. If an input with the same contentLanguage, identity, feedLabel and feedId already exists, this method replaces that entry. After inserting, updating, or deleting a CSS Product input, it may take several minutes before the processed CSS Product can be retrieved.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/css.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const css = google.css('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await css.accounts.cssProductInputs.insert({
     *     // Optional. DEPRECATED. Feed id is not required for CSS Products. The primary or supplemental feed id. If CSS Product already exists and feed id provided is different, then the CSS Product will be moved to a new feed. Note: For now, CSSs do not need to provide feed ids as we create feeds on the fly. We do not have supplemental feed support for CSS Products yet.
     *     feedId: 'placeholder-value',
     *     // Required. The account where this CSS Product will be inserted. Format: accounts/{account\}
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "attributes": {},
     *       //   "contentLanguage": "my_contentLanguage",
     *       //   "customAttributes": [],
     *       //   "feedLabel": "my_feedLabel",
     *       //   "finalName": "my_finalName",
     *       //   "freshnessTime": "my_freshnessTime",
     *       //   "name": "my_name",
     *       //   "rawProvidedId": "my_rawProvidedId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attributes": {},
     *   //   "contentLanguage": "my_contentLanguage",
     *   //   "customAttributes": [],
     *   //   "feedLabel": "my_feedLabel",
     *   //   "finalName": "my_finalName",
     *   //   "freshnessTime": "my_freshnessTime",
     *   //   "name": "my_name",
     *   //   "rawProvidedId": "my_rawProvidedId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Accounts$Cssproductinputs$Insert,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    insert(
      params?: Params$Resource$Accounts$Cssproductinputs$Insert,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CssProductInput>>;
    insert(
      params: Params$Resource$Accounts$Cssproductinputs$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Accounts$Cssproductinputs$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$CssProductInput>,
      callback: BodyResponseCallback<Schema$CssProductInput>
    ): void;
    insert(
      params: Params$Resource$Accounts$Cssproductinputs$Insert,
      callback: BodyResponseCallback<Schema$CssProductInput>
    ): void;
    insert(callback: BodyResponseCallback<Schema$CssProductInput>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Accounts$Cssproductinputs$Insert
        | BodyResponseCallback<Schema$CssProductInput>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CssProductInput>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CssProductInput>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CssProductInput>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Cssproductinputs$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Cssproductinputs$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://css.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/cssProductInputs:insert').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CssProductInput>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CssProductInput>(parameters);
      }
    }

    /**
     * Updates the existing Css Product input in your CSS Center account. After inserting, updating, or deleting a CSS Product input, it may take several minutes before the processed Css Product can be retrieved.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/css.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const css = google.css('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await css.accounts.cssProductInputs.patch({
     *     // Identifier. The name of the CSS Product input. Format: `accounts/{account\}/cssProductInputs/{css_product_input\}`, where the last section `css_product_input` consists of 3 parts: contentLanguage~feedLabel~offerId. Example: accounts/123/cssProductInputs/de~DE~rawProvidedId123
     *     name: 'accounts/my-account/cssProductInputs/my-cssProductInput',
     *     // The list of CSS product attributes to be updated. If the update mask is omitted, then it is treated as implied field mask equivalent to all fields that are populated (have a non-empty value). Attributes specified in the update mask without a value specified in the body will be deleted from the CSS product. Update mask can only be specified for top level fields in attributes and custom attributes. To specify the update mask for custom attributes you need to add the `custom_attribute.` prefix. Providing special "*" value for full CSS product replacement is not supported.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "attributes": {},
     *       //   "contentLanguage": "my_contentLanguage",
     *       //   "customAttributes": [],
     *       //   "feedLabel": "my_feedLabel",
     *       //   "finalName": "my_finalName",
     *       //   "freshnessTime": "my_freshnessTime",
     *       //   "name": "my_name",
     *       //   "rawProvidedId": "my_rawProvidedId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attributes": {},
     *   //   "contentLanguage": "my_contentLanguage",
     *   //   "customAttributes": [],
     *   //   "feedLabel": "my_feedLabel",
     *   //   "finalName": "my_finalName",
     *   //   "freshnessTime": "my_freshnessTime",
     *   //   "name": "my_name",
     *   //   "rawProvidedId": "my_rawProvidedId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Accounts$Cssproductinputs$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Accounts$Cssproductinputs$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CssProductInput>>;
    patch(
      params: Params$Resource$Accounts$Cssproductinputs$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Accounts$Cssproductinputs$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$CssProductInput>,
      callback: BodyResponseCallback<Schema$CssProductInput>
    ): void;
    patch(
      params: Params$Resource$Accounts$Cssproductinputs$Patch,
      callback: BodyResponseCallback<Schema$CssProductInput>
    ): void;
    patch(callback: BodyResponseCallback<Schema$CssProductInput>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Accounts$Cssproductinputs$Patch
        | BodyResponseCallback<Schema$CssProductInput>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CssProductInput>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CssProductInput>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CssProductInput>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Cssproductinputs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Cssproductinputs$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://css.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CssProductInput>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CssProductInput>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Cssproductinputs$Delete
    extends StandardParameters {
    /**
     * Required. The name of the CSS product input resource to delete. Format: accounts/{account\}/cssProductInputs/{css_product_input\}, where the last section `css_product_input` consists of 3 parts: contentLanguage~feedLabel~offerId. Example: accounts/123/cssProductInputs/de~DE~rawProvidedId123
     */
    name?: string;
    /**
     * The Content API Supplemental Feed ID. The field must not be set if the action applies to a primary feed. If the field is set, then product action applies to a supplemental feed instead of primary Content API feed.
     */
    supplementalFeedId?: string;
  }
  export interface Params$Resource$Accounts$Cssproductinputs$Insert
    extends StandardParameters {
    /**
     * Optional. DEPRECATED. Feed id is not required for CSS Products. The primary or supplemental feed id. If CSS Product already exists and feed id provided is different, then the CSS Product will be moved to a new feed. Note: For now, CSSs do not need to provide feed ids as we create feeds on the fly. We do not have supplemental feed support for CSS Products yet.
     */
    feedId?: string;
    /**
     * Required. The account where this CSS Product will be inserted. Format: accounts/{account\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CssProductInput;
  }
  export interface Params$Resource$Accounts$Cssproductinputs$Patch
    extends StandardParameters {
    /**
     * Identifier. The name of the CSS Product input. Format: `accounts/{account\}/cssProductInputs/{css_product_input\}`, where the last section `css_product_input` consists of 3 parts: contentLanguage~feedLabel~offerId. Example: accounts/123/cssProductInputs/de~DE~rawProvidedId123
     */
    name?: string;
    /**
     * The list of CSS product attributes to be updated. If the update mask is omitted, then it is treated as implied field mask equivalent to all fields that are populated (have a non-empty value). Attributes specified in the update mask without a value specified in the body will be deleted from the CSS product. Update mask can only be specified for top level fields in attributes and custom attributes. To specify the update mask for custom attributes you need to add the `custom_attribute.` prefix. Providing special "*" value for full CSS product replacement is not supported.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CssProductInput;
  }

  export class Resource$Accounts$Cssproducts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves the processed CSS Product from your CSS Center account. After inserting, updating, or deleting a product input, it may take several minutes before the updated final product can be retrieved.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/css.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const css = google.css('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await css.accounts.cssProducts.get({
     *     // Required. The name of the CSS product to retrieve. Format: `accounts/{account\}/cssProducts/{css_product\}`
     *     name: 'accounts/my-account/cssProducts/my-cssProduct',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attributes": {},
     *   //   "contentLanguage": "my_contentLanguage",
     *   //   "cssProductStatus": {},
     *   //   "customAttributes": [],
     *   //   "feedLabel": "my_feedLabel",
     *   //   "name": "my_name",
     *   //   "rawProvidedId": "my_rawProvidedId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Accounts$Cssproducts$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Accounts$Cssproducts$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CssProduct>>;
    get(
      params: Params$Resource$Accounts$Cssproducts$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounts$Cssproducts$Get,
      options: MethodOptions | BodyResponseCallback<Schema$CssProduct>,
      callback: BodyResponseCallback<Schema$CssProduct>
    ): void;
    get(
      params: Params$Resource$Accounts$Cssproducts$Get,
      callback: BodyResponseCallback<Schema$CssProduct>
    ): void;
    get(callback: BodyResponseCallback<Schema$CssProduct>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Cssproducts$Get
        | BodyResponseCallback<Schema$CssProduct>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CssProduct>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CssProduct>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CssProduct>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Cssproducts$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Cssproducts$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://css.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CssProduct>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CssProduct>(parameters);
      }
    }

    /**
     * Lists the processed CSS Products in your CSS Center account. The response might contain fewer items than specified by pageSize. Rely on pageToken to determine if there are more items to be requested. After inserting, updating, or deleting a CSS product input, it may take several minutes before the updated processed CSS product can be retrieved.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/css.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const css = google.css('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await css.accounts.cssProducts.list({
     *     // The maximum number of CSS Products to return. The service may return fewer than this value. The maximum value is 1000; values above 1000 will be coerced to 1000. If unspecified, the maximum number of CSS products will be returned.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListCssProducts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCssProducts` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The account/domain to list processed CSS Products for. Format: accounts/{account\}
     *     parent: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cssProducts": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Accounts$Cssproducts$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Accounts$Cssproducts$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListCssProductsResponse>>;
    list(
      params: Params$Resource$Accounts$Cssproducts$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Cssproducts$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListCssProductsResponse>,
      callback: BodyResponseCallback<Schema$ListCssProductsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Cssproducts$List,
      callback: BodyResponseCallback<Schema$ListCssProductsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListCssProductsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Cssproducts$List
        | BodyResponseCallback<Schema$ListCssProductsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListCssProductsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListCssProductsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListCssProductsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Cssproducts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Cssproducts$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://css.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/cssProducts').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListCssProductsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListCssProductsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Cssproducts$Get
    extends StandardParameters {
    /**
     * Required. The name of the CSS product to retrieve. Format: `accounts/{account\}/cssProducts/{css_product\}`
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Cssproducts$List
    extends StandardParameters {
    /**
     * The maximum number of CSS Products to return. The service may return fewer than this value. The maximum value is 1000; values above 1000 will be coerced to 1000. If unspecified, the maximum number of CSS products will be returned.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListCssProducts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCssProducts` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The account/domain to list processed CSS Products for. Format: accounts/{account\}
     */
    parent?: string;
  }

  export class Resource$Accounts$Labels {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new label, not assigned to any account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/css.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const css = google.css('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await css.accounts.labels.create({
     *     // Required. The parent account. Format: accounts/{account\}
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountId": "my_accountId",
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "labelId": "my_labelId",
     *       //   "labelType": "my_labelType",
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "labelId": "my_labelId",
     *   //   "labelType": "my_labelType",
     *   //   "name": "my_name"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Accounts$Labels$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Accounts$Labels$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AccountLabel>>;
    create(
      params: Params$Resource$Accounts$Labels$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Accounts$Labels$Create,
      options: MethodOptions | BodyResponseCallback<Schema$AccountLabel>,
      callback: BodyResponseCallback<Schema$AccountLabel>
    ): void;
    create(
      params: Params$Resource$Accounts$Labels$Create,
      callback: BodyResponseCallback<Schema$AccountLabel>
    ): void;
    create(callback: BodyResponseCallback<Schema$AccountLabel>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Accounts$Labels$Create
        | BodyResponseCallback<Schema$AccountLabel>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccountLabel>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccountLabel>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AccountLabel>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Labels$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Labels$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://css.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/labels').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AccountLabel>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AccountLabel>(parameters);
      }
    }

    /**
     * Deletes a label and removes it from all accounts to which it was assigned.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/css.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const css = google.css('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await css.accounts.labels.delete({
     *     // Required. The name of the label to delete. Format: accounts/{account\}/labels/{label\}
     *     name: 'accounts/my-account/labels/my-label',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Accounts$Labels$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Accounts$Labels$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Accounts$Labels$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Accounts$Labels$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Accounts$Labels$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Accounts$Labels$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Labels$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Labels$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://css.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Lists the labels owned by an account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/css.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const css = google.css('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await css.accounts.labels.list({
     *     // The maximum number of labels to return. The service may return fewer than this value. If unspecified, at most 50 labels will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListAccountLabels` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccountLabels` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent account. Format: accounts/{account\}
     *     parent: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountLabels": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Accounts$Labels$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Accounts$Labels$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListAccountLabelsResponse>>;
    list(
      params: Params$Resource$Accounts$Labels$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Labels$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAccountLabelsResponse>,
      callback: BodyResponseCallback<Schema$ListAccountLabelsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Labels$List,
      callback: BodyResponseCallback<Schema$ListAccountLabelsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListAccountLabelsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Labels$List
        | BodyResponseCallback<Schema$ListAccountLabelsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAccountLabelsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAccountLabelsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListAccountLabelsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Labels$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Labels$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://css.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/labels').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListAccountLabelsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAccountLabelsResponse>(parameters);
      }
    }

    /**
     * Updates a label.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/css.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const css = google.css('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await css.accounts.labels.patch({
     *     // Identifier. The resource name of the label. Format: accounts/{account\}/labels/{label\}
     *     name: 'accounts/my-account/labels/my-label',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountId": "my_accountId",
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "labelId": "my_labelId",
     *       //   "labelType": "my_labelType",
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "labelId": "my_labelId",
     *   //   "labelType": "my_labelType",
     *   //   "name": "my_name"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Accounts$Labels$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Accounts$Labels$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AccountLabel>>;
    patch(
      params: Params$Resource$Accounts$Labels$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Accounts$Labels$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$AccountLabel>,
      callback: BodyResponseCallback<Schema$AccountLabel>
    ): void;
    patch(
      params: Params$Resource$Accounts$Labels$Patch,
      callback: BodyResponseCallback<Schema$AccountLabel>
    ): void;
    patch(callback: BodyResponseCallback<Schema$AccountLabel>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Accounts$Labels$Patch
        | BodyResponseCallback<Schema$AccountLabel>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccountLabel>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccountLabel>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AccountLabel>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Labels$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Labels$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://css.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AccountLabel>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AccountLabel>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Labels$Create
    extends StandardParameters {
    /**
     * Required. The parent account. Format: accounts/{account\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AccountLabel;
  }
  export interface Params$Resource$Accounts$Labels$Delete
    extends StandardParameters {
    /**
     * Required. The name of the label to delete. Format: accounts/{account\}/labels/{label\}
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Labels$List
    extends StandardParameters {
    /**
     * The maximum number of labels to return. The service may return fewer than this value. If unspecified, at most 50 labels will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListAccountLabels` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccountLabels` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent account. Format: accounts/{account\}
     */
    parent?: string;
  }
  export interface Params$Resource$Accounts$Labels$Patch
    extends StandardParameters {
    /**
     * Identifier. The resource name of the label. Format: accounts/{account\}/labels/{label\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AccountLabel;
  }

  export class Resource$Accounts$Quotas {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists the daily call quota and usage per group for your CSS Center account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/css.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const css = google.css('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await css.accounts.quotas.list({
     *     // Optional. The maximum number of quotas to return in the response, used for paging. Defaults to 500; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. Token (if provided) to retrieve the subsequent page. All other parameters must match the original call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The CSS account that owns the collection of method quotas and resources. In most cases, this is the CSS domain. Format: accounts/{account\}
     *     parent: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "quotaGroups": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Accounts$Quotas$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Accounts$Quotas$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListQuotaGroupsResponse>>;
    list(
      params: Params$Resource$Accounts$Quotas$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Quotas$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListQuotaGroupsResponse>,
      callback: BodyResponseCallback<Schema$ListQuotaGroupsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Quotas$List,
      callback: BodyResponseCallback<Schema$ListQuotaGroupsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListQuotaGroupsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Quotas$List
        | BodyResponseCallback<Schema$ListQuotaGroupsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListQuotaGroupsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListQuotaGroupsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListQuotaGroupsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Quotas$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Quotas$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://css.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/quotas').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListQuotaGroupsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListQuotaGroupsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Quotas$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of quotas to return in the response, used for paging. Defaults to 500; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. Token (if provided) to retrieve the subsequent page. All other parameters must match the original call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The CSS account that owns the collection of method quotas and resources. In most cases, this is the CSS domain. Format: accounts/{account\}
     */
    parent?: string;
  }
}
