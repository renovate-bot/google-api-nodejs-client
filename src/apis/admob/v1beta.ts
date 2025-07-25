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

export namespace admob_v1beta {
  export interface Options extends GlobalOptions {
    version: 'v1beta';
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
   * const admob = google.admob('v1beta');
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
   * Describes adapters supported by each mediation ad source. Adapters correspond to a specific SDK implementation of the ad source, and are each associated with a single platform and a list of supported ad unit formats. Adapters may also require setting some configurations to perform ad requests. Configurations can be specified in the AdUnitMapping by setting the [ad_unit_configurations](#AdUnitMapping.ad_unit_configurations) key/value pairs. For example, the ad_unit_configurations can be used to pass various IDs to the adapter's third-party SDK.
   */
  export interface Schema$Adapter {
    /**
     * Output only. Configuration metadata associated with this adapter.
     */
    adapterConfigMetadata?: Schema$AdapterAdapterConfigMetadata[];
    /**
     * Output only. ID of this adapter. It is used to set [adapter_id](#AdUnitMapping.adapter_id).
     */
    adapterId?: string | null;
    /**
     * Output only. Indicates the formats of the ad units supported by this adapter.
     */
    formats?: string[] | null;
    /**
     * Output only. Resource name of the adapter. Format is: accounts/{publisher_id\}/adSources/{ad_source_id\}/adapters/{adapter_id\}.
     */
    name?: string | null;
    /**
     * Output only. Mobile application platform supported by this adapter. Supported values are: IOS, ANDROID, WINDOWS_PHONE
     */
    platform?: string | null;
    /**
     * Output only. The display name of this adapter.
     */
    title?: string | null;
  }
  /**
   * Configuration metadata associated with this adapter. They are used to define the ad_unit_configurations associated with AdUnitMappings for the this adapter.
   */
  export interface Schema$AdapterAdapterConfigMetadata {
    /**
     * This is used to fill the key of the [ad_unit_configurations](#AdUnitMapping.ad_unit_configurations).
     */
    adapterConfigMetadataId?: string | null;
    /**
     * Name of the adapter configuration metadata.
     */
    adapterConfigMetadataLabel?: string | null;
    /**
     * Whether this metadata is required for configuring the AdUnitMappings.
     */
    isRequired?: boolean | null;
  }
  /**
   * Definition of a mediation ad source.
   */
  export interface Schema$AdSource {
    /**
     * ID of this ad source.
     */
    adSourceId?: string | null;
    /**
     * Resource name of this ad source. Format is: accounts/{publisher_id\}/adSources/{ad_source_id\}
     */
    name?: string | null;
    /**
     * Display name of this ad source.
     */
    title?: string | null;
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
    /**
     * Optional. Settings for a rewarded ad unit. This can be set or unset only when the ad_format is "REWARDED".
     */
    rewardSettings?: Schema$AdUnitRewardSettings;
  }
  /**
   * Settings to map an AdMob ad unit to a 3rd party ad unit.
   */
  export interface Schema$AdUnitMapping {
    /**
     * The ID of mediation ad source adapter used by this ad unit mapping. The adapter determines the information needed in the ad_network_settings.
     */
    adapterId?: string | null;
    /**
     * Settings for the specified ad unit to make an ad request to 3rd party ad network. Key-value pairs with values set by the user for the keys requested by the ad network. Please see https://support.google.com/admob/answer/3245073 for details on how to configure the network settings.
     */
    adUnitConfigurations?: {[key: string]: string} | null;
    /**
     * Optional. The display name of this ad unit mapping instance.
     */
    displayName?: string | null;
    /**
     * Resource name of this ad unit mapping. Format is: accounts/{publisher_id\}/adUnits/{ad_unit_id_fragment\}/adUnitMappings/{ad_unit_mapping_id\} Example: accounts/pub-1234567890123456/adUnits/0123456789/adUnitMappings/987654321
     */
    name?: string | null;
    /**
     * Output only. The status of this ad unit mapping.
     */
    state?: string | null;
  }
  /**
   * Settings for a rewarded ad unit.
   */
  export interface Schema$AdUnitRewardSettings {
    /**
     * Reward amount for this ad unit.
     */
    unitAmount?: string | null;
    /**
     * Reward item for this ad unit.
     */
    unitType?: string | null;
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
     * Optional. The app store information for published Android apps. This field is only used for apps on the Android platform and will be ignored if the PLATFORM is set to iOS. The default value is the Google Play App store. This field can be updated after app is created. If the app is not published, this field will not be included in the response.
     */
    androidAppStores?: string[] | null;
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
   * Request to create a batch of ad unit mappings under the specific AdMob account.
   */
  export interface Schema$BatchCreateAdUnitMappingsRequest {
    /**
     * Required. The request message specifying the ad unit mappings to create. A maximum of 100 ad unit mappings can be created in a batch. If the number of ad unit mappings in the batch request exceed 100, the entire request will be rejected and no ad unit mappings will be created.
     */
    requests?: Schema$CreateAdUnitMappingRequest[];
  }
  /**
   * Response containing a batch of created ad unit mappings.
   */
  export interface Schema$BatchCreateAdUnitMappingsResponse {
    /**
     * The Ad units mappings created under the requested account.
     */
    adUnitMappings?: Schema$AdUnitMapping[];
  }
  /**
   * The specification for generating a Campaign report. For example, the specification to get IMPRESSIONS and CLICKS sliced by CAMPAIGN_ID can look like the following example: { "date_range": { "start_date": {"year": 2021, "month": 12, "day": 1\}, "end_date": {"year": 2021, "month": 12, "day": 30\} \}, "dimensions": ["CAMPAIGN_ID"], "metrics": ["IMPRESSIONS", "CLICKS"], \}
   */
  export interface Schema$CampaignReportSpec {
    /**
     * The date range for which the report is generated. The max range is 30 days.
     */
    dateRange?: Schema$DateRange;
    /**
     * List of dimensions of the report. The value combination of these dimensions determines the row of the report. If no dimensions are specified, the report returns a single row of requested metrics for the entire account.
     */
    dimensions?: string[] | null;
    /**
     * Language used for any localized text, such as certain applicable dimension values. The language tag is defined in the IETF BCP47. Defaults to 'en-US' if unspecified or invalid.
     */
    languageCode?: string | null;
    /**
     * List of metrics of the report. A report must specify at least one metric.
     */
    metrics?: string[] | null;
  }
  /**
   * Request to create an ad unit mapping under the specific AdMob account and ad unit.
   */
  export interface Schema$CreateAdUnitMappingRequest {
    /**
     * Required. The ad unit mapping to create.
     */
    adUnitMapping?: Schema$AdUnitMapping;
    /**
     * Required. The parent which owns the ad unit mapping. Format: accounts/{publisher_id\}/adUnits/{ad_unit_id\}
     */
    parent?: string | null;
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
   * Request to generate campaign report.
   */
  export interface Schema$GenerateCampaignReportRequest {
    /**
     * Campaign report specification.
     */
    reportSpec?: Schema$CampaignReportSpec;
  }
  /**
   * Campaign Report API response.
   */
  export interface Schema$GenerateCampaignReportResponse {
    /**
     * The campaign report data from the specified publisher. At most 100000 rows will be returned from the API.
     */
    rows?: Schema$ReportRow[];
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
   * Response for the ListAdaptersRequest.
   */
  export interface Schema$ListAdaptersResponse {
    /**
     * The adapter.
     */
    adapters?: Schema$Adapter[];
    /**
     * Used to set the `page_token` in the `ListAdapterRequest` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response for the ListAdSourcesRequest.
   */
  export interface Schema$ListAdSourcesResponse {
    /**
     * The ad sources.
     */
    adSources?: Schema$AdSource[];
    /**
     * Used to set the `page_token` in the `ListAdSourcesRequest` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response for the ListAdUnitMappingsRequest.
   */
  export interface Schema$ListAdUnitMappingsResponse {
    /**
     * The ad unit mappings from the specified account and ad unit.
     */
    adUnitMappings?: Schema$AdUnitMapping[];
    /**
     * Used to set the `page_token` in the `ListAdUnitMappingsRequest` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
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
   * Response for the mediation groups list request.
   */
  export interface Schema$ListMediationGroupsResponse {
    /**
     * The resulting mediation groups for the requested account.
     */
    mediationGroups?: Schema$MediationGroup[];
    /**
     * If not empty, indicates that there may be more mediation groups for the request; this value should be passed in a new `ListMediationGroupsRequest`.
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
   * The mediation A/B experiment.
   */
  export interface Schema$MediationAbExperiment {
    /**
     * Output only. The experiment mediation lines for control. They are inherited from the parent mediation group. It is an output only field.
     */
    controlMediationLines?: Schema$MediationAbExperimentExperimentMediationLine[];
    /**
     * The display name for the mediation A/B experiment.
     */
    displayName?: string | null;
    /**
     * Output only. The time at which the experiment was ended or target to end (in UTC).
     */
    endTime?: string | null;
    /**
     * Output only. Unique identifier for the mediation A/B experiment. It is an output only property.
     */
    experimentId?: string | null;
    /**
     * Output only. The mediation group id this experiment belongs to. This can be used for filtering the experiments in the list experiments API.
     */
    mediationGroupId?: string | null;
    /**
     * Resource name for this experiment. The format is accounts/{publisher_id\}/ mediationGroups/{mediation_group_id\}/mediationAbExperiment/ {mediation_group_experiment_id\}. For example: accounts/pub-9876543210987654/mediationGroups/0123456789/ mediationAbExperiment/12345
     */
    name?: string | null;
    /**
     * Output only. The time at which the experiment was started (in UTC).
     */
    startTime?: string | null;
    /**
     * Output only. The state of the experiment. It is an output only field.
     */
    state?: string | null;
    /**
     * The experiment mediation lines created for the treatment. They will be used for serving when the experiment status is RUNNING.
     */
    treatmentMediationLines?: Schema$MediationAbExperimentExperimentMediationLine[];
    /**
     * The percentage of the mediation A/B experiment traffic that will be send to the treatment (variant B). The remainder is sent to the control (variant A). The percentage is expressed as an integer in the inclusive range of [1,99]. See https://support.google.com/admob/answer/9572326 for details.
     */
    treatmentTrafficPercentage?: string | null;
    /**
     * Output only. The variant leader for the experiment according to some key metrics.
     */
    variantLeader?: string | null;
  }
  /**
   * The mediation group line for the experiment. It will be used for serving during the run of the experiment.
   */
  export interface Schema$MediationAbExperimentExperimentMediationLine {
    /**
     * The mediation group line used by the experiment.
     */
    mediationGroupLine?: Schema$MediationGroupMediationGroupLine;
  }
  /**
   * Describes an AdMob Mediation group.
   */
  export interface Schema$MediationGroup {
    /**
     * User provided name for the mediation group. The maximum length allowed is 120 characters.
     */
    displayName?: string | null;
    /**
     * Output only. The state of the mediation a/b experiment that belongs to this mediation group.
     */
    mediationAbExperimentState?: string | null;
    /**
     * The ID of the mediation group. Example: "0123456789". This is a read only property.
     */
    mediationGroupId?: string | null;
    /**
     * The mediation lines used for serving for this mediation group. Key is the ID of the mediation group line. For creation, use distinct negative values as placeholder.
     */
    mediationGroupLines?: {
      [key: string]: Schema$MediationGroupMediationGroupLine;
    } | null;
    /**
     * Resource name for this mediation group. Format is: accounts/{publisher_id\}/mediationGroups/{mediation_group_id\} Example: accounts/pub-9876543210987654/mediationGroups/0123456789
     */
    name?: string | null;
    /**
     * The status of the mediation group. Only enabled mediation groups will be served.
     */
    state?: string | null;
    /**
     * Set of criteria targeted by this mediation group, such as ad units and geo locations.
     */
    targeting?: Schema$MediationGroupTargeting;
  }
  /**
   * Settings for an ad network used by a mediation group.
   */
  export interface Schema$MediationGroupMediationGroupLine {
    /**
     * The ID of the ad source this mediation line is associated with.
     */
    adSourceId?: string | null;
    /**
     * References of the ad unit mappings for each ad unit associated with this mediation line. Key is the ad unit ID, value is resource name of the ad unit mapping. For mediation lines where the ad source id is the AdMob Network, ad unit mappings will be ignored.
     */
    adUnitMappings?: {[key: string]: string} | null;
    /**
     * The CPM for this allocation line. $0.01 is the minimum allowed amount. For LIVE CPM modes, the default amount is $0.01. This value is ignored if `cpm_mode` is `LIVE`. **Warning:** "USD" is the only supported currency at the moment. The unit is in micros.
     */
    cpmMicros?: string | null;
    /**
     * Indicates how the CPM for this mediation line is provided. Note that `MANUAL` and `LIVE` are the only fully-supported mode at the moment. Please use the AdMob UI (https://admob.google.com) if you wish to create or update to other cpm modes.
     */
    cpmMode?: string | null;
    /**
     * User-provided label for this mediation line. The maximum length allowed is 255 characters.
     */
    displayName?: string | null;
    /**
     * Output only. The Mediation A/B experiment variant to which the mediation group line belongs to.
     */
    experimentVariant?: string | null;
    /**
     * The 16 digit ID for this mediation line e.g. 0123456789012345. When creating a new mediation group line, use a distinct negative integer as the ID place holder.
     */
    id?: string | null;
    /**
     * The status of the mediation group line. Only enabled mediation group lines will be served.
     */
    state?: string | null;
  }
  /**
   * Set of criteria targeted by this mediation group. For example, a mediation group can target specific ad unit IDs, platform, format and geo location.
   */
  export interface Schema$MediationGroupTargeting {
    /**
     * Ad units targeted by this mediation group. Example: "ca-app-pub-1234/8790".
     */
    adUnitIds?: string[] | null;
    /**
     * The Unicode country/region code (CLDR) of a location, such as "US". Unset if this mediation group does not exclude any region.
     */
    excludedRegionCodes?: string[] | null;
    /**
     * Ad format targeted by this mediation group. Examples: "banner", "native".
     */
    format?: string | null;
    /**
     * The parameter can be used to target ad requests based on the availability of the IDFA. If set to ALL, the mediation group applies to all ad requests (with or without IDFA). If set to AVAILABLE, the mediation group applies to ad requests with IDFA. If set to NOT_AVAILABLE, the mediation group applies to ad requests without IDFA. Doesn't need to be specified for an ANDROID device.
     */
    idfaTargeting?: string | null;
    /**
     * Describes the platform of the app. Examples: "IOS", "Android".
     */
    platform?: string | null;
    /**
     * The Unicode country/region code (CLDR) of a location, such as "US". Unset if this mediation group targets all available regions. For more information, see http://www.unicode.org/reports/tr35/#unicode_region_subtag.
     */
    targetedRegionCodes?: string[] | null;
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
   * Request to end the mediation A/B experiment and choose a winning variant.
   */
  export interface Schema$StopMediationAbExperimentRequest {
    /**
     * The choice for the winning variant.
     */
    variantChoice?: string | null;
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
    adSources: Resource$Accounts$Adsources;
    adUnitMappings: Resource$Accounts$Adunitmappings;
    adUnits: Resource$Accounts$Adunits;
    apps: Resource$Accounts$Apps;
    campaignReport: Resource$Accounts$Campaignreport;
    mediationGroups: Resource$Accounts$Mediationgroups;
    mediationReport: Resource$Accounts$Mediationreport;
    networkReport: Resource$Accounts$Networkreport;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.adSources = new Resource$Accounts$Adsources(this.context);
      this.adUnitMappings = new Resource$Accounts$Adunitmappings(this.context);
      this.adUnits = new Resource$Accounts$Adunits(this.context);
      this.apps = new Resource$Accounts$Apps(this.context);
      this.campaignReport = new Resource$Accounts$Campaignreport(this.context);
      this.mediationGroups = new Resource$Accounts$Mediationgroups(
        this.context
      );
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
     * const admob = google.admob('v1beta');
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
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * const admob = google.admob('v1beta');
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
            url: (rootUrl + '/v1beta/accounts').replace(/([^:]\/)\/+/g, '$1'),
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

  export class Resource$Accounts$Adsources {
    context: APIRequestContext;
    adapters: Resource$Accounts$Adsources$Adapters;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.adapters = new Resource$Accounts$Adsources$Adapters(this.context);
    }

    /**
     * List the ad sources.
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
     * const admob = google.admob('v1beta');
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
     *   const res = await admob.accounts.adSources.list({
     *     // The maximum number of ad sources to return. If unspecified or 0, at most 10,000 ad sources will be returned. The maximum value is 20,000; values above 10,000 will be coerced to 20,000.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListAdSources` call. Provide this to retrieve the subsequent page.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent which owns this collection of ad sources. Format: accounts/{publisher_id\}
     *     parent: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adSources": [],
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
      params: Params$Resource$Accounts$Adsources$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Accounts$Adsources$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListAdSourcesResponse>>;
    list(
      params: Params$Resource$Accounts$Adsources$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Adsources$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAdSourcesResponse>,
      callback: BodyResponseCallback<Schema$ListAdSourcesResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Adsources$List,
      callback: BodyResponseCallback<Schema$ListAdSourcesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListAdSourcesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Adsources$List
        | BodyResponseCallback<Schema$ListAdSourcesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAdSourcesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAdSourcesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListAdSourcesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Adsources$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Adsources$List;
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
            url: (rootUrl + '/v1beta/{+parent}/adSources').replace(
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
        createAPIRequest<Schema$ListAdSourcesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAdSourcesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Adsources$List
    extends StandardParameters {
    /**
     * The maximum number of ad sources to return. If unspecified or 0, at most 10,000 ad sources will be returned. The maximum value is 20,000; values above 10,000 will be coerced to 20,000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListAdSources` call. Provide this to retrieve the subsequent page.
     */
    pageToken?: string;
    /**
     * Required. The parent which owns this collection of ad sources. Format: accounts/{publisher_id\}
     */
    parent?: string;
  }

  export class Resource$Accounts$Adsources$Adapters {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List the adapters of the ad source.
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
     * const admob = google.admob('v1beta');
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
     *   const res = await admob.accounts.adSources.adapters.list({
     *     // The maximum number of adapters to return. If unspecified or 0, at most 10,000 adapters will be returned. The maximum value is 20,000; values above 20,000 will be coerced to 20,000.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListAdapters` call. Provide this to retrieve the subsequent page.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent which owns this collection of adapters. Format: accounts/{publisher_id\}/adSources/{ad_source_id\}
     *     parent: 'accounts/my-account/adSources/my-adSource',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adapters": [],
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
      params: Params$Resource$Accounts$Adsources$Adapters$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Accounts$Adsources$Adapters$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListAdaptersResponse>>;
    list(
      params: Params$Resource$Accounts$Adsources$Adapters$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Adsources$Adapters$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAdaptersResponse>,
      callback: BodyResponseCallback<Schema$ListAdaptersResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Adsources$Adapters$List,
      callback: BodyResponseCallback<Schema$ListAdaptersResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListAdaptersResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Adsources$Adapters$List
        | BodyResponseCallback<Schema$ListAdaptersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAdaptersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAdaptersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListAdaptersResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Adsources$Adapters$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Adsources$Adapters$List;
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
            url: (rootUrl + '/v1beta/{+parent}/adapters').replace(
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
        createAPIRequest<Schema$ListAdaptersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAdaptersResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Adsources$Adapters$List
    extends StandardParameters {
    /**
     * The maximum number of adapters to return. If unspecified or 0, at most 10,000 adapters will be returned. The maximum value is 20,000; values above 20,000 will be coerced to 20,000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListAdapters` call. Provide this to retrieve the subsequent page.
     */
    pageToken?: string;
    /**
     * Required. The parent which owns this collection of adapters. Format: accounts/{publisher_id\}/adSources/{ad_source_id\}
     */
    parent?: string;
  }

  export class Resource$Accounts$Adunitmappings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Batch create the ad unit mappings under the specific AdMob account. The maximum allowed batch size is 100. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.
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
     * const admob = google.admob('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await admob.accounts.adUnitMappings.batchCreate({
     *     // Required. The AdMob account which owns this collection of ad unit mappings. Format: accounts/{publisher_id\} See https://support.google.com/admob/answer/2784578 for instructions on how to find your AdMob publisher ID.
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "requests": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adUnitMappings": []
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
    batchCreate(
      params: Params$Resource$Accounts$Adunitmappings$Batchcreate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchCreate(
      params?: Params$Resource$Accounts$Adunitmappings$Batchcreate,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$BatchCreateAdUnitMappingsResponse>
    >;
    batchCreate(
      params: Params$Resource$Accounts$Adunitmappings$Batchcreate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchCreate(
      params: Params$Resource$Accounts$Adunitmappings$Batchcreate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchCreateAdUnitMappingsResponse>,
      callback: BodyResponseCallback<Schema$BatchCreateAdUnitMappingsResponse>
    ): void;
    batchCreate(
      params: Params$Resource$Accounts$Adunitmappings$Batchcreate,
      callback: BodyResponseCallback<Schema$BatchCreateAdUnitMappingsResponse>
    ): void;
    batchCreate(
      callback: BodyResponseCallback<Schema$BatchCreateAdUnitMappingsResponse>
    ): void;
    batchCreate(
      paramsOrCallback?:
        | Params$Resource$Accounts$Adunitmappings$Batchcreate
        | BodyResponseCallback<Schema$BatchCreateAdUnitMappingsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchCreateAdUnitMappingsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchCreateAdUnitMappingsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$BatchCreateAdUnitMappingsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Adunitmappings$Batchcreate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Adunitmappings$Batchcreate;
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
            url: (
              rootUrl + '/v1beta/{+parent}/adUnitMappings:batchCreate'
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
        createAPIRequest<Schema$BatchCreateAdUnitMappingsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BatchCreateAdUnitMappingsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Accounts$Adunitmappings$Batchcreate
    extends StandardParameters {
    /**
     * Required. The AdMob account which owns this collection of ad unit mappings. Format: accounts/{publisher_id\} See https://support.google.com/admob/answer/2784578 for instructions on how to find your AdMob publisher ID.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchCreateAdUnitMappingsRequest;
  }

  export class Resource$Accounts$Adunits {
    context: APIRequestContext;
    adUnitMappings: Resource$Accounts$Adunits$Adunitmappings;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.adUnitMappings = new Resource$Accounts$Adunits$Adunitmappings(
        this.context
      );
    }

    /**
     * Creates an ad unit under the specified AdMob account. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.
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
     * const admob = google.admob('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await admob.accounts.adUnits.create({
     *     // Required. Resource name of the account to create the specified ad unit for. Example: accounts/pub-9876543210987654
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "adFormat": "my_adFormat",
     *       //   "adTypes": [],
     *       //   "adUnitId": "my_adUnitId",
     *       //   "appId": "my_appId",
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name",
     *       //   "rewardSettings": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adFormat": "my_adFormat",
     *   //   "adTypes": [],
     *   //   "adUnitId": "my_adUnitId",
     *   //   "appId": "my_appId",
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "rewardSettings": {}
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
      params: Params$Resource$Accounts$Adunits$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Accounts$Adunits$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AdUnit>>;
    create(
      params: Params$Resource$Accounts$Adunits$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Accounts$Adunits$Create,
      options: MethodOptions | BodyResponseCallback<Schema$AdUnit>,
      callback: BodyResponseCallback<Schema$AdUnit>
    ): void;
    create(
      params: Params$Resource$Accounts$Adunits$Create,
      callback: BodyResponseCallback<Schema$AdUnit>
    ): void;
    create(callback: BodyResponseCallback<Schema$AdUnit>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Accounts$Adunits$Create
        | BodyResponseCallback<Schema$AdUnit>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AdUnit>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AdUnit>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AdUnit>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Adunits$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Adunits$Create;
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
            url: (rootUrl + '/v1beta/{+parent}/adUnits').replace(
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
        createAPIRequest<Schema$AdUnit>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AdUnit>(parameters);
      }
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
     * const admob = google.admob('v1beta');
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
            url: (rootUrl + '/v1beta/{+parent}/adUnits').replace(
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

  export interface Params$Resource$Accounts$Adunits$Create
    extends StandardParameters {
    /**
     * Required. Resource name of the account to create the specified ad unit for. Example: accounts/pub-9876543210987654
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AdUnit;
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

  export class Resource$Accounts$Adunits$Adunitmappings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Create an ad unit mapping under the specific AdMob account and ad unit. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.
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
     * const admob = google.admob('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await admob.accounts.adUnits.adUnitMappings.create({
     *     // Required. The parent which owns the ad unit mapping. Format: accounts/{publisher_id\}/adUnits/{ad_unit_id\}
     *     parent: 'accounts/my-account/adUnits/my-adUnit',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "adUnitConfigurations": {},
     *       //   "adapterId": "my_adapterId",
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name",
     *       //   "state": "my_state"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adUnitConfigurations": {},
     *   //   "adapterId": "my_adapterId",
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "state": "my_state"
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
      params: Params$Resource$Accounts$Adunits$Adunitmappings$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Accounts$Adunits$Adunitmappings$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AdUnitMapping>>;
    create(
      params: Params$Resource$Accounts$Adunits$Adunitmappings$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Accounts$Adunits$Adunitmappings$Create,
      options: MethodOptions | BodyResponseCallback<Schema$AdUnitMapping>,
      callback: BodyResponseCallback<Schema$AdUnitMapping>
    ): void;
    create(
      params: Params$Resource$Accounts$Adunits$Adunitmappings$Create,
      callback: BodyResponseCallback<Schema$AdUnitMapping>
    ): void;
    create(callback: BodyResponseCallback<Schema$AdUnitMapping>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Accounts$Adunits$Adunitmappings$Create
        | BodyResponseCallback<Schema$AdUnitMapping>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AdUnitMapping>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AdUnitMapping>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AdUnitMapping>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Adunits$Adunitmappings$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Adunits$Adunitmappings$Create;
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
            url: (rootUrl + '/v1beta/{+parent}/adUnitMappings').replace(
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
        createAPIRequest<Schema$AdUnitMapping>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AdUnitMapping>(parameters);
      }
    }

    /**
     * List ad unit mappings under the specified AdMob account and ad unit. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.
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
     * const admob = google.admob('v1beta');
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
     *   const res = await admob.accounts.adUnits.adUnitMappings.list({
     *     // The filter string that uses [EBNF grammar syntax](https://google.aip.dev/assets/misc/ebnf-filtering.txt). Possible field to filter by is: - "DISPLAY_NAME" Possible filter function is: - `IN`: Used to filter fields that represent a singleton including "DISPLAY_NAME". The filter functions can be added together using `AND`. `OR` functionality is not supported. Example: filter: IN(DISPLAY_NAME, "Test Ad Unit Mapping 1", "Test Ad Unit Mapping 2")
     *     filter: 'placeholder-value',
     *     // The maximum number of ad unit mappings to return. If unspecified or 0, at most 10,000 ad unit mappings will be returned. The maximum value is 20,000; values above 20,000 will be coerced to 20,000.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListAdUnitMappings` call. Provide this to retrieve the subsequent page.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent which owns this collection of ad unit mappings. Format: accounts/{publisher_id\}/adUnits/{ad_unit_id\}
     *     parent: 'accounts/my-account/adUnits/my-adUnit',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adUnitMappings": [],
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
      params: Params$Resource$Accounts$Adunits$Adunitmappings$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Accounts$Adunits$Adunitmappings$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListAdUnitMappingsResponse>>;
    list(
      params: Params$Resource$Accounts$Adunits$Adunitmappings$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Adunits$Adunitmappings$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAdUnitMappingsResponse>,
      callback: BodyResponseCallback<Schema$ListAdUnitMappingsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Adunits$Adunitmappings$List,
      callback: BodyResponseCallback<Schema$ListAdUnitMappingsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListAdUnitMappingsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Adunits$Adunitmappings$List
        | BodyResponseCallback<Schema$ListAdUnitMappingsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAdUnitMappingsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAdUnitMappingsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListAdUnitMappingsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Adunits$Adunitmappings$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Adunits$Adunitmappings$List;
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
            url: (rootUrl + '/v1beta/{+parent}/adUnitMappings').replace(
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
        createAPIRequest<Schema$ListAdUnitMappingsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAdUnitMappingsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Adunits$Adunitmappings$Create
    extends StandardParameters {
    /**
     * Required. The parent which owns the ad unit mapping. Format: accounts/{publisher_id\}/adUnits/{ad_unit_id\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AdUnitMapping;
  }
  export interface Params$Resource$Accounts$Adunits$Adunitmappings$List
    extends StandardParameters {
    /**
     * The filter string that uses [EBNF grammar syntax](https://google.aip.dev/assets/misc/ebnf-filtering.txt). Possible field to filter by is: - "DISPLAY_NAME" Possible filter function is: - `IN`: Used to filter fields that represent a singleton including "DISPLAY_NAME". The filter functions can be added together using `AND`. `OR` functionality is not supported. Example: filter: IN(DISPLAY_NAME, "Test Ad Unit Mapping 1", "Test Ad Unit Mapping 2")
     */
    filter?: string;
    /**
     * The maximum number of ad unit mappings to return. If unspecified or 0, at most 10,000 ad unit mappings will be returned. The maximum value is 20,000; values above 20,000 will be coerced to 20,000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListAdUnitMappings` call. Provide this to retrieve the subsequent page.
     */
    pageToken?: string;
    /**
     * Required. The parent which owns this collection of ad unit mappings. Format: accounts/{publisher_id\}/adUnits/{ad_unit_id\}
     */
    parent?: string;
  }

  export class Resource$Accounts$Apps {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates an app under the specified AdMob account. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.
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
     * const admob = google.admob('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await admob.accounts.apps.create({
     *     // Required. Resource name of the account for which the app is being created. Example: accounts/pub-9876543210987654
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "appApprovalState": "my_appApprovalState",
     *       //   "appId": "my_appId",
     *       //   "linkedAppInfo": {},
     *       //   "manualAppInfo": {},
     *       //   "name": "my_name",
     *       //   "platform": "my_platform"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appApprovalState": "my_appApprovalState",
     *   //   "appId": "my_appId",
     *   //   "linkedAppInfo": {},
     *   //   "manualAppInfo": {},
     *   //   "name": "my_name",
     *   //   "platform": "my_platform"
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
      params: Params$Resource$Accounts$Apps$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Accounts$Apps$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$App>>;
    create(
      params: Params$Resource$Accounts$Apps$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Accounts$Apps$Create,
      options: MethodOptions | BodyResponseCallback<Schema$App>,
      callback: BodyResponseCallback<Schema$App>
    ): void;
    create(
      params: Params$Resource$Accounts$Apps$Create,
      callback: BodyResponseCallback<Schema$App>
    ): void;
    create(callback: BodyResponseCallback<Schema$App>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Accounts$Apps$Create
        | BodyResponseCallback<Schema$App>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$App>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$App>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$App>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Apps$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Apps$Create;
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
            url: (rootUrl + '/v1beta/{+parent}/apps').replace(
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
        createAPIRequest<Schema$App>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$App>(parameters);
      }
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
     * const admob = google.admob('v1beta');
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
            url: (rootUrl + '/v1beta/{+parent}/apps').replace(
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
        createAPIRequest<Schema$ListAppsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAppsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Apps$Create
    extends StandardParameters {
    /**
     * Required. Resource name of the account for which the app is being created. Example: accounts/pub-9876543210987654
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$App;
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

  export class Resource$Accounts$Campaignreport {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Generates Campaign Report based on provided specifications.
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
     * const admob = google.admob('v1beta');
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
     *   const res = await admob.accounts.campaignReport.generate({
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
     *   //   "rows": []
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
      params: Params$Resource$Accounts$Campaignreport$Generate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    generate(
      params?: Params$Resource$Accounts$Campaignreport$Generate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GenerateCampaignReportResponse>>;
    generate(
      params: Params$Resource$Accounts$Campaignreport$Generate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    generate(
      params: Params$Resource$Accounts$Campaignreport$Generate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GenerateCampaignReportResponse>,
      callback: BodyResponseCallback<Schema$GenerateCampaignReportResponse>
    ): void;
    generate(
      params: Params$Resource$Accounts$Campaignreport$Generate,
      callback: BodyResponseCallback<Schema$GenerateCampaignReportResponse>
    ): void;
    generate(
      callback: BodyResponseCallback<Schema$GenerateCampaignReportResponse>
    ): void;
    generate(
      paramsOrCallback?:
        | Params$Resource$Accounts$Campaignreport$Generate
        | BodyResponseCallback<Schema$GenerateCampaignReportResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GenerateCampaignReportResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GenerateCampaignReportResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GenerateCampaignReportResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Campaignreport$Generate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Campaignreport$Generate;
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
            url: (
              rootUrl + '/v1beta/{+parent}/campaignReport:generate'
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
        createAPIRequest<Schema$GenerateCampaignReportResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GenerateCampaignReportResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Accounts$Campaignreport$Generate
    extends StandardParameters {
    /**
     * Resource name of the account to generate the report for. Example: accounts/pub-9876543210987654
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GenerateCampaignReportRequest;
  }

  export class Resource$Accounts$Mediationgroups {
    context: APIRequestContext;
    mediationAbExperiments: Resource$Accounts$Mediationgroups$Mediationabexperiments;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.mediationAbExperiments =
        new Resource$Accounts$Mediationgroups$Mediationabexperiments(
          this.context
        );
    }

    /**
     * Create a mediation group under the specific AdMob account. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.
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
     * const admob = google.admob('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await admob.accounts.mediationGroups.create({
     *     // Required. The parent which owns the mediation group. Format: accounts/{publisher_id\}
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "displayName": "my_displayName",
     *       //   "mediationAbExperimentState": "my_mediationAbExperimentState",
     *       //   "mediationGroupId": "my_mediationGroupId",
     *       //   "mediationGroupLines": {},
     *       //   "name": "my_name",
     *       //   "state": "my_state",
     *       //   "targeting": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "mediationAbExperimentState": "my_mediationAbExperimentState",
     *   //   "mediationGroupId": "my_mediationGroupId",
     *   //   "mediationGroupLines": {},
     *   //   "name": "my_name",
     *   //   "state": "my_state",
     *   //   "targeting": {}
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
      params: Params$Resource$Accounts$Mediationgroups$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Accounts$Mediationgroups$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$MediationGroup>>;
    create(
      params: Params$Resource$Accounts$Mediationgroups$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Accounts$Mediationgroups$Create,
      options: MethodOptions | BodyResponseCallback<Schema$MediationGroup>,
      callback: BodyResponseCallback<Schema$MediationGroup>
    ): void;
    create(
      params: Params$Resource$Accounts$Mediationgroups$Create,
      callback: BodyResponseCallback<Schema$MediationGroup>
    ): void;
    create(callback: BodyResponseCallback<Schema$MediationGroup>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Accounts$Mediationgroups$Create
        | BodyResponseCallback<Schema$MediationGroup>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$MediationGroup>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$MediationGroup>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$MediationGroup>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Mediationgroups$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Mediationgroups$Create;
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
            url: (rootUrl + '/v1beta/{+parent}/mediationGroups').replace(
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
        createAPIRequest<Schema$MediationGroup>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$MediationGroup>(parameters);
      }
    }

    /**
     * List mediation groups under the specified AdMob account. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.
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
     * const admob = google.admob('v1beta');
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
     *   const res = await admob.accounts.mediationGroups.list({
     *     // The filter string that uses [EBNF grammar syntax](https://google.aip.dev/assets/misc/ebnf-filtering.txt). Possible fields to filter by are: - "AD_SOURCE_IDS" - "AD_UNIT_IDS" - "APP_IDS" - "DISPLAY_NAME" - "FORMAT" - "MEDIATION_GROUP_ID" - "PLATFORM" - "STATE" - "TARGETED_REGION_CODES" Possible filter functions are: - `IN`: Used to filter fields that represent a singleton including "MEDIATION_GROUP_ID", "DISPLAY_NAME", "STATE", "PLATFORM", and "FORMAT". - `CONTAINS_ANY`: Used to filter fields that represent a collection including "AD_SOURCE_IDS", "AD_UNIT_IDS", "APP_IDS", and "TARGETED_REGION_CODES". The filter functions can be added together using `AND`. `OR` functionality is not supported. Example: filter: IN(DISPLAY_NAME, "Test Group 1", "Test Group 2") AND IN(PLATFORM, "ANDROID") AND CONTAINS_ANY(AD_SOURCE_IDS, "5450213213286189855")
     *     filter: 'placeholder-value',
     *     // The maximum number of mediation groups to return. If unspecified or 0, at most 10,000 mediation groups will be returned. The maximum value is 20,000; values above 20,000 will be coerced to 20,000.
     *     pageSize: 'placeholder-value',
     *     // The value returned by the last `ListMediationGroupsResponse`; indicates that this is a continuation of a prior `ListMediationGroups` call, and that the system should return the next page of data.
     *     pageToken: 'placeholder-value',
     *     // Required. Resource name of the account to list mediation groups for. Example: accounts/pub-9876543210987654
     *     parent: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "mediationGroups": [],
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
      params: Params$Resource$Accounts$Mediationgroups$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Accounts$Mediationgroups$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListMediationGroupsResponse>>;
    list(
      params: Params$Resource$Accounts$Mediationgroups$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Mediationgroups$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListMediationGroupsResponse>,
      callback: BodyResponseCallback<Schema$ListMediationGroupsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Mediationgroups$List,
      callback: BodyResponseCallback<Schema$ListMediationGroupsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListMediationGroupsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Mediationgroups$List
        | BodyResponseCallback<Schema$ListMediationGroupsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListMediationGroupsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListMediationGroupsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListMediationGroupsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Mediationgroups$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Mediationgroups$List;
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
            url: (rootUrl + '/v1beta/{+parent}/mediationGroups').replace(
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
        createAPIRequest<Schema$ListMediationGroupsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListMediationGroupsResponse>(parameters);
      }
    }

    /**
     * Update the specified mediation group under the specified AdMob account. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.
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
     * const admob = google.admob('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await admob.accounts.mediationGroups.patch({
     *     // Resource name for this mediation group. Format is: accounts/{publisher_id\}/mediationGroups/{mediation_group_id\} Example: accounts/pub-9876543210987654/mediationGroups/0123456789
     *     name: 'accounts/my-account/mediationGroups/my-mediationGroup',
     *     // List of mediation group fields to be updated. Updates to repeated fields such as items in a list will fully replace the existing value(s) with the new value(s). Updates to individual values in a map can be done by indexing by the key. The following field masks are supported for mediation group updates: - "mediation_group_lines[\"{mediation_group_line_id\}\"]" clang-format off - "mediation_group_lines[\"{mediation_group_line_id\}\"].ad_unit_mappings[\"{ad_unit_id\}\"]" clang-format on - "mediation_group_lines[\"{mediation_group_line_id\}\"].cpm_micros" - "mediation_group_lines[\"{mediation_group_line_id\}\"].cpm_mode" - "mediation_group_lines[\"{mediation_group_line_id\}\"].state" - "mediation_group_lines[\"{mediation_group_line_id\}\"].display_name" - "targeting.ad_unit_ids" To update a mediation group with a new mediation group line, use a distinct negative number for the "mediation_group_line_id". For Example: update_mask { paths: "mediation_group_lines[\"123456789012345\"].cpm_micros" \}
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "displayName": "my_displayName",
     *       //   "mediationAbExperimentState": "my_mediationAbExperimentState",
     *       //   "mediationGroupId": "my_mediationGroupId",
     *       //   "mediationGroupLines": {},
     *       //   "name": "my_name",
     *       //   "state": "my_state",
     *       //   "targeting": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "mediationAbExperimentState": "my_mediationAbExperimentState",
     *   //   "mediationGroupId": "my_mediationGroupId",
     *   //   "mediationGroupLines": {},
     *   //   "name": "my_name",
     *   //   "state": "my_state",
     *   //   "targeting": {}
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
      params: Params$Resource$Accounts$Mediationgroups$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Accounts$Mediationgroups$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$MediationGroup>>;
    patch(
      params: Params$Resource$Accounts$Mediationgroups$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Accounts$Mediationgroups$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$MediationGroup>,
      callback: BodyResponseCallback<Schema$MediationGroup>
    ): void;
    patch(
      params: Params$Resource$Accounts$Mediationgroups$Patch,
      callback: BodyResponseCallback<Schema$MediationGroup>
    ): void;
    patch(callback: BodyResponseCallback<Schema$MediationGroup>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Accounts$Mediationgroups$Patch
        | BodyResponseCallback<Schema$MediationGroup>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$MediationGroup>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$MediationGroup>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$MediationGroup>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Mediationgroups$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Mediationgroups$Patch;
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
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$MediationGroup>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$MediationGroup>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Mediationgroups$Create
    extends StandardParameters {
    /**
     * Required. The parent which owns the mediation group. Format: accounts/{publisher_id\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$MediationGroup;
  }
  export interface Params$Resource$Accounts$Mediationgroups$List
    extends StandardParameters {
    /**
     * The filter string that uses [EBNF grammar syntax](https://google.aip.dev/assets/misc/ebnf-filtering.txt). Possible fields to filter by are: - "AD_SOURCE_IDS" - "AD_UNIT_IDS" - "APP_IDS" - "DISPLAY_NAME" - "FORMAT" - "MEDIATION_GROUP_ID" - "PLATFORM" - "STATE" - "TARGETED_REGION_CODES" Possible filter functions are: - `IN`: Used to filter fields that represent a singleton including "MEDIATION_GROUP_ID", "DISPLAY_NAME", "STATE", "PLATFORM", and "FORMAT". - `CONTAINS_ANY`: Used to filter fields that represent a collection including "AD_SOURCE_IDS", "AD_UNIT_IDS", "APP_IDS", and "TARGETED_REGION_CODES". The filter functions can be added together using `AND`. `OR` functionality is not supported. Example: filter: IN(DISPLAY_NAME, "Test Group 1", "Test Group 2") AND IN(PLATFORM, "ANDROID") AND CONTAINS_ANY(AD_SOURCE_IDS, "5450213213286189855")
     */
    filter?: string;
    /**
     * The maximum number of mediation groups to return. If unspecified or 0, at most 10,000 mediation groups will be returned. The maximum value is 20,000; values above 20,000 will be coerced to 20,000.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListMediationGroupsResponse`; indicates that this is a continuation of a prior `ListMediationGroups` call, and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * Required. Resource name of the account to list mediation groups for. Example: accounts/pub-9876543210987654
     */
    parent?: string;
  }
  export interface Params$Resource$Accounts$Mediationgroups$Patch
    extends StandardParameters {
    /**
     * Resource name for this mediation group. Format is: accounts/{publisher_id\}/mediationGroups/{mediation_group_id\} Example: accounts/pub-9876543210987654/mediationGroups/0123456789
     */
    name?: string;
    /**
     * List of mediation group fields to be updated. Updates to repeated fields such as items in a list will fully replace the existing value(s) with the new value(s). Updates to individual values in a map can be done by indexing by the key. The following field masks are supported for mediation group updates: - "mediation_group_lines[\"{mediation_group_line_id\}\"]" clang-format off - "mediation_group_lines[\"{mediation_group_line_id\}\"].ad_unit_mappings[\"{ad_unit_id\}\"]" clang-format on - "mediation_group_lines[\"{mediation_group_line_id\}\"].cpm_micros" - "mediation_group_lines[\"{mediation_group_line_id\}\"].cpm_mode" - "mediation_group_lines[\"{mediation_group_line_id\}\"].state" - "mediation_group_lines[\"{mediation_group_line_id\}\"].display_name" - "targeting.ad_unit_ids" To update a mediation group with a new mediation group line, use a distinct negative number for the "mediation_group_line_id". For Example: update_mask { paths: "mediation_group_lines[\"123456789012345\"].cpm_micros" \}
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$MediationGroup;
  }

  export class Resource$Accounts$Mediationgroups$Mediationabexperiments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Create an A/B testing experiment for a specified AdMob account and a mediation group. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.
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
     * const admob = google.admob('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await admob.accounts.mediationGroups.mediationAbExperiments.create({
     *       // Required. The parent which owns the mediation group. Format: accounts/{publisher_id\}/mediationGroups/{mediation_group_id\}
     *       parent: 'accounts/my-account/mediationGroups/my-mediationGroup',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "controlMediationLines": [],
     *         //   "displayName": "my_displayName",
     *         //   "endTime": "my_endTime",
     *         //   "experimentId": "my_experimentId",
     *         //   "mediationGroupId": "my_mediationGroupId",
     *         //   "name": "my_name",
     *         //   "startTime": "my_startTime",
     *         //   "state": "my_state",
     *         //   "treatmentMediationLines": [],
     *         //   "treatmentTrafficPercentage": "my_treatmentTrafficPercentage",
     *         //   "variantLeader": "my_variantLeader"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "controlMediationLines": [],
     *   //   "displayName": "my_displayName",
     *   //   "endTime": "my_endTime",
     *   //   "experimentId": "my_experimentId",
     *   //   "mediationGroupId": "my_mediationGroupId",
     *   //   "name": "my_name",
     *   //   "startTime": "my_startTime",
     *   //   "state": "my_state",
     *   //   "treatmentMediationLines": [],
     *   //   "treatmentTrafficPercentage": "my_treatmentTrafficPercentage",
     *   //   "variantLeader": "my_variantLeader"
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
      params: Params$Resource$Accounts$Mediationgroups$Mediationabexperiments$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Accounts$Mediationgroups$Mediationabexperiments$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$MediationAbExperiment>>;
    create(
      params: Params$Resource$Accounts$Mediationgroups$Mediationabexperiments$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Accounts$Mediationgroups$Mediationabexperiments$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$MediationAbExperiment>,
      callback: BodyResponseCallback<Schema$MediationAbExperiment>
    ): void;
    create(
      params: Params$Resource$Accounts$Mediationgroups$Mediationabexperiments$Create,
      callback: BodyResponseCallback<Schema$MediationAbExperiment>
    ): void;
    create(callback: BodyResponseCallback<Schema$MediationAbExperiment>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Accounts$Mediationgroups$Mediationabexperiments$Create
        | BodyResponseCallback<Schema$MediationAbExperiment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$MediationAbExperiment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$MediationAbExperiment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$MediationAbExperiment>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Mediationgroups$Mediationabexperiments$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounts$Mediationgroups$Mediationabexperiments$Create;
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
            url: (rootUrl + '/v1beta/{+parent}/mediationAbExperiments').replace(
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
        createAPIRequest<Schema$MediationAbExperiment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$MediationAbExperiment>(parameters);
      }
    }

    /**
     * Stop the mediation A/B experiment and choose a variant. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.
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
     * const admob = google.admob('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await admob.accounts.mediationGroups.mediationAbExperiments.stop({
     *     // Name of the mediation group, the experiment for which to choose a variant for. Example: accounts/pub-9876543210987654/mediationGroups/0123456789/ mediationAbExperiments
     *     name: 'accounts/my-account/mediationGroups/my-mediationGroup/mediationAbExperiments',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "variantChoice": "my_variantChoice"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "controlMediationLines": [],
     *   //   "displayName": "my_displayName",
     *   //   "endTime": "my_endTime",
     *   //   "experimentId": "my_experimentId",
     *   //   "mediationGroupId": "my_mediationGroupId",
     *   //   "name": "my_name",
     *   //   "startTime": "my_startTime",
     *   //   "state": "my_state",
     *   //   "treatmentMediationLines": [],
     *   //   "treatmentTrafficPercentage": "my_treatmentTrafficPercentage",
     *   //   "variantLeader": "my_variantLeader"
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
    stop(
      params: Params$Resource$Accounts$Mediationgroups$Mediationabexperiments$Stop,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    stop(
      params?: Params$Resource$Accounts$Mediationgroups$Mediationabexperiments$Stop,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$MediationAbExperiment>>;
    stop(
      params: Params$Resource$Accounts$Mediationgroups$Mediationabexperiments$Stop,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    stop(
      params: Params$Resource$Accounts$Mediationgroups$Mediationabexperiments$Stop,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$MediationAbExperiment>,
      callback: BodyResponseCallback<Schema$MediationAbExperiment>
    ): void;
    stop(
      params: Params$Resource$Accounts$Mediationgroups$Mediationabexperiments$Stop,
      callback: BodyResponseCallback<Schema$MediationAbExperiment>
    ): void;
    stop(callback: BodyResponseCallback<Schema$MediationAbExperiment>): void;
    stop(
      paramsOrCallback?:
        | Params$Resource$Accounts$Mediationgroups$Mediationabexperiments$Stop
        | BodyResponseCallback<Schema$MediationAbExperiment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$MediationAbExperiment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$MediationAbExperiment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$MediationAbExperiment>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Mediationgroups$Mediationabexperiments$Stop;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounts$Mediationgroups$Mediationabexperiments$Stop;
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
            url: (rootUrl + '/v1beta/{+name}:stop').replace(
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
        createAPIRequest<Schema$MediationAbExperiment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$MediationAbExperiment>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Mediationgroups$Mediationabexperiments$Create
    extends StandardParameters {
    /**
     * Required. The parent which owns the mediation group. Format: accounts/{publisher_id\}/mediationGroups/{mediation_group_id\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$MediationAbExperiment;
  }
  export interface Params$Resource$Accounts$Mediationgroups$Mediationabexperiments$Stop
    extends StandardParameters {
    /**
     * Name of the mediation group, the experiment for which to choose a variant for. Example: accounts/pub-9876543210987654/mediationGroups/0123456789/ mediationAbExperiments
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$StopMediationAbExperimentRequest;
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
     * const admob = google.admob('v1beta');
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
            url: (
              rootUrl + '/v1beta/{+parent}/mediationReport:generate'
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
     * const admob = google.admob('v1beta');
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
            url: (rootUrl + '/v1beta/{+parent}/networkReport:generate').replace(
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
