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

export namespace recommender_v1beta1 {
  export interface Options extends GlobalOptions {
    version: 'v1beta1';
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
   * Recommender API
   *
   *
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const recommender = google.recommender('v1beta1');
   * ```
   */
  export class Recommender {
    context: APIRequestContext;
    billingAccounts: Resource$Billingaccounts;
    folders: Resource$Folders;
    insightTypes: Resource$Insighttypes;
    organizations: Resource$Organizations;
    projects: Resource$Projects;
    recommenders: Resource$Recommenders;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.billingAccounts = new Resource$Billingaccounts(this.context);
      this.folders = new Resource$Folders(this.context);
      this.insightTypes = new Resource$Insighttypes(this.context);
      this.organizations = new Resource$Organizations(this.context);
      this.projects = new Resource$Projects(this.context);
      this.recommenders = new Resource$Recommenders(this.context);
    }
  }

  /**
   * The response message for Locations.ListLocations.
   */
  export interface Schema$GoogleCloudLocationListLocationsResponse {
    /**
     * A list of locations that matches the specified filter in the request.
     */
    locations?: Schema$GoogleCloudLocationLocation[];
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
  }
  /**
   * A resource that represents a Google Cloud location.
   */
  export interface Schema$GoogleCloudLocationLocation {
    /**
     * The friendly name for this location, typically a nearby city name. For example, "Tokyo".
     */
    displayName?: string | null;
    /**
     * Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"\}
     */
    labels?: {[key: string]: string} | null;
    /**
     * The canonical id for this location. For example: `"us-east1"`.
     */
    locationId?: string | null;
    /**
     * Service-specific metadata. For example the available capacity at the given location.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`
     */
    name?: string | null;
  }
  /**
   * Contains metadata about how much money a recommendation can save or incur.
   */
  export interface Schema$GoogleCloudRecommenderV1beta1CostProjection {
    /**
     * An approximate projection on amount saved or amount incurred. Negative cost units indicate cost savings and positive cost units indicate increase. See google.type.Money documentation for positive/negative units. A user's permissions may affect whether the cost is computed using list prices or custom contract prices.
     */
    cost?: Schema$GoogleTypeMoney;
    /**
     * The approximate cost savings in the billing account's local currency.
     */
    costInLocalCurrency?: Schema$GoogleTypeMoney;
    /**
     * Duration for which this cost applies.
     */
    duration?: string | null;
    /**
     * How the cost is calculated.
     */
    pricingType?: string | null;
  }
  /**
   * Contains the impact a recommendation can have for a given category.
   */
  export interface Schema$GoogleCloudRecommenderV1beta1Impact {
    /**
     * Category that is being targeted.
     */
    category?: string | null;
    /**
     * Use with CategoryType.COST
     */
    costProjection?: Schema$GoogleCloudRecommenderV1beta1CostProjection;
    /**
     * If populated, the impact contains multiple components. In this case, the top-level impact contains aggregated values and each component contains per-service details.
     */
    impactComponents?: Schema$GoogleCloudRecommenderV1beta1Impact[];
    /**
     * Use with CategoryType.RELIABILITY
     */
    reliabilityProjection?: Schema$GoogleCloudRecommenderV1beta1ReliabilityProjection;
    /**
     * Use with CategoryType.SECURITY
     */
    securityProjection?: Schema$GoogleCloudRecommenderV1beta1SecurityProjection;
    /**
     * The service that this impact is associated with.
     */
    service?: string | null;
    /**
     * Use with CategoryType.SUSTAINABILITY
     */
    sustainabilityProjection?: Schema$GoogleCloudRecommenderV1beta1SustainabilityProjection;
  }
  /**
   * An insight along with the information used to derive the insight. The insight may have associated recommendations as well.
   */
  export interface Schema$GoogleCloudRecommenderV1beta1Insight {
    /**
     * Recommendations derived from this insight.
     */
    associatedRecommendations?: Schema$GoogleCloudRecommenderV1beta1InsightRecommendationReference[];
    /**
     * Category being targeted by the insight.
     */
    category?: string | null;
    /**
     * A struct of custom fields to explain the insight. Example: "grantedPermissionsCount": "1000"
     */
    content?: {[key: string]: any} | null;
    /**
     * Free-form human readable summary in English. The maximum length is 500 characters.
     */
    description?: string | null;
    /**
     * Fingerprint of the Insight. Provides optimistic locking when updating states.
     */
    etag?: string | null;
    /**
     * Insight subtype. Insight content schema will be stable for a given subtype.
     */
    insightSubtype?: string | null;
    /**
     * Timestamp of the latest data used to generate the insight.
     */
    lastRefreshTime?: string | null;
    /**
     * Identifier. Name of the insight.
     */
    name?: string | null;
    /**
     * Observation period that led to the insight. The source data used to generate the insight ends at last_refresh_time and begins at (last_refresh_time - observation_period).
     */
    observationPeriod?: string | null;
    /**
     * Insight's severity.
     */
    severity?: string | null;
    /**
     * Information state and metadata.
     */
    stateInfo?: Schema$GoogleCloudRecommenderV1beta1InsightStateInfo;
    /**
     * Fully qualified resource names that this insight is targeting.
     */
    targetResources?: string[] | null;
  }
  /**
   * Reference to an associated recommendation.
   */
  export interface Schema$GoogleCloudRecommenderV1beta1InsightRecommendationReference {
    /**
     * Recommendation resource name, e.g. projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/recommendations/[RECOMMENDATION_ID]
     */
    recommendation?: string | null;
  }
  /**
   * Information related to insight state.
   */
  export interface Schema$GoogleCloudRecommenderV1beta1InsightStateInfo {
    /**
     * Insight state.
     */
    state?: string | null;
    /**
     * A map of metadata for the state, provided by user or automations systems.
     */
    stateMetadata?: {[key: string]: string} | null;
  }
  /**
   * The type of insight.
   */
  export interface Schema$GoogleCloudRecommenderV1beta1InsightType {
    /**
     * The insight_type's name in format insightTypes/{insight_type\} eg: insightTypes/google.iam.policy.Insight
     */
    name?: string | null;
  }
  /**
   * Configuration for an InsightType.
   */
  export interface Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig {
    /**
     * Allows clients to store small amounts of arbitrary data. Annotations must follow the Kubernetes syntax. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.
     */
    annotations?: {[key: string]: string} | null;
    /**
     * A user-settable field to provide a human-readable name to be used in user interfaces.
     */
    displayName?: string | null;
    /**
     * Fingerprint of the InsightTypeConfig. Provides optimistic locking when updating.
     */
    etag?: string | null;
    /**
     * InsightTypeGenerationConfig which configures the generation of insights for this insight type.
     */
    insightTypeGenerationConfig?: Schema$GoogleCloudRecommenderV1beta1InsightTypeGenerationConfig;
    /**
     * Identifier. Name of insight type config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config
     */
    name?: string | null;
    /**
     * Output only. Immutable. The revision ID of the config. A new revision is committed whenever the config is changed in any way. The format is an 8-character hexadecimal string.
     */
    revisionId?: string | null;
    /**
     * Last time when the config was updated.
     */
    updateTime?: string | null;
  }
  /**
   * A configuration to customize the generation of insights. Eg, customizing the lookback period considered when generating a insight.
   */
  export interface Schema$GoogleCloudRecommenderV1beta1InsightTypeGenerationConfig {
    /**
     * Parameters for this InsightTypeGenerationConfig. These configs can be used by or are applied to all subtypes.
     */
    params?: {[key: string]: any} | null;
  }
  /**
   * Response to the `ListInsights` method.
   */
  export interface Schema$GoogleCloudRecommenderV1beta1ListInsightsResponse {
    /**
     * The set of insights for the `parent` resource.
     */
    insights?: Schema$GoogleCloudRecommenderV1beta1Insight[];
    /**
     * A token that can be used to request the next page of results. This field is empty if there are no additional results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response for the `ListInsightTypes` method. Next ID: 3
   */
  export interface Schema$GoogleCloudRecommenderV1beta1ListInsightTypesResponse {
    /**
     * The set of recommenders available
     */
    insightTypes?: Schema$GoogleCloudRecommenderV1beta1InsightType[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response to the `ListRecommendations` method.
   */
  export interface Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse {
    /**
     * A token that can be used to request the next page of results. This field is empty if there are no additional results.
     */
    nextPageToken?: string | null;
    /**
     * The set of recommendations for the `parent` resource.
     */
    recommendations?: Schema$GoogleCloudRecommenderV1beta1Recommendation[];
  }
  /**
   * Response for the `ListRecommender` method. Next ID: 3
   */
  export interface Schema$GoogleCloudRecommenderV1beta1ListRecommendersResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The set of recommenders available
     */
    recommenders?: Schema$GoogleCloudRecommenderV1beta1RecommenderType[];
  }
  /**
   * Request for the `MarkInsightAccepted` method.
   */
  export interface Schema$GoogleCloudRecommenderV1beta1MarkInsightAcceptedRequest {
    /**
     * Required. Fingerprint of the Insight. Provides optimistic locking.
     */
    etag?: string | null;
    /**
     * Optional. State properties user wish to include with this state. Full replace of the current state_metadata.
     */
    stateMetadata?: {[key: string]: string} | null;
  }
  /**
   * Request for the `MarkRecommendationClaimed` Method.
   */
  export interface Schema$GoogleCloudRecommenderV1beta1MarkRecommendationClaimedRequest {
    /**
     * Required. Fingerprint of the Recommendation. Provides optimistic locking.
     */
    etag?: string | null;
    /**
     * State properties to include with this state. Overwrites any existing `state_metadata`. Keys must match the regex `/^a-z0-9{0,62\}$/`. Values must match the regex `/^[a-zA-Z0-9_./-]{0,255\}$/`.
     */
    stateMetadata?: {[key: string]: string} | null;
  }
  /**
   * Request for the `MarkRecommendationDismissed` Method.
   */
  export interface Schema$GoogleCloudRecommenderV1beta1MarkRecommendationDismissedRequest {
    /**
     * Fingerprint of the Recommendation. Provides optimistic locking.
     */
    etag?: string | null;
  }
  /**
   * Request for the `MarkRecommendationFailed` Method.
   */
  export interface Schema$GoogleCloudRecommenderV1beta1MarkRecommendationFailedRequest {
    /**
     * Required. Fingerprint of the Recommendation. Provides optimistic locking.
     */
    etag?: string | null;
    /**
     * State properties to include with this state. Overwrites any existing `state_metadata`. Keys must match the regex `/^a-z0-9{0,62\}$/`. Values must match the regex `/^[a-zA-Z0-9_./-]{0,255\}$/`.
     */
    stateMetadata?: {[key: string]: string} | null;
  }
  /**
   * Request for the `MarkRecommendationSucceeded` Method.
   */
  export interface Schema$GoogleCloudRecommenderV1beta1MarkRecommendationSucceededRequest {
    /**
     * Required. Fingerprint of the Recommendation. Provides optimistic locking.
     */
    etag?: string | null;
    /**
     * State properties to include with this state. Overwrites any existing `state_metadata`. Keys must match the regex `/^a-z0-9{0,62\}$/`. Values must match the regex `/^[a-zA-Z0-9_./-]{0,255\}$/`.
     */
    stateMetadata?: {[key: string]: string} | null;
  }
  /**
   * Contains an operation for a resource loosely based on the JSON-PATCH format with support for: * Custom filters for describing partial array patch. * Extended path values for describing nested arrays. * Custom fields for describing the resource for which the operation is being described. * Allows extension to custom operations not natively supported by RFC6902. See https://tools.ietf.org/html/rfc6902 for details on the original RFC.
   */
  export interface Schema$GoogleCloudRecommenderV1beta1Operation {
    /**
     * Type of this operation. Contains one of 'add', 'remove', 'replace', 'move', 'copy', 'test' and 'custom' operations. This field is case-insensitive and always populated.
     */
    action?: string | null;
    /**
     * Path to the target field being operated on. If the operation is at the resource level, then path should be "/". This field is always populated.
     */
    path?: string | null;
    /**
     * Set of filters to apply if `path` refers to array elements or nested array elements in order to narrow down to a single unique element that is being tested/modified. This is intended to be an exact match per filter. To perform advanced matching, use path_value_matchers. * Example: ``` { "/versions/x/name" : "it-123" "/versions/x/targetSize/percent": 20 \} ``` * Example: ``` { "/bindings/x/role": "roles/owner" "/bindings/x/condition" : null \} ``` * Example: ``` { "/bindings/x/role": "roles/owner" "/bindings/x/members/x" : ["x@example.com", "y@example.com"] \} ``` When both path_filters and path_value_matchers are set, an implicit AND must be performed.
     */
    pathFilters?: {[key: string]: any} | null;
    /**
     * Similar to path_filters, this contains set of filters to apply if `path` field refers to array elements. This is meant to support value matching beyond exact match. To perform exact match, use path_filters. When both path_filters and path_value_matchers are set, an implicit AND must be performed.
     */
    pathValueMatchers?: {
      [key: string]: Schema$GoogleCloudRecommenderV1beta1ValueMatcher;
    } | null;
    /**
     * Contains the fully qualified resource name. This field is always populated. ex: //cloudresourcemanager.googleapis.com/projects/foo.
     */
    resource?: string | null;
    /**
     * Type of GCP resource being modified/tested. This field is always populated. Example: cloudresourcemanager.googleapis.com/Project, compute.googleapis.com/Instance
     */
    resourceType?: string | null;
    /**
     * Can be set with action 'copy' or 'move' to indicate the source field within resource or source_resource, ignored if provided for other operation types.
     */
    sourcePath?: string | null;
    /**
     * Can be set with action 'copy' to copy resource configuration across different resources of the same type. Example: A resource clone can be done via action = 'copy', path = "/", from = "/", source_resource = and resource_name = . This field is empty for all other values of `action`.
     */
    sourceResource?: string | null;
    /**
     * Value for the `path` field. Will be set for actions:'add'/'replace'. Maybe set for action: 'test'. Either this or `value_matcher` will be set for 'test' operation. An exact match must be performed.
     */
    value?: any | null;
    /**
     * Can be set for action 'test' for advanced matching for the value of 'path' field. Either this or `value` will be set for 'test' operation.
     */
    valueMatcher?: Schema$GoogleCloudRecommenderV1beta1ValueMatcher;
  }
  /**
   * Group of operations that need to be performed atomically.
   */
  export interface Schema$GoogleCloudRecommenderV1beta1OperationGroup {
    /**
     * List of operations across one or more resources that belong to this group. Loosely based on RFC6902 and should be performed in the order they appear.
     */
    operations?: Schema$GoogleCloudRecommenderV1beta1Operation[];
  }
  /**
   * A recommendation along with a suggested action. E.g., a rightsizing recommendation for an underutilized VM, IAM role recommendations, etc
   */
  export interface Schema$GoogleCloudRecommenderV1beta1Recommendation {
    /**
     * Optional set of additional impact that this recommendation may have when trying to optimize for the primary category. These may be positive or negative.
     */
    additionalImpact?: Schema$GoogleCloudRecommenderV1beta1Impact[];
    /**
     * Insights that led to this recommendation.
     */
    associatedInsights?: Schema$GoogleCloudRecommenderV1beta1RecommendationInsightReference[];
    /**
     * Content of the recommendation describing recommended changes to resources.
     */
    content?: Schema$GoogleCloudRecommenderV1beta1RecommendationContent;
    /**
     * Free-form human readable summary in English. The maximum length is 500 characters.
     */
    description?: string | null;
    /**
     * Fingerprint of the Recommendation. Provides optimistic locking when updating states.
     */
    etag?: string | null;
    /**
     * Last time this recommendation was refreshed by the system that created it in the first place.
     */
    lastRefreshTime?: string | null;
    /**
     * Identifier. Name of recommendation.
     */
    name?: string | null;
    /**
     * The primary impact that this recommendation can have while trying to optimize for one category.
     */
    primaryImpact?: Schema$GoogleCloudRecommenderV1beta1Impact;
    /**
     * Recommendation's priority.
     */
    priority?: string | null;
    /**
     * Contains an identifier for a subtype of recommendations produced for the same recommender. Subtype is a function of content and impact, meaning a new subtype might be added when significant changes to `content` or `primary_impact.category` are introduced. See the Recommenders section to see a list of subtypes for a given Recommender. Examples: For recommender = "google.iam.policy.Recommender", recommender_subtype can be one of "REMOVE_ROLE"/"REPLACE_ROLE"
     */
    recommenderSubtype?: string | null;
    /**
     * Information for state. Contains state and metadata.
     */
    stateInfo?: Schema$GoogleCloudRecommenderV1beta1RecommendationStateInfo;
    /**
     * Fully qualified resource names that this recommendation is targeting.
     */
    targetResources?: string[] | null;
    /**
     * Corresponds to a mutually exclusive group ID within a recommender. A non-empty ID indicates that the recommendation belongs to a mutually exclusive group. This means that only one recommendation within the group is suggested to be applied.
     */
    xorGroupId?: string | null;
  }
  /**
   * Contains what resources are changing and how they are changing.
   */
  export interface Schema$GoogleCloudRecommenderV1beta1RecommendationContent {
    /**
     * Operations to one or more Google Cloud resources grouped in such a way that, all operations within one group are expected to be performed atomically and in an order.
     */
    operationGroups?: Schema$GoogleCloudRecommenderV1beta1OperationGroup[];
    /**
     * Condensed overview information about the recommendation.
     */
    overview?: {[key: string]: any} | null;
  }
  /**
   * Reference to an associated insight.
   */
  export interface Schema$GoogleCloudRecommenderV1beta1RecommendationInsightReference {
    /**
     * Insight resource name, e.g. projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/insights/[INSIGHT_ID]
     */
    insight?: string | null;
  }
  /**
   * Information for state. Contains state and metadata.
   */
  export interface Schema$GoogleCloudRecommenderV1beta1RecommendationStateInfo {
    /**
     * The state of the recommendation, Eg ACTIVE, SUCCEEDED, FAILED.
     */
    state?: string | null;
    /**
     * A map of metadata for the state, provided by user or automations systems.
     */
    stateMetadata?: {[key: string]: string} | null;
  }
  /**
   * Configuration for a Recommender.
   */
  export interface Schema$GoogleCloudRecommenderV1beta1RecommenderConfig {
    /**
     * Allows clients to store small amounts of arbitrary data. Annotations must follow the Kubernetes syntax. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.
     */
    annotations?: {[key: string]: string} | null;
    /**
     * A user-settable field to provide a human-readable name to be used in user interfaces.
     */
    displayName?: string | null;
    /**
     * Fingerprint of the RecommenderConfig. Provides optimistic locking when updating.
     */
    etag?: string | null;
    /**
     * Identifier. Name of recommender config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config
     */
    name?: string | null;
    /**
     * RecommenderGenerationConfig which configures the Generation of recommendations for this recommender.
     */
    recommenderGenerationConfig?: Schema$GoogleCloudRecommenderV1beta1RecommenderGenerationConfig;
    /**
     * Output only. Immutable. The revision ID of the config. A new revision is committed whenever the config is changed in any way. The format is an 8-character hexadecimal string.
     */
    revisionId?: string | null;
    /**
     * Last time when the config was updated.
     */
    updateTime?: string | null;
  }
  /**
   * A Configuration to customize the generation of recommendations. Eg, customizing the lookback period considered when generating a recommendation.
   */
  export interface Schema$GoogleCloudRecommenderV1beta1RecommenderGenerationConfig {
    /**
     * Parameters for this RecommenderGenerationConfig. These configs can be used by or are applied to all subtypes.
     */
    params?: {[key: string]: any} | null;
  }
  /**
   * The type of a recommender.
   */
  export interface Schema$GoogleCloudRecommenderV1beta1RecommenderType {
    /**
     * The recommender's name in format RecommenderTypes/{recommender_type\} eg: recommenderTypes/google.iam.policy.Recommender
     */
    name?: string | null;
  }
  /**
   * Contains information on the impact of a reliability recommendation.
   */
  export interface Schema$GoogleCloudRecommenderV1beta1ReliabilityProjection {
    /**
     * Per-recommender projection.
     */
    details?: {[key: string]: any} | null;
    /**
     * Reliability risks mitigated by this recommendation.
     */
    risks?: string[] | null;
  }
  /**
   * Contains various ways of describing the impact on Security.
   */
  export interface Schema$GoogleCloudRecommenderV1beta1SecurityProjection {
    /**
     * This field can be used by the recommender to define details specific to security impact.
     */
    details?: {[key: string]: any} | null;
  }
  /**
   * Contains metadata about how much sustainability a recommendation can save or incur.
   */
  export interface Schema$GoogleCloudRecommenderV1beta1SustainabilityProjection {
    /**
     * Duration for which this sustanability applies.
     */
    duration?: string | null;
    /**
     * Carbon Footprint generated in kg of CO2 equivalent. Chose kg_c_o2e so that the name renders correctly in camelCase (kgCO2e).
     */
    kgCO2e?: number | null;
  }
  /**
   * Contains various matching options for values for a GCP resource field.
   */
  export interface Schema$GoogleCloudRecommenderV1beta1ValueMatcher {
    /**
     * To be used for full regex matching. The regular expression is using the Google RE2 syntax (https://github.com/google/re2/wiki/Syntax), so to be used with RE2::FullMatch
     */
    matchesPattern?: string | null;
  }
  /**
   * Represents an amount of money with its currency type.
   */
  export interface Schema$GoogleTypeMoney {
    /**
     * The three-letter currency code defined in ISO 4217.
     */
    currencyCode?: string | null;
    /**
     * Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
     */
    nanos?: number | null;
    /**
     * The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.
     */
    units?: string | null;
  }

