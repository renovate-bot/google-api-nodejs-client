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

export namespace cloudscheduler_v1beta1 {
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
   * Cloud Scheduler API
   *
   * Creates and manages jobs run on a regular recurring schedule.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const cloudscheduler = google.cloudscheduler('v1beta1');
   * ```
   */
  export class Cloudscheduler {
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
   * App Engine target. The job will be pushed to a job handler by means of an HTTP request via an http_method such as HTTP POST, HTTP GET, etc. The job is acknowledged by means of an HTTP response code in the range [200 - 299]. Error 503 is considered an App Engine system error instead of an application error. Requests returning error 503 will be retried regardless of retry configuration and not counted against retry counts. Any other response code, or a failure to receive a response before the deadline, constitutes a failed attempt.
   */
  export interface Schema$AppEngineHttpTarget {
    /**
     * App Engine Routing setting for the job.
     */
    appEngineRouting?: Schema$AppEngineRouting;
    /**
     * Body. HTTP request body. A request body is allowed only if the HTTP method is POST or PUT. It will result in invalid argument error to set a body on a job with an incompatible HttpMethod.
     */
    body?: string | null;
    /**
     * HTTP request headers. This map contains the header field names and values. Headers can be set when the job is created. Cloud Scheduler sets some headers to default values: * `User-Agent`: By default, this header is `"AppEngine-Google; (+http://code.google.com/appengine)"`. This header can be modified, but Cloud Scheduler will append `"AppEngine-Google; (+http://code.google.com/appengine)"` to the modified `User-Agent`. * `X-CloudScheduler`: This header will be set to true. * `X-CloudScheduler-JobName`: This header will contain the job name. * `X-CloudScheduler-ScheduleTime`: For Cloud Scheduler jobs specified in the unix-cron format, this header will contain the job schedule as an offset of UTC parsed according to RFC3339. If the job has a body and the following headers are not set by the user, Cloud Scheduler sets default values: * `Content-Type`: This will be set to `"application/octet-stream"`. You can override this default by explicitly setting `Content-Type` to a particular media type when creating the job. For example, you can set `Content-Type` to `"application/json"`. The headers below are output only. They cannot be set or overridden: * `Content-Length`: This is computed by Cloud Scheduler. * `X-Google-*`: For Google internal use only. * `X-AppEngine-*`: For Google internal use only. In addition, some App Engine headers, which contain job-specific information, are also be sent to the job handler.
     */
    headers?: {[key: string]: string} | null;
    /**
     * The HTTP method to use for the request. PATCH and OPTIONS are not permitted.
     */
    httpMethod?: string | null;
    /**
     * The relative URI. The relative URL must begin with "/" and must be a valid HTTP relative URL. It can contain a path, query string arguments, and `#` fragments. If the relative URL is empty, then the root path "/" will be used. No spaces are allowed, and the maximum length allowed is 2083 characters.
     */
    relativeUri?: string | null;
  }
  /**
   * App Engine Routing. For more information about services, versions, and instances see [An Overview of App Engine](https://cloud.google.com/appengine/docs/python/an-overview-of-app-engine), [Microservices Architecture on Google App Engine](https://cloud.google.com/appengine/docs/python/microservices-on-app-engine), [App Engine Standard request routing](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed), and [App Engine Flex request routing](https://cloud.google.com/appengine/docs/flexible/python/how-requests-are-routed).
   */
  export interface Schema$AppEngineRouting {
    /**
     * Output only. The host that the job is sent to. For more information about how App Engine requests are routed, see [here](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed). The host is constructed as: * `host = [application_domain_name]` `| [service] + '.' + [application_domain_name]` `| [version] + '.' + [application_domain_name]` `| [version_dot_service]+ '.' + [application_domain_name]` `| [instance] + '.' + [application_domain_name]` `| [instance_dot_service] + '.' + [application_domain_name]` `| [instance_dot_version] + '.' + [application_domain_name]` `| [instance_dot_version_dot_service] + '.' + [application_domain_name]` * `application_domain_name` = The domain name of the app, for example .appspot.com, which is associated with the job's project ID. * `service =` service * `version =` version * `version_dot_service =` version `+ '.' +` service * `instance =` instance * `instance_dot_service =` instance `+ '.' +` service * `instance_dot_version =` instance `+ '.' +` version * `instance_dot_version_dot_service =` instance `+ '.' +` version `+ '.' +` service If service is empty, then the job will be sent to the service which is the default service when the job is attempted. If version is empty, then the job will be sent to the version which is the default version when the job is attempted. If instance is empty, then the job will be sent to an instance which is available when the job is attempted. If service, version, or instance is invalid, then the job will be sent to the default version of the default service when the job is attempted.
     */
    host?: string | null;
    /**
     * App instance. By default, the job is sent to an instance which is available when the job is attempted. Requests can only be sent to a specific instance if [manual scaling is used in App Engine Standard](https://cloud.google.com/appengine/docs/python/an-overview-of-app-engine?#scaling_types_and_instance_classes). App Engine Flex does not support instances. For more information, see [App Engine Standard request routing](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed) and [App Engine Flex request routing](https://cloud.google.com/appengine/docs/flexible/python/how-requests-are-routed).
     */
    instance?: string | null;
    /**
     * App service. By default, the job is sent to the service which is the default service when the job is attempted.
     */
    service?: string | null;
    /**
     * App version. By default, the job is sent to the version which is the default version when the job is attempted.
     */
    version?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Http target. The job will be pushed to the job handler by means of an HTTP request via an http_method such as HTTP POST, HTTP GET, etc. The job is acknowledged by means of an HTTP response code in the range [200 - 299]. A failure to receive a response constitutes a failed execution. For a redirected request, the response returned by the redirected request is considered.
   */
  export interface Schema$HttpTarget {
    /**
     * HTTP request body. A request body is allowed only if the HTTP method is POST, PUT, or PATCH. It is an error to set body on a job with an incompatible HttpMethod.
     */
    body?: string | null;
    /**
     * HTTP request headers. This map contains the header field names and values. The user can specify HTTP request headers to send with the job's HTTP request. Repeated headers are not supported, but a header value can contain commas. The following headers represent a subset of the headers that accompany the job's HTTP request. Some HTTP request headers are ignored or replaced. A partial list of headers that are ignored or replaced is below: * Host: This will be computed by Cloud Scheduler and derived from uri. * `Content-Length`: This will be computed by Cloud Scheduler. * `User-Agent`: This will be set to `"Google-Cloud-Scheduler"`. * `X-Google-*`: Google internal use only. * `X-AppEngine-*`: Google internal use only. * `X-CloudScheduler`: This header will be set to true. * `X-CloudScheduler-JobName`: This header will contain the job name. * `X-CloudScheduler-ScheduleTime`: For Cloud Scheduler jobs specified in the unix-cron format, this header will contain the job schedule as an offset of UTC parsed according to RFC3339. If the job has a body and the following headers are not set by the user, Cloud Scheduler sets default values: * `Content-Type`: This will be set to `"application/octet-stream"`. You can override this default by explicitly setting `Content-Type` to a particular media type when creating the job. For example, you can set `Content-Type` to `"application/json"`. The total size of headers must be less than 80KB.
     */
    headers?: {[key: string]: string} | null;
    /**
     * Which HTTP method to use for the request.
     */
    httpMethod?: string | null;
    /**
     * If specified, an [OAuth token](https://developers.google.com/identity/protocols/OAuth2) will be generated and attached as an `Authorization` header in the HTTP request. This type of authorization should generally only be used when calling Google APIs hosted on *.googleapis.com.
     */
    oauthToken?: Schema$OAuthToken;
    /**
     * If specified, an [OIDC](https://developers.google.com/identity/protocols/OpenIDConnect) token will be generated and attached as an `Authorization` header in the HTTP request. This type of authorization can be used for many scenarios, including calling Cloud Run, or endpoints where you intend to validate the token yourself.
     */
    oidcToken?: Schema$OidcToken;
    /**
     * Required. The full URI path that the request will be sent to. This string must begin with either "http://" or "https://". Some examples of valid values for uri are: `http://acme.com` and `https://acme.com/sales:8080`. Cloud Scheduler will encode some characters for safety and compatibility. The maximum allowed URL length is 2083 characters after encoding.
     */
    uri?: string | null;
  }
  /**
   * Configuration for a job. The maximum allowed size for a job is 1MB.
   */
  export interface Schema$Job {
    /**
     * App Engine HTTP target.
     */
    appEngineHttpTarget?: Schema$AppEngineHttpTarget;
    /**
     * The deadline for job attempts. If the request handler does not respond by this deadline then the request is cancelled and the attempt is marked as a `DEADLINE_EXCEEDED` failure. The failed attempt can be viewed in execution logs. Cloud Scheduler will retry the job according to the RetryConfig. The default and the allowed values depend on the type of target: * For HTTP targets, the default is 3 minutes. The deadline must be in the interval [15 seconds, 30 minutes]. * For App Engine HTTP targets, 0 indicates that the request has the default deadline. The default deadline depends on the scaling type of the service: 10 minutes for standard apps with automatic scaling, 24 hours for standard apps with manual and basic scaling, and 60 minutes for flex apps. If the request deadline is set, it must be in the interval [15 seconds, 24 hours 15 seconds]. * For Pub/Sub targets, this field is ignored.
     */
    attemptDeadline?: string | null;
    /**
     * Optionally caller-specified in CreateJob or UpdateJob. A human-readable description for the job. This string must not contain more than 500 characters.
     */
    description?: string | null;
    /**
     * HTTP target.
     */
    httpTarget?: Schema$HttpTarget;
    /**
     * Output only. The time the last job attempt started.
     */
    lastAttemptTime?: string | null;
    /**
     * Immutable. This field is used to manage the legacy App Engine Cron jobs using the Cloud Scheduler API. If the field is set to true, the job will be considered a legacy job. Note that App Engine Cron jobs have fewer features than Cloud Scheduler jobs, e.g., are only limited to App Engine targets.
     */
    legacyAppEngineCron?: boolean | null;
    /**
     * Optionally caller-specified in CreateJob, after which it becomes output only. The job name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`. * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), or periods (.). For more information, see [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects) * `LOCATION_ID` is the canonical ID for the job's location. The list of available locations can be obtained by calling ListLocations. For more information, see https://cloud.google.com/about/locations/. * `JOB_ID` can contain only letters ([A-Za-z]), numbers ([0-9]), hyphens (-), or underscores (_). The maximum length is 500 characters.
     */
    name?: string | null;
    /**
     * Pub/Sub target.
     */
    pubsubTarget?: Schema$PubsubTarget;
    /**
     * Settings that determine the retry behavior.
     */
    retryConfig?: Schema$RetryConfig;
    /**
     * Output only. Whether or not this Job satisfies the requirements of physical zone separation
     */
    satisfiesPzs?: boolean | null;
    /**
     * Required, except when used with UpdateJob. Describes the schedule on which the job will be executed. The schedule can be either of the following types: * [Crontab](https://en.wikipedia.org/wiki/Cron#Overview) * English-like [schedule](https://cloud.google.com/scheduler/docs/configuring/cron-job-schedules) As a general rule, execution `n + 1` of a job will not begin until execution `n` has finished. Cloud Scheduler will never allow two simultaneously outstanding executions. For example, this implies that if the `n+1`th execution is scheduled to run at 16:00 but the `n`th execution takes until 16:15, the `n+1`th execution will not start until `16:15`. A scheduled start time will be delayed if the previous execution has not ended when its scheduled time occurs. If retry_count \> 0 and a job attempt fails, the job will be tried a total of retry_count times, with exponential backoff, until the next scheduled start time. If retry_count is 0, a job attempt will not be retried if it fails. Instead the Cloud Scheduler system will wait for the next scheduled execution time. Setting retry_count to 0 does not prevent failed jobs from running according to schedule after the failure.
     */
    schedule?: string | null;
    /**
     * Output only. The next time the job is scheduled. Note that this may be a retry of a previously failed attempt or the next execution time according to the schedule.
     */
    scheduleTime?: string | null;
    /**
     * Output only. State of the job.
     */
    state?: string | null;
    /**
     * Output only. The response from the target for the last attempted execution.
     */
    status?: Schema$Status;
    /**
     * Specifies the time zone to be used in interpreting schedule. The value of this field must be a time zone name from the [tz database](http://en.wikipedia.org/wiki/Tz_database). Note that some time zones include a provision for daylight savings time. The rules for daylight saving time are determined by the chosen tz. For UTC use the string "utc". If a time zone is not specified, the default will be in UTC (also known as GMT).
     */
    timeZone?: string | null;
    /**
     * Output only. The creation time of the job.
     */
    userUpdateTime?: string | null;
  }
  /**
   * Response message for listing jobs using ListJobs.
   */
  export interface Schema$ListJobsResponse {
    /**
     * The list of jobs.
     */
    jobs?: Schema$Job[];
    /**
     * A token to retrieve next page of results. Pass this value in the page_token field in the subsequent call to ListJobs to retrieve the next page of results. If this is empty it indicates that there are no more results through which to paginate. The page token is valid for only 2 hours.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response message for Locations.ListLocations.
   */
  export interface Schema$ListLocationsResponse {
    /**
     * A list of locations that matches the specified filter in the request.
     */
    locations?: Schema$Location[];
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
  }
  /**
   * A resource that represents a Google Cloud location.
   */
  export interface Schema$Location {
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
   * Contains information needed for generating an [OAuth token](https://developers.google.com/identity/protocols/OAuth2). This type of authorization should generally only be used when calling Google APIs hosted on *.googleapis.com.
   */
  export interface Schema$OAuthToken {
    /**
     * OAuth scope to be used for generating OAuth access token. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used.
     */
    scope?: string | null;
    /**
     * [Service account email](https://cloud.google.com/iam/docs/service-accounts) to be used for generating OAuth token. The service account must be within the same project as the job. The caller must have iam.serviceAccounts.actAs permission for the service account.
     */
    serviceAccountEmail?: string | null;
  }
  /**
   * Contains information needed for generating an [OpenID Connect token](https://developers.google.com/identity/protocols/OpenIDConnect). This type of authorization can be used for many scenarios, including calling Cloud Run, or endpoints where you intend to validate the token yourself.
   */
  export interface Schema$OidcToken {
    /**
     * Audience to be used when generating OIDC token. If not specified, the URI specified in target will be used.
     */
    audience?: string | null;
    /**
     * [Service account email](https://cloud.google.com/iam/docs/service-accounts) to be used for generating OIDC token. The service account must be within the same project as the job. The caller must have iam.serviceAccounts.actAs permission for the service account.
     */
    serviceAccountEmail?: string | null;
  }
  /**
   * Represents the metadata of the long-running operation.
   */
  export interface Schema$OperationMetadata {
    /**
     * Output only. API version used to start the operation.
     */
    apiVersion?: string | null;
    /**
     * Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have google.longrunning.Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     */
    cancelRequested?: boolean | null;
    /**
     * Output only. The time the operation was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * Output only. Human-readable status of the operation, if any.
     */
    statusDetail?: string | null;
    /**
     * Output only. Server-defined resource path for the target of the operation.
     */
    target?: string | null;
    /**
     * Output only. Name of the verb executed by the operation.
     */
    verb?: string | null;
  }
  /**
   * Request message for PauseJob.
   */
  export interface Schema$PauseJobRequest {}
  /**
   * A message that is published by publishers and consumed by subscribers. The message must contain either a non-empty data field or at least one attribute. Note that client libraries represent this object differently depending on the language. See the corresponding [client library documentation](https://cloud.google.com/pubsub/docs/reference/libraries) for more information. See [quotas and limits] (https://cloud.google.com/pubsub/quotas) for more information about message limits.
   */
  export interface Schema$PubsubMessage {
    /**
     * Optional. Attributes for this message. If this field is empty, the message must contain non-empty data. This can be used to filter messages on the subscription.
     */
    attributes?: {[key: string]: string} | null;
    /**
     * Optional. The message data field. If this field is empty, the message must contain at least one attribute.
     */
    data?: string | null;
    /**
     * ID of this message, assigned by the server when the message is published. Guaranteed to be unique within the topic. This value may be read by a subscriber that receives a `PubsubMessage` via a `Pull` call or a push delivery. It must not be populated by the publisher in a `Publish` call.
     */
    messageId?: string | null;
    /**
     * Optional. If non-empty, identifies related messages for which publish order should be respected. If a `Subscription` has `enable_message_ordering` set to `true`, messages published with the same non-empty `ordering_key` value will be delivered to subscribers in the order in which they are received by the Pub/Sub system. All `PubsubMessage`s published in a given `PublishRequest` must specify the same `ordering_key` value. For more information, see [ordering messages](https://cloud.google.com/pubsub/docs/ordering).
     */
    orderingKey?: string | null;
    /**
     * The time at which the message was published, populated by the server when it receives the `Publish` call. It must not be populated by the publisher in a `Publish` call.
     */
    publishTime?: string | null;
  }
  /**
   * Pub/Sub target. The job will be delivered by publishing a message to the given Pub/Sub topic.
   */
  export interface Schema$PubsubTarget {
    /**
     * Attributes for PubsubMessage. Pubsub message must contain either non-empty data, or at least one attribute.
     */
    attributes?: {[key: string]: string} | null;
    /**
     * The message payload for PubsubMessage. Pubsub message must contain either non-empty data, or at least one attribute.
     */
    data?: string | null;
    /**
     * Required. The name of the Cloud Pub/Sub topic to which messages will be published when a job is delivered. The topic name must be in the same format as required by Pub/Sub's [PublishRequest.name](https://cloud.google.com/pubsub/docs/reference/rpc/google.pubsub.v1#publishrequest), for example `projects/PROJECT_ID/topics/TOPIC_ID`. The topic must be in the same project as the Cloud Scheduler job.
     */
    topicName?: string | null;
  }
  /**
   * Request message for ResumeJob.
   */
  export interface Schema$ResumeJobRequest {}
  /**
   * Settings that determine the retry behavior. For more information, see [Retry jobs](https://cloud.google.com/scheduler/docs/configuring/retry-jobs). By default, if a job does not complete successfully (meaning that an acknowledgement is not received from the handler, then it will be retried with exponential backoff according to the settings in RetryConfig.
   */
  export interface Schema$RetryConfig {
    /**
     * The maximum amount of time to wait before retrying a job after it fails. The default value of this field is 1 hour.
     */
    maxBackoffDuration?: string | null;
    /**
     * The time between retries will double `max_doublings` times. A job's retry interval starts at min_backoff_duration, then doubles `max_doublings` times, then increases linearly, and finally retries at intervals of max_backoff_duration up to retry_count times. For examples, see [Retry jobs](https://cloud.google.com/scheduler/docs/configuring/retry-jobs#max-doublings). The default value of this field is 5.
     */
    maxDoublings?: number | null;
    /**
     * The time limit for retrying a failed job, measured from the time when an execution was first attempted. If specified with retry_count, the job will be retried until both limits are reached. The default value for max_retry_duration is zero, which means retry duration is unlimited. However, if retry_count is also 0, a job attempt won't be retried if it fails.
     */
    maxRetryDuration?: string | null;
    /**
     * The minimum amount of time to wait before retrying a job after it fails. The default value of this field is 5 seconds.
     */
    minBackoffDuration?: string | null;
    /**
     * The number of attempts that the system will make to run a job using the exponential backoff procedure described by max_doublings. The default value of retry_count is zero. If retry_count is 0 (and if max_retry_duration is also 0), a job attempt won't be retried if it fails. Instead, Cloud Scheduler system will wait for the next scheduled execution time. Setting retry_count to 0 doesn't prevent failed jobs from running according to schedule after the failure. If retry_count is set to a non-zero number, Cloud Scheduler will retry the failed job, using exponential backoff, for retry_count times until the job succeeds or the number of retries is exhausted. Note that the next scheduled execution time might be skipped if the retries continue through that time. Values greater than 5 and negative values are not allowed.
     */
    retryCount?: number | null;
  }
  /**
   * Request message for forcing a job to run now using RunJob.
   */
  export interface Schema$RunJobRequest {
    /**
     * This field is used to manage the legacy App Engine Cron jobs using the Cloud Scheduler API. If the field is set to true, the job in the __cron queue with the corresponding name will be forced to run instead.
     */
    legacyAppEngineCron?: boolean | null;
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
    jobs: Resource$Projects$Locations$Jobs;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.jobs = new Resource$Projects$Locations$Jobs(this.context);
    }

    /**
     * Gets information about a location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudscheduler.googleapis.com
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
     * const cloudscheduler = google.cloudscheduler('v1beta1');
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
     *   const res = await cloudscheduler.projects.locations.get({
     *     // Resource name for the location.
     *     name: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "labels": {},
     *   //   "locationId": "my_locationId",
     *   //   "metadata": {},
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
      params: Params$Resource$Projects$Locations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Location>>;
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Location>,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Get,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    get(callback: BodyResponseCallback<Schema$Location>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Get
        | BodyResponseCallback<Schema$Location>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Location>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Location>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Location>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudscheduler.googleapis.com/';
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
        createAPIRequest<Schema$Location>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Location>(parameters);
      }
    }

    /**
     * Lists information about the supported locations for this service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudscheduler.googleapis.com
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
     * const cloudscheduler = google.cloudscheduler('v1beta1');
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
     *   const res = await cloudscheduler.projects.locations.list({
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
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListLocationsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>,
      callback: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$List,
      callback: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$List
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListLocationsResponse>>
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

      const rootUrl =
        options.rootUrl || 'https://cloudscheduler.googleapis.com/';
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
        createAPIRequest<Schema$ListLocationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListLocationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Get
    extends StandardParameters {
    /**
     * Resource name for the location.
     */
    name?: string;
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

  export class Resource$Projects$Locations$Jobs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a job.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudscheduler.googleapis.com
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
     * const cloudscheduler = google.cloudscheduler('v1beta1');
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
     *   const res = await cloudscheduler.projects.locations.jobs.create({
     *     // Required. The location name. For example: `projects/PROJECT_ID/locations/LOCATION_ID`.
     *     parent: 'projects/my-project/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "appEngineHttpTarget": {},
     *       //   "attemptDeadline": "my_attemptDeadline",
     *       //   "description": "my_description",
     *       //   "httpTarget": {},
     *       //   "lastAttemptTime": "my_lastAttemptTime",
     *       //   "legacyAppEngineCron": false,
     *       //   "name": "my_name",
     *       //   "pubsubTarget": {},
     *       //   "retryConfig": {},
     *       //   "satisfiesPzs": false,
     *       //   "schedule": "my_schedule",
     *       //   "scheduleTime": "my_scheduleTime",
     *       //   "state": "my_state",
     *       //   "status": {},
     *       //   "timeZone": "my_timeZone",
     *       //   "userUpdateTime": "my_userUpdateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appEngineHttpTarget": {},
     *   //   "attemptDeadline": "my_attemptDeadline",
     *   //   "description": "my_description",
     *   //   "httpTarget": {},
     *   //   "lastAttemptTime": "my_lastAttemptTime",
     *   //   "legacyAppEngineCron": false,
     *   //   "name": "my_name",
     *   //   "pubsubTarget": {},
     *   //   "retryConfig": {},
     *   //   "satisfiesPzs": false,
     *   //   "schedule": "my_schedule",
     *   //   "scheduleTime": "my_scheduleTime",
     *   //   "state": "my_state",
     *   //   "status": {},
     *   //   "timeZone": "my_timeZone",
     *   //   "userUpdateTime": "my_userUpdateTime"
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
      params: Params$Resource$Projects$Locations$Jobs$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Jobs$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Job>>;
    create(
      params: Params$Resource$Projects$Locations$Jobs$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Jobs$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Job>,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Jobs$Create,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    create(callback: BodyResponseCallback<Schema$Job>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Jobs$Create
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
        {}) as Params$Resource$Projects$Locations$Jobs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Jobs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudscheduler.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/jobs').replace(
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
        createAPIRequest<Schema$Job>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Job>(parameters);
      }
    }

    /**
     * Deletes a job.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudscheduler.googleapis.com
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
     * const cloudscheduler = google.cloudscheduler('v1beta1');
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
     *   const res = await cloudscheduler.projects.locations.jobs.delete({
     *     // This field is used to manage the legacy App Engine Cron jobs using the Cloud Scheduler API. If the field is set to true, the job in the __cron queue with the corresponding name will be deleted instead.
     *     legacyAppEngineCron: 'placeholder-value',
     *     // Required. The job name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
     *     name: 'projects/my-project/locations/my-location/jobs/my-job',
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
      params: Params$Resource$Projects$Locations$Jobs$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Jobs$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Locations$Jobs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Jobs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Jobs$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Jobs$Delete
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
        {}) as Params$Resource$Projects$Locations$Jobs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Jobs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudscheduler.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Gets a job.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudscheduler.googleapis.com
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
     * const cloudscheduler = google.cloudscheduler('v1beta1');
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
     *   const res = await cloudscheduler.projects.locations.jobs.get({
     *     // Required. The job name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
     *     name: 'projects/my-project/locations/my-location/jobs/my-job',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appEngineHttpTarget": {},
     *   //   "attemptDeadline": "my_attemptDeadline",
     *   //   "description": "my_description",
     *   //   "httpTarget": {},
     *   //   "lastAttemptTime": "my_lastAttemptTime",
     *   //   "legacyAppEngineCron": false,
     *   //   "name": "my_name",
     *   //   "pubsubTarget": {},
     *   //   "retryConfig": {},
     *   //   "satisfiesPzs": false,
     *   //   "schedule": "my_schedule",
     *   //   "scheduleTime": "my_scheduleTime",
     *   //   "state": "my_state",
     *   //   "status": {},
     *   //   "timeZone": "my_timeZone",
     *   //   "userUpdateTime": "my_userUpdateTime"
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
      params: Params$Resource$Projects$Locations$Jobs$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Jobs$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Job>>;
    get(
      params: Params$Resource$Projects$Locations$Jobs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Jobs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Job>,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Jobs$Get,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    get(callback: BodyResponseCallback<Schema$Job>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Jobs$Get
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
        {}) as Params$Resource$Projects$Locations$Jobs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Jobs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudscheduler.googleapis.com/';
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
        createAPIRequest<Schema$Job>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Job>(parameters);
      }
    }

    /**
     * Lists jobs.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudscheduler.googleapis.com
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
     * const cloudscheduler = google.cloudscheduler('v1beta1');
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
     *   const res = await cloudscheduler.projects.locations.jobs.list({
     *     // `filter` can be used to specify a subset of jobs. If `filter` equals `target_config="HttpConfig"`, then the http target jobs are retrieved. If `filter` equals `target_config="PubSubConfig"`, then the Pub/Sub target jobs are retrieved. If `filter` equals `labels.foo=value1 labels.foo=value2` then only jobs which are labeled with foo=value1 AND foo=value2 will be returned.
     *     filter: 'placeholder-value',
     *     // This field is used to manage the legacy App Engine Cron jobs using the Cloud Scheduler API. If the field is set to true, the jobs in the __cron queue will be listed instead.
     *     legacyAppEngineCron: 'placeholder-value',
     *     // Requested page size. The maximum page size is 500. If unspecified, the page size will be the maximum. Fewer jobs than requested might be returned, even if more jobs exist; use next_page_token to determine if more jobs exist.
     *     pageSize: 'placeholder-value',
     *     // A token identifying a page of results the server will return. To request the first page results, page_token must be empty. To request the next page of results, page_token must be the value of next_page_token returned from the previous call to ListJobs. It is an error to switch the value of filter or order_by while iterating through pages.
     *     pageToken: 'placeholder-value',
     *     // Required. The location name. For example: `projects/PROJECT_ID/locations/LOCATION_ID`.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "jobs": [],
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
      params: Params$Resource$Projects$Locations$Jobs$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Jobs$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListJobsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Jobs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Jobs$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListJobsResponse>,
      callback: BodyResponseCallback<Schema$ListJobsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Jobs$List,
      callback: BodyResponseCallback<Schema$ListJobsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListJobsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Jobs$List
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
        {}) as Params$Resource$Projects$Locations$Jobs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Jobs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudscheduler.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/jobs').replace(
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
        createAPIRequest<Schema$ListJobsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListJobsResponse>(parameters);
      }
    }

    /**
     * Updates a job. If successful, the updated Job is returned. If the job does not exist, `NOT_FOUND` is returned. If UpdateJob does not successfully return, it is possible for the job to be in an Job.State.UPDATE_FAILED state. A job in this state may not be executed. If this happens, retry the UpdateJob request until a successful response is received.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudscheduler.googleapis.com
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
     * const cloudscheduler = google.cloudscheduler('v1beta1');
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
     *   const res = await cloudscheduler.projects.locations.jobs.patch({
     *     // Optionally caller-specified in CreateJob, after which it becomes output only. The job name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`. * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), or periods (.). For more information, see [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects) * `LOCATION_ID` is the canonical ID for the job's location. The list of available locations can be obtained by calling ListLocations. For more information, see https://cloud.google.com/about/locations/. * `JOB_ID` can contain only letters ([A-Za-z]), numbers ([0-9]), hyphens (-), or underscores (_). The maximum length is 500 characters.
     *     name: 'projects/my-project/locations/my-location/jobs/my-job',
     *     // A mask used to specify which fields of the job are being updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "appEngineHttpTarget": {},
     *       //   "attemptDeadline": "my_attemptDeadline",
     *       //   "description": "my_description",
     *       //   "httpTarget": {},
     *       //   "lastAttemptTime": "my_lastAttemptTime",
     *       //   "legacyAppEngineCron": false,
     *       //   "name": "my_name",
     *       //   "pubsubTarget": {},
     *       //   "retryConfig": {},
     *       //   "satisfiesPzs": false,
     *       //   "schedule": "my_schedule",
     *       //   "scheduleTime": "my_scheduleTime",
     *       //   "state": "my_state",
     *       //   "status": {},
     *       //   "timeZone": "my_timeZone",
     *       //   "userUpdateTime": "my_userUpdateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appEngineHttpTarget": {},
     *   //   "attemptDeadline": "my_attemptDeadline",
     *   //   "description": "my_description",
     *   //   "httpTarget": {},
     *   //   "lastAttemptTime": "my_lastAttemptTime",
     *   //   "legacyAppEngineCron": false,
     *   //   "name": "my_name",
     *   //   "pubsubTarget": {},
     *   //   "retryConfig": {},
     *   //   "satisfiesPzs": false,
     *   //   "schedule": "my_schedule",
     *   //   "scheduleTime": "my_scheduleTime",
     *   //   "state": "my_state",
     *   //   "status": {},
     *   //   "timeZone": "my_timeZone",
     *   //   "userUpdateTime": "my_userUpdateTime"
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
      params: Params$Resource$Projects$Locations$Jobs$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Jobs$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Job>>;
    patch(
      params: Params$Resource$Projects$Locations$Jobs$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Jobs$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Job>,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Jobs$Patch,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Job>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Jobs$Patch
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
        {}) as Params$Resource$Projects$Locations$Jobs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Jobs$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudscheduler.googleapis.com/';
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
        createAPIRequest<Schema$Job>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Job>(parameters);
      }
    }

    /**
     * Pauses a job. If a job is paused then the system will stop executing the job until it is re-enabled via ResumeJob. The state of the job is stored in state; if paused it will be set to Job.State.PAUSED. A job must be in Job.State.ENABLED to be paused.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudscheduler.googleapis.com
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
     * const cloudscheduler = google.cloudscheduler('v1beta1');
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
     *   const res = await cloudscheduler.projects.locations.jobs.pause({
     *     // Required. The job name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
     *     name: 'projects/my-project/locations/my-location/jobs/my-job',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appEngineHttpTarget": {},
     *   //   "attemptDeadline": "my_attemptDeadline",
     *   //   "description": "my_description",
     *   //   "httpTarget": {},
     *   //   "lastAttemptTime": "my_lastAttemptTime",
     *   //   "legacyAppEngineCron": false,
     *   //   "name": "my_name",
     *   //   "pubsubTarget": {},
     *   //   "retryConfig": {},
     *   //   "satisfiesPzs": false,
     *   //   "schedule": "my_schedule",
     *   //   "scheduleTime": "my_scheduleTime",
     *   //   "state": "my_state",
     *   //   "status": {},
     *   //   "timeZone": "my_timeZone",
     *   //   "userUpdateTime": "my_userUpdateTime"
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
    pause(
      params: Params$Resource$Projects$Locations$Jobs$Pause,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    pause(
      params?: Params$Resource$Projects$Locations$Jobs$Pause,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Job>>;
    pause(
      params: Params$Resource$Projects$Locations$Jobs$Pause,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    pause(
      params: Params$Resource$Projects$Locations$Jobs$Pause,
      options: MethodOptions | BodyResponseCallback<Schema$Job>,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    pause(
      params: Params$Resource$Projects$Locations$Jobs$Pause,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    pause(callback: BodyResponseCallback<Schema$Job>): void;
    pause(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Jobs$Pause
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
        {}) as Params$Resource$Projects$Locations$Jobs$Pause;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Jobs$Pause;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudscheduler.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:pause').replace(
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
        createAPIRequest<Schema$Job>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Job>(parameters);
      }
    }

    /**
     * Resume a job. This method reenables a job after it has been Job.State.PAUSED. The state of a job is stored in Job.state; after calling this method it will be set to Job.State.ENABLED. A job must be in Job.State.PAUSED to be resumed.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudscheduler.googleapis.com
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
     * const cloudscheduler = google.cloudscheduler('v1beta1');
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
     *   const res = await cloudscheduler.projects.locations.jobs.resume({
     *     // Required. The job name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
     *     name: 'projects/my-project/locations/my-location/jobs/my-job',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appEngineHttpTarget": {},
     *   //   "attemptDeadline": "my_attemptDeadline",
     *   //   "description": "my_description",
     *   //   "httpTarget": {},
     *   //   "lastAttemptTime": "my_lastAttemptTime",
     *   //   "legacyAppEngineCron": false,
     *   //   "name": "my_name",
     *   //   "pubsubTarget": {},
     *   //   "retryConfig": {},
     *   //   "satisfiesPzs": false,
     *   //   "schedule": "my_schedule",
     *   //   "scheduleTime": "my_scheduleTime",
     *   //   "state": "my_state",
     *   //   "status": {},
     *   //   "timeZone": "my_timeZone",
     *   //   "userUpdateTime": "my_userUpdateTime"
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
    resume(
      params: Params$Resource$Projects$Locations$Jobs$Resume,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    resume(
      params?: Params$Resource$Projects$Locations$Jobs$Resume,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Job>>;
    resume(
      params: Params$Resource$Projects$Locations$Jobs$Resume,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    resume(
      params: Params$Resource$Projects$Locations$Jobs$Resume,
      options: MethodOptions | BodyResponseCallback<Schema$Job>,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    resume(
      params: Params$Resource$Projects$Locations$Jobs$Resume,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    resume(callback: BodyResponseCallback<Schema$Job>): void;
    resume(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Jobs$Resume
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
        {}) as Params$Resource$Projects$Locations$Jobs$Resume;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Jobs$Resume;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudscheduler.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:resume').replace(
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
        createAPIRequest<Schema$Job>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Job>(parameters);
      }
    }

    /**
     * Forces a job to run now. When this method is called, Cloud Scheduler will dispatch the job, even if the job is already running.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudscheduler.googleapis.com
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
     * const cloudscheduler = google.cloudscheduler('v1beta1');
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
     *   const res = await cloudscheduler.projects.locations.jobs.run({
     *     // Required. The job name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
     *     name: 'projects/my-project/locations/my-location/jobs/my-job',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "legacyAppEngineCron": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appEngineHttpTarget": {},
     *   //   "attemptDeadline": "my_attemptDeadline",
     *   //   "description": "my_description",
     *   //   "httpTarget": {},
     *   //   "lastAttemptTime": "my_lastAttemptTime",
     *   //   "legacyAppEngineCron": false,
     *   //   "name": "my_name",
     *   //   "pubsubTarget": {},
     *   //   "retryConfig": {},
     *   //   "satisfiesPzs": false,
     *   //   "schedule": "my_schedule",
     *   //   "scheduleTime": "my_scheduleTime",
     *   //   "state": "my_state",
     *   //   "status": {},
     *   //   "timeZone": "my_timeZone",
     *   //   "userUpdateTime": "my_userUpdateTime"
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
    run(
      params: Params$Resource$Projects$Locations$Jobs$Run,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    run(
      params?: Params$Resource$Projects$Locations$Jobs$Run,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Job>>;
    run(
      params: Params$Resource$Projects$Locations$Jobs$Run,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    run(
      params: Params$Resource$Projects$Locations$Jobs$Run,
      options: MethodOptions | BodyResponseCallback<Schema$Job>,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    run(
      params: Params$Resource$Projects$Locations$Jobs$Run,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    run(callback: BodyResponseCallback<Schema$Job>): void;
    run(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Jobs$Run
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
        {}) as Params$Resource$Projects$Locations$Jobs$Run;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Jobs$Run;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudscheduler.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:run').replace(
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
        createAPIRequest<Schema$Job>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Job>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Jobs$Create
    extends StandardParameters {
    /**
     * Required. The location name. For example: `projects/PROJECT_ID/locations/LOCATION_ID`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Job;
  }
  export interface Params$Resource$Projects$Locations$Jobs$Delete
    extends StandardParameters {
    /**
     * This field is used to manage the legacy App Engine Cron jobs using the Cloud Scheduler API. If the field is set to true, the job in the __cron queue with the corresponding name will be deleted instead.
     */
    legacyAppEngineCron?: boolean;
    /**
     * Required. The job name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Jobs$Get
    extends StandardParameters {
    /**
     * Required. The job name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Jobs$List
    extends StandardParameters {
    /**
     * `filter` can be used to specify a subset of jobs. If `filter` equals `target_config="HttpConfig"`, then the http target jobs are retrieved. If `filter` equals `target_config="PubSubConfig"`, then the Pub/Sub target jobs are retrieved. If `filter` equals `labels.foo=value1 labels.foo=value2` then only jobs which are labeled with foo=value1 AND foo=value2 will be returned.
     */
    filter?: string;
    /**
     * This field is used to manage the legacy App Engine Cron jobs using the Cloud Scheduler API. If the field is set to true, the jobs in the __cron queue will be listed instead.
     */
    legacyAppEngineCron?: boolean;
    /**
     * Requested page size. The maximum page size is 500. If unspecified, the page size will be the maximum. Fewer jobs than requested might be returned, even if more jobs exist; use next_page_token to determine if more jobs exist.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server will return. To request the first page results, page_token must be empty. To request the next page of results, page_token must be the value of next_page_token returned from the previous call to ListJobs. It is an error to switch the value of filter or order_by while iterating through pages.
     */
    pageToken?: string;
    /**
     * Required. The location name. For example: `projects/PROJECT_ID/locations/LOCATION_ID`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Jobs$Patch
    extends StandardParameters {
    /**
     * Optionally caller-specified in CreateJob, after which it becomes output only. The job name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`. * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), or periods (.). For more information, see [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects) * `LOCATION_ID` is the canonical ID for the job's location. The list of available locations can be obtained by calling ListLocations. For more information, see https://cloud.google.com/about/locations/. * `JOB_ID` can contain only letters ([A-Za-z]), numbers ([0-9]), hyphens (-), or underscores (_). The maximum length is 500 characters.
     */
    name?: string;
    /**
     * A mask used to specify which fields of the job are being updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Job;
  }
  export interface Params$Resource$Projects$Locations$Jobs$Pause
    extends StandardParameters {
    /**
     * Required. The job name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PauseJobRequest;
  }
  export interface Params$Resource$Projects$Locations$Jobs$Resume
    extends StandardParameters {
    /**
     * Required. The job name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ResumeJobRequest;
  }
  export interface Params$Resource$Projects$Locations$Jobs$Run
    extends StandardParameters {
    /**
     * Required. The job name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RunJobRequest;
  }
}
