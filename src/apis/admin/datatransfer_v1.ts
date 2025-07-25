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

export namespace admin_datatransfer_v1 {
  export interface Options extends GlobalOptions {
    version: 'datatransfer_v1';
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
   * Admin SDK API
   *
   * Admin SDK lets administrators of enterprise domains to view and manage resources like user, groups etc. It also provides audit and usage reports of domain.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const admin = google.admin('datatransfer_v1');
   * ```
   */
  export class Admin {
    context: APIRequestContext;
    applications: Resource$Applications;
    transfers: Resource$Transfers;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.applications = new Resource$Applications(this.context);
      this.transfers = new Resource$Transfers(this.context);
    }
  }

  /**
   * Application resources represent applications installed on the domain that support transferring ownership of user data.
   */
  export interface Schema$Application {
    /**
     * Etag of the resource.
     */
    etag?: string | null;
    /**
     * The application's ID. Retrievable by using the [`applications.list()`](https://developers.google.com/workspace/admin/data-transfer/reference/rest/v1/applications/list) method.
     */
    id?: string | null;
    /**
     * Identifies the resource as a DataTransfer Application Resource.
     */
    kind?: string | null;
    /**
     * The application's name.
     */
    name?: string | null;
    /**
     * The list of all possible transfer parameters for this application. These parameters select which categories of the user's data to transfer.
     */
    transferParams?: Schema$ApplicationTransferParam[];
  }
  /**
   * Template to map fields of ApplicationDataTransfer resource.
   */
  export interface Schema$ApplicationDataTransfer {
    /**
     * The application's ID.
     */
    applicationId?: string | null;
    /**
     * The transfer parameters for the application. These parameters are used to select the data which will get transferred in context of this application. For more information about the specific values available for each application, see the [Transfer parameters](https://developers.google.com/workspace/admin/data-transfer/v1/parameters) reference.
     */
    applicationTransferParams?: Schema$ApplicationTransferParam[];
    /**
     * Read-only. Current status of transfer for this application.
     */
    applicationTransferStatus?: string | null;
  }
  /**
   * Template for a collection of Applications.
   */
  export interface Schema$ApplicationsListResponse {
    /**
     * The list of applications that support data transfer and are also installed for the customer.
     */
    applications?: Schema$Application[];
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * Identifies the resource as a collection of Applications.
     */
    kind?: string | null;
    /**
     * Token to specify the next page in the list.
     */
    nextPageToken?: string | null;
  }
  /**
   * Template for application transfer parameters.
   */
  export interface Schema$ApplicationTransferParam {
    /**
     * The type of the transfer parameter, such as `PRIVACY_LEVEL`.
     */
    key?: string | null;
    /**
     * The value of the transfer parameter, such as `PRIVATE` or `SHARED`.
     */
    value?: string[] | null;
  }
  /**
   * A Transfer resource represents the transfer of the ownership of user data between users.
   */
  export interface Schema$DataTransfer {
    /**
     * The list of per-application data transfer resources. It contains details of the applications associated with this transfer resource, and also specifies the applications for which data transfer has to be done at the time of the transfer resource creation.
     */
    applicationDataTransfers?: Schema$ApplicationDataTransfer[];
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * Read-only. The transfer's ID.
     */
    id?: string | null;
    /**
     * Identifies the resource as a DataTransfer request.
     */
    kind?: string | null;
    /**
     * ID of the user to whom the data is being transferred.
     */
    newOwnerUserId?: string | null;
    /**
     * ID of the user whose data is being transferred.
     */
    oldOwnerUserId?: string | null;
    /**
     * Read-only. Overall transfer status.
     */
    overallTransferStatusCode?: string | null;
    /**
     * Read-only. The time at which the data transfer was requested.
     */
    requestTime?: string | null;
  }
  /**
   * Template for a collection of DataTransfer resources.
   */
  export interface Schema$DataTransfersListResponse {
    /**
     * List of data transfer requests.
     */
    dataTransfers?: Schema$DataTransfer[];
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * Identifies the resource as a collection of data transfer requests.
     */
    kind?: string | null;
    /**
     * Token to specify the next page in the list.
     */
    nextPageToken?: string | null;
  }

  export class Resource$Applications {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves information about an application for the given application ID.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
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
     * const admin = google.admin('datatransfer_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.datatransfer',
     *       'https://www.googleapis.com/auth/admin.datatransfer.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datatransfer.applications.get({
     *     // ID of the application resource to be retrieved.
     *     applicationId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "transferParams": []
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
      params: Params$Resource$Applications$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Applications$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Application>>;
    get(
      params: Params$Resource$Applications$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Applications$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Application>,
      callback: BodyResponseCallback<Schema$Application>
    ): void;
    get(
      params: Params$Resource$Applications$Get,
      callback: BodyResponseCallback<Schema$Application>
    ): void;
    get(callback: BodyResponseCallback<Schema$Application>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Applications$Get
        | BodyResponseCallback<Schema$Application>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Application>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Application>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Application>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Applications$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Applications$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/admin/datatransfer/v1/applications/{applicationId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['applicationId'],
        pathParams: ['applicationId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Application>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Application>(parameters);
      }
    }

    /**
     * Lists the applications available for data transfer for a customer.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
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
     * const admin = google.admin('datatransfer_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.datatransfer',
     *       'https://www.googleapis.com/auth/admin.datatransfer.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datatransfer.applications.list({
     *     // Immutable ID of the Google Workspace account.
     *     customerId: 'placeholder-value',
     *     // Maximum number of results to return. Default is 100.
     *     maxResults: 'placeholder-value',
     *     // Token to specify next page in the list.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "applications": [],
     *   //   "etag": "my_etag",
     *   //   "kind": "my_kind",
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
      params: Params$Resource$Applications$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Applications$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ApplicationsListResponse>>;
    list(
      params: Params$Resource$Applications$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Applications$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ApplicationsListResponse>,
      callback: BodyResponseCallback<Schema$ApplicationsListResponse>
    ): void;
    list(
      params: Params$Resource$Applications$List,
      callback: BodyResponseCallback<Schema$ApplicationsListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ApplicationsListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Applications$List
        | BodyResponseCallback<Schema$ApplicationsListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ApplicationsListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ApplicationsListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ApplicationsListResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Applications$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Applications$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/admin/datatransfer/v1/applications').replace(
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
        createAPIRequest<Schema$ApplicationsListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ApplicationsListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Applications$Get extends StandardParameters {
    /**
     * ID of the application resource to be retrieved.
     */
    applicationId?: string;
  }
  export interface Params$Resource$Applications$List
    extends StandardParameters {
    /**
     * Immutable ID of the Google Workspace account.
     */
    customerId?: string;
    /**
     * Maximum number of results to return. Default is 100.
     */
    maxResults?: number;
    /**
     * Token to specify next page in the list.
     */
    pageToken?: string;
  }

  export class Resource$Transfers {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves a data transfer request by its resource ID.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
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
     * const admin = google.admin('datatransfer_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.datatransfer',
     *       'https://www.googleapis.com/auth/admin.datatransfer.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datatransfer.transfers.get({
     *     // ID of the resource to be retrieved. This is returned in the response from the insert method.
     *     dataTransferId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "applicationDataTransfers": [],
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "newOwnerUserId": "my_newOwnerUserId",
     *   //   "oldOwnerUserId": "my_oldOwnerUserId",
     *   //   "overallTransferStatusCode": "my_overallTransferStatusCode",
     *   //   "requestTime": "my_requestTime"
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
      params: Params$Resource$Transfers$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Transfers$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DataTransfer>>;
    get(
      params: Params$Resource$Transfers$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Transfers$Get,
      options: MethodOptions | BodyResponseCallback<Schema$DataTransfer>,
      callback: BodyResponseCallback<Schema$DataTransfer>
    ): void;
    get(
      params: Params$Resource$Transfers$Get,
      callback: BodyResponseCallback<Schema$DataTransfer>
    ): void;
    get(callback: BodyResponseCallback<Schema$DataTransfer>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Transfers$Get
        | BodyResponseCallback<Schema$DataTransfer>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DataTransfer>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DataTransfer>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DataTransfer>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Transfers$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Transfers$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/admin/datatransfer/v1/transfers/{dataTransferId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['dataTransferId'],
        pathParams: ['dataTransferId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DataTransfer>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DataTransfer>(parameters);
      }
    }

    /**
     * Inserts a data transfer request. See the [Transfer parameters](https://developers.google.com/workspace/admin/data-transfer/v1/parameters) reference for specific application requirements.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
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
     * const admin = google.admin('datatransfer_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.datatransfer'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datatransfer.transfers.insert({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "applicationDataTransfers": [],
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "newOwnerUserId": "my_newOwnerUserId",
     *       //   "oldOwnerUserId": "my_oldOwnerUserId",
     *       //   "overallTransferStatusCode": "my_overallTransferStatusCode",
     *       //   "requestTime": "my_requestTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "applicationDataTransfers": [],
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "newOwnerUserId": "my_newOwnerUserId",
     *   //   "oldOwnerUserId": "my_oldOwnerUserId",
     *   //   "overallTransferStatusCode": "my_overallTransferStatusCode",
     *   //   "requestTime": "my_requestTime"
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
      params: Params$Resource$Transfers$Insert,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    insert(
      params?: Params$Resource$Transfers$Insert,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DataTransfer>>;
    insert(
      params: Params$Resource$Transfers$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Transfers$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$DataTransfer>,
      callback: BodyResponseCallback<Schema$DataTransfer>
    ): void;
    insert(
      params: Params$Resource$Transfers$Insert,
      callback: BodyResponseCallback<Schema$DataTransfer>
    ): void;
    insert(callback: BodyResponseCallback<Schema$DataTransfer>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Transfers$Insert
        | BodyResponseCallback<Schema$DataTransfer>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DataTransfer>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DataTransfer>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DataTransfer>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Transfers$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Transfers$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/admin/datatransfer/v1/transfers').replace(
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
        createAPIRequest<Schema$DataTransfer>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DataTransfer>(parameters);
      }
    }

    /**
     * Lists the transfers for a customer by source user, destination user, or status.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
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
     * const admin = google.admin('datatransfer_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/admin.datatransfer',
     *       'https://www.googleapis.com/auth/admin.datatransfer.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datatransfer.transfers.list({
     *     // Immutable ID of the Google Workspace account.
     *     customerId: 'placeholder-value',
     *     // Maximum number of results to return. Default is 100.
     *     maxResults: 'placeholder-value',
     *     // Destination user's profile ID.
     *     newOwnerUserId: 'placeholder-value',
     *     // Source user's profile ID.
     *     oldOwnerUserId: 'placeholder-value',
     *     // Token to specify the next page in the list.
     *     pageToken: 'placeholder-value',
     *     // Status of the transfer.
     *     status: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dataTransfers": [],
     *   //   "etag": "my_etag",
     *   //   "kind": "my_kind",
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
      params: Params$Resource$Transfers$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Transfers$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DataTransfersListResponse>>;
    list(
      params: Params$Resource$Transfers$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Transfers$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$DataTransfersListResponse>,
      callback: BodyResponseCallback<Schema$DataTransfersListResponse>
    ): void;
    list(
      params: Params$Resource$Transfers$List,
      callback: BodyResponseCallback<Schema$DataTransfersListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$DataTransfersListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Transfers$List
        | BodyResponseCallback<Schema$DataTransfersListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DataTransfersListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DataTransfersListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DataTransfersListResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Transfers$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Transfers$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/admin/datatransfer/v1/transfers').replace(
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
        createAPIRequest<Schema$DataTransfersListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DataTransfersListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Transfers$Get extends StandardParameters {
    /**
     * ID of the resource to be retrieved. This is returned in the response from the insert method.
     */
    dataTransferId?: string;
  }
  export interface Params$Resource$Transfers$Insert extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$DataTransfer;
  }
  export interface Params$Resource$Transfers$List extends StandardParameters {
    /**
     * Immutable ID of the Google Workspace account.
     */
    customerId?: string;
    /**
     * Maximum number of results to return. Default is 100.
     */
    maxResults?: number;
    /**
     * Destination user's profile ID.
     */
    newOwnerUserId?: string;
    /**
     * Source user's profile ID.
     */
    oldOwnerUserId?: string;
    /**
     * Token to specify the next page in the list.
     */
    pageToken?: string;
    /**
     * Status of the transfer.
     */
    status?: string;
  }
}
