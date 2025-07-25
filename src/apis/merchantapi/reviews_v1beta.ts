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

export namespace merchantapi_reviews_v1beta {
  export interface Options extends GlobalOptions {
    version: 'reviews_v1beta';
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
   * Merchant API
   *
   * Programmatically manage your Merchant Center Accounts.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const merchantapi = google.merchantapi('reviews_v1beta');
   * ```
   */
  export class Merchantapi {
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
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Response message for the `ListMerchantsReview` method.
   */
  export interface Schema$ListMerchantReviewsResponse {
    /**
     * The merchant review.
     */
    merchantReviews?: Schema$MerchantReview[];
    /**
     * The token to retrieve the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * response message for the ListProductReviews method.
   */
  export interface Schema$ListProductReviewsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The product review.
     */
    productReviews?: Schema$ProductReview[];
  }
  /**
   * A review for a merchant. For more information, see [Introduction to Merchant Review Feeds](https://developers.google.com/merchant-review-feeds)
   */
  export interface Schema$MerchantReview {
    /**
     * Optional. A list of custom (merchant-provided) attributes. It can also be used for submitting any attribute of the data specification in its generic form (for example, `{ "name": "size type", "value": "regular" \}`). This is useful for submitting attributes not explicitly exposed by the API, such as experimental attributes. Maximum allowed number of characters for each custom attribute is 10240 (represents sum of characters for name and value). Maximum 2500 custom attributes can be set per product, with total size of 102.4kB. Underscores in custom attribute names are replaced by spaces upon insertion.
     */
    customAttributes?: Schema$CustomAttribute[];
    /**
     * Output only. The primary data source of the merchant review.
     */
    dataSource?: string | null;
    /**
     * Optional. A list of merchant review attributes.
     */
    merchantReviewAttributes?: Schema$MerchantReviewAttributes;
    /**
     * Required. The user provided merchant review ID to uniquely identify the merchant review.
     */
    merchantReviewId?: string | null;
    /**
     * Output only. The status of a merchant review, data validation issues, that is, information about a merchant review computed asynchronously.
     */
    merchantReviewStatus?: Schema$MerchantReviewStatus;
    /**
     * Identifier. The name of the merchant review. Format: `"{merchantreview.name=accounts/{account\}/merchantReviews/{merchantReview\}\}"`
     */
    name?: string | null;
  }
  /**
   * Attributes.
   */
  export interface Schema$MerchantReviewAttributes {
    /**
     * Optional. The method used to collect the review.
     */
    collectionMethod?: string | null;
    /**
     * Required. This should be any freeform text provided by the user and should not be truncated. If multiple responses to different questions are provided, all responses should be included, with the minimal context for the responses to make sense. Context should not be provided if questions were left unanswered.
     */
    content?: string | null;
    /**
     * Optional. Set to true if the reviewer should remain anonymous.
     */
    isAnonymous?: boolean | null;
    /**
     * Optional. The maximum possible number for the rating. The value of the max rating must be greater than the value of the min rating.
     */
    maxRating?: string | null;
    /**
     * Optional. Human-readable display name for the merchant.
     */
    merchantDisplayName?: string | null;
    /**
     * Required. Must be unique and stable across all requests. In other words, if a request today and another 90 days ago refer to the same merchant, they must have the same id.
     */
    merchantId?: string | null;
    /**
     * Optional. URL to the merchant's main website. Do not use a redirect URL for this value. In other words, the value should point directly to the merchant's site.
     */
    merchantLink?: string | null;
    /**
     * Optional. URL to the landing page that hosts the reviews for this merchant. Do not use a redirect URL.
     */
    merchantRatingLink?: string | null;
    /**
     * Optional. The minimum possible number for the rating. This should be the worst possible rating and should not be a value for no rating.
     */
    minRating?: string | null;
    /**
     * Optional. The reviewer's overall rating of the merchant.
     */
    rating?: number | null;
    /**
     * Optional. The country where the reviewer made the order defined by ISO 3166-1 Alpha-2 Country Code.
     */
    reviewCountry?: string | null;
    /**
     * Optional. A permanent, unique identifier for the author of the review in the publisher's system.
     */
    reviewerId?: string | null;
    /**
     * Optional. Display name of the review author.
     */
    reviewerUsername?: string | null;
    /**
     * Optional. The language of the review defined by BCP-47 language code.
     */
    reviewLanguage?: string | null;
    /**
     * Required. The timestamp indicating when the review was written.
     */
    reviewTime?: string | null;
    /**
     * Optional. The title of the review.
     */
    title?: string | null;
  }
  /**
   * The destination status of the merchant review status.
   */
  export interface Schema$MerchantReviewDestinationStatus {
    /**
     * Output only. The name of the reporting context.
     */
    reportingContext?: string | null;
  }
  /**
   * The ItemLevelIssue of the merchant review status.
   */
  export interface Schema$MerchantReviewItemLevelIssue {
    /**
     * Output only. The attribute's name, if the issue is caused by a single attribute.
     */
    attribute?: string | null;
    /**
     * Output only. The error code of the issue.
     */
    code?: string | null;
    /**
     * Output only. A short issue description in English.
     */
    description?: string | null;
    /**
     * Output only. A detailed issue description in English.
     */
    detail?: string | null;
    /**
     * Output only. The URL of a web page to help with resolving this issue.
     */
    documentation?: string | null;
    /**
     * Output only. The reporting context the issue applies to.
     */
    reportingContext?: string | null;
    /**
     * Output only. Whether the issue can be resolved by the merchant.
     */
    resolution?: string | null;
    /**
     * Output only. How this issue affects serving of the merchant review.
     */
    severity?: string | null;
  }
  /**
   * The status of a merchant review, data validation issues, that is, information about a merchant review computed asynchronously.
   */
  export interface Schema$MerchantReviewStatus {
    /**
     * Output only. Date on which the item has been created, in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format.
     */
    createTime?: string | null;
    /**
     * Output only. The intended destinations for the merchant review.
     */
    destinationStatuses?: Schema$MerchantReviewDestinationStatus[];
    /**
     * Output only. A list of all issues associated with the merchant review.
     */
    itemLevelIssues?: Schema$MerchantReviewItemLevelIssue[];
    /**
     * Output only. Date on which the item has been last updated, in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format.
     */
    lastUpdateTime?: string | null;
  }
  /**
   * The change that happened to the product including old value, new value, country code as the region code and reporting context.
   */
  export interface Schema$ProductChange {
    /**
     * The new value of the changed resource or attribute. If empty, it means that the product was deleted. Will have one of these values : (`approved`, `pending`, `disapproved`, ``)
     */
    newValue?: string | null;
    /**
     * The old value of the changed resource or attribute. If empty, it means that the product was created. Will have one of these values : (`approved`, `pending`, `disapproved`, ``)
     */
    oldValue?: string | null;
    /**
     * Countries that have the change (if applicable). Represented in the ISO 3166 format.
     */
    regionCode?: string | null;
    /**
     * Reporting contexts that have the change (if applicable). Currently this field supports only (`SHOPPING_ADS`, `LOCAL_INVENTORY_ADS`, `YOUTUBE_SHOPPING`, `YOUTUBE_CHECKOUT`, `YOUTUBE_AFFILIATE`) from the enum value [ReportingContextEnum](/merchant/api/reference/rest/Shared.Types/ReportingContextEnum)
     */
    reportingContext?: string | null;
  }
  /**
   * A review for a product. For more information, see [Introduction to Product Review Feeds](https://developers.google.com/product-review-feeds)
   */
  export interface Schema$ProductReview {
    /**
     * Optional. A list of custom (merchant-provided) attributes.
     */
    customAttributes?: Schema$CustomAttribute[];
    /**
     * Output only. The primary data source of the product review.
     */
    dataSource?: string | null;
    /**
     * Identifier. The name of the product review. Format: `"{productreview.name=accounts/{account\}/productReviews/{productReview\}\}"`
     */
    name?: string | null;
    /**
     * Optional. A list of product review attributes.
     */
    productReviewAttributes?: Schema$ProductReviewAttributes;
    /**
     * Required. The permanent, unique identifier for the product review in the publisher’s system.
     */
    productReviewId?: string | null;
    /**
     * Output only. The status of a product review, data validation issues, that is, information about a product review computed asynchronously.
     */
    productReviewStatus?: Schema$ProductReviewStatus;
  }
  /**
   * Attributes.
   */
  export interface Schema$ProductReviewAttributes {
    /**
     * Optional. The name of the aggregator of the product reviews. A publisher may use a reviews aggregator to manage reviews and provide the feeds. This element indicates the use of an aggregator and contains information about the aggregator.
     */
    aggregatorName?: string | null;
    /**
     * Optional. Contains ASINs (Amazon Standard Identification Numbers) associated with a product.
     */
    asins?: string[] | null;
    /**
     * Optional. Contains brand names associated with a product.
     */
    brands?: string[] | null;
    /**
     * Optional. The method used to collect the review.
     */
    collectionMethod?: string | null;
    /**
     * Optional. Contains the disadvantages based on the opinion of the reviewer. Omit boilerplate text like "con:" unless it was written by the reviewer.
     */
    cons?: string[] | null;
    /**
     * Optional. The content of the review. If empty, the content might still get populated from pros and cons.
     */
    content?: string | null;
    /**
     * Optional. Contains GTINs (global trade item numbers) associated with a product. Sub-types of GTINs (e.g. UPC, EAN, ISBN, JAN) are supported.
     */
    gtins?: string[] | null;
    /**
     * Optional. Indicates whether the review is incentivized.
     */
    isIncentivizedReview?: boolean | null;
    /**
     * Optional. Indicates whether the review is marked as spam in the publisher's system.
     */
    isSpam?: boolean | null;
    /**
     * Optional. Indicates whether the reviewer's purchase is verified.
     */
    isVerifiedPurchase?: boolean | null;
    /**
     * Optional. The maximum possible number for the rating. The value of the max rating must be greater than the value of the min attribute.
     */
    maxRating?: string | null;
    /**
     * Optional. Contains the ratings associated with the review. The minimum possible number for the rating. This should be the worst possible rating and should not be a value for no rating.
     */
    minRating?: string | null;
    /**
     * Optional. Contains MPNs (manufacturer part numbers) associated with a product.
     */
    mpns?: string[] | null;
    /**
     * Optional. The URI of the product. This URI can have the same value as the `review_link` element, if the review URI and the product URI are the same.
     */
    productLinks?: string[] | null;
    /**
     * Optional. Descriptive name of a product.
     */
    productNames?: string[] | null;
    /**
     * Optional. Contains the advantages based on the opinion of the reviewer. Omit boilerplate text like "pro:" unless it was written by the reviewer.
     */
    pros?: string[] | null;
    /**
     * Optional. A link to the company favicon of the publisher. The image dimensions should be favicon size: 16x16 pixels. The image format should be GIF, JPG or PNG.
     */
    publisherFavicon?: string | null;
    /**
     * Optional. The name of the publisher of the product reviews. The information about the publisher, which may be a retailer, manufacturer, reviews service company, or any entity that publishes product reviews.
     */
    publisherName?: string | null;
    /**
     * Optional. The reviewer's overall rating of the product.
     */
    rating?: number | null;
    /**
     * Optional. The country of the review defined by ISO 3166-1 Alpha-2 Country Code.
     */
    reviewCountry?: string | null;
    /**
     * Optional. The author of the product review. A permanent, unique identifier for the author of the review in the publisher's system.
     */
    reviewerId?: string | null;
    /**
     * Optional. A URI to an image of the reviewed product created by the review author. The URI does not have to end with an image file extension.
     */
    reviewerImageLinks?: string[] | null;
    /**
     * Optional. Set to true if the reviewer should remain anonymous.
     */
    reviewerIsAnonymous?: boolean | null;
    /**
     * Optional. The name of the reviewer of the product review.
     */
    reviewerUsername?: string | null;
    /**
     * Optional. The language of the review defined by BCP-47 language code.
     */
    reviewLanguage?: string | null;
    /**
     * Optional. The URI of the review landing page.
     */
    reviewLink?: Schema$ReviewLink;
    /**
     * Required. The timestamp indicating when the review was written.
     */
    reviewTime?: string | null;
    /**
     * Optional. Contains SKUs (stock keeping units) associated with a product. Often this matches the product Offer Id in the product feed.
     */
    skus?: string[] | null;
    /**
     * Optional. The name of the subclient of the product reviews. The subclient is an identifier of the product review source. It should be equivalent to the directory provided in the file data source path.
     */
    subclientName?: string | null;
    /**
     * Optional. The title of the review.
     */
    title?: string | null;
    /**
     * Optional. A permanent, unique identifier for the transaction associated with the review in the publisher's system. This ID can be used to indicate that multiple reviews are associated with the same transaction.
     */
    transactionId?: string | null;
  }
  /**
   * The destination status of the product review status.
   */
  export interface Schema$ProductReviewDestinationStatus {
    /**
     * Output only. The name of the reporting context.
     */
    reportingContext?: string | null;
  }
  /**
   * The ItemLevelIssue of the product review status.
   */
  export interface Schema$ProductReviewItemLevelIssue {
    /**
     * Output only. The attribute's name, if the issue is caused by a single attribute.
     */
    attribute?: string | null;
    /**
     * Output only. The error code of the issue.
     */
    code?: string | null;
    /**
     * Output only. A short issue description in English.
     */
    description?: string | null;
    /**
     * Output only. A detailed issue description in English.
     */
    detail?: string | null;
    /**
     * Output only. The URL of a web page to help with resolving this issue.
     */
    documentation?: string | null;
    /**
     * Output only. The reporting context the issue applies to.
     */
    reportingContext?: string | null;
    /**
     * Output only. Whether the issue can be resolved by the merchant.
     */
    resolution?: string | null;
    /**
     * Output only. How this issue affects serving of the product review.
     */
    severity?: string | null;
  }
  /**
   * Product review status.
   */
  export interface Schema$ProductReviewStatus {
    /**
     * Output only. Date on which the item has been created, in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format.
     */
    createTime?: string | null;
    /**
     * Output only. The intended destinations for the product review.
     */
    destinationStatuses?: Schema$ProductReviewDestinationStatus[];
    /**
     * Output only. A list of all issues associated with the product review.
     */
    itemLevelIssues?: Schema$ProductReviewItemLevelIssue[];
    /**
     * Output only. Date on which the item has been last updated, in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format.
     */
    lastUpdateTime?: string | null;
  }
  /**
   * The message that the merchant will receive to notify about product status change event
   */
  export interface Schema$ProductStatusChangeMessage {
    /**
     * The target account that owns the entity that changed. Format : `accounts/{merchant_id\}`
     */
    account?: string | null;
    /**
     * The attribute in the resource that changed, in this case it will be always `Status`.
     */
    attribute?: string | null;
    /**
     * A message to describe the change that happened to the product
     */
    changes?: Schema$ProductChange[];
    /**
     * The time at which the event was generated. If you want to order the notification messages you receive you should rely on this field not on the order of receiving the notifications.
     */
    eventTime?: string | null;
    /**
     * Optional. The product expiration time. This field will not be set if the notification is sent for a product deletion event.
     */
    expirationTime?: string | null;
    /**
     * The account that manages the merchant's account. can be the same as merchant id if it is standalone account. Format : `accounts/{service_provider_id\}`
     */
    managingAccount?: string | null;
    /**
     * The product name. Format: `accounts/{account\}/products/{product\}`
     */
    resource?: string | null;
    /**
     * The product id.
     */
    resourceId?: string | null;
    /**
     * The resource that changed, in this case it will always be `Product`.
     */
    resourceType?: string | null;
  }
  /**
   * The URI of the review landing page.
   */
  export interface Schema$ReviewLink {
    /**
     * Optional. The URI of the review landing page. For example: `http://www.example.com/review_5.html`.
     */
    link?: string | null;
    /**
     * Optional. Type of the review URI.
     */
    type?: string | null;
  }

