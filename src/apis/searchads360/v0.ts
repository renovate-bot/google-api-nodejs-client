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

export namespace searchads360_v0 {
  export interface Options extends GlobalOptions {
    version: 'v0';
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
   * Search Ads 360 Reporting API
   *
   * The Search Ads 360 API allows developers to automate downloading reports from Search Ads 360.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const searchads360 = google.searchads360('v0');
   * ```
   */
  export class Searchads360 {
    context: APIRequestContext;
    customers: Resource$Customers;
    searchAds360Fields: Resource$Searchads360fields;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.customers = new Resource$Customers(this.context);
      this.searchAds360Fields = new Resource$Searchads360fields(this.context);
    }
  }

  /**
   * Represents an AdSchedule criterion. AdSchedule is specified as the day of the week and a time interval within which ads will be shown. No more than six AdSchedules can be added for the same day.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__AdScheduleInfo {
    /**
     * Day of the week the schedule applies to. This field is required for CREATE operations and is prohibited on UPDATE operations.
     */
    dayOfWeek?: string | null;
    /**
     * Ending hour in 24 hour time; 24 signifies end of the day. This field must be between 0 and 24, inclusive. This field is required for CREATE operations and is prohibited on UPDATE operations.
     */
    endHour?: number | null;
    /**
     * Minutes after the end hour at which this schedule ends. The schedule is exclusive of the end minute. This field is required for CREATE operations and is prohibited on UPDATE operations.
     */
    endMinute?: string | null;
    /**
     * Starting hour in 24 hour time. This field must be between 0 and 23, inclusive. This field is required for CREATE operations and is prohibited on UPDATE operations.
     */
    startHour?: number | null;
    /**
     * Minutes after the start hour at which this schedule starts. This field is required for CREATE operations and is prohibited on UPDATE operations.
     */
    startMinute?: string | null;
  }
  /**
   * A text asset used inside an ad.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__AdTextAsset {
    /**
     * Asset text.
     */
    text?: string | null;
  }
  /**
   * An age range criterion.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__AgeRangeInfo {
    /**
     * Type of the age range.
     */
    type?: string | null;
  }
  /**
   * An AssetInteractionTarget segment.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__AssetInteractionTarget {
    /**
     * The asset resource name.
     */
    asset?: string | null;
    /**
     * Only used with CustomerAsset, CampaignAsset and AdGroupAsset metrics. Indicates whether the interaction metrics occurred on the asset itself or a different asset or ad unit.
     */
    interactionOnThisAsset?: boolean | null;
  }
  /**
   * Contains the usage information of the asset.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__AssetUsage {
    /**
     * Resource name of the asset.
     */
    asset?: string | null;
    /**
     * The served field type of the asset.
     */
    servedAssetFieldType?: string | null;
  }
  /**
   * An audience criterion.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__AudienceInfo {
    /**
     * The Audience resource name.
     */
    audience?: string | null;
  }
  /**
   * Business Profile location data synced from the linked Business Profile account.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__BusinessProfileLocation {
    /**
     * Advertiser specified label for the location on the Business Profile account. This is synced from the Business Profile account.
     */
    labels?: string[] | null;
    /**
     * Listing ID of this Business Profile location. This is synced from the linked Business Profile account.
     */
    listingId?: string | null;
    /**
     * Business Profile store code of this location. This is synced from the Business Profile account.
     */
    storeCode?: string | null;
  }
  /**
   * A call to action asset.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__CallToActionAsset {
    /**
     * Call to action.
     */
    callToAction?: string | null;
  }
  /**
   * A mapping that can be used by custom parameter tags in a `tracking_url_template`, `final_urls`, or `mobile_final_urls`.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__CustomParameter {
    /**
     * The key matching the parameter tag name.
     */
    key?: string | null;
    /**
     * The value to be substituted.
     */
    value?: string | null;
  }
  /**
   * A device criterion.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__DeviceInfo {
    /**
     * Type of the device.
     */
    type?: string | null;
  }
  /**
   * An automated bidding strategy that raises bids for clicks that seem more likely to lead to a conversion and lowers them for clicks where they seem less likely. This bidding strategy is deprecated and cannot be created anymore. Use ManualCpc with enhanced_cpc_enabled set to true for equivalent functionality.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__EnhancedCpc {}
  /**
   * A rule specifying the maximum number of times an ad (or some set of ads) can be shown to a user over a particular time period.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__FrequencyCapEntry {}
  /**
   * A gender criterion.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__GenderInfo {
    /**
     * Type of the gender.
     */
    type?: string | null;
  }
  /**
   * An Image asset.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__ImageAsset {
    /**
     * File size of the image asset in bytes.
     */
    fileSize?: string | null;
    /**
     * Metadata for this image at its original size.
     */
    fullSize?: Schema$GoogleAdsSearchads360V0Common__ImageDimension;
    /**
     * MIME type of the image asset.
     */
    mimeType?: string | null;
  }
  /**
   * Metadata for an image at a certain size, either original or resized.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__ImageDimension {
    /**
     * Height of the image.
     */
    heightPixels?: string | null;
    /**
     * A URL that returns the image with this height and width.
     */
    url?: string | null;
    /**
     * Width of the image.
     */
    widthPixels?: string | null;
  }
  /**
   * A Keyword criterion segment.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__Keyword {
    /**
     * The AdGroupCriterion resource name.
     */
    adGroupCriterion?: string | null;
    /**
     * Keyword info.
     */
    info?: Schema$GoogleAdsSearchads360V0Common__KeywordInfo;
  }
  /**
   * A keyword criterion.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__KeywordInfo {
    /**
     * The match type of the keyword.
     */
    matchType?: string | null;
    /**
     * The text of the keyword (at most 80 characters and 10 words).
     */
    text?: string | null;
  }
  /**
   * A language criterion.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__LanguageInfo {
    /**
     * The language constant resource name.
     */
    languageConstant?: string | null;
  }
  /**
   * A listing group criterion.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__ListingGroupInfo {
    /**
     * Type of the listing group.
     */
    type?: string | null;
  }
  /**
   * A radius around a list of locations specified through a feed.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__LocationGroupInfo {
    /**
     * FeedItemSets whose FeedItems are targeted. If multiple IDs are specified, then all items that appear in at least one set are targeted. This field cannot be used with geo_target_constants. This is optional and can only be set in CREATE operations.
     */
    feedItemSets?: string[] | null;
    /**
     * Geo target constant(s) restricting the scope of the geographic area within the feed. Currently only one geo target constant is allowed.
     */
    geoTargetConstants?: string[] | null;
    /**
     * Distance in units specifying the radius around targeted locations. This is required and must be set in CREATE operations.
     */
    radius?: string | null;
    /**
     * Unit of the radius. Miles and meters are supported for geo target constants. Milli miles and meters are supported for feed item sets. This is required and must be set in CREATE operations.
     */
    radiusUnits?: string | null;
  }
  /**
   * A location criterion.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__LocationInfo {
    /**
     * The geo target constant resource name.
     */
    geoTargetConstant?: string | null;
  }
  /**
   * Manual bidding strategy that allows advertiser to set the bid per advertiser-specified action.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__ManualCpa {}
  /**
   * Manual click-based bidding where user pays per click.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__ManualCpc {
    /**
     * Whether bids are to be enhanced based on conversion optimizer data.
     */
    enhancedCpcEnabled?: boolean | null;
  }
  /**
   * Manual impression-based bidding where user pays per thousand impressions.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__ManualCpm {}
  /**
   * An automated bidding strategy to help get the most conversions for your campaigns while spending your budget.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__MaximizeConversions {
    /**
     * Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. Mutable for portfolio bidding strategies only.
     */
    cpcBidCeilingMicros?: string | null;
    /**
     * Minimum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. Mutable for portfolio bidding strategies only.
     */
    cpcBidFloorMicros?: string | null;
    /**
     * The target cost-per-action (CPA) option. This is the average amount that you would like to spend per conversion action specified in micro units of the bidding strategy's currency. If set, the bid strategy will get as many conversions as possible at or below the target cost-per-action. If the target CPA is not set, the bid strategy will aim to achieve the lowest possible CPA given the budget.
     */
    targetCpaMicros?: string | null;
  }
  /**
   * An automated bidding strategy to help get the most conversion value for your campaigns while spending your budget.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__MaximizeConversionValue {
    /**
     * Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. Mutable for portfolio bidding strategies only.
     */
    cpcBidCeilingMicros?: string | null;
    /**
     * Minimum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. Mutable for portfolio bidding strategies only.
     */
    cpcBidFloorMicros?: string | null;
    /**
     * The target return on ad spend (ROAS) option. If set, the bid strategy will maximize revenue while averaging the target return on ad spend. If the target ROAS is high, the bid strategy may not be able to spend the full budget. If the target ROAS is not set, the bid strategy will aim to achieve the highest possible ROAS for the budget.
     */
    targetRoas?: number | null;
  }
  /**
   * Metrics data.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__Metrics {
    /**
     * Search absolute top impression share is the percentage of your Search ad impressions that are shown in the most prominent Search position.
     */
    absoluteTopImpressionPercentage?: number | null;
    /**
     * The total number of conversions. This includes all conversions regardless of the value of include_in_conversions_metric.
     */
    allConversions?: number | null;
    /**
     * The total number of conversions. This includes all conversions regardless of the value of include_in_conversions_metric. When this column is selected with date, the values in date column means the conversion date. Details for the by_conversion_date columns are available at https://support.google.com/sa360/answer/9250611.
     */
    allConversionsByConversionDate?: number | null;
    /**
     * The number of times people clicked the "Call" button to call a store during or after clicking an ad. This number doesn't include whether or not calls were connected, or the duration of any calls. This metric applies to feed items only.
     */
    allConversionsFromClickToCall?: number | null;
    /**
     * The number of times people clicked a "Get directions" button to navigate to a store after clicking an ad. This metric applies to feed items only.
     */
    allConversionsFromDirections?: number | null;
    /**
     * All conversions from interactions (as oppose to view through conversions) divided by the number of ad interactions.
     */
    allConversionsFromInteractionsRate?: number | null;
    /**
     * The value of all conversions from interactions divided by the total number of interactions.
     */
    allConversionsFromInteractionsValuePerInteraction?: number | null;
    /**
     * The number of times people clicked a link to view a store's menu after clicking an ad. This metric applies to feed items only.
     */
    allConversionsFromMenu?: number | null;
    /**
     * The number of times people placed an order at a store after clicking an ad. This metric applies to feed items only.
     */
    allConversionsFromOrder?: number | null;
    /**
     * The number of other conversions (for example, posting a review or saving a location for a store) that occurred after people clicked an ad. This metric applies to feed items only.
     */
    allConversionsFromOtherEngagement?: number | null;
    /**
     * Estimated number of times people visited a store after clicking an ad. This metric applies to feed items only.
     */
    allConversionsFromStoreVisit?: number | null;
    /**
     * The number of times that people were taken to a store's URL after clicking an ad. This metric applies to feed items only.
     */
    allConversionsFromStoreWebsite?: number | null;
    /**
     * The value of all conversions.
     */
    allConversionsValue?: number | null;
    /**
     * The value of all conversions. When this column is selected with date, the values in date column means the conversion date. Details for the by_conversion_date columns are available at https://support.google.com/sa360/answer/9250611.
     */
    allConversionsValueByConversionDate?: number | null;
    /**
     * The value of all conversions divided by the total cost of ad interactions (such as clicks for text ads or views for video ads).
     */
    allConversionsValuePerCost?: number | null;
    /**
     * The average amount you pay per interaction. This amount is the total cost of your ads divided by the total number of interactions.
     */
    averageCost?: number | null;
    /**
     * The total cost of all clicks divided by the total number of clicks received. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause
     */
    averageCpc?: number | null;
    /**
     * Average cost-per-thousand impressions (CPM). This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause
     */
    averageCpm?: number | null;
    /**
     * The average quality score.
     */
    averageQualityScore?: number | null;
    /**
     * The number of clicks.
     */
    clicks?: string | null;
    /**
     * The number of client account conversions. This only includes conversion actions which include_in_client_account_conversions_metric attribute is set to true. If you use conversion-based bidding, your bid strategies will optimize for these conversions.
     */
    clientAccountConversions?: number | null;
    /**
     * The value of client account conversions. This only includes conversion actions which include_in_client_account_conversions_metric attribute is set to true. If you use conversion-based bidding, your bid strategies will optimize for these conversions.
     */
    clientAccountConversionsValue?: number | null;
    /**
     * Client account cross-sell cost of goods sold (COGS) is the total cost of products sold as a result of advertising a different product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If these products don't match then this is considered cross-sell. Cross-sell cost of goods sold is the total cost of the products sold that weren't advertised. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The hat has a cost of goods sold value of $3, the shirt has a cost of goods sold value of $5. The cross-sell cost of goods sold for this order is $5. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause
     */
    clientAccountCrossSellCostOfGoodsSoldMicros?: string | null;
    /**
     * Client account cross-sell gross profit is the profit you made from products sold as a result of advertising a different product, minus cost of goods sold (COGS). How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the purchase is a sold product. If these products don't match then this is considered cross-sell. Cross-sell gross profit is the revenue you made from cross-sell attributed to your ads minus the cost of the goods sold. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The shirt is priced $20 and has a cost of goods sold value of $5. The cross-sell gross profit of this order is $15 = $20 - $5. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause
     */
    clientAccountCrossSellGrossProfitMicros?: string | null;
    /**
     * Client account cross-sell revenue is the total amount you made from products sold as a result of advertising a different product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If these products don't match then this is considered cross-sell. Cross-sell revenue is the total value you made from cross-sell attributed to your ads. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The hat is priced $10 and the shirt is priced $20. The cross-sell revenue of this order is $20. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause
     */
    clientAccountCrossSellRevenueMicros?: string | null;
    /**
     * Client account cross-sell units sold is the total number of products sold as a result of advertising a different product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If these products don't match then this is considered cross-sell. Cross-sell units sold is the total number of cross-sold products from all orders attributed to your ads. Example: Someone clicked on a Shopping ad for a hat then bought the same hat, a shirt and a jacket. The cross-sell units sold in this order is 2. This metric is only available if you report conversions with cart data.
     */
    clientAccountCrossSellUnitsSold?: number | null;
    /**
     * Client account lead cost of goods sold (COGS) is the total cost of products sold as a result of advertising the same product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If the advertised and sold products match, then the cost of these goods is counted under lead cost of goods sold. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The hat has a cost of goods sold value of $3, the shirt has a cost of goods sold value of $5. The lead cost of goods sold for this order is $3. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause
     */
    clientAccountLeadCostOfGoodsSoldMicros?: string | null;
    /**
     * Client account lead gross profit is the profit you made from products sold as a result of advertising the same product, minus cost of goods sold (COGS). How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If the advertised and sold products match, then the revenue you made from these sales minus the cost of goods sold is your lead gross profit. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The hat is priced $10 and has a cost of goods sold value of $3. The lead gross profit of this order is $7 = $10 - $3. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause
     */
    clientAccountLeadGrossProfitMicros?: string | null;
    /**
     * Client account lead revenue is the total amount you made from products sold as a result of advertising the same product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If the advertised and sold products match, then the total value you made from the sales of these products is shown under lead revenue. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The hat is priced $10 and the shirt is priced $20. The lead revenue of this order is $10. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause
     */
    clientAccountLeadRevenueMicros?: string | null;
    /**
     * Client account lead units sold is the total number of products sold as a result of advertising the same product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If the advertised and sold products match, then the total number of these products sold is shown under lead units sold. Example: Someone clicked on a Shopping ad for a hat then bought the same hat, a shirt and a jacket. The lead units sold in this order is 1. This metric is only available if you report conversions with cart data.
     */
    clientAccountLeadUnitsSold?: number | null;
    /**
     * The total number of view-through conversions. These happen when a customer sees an image or rich media ad, then later completes a conversion on your site without interacting with (for example, clicking on) another ad.
     */
    clientAccountViewThroughConversions?: string | null;
    /**
     * The estimated percent of times that your ad was eligible to show on the Display Network but didn't because your budget was too low. Note: Content budget lost impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001.
     */
    contentBudgetLostImpressionShare?: number | null;
    /**
     * The impressions you've received on the Display Network divided by the estimated number of impressions you were eligible to receive. Note: Content impression share is reported in the range of 0.1 to 1. Any value below 0.1 is reported as 0.0999.
     */
    contentImpressionShare?: number | null;
    /**
     * The estimated percentage of impressions on the Display Network that your ads didn't receive due to poor Ad Rank. Note: Content rank lost impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001.
     */
    contentRankLostImpressionShare?: number | null;
    /**
     * The conversion custom metrics.
     */
    conversionCustomMetrics?: Schema$GoogleAdsSearchads360V0Common__Value[];
    /**
     * The number of conversions. This only includes conversion actions which include_in_conversions_metric attribute is set to true. If you use conversion-based bidding, your bid strategies will optimize for these conversions.
     */
    conversions?: number | null;
    /**
     * The sum of conversions by conversion date for biddable conversion types. Can be fractional due to attribution modeling. When this column is selected with date, the values in date column means the conversion date.
     */
    conversionsByConversionDate?: number | null;
    /**
     * Average biddable conversions (from interaction) per conversion eligible interaction. Shows how often, on average, an ad interaction leads to a biddable conversion.
     */
    conversionsFromInteractionsRate?: number | null;
    /**
     * The value of conversions from interactions divided by the number of ad interactions. This only includes conversion actions which include_in_conversions_metric attribute is set to true. If you use conversion-based bidding, your bid strategies will optimize for these conversions.
     */
    conversionsFromInteractionsValuePerInteraction?: number | null;
    /**
     * The sum of conversion values for the conversions included in the "conversions" field. This metric is useful only if you entered a value for your conversion actions.
     */
    conversionsValue?: number | null;
    /**
     * The sum of biddable conversions value by conversion date. When this column is selected with date, the values in date column means the conversion date.
     */
    conversionsValueByConversionDate?: number | null;
    /**
     * The value of biddable conversion divided by the total cost of conversion eligible interactions.
     */
    conversionsValuePerCost?: number | null;
    /**
     * The sum of your cost-per-click (CPC) and cost-per-thousand impressions (CPM) costs during this period. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause
     */
    costMicros?: string | null;
    /**
     * The cost of ad interactions divided by all conversions.
     */
    costPerAllConversions?: number | null;
    /**
     * Average conversion eligible cost per biddable conversion.
     */
    costPerConversion?: number | null;
    /**
     * The cost of ad interactions divided by current model attributed conversions. This only includes conversion actions which include_in_conversions_metric attribute is set to true. If you use conversion-based bidding, your bid strategies will optimize for these conversions.
     */
    costPerCurrentModelAttributedConversion?: number | null;
    /**
     * Conversions from when a customer clicks on an ad on one device, then converts on a different device or browser. Cross-device conversions are already included in all_conversions.
     */
    crossDeviceConversions?: number | null;
    /**
     * The number of cross-device conversions by conversion date. Details for the by_conversion_date columns are available at https://support.google.com/sa360/answer/9250611.
     */
    crossDeviceConversionsByConversionDate?: number | null;
    /**
     * The sum of the value of cross-device conversions.
     */
    crossDeviceConversionsValue?: number | null;
    /**
     * The sum of cross-device conversions value by conversion date. Details for the by_conversion_date columns are available at https://support.google.com/sa360/answer/9250611.
     */
    crossDeviceConversionsValueByConversionDate?: number | null;
    /**
     * Cross-sell cost of goods sold (COGS) is the total cost of products sold as a result of advertising a different product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If these products don't match then this is considered cross-sell. Cross-sell cost of goods sold is the total cost of the products sold that weren't advertised. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The hat has a cost of goods sold value of $3, the shirt has a cost of goods sold value of $5. The cross-sell cost of goods sold for this order is $5. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause
     */
    crossSellCostOfGoodsSoldMicros?: string | null;
    /**
     * Cross-sell gross profit is the profit you made from products sold as a result of advertising a different product, minus cost of goods sold (COGS). How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the purchase is a sold product. If these products don't match then this is considered cross-sell. Cross-sell gross profit is the revenue you made from cross-sell attributed to your ads minus the cost of the goods sold. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The shirt is priced $20 and has a cost of goods sold value of $5. The cross-sell gross profit of this order is $15 = $20 - $5. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause
     */
    crossSellGrossProfitMicros?: string | null;
    /**
     * Cross-sell revenue is the total amount you made from products sold as a result of advertising a different product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If these products don't match then this is considered cross-sell. Cross-sell revenue is the total value you made from cross-sell attributed to your ads. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The hat is priced $10 and the shirt is priced $20. The cross-sell revenue of this order is $20. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause
     */
    crossSellRevenueMicros?: string | null;
    /**
     * Cross-sell units sold is the total number of products sold as a result of advertising a different product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If these products don't match then this is considered cross-sell. Cross-sell units sold is the total number of cross-sold products from all orders attributed to your ads. Example: Someone clicked on a Shopping ad for a hat then bought the same hat, a shirt and a jacket. The cross-sell units sold in this order is 2. This metric is only available if you report conversions with cart data.
     */
    crossSellUnitsSold?: number | null;
    /**
     * The number of clicks your ad receives (Clicks) divided by the number of times your ad is shown (Impressions).
     */
    ctr?: number | null;
    /**
     * The percentage of clicks that have been filtered out of your total number of clicks (filtered + non-filtered clicks) due to being general invalid clicks. These are clicks Google considers illegitimate that are detected through routine means of filtration (that is, known invalid data-center traffic, bots and spiders or other crawlers, irregular patterns, etc). You're not charged for them, and they don't affect your account statistics. See the help page at https://support.google.com/campaignmanager/answer/6076504 for details.
     */
    generalInvalidClickRate?: number | null;
    /**
     * Number of general invalid clicks. These are a subset of your invalid clicks that are detected through routine means of filtration (such as known invalid data-center traffic, bots and spiders or other crawlers, irregular patterns, etc.). You're not charged for them, and they don't affect your account statistics. See the help page at https://support.google.com/campaignmanager/answer/6076504 for details.
     */
    generalInvalidClicks?: string | null;
    /**
     * The creative historical quality score.
     */
    historicalCreativeQualityScore?: string | null;
    /**
     * The quality of historical landing page experience.
     */
    historicalLandingPageQualityScore?: string | null;
    /**
     * The historical quality score.
     */
    historicalQualityScore?: string | null;
    /**
     * The historical search predicted click through rate (CTR).
     */
    historicalSearchPredictedCtr?: string | null;
    /**
     * Count of how often your ad has appeared on a search results page or website on the Google Network.
     */
    impressions?: string | null;
    /**
     * The types of payable and free interactions.
     */
    interactionEventTypes?: string[] | null;
    /**
     * How often people interact with your ad after it is shown to them. This is the number of interactions divided by the number of times your ad is shown.
     */
    interactionRate?: number | null;
    /**
     * The number of interactions. An interaction is the main user action associated with an ad format-clicks for text and shopping ads, views for video ads, and so on.
     */
    interactions?: string | null;
    /**
     * The percentage of clicks filtered out of your total number of clicks (filtered + non-filtered clicks) during the reporting period.
     */
    invalidClickRate?: number | null;
    /**
     * Number of clicks Google considers illegitimate and doesn't charge you for.
     */
    invalidClicks?: string | null;
    /**
     * Lead cost of goods sold (COGS) is the total cost of products sold as a result of advertising the same product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If the advertised and sold products match, then the cost of these goods is counted under lead cost of goods sold. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The hat has a cost of goods sold value of $3, the shirt has a cost of goods sold value of $5. The lead cost of goods sold for this order is $3. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause
     */
    leadCostOfGoodsSoldMicros?: string | null;
    /**
     * Lead gross profit is the profit you made from products sold as a result of advertising the same product, minus cost of goods sold (COGS). How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If the advertised and sold products match, then the revenue you made from these sales minus the cost of goods sold is your lead gross profit. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The hat is priced $10 and has a cost of goods sold value of $3. The lead gross profit of this order is $7 = $10 - $3. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause
     */
    leadGrossProfitMicros?: string | null;
    /**
     * Lead revenue is the total amount you made from products sold as a result of advertising the same product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If the advertised and sold products match, then the total value you made from the sales of these products is shown under lead revenue. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The hat is priced $10 and the shirt is priced $20. The lead revenue of this order is $10. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause
     */
    leadRevenueMicros?: string | null;
    /**
     * Lead units sold is the total number of products sold as a result of advertising the same product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If the advertised and sold products match, then the total number of these products sold is shown under lead units sold. Example: Someone clicked on a Shopping ad for a hat then bought the same hat, a shirt and a jacket. The lead units sold in this order is 1. This metric is only available if you report conversions with cart data.
     */
    leadUnitsSold?: number | null;
    /**
     * The percentage of mobile clicks that go to a mobile-friendly page.
     */
    mobileFriendlyClicksPercentage?: number | null;
    /**
     * The raw event conversion metrics.
     */
    rawEventConversionMetrics?: Schema$GoogleAdsSearchads360V0Common__Value[];
    /**
     * The percentage of the customer's Shopping or Search ad impressions that are shown in the most prominent Shopping position. See https://support.google.com/sa360/answer/9566729 for details. Any value below 0.1 is reported as 0.0999.
     */
    searchAbsoluteTopImpressionShare?: number | null;
    /**
     * The number estimating how often your ad wasn't the very first ad among the top ads in the search results due to a low budget. Note: Search budget lost absolute top impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001.
     */
    searchBudgetLostAbsoluteTopImpressionShare?: number | null;
    /**
     * The estimated percent of times that your ad was eligible to show on the Search Network but didn't because your budget was too low. Note: Search budget lost impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001.
     */
    searchBudgetLostImpressionShare?: number | null;
    /**
     * The number estimating how often your ad didn't show adjacent to the top organic search results due to a low budget. Note: Search budget lost top impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001.
     */
    searchBudgetLostTopImpressionShare?: number | null;
    /**
     * The number of clicks you've received on the Search Network divided by the estimated number of clicks you were eligible to receive. Note: Search click share is reported in the range of 0.1 to 1. Any value below 0.1 is reported as 0.0999.
     */
    searchClickShare?: number | null;
    /**
     * The impressions you've received divided by the estimated number of impressions you were eligible to receive on the Search Network for search terms that matched your keywords exactly (or were close variants of your keyword), regardless of your keyword match types. Note: Search exact match impression share is reported in the range of 0.1 to 1. Any value below 0.1 is reported as 0.0999.
     */
    searchExactMatchImpressionShare?: number | null;
    /**
     * The impressions you've received on the Search Network divided by the estimated number of impressions you were eligible to receive. Note: Search impression share is reported in the range of 0.1 to 1. Any value below 0.1 is reported as 0.0999.
     */
    searchImpressionShare?: number | null;
    /**
     * The number estimating how often your ad wasn't the very first ad among the top ads in the search results due to poor Ad Rank. Note: Search rank lost absolute top impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001.
     */
    searchRankLostAbsoluteTopImpressionShare?: number | null;
    /**
     * The estimated percentage of impressions on the Search Network that your ads didn't receive due to poor Ad Rank. Note: Search rank lost impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001.
     */
    searchRankLostImpressionShare?: number | null;
    /**
     * The number estimating how often your ad didn't show adjacent to the top organic search results due to poor Ad Rank. Note: Search rank lost top impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001.
     */
    searchRankLostTopImpressionShare?: number | null;
    /**
     * The impressions you've received among the top ads compared to the estimated number of impressions you were eligible to receive among the top ads. Note: Search top impression share is reported in the range of 0.1 to 1. Any value below 0.1 is reported as 0.0999. Top ads are generally above the top organic results, although they may show below the top organic results on certain queries.
     */
    searchTopImpressionShare?: number | null;
    /**
     * The percent of your ad impressions that are shown adjacent to the top organic search results.
     */
    topImpressionPercentage?: number | null;
    /**
     * The value of all conversions divided by the number of all conversions.
     */
    valuePerAllConversions?: number | null;
    /**
     * The value of all conversions divided by the number of all conversions. When this column is selected with date, the values in date column means the conversion date. Details for the by_conversion_date columns are available at https://support.google.com/sa360/answer/9250611.
     */
    valuePerAllConversionsByConversionDate?: number | null;
    /**
     * The value of biddable conversion divided by the number of biddable conversions. Shows how much, on average, each of the biddable conversions is worth.
     */
    valuePerConversion?: number | null;
    /**
     * Biddable conversions value by conversion date divided by biddable conversions by conversion date. Shows how much, on average, each of the biddable conversions is worth (by conversion date). When this column is selected with date, the values in date column means the conversion date.
     */
    valuePerConversionsByConversionDate?: number | null;
    /**
     * Clicks that Search Ads 360 has successfully recorded and forwarded to an advertiser's landing page.
     */
    visits?: number | null;
  }
  /**
   * An asset representing a mobile app.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__MobileAppAsset {
    /**
     * Required. A string that uniquely identifies a mobile application. It should just contain the platform native id, like "com.android.ebay" for Android or "12345689" for iOS.
     */
    appId?: string | null;
    /**
     * Required. The application store that distributes this specific app.
     */
    appStore?: string | null;
  }
  /**
   * A bidding strategy where bids are a fraction of the advertised price for some good or service.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__PercentCpc {
    /**
     * Maximum bid limit that can be set by the bid strategy. This is an optional field entered by the advertiser and specified in local micros. Note: A zero value is interpreted in the same way as having bid_ceiling undefined.
     */
    cpcBidCeilingMicros?: string | null;
    /**
     * Adjusts the bid for each auction upward or downward, depending on the likelihood of a conversion. Individual bids may exceed cpc_bid_ceiling_micros, but the average bid amount for a campaign should not.
     */
    enhancedCpcEnabled?: boolean | null;
  }
  /**
   * Settings for Real-Time Bidding, a feature only available for campaigns targeting the Ad Exchange network.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__RealTimeBiddingSetting {
    /**
     * Whether the campaign is opted in to real-time bidding.
     */
    optIn?: boolean | null;
  }
  /**
   * An expanded dynamic search ad.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__SearchAds360ExpandedDynamicSearchAdInfo {
    /**
     * The tracking id of the ad.
     */
    adTrackingId?: string | null;
    /**
     * The first line of the ad's description.
     */
    description1?: string | null;
    /**
     * The second line of the ad's description.
     */
    description2?: string | null;
  }
  /**
   * A Search Ads 360 expanded text ad.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__SearchAds360ExpandedTextAdInfo {
    /**
     * The tracking id of the ad.
     */
    adTrackingId?: string | null;
    /**
     * The first line of the ad's description.
     */
    description1?: string | null;
    /**
     * The second line of the ad's description.
     */
    description2?: string | null;
    /**
     * The headline of the ad.
     */
    headline?: string | null;
    /**
     * The second headline of the ad.
     */
    headline2?: string | null;
    /**
     * The third headline of the ad.
     */
    headline3?: string | null;
    /**
     * Text appended to the auto-generated visible URL with a delimiter.
     */
    path1?: string | null;
    /**
     * Text appended to path1 with a delimiter.
     */
    path2?: string | null;
  }
  /**
   * A Search Ads 360 product ad.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__SearchAds360ProductAdInfo {}
  /**
   * A Search Ads 360 responsive search ad.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__SearchAds360ResponsiveSearchAdInfo {
    /**
     * The tracking id of the ad.
     */
    adTrackingId?: string | null;
    /**
     * List of text assets for descriptions. When the ad serves the descriptions will be selected from this list.
     */
    descriptions?: Schema$GoogleAdsSearchads360V0Common__AdTextAsset[];
    /**
     * List of text assets for headlines. When the ad serves the headlines will be selected from this list.
     */
    headlines?: Schema$GoogleAdsSearchads360V0Common__AdTextAsset[];
    /**
     * Text appended to the auto-generated visible URL with a delimiter.
     */
    path1?: string | null;
    /**
     * Text appended to path1 with a delimiter.
     */
    path2?: string | null;
  }
  /**
   * A Search Ads 360 text ad.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__SearchAds360TextAdInfo {
    /**
     * The tracking id of the ad.
     */
    adTrackingId?: string | null;
    /**
     * The first line of the ad's description.
     */
    description1?: string | null;
    /**
     * The second line of the ad's description.
     */
    description2?: string | null;
    /**
     * The displayed mobile URL of the ad.
     */
    displayMobileUrl?: string | null;
    /**
     * The displayed URL of the ad.
     */
    displayUrl?: string | null;
    /**
     * The headline of the ad.
     */
    headline?: string | null;
  }
  /**
   * Segment only fields.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__Segments {
    /**
     * Ad network type.
     */
    adNetworkType?: string | null;
    /**
     * Only used with CustomerAsset, CampaignAsset and AdGroupAsset metrics. Indicates whether the interaction metrics occurred on the asset itself or a different asset or ad unit. Interactions (for example, clicks) are counted across all the parts of the served ad (for example, Ad itself and other components like Sitelinks) when they are served together. When interaction_on_this_asset is true, it means the interactions are on this specific asset and when interaction_on_this_asset is false, it means the interactions is not on this specific asset but on other parts of the served ad this asset is served with.
     */
    assetInteractionTarget?: Schema$GoogleAdsSearchads360V0Common__AssetInteractionTarget;
    /**
     * Resource name of the conversion action.
     */
    conversionAction?: string | null;
    /**
     * Conversion action category.
     */
    conversionActionCategory?: string | null;
    /**
     * Conversion action name.
     */
    conversionActionName?: string | null;
    /**
     * The conversion custom dimensions.
     */
    conversionCustomDimensions?: Schema$GoogleAdsSearchads360V0Common__Value[];
    /**
     * Date to which metrics apply. yyyy-MM-dd format, for example, 2018-04-17.
     */
    date?: string | null;
    /**
     * Day of the week, for example, MONDAY.
     */
    dayOfWeek?: string | null;
    /**
     * Device to which metrics apply.
     */
    device?: string | null;
    /**
     * Resource name of the geo target constant that represents a city.
     */
    geoTargetCity?: string | null;
    /**
     * Resource name of the geo target constant that represents a country.
     */
    geoTargetCountry?: string | null;
    /**
     * Resource name of the geo target constant that represents a metro.
     */
    geoTargetMetro?: string | null;
    /**
     * Resource name of the geo target constant that represents a region.
     */
    geoTargetRegion?: string | null;
    /**
     * Hour of day as a number between 0 and 23, inclusive.
     */
    hour?: number | null;
    /**
     * Keyword criterion.
     */
    keyword?: Schema$GoogleAdsSearchads360V0Common__Keyword;
    /**
     * Month as represented by the date of the first day of a month. Formatted as yyyy-MM-dd.
     */
    month?: string | null;
    /**
     * Bidding category (level 1) of the product.
     */
    productBiddingCategoryLevel1?: string | null;
    /**
     * Bidding category (level 2) of the product.
     */
    productBiddingCategoryLevel2?: string | null;
    /**
     * Bidding category (level 3) of the product.
     */
    productBiddingCategoryLevel3?: string | null;
    /**
     * Bidding category (level 4) of the product.
     */
    productBiddingCategoryLevel4?: string | null;
    /**
     * Bidding category (level 5) of the product.
     */
    productBiddingCategoryLevel5?: string | null;
    /**
     * Brand of the product.
     */
    productBrand?: string | null;
    /**
     * Channel of the product.
     */
    productChannel?: string | null;
    /**
     * Channel exclusivity of the product.
     */
    productChannelExclusivity?: string | null;
    /**
     * Condition of the product.
     */
    productCondition?: string | null;
    /**
     * Resource name of the geo target constant for the country of sale of the product.
     */
    productCountry?: string | null;
    /**
     * Custom attribute 0 of the product.
     */
    productCustomAttribute0?: string | null;
    /**
     * Custom attribute 1 of the product.
     */
    productCustomAttribute1?: string | null;
    /**
     * Custom attribute 2 of the product.
     */
    productCustomAttribute2?: string | null;
    /**
     * Custom attribute 3 of the product.
     */
    productCustomAttribute3?: string | null;
    /**
     * Custom attribute 4 of the product.
     */
    productCustomAttribute4?: string | null;
    /**
     * Item ID of the product.
     */
    productItemId?: string | null;
    /**
     * Resource name of the language constant for the language of the product.
     */
    productLanguage?: string | null;
    /**
     * Bidding category (level 1) of the product sold.
     */
    productSoldBiddingCategoryLevel1?: string | null;
    /**
     * Bidding category (level 2) of the product sold.
     */
    productSoldBiddingCategoryLevel2?: string | null;
    /**
     * Bidding category (level 3) of the product sold.
     */
    productSoldBiddingCategoryLevel3?: string | null;
    /**
     * Bidding category (level 4) of the product sold.
     */
    productSoldBiddingCategoryLevel4?: string | null;
    /**
     * Bidding category (level 5) of the product sold.
     */
    productSoldBiddingCategoryLevel5?: string | null;
    /**
     * Brand of the product sold.
     */
    productSoldBrand?: string | null;
    /**
     * Condition of the product sold.
     */
    productSoldCondition?: string | null;
    /**
     * Custom attribute 0 of the product sold.
     */
    productSoldCustomAttribute0?: string | null;
    /**
     * Custom attribute 1 of the product sold.
     */
    productSoldCustomAttribute1?: string | null;
    /**
     * Custom attribute 2 of the product sold.
     */
    productSoldCustomAttribute2?: string | null;
    /**
     * Custom attribute 3 of the product sold.
     */
    productSoldCustomAttribute3?: string | null;
    /**
     * Custom attribute 4 of the product sold.
     */
    productSoldCustomAttribute4?: string | null;
    /**
     * Item ID of the product sold.
     */
    productSoldItemId?: string | null;
    /**
     * Title of the product sold.
     */
    productSoldTitle?: string | null;
    /**
     * Type (level 1) of the product sold.
     */
    productSoldTypeL1?: string | null;
    /**
     * Type (level 2) of the product sold.
     */
    productSoldTypeL2?: string | null;
    /**
     * Type (level 3) of the product sold.
     */
    productSoldTypeL3?: string | null;
    /**
     * Type (level 4) of the product sold.
     */
    productSoldTypeL4?: string | null;
    /**
     * Type (level 5) of the product sold.
     */
    productSoldTypeL5?: string | null;
    /**
     * Store ID of the product.
     */
    productStoreId?: string | null;
    /**
     * Title of the product.
     */
    productTitle?: string | null;
    /**
     * Type (level 1) of the product.
     */
    productTypeL1?: string | null;
    /**
     * Type (level 2) of the product.
     */
    productTypeL2?: string | null;
    /**
     * Type (level 3) of the product.
     */
    productTypeL3?: string | null;
    /**
     * Type (level 4) of the product.
     */
    productTypeL4?: string | null;
    /**
     * Type (level 5) of the product.
     */
    productTypeL5?: string | null;
    /**
     * Quarter as represented by the date of the first day of a quarter. Uses the calendar year for quarters, for example, the second quarter of 2018 starts on 2018-04-01. Formatted as yyyy-MM-dd.
     */
    quarter?: string | null;
    /**
     * The raw event conversion dimensions.
     */
    rawEventConversionDimensions?: Schema$GoogleAdsSearchads360V0Common__Value[];
    /**
     * Week as defined as Monday through Sunday, and represented by the date of Monday. Formatted as yyyy-MM-dd.
     */
    week?: string | null;
    /**
     * Year, formatted as yyyy.
     */
    year?: number | null;
  }
  /**
   * An automated bid strategy that sets bids to help get as many conversions as possible at the target cost-per-acquisition (CPA) you set.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__TargetCpa {
    /**
     * Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. This should only be set for portfolio bid strategies.
     */
    cpcBidCeilingMicros?: string | null;
    /**
     * Minimum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. This should only be set for portfolio bid strategies.
     */
    cpcBidFloorMicros?: string | null;
    /**
     * Average CPA target. This target should be greater than or equal to minimum billable unit based on the currency for the account.
     */
    targetCpaMicros?: string | null;
  }
  /**
   * Target CPM (cost per thousand impressions) is an automated bidding strategy that sets bids to optimize performance given the target CPM you set.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__TargetCpm {}
  /**
   * An automated bidding strategy that sets bids so that a certain percentage of search ads are shown at the top of the first page (or other targeted location).
   */
  export interface Schema$GoogleAdsSearchads360V0Common__TargetImpressionShare {
    /**
     * The highest CPC bid the automated bidding system is permitted to specify. This is a required field entered by the advertiser that sets the ceiling and specified in local micros.
     */
    cpcBidCeilingMicros?: string | null;
    /**
     * The targeted location on the search results page.
     */
    location?: string | null;
    /**
     * The chosen fraction of ads to be shown in the targeted location in micros. For example, 1% equals 10,000.
     */
    locationFractionMicros?: string | null;
  }
  /**
   * Settings for the targeting-related features, at the campaign and ad group levels. For more details about the targeting setting, visit https://support.google.com/google-ads/answer/7365594
   */
  export interface Schema$GoogleAdsSearchads360V0Common__TargetingSetting {
    /**
     * The per-targeting-dimension setting to restrict the reach of your campaign or ad group.
     */
    targetRestrictions?: Schema$GoogleAdsSearchads360V0Common__TargetRestriction[];
  }
  /**
   * An automated bidding strategy that sets bids based on the target fraction of auctions where the advertiser should outrank a specific competitor. This strategy is deprecated.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__TargetOutrankShare {
    /**
     * Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy.
     */
    cpcBidCeilingMicros?: string | null;
  }
  /**
   * The list of per-targeting-dimension targeting settings.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__TargetRestriction {
    /**
     * Indicates whether to restrict your ads to show only for the criteria you have selected for this targeting_dimension, or to target all values for this targeting_dimension and show ads based on your targeting in other TargetingDimensions. A value of `true` means that these criteria will only apply bid modifiers, and not affect targeting. A value of `false` means that these criteria will restrict targeting as well as applying bid modifiers.
     */
    bidOnly?: boolean | null;
    /**
     * The targeting dimension that these settings apply to.
     */
    targetingDimension?: string | null;
  }
  /**
   * An automated bidding strategy that helps you maximize revenue while averaging a specific target return on ad spend (ROAS).
   */
  export interface Schema$GoogleAdsSearchads360V0Common__TargetRoas {
    /**
     * Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. This should only be set for portfolio bid strategies.
     */
    cpcBidCeilingMicros?: string | null;
    /**
     * Minimum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. This should only be set for portfolio bid strategies.
     */
    cpcBidFloorMicros?: string | null;
    /**
     * Required. The chosen revenue (based on conversion data) per unit of spend. Value must be between 0.01 and 1000.0, inclusive.
     */
    targetRoas?: number | null;
  }
  /**
   * An automated bid strategy that sets your bids to help get as many clicks as possible within your budget.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__TargetSpend {
    /**
     * Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy.
     */
    cpcBidCeilingMicros?: string | null;
    /**
     * Deprecated: The spend target under which to maximize clicks. A TargetSpend bidder will attempt to spend the smaller of this value or the natural throttling spend amount. If not specified, the budget is used as the spend target. This field is deprecated and should no longer be used. See https://ads-developers.googleblog.com/2020/05/reminder-about-sunset-creation-of.html for details.
     */
    targetSpendMicros?: string | null;
  }
  /**
   * A Text asset.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__TextAsset {
    /**
     * Text content of the text asset.
     */
    text?: string | null;
  }
  /**
   * A type of label displaying text on a colored background.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__TextLabel {
    /**
     * Background color of the label in HEX format. This string must match the regular expression '^\#([a-fA-F0-9]{6\}|[a-fA-F0-9]{3\})$'. Note: The background color may not be visible for manager accounts.
     */
    backgroundColor?: string | null;
    /**
     * A short description of the label. The length must be no more than 200 characters.
     */
    description?: string | null;
  }
  /**
   * A unified call asset.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__UnifiedCallAsset {
    /**
     * List of non-overlapping schedules specifying all time intervals for which the asset may serve. There can be a maximum of 6 schedules per day, 42 in total.
     */
    adScheduleTargets?: Schema$GoogleAdsSearchads360V0Common__AdScheduleInfo[];
    /**
     * The conversion action to attribute a call conversion to. If not set, the default conversion action is used. This field only has effect if call_conversion_reporting_state is set to USE_RESOURCE_LEVEL_CALL_CONVERSION_ACTION.
     */
    callConversionAction?: string | null;
    /**
     * Output only. Indicates whether this CallAsset should use its own call conversion setting, follow the account level setting, or disable call conversion.
     */
    callConversionReportingState?: string | null;
    /**
     * Whether the call only shows the phone number without a link to the website. Applies to Microsoft Ads.
     */
    callOnly?: boolean | null;
    /**
     * Whether the call should be enabled on call tracking. Applies to Microsoft Ads.
     */
    callTrackingEnabled?: boolean | null;
    /**
     * Two-letter country code of the phone number. Examples: 'US', 'us'.
     */
    countryCode?: string | null;
    /**
     * Last date of when this asset is effective and still serving, in yyyy-MM-dd format.
     */
    endDate?: string | null;
    /**
     * The advertiser's raw phone number. Examples: '1234567890', '(123)456-7890'
     */
    phoneNumber?: string | null;
    /**
     * Start date of when this asset is effective and can begin serving, in yyyy-MM-dd format.
     */
    startDate?: string | null;
    /**
     * Whether to show the call extension in search user's time zone. Applies to Microsoft Ads.
     */
    useSearcherTimeZone?: boolean | null;
  }
  /**
   * A unified callout asset.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__UnifiedCalloutAsset {
    /**
     * List of non-overlapping schedules specifying all time intervals for which the asset may serve. There can be a maximum of 6 schedules per day, 42 in total.
     */
    adScheduleTargets?: Schema$GoogleAdsSearchads360V0Common__AdScheduleInfo[];
    /**
     * The callout text. The length of this string should be between 1 and 25, inclusive.
     */
    calloutText?: string | null;
    /**
     * Last date of when this asset is effective and still serving, in yyyy-MM-dd format.
     */
    endDate?: string | null;
    /**
     * Start date of when this asset is effective and can begin serving, in yyyy-MM-dd format.
     */
    startDate?: string | null;
    /**
     * Whether to show the asset in search user's time zone. Applies to Microsoft Ads.
     */
    useSearcherTimeZone?: boolean | null;
  }
  /**
   * A unified location asset.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__UnifiedLocationAsset {
    /**
     * The list of business locations for the customer. This will only be returned if the Location Asset is syncing from the Business Profile account. It is possible to have multiple Business Profile listings under the same account that point to the same Place ID.
     */
    businessProfileLocations?: Schema$GoogleAdsSearchads360V0Common__BusinessProfileLocation[];
    /**
     * The type of location ownership. If the type is BUSINESS_OWNER, it will be served as a location extension. If the type is AFFILIATE, it will be served as an affiliate location.
     */
    locationOwnershipType?: string | null;
    /**
     * Place IDs uniquely identify a place in the Google Places database and on Google Maps. This field is unique for a given customer ID and asset type. See https://developers.google.com/places/web-service/place-id to learn more about Place ID.
     */
    placeId?: string | null;
  }
  /**
   * A Unified Page Feed asset.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__UnifiedPageFeedAsset {
    /**
     * Labels used to group the page urls.
     */
    labels?: string[] | null;
    /**
     * The webpage that advertisers want to target.
     */
    pageUrl?: string | null;
  }
  /**
   * A unified sitelink asset.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__UnifiedSitelinkAsset {
    /**
     * List of non-overlapping schedules specifying all time intervals for which the asset may serve. There can be a maximum of 6 schedules per day, 42 in total.
     */
    adScheduleTargets?: Schema$GoogleAdsSearchads360V0Common__AdScheduleInfo[];
    /**
     * First line of the description for the sitelink. If set, the length should be between 1 and 35, inclusive, and description2 must also be set.
     */
    description1?: string | null;
    /**
     * Second line of the description for the sitelink. If set, the length should be between 1 and 35, inclusive, and description1 must also be set.
     */
    description2?: string | null;
    /**
     * Last date of when this asset is effective and still serving, in yyyy-MM-dd format.
     */
    endDate?: string | null;
    /**
     * URL display text for the sitelink. The length of this string should be between 1 and 25, inclusive.
     */
    linkText?: string | null;
    /**
     * Whether the preference is for the sitelink asset to be displayed on mobile devices. Applies to Microsoft Ads.
     */
    mobilePreferred?: boolean | null;
    /**
     * Start date of when this asset is effective and can begin serving, in yyyy-MM-dd format.
     */
    startDate?: string | null;
    /**
     * ID used for tracking clicks for the sitelink asset. This is a Yahoo! Japan only field.
     */
    trackingId?: string | null;
    /**
     * Whether to show the sitelink asset in search user's time zone. Applies to Microsoft Ads.
     */
    useSearcherTimeZone?: boolean | null;
  }
  /**
   * A User List criterion. Represents a user list that is defined by the advertiser to be targeted.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__UserListInfo {
    /**
     * The User List resource name.
     */
    userList?: string | null;
  }
  /**
   * A generic data container.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__Value {
    /**
     * A boolean.
     */
    booleanValue?: boolean | null;
    /**
     * A double.
     */
    doubleValue?: number | null;
    /**
     * A float.
     */
    floatValue?: number | null;
    /**
     * An int64.
     */
    int64Value?: string | null;
    /**
     * A string.
     */
    stringValue?: string | null;
  }
  /**
   * Logical expression for targeting webpages of an advertiser's website.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__WebpageConditionInfo {
    /**
     * Argument of webpage targeting condition.
     */
    argument?: string | null;
    /**
     * Operand of webpage targeting condition.
     */
    operand?: string | null;
    /**
     * Operator of webpage targeting condition.
     */
    operator?: string | null;
  }
  /**
   * Represents a criterion for targeting webpages of an advertiser's website.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__WebpageInfo {
    /**
     * Conditions, or logical expressions, for webpage targeting. The list of webpage targeting conditions are and-ed together when evaluated for targeting. An empty list of conditions indicates all pages of the campaign's website are targeted. This field is required for CREATE operations and is prohibited on UPDATE operations.
     */
    conditions?: Schema$GoogleAdsSearchads360V0Common__WebpageConditionInfo[];
    /**
     * Website criteria coverage percentage. This is the computed percentage of website coverage based on the website target, negative website target and negative keywords in the ad group and campaign. For instance, when coverage returns as 1, it indicates it has 100% coverage. This field is read-only.
     */
    coveragePercentage?: number | null;
    /**
     * The name of the criterion that is defined by this parameter. The name value will be used for identifying, sorting and filtering criteria with this type of parameters. This field is required for CREATE operations and is prohibited on UPDATE operations.
     */
    criterionName?: string | null;
  }
  /**
   * A YouTube asset.
   */
  export interface Schema$GoogleAdsSearchads360V0Common__YoutubeVideoAsset {
    /**
     * YouTube video id. This is the 11 character string value used in the YouTube video URL.
     */
    youtubeVideoId?: string | null;
    /**
     * YouTube video title.
     */
    youtubeVideoTitle?: string | null;
  }
  /**
   * A part of a field path.
   */
  export interface Schema$GoogleAdsSearchads360V0Errors_ErrorLocation_FieldPathElement {
    /**
     * The name of a field or a oneof
     */
    fieldName?: string | null;
    /**
     * If field_name is a repeated field, this is the element that failed
     */
    index?: number | null;
  }
  /**
   * The error reason represented by type and enum.
   */
  export interface Schema$GoogleAdsSearchads360V0Errors__ErrorCode {
    /**
     * Indicates failure to properly authenticate user.
     */
    authenticationError?: string | null;
    /**
     * An error encountered when trying to authorize a user.
     */
    authorizationError?: string | null;
    /**
     * The reasons for the conversion custom variable error
     */
    conversionCustomVariableError?: string | null;
    /**
     * The reasons for the custom column error
     */
    customColumnError?: string | null;
    /**
     * The reasons for the date error
     */
    dateError?: string | null;
    /**
     * The reasons for the date range error
     */
    dateRangeError?: string | null;
    /**
     * The reasons for the distinct error
     */
    distinctError?: string | null;
    /**
     * The reasons for the header error.
     */
    headerError?: string | null;
    /**
     * An unexpected server-side error.
     */
    internalError?: string | null;
    /**
     * The reasons for invalid parameter errors.
     */
    invalidParameterError?: string | null;
    /**
     * An error with the query
     */
    queryError?: string | null;
    /**
     * An error with the amount of quota remaining.
     */
    quotaError?: string | null;
    /**
     * An error caused by the request
     */
    requestError?: string | null;
    /**
     * The reasons for the size limit error
     */
    sizeLimitError?: string | null;
  }
  /**
   * Additional error details.
   */
  export interface Schema$GoogleAdsSearchads360V0Errors__ErrorDetails {
    /**
     * Details on the quota error, including the scope (account or developer), the rate bucket name and the retry delay.
     */
    quotaErrorDetails?: Schema$GoogleAdsSearchads360V0Errors__QuotaErrorDetails;
    /**
     * The error code that should have been returned, but wasn't. This is used when the error code is not published in the client specified version.
     */
    unpublishedErrorCode?: string | null;
  }
  /**
   * Describes the part of the request proto that caused the error.
   */
  export interface Schema$GoogleAdsSearchads360V0Errors__ErrorLocation {
    /**
     * A field path that indicates which field was invalid in the request.
     */
    fieldPathElements?: Schema$GoogleAdsSearchads360V0Errors_ErrorLocation_FieldPathElement[];
  }
  /**
   * Additional quota error details when there is QuotaError.
   */
  export interface Schema$GoogleAdsSearchads360V0Errors__QuotaErrorDetails {
    /**
     * The high level description of the quota bucket. Examples are "Get requests for standard access" or "Requests per account".
     */
    rateName?: string | null;
    /**
     * The rate scope of the quota limit.
     */
    rateScope?: string | null;
    /**
     * Backoff period that customers should wait before sending next request.
     */
    retryDelay?: string | null;
  }
  /**
   * Search Ads 360-specific error.
   */
  export interface Schema$GoogleAdsSearchads360V0Errors__SearchAds360Error {
    /**
     * Additional error details, which are returned by certain error codes. Most error codes do not include details.
     */
    details?: Schema$GoogleAdsSearchads360V0Errors__ErrorDetails;
    /**
     * An enum value that indicates which error occurred.
     */
    errorCode?: Schema$GoogleAdsSearchads360V0Errors__ErrorCode;
    /**
     * Describes the part of the request proto that caused the error.
     */
    location?: Schema$GoogleAdsSearchads360V0Errors__ErrorLocation;
    /**
     * A human-readable description of the error.
     */
    message?: string | null;
    /**
     * The value that triggered the error.
     */
    trigger?: Schema$GoogleAdsSearchads360V0Common__Value;
  }
  /**
   * Describes how a Search Ads 360 API call failed. It's returned inside google.rpc.Status.details when a call fails.
   */
  export interface Schema$GoogleAdsSearchads360V0Errors__SearchAds360Failure {
    /**
     * The list of errors that occurred.
     */
    errors?: Schema$GoogleAdsSearchads360V0Errors__SearchAds360Error[];
    /**
     * The unique ID of the request that is used for debugging purposes.
     */
    requestId?: string | null;
  }
  /**
   * An automated bidding strategy to help get the most conversions for your campaigns while spending your budget.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_MaximizeConversions {
    /**
     * Output only. The target cost per acquisition (CPA) option. This is the average amount that you would like to spend per acquisition.
     */
    targetCpa?: string | null;
    /**
     * Output only. The target cost per acquisition (CPA) option. This is the average amount that you would like to spend per acquisition.
     */
    targetCpaMicros?: string | null;
  }
  /**
   * An automated bidding strategy to help get the most conversion value for your campaigns while spending your budget.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_MaximizeConversionValue {
    /**
     * Output only. The target return on ad spend (ROAS) option. If set, the bid strategy will maximize revenue while averaging the target return on ad spend. If the target ROAS is high, the bid strategy may not be able to spend the full budget. If the target ROAS is not set, the bid strategy will aim to achieve the highest possible ROAS for the budget.
     */
    targetRoas?: number | null;
  }
  /**
   * An automated bid strategy that sets bids to help get as many conversions as possible at the target cost-per-acquisition (CPA) you set.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_TargetCpa {
    /**
     * Output only. Average CPA target. This target should be greater than or equal to minimum billable unit based on the currency for the account.
     */
    targetCpaMicros?: string | null;
  }
  /**
   * An automated bidding strategy that sets bids so that a certain percentage of search ads are shown at the top of the first page (or other targeted location).
   */
  export interface Schema$GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_TargetImpressionShare {
    /**
     * Output only. The highest CPC bid the automated bidding system is permitted to specify. This is a required field entered by the advertiser that sets the ceiling and specified in local micros.
     */
    cpcBidCeilingMicros?: string | null;
    /**
     * Output only. The targeted location on the search results page.
     */
    location?: string | null;
    /**
     * The chosen fraction of ads to be shown in the targeted location in micros. For example, 1% equals 10,000.
     */
    locationFractionMicros?: string | null;
  }
  /**
   * An automated bidding strategy that helps you maximize revenue while averaging a specific target return on ad spend (ROAS).
   */
  export interface Schema$GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_TargetRoas {
    /**
     * Output only. The chosen revenue (based on conversion data) per unit of spend.
     */
    targetRoas?: number | null;
  }
  /**
   * An automated bid strategy that sets your bids to help get as many clicks as possible within your budget.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_TargetSpend {
    /**
     * Output only. Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy.
     */
    cpcBidCeilingMicros?: string | null;
    /**
     * Output only. The spend target under which to maximize clicks. A TargetSpend bidder will attempt to spend the smaller of this value or the natural throttling spend amount. If not specified, the budget is used as the spend target. This field is deprecated and should no longer be used. See https://ads-developers.googleblog.com/2020/05/reminder-about-sunset-creation-of.html for details.
     */
    targetSpendMicros?: string | null;
  }
  /**
   * Estimates for criterion bids at various positions.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources_AdGroupCriterion_PositionEstimates {
    /**
     * Output only. The estimate of the CPC bid required for ad to be displayed at the top of the first page of search results.
     */
    topOfPageCpcMicros?: string | null;
  }
  /**
   * A container for ad group criterion quality information.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources_AdGroupCriterion_QualityInfo {
    /**
     * Output only. The quality score. This field may not be populated if Google does not have enough information to determine a value.
     */
    qualityScore?: number | null;
  }
  /**
   * The setting for controlling Dynamic Search Ads (DSA).
   */
  export interface Schema$GoogleAdsSearchads360V0Resources_Campaign_DynamicSearchAdsSetting {
    /**
     * Required. The Internet domain name that this setting represents, for example, "google.com" or "www.google.com".
     */
    domainName?: string | null;
    /**
     * Required. The language code specifying the language of the domain, for example, "en".
     */
    languageCode?: string | null;
    /**
     * Whether the campaign uses advertiser supplied URLs exclusively.
     */
    useSuppliedUrlsOnly?: boolean | null;
  }
  /**
   * Represents a collection of settings related to ads geotargeting.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources_Campaign_GeoTargetTypeSetting {
    /**
     * The setting used for negative geotargeting in this particular campaign.
     */
    negativeGeoTargetType?: string | null;
    /**
     * The setting used for positive geotargeting in this particular campaign.
     */
    positiveGeoTargetType?: string | null;
  }
  /**
   * The network settings for the campaign.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources_Campaign_NetworkSettings {
    /**
     * Whether ads will be served on specified placements in the Google Display Network. Placements are specified using the Placement criterion.
     */
    targetContentNetwork?: boolean | null;
    /**
     * Whether ads will be served with google.com search results.
     */
    targetGoogleSearch?: boolean | null;
    /**
     * Whether ads will be served on the Google Partner Network. This is available only to some select Google partner accounts.
     */
    targetPartnerSearchNetwork?: boolean | null;
    /**
     * Whether ads will be served on partner sites in the Google Search Network (requires `target_google_search` to also be `true`).
     */
    targetSearchNetwork?: boolean | null;
  }
  /**
   * Optimization goal setting for this campaign, which includes a set of optimization goal types.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources_Campaign_OptimizationGoalSetting {
    /**
     * The list of optimization goal types.
     */
    optimizationGoalTypes?: string[] | null;
  }
  /**
   * Selective optimization setting for this campaign, which includes a set of conversion actions to optimize this campaign towards. This feature only applies to app campaigns that use MULTI_CHANNEL as AdvertisingChannelType and APP_CAMPAIGN or APP_CAMPAIGN_FOR_ENGAGEMENT as AdvertisingChannelSubType.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources_Campaign_SelectiveOptimization {
    /**
     * The selected set of resource names for conversion actions for optimizing this campaign.
     */
    conversionActions?: string[] | null;
  }
  /**
   * The setting for Shopping campaigns. Defines the universe of products that can be advertised by the campaign, and how this campaign interacts with other Shopping campaigns.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources_Campaign_ShoppingSetting {
    /**
     * Priority of the campaign. Campaigns with numerically higher priorities take precedence over those with lower priorities. This field is required for Shopping campaigns, with values between 0 and 2, inclusive. This field is optional for Smart Shopping campaigns, but must be equal to 3 if set.
     */
    campaignPriority?: number | null;
    /**
     * Whether to include local products.
     */
    enableLocal?: boolean | null;
    /**
     * Feed label of products to include in the campaign. Only one of feed_label or sales_country can be set. If used instead of sales_country, the feed_label field accepts country codes in the same format for example: 'XX'. Otherwise can be any string used for feed label in Google Merchant Center.
     */
    feedLabel?: string | null;
    /**
     * Immutable. ID of the Merchant Center account. This field is required for create operations. This field is immutable for Shopping campaigns.
     */
    merchantId?: string | null;
    /**
     * Sales country of products to include in the campaign.
     */
    salesCountry?: string | null;
    /**
     * Immutable. Whether to target Vehicle Listing inventory.
     */
    useVehicleInventory?: boolean | null;
  }
  /**
   * Campaign-level settings for tracking information.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources_Campaign_TrackingSetting {
    /**
     * Output only. The url used for dynamic tracking.
     */
    trackingUrl?: string | null;
  }
  /**
   * Settings related to this conversion action's attribution model.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources_ConversionAction_AttributionModelSettings {
    /**
     * The attribution model type of this conversion action.
     */
    attributionModel?: string | null;
    /**
     * Output only. The status of the data-driven attribution model for the conversion action.
     */
    dataDrivenModelStatus?: string | null;
  }
  /**
   * Settings related to a Floodlight conversion action.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources_ConversionAction_FloodlightSettings {
    /**
     * Output only. String used to identify a Floodlight activity group when reporting conversions.
     */
    activityGroupTag?: string | null;
    /**
     * Output only. ID of the Floodlight activity in DoubleClick Campaign Manager (DCM).
     */
    activityId?: string | null;
    /**
     * Output only. String used to identify a Floodlight activity when reporting conversions.
     */
    activityTag?: string | null;
  }
  /**
   * Settings related to the value for conversion events associated with this conversion action.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources_ConversionAction_ValueSettings {
    /**
     * Controls whether the default value and default currency code are used in place of the value and currency code specified in conversion events for this conversion action.
     */
    alwaysUseDefaultValue?: boolean | null;
    /**
     * The currency code to use when conversion events for this conversion action are sent with an invalid or missing currency code, or when this conversion action is configured to always use the default value.
     */
    defaultCurrencyCode?: string | null;
    /**
     * The value to use when conversion events for this conversion action are sent with an invalid, disallowed or missing value, or when this conversion action is configured to always use the default value.
     */
    defaultValue?: number | null;
  }
  /**
   * Information for Search Ads 360 Floodlight Conversion Custom Variables.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources_ConversionCustomVariable_FloodlightConversionCustomVariableInfo {
    /**
     * Output only. Floodlight variable data type defined in Search Ads 360.
     */
    floodlightVariableDataType?: string | null;
    /**
     * Output only. Floodlight variable type defined in Search Ads 360.
     */
    floodlightVariableType?: string | null;
  }
  /**
   * One element of a bidding category at a certain level. Top-level categories are at level 1, their children at level 2, and so on. We currently support up to 5 levels. The user must specify a dimension type that indicates the level of the category. All cases of the same subdivision must have the same dimension type (category level).
   */
  export interface Schema$GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductBiddingCategory {
    /**
     * ID of the product bidding category. This ID is equivalent to the google_product_category ID as described in this article: https://support.google.com/merchants/answer/6324436
     */
    id?: string | null;
    /**
     * Indicates the level of the category in the taxonomy.
     */
    level?: string | null;
  }
  /**
   * Brand of the product.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductBrand {
    /**
     * String value of the product brand.
     */
    value?: string | null;
  }
  /**
   * Locality of a product offer.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductChannel {
    /**
     * Value of the locality.
     */
    channel?: string | null;
  }
  /**
   * Condition of a product offer.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductCondition {
    /**
     * Value of the condition.
     */
    condition?: string | null;
  }
  /**
   * Custom attribute of a product offer.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductCustomAttribute {
    /**
     * Indicates the index of the custom attribute.
     */
    index?: string | null;
    /**
     * String value of the product custom attribute.
     */
    value?: string | null;
  }
  /**
   * Item id of a product offer.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductItemId {
    /**
     * Value of the id.
     */
    value?: string | null;
  }
  /**
   * Type of a product offer.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductType {
    /**
     * Level of the type.
     */
    level?: string | null;
    /**
     * Value of the type.
     */
    value?: string | null;
  }
  /**
   * Represents a view of BiddingStrategies owned by and shared with the customer. In contrast to BiddingStrategy, this resource includes strategies owned by managers of the customer and shared with this customer - in addition to strategies owned by this customer. This resource does not provide metrics and only exposes a limited subset of the BiddingStrategy attributes.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__AccessibleBiddingStrategy {
    /**
     * Output only. The ID of the bidding strategy.
     */
    id?: string | null;
    /**
     * Output only. An automated bidding strategy to help get the most conversions for your campaigns while spending your budget.
     */
    maximizeConversions?: Schema$GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_MaximizeConversions;
    /**
     * Output only. An automated bidding strategy to help get the most conversion value for your campaigns while spending your budget.
     */
    maximizeConversionValue?: Schema$GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_MaximizeConversionValue;
    /**
     * Output only. The name of the bidding strategy.
     */
    name?: string | null;
    /**
     * Output only. The ID of the Customer which owns the bidding strategy.
     */
    ownerCustomerId?: string | null;
    /**
     * Output only. descriptive_name of the Customer which owns the bidding strategy.
     */
    ownerDescriptiveName?: string | null;
    /**
     * Output only. The resource name of the accessible bidding strategy. AccessibleBiddingStrategy resource names have the form: `customers/{customer_id\}/accessibleBiddingStrategies/{bidding_strategy_id\}`
     */
    resourceName?: string | null;
    /**
     * Output only. A bidding strategy that sets bids to help get as many conversions as possible at the target cost-per-acquisition (CPA) you set.
     */
    targetCpa?: Schema$GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_TargetCpa;
    /**
     * Output only. A bidding strategy that automatically optimizes towards a chosen percentage of impressions.
     */
    targetImpressionShare?: Schema$GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_TargetImpressionShare;
    /**
     * Output only. A bidding strategy that helps you maximize revenue while averaging a specific target Return On Ad Spend (ROAS).
     */
    targetRoas?: Schema$GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_TargetRoas;
    /**
     * Output only. A bid strategy that sets your bids to help get as many clicks as possible within your budget.
     */
    targetSpend?: Schema$GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_TargetSpend;
    /**
     * Output only. The type of the bidding strategy.
     */
    type?: string | null;
  }
  /**
   * An ad.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__Ad {
    /**
     * The URL that appears in the ad description for some ad formats.
     */
    displayUrl?: string | null;
    /**
     * Immutable. Details pertaining to an expanded dynamic search ad.
     */
    expandedDynamicSearchAd?: Schema$GoogleAdsSearchads360V0Common__SearchAds360ExpandedDynamicSearchAdInfo;
    /**
     * Immutable. Details pertaining to an expanded text ad.
     */
    expandedTextAd?: Schema$GoogleAdsSearchads360V0Common__SearchAds360ExpandedTextAdInfo;
    /**
     * The list of possible final URLs after all cross-domain redirects for the ad.
     */
    finalUrls?: string[] | null;
    /**
     * Output only. The ID of the ad.
     */
    id?: string | null;
    /**
     * Immutable. The name of the ad. This is only used to be able to identify the ad. It does not need to be unique and does not affect the served ad.
     */
    name?: string | null;
    /**
     * Immutable. Details pertaining to a product ad.
     */
    productAd?: Schema$GoogleAdsSearchads360V0Common__SearchAds360ProductAdInfo;
    /**
     * Immutable. The resource name of the ad. Ad resource names have the form: `customers/{customer_id\}/ads/{ad_id\}`
     */
    resourceName?: string | null;
    /**
     * Immutable. Details pertaining to a responsive search ad.
     */
    responsiveSearchAd?: Schema$GoogleAdsSearchads360V0Common__SearchAds360ResponsiveSearchAdInfo;
    /**
     * Immutable. Details pertaining to a text ad.
     */
    textAd?: Schema$GoogleAdsSearchads360V0Common__SearchAds360TextAdInfo;
    /**
     * Output only. The type of ad.
     */
    type?: string | null;
  }
  /**
   * An ad group.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__AdGroup {
    /**
     * The ad rotation mode of the ad group.
     */
    adRotationMode?: string | null;
    /**
     * The maximum CPC (cost-per-click) bid.
     */
    cpcBidMicros?: string | null;
    /**
     * Output only. The timestamp when this ad_group was created. The timestamp is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss" format.
     */
    creationTime?: string | null;
    /**
     * Output only. The resource names of effective labels attached to this ad group. An effective label is a label inherited or directly assigned to this ad group.
     */
    effectiveLabels?: string[] | null;
    /**
     * Output only. Date when the ad group ends serving ads. By default, the ad group ends on the ad group's end date. If this field is set, then the ad group ends at the end of the specified date in the customer's time zone. This field is only available for Microsoft Advertising and Facebook gateway accounts. Format: YYYY-MM-DD Example: 2019-03-14
     */
    endDate?: string | null;
    /**
     * Output only. ID of the ad group in the external engine account. This field is for non-Google Ads account only, for example, Yahoo Japan, Microsoft, Baidu etc. For Google Ads entity, use "ad_group.id" instead.
     */
    engineId?: string | null;
    /**
     * Output only. The Engine Status for ad group.
     */
    engineStatus?: string | null;
    /**
     * Output only. The ID of the ad group.
     */
    id?: string | null;
    /**
     * Output only. The resource names of labels attached to this ad group.
     */
    labels?: string[] | null;
    /**
     * Output only. The language of the ads and keywords in an ad group. This field is only available for Microsoft Advertising accounts. More details: https://docs.microsoft.com/en-us/advertising/guides/ad-languages?view=bingads-13#adlanguage
     */
    languageCode?: string | null;
    /**
     * Output only. The datetime when this ad group was last modified. The datetime is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss.ssssss" format.
     */
    lastModifiedTime?: string | null;
    /**
     * The name of the ad group. This field is required and should not be empty when creating new ad groups. It must contain fewer than 255 UTF-8 full-width characters. It must not contain any null (code point 0x0), NL line feed (code point 0xA) or carriage return (code point 0xD) characters.
     */
    name?: string | null;
    /**
     * Immutable. The resource name of the ad group. Ad group resource names have the form: `customers/{customer_id\}/adGroups/{ad_group_id\}`
     */
    resourceName?: string | null;
    /**
     * Output only. Date when this ad group starts serving ads. By default, the ad group starts now or the ad group's start date, whichever is later. If this field is set, then the ad group starts at the beginning of the specified date in the customer's time zone. This field is only available for Microsoft Advertising and Facebook gateway accounts. Format: YYYY-MM-DD Example: 2019-03-14
     */
    startDate?: string | null;
    /**
     * The status of the ad group.
     */
    status?: string | null;
    /**
     * Setting for targeting related features.
     */
    targetingSetting?: Schema$GoogleAdsSearchads360V0Common__TargetingSetting;
    /**
     * Immutable. The type of the ad group.
     */
    type?: string | null;
  }
  /**
   * An ad group ad.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__AdGroupAd {
    /**
     * Immutable. The ad.
     */
    ad?: Schema$GoogleAdsSearchads360V0Resources__Ad;
    /**
     * Output only. The timestamp when this ad_group_ad was created. The datetime is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss.ssssss" format.
     */
    creationTime?: string | null;
    /**
     * Output only. The resource names of effective labels attached to this ad. An effective label is a label inherited or directly assigned to this ad.
     */
    effectiveLabels?: string[] | null;
    /**
     * Output only. ID of the ad in the external engine account. This field is for Search Ads 360 account only, for example, Yahoo Japan, Microsoft, Baidu etc. For non-Search Ads 360 entity, use "ad_group_ad.ad.id" instead.
     */
    engineId?: string | null;
    /**
     * Output only. Additional status of the ad in the external engine account. Possible statuses (depending on the type of external account) include active, eligible, pending review, etc.
     */
    engineStatus?: string | null;
    /**
     * Output only. The resource names of labels attached to this ad group ad.
     */
    labels?: string[] | null;
    /**
     * Output only. The datetime when this ad group ad was last modified. The datetime is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss.ssssss" format.
     */
    lastModifiedTime?: string | null;
    /**
     * Immutable. The resource name of the ad. Ad group ad resource names have the form: `customers/{customer_id\}/adGroupAds/{ad_group_id\}~{ad_id\}`
     */
    resourceName?: string | null;
    /**
     * The status of the ad.
     */
    status?: string | null;
  }
  /**
   * A relationship between an ad group ad and an effective label. An effective label is a label inherited or directly assigned to this ad group ad.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__AdGroupAdEffectiveLabel {
    /**
     * Immutable. The ad group ad to which the effective label is attached.
     */
    adGroupAd?: string | null;
    /**
     * Immutable. The effective label assigned to the ad group ad.
     */
    label?: string | null;
    /**
     * Output only. The ID of the Customer which owns the effective label.
     */
    ownerCustomerId?: string | null;
    /**
     * Immutable. The resource name of the ad group ad effective label. Ad group ad effective label resource names have the form: `customers/{customer_id\}/adGroupAdEffectiveLabels/{ad_group_id\}~{ad_id\}~{label_id\}`
     */
    resourceName?: string | null;
  }
  /**
   * A relationship between an ad group ad and a label.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__AdGroupAdLabel {
    /**
     * Immutable. The ad group ad to which the label is attached.
     */
    adGroupAd?: string | null;
    /**
     * Immutable. The label assigned to the ad group ad.
     */
    label?: string | null;
    /**
     * Output only. The ID of the Customer which owns the label.
     */
    ownerCustomerId?: string | null;
    /**
     * Immutable. The resource name of the ad group ad label. Ad group ad label resource names have the form: `customers/{customer_id\}/adGroupAdLabels/{ad_group_id\}~{ad_id\}~{label_id\}`
     */
    resourceName?: string | null;
  }
  /**
   * A link between an ad group and an asset.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__AdGroupAsset {
    /**
     * Required. Immutable. The ad group to which the asset is linked.
     */
    adGroup?: string | null;
    /**
     * Required. Immutable. The asset which is linked to the ad group.
     */
    asset?: string | null;
    /**
     * Immutable. The resource name of the ad group asset. AdGroupAsset resource names have the form: `customers/{customer_id\}/adGroupAssets/{ad_group_id\}~{asset_id\}~{field_type\}`
     */
    resourceName?: string | null;
    /**
     * Status of the ad group asset.
     */
    status?: string | null;
  }
  /**
   * AdGroupAssetSet is the linkage between an ad group and an asset set. Creating an AdGroupAssetSet links an asset set with an ad group.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__AdGroupAssetSet {
    /**
     * Immutable. The ad group to which this asset set is linked.
     */
    adGroup?: string | null;
    /**
     * Immutable. The asset set which is linked to the ad group.
     */
    assetSet?: string | null;
    /**
     * Immutable. The resource name of the ad group asset set. Ad group asset set resource names have the form: `customers/{customer_id\}/adGroupAssetSets/{ad_group_id\}~{asset_set_id\}`
     */
    resourceName?: string | null;
    /**
     * Output only. The status of the ad group asset set. Read-only.
     */
    status?: string | null;
  }
  /**
   * An ad group audience view. Includes performance data from interests and remarketing lists for Display Network and YouTube Network ads, and remarketing lists for search ads (RLSA), aggregated at the audience level.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__AdGroupAudienceView {
    /**
     * Output only. The resource name of the ad group audience view. Ad group audience view resource names have the form: `customers/{customer_id\}/adGroupAudienceViews/{ad_group_id\}~{criterion_id\}`
     */
    resourceName?: string | null;
  }
  /**
   * Represents an ad group bid modifier.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__AdGroupBidModifier {
    /**
     * The modifier for the bid when the criterion matches. The modifier must be in the range: 0.1 - 10.0. The range is 1.0 - 6.0 for PreferredContent. Use 0 to opt out of a Device type.
     */
    bidModifier?: number | null;
    /**
     * Immutable. A device criterion.
     */
    device?: Schema$GoogleAdsSearchads360V0Common__DeviceInfo;
    /**
     * Immutable. The resource name of the ad group bid modifier. Ad group bid modifier resource names have the form: `customers/{customer_id\}/adGroupBidModifiers/{ad_group_id\}~{criterion_id\}`
     */
    resourceName?: string | null;
  }
  /**
   * An ad group criterion. The ad_group_criterion report only returns criteria that were explicitly added to the ad group.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__AdGroupCriterion {
    /**
     * Immutable. The ad group to which the criterion belongs.
     */
    adGroup?: string | null;
    /**
     * Immutable. Age range.
     */
    ageRange?: Schema$GoogleAdsSearchads360V0Common__AgeRangeInfo;
    /**
     * The modifier for the bid when the criterion matches. The modifier must be in the range: 0.1 - 10.0. Most targetable criteria types support modifiers.
     */
    bidModifier?: number | null;
    /**
     * The CPC (cost-per-click) bid.
     */
    cpcBidMicros?: string | null;
    /**
     * Output only. The timestamp when this ad group criterion was created. The timestamp is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss" format.
     */
    creationTime?: string | null;
    /**
     * Output only. The ID of the criterion.
     */
    criterionId?: string | null;
    /**
     * Output only. The effective CPC (cost-per-click) bid.
     */
    effectiveCpcBidMicros?: string | null;
    /**
     * Output only. The resource names of effective labels attached to this ad group criterion. An effective label is a label inherited or directly assigned to this ad group criterion.
     */
    effectiveLabels?: string[] | null;
    /**
     * Output only. ID of the ad group criterion in the external engine account. This field is for non-Google Ads account only, for example, Yahoo Japan, Microsoft, Baidu etc. For Google Ads entity, use "ad_group_criterion.criterion_id" instead.
     */
    engineId?: string | null;
    /**
     * Output only. The Engine Status for ad group criterion.
     */
    engineStatus?: string | null;
    /**
     * The list of possible final URLs after all cross-domain redirects for the ad.
     */
    finalUrls?: string[] | null;
    /**
     * URL template for appending params to final URL.
     */
    finalUrlSuffix?: string | null;
    /**
     * Immutable. Gender.
     */
    gender?: Schema$GoogleAdsSearchads360V0Common__GenderInfo;
    /**
     * Immutable. Keyword.
     */
    keyword?: Schema$GoogleAdsSearchads360V0Common__KeywordInfo;
    /**
     * Output only. The resource names of labels attached to this ad group criterion.
     */
    labels?: string[] | null;
    /**
     * Output only. The datetime when this ad group criterion was last modified. The datetime is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss.ssssss" format.
     */
    lastModifiedTime?: string | null;
    /**
     * Immutable. Listing group.
     */
    listingGroup?: Schema$GoogleAdsSearchads360V0Common__ListingGroupInfo;
    /**
     * Immutable. Location.
     */
    location?: Schema$GoogleAdsSearchads360V0Common__LocationInfo;
    /**
     * Immutable. Whether to target (`false`) or exclude (`true`) the criterion. This field is immutable. To switch a criterion from positive to negative, remove then re-add it.
     */
    negative?: boolean | null;
    /**
     * Output only. Estimates for criterion bids at various positions.
     */
    positionEstimates?: Schema$GoogleAdsSearchads360V0Resources_AdGroupCriterion_PositionEstimates;
    /**
     * Output only. Information regarding the quality of the criterion.
     */
    qualityInfo?: Schema$GoogleAdsSearchads360V0Resources_AdGroupCriterion_QualityInfo;
    /**
     * Immutable. The resource name of the ad group criterion. Ad group criterion resource names have the form: `customers/{customer_id\}/adGroupCriteria/{ad_group_id\}~{criterion_id\}`
     */
    resourceName?: string | null;
    /**
     * The status of the criterion. This is the status of the ad group criterion entity, set by the client. Note: UI reports may incorporate additional information that affects whether a criterion is eligible to run. In some cases a criterion that's REMOVED in the API can still show as enabled in the UI. For example, campaigns by default show to users of all age ranges unless excluded. The UI will show each age range as "enabled", since they're eligible to see the ads; but AdGroupCriterion.status will show "removed", since no positive criterion was added.
     */
    status?: string | null;
    /**
     * The URL template for constructing a tracking URL.
     */
    trackingUrlTemplate?: string | null;
    /**
     * Output only. The type of the criterion.
     */
    type?: string | null;
    /**
     * Immutable. User List.
     */
    userList?: Schema$GoogleAdsSearchads360V0Common__UserListInfo;
    /**
     * Immutable. Webpage
     */
    webpage?: Schema$GoogleAdsSearchads360V0Common__WebpageInfo;
  }
  /**
   * A relationship between an ad group criterion and an effective label. An effective label is a label inherited or directly assigned to this ad group criterion.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__AdGroupCriterionEffectiveLabel {
    /**
     * Immutable. The ad group criterion to which the effective label is attached.
     */
    adGroupCriterion?: string | null;
    /**
     * Immutable. The effective label assigned to the ad group criterion.
     */
    label?: string | null;
    /**
     * Output only. The ID of the Customer which owns the effective label.
     */
    ownerCustomerId?: string | null;
    /**
     * Immutable. The resource name of the ad group criterion effective label. Ad group criterion effective label resource names have the form: `customers/{customer_id\}/adGroupCriterionEffectiveLabels/{ad_group_id\}~{criterion_id\}~{label_id\}`
     */
    resourceName?: string | null;
  }
  /**
   * A relationship between an ad group criterion and a label.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__AdGroupCriterionLabel {
    /**
     * Immutable. The ad group criterion to which the label is attached.
     */
    adGroupCriterion?: string | null;
    /**
     * Immutable. The label assigned to the ad group criterion.
     */
    label?: string | null;
    /**
     * Output only. The ID of the Customer which owns the label.
     */
    ownerCustomerId?: string | null;
    /**
     * Immutable. The resource name of the ad group criterion label. Ad group criterion label resource names have the form: `customers/{customer_id\}/adGroupCriterionLabels/{ad_group_id\}~{criterion_id\}~{label_id\}`
     */
    resourceName?: string | null;
  }
  /**
   * A relationship between an ad group and an effective label. An effective label is a label inherited or directly assigned to this ad group.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__AdGroupEffectiveLabel {
    /**
     * Immutable. The ad group to which the effective label is attached.
     */
    adGroup?: string | null;
    /**
     * Immutable. The effective label assigned to the ad group.
     */
    label?: string | null;
    /**
     * Output only. The ID of the Customer which owns the effective label.
     */
    ownerCustomerId?: string | null;
    /**
     * Immutable. The resource name of the ad group effective label. Ad group effective label resource names have the form: `customers/{customer_id\}/adGroupEffectiveLabels/{ad_group_id\}~{label_id\}`
     */
    resourceName?: string | null;
  }
  /**
   * A relationship between an ad group and a label.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__AdGroupLabel {
    /**
     * Immutable. The ad group to which the label is attached.
     */
    adGroup?: string | null;
    /**
     * Immutable. The label assigned to the ad group.
     */
    label?: string | null;
    /**
     * Output only. The ID of the Customer which owns the label.
     */
    ownerCustomerId?: string | null;
    /**
     * Immutable. The resource name of the ad group label. Ad group label resource names have the form: `customers/{customer_id\}/adGroupLabels/{ad_group_id\}~{label_id\}`
     */
    resourceName?: string | null;
  }
  /**
   * An age range view.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__AgeRangeView {
    /**
     * Output only. The resource name of the age range view. Age range view resource names have the form: `customers/{customer_id\}/ageRangeViews/{ad_group_id\}~{criterion_id\}`
     */
    resourceName?: string | null;
  }
  /**
   * Asset is a part of an ad which can be shared across multiple ads. It can be an image (ImageAsset), a video (YoutubeVideoAsset), etc. Assets are immutable and cannot be removed. To stop an asset from serving, remove the asset from the entity that is using it.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__Asset {
    /**
     * Output only. A unified call asset.
     */
    callAsset?: Schema$GoogleAdsSearchads360V0Common__UnifiedCallAsset;
    /**
     * Output only. A unified callout asset.
     */
    calloutAsset?: Schema$GoogleAdsSearchads360V0Common__UnifiedCalloutAsset;
    /**
     * Immutable. A call to action asset.
     */
    callToActionAsset?: Schema$GoogleAdsSearchads360V0Common__CallToActionAsset;
    /**
     * Output only. The timestamp when this asset was created. The timestamp is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss" format.
     */
    creationTime?: string | null;
    /**
     * Output only. The Engine Status for an asset.
     */
    engineStatus?: string | null;
    /**
     * A list of possible final URLs after all cross domain redirects.
     */
    finalUrls?: string[] | null;
    /**
     * Output only. The ID of the asset.
     */
    id?: string | null;
    /**
     * Output only. An image asset.
     */
    imageAsset?: Schema$GoogleAdsSearchads360V0Common__ImageAsset;
    /**
     * Output only. The datetime when this asset was last modified. The datetime is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss.ssssss" format.
     */
    lastModifiedTime?: string | null;
    /**
     * Output only. A unified location asset.
     */
    locationAsset?: Schema$GoogleAdsSearchads360V0Common__UnifiedLocationAsset;
    /**
     * A mobile app asset.
     */
    mobileAppAsset?: Schema$GoogleAdsSearchads360V0Common__MobileAppAsset;
    /**
     * Optional name of the asset.
     */
    name?: string | null;
    /**
     * Output only. A unified page feed asset.
     */
    pageFeedAsset?: Schema$GoogleAdsSearchads360V0Common__UnifiedPageFeedAsset;
    /**
     * Immutable. The resource name of the asset. Asset resource names have the form: `customers/{customer_id\}/assets/{asset_id\}`
     */
    resourceName?: string | null;
    /**
     * Output only. A unified sitelink asset.
     */
    sitelinkAsset?: Schema$GoogleAdsSearchads360V0Common__UnifiedSitelinkAsset;
    /**
     * Output only. The status of the asset.
     */
    status?: string | null;
    /**
     * Output only. A text asset.
     */
    textAsset?: Schema$GoogleAdsSearchads360V0Common__TextAsset;
    /**
     * URL template for constructing a tracking URL.
     */
    trackingUrlTemplate?: string | null;
    /**
     * Output only. Type of the asset.
     */
    type?: string | null;
    /**
     * Immutable. A YouTube video asset.
     */
    youtubeVideoAsset?: Schema$GoogleAdsSearchads360V0Common__YoutubeVideoAsset;
  }
  /**
   * An asset group. AssetGroupAsset is used to link an asset to the asset group. AssetGroupSignal is used to associate a signal to an asset group.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__AssetGroup {
    /**
     * Output only. Overall ad strength of this asset group.
     */
    adStrength?: string | null;
    /**
     * Immutable. The campaign with which this asset group is associated. The asset which is linked to the asset group.
     */
    campaign?: string | null;
    /**
     * A list of final mobile URLs after all cross domain redirects. In performance max, by default, the urls are eligible for expansion unless opted out.
     */
    finalMobileUrls?: string[] | null;
    /**
     * A list of final URLs after all cross domain redirects. In performance max, by default, the urls are eligible for expansion unless opted out.
     */
    finalUrls?: string[] | null;
    /**
     * Output only. The ID of the asset group.
     */
    id?: string | null;
    /**
     * Required. Name of the asset group. Required. It must have a minimum length of 1 and maximum length of 128. It must be unique under a campaign.
     */
    name?: string | null;
    /**
     * First part of text that may appear appended to the url displayed in the ad.
     */
    path1?: string | null;
    /**
     * Second part of text that may appear appended to the url displayed in the ad. This field can only be set when path1 is set.
     */
    path2?: string | null;
    /**
     * Immutable. The resource name of the asset group. Asset group resource names have the form: `customers/{customer_id\}/assetGroups/{asset_group_id\}`
     */
    resourceName?: string | null;
    /**
     * The status of the asset group.
     */
    status?: string | null;
  }
  /**
   * AssetGroupAsset is the link between an asset and an asset group. Adding an AssetGroupAsset links an asset with an asset group.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__AssetGroupAsset {
    /**
     * Immutable. The asset which this asset group asset is linking.
     */
    asset?: string | null;
    /**
     * Immutable. The asset group which this asset group asset is linking.
     */
    assetGroup?: string | null;
    /**
     * The description of the placement of the asset within the asset group. For example: HEADLINE, YOUTUBE_VIDEO etc
     */
    fieldType?: string | null;
    /**
     * Immutable. The resource name of the asset group asset. Asset group asset resource name have the form: `customers/{customer_id\}/assetGroupAssets/{asset_group_id\}~{asset_id\}~{field_type\}`
     */
    resourceName?: string | null;
    /**
     * The status of the link between an asset and asset group.
     */
    status?: string | null;
  }
  /**
   * Asset group asset combination data
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__AssetGroupAssetCombinationData {
    /**
     * Output only. Served assets.
     */
    assetCombinationServedAssets?: Schema$GoogleAdsSearchads360V0Common__AssetUsage[];
  }
  /**
   * AssetGroupListingGroupFilter represents a listing group filter tree node in an asset group.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__AssetGroupListingGroupFilter {
    /**
     * Immutable. The asset group which this asset group listing group filter is part of.
     */
    assetGroup?: string | null;
    /**
     * Dimension value with which this listing group is refining its parent. Undefined for the root group.
     */
    caseValue?: Schema$GoogleAdsSearchads360V0Resources__ListingGroupFilterDimension;
    /**
     * Output only. The ID of the ListingGroupFilter.
     */
    id?: string | null;
    /**
     * Immutable. Resource name of the parent listing group subdivision. Null for the root listing group filter node.
     */
    parentListingGroupFilter?: string | null;
    /**
     * Output only. The path of dimensions defining this listing group filter.
     */
    path?: Schema$GoogleAdsSearchads360V0Resources__ListingGroupFilterDimensionPath;
    /**
     * Immutable. The resource name of the asset group listing group filter. Asset group listing group filter resource name have the form: `customers/{customer_id\}/assetGroupListingGroupFilters/{asset_group_id\}~{listing_group_filter_id\}`
     */
    resourceName?: string | null;
    /**
     * Immutable. Type of a listing group filter node.
     */
    type?: string | null;
    /**
     * Immutable. The vertical the current node tree represents. All nodes in the same tree must belong to the same vertical.
     */
    vertical?: string | null;
  }
  /**
   * AssetGroupSignal represents a signal in an asset group. The existence of a signal tells the performance max campaign who's most likely to convert. Performance Max uses the signal to look for new people with similar or stronger intent to find conversions across Search, Display, Video, and more.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__AssetGroupSignal {
    /**
     * Immutable. The asset group which this asset group signal belongs to.
     */
    assetGroup?: string | null;
    /**
     * Immutable. The audience signal to be used by the performance max campaign.
     */
    audience?: Schema$GoogleAdsSearchads360V0Common__AudienceInfo;
    /**
     * Immutable. The resource name of the asset group signal. Asset group signal resource name have the form: `customers/{customer_id\}/assetGroupSignals/{asset_group_id\}~{signal_id\}`
     */
    resourceName?: string | null;
  }
  /**
   * A view on the usage of asset group asset top combinations.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__AssetGroupTopCombinationView {
    /**
     * Output only. The top combinations of assets that served together.
     */
    assetGroupTopCombinations?: Schema$GoogleAdsSearchads360V0Resources__AssetGroupAssetCombinationData[];
    /**
     * Output only. The resource name of the asset group top combination view. AssetGroup Top Combination view resource names have the form: `"customers/{customer_id\}/assetGroupTopCombinationViews/{asset_group_id\}~{asset_combination_category\}"
     */
    resourceName?: string | null;
  }
  /**
   * An asset set representing a collection of assets. Use AssetSetAsset to link an asset to the asset set.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__AssetSet {
    /**
     * Output only. The ID of the asset set.
     */
    id?: string | null;
    /**
     * Immutable. The resource name of the asset set. Asset set resource names have the form: `customers/{customer_id\}/assetSets/{asset_set_id\}`
     */
    resourceName?: string | null;
  }
  /**
   * AssetSetAsset is the link between an asset and an asset set. Adding an AssetSetAsset links an asset with an asset set.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__AssetSetAsset {
    /**
     * Immutable. The asset which this asset set asset is linking to.
     */
    asset?: string | null;
    /**
     * Immutable. The asset set which this asset set asset is linking to.
     */
    assetSet?: string | null;
    /**
     * Immutable. The resource name of the asset set asset. Asset set asset resource names have the form: `customers/{customer_id\}/assetSetAssets/{asset_set_id\}~{asset_id\}`
     */
    resourceName?: string | null;
    /**
     * Output only. The status of the asset set asset. Read-only.
     */
    status?: string | null;
  }
  /**
   * Audience is an effective targeting option that lets you intersect different segment attributes, such as detailed demographics and affinities, to create audiences that represent sections of your target segments.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__Audience {
    /**
     * Description of this audience.
     */
    description?: string | null;
    /**
     * Output only. ID of the audience.
     */
    id?: string | null;
    /**
     * Required. Name of the audience. It should be unique across all audiences. It must have a minimum length of 1 and maximum length of 255.
     */
    name?: string | null;
    /**
     * Immutable. The resource name of the audience. Audience names have the form: `customers/{customer_id\}/audiences/{audience_id\}`
     */
    resourceName?: string | null;
  }
  /**
   * A bidding strategy.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__BiddingStrategy {
    /**
     * Output only. The number of campaigns attached to this bidding strategy. This field is read-only.
     */
    campaignCount?: string | null;
    /**
     * Immutable. The currency used by the bidding strategy (ISO 4217 three-letter code). For bidding strategies in manager customers, this currency can be set on creation and defaults to the manager customer's currency. For serving customers, this field cannot be set; all strategies in a serving customer implicitly use the serving customer's currency. In all cases the effective_currency_code field returns the currency used by the strategy.
     */
    currencyCode?: string | null;
    /**
     * Output only. The currency used by the bidding strategy (ISO 4217 three-letter code). For bidding strategies in manager customers, this is the currency set by the advertiser when creating the strategy. For serving customers, this is the customer's currency_code. Bidding strategy metrics are reported in this currency. This field is read-only.
     */
    effectiveCurrencyCode?: string | null;
    /**
     * A bidding strategy that raises bids for clicks that seem more likely to lead to a conversion and lowers them for clicks where they seem less likely.
     */
    enhancedCpc?: Schema$GoogleAdsSearchads360V0Common__EnhancedCpc;
    /**
     * Output only. The ID of the bidding strategy.
     */
    id?: string | null;
    /**
     * An automated bidding strategy to help get the most conversions for your campaigns while spending your budget.
     */
    maximizeConversions?: Schema$GoogleAdsSearchads360V0Common__MaximizeConversions;
    /**
     * An automated bidding strategy to help get the most conversion value for your campaigns while spending your budget.
     */
    maximizeConversionValue?: Schema$GoogleAdsSearchads360V0Common__MaximizeConversionValue;
    /**
     * The name of the bidding strategy. All bidding strategies within an account must be named distinctly. The length of this string should be between 1 and 255, inclusive, in UTF-8 bytes, (trimmed).
     */
    name?: string | null;
    /**
     * Output only. The number of non-removed campaigns attached to this bidding strategy. This field is read-only.
     */
    nonRemovedCampaignCount?: string | null;
    /**
     * Immutable. The resource name of the bidding strategy. Bidding strategy resource names have the form: `customers/{customer_id\}/biddingStrategies/{bidding_strategy_id\}`
     */
    resourceName?: string | null;
    /**
     * Output only. The status of the bidding strategy. This field is read-only.
     */
    status?: string | null;
    /**
     * A bidding strategy that sets bids to help get as many conversions as possible at the target cost-per-acquisition (CPA) you set.
     */
    targetCpa?: Schema$GoogleAdsSearchads360V0Common__TargetCpa;
    /**
     * A bidding strategy that automatically optimizes towards a chosen percentage of impressions.
     */
    targetImpressionShare?: Schema$GoogleAdsSearchads360V0Common__TargetImpressionShare;
    /**
     * A bidding strategy that sets bids based on the target fraction of auctions where the advertiser should outrank a specific competitor. This field is deprecated. Creating a new bidding strategy with this field or attaching bidding strategies with this field to a campaign will fail. Mutates to strategies that already have this scheme populated are allowed.
     */
    targetOutrankShare?: Schema$GoogleAdsSearchads360V0Common__TargetOutrankShare;
    /**
     * A bidding strategy that helps you maximize revenue while averaging a specific target Return On Ad Spend (ROAS).
     */
    targetRoas?: Schema$GoogleAdsSearchads360V0Common__TargetRoas;
    /**
     * A bid strategy that sets your bids to help get as many clicks as possible within your budget.
     */
    targetSpend?: Schema$GoogleAdsSearchads360V0Common__TargetSpend;
    /**
     * Output only. The type of the bidding strategy. Create a bidding strategy by setting the bidding scheme. This field is read-only.
     */
    type?: string | null;
  }
  /**
   * A campaign.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__Campaign {
    /**
     * Output only. Resource name of AccessibleBiddingStrategy, a read-only view of the unrestricted attributes of the attached portfolio bidding strategy identified by 'bidding_strategy'. Empty, if the campaign does not use a portfolio strategy. Unrestricted strategy attributes are available to all customers with whom the strategy is shared and are read from the AccessibleBiddingStrategy resource. In contrast, restricted attributes are only available to the owner customer of the strategy and their managers. Restricted attributes can only be read from the BiddingStrategy resource.
     */
    accessibleBiddingStrategy?: string | null;
    /**
     * The ad serving optimization status of the campaign.
     */
    adServingOptimizationStatus?: string | null;
    /**
     * Immutable. Optional refinement to `advertising_channel_type`. Must be a valid sub-type of the parent channel type. Can be set only when creating campaigns. After campaign is created, the field can not be changed.
     */
    advertisingChannelSubType?: string | null;
    /**
     * Immutable. The primary serving target for ads within the campaign. The targeting options can be refined in `network_settings`. This field is required and should not be empty when creating new campaigns. Can be set only when creating campaigns. After the campaign is created, the field can not be changed.
     */
    advertisingChannelType?: string | null;
    /**
     * The resource name of the portfolio bidding strategy used by the campaign.
     */
    biddingStrategy?: string | null;
    /**
     * Output only. The system status of the campaign's bidding strategy.
     */
    biddingStrategySystemStatus?: string | null;
    /**
     * Output only. The type of bidding strategy. A bidding strategy can be created by setting either the bidding scheme to create a standard bidding strategy or the `bidding_strategy` field to create a portfolio bidding strategy. This field is read-only.
     */
    biddingStrategyType?: string | null;
    /**
     * The resource name of the campaign budget of the campaign.
     */
    campaignBudget?: string | null;
    /**
     * Output only. The timestamp when this campaign was created. The timestamp is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss" format. create_time will be deprecated in v1. Use creation_time instead.
     */
    createTime?: string | null;
    /**
     * Output only. The timestamp when this campaign was created. The timestamp is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss" format.
     */
    creationTime?: string | null;
    /**
     * The setting for controlling Dynamic Search Ads (DSA).
     */
    dynamicSearchAdsSetting?: Schema$GoogleAdsSearchads360V0Resources_Campaign_DynamicSearchAdsSetting;
    /**
     * Output only. The resource names of effective labels attached to this campaign. An effective label is a label inherited or directly assigned to this campaign.
     */
    effectiveLabels?: string[] | null;
    /**
     * The last day of the campaign in serving customer's timezone in YYYY-MM-DD format. On create, defaults to 2037-12-30, which means the campaign will run indefinitely. To set an existing campaign to run indefinitely, set this field to 2037-12-30.
     */
    endDate?: string | null;
    /**
     * Output only. ID of the campaign in the external engine account. This field is for non-Google Ads account only, for example, Yahoo Japan, Microsoft, Baidu etc. For Google Ads entity, use "campaign.id" instead.
     */
    engineId?: string | null;
    /**
     * The asset field types that should be excluded from this campaign. Asset links with these field types will not be inherited by this campaign from the upper level.
     */
    excludedParentAssetFieldTypes?: string[] | null;
    /**
     * Suffix used to append query parameters to landing pages that are served with parallel tracking.
     */
    finalUrlSuffix?: string | null;
    /**
     * A list that limits how often each user will see this campaign's ads.
     */
    frequencyCaps?: Schema$GoogleAdsSearchads360V0Common__FrequencyCapEntry[];
    /**
     * The setting for ads geotargeting.
     */
    geoTargetTypeSetting?: Schema$GoogleAdsSearchads360V0Resources_Campaign_GeoTargetTypeSetting;
    /**
     * Output only. The ID of the campaign.
     */
    id?: string | null;
    /**
     * Output only. The resource names of labels attached to this campaign.
     */
    labels?: string[] | null;
    /**
     * Output only. The datetime when this campaign was last modified. The datetime is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss.ssssss" format.
     */
    lastModifiedTime?: string | null;
    /**
     * Standard Manual CPA bidding strategy. Manual bidding strategy that allows advertiser to set the bid per advertiser-specified action. Supported only for Local Services campaigns.
     */
    manualCpa?: Schema$GoogleAdsSearchads360V0Common__ManualCpa;
    /**
     * Standard Manual CPC bidding strategy. Manual click-based bidding where user pays per click.
     */
    manualCpc?: Schema$GoogleAdsSearchads360V0Common__ManualCpc;
    /**
     * Standard Manual CPM bidding strategy. Manual impression-based bidding where user pays per thousand impressions.
     */
    manualCpm?: Schema$GoogleAdsSearchads360V0Common__ManualCpm;
    /**
     * Standard Maximize Conversions bidding strategy that automatically maximizes number of conversions while spending your budget.
     */
    maximizeConversions?: Schema$GoogleAdsSearchads360V0Common__MaximizeConversions;
    /**
     * Standard Maximize Conversion Value bidding strategy that automatically sets bids to maximize revenue while spending your budget.
     */
    maximizeConversionValue?: Schema$GoogleAdsSearchads360V0Common__MaximizeConversionValue;
    /**
     * The name of the campaign. This field is required and should not be empty when creating new campaigns. It must not contain any null (code point 0x0), NL line feed (code point 0xA) or carriage return (code point 0xD) characters.
     */
    name?: string | null;
    /**
     * The network settings for the campaign.
     */
    networkSettings?: Schema$GoogleAdsSearchads360V0Resources_Campaign_NetworkSettings;
    /**
     * Optimization goal setting for this campaign, which includes a set of optimization goal types.
     */
    optimizationGoalSetting?: Schema$GoogleAdsSearchads360V0Resources_Campaign_OptimizationGoalSetting;
    /**
     * Standard Percent Cpc bidding strategy where bids are a fraction of the advertised price for some good or service.
     */
    percentCpc?: Schema$GoogleAdsSearchads360V0Common__PercentCpc;
    /**
     * Settings for Real-Time Bidding, a feature only available for campaigns targeting the Ad Exchange network.
     */
    realTimeBiddingSetting?: Schema$GoogleAdsSearchads360V0Common__RealTimeBiddingSetting;
    /**
     * Immutable. The resource name of the campaign. Campaign resource names have the form: `customers/{customer_id\}/campaigns/{campaign_id\}`
     */
    resourceName?: string | null;
    /**
     * Selective optimization setting for this campaign, which includes a set of conversion actions to optimize this campaign towards. This feature only applies to app campaigns that use MULTI_CHANNEL as AdvertisingChannelType and APP_CAMPAIGN or APP_CAMPAIGN_FOR_ENGAGEMENT as AdvertisingChannelSubType.
     */
    selectiveOptimization?: Schema$GoogleAdsSearchads360V0Resources_Campaign_SelectiveOptimization;
    /**
     * Output only. The ad serving status of the campaign.
     */
    servingStatus?: string | null;
    /**
     * The setting for controlling Shopping campaigns.
     */
    shoppingSetting?: Schema$GoogleAdsSearchads360V0Resources_Campaign_ShoppingSetting;
    /**
     * The date when campaign started in serving customer's timezone in YYYY-MM-DD format.
     */
    startDate?: string | null;
    /**
     * The status of the campaign. When a new campaign is added, the status defaults to ENABLED.
     */
    status?: string | null;
    /**
     * Standard Target CPA bidding strategy that automatically sets bids to help get as many conversions as possible at the target cost-per-acquisition (CPA) you set.
     */
    targetCpa?: Schema$GoogleAdsSearchads360V0Common__TargetCpa;
    /**
     * A bidding strategy that automatically optimizes cost per thousand impressions.
     */
    targetCpm?: Schema$GoogleAdsSearchads360V0Common__TargetCpm;
    /**
     * Target Impression Share bidding strategy. An automated bidding strategy that sets bids to achieve a chosen percentage of impressions.
     */
    targetImpressionShare?: Schema$GoogleAdsSearchads360V0Common__TargetImpressionShare;
    /**
     * Standard Target ROAS bidding strategy that automatically maximizes revenue while averaging a specific target return on ad spend (ROAS).
     */
    targetRoas?: Schema$GoogleAdsSearchads360V0Common__TargetRoas;
    /**
     * Standard Target Spend bidding strategy that automatically sets your bids to help get as many clicks as possible within your budget.
     */
    targetSpend?: Schema$GoogleAdsSearchads360V0Common__TargetSpend;
    /**
     * Output only. Campaign-level settings for tracking information.
     */
    trackingSetting?: Schema$GoogleAdsSearchads360V0Resources_Campaign_TrackingSetting;
    /**
     * The URL template for constructing a tracking URL.
     */
    trackingUrlTemplate?: string | null;
    /**
     * The list of mappings used to substitute custom parameter tags in a `tracking_url_template`, `final_urls`, or `mobile_final_urls`.
     */
    urlCustomParameters?: Schema$GoogleAdsSearchads360V0Common__CustomParameter[];
    /**
     * Represents opting out of URL expansion to more targeted URLs. If opted out (true), only the final URLs in the asset group or URLs specified in the advertiser's Google Merchant Center or business data feeds are targeted. If opted in (false), the entire domain will be targeted. This field can only be set for Performance Max campaigns, where the default value is false.
     */
    urlExpansionOptOut?: boolean | null;
  }
  /**
   * A link between a Campaign and an Asset.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__CampaignAsset {
    /**
     * Immutable. The asset which is linked to the campaign.
     */
    asset?: string | null;
    /**
     * Immutable. The campaign to which the asset is linked.
     */
    campaign?: string | null;
    /**
     * Immutable. The resource name of the campaign asset. CampaignAsset resource names have the form: `customers/{customer_id\}/campaignAssets/{campaign_id\}~{asset_id\}~{field_type\}`
     */
    resourceName?: string | null;
    /**
     * Output only. Status of the campaign asset.
     */
    status?: string | null;
  }
  /**
   * CampaignAssetSet is the linkage between a campaign and an asset set. Adding a CampaignAssetSet links an asset set with a campaign.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__CampaignAssetSet {
    /**
     * Immutable. The asset set which is linked to the campaign.
     */
    assetSet?: string | null;
    /**
     * Immutable. The campaign to which this asset set is linked.
     */
    campaign?: string | null;
    /**
     * Immutable. The resource name of the campaign asset set. Asset set asset resource names have the form: `customers/{customer_id\}/campaignAssetSets/{campaign_id\}~{asset_set_id\}`
     */
    resourceName?: string | null;
    /**
     * Output only. The status of the campaign asset set asset. Read-only.
     */
    status?: string | null;
  }
  /**
   * A campaign audience view. Includes performance data from interests and remarketing lists for Display Network and YouTube Network ads, and remarketing lists for search ads (RLSA), aggregated by campaign and audience criterion. This view only includes audiences attached at the campaign level.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__CampaignAudienceView {
    /**
     * Output only. The resource name of the campaign audience view. Campaign audience view resource names have the form: `customers/{customer_id\}/campaignAudienceViews/{campaign_id\}~{criterion_id\}`
     */
    resourceName?: string | null;
  }
  /**
   * A campaign budget.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__CampaignBudget {
    /**
     * The amount of the budget, in the local currency for the account. Amount is specified in micros, where one million is equivalent to one currency unit. Monthly spend is capped at 30.4 times this amount.
     */
    amountMicros?: string | null;
    /**
     * The delivery method that determines the rate at which the campaign budget is spent. Defaults to STANDARD if unspecified in a create operation.
     */
    deliveryMethod?: string | null;
    /**
     * Immutable. Period over which to spend the budget. Defaults to DAILY if not specified.
     */
    period?: string | null;
    /**
     * Immutable. The resource name of the campaign budget. Campaign budget resource names have the form: `customers/{customer_id\}/campaignBudgets/{campaign_budget_id\}`
     */
    resourceName?: string | null;
  }
  /**
   * A campaign criterion.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__CampaignCriterion {
    /**
     * Immutable. Age range.
     */
    ageRange?: Schema$GoogleAdsSearchads360V0Common__AgeRangeInfo;
    /**
     * The modifier for the bids when the criterion matches. The modifier must be in the range: 0.1 - 10.0. Most targetable criteria types support modifiers. Use 0 to opt out of a Device type.
     */
    bidModifier?: number | null;
    /**
     * Output only. The ID of the criterion. This field is ignored during mutate.
     */
    criterionId?: string | null;
    /**
     * Immutable. Device.
     */
    device?: Schema$GoogleAdsSearchads360V0Common__DeviceInfo;
    /**
     * Output only. The display name of the criterion. This field is ignored for mutates.
     */
    displayName?: string | null;
    /**
     * Immutable. Gender.
     */
    gender?: Schema$GoogleAdsSearchads360V0Common__GenderInfo;
    /**
     * Immutable. Keyword.
     */
    keyword?: Schema$GoogleAdsSearchads360V0Common__KeywordInfo;
    /**
     * Immutable. Language.
     */
    language?: Schema$GoogleAdsSearchads360V0Common__LanguageInfo;
    /**
     * Output only. The datetime when this campaign criterion was last modified. The datetime is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss.ssssss" format.
     */
    lastModifiedTime?: string | null;
    /**
     * Immutable. Location.
     */
    location?: Schema$GoogleAdsSearchads360V0Common__LocationInfo;
    /**
     * Immutable. Location Group
     */
    locationGroup?: Schema$GoogleAdsSearchads360V0Common__LocationGroupInfo;
    /**
     * Immutable. Whether to target (`false`) or exclude (`true`) the criterion.
     */
    negative?: boolean | null;
    /**
     * Immutable. The resource name of the campaign criterion. Campaign criterion resource names have the form: `customers/{customer_id\}/campaignCriteria/{campaign_id\}~{criterion_id\}`
     */
    resourceName?: string | null;
    /**
     * The status of the criterion.
     */
    status?: string | null;
    /**
     * Output only. The type of the criterion.
     */
    type?: string | null;
    /**
     * Immutable. User List.
     */
    userList?: Schema$GoogleAdsSearchads360V0Common__UserListInfo;
    /**
     * Immutable. Webpage.
     */
    webpage?: Schema$GoogleAdsSearchads360V0Common__WebpageInfo;
  }
  /**
   * Represents a relationship between a campaign and an effective label. An effective label is a label inherited or directly assigned to this campaign.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__CampaignEffectiveLabel {
    /**
     * Immutable. The campaign to which the effective label is attached.
     */
    campaign?: string | null;
    /**
     * Immutable. The effective label assigned to the campaign.
     */
    label?: string | null;
    /**
     * Output only. The ID of the Customer which owns the effective label.
     */
    ownerCustomerId?: string | null;
    /**
     * Immutable. Name of the resource. CampaignEffectivelabel resource names have the form: `customers/{customer_id\}/campaignEffectiveLabels/{campaign_id\}~{label_id\}`
     */
    resourceName?: string | null;
  }
  /**
   * Represents a relationship between a campaign and a label.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__CampaignLabel {
    /**
     * Immutable. The campaign to which the label is attached.
     */
    campaign?: string | null;
    /**
     * Immutable. The label assigned to the campaign.
     */
    label?: string | null;
    /**
     * Output only. The ID of the Customer which owns the label.
     */
    ownerCustomerId?: string | null;
    /**
     * Immutable. Name of the resource. Campaign label resource names have the form: `customers/{customer_id\}/campaignLabels/{campaign_id\}~{label_id\}`
     */
    resourceName?: string | null;
  }
  /**
   * Cart data sales view.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__CartDataSalesView {
    /**
     * Output only. The resource name of the Cart data sales view. Cart data sales view resource names have the form: `customers/{customer_id\}/cartDataSalesView`
     */
    resourceName?: string | null;
  }
  /**
   * A conversion.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__Conversion {
    /**
     * Output only. Ad ID. A value of 0 indicates that the ad is unattributed.
     */
    adId?: string | null;
    /**
     * Output only. For offline conversions, this is an ID provided by advertisers. If an advertiser doesn't specify such an ID, Search Ads 360 generates one. For online conversions, this is equal to the id column or the floodlight_order_id column depending on the advertiser's Floodlight instructions.
     */
    advertiserConversionId?: string | null;
    /**
     * Output only. Asset field type of the conversion event.
     */
    assetFieldType?: string | null;
    /**
     * Output only. ID of the asset which was interacted with during the conversion event.
     */
    assetId?: string | null;
    /**
     * Output only. What the conversion is attributed to: Visit or Keyword+Ad.
     */
    attributionType?: string | null;
    /**
     * Output only. A unique string, for the visit that the conversion is attributed to, that is passed to the landing page as the click id URL parameter.
     */
    clickId?: string | null;
    /**
     * Output only. The timestamp of the conversion event.
     */
    conversionDateTime?: string | null;
    /**
     * Output only. The timestamp of the last time the conversion was modified.
     */
    conversionLastModifiedDateTime?: string | null;
    /**
     * Output only. The quantity of items recorded by the conversion, as determined by the qty url parameter. The advertiser is responsible for dynamically populating the parameter (such as number of items sold in the conversion), otherwise it defaults to 1.
     */
    conversionQuantity?: string | null;
    /**
     * Output only. The adjusted revenue in micros for the conversion event. This will always be in the currency of the serving account.
     */
    conversionRevenueMicros?: string | null;
    /**
     * Output only. The timestamp of the visit that the conversion is attributed to.
     */
    conversionVisitDateTime?: string | null;
    /**
     * Output only. Search Ads 360 criterion ID. A value of 0 indicates that the criterion is unattributed.
     */
    criterionId?: string | null;
    /**
     * Output only. The Floodlight order ID provided by the advertiser for the conversion.
     */
    floodlightOrderId?: string | null;
    /**
     * Output only. The original, unchanged revenue associated with the Floodlight event (in the currency of the current report), before Floodlight currency instruction modifications.
     */
    floodlightOriginalRevenue?: string | null;
    /**
     * Output only. The ID of the conversion
     */
    id?: string | null;
    /**
     * Output only. The Search Ads 360 inventory account ID containing the product that was clicked on. Search Ads 360 generates this ID when you link an inventory account in Search Ads 360.
     */
    merchantId?: string | null;
    /**
     * Output only. The sales channel of the product that was clicked on: Online or Local.
     */
    productChannel?: string | null;
    /**
     * Output only. The country (ISO-3166-format) registered for the inventory feed that contains the product clicked on.
     */
    productCountryCode?: string | null;
    /**
     * Output only. The ID of the product clicked on.
     */
    productId?: string | null;
    /**
     * Output only. The language (ISO-639-1) that has been set for the Merchant Center feed containing data about the product.
     */
    productLanguageCode?: string | null;
    /**
     * Output only. The store in the Local Inventory Ad that was clicked on. This should match the store IDs used in your local products feed.
     */
    productStoreId?: string | null;
    /**
     * Output only. The resource name of the conversion. Conversion resource names have the form: `customers/{customer_id\}/conversions/{ad_group_id\}~{criterion_id\}~{ds_conversion_id\}`
     */
    resourceName?: string | null;
    /**
     * Output only. The status of the conversion, either ENABLED or REMOVED..
     */
    status?: string | null;
    /**
     * Output only. The Search Ads 360 visit ID that the conversion is attributed to.
     */
    visitId?: string | null;
  }
  /**
   * A conversion action.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__ConversionAction {
    /**
     * App ID for an app conversion action.
     */
    appId?: string | null;
    /**
     * Settings related to this conversion action's attribution model.
     */
    attributionModelSettings?: Schema$GoogleAdsSearchads360V0Resources_ConversionAction_AttributionModelSettings;
    /**
     * The category of conversions reported for this conversion action.
     */
    category?: string | null;
    /**
     * The maximum number of days that may elapse between an interaction (for example, a click) and a conversion event.
     */
    clickThroughLookbackWindowDays?: string | null;
    /**
     * Output only. Timestamp of the Floodlight activity's creation, formatted in ISO 8601.
     */
    creationTime?: string | null;
    /**
     * Output only. Floodlight settings for Floodlight conversion types.
     */
    floodlightSettings?: Schema$GoogleAdsSearchads360V0Resources_ConversionAction_FloodlightSettings;
    /**
     * Output only. The ID of the conversion action.
     */
    id?: string | null;
    /**
     * Whether this conversion action should be included in the "client_account_conversions" metric.
     */
    includeInClientAccountConversionsMetric?: boolean | null;
    /**
     * Output only. Whether this conversion action should be included in the "conversions" metric.
     */
    includeInConversionsMetric?: boolean | null;
    /**
     * The name of the conversion action. This field is required and should not be empty when creating new conversion actions.
     */
    name?: string | null;
    /**
     * Output only. The resource name of the conversion action owner customer, or null if this is a system-defined conversion action.
     */
    ownerCustomer?: string | null;
    /**
     * If a conversion action's primary_for_goal bit is false, the conversion action is non-biddable for all campaigns regardless of their customer conversion goal or campaign conversion goal. However, custom conversion goals do not respect primary_for_goal, so if a campaign has a custom conversion goal configured with a primary_for_goal = false conversion action, that conversion action is still biddable. By default, primary_for_goal will be true if not set. In V9, primary_for_goal can only be set to false after creation through an 'update' operation because it's not declared as optional.
     */
    primaryForGoal?: boolean | null;
    /**
     * Immutable. The resource name of the conversion action. Conversion action resource names have the form: `customers/{customer_id\}/conversionActions/{conversion_action_id\}`
     */
    resourceName?: string | null;
    /**
     * The status of this conversion action for conversion event accrual.
     */
    status?: string | null;
    /**
     * Immutable. The type of this conversion action.
     */
    type?: string | null;
    /**
     * Settings related to the value for conversion events associated with this conversion action.
     */
    valueSettings?: Schema$GoogleAdsSearchads360V0Resources_ConversionAction_ValueSettings;
  }
  /**
   * A conversion custom variable. See "About custom Floodlight metrics and dimensions in the new Search Ads 360" at https://support.google.com/sa360/answer/13567857
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__ConversionCustomVariable {
    /**
     * Output only. Cardinality of the conversion custom variable.
     */
    cardinality?: string | null;
    /**
     * Output only. The IDs of custom columns that use this conversion custom variable.
     */
    customColumnIds?: string[] | null;
    /**
     * Output only. Family of the conversion custom variable.
     */
    family?: string | null;
    /**
     * Output only. Fields for Search Ads 360 floodlight conversion custom variables.
     */
    floodlightConversionCustomVariableInfo?: Schema$GoogleAdsSearchads360V0Resources_ConversionCustomVariable_FloodlightConversionCustomVariableInfo;
    /**
     * Output only. The ID of the conversion custom variable.
     */
    id?: string | null;
    /**
     * Required. The name of the conversion custom variable. Name should be unique. The maximum length of name is 100 characters. There should not be any extra spaces before and after.
     */
    name?: string | null;
    /**
     * Output only. The resource name of the customer that owns the conversion custom variable.
     */
    ownerCustomer?: string | null;
    /**
     * Immutable. The resource name of the conversion custom variable. Conversion custom variable resource names have the form: `customers/{customer_id\}/conversionCustomVariables/{conversion_custom_variable_id\}`
     */
    resourceName?: string | null;
    /**
     * The status of the conversion custom variable for conversion event accrual.
     */
    status?: string | null;
    /**
     * Required. Immutable. The tag of the conversion custom variable. Tag should be unique and consist of a "u" character directly followed with a number less than ormequal to 100. For example: "u4".
     */
    tag?: string | null;
  }
  /**
   * A collection of customer-wide settings related to Search Ads 360 Conversion Tracking.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__ConversionTrackingSetting {
    /**
     * Output only. Whether the customer has accepted customer data terms. If using cross-account conversion tracking, this value is inherited from the manager. This field is read-only. For more information, see https://support.google.com/adspolicy/answer/7475709.
     */
    acceptedCustomerDataTerms?: boolean | null;
    /**
     * Output only. The conversion tracking id used for this account. This id doesn't indicate whether the customer uses conversion tracking (conversion_tracking_status does). This field is read-only.
     */
    conversionTrackingId?: string | null;
    /**
     * Output only. Conversion tracking status. It indicates whether the customer is using conversion tracking, and who is the conversion tracking owner of this customer. If this customer is using cross-account conversion tracking, the value returned will differ based on the `login-customer-id` of the request.
     */
    conversionTrackingStatus?: string | null;
    /**
     * Output only. The conversion tracking id of the customer's manager. This is set when the customer is opted into cross-account conversion tracking, and it overrides conversion_tracking_id.
     */
    crossAccountConversionTrackingId?: string | null;
    /**
     * Output only. Whether the customer is opted-in for enhanced conversions for leads. If using cross-account conversion tracking, this value is inherited from the manager. This field is read-only.
     */
    enhancedConversionsForLeadsEnabled?: boolean | null;
    /**
     * Output only. The resource name of the customer where conversions are created and managed. This field is read-only.
     */
    googleAdsConversionCustomer?: string | null;
    /**
     * Output only. The conversion tracking id of the customer's manager. This is set when the customer is opted into conversion tracking, and it overrides conversion_tracking_id. This field can only be managed through the Google Ads UI. This field is read-only.
     */
    googleAdsCrossAccountConversionTrackingId?: string | null;
  }
  /**
   * A custom column. See Search Ads 360 custom column at https://support.google.com/sa360/answer/9633916
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__CustomColumn {
    /**
     * Output only. User-defined description of the custom column.
     */
    description?: string | null;
    /**
     * Output only. ID of the custom column.
     */
    id?: string | null;
    /**
     * Output only. User-defined name of the custom column.
     */
    name?: string | null;
    /**
     * Output only. True when the custom column is available to be used in the query of SearchAds360Service.Search and SearchAds360Service.SearchStream.
     */
    queryable?: boolean | null;
    /**
     * Output only. The list of the referenced system columns of this custom column. For example, A custom column "sum of impressions and clicks" has referenced system columns of {"metrics.clicks", "metrics.impressions"\}.
     */
    referencedSystemColumns?: string[] | null;
    /**
     * Output only. True when the custom column is referring to one or more attributes.
     */
    referencesAttributes?: boolean | null;
    /**
     * Output only. True when the custom column is referring to one or more metrics.
     */
    referencesMetrics?: boolean | null;
    /**
     * Output only. How the result value of the custom column should be interpreted.
     */
    renderType?: string | null;
    /**
     * Immutable. The resource name of the custom column. Custom column resource names have the form: `customers/{customer_id\}/customColumns/{custom_column_id\}`
     */
    resourceName?: string | null;
    /**
     * Output only. The type of the result value of the custom column.
     */
    valueType?: string | null;
  }
  /**
   * A customer.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__Customer {
    /**
     * Output only. The account level of the customer: Manager, Sub-manager, Associate manager, Service account.
     */
    accountLevel?: string | null;
    /**
     * Output only. Account status, for example, Enabled, Paused, Removed, etc.
     */
    accountStatus?: string | null;
    /**
     * Output only. Engine account type, for example, Google Ads, Microsoft Advertising, Yahoo Japan, Baidu, Facebook, Engine Track, etc.
     */
    accountType?: string | null;
    /**
     * Output only. The descriptive name of the associate manager.
     */
    associateManagerDescriptiveName?: string | null;
    /**
     * Output only. The customer ID of the associate manager. A 0 value indicates that the customer has no SA360 associate manager.
     */
    associateManagerId?: string | null;
    /**
     * Whether auto-tagging is enabled for the customer.
     */
    autoTaggingEnabled?: boolean | null;
    /**
     * Output only. Conversion tracking setting for a customer.
     */
    conversionTrackingSetting?: Schema$GoogleAdsSearchads360V0Resources__ConversionTrackingSetting;
    /**
     * Output only. The timestamp when this customer was created. The timestamp is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss" format.
     */
    creationTime?: string | null;
    /**
     * Immutable. The currency in which the account operates. A subset of the currency codes from the ISO 4217 standard is supported.
     */
    currencyCode?: string | null;
    /**
     * Optional, non-unique descriptive name of the customer.
     */
    descriptiveName?: string | null;
    /**
     * Output only. DoubleClick Campaign Manager (DCM) setting for a manager customer.
     */
    doubleClickCampaignManagerSetting?: Schema$GoogleAdsSearchads360V0Resources__DoubleClickCampaignManagerSetting;
    /**
     * Output only. ID of the account in the external engine account.
     */
    engineId?: string | null;
    /**
     * The URL template for appending params to the final URL.
     */
    finalUrlSuffix?: string | null;
    /**
     * Output only. The ID of the customer.
     */
    id?: string | null;
    /**
     * Output only. The datetime when this customer was last modified. The datetime is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss.ssssss" format.
     */
    lastModifiedTime?: string | null;
    /**
     * Output only. Whether the customer is a manager.
     */
    manager?: boolean | null;
    /**
     * Output only. The descriptive name of the manager.
     */
    managerDescriptiveName?: string | null;
    /**
     * Output only. The customer ID of the manager. A 0 value indicates that the customer has no SA360 manager.
     */
    managerId?: string | null;
    /**
     * Immutable. The resource name of the customer. Customer resource names have the form: `customers/{customer_id\}`
     */
    resourceName?: string | null;
    /**
     * Output only. The status of the customer.
     */
    status?: string | null;
    /**
     * Output only. The descriptive name of the sub manager.
     */
    subManagerDescriptiveName?: string | null;
    /**
     * Output only. The customer ID of the sub manager. A 0 value indicates that the customer has no sub SA360 manager.
     */
    subManagerId?: string | null;
    /**
     * Immutable. The local timezone ID of the customer.
     */
    timeZone?: string | null;
    /**
     * The URL template for constructing a tracking URL out of parameters.
     */
    trackingUrlTemplate?: string | null;
  }
  /**
   * A link between a customer and an asset.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__CustomerAsset {
    /**
     * Required. Immutable. The asset which is linked to the customer.
     */
    asset?: string | null;
    /**
     * Immutable. The resource name of the customer asset. CustomerAsset resource names have the form: `customers/{customer_id\}/customerAssets/{asset_id\}~{field_type\}`
     */
    resourceName?: string | null;
    /**
     * Status of the customer asset.
     */
    status?: string | null;
  }
  /**
   * CustomerAssetSet is the linkage between a customer and an asset set. Adding a CustomerAssetSet links an asset set with a customer.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__CustomerAssetSet {
    /**
     * Immutable. The asset set which is linked to the customer.
     */
    assetSet?: string | null;
    /**
     * Immutable. The customer to which this asset set is linked.
     */
    customer?: string | null;
    /**
     * Immutable. The resource name of the customer asset set. Asset set asset resource names have the form: `customers/{customer_id\}/customerAssetSets/{asset_set_id\}`
     */
    resourceName?: string | null;
    /**
     * Output only. The status of the customer asset set asset. Read-only.
     */
    status?: string | null;
  }
  /**
   * A link between the given customer and a client customer. CustomerClients only exist for manager customers. All direct and indirect client customers are included, as well as the manager itself.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__CustomerClient {
    /**
     * Output only. The resource names of the labels owned by the requesting customer that are applied to the client customer. Label resource names have the form: `customers/{customer_id\}/labels/{label_id\}`
     */
    appliedLabels?: string[] | null;
    /**
     * Output only. The resource name of the client-customer which is linked to the given customer. Read only.
     */
    clientCustomer?: string | null;
    /**
     * Output only. Currency code (for example, 'USD', 'EUR') for the client. Read only.
     */
    currencyCode?: string | null;
    /**
     * Output only. Descriptive name for the client. Read only.
     */
    descriptiveName?: string | null;
    /**
     * Output only. Specifies whether this is a hidden account. Read only.
     */
    hidden?: boolean | null;
    /**
     * Output only. The ID of the client customer. Read only.
     */
    id?: string | null;
    /**
     * Output only. Distance between given customer and client. For self link, the level value will be 0. Read only.
     */
    level?: string | null;
    /**
     * Output only. Identifies if the client is a manager. Read only.
     */
    manager?: boolean | null;
    /**
     * Output only. The resource name of the customer client. CustomerClient resource names have the form: `customers/{customer_id\}/customerClients/{client_customer_id\}`
     */
    resourceName?: string | null;
    /**
     * Output only. The status of the client customer. Read only.
     */
    status?: string | null;
    /**
     * Output only. Identifies if the client is a test account. Read only.
     */
    testAccount?: boolean | null;
    /**
     * Output only. Common Locale Data Repository (CLDR) string representation of the time zone of the client, for example, America/Los_Angeles. Read only.
     */
    timeZone?: string | null;
  }
  /**
   * Represents customer-manager link relationship.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__CustomerManagerLink {
    /**
     * Output only. The manager customer linked to the customer.
     */
    managerCustomer?: string | null;
    /**
     * Output only. ID of the customer-manager link. This field is read only.
     */
    managerLinkId?: string | null;
    /**
     * Immutable. Name of the resource. CustomerManagerLink resource names have the form: `customers/{customer_id\}/customerManagerLinks/{manager_customer_id\}~{manager_link_id\}`
     */
    resourceName?: string | null;
    /**
     * Output only. The timestamp when the CustomerManagerLink was created. The timestamp is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss" format.
     */
    startTime?: string | null;
    /**
     * Status of the link between the customer and the manager.
     */
    status?: string | null;
  }
  /**
   * DoubleClick Campaign Manager (DCM) setting for a manager customer.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__DoubleClickCampaignManagerSetting {
    /**
     * Output only. ID of the Campaign Manager advertiser associated with this customer.
     */
    advertiserId?: string | null;
    /**
     * Output only. ID of the Campaign Manager network associated with this customer.
     */
    networkId?: string | null;
    /**
     * Output only. Time zone of the Campaign Manager network associated with this customer in IANA Time Zone Database format, such as America/New_York.
     */
    timeZone?: string | null;
  }
  /**
   * A dynamic search ads search term view.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__DynamicSearchAdsSearchTermView {
    /**
     * Output only. The dynamically selected landing page URL of the impression. This field is read-only.
     */
    landingPage?: string | null;
    /**
     * Output only. The resource name of the dynamic search ads search term view. Dynamic search ads search term view resource names have the form: `customers/{customer_id\}/dynamicSearchAdsSearchTermViews/{ad_group_id\}~{search_term_fingerprint\}~{headline_fingerprint\}~{landing_page_fingerprint\}~{page_url_fingerprint\}`
     */
    resourceName?: string | null;
  }
  /**
   * A gender view. The gender_view resource reflects the effective serving state, rather than what criteria were added. An ad group without gender criteria by default shows to all genders, so all genders appear in gender_view with stats.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__GenderView {
    /**
     * Output only. The resource name of the gender view. Gender view resource names have the form: `customers/{customer_id\}/genderViews/{ad_group_id\}~{criterion_id\}`
     */
    resourceName?: string | null;
  }
  /**
   * A geo target constant.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__GeoTargetConstant {
    /**
     * Output only. The fully qualified English name, consisting of the target's name and that of its parent and country.
     */
    canonicalName?: string | null;
    /**
     * Output only. The ISO-3166-1 alpha-2 country code that is associated with the target.
     */
    countryCode?: string | null;
    /**
     * Output only. The ID of the geo target constant.
     */
    id?: string | null;
    /**
     * Output only. Geo target constant English name.
     */
    name?: string | null;
    /**
     * Output only. The resource name of the parent geo target constant. Geo target constant resource names have the form: `geoTargetConstants/{parent_geo_target_constant_id\}`
     */
    parentGeoTarget?: string | null;
    /**
     * Output only. The resource name of the geo target constant. Geo target constant resource names have the form: `geoTargetConstants/{geo_target_constant_id\}`
     */
    resourceName?: string | null;
    /**
     * Output only. Geo target constant status.
     */
    status?: string | null;
    /**
     * Output only. Geo target constant target type.
     */
    targetType?: string | null;
  }
  /**
   * A keyword view.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__KeywordView {
    /**
     * Output only. The resource name of the keyword view. Keyword view resource names have the form: `customers/{customer_id\}/keywordViews/{ad_group_id\}~{criterion_id\}`
     */
    resourceName?: string | null;
  }
  /**
   * A label.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__Label {
    /**
     * Output only. ID of the label. Read only.
     */
    id?: string | null;
    /**
     * The name of the label. This field is required and should not be empty when creating a new label. The length of this string should be between 1 and 80, inclusive.
     */
    name?: string | null;
    /**
     * Immutable. Name of the resource. Label resource names have the form: `customers/{customer_id\}/labels/{label_id\}`
     */
    resourceName?: string | null;
    /**
     * Output only. Status of the label. Read only.
     */
    status?: string | null;
    /**
     * A type of label displaying text on a colored background.
     */
    textLabel?: Schema$GoogleAdsSearchads360V0Common__TextLabel;
  }
  /**
   * A language.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__LanguageConstant {
    /**
     * Output only. The language code, for example, "en_US", "en_AU", "es", "fr", etc.
     */
    code?: string | null;
    /**
     * Output only. The ID of the language constant.
     */
    id?: string | null;
    /**
     * Output only. The full name of the language in English, for example, "English (US)", "Spanish", etc.
     */
    name?: string | null;
    /**
     * Output only. The resource name of the language constant. Language constant resource names have the form: `languageConstants/{criterion_id\}`
     */
    resourceName?: string | null;
    /**
     * Output only. Whether the language is targetable.
     */
    targetable?: boolean | null;
  }
  /**
   * Listing dimensions for the asset group listing group filter.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__ListingGroupFilterDimension {
    /**
     * Bidding category of a product offer.
     */
    productBiddingCategory?: Schema$GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductBiddingCategory;
    /**
     * Brand of a product offer.
     */
    productBrand?: Schema$GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductBrand;
    /**
     * Locality of a product offer.
     */
    productChannel?: Schema$GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductChannel;
    /**
     * Condition of a product offer.
     */
    productCondition?: Schema$GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductCondition;
    /**
     * Custom attribute of a product offer.
     */
    productCustomAttribute?: Schema$GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductCustomAttribute;
    /**
     * Item id of a product offer.
     */
    productItemId?: Schema$GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductItemId;
    /**
     * Type of a product offer.
     */
    productType?: Schema$GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductType;
  }
  /**
   * The path defining of dimensions defining a listing group filter.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__ListingGroupFilterDimensionPath {
    /**
     * Output only. The complete path of dimensions through the listing group filter hierarchy (excluding the root node) to this listing group filter.
     */
    dimensions?: Schema$GoogleAdsSearchads360V0Resources__ListingGroupFilterDimension[];
  }
  /**
   * A location view summarizes the performance of campaigns by a Location criterion.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__LocationView {
    /**
     * Output only. The resource name of the location view. Location view resource names have the form: `customers/{customer_id\}/locationViews/{campaign_id\}~{criterion_id\}`
     */
    resourceName?: string | null;
  }
  /**
   * A Product Bidding Category.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__ProductBiddingCategoryConstant {
    /**
     * Output only. Two-letter upper-case country code of the product bidding category.
     */
    countryCode?: string | null;
    /**
     * Output only. ID of the product bidding category. This ID is equivalent to the google_product_category ID as described in this article: https://support.google.com/merchants/answer/6324436.
     */
    id?: string | null;
    /**
     * Output only. Language code of the product bidding category.
     */
    languageCode?: string | null;
    /**
     * Output only. Level of the product bidding category.
     */
    level?: string | null;
    /**
     * Output only. Display value of the product bidding category localized according to language_code.
     */
    localizedName?: string | null;
    /**
     * Output only. Resource name of the parent product bidding category.
     */
    productBiddingCategoryConstantParent?: string | null;
    /**
     * Output only. The resource name of the product bidding category. Product bidding category resource names have the form: `productBiddingCategoryConstants/{country_code\}~{level\}~{id\}`
     */
    resourceName?: string | null;
    /**
     * Output only. Status of the product bidding category.
     */
    status?: string | null;
  }
  /**
   * A product group view.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__ProductGroupView {
    /**
     * Output only. The resource name of the product group view. Product group view resource names have the form: `customers/{customer_id\}/productGroupViews/{ad_group_id\}~{criterion_id\}`
     */
    resourceName?: string | null;
  }
  /**
   * A field or resource (artifact) used by SearchAds360Service.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__SearchAds360Field {
    /**
     * Output only. The names of all resources that are selectable with the described artifact. Fields from these resources do not segment metrics when included in search queries. This field is only set for artifacts whose category is RESOURCE.
     */
    attributeResources?: string[] | null;
    /**
     * Output only. The category of the artifact.
     */
    category?: string | null;
    /**
     * Output only. This field determines the operators that can be used with the artifact in WHERE clauses.
     */
    dataType?: string | null;
    /**
     * Output only. Values the artifact can assume if it is a field of type ENUM. This field is only set for artifacts of category SEGMENT or ATTRIBUTE.
     */
    enumValues?: string[] | null;
    /**
     * Output only. Whether the artifact can be used in a WHERE clause in search queries.
     */
    filterable?: boolean | null;
    /**
     * Output only. Whether the field artifact is repeated.
     */
    isRepeated?: boolean | null;
    /**
     * Output only. This field lists the names of all metrics that are selectable with the described artifact when it is used in the FROM clause. It is only set for artifacts whose category is RESOURCE.
     */
    metrics?: string[] | null;
    /**
     * Output only. The name of the artifact.
     */
    name?: string | null;
    /**
     * Output only. The resource name of the artifact. Artifact resource names have the form: `SearchAds360Fields/{name\}`
     */
    resourceName?: string | null;
    /**
     * Output only. This field lists the names of all artifacts, whether a segment or another resource, that segment metrics when included in search queries and when the described artifact is used in the FROM clause. It is only set for artifacts whose category is RESOURCE.
     */
    segments?: string[] | null;
    /**
     * Output only. Whether the artifact can be used in a SELECT clause in search queries.
     */
    selectable?: boolean | null;
    /**
     * Output only. The names of all resources, segments, and metrics that are selectable with the described artifact.
     */
    selectableWith?: string[] | null;
    /**
     * Output only. Whether the artifact can be used in a ORDER BY clause in search queries.
     */
    sortable?: boolean | null;
    /**
     * Output only. The URL of proto describing the artifact's data type.
     */
    typeUrl?: string | null;
  }
  /**
   * Shopping performance view. Provides Shopping campaign statistics aggregated at several product dimension levels. Product dimension values from Merchant Center such as brand, category, custom attributes, product condition and product type will reflect the state of each dimension as of the date and time when the corresponding event was recorded.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__ShoppingPerformanceView {
    /**
     * Output only. The resource name of the Shopping performance view. Shopping performance view resource names have the form: `customers/{customer_id\}/shoppingPerformanceView`
     */
    resourceName?: string | null;
  }
  /**
   * A user list. This is a list of users a customer may target.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__UserList {
    /**
     * Output only. Id of the user list.
     */
    id?: string | null;
    /**
     * Name of this user list. Depending on its access_reason, the user list name may not be unique (for example, if access_reason=SHARED)
     */
    name?: string | null;
    /**
     * Immutable. The resource name of the user list. User list resource names have the form: `customers/{customer_id\}/userLists/{user_list_id\}`
     */
    resourceName?: string | null;
    /**
     * Output only. Type of this list. This field is read-only.
     */
    type?: string | null;
  }
  /**
   * A user location view. User Location View includes all metrics aggregated at the country level, one row per country. It reports metrics at the actual physical location of the user by targeted or not targeted location. If other segment fields are used, you may get more than one row per country.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__UserLocationView {
    /**
     * Output only. Criterion Id for the country.
     */
    countryCriterionId?: string | null;
    /**
     * Output only. The resource name of the user location view. UserLocation view resource names have the form: `customers/{customer_id\}/userLocationViews/{country_criterion_id\}~{targeting_location\}`
     */
    resourceName?: string | null;
    /**
     * Output only. Indicates whether location was targeted or not.
     */
    targetingLocation?: boolean | null;
  }
  /**
   * A visit.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__Visit {
    /**
     * Output only. Ad ID. A value of 0 indicates that the ad is unattributed.
     */
    adId?: string | null;
    /**
     * Output only. Asset field type of the visit event.
     */
    assetFieldType?: string | null;
    /**
     * Output only. ID of the asset which was interacted with during the visit event.
     */
    assetId?: string | null;
    /**
     * Output only. A unique string for each visit that is passed to the landing page as the click id URL parameter.
     */
    clickId?: string | null;
    /**
     * Output only. Search Ads 360 keyword ID. A value of 0 indicates that the keyword is unattributed.
     */
    criterionId?: string | null;
    /**
     * Output only. The ID of the visit.
     */
    id?: string | null;
    /**
     * Output only. The Search Ads 360 inventory account ID containing the product that was clicked on. Search Ads 360 generates this ID when you link an inventory account in Search Ads 360.
     */
    merchantId?: string | null;
    /**
     * Output only. The sales channel of the product that was clicked on: Online or Local.
     */
    productChannel?: string | null;
    /**
     * Output only. The country (ISO-3166 format) registered for the inventory feed that contains the product clicked on.
     */
    productCountryCode?: string | null;
    /**
     * Output only. The ID of the product clicked on.
     */
    productId?: string | null;
    /**
     * Output only. The language (ISO-639-1) that has been set for the Merchant Center feed containing data about the product.
     */
    productLanguageCode?: string | null;
    /**
     * Output only. The store in the Local Inventory Ad that was clicked on. This should match the store IDs used in your local products feed.
     */
    productStoreId?: string | null;
    /**
     * Output only. The resource name of the visit. Visit resource names have the form: `customers/{customer_id\}/visits/{ad_group_id\}~{criterion_id\}~{ds_visit_id\}`
     */
    resourceName?: string | null;
    /**
     * Output only. The timestamp of the visit event. The timestamp is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss" format.
     */
    visitDateTime?: string | null;
  }
  /**
   * A webpage view.
   */
  export interface Schema$GoogleAdsSearchads360V0Resources__WebpageView {
    /**
     * Output only. The resource name of the webpage view. Webpage view resource names have the form: `customers/{customer_id\}/webpageViews/{ad_group_id\}~{criterion_id\}`
     */
    resourceName?: string | null;
  }
  /**
   * Message for conversion custom dimension header.
   */
  export interface Schema$GoogleAdsSearchads360V0Services__ConversionCustomDimensionHeader {
    /**
     * The conversion custom dimension ID.
     */
    id?: string | null;
    /**
     * The user defined name of the conversion custom dimension.
     */
    name?: string | null;
  }
  /**
   * Message for conversion custom metric header.
   */
  export interface Schema$GoogleAdsSearchads360V0Services__ConversionCustomMetricHeader {
    /**
     * The conversion custom metric ID.
     */
    id?: string | null;
    /**
     * The user defined name of the conversion custom metric.
     */
    name?: string | null;
  }
  /**
   * Message for custom column header.
   */
  export interface Schema$GoogleAdsSearchads360V0Services__CustomColumnHeader {
    /**
     * The custom column ID.
     */
    id?: string | null;
    /**
     * The user defined name of the custom column.
     */
    name?: string | null;
    /**
     * True when the custom column references metrics.
     */
    referencesMetrics?: boolean | null;
  }
  /**
   * Response message for CustomerService.ListAccessibleCustomers.
   */
  export interface Schema$GoogleAdsSearchads360V0Services__ListAccessibleCustomersResponse {
    /**
     * Resource name of customers directly accessible by the user authenticating the call.
     */
    resourceNames?: string[] | null;
  }
  /**
   * Response message for fetching all custom columns associated with a customer.
   */
  export interface Schema$GoogleAdsSearchads360V0Services__ListCustomColumnsResponse {
    /**
     * The CustomColumns owned by the provided customer.
     */
    customColumns?: Schema$GoogleAdsSearchads360V0Resources__CustomColumn[];
  }
  /**
   * Message for raw event conversion dimension header.
   */
  export interface Schema$GoogleAdsSearchads360V0Services__RawEventConversionDimensionHeader {
    /**
     * The conversion custom variable ID.
     */
    id?: string | null;
    /**
     * The user defined name of the raw event dimension.
     */
    name?: string | null;
  }
  /**
   * Message for raw event conversion metric header.
   */
  export interface Schema$GoogleAdsSearchads360V0Services__RawEventConversionMetricHeader {
    /**
     * The conversion custom variable ID.
     */
    id?: string | null;
    /**
     * The user defined name of the raw event metric.
     */
    name?: string | null;
  }
  /**
   * A returned row from the query.
   */
  export interface Schema$GoogleAdsSearchads360V0Services__SearchAds360Row {
    /**
     * The accessible bidding strategy referenced in the query.
     */
    accessibleBiddingStrategy?: Schema$GoogleAdsSearchads360V0Resources__AccessibleBiddingStrategy;
    /**
     * The ad group referenced in the query.
     */
    adGroup?: Schema$GoogleAdsSearchads360V0Resources__AdGroup;
    /**
     * The ad referenced in the query.
     */
    adGroupAd?: Schema$GoogleAdsSearchads360V0Resources__AdGroupAd;
    /**
     * The ad group ad effective label referenced in the query.
     */
    adGroupAdEffectiveLabel?: Schema$GoogleAdsSearchads360V0Resources__AdGroupAdEffectiveLabel;
    /**
     * The ad group ad label referenced in the query.
     */
    adGroupAdLabel?: Schema$GoogleAdsSearchads360V0Resources__AdGroupAdLabel;
    /**
     * The ad group asset referenced in the query.
     */
    adGroupAsset?: Schema$GoogleAdsSearchads360V0Resources__AdGroupAsset;
    /**
     * The ad group asset set referenced in the query.
     */
    adGroupAssetSet?: Schema$GoogleAdsSearchads360V0Resources__AdGroupAssetSet;
    /**
     * The ad group audience view referenced in the query.
     */
    adGroupAudienceView?: Schema$GoogleAdsSearchads360V0Resources__AdGroupAudienceView;
    /**
     * The bid modifier referenced in the query.
     */
    adGroupBidModifier?: Schema$GoogleAdsSearchads360V0Resources__AdGroupBidModifier;
    /**
     * The criterion referenced in the query.
     */
    adGroupCriterion?: Schema$GoogleAdsSearchads360V0Resources__AdGroupCriterion;
    /**
     * The ad group criterion effective label referenced in the query.
     */
    adGroupCriterionEffectiveLabel?: Schema$GoogleAdsSearchads360V0Resources__AdGroupCriterionEffectiveLabel;
    /**
     * The ad group criterion label referenced in the query.
     */
    adGroupCriterionLabel?: Schema$GoogleAdsSearchads360V0Resources__AdGroupCriterionLabel;
    /**
     * The ad group effective label referenced in the query.
     */
    adGroupEffectiveLabel?: Schema$GoogleAdsSearchads360V0Resources__AdGroupEffectiveLabel;
    /**
     * The ad group label referenced in the query.
     */
    adGroupLabel?: Schema$GoogleAdsSearchads360V0Resources__AdGroupLabel;
    /**
     * The age range view referenced in the query.
     */
    ageRangeView?: Schema$GoogleAdsSearchads360V0Resources__AgeRangeView;
    /**
     * The asset referenced in the query.
     */
    asset?: Schema$GoogleAdsSearchads360V0Resources__Asset;
    /**
     * The asset group referenced in the query.
     */
    assetGroup?: Schema$GoogleAdsSearchads360V0Resources__AssetGroup;
    /**
     * The asset group asset referenced in the query.
     */
    assetGroupAsset?: Schema$GoogleAdsSearchads360V0Resources__AssetGroupAsset;
    /**
     * The asset group listing group filter referenced in the query.
     */
    assetGroupListingGroupFilter?: Schema$GoogleAdsSearchads360V0Resources__AssetGroupListingGroupFilter;
    /**
     * The asset group signal referenced in the query.
     */
    assetGroupSignal?: Schema$GoogleAdsSearchads360V0Resources__AssetGroupSignal;
    /**
     * The asset group top combination view referenced in the query.
     */
    assetGroupTopCombinationView?: Schema$GoogleAdsSearchads360V0Resources__AssetGroupTopCombinationView;
    /**
     * The asset set referenced in the query.
     */
    assetSet?: Schema$GoogleAdsSearchads360V0Resources__AssetSet;
    /**
     * The asset set asset referenced in the query.
     */
    assetSetAsset?: Schema$GoogleAdsSearchads360V0Resources__AssetSetAsset;
    /**
     * The Audience referenced in the query.
     */
    audience?: Schema$GoogleAdsSearchads360V0Resources__Audience;
    /**
     * The bidding strategy referenced in the query.
     */
    biddingStrategy?: Schema$GoogleAdsSearchads360V0Resources__BiddingStrategy;
    /**
     * The campaign referenced in the query.
     */
    campaign?: Schema$GoogleAdsSearchads360V0Resources__Campaign;
    /**
     * The campaign asset referenced in the query.
     */
    campaignAsset?: Schema$GoogleAdsSearchads360V0Resources__CampaignAsset;
    /**
     * The campaign asset set referenced in the query.
     */
    campaignAssetSet?: Schema$GoogleAdsSearchads360V0Resources__CampaignAssetSet;
    /**
     * The campaign audience view referenced in the query.
     */
    campaignAudienceView?: Schema$GoogleAdsSearchads360V0Resources__CampaignAudienceView;
    /**
     * The campaign budget referenced in the query.
     */
    campaignBudget?: Schema$GoogleAdsSearchads360V0Resources__CampaignBudget;
    /**
     * The campaign criterion referenced in the query.
     */
    campaignCriterion?: Schema$GoogleAdsSearchads360V0Resources__CampaignCriterion;
    /**
     * The campaign effective label referenced in the query.
     */
    campaignEffectiveLabel?: Schema$GoogleAdsSearchads360V0Resources__CampaignEffectiveLabel;
    /**
     * The campaign label referenced in the query.
     */
    campaignLabel?: Schema$GoogleAdsSearchads360V0Resources__CampaignLabel;
    /**
     * The cart data sales view referenced in the query.
     */
    cartDataSalesView?: Schema$GoogleAdsSearchads360V0Resources__CartDataSalesView;
    /**
     * The event level conversion referenced in the query.
     */
    conversion?: Schema$GoogleAdsSearchads360V0Resources__Conversion;
    /**
     * The conversion action referenced in the query.
     */
    conversionAction?: Schema$GoogleAdsSearchads360V0Resources__ConversionAction;
    /**
     * The conversion custom variable referenced in the query.
     */
    conversionCustomVariable?: Schema$GoogleAdsSearchads360V0Resources__ConversionCustomVariable;
    /**
     * The custom columns.
     */
    customColumns?: Schema$GoogleAdsSearchads360V0Common__Value[];
    /**
     * The customer referenced in the query.
     */
    customer?: Schema$GoogleAdsSearchads360V0Resources__Customer;
    /**
     * The customer asset referenced in the query.
     */
    customerAsset?: Schema$GoogleAdsSearchads360V0Resources__CustomerAsset;
    /**
     * The customer asset set referenced in the query.
     */
    customerAssetSet?: Schema$GoogleAdsSearchads360V0Resources__CustomerAssetSet;
    /**
     * The CustomerClient referenced in the query.
     */
    customerClient?: Schema$GoogleAdsSearchads360V0Resources__CustomerClient;
    /**
     * The CustomerManagerLink referenced in the query.
     */
    customerManagerLink?: Schema$GoogleAdsSearchads360V0Resources__CustomerManagerLink;
    /**
     * The dynamic search ads search term view referenced in the query.
     */
    dynamicSearchAdsSearchTermView?: Schema$GoogleAdsSearchads360V0Resources__DynamicSearchAdsSearchTermView;
    /**
     * The gender view referenced in the query.
     */
    genderView?: Schema$GoogleAdsSearchads360V0Resources__GenderView;
    /**
     * The geo target constant referenced in the query.
     */
    geoTargetConstant?: Schema$GoogleAdsSearchads360V0Resources__GeoTargetConstant;
    /**
     * The keyword view referenced in the query.
     */
    keywordView?: Schema$GoogleAdsSearchads360V0Resources__KeywordView;
    /**
     * The label referenced in the query.
     */
    label?: Schema$GoogleAdsSearchads360V0Resources__Label;
    /**
     * The language constant referenced in the query.
     */
    languageConstant?: Schema$GoogleAdsSearchads360V0Resources__LanguageConstant;
    /**
     * The location view referenced in the query.
     */
    locationView?: Schema$GoogleAdsSearchads360V0Resources__LocationView;
    /**
     * The metrics.
     */
    metrics?: Schema$GoogleAdsSearchads360V0Common__Metrics;
    /**
     * The Product Bidding Category referenced in the query.
     */
    productBiddingCategoryConstant?: Schema$GoogleAdsSearchads360V0Resources__ProductBiddingCategoryConstant;
    /**
     * The product group view referenced in the query.
     */
    productGroupView?: Schema$GoogleAdsSearchads360V0Resources__ProductGroupView;
    /**
     * The segments.
     */
    segments?: Schema$GoogleAdsSearchads360V0Common__Segments;
    /**
     * The shopping performance view referenced in the query.
     */
    shoppingPerformanceView?: Schema$GoogleAdsSearchads360V0Resources__ShoppingPerformanceView;
    /**
     * The user list referenced in the query.
     */
    userList?: Schema$GoogleAdsSearchads360V0Resources__UserList;
    /**
     * The user location view referenced in the query.
     */
    userLocationView?: Schema$GoogleAdsSearchads360V0Resources__UserLocationView;
    /**
     * The event level visit referenced in the query.
     */
    visit?: Schema$GoogleAdsSearchads360V0Resources__Visit;
    /**
     * The webpage view referenced in the query.
     */
    webpageView?: Schema$GoogleAdsSearchads360V0Resources__WebpageView;
  }
  /**
   * Request message for SearchAds360FieldService.SearchSearchAds360Fields.
   */
  export interface Schema$GoogleAdsSearchads360V0Services__SearchSearchAds360FieldsRequest {
    /**
     * Number of elements to retrieve in a single page. When too large a page is requested, the server may decide to further limit the number of returned resources.
     */
    pageSize?: number | null;
    /**
     * Token of the page to retrieve. If not specified, the first page of results will be returned. Use the value obtained from `next_page_token` in the previous response in order to request the next page of results.
     */
    pageToken?: string | null;
    /**
     * Required. The query string.
     */
    query?: string | null;
  }
  /**
   * Response message for SearchAds360FieldService.SearchSearchAds360Fields.
   */
  export interface Schema$GoogleAdsSearchads360V0Services__SearchSearchAds360FieldsResponse {
    /**
     * Pagination token used to retrieve the next page of results. Pass the content of this string as the `page_token` attribute of the next request. `next_page_token` is not returned for the last page.
     */
    nextPageToken?: string | null;
    /**
     * The list of fields that matched the query.
     */
    results?: Schema$GoogleAdsSearchads360V0Resources__SearchAds360Field[];
    /**
     * Total number of results that match the query ignoring the LIMIT clause.
     */
    totalResultsCount?: string | null;
  }
  /**
   * Request message for SearchAds360Service.Search.
   */
  export interface Schema$GoogleAdsSearchads360V0Services__SearchSearchAds360Request {
    /**
     * Number of elements to retrieve in a single page. When too large a page is requested, the server may decide to further limit the number of returned resources.
     */
    pageSize?: number | null;
    /**
     * Token of the page to retrieve. If not specified, the first page of results will be returned. Use the value obtained from `next_page_token` in the previous response in order to request the next page of results.
     */
    pageToken?: string | null;
    /**
     * Required. The query string.
     */
    query?: string | null;
    /**
     * If true, the total number of results that match the query ignoring the LIMIT clause will be included in the response. Default is false.
     */
    returnTotalResultsCount?: boolean | null;
    /**
     * Determines whether a summary row will be returned. By default, summary row is not returned. If requested, the summary row will be sent in a response by itself after all other query results are returned.
     */
    summaryRowSetting?: string | null;
    /**
     * If true, the request is validated but not executed.
     */
    validateOnly?: boolean | null;
  }
  /**
   * Response message for SearchAds360Service.Search.
   */
  export interface Schema$GoogleAdsSearchads360V0Services__SearchSearchAds360Response {
    /**
     * The headers of the conversion custom dimensions in the results.
     */
    conversionCustomDimensionHeaders?: Schema$GoogleAdsSearchads360V0Services__ConversionCustomDimensionHeader[];
    /**
     * The headers of the conversion custom metrics in the results.
     */
    conversionCustomMetricHeaders?: Schema$GoogleAdsSearchads360V0Services__ConversionCustomMetricHeader[];
    /**
     * The headers of the custom columns in the results.
     */
    customColumnHeaders?: Schema$GoogleAdsSearchads360V0Services__CustomColumnHeader[];
    /**
     * FieldMask that represents what fields were requested by the user.
     */
    fieldMask?: string | null;
    /**
     * Pagination token used to retrieve the next page of results. Pass the content of this string as the `page_token` attribute of the next request. `next_page_token` is not returned for the last page.
     */
    nextPageToken?: string | null;
    /**
     * The headers of the raw event conversion dimensions in the results.
     */
    rawEventConversionDimensionHeaders?: Schema$GoogleAdsSearchads360V0Services__RawEventConversionDimensionHeader[];
    /**
     * The headers of the raw event conversion metrics in the results.
     */
    rawEventConversionMetricHeaders?: Schema$GoogleAdsSearchads360V0Services__RawEventConversionMetricHeader[];
    /**
     * The list of rows that matched the query.
     */
    results?: Schema$GoogleAdsSearchads360V0Services__SearchAds360Row[];
    /**
     * Summary row that contains summary of metrics in results. Summary of metrics means aggregation of metrics across all results, here aggregation could be sum, average, rate, etc.
     */
    summaryRow?: Schema$GoogleAdsSearchads360V0Services__SearchAds360Row;
    /**
     * Total number of results that match the query ignoring the LIMIT clause.
     */
    totalResultsCount?: string | null;
  }

  export class Resource$Customers {
    context: APIRequestContext;
    customColumns: Resource$Customers$Customcolumns;
    searchAds360: Resource$Customers$Searchads360;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.customColumns = new Resource$Customers$Customcolumns(this.context);
      this.searchAds360 = new Resource$Customers$Searchads360(this.context);
    }

    /**
     * Returns resource names of customers directly accessible by the user authenticating the call. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/searchads360.googleapis.com
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
     * const searchads360 = google.searchads360('v0');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/doubleclicksearch'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await searchads360.customers.listAccessibleCustomers({});
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "resourceNames": []
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
    listAccessibleCustomers(
      params: Params$Resource$Customers$Listaccessiblecustomers,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    listAccessibleCustomers(
      params?: Params$Resource$Customers$Listaccessiblecustomers,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleAdsSearchads360V0Services__ListAccessibleCustomersResponse>
    >;
    listAccessibleCustomers(
      params: Params$Resource$Customers$Listaccessiblecustomers,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listAccessibleCustomers(
      params: Params$Resource$Customers$Listaccessiblecustomers,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAdsSearchads360V0Services__ListAccessibleCustomersResponse>,
      callback: BodyResponseCallback<Schema$GoogleAdsSearchads360V0Services__ListAccessibleCustomersResponse>
    ): void;
    listAccessibleCustomers(
      params: Params$Resource$Customers$Listaccessiblecustomers,
      callback: BodyResponseCallback<Schema$GoogleAdsSearchads360V0Services__ListAccessibleCustomersResponse>
    ): void;
    listAccessibleCustomers(
      callback: BodyResponseCallback<Schema$GoogleAdsSearchads360V0Services__ListAccessibleCustomersResponse>
    ): void;
    listAccessibleCustomers(
      paramsOrCallback?:
        | Params$Resource$Customers$Listaccessiblecustomers
        | BodyResponseCallback<Schema$GoogleAdsSearchads360V0Services__ListAccessibleCustomersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAdsSearchads360V0Services__ListAccessibleCustomersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAdsSearchads360V0Services__ListAccessibleCustomersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleAdsSearchads360V0Services__ListAccessibleCustomersResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Listaccessiblecustomers;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Listaccessiblecustomers;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://searchads360.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v0/customers:listAccessibleCustomers').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAdsSearchads360V0Services__ListAccessibleCustomersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAdsSearchads360V0Services__ListAccessibleCustomersResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Customers$Listaccessiblecustomers
    extends StandardParameters {}

  export class Resource$Customers$Customcolumns {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns the requested custom column in full detail.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/searchads360.googleapis.com
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
     * const searchads360 = google.searchads360('v0');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/doubleclicksearch'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await searchads360.customers.customColumns.get({
     *     // Required. The resource name of the custom column to fetch.
     *     resourceName: 'customers/my-customer/customColumns/my-customColumn',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "id": "my_id",
     *   //   "name": "my_name",
     *   //   "queryable": false,
     *   //   "referencedSystemColumns": [],
     *   //   "referencesAttributes": false,
     *   //   "referencesMetrics": false,
     *   //   "renderType": "my_renderType",
     *   //   "resourceName": "my_resourceName",
     *   //   "valueType": "my_valueType"
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
      params: Params$Resource$Customers$Customcolumns$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Customers$Customcolumns$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleAdsSearchads360V0Resources__CustomColumn>
    >;
    get(
      params: Params$Resource$Customers$Customcolumns$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Customers$Customcolumns$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAdsSearchads360V0Resources__CustomColumn>,
      callback: BodyResponseCallback<Schema$GoogleAdsSearchads360V0Resources__CustomColumn>
    ): void;
    get(
      params: Params$Resource$Customers$Customcolumns$Get,
      callback: BodyResponseCallback<Schema$GoogleAdsSearchads360V0Resources__CustomColumn>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleAdsSearchads360V0Resources__CustomColumn>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Customers$Customcolumns$Get
        | BodyResponseCallback<Schema$GoogleAdsSearchads360V0Resources__CustomColumn>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAdsSearchads360V0Resources__CustomColumn>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAdsSearchads360V0Resources__CustomColumn>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleAdsSearchads360V0Resources__CustomColumn>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Customcolumns$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Customcolumns$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://searchads360.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v0/{+resourceName}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['resourceName'],
        pathParams: ['resourceName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAdsSearchads360V0Resources__CustomColumn>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAdsSearchads360V0Resources__CustomColumn>(
          parameters
        );
      }
    }

    /**
     * Returns all the custom columns associated with the customer in full detail.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/searchads360.googleapis.com
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
     * const searchads360 = google.searchads360('v0');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/doubleclicksearch'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await searchads360.customers.customColumns.list({
     *     // Required. The ID of the customer to apply the CustomColumn list operation to.
     *     customerId: '[^/]+',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "customColumns": []
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
      params: Params$Resource$Customers$Customcolumns$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Customers$Customcolumns$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleAdsSearchads360V0Services__ListCustomColumnsResponse>
    >;
    list(
      params: Params$Resource$Customers$Customcolumns$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Customers$Customcolumns$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAdsSearchads360V0Services__ListCustomColumnsResponse>,
      callback: BodyResponseCallback<Schema$GoogleAdsSearchads360V0Services__ListCustomColumnsResponse>
    ): void;
    list(
      params: Params$Resource$Customers$Customcolumns$List,
      callback: BodyResponseCallback<Schema$GoogleAdsSearchads360V0Services__ListCustomColumnsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAdsSearchads360V0Services__ListCustomColumnsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Customers$Customcolumns$List
        | BodyResponseCallback<Schema$GoogleAdsSearchads360V0Services__ListCustomColumnsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAdsSearchads360V0Services__ListCustomColumnsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAdsSearchads360V0Services__ListCustomColumnsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleAdsSearchads360V0Services__ListCustomColumnsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Customcolumns$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Customcolumns$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://searchads360.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v0/customers/{+customerId}/customColumns'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['customerId'],
        pathParams: ['customerId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAdsSearchads360V0Services__ListCustomColumnsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAdsSearchads360V0Services__ListCustomColumnsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Customers$Customcolumns$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the custom column to fetch.
     */
    resourceName?: string;
  }
  export interface Params$Resource$Customers$Customcolumns$List
    extends StandardParameters {
    /**
     * Required. The ID of the customer to apply the CustomColumn list operation to.
     */
    customerId?: string;
  }

  export class Resource$Customers$Searchads360 {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns all rows that match the search query. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QueryError]() [QuotaError]() [RequestError]()
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/searchads360.googleapis.com
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
     * const searchads360 = google.searchads360('v0');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/doubleclicksearch'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await searchads360.customers.searchAds360.search({
     *     // Required. The ID of the customer being queried.
     *     customerId: '[^/]+',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "pageSize": 0,
     *       //   "pageToken": "my_pageToken",
     *       //   "query": "my_query",
     *       //   "returnTotalResultsCount": false,
     *       //   "summaryRowSetting": "my_summaryRowSetting",
     *       //   "validateOnly": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "conversionCustomDimensionHeaders": [],
     *   //   "conversionCustomMetricHeaders": [],
     *   //   "customColumnHeaders": [],
     *   //   "fieldMask": "my_fieldMask",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "rawEventConversionDimensionHeaders": [],
     *   //   "rawEventConversionMetricHeaders": [],
     *   //   "results": [],
     *   //   "summaryRow": {},
     *   //   "totalResultsCount": "my_totalResultsCount"
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
    search(
      params: Params$Resource$Customers$Searchads360$Search,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    search(
      params?: Params$Resource$Customers$Searchads360$Search,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleAdsSearchads360V0Services__SearchSearchAds360Response>
    >;
    search(
      params: Params$Resource$Customers$Searchads360$Search,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    search(
      params: Params$Resource$Customers$Searchads360$Search,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAdsSearchads360V0Services__SearchSearchAds360Response>,
      callback: BodyResponseCallback<Schema$GoogleAdsSearchads360V0Services__SearchSearchAds360Response>
    ): void;
    search(
      params: Params$Resource$Customers$Searchads360$Search,
      callback: BodyResponseCallback<Schema$GoogleAdsSearchads360V0Services__SearchSearchAds360Response>
    ): void;
    search(
      callback: BodyResponseCallback<Schema$GoogleAdsSearchads360V0Services__SearchSearchAds360Response>
    ): void;
    search(
      paramsOrCallback?:
        | Params$Resource$Customers$Searchads360$Search
        | BodyResponseCallback<Schema$GoogleAdsSearchads360V0Services__SearchSearchAds360Response>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAdsSearchads360V0Services__SearchSearchAds360Response>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAdsSearchads360V0Services__SearchSearchAds360Response>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleAdsSearchads360V0Services__SearchSearchAds360Response>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Searchads360$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Searchads360$Search;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://searchads360.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v0/customers/{+customerId}/searchAds360:search'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['customerId'],
        pathParams: ['customerId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAdsSearchads360V0Services__SearchSearchAds360Response>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAdsSearchads360V0Services__SearchSearchAds360Response>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Customers$Searchads360$Search
    extends StandardParameters {
    /**
     * Required. The ID of the customer being queried.
     */
    customerId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAdsSearchads360V0Services__SearchSearchAds360Request;
  }

  export class Resource$Searchads360fields {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns just the requested field. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/searchads360.googleapis.com
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
     * const searchads360 = google.searchads360('v0');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/doubleclicksearch'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await searchads360.searchAds360Fields.get({
     *     // Required. The resource name of the field to get.
     *     resourceName: 'searchAds360Fields/my-searchAds360Field',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attributeResources": [],
     *   //   "category": "my_category",
     *   //   "dataType": "my_dataType",
     *   //   "enumValues": [],
     *   //   "filterable": false,
     *   //   "isRepeated": false,
     *   //   "metrics": [],
     *   //   "name": "my_name",
     *   //   "resourceName": "my_resourceName",
     *   //   "segments": [],
     *   //   "selectable": false,
     *   //   "selectableWith": [],
     *   //   "sortable": false,
     *   //   "typeUrl": "my_typeUrl"
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
      params: Params$Resource$Searchads360fields$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Searchads360fields$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleAdsSearchads360V0Resources__SearchAds360Field>
    >;
    get(
      params: Params$Resource$Searchads360fields$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Searchads360fields$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAdsSearchads360V0Resources__SearchAds360Field>,
      callback: BodyResponseCallback<Schema$GoogleAdsSearchads360V0Resources__SearchAds360Field>
    ): void;
    get(
      params: Params$Resource$Searchads360fields$Get,
      callback: BodyResponseCallback<Schema$GoogleAdsSearchads360V0Resources__SearchAds360Field>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleAdsSearchads360V0Resources__SearchAds360Field>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Searchads360fields$Get
        | BodyResponseCallback<Schema$GoogleAdsSearchads360V0Resources__SearchAds360Field>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAdsSearchads360V0Resources__SearchAds360Field>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAdsSearchads360V0Resources__SearchAds360Field>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleAdsSearchads360V0Resources__SearchAds360Field>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Searchads360fields$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Searchads360fields$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://searchads360.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v0/{+resourceName}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['resourceName'],
        pathParams: ['resourceName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAdsSearchads360V0Resources__SearchAds360Field>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAdsSearchads360V0Resources__SearchAds360Field>(
          parameters
        );
      }
    }

    /**
     * Returns all fields that match the search [query](/search-ads/reporting/concepts/field-service#use_a_query_to_get_field_details). List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QueryError]() [QuotaError]() [RequestError]()
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/searchads360.googleapis.com
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
     * const searchads360 = google.searchads360('v0');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/doubleclicksearch'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await searchads360.searchAds360Fields.search({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "pageSize": 0,
     *       //   "pageToken": "my_pageToken",
     *       //   "query": "my_query"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "results": [],
     *   //   "totalResultsCount": "my_totalResultsCount"
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
    search(
      params: Params$Resource$Searchads360fields$Search,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    search(
      params?: Params$Resource$Searchads360fields$Search,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleAdsSearchads360V0Services__SearchSearchAds360FieldsResponse>
    >;
    search(
      params: Params$Resource$Searchads360fields$Search,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    search(
      params: Params$Resource$Searchads360fields$Search,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAdsSearchads360V0Services__SearchSearchAds360FieldsResponse>,
      callback: BodyResponseCallback<Schema$GoogleAdsSearchads360V0Services__SearchSearchAds360FieldsResponse>
    ): void;
    search(
      params: Params$Resource$Searchads360fields$Search,
      callback: BodyResponseCallback<Schema$GoogleAdsSearchads360V0Services__SearchSearchAds360FieldsResponse>
    ): void;
    search(
      callback: BodyResponseCallback<Schema$GoogleAdsSearchads360V0Services__SearchSearchAds360FieldsResponse>
    ): void;
    search(
      paramsOrCallback?:
        | Params$Resource$Searchads360fields$Search
        | BodyResponseCallback<Schema$GoogleAdsSearchads360V0Services__SearchSearchAds360FieldsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAdsSearchads360V0Services__SearchSearchAds360FieldsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAdsSearchads360V0Services__SearchSearchAds360FieldsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleAdsSearchads360V0Services__SearchSearchAds360FieldsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Searchads360fields$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Searchads360fields$Search;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://searchads360.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v0/searchAds360Fields:search').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAdsSearchads360V0Services__SearchSearchAds360FieldsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAdsSearchads360V0Services__SearchSearchAds360FieldsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Searchads360fields$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the field to get.
     */
    resourceName?: string;
  }
  export interface Params$Resource$Searchads360fields$Search
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAdsSearchads360V0Services__SearchSearchAds360FieldsRequest;
  }
}
