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

export namespace jobs_v4 {
  export interface Options extends GlobalOptions {
    version: 'v4';
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
   * Cloud Talent Solution API
   *
   * Cloud Talent Solution provides the capability to create, read, update, and delete job postings, as well as search jobs based on keywords and filters.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const jobs = google.jobs('v4');
   * ```
   */
  export class Jobs {
    context: APIRequestContext;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * Application related details of a job posting.
   */
  export interface Schema$ApplicationInfo {
    /**
     * Use this field to specify email address(es) to which resumes or applications can be sent. The maximum number of allowed characters for each entry is 255.
     */
    emails?: string[] | null;
    /**
     * Use this field to provide instructions, such as "Mail your application to ...", that a candidate can follow to apply for the job. This field accepts and sanitizes HTML input, and also accepts bold, italic, ordered list, and unordered list markup tags. The maximum number of allowed characters is 3,000.
     */
    instruction?: string | null;
    /**
     * Use this URI field to direct an applicant to a website, for example to link to an online application form. The maximum number of allowed characters for each entry is 2,000.
     */
    uris?: string[] | null;
  }
  /**
   * Request to create a batch of jobs.
   */
  export interface Schema$BatchCreateJobsRequest {
    /**
     * Required. The jobs to be created. A maximum of 200 jobs can be created in a batch.
     */
    jobs?: Schema$Job[];
  }
  /**
   * The result of JobService.BatchCreateJobs. It's used to replace google.longrunning.Operation.response in case of success.
   */
  export interface Schema$BatchCreateJobsResponse {
    /**
     * List of job mutation results from a batch create operation. It can change until operation status is FINISHED, FAILED or CANCELLED.
     */
    jobResults?: Schema$JobResult[];
  }
  /**
   * Request to delete a batch of jobs.
   */
  export interface Schema$BatchDeleteJobsRequest {
    /**
     * The names of the jobs to delete. The format is "projects/{project_id\}/tenants/{tenant_id\}/jobs/{job_id\}". For example, "projects/foo/tenants/bar/jobs/baz". A maximum of 200 jobs can be deleted in a batch.
     */
    names?: string[] | null;
  }
  /**
   * The result of JobService.BatchDeleteJobs. It's used to replace google.longrunning.Operation.response in case of success.
   */
  export interface Schema$BatchDeleteJobsResponse {
    /**
     * List of job mutation results from a batch delete operation. It can change until operation status is FINISHED, FAILED or CANCELLED.
     */
    jobResults?: Schema$JobResult[];
  }
  /**
   * Metadata used for long running operations returned by CTS batch APIs. It's used to replace google.longrunning.Operation.metadata.
   */
  export interface Schema$BatchOperationMetadata {
    /**
     * The time when the batch operation is created.
     */
    createTime?: string | null;
    /**
     * The time when the batch operation is finished and google.longrunning.Operation.done is set to `true`.
     */
    endTime?: string | null;
    /**
     * Count of failed item(s) inside an operation.
     */
    failureCount?: number | null;
    /**
     * The state of a long running operation.
     */
    state?: string | null;
    /**
     * More detailed information about operation state.
     */
    stateDescription?: string | null;
    /**
     * Count of successful item(s) inside an operation.
     */
    successCount?: number | null;
    /**
     * Count of total item(s) inside an operation.
     */
    totalCount?: number | null;
    /**
     * The time when the batch operation status is updated. The metadata and the update_time is refreshed every minute otherwise cached data is returned.
     */
    updateTime?: string | null;
  }
  /**
   * Request to update a batch of jobs.
   */
  export interface Schema$BatchUpdateJobsRequest {
    /**
     * Required. The jobs to be updated. A maximum of 200 jobs can be updated in a batch.
     */
    jobs?: Schema$Job[];
    /**
     * Strongly recommended for the best service experience. Be aware that it will also increase latency when checking the status of a batch operation. If update_mask is provided, only the specified fields in Job are updated. Otherwise all the fields are updated. A field mask to restrict the fields that are updated. Only top level fields of Job are supported. If update_mask is provided, The Job inside JobResult will only contains fields that is updated, plus the Id of the Job. Otherwise, Job will include all fields, which can yield a very large response.
     */
    updateMask?: string | null;
  }
  /**
   * The result of JobService.BatchUpdateJobs. It's used to replace google.longrunning.Operation.response in case of success.
   */
  export interface Schema$BatchUpdateJobsResponse {
    /**
     * List of job mutation results from a batch update operation. It can change until operation status is FINISHED, FAILED or CANCELLED.
     */
    jobResults?: Schema$JobResult[];
  }
  /**
   * An event issued when an end user interacts with the application that implements Cloud Talent Solution. Providing this information improves the quality of results for the API clients, enabling the service to perform optimally. The number of events sent must be consistent with other calls, such as job searches, issued to the service by the client.
   */
  export interface Schema$ClientEvent {
    /**
     * Required. The timestamp of the event.
     */
    createTime?: string | null;
    /**
     * Required. A unique identifier, generated by the client application.
     */
    eventId?: string | null;
    /**
     * Notes about the event provided by recruiters or other users, for example, feedback on why a job was bookmarked.
     */
    eventNotes?: string | null;
    /**
     * An event issued when a job seeker interacts with the application that implements Cloud Talent Solution.
     */
    jobEvent?: Schema$JobEvent;
    /**
     * Strongly recommended for the best service experience. A unique ID generated in the API responses. It can be found in ResponseMetadata.request_id.
     */
    requestId?: string | null;
  }
  /**
   * Parameters needed for commute search.
   */
  export interface Schema$CommuteFilter {
    /**
     * If `true`, jobs without street level addresses may also be returned. For city level addresses, the city center is used. For state and coarser level addresses, text matching is used. If this field is set to `false` or isn't specified, only jobs that include street level addresses will be returned by commute search.
     */
    allowImpreciseAddresses?: boolean | null;
    /**
     * Required. The method of transportation to calculate the commute time for.
     */
    commuteMethod?: string | null;
    /**
     * The departure time used to calculate traffic impact, represented as google.type.TimeOfDay in local time zone. Currently traffic model is restricted to hour level resolution.
     */
    departureTime?: Schema$TimeOfDay;
    /**
     * Specifies the traffic density to use when calculating commute time.
     */
    roadTraffic?: string | null;
    /**
     * Required. The latitude and longitude of the location to calculate the commute time from.
     */
    startCoordinates?: Schema$LatLng;
    /**
     * Required. The maximum travel time in seconds. The maximum allowed value is `3600s` (one hour). Format is `123s`.
     */
    travelDuration?: string | null;
  }
  /**
   * Commute details related to this job.
   */
  export interface Schema$CommuteInfo {
    /**
     * Location used as the destination in the commute calculation.
     */
    jobLocation?: Schema$Location;
    /**
     * The number of seconds required to travel to the job location from the query location. A duration of 0 seconds indicates that the job isn't reachable within the requested duration, but was returned as part of an expanded query.
     */
    travelDuration?: string | null;
  }
  /**
   * A Company resource represents a company in the service. A company is the entity that owns job postings, that is, the hiring entity responsible for employing applicants for the job position.
   */
  export interface Schema$Company {
    /**
     * The URI to employer's career site or careers page on the employer's web site, for example, "https://careers.google.com".
     */
    careerSiteUri?: string | null;
    /**
     * Output only. Derived details about the company.
     */
    derivedInfo?: Schema$CompanyDerivedInfo;
    /**
     * Required. The display name of the company, for example, "Google LLC".
     */
    displayName?: string | null;
    /**
     * Equal Employment Opportunity legal disclaimer text to be associated with all jobs, and typically to be displayed in all roles. The maximum number of allowed characters is 500.
     */
    eeoText?: string | null;
    /**
     * Required. Client side company identifier, used to uniquely identify the company. The maximum number of allowed characters is 255.
     */
    externalId?: string | null;
    /**
     * The street address of the company's main headquarters, which may be different from the job location. The service attempts to geolocate the provided address, and populates a more specific location wherever possible in DerivedInfo.headquarters_location.
     */
    headquartersAddress?: string | null;
    /**
     * Set to true if it is the hiring agency that post jobs for other employers. Defaults to false if not provided.
     */
    hiringAgency?: boolean | null;
    /**
     * A URI that hosts the employer's company logo.
     */
    imageUri?: string | null;
    /**
     * This field is deprecated. Please set the searchability of the custom attribute in the Job.custom_attributes going forward. A list of keys of filterable Job.custom_attributes, whose corresponding `string_values` are used in keyword searches. Jobs with `string_values` under these specified field keys are returned if any of the values match the search keyword. Custom field values with parenthesis, brackets and special symbols are not searchable as-is, and those keyword queries must be surrounded by quotes.
     */
    keywordSearchableJobCustomAttributes?: string[] | null;
    /**
     * Required during company update. The resource name for a company. This is generated by the service when a company is created. The format is "projects/{project_id\}/tenants/{tenant_id\}/companies/{company_id\}", for example, "projects/foo/tenants/bar/companies/baz".
     */
    name?: string | null;
    /**
     * The employer's company size.
     */
    size?: string | null;
    /**
     * Output only. Indicates whether a company is flagged to be suspended from public availability by the service when job content appears suspicious, abusive, or spammy.
     */
    suspended?: boolean | null;
    /**
     * The URI representing the company's primary web site or home page, for example, "https://www.google.com". The maximum number of allowed characters is 255.
     */
    websiteUri?: string | null;
  }
  /**
   * Derived details about the company.
   */
  export interface Schema$CompanyDerivedInfo {
    /**
     * A structured headquarters location of the company, resolved from Company.headquarters_address if provided.
     */
    headquartersLocation?: Schema$Location;
  }
  /**
   * A compensation entry that represents one component of compensation, such as base pay, bonus, or other compensation type. Annualization: One compensation entry can be annualized if - it contains valid amount or range. - and its expected_units_per_year is set or can be derived. Its annualized range is determined as (amount or range) times expected_units_per_year.
   */
  export interface Schema$CompensationEntry {
    /**
     * Compensation amount.
     */
    amount?: Schema$Money;
    /**
     * Compensation description. For example, could indicate equity terms or provide additional context to an estimated bonus.
     */
    description?: string | null;
    /**
     * Expected number of units paid each year. If not specified, when Job.employment_types is FULLTIME, a default value is inferred based on unit. Default values: - HOURLY: 2080 - DAILY: 260 - WEEKLY: 52 - MONTHLY: 12 - ANNUAL: 1
     */
    expectedUnitsPerYear?: number | null;
    /**
     * Compensation range.
     */
    range?: Schema$CompensationRange;
    /**
     * Compensation type. Default is CompensationType.COMPENSATION_TYPE_UNSPECIFIED.
     */
    type?: string | null;
    /**
     * Frequency of the specified amount. Default is CompensationUnit.COMPENSATION_UNIT_UNSPECIFIED.
     */
    unit?: string | null;
  }
  /**
   * Filter on job compensation type and amount.
   */
  export interface Schema$CompensationFilter {
    /**
     * If set to true, jobs with unspecified compensation range fields are included.
     */
    includeJobsWithUnspecifiedCompensationRange?: boolean | null;
    /**
     * Compensation range.
     */
    range?: Schema$CompensationRange;
    /**
     * Required. Type of filter.
     */
    type?: string | null;
    /**
     * Required. Specify desired `base compensation entry's` CompensationInfo.CompensationUnit.
     */
    units?: string[] | null;
  }
  /**
   * Job compensation details.
   */
  export interface Schema$CompensationInfo {
    /**
     * Output only. Annualized base compensation range. Computed as base compensation entry's CompensationEntry.amount times CompensationEntry.expected_units_per_year. See CompensationEntry for explanation on compensation annualization.
     */
    annualizedBaseCompensationRange?: Schema$CompensationRange;
    /**
     * Output only. Annualized total compensation range. Computed as all compensation entries' CompensationEntry.amount times CompensationEntry.expected_units_per_year. See CompensationEntry for explanation on compensation annualization.
     */
    annualizedTotalCompensationRange?: Schema$CompensationRange;
    /**
     * Job compensation information. At most one entry can be of type CompensationInfo.CompensationType.BASE, which is referred as **base compensation entry** for the job.
     */
    entries?: Schema$CompensationEntry[];
  }
  /**
   * Compensation range.
   */
  export interface Schema$CompensationRange {
    /**
     * The maximum amount of compensation. If left empty, the value is set to a maximal compensation value and the currency code is set to match the currency code of min_compensation.
     */
    maxCompensation?: Schema$Money;
    /**
     * The minimum amount of compensation. If left empty, the value is set to zero and the currency code is set to match the currency code of max_compensation.
     */
    minCompensation?: Schema$Money;
  }
  /**
   * Response of auto-complete query.
   */
  export interface Schema$CompleteQueryResponse {
    /**
     * Results of the matching job/company candidates.
     */
    completionResults?: Schema$CompletionResult[];
    /**
     * Additional information for the API invocation, such as the request tracking id.
     */
    metadata?: Schema$ResponseMetadata;
  }
  /**
   * Resource that represents completion results.
   */
  export interface Schema$CompletionResult {
    /**
     * The URI of the company image for COMPANY_NAME.
     */
    imageUri?: string | null;
    /**
     * The suggestion for the query.
     */
    suggestion?: string | null;
    /**
     * The completion topic.
     */
    type?: string | null;
  }
  /**
   * Custom attribute values that are either filterable or non-filterable.
   */
  export interface Schema$CustomAttribute {
    /**
     * If the `filterable` flag is true, the custom field values may be used for custom attribute filters JobQuery.custom_attribute_filter. If false, these values may not be used for custom attribute filters. Default is false.
     */
    filterable?: boolean | null;
    /**
     * If the `keyword_searchable` flag is true, the keywords in custom fields are searchable by keyword match. If false, the values are not searchable by keyword match. Default is false.
     */
    keywordSearchable?: boolean | null;
    /**
     * Exactly one of string_values or long_values must be specified. This field is used to perform number range search. (`EQ`, `GT`, `GE`, `LE`, `LT`) over filterable `long_value`. Currently at most 1 long_values is supported.
     */
    longValues?: string[] | null;
    /**
     * Exactly one of string_values or long_values must be specified. This field is used to perform a string match (`CASE_SENSITIVE_MATCH` or `CASE_INSENSITIVE_MATCH`) search. For filterable `string_value`s, a maximum total number of 200 values is allowed, with each `string_value` has a byte size of no more than 500B. For unfilterable `string_values`, the maximum total byte size of unfilterable `string_values` is 50KB. Empty string isn't allowed.
     */
    stringValues?: string[] | null;
  }
  /**
   * Custom ranking information for SearchJobsRequest.
   */
  export interface Schema$CustomRankingInfo {
    /**
     * Required. Controls over how important the score of CustomRankingInfo.ranking_expression gets applied to job's final ranking position. An error is thrown if not specified.
     */
    importanceLevel?: string | null;
    /**
     * Required. Controls over how job documents get ranked on top of existing relevance score (determined by API algorithm). A combination of the ranking expression and relevance score is used to determine job's final ranking position. The syntax for this expression is a subset of Google SQL syntax. Supported operators are: +, -, *, /, where the left and right side of the operator is either a numeric Job.custom_attributes key, integer/double value or an expression that can be evaluated to a number. Parenthesis are supported to adjust calculation precedence. The expression must be < 200 characters in length. The expression is considered invalid for a job if the expression references custom attributes that are not populated on the job or if the expression results in a divide by zero. If an expression is invalid for a job, that job is demoted to the end of the results. Sample ranking expression (year + 25) * 0.25 - (freshness / 0.5)
     */
    rankingExpression?: string | null;
  }
  /**
   * Device information collected from the job seeker, candidate, or other entity conducting the job search. Providing this information improves the quality of the search results across devices.
   */
  export interface Schema$DeviceInfo {
    /**
     * Type of the device.
     */
    deviceType?: string | null;
    /**
     * A device-specific ID. The ID must be a unique identifier that distinguishes the device from other devices.
     */
    id?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * The histogram request.
   */
  export interface Schema$HistogramQuery {
    /**
     * An expression specifies a histogram request against matching jobs for searches. See SearchJobsRequest.histogram_queries for details about syntax.
     */
    histogramQuery?: string | null;
  }
  /**
   * Histogram result that matches HistogramQuery specified in searches.
   */
  export interface Schema$HistogramQueryResult {
    /**
     * A map from the values of the facet associated with distinct values to the number of matching entries with corresponding value. The key format is: * (for string histogram) string values stored in the field. * (for named numeric bucket) name specified in `bucket()` function, like for `bucket(0, MAX, "non-negative")`, the key will be `non-negative`. * (for anonymous numeric bucket) range formatted as `-`, for example, `0-1000`, `MIN-0`, and `0-MAX`.
     */
    histogram?: {[key: string]: string} | null;
    /**
     * Requested histogram expression.
     */
    histogramQuery?: string | null;
  }
  /**
   * A Job resource represents a job posting (also referred to as a "job listing" or "job requisition"). A job belongs to a Company, which is the hiring entity responsible for the job.
   */
  export interface Schema$Job {
    /**
     * Strongly recommended for the best service experience. Location(s) where the employer is looking to hire for this job posting. Specifying the full street address(es) of the hiring location enables better API results, especially job searches by commute time. At most 50 locations are allowed for best search performance. If a job has more locations, it is suggested to split it into multiple jobs with unique requisition_ids (e.g. 'ReqA' becomes 'ReqA-1', 'ReqA-2', and so on.) as multiple jobs with the same company, language_code and requisition_id are not allowed. If the original requisition_id must be preserved, a custom field should be used for storage. It is also suggested to group the locations that close to each other in the same job for better search experience. Jobs with multiple addresses must have their addresses with the same LocationType to allow location filtering to work properly. (For example, a Job with addresses "1600 Amphitheatre Parkway, Mountain View, CA, USA" and "London, UK" may not have location filters applied correctly at search time since the first is a LocationType.STREET_ADDRESS and the second is a LocationType.LOCALITY.) If a job needs to have multiple addresses, it is suggested to split it into multiple jobs with same LocationTypes. The maximum number of allowed characters is 500.
     */
    addresses?: string[] | null;
    /**
     * Job application information.
     */
    applicationInfo?: Schema$ApplicationInfo;
    /**
     * Required. The resource name of the company listing the job. The format is "projects/{project_id\}/tenants/{tenant_id\}/companies/{company_id\}". For example, "projects/foo/tenants/bar/companies/baz".
     */
    company?: string | null;
    /**
     * Output only. Display name of the company listing the job.
     */
    companyDisplayName?: string | null;
    /**
     * Job compensation information (a.k.a. "pay rate") i.e., the compensation that will paid to the employee.
     */
    compensationInfo?: Schema$CompensationInfo;
    /**
     * A map of fields to hold both filterable and non-filterable custom job attributes that are not covered by the provided structured fields. The keys of the map are strings up to 64 bytes and must match the pattern: `a-zA-Z*`. For example, key0LikeThis or KEY_1_LIKE_THIS. At most 100 filterable and at most 100 unfilterable keys are supported. For filterable `string_values`, across all keys at most 200 values are allowed, with each string no more than 255 characters. For unfilterable `string_values`, the maximum total size of `string_values` across all keys is 50KB.
     */
    customAttributes?: {[key: string]: Schema$CustomAttribute} | null;
    /**
     * The desired education degrees for the job, such as Bachelors, Masters.
     */
    degreeTypes?: string[] | null;
    /**
     * The department or functional area within the company with the open position. The maximum number of allowed characters is 255.
     */
    department?: string | null;
    /**
     * Output only. Derived details about the job posting.
     */
    derivedInfo?: Schema$JobDerivedInfo;
    /**
     * Required. The description of the job, which typically includes a multi-paragraph description of the company and related information. Separate fields are provided on the job object for responsibilities, qualifications, and other job characteristics. Use of these separate job fields is recommended. This field accepts and sanitizes HTML input, and also accepts bold, italic, ordered list, and unordered list markup tags. The maximum number of allowed characters is 100,000.
     */
    description?: string | null;
    /**
     * The employment type(s) of a job, for example, full time or part time.
     */
    employmentTypes?: string[] | null;
    /**
     * A description of bonus, commission, and other compensation incentives associated with the job not including salary or pay. The maximum number of allowed characters is 10,000.
     */
    incentives?: string | null;
    /**
     * The benefits included with the job.
     */
    jobBenefits?: string[] | null;
    /**
     * The end timestamp of the job. Typically this field is used for contracting engagements. Invalid timestamps are ignored.
     */
    jobEndTime?: string | null;
    /**
     * The experience level associated with the job, such as "Entry Level".
     */
    jobLevel?: string | null;
    /**
     * The start timestamp of the job in UTC time zone. Typically this field is used for contracting engagements. Invalid timestamps are ignored.
     */
    jobStartTime?: string | null;
    /**
     * The language of the posting. This field is distinct from any requirements for fluency that are associated with the job. Language codes must be in BCP-47 format, such as "en-US" or "sr-Latn". For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47){: class="external" target="_blank" \}. If this field is unspecified and Job.description is present, detected language code based on Job.description is assigned, otherwise defaults to 'en_US'.
     */
    languageCode?: string | null;
    /**
     * Required during job update. The resource name for the job. This is generated by the service when a job is created. The format is "projects/{project_id\}/tenants/{tenant_id\}/jobs/{job_id\}". For example, "projects/foo/tenants/bar/jobs/baz". Use of this field in job queries and API calls is preferred over the use of requisition_id since this value is unique.
     */
    name?: string | null;
    /**
     * Output only. The timestamp when this job posting was created.
     */
    postingCreateTime?: string | null;
    /**
     * Strongly recommended for the best service experience. The expiration timestamp of the job. After this timestamp, the job is marked as expired, and it no longer appears in search results. The expired job can't be listed by the ListJobs API, but it can be retrieved with the GetJob API or updated with the UpdateJob API or deleted with the DeleteJob API. An expired job can be updated and opened again by using a future expiration timestamp. Updating an expired job fails if there is another existing open job with same company, language_code and requisition_id. The expired jobs are retained in our system for 90 days. However, the overall expired job count cannot exceed 3 times the maximum number of open jobs over previous 7 days. If this threshold is exceeded, expired jobs are cleaned out in order of earliest expire time. Expired jobs are no longer accessible after they are cleaned out. Invalid timestamps are ignored, and treated as expire time not provided. If the timestamp is before the instant request is made, the job is treated as expired immediately on creation. This kind of job can not be updated. And when creating a job with past timestamp, the posting_publish_time must be set before posting_expire_time. The purpose of this feature is to allow other objects, such as ApplicationInfo, to refer a job that didn't exist in the system prior to becoming expired. If you want to modify a job that was expired on creation, delete it and create a new one. If this value isn't provided at the time of job creation or is invalid, the job posting expires after 30 days from the job's creation time. For example, if the job was created on 2017/01/01 13:00AM UTC with an unspecified expiration date, the job expires after 2017/01/31 13:00AM UTC. If this value isn't provided on job update, it depends on the field masks set by UpdateJobRequest.update_mask. If the field masks include job_end_time, or the masks are empty meaning that every field is updated, the job posting expires after 30 days from the job's last update time. Otherwise the expiration date isn't updated.
     */
    postingExpireTime?: string | null;
    /**
     * The timestamp this job posting was most recently published. The default value is the time the request arrives at the server. Invalid timestamps are ignored.
     */
    postingPublishTime?: string | null;
    /**
     * The job PostingRegion (for example, state, country) throughout which the job is available. If this field is set, a LocationFilter in a search query within the job region finds this job posting if an exact location match isn't specified. If this field is set to PostingRegion.NATION or PostingRegion.ADMINISTRATIVE_AREA, setting job Job.addresses to the same location level as this field is strongly recommended.
     */
    postingRegion?: string | null;
    /**
     * Output only. The timestamp when this job posting was last updated.
     */
    postingUpdateTime?: string | null;
    /**
     * Options for job processing.
     */
    processingOptions?: Schema$ProcessingOptions;
    /**
     * A promotion value of the job, as determined by the client. The value determines the sort order of the jobs returned when searching for jobs using the featured jobs search call, with higher promotional values being returned first and ties being resolved by relevance sort. Only the jobs with a promotionValue \>0 are returned in a FEATURED_JOB_SEARCH. Default value is 0, and negative values are treated as 0.
     */
    promotionValue?: number | null;
    /**
     * A description of the qualifications required to perform the job. The use of this field is recommended as an alternative to using the more general description field. This field accepts and sanitizes HTML input, and also accepts bold, italic, ordered list, and unordered list markup tags. The maximum number of allowed characters is 10,000.
     */
    qualifications?: string | null;
    /**
     * Required. The requisition ID, also referred to as the posting ID, is assigned by the client to identify a job. This field is intended to be used by clients for client identification and tracking of postings. A job isn't allowed to be created if there is another job with the same company, language_code and requisition_id. The maximum number of allowed characters is 255.
     */
    requisitionId?: string | null;
    /**
     * A description of job responsibilities. The use of this field is recommended as an alternative to using the more general description field. This field accepts and sanitizes HTML input, and also accepts bold, italic, ordered list, and unordered list markup tags. The maximum number of allowed characters is 10,000.
     */
    responsibilities?: string | null;
    /**
     * Required. The title of the job, such as "Software Engineer" The maximum number of allowed characters is 500.
     */
    title?: string | null;
    /**
     * Deprecated. The job is only visible to the owner. The visibility of the job. Defaults to Visibility.ACCOUNT_ONLY if not specified.
     */
    visibility?: string | null;
  }
  /**
   * Derived details about the job posting.
   */
  export interface Schema$JobDerivedInfo {
    /**
     * Job categories derived from Job.title and Job.description.
     */
    jobCategories?: string[] | null;
    /**
     * Structured locations of the job, resolved from Job.addresses. locations are exactly matched to Job.addresses in the same order.
     */
    locations?: Schema$Location[];
  }
  /**
   * An event issued when a job seeker interacts with the application that implements Cloud Talent Solution.
   */
  export interface Schema$JobEvent {
    /**
     * Required. The job name(s) associated with this event. For example, if this is an impression event, this field contains the identifiers of all jobs shown to the job seeker. If this was a view event, this field contains the identifier of the viewed job. The format is "projects/{project_id\}/tenants/{tenant_id\}/jobs/{job_id\}", for example, "projects/foo/tenants/bar/jobs/baz".
     */
    jobs?: string[] | null;
    /**
     * Required. The type of the event (see JobEventType).
     */
    type?: string | null;
  }
  /**
   * The query required to perform a search query.
   */
  export interface Schema$JobQuery {
    /**
     * Allows filtering jobs by commute time with different travel methods (for example, driving or public transit). Note: This only works when you specify a CommuteMethod. In this case, location_filters is ignored. Currently we don't support sorting by commute time.
     */
    commuteFilter?: Schema$CommuteFilter;
    /**
     * This filter specifies the company entities to search against. If a value isn't specified, jobs are searched for against all companies. If multiple values are specified, jobs are searched against the companies specified. The format is "projects/{project_id\}/tenants/{tenant_id\}/companies/{company_id\}". For example, "projects/foo/tenants/bar/companies/baz". At most 20 company filters are allowed.
     */
    companies?: string[] | null;
    /**
     * This filter specifies the company Company.display_name of the jobs to search against. The company name must match the value exactly. Alternatively, the value being searched for can be wrapped in different match operators. `SUBSTRING_MATCH([value])` The company name must contain a case insensitive substring match of the value. Using this function may increase latency. Sample Value: `SUBSTRING_MATCH(google)` `MULTI_WORD_TOKEN_MATCH([value])` The value will be treated as a multi word token and the company name must contain a case insensitive match of the value. Using this function may increase latency. Sample Value: `MULTI_WORD_TOKEN_MATCH(google)` If a value isn't specified, jobs within the search results are associated with any company. If multiple values are specified, jobs within the search results may be associated with any of the specified companies. At most 20 company display name filters are allowed.
     */
    companyDisplayNames?: string[] | null;
    /**
     * This search filter is applied only to Job.compensation_info. For example, if the filter is specified as "Hourly job with per-hour compensation \> $15", only jobs meeting these criteria are searched. If a filter isn't defined, all open jobs are searched.
     */
    compensationFilter?: Schema$CompensationFilter;
    /**
     * This filter specifies a structured syntax to match against the Job.custom_attributes marked as `filterable`. The syntax for this expression is a subset of SQL syntax. Supported operators are: `=`, `!=`, `<`, `<=`, `\>`, and `\>=` where the left of the operator is a custom field key and the right of the operator is a number or a quoted string. You must escape backslash (\\) and quote (\") characters. Supported functions are `LOWER([field_name])` to perform a case insensitive match and `EMPTY([field_name])` to filter on the existence of a key. Boolean expressions (AND/OR/NOT) are supported up to 3 levels of nesting (for example, "((A AND B AND C) OR NOT D) AND E"), a maximum of 100 comparisons or functions are allowed in the expression. The expression must be < 10000 bytes in length. Sample Query: `(LOWER(driving_license)="class \"a\"" OR EMPTY(driving_license)) AND driving_years \> 10`
     */
    customAttributeFilter?: string | null;
    /**
     * This flag controls the spell-check feature. If false, the service attempts to correct a misspelled query, for example, "enginee" is corrected to "engineer". Defaults to false: a spell check is performed.
     */
    disableSpellCheck?: boolean | null;
    /**
     * The employment type filter specifies the employment type of jobs to search against, such as EmploymentType.FULL_TIME. If a value isn't specified, jobs in the search results includes any employment type. If multiple values are specified, jobs in the search results include any of the specified employment types.
     */
    employmentTypes?: string[] | null;
    /**
     * This filter specifies a list of job names to be excluded during search. At most 400 excluded job names are allowed.
     */
    excludedJobs?: string[] | null;
    /**
     * The category filter specifies the categories of jobs to search against. See JobCategory for more information. If a value isn't specified, jobs from any category are searched against. If multiple values are specified, jobs from any of the specified categories are searched against.
     */
    jobCategories?: string[] | null;
    /**
     * This filter specifies the locale of jobs to search against, for example, "en-US". If a value isn't specified, the search results can contain jobs in any locale. Language codes should be in BCP-47 format, such as "en-US" or "sr-Latn". For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47). At most 10 language code filters are allowed.
     */
    languageCodes?: string[] | null;
    /**
     * The location filter specifies geo-regions containing the jobs to search against. See LocationFilter for more information. If a location value isn't specified, jobs fitting the other search criteria are retrieved regardless of where they're located. If multiple values are specified, jobs are retrieved from any of the specified locations. If different values are specified for the LocationFilter.distance_in_miles parameter, the maximum provided distance is used for all locations. At most 5 location filters are allowed.
     */
    locationFilters?: Schema$LocationFilter[];
    /**
     * Jobs published within a range specified by this filter are searched against.
     */
    publishTimeRange?: Schema$TimestampRange;
    /**
     * The query string that matches against the job title, description, and location fields. The maximum number of allowed characters is 255.
     */
    query?: string | null;
    /**
     * The language code of query. For example, "en-US". This field helps to better interpret the query. If a value isn't specified, the query language code is automatically detected, which may not be accurate. Language code should be in BCP-47 format, such as "en-US" or "sr-Latn". For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47).
     */
    queryLanguageCode?: string | null;
  }
  /**
   * Mutation result of a job from a batch operation.
   */
  export interface Schema$JobResult {
    /**
     * Here Job only contains basic information including name, company, language_code and requisition_id, use getJob method to retrieve detailed information of the created/updated job.
     */
    job?: Schema$Job;
    /**
     * The status of the job processed. This field is populated if the processing of the job fails.
     */
    status?: Schema$Status;
  }
  /**
   * An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges.
   */
  export interface Schema$LatLng {
    /**
     * The latitude in degrees. It must be in the range [-90.0, +90.0].
     */
    latitude?: number | null;
    /**
     * The longitude in degrees. It must be in the range [-180.0, +180.0].
     */
    longitude?: number | null;
  }
  /**
   * The List companies response object.
   */
  export interface Schema$ListCompaniesResponse {
    /**
     * Companies for the current client.
     */
    companies?: Schema$Company[];
    /**
     * Additional information for the API invocation, such as the request tracking id.
     */
    metadata?: Schema$ResponseMetadata;
    /**
     * A token to retrieve the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * List jobs response.
   */
  export interface Schema$ListJobsResponse {
    /**
     * The Jobs for a given company. The maximum number of items returned is based on the limit field provided in the request.
     */
    jobs?: Schema$Job[];
    /**
     * Additional information for the API invocation, such as the request tracking id.
     */
    metadata?: Schema$ResponseMetadata;
    /**
     * A token to retrieve the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * The List tenants response object.
   */
  export interface Schema$ListTenantsResponse {
    /**
     * Additional information for the API invocation, such as the request tracking id.
     */
    metadata?: Schema$ResponseMetadata;
    /**
     * A token to retrieve the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * Tenants for the current client.
     */
    tenants?: Schema$Tenant[];
  }
  /**
   * A resource that represents a location with full geographic information.
   */
  export interface Schema$Location {
    /**
     * An object representing a latitude/longitude pair.
     */
    latLng?: Schema$LatLng;
    /**
     * The type of a location, which corresponds to the address lines field of google.type.PostalAddress. For example, "Downtown, Atlanta, GA, USA" has a type of LocationType.NEIGHBORHOOD, and "Kansas City, KS, USA" has a type of LocationType.LOCALITY.
     */
    locationType?: string | null;
    /**
     * Postal address of the location that includes human readable information, such as postal delivery and payments addresses. Given a postal address, a postal service can deliver items to a premises, P.O. Box, or other delivery location.
     */
    postalAddress?: Schema$PostalAddress;
    /**
     * Radius in miles of the job location. This value is derived from the location bounding box in which a circle with the specified radius centered from google.type.LatLng covers the area associated with the job location. For example, currently, "Mountain View, CA, USA" has a radius of 6.17 miles.
     */
    radiusMiles?: number | null;
  }
  /**
   * Geographic region of the search.
   */
  export interface Schema$LocationFilter {
    /**
     * The address name, such as "Mountain View" or "Bay Area".
     */
    address?: string | null;
    /**
     * The distance_in_miles is applied when the location being searched for is identified as a city or smaller. This field is ignored if the location being searched for is a state or larger.
     */
    distanceInMiles?: number | null;
    /**
     * The latitude and longitude of the geographic center to search from. This field is ignored if `address` is provided.
     */
    latLng?: Schema$LatLng;
    /**
     * CLDR region code of the country/region. This field may be used in two ways: 1) If telecommute preference is not set, this field is used address ambiguity of the user-input address. For example, "Liverpool" may refer to "Liverpool, NY, US" or "Liverpool, UK". This region code biases the address resolution toward a specific country or territory. If this field is not set, address resolution is biased toward the United States by default. 2) If telecommute preference is set to TELECOMMUTE_ALLOWED, the telecommute location filter will be limited to the region specified in this field. If this field is not set, the telecommute job locations will not be See https://unicode-org.github.io/cldr-staging/charts/latest/supplemental/territory_information.html for details. Example: "CH" for Switzerland.
     */
    regionCode?: string | null;
    /**
     * Allows the client to return jobs without a set location, specifically, telecommuting jobs (telecommuting is considered by the service as a special location). Job.posting_region indicates if a job permits telecommuting. If this field is set to TelecommutePreference.TELECOMMUTE_ALLOWED, telecommuting jobs are searched, and address and lat_lng are ignored. If not set or set to TelecommutePreference.TELECOMMUTE_EXCLUDED, the telecommute status of the jobs is ignored. Jobs that have PostingRegion.TELECOMMUTE and have additional Job.addresses may still be matched based on other location filters using address or lat_lng. This filter can be used by itself to search exclusively for telecommuting jobs, or it can be combined with another location filter to search for a combination of job locations, such as "Mountain View" or "telecommuting" jobs. However, when used in combination with other location filters, telecommuting jobs can be treated as less relevant than other jobs in the search response. This field is only used for job search requests.
     */
    telecommutePreference?: string | null;
  }
  /**
   * Job entry with metadata inside SearchJobsResponse.
   */
  export interface Schema$MatchingJob {
    /**
     * Commute information which is generated based on specified CommuteFilter.
     */
    commuteInfo?: Schema$CommuteInfo;
    /**
     * Job resource that matches the specified SearchJobsRequest.
     */
    job?: Schema$Job;
    /**
     * A summary of the job with core information that's displayed on the search results listing page.
     */
    jobSummary?: string | null;
    /**
     * Contains snippets of text from the Job.title field most closely matching a search query's keywords, if available. The matching query keywords are enclosed in HTML bold tags.
     */
    jobTitleSnippet?: string | null;
    /**
     * Contains snippets of text from the Job.description and similar fields that most closely match a search query's keywords, if available. All HTML tags in the original fields are stripped when returned in this field, and matching query keywords are enclosed in HTML bold tags.
     */
    searchTextSnippet?: string | null;
  }
  /**
   * Represents an amount of money with its currency type.
   */
  export interface Schema$Money {
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
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$Operation {
    /**
     * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
     */
    done?: boolean | null;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$Status;
    /**
     * Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id\}`.
     */
    name?: string | null;
    /**
     * The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * Represents a postal address (for example, for postal delivery or payments addresses). Given a postal address, a postal service can deliver items to a premise, P.O. box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage, an address would be created by user input or from importing existing data, depending on the type of process. Advice on address input or editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput. - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, see: https://support.google.com/business/answer/6397478.
   */
  export interface Schema$PostalAddress {
    /**
     * Unstructured address lines describing the lower levels of an address. Because values in `address_lines` do not have type information and may sometimes contain multiple values in a single field (for example, "Austin, TX"), it is important that the line order is clear. The order of address lines should be "envelope order" for the country or region of the address. In places where this can vary (for example, Japan), `address_language` is used to make it explicit (for example, "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). In this way, the most specific line of an address can be selected based on the language. The minimum permitted structural representation of an address consists of a `region_code` with all remaining information placed in the `address_lines`. It would be possible to format such an address very approximately without geocoding, but no semantic reasoning could be made about any of the address components until it was at least partially resolved. Creating an address only containing a `region_code` and `address_lines` and then geocoding is the recommended way to handle completely unstructured addresses (as opposed to guessing which parts of the address should be localities or administrative areas).
     */
    addressLines?: string[] | null;
    /**
     * Optional. Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state, a province, an oblast, or a prefecture. For Spain, this is the province and not the autonomous community (for example, "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. For example, in Switzerland, this should be left unpopulated.
     */
    administrativeArea?: string | null;
    /**
     * Optional. BCP-47 language code of the contents of this address (if known). This is often the UI language of the input form or is expected to match one of the languages used in the address' country/region, or their transliterated equivalents. This can affect formatting in certain countries, but is not critical to the correctness of the data and will never affect any validation or other non-formatting related operations. If this value is not known, it should be omitted (rather than specifying a possibly incorrect default). Examples: "zh-Hant", "ja", "ja-Latn", "en".
     */
    languageCode?: string | null;
    /**
     * Optional. Generally refers to the city or town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave `locality` empty and use `address_lines`.
     */
    locality?: string | null;
    /**
     * Optional. The name of the organization at the address.
     */
    organization?: string | null;
    /**
     * Optional. Postal code of the address. Not all countries use or require postal codes to be present, but where they are used, they may trigger additional validation with other parts of the address (for example, state or zip code validation in the United States).
     */
    postalCode?: string | null;
    /**
     * Optional. The recipient at the address. This field may, under certain circumstances, contain multiline information. For example, it might contain "care of" information.
     */
    recipients?: string[] | null;
    /**
     * Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to ensure the value is correct. See https://cldr.unicode.org/ and https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.
     */
    regionCode?: string | null;
    /**
     * The schema revision of the `PostalAddress`. This must be set to 0, which is the latest revision. All new revisions **must** be backward compatible with old revisions.
     */
    revision?: number | null;
    /**
     * Optional. Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the value is either a string like "CEDEX", optionally followed by a number (for example, "CEDEX 7"), or just a number alone, representing the "sector code" (Jamaica), "delivery area indicator" (Malawi) or "post office indicator" (Côte d'Ivoire).
     */
    sortingCode?: string | null;
    /**
     * Optional. Sublocality of the address. For example, this can be a neighborhood, borough, or district.
     */
    sublocality?: string | null;
  }
  /**
   * Options for job processing.
   */
  export interface Schema$ProcessingOptions {
    /**
     * If set to `true`, the service does not attempt to resolve a more precise address for the job.
     */
    disableStreetAddressResolution?: boolean | null;
    /**
     * Option for job HTML content sanitization. Applied fields are: * description * applicationInfo.instruction * incentives * qualifications * responsibilities HTML tags in these fields may be stripped if sanitiazation isn't disabled. Defaults to HtmlSanitization.SIMPLE_FORMATTING_ONLY.
     */
    htmlSanitization?: string | null;
  }
  /**
   * Meta information related to the job searcher or entity conducting the job search. This information is used to improve the performance of the service.
   */
  export interface Schema$RequestMetadata {
    /**
     * Only set when any of domain, session_id and user_id isn't available for some reason. It is highly recommended not to set this field and provide accurate domain, session_id and user_id for the best service experience.
     */
    allowMissingIds?: boolean | null;
    /**
     * The type of device used by the job seeker at the time of the call to the service.
     */
    deviceInfo?: Schema$DeviceInfo;
    /**
     * Required if allow_missing_ids is unset or `false`. The client-defined scope or source of the service call, which typically is the domain on which the service has been implemented and is currently being run. For example, if the service is being run by client *Foo, Inc.*, on job board www.foo.com and career site www.bar.com, then this field is set to "foo.com" for use on the job board, and "bar.com" for use on the career site. Note that any improvements to the model for a particular tenant site rely on this field being set correctly to a unique domain. The maximum number of allowed characters is 255.
     */
    domain?: string | null;
    /**
     * Required if allow_missing_ids is unset or `false`. A unique session identification string. A session is defined as the duration of an end user's interaction with the service over a certain period. Obfuscate this field for privacy concerns before providing it to the service. Note that any improvements to the model for a particular tenant site rely on this field being set correctly to a unique session ID. The maximum number of allowed characters is 255.
     */
    sessionId?: string | null;
    /**
     * Required if allow_missing_ids is unset or `false`. A unique user identification string, as determined by the client. To have the strongest positive impact on search quality make sure the client-level is unique. Obfuscate this field for privacy concerns before providing it to the service. Note that any improvements to the model for a particular tenant site rely on this field being set correctly to a unique user ID. The maximum number of allowed characters is 255.
     */
    userId?: string | null;
  }
  /**
   * Additional information returned to client, such as debugging information.
   */
  export interface Schema$ResponseMetadata {
    /**
     * A unique id associated with this call. This id is logged for tracking purposes.
     */
    requestId?: string | null;
  }
  /**
   * The Request body of the `SearchJobs` call.
   */
  export interface Schema$SearchJobsRequest {
    /**
     * Controls over how job documents get ranked on top of existing relevance score (determined by API algorithm).
     */
    customRankingInfo?: Schema$CustomRankingInfo;
    /**
     * This field is deprecated. Please use SearchJobsRequest.keyword_match_mode going forward. To migrate, disable_keyword_match set to false maps to KeywordMatchMode.KEYWORD_MATCH_ALL, and disable_keyword_match set to true maps to KeywordMatchMode.KEYWORD_MATCH_DISABLED. If SearchJobsRequest.keyword_match_mode is set, this field is ignored. Controls whether to disable exact keyword match on Job.title, Job.description, Job.company_display_name, Job.addresses, Job.qualifications. When disable keyword match is turned off, a keyword match returns jobs that do not match given category filters when there are matching keywords. For example, for the query "program manager," a result is returned even if the job posting has the title "software developer," which doesn't fall into "program manager" ontology, but does have "program manager" appearing in its description. For queries like "cloud" that don't contain title or location specific ontology, jobs with "cloud" keyword matches are returned regardless of this flag's value. Use Company.keyword_searchable_job_custom_attributes if company-specific globally matched custom field/attribute string values are needed. Enabling keyword match improves recall of subsequent search requests. Defaults to false.
     */
    disableKeywordMatch?: boolean | null;
    /**
     * Controls whether highly similar jobs are returned next to each other in the search results. Jobs are identified as highly similar based on their titles, job categories, and locations. Highly similar results are clustered so that only one representative job of the cluster is displayed to the job seeker higher up in the results, with the other jobs being displayed lower down in the results. Defaults to DiversificationLevel.SIMPLE if no value is specified.
     */
    diversificationLevel?: string | null;
    /**
     * Controls whether to broaden the search when it produces sparse results. Broadened queries append results to the end of the matching results list. Defaults to false.
     */
    enableBroadening?: boolean | null;
    /**
     * An expression specifies a histogram request against matching jobs. Expression syntax is an aggregation function call with histogram facets and other options. Available aggregation function calls are: * `count(string_histogram_facet)`: Count the number of matching entities, for each distinct attribute value. * `count(numeric_histogram_facet, list of buckets)`: Count the number of matching entities within each bucket. A maximum of 200 histogram buckets are supported. Data types: * Histogram facet: facet names with format `a-zA-Z+`. * String: string like "any string with backslash escape for quote(\")." * Number: whole number and floating point number like 10, -1 and -0.01. * List: list of elements with comma(,) separator surrounded by square brackets, for example, [1, 2, 3] and ["one", "two", "three"]. Built-in constants: * MIN (minimum number similar to java Double.MIN_VALUE) * MAX (maximum number similar to java Double.MAX_VALUE) Built-in functions: * bucket(start, end[, label]): bucket built-in function creates a bucket with range of start, end). Note that the end is exclusive, for example, bucket(1, MAX, "positive number") or bucket(1, 10). Job histogram facets: * company_display_name: histogram by [Job.company_display_name. * employment_type: histogram by Job.employment_types, for example, "FULL_TIME", "PART_TIME". * company_size (DEPRECATED): histogram by CompanySize, for example, "SMALL", "MEDIUM", "BIG". * publish_time_in_day: histogram by the Job.posting_publish_time in days. Must specify list of numeric buckets in spec. * publish_time_in_month: histogram by the Job.posting_publish_time in months. Must specify list of numeric buckets in spec. * publish_time_in_year: histogram by the Job.posting_publish_time in years. Must specify list of numeric buckets in spec. * degree_types: histogram by the Job.degree_types, for example, "Bachelors", "Masters". * job_level: histogram by the Job.job_level, for example, "Entry Level". * country: histogram by the country code of jobs, for example, "US", "FR". * admin1: histogram by the admin1 code of jobs, which is a global placeholder referring to the state, province, or the particular term a country uses to define the geographic structure below the country level, for example, "CA", "IL". * city: histogram by a combination of the "city name, admin1 code". For example, "Mountain View, CA", "New York, NY". * admin1_country: histogram by a combination of the "admin1 code, country", for example, "CA, US", "IL, US". * city_coordinate: histogram by the city center's GPS coordinates (latitude and longitude), for example, 37.4038522,-122.0987765. Since the coordinates of a city center can change, customers may need to refresh them periodically. * locale: histogram by the Job.language_code, for example, "en-US", "fr-FR". * language: histogram by the language subtag of the Job.language_code, for example, "en", "fr". * category: histogram by the JobCategory, for example, "COMPUTER_AND_IT", "HEALTHCARE". * base_compensation_unit: histogram by the CompensationInfo.CompensationUnit of base salary, for example, "WEEKLY", "MONTHLY". * base_compensation: histogram by the base salary. Must specify list of numeric buckets to group results by. * annualized_base_compensation: histogram by the base annualized salary. Must specify list of numeric buckets to group results by. * annualized_total_compensation: histogram by the total annualized salary. Must specify list of numeric buckets to group results by. * string_custom_attribute: histogram by string Job.custom_attributes. Values can be accessed via square bracket notations like string_custom_attribute["key1"]. * numeric_custom_attribute: histogram by numeric Job.custom_attributes. Values can be accessed via square bracket notations like numeric_custom_attribute["key1"]. Must specify list of numeric buckets to group results by. Example expressions: * `count(admin1)` * `count(base_compensation, [bucket(1000, 10000), bucket(10000, 100000), bucket(100000, MAX)])` * `count(string_custom_attribute["some-string-custom-attribute"])` * `count(numeric_custom_attribute["some-numeric-custom-attribute"], [bucket(MIN, 0, "negative"), bucket(0, MAX, "non-negative")])`
     */
    histogramQueries?: Schema$HistogramQuery[];
    /**
     * Query used to search against jobs, such as keyword, location filters, etc.
     */
    jobQuery?: Schema$JobQuery;
    /**
     * The desired job attributes returned for jobs in the search response. Defaults to JobView.JOB_VIEW_SMALL if no value is specified.
     */
    jobView?: string | null;
    /**
     * Controls what keyword match options to use. If both keyword_match_mode and disable_keyword_match are set, keyword_match_mode will take precedence. Defaults to KeywordMatchMode.KEYWORD_MATCH_ALL if no value is specified.
     */
    keywordMatchMode?: string | null;
    /**
     * A limit on the number of jobs returned in the search results. Increasing this value above the default value of 10 can increase search response time. The value can be between 1 and 100.
     */
    maxPageSize?: number | null;
    /**
     * An integer that specifies the current offset (that is, starting result location, amongst the jobs deemed by the API as relevant) in search results. This field is only considered if page_token is unset. The maximum allowed value is 5000. Otherwise an error is thrown. For example, 0 means to return results starting from the first matching job, and 10 means to return from the 11th job. This can be used for pagination, (for example, pageSize = 10 and offset = 10 means to return from the second page).
     */
    offset?: number | null;
    /**
     * The criteria determining how search results are sorted. Default is `"relevance desc"`. Supported options are: * `"relevance desc"`: By relevance descending, as determined by the API algorithms. Relevance thresholding of query results is only available with this ordering. * `"posting_publish_time desc"`: By Job.posting_publish_time descending. * `"posting_update_time desc"`: By Job.posting_update_time descending. * `"title"`: By Job.title ascending. * `"title desc"`: By Job.title descending. * `"annualized_base_compensation"`: By job's CompensationInfo.annualized_base_compensation_range ascending. Jobs whose annualized base compensation is unspecified are put at the end of search results. * `"annualized_base_compensation desc"`: By job's CompensationInfo.annualized_base_compensation_range descending. Jobs whose annualized base compensation is unspecified are put at the end of search results. * `"annualized_total_compensation"`: By job's CompensationInfo.annualized_total_compensation_range ascending. Jobs whose annualized base compensation is unspecified are put at the end of search results. * `"annualized_total_compensation desc"`: By job's CompensationInfo.annualized_total_compensation_range descending. Jobs whose annualized base compensation is unspecified are put at the end of search results. * `"custom_ranking desc"`: By the relevance score adjusted to the SearchJobsRequest.CustomRankingInfo.ranking_expression with weight factor assigned by SearchJobsRequest.CustomRankingInfo.importance_level in descending order. * Location sorting: Use the special syntax to order jobs by distance: `"distance_from('Hawaii')"`: Order by distance from Hawaii. `"distance_from(19.89, 155.5)"`: Order by distance from a coordinate. `"distance_from('Hawaii'), distance_from('Puerto Rico')"`: Order by multiple locations. See details below. `"distance_from('Hawaii'), distance_from(19.89, 155.5)"`: Order by multiple locations. See details below. The string can have a maximum of 256 characters. When multiple distance centers are provided, a job that is close to any of the distance centers would have a high rank. When a job has multiple locations, the job location closest to one of the distance centers will be used. Jobs that don't have locations will be ranked at the bottom. Distance is calculated with a precision of 11.3 meters (37.4 feet). Diversification strategy is still applied unless explicitly disabled in diversification_level.
     */
    orderBy?: string | null;
    /**
     * The token specifying the current offset within search results. See SearchJobsResponse.next_page_token for an explanation of how to obtain the next set of query results.
     */
    pageToken?: string | null;
    /**
     * Optional. The relevance threshold of the search results. Default to Google defined threshold, leveraging a balance of precision and recall to deliver both highly accurate results and comprehensive coverage of relevant information.
     */
    relevanceThreshold?: string | null;
    /**
     * Required. The meta information collected about the job searcher, used to improve the search quality of the service. The identifiers (such as `user_id`) are provided by users, and must be unique and consistent.
     */
    requestMetadata?: Schema$RequestMetadata;
    /**
     * Mode of a search. Defaults to SearchMode.JOB_SEARCH.
     */
    searchMode?: string | null;
  }
  /**
   * Response for SearchJob method.
   */
  export interface Schema$SearchJobsResponse {
    /**
     * If query broadening is enabled, we may append additional results from the broadened query. This number indicates how many of the jobs returned in the jobs field are from the broadened query. These results are always at the end of the jobs list. In particular, a value of 0, or if the field isn't set, all the jobs in the jobs list are from the original (without broadening) query. If this field is non-zero, subsequent requests with offset after this result set should contain all broadened results.
     */
    broadenedQueryJobsCount?: number | null;
    /**
     * The histogram results that match with specified SearchJobsRequest.histogram_queries.
     */
    histogramQueryResults?: Schema$HistogramQueryResult[];
    /**
     * The location filters that the service applied to the specified query. If any filters are lat-lng based, the Location.location_type is Location.LocationType.LOCATION_TYPE_UNSPECIFIED.
     */
    locationFilters?: Schema$Location[];
    /**
     * The Job entities that match the specified SearchJobsRequest.
     */
    matchingJobs?: Schema$MatchingJob[];
    /**
     * Additional information for the API invocation, such as the request tracking id.
     */
    metadata?: Schema$ResponseMetadata;
    /**
     * The token that specifies the starting position of the next page of results. This field is empty if there are no more results.
     */
    nextPageToken?: string | null;
    /**
     * The spell checking result, and correction.
     */
    spellCorrection?: Schema$SpellingCorrection;
    /**
     * Number of jobs that match the specified query. Note: This size is precise only if the total is less than 100,000.
     */
    totalSize?: number | null;
  }
  /**
   * Spell check result.
   */
  export interface Schema$SpellingCorrection {
    /**
     * Indicates if the query was corrected by the spell checker.
     */
    corrected?: boolean | null;
    /**
     * Corrected output with html tags to highlight the corrected words. Corrected words are called out with the "*...*" html tags. For example, the user input query is "software enginear", where the second word, "enginear," is incorrect. It should be "engineer". When spelling correction is enabled, this value is "software *engineer*".
     */
    correctedHtml?: string | null;
    /**
     * Correction output consisting of the corrected keyword string.
     */
    correctedText?: string | null;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number | null;
    /**
     * A list of messages that carry the error details. There is a common set of message types for APIs to use.
     */
    details?: Array<{[key: string]: any}> | null;
    /**
     * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
     */
    message?: string | null;
  }
  /**
   * A Tenant resource represents a tenant in the service. A tenant is a group or entity that shares common access with specific privileges for resources like jobs. Customer may create multiple tenants to provide data isolation for different groups.
   */
  export interface Schema$Tenant {
    /**
     * Required. Client side tenant identifier, used to uniquely identify the tenant. The maximum number of allowed characters is 255.
     */
    externalId?: string | null;
    /**
     * Required during tenant update. The resource name for a tenant. This is generated by the service when a tenant is created. The format is "projects/{project_id\}/tenants/{tenant_id\}", for example, "projects/foo/tenants/bar".
     */
    name?: string | null;
  }
  /**
   * Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
   */
  export interface Schema$TimeOfDay {
    /**
     * Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
     */
    hours?: number | null;
    /**
     * Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59.
     */
    minutes?: number | null;
    /**
     * Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999.
     */
    nanos?: number | null;
    /**
     * Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or equal to 59. An API may allow the value 60 if it allows leap-seconds.
     */
    seconds?: number | null;
  }
  /**
   * Message representing a period of time between two timestamps.
   */
  export interface Schema$TimestampRange {
    /**
     * End of the period (exclusive).
     */
    endTime?: string | null;
    /**
     * Begin of the period (inclusive).
     */
    startTime?: string | null;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    operations: Resource$Projects$Operations;
    tenants: Resource$Projects$Tenants;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations = new Resource$Projects$Operations(this.context);
      this.tenants = new Resource$Projects$Tenants(this.context);
    }
  }