  export class Resource$Accounts {
    context: APIRequestContext;
    merchantReviews: Resource$Accounts$Merchantreviews;
    productReviews: Resource$Accounts$Productreviews;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.merchantReviews = new Resource$Accounts$Merchantreviews(
        this.context
      );
      this.productReviews = new Resource$Accounts$Productreviews(this.context);
    }
  }

  export class Resource$Accounts$Merchantreviews {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes merchant review.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/merchantapi.googleapis.com
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
     * const merchantapi = google.merchantapi('reviews_v1beta');
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
     *   const res = await merchantapi.accounts.merchantReviews.delete({
     *     // Required. The ID of the merchant review. Format: accounts/{account\}/merchantReviews/{merchantReview\}
     *     name: 'accounts/my-account/merchantReviews/my-merchantReview',
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
      params: Params$Resource$Accounts$Merchantreviews$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Accounts$Merchantreviews$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Accounts$Merchantreviews$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Accounts$Merchantreviews$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Accounts$Merchantreviews$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Accounts$Merchantreviews$Delete
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
        {}) as Params$Resource$Accounts$Merchantreviews$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Merchantreviews$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://merchantapi.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/reviews/v1beta/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
     * Gets a merchant review.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/merchantapi.googleapis.com
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
     * const merchantapi = google.merchantapi('reviews_v1beta');
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
     *   const res = await merchantapi.accounts.merchantReviews.get({
     *     // Required. The ID of the merchant review. Format: accounts/{account\}/merchantReviews/{merchantReview\}
     *     name: 'accounts/my-account/merchantReviews/my-merchantReview',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "customAttributes": [],
     *   //   "dataSource": "my_dataSource",
     *   //   "merchantReviewAttributes": {},
     *   //   "merchantReviewId": "my_merchantReviewId",
     *   //   "merchantReviewStatus": {},
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
    get(
      params: Params$Resource$Accounts$Merchantreviews$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Accounts$Merchantreviews$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$MerchantReview>>;
    get(
      params: Params$Resource$Accounts$Merchantreviews$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounts$Merchantreviews$Get,
      options: MethodOptions | BodyResponseCallback<Schema$MerchantReview>,
      callback: BodyResponseCallback<Schema$MerchantReview>
    ): void;
    get(
      params: Params$Resource$Accounts$Merchantreviews$Get,
      callback: BodyResponseCallback<Schema$MerchantReview>
    ): void;
    get(callback: BodyResponseCallback<Schema$MerchantReview>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Merchantreviews$Get
        | BodyResponseCallback<Schema$MerchantReview>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$MerchantReview>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$MerchantReview>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$MerchantReview>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Merchantreviews$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Merchantreviews$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://merchantapi.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/reviews/v1beta/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$MerchantReview>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$MerchantReview>(parameters);
      }
    }

    /**
     * Inserts a review for your Merchant Center account. If the review already exists, then the review is replaced with the new instance.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/merchantapi.googleapis.com
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
     * const merchantapi = google.merchantapi('reviews_v1beta');
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
     *   const res = await merchantapi.accounts.merchantReviews.insert({
     *     // Required. The data source of the [merchantreview](https://support.google.com/merchants/answer/7045996?sjid=5253581244217581976-EU) Format: `accounts/{account\}/dataSources/{datasource\}`.
     *     dataSource: 'placeholder-value',
     *     // Required. The account where the merchant review will be inserted. Format: accounts/{account\}
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "customAttributes": [],
     *       //   "dataSource": "my_dataSource",
     *       //   "merchantReviewAttributes": {},
     *       //   "merchantReviewId": "my_merchantReviewId",
     *       //   "merchantReviewStatus": {},
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "customAttributes": [],
     *   //   "dataSource": "my_dataSource",
     *   //   "merchantReviewAttributes": {},
     *   //   "merchantReviewId": "my_merchantReviewId",
     *   //   "merchantReviewStatus": {},
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
    insert(
      params: Params$Resource$Accounts$Merchantreviews$Insert,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    insert(
      params?: Params$Resource$Accounts$Merchantreviews$Insert,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$MerchantReview>>;
    insert(
      params: Params$Resource$Accounts$Merchantreviews$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Accounts$Merchantreviews$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$MerchantReview>,
      callback: BodyResponseCallback<Schema$MerchantReview>
    ): void;
    insert(
      params: Params$Resource$Accounts$Merchantreviews$Insert,
      callback: BodyResponseCallback<Schema$MerchantReview>
    ): void;
    insert(callback: BodyResponseCallback<Schema$MerchantReview>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Accounts$Merchantreviews$Insert
        | BodyResponseCallback<Schema$MerchantReview>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$MerchantReview>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$MerchantReview>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$MerchantReview>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Merchantreviews$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Merchantreviews$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://merchantapi.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/reviews/v1beta/{+parent}/merchantReviews:insert'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$MerchantReview>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$MerchantReview>(parameters);
      }
    }

    /**
     * Lists merchant reviews.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/merchantapi.googleapis.com
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
     * const merchantapi = google.merchantapi('reviews_v1beta');
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
     *   const res = await merchantapi.accounts.merchantReviews.list({
     *     // Optional. The maximum number of merchant reviews to return. The service can return fewer than this value. The maximum value is 1000; values above 1000 are coerced to 1000. If unspecified, the maximum number of reviews is returned.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListMerchantReviews` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMerchantReviews` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The account to list merchant reviews for. Format: accounts/{account\}
     *     parent: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "merchantReviews": [],
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
      params: Params$Resource$Accounts$Merchantreviews$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Accounts$Merchantreviews$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListMerchantReviewsResponse>>;
    list(
      params: Params$Resource$Accounts$Merchantreviews$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Merchantreviews$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListMerchantReviewsResponse>,
      callback: BodyResponseCallback<Schema$ListMerchantReviewsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Merchantreviews$List,
      callback: BodyResponseCallback<Schema$ListMerchantReviewsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListMerchantReviewsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Merchantreviews$List
        | BodyResponseCallback<Schema$ListMerchantReviewsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListMerchantReviewsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListMerchantReviewsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListMerchantReviewsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Merchantreviews$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Merchantreviews$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://merchantapi.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/reviews/v1beta/{+parent}/merchantReviews'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListMerchantReviewsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListMerchantReviewsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Merchantreviews$Delete
    extends StandardParameters {
    /**
     * Required. The ID of the merchant review. Format: accounts/{account\}/merchantReviews/{merchantReview\}
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Merchantreviews$Get
    extends StandardParameters {
    /**
     * Required. The ID of the merchant review. Format: accounts/{account\}/merchantReviews/{merchantReview\}
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Merchantreviews$Insert
    extends StandardParameters {
    /**
     * Required. The data source of the [merchantreview](https://support.google.com/merchants/answer/7045996?sjid=5253581244217581976-EU) Format: `accounts/{account\}/dataSources/{datasource\}`.
     */
    dataSource?: string;
    /**
     * Required. The account where the merchant review will be inserted. Format: accounts/{account\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$MerchantReview;
  }
  export interface Params$Resource$Accounts$Merchantreviews$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of merchant reviews to return. The service can return fewer than this value. The maximum value is 1000; values above 1000 are coerced to 1000. If unspecified, the maximum number of reviews is returned.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListMerchantReviews` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMerchantReviews` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The account to list merchant reviews for. Format: accounts/{account\}
     */
    parent?: string;
  }

  export class Resource$Accounts$Productreviews {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a product review.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/merchantapi.googleapis.com
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
     * const merchantapi = google.merchantapi('reviews_v1beta');
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
     *   const res = await merchantapi.accounts.productReviews.delete({
     *     // Required. The ID of the Product review. Format: accounts/{account\}/productReviews/{productReview\}
     *     name: 'accounts/my-account/productReviews/my-productReview',
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
      params: Params$Resource$Accounts$Productreviews$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Accounts$Productreviews$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Accounts$Productreviews$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Accounts$Productreviews$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Accounts$Productreviews$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Accounts$Productreviews$Delete
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
        {}) as Params$Resource$Accounts$Productreviews$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Productreviews$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://merchantapi.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/reviews/v1beta/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
     * Gets a product review.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/merchantapi.googleapis.com
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
     * const merchantapi = google.merchantapi('reviews_v1beta');
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
     *   const res = await merchantapi.accounts.productReviews.get({
     *     // Required. The ID of the merchant review. Format: accounts/{account\}/productReviews/{productReview\}
     *     name: 'accounts/my-account/productReviews/my-productReview',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "customAttributes": [],
     *   //   "dataSource": "my_dataSource",
     *   //   "name": "my_name",
     *   //   "productReviewAttributes": {},
     *   //   "productReviewId": "my_productReviewId",
     *   //   "productReviewStatus": {}
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
      params: Params$Resource$Accounts$Productreviews$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Accounts$Productreviews$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ProductReview>>;
    get(
      params: Params$Resource$Accounts$Productreviews$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounts$Productreviews$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ProductReview>,
      callback: BodyResponseCallback<Schema$ProductReview>
    ): void;
    get(
      params: Params$Resource$Accounts$Productreviews$Get,
      callback: BodyResponseCallback<Schema$ProductReview>
    ): void;
    get(callback: BodyResponseCallback<Schema$ProductReview>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Productreviews$Get
        | BodyResponseCallback<Schema$ProductReview>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ProductReview>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ProductReview>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ProductReview>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Productreviews$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Productreviews$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://merchantapi.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/reviews/v1beta/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$ProductReview>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ProductReview>(parameters);
      }
    }

    /**
     * Inserts a product review.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/merchantapi.googleapis.com
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
     * const merchantapi = google.merchantapi('reviews_v1beta');
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
     *   const res = await merchantapi.accounts.productReviews.insert({
     *     // Required. Format: `accounts/{account\}/dataSources/{datasource\}`.
     *     dataSource: 'placeholder-value',
     *     // Required. The account where the product review will be inserted. Format: accounts/{account\}
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "customAttributes": [],
     *       //   "dataSource": "my_dataSource",
     *       //   "name": "my_name",
     *       //   "productReviewAttributes": {},
     *       //   "productReviewId": "my_productReviewId",
     *       //   "productReviewStatus": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "customAttributes": [],
     *   //   "dataSource": "my_dataSource",
     *   //   "name": "my_name",
     *   //   "productReviewAttributes": {},
     *   //   "productReviewId": "my_productReviewId",
     *   //   "productReviewStatus": {}
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
      params: Params$Resource$Accounts$Productreviews$Insert,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    insert(
      params?: Params$Resource$Accounts$Productreviews$Insert,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ProductReview>>;
    insert(
      params: Params$Resource$Accounts$Productreviews$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Accounts$Productreviews$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$ProductReview>,
      callback: BodyResponseCallback<Schema$ProductReview>
    ): void;
    insert(
      params: Params$Resource$Accounts$Productreviews$Insert,
      callback: BodyResponseCallback<Schema$ProductReview>
    ): void;
    insert(callback: BodyResponseCallback<Schema$ProductReview>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Accounts$Productreviews$Insert
        | BodyResponseCallback<Schema$ProductReview>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ProductReview>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ProductReview>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ProductReview>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Productreviews$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Productreviews$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://merchantapi.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/reviews/v1beta/{+parent}/productReviews:insert'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ProductReview>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ProductReview>(parameters);
      }
    }

    /**
     * Lists product reviews.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/merchantapi.googleapis.com
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
     * const merchantapi = google.merchantapi('reviews_v1beta');
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
     *   const res = await merchantapi.accounts.productReviews.list({
     *     // Optional. The maximum number of products to return. The service may return fewer than this value.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListProductReviews` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProductReviews` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The account to list product reviews for. Format: accounts/{account\}
     *     parent: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "productReviews": []
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
      params: Params$Resource$Accounts$Productreviews$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Accounts$Productreviews$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListProductReviewsResponse>>;
    list(
      params: Params$Resource$Accounts$Productreviews$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Productreviews$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListProductReviewsResponse>,
      callback: BodyResponseCallback<Schema$ListProductReviewsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Productreviews$List,
      callback: BodyResponseCallback<Schema$ListProductReviewsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListProductReviewsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Productreviews$List
        | BodyResponseCallback<Schema$ListProductReviewsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListProductReviewsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListProductReviewsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListProductReviewsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Productreviews$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Productreviews$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://merchantapi.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/reviews/v1beta/{+parent}/productReviews').replace(
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
        createAPIRequest<Schema$ListProductReviewsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListProductReviewsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Productreviews$Delete
    extends StandardParameters {
    /**
     * Required. The ID of the Product review. Format: accounts/{account\}/productReviews/{productReview\}
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Productreviews$Get
    extends StandardParameters {
    /**
     * Required. The ID of the merchant review. Format: accounts/{account\}/productReviews/{productReview\}
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Productreviews$Insert
    extends StandardParameters {
    /**
     * Required. Format: `accounts/{account\}/dataSources/{datasource\}`.
     */
    dataSource?: string;
    /**
     * Required. The account where the product review will be inserted. Format: accounts/{account\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ProductReview;
  }
  export interface Params$Resource$Accounts$Productreviews$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of products to return. The service may return fewer than this value.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListProductReviews` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProductReviews` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The account to list product reviews for. Format: accounts/{account\}
     */
    parent?: string;
  }
}