  export class Resource$Billingaccounts {
    context: APIRequestContext;
    locations: Resource$Billingaccounts$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Billingaccounts$Locations(this.context);
    }
  }

  export class Resource$Billingaccounts$Locations {
    context: APIRequestContext;
    insightTypes: Resource$Billingaccounts$Locations$Insighttypes;
    recommenders: Resource$Billingaccounts$Locations$Recommenders;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.insightTypes = new Resource$Billingaccounts$Locations$Insighttypes(
        this.context
      );
      this.recommenders = new Resource$Billingaccounts$Locations$Recommenders(
        this.context
      );
    }

    /**
     * Lists locations with recommendations or insights.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await recommender.billingAccounts.locations.list({
     *     // Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations.
     *     extraLocationTypes: 'placeholder-value',
     *     // A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     *     filter: 'placeholder-value',
     *     // The resource that owns the locations collection, if applicable.
     *     name: 'billingAccounts/my-billingAccount',
     *     // The maximum number of results to return. If not set, the service selects a default.
     *     pageSize: 'placeholder-value',
     *     // A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "locations": [],
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
      params: Params$Resource$Billingaccounts$Locations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Billingaccounts$Locations$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudLocationListLocationsResponse>
    >;
    list(
      params: Params$Resource$Billingaccounts$Locations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Billingaccounts$Locations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>
    ): void;
    list(
      params: Params$Resource$Billingaccounts$Locations$List,
      callback: BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Locations$List
        | BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudLocationListLocationsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Locations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Billingaccounts$Locations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}/locations').replace(
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
        createAPIRequest<Schema$GoogleCloudLocationListLocationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudLocationListLocationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Billingaccounts$Locations$List
    extends StandardParameters {
    /**
     * Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations.
     */
    extraLocationTypes?: string[];
    /**
     * A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     */
    filter?: string;
    /**
     * The resource that owns the locations collection, if applicable.
     */
    name?: string;
    /**
     * The maximum number of results to return. If not set, the service selects a default.
     */
    pageSize?: number;
    /**
     * A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     */
    pageToken?: string;
  }

  export class Resource$Billingaccounts$Locations$Insighttypes {
    context: APIRequestContext;
    insights: Resource$Billingaccounts$Locations$Insighttypes$Insights;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.insights =
        new Resource$Billingaccounts$Locations$Insighttypes$Insights(
          this.context
        );
    }