  export class Resource$Projects$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/jobs.googleapis.com
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
     * const jobs = google.jobs('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/jobs',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await jobs.projects.operations.get({
     *     // The name of the operation resource.
     *     name: 'projects/my-project/operations/my-operation',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
      params: Params$Resource$Projects$Operations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Operations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    get(
      params: Params$Resource$Projects$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Projects$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Operations$Get
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://jobs.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }

  export class Resource$Projects$Tenants {
    context: APIRequestContext;
    clientEvents: Resource$Projects$Tenants$Clientevents;
    companies: Resource$Projects$Tenants$Companies;
    jobs: Resource$Projects$Tenants$Jobs;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.clientEvents = new Resource$Projects$Tenants$Clientevents(
        this.context
      );
      this.companies = new Resource$Projects$Tenants$Companies(this.context);
      this.jobs = new Resource$Projects$Tenants$Jobs(this.context);
    }

    /**
     * Completes the specified prefix with keyword suggestions. Intended for use by a job search auto-complete search box.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/jobs.googleapis.com
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
     * const jobs = google.jobs('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/jobs',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await jobs.projects.tenants.completeQuery({
     *     // If provided, restricts completion to specified company. The format is "projects/{project_id\}/tenants/{tenant_id\}/companies/{company_id\}", for example, "projects/foo/tenants/bar/companies/baz".
     *     company: 'placeholder-value',
     *     // The list of languages of the query. This is the BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47). The maximum number of allowed characters is 255.
     *     languageCodes: 'placeholder-value',
     *     // Required. Completion result count. The maximum allowed page size is 10.
     *     pageSize: 'placeholder-value',
     *     // Required. The query used to generate suggestions. The maximum number of allowed characters is 255.
     *     query: 'placeholder-value',
     *     // The scope of the completion. The defaults is CompletionScope.PUBLIC.
     *     scope: 'placeholder-value',
     *     // Required. Resource name of tenant the completion is performed within. The format is "projects/{project_id\}/tenants/{tenant_id\}", for example, "projects/foo/tenants/bar".
     *     tenant: 'projects/my-project/tenants/my-tenant',
     *     // The completion topic. The default is CompletionType.COMBINED.
     *     type: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "completionResults": [],
     *   //   "metadata": {}
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
    completeQuery(
      params: Params$Resource$Projects$Tenants$Completequery,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    completeQuery(
      params?: Params$Resource$Projects$Tenants$Completequery,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CompleteQueryResponse>>;
    completeQuery(
      params: Params$Resource$Projects$Tenants$Completequery,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    completeQuery(
      params: Params$Resource$Projects$Tenants$Completequery,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CompleteQueryResponse>,
      callback: BodyResponseCallback<Schema$CompleteQueryResponse>
    ): void;
    completeQuery(
      params: Params$Resource$Projects$Tenants$Completequery,
      callback: BodyResponseCallback<Schema$CompleteQueryResponse>
    ): void;
    completeQuery(
      callback: BodyResponseCallback<Schema$CompleteQueryResponse>
    ): void;
    completeQuery(
      paramsOrCallback?:
        | Params$Resource$Projects$Tenants$Completequery
        | BodyResponseCallback<Schema$CompleteQueryResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CompleteQueryResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CompleteQueryResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CompleteQueryResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Tenants$Completequery;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Tenants$Completequery;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://jobs.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+tenant}:completeQuery').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['tenant'],
        pathParams: ['tenant'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CompleteQueryResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CompleteQueryResponse>(parameters);
      }
    }

    /**
     * Creates a new tenant entity.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/jobs.googleapis.com
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
     * const jobs = google.jobs('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/jobs',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await jobs.projects.tenants.create({
     *     // Required. Resource name of the project under which the tenant is created. The format is "projects/{project_id\}", for example, "projects/foo".
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "externalId": "my_externalId",
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "externalId": "my_externalId",
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
      params: Params$Resource$Projects$Tenants$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Tenants$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Tenant>>;
    create(
      params: Params$Resource$Projects$Tenants$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Tenants$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Tenant>,
      callback: BodyResponseCallback<Schema$Tenant>
    ): void;
    create(
      params: Params$Resource$Projects$Tenants$Create,
      callback: BodyResponseCallback<Schema$Tenant>
    ): void;
    create(callback: BodyResponseCallback<Schema$Tenant>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Tenants$Create
        | BodyResponseCallback<Schema$Tenant>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Tenant>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Tenant>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Tenant>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Tenants$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Tenants$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://jobs.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+parent}/tenants').replace(
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
        createAPIRequest<Schema$Tenant>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Tenant>(parameters);
      }
    }

    /**
     * Deletes specified tenant.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/jobs.googleapis.com
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
     * const jobs = google.jobs('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/jobs',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await jobs.projects.tenants.delete({
     *     // Required. The resource name of the tenant to be deleted. The format is "projects/{project_id\}/tenants/{tenant_id\}", for example, "projects/foo/tenants/bar".
     *     name: 'projects/my-project/tenants/my-tenant',
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
      params: Params$Resource$Projects$Tenants$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Tenants$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Tenants$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Tenants$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Tenants$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Tenants$Delete
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
        {}) as Params$Resource$Projects$Tenants$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Tenants$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://jobs.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Retrieves specified tenant.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/jobs.googleapis.com
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
     * const jobs = google.jobs('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/jobs',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await jobs.projects.tenants.get({
     *     // Required. The resource name of the tenant to be retrieved. The format is "projects/{project_id\}/tenants/{tenant_id\}", for example, "projects/foo/tenants/bar".
     *     name: 'projects/my-project/tenants/my-tenant',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "externalId": "my_externalId",
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
      params: Params$Resource$Projects$Tenants$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Tenants$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Tenant>>;
    get(
      params: Params$Resource$Projects$Tenants$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Tenants$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Tenant>,
      callback: BodyResponseCallback<Schema$Tenant>
    ): void;
    get(
      params: Params$Resource$Projects$Tenants$Get,
      callback: BodyResponseCallback<Schema$Tenant>
    ): void;
    get(callback: BodyResponseCallback<Schema$Tenant>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Tenants$Get
        | BodyResponseCallback<Schema$Tenant>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Tenant>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Tenant>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Tenant>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Tenants$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Tenants$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://jobs.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Tenant>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Tenant>(parameters);
      }
    }

    /**
     * Lists all tenants associated with the project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/jobs.googleapis.com
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
     * const jobs = google.jobs('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/jobs',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await jobs.projects.tenants.list({
     *     // The maximum number of tenants to be returned, at most 100. Default is 100 if a non-positive number is provided.
     *     pageSize: 'placeholder-value',
     *     // The starting indicator from which to return results.
     *     pageToken: 'placeholder-value',
     *     // Required. Resource name of the project under which the tenant is created. The format is "projects/{project_id\}", for example, "projects/foo".
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "metadata": {},
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "tenants": []
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
      params: Params$Resource$Projects$Tenants$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Tenants$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListTenantsResponse>>;
    list(
      params: Params$Resource$Projects$Tenants$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Tenants$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListTenantsResponse>,
      callback: BodyResponseCallback<Schema$ListTenantsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Tenants$List,
      callback: BodyResponseCallback<Schema$ListTenantsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListTenantsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Tenants$List
        | BodyResponseCallback<Schema$ListTenantsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListTenantsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListTenantsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListTenantsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Tenants$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Tenants$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://jobs.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+parent}/tenants').replace(
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
        createAPIRequest<Schema$ListTenantsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListTenantsResponse>(parameters);
      }
    }

    /**
     * Updates specified tenant.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/jobs.googleapis.com
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
     * const jobs = google.jobs('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/jobs',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await jobs.projects.tenants.patch({
     *     // Required during tenant update. The resource name for a tenant. This is generated by the service when a tenant is created. The format is "projects/{project_id\}/tenants/{tenant_id\}", for example, "projects/foo/tenants/bar".
     *     name: 'projects/my-project/tenants/my-tenant',
     *     // Strongly recommended for the best service experience. If update_mask is provided, only the specified fields in tenant are updated. Otherwise all the fields are updated. A field mask to specify the tenant fields to be updated. Only top level fields of Tenant are supported.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "externalId": "my_externalId",
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "externalId": "my_externalId",
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
      params: Params$Resource$Projects$Tenants$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Tenants$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Tenant>>;
    patch(
      params: Params$Resource$Projects$Tenants$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Tenants$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Tenant>,
      callback: BodyResponseCallback<Schema$Tenant>
    ): void;
    patch(
      params: Params$Resource$Projects$Tenants$Patch,
      callback: BodyResponseCallback<Schema$Tenant>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Tenant>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Tenants$Patch
        | BodyResponseCallback<Schema$Tenant>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Tenant>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Tenant>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Tenant>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Tenants$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Tenants$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://jobs.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Tenant>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Tenant>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Tenants$Completequery
    extends StandardParameters {
    /**
     * If provided, restricts completion to specified company. The format is "projects/{project_id\}/tenants/{tenant_id\}/companies/{company_id\}", for example, "projects/foo/tenants/bar/companies/baz".
     */
    company?: string;
    /**
     * The list of languages of the query. This is the BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47). The maximum number of allowed characters is 255.
     */
    languageCodes?: string[];
    /**
     * Required. Completion result count. The maximum allowed page size is 10.
     */
    pageSize?: number;
    /**
     * Required. The query used to generate suggestions. The maximum number of allowed characters is 255.
     */
    query?: string;
    /**
     * The scope of the completion. The defaults is CompletionScope.PUBLIC.
     */
    scope?: string;
    /**
     * Required. Resource name of tenant the completion is performed within. The format is "projects/{project_id\}/tenants/{tenant_id\}", for example, "projects/foo/tenants/bar".
     */
    tenant?: string;
    /**
     * The completion topic. The default is CompletionType.COMBINED.
     */
    type?: string;
  }
  export interface Params$Resource$Projects$Tenants$Create
    extends StandardParameters {
    /**
     * Required. Resource name of the project under which the tenant is created. The format is "projects/{project_id\}", for example, "projects/foo".
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Tenant;
  }
  export interface Params$Resource$Projects$Tenants$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the tenant to be deleted. The format is "projects/{project_id\}/tenants/{tenant_id\}", for example, "projects/foo/tenants/bar".
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Tenants$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the tenant to be retrieved. The format is "projects/{project_id\}/tenants/{tenant_id\}", for example, "projects/foo/tenants/bar".
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Tenants$List
    extends StandardParameters {
    /**
     * The maximum number of tenants to be returned, at most 100. Default is 100 if a non-positive number is provided.
     */
    pageSize?: number;
    /**
     * The starting indicator from which to return results.
     */
    pageToken?: string;
    /**
     * Required. Resource name of the project under which the tenant is created. The format is "projects/{project_id\}", for example, "projects/foo".
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Tenants$Patch
    extends StandardParameters {
    /**
     * Required during tenant update. The resource name for a tenant. This is generated by the service when a tenant is created. The format is "projects/{project_id\}/tenants/{tenant_id\}", for example, "projects/foo/tenants/bar".
     */
    name?: string;
    /**
     * Strongly recommended for the best service experience. If update_mask is provided, only the specified fields in tenant are updated. Otherwise all the fields are updated. A field mask to specify the tenant fields to be updated. Only top level fields of Tenant are supported.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Tenant;
  }

  export class Resource$Projects$Tenants$Clientevents {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Report events issued when end user interacts with customer's application that uses Cloud Talent Solution. You may inspect the created events in [self service tools](https://console.cloud.google.com/talent-solution/overview). [Learn more](https://cloud.google.com/talent-solution/docs/management-tools) about self service tools.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/jobs.googleapis.com
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
     * const jobs = google.jobs('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/jobs',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await jobs.projects.tenants.clientEvents.create({
     *     // Required. Resource name of the tenant under which the event is created. The format is "projects/{project_id\}/tenants/{tenant_id\}", for example, "projects/foo/tenants/bar".
     *     parent: 'projects/my-project/tenants/my-tenant',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "eventId": "my_eventId",
     *       //   "eventNotes": "my_eventNotes",
     *       //   "jobEvent": {},
     *       //   "requestId": "my_requestId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "eventId": "my_eventId",
     *   //   "eventNotes": "my_eventNotes",
     *   //   "jobEvent": {},
     *   //   "requestId": "my_requestId"
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
      params: Params$Resource$Projects$Tenants$Clientevents$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Tenants$Clientevents$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ClientEvent>>;
    create(
      params: Params$Resource$Projects$Tenants$Clientevents$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Tenants$Clientevents$Create,
      options: MethodOptions | BodyResponseCallback<Schema$ClientEvent>,
      callback: BodyResponseCallback<Schema$ClientEvent>
    ): void;
    create(
      params: Params$Resource$Projects$Tenants$Clientevents$Create,
      callback: BodyResponseCallback<Schema$ClientEvent>
    ): void;
    create(callback: BodyResponseCallback<Schema$ClientEvent>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Tenants$Clientevents$Create
        | BodyResponseCallback<Schema$ClientEvent>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ClientEvent>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ClientEvent>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ClientEvent>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Tenants$Clientevents$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Tenants$Clientevents$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://jobs.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+parent}/clientEvents').replace(
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
        createAPIRequest<Schema$ClientEvent>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ClientEvent>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Tenants$Clientevents$Create
    extends StandardParameters {
    /**
     * Required. Resource name of the tenant under which the event is created. The format is "projects/{project_id\}/tenants/{tenant_id\}", for example, "projects/foo/tenants/bar".
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ClientEvent;
  }

  export class Resource$Projects$Tenants$Companies {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new company entity.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/jobs.googleapis.com
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
     * const jobs = google.jobs('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/jobs',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await jobs.projects.tenants.companies.create({
     *     // Required. Resource name of the tenant under which the company is created. The format is "projects/{project_id\}/tenants/{tenant_id\}", for example, "projects/foo/tenants/bar".
     *     parent: 'projects/my-project/tenants/my-tenant',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "careerSiteUri": "my_careerSiteUri",
     *       //   "derivedInfo": {},
     *       //   "displayName": "my_displayName",
     *       //   "eeoText": "my_eeoText",
     *       //   "externalId": "my_externalId",
     *       //   "headquartersAddress": "my_headquartersAddress",
     *       //   "hiringAgency": false,
     *       //   "imageUri": "my_imageUri",
     *       //   "keywordSearchableJobCustomAttributes": [],
     *       //   "name": "my_name",
     *       //   "size": "my_size",
     *       //   "suspended": false,
     *       //   "websiteUri": "my_websiteUri"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "careerSiteUri": "my_careerSiteUri",
     *   //   "derivedInfo": {},
     *   //   "displayName": "my_displayName",
     *   //   "eeoText": "my_eeoText",
     *   //   "externalId": "my_externalId",
     *   //   "headquartersAddress": "my_headquartersAddress",
     *   //   "hiringAgency": false,
     *   //   "imageUri": "my_imageUri",
     *   //   "keywordSearchableJobCustomAttributes": [],
     *   //   "name": "my_name",
     *   //   "size": "my_size",
     *   //   "suspended": false,
     *   //   "websiteUri": "my_websiteUri"
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
      params: Params$Resource$Projects$Tenants$Companies$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Tenants$Companies$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Company>>;
    create(
      params: Params$Resource$Projects$Tenants$Companies$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Tenants$Companies$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Company>,
      callback: BodyResponseCallback<Schema$Company>
    ): void;
    create(
      params: Params$Resource$Projects$Tenants$Companies$Create,
      callback: BodyResponseCallback<Schema$Company>
    ): void;
    create(callback: BodyResponseCallback<Schema$Company>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Tenants$Companies$Create
        | BodyResponseCallback<Schema$Company>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Company>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Company>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Company>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Tenants$Companies$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Tenants$Companies$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://jobs.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+parent}/companies').replace(
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
        createAPIRequest<Schema$Company>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Company>(parameters);
      }
    }

    /**
     * Deletes specified company. Prerequisite: The company has no jobs associated with it.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/jobs.googleapis.com
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
     * const jobs = google.jobs('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/jobs',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await jobs.projects.tenants.companies.delete({
     *     // Required. The resource name of the company to be deleted. The format is "projects/{project_id\}/tenants/{tenant_id\}/companies/{company_id\}", for example, "projects/foo/tenants/bar/companies/baz".
     *     name: 'projects/my-project/tenants/my-tenant/companies/my-companie',
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
      params: Params$Resource$Projects$Tenants$Companies$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Tenants$Companies$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Tenants$Companies$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Tenants$Companies$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Tenants$Companies$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Tenants$Companies$Delete
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
        {}) as Params$Resource$Projects$Tenants$Companies$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Tenants$Companies$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://jobs.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Retrieves specified company.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/jobs.googleapis.com
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
     * const jobs = google.jobs('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/jobs',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await jobs.projects.tenants.companies.get({
     *     // Required. The resource name of the company to be retrieved. The format is "projects/{project_id\}/tenants/{tenant_id\}/companies/{company_id\}", for example, "projects/api-test-project/tenants/foo/companies/bar".
     *     name: 'projects/my-project/tenants/my-tenant/companies/my-companie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "careerSiteUri": "my_careerSiteUri",
     *   //   "derivedInfo": {},
     *   //   "displayName": "my_displayName",
     *   //   "eeoText": "my_eeoText",
     *   //   "externalId": "my_externalId",
     *   //   "headquartersAddress": "my_headquartersAddress",
     *   //   "hiringAgency": false,
     *   //   "imageUri": "my_imageUri",
     *   //   "keywordSearchableJobCustomAttributes": [],
     *   //   "name": "my_name",
     *   //   "size": "my_size",
     *   //   "suspended": false,
     *   //   "websiteUri": "my_websiteUri"
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
      params: Params$Resource$Projects$Tenants$Companies$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Tenants$Companies$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Company>>;
    get(
      params: Params$Resource$Projects$Tenants$Companies$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Tenants$Companies$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Company>,
      callback: BodyResponseCallback<Schema$Company>
    ): void;
    get(
      params: Params$Resource$Projects$Tenants$Companies$Get,
      callback: BodyResponseCallback<Schema$Company>
    ): void;
    get(callback: BodyResponseCallback<Schema$Company>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Tenants$Companies$Get
        | BodyResponseCallback<Schema$Company>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Company>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Company>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Company>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Tenants$Companies$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Tenants$Companies$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://jobs.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Company>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Company>(parameters);
      }
    }

    /**
     * Lists all companies associated with the project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/jobs.googleapis.com
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
     * const jobs = google.jobs('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/jobs',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await jobs.projects.tenants.companies.list({
     *     // The maximum number of companies to be returned, at most 100. Default is 100 if a non-positive number is provided.
     *     pageSize: 'placeholder-value',
     *     // The starting indicator from which to return results.
     *     pageToken: 'placeholder-value',
     *     // Required. Resource name of the tenant under which the company is created. The format is "projects/{project_id\}/tenants/{tenant_id\}", for example, "projects/foo/tenants/bar".
     *     parent: 'projects/my-project/tenants/my-tenant',
     *     // Set to true if the companies requested must have open jobs. Defaults to false. If true, at most page_size of companies are fetched, among which only those with open jobs are returned.
     *     requireOpenJobs: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "companies": [],
     *   //   "metadata": {},
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
      params: Params$Resource$Projects$Tenants$Companies$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Tenants$Companies$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListCompaniesResponse>>;
    list(
      params: Params$Resource$Projects$Tenants$Companies$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Tenants$Companies$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListCompaniesResponse>,
      callback: BodyResponseCallback<Schema$ListCompaniesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Tenants$Companies$List,
      callback: BodyResponseCallback<Schema$ListCompaniesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListCompaniesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Tenants$Companies$List
        | BodyResponseCallback<Schema$ListCompaniesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListCompaniesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListCompaniesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListCompaniesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Tenants$Companies$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Tenants$Companies$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://jobs.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+parent}/companies').replace(
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
        createAPIRequest<Schema$ListCompaniesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListCompaniesResponse>(parameters);
      }
    }

    /**
     * Updates specified company.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/jobs.googleapis.com
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
     * const jobs = google.jobs('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/jobs',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await jobs.projects.tenants.companies.patch({
     *     // Required during company update. The resource name for a company. This is generated by the service when a company is created. The format is "projects/{project_id\}/tenants/{tenant_id\}/companies/{company_id\}", for example, "projects/foo/tenants/bar/companies/baz".
     *     name: 'projects/my-project/tenants/my-tenant/companies/my-companie',
     *     // Strongly recommended for the best service experience. If update_mask is provided, only the specified fields in company are updated. Otherwise all the fields are updated. A field mask to specify the company fields to be updated. Only top level fields of Company are supported.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "careerSiteUri": "my_careerSiteUri",
     *       //   "derivedInfo": {},
     *       //   "displayName": "my_displayName",
     *       //   "eeoText": "my_eeoText",
     *       //   "externalId": "my_externalId",
     *       //   "headquartersAddress": "my_headquartersAddress",
     *       //   "hiringAgency": false,
     *       //   "imageUri": "my_imageUri",
     *       //   "keywordSearchableJobCustomAttributes": [],
     *       //   "name": "my_name",
     *       //   "size": "my_size",
     *       //   "suspended": false,
     *       //   "websiteUri": "my_websiteUri"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "careerSiteUri": "my_careerSiteUri",
     *   //   "derivedInfo": {},
     *   //   "displayName": "my_displayName",
     *   //   "eeoText": "my_eeoText",
     *   //   "externalId": "my_externalId",
     *   //   "headquartersAddress": "my_headquartersAddress",
     *   //   "hiringAgency": false,
     *   //   "imageUri": "my_imageUri",
     *   //   "keywordSearchableJobCustomAttributes": [],
     *   //   "name": "my_name",
     *   //   "size": "my_size",
     *   //   "suspended": false,
     *   //   "websiteUri": "my_websiteUri"
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
      params: Params$Resource$Projects$Tenants$Companies$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Tenants$Companies$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Company>>;
    patch(
      params: Params$Resource$Projects$Tenants$Companies$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Tenants$Companies$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Company>,
      callback: BodyResponseCallback<Schema$Company>
    ): void;
    patch(
      params: Params$Resource$Projects$Tenants$Companies$Patch,
      callback: BodyResponseCallback<Schema$Company>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Company>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Tenants$Companies$Patch
        | BodyResponseCallback<Schema$Company>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Company>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Company>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Company>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Tenants$Companies$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Tenants$Companies$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://jobs.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Company>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Company>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Tenants$Companies$Create
    extends StandardParameters {
    /**
     * Required. Resource name of the tenant under which the company is created. The format is "projects/{project_id\}/tenants/{tenant_id\}", for example, "projects/foo/tenants/bar".
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Company;
  }
  export interface Params$Resource$Projects$Tenants$Companies$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the company to be deleted. The format is "projects/{project_id\}/tenants/{tenant_id\}/companies/{company_id\}", for example, "projects/foo/tenants/bar/companies/baz".
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Tenants$Companies$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the company to be retrieved. The format is "projects/{project_id\}/tenants/{tenant_id\}/companies/{company_id\}", for example, "projects/api-test-project/tenants/foo/companies/bar".
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Tenants$Companies$List
    extends StandardParameters {
    /**
     * The maximum number of companies to be returned, at most 100. Default is 100 if a non-positive number is provided.
     */
    pageSize?: number;
    /**
     * The starting indicator from which to return results.
     */
    pageToken?: string;
    /**
     * Required. Resource name of the tenant under which the company is created. The format is "projects/{project_id\}/tenants/{tenant_id\}", for example, "projects/foo/tenants/bar".
     */
    parent?: string;
    /**
     * Set to true if the companies requested must have open jobs. Defaults to false. If true, at most page_size of companies are fetched, among which only those with open jobs are returned.
     */
    requireOpenJobs?: boolean;
  }
  export interface Params$Resource$Projects$Tenants$Companies$Patch
    extends StandardParameters {
    /**
     * Required during company update. The resource name for a company. This is generated by the service when a company is created. The format is "projects/{project_id\}/tenants/{tenant_id\}/companies/{company_id\}", for example, "projects/foo/tenants/bar/companies/baz".
     */
    name?: string;
    /**
     * Strongly recommended for the best service experience. If update_mask is provided, only the specified fields in company are updated. Otherwise all the fields are updated. A field mask to specify the company fields to be updated. Only top level fields of Company are supported.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Company;
  }

  export class Resource$Projects$Tenants$Jobs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Begins executing a batch create jobs operation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/jobs.googleapis.com
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
     * const jobs = google.jobs('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/jobs',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await jobs.projects.tenants.jobs.batchCreate({
     *     // Required. The resource name of the tenant under which the job is created. The format is "projects/{project_id\}/tenants/{tenant_id\}". For example, "projects/foo/tenants/bar".
     *     parent: 'projects/my-project/tenants/my-tenant',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "jobs": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
      params: Params$Resource$Projects$Tenants$Jobs$Batchcreate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchCreate(
      params?: Params$Resource$Projects$Tenants$Jobs$Batchcreate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    batchCreate(
      params: Params$Resource$Projects$Tenants$Jobs$Batchcreate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchCreate(
      params: Params$Resource$Projects$Tenants$Jobs$Batchcreate,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    batchCreate(
      params: Params$Resource$Projects$Tenants$Jobs$Batchcreate,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    batchCreate(callback: BodyResponseCallback<Schema$Operation>): void;
    batchCreate(
      paramsOrCallback?:
        | Params$Resource$Projects$Tenants$Jobs$Batchcreate
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Tenants$Jobs$Batchcreate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Tenants$Jobs$Batchcreate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://jobs.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+parent}/jobs:batchCreate').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Begins executing a batch delete jobs operation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/jobs.googleapis.com
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
     * const jobs = google.jobs('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/jobs',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await jobs.projects.tenants.jobs.batchDelete({
     *     // Required. The resource name of the tenant under which the job is created. The format is "projects/{project_id\}/tenants/{tenant_id\}". For example, "projects/foo/tenants/bar". The parent of all of the jobs specified in `names` must match this field.
     *     parent: 'projects/my-project/tenants/my-tenant',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "names": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    batchDelete(
      params: Params$Resource$Projects$Tenants$Jobs$Batchdelete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchDelete(
      params?: Params$Resource$Projects$Tenants$Jobs$Batchdelete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    batchDelete(
      params: Params$Resource$Projects$Tenants$Jobs$Batchdelete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchDelete(
      params: Params$Resource$Projects$Tenants$Jobs$Batchdelete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    batchDelete(
      params: Params$Resource$Projects$Tenants$Jobs$Batchdelete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    batchDelete(callback: BodyResponseCallback<Schema$Operation>): void;
    batchDelete(
      paramsOrCallback?:
        | Params$Resource$Projects$Tenants$Jobs$Batchdelete
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Tenants$Jobs$Batchdelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Tenants$Jobs$Batchdelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://jobs.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+parent}/jobs:batchDelete').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Begins executing a batch update jobs operation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/jobs.googleapis.com
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
     * const jobs = google.jobs('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/jobs',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await jobs.projects.tenants.jobs.batchUpdate({
     *     // Required. The resource name of the tenant under which the job is created. The format is "projects/{project_id\}/tenants/{tenant_id\}". For example, "projects/foo/tenants/bar".
     *     parent: 'projects/my-project/tenants/my-tenant',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "jobs": [],
     *       //   "updateMask": "my_updateMask"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    batchUpdate(
      params: Params$Resource$Projects$Tenants$Jobs$Batchupdate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchUpdate(
      params?: Params$Resource$Projects$Tenants$Jobs$Batchupdate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    batchUpdate(
      params: Params$Resource$Projects$Tenants$Jobs$Batchupdate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchUpdate(
      params: Params$Resource$Projects$Tenants$Jobs$Batchupdate,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    batchUpdate(
      params: Params$Resource$Projects$Tenants$Jobs$Batchupdate,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    batchUpdate(callback: BodyResponseCallback<Schema$Operation>): void;
    batchUpdate(
      paramsOrCallback?:
        | Params$Resource$Projects$Tenants$Jobs$Batchupdate
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Tenants$Jobs$Batchupdate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Tenants$Jobs$Batchupdate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://jobs.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+parent}/jobs:batchUpdate').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Creates a new job. Typically, the job becomes searchable within 10 seconds, but it may take up to 5 minutes.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/jobs.googleapis.com
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
     * const jobs = google.jobs('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/jobs',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await jobs.projects.tenants.jobs.create({
     *     // Required. The resource name of the tenant under which the job is created. The format is "projects/{project_id\}/tenants/{tenant_id\}". For example, "projects/foo/tenants/bar".
     *     parent: 'projects/my-project/tenants/my-tenant',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "addresses": [],
     *       //   "applicationInfo": {},
     *       //   "company": "my_company",
     *       //   "companyDisplayName": "my_companyDisplayName",
     *       //   "compensationInfo": {},
     *       //   "customAttributes": {},
     *       //   "degreeTypes": [],
     *       //   "department": "my_department",
     *       //   "derivedInfo": {},
     *       //   "description": "my_description",
     *       //   "employmentTypes": [],
     *       //   "incentives": "my_incentives",
     *       //   "jobBenefits": [],
     *       //   "jobEndTime": "my_jobEndTime",
     *       //   "jobLevel": "my_jobLevel",
     *       //   "jobStartTime": "my_jobStartTime",
     *       //   "languageCode": "my_languageCode",
     *       //   "name": "my_name",
     *       //   "postingCreateTime": "my_postingCreateTime",
     *       //   "postingExpireTime": "my_postingExpireTime",
     *       //   "postingPublishTime": "my_postingPublishTime",
     *       //   "postingRegion": "my_postingRegion",
     *       //   "postingUpdateTime": "my_postingUpdateTime",
     *       //   "processingOptions": {},
     *       //   "promotionValue": 0,
     *       //   "qualifications": "my_qualifications",
     *       //   "requisitionId": "my_requisitionId",
     *       //   "responsibilities": "my_responsibilities",
     *       //   "title": "my_title",
     *       //   "visibility": "my_visibility"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "addresses": [],
     *   //   "applicationInfo": {},
     *   //   "company": "my_company",
     *   //   "companyDisplayName": "my_companyDisplayName",
     *   //   "compensationInfo": {},
     *   //   "customAttributes": {},
     *   //   "degreeTypes": [],
     *   //   "department": "my_department",
     *   //   "derivedInfo": {},
     *   //   "description": "my_description",
     *   //   "employmentTypes": [],
     *   //   "incentives": "my_incentives",
     *   //   "jobBenefits": [],
     *   //   "jobEndTime": "my_jobEndTime",
     *   //   "jobLevel": "my_jobLevel",
     *   //   "jobStartTime": "my_jobStartTime",
     *   //   "languageCode": "my_languageCode",
     *   //   "name": "my_name",
     *   //   "postingCreateTime": "my_postingCreateTime",
     *   //   "postingExpireTime": "my_postingExpireTime",
     *   //   "postingPublishTime": "my_postingPublishTime",
     *   //   "postingRegion": "my_postingRegion",
     *   //   "postingUpdateTime": "my_postingUpdateTime",
     *   //   "processingOptions": {},
     *   //   "promotionValue": 0,
     *   //   "qualifications": "my_qualifications",
     *   //   "requisitionId": "my_requisitionId",
     *   //   "responsibilities": "my_responsibilities",
     *   //   "title": "my_title",
     *   //   "visibility": "my_visibility"
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
      params: Params$Resource$Projects$Tenants$Jobs$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Tenants$Jobs$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Job>>;
    create(
      params: Params$Resource$Projects$Tenants$Jobs$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Tenants$Jobs$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Job>,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    create(
      params: Params$Resource$Projects$Tenants$Jobs$Create,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    create(callback: BodyResponseCallback<Schema$Job>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Tenants$Jobs$Create
        | BodyResponseCallback<Schema$Job>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Job>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Job>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Job>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Tenants$Jobs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Tenants$Jobs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://jobs.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+parent}/jobs').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Job>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Job>(parameters);
      }
    }

    /**
     * Deletes the specified job. Typically, the job becomes unsearchable within 10 seconds, but it may take up to 5 minutes.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/jobs.googleapis.com
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
     * const jobs = google.jobs('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/jobs',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await jobs.projects.tenants.jobs.delete({
     *     // Required. The resource name of the job to be deleted. The format is "projects/{project_id\}/tenants/{tenant_id\}/jobs/{job_id\}". For example, "projects/foo/tenants/bar/jobs/baz".
     *     name: 'projects/my-project/tenants/my-tenant/jobs/my-job',
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
      params: Params$Resource$Projects$Tenants$Jobs$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Tenants$Jobs$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Tenants$Jobs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Tenants$Jobs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Tenants$Jobs$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Tenants$Jobs$Delete
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
        {}) as Params$Resource$Projects$Tenants$Jobs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Tenants$Jobs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://jobs.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Retrieves the specified job, whose status is OPEN or recently EXPIRED within the last 90 days.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/jobs.googleapis.com
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
     * const jobs = google.jobs('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/jobs',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await jobs.projects.tenants.jobs.get({
     *     // Required. The resource name of the job to retrieve. The format is "projects/{project_id\}/tenants/{tenant_id\}/jobs/{job_id\}". For example, "projects/foo/tenants/bar/jobs/baz".
     *     name: 'projects/my-project/tenants/my-tenant/jobs/my-job',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "addresses": [],
     *   //   "applicationInfo": {},
     *   //   "company": "my_company",
     *   //   "companyDisplayName": "my_companyDisplayName",
     *   //   "compensationInfo": {},
     *   //   "customAttributes": {},
     *   //   "degreeTypes": [],
     *   //   "department": "my_department",
     *   //   "derivedInfo": {},
     *   //   "description": "my_description",
     *   //   "employmentTypes": [],
     *   //   "incentives": "my_incentives",
     *   //   "jobBenefits": [],
     *   //   "jobEndTime": "my_jobEndTime",
     *   //   "jobLevel": "my_jobLevel",
     *   //   "jobStartTime": "my_jobStartTime",
     *   //   "languageCode": "my_languageCode",
     *   //   "name": "my_name",
     *   //   "postingCreateTime": "my_postingCreateTime",
     *   //   "postingExpireTime": "my_postingExpireTime",
     *   //   "postingPublishTime": "my_postingPublishTime",
     *   //   "postingRegion": "my_postingRegion",
     *   //   "postingUpdateTime": "my_postingUpdateTime",
     *   //   "processingOptions": {},
     *   //   "promotionValue": 0,
     *   //   "qualifications": "my_qualifications",
     *   //   "requisitionId": "my_requisitionId",
     *   //   "responsibilities": "my_responsibilities",
     *   //   "title": "my_title",
     *   //   "visibility": "my_visibility"
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
      params: Params$Resource$Projects$Tenants$Jobs$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Tenants$Jobs$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Job>>;
    get(
      params: Params$Resource$Projects$Tenants$Jobs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Tenants$Jobs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Job>,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    get(
      params: Params$Resource$Projects$Tenants$Jobs$Get,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    get(callback: BodyResponseCallback<Schema$Job>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Tenants$Jobs$Get
        | BodyResponseCallback<Schema$Job>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Job>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Job>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Job>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Tenants$Jobs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Tenants$Jobs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://jobs.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Job>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Job>(parameters);
      }
    }

    /**
     * Lists jobs by filter.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/jobs.googleapis.com
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
     * const jobs = google.jobs('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/jobs',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await jobs.projects.tenants.jobs.list({
     *     // Required. The filter string specifies the jobs to be enumerated. Supported operator: =, AND The fields eligible for filtering are: * `companyName` * `requisitionId` * `status` Available values: OPEN, EXPIRED, ALL. Defaults to OPEN if no value is specified. At least one of `companyName` and `requisitionId` must present or an INVALID_ARGUMENT error is thrown. Sample Query: * companyName = "projects/foo/tenants/bar/companies/baz" * companyName = "projects/foo/tenants/bar/companies/baz" AND requisitionId = "req-1" * companyName = "projects/foo/tenants/bar/companies/baz" AND status = "EXPIRED" * requisitionId = "req-1" * requisitionId = "req-1" AND status = "EXPIRED"
     *     filter: 'placeholder-value',
     *     // The desired job attributes returned for jobs in the search response. Defaults to JobView.JOB_VIEW_FULL if no value is specified.
     *     jobView: 'placeholder-value',
     *     // The maximum number of jobs to be returned per page of results. If job_view is set to JobView.JOB_VIEW_ID_ONLY, the maximum allowed page size is 1000. Otherwise, the maximum allowed page size is 100. Default is 100 if empty or a number < 1 is specified.
     *     pageSize: 'placeholder-value',
     *     // The starting point of a query result.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of the tenant under which the job is created. The format is "projects/{project_id\}/tenants/{tenant_id\}". For example, "projects/foo/tenants/bar".
     *     parent: 'projects/my-project/tenants/my-tenant',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "jobs": [],
     *   //   "metadata": {},
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
      params: Params$Resource$Projects$Tenants$Jobs$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Tenants$Jobs$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListJobsResponse>>;
    list(
      params: Params$Resource$Projects$Tenants$Jobs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Tenants$Jobs$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListJobsResponse>,
      callback: BodyResponseCallback<Schema$ListJobsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Tenants$Jobs$List,
      callback: BodyResponseCallback<Schema$ListJobsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListJobsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Tenants$Jobs$List
        | BodyResponseCallback<Schema$ListJobsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListJobsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListJobsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListJobsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Tenants$Jobs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Tenants$Jobs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://jobs.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+parent}/jobs').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListJobsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListJobsResponse>(parameters);
      }
    }

    /**
     * Updates specified job. Typically, updated contents become visible in search results within 10 seconds, but it may take up to 5 minutes.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/jobs.googleapis.com
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
     * const jobs = google.jobs('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/jobs',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await jobs.projects.tenants.jobs.patch({
     *     // Required during job update. The resource name for the job. This is generated by the service when a job is created. The format is "projects/{project_id\}/tenants/{tenant_id\}/jobs/{job_id\}". For example, "projects/foo/tenants/bar/jobs/baz". Use of this field in job queries and API calls is preferred over the use of requisition_id since this value is unique.
     *     name: 'projects/my-project/tenants/my-tenant/jobs/my-job',
     *     // Strongly recommended for the best service experience. If update_mask is provided, only the specified fields in job are updated. Otherwise all the fields are updated. A field mask to restrict the fields that are updated. Only top level fields of Job are supported.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "addresses": [],
     *       //   "applicationInfo": {},
     *       //   "company": "my_company",
     *       //   "companyDisplayName": "my_companyDisplayName",
     *       //   "compensationInfo": {},
     *       //   "customAttributes": {},
     *       //   "degreeTypes": [],
     *       //   "department": "my_department",
     *       //   "derivedInfo": {},
     *       //   "description": "my_description",
     *       //   "employmentTypes": [],
     *       //   "incentives": "my_incentives",
     *       //   "jobBenefits": [],
     *       //   "jobEndTime": "my_jobEndTime",
     *       //   "jobLevel": "my_jobLevel",
     *       //   "jobStartTime": "my_jobStartTime",
     *       //   "languageCode": "my_languageCode",
     *       //   "name": "my_name",
     *       //   "postingCreateTime": "my_postingCreateTime",
     *       //   "postingExpireTime": "my_postingExpireTime",
     *       //   "postingPublishTime": "my_postingPublishTime",
     *       //   "postingRegion": "my_postingRegion",
     *       //   "postingUpdateTime": "my_postingUpdateTime",
     *       //   "processingOptions": {},
     *       //   "promotionValue": 0,
     *       //   "qualifications": "my_qualifications",
     *       //   "requisitionId": "my_requisitionId",
     *       //   "responsibilities": "my_responsibilities",
     *       //   "title": "my_title",
     *       //   "visibility": "my_visibility"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "addresses": [],
     *   //   "applicationInfo": {},
     *   //   "company": "my_company",
     *   //   "companyDisplayName": "my_companyDisplayName",
     *   //   "compensationInfo": {},
     *   //   "customAttributes": {},
     *   //   "degreeTypes": [],
     *   //   "department": "my_department",
     *   //   "derivedInfo": {},
     *   //   "description": "my_description",
     *   //   "employmentTypes": [],
     *   //   "incentives": "my_incentives",
     *   //   "jobBenefits": [],
     *   //   "jobEndTime": "my_jobEndTime",
     *   //   "jobLevel": "my_jobLevel",
     *   //   "jobStartTime": "my_jobStartTime",
     *   //   "languageCode": "my_languageCode",
     *   //   "name": "my_name",
     *   //   "postingCreateTime": "my_postingCreateTime",
     *   //   "postingExpireTime": "my_postingExpireTime",
     *   //   "postingPublishTime": "my_postingPublishTime",
     *   //   "postingRegion": "my_postingRegion",
     *   //   "postingUpdateTime": "my_postingUpdateTime",
     *   //   "processingOptions": {},
     *   //   "promotionValue": 0,
     *   //   "qualifications": "my_qualifications",
     *   //   "requisitionId": "my_requisitionId",
     *   //   "responsibilities": "my_responsibilities",
     *   //   "title": "my_title",
     *   //   "visibility": "my_visibility"
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
      params: Params$Resource$Projects$Tenants$Jobs$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Tenants$Jobs$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Job>>;
    patch(
      params: Params$Resource$Projects$Tenants$Jobs$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Tenants$Jobs$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Job>,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    patch(
      params: Params$Resource$Projects$Tenants$Jobs$Patch,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Job>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Tenants$Jobs$Patch
        | BodyResponseCallback<Schema$Job>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Job>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Job>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Job>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Tenants$Jobs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Tenants$Jobs$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://jobs.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Job>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Job>(parameters);
      }
    }

    /**
     * Searches for jobs using the provided SearchJobsRequest. This call constrains the visibility of jobs present in the database, and only returns jobs that the caller has permission to search against.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/jobs.googleapis.com
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
     * const jobs = google.jobs('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/jobs',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await jobs.projects.tenants.jobs.search({
     *     // Required. The resource name of the tenant to search within. The format is "projects/{project_id\}/tenants/{tenant_id\}". For example, "projects/foo/tenants/bar".
     *     parent: 'projects/my-project/tenants/my-tenant',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "customRankingInfo": {},
     *       //   "disableKeywordMatch": false,
     *       //   "diversificationLevel": "my_diversificationLevel",
     *       //   "enableBroadening": false,
     *       //   "histogramQueries": [],
     *       //   "jobQuery": {},
     *       //   "jobView": "my_jobView",
     *       //   "keywordMatchMode": "my_keywordMatchMode",
     *       //   "maxPageSize": 0,
     *       //   "offset": 0,
     *       //   "orderBy": "my_orderBy",
     *       //   "pageToken": "my_pageToken",
     *       //   "relevanceThreshold": "my_relevanceThreshold",
     *       //   "requestMetadata": {},
     *       //   "searchMode": "my_searchMode"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "broadenedQueryJobsCount": 0,
     *   //   "histogramQueryResults": [],
     *   //   "locationFilters": [],
     *   //   "matchingJobs": [],
     *   //   "metadata": {},
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "spellCorrection": {},
     *   //   "totalSize": 0
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
      params: Params$Resource$Projects$Tenants$Jobs$Search,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    search(
      params?: Params$Resource$Projects$Tenants$Jobs$Search,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SearchJobsResponse>>;
    search(
      params: Params$Resource$Projects$Tenants$Jobs$Search,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    search(
      params: Params$Resource$Projects$Tenants$Jobs$Search,
      options: MethodOptions | BodyResponseCallback<Schema$SearchJobsResponse>,
      callback: BodyResponseCallback<Schema$SearchJobsResponse>
    ): void;
    search(
      params: Params$Resource$Projects$Tenants$Jobs$Search,
      callback: BodyResponseCallback<Schema$SearchJobsResponse>
    ): void;
    search(callback: BodyResponseCallback<Schema$SearchJobsResponse>): void;
    search(
      paramsOrCallback?:
        | Params$Resource$Projects$Tenants$Jobs$Search
        | BodyResponseCallback<Schema$SearchJobsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SearchJobsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SearchJobsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SearchJobsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Tenants$Jobs$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Tenants$Jobs$Search;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://jobs.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+parent}/jobs:search').replace(
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
        createAPIRequest<Schema$SearchJobsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SearchJobsResponse>(parameters);
      }
    }

    /**
     * Searches for jobs using the provided SearchJobsRequest. This API call is intended for the use case of targeting passive job seekers (for example, job seekers who have signed up to receive email alerts about potential job opportunities), it has different algorithmic adjustments that are designed to specifically target passive job seekers. This call constrains the visibility of jobs present in the database, and only returns jobs the caller has permission to search against.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/jobs.googleapis.com
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
     * const jobs = google.jobs('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/jobs',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await jobs.projects.tenants.jobs.searchForAlert({
     *     // Required. The resource name of the tenant to search within. The format is "projects/{project_id\}/tenants/{tenant_id\}". For example, "projects/foo/tenants/bar".
     *     parent: 'projects/my-project/tenants/my-tenant',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "customRankingInfo": {},
     *       //   "disableKeywordMatch": false,
     *       //   "diversificationLevel": "my_diversificationLevel",
     *       //   "enableBroadening": false,
     *       //   "histogramQueries": [],
     *       //   "jobQuery": {},
     *       //   "jobView": "my_jobView",
     *       //   "keywordMatchMode": "my_keywordMatchMode",
     *       //   "maxPageSize": 0,
     *       //   "offset": 0,
     *       //   "orderBy": "my_orderBy",
     *       //   "pageToken": "my_pageToken",
     *       //   "relevanceThreshold": "my_relevanceThreshold",
     *       //   "requestMetadata": {},
     *       //   "searchMode": "my_searchMode"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "broadenedQueryJobsCount": 0,
     *   //   "histogramQueryResults": [],
     *   //   "locationFilters": [],
     *   //   "matchingJobs": [],
     *   //   "metadata": {},
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "spellCorrection": {},
     *   //   "totalSize": 0
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
    searchForAlert(
      params: Params$Resource$Projects$Tenants$Jobs$Searchforalert,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    searchForAlert(
      params?: Params$Resource$Projects$Tenants$Jobs$Searchforalert,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SearchJobsResponse>>;
    searchForAlert(
      params: Params$Resource$Projects$Tenants$Jobs$Searchforalert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    searchForAlert(
      params: Params$Resource$Projects$Tenants$Jobs$Searchforalert,
      options: MethodOptions | BodyResponseCallback<Schema$SearchJobsResponse>,
      callback: BodyResponseCallback<Schema$SearchJobsResponse>
    ): void;
    searchForAlert(
      params: Params$Resource$Projects$Tenants$Jobs$Searchforalert,
      callback: BodyResponseCallback<Schema$SearchJobsResponse>
    ): void;
    searchForAlert(
      callback: BodyResponseCallback<Schema$SearchJobsResponse>
    ): void;
    searchForAlert(
      paramsOrCallback?:
        | Params$Resource$Projects$Tenants$Jobs$Searchforalert
        | BodyResponseCallback<Schema$SearchJobsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SearchJobsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SearchJobsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SearchJobsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Tenants$Jobs$Searchforalert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Tenants$Jobs$Searchforalert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://jobs.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/{+parent}/jobs:searchForAlert').replace(
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
        createAPIRequest<Schema$SearchJobsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SearchJobsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Tenants$Jobs$Batchcreate
    extends StandardParameters {
    /**
     * Required. The resource name of the tenant under which the job is created. The format is "projects/{project_id\}/tenants/{tenant_id\}". For example, "projects/foo/tenants/bar".
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchCreateJobsRequest;
  }
  export interface Params$Resource$Projects$Tenants$Jobs$Batchdelete
    extends StandardParameters {
    /**
     * Required. The resource name of the tenant under which the job is created. The format is "projects/{project_id\}/tenants/{tenant_id\}". For example, "projects/foo/tenants/bar". The parent of all of the jobs specified in `names` must match this field.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchDeleteJobsRequest;
  }
  export interface Params$Resource$Projects$Tenants$Jobs$Batchupdate
    extends StandardParameters {
    /**
     * Required. The resource name of the tenant under which the job is created. The format is "projects/{project_id\}/tenants/{tenant_id\}". For example, "projects/foo/tenants/bar".
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchUpdateJobsRequest;
  }
  export interface Params$Resource$Projects$Tenants$Jobs$Create
    extends StandardParameters {
    /**
     * Required. The resource name of the tenant under which the job is created. The format is "projects/{project_id\}/tenants/{tenant_id\}". For example, "projects/foo/tenants/bar".
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Job;
  }
  export interface Params$Resource$Projects$Tenants$Jobs$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the job to be deleted. The format is "projects/{project_id\}/tenants/{tenant_id\}/jobs/{job_id\}". For example, "projects/foo/tenants/bar/jobs/baz".
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Tenants$Jobs$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the job to retrieve. The format is "projects/{project_id\}/tenants/{tenant_id\}/jobs/{job_id\}". For example, "projects/foo/tenants/bar/jobs/baz".
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Tenants$Jobs$List
    extends StandardParameters {
    /**
     * Required. The filter string specifies the jobs to be enumerated. Supported operator: =, AND The fields eligible for filtering are: * `companyName` * `requisitionId` * `status` Available values: OPEN, EXPIRED, ALL. Defaults to OPEN if no value is specified. At least one of `companyName` and `requisitionId` must present or an INVALID_ARGUMENT error is thrown. Sample Query: * companyName = "projects/foo/tenants/bar/companies/baz" * companyName = "projects/foo/tenants/bar/companies/baz" AND requisitionId = "req-1" * companyName = "projects/foo/tenants/bar/companies/baz" AND status = "EXPIRED" * requisitionId = "req-1" * requisitionId = "req-1" AND status = "EXPIRED"
     */
    filter?: string;
    /**
     * The desired job attributes returned for jobs in the search response. Defaults to JobView.JOB_VIEW_FULL if no value is specified.
     */
    jobView?: string;
    /**
     * The maximum number of jobs to be returned per page of results. If job_view is set to JobView.JOB_VIEW_ID_ONLY, the maximum allowed page size is 1000. Otherwise, the maximum allowed page size is 100. Default is 100 if empty or a number < 1 is specified.
     */
    pageSize?: number;
    /**
     * The starting point of a query result.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the tenant under which the job is created. The format is "projects/{project_id\}/tenants/{tenant_id\}". For example, "projects/foo/tenants/bar".
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Tenants$Jobs$Patch
    extends StandardParameters {
    /**
     * Required during job update. The resource name for the job. This is generated by the service when a job is created. The format is "projects/{project_id\}/tenants/{tenant_id\}/jobs/{job_id\}". For example, "projects/foo/tenants/bar/jobs/baz". Use of this field in job queries and API calls is preferred over the use of requisition_id since this value is unique.
     */
    name?: string;
    /**
     * Strongly recommended for the best service experience. If update_mask is provided, only the specified fields in job are updated. Otherwise all the fields are updated. A field mask to restrict the fields that are updated. Only top level fields of Job are supported.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Job;
  }
  export interface Params$Resource$Projects$Tenants$Jobs$Search
    extends StandardParameters {
    /**
     * Required. The resource name of the tenant to search within. The format is "projects/{project_id\}/tenants/{tenant_id\}". For example, "projects/foo/tenants/bar".
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SearchJobsRequest;
  }
  export interface Params$Resource$Projects$Tenants$Jobs$Searchforalert
    extends StandardParameters {
    /**
     * Required. The resource name of the tenant to search within. The format is "projects/{project_id\}/tenants/{tenant_id\}". For example, "projects/foo/tenants/bar".
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SearchJobsRequest;
  }
}
