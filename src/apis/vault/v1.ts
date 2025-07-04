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

export namespace vault_v1 {
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
   * Google Vault API
   *
   * Retention and eDiscovery for Google Workspace. To work with Vault resources, the account must have the [required Vault privileges](https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege. For example, to download an export, an account needs the **Manage Exports** privilege and the matter shared with them.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const vault = google.vault('v1');
   * ```
   */
  export class Vault {
    context: APIRequestContext;
    matters: Resource$Matters;
    operations: Resource$Operations;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.matters = new Resource$Matters(this.context);
      this.operations = new Resource$Operations(this.context);
    }
  }

  /**
   * The results count for each account.
   */
  export interface Schema$AccountCount {
    /**
     * Account owner.
     */
    account?: Schema$UserInfo;
    /**
     * The number of results (messages or files) found for this account.
     */
    count?: string | null;
  }
  /**
   * An error that occurred when querying a specific account
   */
  export interface Schema$AccountCountError {
    /**
     * Account owner.
     */
    account?: Schema$UserInfo;
    /**
     * Account query error.
     */
    errorType?: string | null;
  }
  /**
   * The accounts to search
   */
  export interface Schema$AccountInfo {
    /**
     * A set of accounts to search.
     */
    emails?: string[] | null;
  }
  /**
   * The status of each account creation, and the **HeldAccount**, if successful.
   */
  export interface Schema$AddHeldAccountResult {
    /**
     * Returned when the account was successfully created.
     */
    account?: Schema$HeldAccount;
    /**
     * Reports the request status. If it failed, returns an error message.
     */
    status?: Schema$Status;
  }
  /**
   * Add a list of accounts to a hold.
   */
  export interface Schema$AddHeldAccountsRequest {
    /**
     * A comma-separated list of the account IDs of the accounts to add to the hold. Specify either **emails** or **account_ids**, but not both.
     */
    accountIds?: string[] | null;
    /**
     * A comma-separated list of the emails of the accounts to add to the hold. Specify either **emails** or **account_ids**, but not both.
     */
    emails?: string[] | null;
  }
  /**
   * Response for batch create held accounts.
   */
  export interface Schema$AddHeldAccountsResponse {
    /**
     * The list of responses, in the same order as the batch request.
     */
    responses?: Schema$AddHeldAccountResult[];
  }
  /**
   * Add an account with the permission specified. The role cannot be owner. If an account already has a role in the matter, the existing role is overwritten.
   */
  export interface Schema$AddMatterPermissionsRequest {
    /**
     * Only relevant if **sendEmails** is **true**. To CC the requestor in the email message, set to **true**. To not CC requestor, set to **false**.
     */
    ccMe?: boolean | null;
    /**
     * The account and its role to add.
     */
    matterPermission?: Schema$MatterPermission;
    /**
     * To send a notification email to the added account, set to **true**. To not send a notification email, set to **false**.
     */
    sendEmails?: boolean | null;
  }
  /**
   * The options for Calendar exports.
   */
  export interface Schema$CalendarExportOptions {
    /**
     * The file format for exported text messages.
     */
    exportFormat?: string | null;
  }
  /**
   * Additional options for Calendar search
   */
  export interface Schema$CalendarOptions {
    /**
     * Matches only those events whose location contains all of the words in the given set. If the string contains quoted phrases, this method only matches those events whose location contain the exact phrase. Entries in the set are considered in "and". Word splitting example: ["New Zealand"] vs ["New","Zealand"] "New Zealand": matched by both "New and better Zealand": only matched by the later
     */
    locationQuery?: string[] | null;
    /**
     * Matches only those events that do not contain any of the words in the given set in title, description, location, or attendees. Entries in the set are considered in "or".
     */
    minusWords?: string[] | null;
    /**
     * Matches only those events whose attendees contain all of the words in the given set. Entries in the set are considered in "and".
     */
    peopleQuery?: string[] | null;
    /**
     * Matches only events for which the custodian gave one of these responses. If the set is empty or contains ATTENDEE_RESPONSE_UNSPECIFIED there will be no filtering on responses.
     */
    responseStatuses?: string[] | null;
    /**
     * Search the current version of the Calendar event, but export the contents of the last version saved before 12:00 AM UTC on the specified date. Enter the date in UTC.
     */
    versionDate?: string | null;
  }
  /**
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$CancelOperationRequest {}
  /**
   * Close a matter by ID.
   */
  export interface Schema$CloseMatterRequest {}
  /**
   * Response to a CloseMatterRequest.
   */
  export interface Schema$CloseMatterResponse {
    /**
     * The updated matter, with state **CLOSED**.
     */
    matter?: Schema$Matter;
  }
  /**
   * The export file in Cloud Storage
   */
  export interface Schema$CloudStorageFile {
    /**
     * The name of the Cloud Storage bucket for the export file. You can use this value in the Cloud Storage [JSON API](https://cloud.google.com/storage/docs/json_api) or [XML API](https://cloud.google.com/storage/docs/xml-api), but not to list the bucket contents. Instead, you can [get individual export files](https://cloud.google.com/storage/docs/json_api/v1/objects/get) by object name.
     */
    bucketName?: string | null;
    /**
     * The md5 hash of the file.
     */
    md5Hash?: string | null;
    /**
     * The name of the Cloud Storage object for the export file. You can use this value in the Cloud Storage [JSON API](https://cloud.google.com/storage/docs/json_api) or [XML API](https://cloud.google.com/storage/docs/xml-api).
     */
    objectName?: string | null;
    /**
     * The export file size.
     */
    size?: string | null;
  }
  /**
   * Export sink for Cloud Storage files.
   */
  export interface Schema$CloudStorageSink {
    /**
     * Output only. The exported files in Cloud Storage.
     */
    files?: Schema$CloudStorageFile[];
  }
  /**
   * Service-specific options for holds.
   */
  export interface Schema$CorpusQuery {
    /**
     * Service-specific options for Calendar holds. If set, **CorpusType** must be **CALENDAR**.
     */
    calendarQuery?: Schema$HeldCalendarQuery;
    /**
     * Service-specific options for Drive holds. If set, **CorpusType** must be **DRIVE**.
     */
    driveQuery?: Schema$HeldDriveQuery;
    /**
     * Service-specific options for Groups holds. If set, **CorpusType** must be **GROUPS**.
     */
    groupsQuery?: Schema$HeldGroupsQuery;
    /**
     * Service-specific options for Chat holds. If set, **CorpusType** must be **HANGOUTS_CHAT**.
     */
    hangoutsChatQuery?: Schema$HeldHangoutsChatQuery;
    /**
     * Service-specific options for Gmail holds. If set, **CorpusType** must be **MAIL**.
     */
    mailQuery?: Schema$HeldMailQuery;
    /**
     * Service-specific options for Voice holds. If set, **CorpusType** must be **VOICE**.
     */
    voiceQuery?: Schema$HeldVoiceQuery;
  }
  /**
   * Long running operation metadata for CountArtifacts.
   */
  export interface Schema$CountArtifactsMetadata {
    /**
     * End time of count operation. Available when operation is done.
     */
    endTime?: string | null;
    /**
     * The matter ID of the associated matter.
     */
    matterId?: string | null;
    /**
     * The search query from the request.
     */
    query?: Schema$Query;
    /**
     * Creation time of count operation.
     */
    startTime?: string | null;
  }
  /**
   * Count artifacts request.
   */
  export interface Schema$CountArtifactsRequest {
    /**
     * The search query.
     */
    query?: Schema$Query;
    /**
     * Sets the granularity of the count results.
     */
    view?: string | null;
  }
  /**
   * Definition of the response for method CountArtifacts.
   */
  export interface Schema$CountArtifactsResponse {
    /**
     * Count metrics for Groups.
     */
    groupsCountResult?: Schema$GroupsCountResult;
    /**
     * Count metrics for Gmail and classic Hangouts.
     */
    mailCountResult?: Schema$MailCountResult;
    /**
     * Total count of messages.
     */
    totalCount?: string | null;
  }
  /**
   * Specify Drive documents by document ID.
   */
  export interface Schema$DriveDocumentIds {
    /**
     * Required. A list of Drive document IDs.
     */
    ids?: string[] | null;
  }
  /**
   * The Drive documents to search.
   */
  export interface Schema$DriveDocumentInfo {
    /**
     * Specify Drive documents by document ID.
     */
    documentIds?: Schema$DriveDocumentIds;
  }
  /**
   * Options for Drive exports.
   */
  export interface Schema$DriveExportOptions {
    /**
     * To include access level information for users with [indirect access](https://support.google.com/vault/answer/6099459#metadata) to files, set to **true**.
     */
    includeAccessInfo?: boolean | null;
  }
  /**
   * Additional options for Drive search.
   */
  export interface Schema$DriveOptions {
    /**
     * Set whether the results include only content encrypted with [Google Workspace Client-side encryption](https://support.google.com/a?p=cse_ov) content, only unencrypted content, or both. Defaults to both. Currently supported for Drive.
     */
    clientSideEncryptedOption?: string | null;
    /**
     * Set to **true** to include shared drives.
     */
    includeSharedDrives?: boolean | null;
    /**
     * Set to true to include Team Drive.
     */
    includeTeamDrives?: boolean | null;
    /**
     * Optional. Options to include or exclude documents in shared drives. We recommend using this field over include_shared_drives. This field overrides include_shared_drives and include_team_drives when set.
     */
    sharedDrivesOption?: string | null;
    /**
     * Search the current version of the Drive file, but export the contents of the last version saved before 12:00 AM UTC on the specified date. Enter the date in UTC.
     */
    versionDate?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * An export. To work with Vault resources, the account must have the [required Vault privileges](https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.
   */
  export interface Schema$Export {
    /**
     * Output only. The sink for export files in Cloud Storage.
     */
    cloudStorageSink?: Schema$CloudStorageSink;
    /**
     * Output only. The time when the export was created.
     */
    createTime?: string | null;
    /**
     * Additional export options.
     */
    exportOptions?: Schema$ExportOptions;
    /**
     * Output only. The generated export ID.
     */
    id?: string | null;
    /**
     * Output only. The matter ID.
     */
    matterId?: string | null;
    /**
     * The export name. Don't use special characters (~!$'(),;@:/?) in the name, they can prevent you from downloading exports.
     */
    name?: string | null;
    /**
     * Output only. Identifies the parent export that spawned this child export. This is only set on child exports.
     */
    parentExportId?: string | null;
    /**
     * The query parameters used to create the export.
     */
    query?: Schema$Query;
    /**
     * Output only. The requester of the export.
     */
    requester?: Schema$UserInfo;
    /**
     * Output only. Details about the export progress and size.
     */
    stats?: Schema$ExportStats;
    /**
     * Output only. The status of the export.
     */
    status?: string | null;
  }
  /**
   * Additional options for exports
   */
  export interface Schema$ExportOptions {
    /**
     * Option available for Calendar export.
     */
    calendarOptions?: Schema$CalendarExportOptions;
    /**
     * Options for Drive exports.
     */
    driveOptions?: Schema$DriveExportOptions;
    /**
     * Option available for Gemini export.
     */
    geminiOptions?: Schema$GeminiExportOptions;
    /**
     * Options for Groups exports.
     */
    groupsOptions?: Schema$GroupsExportOptions;
    /**
     * Options for Chat exports.
     */
    hangoutsChatOptions?: Schema$HangoutsChatExportOptions;
    /**
     * Options for Gmail exports.
     */
    mailOptions?: Schema$MailExportOptions;
    /**
     * The requested data region for the export.
     */
    region?: string | null;
    /**
     * Options for Voice exports.
     */
    voiceOptions?: Schema$VoiceExportOptions;
  }
  /**
   * Progress information for an export.
   */
  export interface Schema$ExportStats {
    /**
     * The number of messages or files already processed for export.
     */
    exportedArtifactCount?: string | null;
    /**
     * The size of export in bytes.
     */
    sizeInBytes?: string | null;
    /**
     * The number of messages or files to be exported.
     */
    totalArtifactCount?: string | null;
  }
  /**
   * The options for Gemini exports.
   */
  export interface Schema$GeminiExportOptions {
    /**
     * The file format for exported messages.
     */
    exportFormat?: string | null;
  }
  /**
   * Additional options for Gemini search
   */
  export interface Schema$GeminiOptions {}
  /**
   * Groups specific count metrics.
   */
  export interface Schema$GroupsCountResult {
    /**
     * Error occurred when querying these accounts.
     */
    accountCountErrors?: Schema$AccountCountError[];
    /**
     * Subtotal count per matching account that have more than zero messages.
     */
    accountCounts?: Schema$AccountCount[];
    /**
     * Total number of accounts that can be queried and have more than zero messages.
     */
    matchingAccountsCount?: string | null;
    /**
     * When **DataScope** is **HELD_DATA**, these accounts in the request are not queried because they are not on hold. For other data scope, this field is not set.
     */
    nonQueryableAccounts?: string[] | null;
    /**
     * Total number of accounts involved in this count operation.
     */
    queriedAccountsCount?: string | null;
  }
  /**
   * Options for Groups exports.
   */
  export interface Schema$GroupsExportOptions {
    /**
     * The file format for exported messages.
     */
    exportFormat?: string | null;
  }
  /**
   * Options for Chat exports.
   */
  export interface Schema$HangoutsChatExportOptions {
    /**
     * The file format for exported messages.
     */
    exportFormat?: string | null;
  }
  /**
   * The Chat spaces to search
   */
  export interface Schema$HangoutsChatInfo {
    /**
     * A list of Chat spaces IDs, as provided by the [Chat API](https://developers.google.com/workspace/chat). There is a limit of exporting from 500 Chat spaces per request.
     */
    roomId?: string[] | null;
  }
  /**
   * Additional options for Google Chat search
   */
  export interface Schema$HangoutsChatOptions {
    /**
     * For searches by account or organizational unit, set to **true** to include rooms.
     */
    includeRooms?: boolean | null;
  }
  /**
   * An account covered by a hold. This structure is immutable. It can be an individual account or a Google Group, depending on the service. To work with Vault resources, the account must have the [required Vault privileges] (https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.
   */
  export interface Schema$HeldAccount {
    /**
     * The account ID, as provided by the [Admin SDK](https://developers.google.com/admin-sdk/).
     */
    accountId?: string | null;
    /**
     * The primary email address of the account. If used as an input, this takes precedence over **accountId**.
     */
    email?: string | null;
    /**
     * Output only. The first name of the account holder.
     */
    firstName?: string | null;
    /**
     * Output only. When the account was put on hold.
     */
    holdTime?: string | null;
    /**
     * Output only. The last name of the account holder.
     */
    lastName?: string | null;
  }
  /**
   * Options for Calendar holds.
   */
  export interface Schema$HeldCalendarQuery {}
  /**
   * Options for Drive holds.
   */
  export interface Schema$HeldDriveQuery {
    /**
     * To include files in shared drives in the hold, set to **true**.
     */
    includeSharedDriveFiles?: boolean | null;
    /**
     * To include files in Team Drives in the hold, set to **true**.
     */
    includeTeamDriveFiles?: boolean | null;
  }
  /**
   * Query options for group holds.
   */
  export interface Schema$HeldGroupsQuery {
    /**
     * The end time for the query. Specify in GMT. The value is rounded to 12 AM on the specified date.
     */
    endTime?: string | null;
    /**
     * The start time for the query. Specify in GMT. The value is rounded to 12 AM on the specified date.
     */
    startTime?: string | null;
    /**
     * The [search operators](https://support.google.com/vault/answer/2474474) used to refine the messages covered by the hold.
     */
    terms?: string | null;
  }
  /**
   * Options for Chat holds.
   */
  export interface Schema$HeldHangoutsChatQuery {
    /**
     * To include messages in Chat spaces the user was a member of, set to **true**.
     */
    includeRooms?: boolean | null;
  }
  /**
   * Query options for Gmail holds.
   */
  export interface Schema$HeldMailQuery {
    /**
     * The end time for the query. Specify in GMT. The value is rounded to 12 AM on the specified date.
     */
    endTime?: string | null;
    /**
     * The start time for the query. Specify in GMT. The value is rounded to 12 AM on the specified date.
     */
    startTime?: string | null;
    /**
     * The [search operators](https://support.google.com/vault/answer/2474474) used to refine the messages covered by the hold.
     */
    terms?: string | null;
  }
  /**
   * The organizational unit covered by a hold. This structure is immutable.
   */
  export interface Schema$HeldOrgUnit {
    /**
     * When the organizational unit was put on hold. This property is immutable.
     */
    holdTime?: string | null;
    /**
     * The organizational unit's immutable ID as provided by the [Admin SDK](https://developers.google.com/admin-sdk/).
     */
    orgUnitId?: string | null;
  }
  /**
   * Options for Voice holds.
   */
  export interface Schema$HeldVoiceQuery {
    /**
     * A list of data types covered by the hold. Should be non-empty. Order does not matter and duplicates are ignored.
     */
    coveredData?: string[] | null;
  }
  /**
   * A hold. A hold prevents the specified Google Workspace service from purging data for specific accounts or all members of an organizational unit. To work with Vault resources, the account must have the [required Vault privileges] (https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.
   */
  export interface Schema$Hold {
    /**
     * If set, the hold applies to the specified accounts and **orgUnit** must be empty.
     */
    accounts?: Schema$HeldAccount[];
    /**
     * The service to be searched.
     */
    corpus?: string | null;
    /**
     * The unique immutable ID of the hold. Assigned during creation.
     */
    holdId?: string | null;
    /**
     * The name of the hold.
     */
    name?: string | null;
    /**
     * If set, the hold applies to all members of the organizational unit and **accounts** must be empty. This property is mutable. For Groups holds, set **accounts**.
     */
    orgUnit?: Schema$HeldOrgUnit;
    /**
     * Service-specific options. If set, **CorpusQuery** must match **CorpusType**.
     */
    query?: Schema$CorpusQuery;
    /**
     * The last time this hold was modified.
     */
    updateTime?: string | null;
  }
  /**
   * The exports for a matter.
   */
  export interface Schema$ListExportsResponse {
    /**
     * The list of exports.
     */
    exports?: Schema$Export[];
    /**
     * Page token to retrieve the next page of results in the list.
     */
    nextPageToken?: string | null;
  }
  /**
   * Returns a list of the accounts covered by a hold.
   */
  export interface Schema$ListHeldAccountsResponse {
    /**
     * The held accounts on a hold.
     */
    accounts?: Schema$HeldAccount[];
  }
  /**
   * The holds for a matter.
   */
  export interface Schema$ListHoldsResponse {
    /**
     * The list of holds.
     */
    holds?: Schema$Hold[];
    /**
     * Page token to retrieve the next page of results in the list. If this is empty, then there are no more holds to list.
     */
    nextPageToken?: string | null;
  }
  /**
   * Provides the list of matters.
   */
  export interface Schema$ListMattersResponse {
    /**
     * List of matters.
     */
    matters?: Schema$Matter[];
    /**
     * Page token to retrieve the next page of results in the list.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$ListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Schema$Operation[];
  }
  /**
   * Definition of the response for method ListSaveQuery.
   */
  export interface Schema$ListSavedQueriesResponse {
    /**
     * Page token to retrieve the next page of results in the list. If this is empty, then there are no more saved queries to list.
     */
    nextPageToken?: string | null;
    /**
     * List of saved queries.
     */
    savedQueries?: Schema$SavedQuery[];
  }
  /**
   * Gmail and classic Hangouts-specific count metrics.
   */
  export interface Schema$MailCountResult {
    /**
     * Errors occurred when querying these accounts.
     */
    accountCountErrors?: Schema$AccountCountError[];
    /**
     * Subtotal count per matching account that have more than zero messages.
     */
    accountCounts?: Schema$AccountCount[];
    /**
     * Total number of accounts that can be queried and have more than zero messages.
     */
    matchingAccountsCount?: string | null;
    /**
     * When **DataScope** is **HELD_DATA** and when account emails are passed in explicitly, the list of accounts in the request that are not queried because they are not on hold in the matter. For other data scopes, this field is not set.
     */
    nonQueryableAccounts?: string[] | null;
    /**
     * Total number of accounts involved in this count operation.
     */
    queriedAccountsCount?: string | null;
  }
  /**
   * Options for Gmail exports.
   */
  export interface Schema$MailExportOptions {
    /**
     * The file format for exported messages.
     */
    exportFormat?: string | null;
    /**
     * Optional. To enable exporting linked Drive files, set to **true**.
     */
    exportLinkedDriveFiles?: boolean | null;
    /**
     * To export confidential mode content, set to **true**.
     */
    showConfidentialModeContent?: boolean | null;
    /**
     * To use the new export system, set to **true**.
     */
    useNewExport?: boolean | null;
  }
  /**
   * Additional options for Gmail search
   */
  export interface Schema$MailOptions {
    /**
     * Specifies whether the results should include encrypted content, unencrypted content, or both. Defaults to including both.
     */
    clientSideEncryptedOption?: string | null;
    /**
     * Set to **true** to exclude drafts.
     */
    excludeDrafts?: boolean | null;
  }
  /**
   * Represents a matter. To work with Vault resources, the account must have the [required Vault privileges] (https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.
   */
  export interface Schema$Matter {
    /**
     * An optional description for the matter.
     */
    description?: string | null;
    /**
     * The matter ID, which is generated by the server. Leave blank when creating a matter.
     */
    matterId?: string | null;
    /**
     * Lists the users and their permission for the matter. Currently there is no programmer defined limit on the number of permissions a matter can have.
     */
    matterPermissions?: Schema$MatterPermission[];
    /**
     * Optional. The requested data region for the matter.
     */
    matterRegion?: string | null;
    /**
     * The name of the matter.
     */
    name?: string | null;
    /**
     * The state of the matter.
     */
    state?: string | null;
  }
  /**
   * Users can be matter owners or collaborators. Each matter has only one owner. All others users who can access the matter are collaborators. When an account is purged, its corresponding MatterPermission resources cease to exist.
   */
  export interface Schema$MatterPermission {
    /**
     * The account ID, as provided by the [Admin SDK](https://developers.google.com/admin-sdk/).
     */
    accountId?: string | null;
    /**
     * The user's role for the matter.
     */
    role?: string | null;
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
   * The organizational unit to search
   */
  export interface Schema$OrgUnitInfo {
    /**
     * The name of the organizational unit to search, as provided by the [Admin SDK Directory API](https://developers.google.com/admin-sdk/directory/).
     */
    orgUnitId?: string | null;
  }
  /**
   * The query definition used for search and export.
   */
  export interface Schema$Query {
    /**
     * Required when **SearchMethod** is **ACCOUNT**.
     */
    accountInfo?: Schema$AccountInfo;
    /**
     * Set Calendar search-specific options.
     */
    calendarOptions?: Schema$CalendarOptions;
    /**
     * The Google Workspace service to search.
     */
    corpus?: string | null;
    /**
     * The data source to search.
     */
    dataScope?: string | null;
    /**
     * Required when **SearchMethod** is **DRIVE_DOCUMENT**.
     */
    driveDocumentInfo?: Schema$DriveDocumentInfo;
    /**
     * Set Drive search-specific options.
     */
    driveOptions?: Schema$DriveOptions;
    /**
     * The end time for the search query. Specify in GMT. The value is rounded to 12 AM on the specified date.
     */
    endTime?: string | null;
    /**
     * Set Gemini search-specific options.
     */
    geminiOptions?: Schema$GeminiOptions;
    /**
     * Required when **SearchMethod** is **ROOM**. (read-only)
     */
    hangoutsChatInfo?: Schema$HangoutsChatInfo;
    /**
     * Set Chat search-specific options. (read-only)
     */
    hangoutsChatOptions?: Schema$HangoutsChatOptions;
    /**
     * Set Gmail search-specific options.
     */
    mailOptions?: Schema$MailOptions;
    /**
     * The entity to search. This field replaces **searchMethod** to support shared drives. When **searchMethod** is **TEAM_DRIVE**, the response of this field is **SHARED_DRIVE**.
     */
    method?: string | null;
    /**
     * Required when **SearchMethod** is **ORG_UNIT**.
     */
    orgUnitInfo?: Schema$OrgUnitInfo;
    /**
     * The search method to use.
     */
    searchMethod?: string | null;
    /**
     * Required when **SearchMethod** is **SHARED_DRIVE**.
     */
    sharedDriveInfo?: Schema$SharedDriveInfo;
    /**
     * Required when **SearchMethod** is **SITES_URL**.
     */
    sitesUrlInfo?: Schema$SitesUrlInfo;
    /**
     * The start time for the search query. Specify in GMT. The value is rounded to 12 AM on the specified date.
     */
    startTime?: string | null;
    /**
     * Required when **SearchMethod** is **TEAM_DRIVE**.
     */
    teamDriveInfo?: Schema$TeamDriveInfo;
    /**
     * Service-specific [search operators](https://support.google.com/vault/answer/2474474) to filter search results.
     */
    terms?: string | null;
    /**
     * The time zone name. It should be an IANA TZ name, such as "America/Los_Angeles". For a list of time zone names, see [Time Zone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). For more information about how Vault uses time zones, see [the Vault help center](https://support.google.com/vault/answer/6092995#time).
     */
    timeZone?: string | null;
    /**
     * Set Voice search-specific options.
     */
    voiceOptions?: Schema$VoiceOptions;
  }
  /**
   * Remove a list of accounts from a hold.
   */
  export interface Schema$RemoveHeldAccountsRequest {
    /**
     * The account IDs of the accounts to remove from the hold.
     */
    accountIds?: string[] | null;
  }
  /**
   * Response for batch delete held accounts.
   */
  export interface Schema$RemoveHeldAccountsResponse {
    /**
     * A list of statuses for the deleted accounts. Results have the same order as the request.
     */
    statuses?: Schema$Status[];
  }
  /**
   * Remove an account as a matter collaborator.
   */
  export interface Schema$RemoveMatterPermissionsRequest {
    /**
     * The account ID.
     */
    accountId?: string | null;
  }
  /**
   * Reopen a matter by ID.
   */
  export interface Schema$ReopenMatterRequest {}
  /**
   * Response to a ReopenMatterRequest.
   */
  export interface Schema$ReopenMatterResponse {
    /**
     * The updated matter, with state **OPEN**.
     */
    matter?: Schema$Matter;
  }
  /**
   * The definition of a saved query. To work with Vault resources, the account must have the [required Vault privileges](https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.
   */
  export interface Schema$SavedQuery {
    /**
     * Output only. The server-generated timestamp when the saved query was created.
     */
    createTime?: string | null;
    /**
     * The name of the saved query.
     */
    displayName?: string | null;
    /**
     * Output only. The matter ID of the matter the saved query is saved in. The server does not use this field during create and always uses matter ID in the URL.
     */
    matterId?: string | null;
    /**
     * The search parameters of the saved query.
     */
    query?: Schema$Query;
    /**
     * A unique identifier for the saved query.
     */
    savedQueryId?: string | null;
  }
  /**
   * The shared drives to search
   */
  export interface Schema$SharedDriveInfo {
    /**
     * A list of shared drive IDs, as provided by the [Drive API](https://developers.google.com/drive).
     */
    sharedDriveIds?: string[] | null;
  }
  /**
   * The published site URLs of new Google Sites to search
   */
  export interface Schema$SitesUrlInfo {
    /**
     * A list of published site URLs.
     */
    urls?: string[] | null;
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
   * Team Drives to search
   */
  export interface Schema$TeamDriveInfo {
    /**
     * List of Team Drive IDs, as provided by the [Drive API](https://developers.google.com/drive).
     */
    teamDriveIds?: string[] | null;
  }
  /**
   * Undelete a matter by ID.
   */
  export interface Schema$UndeleteMatterRequest {}
  /**
   * User's information.
   */
  export interface Schema$UserInfo {
    /**
     * The displayed name of the user.
     */
    displayName?: string | null;
    /**
     * The email address of the user.
     */
    email?: string | null;
  }
  /**
   * The options for Voice exports.
   */
  export interface Schema$VoiceExportOptions {
    /**
     * The file format for exported text messages.
     */
    exportFormat?: string | null;
  }
  /**
   * Additional options for Voice search
   */
  export interface Schema$VoiceOptions {
    /**
     * Datatypes to search
     */
    coveredData?: string[] | null;
  }

  export class Resource$Matters {
    context: APIRequestContext;
    exports: Resource$Matters$Exports;
    holds: Resource$Matters$Holds;
    savedQueries: Resource$Matters$Savedqueries;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.exports = new Resource$Matters$Exports(this.context);
      this.holds = new Resource$Matters$Holds(this.context);
      this.savedQueries = new Resource$Matters$Savedqueries(this.context);
    }

    /**
     * Adds an account as a matter collaborator.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vault.googleapis.com
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
     * const vault = google.vault('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/ediscovery'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vault.matters.addPermissions({
     *     // The matter ID.
     *     matterId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "ccMe": false,
     *       //   "matterPermission": {},
     *       //   "sendEmails": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "role": "my_role"
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
    addPermissions(
      params: Params$Resource$Matters$Addpermissions,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    addPermissions(
      params?: Params$Resource$Matters$Addpermissions,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$MatterPermission>>;
    addPermissions(
      params: Params$Resource$Matters$Addpermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    addPermissions(
      params: Params$Resource$Matters$Addpermissions,
      options: MethodOptions | BodyResponseCallback<Schema$MatterPermission>,
      callback: BodyResponseCallback<Schema$MatterPermission>
    ): void;
    addPermissions(
      params: Params$Resource$Matters$Addpermissions,
      callback: BodyResponseCallback<Schema$MatterPermission>
    ): void;
    addPermissions(
      callback: BodyResponseCallback<Schema$MatterPermission>
    ): void;
    addPermissions(
      paramsOrCallback?:
        | Params$Resource$Matters$Addpermissions
        | BodyResponseCallback<Schema$MatterPermission>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$MatterPermission>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$MatterPermission>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$MatterPermission>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Matters$Addpermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Addpermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/matters/{matterId}:addPermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['matterId'],
        pathParams: ['matterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$MatterPermission>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$MatterPermission>(parameters);
      }
    }

    /**
     * Closes the specified matter. Returns the matter with updated state.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vault.googleapis.com
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
     * const vault = google.vault('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/ediscovery'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vault.matters.close({
     *     // The matter ID.
     *     matterId: 'placeholder-value',
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
     *   //   "matter": {}
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
      params: Params$Resource$Matters$Close,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    close(
      params?: Params$Resource$Matters$Close,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CloseMatterResponse>>;
    close(
      params: Params$Resource$Matters$Close,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    close(
      params: Params$Resource$Matters$Close,
      options: MethodOptions | BodyResponseCallback<Schema$CloseMatterResponse>,
      callback: BodyResponseCallback<Schema$CloseMatterResponse>
    ): void;
    close(
      params: Params$Resource$Matters$Close,
      callback: BodyResponseCallback<Schema$CloseMatterResponse>
    ): void;
    close(callback: BodyResponseCallback<Schema$CloseMatterResponse>): void;
    close(
      paramsOrCallback?:
        | Params$Resource$Matters$Close
        | BodyResponseCallback<Schema$CloseMatterResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CloseMatterResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CloseMatterResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CloseMatterResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Matters$Close;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Close;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/matters/{matterId}:close').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['matterId'],
        pathParams: ['matterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CloseMatterResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CloseMatterResponse>(parameters);
      }
    }

    /**
     * Counts the accounts processed by the specified query.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vault.googleapis.com
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
     * const vault = google.vault('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/ediscovery'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vault.matters.count({
     *     // The matter ID.
     *     matterId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "query": {},
     *       //   "view": "my_view"
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
    count(
      params: Params$Resource$Matters$Count,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    count(
      params?: Params$Resource$Matters$Count,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    count(
      params: Params$Resource$Matters$Count,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    count(
      params: Params$Resource$Matters$Count,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    count(
      params: Params$Resource$Matters$Count,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    count(callback: BodyResponseCallback<Schema$Operation>): void;
    count(
      paramsOrCallback?:
        | Params$Resource$Matters$Count
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
      let params = (paramsOrCallback || {}) as Params$Resource$Matters$Count;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Count;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/matters/{matterId}:count').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['matterId'],
        pathParams: ['matterId'],
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
     * Creates a matter with the given name and description. The initial state is open, and the owner is the method caller. Returns the created matter with default view.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vault.googleapis.com
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
     * const vault = google.vault('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/ediscovery'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vault.matters.create({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "description": "my_description",
     *       //   "matterId": "my_matterId",
     *       //   "matterPermissions": [],
     *       //   "matterRegion": "my_matterRegion",
     *       //   "name": "my_name",
     *       //   "state": "my_state"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "matterId": "my_matterId",
     *   //   "matterPermissions": [],
     *   //   "matterRegion": "my_matterRegion",
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
      params: Params$Resource$Matters$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Matters$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Matter>>;
    create(
      params: Params$Resource$Matters$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Matters$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Matter>,
      callback: BodyResponseCallback<Schema$Matter>
    ): void;
    create(
      params: Params$Resource$Matters$Create,
      callback: BodyResponseCallback<Schema$Matter>
    ): void;
    create(callback: BodyResponseCallback<Schema$Matter>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Matters$Create
        | BodyResponseCallback<Schema$Matter>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Matter>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Matter>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Matter>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Matters$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/matters').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Matter>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Matter>(parameters);
      }
    }

    /**
     * Deletes the specified matter. Returns the matter with updated state.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vault.googleapis.com
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
     * const vault = google.vault('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/ediscovery'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vault.matters.delete({
     *     // The matter ID
     *     matterId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "matterId": "my_matterId",
     *   //   "matterPermissions": [],
     *   //   "matterRegion": "my_matterRegion",
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
    delete(
      params: Params$Resource$Matters$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Matters$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Matter>>;
    delete(
      params: Params$Resource$Matters$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Matters$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Matter>,
      callback: BodyResponseCallback<Schema$Matter>
    ): void;
    delete(
      params: Params$Resource$Matters$Delete,
      callback: BodyResponseCallback<Schema$Matter>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Matter>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Matters$Delete
        | BodyResponseCallback<Schema$Matter>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Matter>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Matter>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Matter>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Matters$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/matters/{matterId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['matterId'],
        pathParams: ['matterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Matter>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Matter>(parameters);
      }
    }

    /**
     * Gets the specified matter.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vault.googleapis.com
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
     * const vault = google.vault('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ediscovery',
     *       'https://www.googleapis.com/auth/ediscovery.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vault.matters.get({
     *     // The matter ID.
     *     matterId: 'placeholder-value',
     *     // Specifies how much information about the matter to return in the response.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "matterId": "my_matterId",
     *   //   "matterPermissions": [],
     *   //   "matterRegion": "my_matterRegion",
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
    get(
      params: Params$Resource$Matters$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Matters$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Matter>>;
    get(
      params: Params$Resource$Matters$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Matters$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Matter>,
      callback: BodyResponseCallback<Schema$Matter>
    ): void;
    get(
      params: Params$Resource$Matters$Get,
      callback: BodyResponseCallback<Schema$Matter>
    ): void;
    get(callback: BodyResponseCallback<Schema$Matter>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Matters$Get
        | BodyResponseCallback<Schema$Matter>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Matter>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Matter>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Matter>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Matters$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/matters/{matterId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['matterId'],
        pathParams: ['matterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Matter>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Matter>(parameters);
      }
    }

    /**
     * Lists matters the requestor has access to.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vault.googleapis.com
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
     * const vault = google.vault('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ediscovery',
     *       'https://www.googleapis.com/auth/ediscovery.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vault.matters.list({
     *     // The number of matters to return in the response. Default and maximum are 100.
     *     pageSize: 'placeholder-value',
     *     // The pagination token as returned in the response.
     *     pageToken: 'placeholder-value',
     *     // If set, lists only matters with the specified state. The default lists matters of all states.
     *     state: 'placeholder-value',
     *     // Specifies how much information about the matter to return in response.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "matters": [],
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
      params: Params$Resource$Matters$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Matters$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListMattersResponse>>;
    list(
      params: Params$Resource$Matters$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Matters$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListMattersResponse>,
      callback: BodyResponseCallback<Schema$ListMattersResponse>
    ): void;
    list(
      params: Params$Resource$Matters$List,
      callback: BodyResponseCallback<Schema$ListMattersResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListMattersResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Matters$List
        | BodyResponseCallback<Schema$ListMattersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListMattersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListMattersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListMattersResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Matters$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/matters').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListMattersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListMattersResponse>(parameters);
      }
    }

    /**
     * Removes an account as a matter collaborator.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vault.googleapis.com
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
     * const vault = google.vault('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/ediscovery'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vault.matters.removePermissions({
     *     // The matter ID.
     *     matterId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountId": "my_accountId"
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
    removePermissions(
      params: Params$Resource$Matters$Removepermissions,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    removePermissions(
      params?: Params$Resource$Matters$Removepermissions,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    removePermissions(
      params: Params$Resource$Matters$Removepermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    removePermissions(
      params: Params$Resource$Matters$Removepermissions,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    removePermissions(
      params: Params$Resource$Matters$Removepermissions,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    removePermissions(callback: BodyResponseCallback<Schema$Empty>): void;
    removePermissions(
      paramsOrCallback?:
        | Params$Resource$Matters$Removepermissions
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
        {}) as Params$Resource$Matters$Removepermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Removepermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/matters/{matterId}:removePermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['matterId'],
        pathParams: ['matterId'],
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
     * Reopens the specified matter. Returns the matter with updated state.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vault.googleapis.com
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
     * const vault = google.vault('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/ediscovery'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vault.matters.reopen({
     *     // The matter ID.
     *     matterId: 'placeholder-value',
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
     *   //   "matter": {}
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
    reopen(
      params: Params$Resource$Matters$Reopen,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    reopen(
      params?: Params$Resource$Matters$Reopen,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ReopenMatterResponse>>;
    reopen(
      params: Params$Resource$Matters$Reopen,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    reopen(
      params: Params$Resource$Matters$Reopen,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ReopenMatterResponse>,
      callback: BodyResponseCallback<Schema$ReopenMatterResponse>
    ): void;
    reopen(
      params: Params$Resource$Matters$Reopen,
      callback: BodyResponseCallback<Schema$ReopenMatterResponse>
    ): void;
    reopen(callback: BodyResponseCallback<Schema$ReopenMatterResponse>): void;
    reopen(
      paramsOrCallback?:
        | Params$Resource$Matters$Reopen
        | BodyResponseCallback<Schema$ReopenMatterResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ReopenMatterResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ReopenMatterResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ReopenMatterResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Matters$Reopen;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Reopen;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/matters/{matterId}:reopen').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['matterId'],
        pathParams: ['matterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ReopenMatterResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ReopenMatterResponse>(parameters);
      }
    }

    /**
     * Undeletes the specified matter. Returns the matter with updated state.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vault.googleapis.com
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
     * const vault = google.vault('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/ediscovery'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vault.matters.undelete({
     *     // The matter ID.
     *     matterId: 'placeholder-value',
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
     *   //   "description": "my_description",
     *   //   "matterId": "my_matterId",
     *   //   "matterPermissions": [],
     *   //   "matterRegion": "my_matterRegion",
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
    undelete(
      params: Params$Resource$Matters$Undelete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    undelete(
      params?: Params$Resource$Matters$Undelete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Matter>>;
    undelete(
      params: Params$Resource$Matters$Undelete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    undelete(
      params: Params$Resource$Matters$Undelete,
      options: MethodOptions | BodyResponseCallback<Schema$Matter>,
      callback: BodyResponseCallback<Schema$Matter>
    ): void;
    undelete(
      params: Params$Resource$Matters$Undelete,
      callback: BodyResponseCallback<Schema$Matter>
    ): void;
    undelete(callback: BodyResponseCallback<Schema$Matter>): void;
    undelete(
      paramsOrCallback?:
        | Params$Resource$Matters$Undelete
        | BodyResponseCallback<Schema$Matter>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Matter>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Matter>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Matter>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Matters$Undelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Undelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/matters/{matterId}:undelete').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['matterId'],
        pathParams: ['matterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Matter>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Matter>(parameters);
      }
    }

    /**
     * Updates the specified matter. This updates only the name and description of the matter, identified by matter ID. Changes to any other fields are ignored. Returns the default view of the matter.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vault.googleapis.com
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
     * const vault = google.vault('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/ediscovery'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vault.matters.update({
     *     // The matter ID.
     *     matterId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "description": "my_description",
     *       //   "matterId": "my_matterId",
     *       //   "matterPermissions": [],
     *       //   "matterRegion": "my_matterRegion",
     *       //   "name": "my_name",
     *       //   "state": "my_state"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "matterId": "my_matterId",
     *   //   "matterPermissions": [],
     *   //   "matterRegion": "my_matterRegion",
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
    update(
      params: Params$Resource$Matters$Update,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    update(
      params?: Params$Resource$Matters$Update,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Matter>>;
    update(
      params: Params$Resource$Matters$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Matters$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Matter>,
      callback: BodyResponseCallback<Schema$Matter>
    ): void;
    update(
      params: Params$Resource$Matters$Update,
      callback: BodyResponseCallback<Schema$Matter>
    ): void;
    update(callback: BodyResponseCallback<Schema$Matter>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Matters$Update
        | BodyResponseCallback<Schema$Matter>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Matter>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Matter>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Matter>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Matters$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/matters/{matterId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['matterId'],
        pathParams: ['matterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Matter>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Matter>(parameters);
      }
    }
  }

  export interface Params$Resource$Matters$Addpermissions
    extends StandardParameters {
    /**
     * The matter ID.
     */
    matterId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AddMatterPermissionsRequest;
  }
  export interface Params$Resource$Matters$Close extends StandardParameters {
    /**
     * The matter ID.
     */
    matterId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CloseMatterRequest;
  }
  export interface Params$Resource$Matters$Count extends StandardParameters {
    /**
     * The matter ID.
     */
    matterId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CountArtifactsRequest;
  }
  export interface Params$Resource$Matters$Create extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$Matter;
  }
  export interface Params$Resource$Matters$Delete extends StandardParameters {
    /**
     * The matter ID
     */
    matterId?: string;
  }
  export interface Params$Resource$Matters$Get extends StandardParameters {
    /**
     * The matter ID.
     */
    matterId?: string;
    /**
     * Specifies how much information about the matter to return in the response.
     */
    view?: string;
  }
  export interface Params$Resource$Matters$List extends StandardParameters {
    /**
     * The number of matters to return in the response. Default and maximum are 100.
     */
    pageSize?: number;
    /**
     * The pagination token as returned in the response.
     */
    pageToken?: string;
    /**
     * If set, lists only matters with the specified state. The default lists matters of all states.
     */
    state?: string;
    /**
     * Specifies how much information about the matter to return in response.
     */
    view?: string;
  }
  export interface Params$Resource$Matters$Removepermissions
    extends StandardParameters {
    /**
     * The matter ID.
     */
    matterId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RemoveMatterPermissionsRequest;
  }
  export interface Params$Resource$Matters$Reopen extends StandardParameters {
    /**
     * The matter ID.
     */
    matterId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ReopenMatterRequest;
  }
  export interface Params$Resource$Matters$Undelete extends StandardParameters {
    /**
     * The matter ID.
     */
    matterId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UndeleteMatterRequest;
  }
  export interface Params$Resource$Matters$Update extends StandardParameters {
    /**
     * The matter ID.
     */
    matterId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Matter;
  }

  export class Resource$Matters$Exports {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates an export.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vault.googleapis.com
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
     * const vault = google.vault('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/ediscovery'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vault.matters.exports.create({
     *     // The matter ID.
     *     matterId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "cloudStorageSink": {},
     *       //   "createTime": "my_createTime",
     *       //   "exportOptions": {},
     *       //   "id": "my_id",
     *       //   "matterId": "my_matterId",
     *       //   "name": "my_name",
     *       //   "parentExportId": "my_parentExportId",
     *       //   "query": {},
     *       //   "requester": {},
     *       //   "stats": {},
     *       //   "status": "my_status"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cloudStorageSink": {},
     *   //   "createTime": "my_createTime",
     *   //   "exportOptions": {},
     *   //   "id": "my_id",
     *   //   "matterId": "my_matterId",
     *   //   "name": "my_name",
     *   //   "parentExportId": "my_parentExportId",
     *   //   "query": {},
     *   //   "requester": {},
     *   //   "stats": {},
     *   //   "status": "my_status"
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
      params: Params$Resource$Matters$Exports$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Matters$Exports$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Export>>;
    create(
      params: Params$Resource$Matters$Exports$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Matters$Exports$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Export>,
      callback: BodyResponseCallback<Schema$Export>
    ): void;
    create(
      params: Params$Resource$Matters$Exports$Create,
      callback: BodyResponseCallback<Schema$Export>
    ): void;
    create(callback: BodyResponseCallback<Schema$Export>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Matters$Exports$Create
        | BodyResponseCallback<Schema$Export>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Export>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Export>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Export>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Matters$Exports$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Exports$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/matters/{matterId}/exports').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['matterId'],
        pathParams: ['matterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Export>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Export>(parameters);
      }
    }

    /**
     * Deletes an export.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vault.googleapis.com
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
     * const vault = google.vault('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/ediscovery'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vault.matters.exports.delete({
     *     // The export ID.
     *     exportId: 'placeholder-value',
     *     // The matter ID.
     *     matterId: 'placeholder-value',
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
      params: Params$Resource$Matters$Exports$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Matters$Exports$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Matters$Exports$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Matters$Exports$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Matters$Exports$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Matters$Exports$Delete
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
        {}) as Params$Resource$Matters$Exports$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Exports$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/matters/{matterId}/exports/{exportId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['matterId', 'exportId'],
        pathParams: ['exportId', 'matterId'],
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
     * Gets an export.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vault.googleapis.com
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
     * const vault = google.vault('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ediscovery',
     *       'https://www.googleapis.com/auth/ediscovery.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vault.matters.exports.get({
     *     // The export ID.
     *     exportId: 'placeholder-value',
     *     // The matter ID.
     *     matterId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cloudStorageSink": {},
     *   //   "createTime": "my_createTime",
     *   //   "exportOptions": {},
     *   //   "id": "my_id",
     *   //   "matterId": "my_matterId",
     *   //   "name": "my_name",
     *   //   "parentExportId": "my_parentExportId",
     *   //   "query": {},
     *   //   "requester": {},
     *   //   "stats": {},
     *   //   "status": "my_status"
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
      params: Params$Resource$Matters$Exports$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Matters$Exports$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Export>>;
    get(
      params: Params$Resource$Matters$Exports$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Matters$Exports$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Export>,
      callback: BodyResponseCallback<Schema$Export>
    ): void;
    get(
      params: Params$Resource$Matters$Exports$Get,
      callback: BodyResponseCallback<Schema$Export>
    ): void;
    get(callback: BodyResponseCallback<Schema$Export>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Matters$Exports$Get
        | BodyResponseCallback<Schema$Export>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Export>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Export>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Export>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Matters$Exports$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Exports$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/matters/{matterId}/exports/{exportId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['matterId', 'exportId'],
        pathParams: ['exportId', 'matterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Export>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Export>(parameters);
      }
    }

    /**
     * Lists details about the exports in the specified matter.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vault.googleapis.com
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
     * const vault = google.vault('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ediscovery',
     *       'https://www.googleapis.com/auth/ediscovery.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vault.matters.exports.list({
     *     // The matter ID.
     *     matterId: 'placeholder-value',
     *     // The number of exports to return in the response.
     *     pageSize: 'placeholder-value',
     *     // The pagination token as returned in the response.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "exports": [],
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
      params: Params$Resource$Matters$Exports$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Matters$Exports$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListExportsResponse>>;
    list(
      params: Params$Resource$Matters$Exports$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Matters$Exports$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListExportsResponse>,
      callback: BodyResponseCallback<Schema$ListExportsResponse>
    ): void;
    list(
      params: Params$Resource$Matters$Exports$List,
      callback: BodyResponseCallback<Schema$ListExportsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListExportsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Matters$Exports$List
        | BodyResponseCallback<Schema$ListExportsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListExportsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListExportsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListExportsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Matters$Exports$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Exports$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/matters/{matterId}/exports').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['matterId'],
        pathParams: ['matterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListExportsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListExportsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Matters$Exports$Create
    extends StandardParameters {
    /**
     * The matter ID.
     */
    matterId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Export;
  }
  export interface Params$Resource$Matters$Exports$Delete
    extends StandardParameters {
    /**
     * The export ID.
     */
    exportId?: string;
    /**
     * The matter ID.
     */
    matterId?: string;
  }
  export interface Params$Resource$Matters$Exports$Get
    extends StandardParameters {
    /**
     * The export ID.
     */
    exportId?: string;
    /**
     * The matter ID.
     */
    matterId?: string;
  }
  export interface Params$Resource$Matters$Exports$List
    extends StandardParameters {
    /**
     * The matter ID.
     */
    matterId?: string;
    /**
     * The number of exports to return in the response.
     */
    pageSize?: number;
    /**
     * The pagination token as returned in the response.
     */
    pageToken?: string;
  }

  export class Resource$Matters$Holds {
    context: APIRequestContext;
    accounts: Resource$Matters$Holds$Accounts;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.accounts = new Resource$Matters$Holds$Accounts(this.context);
    }

    /**
     * Adds accounts to a hold. Returns a list of accounts that have been successfully added. Accounts can be added only to an existing account-based hold.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vault.googleapis.com
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
     * const vault = google.vault('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/ediscovery'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vault.matters.holds.addHeldAccounts({
     *     // The hold ID.
     *     holdId: 'placeholder-value',
     *     // The matter ID.
     *     matterId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountIds": [],
     *       //   "emails": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "responses": []
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
    addHeldAccounts(
      params: Params$Resource$Matters$Holds$Addheldaccounts,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    addHeldAccounts(
      params?: Params$Resource$Matters$Holds$Addheldaccounts,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AddHeldAccountsResponse>>;
    addHeldAccounts(
      params: Params$Resource$Matters$Holds$Addheldaccounts,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    addHeldAccounts(
      params: Params$Resource$Matters$Holds$Addheldaccounts,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AddHeldAccountsResponse>,
      callback: BodyResponseCallback<Schema$AddHeldAccountsResponse>
    ): void;
    addHeldAccounts(
      params: Params$Resource$Matters$Holds$Addheldaccounts,
      callback: BodyResponseCallback<Schema$AddHeldAccountsResponse>
    ): void;
    addHeldAccounts(
      callback: BodyResponseCallback<Schema$AddHeldAccountsResponse>
    ): void;
    addHeldAccounts(
      paramsOrCallback?:
        | Params$Resource$Matters$Holds$Addheldaccounts
        | BodyResponseCallback<Schema$AddHeldAccountsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AddHeldAccountsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AddHeldAccountsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AddHeldAccountsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Matters$Holds$Addheldaccounts;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Holds$Addheldaccounts;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/matters/{matterId}/holds/{holdId}:addHeldAccounts'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['matterId', 'holdId'],
        pathParams: ['holdId', 'matterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AddHeldAccountsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AddHeldAccountsResponse>(parameters);
      }
    }

    /**
     * Creates a hold in the specified matter.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vault.googleapis.com
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
     * const vault = google.vault('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/ediscovery'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vault.matters.holds.create({
     *     // The matter ID.
     *     matterId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accounts": [],
     *       //   "corpus": "my_corpus",
     *       //   "holdId": "my_holdId",
     *       //   "name": "my_name",
     *       //   "orgUnit": {},
     *       //   "query": {},
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accounts": [],
     *   //   "corpus": "my_corpus",
     *   //   "holdId": "my_holdId",
     *   //   "name": "my_name",
     *   //   "orgUnit": {},
     *   //   "query": {},
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
      params: Params$Resource$Matters$Holds$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Matters$Holds$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Hold>>;
    create(
      params: Params$Resource$Matters$Holds$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Matters$Holds$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Hold>,
      callback: BodyResponseCallback<Schema$Hold>
    ): void;
    create(
      params: Params$Resource$Matters$Holds$Create,
      callback: BodyResponseCallback<Schema$Hold>
    ): void;
    create(callback: BodyResponseCallback<Schema$Hold>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Matters$Holds$Create
        | BodyResponseCallback<Schema$Hold>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Hold>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Hold>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Hold>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Matters$Holds$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Holds$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/matters/{matterId}/holds').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['matterId'],
        pathParams: ['matterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Hold>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Hold>(parameters);
      }
    }

    /**
     * Removes the specified hold and releases the accounts or organizational unit covered by the hold. If the data is not preserved by another hold or retention rule, it might be purged.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vault.googleapis.com
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
     * const vault = google.vault('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/ediscovery'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vault.matters.holds.delete({
     *     // The hold ID.
     *     holdId: 'placeholder-value',
     *     // The matter ID.
     *     matterId: 'placeholder-value',
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
      params: Params$Resource$Matters$Holds$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Matters$Holds$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Matters$Holds$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Matters$Holds$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Matters$Holds$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Matters$Holds$Delete
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
        {}) as Params$Resource$Matters$Holds$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Holds$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/matters/{matterId}/holds/{holdId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['matterId', 'holdId'],
        pathParams: ['holdId', 'matterId'],
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
     * Gets the specified hold.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vault.googleapis.com
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
     * const vault = google.vault('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ediscovery',
     *       'https://www.googleapis.com/auth/ediscovery.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vault.matters.holds.get({
     *     // The hold ID.
     *     holdId: 'placeholder-value',
     *     // The matter ID.
     *     matterId: 'placeholder-value',
     *     // The amount of detail to return for a hold.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accounts": [],
     *   //   "corpus": "my_corpus",
     *   //   "holdId": "my_holdId",
     *   //   "name": "my_name",
     *   //   "orgUnit": {},
     *   //   "query": {},
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
      params: Params$Resource$Matters$Holds$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Matters$Holds$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Hold>>;
    get(
      params: Params$Resource$Matters$Holds$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Matters$Holds$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Hold>,
      callback: BodyResponseCallback<Schema$Hold>
    ): void;
    get(
      params: Params$Resource$Matters$Holds$Get,
      callback: BodyResponseCallback<Schema$Hold>
    ): void;
    get(callback: BodyResponseCallback<Schema$Hold>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Matters$Holds$Get
        | BodyResponseCallback<Schema$Hold>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Hold>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Hold>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Hold>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Matters$Holds$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Holds$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/matters/{matterId}/holds/{holdId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['matterId', 'holdId'],
        pathParams: ['holdId', 'matterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Hold>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Hold>(parameters);
      }
    }

    /**
     * Lists the holds in a matter.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vault.googleapis.com
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
     * const vault = google.vault('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ediscovery',
     *       'https://www.googleapis.com/auth/ediscovery.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vault.matters.holds.list({
     *     // The matter ID.
     *     matterId: 'placeholder-value',
     *     // The number of holds to return in the response, between 0 and 100 inclusive. Leaving this empty, or as 0, is the same as **page_size** = 100.
     *     pageSize: 'placeholder-value',
     *     // The pagination token as returned in the response. An empty token means start from the beginning.
     *     pageToken: 'placeholder-value',
     *     // The amount of detail to return for a hold.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "holds": [],
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
      params: Params$Resource$Matters$Holds$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Matters$Holds$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListHoldsResponse>>;
    list(
      params: Params$Resource$Matters$Holds$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Matters$Holds$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListHoldsResponse>,
      callback: BodyResponseCallback<Schema$ListHoldsResponse>
    ): void;
    list(
      params: Params$Resource$Matters$Holds$List,
      callback: BodyResponseCallback<Schema$ListHoldsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListHoldsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Matters$Holds$List
        | BodyResponseCallback<Schema$ListHoldsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListHoldsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListHoldsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListHoldsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Matters$Holds$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Holds$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/matters/{matterId}/holds').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['matterId'],
        pathParams: ['matterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListHoldsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListHoldsResponse>(parameters);
      }
    }

    /**
     * Removes the specified accounts from a hold. Returns a list of statuses in the same order as the request.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vault.googleapis.com
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
     * const vault = google.vault('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/ediscovery'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vault.matters.holds.removeHeldAccounts({
     *     // The hold ID.
     *     holdId: 'placeholder-value',
     *     // The matter ID.
     *     matterId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountIds": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "statuses": []
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
    removeHeldAccounts(
      params: Params$Resource$Matters$Holds$Removeheldaccounts,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    removeHeldAccounts(
      params?: Params$Resource$Matters$Holds$Removeheldaccounts,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$RemoveHeldAccountsResponse>>;
    removeHeldAccounts(
      params: Params$Resource$Matters$Holds$Removeheldaccounts,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    removeHeldAccounts(
      params: Params$Resource$Matters$Holds$Removeheldaccounts,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RemoveHeldAccountsResponse>,
      callback: BodyResponseCallback<Schema$RemoveHeldAccountsResponse>
    ): void;
    removeHeldAccounts(
      params: Params$Resource$Matters$Holds$Removeheldaccounts,
      callback: BodyResponseCallback<Schema$RemoveHeldAccountsResponse>
    ): void;
    removeHeldAccounts(
      callback: BodyResponseCallback<Schema$RemoveHeldAccountsResponse>
    ): void;
    removeHeldAccounts(
      paramsOrCallback?:
        | Params$Resource$Matters$Holds$Removeheldaccounts
        | BodyResponseCallback<Schema$RemoveHeldAccountsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RemoveHeldAccountsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RemoveHeldAccountsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$RemoveHeldAccountsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Matters$Holds$Removeheldaccounts;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Holds$Removeheldaccounts;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1/matters/{matterId}/holds/{holdId}:removeHeldAccounts'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['matterId', 'holdId'],
        pathParams: ['holdId', 'matterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RemoveHeldAccountsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RemoveHeldAccountsResponse>(parameters);
      }
    }

    /**
     * Updates the scope (organizational unit or accounts) and query parameters of a hold. You cannot add accounts to a hold that covers an organizational unit, nor can you add organizational units to a hold that covers individual accounts. If you try, the unsupported values are ignored.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vault.googleapis.com
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
     * const vault = google.vault('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/ediscovery'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vault.matters.holds.update({
     *     // The ID of the hold.
     *     holdId: 'placeholder-value',
     *     // The matter ID.
     *     matterId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accounts": [],
     *       //   "corpus": "my_corpus",
     *       //   "holdId": "my_holdId",
     *       //   "name": "my_name",
     *       //   "orgUnit": {},
     *       //   "query": {},
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accounts": [],
     *   //   "corpus": "my_corpus",
     *   //   "holdId": "my_holdId",
     *   //   "name": "my_name",
     *   //   "orgUnit": {},
     *   //   "query": {},
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
    update(
      params: Params$Resource$Matters$Holds$Update,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    update(
      params?: Params$Resource$Matters$Holds$Update,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Hold>>;
    update(
      params: Params$Resource$Matters$Holds$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Matters$Holds$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Hold>,
      callback: BodyResponseCallback<Schema$Hold>
    ): void;
    update(
      params: Params$Resource$Matters$Holds$Update,
      callback: BodyResponseCallback<Schema$Hold>
    ): void;
    update(callback: BodyResponseCallback<Schema$Hold>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Matters$Holds$Update
        | BodyResponseCallback<Schema$Hold>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Hold>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Hold>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Hold>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Matters$Holds$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Holds$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/matters/{matterId}/holds/{holdId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['matterId', 'holdId'],
        pathParams: ['holdId', 'matterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Hold>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Hold>(parameters);
      }
    }
  }

  export interface Params$Resource$Matters$Holds$Addheldaccounts
    extends StandardParameters {
    /**
     * The hold ID.
     */
    holdId?: string;
    /**
     * The matter ID.
     */
    matterId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AddHeldAccountsRequest;
  }
  export interface Params$Resource$Matters$Holds$Create
    extends StandardParameters {
    /**
     * The matter ID.
     */
    matterId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Hold;
  }
  export interface Params$Resource$Matters$Holds$Delete
    extends StandardParameters {
    /**
     * The hold ID.
     */
    holdId?: string;
    /**
     * The matter ID.
     */
    matterId?: string;
  }
  export interface Params$Resource$Matters$Holds$Get
    extends StandardParameters {
    /**
     * The hold ID.
     */
    holdId?: string;
    /**
     * The matter ID.
     */
    matterId?: string;
    /**
     * The amount of detail to return for a hold.
     */
    view?: string;
  }
  export interface Params$Resource$Matters$Holds$List
    extends StandardParameters {
    /**
     * The matter ID.
     */
    matterId?: string;
    /**
     * The number of holds to return in the response, between 0 and 100 inclusive. Leaving this empty, or as 0, is the same as **page_size** = 100.
     */
    pageSize?: number;
    /**
     * The pagination token as returned in the response. An empty token means start from the beginning.
     */
    pageToken?: string;
    /**
     * The amount of detail to return for a hold.
     */
    view?: string;
  }
  export interface Params$Resource$Matters$Holds$Removeheldaccounts
    extends StandardParameters {
    /**
     * The hold ID.
     */
    holdId?: string;
    /**
     * The matter ID.
     */
    matterId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RemoveHeldAccountsRequest;
  }
  export interface Params$Resource$Matters$Holds$Update
    extends StandardParameters {
    /**
     * The ID of the hold.
     */
    holdId?: string;
    /**
     * The matter ID.
     */
    matterId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Hold;
  }

  export class Resource$Matters$Holds$Accounts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Adds an account to a hold. Accounts can be added only to a hold that does not have an organizational unit set. If you try to add an account to an organizational unit-based hold, an error is returned.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vault.googleapis.com
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
     * const vault = google.vault('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/ediscovery'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vault.matters.holds.accounts.create({
     *     // The hold ID.
     *     holdId: 'placeholder-value',
     *     // The matter ID.
     *     matterId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountId": "my_accountId",
     *       //   "email": "my_email",
     *       //   "firstName": "my_firstName",
     *       //   "holdTime": "my_holdTime",
     *       //   "lastName": "my_lastName"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "email": "my_email",
     *   //   "firstName": "my_firstName",
     *   //   "holdTime": "my_holdTime",
     *   //   "lastName": "my_lastName"
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
      params: Params$Resource$Matters$Holds$Accounts$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Matters$Holds$Accounts$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$HeldAccount>>;
    create(
      params: Params$Resource$Matters$Holds$Accounts$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Matters$Holds$Accounts$Create,
      options: MethodOptions | BodyResponseCallback<Schema$HeldAccount>,
      callback: BodyResponseCallback<Schema$HeldAccount>
    ): void;
    create(
      params: Params$Resource$Matters$Holds$Accounts$Create,
      callback: BodyResponseCallback<Schema$HeldAccount>
    ): void;
    create(callback: BodyResponseCallback<Schema$HeldAccount>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Matters$Holds$Accounts$Create
        | BodyResponseCallback<Schema$HeldAccount>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HeldAccount>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HeldAccount>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$HeldAccount>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Matters$Holds$Accounts$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Holds$Accounts$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/matters/{matterId}/holds/{holdId}/accounts'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['matterId', 'holdId'],
        pathParams: ['holdId', 'matterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$HeldAccount>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HeldAccount>(parameters);
      }
    }

    /**
     * Removes an account from a hold.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vault.googleapis.com
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
     * const vault = google.vault('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/ediscovery'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vault.matters.holds.accounts.delete({
     *     // The ID of the account to remove from the hold.
     *     accountId: 'placeholder-value',
     *     // The hold ID.
     *     holdId: 'placeholder-value',
     *     // The matter ID.
     *     matterId: 'placeholder-value',
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
      params: Params$Resource$Matters$Holds$Accounts$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Matters$Holds$Accounts$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Matters$Holds$Accounts$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Matters$Holds$Accounts$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Matters$Holds$Accounts$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Matters$Holds$Accounts$Delete
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
        {}) as Params$Resource$Matters$Holds$Accounts$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Holds$Accounts$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1/matters/{matterId}/holds/{holdId}/accounts/{accountId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['matterId', 'holdId', 'accountId'],
        pathParams: ['accountId', 'holdId', 'matterId'],
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
     * Lists the accounts covered by a hold. This can list only individually-specified accounts covered by the hold. If the hold covers an organizational unit, use the [Admin SDK](https://developers.google.com/admin-sdk/). to list the members of the organizational unit on hold.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vault.googleapis.com
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
     * const vault = google.vault('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ediscovery',
     *       'https://www.googleapis.com/auth/ediscovery.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vault.matters.holds.accounts.list({
     *     // The hold ID.
     *     holdId: 'placeholder-value',
     *     // The matter ID.
     *     matterId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accounts": []
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
      params: Params$Resource$Matters$Holds$Accounts$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Matters$Holds$Accounts$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListHeldAccountsResponse>>;
    list(
      params: Params$Resource$Matters$Holds$Accounts$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Matters$Holds$Accounts$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListHeldAccountsResponse>,
      callback: BodyResponseCallback<Schema$ListHeldAccountsResponse>
    ): void;
    list(
      params: Params$Resource$Matters$Holds$Accounts$List,
      callback: BodyResponseCallback<Schema$ListHeldAccountsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListHeldAccountsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Matters$Holds$Accounts$List
        | BodyResponseCallback<Schema$ListHeldAccountsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListHeldAccountsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListHeldAccountsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListHeldAccountsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Matters$Holds$Accounts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Holds$Accounts$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/matters/{matterId}/holds/{holdId}/accounts'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['matterId', 'holdId'],
        pathParams: ['holdId', 'matterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListHeldAccountsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListHeldAccountsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Matters$Holds$Accounts$Create
    extends StandardParameters {
    /**
     * The hold ID.
     */
    holdId?: string;
    /**
     * The matter ID.
     */
    matterId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$HeldAccount;
  }
  export interface Params$Resource$Matters$Holds$Accounts$Delete
    extends StandardParameters {
    /**
     * The ID of the account to remove from the hold.
     */
    accountId?: string;
    /**
     * The hold ID.
     */
    holdId?: string;
    /**
     * The matter ID.
     */
    matterId?: string;
  }
  export interface Params$Resource$Matters$Holds$Accounts$List
    extends StandardParameters {
    /**
     * The hold ID.
     */
    holdId?: string;
    /**
     * The matter ID.
     */
    matterId?: string;
  }

  export class Resource$Matters$Savedqueries {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a saved query.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vault.googleapis.com
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
     * const vault = google.vault('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/ediscovery'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vault.matters.savedQueries.create({
     *     // The ID of the matter to create the saved query in.
     *     matterId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "displayName": "my_displayName",
     *       //   "matterId": "my_matterId",
     *       //   "query": {},
     *       //   "savedQueryId": "my_savedQueryId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "matterId": "my_matterId",
     *   //   "query": {},
     *   //   "savedQueryId": "my_savedQueryId"
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
      params: Params$Resource$Matters$Savedqueries$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Matters$Savedqueries$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SavedQuery>>;
    create(
      params: Params$Resource$Matters$Savedqueries$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Matters$Savedqueries$Create,
      options: MethodOptions | BodyResponseCallback<Schema$SavedQuery>,
      callback: BodyResponseCallback<Schema$SavedQuery>
    ): void;
    create(
      params: Params$Resource$Matters$Savedqueries$Create,
      callback: BodyResponseCallback<Schema$SavedQuery>
    ): void;
    create(callback: BodyResponseCallback<Schema$SavedQuery>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Matters$Savedqueries$Create
        | BodyResponseCallback<Schema$SavedQuery>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SavedQuery>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SavedQuery>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SavedQuery>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Matters$Savedqueries$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Savedqueries$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/matters/{matterId}/savedQueries').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['matterId'],
        pathParams: ['matterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SavedQuery>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SavedQuery>(parameters);
      }
    }

    /**
     * Deletes the specified saved query.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vault.googleapis.com
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
     * const vault = google.vault('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/ediscovery'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vault.matters.savedQueries.delete({
     *     // The ID of the matter to delete the saved query from.
     *     matterId: 'placeholder-value',
     *     // ID of the saved query to delete.
     *     savedQueryId: 'placeholder-value',
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
      params: Params$Resource$Matters$Savedqueries$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Matters$Savedqueries$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Matters$Savedqueries$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Matters$Savedqueries$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Matters$Savedqueries$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Matters$Savedqueries$Delete
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
        {}) as Params$Resource$Matters$Savedqueries$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Savedqueries$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/matters/{matterId}/savedQueries/{savedQueryId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['matterId', 'savedQueryId'],
        pathParams: ['matterId', 'savedQueryId'],
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
     * Retrieves the specified saved query.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vault.googleapis.com
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
     * const vault = google.vault('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ediscovery',
     *       'https://www.googleapis.com/auth/ediscovery.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vault.matters.savedQueries.get({
     *     // The ID of the matter to get the saved query from.
     *     matterId: 'placeholder-value',
     *     // ID of the saved query to retrieve.
     *     savedQueryId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "matterId": "my_matterId",
     *   //   "query": {},
     *   //   "savedQueryId": "my_savedQueryId"
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
      params: Params$Resource$Matters$Savedqueries$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Matters$Savedqueries$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SavedQuery>>;
    get(
      params: Params$Resource$Matters$Savedqueries$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Matters$Savedqueries$Get,
      options: MethodOptions | BodyResponseCallback<Schema$SavedQuery>,
      callback: BodyResponseCallback<Schema$SavedQuery>
    ): void;
    get(
      params: Params$Resource$Matters$Savedqueries$Get,
      callback: BodyResponseCallback<Schema$SavedQuery>
    ): void;
    get(callback: BodyResponseCallback<Schema$SavedQuery>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Matters$Savedqueries$Get
        | BodyResponseCallback<Schema$SavedQuery>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SavedQuery>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SavedQuery>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SavedQuery>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Matters$Savedqueries$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Savedqueries$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/matters/{matterId}/savedQueries/{savedQueryId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['matterId', 'savedQueryId'],
        pathParams: ['matterId', 'savedQueryId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SavedQuery>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SavedQuery>(parameters);
      }
    }

    /**
     * Lists the saved queries in a matter.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vault.googleapis.com
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
     * const vault = google.vault('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ediscovery',
     *       'https://www.googleapis.com/auth/ediscovery.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vault.matters.savedQueries.list({
     *     // The ID of the matter to get the saved queries for.
     *     matterId: 'placeholder-value',
     *     // The maximum number of saved queries to return.
     *     pageSize: 'placeholder-value',
     *     // The pagination token as returned in the previous response. An empty token means start from the beginning.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "savedQueries": []
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
      params: Params$Resource$Matters$Savedqueries$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Matters$Savedqueries$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListSavedQueriesResponse>>;
    list(
      params: Params$Resource$Matters$Savedqueries$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Matters$Savedqueries$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListSavedQueriesResponse>,
      callback: BodyResponseCallback<Schema$ListSavedQueriesResponse>
    ): void;
    list(
      params: Params$Resource$Matters$Savedqueries$List,
      callback: BodyResponseCallback<Schema$ListSavedQueriesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListSavedQueriesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Matters$Savedqueries$List
        | BodyResponseCallback<Schema$ListSavedQueriesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListSavedQueriesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListSavedQueriesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListSavedQueriesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Matters$Savedqueries$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Savedqueries$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/matters/{matterId}/savedQueries').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['matterId'],
        pathParams: ['matterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListSavedQueriesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListSavedQueriesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Matters$Savedqueries$Create
    extends StandardParameters {
    /**
     * The ID of the matter to create the saved query in.
     */
    matterId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SavedQuery;
  }
  export interface Params$Resource$Matters$Savedqueries$Delete
    extends StandardParameters {
    /**
     * The ID of the matter to delete the saved query from.
     */
    matterId?: string;
    /**
     * ID of the saved query to delete.
     */
    savedQueryId?: string;
  }
  export interface Params$Resource$Matters$Savedqueries$Get
    extends StandardParameters {
    /**
     * The ID of the matter to get the saved query from.
     */
    matterId?: string;
    /**
     * ID of the saved query to retrieve.
     */
    savedQueryId?: string;
  }
  export interface Params$Resource$Matters$Savedqueries$List
    extends StandardParameters {
    /**
     * The ID of the matter to get the saved queries for.
     */
    matterId?: string;
    /**
     * The maximum number of saved queries to return.
     */
    pageSize?: number;
    /**
     * The pagination token as returned in the previous response. An empty token means start from the beginning.
     */
    pageToken?: string;
  }

  export class Resource$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vault.googleapis.com
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
     * const vault = google.vault('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/ediscovery'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vault.operations.cancel({
     *     // The name of the operation resource to be cancelled.
     *     name: 'operations/.*',
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
    cancel(
      params: Params$Resource$Operations$Cancel,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    cancel(
      params?: Params$Resource$Operations$Cancel,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    cancel(
      params: Params$Resource$Operations$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(
      params: Params$Resource$Operations$Cancel,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Operations$Cancel
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
        {}) as Params$Resource$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vault.googleapis.com
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
     * const vault = google.vault('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/ediscovery'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vault.operations.delete({
     *     // The name of the operation resource to be deleted.
     *     name: 'operations/.*',
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
      params: Params$Resource$Operations$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Operations$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Operations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Operations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Operations$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Operations$Delete
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
        {}) as Params$Resource$Operations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
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
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vault.googleapis.com
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
     * const vault = google.vault('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ediscovery',
     *       'https://www.googleapis.com/auth/ediscovery.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vault.operations.get({
     *     // The name of the operation resource.
     *     name: 'operations/.*',
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
      params: Params$Resource$Operations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Operations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    get(
      params: Params$Resource$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Operations$Get
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
      let params = (paramsOrCallback || {}) as Params$Resource$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vault.googleapis.com
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
     * const vault = google.vault('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ediscovery',
     *       'https://www.googleapis.com/auth/ediscovery.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vault.operations.list({
     *     // The standard list filter.
     *     filter: 'placeholder-value',
     *     // The name of the operation's parent resource.
     *     name: 'operations',
     *     // The standard list page size.
     *     pageSize: 'placeholder-value',
     *     // The standard list page token.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "operations": []
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
      params: Params$Resource$Operations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Operations$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListOperationsResponse>>;
    list(
      params: Params$Resource$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Operations$List,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Operations$List
        | BodyResponseCallback<Schema$ListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListOperationsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
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
        createAPIRequest<Schema$ListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Operations$Cancel
    extends StandardParameters {
    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelOperationRequest;
  }
  export interface Params$Resource$Operations$Delete
    extends StandardParameters {
    /**
     * The name of the operation resource to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Operations$Get extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Operations$List extends StandardParameters {
    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The name of the operation's parent resource.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }
}
