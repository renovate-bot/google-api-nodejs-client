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

export namespace youtubereporting_v1 {
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
   * YouTube Reporting API
   *
   * Schedules reporting jobs containing your YouTube Analytics data and downloads the resulting bulk data reports in the form of CSV files.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const youtubereporting = google.youtubereporting('v1');
   * ```
   */
  export class Youtubereporting {
    context: APIRequestContext;
    jobs: Resource$Jobs;
    media: Resource$Media;
    reportTypes: Resource$Reporttypes;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.jobs = new Resource$Jobs(this.context);
      this.media = new Resource$Media(this.context);
      this.reportTypes = new Resource$Reporttypes(this.context);
    }
  }

  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * gdata
   */
  export interface Schema$GdataBlobstore2Info {
    /**
     * gdata
     */
    blobGeneration?: string | null;
    /**
     * gdata
     */
    blobId?: string | null;
    /**
     * gdata
     */
    downloadReadHandle?: string | null;
    /**
     * gdata
     */
    readToken?: string | null;
    /**
     * gdata
     */
    uploadMetadataContainer?: string | null;
  }
  /**
   * gdata
   */
  export interface Schema$GdataCompositeMedia {
    /**
     * gdata
     */
    blobRef?: string | null;
    /**
     * gdata
     */
    blobstore2Info?: Schema$GdataBlobstore2Info;
    /**
     * gdata
     */
    cosmoBinaryReference?: string | null;
    /**
     * gdata
     */
    crc32cHash?: number | null;
    /**
     * gdata
     */
    inline?: string | null;
    /**
     * gdata
     */
    length?: string | null;
    /**
     * gdata
     */
    md5Hash?: string | null;
    /**
     * gdata
     */
    objectId?: Schema$GdataObjectId;
    /**
     * gdata
     */
    path?: string | null;
    /**
     * gdata
     */
    referenceType?: string | null;
    /**
     * gdata
     */
    sha1Hash?: string | null;
  }
  /**
   * gdata
   */
  export interface Schema$GdataContentTypeInfo {
    /**
     * gdata
     */
    bestGuess?: string | null;
    /**
     * gdata
     */
    fromBytes?: string | null;
    /**
     * gdata
     */
    fromFileName?: string | null;
    /**
     * gdata
     */
    fromHeader?: string | null;
    /**
     * gdata
     */
    fromUrlPath?: string | null;
  }
  /**
   * gdata
   */
  export interface Schema$GdataDiffChecksumsResponse {
    /**
     * gdata
     */
    checksumsLocation?: Schema$GdataCompositeMedia;
    /**
     * gdata
     */
    chunkSizeBytes?: string | null;
    /**
     * gdata
     */
    objectLocation?: Schema$GdataCompositeMedia;
    /**
     * gdata
     */
    objectSizeBytes?: string | null;
    /**
     * gdata
     */
    objectVersion?: string | null;
  }
  /**
   * gdata
   */
  export interface Schema$GdataDiffDownloadResponse {
    /**
     * gdata
     */
    objectLocation?: Schema$GdataCompositeMedia;
  }
  /**
   * gdata
   */
  export interface Schema$GdataDiffUploadRequest {
    /**
     * gdata
     */
    checksumsInfo?: Schema$GdataCompositeMedia;
    /**
     * gdata
     */
    objectInfo?: Schema$GdataCompositeMedia;
    /**
     * gdata
     */
    objectVersion?: string | null;
  }
  /**
   * gdata
   */
  export interface Schema$GdataDiffUploadResponse {
    /**
     * gdata
     */
    objectVersion?: string | null;
    /**
     * gdata
     */
    originalObject?: Schema$GdataCompositeMedia;
  }
  /**
   * gdata
   */
  export interface Schema$GdataDiffVersionResponse {
    /**
     * gdata
     */
    objectSizeBytes?: string | null;
    /**
     * gdata
     */
    objectVersion?: string | null;
  }
  /**
   * gdata
   */
  export interface Schema$GdataDownloadParameters {
    /**
     * gdata
     */
    allowGzipCompression?: boolean | null;
    /**
     * gdata
     */
    ignoreRange?: boolean | null;
  }
  /**
   * gdata
   */
  export interface Schema$GdataMedia {
    /**
     * gdata
     */
    algorithm?: string | null;
    /**
     * gdata
     */
    bigstoreObjectRef?: string | null;
    /**
     * gdata
     */
    blobRef?: string | null;
    /**
     * gdata
     */
    blobstore2Info?: Schema$GdataBlobstore2Info;
    /**
     * gdata
     */
    compositeMedia?: Schema$GdataCompositeMedia[];
    /**
     * gdata
     */
    contentType?: string | null;
    /**
     * gdata
     */
    contentTypeInfo?: Schema$GdataContentTypeInfo;
    /**
     * gdata
     */
    cosmoBinaryReference?: string | null;
    /**
     * gdata
     */
    crc32cHash?: number | null;
    /**
     * gdata
     */
    diffChecksumsResponse?: Schema$GdataDiffChecksumsResponse;
    /**
     * gdata
     */
    diffDownloadResponse?: Schema$GdataDiffDownloadResponse;
    /**
     * gdata
     */
    diffUploadRequest?: Schema$GdataDiffUploadRequest;
    /**
     * gdata
     */
    diffUploadResponse?: Schema$GdataDiffUploadResponse;
    /**
     * gdata
     */
    diffVersionResponse?: Schema$GdataDiffVersionResponse;
    /**
     * gdata
     */
    downloadParameters?: Schema$GdataDownloadParameters;
    /**
     * gdata
     */
    filename?: string | null;
    /**
     * gdata
     */
    hash?: string | null;
    /**
     * gdata
     */
    hashVerified?: boolean | null;
    /**
     * gdata
     */
    inline?: string | null;
    /**
     * gdata
     */
    isPotentialRetry?: boolean | null;
    /**
     * gdata
     */
    length?: string | null;
    /**
     * gdata
     */
    md5Hash?: string | null;
    /**
     * gdata
     */
    mediaId?: string | null;
    /**
     * gdata
     */
    objectId?: Schema$GdataObjectId;
    /**
     * gdata
     */
    path?: string | null;
    /**
     * gdata
     */
    referenceType?: string | null;
    /**
     * gdata
     */
    sha1Hash?: string | null;
    /**
     * gdata
     */
    sha256Hash?: string | null;
    /**
     * gdata
     */
    timestamp?: string | null;
    /**
     * gdata
     */
    token?: string | null;
  }
  /**
   * gdata
   */
  export interface Schema$GdataObjectId {
    /**
     * gdata
     */
    bucketName?: string | null;
    /**
     * gdata
     */
    generation?: string | null;
    /**
     * gdata
     */
    objectName?: string | null;
  }
  /**
   * A job creating reports of a specific type.
   */
  export interface Schema$Job {
    /**
     * The creation date/time of the job.
     */
    createTime?: string | null;
    /**
     * The date/time when this job will expire/expired. After a job expired, no new reports are generated.
     */
    expireTime?: string | null;
    /**
     * The server-generated ID of the job (max. 40 characters).
     */
    id?: string | null;
    /**
     * The name of the job (max. 100 characters).
     */
    name?: string | null;
    /**
     * The type of reports this job creates. Corresponds to the ID of a ReportType.
     */
    reportTypeId?: string | null;
    /**
     * True if this a system-managed job that cannot be modified by the user; otherwise false.
     */
    systemManaged?: boolean | null;
  }
  /**
   * Response message for ReportingService.ListJobs.
   */
  export interface Schema$ListJobsResponse {
    /**
     * The list of jobs.
     */
    jobs?: Schema$Job[];
    /**
     * A token to retrieve next page of results. Pass this value in the ListJobsRequest.page_token field in the subsequent call to `ListJobs` method to retrieve the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for ReportingService.ListReports.
   */
  export interface Schema$ListReportsResponse {
    /**
     * A token to retrieve next page of results. Pass this value in the ListReportsRequest.page_token field in the subsequent call to `ListReports` method to retrieve the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * The list of report types.
     */
    reports?: Schema$Report[];
  }
  /**
   * Response message for ReportingService.ListReportTypes.
   */
  export interface Schema$ListReportTypesResponse {
    /**
     * A token to retrieve next page of results. Pass this value in the ListReportTypesRequest.page_token field in the subsequent call to `ListReportTypes` method to retrieve the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * The list of report types.
     */
    reportTypes?: Schema$ReportType[];
  }
  /**
   * A report's metadata including the URL from which the report itself can be downloaded.
   */
  export interface Schema$Report {
    /**
     * The date/time when this report was created.
     */
    createTime?: string | null;
    /**
     * The URL from which the report can be downloaded (max. 1000 characters).
     */
    downloadUrl?: string | null;
    /**
     * The end of the time period that the report instance covers. The value is exclusive.
     */
    endTime?: string | null;
    /**
     * The server-generated ID of the report.
     */
    id?: string | null;
    /**
     * The date/time when the job this report belongs to will expire/expired.
     */
    jobExpireTime?: string | null;
    /**
     * The ID of the job that created this report.
     */
    jobId?: string | null;
    /**
     * The start of the time period that the report instance covers. The value is inclusive.
     */
    startTime?: string | null;
  }
  /**
   * A report type.
   */
  export interface Schema$ReportType {
    /**
     * The date/time when this report type was/will be deprecated.
     */
    deprecateTime?: string | null;
    /**
     * The ID of the report type (max. 100 characters).
     */
    id?: string | null;
    /**
     * The name of the report type (max. 100 characters).
     */
    name?: string | null;
    /**
     * True if this a system-managed report type; otherwise false. Reporting jobs for system-managed report types are created automatically and can thus not be used in the `CreateJob` method.
     */
    systemManaged?: boolean | null;
  }

  export class Resource$Jobs {
    context: APIRequestContext;
    reports: Resource$Jobs$Reports;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.reports = new Resource$Jobs$Reports(this.context);
    }

    /**
     * Creates a job and returns it.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubereporting.googleapis.com
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
     * const youtubereporting = google.youtubereporting('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/yt-analytics-monetary.readonly',
     *       'https://www.googleapis.com/auth/yt-analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubereporting.jobs.create({
     *     // The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
     *     onBehalfOfContentOwner: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "expireTime": "my_expireTime",
     *       //   "id": "my_id",
     *       //   "name": "my_name",
     *       //   "reportTypeId": "my_reportTypeId",
     *       //   "systemManaged": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "expireTime": "my_expireTime",
     *   //   "id": "my_id",
     *   //   "name": "my_name",
     *   //   "reportTypeId": "my_reportTypeId",
     *   //   "systemManaged": false
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
      params: Params$Resource$Jobs$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Jobs$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Job>>;
    create(
      params: Params$Resource$Jobs$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Jobs$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Job>,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    create(
      params: Params$Resource$Jobs$Create,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    create(callback: BodyResponseCallback<Schema$Job>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Jobs$Create
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
      let params = (paramsOrCallback || {}) as Params$Resource$Jobs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Jobs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://youtubereporting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/jobs').replace(/([^:]\/)\/+/g, '$1'),
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
     * //   https://console.developers.google.com/apis/api/youtubereporting.googleapis.com
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
     * const youtubereporting = google.youtubereporting('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/yt-analytics-monetary.readonly',
     *       'https://www.googleapis.com/auth/yt-analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubereporting.jobs.delete({
     *     // The ID of the job to delete.
     *     jobId: 'placeholder-value',
     *     // The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
     *     onBehalfOfContentOwner: 'placeholder-value',
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
      params: Params$Resource$Jobs$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Jobs$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Jobs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Jobs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Jobs$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Jobs$Delete
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
      let params = (paramsOrCallback || {}) as Params$Resource$Jobs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Jobs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://youtubereporting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/jobs/{jobId}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['jobId'],
        pathParams: ['jobId'],
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
     * //   https://console.developers.google.com/apis/api/youtubereporting.googleapis.com
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
     * const youtubereporting = google.youtubereporting('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/yt-analytics-monetary.readonly',
     *       'https://www.googleapis.com/auth/yt-analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubereporting.jobs.get({
     *     // The ID of the job to retrieve.
     *     jobId: 'placeholder-value',
     *     // The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
     *     onBehalfOfContentOwner: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "expireTime": "my_expireTime",
     *   //   "id": "my_id",
     *   //   "name": "my_name",
     *   //   "reportTypeId": "my_reportTypeId",
     *   //   "systemManaged": false
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
      params: Params$Resource$Jobs$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Jobs$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Job>>;
    get(
      params: Params$Resource$Jobs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Jobs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Job>,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    get(
      params: Params$Resource$Jobs$Get,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    get(callback: BodyResponseCallback<Schema$Job>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Jobs$Get
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
      let params = (paramsOrCallback || {}) as Params$Resource$Jobs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Jobs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://youtubereporting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/jobs/{jobId}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['jobId'],
        pathParams: ['jobId'],
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
     * //   https://console.developers.google.com/apis/api/youtubereporting.googleapis.com
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
     * const youtubereporting = google.youtubereporting('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/yt-analytics-monetary.readonly',
     *       'https://www.googleapis.com/auth/yt-analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubereporting.jobs.list({
     *     // If set to true, also system-managed jobs will be returned; otherwise only user-created jobs will be returned. System-managed jobs can neither be modified nor deleted.
     *     includeSystemManaged: 'placeholder-value',
     *     // The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // Requested page size. Server may return fewer jobs than requested. If unspecified, server will pick an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // A token identifying a page of results the server should return. Typically, this is the value of ListReportTypesResponse.next_page_token returned in response to the previous call to the `ListJobs` method.
     *     pageToken: 'placeholder-value',
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
      params: Params$Resource$Jobs$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Jobs$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListJobsResponse>>;
    list(
      params: Params$Resource$Jobs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Jobs$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListJobsResponse>,
      callback: BodyResponseCallback<Schema$ListJobsResponse>
    ): void;
    list(
      params: Params$Resource$Jobs$List,
      callback: BodyResponseCallback<Schema$ListJobsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListJobsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Jobs$List
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
      let params = (paramsOrCallback || {}) as Params$Resource$Jobs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Jobs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://youtubereporting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/jobs').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListJobsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListJobsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Jobs$Create extends StandardParameters {
    /**
     * The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
     */
    onBehalfOfContentOwner?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Job;
  }
  export interface Params$Resource$Jobs$Delete extends StandardParameters {
    /**
     * The ID of the job to delete.
     */
    jobId?: string;
    /**
     * The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
     */
    onBehalfOfContentOwner?: string;
  }
  export interface Params$Resource$Jobs$Get extends StandardParameters {
    /**
     * The ID of the job to retrieve.
     */
    jobId?: string;
    /**
     * The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
     */
    onBehalfOfContentOwner?: string;
  }
  export interface Params$Resource$Jobs$List extends StandardParameters {
    /**
     * If set to true, also system-managed jobs will be returned; otherwise only user-created jobs will be returned. System-managed jobs can neither be modified nor deleted.
     */
    includeSystemManaged?: boolean;
    /**
     * The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
     */
    onBehalfOfContentOwner?: string;
    /**
     * Requested page size. Server may return fewer jobs than requested. If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return. Typically, this is the value of ListReportTypesResponse.next_page_token returned in response to the previous call to the `ListJobs` method.
     */
    pageToken?: string;
  }

  export class Resource$Jobs$Reports {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the metadata of a specific report.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubereporting.googleapis.com
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
     * const youtubereporting = google.youtubereporting('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/yt-analytics-monetary.readonly',
     *       'https://www.googleapis.com/auth/yt-analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubereporting.jobs.reports.get({
     *     // The ID of the job.
     *     jobId: 'placeholder-value',
     *     // The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The ID of the report to retrieve.
     *     reportId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "downloadUrl": "my_downloadUrl",
     *   //   "endTime": "my_endTime",
     *   //   "id": "my_id",
     *   //   "jobExpireTime": "my_jobExpireTime",
     *   //   "jobId": "my_jobId",
     *   //   "startTime": "my_startTime"
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
      params: Params$Resource$Jobs$Reports$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Jobs$Reports$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Report>>;
    get(
      params: Params$Resource$Jobs$Reports$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Jobs$Reports$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Report>,
      callback: BodyResponseCallback<Schema$Report>
    ): void;
    get(
      params: Params$Resource$Jobs$Reports$Get,
      callback: BodyResponseCallback<Schema$Report>
    ): void;
    get(callback: BodyResponseCallback<Schema$Report>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Jobs$Reports$Get
        | BodyResponseCallback<Schema$Report>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Report>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Report>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Report>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Jobs$Reports$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Jobs$Reports$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://youtubereporting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/jobs/{jobId}/reports/{reportId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['jobId', 'reportId'],
        pathParams: ['jobId', 'reportId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Report>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Report>(parameters);
      }
    }

    /**
     * Lists reports created by a specific job. Returns NOT_FOUND if the job does not exist.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubereporting.googleapis.com
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
     * const youtubereporting = google.youtubereporting('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/yt-analytics-monetary.readonly',
     *       'https://www.googleapis.com/auth/yt-analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubereporting.jobs.reports.list({
     *     // If set, only reports created after the specified date/time are returned.
     *     createdAfter: 'placeholder-value',
     *     // The ID of the job.
     *     jobId: 'placeholder-value',
     *     // The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // Requested page size. Server may return fewer report types than requested. If unspecified, server will pick an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // A token identifying a page of results the server should return. Typically, this is the value of ListReportsResponse.next_page_token returned in response to the previous call to the `ListReports` method.
     *     pageToken: 'placeholder-value',
     *     // If set, only reports whose start time is greater than or equal the specified date/time are returned.
     *     startTimeAtOrAfter: 'placeholder-value',
     *     // If set, only reports whose start time is smaller than the specified date/time are returned.
     *     startTimeBefore: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "reports": []
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
      params: Params$Resource$Jobs$Reports$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Jobs$Reports$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListReportsResponse>>;
    list(
      params: Params$Resource$Jobs$Reports$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Jobs$Reports$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListReportsResponse>,
      callback: BodyResponseCallback<Schema$ListReportsResponse>
    ): void;
    list(
      params: Params$Resource$Jobs$Reports$List,
      callback: BodyResponseCallback<Schema$ListReportsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListReportsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Jobs$Reports$List
        | BodyResponseCallback<Schema$ListReportsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListReportsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListReportsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListReportsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Jobs$Reports$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Jobs$Reports$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://youtubereporting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/jobs/{jobId}/reports').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['jobId'],
        pathParams: ['jobId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListReportsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListReportsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Jobs$Reports$Get extends StandardParameters {
    /**
     * The ID of the job.
     */
    jobId?: string;
    /**
     * The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
     */
    onBehalfOfContentOwner?: string;
    /**
     * The ID of the report to retrieve.
     */
    reportId?: string;
  }
  export interface Params$Resource$Jobs$Reports$List
    extends StandardParameters {
    /**
     * If set, only reports created after the specified date/time are returned.
     */
    createdAfter?: string;
    /**
     * The ID of the job.
     */
    jobId?: string;
    /**
     * The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
     */
    onBehalfOfContentOwner?: string;
    /**
     * Requested page size. Server may return fewer report types than requested. If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return. Typically, this is the value of ListReportsResponse.next_page_token returned in response to the previous call to the `ListReports` method.
     */
    pageToken?: string;
    /**
     * If set, only reports whose start time is greater than or equal the specified date/time are returned.
     */
    startTimeAtOrAfter?: string;
    /**
     * If set, only reports whose start time is smaller than the specified date/time are returned.
     */
    startTimeBefore?: string;
  }

  export class Resource$Media {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Method for media download. Download is supported on the URI `/v1/media/{+name\}?alt=media`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubereporting.googleapis.com
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
     * const youtubereporting = google.youtubereporting('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/yt-analytics-monetary.readonly',
     *       'https://www.googleapis.com/auth/yt-analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubereporting.media.download({
     *     // Name of the media that is being downloaded.
     *     resourceName: '.*',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "algorithm": "my_algorithm",
     *   //   "bigstoreObjectRef": "my_bigstoreObjectRef",
     *   //   "blobRef": "my_blobRef",
     *   //   "blobstore2Info": {},
     *   //   "compositeMedia": [],
     *   //   "contentType": "my_contentType",
     *   //   "contentTypeInfo": {},
     *   //   "cosmoBinaryReference": "my_cosmoBinaryReference",
     *   //   "crc32cHash": 0,
     *   //   "diffChecksumsResponse": {},
     *   //   "diffDownloadResponse": {},
     *   //   "diffUploadRequest": {},
     *   //   "diffUploadResponse": {},
     *   //   "diffVersionResponse": {},
     *   //   "downloadParameters": {},
     *   //   "filename": "my_filename",
     *   //   "hash": "my_hash",
     *   //   "hashVerified": false,
     *   //   "inline": "my_inline",
     *   //   "isPotentialRetry": false,
     *   //   "length": "my_length",
     *   //   "md5Hash": "my_md5Hash",
     *   //   "mediaId": "my_mediaId",
     *   //   "objectId": {},
     *   //   "path": "my_path",
     *   //   "referenceType": "my_referenceType",
     *   //   "sha1Hash": "my_sha1Hash",
     *   //   "sha256Hash": "my_sha256Hash",
     *   //   "timestamp": "my_timestamp",
     *   //   "token": "my_token"
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
    download(
      params: Params$Resource$Media$Download,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    download(
      params?: Params$Resource$Media$Download,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GdataMedia>>;
    download(
      params: Params$Resource$Media$Download,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    download(
      params: Params$Resource$Media$Download,
      options: MethodOptions | BodyResponseCallback<Schema$GdataMedia>,
      callback: BodyResponseCallback<Schema$GdataMedia>
    ): void;
    download(
      params: Params$Resource$Media$Download,
      callback: BodyResponseCallback<Schema$GdataMedia>
    ): void;
    download(callback: BodyResponseCallback<Schema$GdataMedia>): void;
    download(
      paramsOrCallback?:
        | Params$Resource$Media$Download
        | BodyResponseCallback<Schema$GdataMedia>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GdataMedia>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GdataMedia>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GdataMedia>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Media$Download;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Media$Download;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://youtubereporting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/media/{+resourceName}').replace(
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
        createAPIRequest<Schema$GdataMedia>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GdataMedia>(parameters);
      }
    }
  }

  export interface Params$Resource$Media$Download extends StandardParameters {
    /**
     * Name of the media that is being downloaded.
     */
    resourceName?: string;
  }

  export class Resource$Reporttypes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists report types.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubereporting.googleapis.com
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
     * const youtubereporting = google.youtubereporting('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/yt-analytics-monetary.readonly',
     *       'https://www.googleapis.com/auth/yt-analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubereporting.reportTypes.list({
     *     // If set to true, also system-managed report types will be returned; otherwise only the report types that can be used to create new reporting jobs will be returned.
     *     includeSystemManaged: 'placeholder-value',
     *     // The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // Requested page size. Server may return fewer report types than requested. If unspecified, server will pick an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // A token identifying a page of results the server should return. Typically, this is the value of ListReportTypesResponse.next_page_token returned in response to the previous call to the `ListReportTypes` method.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "reportTypes": []
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
      params: Params$Resource$Reporttypes$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Reporttypes$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListReportTypesResponse>>;
    list(
      params: Params$Resource$Reporttypes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Reporttypes$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListReportTypesResponse>,
      callback: BodyResponseCallback<Schema$ListReportTypesResponse>
    ): void;
    list(
      params: Params$Resource$Reporttypes$List,
      callback: BodyResponseCallback<Schema$ListReportTypesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListReportTypesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Reporttypes$List
        | BodyResponseCallback<Schema$ListReportTypesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListReportTypesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListReportTypesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListReportTypesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Reporttypes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Reporttypes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://youtubereporting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/reportTypes').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListReportTypesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListReportTypesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Reporttypes$List extends StandardParameters {
    /**
     * If set to true, also system-managed report types will be returned; otherwise only the report types that can be used to create new reporting jobs will be returned.
     */
    includeSystemManaged?: boolean;
    /**
     * The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
     */
    onBehalfOfContentOwner?: string;
    /**
     * Requested page size. Server may return fewer report types than requested. If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return. Typically, this is the value of ListReportTypesResponse.next_page_token returned in response to the previous call to the `ListReportTypes` method.
     */
    pageToken?: string;
  }
}
