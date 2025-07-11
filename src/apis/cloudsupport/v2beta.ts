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

export namespace cloudsupport_v2beta {
  export interface Options extends GlobalOptions {
    version: 'v2beta';
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
   * Google Cloud Support API
   *
   * Manages Google Cloud technical support cases for Customer Care support offerings.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const cloudsupport = google.cloudsupport('v2beta');
   * ```
   */
  export class Cloudsupport {
    context: APIRequestContext;
    caseClassifications: Resource$Caseclassifications;
    cases: Resource$Cases;
    media: Resource$Media;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.caseClassifications = new Resource$Caseclassifications(this.context);
      this.cases = new Resource$Cases(this.context);
      this.media = new Resource$Media(this.context);
    }
  }

  /**
   * An Actor represents an entity that performed an action. For example, an actor could be a user who posted a comment on a support case, a user who uploaded an attachment, or a service account that created a support case.
   */
  export interface Schema$Actor {
    /**
     * The name to display for the actor. If not provided, it is inferred from credentials supplied during case creation. When an email is provided, a display name must also be provided. This will be obfuscated if the user is a Google Support agent.
     */
    displayName?: string | null;
    /**
     * The email address of the actor. If not provided, it is inferred from the credentials supplied during case creation. When a name is provided, an email must also be provided. If the user is a Google Support agent, this is obfuscated. This field is deprecated. Use `username` instead.
     */
    email?: string | null;
    /**
     * Output only. Whether the actor is a Google support actor.
     */
    googleSupport?: boolean | null;
    /**
     * Output only. The username of the actor. It may look like an email or other format provided by the identity provider. If not provided, it is inferred from the credentials supplied. When a name is provided, a username must also be provided. If the user is a Google Support agent, this will not be set.
     */
    username?: string | null;
  }
  /**
   * An Attachment contains metadata about a file that was uploaded to a case - it is NOT a file itself. That being said, the name of an Attachment object can be used to download its accompanying file through the `media.download` endpoint. While attachments can be uploaded in the console at the same time as a comment, they're associated on a "case" level, not a "comment" level.
   */
  export interface Schema$Attachment {
    /**
     * Output only. The time at which the attachment was created.
     */
    createTime?: string | null;
    /**
     * Output only. The user who uploaded the attachment. Note, the name and email will be obfuscated if the attachment was uploaded by Google support.
     */
    creator?: Schema$Actor;
    /**
     * The filename of the attachment (e.g. `"graph.jpg"`).
     */
    filename?: string | null;
    /**
     * Output only. The MIME type of the attachment (e.g. text/plain).
     */
    mimeType?: string | null;
    /**
     * Output only. Identifier. The resource name of the attachment.
     */
    name?: string | null;
    /**
     * Output only. The size of the attachment in bytes.
     */
    sizeBytes?: string | null;
  }
  /**
   * # gdata.* are outside protos with mising documentation
   */
  export interface Schema$Blobstore2Info {
    /**
     * # gdata.* are outside protos with mising documentation
     */
    blobGeneration?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    blobId?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    downloadReadHandle?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    readToken?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    uploadMetadataContainer?: string | null;
  }
  /**
   * A Case is an object that contains the details of a support case. It contains fields for the time it was created, its priority, its classification, and more. Cases can also have comments and attachments that get added over time. A case is parented by a Google Cloud organization or project. Organizations are identified by a number, so the name of a case parented by an organization would look like this: ``` organizations/123/cases/456 ``` Projects have two unique identifiers, an ID and a number, and they look like this: ``` projects/abc/cases/456 ``` ``` projects/123/cases/456 ``` You can use either of them when calling the API. To learn more about project identifiers, see [AIP-2510](https://google.aip.dev/cloud/2510).
   */
  export interface Schema$Case {
    /**
     * The issue classification applicable to this case.
     */
    classification?: Schema$CaseClassification;
    /**
     * A user-supplied email address to send case update notifications for. This should only be used in BYOID flows, where we cannot infer the user's email address directly from their EUCs.
     */
    contactEmail?: string | null;
    /**
     * Output only. The time this case was created.
     */
    createTime?: string | null;
    /**
     * The user who created the case. Note: The name and email will be obfuscated if the case was created by Google Support.
     */
    creator?: Schema$Actor;
    /**
     * A broad description of the issue.
     */
    description?: string | null;
    /**
     * The short summary of the issue reported in this case.
     */
    displayName?: string | null;
    /**
     * Whether the case is currently escalated.
     */
    escalated?: boolean | null;
    /**
     * The language the user has requested to receive support in. This should be a BCP 47 language code (e.g., `"en"`, `"zh-CN"`, `"zh-TW"`, `"ja"`, `"ko"`). If no language or an unsupported language is specified, this field defaults to English (en). Language selection during case creation may affect your available support options. For a list of supported languages and their support working hours, see: https://cloud.google.com/support/docs/language-working-hours
     */
    languageCode?: string | null;
    /**
     * Identifier. The resource name for the case.
     */
    name?: string | null;
    /**
     * The priority of this case.
     */
    priority?: string | null;
    /**
     * REMOVED. The severity of this case. Use priority instead.
     */
    severity?: string | null;
    /**
     * Output only. The current status of the support case.
     */
    state?: string | null;
    /**
     * The email addresses to receive updates on this case.
     */
    subscriberEmailAddresses?: string[] | null;
    /**
     * Whether this case was created for internal API testing and should not be acted on by the support team.
     */
    testCase?: boolean | null;
    /**
     * The timezone of the user who created the support case. It should be in a format IANA recognizes: https://www.iana.org/time-zones. There is no additional validation done by the API.
     */
    timeZone?: string | null;
    /**
     * Output only. The time this case was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * A Case Classification represents the topic that a case is about. It's very important to use accurate classifications, because they're used to route your cases to specialists who can help you. A classification always has an ID that is its unique identifier. A valid ID is required when creating a case.
   */
  export interface Schema$CaseClassification {
    /**
     * A display name for the classification. The display name is not static and can change. To uniquely and consistently identify classifications, use the `CaseClassification.id` field.
     */
    displayName?: string | null;
    /**
     * The unique ID for a classification. Must be specified for case creation. To retrieve valid classification IDs for case creation, use `caseClassifications.search`. Classification IDs returned by `caseClassifications.search` are guaranteed to be valid for at least 6 months. If a given classification is deactiveated, it will immediately stop being returned. After 6 months, `case.create` requests using the classification ID will fail.
     */
    id?: string | null;
    /**
     * The full product the classification corresponds to.
     */
    product?: Schema$Product;
  }
  /**
   * The request message for the CloseCase endpoint.
   */
  export interface Schema$CloseCaseRequest {}
  /**
   * A comment associated with a support case. Case comments are the primary way for Google Support to communicate with a user who has opened a case. When a user responds to Google Support, the user's responses also appear as comments.
   */
  export interface Schema$Comment {
    /**
     * The full comment body. Maximum of 12800 characters.
     */
    body?: string | null;
    /**
     * Output only. The time when the comment was created.
     */
    createTime?: string | null;
    /**
     * Output only. The user or Google Support agent who created the comment.
     */
    creator?: Schema$Actor;
    /**
     * Output only. Identifier. The resource name of the comment.
     */
    name?: string | null;
    /**
     * Output only. DEPRECATED. DO NOT USE. A duplicate of the `body` field. This field is only present for legacy reasons.
     */
    plainTextBody?: string | null;
  }
  /**
   * # gdata.* are outside protos with mising documentation
   */
  export interface Schema$CompositeMedia {
    /**
     * # gdata.* are outside protos with mising documentation
     */
    blobRef?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    blobstore2Info?: Schema$Blobstore2Info;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    cosmoBinaryReference?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    crc32cHash?: number | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    inline?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    length?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    md5Hash?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    objectId?: Schema$ObjectId;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    path?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    referenceType?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    sha1Hash?: string | null;
  }
  /**
   * # gdata.* are outside protos with mising documentation
   */
  export interface Schema$ContentTypeInfo {
    /**
     * # gdata.* are outside protos with mising documentation
     */
    bestGuess?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    fromBytes?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    fromFileName?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    fromHeader?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    fromUrlPath?: string | null;
  }
  /**
   * The request message for the CreateAttachment endpoint.
   */
  export interface Schema$CreateAttachmentRequest {
    /**
     * Required. The attachment to be created.
     */
    attachment?: Schema$Attachment;
  }
  /**
   * # gdata.* are outside protos with mising documentation
   */
  export interface Schema$DiffChecksumsResponse {
    /**
     * # gdata.* are outside protos with mising documentation
     */
    checksumsLocation?: Schema$CompositeMedia;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    chunkSizeBytes?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    objectLocation?: Schema$CompositeMedia;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    objectSizeBytes?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    objectVersion?: string | null;
  }
  /**
   * # gdata.* are outside protos with mising documentation
   */
  export interface Schema$DiffDownloadResponse {
    /**
     * # gdata.* are outside protos with mising documentation
     */
    objectLocation?: Schema$CompositeMedia;
  }
  /**
   * # gdata.* are outside protos with mising documentation
   */
  export interface Schema$DiffUploadRequest {
    /**
     * # gdata.* are outside protos with mising documentation
     */
    checksumsInfo?: Schema$CompositeMedia;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    objectInfo?: Schema$CompositeMedia;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    objectVersion?: string | null;
  }
  /**
   * # gdata.* are outside protos with mising documentation
   */
  export interface Schema$DiffUploadResponse {
    /**
     * # gdata.* are outside protos with mising documentation
     */
    objectVersion?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    originalObject?: Schema$CompositeMedia;
  }
  /**
   * # gdata.* are outside protos with mising documentation
   */
  export interface Schema$DiffVersionResponse {
    /**
     * # gdata.* are outside protos with mising documentation
     */
    objectSizeBytes?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    objectVersion?: string | null;
  }
  /**
   * # gdata.* are outside protos with mising documentation
   */
  export interface Schema$DownloadParameters {
    /**
     * # gdata.* are outside protos with mising documentation
     */
    allowGzipCompression?: boolean | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    ignoreRange?: boolean | null;
  }
  /**
   * An email associated with a support case.
   */
  export interface Schema$EmailMessage {
    /**
     * Output only. The user or Google Support agent that created this email message. This is inferred from the headers on the email message.
     */
    actor?: Schema$Actor;
    /**
     * Output only. The full email message body. A best-effort attempt is made to remove extraneous reply threads.
     */
    bodyContent?: Schema$TextContent;
    /**
     * Output only. Email addresses CCed on the email.
     */
    ccEmailAddresses?: string[] | null;
    /**
     * Output only. Time when this email message object was created.
     */
    createTime?: string | null;
    /**
     * Identifier. Resource name for the email message.
     */
    name?: string | null;
    /**
     * Output only. Email addresses the email was sent to.
     */
    recipientEmailAddresses?: string[] | null;
    /**
     * Output only. Subject of the email.
     */
    subject?: string | null;
  }
  /**
   * The request message for the EscalateCase endpoint.
   */
  export interface Schema$EscalateCaseRequest {
    /**
     * The escalation information to be sent with the escalation request.
     */
    escalation?: Schema$Escalation;
  }
  /**
   * An escalation of a support case.
   */
  export interface Schema$Escalation {
    /**
     * Required. A free text description to accompany the `reason` field above. Provides additional context on why the case is being escalated.
     */
    justification?: string | null;
    /**
     * Required. The reason why the Case is being escalated.
     */
    reason?: string | null;
  }
  /**
   * A feed item associated with a support case.
   */
  export interface Schema$FeedItem {
    /**
     * Output only. An attachment attached to the case.
     */
    attachment?: Schema$Attachment;
    /**
     * Output only. A comment added to the case.
     */
    comment?: Schema$Comment;
    /**
     * Output only. A deleted attachment that used to be associated with the support case.
     */
    deletedAttachment?: Schema$Attachment;
    /**
     * Output only. An email message received in reply to the case.
     */
    emailMessage?: Schema$EmailMessage;
    /**
     * Output only. Time corresponding to the event of this item.
     */
    eventTime?: string | null;
  }
  /**
   * The response message for the ListAttachments endpoint.
   */
  export interface Schema$ListAttachmentsResponse {
    /**
     * The list of attachments associated with a case.
     */
    attachments?: Schema$Attachment[];
    /**
     * A token to retrieve the next page of results. Set this in the `page_token` field of subsequent `cases.attachments.list` requests. If unspecified, there are no more results to retrieve.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response message for the ListCases endpoint.
   */
  export interface Schema$ListCasesResponse {
    /**
     * The list of cases associated with the parent after any filters have been applied.
     */
    cases?: Schema$Case[];
    /**
     * A token to retrieve the next page of results. Set this in the `page_token` field of subsequent `cases.list` requests. If unspecified, there are no more results to retrieve.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response message for the ListComments endpoint.
   */
  export interface Schema$ListCommentsResponse {
    /**
     * List of the comments associated with the case.
     */
    comments?: Schema$Comment[];
    /**
     * A token to retrieve the next page of results. Set this in the `page_token` field of subsequent `cases.comments.list` requests. If unspecified, there are no more results to retrieve.
     */
    nextPageToken?: string | null;
  }
  /**
   * # gdata.* are outside protos with mising documentation
   */
  export interface Schema$Media {
    /**
     * # gdata.* are outside protos with mising documentation
     */
    algorithm?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    bigstoreObjectRef?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    blobRef?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    blobstore2Info?: Schema$Blobstore2Info;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    compositeMedia?: Schema$CompositeMedia[];
    /**
     * # gdata.* are outside protos with mising documentation
     */
    contentType?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    contentTypeInfo?: Schema$ContentTypeInfo;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    cosmoBinaryReference?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    crc32cHash?: number | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    diffChecksumsResponse?: Schema$DiffChecksumsResponse;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    diffDownloadResponse?: Schema$DiffDownloadResponse;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    diffUploadRequest?: Schema$DiffUploadRequest;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    diffUploadResponse?: Schema$DiffUploadResponse;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    diffVersionResponse?: Schema$DiffVersionResponse;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    downloadParameters?: Schema$DownloadParameters;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    filename?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    hash?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    hashVerified?: boolean | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    inline?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    isPotentialRetry?: boolean | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    length?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    md5Hash?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    mediaId?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    objectId?: Schema$ObjectId;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    path?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    referenceType?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    sha1Hash?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    sha256Hash?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    timestamp?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    token?: string | null;
  }
  /**
   * # gdata.* are outside protos with mising documentation
   */
  export interface Schema$ObjectId {
    /**
     * # gdata.* are outside protos with mising documentation
     */
    bucketName?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    generation?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    objectName?: string | null;
  }
  /**
   * The product a case may be associated with.
   */
  export interface Schema$Product {
    /**
     * The product line of the Product.
     */
    productLine?: string | null;
  }
  /**
   * The response message for SearchCaseClassifications endpoint.
   */
  export interface Schema$SearchCaseClassificationsResponse {
    /**
     * The classifications retrieved.
     */
    caseClassifications?: Schema$CaseClassification[];
    /**
     * A token to retrieve the next page of results. Set this in the `page_token` field of subsequent `caseClassifications.list` requests. If unspecified, there are no more results to retrieve.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response message for the SearchCases endpoint.
   */
  export interface Schema$SearchCasesResponse {
    /**
     * The list of cases associated with the parent after any filters have been applied.
     */
    cases?: Schema$Case[];
    /**
     * A token to retrieve the next page of results. Set this in the `page_token` field of subsequent `cases.search` requests. If unspecified, there are no more results to retrieve.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response message for the ShowFeed endpoint.
   */
  export interface Schema$ShowFeedResponse {
    /**
     * The list of feed items associated with the given Case.
     */
    feedItems?: Schema$FeedItem[];
    /**
     * A token to retrieve the next page of results. This should be set in the `page_token` field of subsequent `ShowFeedRequests`. If unspecified, there are no more results to retrieve.
     */
    nextPageToken?: string | null;
  }
  /**
   * Stores text attached to a support object.
   */
  export interface Schema$TextContent {
    /**
     * Content in this field should be rendered and interpreted as-is.
     */
    plainText?: string | null;
  }

  export class Resource$Caseclassifications {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieve valid classifications to use when creating a support case. Classifications are hierarchical. Each classification is a string containing all levels of the hierarchy separated by `" \> "`. For example, `"Technical Issue \> Compute \> Compute Engine"`. Classification IDs returned by this endpoint are valid for at least six months. When a classification is deactivated, this endpoint immediately stops returning it. After six months, `case.create` requests using the classification will fail. EXAMPLES: cURL: ```shell curl \ --header "Authorization: Bearer $(gcloud auth print-access-token)" \ 'https://cloudsupport.googleapis.com/v2/caseClassifications:search?query=display_name:"*Compute%20Engine*"' ``` Python: ```python import googleapiclient.discovery supportApiService = googleapiclient.discovery.build( serviceName="cloudsupport", version="v2", discoveryServiceUrl=f"https://cloudsupport.googleapis.com/$discovery/rest?version=v2", ) request = supportApiService.caseClassifications().search( query='display_name:"*Compute Engine*"' ) print(request.execute()) ```
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsupport.googleapis.com
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
     * const cloudsupport = google.cloudsupport('v2beta');
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
     *   const res = await cloudsupport.caseClassifications.search({
     *     // The maximum number of classifications fetched with each request.
     *     pageSize: 'placeholder-value',
     *     // A token identifying the page of results to return. If unspecified, the first page is retrieved.
     *     pageToken: 'placeholder-value',
     *     // The product line of the Product.
     *     'product.productLine': 'placeholder-value',
     *     // An expression used to filter case classifications. If it's an empty string, then no filtering happens. Otherwise, case classifications will be returned that match the filter.
     *     query: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "caseClassifications": [],
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
    search(
      params: Params$Resource$Caseclassifications$Search,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    search(
      params?: Params$Resource$Caseclassifications$Search,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$SearchCaseClassificationsResponse>
    >;
    search(
      params: Params$Resource$Caseclassifications$Search,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    search(
      params: Params$Resource$Caseclassifications$Search,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SearchCaseClassificationsResponse>,
      callback: BodyResponseCallback<Schema$SearchCaseClassificationsResponse>
    ): void;
    search(
      params: Params$Resource$Caseclassifications$Search,
      callback: BodyResponseCallback<Schema$SearchCaseClassificationsResponse>
    ): void;
    search(
      callback: BodyResponseCallback<Schema$SearchCaseClassificationsResponse>
    ): void;
    search(
      paramsOrCallback?:
        | Params$Resource$Caseclassifications$Search
        | BodyResponseCallback<Schema$SearchCaseClassificationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SearchCaseClassificationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SearchCaseClassificationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$SearchCaseClassificationsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Caseclassifications$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Caseclassifications$Search;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsupport.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2beta/caseClassifications:search').replace(
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
        createAPIRequest<Schema$SearchCaseClassificationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SearchCaseClassificationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Caseclassifications$Search
    extends StandardParameters {
    /**
     * The maximum number of classifications fetched with each request.
     */
    pageSize?: number;
    /**
     * A token identifying the page of results to return. If unspecified, the first page is retrieved.
     */
    pageToken?: string;
    /**
     * The product line of the Product.
     */
    'product.productLine'?: string;
    /**
     * An expression used to filter case classifications. If it's an empty string, then no filtering happens. Otherwise, case classifications will be returned that match the filter.
     */
    query?: string;
  }

  export class Resource$Cases {
    context: APIRequestContext;
    attachments: Resource$Cases$Attachments;
    comments: Resource$Cases$Comments;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.attachments = new Resource$Cases$Attachments(this.context);
      this.comments = new Resource$Cases$Comments(this.context);
    }

    /**
     * Close a case. EXAMPLES: cURL: ```shell case="projects/some-project/cases/43595344" curl \ --request POST \ --header "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://cloudsupport.googleapis.com/v2/$case:close" ``` Python: ```python import googleapiclient.discovery api_version = "v2" supportApiService = googleapiclient.discovery.build( serviceName="cloudsupport", version=api_version, discoveryServiceUrl=f"https://cloudsupport.googleapis.com/$discovery/rest?version={api_version\}", ) request = supportApiService.cases().close( name="projects/some-project/cases/43595344" ) print(request.execute()) ```
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsupport.googleapis.com
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
     * const cloudsupport = google.cloudsupport('v2beta');
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
     *   const res = await cloudsupport.cases.close({
     *     // Required. The name of the case to close.
     *     name: '[^/]+/[^/]+/cases/my-case',
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
     *   //   "classification": {},
     *   //   "contactEmail": "my_contactEmail",
     *   //   "createTime": "my_createTime",
     *   //   "creator": {},
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "escalated": false,
     *   //   "languageCode": "my_languageCode",
     *   //   "name": "my_name",
     *   //   "priority": "my_priority",
     *   //   "severity": "my_severity",
     *   //   "state": "my_state",
     *   //   "subscriberEmailAddresses": [],
     *   //   "testCase": false,
     *   //   "timeZone": "my_timeZone",
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
    close(
      params: Params$Resource$Cases$Close,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    close(
      params?: Params$Resource$Cases$Close,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Case>>;
    close(
      params: Params$Resource$Cases$Close,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    close(
      params: Params$Resource$Cases$Close,
      options: MethodOptions | BodyResponseCallback<Schema$Case>,
      callback: BodyResponseCallback<Schema$Case>
    ): void;
    close(
      params: Params$Resource$Cases$Close,
      callback: BodyResponseCallback<Schema$Case>
    ): void;
    close(callback: BodyResponseCallback<Schema$Case>): void;
    close(
      paramsOrCallback?:
        | Params$Resource$Cases$Close
        | BodyResponseCallback<Schema$Case>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Case>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Case>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Case>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Cases$Close;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Cases$Close;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsupport.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2beta/{+name}:close').replace(
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
        createAPIRequest<Schema$Case>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Case>(parameters);
      }
    }

    /**
     * Create a new case and associate it with a parent. It must have the following fields set: `display_name`, `description`, `classification`, and `priority`. If you're just testing the API and don't want to route your case to an agent, set `testCase=true`. EXAMPLES: cURL: ```shell parent="projects/some-project" curl \ --request POST \ --header "Authorization: Bearer $(gcloud auth print-access-token)" \ --header 'Content-Type: application/json' \ --data '{ "display_name": "Test case created by me.", "description": "a random test case, feel free to close", "classification": { "id": "100IK2AKCLHMGRJ9CDGMOCGP8DM6UTB4BT262T31BT1M2T31DHNMENPO6KS36CPJ786L2TBFEHGN6NPI64R3CDHN8880G08I1H3MURR7DHII0GRCDTQM8" \}, "time_zone": "-07:00", "subscriber_email_addresses": [ "foo@domain.com", "bar@domain.com" ], "testCase": true, "priority": "P3" \}' \ "https://cloudsupport.googleapis.com/v2/$parent/cases" ``` Python: ```python import googleapiclient.discovery api_version = "v2" supportApiService = googleapiclient.discovery.build( serviceName="cloudsupport", version=api_version, discoveryServiceUrl=f"https://cloudsupport.googleapis.com/$discovery/rest?version={api_version\}", ) request = supportApiService.cases().create( parent="projects/some-project", body={ "displayName": "A Test Case", "description": "This is a test case.", "testCase": True, "priority": "P2", "classification": { "id": "100IK2AKCLHMGRJ9CDGMOCGP8DM6UTB4BT262T31BT1M2T31DHNMENPO6KS36CPJ786L2TBFEHGN6NPI64R3CDHN8880G08I1H3MURR7DHII0GRCDTQM8" \}, \}, ) print(request.execute()) ```
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsupport.googleapis.com
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
     * const cloudsupport = google.cloudsupport('v2beta');
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
     *   const res = await cloudsupport.cases.create({
     *     // Required. The name of the parent under which the case should be created.
     *     parent: '[^/]+/[^/]+',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "classification": {},
     *       //   "contactEmail": "my_contactEmail",
     *       //   "createTime": "my_createTime",
     *       //   "creator": {},
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "escalated": false,
     *       //   "languageCode": "my_languageCode",
     *       //   "name": "my_name",
     *       //   "priority": "my_priority",
     *       //   "severity": "my_severity",
     *       //   "state": "my_state",
     *       //   "subscriberEmailAddresses": [],
     *       //   "testCase": false,
     *       //   "timeZone": "my_timeZone",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "classification": {},
     *   //   "contactEmail": "my_contactEmail",
     *   //   "createTime": "my_createTime",
     *   //   "creator": {},
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "escalated": false,
     *   //   "languageCode": "my_languageCode",
     *   //   "name": "my_name",
     *   //   "priority": "my_priority",
     *   //   "severity": "my_severity",
     *   //   "state": "my_state",
     *   //   "subscriberEmailAddresses": [],
     *   //   "testCase": false,
     *   //   "timeZone": "my_timeZone",
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
      params: Params$Resource$Cases$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Cases$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Case>>;
    create(
      params: Params$Resource$Cases$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Cases$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Case>,
      callback: BodyResponseCallback<Schema$Case>
    ): void;
    create(
      params: Params$Resource$Cases$Create,
      callback: BodyResponseCallback<Schema$Case>
    ): void;
    create(callback: BodyResponseCallback<Schema$Case>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Cases$Create
        | BodyResponseCallback<Schema$Case>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Case>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Case>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Case>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Cases$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Cases$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsupport.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2beta/{+parent}/cases').replace(
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
        createAPIRequest<Schema$Case>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Case>(parameters);
      }
    }

    /**
     * Escalate a case, starting the Google Cloud Support escalation management process. This operation is only available for some support services. Go to https://cloud.google.com/support and look for 'Technical support escalations' in the feature list to find out which ones let you do that. EXAMPLES: cURL: ```shell case="projects/some-project/cases/43595344" curl \ --request POST \ --header "Authorization: Bearer $(gcloud auth print-access-token)" \ --header "Content-Type: application/json" \ --data '{ "escalation": { "reason": "BUSINESS_IMPACT", "justification": "This is a test escalation." \} \}' \ "https://cloudsupport.googleapis.com/v2/$case:escalate" ``` Python: ```python import googleapiclient.discovery api_version = "v2" supportApiService = googleapiclient.discovery.build( serviceName="cloudsupport", version=api_version, discoveryServiceUrl=f"https://cloudsupport.googleapis.com/$discovery/rest?version={api_version\}", ) request = supportApiService.cases().escalate( name="projects/some-project/cases/43595344", body={ "escalation": { "reason": "BUSINESS_IMPACT", "justification": "This is a test escalation.", \}, \}, ) print(request.execute()) ```
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsupport.googleapis.com
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
     * const cloudsupport = google.cloudsupport('v2beta');
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
     *   const res = await cloudsupport.cases.escalate({
     *     // Required. The name of the case to be escalated.
     *     name: '[^/]+/[^/]+/cases/my-case',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "escalation": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "classification": {},
     *   //   "contactEmail": "my_contactEmail",
     *   //   "createTime": "my_createTime",
     *   //   "creator": {},
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "escalated": false,
     *   //   "languageCode": "my_languageCode",
     *   //   "name": "my_name",
     *   //   "priority": "my_priority",
     *   //   "severity": "my_severity",
     *   //   "state": "my_state",
     *   //   "subscriberEmailAddresses": [],
     *   //   "testCase": false,
     *   //   "timeZone": "my_timeZone",
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
    escalate(
      params: Params$Resource$Cases$Escalate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    escalate(
      params?: Params$Resource$Cases$Escalate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Case>>;
    escalate(
      params: Params$Resource$Cases$Escalate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    escalate(
      params: Params$Resource$Cases$Escalate,
      options: MethodOptions | BodyResponseCallback<Schema$Case>,
      callback: BodyResponseCallback<Schema$Case>
    ): void;
    escalate(
      params: Params$Resource$Cases$Escalate,
      callback: BodyResponseCallback<Schema$Case>
    ): void;
    escalate(callback: BodyResponseCallback<Schema$Case>): void;
    escalate(
      paramsOrCallback?:
        | Params$Resource$Cases$Escalate
        | BodyResponseCallback<Schema$Case>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Case>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Case>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Case>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Cases$Escalate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Cases$Escalate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsupport.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2beta/{+name}:escalate').replace(
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
        createAPIRequest<Schema$Case>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Case>(parameters);
      }
    }

    /**
     * Retrieve a case. EXAMPLES: cURL: ```shell case="projects/some-project/cases/16033687" curl \ --header "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://cloudsupport.googleapis.com/v2/$case" ``` Python: ```python import googleapiclient.discovery api_version = "v2" supportApiService = googleapiclient.discovery.build( serviceName="cloudsupport", version=api_version, discoveryServiceUrl=f"https://cloudsupport.googleapis.com/$discovery/rest?version={api_version\}", ) request = supportApiService.cases().get( name="projects/some-project/cases/43595344", ) print(request.execute()) ```
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsupport.googleapis.com
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
     * const cloudsupport = google.cloudsupport('v2beta');
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
     *   const res = await cloudsupport.cases.get({
     *     // Required. The full name of a case to be retrieved.
     *     name: '[^/]+/[^/]+/cases/my-case',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "classification": {},
     *   //   "contactEmail": "my_contactEmail",
     *   //   "createTime": "my_createTime",
     *   //   "creator": {},
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "escalated": false,
     *   //   "languageCode": "my_languageCode",
     *   //   "name": "my_name",
     *   //   "priority": "my_priority",
     *   //   "severity": "my_severity",
     *   //   "state": "my_state",
     *   //   "subscriberEmailAddresses": [],
     *   //   "testCase": false,
     *   //   "timeZone": "my_timeZone",
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
      params: Params$Resource$Cases$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Cases$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Case>>;
    get(
      params: Params$Resource$Cases$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Cases$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Case>,
      callback: BodyResponseCallback<Schema$Case>
    ): void;
    get(
      params: Params$Resource$Cases$Get,
      callback: BodyResponseCallback<Schema$Case>
    ): void;
    get(callback: BodyResponseCallback<Schema$Case>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Cases$Get
        | BodyResponseCallback<Schema$Case>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Case>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Case>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Case>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Cases$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Cases$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsupport.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Case>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Case>(parameters);
      }
    }

    /**
     * Retrieve all cases under a parent, but not its children. For example, listing cases under an organization only returns the cases that are directly parented by that organization. To retrieve cases under an organization and its projects, use `cases.search`. EXAMPLES: cURL: ```shell parent="projects/some-project" curl \ --header "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://cloudsupport.googleapis.com/v2/$parent/cases" ``` Python: ```python import googleapiclient.discovery api_version = "v2" supportApiService = googleapiclient.discovery.build( serviceName="cloudsupport", version=api_version, discoveryServiceUrl=f"https://cloudsupport.googleapis.com/$discovery/rest?version={api_version\}", ) request = supportApiService.cases().list(parent="projects/some-project") print(request.execute()) ```
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsupport.googleapis.com
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
     * const cloudsupport = google.cloudsupport('v2beta');
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
     *   const res = await cloudsupport.cases.list({
     *     // An expression used to filter cases. If it's an empty string, then no filtering happens. Otherwise, the endpoint returns the cases that match the filter. Expressions use the following fields separated by `AND` and specified with `=`: - `state`: Can be `OPEN` or `CLOSED`. - `priority`: Can be `P0`, `P1`, `P2`, `P3`, or `P4`. You can specify multiple values for priority using the `OR` operator. For example, `priority=P1 OR priority=P2`. - `creator.email`: The email address of the case creator. EXAMPLES: - `state=CLOSED` - `state=OPEN AND creator.email="tester@example.com"` - `state=OPEN AND (priority=P0 OR priority=P1)`
     *     filter: 'placeholder-value',
     *     // The maximum number of cases fetched with each request. Defaults to 10.
     *     pageSize: 'placeholder-value',
     *     // A token identifying the page of results to return. If unspecified, the first page is retrieved.
     *     pageToken: 'placeholder-value',
     *     // Required. The name of a parent to list cases under.
     *     parent: '[^/]+/[^/]+',
     *     // The product line to request cases for. If unspecified, only Google Cloud cases will be returned.
     *     productLine: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cases": [],
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
      params: Params$Resource$Cases$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Cases$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListCasesResponse>>;
    list(
      params: Params$Resource$Cases$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Cases$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListCasesResponse>,
      callback: BodyResponseCallback<Schema$ListCasesResponse>
    ): void;
    list(
      params: Params$Resource$Cases$List,
      callback: BodyResponseCallback<Schema$ListCasesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListCasesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Cases$List
        | BodyResponseCallback<Schema$ListCasesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListCasesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListCasesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListCasesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Cases$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Cases$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsupport.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2beta/{+parent}/cases').replace(
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
        createAPIRequest<Schema$ListCasesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListCasesResponse>(parameters);
      }
    }

    /**
     * Update a case. Only some fields can be updated. EXAMPLES: cURL: ```shell case="projects/some-project/cases/43595344" curl \ --request PATCH \ --header "Authorization: Bearer $(gcloud auth print-access-token)" \ --header "Content-Type: application/json" \ --data '{ "priority": "P1" \}' \ "https://cloudsupport.googleapis.com/v2/$case?updateMask=priority" ``` Python: ```python import googleapiclient.discovery api_version = "v2" supportApiService = googleapiclient.discovery.build( serviceName="cloudsupport", version=api_version, discoveryServiceUrl=f"https://cloudsupport.googleapis.com/$discovery/rest?version={api_version\}", ) request = supportApiService.cases().patch( name="projects/some-project/cases/43112854", body={ "displayName": "This is Now a New Title", "priority": "P2", \}, ) print(request.execute()) ```
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsupport.googleapis.com
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
     * const cloudsupport = google.cloudsupport('v2beta');
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
     *   const res = await cloudsupport.cases.patch({
     *     // Identifier. The resource name for the case.
     *     name: '[^/]+/[^/]+/cases/my-case',
     *     // A list of attributes of the case that should be updated. Supported values are `priority`, `display_name`, and `subscriber_email_addresses`. If no fields are specified, all supported fields are updated. Be careful - if you do not provide a field mask, then you might accidentally clear some fields. For example, if you leave the field mask empty and do not provide a value for `subscriber_email_addresses`, then `subscriber_email_addresses` is updated to empty.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "classification": {},
     *       //   "contactEmail": "my_contactEmail",
     *       //   "createTime": "my_createTime",
     *       //   "creator": {},
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "escalated": false,
     *       //   "languageCode": "my_languageCode",
     *       //   "name": "my_name",
     *       //   "priority": "my_priority",
     *       //   "severity": "my_severity",
     *       //   "state": "my_state",
     *       //   "subscriberEmailAddresses": [],
     *       //   "testCase": false,
     *       //   "timeZone": "my_timeZone",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "classification": {},
     *   //   "contactEmail": "my_contactEmail",
     *   //   "createTime": "my_createTime",
     *   //   "creator": {},
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "escalated": false,
     *   //   "languageCode": "my_languageCode",
     *   //   "name": "my_name",
     *   //   "priority": "my_priority",
     *   //   "severity": "my_severity",
     *   //   "state": "my_state",
     *   //   "subscriberEmailAddresses": [],
     *   //   "testCase": false,
     *   //   "timeZone": "my_timeZone",
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
    patch(
      params: Params$Resource$Cases$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Cases$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Case>>;
    patch(
      params: Params$Resource$Cases$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Cases$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Case>,
      callback: BodyResponseCallback<Schema$Case>
    ): void;
    patch(
      params: Params$Resource$Cases$Patch,
      callback: BodyResponseCallback<Schema$Case>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Case>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Cases$Patch
        | BodyResponseCallback<Schema$Case>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Case>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Case>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Case>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Cases$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Cases$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsupport.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Case>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Case>(parameters);
      }
    }

    /**
     * Search for cases using a query. EXAMPLES: cURL: ```shell parent="projects/some-project" curl \ --header "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://cloudsupport.googleapis.com/v2/$parent/cases:search" ``` Python: ```python import googleapiclient.discovery api_version = "v2" supportApiService = googleapiclient.discovery.build( serviceName="cloudsupport", version=api_version, discoveryServiceUrl=f"https://cloudsupport.googleapis.com/$discovery/rest?version={api_version\}", ) request = supportApiService.cases().search( parent="projects/some-project", query="state=OPEN" ) print(request.execute()) ```
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsupport.googleapis.com
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
     * const cloudsupport = google.cloudsupport('v2beta');
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
     *   const res = await cloudsupport.cases.search({
     *     // The maximum number of cases fetched with each request. The default page size is 10.
     *     pageSize: 'placeholder-value',
     *     // A token identifying the page of results to return. If unspecified, the first page is retrieved.
     *     pageToken: 'placeholder-value',
     *     // The name of the parent resource to search for cases under.
     *     parent: 'placeholder-value',
     *     // An expression used to filter cases. Expressions use the following fields separated by `AND` and specified with `=`: - `organization`: An organization name in the form `organizations/`. - `project`: A project name in the form `projects/`. - `state`: Can be `OPEN` or `CLOSED`. - `priority`: Can be `P0`, `P1`, `P2`, `P3`, or `P4`. You can specify multiple values for priority using the `OR` operator. For example, `priority=P1 OR priority=P2`. - `creator.email`: The email address of the case creator. You must specify either `organization` or `project`. To search across `displayName`, `description`, and comments, use a global restriction with no keyword or operator. For example, `"my search"`. To search only cases updated after a certain date, use `update_time` restricted with that particular date, time, and timezone in ISO datetime format. For example, `update_time\>"2020-01-01T00:00:00-05:00"`. `update_time` only supports the greater than operator (`\>`). Examples: - `organization="organizations/123456789"` - `project="projects/my-project-id"` - `project="projects/123456789"` - `organization="organizations/123456789" AND state=CLOSED` - `project="projects/my-project-id" AND creator.email="tester@example.com"` - `project="projects/my-project-id" AND (priority=P0 OR priority=P1)`
     *     query: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cases": [],
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
    search(
      params: Params$Resource$Cases$Search,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    search(
      params?: Params$Resource$Cases$Search,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SearchCasesResponse>>;
    search(
      params: Params$Resource$Cases$Search,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    search(
      params: Params$Resource$Cases$Search,
      options: MethodOptions | BodyResponseCallback<Schema$SearchCasesResponse>,
      callback: BodyResponseCallback<Schema$SearchCasesResponse>
    ): void;
    search(
      params: Params$Resource$Cases$Search,
      callback: BodyResponseCallback<Schema$SearchCasesResponse>
    ): void;
    search(callback: BodyResponseCallback<Schema$SearchCasesResponse>): void;
    search(
      paramsOrCallback?:
        | Params$Resource$Cases$Search
        | BodyResponseCallback<Schema$SearchCasesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SearchCasesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SearchCasesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SearchCasesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Cases$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Cases$Search;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsupport.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2beta/cases:search').replace(
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
        createAPIRequest<Schema$SearchCasesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SearchCasesResponse>(parameters);
      }
    }

    /**
     * Show items in the feed of this case, including case emails, attachments, and comments.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsupport.googleapis.com
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
     * const cloudsupport = google.cloudsupport('v2beta');
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
     *   const res = await cloudsupport.cases.showFeed({
     *     // Optional. Field to order feed items by, followed by `asc` or `desc` postfix. The only valid field is `creation_time`. This list is case-insensitive, default sorting order is ascending, and the redundant space characters are insignificant. Example: `creation_time desc`
     *     orderBy: 'placeholder-value',
     *     // Optional. The maximum number of feed items fetched with each request.
     *     pageSize: 'placeholder-value',
     *     // Optional. A token identifying the page of results to return. If unspecified, it retrieves the first page.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of the case for which feed items should be listed.
     *     parent: '[^/]+/[^/]+/cases/my-case',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "feedItems": [],
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
    showFeed(
      params: Params$Resource$Cases$Showfeed,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    showFeed(
      params?: Params$Resource$Cases$Showfeed,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ShowFeedResponse>>;
    showFeed(
      params: Params$Resource$Cases$Showfeed,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    showFeed(
      params: Params$Resource$Cases$Showfeed,
      options: MethodOptions | BodyResponseCallback<Schema$ShowFeedResponse>,
      callback: BodyResponseCallback<Schema$ShowFeedResponse>
    ): void;
    showFeed(
      params: Params$Resource$Cases$Showfeed,
      callback: BodyResponseCallback<Schema$ShowFeedResponse>
    ): void;
    showFeed(callback: BodyResponseCallback<Schema$ShowFeedResponse>): void;
    showFeed(
      paramsOrCallback?:
        | Params$Resource$Cases$Showfeed
        | BodyResponseCallback<Schema$ShowFeedResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ShowFeedResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ShowFeedResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ShowFeedResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Cases$Showfeed;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Cases$Showfeed;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsupport.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2beta/{+parent}:showFeed').replace(
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
        createAPIRequest<Schema$ShowFeedResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ShowFeedResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Cases$Close extends StandardParameters {
    /**
     * Required. The name of the case to close.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CloseCaseRequest;
  }
  export interface Params$Resource$Cases$Create extends StandardParameters {
    /**
     * Required. The name of the parent under which the case should be created.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Case;
  }
  export interface Params$Resource$Cases$Escalate extends StandardParameters {
    /**
     * Required. The name of the case to be escalated.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EscalateCaseRequest;
  }
  export interface Params$Resource$Cases$Get extends StandardParameters {
    /**
     * Required. The full name of a case to be retrieved.
     */
    name?: string;
  }
  export interface Params$Resource$Cases$List extends StandardParameters {
    /**
     * An expression used to filter cases. If it's an empty string, then no filtering happens. Otherwise, the endpoint returns the cases that match the filter. Expressions use the following fields separated by `AND` and specified with `=`: - `state`: Can be `OPEN` or `CLOSED`. - `priority`: Can be `P0`, `P1`, `P2`, `P3`, or `P4`. You can specify multiple values for priority using the `OR` operator. For example, `priority=P1 OR priority=P2`. - `creator.email`: The email address of the case creator. EXAMPLES: - `state=CLOSED` - `state=OPEN AND creator.email="tester@example.com"` - `state=OPEN AND (priority=P0 OR priority=P1)`
     */
    filter?: string;
    /**
     * The maximum number of cases fetched with each request. Defaults to 10.
     */
    pageSize?: number;
    /**
     * A token identifying the page of results to return. If unspecified, the first page is retrieved.
     */
    pageToken?: string;
    /**
     * Required. The name of a parent to list cases under.
     */
    parent?: string;
    /**
     * The product line to request cases for. If unspecified, only Google Cloud cases will be returned.
     */
    productLine?: string;
  }
  export interface Params$Resource$Cases$Patch extends StandardParameters {
    /**
     * Identifier. The resource name for the case.
     */
    name?: string;
    /**
     * A list of attributes of the case that should be updated. Supported values are `priority`, `display_name`, and `subscriber_email_addresses`. If no fields are specified, all supported fields are updated. Be careful - if you do not provide a field mask, then you might accidentally clear some fields. For example, if you leave the field mask empty and do not provide a value for `subscriber_email_addresses`, then `subscriber_email_addresses` is updated to empty.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Case;
  }
  export interface Params$Resource$Cases$Search extends StandardParameters {
    /**
     * The maximum number of cases fetched with each request. The default page size is 10.
     */
    pageSize?: number;
    /**
     * A token identifying the page of results to return. If unspecified, the first page is retrieved.
     */
    pageToken?: string;
    /**
     * The name of the parent resource to search for cases under.
     */
    parent?: string;
    /**
     * An expression used to filter cases. Expressions use the following fields separated by `AND` and specified with `=`: - `organization`: An organization name in the form `organizations/`. - `project`: A project name in the form `projects/`. - `state`: Can be `OPEN` or `CLOSED`. - `priority`: Can be `P0`, `P1`, `P2`, `P3`, or `P4`. You can specify multiple values for priority using the `OR` operator. For example, `priority=P1 OR priority=P2`. - `creator.email`: The email address of the case creator. You must specify either `organization` or `project`. To search across `displayName`, `description`, and comments, use a global restriction with no keyword or operator. For example, `"my search"`. To search only cases updated after a certain date, use `update_time` restricted with that particular date, time, and timezone in ISO datetime format. For example, `update_time\>"2020-01-01T00:00:00-05:00"`. `update_time` only supports the greater than operator (`\>`). Examples: - `organization="organizations/123456789"` - `project="projects/my-project-id"` - `project="projects/123456789"` - `organization="organizations/123456789" AND state=CLOSED` - `project="projects/my-project-id" AND creator.email="tester@example.com"` - `project="projects/my-project-id" AND (priority=P0 OR priority=P1)`
     */
    query?: string;
  }
  export interface Params$Resource$Cases$Showfeed extends StandardParameters {
    /**
     * Optional. Field to order feed items by, followed by `asc` or `desc` postfix. The only valid field is `creation_time`. This list is case-insensitive, default sorting order is ascending, and the redundant space characters are insignificant. Example: `creation_time desc`
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of feed items fetched with each request.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying the page of results to return. If unspecified, it retrieves the first page.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the case for which feed items should be listed.
     */
    parent?: string;
  }

  export class Resource$Cases$Attachments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List all the attachments associated with a support case. EXAMPLES: cURL: ```shell case="projects/some-project/cases/23598314" curl \ --header "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://cloudsupport.googleapis.com/v2/$case/attachments" ``` Python: ```python import googleapiclient.discovery api_version = "v2" supportApiService = googleapiclient.discovery.build( serviceName="cloudsupport", version=api_version, discoveryServiceUrl=f"https://cloudsupport.googleapis.com/$discovery/rest?version={api_version\}", ) request = ( supportApiService.cases() .attachments() .list(parent="projects/some-project/cases/43595344") ) print(request.execute()) ```
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsupport.googleapis.com
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
     * const cloudsupport = google.cloudsupport('v2beta');
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
     *   const res = await cloudsupport.cases.attachments.list({
     *     // The maximum number of attachments fetched with each request. If not provided, the default is 10. The maximum page size that will be returned is 100. The size of each page can be smaller than the requested page size and can include zero. For example, you could request 100 attachments on one page, receive 0, and then on the next page, receive 90.
     *     pageSize: 'placeholder-value',
     *     // A token identifying the page of results to return. If unspecified, the first page is retrieved.
     *     pageToken: 'placeholder-value',
     *     // Required. The name of the case for which attachments should be listed.
     *     parent: '[^/]+/[^/]+/cases/my-case',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attachments": [],
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
      params: Params$Resource$Cases$Attachments$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Cases$Attachments$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListAttachmentsResponse>>;
    list(
      params: Params$Resource$Cases$Attachments$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Cases$Attachments$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAttachmentsResponse>,
      callback: BodyResponseCallback<Schema$ListAttachmentsResponse>
    ): void;
    list(
      params: Params$Resource$Cases$Attachments$List,
      callback: BodyResponseCallback<Schema$ListAttachmentsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListAttachmentsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Cases$Attachments$List
        | BodyResponseCallback<Schema$ListAttachmentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAttachmentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAttachmentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListAttachmentsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Cases$Attachments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Cases$Attachments$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsupport.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2beta/{+parent}/attachments').replace(
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
        createAPIRequest<Schema$ListAttachmentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAttachmentsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Cases$Attachments$List
    extends StandardParameters {
    /**
     * The maximum number of attachments fetched with each request. If not provided, the default is 10. The maximum page size that will be returned is 100. The size of each page can be smaller than the requested page size and can include zero. For example, you could request 100 attachments on one page, receive 0, and then on the next page, receive 90.
     */
    pageSize?: number;
    /**
     * A token identifying the page of results to return. If unspecified, the first page is retrieved.
     */
    pageToken?: string;
    /**
     * Required. The name of the case for which attachments should be listed.
     */
    parent?: string;
  }

  export class Resource$Cases$Comments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Add a new comment to a case. The comment must have the following fields set: `body`. EXAMPLES: cURL: ```shell case="projects/some-project/cases/43591344" curl \ --request POST \ --header "Authorization: Bearer $(gcloud auth print-access-token)" \ --header 'Content-Type: application/json' \ --data '{ "body": "This is a test comment." \}' \ "https://cloudsupport.googleapis.com/v2/$case/comments" ``` Python: ```python import googleapiclient.discovery api_version = "v2" supportApiService = googleapiclient.discovery.build( serviceName="cloudsupport", version=api_version, discoveryServiceUrl=f"https://cloudsupport.googleapis.com/$discovery/rest?version={api_version\}", ) request = ( supportApiService.cases() .comments() .create( parent="projects/some-project/cases/43595344", body={"body": "This is a test comment."\}, ) ) print(request.execute()) ```
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsupport.googleapis.com
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
     * const cloudsupport = google.cloudsupport('v2beta');
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
     *   const res = await cloudsupport.cases.comments.create({
     *     // Required. The name of the case to which the comment should be added.
     *     parent: '[^/]+/[^/]+/cases/my-case',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "body": "my_body",
     *       //   "createTime": "my_createTime",
     *       //   "creator": {},
     *       //   "name": "my_name",
     *       //   "plainTextBody": "my_plainTextBody"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "body": "my_body",
     *   //   "createTime": "my_createTime",
     *   //   "creator": {},
     *   //   "name": "my_name",
     *   //   "plainTextBody": "my_plainTextBody"
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
      params: Params$Resource$Cases$Comments$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Cases$Comments$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Comment>>;
    create(
      params: Params$Resource$Cases$Comments$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Cases$Comments$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Comment>,
      callback: BodyResponseCallback<Schema$Comment>
    ): void;
    create(
      params: Params$Resource$Cases$Comments$Create,
      callback: BodyResponseCallback<Schema$Comment>
    ): void;
    create(callback: BodyResponseCallback<Schema$Comment>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Cases$Comments$Create
        | BodyResponseCallback<Schema$Comment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Comment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Comment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Comment>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Cases$Comments$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Cases$Comments$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsupport.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2beta/{+parent}/comments').replace(
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
        createAPIRequest<Schema$Comment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Comment>(parameters);
      }
    }

    /**
     * List all the comments associated with a case. EXAMPLES: cURL: ```shell case="projects/some-project/cases/43595344" curl \ --header "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://cloudsupport.googleapis.com/v2/$case/comments" ``` Python: ```python import googleapiclient.discovery api_version = "v2" supportApiService = googleapiclient.discovery.build( serviceName="cloudsupport", version=api_version, discoveryServiceUrl=f"https://cloudsupport.googleapis.com/$discovery/rest?version={api_version\}", ) request = ( supportApiService.cases() .comments() .list(parent="projects/some-project/cases/43595344") ) print(request.execute()) ```
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsupport.googleapis.com
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
     * const cloudsupport = google.cloudsupport('v2beta');
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
     *   const res = await cloudsupport.cases.comments.list({
     *     // The maximum number of comments to fetch. Defaults to 10.
     *     pageSize: 'placeholder-value',
     *     // A token identifying the page of results to return. If unspecified, the first page is returned.
     *     pageToken: 'placeholder-value',
     *     // Required. The name of the case for which to list comments.
     *     parent: '[^/]+/[^/]+/cases/my-case',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "comments": [],
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
      params: Params$Resource$Cases$Comments$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Cases$Comments$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListCommentsResponse>>;
    list(
      params: Params$Resource$Cases$Comments$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Cases$Comments$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListCommentsResponse>,
      callback: BodyResponseCallback<Schema$ListCommentsResponse>
    ): void;
    list(
      params: Params$Resource$Cases$Comments$List,
      callback: BodyResponseCallback<Schema$ListCommentsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListCommentsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Cases$Comments$List
        | BodyResponseCallback<Schema$ListCommentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListCommentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListCommentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListCommentsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Cases$Comments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Cases$Comments$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsupport.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2beta/{+parent}/comments').replace(
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
        createAPIRequest<Schema$ListCommentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListCommentsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Cases$Comments$Create
    extends StandardParameters {
    /**
     * Required. The name of the case to which the comment should be added.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Comment;
  }
  export interface Params$Resource$Cases$Comments$List
    extends StandardParameters {
    /**
     * The maximum number of comments to fetch. Defaults to 10.
     */
    pageSize?: number;
    /**
     * A token identifying the page of results to return. If unspecified, the first page is returned.
     */
    pageToken?: string;
    /**
     * Required. The name of the case for which to list comments.
     */
    parent?: string;
  }

  export class Resource$Media {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Download a file attached to a case. When this endpoint is called, no "response body" will be returned. Instead, the attachment's blob will be returned. Note: HTTP requests must append "?alt=media" to the URL. EXAMPLES: cURL: ```shell name="projects/some-project/cases/43594844/attachments/0674M00000WijAnZAJ" curl \ --header "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://cloudsupport.googleapis.com/v2/$name:download?alt=media" ``` Python: ```python import googleapiclient.discovery api_version = "v2" supportApiService = googleapiclient.discovery.build( serviceName="cloudsupport", version=api_version, discoveryServiceUrl=f"https://cloudsupport.googleapis.com/$discovery/rest?version={api_version\}", ) request = supportApiService.media().download( name="projects/some-project/cases/43595344/attachments/0684M00000Pw6pHQAR" ) request.uri = request.uri.split("?")[0] + "?alt=media" print(request.execute()) ```
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsupport.googleapis.com
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
     * const cloudsupport = google.cloudsupport('v2beta');
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
     *   const res = await cloudsupport.media.download({
     *     // The name of the file attachment to download.
     *     name: '[^/]+/[^/]+/cases/my-case/attachments/my-attachment',
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
    ): Promise<GaxiosResponseWithHTTP2<Schema$Media>>;
    download(
      params: Params$Resource$Media$Download,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    download(
      params: Params$Resource$Media$Download,
      options: MethodOptions | BodyResponseCallback<Schema$Media>,
      callback: BodyResponseCallback<Schema$Media>
    ): void;
    download(
      params: Params$Resource$Media$Download,
      callback: BodyResponseCallback<Schema$Media>
    ): void;
    download(callback: BodyResponseCallback<Schema$Media>): void;
    download(
      paramsOrCallback?:
        | Params$Resource$Media$Download
        | BodyResponseCallback<Schema$Media>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Media>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Media>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Media>>
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

      const rootUrl = options.rootUrl || 'https://cloudsupport.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2beta/{+name}:download').replace(
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
        createAPIRequest<Schema$Media>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Media>(parameters);
      }
    }

    /**
     * Create a file attachment on a case or Cloud resource. The attachment must have the following fields set: `filename`. EXAMPLES: cURL: ```shell echo "This text is in a file I'm uploading using CSAPI." \ \> "./example_file.txt" case="projects/some-project/cases/43594844" curl \ --header "Authorization: Bearer $(gcloud auth print-access-token)" \ --data-binary @"./example_file.txt" \ "https://cloudsupport.googleapis.com/upload/v2beta/$case/attachments?attachment.filename=uploaded_via_curl.txt" ``` Python: ```python import googleapiclient.discovery api_version = "v2" supportApiService = googleapiclient.discovery.build( serviceName="cloudsupport", version=api_version, discoveryServiceUrl=f"https://cloudsupport.googleapis.com/$discovery/rest?version={api_version\}", ) file_path = "./example_file.txt" with open(file_path, "w") as file: file.write( "This text is inside a file I'm going to upload using the Cloud Support API.", ) request = supportApiService.media().upload( parent="projects/some-project/cases/43595344", media_body=file_path ) request.uri = request.uri.split("?")[0] + "?attachment.filename=uploaded_via_python.txt" print(request.execute()) ```
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsupport.googleapis.com
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
     * const cloudsupport = google.cloudsupport('v2beta');
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
     *   const res = await cloudsupport.media.upload({
     *     // Required. The name of the case or Cloud resource to which the attachment should be attached.
     *     parent: '[^/]+/[^/]+/cases/my-case',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "attachment": {}
     *       // }
     *     },
     *     media: {
     *       mimeType: 'placeholder-value',
     *       body: 'placeholder-value',
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "creator": {},
     *   //   "filename": "my_filename",
     *   //   "mimeType": "my_mimeType",
     *   //   "name": "my_name",
     *   //   "sizeBytes": "my_sizeBytes"
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
    upload(
      params: Params$Resource$Media$Upload,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    upload(
      params?: Params$Resource$Media$Upload,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Attachment>>;
    upload(
      params: Params$Resource$Media$Upload,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    upload(
      params: Params$Resource$Media$Upload,
      options: MethodOptions | BodyResponseCallback<Schema$Attachment>,
      callback: BodyResponseCallback<Schema$Attachment>
    ): void;
    upload(
      params: Params$Resource$Media$Upload,
      callback: BodyResponseCallback<Schema$Attachment>
    ): void;
    upload(callback: BodyResponseCallback<Schema$Attachment>): void;
    upload(
      paramsOrCallback?:
        | Params$Resource$Media$Upload
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
      let params = (paramsOrCallback || {}) as Params$Resource$Media$Upload;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Media$Upload;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsupport.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2beta/{+parent}/attachments').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        mediaUrl: (rootUrl + '/upload/v2beta/{+parent}/attachments').replace(
          /([^:]\/)\/+/g,
          '$1'
        ),
        requiredParams: ['parent'],
        pathParams: ['parent'],
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
     * The name of the file attachment to download.
     */
    name?: string;
  }
  export interface Params$Resource$Media$Upload extends StandardParameters {
    /**
     * Required. The name of the case or Cloud resource to which the attachment should be attached.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateAttachmentRequest;

    /**
     * Media metadata
     */
    media?: {
      /**
       * Media mime-type
       */
      mimeType?: string;

      /**
       * Media body contents
       */
      body?: any;
    };
  }
}
