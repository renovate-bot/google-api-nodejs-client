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

export namespace admob_v1 {
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
   * AdMob API
   *
   * The AdMob API allows publishers to programmatically get information about their AdMob account.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const admob = google.admob('v1');
   * ```
   */
  export class Admob {
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
   * Describes an AdMob ad unit.
   */
  export interface Schema$AdUnit {
    /**
     * AdFormat of the ad unit. Possible values are as follows: "APP_OPEN" - App Open ad format. "BANNER" - Banner ad format. "BANNER_INTERSTITIAL" - Legacy format that can be used as either banner or interstitial. This format can no longer be created but can be targeted by mediation groups. "INTERSTITIAL" - A full screen ad. Supported ad types are "RICH_MEDIA" and "VIDEO". "NATIVE" - Native ad format. "REWARDED" - An ad that, once viewed, gets a callback verifying the view so that a reward can be given to the user. Supported ad types are "RICH_MEDIA" (interactive) and video where video can not be excluded. "REWARDED_INTERSTITIAL" - Rewarded Interstitial ad format. Only supports video ad type. See https://support.google.com/admob/answer/9884467.
     */
    adFormat?: string | null;
    /**
     * Ad media type supported by this ad unit. Possible values as follows: "RICH_MEDIA" - Text, image, and other non-video media. "VIDEO" - Video media.
     */
    adTypes?: string[] | null;
    /**
     * The externally visible ID of the ad unit which can be used to integrate with the AdMob SDK. This is a read only property. Example: ca-app-pub-9876543210987654/0123456789
     */
    adUnitId?: string | null;
    /**
     * The externally visible ID of the app this ad unit is associated with. Example: ca-app-pub-9876543210987654~0123456789
     */
    appId?: string | null;
    /**
     * The display name of the ad unit as shown in the AdMob UI, which is provided by the user. The maximum length allowed is 80 characters.
     */
    displayName?: string | null;
    /**
     * Resource name for this ad unit. Format is accounts/{publisher_id\}/adUnits/{ad_unit_id_fragment\} Example: accounts/pub-9876543210987654/adUnits/0123456789
     */
    name?: string | null;
  }
  /**
   * Describes an AdMob app for a specific platform (For example: Android or iOS).
   */
  export interface Schema$App {
    /**
     * Output only. The approval state for the app. The field is read-only.
     */
    appApprovalState?: string | null;
    /**
     * The externally visible ID of the app which can be used to integrate with the AdMob SDK. This is a read only property. Example: ca-app-pub-9876543210987654~0123456789
     */
    appId?: string | null;
    /**
     * Immutable. The information for an app that is linked to an app store. This field is present if and only if the app is linked to an app store.
     */
    linkedAppInfo?: Schema$AppLinkedAppInfo;
    /**
     * The information for an app that is not linked to any app store. After an app is linked, this information is still retrivable. If no name is provided for the app upon creation, a placeholder name will be used.
     */
    manualAppInfo?: Schema$AppManualAppInfo;
    /**
     * Resource name for this app. Format is accounts/{publisher_id\}/apps/{app_id_fragment\} Example: accounts/pub-9876543210987654/apps/0123456789
     */
    name?: string | null;
    /**
     * Describes the platform of the app. Limited to "IOS" and "ANDROID".
     */
    platform?: string | null;
  }
  /**
   * Information from the app store if the app is linked to an app store.
   */
  export interface Schema$AppLinkedAppInfo {
    /**
     * The app store ID of the app; present if and only if the app is linked to an app store. If the app is added to the Google Play store, it will be the application ID of the app. For example: "com.example.myapp". See https://developer.android.com/studio/build/application-id. If the app is added to the Apple App Store, it will be app store ID. For example "105169111". Note that setting the app store id is considered an irreversible action. Once an app is linked, it cannot be unlinked.
     */
    appStoreId?: string | null;
    /**
     * Output only. Display name of the app as it appears in the app store. This is an output-only field, and may be empty if the app cannot be found in the store.
     */
    displayName?: string | null;
  }
  /**
   * Information provided for manual apps which are not linked to an application store (Example: Google Play, App Store).
   */
  export interface Schema$AppManualAppInfo {
    /**
     * The display name of the app as shown in the AdMob UI, which is provided by the user. The maximum length allowed is 80 characters.
     */
    displayName?: string | null;
  }
  /**
   * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
   */
  export interface Schema$Date {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | null;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | null;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | null;
  }
  /**
   * Specification of a single date range. Both dates are inclusive.
   */
  export interface Schema$DateRange {
    /**
     * End date of the date range, inclusive. Must be greater than or equal to the start date.
     */
    endDate?: Schema$Date;
    /**
     * Start date of the date range, inclusive. Must be less than or equal to the end date.
     */
    startDate?: Schema$Date;
  }
  /**
   * Request to generate an AdMob Mediation report.
   */
  export interface Schema$GenerateMediationReportRequest {
    /**
     * Network report specification.
     */
    reportSpec?: Schema$MediationReportSpec;
  }
  /**
   * The streaming response for the AdMob Mediation report where the first response contains the report header, then a stream of row responses, and finally a footer as the last response message. For example: [{ "header": { "date_range": { "start_date": {"year": 2018, "month": 9, "day": 1\}, "end_date": {"year": 2018, "month": 9, "day": 1\} \}, "localization_settings": { "currency_code": "USD", "language_code": "en-US" \} \} \}, { "row": { "dimension_values": { "DATE": {"value": "20180918"\}, "APP": { "value": "ca-app-pub-8123415297019784~1001342552", "display_label": "My app name!" \} \}, "metric_values": { "ESTIMATED_EARNINGS": {"decimal_value": "1324746"\} \} \} \}, { "footer": {"matching_row_count": 1\} \}]
   */
  export interface Schema$GenerateMediationReportResponse {
    /**
     * Additional information about the generated report, such as warnings about the data.
     */
    footer?: Schema$ReportFooter;
    /**
     * Report generation settings that describes the report contents, such as the report date range and localization settings.
     */
    header?: Schema$ReportHeader;
    /**
     * Actual report data.
     */
    row?: Schema$ReportRow;
  }
  /**
   * Request to generate an AdMob Network report.
   */
  export interface Schema$GenerateNetworkReportRequest {
    /**
     * Network report specification.
     */
    reportSpec?: Schema$NetworkReportSpec;
  }
  /**
   * The streaming response for the AdMob Network report where the first response contains the report header, then a stream of row responses, and finally a footer as the last response message. For example: [{ "header": { "dateRange": { "startDate": {"year": 2018, "month": 9, "day": 1\}, "endDate": {"year": 2018, "month": 9, "day": 1\} \}, "localizationSettings": { "currencyCode": "USD", "languageCode": "en-US" \} \} \}, { "row": { "dimensionValues": { "DATE": {"value": "20180918"\}, "APP": { "value": "ca-app-pub-8123415297019784~1001342552", displayLabel: "My app name!" \} \}, "metricValues": { "ESTIMATED_EARNINGS": {"microsValue": 6500000\} \} \} \}, { "footer": {"matchingRowCount": 1\} \}]
   */
  export interface Schema$GenerateNetworkReportResponse {
    /**
     * Additional information about the generated report, such as warnings about the data.
     */
    footer?: Schema$ReportFooter;
    /**
     * Report generation settings that describes the report contents, such as the report date range and localization settings.
     */
    header?: Schema$ReportHeader;
    /**
     * Actual report data.
     */
    row?: Schema$ReportRow;
  }
  /**
   * Response for the ad units list request.
   */
  export interface Schema$ListAdUnitsResponse {
    /**
     * The resulting ad units for the requested account.
     */
    adUnits?: Schema$AdUnit[];
    /**
     * If not empty, indicates that there may be more ad units for the request; this value should be passed in a new `ListAdUnitsRequest`.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response for the apps list request.
   */
  export interface Schema$ListAppsResponse {
    /**
     * The resulting apps for the requested account.
     */
    apps?: Schema$App[];
    /**
     * If not empty, indicates that there may be more apps for the request; this value should be passed in a new `ListAppsRequest`.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response for the publisher account list request.
   */
  export interface Schema$ListPublisherAccountsResponse {
    /**
     * Publisher that the client credentials can access.
     */
    account?: Schema$PublisherAccount[];
    /**
     * If not empty, indicates that there might be more accounts for the request; you must pass this value in a new `ListPublisherAccountsRequest`.
     */
    nextPageToken?: string | null;
  }
  /**
   * Localization settings for reports, such as currency and language. It affects how metrics are calculated.
   */
  export interface Schema$LocalizationSettings {
    /**
     * Currency code of the earning related metrics, which is the 3-letter code defined in ISO 4217. The daily average rate is used for the currency conversion. Defaults to the account currency code if unspecified.
     */
    currencyCode?: string | null;
    /**
     * Language used for any localized text, such as some dimension value display labels. The language tag defined in the IETF BCP47. Defaults to 'en-US' if unspecified.
     */
    languageCode?: string | null;
  }
  /**
   * The specification for generating an AdMob Mediation report. For example, the specification to get observed ECPM sliced by ad source and app for the 'US' and 'CN' countries can look like the following example: { "date_range": { "start_date": {"year": 2021, "month": 9, "day": 1\}, "end_date": {"year": 2021, "month": 9, "day": 30\} \}, "dimensions": ["AD_SOURCE", "APP", "COUNTRY"], "metrics": ["OBSERVED_ECPM"], "dimension_filters": [ { "dimension": "COUNTRY", "matches_any": {"values": [{"value": "US", "value": "CN"\}]\} \} ], "sort_conditions": [ {"dimension":"APP", order: "ASCENDING"\} ], "localization_settings": { "currency_code": "USD", "language_code": "en-US" \} \} For a better understanding, you can treat the preceding specification like the following pseudo SQL: SELECT AD_SOURCE, APP, COUNTRY, OBSERVED_ECPM FROM MEDIATION_REPORT WHERE DATE \>= '2021-09-01' AND DATE <= '2021-09-30' AND COUNTRY IN ('US', 'CN') GROUP BY AD_SOURCE, APP, COUNTRY ORDER BY APP ASC;
   */
  export interface Schema$MediationReportSpec {
    /**
     * The date range for which the report is generated.
     */
    dateRange?: Schema$DateRange;
    /**
     * Describes which report rows to match based on their dimension values.
     */
    dimensionFilters?: Schema$MediationReportSpecDimensionFilter[];
    /**
     * List of dimensions of the report. The value combination of these dimensions determines the row of the report. If no dimensions are specified, the report returns a single row of requested metrics for the entire account.
     */
    dimensions?: string[] | null;
    /**
     * Localization settings of the report.
     */
    localizationSettings?: Schema$LocalizationSettings;
    /**
     * Maximum number of report data rows to return. If the value is not set, the API returns as many rows as possible, up to 100000. Acceptable values are 1-100000, inclusive. Values larger than 100000 return an error.
     */
    maxReportRows?: number | null;
    /**
     * List of metrics of the report. A report must specify at least one metric.
     */
    metrics?: string[] | null;
    /**
     * Describes the sorting of report rows. The order of the condition in the list defines its precedence; the earlier the condition, the higher its precedence. If no sort conditions are specified, the row ordering is undefined.
     */
    sortConditions?: Schema$MediationReportSpecSortCondition[];
    /**
     * A report time zone. Accepts an IANA TZ name values, such as "America/Los_Angeles." If no time zone is defined, the account default takes effect. Check default value by the get account action. **Warning:** The "America/Los_Angeles" is the only supported value at the moment.
     */
    timeZone?: string | null;
  }
  /**
   * Describes which report rows to match based on their dimension values.
   */
  export interface Schema$MediationReportSpecDimensionFilter {
    /**
     * Applies the filter criterion to the specified dimension.
     */
    dimension?: string | null;
    /**
     * Matches a row if its value for the specified dimension is in one of the values specified in this condition.
     */
    matchesAny?: Schema$StringList;
  }
  /**
   * Sorting direction to be applied on a dimension or a metric.
   */
  export interface Schema$MediationReportSpecSortCondition {
    /**
     * Sort by the specified dimension.
     */
    dimension?: string | null;
    /**
     * Sort by the specified metric.
     */
    metric?: string | null;
    /**
     * Sorting order of the dimension or metric.
     */
    order?: string | null;
  }
  /**
   * The specification for generating an AdMob Network report. For example, the specification to get clicks and estimated earnings for only the 'US' and 'CN' countries can look like the following example: { 'date_range': { 'start_date': {'year': 2021, 'month': 9, 'day': 1\}, 'end_date': {'year': 2021, 'month': 9, 'day': 30\} \}, 'dimensions': ['DATE', 'APP', 'COUNTRY'], 'metrics': ['CLICKS', 'ESTIMATED_EARNINGS'], 'dimension_filters': [ { 'dimension': 'COUNTRY', 'matches_any': {'values': [{'value': 'US', 'value': 'CN'\}]\} \} ], 'sort_conditions': [ {'dimension':'APP', order: 'ASCENDING'\}, {'metric':'CLICKS', order: 'DESCENDING'\} ], 'localization_settings': { 'currency_code': 'USD', 'language_code': 'en-US' \} \} For a better understanding, you can treat the preceding specification like the following pseudo SQL: SELECT DATE, APP, COUNTRY, CLICKS, ESTIMATED_EARNINGS FROM NETWORK_REPORT WHERE DATE \>= '2021-09-01' AND DATE <= '2021-09-30' AND COUNTRY IN ('US', 'CN') GROUP BY DATE, APP, COUNTRY ORDER BY APP ASC, CLICKS DESC;
   */
  export interface Schema$NetworkReportSpec {
    /**
     * The date range for which the report is generated.
     */
    dateRange?: Schema$DateRange;
    /**
     * Describes which report rows to match based on their dimension values.
     */
    dimensionFilters?: Schema$NetworkReportSpecDimensionFilter[];
    /**
     * List of dimensions of the report. The value combination of these dimensions determines the row of the report. If no dimensions are specified, the report returns a single row of requested metrics for the entire account.
     */
    dimensions?: string[] | null;
    /**
     * Localization settings of the report.
     */
    localizationSettings?: Schema$LocalizationSettings;
    /**
     * Maximum number of report data rows to return. If the value is not set, the API returns as many rows as possible, up to 100000. Acceptable values are 1-100000, inclusive. Values larger than 100000 return an error.
     */
    maxReportRows?: number | null;
    /**
     * List of metrics of the report. A report must specify at least one metric.
     */
    metrics?: string[] | null;
    /**
     * Describes the sorting of report rows. The order of the condition in the list defines its precedence; the earlier the condition, the higher its precedence. If no sort conditions are specified, the row ordering is undefined.
     */
    sortConditions?: Schema$NetworkReportSpecSortCondition[];
    /**
     * A report time zone. Accepts an IANA TZ name values, such as "America/Los_Angeles." If no time zone is defined, the account default takes effect. Check default value by the get account action. **Warning:** The "America/Los_Angeles" is the only supported value at the moment.
     */
    timeZone?: string | null;
  }
  /**
   * Describes which report rows to match based on their dimension values.
   */
  export interface Schema$NetworkReportSpecDimensionFilter {
    /**
     * Applies the filter criterion to the specified dimension.
     */
    dimension?: string | null;
    /**
     * Matches a row if its value for the specified dimension is in one of the values specified in this condition.
     */
    matchesAny?: Schema$StringList;
  }
  /**
   * Sorting direction to be applied on a dimension or a metric.
   */
  export interface Schema$NetworkReportSpecSortCondition {
    /**
     * Sort by the specified dimension.
     */
    dimension?: string | null;
    /**
     * Sort by the specified metric.
     */
    metric?: string | null;
    /**
     * Sorting order of the dimension or metric.
     */
    order?: string | null;
  }
  /**
   * A publisher account contains information relevant to the use of this API, such as the time zone used for the reports.
   */
  export interface Schema$PublisherAccount {
    /**
     * Currency code of the earning-related metrics, which is the 3-letter code defined in ISO 4217. The daily average rate is used for the currency conversion.
     */
    currencyCode?: string | null;
    /**
     * Resource name of this account. Format is accounts/{publisher_id\}.
     */
    name?: string | null;
    /**
     * The unique ID by which this publisher account can be identified in the API requests (for example, pub-1234567890).
     */
    publisherId?: string | null;
    /**
     * The time zone that is used in reports that are generated for this account. The value is a time-zone ID as specified by the CLDR project, for example, "America/Los_Angeles".
     */
    reportingTimeZone?: string | null;
  }
  /**
   * Groups data available after report generation, for example, warnings and row counts. Always sent as the last message in the stream response.
   */
  export interface Schema$ReportFooter {
    /**
     * Total number of rows that matched the request. Warning: This count does NOT always match the number of rows in the response. Do not make that assumption when processing the response.
     */
    matchingRowCount?: string | null;
    /**
     * Warnings associated with generation of the report.
     */
    warnings?: Schema$ReportWarning[];
  }
  /**
   * Groups data helps to treat the generated report. Always sent as a first message in the stream response.
   */
  export interface Schema$ReportHeader {
    /**
     * The date range for which the report is generated. This is identical to the range specified in the report request.
     */
    dateRange?: Schema$DateRange;
    /**
     * Localization settings of the report. This is identical to the settings in the report request.
     */
    localizationSettings?: Schema$LocalizationSettings;
    /**
     * The report time zone. The value is a time-zone ID as specified by the CLDR project, for example, "America/Los_Angeles".
     */
    reportingTimeZone?: string | null;
  }
  /**
   * A row of the returning report.
   */
  export interface Schema$ReportRow {
    /**
     * Map of dimension values in a row, with keys as enum name of the dimensions.
     */
    dimensionValues?: {[key: string]: Schema$ReportRowDimensionValue} | null;
    /**
     * Map of metric values in a row, with keys as enum name of the metrics. If a metric being requested has no value returned, the map will not include it.
     */
    metricValues?: {[key: string]: Schema$ReportRowMetricValue} | null;
  }
  /**
   * Representation of a dimension value.
   */
  export interface Schema$ReportRowDimensionValue {
    /**
     * The localized string representation of the value. If unspecified, the display label should be derived from the value.
     */
    displayLabel?: string | null;
    /**
     * Dimension value in the format specified in the report's spec Dimension enum.
     */
    value?: string | null;
  }
  /**
   * Representation of a metric value.
   */
  export interface Schema$ReportRowMetricValue {
    /**
     * Double precision (approximate) decimal values. Rates are from 0 to 1.
     */
    doubleValue?: number | null;
    /**
     * Metric integer value.
     */
    integerValue?: string | null;
    /**
     * Amount in micros. One million is equivalent to one unit. Currency value is in the unit (USD, EUR or other) specified by the request. For example, $6.50 whould be represented as 6500000 micros.
     */
    microsValue?: string | null;
  }
  /**
   * Warnings associated with generation of the report.
   */
  export interface Schema$ReportWarning {
    /**
     * Describes the details of the warning message, in English.
     */
    description?: string | null;
    /**
     * Type of the warning.
     */
    type?: string | null;
  }
  /**
   * List of string values.
   */
  export interface Schema$StringList {
    /**
     * The string values.
     */
    values?: string[] | null;
  }

  export class Resource$Accounts {
    context: APIRequestContext;
    adUnits: Resource$Accounts$Adunits;
    apps: Resource$Accounts$Apps;
    mediationReport: Resource$Accounts$Mediationreport;
    networkReport: Resource$Accounts$Networkreport;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.adUnits = new Resource$Accounts$Adunits(this.context);
      this.apps = new Resource$Accounts$Apps(this.context);
      this.mediationReport = new Resource$Accounts$Mediationreport(
        this.context
      );
      this.networkReport = new Resource$Accounts$Networkreport(this.context);
    }

    /**
     * Gets information about the specified AdMob publisher account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admob.googleapis.com
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
     * const admob = google.admob('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admob.readonly',
     *       'https://www.googleapis.com/auth/admob.report',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await admob.accounts.get({
     *     // Resource name of the publisher account to retrieve. Example: accounts/pub-9876543210987654
     *     name: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "currencyCode": "my_currencyCode",
     *   //   "name": "my_name",
     *   //   "publisherId": "my_publisherId",
     *   //   "reportingTimeZone": "my_reportingTimeZone"
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
    ): Promise<GaxiosResponseWithHTTP2<Schema$PublisherAccount>>;
    get(
      params: Params$Resource$Accounts$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounts$Get,
      options: MethodOptions | BodyResponseCallback<Schema$PublisherAccount>,
      callback: BodyResponseCallback<Schema$PublisherAccount>
    ): void;
    get(
      params: Params$Resource$Accounts$Get,
      callback: BodyResponseCallback<Schema$PublisherAccount>
    ): void;
    get(callback: BodyResponseCallback<Schema$PublisherAccount>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Get
        | BodyResponseCallback<Schema$PublisherAccount>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PublisherAccount>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PublisherAccount>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PublisherAccount>>
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

      const rootUrl = options.rootUrl || 'https://admob.googleapis.com/';
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
        createAPIRequest<Schema$PublisherAccount>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PublisherAccount>(parameters);
      }
    }

    /**
     * Lists the AdMob publisher account that was most recently signed in to from the AdMob UI. For more information, see https://support.google.com/admob/answer/10243672.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admob.googleapis.com
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
     * const admob = google.admob('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admob.readonly',
     *       'https://www.googleapis.com/auth/admob.report',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await admob.accounts.list({
     *     // Maximum number of accounts to return.
     *     pageSize: 'placeholder-value',
     *     // The value returned by the last `ListPublisherAccountsResponse`; indicates that this is a continuation of a prior `ListPublisherAccounts` call, and that the system should return the next page of data.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "account": [],
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
      params: Params$Resource$Accounts$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Accounts$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListPublisherAccountsResponse>>;
    list(
      params: Params$Resource$Accounts$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListPublisherAccountsResponse>,
      callback: BodyResponseCallback<Schema$ListPublisherAccountsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$List,
      callback: BodyResponseCallback<Schema$ListPublisherAccountsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListPublisherAccountsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$List
        | BodyResponseCallback<Schema$ListPublisherAccountsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListPublisherAccountsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListPublisherAccountsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListPublisherAccountsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Accounts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admob.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/accounts').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListPublisherAccountsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListPublisherAccountsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Accounts$Get extends StandardParameters {
    /**
     * Resource name of the publisher account to retrieve. Example: accounts/pub-9876543210987654
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$List extends StandardParameters {
    /**
     * Maximum number of accounts to return.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListPublisherAccountsResponse`; indicates that this is a continuation of a prior `ListPublisherAccounts` call, and that the system should return the next page of data.
     */
    pageToken?: string;
  }

  export class Resource$Accounts$Adunits {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List the ad units under the specified AdMob account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admob.googleapis.com
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
     * const admob = google.admob('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admob.readonly'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await admob.accounts.adUnits.list({
     *     // The maximum number of ad units to return. If unspecified or 0, at most 10,000 ad units will be returned. The maximum value is 20,000; values above 20,000 will be coerced to 20,000.
     *     pageSize: 'placeholder-value',
     *     // The value returned by the last `ListAdUnitsResponse`; indicates that this is a continuation of a prior `ListAdUnits` call, and that the system should return the next page of data.
     *     pageToken: 'placeholder-value',
     *     // Required. Resource name of the account to list ad units for. Example: accounts/pub-9876543210987654
     *     parent: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adUnits": [],
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
      params: Params$Resource$Accounts$Adunits$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Accounts$Adunits$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListAdUnitsResponse>>;
    list(
      params: Params$Resource$Accounts$Adunits$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Adunits$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListAdUnitsResponse>,
      callback: BodyResponseCallback<Schema$ListAdUnitsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Adunits$List,
      callback: BodyResponseCallback<Schema$ListAdUnitsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListAdUnitsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Adunits$List
        | BodyResponseCallback<Schema$ListAdUnitsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAdUnitsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAdUnitsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListAdUnitsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Adunits$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Adunits$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admob.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/adUnits').replace(
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
        createAPIRequest<Schema$ListAdUnitsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAdUnitsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Adunits$List
    extends StandardParameters {
    /**
     * The maximum number of ad units to return. If unspecified or 0, at most 10,000 ad units will be returned. The maximum value is 20,000; values above 20,000 will be coerced to 20,000.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListAdUnitsResponse`; indicates that this is a continuation of a prior `ListAdUnits` call, and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * Required. Resource name of the account to list ad units for. Example: accounts/pub-9876543210987654
     */
    parent?: string;
  }

  export class Resource$Accounts$Apps {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List the apps under the specified AdMob account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admob.googleapis.com
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
     * const admob = google.admob('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admob.readonly'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await admob.accounts.apps.list({
     *     // The maximum number of apps to return. If unspecified or 0, at most 10,000 apps will be returned. The maximum value is 20,000; values above 20,000 will be coerced to 20,000.
     *     pageSize: 'placeholder-value',
     *     // The value returned by the last `ListAppsResponse`; indicates that this is a continuation of a prior `ListApps` call, and that the system should return the next page of data.
     *     pageToken: 'placeholder-value',
     *     // Required. Resource name of the account to list apps for. Example: accounts/pub-9876543210987654
     *     parent: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apps": [],
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
      params: Params$Resource$Accounts$Apps$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Accounts$Apps$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListAppsResponse>>;
    list(
      params: Params$Resource$Accounts$Apps$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Apps$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListAppsResponse>,
      callback: BodyResponseCallback<Schema$ListAppsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Apps$List,
      callback: BodyResponseCallback<Schema$ListAppsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListAppsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Apps$List
        | BodyResponseCallback<Schema$ListAppsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAppsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAppsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListAppsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Apps$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Apps$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admob.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/apps').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListAppsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAppsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Apps$List
    extends StandardParameters {
    /**
     * The maximum number of apps to return. If unspecified or 0, at most 10,000 apps will be returned. The maximum value is 20,000; values above 20,000 will be coerced to 20,000.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListAppsResponse`; indicates that this is a continuation of a prior `ListApps` call, and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * Required. Resource name of the account to list apps for. Example: accounts/pub-9876543210987654
     */
    parent?: string;
  }

  export class Resource$Accounts$Mediationreport {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Generates an AdMob Mediation report based on the provided report specification. Returns result of a server-side streaming RPC. The result is returned in a sequence of responses.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admob.googleapis.com
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
     * const admob = google.admob('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admob.readonly',
     *       'https://www.googleapis.com/auth/admob.report',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await admob.accounts.mediationReport.generate({
     *     // Resource name of the account to generate the report for. Example: accounts/pub-9876543210987654
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "reportSpec": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "footer": {},
     *   //   "header": {},
     *   //   "row": {}
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
    generate(
      params: Params$Resource$Accounts$Mediationreport$Generate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    generate(
      params?: Params$Resource$Accounts$Mediationreport$Generate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GenerateMediationReportResponse>>;
    generate(
      params: Params$Resource$Accounts$Mediationreport$Generate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    generate(
      params: Params$Resource$Accounts$Mediationreport$Generate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GenerateMediationReportResponse>,
      callback: BodyResponseCallback<Schema$GenerateMediationReportResponse>
    ): void;
    generate(
      params: Params$Resource$Accounts$Mediationreport$Generate,
      callback: BodyResponseCallback<Schema$GenerateMediationReportResponse>
    ): void;
    generate(
      callback: BodyResponseCallback<Schema$GenerateMediationReportResponse>
    ): void;
    generate(
      paramsOrCallback?:
        | Params$Resource$Accounts$Mediationreport$Generate
        | BodyResponseCallback<Schema$GenerateMediationReportResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GenerateMediationReportResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GenerateMediationReportResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GenerateMediationReportResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Mediationreport$Generate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Mediationreport$Generate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admob.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/mediationReport:generate').replace(
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
        createAPIRequest<Schema$GenerateMediationReportResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GenerateMediationReportResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Accounts$Mediationreport$Generate
    extends StandardParameters {
    /**
     * Resource name of the account to generate the report for. Example: accounts/pub-9876543210987654
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GenerateMediationReportRequest;
  }

  export class Resource$Accounts$Networkreport {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Generates an AdMob Network report based on the provided report specification. Returns result of a server-side streaming RPC. The result is returned in a sequence of responses.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admob.googleapis.com
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
     * const admob = google.admob('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admob.readonly',
     *       'https://www.googleapis.com/auth/admob.report',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await admob.accounts.networkReport.generate({
     *     // Resource name of the account to generate the report for. Example: accounts/pub-9876543210987654
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "reportSpec": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "footer": {},
     *   //   "header": {},
     *   //   "row": {}
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
    generate(
      params: Params$Resource$Accounts$Networkreport$Generate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    generate(
      params?: Params$Resource$Accounts$Networkreport$Generate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GenerateNetworkReportResponse>>;
    generate(
      params: Params$Resource$Accounts$Networkreport$Generate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    generate(
      params: Params$Resource$Accounts$Networkreport$Generate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GenerateNetworkReportResponse>,
      callback: BodyResponseCallback<Schema$GenerateNetworkReportResponse>
    ): void;
    generate(
      params: Params$Resource$Accounts$Networkreport$Generate,
      callback: BodyResponseCallback<Schema$GenerateNetworkReportResponse>
    ): void;
    generate(
      callback: BodyResponseCallback<Schema$GenerateNetworkReportResponse>
    ): void;
    generate(
      paramsOrCallback?:
        | Params$Resource$Accounts$Networkreport$Generate
        | BodyResponseCallback<Schema$GenerateNetworkReportResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GenerateNetworkReportResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GenerateNetworkReportResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GenerateNetworkReportResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Networkreport$Generate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Networkreport$Generate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admob.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/networkReport:generate').replace(
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
        createAPIRequest<Schema$GenerateNetworkReportResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GenerateNetworkReportResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Accounts$Networkreport$Generate
    extends StandardParameters {
    /**
     * Resource name of the account to generate the report for. Example: accounts/pub-9876543210987654
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GenerateNetworkReportRequest;
  }
}
