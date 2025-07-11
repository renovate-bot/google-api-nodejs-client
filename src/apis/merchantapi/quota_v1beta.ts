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

export namespace merchantapi_quota_v1beta {
  export interface Options extends GlobalOptions {
    version: 'quota_v1beta';
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
   * Merchant API
   *
   * Programmatically manage your Merchant Center Accounts.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const merchantapi = google.merchantapi('quota_v1beta');
   * ```
   */
  export class Merchantapi {
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
   * Response message for the ListMethodGroups method.
   */
  export interface Schema$ListQuotaGroupsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The methods, current quota usage and limits per each group. The quota is shared between all methods in the group. The groups are sorted in descending order based on quota_usage.
     */
    quotaGroups?: Schema$QuotaGroup[];
  }
  /**
   * The method details per method in the Merchant API.
   */
  export interface Schema$MethodDetails {
    /**
     * Output only. The name of the method for example `products.list`.
     */
    method?: string | null;
    /**
     * Output only. The path for the method such as `products/v1/productInputs.insert`
     */
    path?: string | null;
    /**
     * Output only. The sub-API that the method belongs to.
     */
    subapi?: string | null;
    /**
     * Output only. The API version that the method belongs to.
     */
    version?: string | null;
  }
  /**
   * The change that happened to the product including old value, new value, country code as the region code and reporting context.
   */
  export interface Schema$ProductChange {
    /**
     * The new value of the changed resource or attribute. If empty, it means that the product was deleted. Will have one of these values : (`approved`, `pending`, `disapproved`, ``)
     */
    newValue?: string | null;
    /**
     * The old value of the changed resource or attribute. If empty, it means that the product was created. Will have one of these values : (`approved`, `pending`, `disapproved`, ``)
     */
    oldValue?: string | null;
    /**
     * Countries that have the change (if applicable). Represented in the ISO 3166 format.
     */
    regionCode?: string | null;
    /**
     * Reporting contexts that have the change (if applicable). Currently this field supports only (`SHOPPING_ADS`, `LOCAL_INVENTORY_ADS`, `YOUTUBE_SHOPPING`, `YOUTUBE_CHECKOUT`, `YOUTUBE_AFFILIATE`) from the enum value [ReportingContextEnum](/merchant/api/reference/rest/Shared.Types/ReportingContextEnum)
     */
    reportingContext?: string | null;
  }
  /**
   * The message that the merchant will receive to notify about product status change event
   */
  export interface Schema$ProductStatusChangeMessage {
    /**
     * The target account that owns the entity that changed. Format : `accounts/{merchant_id\}`
     */
    account?: string | null;
    /**
     * The attribute in the resource that changed, in this case it will be always `Status`.
     */
    attribute?: string | null;
    /**
     * A message to describe the change that happened to the product
     */
    changes?: Schema$ProductChange[];
    /**
     * The time at which the event was generated. If you want to order the notification messages you receive you should rely on this field not on the order of receiving the notifications.
     */
    eventTime?: string | null;
    /**
     * Optional. The product expiration time. This field will not be set if the notification is sent for a product deletion event.
     */
    expirationTime?: string | null;
    /**
     * The account that manages the merchant's account. can be the same as merchant id if it is standalone account. Format : `accounts/{service_provider_id\}`
     */
    managingAccount?: string | null;
    /**
     * The product name. Format: `accounts/{account\}/products/{product\}`
     */
    resource?: string | null;
    /**
     * The product id.
     */
    resourceId?: string | null;
    /**
     * The resource that changed, in this case it will always be `Product`.
     */
    resourceType?: string | null;
  }
  /**
   * The group information for methods in the Merchant API. The quota is shared between all methods in the group. Even if none of the methods within the group have usage the information for the group is returned.
   */
  export interface Schema$QuotaGroup {
    /**
     * Output only. List of all methods group quota applies to.
     */
    methodDetails?: Schema$MethodDetails[];
    /**
     * Identifier. The resource name of the quota group. Format: accounts/{account\}/quotas/{group\} Note: There is no guarantee on the format of {group\}
     */
    name?: string | null;
    /**
     * Output only. The maximum number of calls allowed per day for the group.
     */
    quotaLimit?: string | null;
    /**
     * Output only. The maximum number of calls allowed per minute for the group.
     */
    quotaMinuteLimit?: string | null;
    /**
     * Output only. The current quota usage, meaning the number of calls already made on a given day to the methods in the group. The daily quota limits reset at at 12:00 PM midday UTC.
     */
    quotaUsage?: string | null;
  }

  export class Resource$Accounts {
    context: APIRequestContext;
    quotas: Resource$Accounts$Quotas;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.quotas = new Resource$Accounts$Quotas(this.context);
    }
  }

  export class Resource$Accounts$Quotas {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists the daily call quota and usage per group for your Merchant Center account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/merchantapi.googleapis.com
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
     * const merchantapi = google.merchantapi('quota_v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await merchantapi.accounts.quotas.list({
     *     // Optional. The maximum number of quotas to return in the response, used for paging. Defaults to 500; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. Token (if provided) to retrieve the subsequent page. All other parameters must match the original call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The merchant account who owns the collection of method quotas Format: accounts/{account\}
     *     parent: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "quotaGroups": []
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
      params: Params$Resource$Accounts$Quotas$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Accounts$Quotas$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListQuotaGroupsResponse>>;
    list(
      params: Params$Resource$Accounts$Quotas$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Quotas$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListQuotaGroupsResponse>,
      callback: BodyResponseCallback<Schema$ListQuotaGroupsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Quotas$List,
      callback: BodyResponseCallback<Schema$ListQuotaGroupsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListQuotaGroupsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Quotas$List
        | BodyResponseCallback<Schema$ListQuotaGroupsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListQuotaGroupsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListQuotaGroupsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListQuotaGroupsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Quotas$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Quotas$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://merchantapi.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/quota/v1beta/{+parent}/quotas').replace(
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
        createAPIRequest<Schema$ListQuotaGroupsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListQuotaGroupsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Quotas$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of quotas to return in the response, used for paging. Defaults to 500; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. Token (if provided) to retrieve the subsequent page. All other parameters must match the original call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The merchant account who owns the collection of method quotas Format: accounts/{account\}
     */
    parent?: string;
  }
}
