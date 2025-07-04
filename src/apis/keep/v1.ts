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

export namespace keep_v1 {
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
   * Google Keep API
   *
   * The Google Keep API is used in an enterprise environment to manage Google Keep content and resolve issues identified by cloud security software.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const keep = google.keep('v1');
   * ```
   */
  export class Keep {
    context: APIRequestContext;
    media: Resource$Media;
    notes: Resource$Notes;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.media = new Resource$Media(this.context);
      this.notes = new Resource$Notes(this.context);
    }
  }

  /**
   * An attachment to a note.
   */
  export interface Schema$Attachment {
    /**
     * The MIME types (IANA media types) in which the attachment is available.
     */
    mimeType?: string[] | null;
    /**
     * The resource name;
     */
    name?: string | null;
  }
  /**
   * The request to add one or more permissions on the note. Currently, only the `WRITER` role may be specified. If adding a permission fails, then the entire request fails and no changes are made.
   */
  export interface Schema$BatchCreatePermissionsRequest {
    /**
     * The request message specifying the resources to create.
     */
    requests?: Schema$CreatePermissionRequest[];
  }
  /**
   * The response for creating permissions on a note.
   */
  export interface Schema$BatchCreatePermissionsResponse {
    /**
     * Permissions created.
     */
    permissions?: Schema$Permission[];
  }
  /**
   * The request to remove one or more permissions from a note. A permission with the `OWNER` role can't be removed. If removing a permission fails, then the entire request fails and no changes are made. Returns a 400 bad request error if a specified permission does not exist on the note.
   */
  export interface Schema$BatchDeletePermissionsRequest {
    /**
     * Required. The names of the permissions to delete. Format: `notes/{note\}/permissions/{permission\}`
     */
    names?: string[] | null;
  }
  /**
   * The request to add a single permission on the note.
   */
  export interface Schema$CreatePermissionRequest {
    /**
     * Required. The parent note where this permission will be created. Format: `notes/{note\}`
     */
    parent?: string | null;
    /**
     * Required. The permission to create. One of Permission.email, User.email or Group.email must be supplied.
     */
    permission?: Schema$Permission;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Describes a single Google Family.
   */
  export interface Schema$Family {}
  /**
   * Describes a single Group.
   */
  export interface Schema$Group {
    /**
     * The group email.
     */
    email?: string | null;
  }
  /**
   * The list of items for a single list note.
   */
  export interface Schema$ListContent {
    /**
     * The items in the list. The number of items must be less than 1,000.
     */
    listItems?: Schema$ListItem[];
  }
  /**
   * A single list item in a note's list.
   */
  export interface Schema$ListItem {
    /**
     * Whether this item has been checked off or not.
     */
    checked?: boolean | null;
    /**
     * If set, list of list items nested under this list item. Only one level of nesting is allowed.
     */
    childListItems?: Schema$ListItem[];
    /**
     * The text of this item. Length must be less than 1,000 characters.
     */
    text?: Schema$TextContent;
  }
  /**
   * The response when listing a page of notes.
   */
  export interface Schema$ListNotesResponse {
    /**
     * Next page's `page_token` field.
     */
    nextPageToken?: string | null;
    /**
     * A page of notes.
     */
    notes?: Schema$Note[];
  }
  /**
   * A single note.
   */
  export interface Schema$Note {
    /**
     * Output only. The attachments attached to this note.
     */
    attachments?: Schema$Attachment[];
    /**
     * The body of the note.
     */
    body?: Schema$Section;
    /**
     * Output only. When this note was created.
     */
    createTime?: string | null;
    /**
     * Output only. The resource name of this note. See general note on identifiers in KeepService.
     */
    name?: string | null;
    /**
     * Output only. The list of permissions set on the note. Contains at least one entry for the note owner.
     */
    permissions?: Schema$Permission[];
    /**
     * The title of the note. Length must be less than 1,000 characters.
     */
    title?: string | null;
    /**
     * Output only. `true` if this note has been trashed. If trashed, the note is eventually deleted.
     */
    trashed?: boolean | null;
    /**
     * Output only. When this note was trashed. If `trashed`, the note is eventually deleted. If the note is not trashed, this field is not set (and the trashed field is `false`).
     */
    trashTime?: string | null;
    /**
     * Output only. When this note was last modified.
     */
    updateTime?: string | null;
  }
  /**
   * A single permission on the note. Associates a `member` with a `role`.
   */
  export interface Schema$Permission {
    /**
     * Output only. Whether this member has been deleted. If the member is recovered, this value is set to false and the recovered member retains the role on the note.
     */
    deleted?: boolean | null;
    /**
     * The email associated with the member. If set on create, the `email` field in the `User` or `Group` message must either be empty or match this field. On read, may be unset if the member does not have an associated email.
     */
    email?: string | null;
    /**
     * Output only. The Google Family to which this role applies.
     */
    family?: Schema$Family;
    /**
     * Output only. The group to which this role applies.
     */
    group?: Schema$Group;
    /**
     * Output only. The resource name.
     */
    name?: string | null;
    /**
     * The role granted by this permission. The role determines the entity’s ability to read, write, and share notes.
     */
    role?: string | null;
    /**
     * Output only. The user to whom this role applies.
     */
    user?: Schema$User;
  }
  /**
   * The content of the note.
   */
  export interface Schema$Section {
    /**
     * Used if this section's content is a list.
     */
    list?: Schema$ListContent;
    /**
     * Used if this section's content is a block of text. The length of the text content must be less than 20,000 characters.
     */
    text?: Schema$TextContent;
  }
  /**
   * The block of text for a single text section or list item.
   */
  export interface Schema$TextContent {
    /**
     * The text of the note. The limits on this vary with the specific field using this type.
     */
    text?: string | null;
  }
  /**
   * Describes a single user.
   */
  export interface Schema$User {
    /**
     * The user's email.
     */
    email?: string | null;
  }

  export class Resource$Media {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets an attachment. To download attachment media via REST requires the alt=media query parameter. Returns a 400 bad request error if attachment media is not available in the requested MIME type.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/keep.googleapis.com
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
     * const keep = google.keep('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/keep',
     *       'https://www.googleapis.com/auth/keep.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await keep.media.download({
     *     // The IANA MIME type format requested. The requested MIME type must be one specified in the attachment.mime_type. Required when downloading attachment media and ignored otherwise.
     *     mimeType: 'placeholder-value',
     *     // Required. The name of the attachment.
     *     name: 'notes/my-note/attachments/my-attachment',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "mimeType": [],
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
    download(
      params: Params$Resource$Media$Download,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    download(
      params?: Params$Resource$Media$Download,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Attachment>>;
    download(
      params: Params$Resource$Media$Download,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    download(
      params: Params$Resource$Media$Download,
      options: MethodOptions | BodyResponseCallback<Schema$Attachment>,
      callback: BodyResponseCallback<Schema$Attachment>
    ): void;
    download(
      params: Params$Resource$Media$Download,
      callback: BodyResponseCallback<Schema$Attachment>
    ): void;
    download(callback: BodyResponseCallback<Schema$Attachment>): void;
    download(
      paramsOrCallback?:
        | Params$Resource$Media$Download
        | BodyResponseCallback<Schema$Attachment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Attachment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Attachment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Attachment>>
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

      const rootUrl = options.rootUrl || 'https://keep.googleapis.com/';
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
        createAPIRequest<Schema$Attachment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Attachment>(parameters);
      }
    }
  }

  export interface Params$Resource$Media$Download extends StandardParameters {
    /**
     * The IANA MIME type format requested. The requested MIME type must be one specified in the attachment.mime_type. Required when downloading attachment media and ignored otherwise.
     */
    mimeType?: string;
    /**
     * Required. The name of the attachment.
     */
    name?: string;
  }

  export class Resource$Notes {
    context: APIRequestContext;
    permissions: Resource$Notes$Permissions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.permissions = new Resource$Notes$Permissions(this.context);
    }

    /**
     * Creates a new note.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/keep.googleapis.com
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
     * const keep = google.keep('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/keep'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await keep.notes.create({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "attachments": [],
     *       //   "body": {},
     *       //   "createTime": "my_createTime",
     *       //   "name": "my_name",
     *       //   "permissions": [],
     *       //   "title": "my_title",
     *       //   "trashTime": "my_trashTime",
     *       //   "trashed": false,
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attachments": [],
     *   //   "body": {},
     *   //   "createTime": "my_createTime",
     *   //   "name": "my_name",
     *   //   "permissions": [],
     *   //   "title": "my_title",
     *   //   "trashTime": "my_trashTime",
     *   //   "trashed": false,
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
    create(
      params: Params$Resource$Notes$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Notes$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Note>>;
    create(
      params: Params$Resource$Notes$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Notes$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Note>,
      callback: BodyResponseCallback<Schema$Note>
    ): void;
    create(
      params: Params$Resource$Notes$Create,
      callback: BodyResponseCallback<Schema$Note>
    ): void;
    create(callback: BodyResponseCallback<Schema$Note>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Notes$Create
        | BodyResponseCallback<Schema$Note>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Note>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Note>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Note>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Notes$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Notes$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://keep.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/notes').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Note>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Note>(parameters);
      }
    }

    /**
     * Deletes a note. Caller must have the `OWNER` role on the note to delete. Deleting a note removes the resource immediately and cannot be undone. Any collaborators will lose access to the note.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/keep.googleapis.com
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
     * const keep = google.keep('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/keep'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await keep.notes.delete({
     *     // Required. Name of the note to delete.
     *     name: 'notes/my-note',
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
      params: Params$Resource$Notes$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Notes$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Notes$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Notes$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Notes$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Notes$Delete
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
      let params = (paramsOrCallback || {}) as Params$Resource$Notes$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Notes$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://keep.googleapis.com/';
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Gets a note.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/keep.googleapis.com
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
     * const keep = google.keep('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/keep',
     *       'https://www.googleapis.com/auth/keep.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await keep.notes.get({
     *     // Required. Name of the resource.
     *     name: 'notes/my-note',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attachments": [],
     *   //   "body": {},
     *   //   "createTime": "my_createTime",
     *   //   "name": "my_name",
     *   //   "permissions": [],
     *   //   "title": "my_title",
     *   //   "trashTime": "my_trashTime",
     *   //   "trashed": false,
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
    get(
      params: Params$Resource$Notes$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Notes$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Note>>;
    get(
      params: Params$Resource$Notes$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Notes$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Note>,
      callback: BodyResponseCallback<Schema$Note>
    ): void;
    get(
      params: Params$Resource$Notes$Get,
      callback: BodyResponseCallback<Schema$Note>
    ): void;
    get(callback: BodyResponseCallback<Schema$Note>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Notes$Get
        | BodyResponseCallback<Schema$Note>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Note>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Note>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Note>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Notes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Notes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://keep.googleapis.com/';
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
        createAPIRequest<Schema$Note>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Note>(parameters);
      }
    }

    /**
     * Lists notes. Every list call returns a page of results with `page_size` as the upper bound of returned items. A `page_size` of zero allows the server to choose the upper bound. The ListNotesResponse contains at most `page_size` entries. If there are more things left to list, it provides a `next_page_token` value. (Page tokens are opaque values.) To get the next page of results, copy the result's `next_page_token` into the next request's `page_token`. Repeat until the `next_page_token` returned with a page of results is empty. ListNotes return consistent results in the face of concurrent changes, or signals that it cannot with an ABORTED error.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/keep.googleapis.com
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
     * const keep = google.keep('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/keep',
     *       'https://www.googleapis.com/auth/keep.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await keep.notes.list({
     *     // Filter for list results. If no filter is supplied, the `trashed` filter is applied by default. Valid fields to filter by are: `create_time`, `update_time`, `trash_time`, and `trashed`. Filter syntax follows the [Google AIP filtering spec](https://aip.dev/160).
     *     filter: 'placeholder-value',
     *     // The maximum number of results to return.
     *     pageSize: 'placeholder-value',
     *     // The previous page's `next_page_token` field.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "notes": []
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
      params: Params$Resource$Notes$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Notes$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListNotesResponse>>;
    list(
      params: Params$Resource$Notes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Notes$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListNotesResponse>,
      callback: BodyResponseCallback<Schema$ListNotesResponse>
    ): void;
    list(
      params: Params$Resource$Notes$List,
      callback: BodyResponseCallback<Schema$ListNotesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListNotesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Notes$List
        | BodyResponseCallback<Schema$ListNotesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListNotesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListNotesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListNotesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Notes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Notes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://keep.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/notes').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListNotesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListNotesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Notes$Create extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$Note;
  }
  export interface Params$Resource$Notes$Delete extends StandardParameters {
    /**
     * Required. Name of the note to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Notes$Get extends StandardParameters {
    /**
     * Required. Name of the resource.
     */
    name?: string;
  }
  export interface Params$Resource$Notes$List extends StandardParameters {
    /**
     * Filter for list results. If no filter is supplied, the `trashed` filter is applied by default. Valid fields to filter by are: `create_time`, `update_time`, `trash_time`, and `trashed`. Filter syntax follows the [Google AIP filtering spec](https://aip.dev/160).
     */
    filter?: string;
    /**
     * The maximum number of results to return.
     */
    pageSize?: number;
    /**
     * The previous page's `next_page_token` field.
     */
    pageToken?: string;
  }

  export class Resource$Notes$Permissions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates one or more permissions on the note. Only permissions with the `WRITER` role may be created. If adding any permission fails, then the entire request fails and no changes are made.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/keep.googleapis.com
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
     * const keep = google.keep('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/keep'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await keep.notes.permissions.batchCreate({
     *     // The parent resource shared by all Permissions being created. Format: `notes/{note\}` If this is set, the parent field in the CreatePermission messages must either be empty or match this field.
     *     parent: 'notes/my-note',
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
     *   //   "permissions": []
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
      params: Params$Resource$Notes$Permissions$Batchcreate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchCreate(
      params?: Params$Resource$Notes$Permissions$Batchcreate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$BatchCreatePermissionsResponse>>;
    batchCreate(
      params: Params$Resource$Notes$Permissions$Batchcreate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchCreate(
      params: Params$Resource$Notes$Permissions$Batchcreate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchCreatePermissionsResponse>,
      callback: BodyResponseCallback<Schema$BatchCreatePermissionsResponse>
    ): void;
    batchCreate(
      params: Params$Resource$Notes$Permissions$Batchcreate,
      callback: BodyResponseCallback<Schema$BatchCreatePermissionsResponse>
    ): void;
    batchCreate(
      callback: BodyResponseCallback<Schema$BatchCreatePermissionsResponse>
    ): void;
    batchCreate(
      paramsOrCallback?:
        | Params$Resource$Notes$Permissions$Batchcreate
        | BodyResponseCallback<Schema$BatchCreatePermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchCreatePermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchCreatePermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$BatchCreatePermissionsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Notes$Permissions$Batchcreate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Notes$Permissions$Batchcreate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://keep.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/permissions:batchCreate').replace(
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
        createAPIRequest<Schema$BatchCreatePermissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BatchCreatePermissionsResponse>(
          parameters
        );
      }
    }

    /**
     * Deletes one or more permissions on the note. The specified entities will immediately lose access. A permission with the `OWNER` role can't be removed. If removing a permission fails, then the entire request fails and no changes are made. Returns a 400 bad request error if a specified permission does not exist on the note.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/keep.googleapis.com
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
     * const keep = google.keep('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/keep'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await keep.notes.permissions.batchDelete({
     *     // The parent resource shared by all permissions being deleted. Format: `notes/{note\}` If this is set, the parent of all of the permissions specified in the DeletePermissionRequest messages must match this field.
     *     parent: 'notes/my-note',
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
    batchDelete(
      params: Params$Resource$Notes$Permissions$Batchdelete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchDelete(
      params?: Params$Resource$Notes$Permissions$Batchdelete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    batchDelete(
      params: Params$Resource$Notes$Permissions$Batchdelete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchDelete(
      params: Params$Resource$Notes$Permissions$Batchdelete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    batchDelete(
      params: Params$Resource$Notes$Permissions$Batchdelete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    batchDelete(callback: BodyResponseCallback<Schema$Empty>): void;
    batchDelete(
      paramsOrCallback?:
        | Params$Resource$Notes$Permissions$Batchdelete
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
        {}) as Params$Resource$Notes$Permissions$Batchdelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Notes$Permissions$Batchdelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://keep.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/permissions:batchDelete').replace(
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }
  }

  export interface Params$Resource$Notes$Permissions$Batchcreate
    extends StandardParameters {
    /**
     * The parent resource shared by all Permissions being created. Format: `notes/{note\}` If this is set, the parent field in the CreatePermission messages must either be empty or match this field.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchCreatePermissionsRequest;
  }
  export interface Params$Resource$Notes$Permissions$Batchdelete
    extends StandardParameters {
    /**
     * The parent resource shared by all permissions being deleted. Format: `notes/{note\}` If this is set, the parent of all of the permissions specified in the DeletePermissionRequest messages must match this field.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchDeletePermissionsRequest;
  }
}