    /**
     * Gets the requested InsightTypeConfig. There is only one instance of the config for each InsightType.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await recommender.billingAccounts.locations.insightTypes.getConfig({
     *       // Required. Name of the InsightTypeConfig to get. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` * `projects/[PROJECT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config`
     *       name: 'billingAccounts/my-billingAccount/locations/my-location/insightTypes/my-insightType/config',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "insightTypeGenerationConfig": {},
     *   //   "name": "my_name",
     *   //   "revisionId": "my_revisionId",
     *   //   "updateTime": "my_updateTime"
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
    getConfig(
      params: Params$Resource$Billingaccounts$Locations$Insighttypes$Getconfig,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getConfig(
      params?: Params$Resource$Billingaccounts$Locations$Insighttypes$Getconfig,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
    >;
    getConfig(
      params: Params$Resource$Billingaccounts$Locations$Insighttypes$Getconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getConfig(
      params: Params$Resource$Billingaccounts$Locations$Insighttypes$Getconfig,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
    ): void;
    getConfig(
      params: Params$Resource$Billingaccounts$Locations$Insighttypes$Getconfig,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
    ): void;
    getConfig(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
    ): void;
    getConfig(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Locations$Insighttypes$Getconfig
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Locations$Insighttypes$Getconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Billingaccounts$Locations$Insighttypes$Getconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>(
          parameters
        );
      }
    }

    /**
     * Updates an InsightTypeConfig change. This will create a new revision of the config.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await recommender.billingAccounts.locations.insightTypes.updateConfig({
     *       // Identifier. Name of insight type config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config
     *       name: 'billingAccounts/my-billingAccount/locations/my-location/insightTypes/my-insightType/config',
     *       // The list of fields to be updated.
     *       updateMask: 'placeholder-value',
     *       // If true, validate the request and preview the change, but do not actually update it.
     *       validateOnly: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "annotations": {},
     *         //   "displayName": "my_displayName",
     *         //   "etag": "my_etag",
     *         //   "insightTypeGenerationConfig": {},
     *         //   "name": "my_name",
     *         //   "revisionId": "my_revisionId",
     *         //   "updateTime": "my_updateTime"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "insightTypeGenerationConfig": {},
     *   //   "name": "my_name",
     *   //   "revisionId": "my_revisionId",
     *   //   "updateTime": "my_updateTime"
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
    updateConfig(
      params: Params$Resource$Billingaccounts$Locations$Insighttypes$Updateconfig,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateConfig(
      params?: Params$Resource$Billingaccounts$Locations$Insighttypes$Updateconfig,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
    >;
    updateConfig(
      params: Params$Resource$Billingaccounts$Locations$Insighttypes$Updateconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateConfig(
      params: Params$Resource$Billingaccounts$Locations$Insighttypes$Updateconfig,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
    ): void;
    updateConfig(
      params: Params$Resource$Billingaccounts$Locations$Insighttypes$Updateconfig,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
    ): void;
    updateConfig(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
    ): void;
    updateConfig(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Locations$Insighttypes$Updateconfig
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Locations$Insighttypes$Updateconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Billingaccounts$Locations$Insighttypes$Updateconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Billingaccounts$Locations$Insighttypes$Getconfig
    extends StandardParameters {
    /**
     * Required. Name of the InsightTypeConfig to get. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` * `projects/[PROJECT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config`
     */
    name?: string;
  }
  export interface Params$Resource$Billingaccounts$Locations$Insighttypes$Updateconfig
    extends StandardParameters {
    /**
     * Identifier. Name of insight type config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;
    /**
     * If true, validate the request and preview the change, but do not actually update it.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig;
  }

  export class Resource$Billingaccounts$Locations$Insighttypes$Insights {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the requested insight. Requires the recommender.*.get IAM permission for the specified insight type.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await recommender.billingAccounts.locations.insightTypes.insights.get({
     *       // Required. Name of the insight.
     *       name: 'billingAccounts/my-billingAccount/locations/my-location/insightTypes/my-insightType/insights/my-insight',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "associatedRecommendations": [],
     *   //   "category": "my_category",
     *   //   "content": {},
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "insightSubtype": "my_insightSubtype",
     *   //   "lastRefreshTime": "my_lastRefreshTime",
     *   //   "name": "my_name",
     *   //   "observationPeriod": "my_observationPeriod",
     *   //   "severity": "my_severity",
     *   //   "stateInfo": {},
     *   //   "targetResources": []
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
      params: Params$Resource$Billingaccounts$Locations$Insighttypes$Insights$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Billingaccounts$Locations$Insighttypes$Insights$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Insight>
    >;
    get(
      params: Params$Resource$Billingaccounts$Locations$Insighttypes$Insights$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Billingaccounts$Locations$Insighttypes$Insights$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
    ): void;
    get(
      params: Params$Resource$Billingaccounts$Locations$Insighttypes$Insights$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Locations$Insighttypes$Insights$Get
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Insight>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Locations$Insighttypes$Insights$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Billingaccounts$Locations$Insighttypes$Insights$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Insight>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Insight>(
          parameters
        );
      }
    }

    /**
     * Lists insights for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified insight type.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await recommender.billingAccounts.locations.insightTypes.insights.list({
     *       // Optional. Filter expression to restrict the insights returned. Supported filter fields: * `stateInfo.state` * `insightSubtype` * `severity` * `targetResources` Examples: * `stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED` * `insightSubtype = PERMISSIONS_USAGE` * `severity = CRITICAL OR severity = HIGH` * `targetResources : //compute.googleapis.com/projects/1234/zones/us-central1-a/instances/instance-1` * `stateInfo.state = ACTIVE AND (severity = CRITICAL OR severity = HIGH)` The max allowed filter length is 500 characters. (These expressions are based on the filter language described at https://google.aip.dev/160)
     *       filter: 'placeholder-value',
     *       // Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return.
     *       pageSize: 'placeholder-value',
     *       // Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call.
     *       pageToken: 'placeholder-value',
     *       // Required. The container resource on which to execute the request. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `projects/[PROJECT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `folders/[FOLDER_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ INSIGHT_TYPE_ID refers to supported insight types: https://cloud.google.com/recommender/docs/insights/insight-types.
     *       parent:
     *         'billingAccounts/my-billingAccount/locations/my-location/insightTypes/my-insightType',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "insights": [],
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
      params: Params$Resource$Billingaccounts$Locations$Insighttypes$Insights$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Billingaccounts$Locations$Insighttypes$Insights$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1ListInsightsResponse>
    >;
    list(
      params: Params$Resource$Billingaccounts$Locations$Insighttypes$Insights$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Billingaccounts$Locations$Insighttypes$Insights$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListInsightsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListInsightsResponse>
    ): void;
    list(
      params: Params$Resource$Billingaccounts$Locations$Insighttypes$Insights$List,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListInsightsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListInsightsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Locations$Insighttypes$Insights$List
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListInsightsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListInsightsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListInsightsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1ListInsightsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Locations$Insighttypes$Insights$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Billingaccounts$Locations$Insighttypes$Insights$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/insights').replace(
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1ListInsightsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1ListInsightsResponse>(
          parameters
        );
      }
    }

    /**
     * Marks the Insight State as Accepted. Users can use this method to indicate to the Recommender API that they have applied some action based on the insight. This stops the insight content from being updated. MarkInsightAccepted can be applied to insights in ACTIVE state. Requires the recommender.*.update IAM permission for the specified insight.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await recommender.billingAccounts.locations.insightTypes.insights.markAccepted(
     *       {
     *         // Required. Name of the insight.
     *         name: 'billingAccounts/my-billingAccount/locations/my-location/insightTypes/my-insightType/insights/my-insight',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "etag": "my_etag",
     *           //   "stateMetadata": {}
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "associatedRecommendations": [],
     *   //   "category": "my_category",
     *   //   "content": {},
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "insightSubtype": "my_insightSubtype",
     *   //   "lastRefreshTime": "my_lastRefreshTime",
     *   //   "name": "my_name",
     *   //   "observationPeriod": "my_observationPeriod",
     *   //   "severity": "my_severity",
     *   //   "stateInfo": {},
     *   //   "targetResources": []
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
    markAccepted(
      params: Params$Resource$Billingaccounts$Locations$Insighttypes$Insights$Markaccepted,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    markAccepted(
      params?: Params$Resource$Billingaccounts$Locations$Insighttypes$Insights$Markaccepted,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Insight>
    >;
    markAccepted(
      params: Params$Resource$Billingaccounts$Locations$Insighttypes$Insights$Markaccepted,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    markAccepted(
      params: Params$Resource$Billingaccounts$Locations$Insighttypes$Insights$Markaccepted,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
    ): void;
    markAccepted(
      params: Params$Resource$Billingaccounts$Locations$Insighttypes$Insights$Markaccepted,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
    ): void;
    markAccepted(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
    ): void;
    markAccepted(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Locations$Insighttypes$Insights$Markaccepted
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Insight>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Locations$Insighttypes$Insights$Markaccepted;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Billingaccounts$Locations$Insighttypes$Insights$Markaccepted;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:markAccepted').replace(
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Insight>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Insight>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Billingaccounts$Locations$Insighttypes$Insights$Get
    extends StandardParameters {
    /**
     * Required. Name of the insight.
     */
    name?: string;
  }
  export interface Params$Resource$Billingaccounts$Locations$Insighttypes$Insights$List
    extends StandardParameters {
    /**
     * Optional. Filter expression to restrict the insights returned. Supported filter fields: * `stateInfo.state` * `insightSubtype` * `severity` * `targetResources` Examples: * `stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED` * `insightSubtype = PERMISSIONS_USAGE` * `severity = CRITICAL OR severity = HIGH` * `targetResources : //compute.googleapis.com/projects/1234/zones/us-central1-a/instances/instance-1` * `stateInfo.state = ACTIVE AND (severity = CRITICAL OR severity = HIGH)` The max allowed filter length is 500 characters. (These expressions are based on the filter language described at https://google.aip.dev/160)
     */
    filter?: string;
    /**
     * Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return.
     */
    pageSize?: number;
    /**
     * Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call.
     */
    pageToken?: string;
    /**
     * Required. The container resource on which to execute the request. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `projects/[PROJECT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `folders/[FOLDER_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ INSIGHT_TYPE_ID refers to supported insight types: https://cloud.google.com/recommender/docs/insights/insight-types.
     */
    parent?: string;
  }
  export interface Params$Resource$Billingaccounts$Locations$Insighttypes$Insights$Markaccepted
    extends StandardParameters {
    /**
     * Required. Name of the insight.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecommenderV1beta1MarkInsightAcceptedRequest;
  }

  export class Resource$Billingaccounts$Locations$Recommenders {
    context: APIRequestContext;
    recommendations: Resource$Billingaccounts$Locations$Recommenders$Recommendations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.recommendations =
        new Resource$Billingaccounts$Locations$Recommenders$Recommendations(
          this.context
        );
    }

    /**
     * Gets the requested Recommender Config. There is only one instance of the config for each Recommender.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await recommender.billingAccounts.locations.recommenders.getConfig({
     *       // Required. Name of the Recommendation Config to get. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` * `projects/[PROJECT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config`
     *       name: 'billingAccounts/my-billingAccount/locations/my-location/recommenders/my-recommender/config',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "name": "my_name",
     *   //   "recommenderGenerationConfig": {},
     *   //   "revisionId": "my_revisionId",
     *   //   "updateTime": "my_updateTime"
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
    getConfig(
      params: Params$Resource$Billingaccounts$Locations$Recommenders$Getconfig,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getConfig(
      params?: Params$Resource$Billingaccounts$Locations$Recommenders$Getconfig,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
    >;
    getConfig(
      params: Params$Resource$Billingaccounts$Locations$Recommenders$Getconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getConfig(
      params: Params$Resource$Billingaccounts$Locations$Recommenders$Getconfig,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
    ): void;
    getConfig(
      params: Params$Resource$Billingaccounts$Locations$Recommenders$Getconfig,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
    ): void;
    getConfig(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
    ): void;
    getConfig(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Locations$Recommenders$Getconfig
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Locations$Recommenders$Getconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Billingaccounts$Locations$Recommenders$Getconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>(
          parameters
        );
      }
    }

    /**
     * Updates a Recommender Config. This will create a new revision of the config.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await recommender.billingAccounts.locations.recommenders.updateConfig({
     *       // Identifier. Name of recommender config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config
     *       name: 'billingAccounts/my-billingAccount/locations/my-location/recommenders/my-recommender/config',
     *       // The list of fields to be updated.
     *       updateMask: 'placeholder-value',
     *       // If true, validate the request and preview the change, but do not actually update it.
     *       validateOnly: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "annotations": {},
     *         //   "displayName": "my_displayName",
     *         //   "etag": "my_etag",
     *         //   "name": "my_name",
     *         //   "recommenderGenerationConfig": {},
     *         //   "revisionId": "my_revisionId",
     *         //   "updateTime": "my_updateTime"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "name": "my_name",
     *   //   "recommenderGenerationConfig": {},
     *   //   "revisionId": "my_revisionId",
     *   //   "updateTime": "my_updateTime"
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
    updateConfig(
      params: Params$Resource$Billingaccounts$Locations$Recommenders$Updateconfig,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateConfig(
      params?: Params$Resource$Billingaccounts$Locations$Recommenders$Updateconfig,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
    >;
    updateConfig(
      params: Params$Resource$Billingaccounts$Locations$Recommenders$Updateconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateConfig(
      params: Params$Resource$Billingaccounts$Locations$Recommenders$Updateconfig,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
    ): void;
    updateConfig(
      params: Params$Resource$Billingaccounts$Locations$Recommenders$Updateconfig,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
    ): void;
    updateConfig(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
    ): void;
    updateConfig(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Locations$Recommenders$Updateconfig
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Locations$Recommenders$Updateconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Billingaccounts$Locations$Recommenders$Updateconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Billingaccounts$Locations$Recommenders$Getconfig
    extends StandardParameters {
    /**
     * Required. Name of the Recommendation Config to get. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` * `projects/[PROJECT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config`
     */
    name?: string;
  }
  export interface Params$Resource$Billingaccounts$Locations$Recommenders$Updateconfig
    extends StandardParameters {
    /**
     * Identifier. Name of recommender config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;
    /**
     * If true, validate the request and preview the change, but do not actually update it.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecommenderV1beta1RecommenderConfig;
  }

  export class Resource$Billingaccounts$Locations$Recommenders$Recommendations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the requested recommendation. Requires the recommender.*.get IAM permission for the specified recommender.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await recommender.billingAccounts.locations.recommenders.recommendations.get(
     *       {
     *         // Required. Name of the recommendation.
     *         name: 'billingAccounts/my-billingAccount/locations/my-location/recommenders/my-recommender/recommendations/my-recommendation',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "additionalImpact": [],
     *   //   "associatedInsights": [],
     *   //   "content": {},
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "lastRefreshTime": "my_lastRefreshTime",
     *   //   "name": "my_name",
     *   //   "primaryImpact": {},
     *   //   "priority": "my_priority",
     *   //   "recommenderSubtype": "my_recommenderSubtype",
     *   //   "stateInfo": {},
     *   //   "targetResources": [],
     *   //   "xorGroupId": "my_xorGroupId"
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
      params: Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    >;
    get(
      params: Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    get(
      params: Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$Get
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Recommendation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Recommendation>(
          parameters
        );
      }
    }

    /**
     * Lists recommendations for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified recommender.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await recommender.billingAccounts.locations.recommenders.recommendations.list(
     *       {
     *         // Filter expression to restrict the recommendations returned. Supported filter fields: * `state_info.state` * `recommenderSubtype` * `priority` * `targetResources` Examples: * `stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED` * `recommenderSubtype = REMOVE_ROLE OR recommenderSubtype = REPLACE_ROLE` * `priority = P1 OR priority = P2` * `targetResources : //compute.googleapis.com/projects/1234/zones/us-central1-a/instances/instance-1` * `stateInfo.state = ACTIVE AND (priority = P1 OR priority = P2)` The max allowed filter length is 500 characters. (These expressions are based on the filter language described at https://google.aip.dev/160)
     *         filter: 'placeholder-value',
     *         // Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return.
     *         pageSize: 'placeholder-value',
     *         // Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call.
     *         pageToken: 'placeholder-value',
     *         // Required. The container resource on which to execute the request. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `projects/[PROJECT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `folders/[FOLDER_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ RECOMMENDER_ID refers to supported recommenders: https://cloud.google.com/recommender/docs/recommenders.
     *         parent:
     *           'billingAccounts/my-billingAccount/locations/my-location/recommenders/my-recommender',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "recommendations": []
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
      params: Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse>
    >;
    list(
      params: Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse>
    ): void;
    list(
      params: Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$List,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$List
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/recommendations').replace(
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse>(
          parameters
        );
      }
    }

    /**
     * Marks the Recommendation State as Claimed. Users can use this method to indicate to the Recommender API that they are starting to apply the recommendation themselves. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationClaimed can be applied to recommendations in CLAIMED or ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await recommender.billingAccounts.locations.recommenders.recommendations.markClaimed(
     *       {
     *         // Required. Name of the recommendation.
     *         name: 'billingAccounts/my-billingAccount/locations/my-location/recommenders/my-recommender/recommendations/my-recommendation',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "etag": "my_etag",
     *           //   "stateMetadata": {}
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "additionalImpact": [],
     *   //   "associatedInsights": [],
     *   //   "content": {},
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "lastRefreshTime": "my_lastRefreshTime",
     *   //   "name": "my_name",
     *   //   "primaryImpact": {},
     *   //   "priority": "my_priority",
     *   //   "recommenderSubtype": "my_recommenderSubtype",
     *   //   "stateInfo": {},
     *   //   "targetResources": [],
     *   //   "xorGroupId": "my_xorGroupId"
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
    markClaimed(
      params: Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$Markclaimed,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    markClaimed(
      params?: Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$Markclaimed,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    >;
    markClaimed(
      params: Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$Markclaimed,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    markClaimed(
      params: Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$Markclaimed,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markClaimed(
      params: Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$Markclaimed,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markClaimed(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markClaimed(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$Markclaimed
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$Markclaimed;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$Markclaimed;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:markClaimed').replace(
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Recommendation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Recommendation>(
          parameters
        );
      }
    }

    /**
     * Mark the Recommendation State as Dismissed. Users can use this method to indicate to the Recommender API that an ACTIVE recommendation has to be marked back as DISMISSED. MarkRecommendationDismissed can be applied to recommendations in ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await recommender.billingAccounts.locations.recommenders.recommendations.markDismissed(
     *       {
     *         // Required. Name of the recommendation.
     *         name: 'billingAccounts/my-billingAccount/locations/my-location/recommenders/my-recommender/recommendations/my-recommendation',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "etag": "my_etag"
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "additionalImpact": [],
     *   //   "associatedInsights": [],
     *   //   "content": {},
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "lastRefreshTime": "my_lastRefreshTime",
     *   //   "name": "my_name",
     *   //   "primaryImpact": {},
     *   //   "priority": "my_priority",
     *   //   "recommenderSubtype": "my_recommenderSubtype",
     *   //   "stateInfo": {},
     *   //   "targetResources": [],
     *   //   "xorGroupId": "my_xorGroupId"
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
    markDismissed(
      params: Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$Markdismissed,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    markDismissed(
      params?: Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$Markdismissed,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    >;
    markDismissed(
      params: Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$Markdismissed,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    markDismissed(
      params: Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$Markdismissed,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markDismissed(
      params: Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$Markdismissed,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markDismissed(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markDismissed(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$Markdismissed
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$Markdismissed;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$Markdismissed;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:markDismissed').replace(
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Recommendation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Recommendation>(
          parameters
        );
      }
    }

    /**
     * Marks the Recommendation State as Failed. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation failed. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationFailed can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await recommender.billingAccounts.locations.recommenders.recommendations.markFailed(
     *       {
     *         // Required. Name of the recommendation.
     *         name: 'billingAccounts/my-billingAccount/locations/my-location/recommenders/my-recommender/recommendations/my-recommendation',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "etag": "my_etag",
     *           //   "stateMetadata": {}
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "additionalImpact": [],
     *   //   "associatedInsights": [],
     *   //   "content": {},
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "lastRefreshTime": "my_lastRefreshTime",
     *   //   "name": "my_name",
     *   //   "primaryImpact": {},
     *   //   "priority": "my_priority",
     *   //   "recommenderSubtype": "my_recommenderSubtype",
     *   //   "stateInfo": {},
     *   //   "targetResources": [],
     *   //   "xorGroupId": "my_xorGroupId"
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
    markFailed(
      params: Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$Markfailed,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    markFailed(
      params?: Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$Markfailed,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    >;
    markFailed(
      params: Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$Markfailed,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    markFailed(
      params: Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$Markfailed,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markFailed(
      params: Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$Markfailed,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markFailed(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markFailed(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$Markfailed
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$Markfailed;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$Markfailed;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:markFailed').replace(
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Recommendation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Recommendation>(
          parameters
        );
      }
    }

    /**
     * Marks the Recommendation State as Succeeded. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation was successful. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationSucceeded can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await recommender.billingAccounts.locations.recommenders.recommendations.markSucceeded(
     *       {
     *         // Required. Name of the recommendation.
     *         name: 'billingAccounts/my-billingAccount/locations/my-location/recommenders/my-recommender/recommendations/my-recommendation',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "etag": "my_etag",
     *           //   "stateMetadata": {}
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "additionalImpact": [],
     *   //   "associatedInsights": [],
     *   //   "content": {},
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "lastRefreshTime": "my_lastRefreshTime",
     *   //   "name": "my_name",
     *   //   "primaryImpact": {},
     *   //   "priority": "my_priority",
     *   //   "recommenderSubtype": "my_recommenderSubtype",
     *   //   "stateInfo": {},
     *   //   "targetResources": [],
     *   //   "xorGroupId": "my_xorGroupId"
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
    markSucceeded(
      params: Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$Marksucceeded,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    markSucceeded(
      params?: Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$Marksucceeded,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    >;
    markSucceeded(
      params: Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$Marksucceeded,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    markSucceeded(
      params: Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$Marksucceeded,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markSucceeded(
      params: Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$Marksucceeded,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markSucceeded(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markSucceeded(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$Marksucceeded
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$Marksucceeded;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$Marksucceeded;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:markSucceeded').replace(
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Recommendation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Recommendation>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$Get
    extends StandardParameters {
    /**
     * Required. Name of the recommendation.
     */
    name?: string;
  }
  export interface Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$List
    extends StandardParameters {
    /**
     * Filter expression to restrict the recommendations returned. Supported filter fields: * `state_info.state` * `recommenderSubtype` * `priority` * `targetResources` Examples: * `stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED` * `recommenderSubtype = REMOVE_ROLE OR recommenderSubtype = REPLACE_ROLE` * `priority = P1 OR priority = P2` * `targetResources : //compute.googleapis.com/projects/1234/zones/us-central1-a/instances/instance-1` * `stateInfo.state = ACTIVE AND (priority = P1 OR priority = P2)` The max allowed filter length is 500 characters. (These expressions are based on the filter language described at https://google.aip.dev/160)
     */
    filter?: string;
    /**
     * Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return.
     */
    pageSize?: number;
    /**
     * Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call.
     */
    pageToken?: string;
    /**
     * Required. The container resource on which to execute the request. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `projects/[PROJECT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `folders/[FOLDER_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ RECOMMENDER_ID refers to supported recommenders: https://cloud.google.com/recommender/docs/recommenders.
     */
    parent?: string;
  }
  export interface Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$Markclaimed
    extends StandardParameters {
    /**
     * Required. Name of the recommendation.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecommenderV1beta1MarkRecommendationClaimedRequest;
  }
  export interface Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$Markdismissed
    extends StandardParameters {
    /**
     * Required. Name of the recommendation.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecommenderV1beta1MarkRecommendationDismissedRequest;
  }
  export interface Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$Markfailed
    extends StandardParameters {
    /**
     * Required. Name of the recommendation.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecommenderV1beta1MarkRecommendationFailedRequest;
  }
  export interface Params$Resource$Billingaccounts$Locations$Recommenders$Recommendations$Marksucceeded
    extends StandardParameters {
    /**
     * Required. Name of the recommendation.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecommenderV1beta1MarkRecommendationSucceededRequest;
  }

  export class Resource$Folders {
    context: APIRequestContext;
    locations: Resource$Folders$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Folders$Locations(this.context);
    }
  }

  export class Resource$Folders$Locations {
    context: APIRequestContext;
    insightTypes: Resource$Folders$Locations$Insighttypes;
    recommenders: Resource$Folders$Locations$Recommenders;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.insightTypes = new Resource$Folders$Locations$Insighttypes(
        this.context
      );
      this.recommenders = new Resource$Folders$Locations$Recommenders(
        this.context
      );
    }

    /**
     * Lists locations with recommendations or insights.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await recommender.folders.locations.list({
     *     // Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations.
     *     extraLocationTypes: 'placeholder-value',
     *     // A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     *     filter: 'placeholder-value',
     *     // The resource that owns the locations collection, if applicable.
     *     name: 'folders/my-folder',
     *     // The maximum number of results to return. If not set, the service selects a default.
     *     pageSize: 'placeholder-value',
     *     // A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "locations": [],
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
      params: Params$Resource$Folders$Locations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Folders$Locations$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudLocationListLocationsResponse>
    >;
    list(
      params: Params$Resource$Folders$Locations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Folders$Locations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>
    ): void;
    list(
      params: Params$Resource$Folders$Locations$List,
      callback: BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Folders$Locations$List
        | BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudLocationListLocationsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Locations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Locations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}/locations').replace(
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
        createAPIRequest<Schema$GoogleCloudLocationListLocationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudLocationListLocationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Folders$Locations$List
    extends StandardParameters {
    /**
     * Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations.
     */
    extraLocationTypes?: string[];
    /**
     * A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     */
    filter?: string;
    /**
     * The resource that owns the locations collection, if applicable.
     */
    name?: string;
    /**
     * The maximum number of results to return. If not set, the service selects a default.
     */
    pageSize?: number;
    /**
     * A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     */
    pageToken?: string;
  }

  export class Resource$Folders$Locations$Insighttypes {
    context: APIRequestContext;
    insights: Resource$Folders$Locations$Insighttypes$Insights;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.insights = new Resource$Folders$Locations$Insighttypes$Insights(
        this.context
      );
    }
  }

  export class Resource$Folders$Locations$Insighttypes$Insights {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the requested insight. Requires the recommender.*.get IAM permission for the specified insight type.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await recommender.folders.locations.insightTypes.insights.get({
     *     // Required. Name of the insight.
     *     name: 'folders/my-folder/locations/my-location/insightTypes/my-insightType/insights/my-insight',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "associatedRecommendations": [],
     *   //   "category": "my_category",
     *   //   "content": {},
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "insightSubtype": "my_insightSubtype",
     *   //   "lastRefreshTime": "my_lastRefreshTime",
     *   //   "name": "my_name",
     *   //   "observationPeriod": "my_observationPeriod",
     *   //   "severity": "my_severity",
     *   //   "stateInfo": {},
     *   //   "targetResources": []
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
      params: Params$Resource$Folders$Locations$Insighttypes$Insights$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Folders$Locations$Insighttypes$Insights$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Insight>
    >;
    get(
      params: Params$Resource$Folders$Locations$Insighttypes$Insights$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Folders$Locations$Insighttypes$Insights$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
    ): void;
    get(
      params: Params$Resource$Folders$Locations$Insighttypes$Insights$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Folders$Locations$Insighttypes$Insights$Get
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Insight>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Locations$Insighttypes$Insights$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Locations$Insighttypes$Insights$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Insight>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Insight>(
          parameters
        );
      }
    }

    /**
     * Lists insights for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified insight type.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await recommender.folders.locations.insightTypes.insights.list({
     *     // Optional. Filter expression to restrict the insights returned. Supported filter fields: * `stateInfo.state` * `insightSubtype` * `severity` * `targetResources` Examples: * `stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED` * `insightSubtype = PERMISSIONS_USAGE` * `severity = CRITICAL OR severity = HIGH` * `targetResources : //compute.googleapis.com/projects/1234/zones/us-central1-a/instances/instance-1` * `stateInfo.state = ACTIVE AND (severity = CRITICAL OR severity = HIGH)` The max allowed filter length is 500 characters. (These expressions are based on the filter language described at https://google.aip.dev/160)
     *     filter: 'placeholder-value',
     *     // Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return.
     *     pageSize: 'placeholder-value',
     *     // Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call.
     *     pageToken: 'placeholder-value',
     *     // Required. The container resource on which to execute the request. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `projects/[PROJECT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `folders/[FOLDER_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ INSIGHT_TYPE_ID refers to supported insight types: https://cloud.google.com/recommender/docs/insights/insight-types.
     *     parent:
     *       'folders/my-folder/locations/my-location/insightTypes/my-insightType',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "insights": [],
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
      params: Params$Resource$Folders$Locations$Insighttypes$Insights$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Folders$Locations$Insighttypes$Insights$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1ListInsightsResponse>
    >;
    list(
      params: Params$Resource$Folders$Locations$Insighttypes$Insights$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Folders$Locations$Insighttypes$Insights$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListInsightsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListInsightsResponse>
    ): void;
    list(
      params: Params$Resource$Folders$Locations$Insighttypes$Insights$List,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListInsightsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListInsightsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Folders$Locations$Insighttypes$Insights$List
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListInsightsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListInsightsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListInsightsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1ListInsightsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Locations$Insighttypes$Insights$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Locations$Insighttypes$Insights$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/insights').replace(
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1ListInsightsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1ListInsightsResponse>(
          parameters
        );
      }
    }

    /**
     * Marks the Insight State as Accepted. Users can use this method to indicate to the Recommender API that they have applied some action based on the insight. This stops the insight content from being updated. MarkInsightAccepted can be applied to insights in ACTIVE state. Requires the recommender.*.update IAM permission for the specified insight.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await recommender.folders.locations.insightTypes.insights.markAccepted({
     *       // Required. Name of the insight.
     *       name: 'folders/my-folder/locations/my-location/insightTypes/my-insightType/insights/my-insight',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "etag": "my_etag",
     *         //   "stateMetadata": {}
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "associatedRecommendations": [],
     *   //   "category": "my_category",
     *   //   "content": {},
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "insightSubtype": "my_insightSubtype",
     *   //   "lastRefreshTime": "my_lastRefreshTime",
     *   //   "name": "my_name",
     *   //   "observationPeriod": "my_observationPeriod",
     *   //   "severity": "my_severity",
     *   //   "stateInfo": {},
     *   //   "targetResources": []
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
    markAccepted(
      params: Params$Resource$Folders$Locations$Insighttypes$Insights$Markaccepted,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    markAccepted(
      params?: Params$Resource$Folders$Locations$Insighttypes$Insights$Markaccepted,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Insight>
    >;
    markAccepted(
      params: Params$Resource$Folders$Locations$Insighttypes$Insights$Markaccepted,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    markAccepted(
      params: Params$Resource$Folders$Locations$Insighttypes$Insights$Markaccepted,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
    ): void;
    markAccepted(
      params: Params$Resource$Folders$Locations$Insighttypes$Insights$Markaccepted,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
    ): void;
    markAccepted(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
    ): void;
    markAccepted(
      paramsOrCallback?:
        | Params$Resource$Folders$Locations$Insighttypes$Insights$Markaccepted
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Insight>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Locations$Insighttypes$Insights$Markaccepted;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Locations$Insighttypes$Insights$Markaccepted;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:markAccepted').replace(
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Insight>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Insight>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Folders$Locations$Insighttypes$Insights$Get
    extends StandardParameters {
    /**
     * Required. Name of the insight.
     */
    name?: string;
  }
  export interface Params$Resource$Folders$Locations$Insighttypes$Insights$List
    extends StandardParameters {
    /**
     * Optional. Filter expression to restrict the insights returned. Supported filter fields: * `stateInfo.state` * `insightSubtype` * `severity` * `targetResources` Examples: * `stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED` * `insightSubtype = PERMISSIONS_USAGE` * `severity = CRITICAL OR severity = HIGH` * `targetResources : //compute.googleapis.com/projects/1234/zones/us-central1-a/instances/instance-1` * `stateInfo.state = ACTIVE AND (severity = CRITICAL OR severity = HIGH)` The max allowed filter length is 500 characters. (These expressions are based on the filter language described at https://google.aip.dev/160)
     */
    filter?: string;
    /**
     * Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return.
     */
    pageSize?: number;
    /**
     * Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call.
     */
    pageToken?: string;
    /**
     * Required. The container resource on which to execute the request. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `projects/[PROJECT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `folders/[FOLDER_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ INSIGHT_TYPE_ID refers to supported insight types: https://cloud.google.com/recommender/docs/insights/insight-types.
     */
    parent?: string;
  }
  export interface Params$Resource$Folders$Locations$Insighttypes$Insights$Markaccepted
    extends StandardParameters {
    /**
     * Required. Name of the insight.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecommenderV1beta1MarkInsightAcceptedRequest;
  }

  export class Resource$Folders$Locations$Recommenders {
    context: APIRequestContext;
    recommendations: Resource$Folders$Locations$Recommenders$Recommendations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.recommendations =
        new Resource$Folders$Locations$Recommenders$Recommendations(
          this.context
        );
    }
  }

  export class Resource$Folders$Locations$Recommenders$Recommendations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the requested recommendation. Requires the recommender.*.get IAM permission for the specified recommender.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await recommender.folders.locations.recommenders.recommendations.get({
     *       // Required. Name of the recommendation.
     *       name: 'folders/my-folder/locations/my-location/recommenders/my-recommender/recommendations/my-recommendation',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "additionalImpact": [],
     *   //   "associatedInsights": [],
     *   //   "content": {},
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "lastRefreshTime": "my_lastRefreshTime",
     *   //   "name": "my_name",
     *   //   "primaryImpact": {},
     *   //   "priority": "my_priority",
     *   //   "recommenderSubtype": "my_recommenderSubtype",
     *   //   "stateInfo": {},
     *   //   "targetResources": [],
     *   //   "xorGroupId": "my_xorGroupId"
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
      params: Params$Resource$Folders$Locations$Recommenders$Recommendations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Folders$Locations$Recommenders$Recommendations$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    >;
    get(
      params: Params$Resource$Folders$Locations$Recommenders$Recommendations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Folders$Locations$Recommenders$Recommendations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    get(
      params: Params$Resource$Folders$Locations$Recommenders$Recommendations$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Folders$Locations$Recommenders$Recommendations$Get
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Locations$Recommenders$Recommendations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Locations$Recommenders$Recommendations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Recommendation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Recommendation>(
          parameters
        );
      }
    }

    /**
     * Lists recommendations for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified recommender.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await recommender.folders.locations.recommenders.recommendations.list({
     *       // Filter expression to restrict the recommendations returned. Supported filter fields: * `state_info.state` * `recommenderSubtype` * `priority` * `targetResources` Examples: * `stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED` * `recommenderSubtype = REMOVE_ROLE OR recommenderSubtype = REPLACE_ROLE` * `priority = P1 OR priority = P2` * `targetResources : //compute.googleapis.com/projects/1234/zones/us-central1-a/instances/instance-1` * `stateInfo.state = ACTIVE AND (priority = P1 OR priority = P2)` The max allowed filter length is 500 characters. (These expressions are based on the filter language described at https://google.aip.dev/160)
     *       filter: 'placeholder-value',
     *       // Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return.
     *       pageSize: 'placeholder-value',
     *       // Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call.
     *       pageToken: 'placeholder-value',
     *       // Required. The container resource on which to execute the request. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `projects/[PROJECT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `folders/[FOLDER_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ RECOMMENDER_ID refers to supported recommenders: https://cloud.google.com/recommender/docs/recommenders.
     *       parent:
     *         'folders/my-folder/locations/my-location/recommenders/my-recommender',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "recommendations": []
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
      params: Params$Resource$Folders$Locations$Recommenders$Recommendations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Folders$Locations$Recommenders$Recommendations$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse>
    >;
    list(
      params: Params$Resource$Folders$Locations$Recommenders$Recommendations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Folders$Locations$Recommenders$Recommendations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse>
    ): void;
    list(
      params: Params$Resource$Folders$Locations$Recommenders$Recommendations$List,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Folders$Locations$Recommenders$Recommendations$List
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Locations$Recommenders$Recommendations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Locations$Recommenders$Recommendations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/recommendations').replace(
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse>(
          parameters
        );
      }
    }

    /**
     * Marks the Recommendation State as Claimed. Users can use this method to indicate to the Recommender API that they are starting to apply the recommendation themselves. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationClaimed can be applied to recommendations in CLAIMED or ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await recommender.folders.locations.recommenders.recommendations.markClaimed(
     *       {
     *         // Required. Name of the recommendation.
     *         name: 'folders/my-folder/locations/my-location/recommenders/my-recommender/recommendations/my-recommendation',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "etag": "my_etag",
     *           //   "stateMetadata": {}
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "additionalImpact": [],
     *   //   "associatedInsights": [],
     *   //   "content": {},
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "lastRefreshTime": "my_lastRefreshTime",
     *   //   "name": "my_name",
     *   //   "primaryImpact": {},
     *   //   "priority": "my_priority",
     *   //   "recommenderSubtype": "my_recommenderSubtype",
     *   //   "stateInfo": {},
     *   //   "targetResources": [],
     *   //   "xorGroupId": "my_xorGroupId"
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
    markClaimed(
      params: Params$Resource$Folders$Locations$Recommenders$Recommendations$Markclaimed,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    markClaimed(
      params?: Params$Resource$Folders$Locations$Recommenders$Recommendations$Markclaimed,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    >;
    markClaimed(
      params: Params$Resource$Folders$Locations$Recommenders$Recommendations$Markclaimed,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    markClaimed(
      params: Params$Resource$Folders$Locations$Recommenders$Recommendations$Markclaimed,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markClaimed(
      params: Params$Resource$Folders$Locations$Recommenders$Recommendations$Markclaimed,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markClaimed(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markClaimed(
      paramsOrCallback?:
        | Params$Resource$Folders$Locations$Recommenders$Recommendations$Markclaimed
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Locations$Recommenders$Recommendations$Markclaimed;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Locations$Recommenders$Recommendations$Markclaimed;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:markClaimed').replace(
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Recommendation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Recommendation>(
          parameters
        );
      }
    }

    /**
     * Mark the Recommendation State as Dismissed. Users can use this method to indicate to the Recommender API that an ACTIVE recommendation has to be marked back as DISMISSED. MarkRecommendationDismissed can be applied to recommendations in ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await recommender.folders.locations.recommenders.recommendations.markDismissed(
     *       {
     *         // Required. Name of the recommendation.
     *         name: 'folders/my-folder/locations/my-location/recommenders/my-recommender/recommendations/my-recommendation',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "etag": "my_etag"
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "additionalImpact": [],
     *   //   "associatedInsights": [],
     *   //   "content": {},
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "lastRefreshTime": "my_lastRefreshTime",
     *   //   "name": "my_name",
     *   //   "primaryImpact": {},
     *   //   "priority": "my_priority",
     *   //   "recommenderSubtype": "my_recommenderSubtype",
     *   //   "stateInfo": {},
     *   //   "targetResources": [],
     *   //   "xorGroupId": "my_xorGroupId"
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
    markDismissed(
      params: Params$Resource$Folders$Locations$Recommenders$Recommendations$Markdismissed,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    markDismissed(
      params?: Params$Resource$Folders$Locations$Recommenders$Recommendations$Markdismissed,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    >;
    markDismissed(
      params: Params$Resource$Folders$Locations$Recommenders$Recommendations$Markdismissed,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    markDismissed(
      params: Params$Resource$Folders$Locations$Recommenders$Recommendations$Markdismissed,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markDismissed(
      params: Params$Resource$Folders$Locations$Recommenders$Recommendations$Markdismissed,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markDismissed(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markDismissed(
      paramsOrCallback?:
        | Params$Resource$Folders$Locations$Recommenders$Recommendations$Markdismissed
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Locations$Recommenders$Recommendations$Markdismissed;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Locations$Recommenders$Recommendations$Markdismissed;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:markDismissed').replace(
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Recommendation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Recommendation>(
          parameters
        );
      }
    }

    /**
     * Marks the Recommendation State as Failed. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation failed. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationFailed can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await recommender.folders.locations.recommenders.recommendations.markFailed(
     *       {
     *         // Required. Name of the recommendation.
     *         name: 'folders/my-folder/locations/my-location/recommenders/my-recommender/recommendations/my-recommendation',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "etag": "my_etag",
     *           //   "stateMetadata": {}
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "additionalImpact": [],
     *   //   "associatedInsights": [],
     *   //   "content": {},
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "lastRefreshTime": "my_lastRefreshTime",
     *   //   "name": "my_name",
     *   //   "primaryImpact": {},
     *   //   "priority": "my_priority",
     *   //   "recommenderSubtype": "my_recommenderSubtype",
     *   //   "stateInfo": {},
     *   //   "targetResources": [],
     *   //   "xorGroupId": "my_xorGroupId"
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
    markFailed(
      params: Params$Resource$Folders$Locations$Recommenders$Recommendations$Markfailed,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    markFailed(
      params?: Params$Resource$Folders$Locations$Recommenders$Recommendations$Markfailed,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    >;
    markFailed(
      params: Params$Resource$Folders$Locations$Recommenders$Recommendations$Markfailed,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    markFailed(
      params: Params$Resource$Folders$Locations$Recommenders$Recommendations$Markfailed,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markFailed(
      params: Params$Resource$Folders$Locations$Recommenders$Recommendations$Markfailed,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markFailed(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markFailed(
      paramsOrCallback?:
        | Params$Resource$Folders$Locations$Recommenders$Recommendations$Markfailed
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Locations$Recommenders$Recommendations$Markfailed;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Locations$Recommenders$Recommendations$Markfailed;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:markFailed').replace(
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Recommendation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Recommendation>(
          parameters
        );
      }
    }

    /**
     * Marks the Recommendation State as Succeeded. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation was successful. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationSucceeded can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await recommender.folders.locations.recommenders.recommendations.markSucceeded(
     *       {
     *         // Required. Name of the recommendation.
     *         name: 'folders/my-folder/locations/my-location/recommenders/my-recommender/recommendations/my-recommendation',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "etag": "my_etag",
     *           //   "stateMetadata": {}
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "additionalImpact": [],
     *   //   "associatedInsights": [],
     *   //   "content": {},
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "lastRefreshTime": "my_lastRefreshTime",
     *   //   "name": "my_name",
     *   //   "primaryImpact": {},
     *   //   "priority": "my_priority",
     *   //   "recommenderSubtype": "my_recommenderSubtype",
     *   //   "stateInfo": {},
     *   //   "targetResources": [],
     *   //   "xorGroupId": "my_xorGroupId"
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
    markSucceeded(
      params: Params$Resource$Folders$Locations$Recommenders$Recommendations$Marksucceeded,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    markSucceeded(
      params?: Params$Resource$Folders$Locations$Recommenders$Recommendations$Marksucceeded,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    >;
    markSucceeded(
      params: Params$Resource$Folders$Locations$Recommenders$Recommendations$Marksucceeded,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    markSucceeded(
      params: Params$Resource$Folders$Locations$Recommenders$Recommendations$Marksucceeded,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markSucceeded(
      params: Params$Resource$Folders$Locations$Recommenders$Recommendations$Marksucceeded,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markSucceeded(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markSucceeded(
      paramsOrCallback?:
        | Params$Resource$Folders$Locations$Recommenders$Recommendations$Marksucceeded
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Locations$Recommenders$Recommendations$Marksucceeded;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Locations$Recommenders$Recommendations$Marksucceeded;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:markSucceeded').replace(
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Recommendation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Recommendation>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Folders$Locations$Recommenders$Recommendations$Get
    extends StandardParameters {
    /**
     * Required. Name of the recommendation.
     */
    name?: string;
  }
  export interface Params$Resource$Folders$Locations$Recommenders$Recommendations$List
    extends StandardParameters {
    /**
     * Filter expression to restrict the recommendations returned. Supported filter fields: * `state_info.state` * `recommenderSubtype` * `priority` * `targetResources` Examples: * `stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED` * `recommenderSubtype = REMOVE_ROLE OR recommenderSubtype = REPLACE_ROLE` * `priority = P1 OR priority = P2` * `targetResources : //compute.googleapis.com/projects/1234/zones/us-central1-a/instances/instance-1` * `stateInfo.state = ACTIVE AND (priority = P1 OR priority = P2)` The max allowed filter length is 500 characters. (These expressions are based on the filter language described at https://google.aip.dev/160)
     */
    filter?: string;
    /**
     * Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return.
     */
    pageSize?: number;
    /**
     * Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call.
     */
    pageToken?: string;
    /**
     * Required. The container resource on which to execute the request. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `projects/[PROJECT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `folders/[FOLDER_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ RECOMMENDER_ID refers to supported recommenders: https://cloud.google.com/recommender/docs/recommenders.
     */
    parent?: string;
  }
  export interface Params$Resource$Folders$Locations$Recommenders$Recommendations$Markclaimed
    extends StandardParameters {
    /**
     * Required. Name of the recommendation.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecommenderV1beta1MarkRecommendationClaimedRequest;
  }
  export interface Params$Resource$Folders$Locations$Recommenders$Recommendations$Markdismissed
    extends StandardParameters {
    /**
     * Required. Name of the recommendation.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecommenderV1beta1MarkRecommendationDismissedRequest;
  }
  export interface Params$Resource$Folders$Locations$Recommenders$Recommendations$Markfailed
    extends StandardParameters {
    /**
     * Required. Name of the recommendation.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecommenderV1beta1MarkRecommendationFailedRequest;
  }
  export interface Params$Resource$Folders$Locations$Recommenders$Recommendations$Marksucceeded
    extends StandardParameters {
    /**
     * Required. Name of the recommendation.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecommenderV1beta1MarkRecommendationSucceededRequest;
  }

  export class Resource$Insighttypes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists available InsightTypes. No IAM permissions are required.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await recommender.insightTypes.list({
     *     // Optional. The number of InsightTypes to return per page. The service may return fewer than this value.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListRecommenders` call. Provide this to retrieve the subsequent page.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "insightTypes": [],
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
      params: Params$Resource$Insighttypes$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Insighttypes$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1ListInsightTypesResponse>
    >;
    list(
      params: Params$Resource$Insighttypes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Insighttypes$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListInsightTypesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListInsightTypesResponse>
    ): void;
    list(
      params: Params$Resource$Insighttypes$List,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListInsightTypesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListInsightTypesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Insighttypes$List
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListInsightTypesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListInsightTypesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListInsightTypesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1ListInsightTypesResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Insighttypes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Insighttypes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/insightTypes').replace(
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1ListInsightTypesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1ListInsightTypesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Insighttypes$List
    extends StandardParameters {
    /**
     * Optional. The number of InsightTypes to return per page. The service may return fewer than this value.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListRecommenders` call. Provide this to retrieve the subsequent page.
     */
    pageToken?: string;
  }

  export class Resource$Organizations {
    context: APIRequestContext;
    locations: Resource$Organizations$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Organizations$Locations(this.context);
    }
  }

  export class Resource$Organizations$Locations {
    context: APIRequestContext;
    insightTypes: Resource$Organizations$Locations$Insighttypes;
    recommenders: Resource$Organizations$Locations$Recommenders;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.insightTypes = new Resource$Organizations$Locations$Insighttypes(
        this.context
      );
      this.recommenders = new Resource$Organizations$Locations$Recommenders(
        this.context
      );
    }

    /**
     * Lists locations with recommendations or insights.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await recommender.organizations.locations.list({
     *     // Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations.
     *     extraLocationTypes: 'placeholder-value',
     *     // A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     *     filter: 'placeholder-value',
     *     // The resource that owns the locations collection, if applicable.
     *     name: 'organizations/my-organization',
     *     // The maximum number of results to return. If not set, the service selects a default.
     *     pageSize: 'placeholder-value',
     *     // A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "locations": [],
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
      params: Params$Resource$Organizations$Locations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Organizations$Locations$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudLocationListLocationsResponse>
    >;
    list(
      params: Params$Resource$Organizations$Locations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Locations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Locations$List,
      callback: BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$List
        | BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudLocationListLocationsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Locations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}/locations').replace(
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
        createAPIRequest<Schema$GoogleCloudLocationListLocationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudLocationListLocationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Locations$List
    extends StandardParameters {
    /**
     * Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations.
     */
    extraLocationTypes?: string[];
    /**
     * A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     */
    filter?: string;
    /**
     * The resource that owns the locations collection, if applicable.
     */
    name?: string;
    /**
     * The maximum number of results to return. If not set, the service selects a default.
     */
    pageSize?: number;
    /**
     * A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     */
    pageToken?: string;
  }

  export class Resource$Organizations$Locations$Insighttypes {
    context: APIRequestContext;
    insights: Resource$Organizations$Locations$Insighttypes$Insights;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.insights =
        new Resource$Organizations$Locations$Insighttypes$Insights(
          this.context
        );
    }

    /**
     * Gets the requested InsightTypeConfig. There is only one instance of the config for each InsightType.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await recommender.organizations.locations.insightTypes.getConfig({
     *     // Required. Name of the InsightTypeConfig to get. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` * `projects/[PROJECT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config`
     *     name: 'organizations/my-organization/locations/my-location/insightTypes/my-insightType/config',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "insightTypeGenerationConfig": {},
     *   //   "name": "my_name",
     *   //   "revisionId": "my_revisionId",
     *   //   "updateTime": "my_updateTime"
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
    getConfig(
      params: Params$Resource$Organizations$Locations$Insighttypes$Getconfig,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getConfig(
      params?: Params$Resource$Organizations$Locations$Insighttypes$Getconfig,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
    >;
    getConfig(
      params: Params$Resource$Organizations$Locations$Insighttypes$Getconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getConfig(
      params: Params$Resource$Organizations$Locations$Insighttypes$Getconfig,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
    ): void;
    getConfig(
      params: Params$Resource$Organizations$Locations$Insighttypes$Getconfig,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
    ): void;
    getConfig(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
    ): void;
    getConfig(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Insighttypes$Getconfig
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Insighttypes$Getconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Locations$Insighttypes$Getconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>(
          parameters
        );
      }
    }

    /**
     * Updates an InsightTypeConfig change. This will create a new revision of the config.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await recommender.organizations.locations.insightTypes.updateConfig({
     *       // Identifier. Name of insight type config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config
     *       name: 'organizations/my-organization/locations/my-location/insightTypes/my-insightType/config',
     *       // The list of fields to be updated.
     *       updateMask: 'placeholder-value',
     *       // If true, validate the request and preview the change, but do not actually update it.
     *       validateOnly: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "annotations": {},
     *         //   "displayName": "my_displayName",
     *         //   "etag": "my_etag",
     *         //   "insightTypeGenerationConfig": {},
     *         //   "name": "my_name",
     *         //   "revisionId": "my_revisionId",
     *         //   "updateTime": "my_updateTime"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "insightTypeGenerationConfig": {},
     *   //   "name": "my_name",
     *   //   "revisionId": "my_revisionId",
     *   //   "updateTime": "my_updateTime"
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
    updateConfig(
      params: Params$Resource$Organizations$Locations$Insighttypes$Updateconfig,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateConfig(
      params?: Params$Resource$Organizations$Locations$Insighttypes$Updateconfig,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
    >;
    updateConfig(
      params: Params$Resource$Organizations$Locations$Insighttypes$Updateconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateConfig(
      params: Params$Resource$Organizations$Locations$Insighttypes$Updateconfig,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
    ): void;
    updateConfig(
      params: Params$Resource$Organizations$Locations$Insighttypes$Updateconfig,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
    ): void;
    updateConfig(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
    ): void;
    updateConfig(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Insighttypes$Updateconfig
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Insighttypes$Updateconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Locations$Insighttypes$Updateconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Locations$Insighttypes$Getconfig
    extends StandardParameters {
    /**
     * Required. Name of the InsightTypeConfig to get. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` * `projects/[PROJECT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config`
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Locations$Insighttypes$Updateconfig
    extends StandardParameters {
    /**
     * Identifier. Name of insight type config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;
    /**
     * If true, validate the request and preview the change, but do not actually update it.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig;
  }

  export class Resource$Organizations$Locations$Insighttypes$Insights {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the requested insight. Requires the recommender.*.get IAM permission for the specified insight type.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await recommender.organizations.locations.insightTypes.insights.get({
     *       // Required. Name of the insight.
     *       name: 'organizations/my-organization/locations/my-location/insightTypes/my-insightType/insights/my-insight',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "associatedRecommendations": [],
     *   //   "category": "my_category",
     *   //   "content": {},
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "insightSubtype": "my_insightSubtype",
     *   //   "lastRefreshTime": "my_lastRefreshTime",
     *   //   "name": "my_name",
     *   //   "observationPeriod": "my_observationPeriod",
     *   //   "severity": "my_severity",
     *   //   "stateInfo": {},
     *   //   "targetResources": []
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
      params: Params$Resource$Organizations$Locations$Insighttypes$Insights$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Organizations$Locations$Insighttypes$Insights$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Insight>
    >;
    get(
      params: Params$Resource$Organizations$Locations$Insighttypes$Insights$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Organizations$Locations$Insighttypes$Insights$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
    ): void;
    get(
      params: Params$Resource$Organizations$Locations$Insighttypes$Insights$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Insighttypes$Insights$Get
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Insight>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Insighttypes$Insights$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Locations$Insighttypes$Insights$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Insight>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Insight>(
          parameters
        );
      }
    }

    /**
     * Lists insights for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified insight type.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await recommender.organizations.locations.insightTypes.insights.list({
     *       // Optional. Filter expression to restrict the insights returned. Supported filter fields: * `stateInfo.state` * `insightSubtype` * `severity` * `targetResources` Examples: * `stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED` * `insightSubtype = PERMISSIONS_USAGE` * `severity = CRITICAL OR severity = HIGH` * `targetResources : //compute.googleapis.com/projects/1234/zones/us-central1-a/instances/instance-1` * `stateInfo.state = ACTIVE AND (severity = CRITICAL OR severity = HIGH)` The max allowed filter length is 500 characters. (These expressions are based on the filter language described at https://google.aip.dev/160)
     *       filter: 'placeholder-value',
     *       // Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return.
     *       pageSize: 'placeholder-value',
     *       // Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call.
     *       pageToken: 'placeholder-value',
     *       // Required. The container resource on which to execute the request. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `projects/[PROJECT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `folders/[FOLDER_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ INSIGHT_TYPE_ID refers to supported insight types: https://cloud.google.com/recommender/docs/insights/insight-types.
     *       parent:
     *         'organizations/my-organization/locations/my-location/insightTypes/my-insightType',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "insights": [],
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
      params: Params$Resource$Organizations$Locations$Insighttypes$Insights$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Organizations$Locations$Insighttypes$Insights$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1ListInsightsResponse>
    >;
    list(
      params: Params$Resource$Organizations$Locations$Insighttypes$Insights$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Locations$Insighttypes$Insights$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListInsightsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListInsightsResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Locations$Insighttypes$Insights$List,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListInsightsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListInsightsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Insighttypes$Insights$List
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListInsightsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListInsightsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListInsightsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1ListInsightsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Insighttypes$Insights$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Locations$Insighttypes$Insights$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/insights').replace(
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1ListInsightsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1ListInsightsResponse>(
          parameters
        );
      }
    }

    /**
     * Marks the Insight State as Accepted. Users can use this method to indicate to the Recommender API that they have applied some action based on the insight. This stops the insight content from being updated. MarkInsightAccepted can be applied to insights in ACTIVE state. Requires the recommender.*.update IAM permission for the specified insight.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await recommender.organizations.locations.insightTypes.insights.markAccepted(
     *       {
     *         // Required. Name of the insight.
     *         name: 'organizations/my-organization/locations/my-location/insightTypes/my-insightType/insights/my-insight',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "etag": "my_etag",
     *           //   "stateMetadata": {}
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "associatedRecommendations": [],
     *   //   "category": "my_category",
     *   //   "content": {},
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "insightSubtype": "my_insightSubtype",
     *   //   "lastRefreshTime": "my_lastRefreshTime",
     *   //   "name": "my_name",
     *   //   "observationPeriod": "my_observationPeriod",
     *   //   "severity": "my_severity",
     *   //   "stateInfo": {},
     *   //   "targetResources": []
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
    markAccepted(
      params: Params$Resource$Organizations$Locations$Insighttypes$Insights$Markaccepted,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    markAccepted(
      params?: Params$Resource$Organizations$Locations$Insighttypes$Insights$Markaccepted,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Insight>
    >;
    markAccepted(
      params: Params$Resource$Organizations$Locations$Insighttypes$Insights$Markaccepted,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    markAccepted(
      params: Params$Resource$Organizations$Locations$Insighttypes$Insights$Markaccepted,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
    ): void;
    markAccepted(
      params: Params$Resource$Organizations$Locations$Insighttypes$Insights$Markaccepted,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
    ): void;
    markAccepted(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
    ): void;
    markAccepted(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Insighttypes$Insights$Markaccepted
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Insight>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Insighttypes$Insights$Markaccepted;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Locations$Insighttypes$Insights$Markaccepted;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:markAccepted').replace(
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Insight>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Insight>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Locations$Insighttypes$Insights$Get
    extends StandardParameters {
    /**
     * Required. Name of the insight.
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Locations$Insighttypes$Insights$List
    extends StandardParameters {
    /**
     * Optional. Filter expression to restrict the insights returned. Supported filter fields: * `stateInfo.state` * `insightSubtype` * `severity` * `targetResources` Examples: * `stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED` * `insightSubtype = PERMISSIONS_USAGE` * `severity = CRITICAL OR severity = HIGH` * `targetResources : //compute.googleapis.com/projects/1234/zones/us-central1-a/instances/instance-1` * `stateInfo.state = ACTIVE AND (severity = CRITICAL OR severity = HIGH)` The max allowed filter length is 500 characters. (These expressions are based on the filter language described at https://google.aip.dev/160)
     */
    filter?: string;
    /**
     * Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return.
     */
    pageSize?: number;
    /**
     * Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call.
     */
    pageToken?: string;
    /**
     * Required. The container resource on which to execute the request. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `projects/[PROJECT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `folders/[FOLDER_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ INSIGHT_TYPE_ID refers to supported insight types: https://cloud.google.com/recommender/docs/insights/insight-types.
     */
    parent?: string;
  }
  export interface Params$Resource$Organizations$Locations$Insighttypes$Insights$Markaccepted
    extends StandardParameters {
    /**
     * Required. Name of the insight.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecommenderV1beta1MarkInsightAcceptedRequest;
  }

  export class Resource$Organizations$Locations$Recommenders {
    context: APIRequestContext;
    recommendations: Resource$Organizations$Locations$Recommenders$Recommendations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.recommendations =
        new Resource$Organizations$Locations$Recommenders$Recommendations(
          this.context
        );
    }

    /**
     * Gets the requested Recommender Config. There is only one instance of the config for each Recommender.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await recommender.organizations.locations.recommenders.getConfig({
     *     // Required. Name of the Recommendation Config to get. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` * `projects/[PROJECT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config`
     *     name: 'organizations/my-organization/locations/my-location/recommenders/my-recommender/config',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "name": "my_name",
     *   //   "recommenderGenerationConfig": {},
     *   //   "revisionId": "my_revisionId",
     *   //   "updateTime": "my_updateTime"
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
    getConfig(
      params: Params$Resource$Organizations$Locations$Recommenders$Getconfig,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getConfig(
      params?: Params$Resource$Organizations$Locations$Recommenders$Getconfig,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
    >;
    getConfig(
      params: Params$Resource$Organizations$Locations$Recommenders$Getconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getConfig(
      params: Params$Resource$Organizations$Locations$Recommenders$Getconfig,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
    ): void;
    getConfig(
      params: Params$Resource$Organizations$Locations$Recommenders$Getconfig,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
    ): void;
    getConfig(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
    ): void;
    getConfig(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Recommenders$Getconfig
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Recommenders$Getconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Locations$Recommenders$Getconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>(
          parameters
        );
      }
    }

    /**
     * Updates a Recommender Config. This will create a new revision of the config.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await recommender.organizations.locations.recommenders.updateConfig({
     *       // Identifier. Name of recommender config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config
     *       name: 'organizations/my-organization/locations/my-location/recommenders/my-recommender/config',
     *       // The list of fields to be updated.
     *       updateMask: 'placeholder-value',
     *       // If true, validate the request and preview the change, but do not actually update it.
     *       validateOnly: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "annotations": {},
     *         //   "displayName": "my_displayName",
     *         //   "etag": "my_etag",
     *         //   "name": "my_name",
     *         //   "recommenderGenerationConfig": {},
     *         //   "revisionId": "my_revisionId",
     *         //   "updateTime": "my_updateTime"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "name": "my_name",
     *   //   "recommenderGenerationConfig": {},
     *   //   "revisionId": "my_revisionId",
     *   //   "updateTime": "my_updateTime"
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
    updateConfig(
      params: Params$Resource$Organizations$Locations$Recommenders$Updateconfig,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateConfig(
      params?: Params$Resource$Organizations$Locations$Recommenders$Updateconfig,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
    >;
    updateConfig(
      params: Params$Resource$Organizations$Locations$Recommenders$Updateconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateConfig(
      params: Params$Resource$Organizations$Locations$Recommenders$Updateconfig,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
    ): void;
    updateConfig(
      params: Params$Resource$Organizations$Locations$Recommenders$Updateconfig,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
    ): void;
    updateConfig(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
    ): void;
    updateConfig(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Recommenders$Updateconfig
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Recommenders$Updateconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Locations$Recommenders$Updateconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Locations$Recommenders$Getconfig
    extends StandardParameters {
    /**
     * Required. Name of the Recommendation Config to get. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` * `projects/[PROJECT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config`
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Locations$Recommenders$Updateconfig
    extends StandardParameters {
    /**
     * Identifier. Name of recommender config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;
    /**
     * If true, validate the request and preview the change, but do not actually update it.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecommenderV1beta1RecommenderConfig;
  }

  export class Resource$Organizations$Locations$Recommenders$Recommendations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the requested recommendation. Requires the recommender.*.get IAM permission for the specified recommender.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await recommender.organizations.locations.recommenders.recommendations.get({
     *       // Required. Name of the recommendation.
     *       name: 'organizations/my-organization/locations/my-location/recommenders/my-recommender/recommendations/my-recommendation',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "additionalImpact": [],
     *   //   "associatedInsights": [],
     *   //   "content": {},
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "lastRefreshTime": "my_lastRefreshTime",
     *   //   "name": "my_name",
     *   //   "primaryImpact": {},
     *   //   "priority": "my_priority",
     *   //   "recommenderSubtype": "my_recommenderSubtype",
     *   //   "stateInfo": {},
     *   //   "targetResources": [],
     *   //   "xorGroupId": "my_xorGroupId"
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
      params: Params$Resource$Organizations$Locations$Recommenders$Recommendations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Organizations$Locations$Recommenders$Recommendations$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    >;
    get(
      params: Params$Resource$Organizations$Locations$Recommenders$Recommendations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Organizations$Locations$Recommenders$Recommendations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    get(
      params: Params$Resource$Organizations$Locations$Recommenders$Recommendations$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Recommenders$Recommendations$Get
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Recommenders$Recommendations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Locations$Recommenders$Recommendations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Recommendation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Recommendation>(
          parameters
        );
      }
    }

    /**
     * Lists recommendations for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified recommender.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await recommender.organizations.locations.recommenders.recommendations.list(
     *       {
     *         // Filter expression to restrict the recommendations returned. Supported filter fields: * `state_info.state` * `recommenderSubtype` * `priority` * `targetResources` Examples: * `stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED` * `recommenderSubtype = REMOVE_ROLE OR recommenderSubtype = REPLACE_ROLE` * `priority = P1 OR priority = P2` * `targetResources : //compute.googleapis.com/projects/1234/zones/us-central1-a/instances/instance-1` * `stateInfo.state = ACTIVE AND (priority = P1 OR priority = P2)` The max allowed filter length is 500 characters. (These expressions are based on the filter language described at https://google.aip.dev/160)
     *         filter: 'placeholder-value',
     *         // Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return.
     *         pageSize: 'placeholder-value',
     *         // Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call.
     *         pageToken: 'placeholder-value',
     *         // Required. The container resource on which to execute the request. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `projects/[PROJECT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `folders/[FOLDER_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ RECOMMENDER_ID refers to supported recommenders: https://cloud.google.com/recommender/docs/recommenders.
     *         parent:
     *           'organizations/my-organization/locations/my-location/recommenders/my-recommender',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "recommendations": []
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
      params: Params$Resource$Organizations$Locations$Recommenders$Recommendations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Organizations$Locations$Recommenders$Recommendations$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse>
    >;
    list(
      params: Params$Resource$Organizations$Locations$Recommenders$Recommendations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Locations$Recommenders$Recommendations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Locations$Recommenders$Recommendations$List,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Recommenders$Recommendations$List
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Recommenders$Recommendations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Locations$Recommenders$Recommendations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/recommendations').replace(
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse>(
          parameters
        );
      }
    }

    /**
     * Marks the Recommendation State as Claimed. Users can use this method to indicate to the Recommender API that they are starting to apply the recommendation themselves. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationClaimed can be applied to recommendations in CLAIMED or ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await recommender.organizations.locations.recommenders.recommendations.markClaimed(
     *       {
     *         // Required. Name of the recommendation.
     *         name: 'organizations/my-organization/locations/my-location/recommenders/my-recommender/recommendations/my-recommendation',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "etag": "my_etag",
     *           //   "stateMetadata": {}
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "additionalImpact": [],
     *   //   "associatedInsights": [],
     *   //   "content": {},
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "lastRefreshTime": "my_lastRefreshTime",
     *   //   "name": "my_name",
     *   //   "primaryImpact": {},
     *   //   "priority": "my_priority",
     *   //   "recommenderSubtype": "my_recommenderSubtype",
     *   //   "stateInfo": {},
     *   //   "targetResources": [],
     *   //   "xorGroupId": "my_xorGroupId"
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
    markClaimed(
      params: Params$Resource$Organizations$Locations$Recommenders$Recommendations$Markclaimed,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    markClaimed(
      params?: Params$Resource$Organizations$Locations$Recommenders$Recommendations$Markclaimed,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    >;
    markClaimed(
      params: Params$Resource$Organizations$Locations$Recommenders$Recommendations$Markclaimed,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    markClaimed(
      params: Params$Resource$Organizations$Locations$Recommenders$Recommendations$Markclaimed,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markClaimed(
      params: Params$Resource$Organizations$Locations$Recommenders$Recommendations$Markclaimed,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markClaimed(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markClaimed(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Recommenders$Recommendations$Markclaimed
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Recommenders$Recommendations$Markclaimed;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Locations$Recommenders$Recommendations$Markclaimed;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:markClaimed').replace(
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Recommendation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Recommendation>(
          parameters
        );
      }
    }

    /**
     * Mark the Recommendation State as Dismissed. Users can use this method to indicate to the Recommender API that an ACTIVE recommendation has to be marked back as DISMISSED. MarkRecommendationDismissed can be applied to recommendations in ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await recommender.organizations.locations.recommenders.recommendations.markDismissed(
     *       {
     *         // Required. Name of the recommendation.
     *         name: 'organizations/my-organization/locations/my-location/recommenders/my-recommender/recommendations/my-recommendation',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "etag": "my_etag"
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "additionalImpact": [],
     *   //   "associatedInsights": [],
     *   //   "content": {},
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "lastRefreshTime": "my_lastRefreshTime",
     *   //   "name": "my_name",
     *   //   "primaryImpact": {},
     *   //   "priority": "my_priority",
     *   //   "recommenderSubtype": "my_recommenderSubtype",
     *   //   "stateInfo": {},
     *   //   "targetResources": [],
     *   //   "xorGroupId": "my_xorGroupId"
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
    markDismissed(
      params: Params$Resource$Organizations$Locations$Recommenders$Recommendations$Markdismissed,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    markDismissed(
      params?: Params$Resource$Organizations$Locations$Recommenders$Recommendations$Markdismissed,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    >;
    markDismissed(
      params: Params$Resource$Organizations$Locations$Recommenders$Recommendations$Markdismissed,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    markDismissed(
      params: Params$Resource$Organizations$Locations$Recommenders$Recommendations$Markdismissed,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markDismissed(
      params: Params$Resource$Organizations$Locations$Recommenders$Recommendations$Markdismissed,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markDismissed(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markDismissed(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Recommenders$Recommendations$Markdismissed
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Recommenders$Recommendations$Markdismissed;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Locations$Recommenders$Recommendations$Markdismissed;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:markDismissed').replace(
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Recommendation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Recommendation>(
          parameters
        );
      }
    }

    /**
     * Marks the Recommendation State as Failed. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation failed. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationFailed can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await recommender.organizations.locations.recommenders.recommendations.markFailed(
     *       {
     *         // Required. Name of the recommendation.
     *         name: 'organizations/my-organization/locations/my-location/recommenders/my-recommender/recommendations/my-recommendation',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "etag": "my_etag",
     *           //   "stateMetadata": {}
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "additionalImpact": [],
     *   //   "associatedInsights": [],
     *   //   "content": {},
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "lastRefreshTime": "my_lastRefreshTime",
     *   //   "name": "my_name",
     *   //   "primaryImpact": {},
     *   //   "priority": "my_priority",
     *   //   "recommenderSubtype": "my_recommenderSubtype",
     *   //   "stateInfo": {},
     *   //   "targetResources": [],
     *   //   "xorGroupId": "my_xorGroupId"
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
    markFailed(
      params: Params$Resource$Organizations$Locations$Recommenders$Recommendations$Markfailed,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    markFailed(
      params?: Params$Resource$Organizations$Locations$Recommenders$Recommendations$Markfailed,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    >;
    markFailed(
      params: Params$Resource$Organizations$Locations$Recommenders$Recommendations$Markfailed,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    markFailed(
      params: Params$Resource$Organizations$Locations$Recommenders$Recommendations$Markfailed,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markFailed(
      params: Params$Resource$Organizations$Locations$Recommenders$Recommendations$Markfailed,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markFailed(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markFailed(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Recommenders$Recommendations$Markfailed
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Recommenders$Recommendations$Markfailed;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Locations$Recommenders$Recommendations$Markfailed;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:markFailed').replace(
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Recommendation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Recommendation>(
          parameters
        );
      }
    }

    /**
     * Marks the Recommendation State as Succeeded. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation was successful. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationSucceeded can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await recommender.organizations.locations.recommenders.recommendations.markSucceeded(
     *       {
     *         // Required. Name of the recommendation.
     *         name: 'organizations/my-organization/locations/my-location/recommenders/my-recommender/recommendations/my-recommendation',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "etag": "my_etag",
     *           //   "stateMetadata": {}
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "additionalImpact": [],
     *   //   "associatedInsights": [],
     *   //   "content": {},
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "lastRefreshTime": "my_lastRefreshTime",
     *   //   "name": "my_name",
     *   //   "primaryImpact": {},
     *   //   "priority": "my_priority",
     *   //   "recommenderSubtype": "my_recommenderSubtype",
     *   //   "stateInfo": {},
     *   //   "targetResources": [],
     *   //   "xorGroupId": "my_xorGroupId"
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
    markSucceeded(
      params: Params$Resource$Organizations$Locations$Recommenders$Recommendations$Marksucceeded,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    markSucceeded(
      params?: Params$Resource$Organizations$Locations$Recommenders$Recommendations$Marksucceeded,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    >;
    markSucceeded(
      params: Params$Resource$Organizations$Locations$Recommenders$Recommendations$Marksucceeded,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    markSucceeded(
      params: Params$Resource$Organizations$Locations$Recommenders$Recommendations$Marksucceeded,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markSucceeded(
      params: Params$Resource$Organizations$Locations$Recommenders$Recommendations$Marksucceeded,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markSucceeded(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markSucceeded(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Recommenders$Recommendations$Marksucceeded
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Recommenders$Recommendations$Marksucceeded;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Locations$Recommenders$Recommendations$Marksucceeded;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:markSucceeded').replace(
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Recommendation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Recommendation>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Locations$Recommenders$Recommendations$Get
    extends StandardParameters {
    /**
     * Required. Name of the recommendation.
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Locations$Recommenders$Recommendations$List
    extends StandardParameters {
    /**
     * Filter expression to restrict the recommendations returned. Supported filter fields: * `state_info.state` * `recommenderSubtype` * `priority` * `targetResources` Examples: * `stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED` * `recommenderSubtype = REMOVE_ROLE OR recommenderSubtype = REPLACE_ROLE` * `priority = P1 OR priority = P2` * `targetResources : //compute.googleapis.com/projects/1234/zones/us-central1-a/instances/instance-1` * `stateInfo.state = ACTIVE AND (priority = P1 OR priority = P2)` The max allowed filter length is 500 characters. (These expressions are based on the filter language described at https://google.aip.dev/160)
     */
    filter?: string;
    /**
     * Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return.
     */
    pageSize?: number;
    /**
     * Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call.
     */
    pageToken?: string;
    /**
     * Required. The container resource on which to execute the request. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `projects/[PROJECT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `folders/[FOLDER_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ RECOMMENDER_ID refers to supported recommenders: https://cloud.google.com/recommender/docs/recommenders.
     */
    parent?: string;
  }
  export interface Params$Resource$Organizations$Locations$Recommenders$Recommendations$Markclaimed
    extends StandardParameters {
    /**
     * Required. Name of the recommendation.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecommenderV1beta1MarkRecommendationClaimedRequest;
  }
  export interface Params$Resource$Organizations$Locations$Recommenders$Recommendations$Markdismissed
    extends StandardParameters {
    /**
     * Required. Name of the recommendation.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecommenderV1beta1MarkRecommendationDismissedRequest;
  }
  export interface Params$Resource$Organizations$Locations$Recommenders$Recommendations$Markfailed
    extends StandardParameters {
    /**
     * Required. Name of the recommendation.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecommenderV1beta1MarkRecommendationFailedRequest;
  }
  export interface Params$Resource$Organizations$Locations$Recommenders$Recommendations$Marksucceeded
    extends StandardParameters {
    /**
     * Required. Name of the recommendation.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecommenderV1beta1MarkRecommendationSucceededRequest;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    locations: Resource$Projects$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Projects$Locations(this.context);
    }
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    insightTypes: Resource$Projects$Locations$Insighttypes;
    recommenders: Resource$Projects$Locations$Recommenders;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.insightTypes = new Resource$Projects$Locations$Insighttypes(
        this.context
      );
      this.recommenders = new Resource$Projects$Locations$Recommenders(
        this.context
      );
    }

    /**
     * Lists locations with recommendations or insights.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await recommender.projects.locations.list({
     *     // Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations.
     *     extraLocationTypes: 'placeholder-value',
     *     // A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     *     filter: 'placeholder-value',
     *     // The resource that owns the locations collection, if applicable.
     *     name: 'projects/my-project',
     *     // The maximum number of results to return. If not set, the service selects a default.
     *     pageSize: 'placeholder-value',
     *     // A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "locations": [],
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
      params: Params$Resource$Projects$Locations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudLocationListLocationsResponse>
    >;
    list(
      params: Params$Resource$Projects$Locations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$List,
      callback: BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$List
        | BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudLocationListLocationsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}/locations').replace(
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
        createAPIRequest<Schema$GoogleCloudLocationListLocationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudLocationListLocationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$List
    extends StandardParameters {
    /**
     * Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations.
     */
    extraLocationTypes?: string[];
    /**
     * A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     */
    filter?: string;
    /**
     * The resource that owns the locations collection, if applicable.
     */
    name?: string;
    /**
     * The maximum number of results to return. If not set, the service selects a default.
     */
    pageSize?: number;
    /**
     * A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Locations$Insighttypes {
    context: APIRequestContext;
    insights: Resource$Projects$Locations$Insighttypes$Insights;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.insights = new Resource$Projects$Locations$Insighttypes$Insights(
        this.context
      );
    }

    /**
     * Gets the requested InsightTypeConfig. There is only one instance of the config for each InsightType.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await recommender.projects.locations.insightTypes.getConfig({
     *     // Required. Name of the InsightTypeConfig to get. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` * `projects/[PROJECT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config`
     *     name: 'projects/my-project/locations/my-location/insightTypes/my-insightType/config',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "insightTypeGenerationConfig": {},
     *   //   "name": "my_name",
     *   //   "revisionId": "my_revisionId",
     *   //   "updateTime": "my_updateTime"
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
    getConfig(
      params: Params$Resource$Projects$Locations$Insighttypes$Getconfig,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getConfig(
      params?: Params$Resource$Projects$Locations$Insighttypes$Getconfig,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
    >;
    getConfig(
      params: Params$Resource$Projects$Locations$Insighttypes$Getconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getConfig(
      params: Params$Resource$Projects$Locations$Insighttypes$Getconfig,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
    ): void;
    getConfig(
      params: Params$Resource$Projects$Locations$Insighttypes$Getconfig,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
    ): void;
    getConfig(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
    ): void;
    getConfig(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Insighttypes$Getconfig
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Insighttypes$Getconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Insighttypes$Getconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>(
          parameters
        );
      }
    }

    /**
     * Updates an InsightTypeConfig change. This will create a new revision of the config.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await recommender.projects.locations.insightTypes.updateConfig({
     *     // Identifier. Name of insight type config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config
     *     name: 'projects/my-project/locations/my-location/insightTypes/my-insightType/config',
     *     // The list of fields to be updated.
     *     updateMask: 'placeholder-value',
     *     // If true, validate the request and preview the change, but do not actually update it.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "displayName": "my_displayName",
     *       //   "etag": "my_etag",
     *       //   "insightTypeGenerationConfig": {},
     *       //   "name": "my_name",
     *       //   "revisionId": "my_revisionId",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "insightTypeGenerationConfig": {},
     *   //   "name": "my_name",
     *   //   "revisionId": "my_revisionId",
     *   //   "updateTime": "my_updateTime"
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
    updateConfig(
      params: Params$Resource$Projects$Locations$Insighttypes$Updateconfig,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateConfig(
      params?: Params$Resource$Projects$Locations$Insighttypes$Updateconfig,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
    >;
    updateConfig(
      params: Params$Resource$Projects$Locations$Insighttypes$Updateconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateConfig(
      params: Params$Resource$Projects$Locations$Insighttypes$Updateconfig,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
    ): void;
    updateConfig(
      params: Params$Resource$Projects$Locations$Insighttypes$Updateconfig,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
    ): void;
    updateConfig(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
    ): void;
    updateConfig(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Insighttypes$Updateconfig
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Insighttypes$Updateconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Insighttypes$Updateconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Insighttypes$Getconfig
    extends StandardParameters {
    /**
     * Required. Name of the InsightTypeConfig to get. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` * `projects/[PROJECT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Insighttypes$Updateconfig
    extends StandardParameters {
    /**
     * Identifier. Name of insight type config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;
    /**
     * If true, validate the request and preview the change, but do not actually update it.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecommenderV1beta1InsightTypeConfig;
  }

  export class Resource$Projects$Locations$Insighttypes$Insights {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the requested insight. Requires the recommender.*.get IAM permission for the specified insight type.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await recommender.projects.locations.insightTypes.insights.get({
     *     // Required. Name of the insight.
     *     name: 'projects/my-project/locations/my-location/insightTypes/my-insightType/insights/my-insight',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "associatedRecommendations": [],
     *   //   "category": "my_category",
     *   //   "content": {},
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "insightSubtype": "my_insightSubtype",
     *   //   "lastRefreshTime": "my_lastRefreshTime",
     *   //   "name": "my_name",
     *   //   "observationPeriod": "my_observationPeriod",
     *   //   "severity": "my_severity",
     *   //   "stateInfo": {},
     *   //   "targetResources": []
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
      params: Params$Resource$Projects$Locations$Insighttypes$Insights$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Insighttypes$Insights$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Insight>
    >;
    get(
      params: Params$Resource$Projects$Locations$Insighttypes$Insights$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Insighttypes$Insights$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Insighttypes$Insights$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Insighttypes$Insights$Get
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Insight>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Insighttypes$Insights$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Insighttypes$Insights$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Insight>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Insight>(
          parameters
        );
      }
    }

    /**
     * Lists insights for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified insight type.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await recommender.projects.locations.insightTypes.insights.list({
     *     // Optional. Filter expression to restrict the insights returned. Supported filter fields: * `stateInfo.state` * `insightSubtype` * `severity` * `targetResources` Examples: * `stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED` * `insightSubtype = PERMISSIONS_USAGE` * `severity = CRITICAL OR severity = HIGH` * `targetResources : //compute.googleapis.com/projects/1234/zones/us-central1-a/instances/instance-1` * `stateInfo.state = ACTIVE AND (severity = CRITICAL OR severity = HIGH)` The max allowed filter length is 500 characters. (These expressions are based on the filter language described at https://google.aip.dev/160)
     *     filter: 'placeholder-value',
     *     // Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return.
     *     pageSize: 'placeholder-value',
     *     // Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call.
     *     pageToken: 'placeholder-value',
     *     // Required. The container resource on which to execute the request. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `projects/[PROJECT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `folders/[FOLDER_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ INSIGHT_TYPE_ID refers to supported insight types: https://cloud.google.com/recommender/docs/insights/insight-types.
     *     parent:
     *       'projects/my-project/locations/my-location/insightTypes/my-insightType',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "insights": [],
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
      params: Params$Resource$Projects$Locations$Insighttypes$Insights$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Insighttypes$Insights$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1ListInsightsResponse>
    >;
    list(
      params: Params$Resource$Projects$Locations$Insighttypes$Insights$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Insighttypes$Insights$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListInsightsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListInsightsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Insighttypes$Insights$List,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListInsightsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListInsightsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Insighttypes$Insights$List
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListInsightsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListInsightsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListInsightsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1ListInsightsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Insighttypes$Insights$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Insighttypes$Insights$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/insights').replace(
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1ListInsightsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1ListInsightsResponse>(
          parameters
        );
      }
    }

    /**
     * Marks the Insight State as Accepted. Users can use this method to indicate to the Recommender API that they have applied some action based on the insight. This stops the insight content from being updated. MarkInsightAccepted can be applied to insights in ACTIVE state. Requires the recommender.*.update IAM permission for the specified insight.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await recommender.projects.locations.insightTypes.insights.markAccepted({
     *       // Required. Name of the insight.
     *       name: 'projects/my-project/locations/my-location/insightTypes/my-insightType/insights/my-insight',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "etag": "my_etag",
     *         //   "stateMetadata": {}
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "associatedRecommendations": [],
     *   //   "category": "my_category",
     *   //   "content": {},
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "insightSubtype": "my_insightSubtype",
     *   //   "lastRefreshTime": "my_lastRefreshTime",
     *   //   "name": "my_name",
     *   //   "observationPeriod": "my_observationPeriod",
     *   //   "severity": "my_severity",
     *   //   "stateInfo": {},
     *   //   "targetResources": []
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
    markAccepted(
      params: Params$Resource$Projects$Locations$Insighttypes$Insights$Markaccepted,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    markAccepted(
      params?: Params$Resource$Projects$Locations$Insighttypes$Insights$Markaccepted,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Insight>
    >;
    markAccepted(
      params: Params$Resource$Projects$Locations$Insighttypes$Insights$Markaccepted,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    markAccepted(
      params: Params$Resource$Projects$Locations$Insighttypes$Insights$Markaccepted,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
    ): void;
    markAccepted(
      params: Params$Resource$Projects$Locations$Insighttypes$Insights$Markaccepted,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
    ): void;
    markAccepted(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
    ): void;
    markAccepted(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Insighttypes$Insights$Markaccepted
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Insight>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Insight>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Insighttypes$Insights$Markaccepted;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Insighttypes$Insights$Markaccepted;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:markAccepted').replace(
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Insight>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Insight>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Insighttypes$Insights$Get
    extends StandardParameters {
    /**
     * Required. Name of the insight.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Insighttypes$Insights$List
    extends StandardParameters {
    /**
     * Optional. Filter expression to restrict the insights returned. Supported filter fields: * `stateInfo.state` * `insightSubtype` * `severity` * `targetResources` Examples: * `stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED` * `insightSubtype = PERMISSIONS_USAGE` * `severity = CRITICAL OR severity = HIGH` * `targetResources : //compute.googleapis.com/projects/1234/zones/us-central1-a/instances/instance-1` * `stateInfo.state = ACTIVE AND (severity = CRITICAL OR severity = HIGH)` The max allowed filter length is 500 characters. (These expressions are based on the filter language described at https://google.aip.dev/160)
     */
    filter?: string;
    /**
     * Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return.
     */
    pageSize?: number;
    /**
     * Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call.
     */
    pageToken?: string;
    /**
     * Required. The container resource on which to execute the request. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `projects/[PROJECT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `folders/[FOLDER_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ INSIGHT_TYPE_ID refers to supported insight types: https://cloud.google.com/recommender/docs/insights/insight-types.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Insighttypes$Insights$Markaccepted
    extends StandardParameters {
    /**
     * Required. Name of the insight.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecommenderV1beta1MarkInsightAcceptedRequest;
  }

  export class Resource$Projects$Locations$Recommenders {
    context: APIRequestContext;
    recommendations: Resource$Projects$Locations$Recommenders$Recommendations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.recommendations =
        new Resource$Projects$Locations$Recommenders$Recommendations(
          this.context
        );
    }

    /**
     * Gets the requested Recommender Config. There is only one instance of the config for each Recommender.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await recommender.projects.locations.recommenders.getConfig({
     *     // Required. Name of the Recommendation Config to get. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` * `projects/[PROJECT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config`
     *     name: 'projects/my-project/locations/my-location/recommenders/my-recommender/config',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "name": "my_name",
     *   //   "recommenderGenerationConfig": {},
     *   //   "revisionId": "my_revisionId",
     *   //   "updateTime": "my_updateTime"
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
    getConfig(
      params: Params$Resource$Projects$Locations$Recommenders$Getconfig,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getConfig(
      params?: Params$Resource$Projects$Locations$Recommenders$Getconfig,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
    >;
    getConfig(
      params: Params$Resource$Projects$Locations$Recommenders$Getconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getConfig(
      params: Params$Resource$Projects$Locations$Recommenders$Getconfig,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
    ): void;
    getConfig(
      params: Params$Resource$Projects$Locations$Recommenders$Getconfig,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
    ): void;
    getConfig(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
    ): void;
    getConfig(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Recommenders$Getconfig
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Recommenders$Getconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Recommenders$Getconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>(
          parameters
        );
      }
    }

    /**
     * Updates a Recommender Config. This will create a new revision of the config.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await recommender.projects.locations.recommenders.updateConfig({
     *     // Identifier. Name of recommender config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config
     *     name: 'projects/my-project/locations/my-location/recommenders/my-recommender/config',
     *     // The list of fields to be updated.
     *     updateMask: 'placeholder-value',
     *     // If true, validate the request and preview the change, but do not actually update it.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "displayName": "my_displayName",
     *       //   "etag": "my_etag",
     *       //   "name": "my_name",
     *       //   "recommenderGenerationConfig": {},
     *       //   "revisionId": "my_revisionId",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "name": "my_name",
     *   //   "recommenderGenerationConfig": {},
     *   //   "revisionId": "my_revisionId",
     *   //   "updateTime": "my_updateTime"
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
    updateConfig(
      params: Params$Resource$Projects$Locations$Recommenders$Updateconfig,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateConfig(
      params?: Params$Resource$Projects$Locations$Recommenders$Updateconfig,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
    >;
    updateConfig(
      params: Params$Resource$Projects$Locations$Recommenders$Updateconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateConfig(
      params: Params$Resource$Projects$Locations$Recommenders$Updateconfig,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
    ): void;
    updateConfig(
      params: Params$Resource$Projects$Locations$Recommenders$Updateconfig,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
    ): void;
    updateConfig(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
    ): void;
    updateConfig(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Recommenders$Updateconfig
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Recommenders$Updateconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Recommenders$Updateconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1RecommenderConfig>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Recommenders$Getconfig
    extends StandardParameters {
    /**
     * Required. Name of the Recommendation Config to get. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` * `projects/[PROJECT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Recommenders$Updateconfig
    extends StandardParameters {
    /**
     * Identifier. Name of recommender config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;
    /**
     * If true, validate the request and preview the change, but do not actually update it.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecommenderV1beta1RecommenderConfig;
  }

  export class Resource$Projects$Locations$Recommenders$Recommendations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the requested recommendation. Requires the recommender.*.get IAM permission for the specified recommender.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await recommender.projects.locations.recommenders.recommendations.get({
     *       // Required. Name of the recommendation.
     *       name: 'projects/my-project/locations/my-location/recommenders/my-recommender/recommendations/my-recommendation',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "additionalImpact": [],
     *   //   "associatedInsights": [],
     *   //   "content": {},
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "lastRefreshTime": "my_lastRefreshTime",
     *   //   "name": "my_name",
     *   //   "primaryImpact": {},
     *   //   "priority": "my_priority",
     *   //   "recommenderSubtype": "my_recommenderSubtype",
     *   //   "stateInfo": {},
     *   //   "targetResources": [],
     *   //   "xorGroupId": "my_xorGroupId"
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
      params: Params$Resource$Projects$Locations$Recommenders$Recommendations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Recommenders$Recommendations$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    >;
    get(
      params: Params$Resource$Projects$Locations$Recommenders$Recommendations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Recommenders$Recommendations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Recommenders$Recommendations$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Recommenders$Recommendations$Get
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Recommenders$Recommendations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Recommenders$Recommendations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Recommendation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Recommendation>(
          parameters
        );
      }
    }

    /**
     * Lists recommendations for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified recommender.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await recommender.projects.locations.recommenders.recommendations.list({
     *       // Filter expression to restrict the recommendations returned. Supported filter fields: * `state_info.state` * `recommenderSubtype` * `priority` * `targetResources` Examples: * `stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED` * `recommenderSubtype = REMOVE_ROLE OR recommenderSubtype = REPLACE_ROLE` * `priority = P1 OR priority = P2` * `targetResources : //compute.googleapis.com/projects/1234/zones/us-central1-a/instances/instance-1` * `stateInfo.state = ACTIVE AND (priority = P1 OR priority = P2)` The max allowed filter length is 500 characters. (These expressions are based on the filter language described at https://google.aip.dev/160)
     *       filter: 'placeholder-value',
     *       // Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return.
     *       pageSize: 'placeholder-value',
     *       // Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call.
     *       pageToken: 'placeholder-value',
     *       // Required. The container resource on which to execute the request. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `projects/[PROJECT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `folders/[FOLDER_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ RECOMMENDER_ID refers to supported recommenders: https://cloud.google.com/recommender/docs/recommenders.
     *       parent:
     *         'projects/my-project/locations/my-location/recommenders/my-recommender',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "recommendations": []
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
      params: Params$Resource$Projects$Locations$Recommenders$Recommendations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Recommenders$Recommendations$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse>
    >;
    list(
      params: Params$Resource$Projects$Locations$Recommenders$Recommendations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Recommenders$Recommendations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Recommenders$Recommendations$List,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Recommenders$Recommendations$List
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Recommenders$Recommendations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Recommenders$Recommendations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/recommendations').replace(
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse>(
          parameters
        );
      }
    }

    /**
     * Marks the Recommendation State as Claimed. Users can use this method to indicate to the Recommender API that they are starting to apply the recommendation themselves. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationClaimed can be applied to recommendations in CLAIMED or ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await recommender.projects.locations.recommenders.recommendations.markClaimed(
     *       {
     *         // Required. Name of the recommendation.
     *         name: 'projects/my-project/locations/my-location/recommenders/my-recommender/recommendations/my-recommendation',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "etag": "my_etag",
     *           //   "stateMetadata": {}
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "additionalImpact": [],
     *   //   "associatedInsights": [],
     *   //   "content": {},
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "lastRefreshTime": "my_lastRefreshTime",
     *   //   "name": "my_name",
     *   //   "primaryImpact": {},
     *   //   "priority": "my_priority",
     *   //   "recommenderSubtype": "my_recommenderSubtype",
     *   //   "stateInfo": {},
     *   //   "targetResources": [],
     *   //   "xorGroupId": "my_xorGroupId"
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
    markClaimed(
      params: Params$Resource$Projects$Locations$Recommenders$Recommendations$Markclaimed,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    markClaimed(
      params?: Params$Resource$Projects$Locations$Recommenders$Recommendations$Markclaimed,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    >;
    markClaimed(
      params: Params$Resource$Projects$Locations$Recommenders$Recommendations$Markclaimed,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    markClaimed(
      params: Params$Resource$Projects$Locations$Recommenders$Recommendations$Markclaimed,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markClaimed(
      params: Params$Resource$Projects$Locations$Recommenders$Recommendations$Markclaimed,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markClaimed(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markClaimed(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Recommenders$Recommendations$Markclaimed
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Recommenders$Recommendations$Markclaimed;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Recommenders$Recommendations$Markclaimed;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:markClaimed').replace(
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Recommendation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Recommendation>(
          parameters
        );
      }
    }

    /**
     * Mark the Recommendation State as Dismissed. Users can use this method to indicate to the Recommender API that an ACTIVE recommendation has to be marked back as DISMISSED. MarkRecommendationDismissed can be applied to recommendations in ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await recommender.projects.locations.recommenders.recommendations.markDismissed(
     *       {
     *         // Required. Name of the recommendation.
     *         name: 'projects/my-project/locations/my-location/recommenders/my-recommender/recommendations/my-recommendation',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "etag": "my_etag"
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "additionalImpact": [],
     *   //   "associatedInsights": [],
     *   //   "content": {},
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "lastRefreshTime": "my_lastRefreshTime",
     *   //   "name": "my_name",
     *   //   "primaryImpact": {},
     *   //   "priority": "my_priority",
     *   //   "recommenderSubtype": "my_recommenderSubtype",
     *   //   "stateInfo": {},
     *   //   "targetResources": [],
     *   //   "xorGroupId": "my_xorGroupId"
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
    markDismissed(
      params: Params$Resource$Projects$Locations$Recommenders$Recommendations$Markdismissed,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    markDismissed(
      params?: Params$Resource$Projects$Locations$Recommenders$Recommendations$Markdismissed,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    >;
    markDismissed(
      params: Params$Resource$Projects$Locations$Recommenders$Recommendations$Markdismissed,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    markDismissed(
      params: Params$Resource$Projects$Locations$Recommenders$Recommendations$Markdismissed,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markDismissed(
      params: Params$Resource$Projects$Locations$Recommenders$Recommendations$Markdismissed,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markDismissed(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markDismissed(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Recommenders$Recommendations$Markdismissed
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Recommenders$Recommendations$Markdismissed;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Recommenders$Recommendations$Markdismissed;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:markDismissed').replace(
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Recommendation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Recommendation>(
          parameters
        );
      }
    }

    /**
     * Marks the Recommendation State as Failed. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation failed. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationFailed can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await recommender.projects.locations.recommenders.recommendations.markFailed(
     *       {
     *         // Required. Name of the recommendation.
     *         name: 'projects/my-project/locations/my-location/recommenders/my-recommender/recommendations/my-recommendation',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "etag": "my_etag",
     *           //   "stateMetadata": {}
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "additionalImpact": [],
     *   //   "associatedInsights": [],
     *   //   "content": {},
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "lastRefreshTime": "my_lastRefreshTime",
     *   //   "name": "my_name",
     *   //   "primaryImpact": {},
     *   //   "priority": "my_priority",
     *   //   "recommenderSubtype": "my_recommenderSubtype",
     *   //   "stateInfo": {},
     *   //   "targetResources": [],
     *   //   "xorGroupId": "my_xorGroupId"
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
    markFailed(
      params: Params$Resource$Projects$Locations$Recommenders$Recommendations$Markfailed,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    markFailed(
      params?: Params$Resource$Projects$Locations$Recommenders$Recommendations$Markfailed,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    >;
    markFailed(
      params: Params$Resource$Projects$Locations$Recommenders$Recommendations$Markfailed,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    markFailed(
      params: Params$Resource$Projects$Locations$Recommenders$Recommendations$Markfailed,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markFailed(
      params: Params$Resource$Projects$Locations$Recommenders$Recommendations$Markfailed,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markFailed(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markFailed(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Recommenders$Recommendations$Markfailed
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Recommenders$Recommendations$Markfailed;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Recommenders$Recommendations$Markfailed;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:markFailed').replace(
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Recommendation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Recommendation>(
          parameters
        );
      }
    }

    /**
     * Marks the Recommendation State as Succeeded. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation was successful. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationSucceeded can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await recommender.projects.locations.recommenders.recommendations.markSucceeded(
     *       {
     *         // Required. Name of the recommendation.
     *         name: 'projects/my-project/locations/my-location/recommenders/my-recommender/recommendations/my-recommendation',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "etag": "my_etag",
     *           //   "stateMetadata": {}
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "additionalImpact": [],
     *   //   "associatedInsights": [],
     *   //   "content": {},
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "lastRefreshTime": "my_lastRefreshTime",
     *   //   "name": "my_name",
     *   //   "primaryImpact": {},
     *   //   "priority": "my_priority",
     *   //   "recommenderSubtype": "my_recommenderSubtype",
     *   //   "stateInfo": {},
     *   //   "targetResources": [],
     *   //   "xorGroupId": "my_xorGroupId"
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
    markSucceeded(
      params: Params$Resource$Projects$Locations$Recommenders$Recommendations$Marksucceeded,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    markSucceeded(
      params?: Params$Resource$Projects$Locations$Recommenders$Recommendations$Marksucceeded,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    >;
    markSucceeded(
      params: Params$Resource$Projects$Locations$Recommenders$Recommendations$Marksucceeded,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    markSucceeded(
      params: Params$Resource$Projects$Locations$Recommenders$Recommendations$Marksucceeded,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markSucceeded(
      params: Params$Resource$Projects$Locations$Recommenders$Recommendations$Marksucceeded,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markSucceeded(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
    ): void;
    markSucceeded(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Recommenders$Recommendations$Marksucceeded
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1Recommendation>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Recommenders$Recommendations$Marksucceeded;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Recommenders$Recommendations$Marksucceeded;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:markSucceeded').replace(
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Recommendation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Recommendation>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Recommenders$Recommendations$Get
    extends StandardParameters {
    /**
     * Required. Name of the recommendation.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Recommenders$Recommendations$List
    extends StandardParameters {
    /**
     * Filter expression to restrict the recommendations returned. Supported filter fields: * `state_info.state` * `recommenderSubtype` * `priority` * `targetResources` Examples: * `stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED` * `recommenderSubtype = REMOVE_ROLE OR recommenderSubtype = REPLACE_ROLE` * `priority = P1 OR priority = P2` * `targetResources : //compute.googleapis.com/projects/1234/zones/us-central1-a/instances/instance-1` * `stateInfo.state = ACTIVE AND (priority = P1 OR priority = P2)` The max allowed filter length is 500 characters. (These expressions are based on the filter language described at https://google.aip.dev/160)
     */
    filter?: string;
    /**
     * Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return.
     */
    pageSize?: number;
    /**
     * Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call.
     */
    pageToken?: string;
    /**
     * Required. The container resource on which to execute the request. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `projects/[PROJECT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `folders/[FOLDER_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ RECOMMENDER_ID refers to supported recommenders: https://cloud.google.com/recommender/docs/recommenders.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Recommenders$Recommendations$Markclaimed
    extends StandardParameters {
    /**
     * Required. Name of the recommendation.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecommenderV1beta1MarkRecommendationClaimedRequest;
  }
  export interface Params$Resource$Projects$Locations$Recommenders$Recommendations$Markdismissed
    extends StandardParameters {
    /**
     * Required. Name of the recommendation.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecommenderV1beta1MarkRecommendationDismissedRequest;
  }
  export interface Params$Resource$Projects$Locations$Recommenders$Recommendations$Markfailed
    extends StandardParameters {
    /**
     * Required. Name of the recommendation.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecommenderV1beta1MarkRecommendationFailedRequest;
  }
  export interface Params$Resource$Projects$Locations$Recommenders$Recommendations$Marksucceeded
    extends StandardParameters {
    /**
     * Required. Name of the recommendation.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecommenderV1beta1MarkRecommendationSucceededRequest;
  }

  export class Resource$Recommenders {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists all available Recommenders. No IAM permissions are required.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommender.googleapis.com
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
     * const recommender = google.recommender('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await recommender.recommenders.list({
     *     // Optional. The number of RecommenderTypes to return per page. The service may return fewer than this value.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListRecommenders` call. Provide this to retrieve the subsequent page.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "recommenders": []
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
      params: Params$Resource$Recommenders$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Recommenders$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1ListRecommendersResponse>
    >;
    list(
      params: Params$Resource$Recommenders$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Recommenders$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListRecommendersResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListRecommendersResponse>
    ): void;
    list(
      params: Params$Resource$Recommenders$List,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListRecommendersResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListRecommendersResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Recommenders$List
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListRecommendersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListRecommendersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommenderV1beta1ListRecommendersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommenderV1beta1ListRecommendersResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Recommenders$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Recommenders$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/recommenders').replace(
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1ListRecommendersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommenderV1beta1ListRecommendersResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Recommenders$List
    extends StandardParameters {
    /**
     * Optional. The number of RecommenderTypes to return per page. The service may return fewer than this value.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListRecommenders` call. Provide this to retrieve the subsequent page.
     */
    pageToken?: string;
  }
}
