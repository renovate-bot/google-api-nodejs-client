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

export namespace essentialcontacts_v1 {
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
   * Essential Contacts API
   *
   *
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const essentialcontacts = google.essentialcontacts('v1');
   * ```
   */
  export class Essentialcontacts {
    context: APIRequestContext;
    folders: Resource$Folders;
    organizations: Resource$Organizations;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.folders = new Resource$Folders(this.context);
      this.organizations = new Resource$Organizations(this.context);
      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * Response message for the ComputeContacts method.
   */
  export interface Schema$GoogleCloudEssentialcontactsV1ComputeContactsResponse {
    /**
     * All contacts for the resource that are subscribed to the specified notification categories, including contacts inherited from any parent resources.
     */
    contacts?: Schema$GoogleCloudEssentialcontactsV1Contact[];
    /**
     * If there are more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token` and the rest of the parameters the same as the original request.
     */
    nextPageToken?: string | null;
  }
  /**
   * A contact that will receive notifications from Google Cloud.
   */
  export interface Schema$GoogleCloudEssentialcontactsV1Contact {
    /**
     * Required. The email address to send notifications to. The email address does not need to be a Google Account.
     */
    email?: string | null;
    /**
     * Required. The preferred language for notifications, as a ISO 639-1 language code. See [Supported languages](https://cloud.google.com/resource-manager/docs/managing-notification-contacts#supported-languages) for a list of supported languages.
     */
    languageTag?: string | null;
    /**
     * Output only. The identifier for the contact. Format: {resource_type\}/{resource_id\}/contacts/{contact_id\}
     */
    name?: string | null;
    /**
     * Required. The categories of notifications that the contact will receive communications for.
     */
    notificationCategorySubscriptions?: string[] | null;
    /**
     * Output only. The last time the validation_state was updated, either manually or automatically. A contact is considered stale if its validation state was updated more than 1 year ago.
     */
    validateTime?: string | null;
    /**
     * Output only. The validity of the contact. A contact is considered valid if it is the correct recipient for notifications for a particular resource.
     */
    validationState?: string | null;
  }
  /**
   * Response message for the ListContacts method.
   */
  export interface Schema$GoogleCloudEssentialcontactsV1ListContactsResponse {
    /**
     * The contacts for the specified resource.
     */
    contacts?: Schema$GoogleCloudEssentialcontactsV1Contact[];
    /**
     * If there are more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token` and the rest of the parameters the same as the original request.
     */
    nextPageToken?: string | null;
  }
  /**
   * Request message for the SendTestMessage method.
   */
  export interface Schema$GoogleCloudEssentialcontactsV1SendTestMessageRequest {
    /**
     * Required. The list of names of the contacts to send a test message to. Format: organizations/{organization_id\}/contacts/{contact_id\}, folders/{folder_id\}/contacts/{contact_id\} or projects/{project_id\}/contacts/{contact_id\}
     */
    contacts?: string[] | null;
    /**
     * Required. The notification category to send the test message for. All contacts must be subscribed to this category.
     */
    notificationCategory?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$GoogleProtobufEmpty {}

  export class Resource$Folders {
    context: APIRequestContext;
    contacts: Resource$Folders$Contacts;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.contacts = new Resource$Folders$Contacts(this.context);
    }
  }

  export class Resource$Folders$Contacts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists all contacts for the resource that are subscribed to the specified notification categories, including contacts inherited from any parent resources.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/essentialcontacts.googleapis.com
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
     * const essentialcontacts = google.essentialcontacts('v1');
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
     *   const res = await essentialcontacts.folders.contacts.compute({
     *     // The categories of notifications to compute contacts for. If ALL is included in this list, contacts subscribed to any notification category will be returned.
     *     notificationCategories: 'placeholder-value',
     *     // Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of `next_page_token` in the response indicates that more results might be available. If not specified, the default page_size is 100.
     *     pageSize: 'placeholder-value',
     *     // Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters should be identical to those in the previous call.
     *     pageToken: 'placeholder-value',
     *     // Required. The name of the resource to compute contacts for. Format: organizations/{organization_id\}, folders/{folder_id\} or projects/{project_id\}
     *     parent: 'folders/my-folder',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contacts": [],
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
    compute(
      params: Params$Resource$Folders$Contacts$Compute,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    compute(
      params?: Params$Resource$Folders$Contacts$Compute,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudEssentialcontactsV1ComputeContactsResponse>
    >;
    compute(
      params: Params$Resource$Folders$Contacts$Compute,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    compute(
      params: Params$Resource$Folders$Contacts$Compute,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1ComputeContactsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1ComputeContactsResponse>
    ): void;
    compute(
      params: Params$Resource$Folders$Contacts$Compute,
      callback: BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1ComputeContactsResponse>
    ): void;
    compute(
      callback: BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1ComputeContactsResponse>
    ): void;
    compute(
      paramsOrCallback?:
        | Params$Resource$Folders$Contacts$Compute
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1ComputeContactsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1ComputeContactsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1ComputeContactsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudEssentialcontactsV1ComputeContactsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Contacts$Compute;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Contacts$Compute;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://essentialcontacts.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/contacts:compute').replace(
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
        createAPIRequest<Schema$GoogleCloudEssentialcontactsV1ComputeContactsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudEssentialcontactsV1ComputeContactsResponse>(
          parameters
        );
      }
    }

    /**
     * Adds a new contact for a resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/essentialcontacts.googleapis.com
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
     * const essentialcontacts = google.essentialcontacts('v1');
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
     *   const res = await essentialcontacts.folders.contacts.create({
     *     // Required. The resource to save this contact for. Format: organizations/{organization_id\}, folders/{folder_id\} or projects/{project_id\}
     *     parent: 'folders/my-folder',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "email": "my_email",
     *       //   "languageTag": "my_languageTag",
     *       //   "name": "my_name",
     *       //   "notificationCategorySubscriptions": [],
     *       //   "validateTime": "my_validateTime",
     *       //   "validationState": "my_validationState"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "email": "my_email",
     *   //   "languageTag": "my_languageTag",
     *   //   "name": "my_name",
     *   //   "notificationCategorySubscriptions": [],
     *   //   "validateTime": "my_validateTime",
     *   //   "validationState": "my_validationState"
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
      params: Params$Resource$Folders$Contacts$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Folders$Contacts$Create,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudEssentialcontactsV1Contact>
    >;
    create(
      params: Params$Resource$Folders$Contacts$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Folders$Contacts$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>,
      callback: BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
    ): void;
    create(
      params: Params$Resource$Folders$Contacts$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Folders$Contacts$Create
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudEssentialcontactsV1Contact>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Contacts$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Contacts$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://essentialcontacts.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/contacts').replace(
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
        createAPIRequest<Schema$GoogleCloudEssentialcontactsV1Contact>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudEssentialcontactsV1Contact>(
          parameters
        );
      }
    }

    /**
     * Deletes a contact.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/essentialcontacts.googleapis.com
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
     * const essentialcontacts = google.essentialcontacts('v1');
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
     *   const res = await essentialcontacts.folders.contacts.delete({
     *     // Required. The name of the contact to delete. Format: organizations/{organization_id\}/contacts/{contact_id\}, folders/{folder_id\}/contacts/{contact_id\} or projects/{project_id\}/contacts/{contact_id\}
     *     name: 'folders/my-folder/contacts/my-contact',
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
      params: Params$Resource$Folders$Contacts$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Folders$Contacts$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>;
    delete(
      params: Params$Resource$Folders$Contacts$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Folders$Contacts$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Folders$Contacts$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Folders$Contacts$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Contacts$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Contacts$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://essentialcontacts.googleapis.com/';
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets a single contact.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/essentialcontacts.googleapis.com
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
     * const essentialcontacts = google.essentialcontacts('v1');
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
     *   const res = await essentialcontacts.folders.contacts.get({
     *     // Required. The name of the contact to retrieve. Format: organizations/{organization_id\}/contacts/{contact_id\}, folders/{folder_id\}/contacts/{contact_id\} or projects/{project_id\}/contacts/{contact_id\}
     *     name: 'folders/my-folder/contacts/my-contact',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "email": "my_email",
     *   //   "languageTag": "my_languageTag",
     *   //   "name": "my_name",
     *   //   "notificationCategorySubscriptions": [],
     *   //   "validateTime": "my_validateTime",
     *   //   "validationState": "my_validationState"
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
      params: Params$Resource$Folders$Contacts$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Folders$Contacts$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudEssentialcontactsV1Contact>
    >;
    get(
      params: Params$Resource$Folders$Contacts$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Folders$Contacts$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>,
      callback: BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
    ): void;
    get(
      params: Params$Resource$Folders$Contacts$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Folders$Contacts$Get
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudEssentialcontactsV1Contact>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Contacts$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Contacts$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://essentialcontacts.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudEssentialcontactsV1Contact>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudEssentialcontactsV1Contact>(
          parameters
        );
      }
    }

    /**
     * Lists the contacts that have been set on a resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/essentialcontacts.googleapis.com
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
     * const essentialcontacts = google.essentialcontacts('v1');
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
     *   const res = await essentialcontacts.folders.contacts.list({
     *     // Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of `next_page_token` in the response indicates that more results might be available. If not specified, the default page_size is 100.
     *     pageSize: 'placeholder-value',
     *     // Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters should be identical to those in the previous call.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent resource name. Format: organizations/{organization_id\}, folders/{folder_id\} or projects/{project_id\}
     *     parent: 'folders/my-folder',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contacts": [],
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
      params: Params$Resource$Folders$Contacts$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Folders$Contacts$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudEssentialcontactsV1ListContactsResponse>
    >;
    list(
      params: Params$Resource$Folders$Contacts$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Folders$Contacts$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1ListContactsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1ListContactsResponse>
    ): void;
    list(
      params: Params$Resource$Folders$Contacts$List,
      callback: BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1ListContactsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1ListContactsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Folders$Contacts$List
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1ListContactsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1ListContactsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1ListContactsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudEssentialcontactsV1ListContactsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Contacts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Contacts$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://essentialcontacts.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/contacts').replace(
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
        createAPIRequest<Schema$GoogleCloudEssentialcontactsV1ListContactsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudEssentialcontactsV1ListContactsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a contact. Note: A contact's email address cannot be changed.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/essentialcontacts.googleapis.com
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
     * const essentialcontacts = google.essentialcontacts('v1');
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
     *   const res = await essentialcontacts.folders.contacts.patch({
     *     // Output only. The identifier for the contact. Format: {resource_type\}/{resource_id\}/contacts/{contact_id\}
     *     name: 'folders/my-folder/contacts/my-contact',
     *     // Optional. The update mask applied to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "email": "my_email",
     *       //   "languageTag": "my_languageTag",
     *       //   "name": "my_name",
     *       //   "notificationCategorySubscriptions": [],
     *       //   "validateTime": "my_validateTime",
     *       //   "validationState": "my_validationState"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "email": "my_email",
     *   //   "languageTag": "my_languageTag",
     *   //   "name": "my_name",
     *   //   "notificationCategorySubscriptions": [],
     *   //   "validateTime": "my_validateTime",
     *   //   "validationState": "my_validationState"
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
      params: Params$Resource$Folders$Contacts$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Folders$Contacts$Patch,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudEssentialcontactsV1Contact>
    >;
    patch(
      params: Params$Resource$Folders$Contacts$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Folders$Contacts$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>,
      callback: BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
    ): void;
    patch(
      params: Params$Resource$Folders$Contacts$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Folders$Contacts$Patch
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudEssentialcontactsV1Contact>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Contacts$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Contacts$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://essentialcontacts.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudEssentialcontactsV1Contact>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudEssentialcontactsV1Contact>(
          parameters
        );
      }
    }

    /**
     * Allows a contact admin to send a test message to contact to verify that it has been configured correctly.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/essentialcontacts.googleapis.com
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
     * const essentialcontacts = google.essentialcontacts('v1');
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
     *   const res = await essentialcontacts.folders.contacts.sendTestMessage({
     *     // Required. The name of the resource to send the test message for. All contacts must either be set directly on this resource or inherited from another resource that is an ancestor of this one. Format: organizations/{organization_id\}, folders/{folder_id\} or projects/{project_id\}
     *     resource: 'folders/my-folder',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "contacts": [],
     *       //   "notificationCategory": "my_notificationCategory"
     *       // }
     *     },
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
    sendTestMessage(
      params: Params$Resource$Folders$Contacts$Sendtestmessage,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    sendTestMessage(
      params?: Params$Resource$Folders$Contacts$Sendtestmessage,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>;
    sendTestMessage(
      params: Params$Resource$Folders$Contacts$Sendtestmessage,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    sendTestMessage(
      params: Params$Resource$Folders$Contacts$Sendtestmessage,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    sendTestMessage(
      params: Params$Resource$Folders$Contacts$Sendtestmessage,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    sendTestMessage(
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    sendTestMessage(
      paramsOrCallback?:
        | Params$Resource$Folders$Contacts$Sendtestmessage
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Contacts$Sendtestmessage;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Contacts$Sendtestmessage;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://essentialcontacts.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}/contacts:sendTestMessage').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }
  }

  export interface Params$Resource$Folders$Contacts$Compute
    extends StandardParameters {
    /**
     * The categories of notifications to compute contacts for. If ALL is included in this list, contacts subscribed to any notification category will be returned.
     */
    notificationCategories?: string[];
    /**
     * Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of `next_page_token` in the response indicates that more results might be available. If not specified, the default page_size is 100.
     */
    pageSize?: number;
    /**
     * Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters should be identical to those in the previous call.
     */
    pageToken?: string;
    /**
     * Required. The name of the resource to compute contacts for. Format: organizations/{organization_id\}, folders/{folder_id\} or projects/{project_id\}
     */
    parent?: string;
  }
  export interface Params$Resource$Folders$Contacts$Create
    extends StandardParameters {
    /**
     * Required. The resource to save this contact for. Format: organizations/{organization_id\}, folders/{folder_id\} or projects/{project_id\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudEssentialcontactsV1Contact;
  }
  export interface Params$Resource$Folders$Contacts$Delete
    extends StandardParameters {
    /**
     * Required. The name of the contact to delete. Format: organizations/{organization_id\}/contacts/{contact_id\}, folders/{folder_id\}/contacts/{contact_id\} or projects/{project_id\}/contacts/{contact_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Folders$Contacts$Get
    extends StandardParameters {
    /**
     * Required. The name of the contact to retrieve. Format: organizations/{organization_id\}/contacts/{contact_id\}, folders/{folder_id\}/contacts/{contact_id\} or projects/{project_id\}/contacts/{contact_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Folders$Contacts$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of `next_page_token` in the response indicates that more results might be available. If not specified, the default page_size is 100.
     */
    pageSize?: number;
    /**
     * Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters should be identical to those in the previous call.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name. Format: organizations/{organization_id\}, folders/{folder_id\} or projects/{project_id\}
     */
    parent?: string;
  }
  export interface Params$Resource$Folders$Contacts$Patch
    extends StandardParameters {
    /**
     * Output only. The identifier for the contact. Format: {resource_type\}/{resource_id\}/contacts/{contact_id\}
     */
    name?: string;
    /**
     * Optional. The update mask applied to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudEssentialcontactsV1Contact;
  }
  export interface Params$Resource$Folders$Contacts$Sendtestmessage
    extends StandardParameters {
    /**
     * Required. The name of the resource to send the test message for. All contacts must either be set directly on this resource or inherited from another resource that is an ancestor of this one. Format: organizations/{organization_id\}, folders/{folder_id\} or projects/{project_id\}
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudEssentialcontactsV1SendTestMessageRequest;
  }

  export class Resource$Organizations {
    context: APIRequestContext;
    contacts: Resource$Organizations$Contacts;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.contacts = new Resource$Organizations$Contacts(this.context);
    }
  }

  export class Resource$Organizations$Contacts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists all contacts for the resource that are subscribed to the specified notification categories, including contacts inherited from any parent resources.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/essentialcontacts.googleapis.com
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
     * const essentialcontacts = google.essentialcontacts('v1');
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
     *   const res = await essentialcontacts.organizations.contacts.compute({
     *     // The categories of notifications to compute contacts for. If ALL is included in this list, contacts subscribed to any notification category will be returned.
     *     notificationCategories: 'placeholder-value',
     *     // Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of `next_page_token` in the response indicates that more results might be available. If not specified, the default page_size is 100.
     *     pageSize: 'placeholder-value',
     *     // Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters should be identical to those in the previous call.
     *     pageToken: 'placeholder-value',
     *     // Required. The name of the resource to compute contacts for. Format: organizations/{organization_id\}, folders/{folder_id\} or projects/{project_id\}
     *     parent: 'organizations/my-organization',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contacts": [],
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
    compute(
      params: Params$Resource$Organizations$Contacts$Compute,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    compute(
      params?: Params$Resource$Organizations$Contacts$Compute,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudEssentialcontactsV1ComputeContactsResponse>
    >;
    compute(
      params: Params$Resource$Organizations$Contacts$Compute,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    compute(
      params: Params$Resource$Organizations$Contacts$Compute,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1ComputeContactsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1ComputeContactsResponse>
    ): void;
    compute(
      params: Params$Resource$Organizations$Contacts$Compute,
      callback: BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1ComputeContactsResponse>
    ): void;
    compute(
      callback: BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1ComputeContactsResponse>
    ): void;
    compute(
      paramsOrCallback?:
        | Params$Resource$Organizations$Contacts$Compute
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1ComputeContactsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1ComputeContactsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1ComputeContactsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudEssentialcontactsV1ComputeContactsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Contacts$Compute;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Contacts$Compute;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://essentialcontacts.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/contacts:compute').replace(
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
        createAPIRequest<Schema$GoogleCloudEssentialcontactsV1ComputeContactsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudEssentialcontactsV1ComputeContactsResponse>(
          parameters
        );
      }
    }

    /**
     * Adds a new contact for a resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/essentialcontacts.googleapis.com
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
     * const essentialcontacts = google.essentialcontacts('v1');
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
     *   const res = await essentialcontacts.organizations.contacts.create({
     *     // Required. The resource to save this contact for. Format: organizations/{organization_id\}, folders/{folder_id\} or projects/{project_id\}
     *     parent: 'organizations/my-organization',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "email": "my_email",
     *       //   "languageTag": "my_languageTag",
     *       //   "name": "my_name",
     *       //   "notificationCategorySubscriptions": [],
     *       //   "validateTime": "my_validateTime",
     *       //   "validationState": "my_validationState"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "email": "my_email",
     *   //   "languageTag": "my_languageTag",
     *   //   "name": "my_name",
     *   //   "notificationCategorySubscriptions": [],
     *   //   "validateTime": "my_validateTime",
     *   //   "validationState": "my_validationState"
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
      params: Params$Resource$Organizations$Contacts$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Organizations$Contacts$Create,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudEssentialcontactsV1Contact>
    >;
    create(
      params: Params$Resource$Organizations$Contacts$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Organizations$Contacts$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>,
      callback: BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
    ): void;
    create(
      params: Params$Resource$Organizations$Contacts$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Organizations$Contacts$Create
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudEssentialcontactsV1Contact>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Contacts$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Contacts$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://essentialcontacts.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/contacts').replace(
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
        createAPIRequest<Schema$GoogleCloudEssentialcontactsV1Contact>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudEssentialcontactsV1Contact>(
          parameters
        );
      }
    }

    /**
     * Deletes a contact.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/essentialcontacts.googleapis.com
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
     * const essentialcontacts = google.essentialcontacts('v1');
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
     *   const res = await essentialcontacts.organizations.contacts.delete({
     *     // Required. The name of the contact to delete. Format: organizations/{organization_id\}/contacts/{contact_id\}, folders/{folder_id\}/contacts/{contact_id\} or projects/{project_id\}/contacts/{contact_id\}
     *     name: 'organizations/my-organization/contacts/my-contact',
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
      params: Params$Resource$Organizations$Contacts$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Organizations$Contacts$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>;
    delete(
      params: Params$Resource$Organizations$Contacts$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Organizations$Contacts$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Organizations$Contacts$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Organizations$Contacts$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Contacts$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Contacts$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://essentialcontacts.googleapis.com/';
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets a single contact.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/essentialcontacts.googleapis.com
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
     * const essentialcontacts = google.essentialcontacts('v1');
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
     *   const res = await essentialcontacts.organizations.contacts.get({
     *     // Required. The name of the contact to retrieve. Format: organizations/{organization_id\}/contacts/{contact_id\}, folders/{folder_id\}/contacts/{contact_id\} or projects/{project_id\}/contacts/{contact_id\}
     *     name: 'organizations/my-organization/contacts/my-contact',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "email": "my_email",
     *   //   "languageTag": "my_languageTag",
     *   //   "name": "my_name",
     *   //   "notificationCategorySubscriptions": [],
     *   //   "validateTime": "my_validateTime",
     *   //   "validationState": "my_validationState"
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
      params: Params$Resource$Organizations$Contacts$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Organizations$Contacts$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudEssentialcontactsV1Contact>
    >;
    get(
      params: Params$Resource$Organizations$Contacts$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Organizations$Contacts$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>,
      callback: BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
    ): void;
    get(
      params: Params$Resource$Organizations$Contacts$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Organizations$Contacts$Get
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudEssentialcontactsV1Contact>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Contacts$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Contacts$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://essentialcontacts.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudEssentialcontactsV1Contact>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudEssentialcontactsV1Contact>(
          parameters
        );
      }
    }

    /**
     * Lists the contacts that have been set on a resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/essentialcontacts.googleapis.com
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
     * const essentialcontacts = google.essentialcontacts('v1');
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
     *   const res = await essentialcontacts.organizations.contacts.list({
     *     // Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of `next_page_token` in the response indicates that more results might be available. If not specified, the default page_size is 100.
     *     pageSize: 'placeholder-value',
     *     // Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters should be identical to those in the previous call.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent resource name. Format: organizations/{organization_id\}, folders/{folder_id\} or projects/{project_id\}
     *     parent: 'organizations/my-organization',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contacts": [],
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
      params: Params$Resource$Organizations$Contacts$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Organizations$Contacts$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudEssentialcontactsV1ListContactsResponse>
    >;
    list(
      params: Params$Resource$Organizations$Contacts$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Contacts$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1ListContactsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1ListContactsResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Contacts$List,
      callback: BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1ListContactsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1ListContactsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Contacts$List
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1ListContactsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1ListContactsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1ListContactsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudEssentialcontactsV1ListContactsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Contacts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Contacts$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://essentialcontacts.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/contacts').replace(
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
        createAPIRequest<Schema$GoogleCloudEssentialcontactsV1ListContactsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudEssentialcontactsV1ListContactsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a contact. Note: A contact's email address cannot be changed.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/essentialcontacts.googleapis.com
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
     * const essentialcontacts = google.essentialcontacts('v1');
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
     *   const res = await essentialcontacts.organizations.contacts.patch({
     *     // Output only. The identifier for the contact. Format: {resource_type\}/{resource_id\}/contacts/{contact_id\}
     *     name: 'organizations/my-organization/contacts/my-contact',
     *     // Optional. The update mask applied to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "email": "my_email",
     *       //   "languageTag": "my_languageTag",
     *       //   "name": "my_name",
     *       //   "notificationCategorySubscriptions": [],
     *       //   "validateTime": "my_validateTime",
     *       //   "validationState": "my_validationState"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "email": "my_email",
     *   //   "languageTag": "my_languageTag",
     *   //   "name": "my_name",
     *   //   "notificationCategorySubscriptions": [],
     *   //   "validateTime": "my_validateTime",
     *   //   "validationState": "my_validationState"
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
      params: Params$Resource$Organizations$Contacts$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Organizations$Contacts$Patch,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudEssentialcontactsV1Contact>
    >;
    patch(
      params: Params$Resource$Organizations$Contacts$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Organizations$Contacts$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>,
      callback: BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
    ): void;
    patch(
      params: Params$Resource$Organizations$Contacts$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Organizations$Contacts$Patch
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudEssentialcontactsV1Contact>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Contacts$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Contacts$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://essentialcontacts.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudEssentialcontactsV1Contact>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudEssentialcontactsV1Contact>(
          parameters
        );
      }
    }

    /**
     * Allows a contact admin to send a test message to contact to verify that it has been configured correctly.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/essentialcontacts.googleapis.com
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
     * const essentialcontacts = google.essentialcontacts('v1');
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
     *   const res = await essentialcontacts.organizations.contacts.sendTestMessage({
     *     // Required. The name of the resource to send the test message for. All contacts must either be set directly on this resource or inherited from another resource that is an ancestor of this one. Format: organizations/{organization_id\}, folders/{folder_id\} or projects/{project_id\}
     *     resource: 'organizations/my-organization',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "contacts": [],
     *       //   "notificationCategory": "my_notificationCategory"
     *       // }
     *     },
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
    sendTestMessage(
      params: Params$Resource$Organizations$Contacts$Sendtestmessage,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    sendTestMessage(
      params?: Params$Resource$Organizations$Contacts$Sendtestmessage,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>;
    sendTestMessage(
      params: Params$Resource$Organizations$Contacts$Sendtestmessage,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    sendTestMessage(
      params: Params$Resource$Organizations$Contacts$Sendtestmessage,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    sendTestMessage(
      params: Params$Resource$Organizations$Contacts$Sendtestmessage,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    sendTestMessage(
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    sendTestMessage(
      paramsOrCallback?:
        | Params$Resource$Organizations$Contacts$Sendtestmessage
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Contacts$Sendtestmessage;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Contacts$Sendtestmessage;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://essentialcontacts.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}/contacts:sendTestMessage').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }
  }

  export interface Params$Resource$Organizations$Contacts$Compute
    extends StandardParameters {
    /**
     * The categories of notifications to compute contacts for. If ALL is included in this list, contacts subscribed to any notification category will be returned.
     */
    notificationCategories?: string[];
    /**
     * Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of `next_page_token` in the response indicates that more results might be available. If not specified, the default page_size is 100.
     */
    pageSize?: number;
    /**
     * Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters should be identical to those in the previous call.
     */
    pageToken?: string;
    /**
     * Required. The name of the resource to compute contacts for. Format: organizations/{organization_id\}, folders/{folder_id\} or projects/{project_id\}
     */
    parent?: string;
  }
  export interface Params$Resource$Organizations$Contacts$Create
    extends StandardParameters {
    /**
     * Required. The resource to save this contact for. Format: organizations/{organization_id\}, folders/{folder_id\} or projects/{project_id\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudEssentialcontactsV1Contact;
  }
  export interface Params$Resource$Organizations$Contacts$Delete
    extends StandardParameters {
    /**
     * Required. The name of the contact to delete. Format: organizations/{organization_id\}/contacts/{contact_id\}, folders/{folder_id\}/contacts/{contact_id\} or projects/{project_id\}/contacts/{contact_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Contacts$Get
    extends StandardParameters {
    /**
     * Required. The name of the contact to retrieve. Format: organizations/{organization_id\}/contacts/{contact_id\}, folders/{folder_id\}/contacts/{contact_id\} or projects/{project_id\}/contacts/{contact_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Contacts$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of `next_page_token` in the response indicates that more results might be available. If not specified, the default page_size is 100.
     */
    pageSize?: number;
    /**
     * Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters should be identical to those in the previous call.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name. Format: organizations/{organization_id\}, folders/{folder_id\} or projects/{project_id\}
     */
    parent?: string;
  }
  export interface Params$Resource$Organizations$Contacts$Patch
    extends StandardParameters {
    /**
     * Output only. The identifier for the contact. Format: {resource_type\}/{resource_id\}/contacts/{contact_id\}
     */
    name?: string;
    /**
     * Optional. The update mask applied to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudEssentialcontactsV1Contact;
  }
  export interface Params$Resource$Organizations$Contacts$Sendtestmessage
    extends StandardParameters {
    /**
     * Required. The name of the resource to send the test message for. All contacts must either be set directly on this resource or inherited from another resource that is an ancestor of this one. Format: organizations/{organization_id\}, folders/{folder_id\} or projects/{project_id\}
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudEssentialcontactsV1SendTestMessageRequest;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    contacts: Resource$Projects$Contacts;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.contacts = new Resource$Projects$Contacts(this.context);
    }
  }

  export class Resource$Projects$Contacts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists all contacts for the resource that are subscribed to the specified notification categories, including contacts inherited from any parent resources.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/essentialcontacts.googleapis.com
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
     * const essentialcontacts = google.essentialcontacts('v1');
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
     *   const res = await essentialcontacts.projects.contacts.compute({
     *     // The categories of notifications to compute contacts for. If ALL is included in this list, contacts subscribed to any notification category will be returned.
     *     notificationCategories: 'placeholder-value',
     *     // Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of `next_page_token` in the response indicates that more results might be available. If not specified, the default page_size is 100.
     *     pageSize: 'placeholder-value',
     *     // Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters should be identical to those in the previous call.
     *     pageToken: 'placeholder-value',
     *     // Required. The name of the resource to compute contacts for. Format: organizations/{organization_id\}, folders/{folder_id\} or projects/{project_id\}
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contacts": [],
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
    compute(
      params: Params$Resource$Projects$Contacts$Compute,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    compute(
      params?: Params$Resource$Projects$Contacts$Compute,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudEssentialcontactsV1ComputeContactsResponse>
    >;
    compute(
      params: Params$Resource$Projects$Contacts$Compute,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    compute(
      params: Params$Resource$Projects$Contacts$Compute,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1ComputeContactsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1ComputeContactsResponse>
    ): void;
    compute(
      params: Params$Resource$Projects$Contacts$Compute,
      callback: BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1ComputeContactsResponse>
    ): void;
    compute(
      callback: BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1ComputeContactsResponse>
    ): void;
    compute(
      paramsOrCallback?:
        | Params$Resource$Projects$Contacts$Compute
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1ComputeContactsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1ComputeContactsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1ComputeContactsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudEssentialcontactsV1ComputeContactsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Contacts$Compute;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Contacts$Compute;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://essentialcontacts.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/contacts:compute').replace(
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
        createAPIRequest<Schema$GoogleCloudEssentialcontactsV1ComputeContactsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudEssentialcontactsV1ComputeContactsResponse>(
          parameters
        );
      }
    }

    /**
     * Adds a new contact for a resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/essentialcontacts.googleapis.com
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
     * const essentialcontacts = google.essentialcontacts('v1');
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
     *   const res = await essentialcontacts.projects.contacts.create({
     *     // Required. The resource to save this contact for. Format: organizations/{organization_id\}, folders/{folder_id\} or projects/{project_id\}
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "email": "my_email",
     *       //   "languageTag": "my_languageTag",
     *       //   "name": "my_name",
     *       //   "notificationCategorySubscriptions": [],
     *       //   "validateTime": "my_validateTime",
     *       //   "validationState": "my_validationState"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "email": "my_email",
     *   //   "languageTag": "my_languageTag",
     *   //   "name": "my_name",
     *   //   "notificationCategorySubscriptions": [],
     *   //   "validateTime": "my_validateTime",
     *   //   "validationState": "my_validationState"
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
      params: Params$Resource$Projects$Contacts$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Contacts$Create,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudEssentialcontactsV1Contact>
    >;
    create(
      params: Params$Resource$Projects$Contacts$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Contacts$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>,
      callback: BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
    ): void;
    create(
      params: Params$Resource$Projects$Contacts$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Contacts$Create
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudEssentialcontactsV1Contact>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Contacts$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Contacts$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://essentialcontacts.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/contacts').replace(
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
        createAPIRequest<Schema$GoogleCloudEssentialcontactsV1Contact>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudEssentialcontactsV1Contact>(
          parameters
        );
      }
    }

    /**
     * Deletes a contact.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/essentialcontacts.googleapis.com
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
     * const essentialcontacts = google.essentialcontacts('v1');
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
     *   const res = await essentialcontacts.projects.contacts.delete({
     *     // Required. The name of the contact to delete. Format: organizations/{organization_id\}/contacts/{contact_id\}, folders/{folder_id\}/contacts/{contact_id\} or projects/{project_id\}/contacts/{contact_id\}
     *     name: 'projects/my-project/contacts/my-contact',
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
      params: Params$Resource$Projects$Contacts$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Contacts$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>;
    delete(
      params: Params$Resource$Projects$Contacts$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Contacts$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Contacts$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Contacts$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Contacts$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Contacts$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://essentialcontacts.googleapis.com/';
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets a single contact.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/essentialcontacts.googleapis.com
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
     * const essentialcontacts = google.essentialcontacts('v1');
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
     *   const res = await essentialcontacts.projects.contacts.get({
     *     // Required. The name of the contact to retrieve. Format: organizations/{organization_id\}/contacts/{contact_id\}, folders/{folder_id\}/contacts/{contact_id\} or projects/{project_id\}/contacts/{contact_id\}
     *     name: 'projects/my-project/contacts/my-contact',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "email": "my_email",
     *   //   "languageTag": "my_languageTag",
     *   //   "name": "my_name",
     *   //   "notificationCategorySubscriptions": [],
     *   //   "validateTime": "my_validateTime",
     *   //   "validationState": "my_validationState"
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
      params: Params$Resource$Projects$Contacts$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Contacts$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudEssentialcontactsV1Contact>
    >;
    get(
      params: Params$Resource$Projects$Contacts$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Contacts$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>,
      callback: BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
    ): void;
    get(
      params: Params$Resource$Projects$Contacts$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Contacts$Get
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudEssentialcontactsV1Contact>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Contacts$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Contacts$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://essentialcontacts.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudEssentialcontactsV1Contact>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudEssentialcontactsV1Contact>(
          parameters
        );
      }
    }

    /**
     * Lists the contacts that have been set on a resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/essentialcontacts.googleapis.com
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
     * const essentialcontacts = google.essentialcontacts('v1');
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
     *   const res = await essentialcontacts.projects.contacts.list({
     *     // Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of `next_page_token` in the response indicates that more results might be available. If not specified, the default page_size is 100.
     *     pageSize: 'placeholder-value',
     *     // Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters should be identical to those in the previous call.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent resource name. Format: organizations/{organization_id\}, folders/{folder_id\} or projects/{project_id\}
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contacts": [],
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
      params: Params$Resource$Projects$Contacts$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Contacts$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudEssentialcontactsV1ListContactsResponse>
    >;
    list(
      params: Params$Resource$Projects$Contacts$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Contacts$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1ListContactsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1ListContactsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Contacts$List,
      callback: BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1ListContactsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1ListContactsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Contacts$List
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1ListContactsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1ListContactsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1ListContactsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudEssentialcontactsV1ListContactsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Contacts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Contacts$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://essentialcontacts.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/contacts').replace(
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
        createAPIRequest<Schema$GoogleCloudEssentialcontactsV1ListContactsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudEssentialcontactsV1ListContactsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a contact. Note: A contact's email address cannot be changed.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/essentialcontacts.googleapis.com
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
     * const essentialcontacts = google.essentialcontacts('v1');
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
     *   const res = await essentialcontacts.projects.contacts.patch({
     *     // Output only. The identifier for the contact. Format: {resource_type\}/{resource_id\}/contacts/{contact_id\}
     *     name: 'projects/my-project/contacts/my-contact',
     *     // Optional. The update mask applied to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "email": "my_email",
     *       //   "languageTag": "my_languageTag",
     *       //   "name": "my_name",
     *       //   "notificationCategorySubscriptions": [],
     *       //   "validateTime": "my_validateTime",
     *       //   "validationState": "my_validationState"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "email": "my_email",
     *   //   "languageTag": "my_languageTag",
     *   //   "name": "my_name",
     *   //   "notificationCategorySubscriptions": [],
     *   //   "validateTime": "my_validateTime",
     *   //   "validationState": "my_validationState"
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
      params: Params$Resource$Projects$Contacts$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Contacts$Patch,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudEssentialcontactsV1Contact>
    >;
    patch(
      params: Params$Resource$Projects$Contacts$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Contacts$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>,
      callback: BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
    ): void;
    patch(
      params: Params$Resource$Projects$Contacts$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Contacts$Patch
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudEssentialcontactsV1Contact>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudEssentialcontactsV1Contact>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Contacts$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Contacts$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://essentialcontacts.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudEssentialcontactsV1Contact>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudEssentialcontactsV1Contact>(
          parameters
        );
      }
    }

    /**
     * Allows a contact admin to send a test message to contact to verify that it has been configured correctly.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/essentialcontacts.googleapis.com
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
     * const essentialcontacts = google.essentialcontacts('v1');
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
     *   const res = await essentialcontacts.projects.contacts.sendTestMessage({
     *     // Required. The name of the resource to send the test message for. All contacts must either be set directly on this resource or inherited from another resource that is an ancestor of this one. Format: organizations/{organization_id\}, folders/{folder_id\} or projects/{project_id\}
     *     resource: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "contacts": [],
     *       //   "notificationCategory": "my_notificationCategory"
     *       // }
     *     },
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
    sendTestMessage(
      params: Params$Resource$Projects$Contacts$Sendtestmessage,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    sendTestMessage(
      params?: Params$Resource$Projects$Contacts$Sendtestmessage,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>;
    sendTestMessage(
      params: Params$Resource$Projects$Contacts$Sendtestmessage,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    sendTestMessage(
      params: Params$Resource$Projects$Contacts$Sendtestmessage,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    sendTestMessage(
      params: Params$Resource$Projects$Contacts$Sendtestmessage,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    sendTestMessage(
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    sendTestMessage(
      paramsOrCallback?:
        | Params$Resource$Projects$Contacts$Sendtestmessage
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Contacts$Sendtestmessage;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Contacts$Sendtestmessage;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://essentialcontacts.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}/contacts:sendTestMessage').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Contacts$Compute
    extends StandardParameters {
    /**
     * The categories of notifications to compute contacts for. If ALL is included in this list, contacts subscribed to any notification category will be returned.
     */
    notificationCategories?: string[];
    /**
     * Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of `next_page_token` in the response indicates that more results might be available. If not specified, the default page_size is 100.
     */
    pageSize?: number;
    /**
     * Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters should be identical to those in the previous call.
     */
    pageToken?: string;
    /**
     * Required. The name of the resource to compute contacts for. Format: organizations/{organization_id\}, folders/{folder_id\} or projects/{project_id\}
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Contacts$Create
    extends StandardParameters {
    /**
     * Required. The resource to save this contact for. Format: organizations/{organization_id\}, folders/{folder_id\} or projects/{project_id\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudEssentialcontactsV1Contact;
  }
  export interface Params$Resource$Projects$Contacts$Delete
    extends StandardParameters {
    /**
     * Required. The name of the contact to delete. Format: organizations/{organization_id\}/contacts/{contact_id\}, folders/{folder_id\}/contacts/{contact_id\} or projects/{project_id\}/contacts/{contact_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Contacts$Get
    extends StandardParameters {
    /**
     * Required. The name of the contact to retrieve. Format: organizations/{organization_id\}/contacts/{contact_id\}, folders/{folder_id\}/contacts/{contact_id\} or projects/{project_id\}/contacts/{contact_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Contacts$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of `next_page_token` in the response indicates that more results might be available. If not specified, the default page_size is 100.
     */
    pageSize?: number;
    /**
     * Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters should be identical to those in the previous call.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name. Format: organizations/{organization_id\}, folders/{folder_id\} or projects/{project_id\}
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Contacts$Patch
    extends StandardParameters {
    /**
     * Output only. The identifier for the contact. Format: {resource_type\}/{resource_id\}/contacts/{contact_id\}
     */
    name?: string;
    /**
     * Optional. The update mask applied to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudEssentialcontactsV1Contact;
  }
  export interface Params$Resource$Projects$Contacts$Sendtestmessage
    extends StandardParameters {
    /**
     * Required. The name of the resource to send the test message for. All contacts must either be set directly on this resource or inherited from another resource that is an ancestor of this one. Format: organizations/{organization_id\}, folders/{folder_id\} or projects/{project_id\}
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudEssentialcontactsV1SendTestMessageRequest;
  }
}
