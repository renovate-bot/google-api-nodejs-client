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

export namespace drive_v2 {
  export interface Options extends GlobalOptions {
    version: 'v2';
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
   * Google Drive API
   *
   * The Google Drive API allows clients to access resources from Google Drive.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const drive = google.drive('v2');
   * ```
   */
  export class Drive {
    context: APIRequestContext;
    about: Resource$About;
    apps: Resource$Apps;
    changes: Resource$Changes;
    channels: Resource$Channels;
    children: Resource$Children;
    comments: Resource$Comments;
    drives: Resource$Drives;
    files: Resource$Files;
    parents: Resource$Parents;
    permissions: Resource$Permissions;
    properties: Resource$Properties;
    replies: Resource$Replies;
    revisions: Resource$Revisions;
    teamdrives: Resource$Teamdrives;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.about = new Resource$About(this.context);
      this.apps = new Resource$Apps(this.context);
      this.changes = new Resource$Changes(this.context);
      this.channels = new Resource$Channels(this.context);
      this.children = new Resource$Children(this.context);
      this.comments = new Resource$Comments(this.context);
      this.drives = new Resource$Drives(this.context);
      this.files = new Resource$Files(this.context);
      this.parents = new Resource$Parents(this.context);
      this.permissions = new Resource$Permissions(this.context);
      this.properties = new Resource$Properties(this.context);
      this.replies = new Resource$Replies(this.context);
      this.revisions = new Resource$Revisions(this.context);
      this.teamdrives = new Resource$Teamdrives(this.context);
    }
  }

  /**
   * An item with user information and settings.
   */
  export interface Schema$About {
    /**
     * Information about supported additional roles per file type. The most specific type takes precedence.
     */
    additionalRoleInfo?: Array<{
      roleSets?: Array<{additionalRoles?: string[]; primaryRole?: string}>;
      type?: string;
    }> | null;
    /**
     * Whether the user can create shared drives.
     */
    canCreateDrives?: boolean | null;
    /**
     * Deprecated: Use `canCreateDrives` instead.
     */
    canCreateTeamDrives?: boolean | null;
    /**
     * The domain sharing policy for the current user. Possible values are: * `allowed` * `allowedWithWarning` * `incomingOnly` * `disallowed`
     */
    domainSharingPolicy?: string | null;
    /**
     * A list of themes that are supported for shared drives.
     */
    driveThemes?: Array<{
      backgroundImageLink?: string;
      colorRgb?: string;
      id?: string;
    }> | null;
    /**
     * The ETag of the item.
     */
    etag?: string | null;
    /**
     * The allowable export formats.
     */
    exportFormats?: Array<{source?: string; targets?: string[]}> | null;
    /**
     * List of additional features enabled on this account.
     */
    features?: Array<{featureName?: string; featureRate?: number}> | null;
    /**
     * The palette of allowable folder colors as RGB hex strings.
     */
    folderColorPalette?: string[] | null;
    /**
     * The allowable import formats.
     */
    importFormats?: Array<{source?: string; targets?: string[]}> | null;
    /**
     * A boolean indicating whether the authenticated app is installed by the authenticated user.
     */
    isCurrentAppInstalled?: boolean | null;
    /**
     * This is always `drive#about`.
     */
    kind?: string | null;
    /**
     * The user's language or locale code, as defined by BCP 47, with some extensions from Unicode's LDML format (http://www.unicode.org/reports/tr35/).
     */
    languageCode?: string | null;
    /**
     * The largest change id.
     */
    largestChangeId?: string | null;
    /**
     * List of max upload sizes for each file type. The most specific type takes precedence.
     */
    maxUploadSizes?: Array<{size?: string; type?: string}> | null;
    /**
     * The name of the current user.
     */
    name?: string | null;
    /**
     * The current user's ID as visible in the permissions collection.
     */
    permissionId?: string | null;
    /**
     * The amount of storage quota used by different Google services.
     */
    quotaBytesByService?: Array<{
      bytesUsed?: string;
      serviceName?: string;
    }> | null;
    /**
     * The total number of quota bytes. This is only relevant when quotaType is LIMITED.
     */
    quotaBytesTotal?: string | null;
    /**
     * The number of quota bytes used by Google Drive.
     */
    quotaBytesUsed?: string | null;
    /**
     * The number of quota bytes used by all Google apps (Drive, Picasa, etc.).
     */
    quotaBytesUsedAggregate?: string | null;
    /**
     * The number of quota bytes used by trashed items.
     */
    quotaBytesUsedInTrash?: string | null;
    /**
     * The type of the user's storage quota. Possible values are: * `LIMITED` * `UNLIMITED`
     */
    quotaType?: string | null;
    /**
     * The number of remaining change ids, limited to no more than 2500.
     */
    remainingChangeIds?: string | null;
    /**
     * The id of the root folder.
     */
    rootFolderId?: string | null;
    /**
     * A link back to this item.
     */
    selfLink?: string | null;
    /**
     * Deprecated: Use `driveThemes` instead.
     */
    teamDriveThemes?: Array<{
      backgroundImageLink?: string;
      colorRgb?: string;
      id?: string;
    }> | null;
    /**
     * The authenticated user.
     */
    user?: Schema$User;
  }
  /**
   * The apps resource provides a list of the apps that a user has installed, with information about each app's supported MIME types, file extensions, and other details. Some resource methods (such as `apps.get`) require an `appId`. Use the `apps.list` method to retrieve the ID for an installed application.
   */
  export interface Schema$App {
    /**
     * Whether the app is authorized to access data on the user's Drive.
     */
    authorized?: boolean | null;
    /**
     * The template url to create a new file with this app in a given folder. The template will contain {folderId\} to be replaced by the folder to create the new file in.
     */
    createInFolderTemplate?: string | null;
    /**
     * The url to create a new file with this app.
     */
    createUrl?: string | null;
    /**
     * Whether the app has drive-wide scope. An app with drive-wide scope can access all files in the user's drive.
     */
    hasDriveWideScope?: boolean | null;
    /**
     * The various icons for the app.
     */
    icons?: Array<{category?: string; iconUrl?: string; size?: number}> | null;
    /**
     * The ID of the app.
     */
    id?: string | null;
    /**
     * Whether the app is installed.
     */
    installed?: boolean | null;
    /**
     * This is always `drive#app`.
     */
    kind?: string | null;
    /**
     * A long description of the app.
     */
    longDescription?: string | null;
    /**
     * The name of the app.
     */
    name?: string | null;
    /**
     * The type of object this app creates (e.g. Chart). If empty, the app name should be used instead.
     */
    objectType?: string | null;
    /**
     * The template url for opening files with this app. The template will contain `{ids\}` and/or `{exportIds\}` to be replaced by the actual file ids. See Open Files for the full documentation.
     */
    openUrlTemplate?: string | null;
    /**
     * The list of primary file extensions.
     */
    primaryFileExtensions?: string[] | null;
    /**
     * The list of primary mime types.
     */
    primaryMimeTypes?: string[] | null;
    /**
     * The ID of the product listing for this app.
     */
    productId?: string | null;
    /**
     * A link to the product listing for this app.
     */
    productUrl?: string | null;
    /**
     * The list of secondary file extensions.
     */
    secondaryFileExtensions?: string[] | null;
    /**
     * The list of secondary mime types.
     */
    secondaryMimeTypes?: string[] | null;
    /**
     * A short description of the app.
     */
    shortDescription?: string | null;
    /**
     * Whether this app supports creating new objects.
     */
    supportsCreate?: boolean | null;
    /**
     * Whether this app supports importing from Docs Editors.
     */
    supportsImport?: boolean | null;
    /**
     * Whether this app supports opening more than one file.
     */
    supportsMultiOpen?: boolean | null;
    /**
     * Whether this app supports creating new files when offline.
     */
    supportsOfflineCreate?: boolean | null;
    /**
     * Whether the app is selected as the default handler for the types it supports.
     */
    useByDefault?: boolean | null;
  }
  /**
   * A list of third-party applications which the user has installed or given access to Google Drive.
   */
  export interface Schema$AppList {
    /**
     * List of app IDs that the user has specified to use by default. The list is in reverse-priority order (lowest to highest).
     */
    defaultAppIds?: string[] | null;
    /**
     * The ETag of the list.
     */
    etag?: string | null;
    /**
     * The list of apps.
     */
    items?: Schema$App[];
    /**
     * This is always `drive#appList`.
     */
    kind?: string | null;
    /**
     * A link back to this list.
     */
    selfLink?: string | null;
  }
  /**
   * Representation of a change to a file or shared drive.
   */
  export interface Schema$Change {
    /**
     * The type of the change. Possible values are `file` and `drive`.
     */
    changeType?: string | null;
    /**
     * Whether the file or shared drive has been removed from this list of changes, for example by deletion or loss of access.
     */
    deleted?: boolean | null;
    /**
     * The updated state of the shared drive. Present if the changeType is drive, the user is still a member of the shared drive, and the shared drive has not been deleted.
     */
    drive?: Schema$Drive;
    /**
     * The ID of the shared drive associated with this change.
     */
    driveId?: string | null;
    /**
     * The updated state of the file. Present if the type is file and the file has not been removed from this list of changes.
     */
    file?: Schema$File;
    /**
     * The ID of the file associated with this change.
     */
    fileId?: string | null;
    /**
     * The ID of the change.
     */
    id?: string | null;
    /**
     * This is always `drive#change`.
     */
    kind?: string | null;
    /**
     * The time of this modification.
     */
    modificationDate?: string | null;
    /**
     * A link back to this change.
     */
    selfLink?: string | null;
    /**
     * Deprecated: Use `drive` instead.
     */
    teamDrive?: Schema$TeamDrive;
    /**
     * Deprecated: Use `driveId` instead.
     */
    teamDriveId?: string | null;
    /**
     * Deprecated: Use `changeType` instead.
     */
    type?: string | null;
  }
  /**
   * A list of changes for a user.
   */
  export interface Schema$ChangeList {
    /**
     * The ETag of the list.
     */
    etag?: string | null;
    /**
     * The list of changes. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
     */
    items?: Schema$Change[];
    /**
     * This is always `drive#changeList`.
     */
    kind?: string | null;
    /**
     * The current largest change ID.
     */
    largestChangeId?: string | null;
    /**
     * The starting page token for future changes. This will be present only if the end of the current changes list has been reached.
     */
    newStartPageToken?: string | null;
    /**
     * A link to the next page of changes.
     */
    nextLink?: string | null;
    /**
     * The page token for the next page of changes. This will be absent if the end of the changes list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
     */
    nextPageToken?: string | null;
    /**
     * A link back to this list.
     */
    selfLink?: string | null;
  }
  /**
   * A notification channel used to watch for resource changes.
   */
  export interface Schema$Channel {
    /**
     * The address where notifications are delivered for this channel.
     */
    address?: string | null;
    /**
     * Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.
     */
    expiration?: string | null;
    /**
     * A UUID or similar unique string that identifies this channel.
     */
    id?: string | null;
    /**
     * Identifies this as a notification channel used to watch for changes to a resource, which is `api#channel`.
     */
    kind?: string | null;
    /**
     * Additional parameters controlling delivery channel behavior. Optional.
     */
    params?: {[key: string]: string} | null;
    /**
     * A Boolean value to indicate whether payload is wanted. Optional.
     */
    payload?: boolean | null;
    /**
     * An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.
     */
    resourceId?: string | null;
    /**
     * A version-specific identifier for the watched resource.
     */
    resourceUri?: string | null;
    /**
     * An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.
     */
    token?: string | null;
    /**
     * The type of delivery mechanism used for this channel. Valid values are "web_hook" or "webhook".
     */
    type?: string | null;
  }
  /**
   * A list of children of a file.
   */
  export interface Schema$ChildList {
    /**
     * The ETag of the list.
     */
    etag?: string | null;
    /**
     * The list of children. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
     */
    items?: Schema$ChildReference[];
    /**
     * This is always `drive#childList`.
     */
    kind?: string | null;
    /**
     * A link to the next page of children.
     */
    nextLink?: string | null;
    /**
     * The page token for the next page of children. This will be absent if the end of the children list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
     */
    nextPageToken?: string | null;
    /**
     * A link back to this list.
     */
    selfLink?: string | null;
  }
  /**
   * A reference to a folder's child. Some resource methods (such as `children.get`) require a `childId`. Use the `children.list` method to retrieve the ID of the child.
   */
  export interface Schema$ChildReference {
    /**
     * Output only. A link to the child.
     */
    childLink?: string | null;
    /**
     * The ID of the child.
     */
    id?: string | null;
    /**
     * Output only. This is always `drive#childReference`.
     */
    kind?: string | null;
    /**
     * Output only. A link back to this reference.
     */
    selfLink?: string | null;
  }
  /**
   * A comment on a file in Google Drive. Some resource methods (such as `comments.update`) require a `commentId`. Use the `comments.list` method to retrieve the ID for a comment in a file.
   */
  export interface Schema$Comment {
    /**
     * A region of the document represented as a JSON string. For details on defining anchor properties, refer to [Add comments and replies](https://developers.google.com/workspace/drive/api/v2/manage-comments).
     */
    anchor?: string | null;
    /**
     * Output only. The author of the comment. The author's email address and permission ID will not be populated.
     */
    author?: Schema$User;
    /**
     * Output only. The ID of the comment.
     */
    commentId?: string | null;
    /**
     * The plain text content used to create this comment. This is not HTML safe and should only be used as a starting point to make edits to a comment's content.
     */
    content?: string | null;
    /**
     * The context of the file which is being commented on.
     */
    context?: {type?: string; value?: string} | null;
    /**
     * The date when this comment was first created.
     */
    createdDate?: string | null;
    /**
     * Output only. Whether this comment has been deleted. If a comment has been deleted the content will be cleared and this will only represent a comment that once existed.
     */
    deleted?: boolean | null;
    /**
     * Output only. The file which this comment is addressing.
     */
    fileId?: string | null;
    /**
     * Output only. The title of the file which this comment is addressing.
     */
    fileTitle?: string | null;
    /**
     * Output only. HTML formatted content for this comment.
     */
    htmlContent?: string | null;
    /**
     * Output only. This is always `drive#comment`.
     */
    kind?: string | null;
    /**
     * The date when this comment or any of its replies were last modified.
     */
    modifiedDate?: string | null;
    /**
     * Output only. Replies to this post.
     */
    replies?: Schema$CommentReply[];
    /**
     * Output only. A link back to this comment.
     */
    selfLink?: string | null;
    /**
     * Output only. The status of this comment. Status can be changed by posting a reply to a comment with the desired status. * `open` - The comment is still open. * `resolved` - The comment has been resolved by one of its replies.
     */
    status?: string | null;
  }
  /**
   * A list of comments on a file in Google Drive.
   */
  export interface Schema$CommentList {
    /**
     * The list of comments. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
     */
    items?: Schema$Comment[];
    /**
     * This is always `drive#commentList`.
     */
    kind?: string | null;
    /**
     * A link to the next page of comments.
     */
    nextLink?: string | null;
    /**
     * The page token for the next page of comments. This will be absent if the end of the comments list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
     */
    nextPageToken?: string | null;
    /**
     * A link back to this list.
     */
    selfLink?: string | null;
  }
  /**
   * A comment on a file in Google Drive. Some resource methods (such as `replies.update`) require a `replyId`. Use the `replies.list` method to retrieve the ID for a reply.
   */
  export interface Schema$CommentReply {
    /**
     * Output only. The author of the reply. The author's email address and permission ID will not be populated.
     */
    author?: Schema$User;
    /**
     * The plain text content used to create this reply. This is not HTML safe and should only be used as a starting point to make edits to a reply's content. This field is required on inserts if no verb is specified (resolve/reopen).
     */
    content?: string | null;
    /**
     * The date when this reply was first created.
     */
    createdDate?: string | null;
    /**
     * Output only. Whether this reply has been deleted. If a reply has been deleted the content will be cleared and this will only represent a reply that once existed.
     */
    deleted?: boolean | null;
    /**
     * Output only. HTML formatted content for this reply.
     */
    htmlContent?: string | null;
    /**
     * Output only. This is always `drive#commentReply`.
     */
    kind?: string | null;
    /**
     * The date when this reply was last modified.
     */
    modifiedDate?: string | null;
    /**
     * Output only. The ID of the reply.
     */
    replyId?: string | null;
    /**
     * The action this reply performed to the parent comment. When creating a new reply this is the action to be perform to the parent comment. Possible values are: * `resolve` - To resolve a comment. * `reopen` - To reopen (un-resolve) a comment.
     */
    verb?: string | null;
  }
  /**
   * A list of replies to a comment on a file in Google Drive.
   */
  export interface Schema$CommentReplyList {
    /**
     * The list of replies. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
     */
    items?: Schema$CommentReply[];
    /**
     * This is always `drive#commentReplyList`.
     */
    kind?: string | null;
    /**
     * A link to the next page of replies.
     */
    nextLink?: string | null;
    /**
     * The page token for the next page of replies. This will be absent if the end of the replies list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
     */
    nextPageToken?: string | null;
    /**
     * A link back to this list.
     */
    selfLink?: string | null;
  }
  /**
   * A restriction for accessing the content of the file.
   */
  export interface Schema$ContentRestriction {
    /**
     * Whether the content restriction can only be modified or removed by a user who owns the file. For files in shared drives, any user with `organizer` capabilities can modify or remove this content restriction.
     */
    ownerRestricted?: boolean | null;
    /**
     * Whether the content of the file is read-only. If a file is read-only, a new revision of the file may not be added, comments may not be added or modified, and the title of the file may not be modified.
     */
    readOnly?: boolean | null;
    /**
     * Reason for why the content of the file is restricted. This is only mutable on requests that also set `readOnly=true`.
     */
    reason?: string | null;
    /**
     * Output only. The user who set the content restriction. Only populated if `readOnly` is true.
     */
    restrictingUser?: Schema$User;
    /**
     * The time at which the content restriction was set (formatted RFC 3339 timestamp). Only populated if readOnly is true.
     */
    restrictionDate?: string | null;
    /**
     * Output only. Whether the content restriction was applied by the system, for example due to an esignature. Users cannot modify or remove system restricted content restrictions.
     */
    systemRestricted?: boolean | null;
    /**
     * Output only. The type of the content restriction. Currently the only possible value is `globalContentRestriction`.
     */
    type?: string | null;
  }
  /**
   * Representation of a shared drive. Some resource methods (such as `drives.update`) require a `driveId`. Use the `drives.list` method to retrieve the ID for a shared drive.
   */
  export interface Schema$Drive {
    /**
     * An image file and cropping parameters from which a background image for this shared drive is set. This is a write only field; it can only be set on `drive.drives.update` requests that don't set `themeId`. When specified, all fields of the `backgroundImageFile` must be set.
     */
    backgroundImageFile?: {
      id?: string;
      width?: number;
      xCoordinate?: number;
      yCoordinate?: number;
    } | null;
    /**
     * Output only. A short-lived link to this shared drive's background image.
     */
    backgroundImageLink?: string | null;
    /**
     * Output only. Capabilities the current user has on this shared drive.
     */
    capabilities?: {
      canAddChildren?: boolean;
      canChangeCopyRequiresWriterPermissionRestriction?: boolean;
      canChangeDomainUsersOnlyRestriction?: boolean;
      canChangeDriveBackground?: boolean;
      canChangeDriveMembersOnlyRestriction?: boolean;
      canChangeSharingFoldersRequiresOrganizerPermissionRestriction?: boolean;
      canComment?: boolean;
      canCopy?: boolean;
      canDeleteChildren?: boolean;
      canDeleteDrive?: boolean;
      canDownload?: boolean;
      canEdit?: boolean;
      canListChildren?: boolean;
      canManageMembers?: boolean;
      canReadRevisions?: boolean;
      canRename?: boolean;
      canRenameDrive?: boolean;
      canResetDriveRestrictions?: boolean;
      canShare?: boolean;
      canTrashChildren?: boolean;
    } | null;
    /**
     * The color of this shared drive as an RGB hex string. It can only be set on a `drive.drives.update` request that does not set `themeId`.
     */
    colorRgb?: string | null;
    /**
     * The time at which the shared drive was created (RFC 3339 date-time).
     */
    createdDate?: string | null;
    /**
     * Whether the shared drive is hidden from default view.
     */
    hidden?: boolean | null;
    /**
     * Output only. The ID of this shared drive which is also the ID of the top level folder of this shared drive.
     */
    id?: string | null;
    /**
     * Output only. This is always `drive#drive`
     */
    kind?: string | null;
    /**
     * The name of this shared drive.
     */
    name?: string | null;
    /**
     * Output only. The organizational unit of this shared drive. This field is only populated on `drives.list` responses when the `useDomainAdminAccess` parameter is set to `true`.
     */
    orgUnitId?: string | null;
    /**
     * A set of restrictions that apply to this shared drive or items inside this shared drive.
     */
    restrictions?: {
      adminManagedRestrictions?: boolean;
      copyRequiresWriterPermission?: boolean;
      domainUsersOnly?: boolean;
      driveMembersOnly?: boolean;
      sharingFoldersRequiresOrganizerPermission?: boolean;
    } | null;
    /**
     * The ID of the theme from which the background image and color will be set. The set of possible `driveThemes` can be retrieved from a `drive.about.get` response. When not specified on a `drive.drives.insert` request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set `colorRgb` or `backgroundImageFile`.
     */
    themeId?: string | null;
  }
  /**
   * A list of shared drives.
   */
  export interface Schema$DriveList {
    /**
     * The list of shared drives. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
     */
    items?: Schema$Drive[];
    /**
     * This is always `drive#driveList`
     */
    kind?: string | null;
    /**
     * The page token for the next page of shared drives. This will be absent if the end of the list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * The metadata for a file. Some resource methods (such as `files.update`) require a `fileId`. Use the `files.list` method to retrieve the ID for a file.
   */
  export interface Schema$File {
    /**
     * Output only. A link for opening the file in a relevant Google editor or viewer.
     */
    alternateLink?: string | null;
    /**
     * Output only. Whether this file is in the Application Data folder.
     */
    appDataContents?: boolean | null;
    /**
     * Output only. Deprecated: Use `capabilities/canComment` instead.
     */
    canComment?: boolean | null;
    /**
     * Output only. Deprecated: Use `capabilities/canReadRevisions` instead.
     */
    canReadRevisions?: boolean | null;
    /**
     * Output only. Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take.
     */
    capabilities?: {
      canAcceptOwnership?: boolean;
      canAddChildren?: boolean;
      canAddFolderFromAnotherDrive?: boolean;
      canAddMyDriveParent?: boolean;
      canChangeCopyRequiresWriterPermission?: boolean;
      canChangeRestrictedDownload?: boolean;
      canChangeSecurityUpdateEnabled?: boolean;
      canComment?: boolean;
      canCopy?: boolean;
      canDelete?: boolean;
      canDeleteChildren?: boolean;
      canDisableInheritedPermissions?: boolean;
      canDownload?: boolean;
      canEdit?: boolean;
      canEnableInheritedPermissions?: boolean;
      canListChildren?: boolean;
      canModifyContent?: boolean;
      canModifyContentRestriction?: boolean;
      canModifyEditorContentRestriction?: boolean;
      canModifyLabels?: boolean;
      canModifyOwnerContentRestriction?: boolean;
      canMoveChildrenOutOfDrive?: boolean;
      canMoveChildrenOutOfTeamDrive?: boolean;
      canMoveChildrenWithinDrive?: boolean;
      canMoveChildrenWithinTeamDrive?: boolean;
      canMoveItemIntoTeamDrive?: boolean;
      canMoveItemOutOfDrive?: boolean;
      canMoveItemOutOfTeamDrive?: boolean;
      canMoveItemWithinDrive?: boolean;
      canMoveItemWithinTeamDrive?: boolean;
      canMoveTeamDriveItem?: boolean;
      canReadDrive?: boolean;
      canReadLabels?: boolean;
      canReadRevisions?: boolean;
      canReadTeamDrive?: boolean;
      canRemoveChildren?: boolean;
      canRemoveContentRestriction?: boolean;
      canRemoveMyDriveParent?: boolean;
      canRename?: boolean;
      canShare?: boolean;
      canTrash?: boolean;
      canTrashChildren?: boolean;
      canUntrash?: boolean;
    } | null;
    /**
     * Restrictions for accessing the content of the file. Only populated if such a restriction exists.
     */
    contentRestrictions?: Schema$ContentRestriction[];
    /**
     * Output only. Deprecated: Use `capabilities/canCopy` instead.
     */
    copyable?: boolean | null;
    /**
     * Whether the options to copy, print, or download this file, should be disabled for readers and commenters.
     */
    copyRequiresWriterPermission?: boolean | null;
    /**
     * Create time for this file (formatted RFC 3339 timestamp).
     */
    createdDate?: string | null;
    /**
     * Output only. A link to open this file with the user's default app for this file. Only populated when the drive.apps.readonly scope is used.
     */
    defaultOpenWithLink?: string | null;
    /**
     * A short description of the file.
     */
    description?: string | null;
    /**
     * Output only. Short lived download URL for the file. This field is only populated for files with content stored in Google Drive; it is not populated for Google Docs or shortcut files.
     */
    downloadUrl?: string | null;
    /**
     * Output only. ID of the shared drive the file resides in. Only populated for items in shared drives.
     */
    driveId?: string | null;
    /**
     * Output only. Deprecated: Use `capabilities/canEdit` instead.
     */
    editable?: boolean | null;
    /**
     * Output only. A link for embedding the file.
     */
    embedLink?: string | null;
    /**
     * Output only. ETag of the file.
     */
    etag?: string | null;
    /**
     * Output only. Whether this file has been explicitly trashed, as opposed to recursively trashed.
     */
    explicitlyTrashed?: boolean | null;
    /**
     * Output only. Links for exporting Docs Editors files to specific formats.
     */
    exportLinks?: {[key: string]: string} | null;
    /**
     * Output only. The final component of `fullFileExtension` with trailing text that does not appear to be part of the extension removed. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.
     */
    fileExtension?: string | null;
    /**
     * Output only. Size in bytes of blobs and first party editor files. Won't be populated for files that have no size, like shortcuts and folders.
     */
    fileSize?: string | null;
    /**
     * Folder color as an RGB hex string if the file is a folder or a shortcut to a folder. The list of supported colors is available in the folderColorPalette field of the About resource. If an unsupported color is specified, it will be changed to the closest color in the palette.
     */
    folderColorRgb?: string | null;
    /**
     * Output only. The full file extension; extracted from the title. May contain multiple concatenated extensions, such as "tar.gz". Removing an extension from the title does not clear this field; however, changing the extension on the title does update this field. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.
     */
    fullFileExtension?: string | null;
    /**
     * Output only. Whether there are permissions directly on this file. This field is only populated for items in shared drives.
     */
    hasAugmentedPermissions?: boolean | null;
    /**
     * Output only. Whether this file has a thumbnail. This does not indicate whether the requesting app has access to the thumbnail. To check access, look for the presence of the thumbnailLink field.
     */
    hasThumbnail?: boolean | null;
    /**
     * Output only. The ID of the file's head revision. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.
     */
    headRevisionId?: string | null;
    /**
     * Output only. A link to the file's icon.
     */
    iconLink?: string | null;
    /**
     * The ID of the file.
     */
    id?: string | null;
    /**
     * Output only. Metadata about image media. This will only be present for image types, and its contents will depend on what can be parsed from the image content.
     */
    imageMediaMetadata?: {
      aperture?: number;
      cameraMake?: string;
      cameraModel?: string;
      colorSpace?: string;
      date?: string;
      exposureBias?: number;
      exposureMode?: string;
      exposureTime?: number;
      flashUsed?: boolean;
      focalLength?: number;
      height?: number;
      isoSpeed?: number;
      lens?: string;
      location?: {altitude?: number; latitude?: number; longitude?: number};
      maxApertureValue?: number;
      meteringMode?: string;
      rotation?: number;
      sensor?: string;
      subjectDistance?: number;
      whiteBalance?: string;
      width?: number;
    } | null;
    /**
     * Indexable text attributes for the file (can only be written)
     */
    indexableText?: {text?: string} | null;
    /**
     * Whether this file has inherited permissions disabled. Inherited permissions are enabled by default.
     */
    inheritedPermissionsDisabled?: boolean | null;
    /**
     * Output only. Whether the file was created or opened by the requesting app.
     */
    isAppAuthorized?: boolean | null;
    /**
     * Output only. The type of file. This is always `drive#file`.
     */
    kind?: string | null;
    /**
     * Output only. An overview of the labels on the file.
     */
    labelInfo?: {labels?: Schema$Label[]} | null;
    /**
     * A group of labels for the file.
     */
    labels?: {
      hidden?: boolean;
      modified?: boolean;
      restricted?: boolean;
      starred?: boolean;
      trashed?: boolean;
      viewed?: boolean;
    } | null;
    /**
     * Output only. The last user to modify this file. This field is only populated when the last modification was performed by a signed-in user.
     */
    lastModifyingUser?: Schema$User;
    /**
     * Output only. Name of the last user to modify this file.
     */
    lastModifyingUserName?: string | null;
    /**
     * Last time this file was viewed by the user (formatted RFC 3339 timestamp).
     */
    lastViewedByMeDate?: string | null;
    /**
     * Contains details about the link URLs that clients are using to refer to this item.
     */
    linkShareMetadata?: {
      securityUpdateEligible?: boolean;
      securityUpdateEnabled?: boolean;
    } | null;
    /**
     * Deprecated.
     */
    markedViewedByMeDate?: string | null;
    /**
     * Output only. An MD5 checksum for the content of this file. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.
     */
    md5Checksum?: string | null;
    /**
     * The MIME type of the file. This is only mutable on update when uploading new content. This field can be left blank, and the mimetype will be determined from the uploaded content's MIME type.
     */
    mimeType?: string | null;
    /**
     * Last time this file was modified by the user (formatted RFC 3339 timestamp). Note that setting modifiedDate will also update the modifiedByMe date for the user which set the date.
     */
    modifiedByMeDate?: string | null;
    /**
     * Last time this file was modified by anyone (formatted RFC 3339 timestamp). This is only mutable on update when the setModifiedDate parameter is set.
     */
    modifiedDate?: string | null;
    /**
     * Output only. A map of the id of each of the user's apps to a link to open this file with that app. Only populated when the drive.apps.readonly scope is used.
     */
    openWithLinks?: {[key: string]: string} | null;
    /**
     * The original filename of the uploaded content if available, or else the original value of the `title` field. This is only available for files with binary content in Google Drive.
     */
    originalFilename?: string | null;
    /**
     * Output only. Whether the file is owned by the current user. Not populated for items in shared drives.
     */
    ownedByMe?: boolean | null;
    /**
     * Output only. Name(s) of the owner(s) of this file. Not populated for items in shared drives.
     */
    ownerNames?: string[] | null;
    /**
     * Output only. The owner of this file. Only certain legacy files may have more than one owner. This field isn't populated for items in shared drives.
     */
    owners?: Schema$User[];
    /**
     * The ID of the parent folder containing the file. A file can only have one parent folder; specifying multiple parents isn't supported. If not specified as part of an insert request, the file is placed directly in the user's My Drive folder. If not specified as part of a copy request, the file inherits any discoverable parent of the source file. Update requests must use the `addParents` and `removeParents` parameters to modify the parents list.
     */
    parents?: Schema$ParentReference[];
    /**
     * Output only. List of permission IDs for users with access to this file.
     */
    permissionIds?: string[] | null;
    /**
     * Output only. The list of permissions for users with access to this file. Not populated for items in shared drives.
     */
    permissions?: Schema$Permission[];
    /**
     * The list of properties.
     */
    properties?: Schema$Property[];
    /**
     * Output only. The number of quota bytes used by this file.
     */
    quotaBytesUsed?: string | null;
    /**
     * Output only. A key needed to access the item via a shared link.
     */
    resourceKey?: string | null;
    /**
     * Output only. A link back to this file.
     */
    selfLink?: string | null;
    /**
     * Output only. The SHA1 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.
     */
    sha1Checksum?: string | null;
    /**
     * Output only. The SHA256 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.
     */
    sha256Checksum?: string | null;
    /**
     * Output only. Deprecated: Use `capabilities/canShare` instead.
     */
    shareable?: boolean | null;
    /**
     * Output only. Whether the file has been shared. Not populated for items in shared drives.
     */
    shared?: boolean | null;
    /**
     * Time at which this file was shared with the user (formatted RFC 3339 timestamp).
     */
    sharedWithMeDate?: string | null;
    /**
     * Output only. User that shared the item with the current user, if available.
     */
    sharingUser?: Schema$User;
    /**
     * Shortcut file details. Only populated for shortcut files, which have the mimeType field set to `application/vnd.google-apps.shortcut`. Can only be set on `files.insert` requests.
     */
    shortcutDetails?: {
      targetId?: string;
      targetMimeType?: string;
      targetResourceKey?: string;
    } | null;
    /**
     * Output only. The list of spaces which contain the file. Supported values are `drive`, `appDataFolder` and `photos`.
     */
    spaces?: string[] | null;
    /**
     * Output only. Deprecated: Use `driveId` instead.
     */
    teamDriveId?: string | null;
    /**
     * A thumbnail for the file. This will only be used if a standard thumbnail cannot be generated.
     */
    thumbnail?: {image?: string; mimeType?: string} | null;
    /**
     * Output only. A short-lived link to the file's thumbnail, if available. Typically lasts on the order of hours. Not intended for direct usage on web applications due to [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS), consider using a proxy server. Only populated when the requesting app can access the file's content. If the file isn't shared publicly, the URL returned in `Files.thumbnailLink` must be fetched using a credentialed request.
     */
    thumbnailLink?: string | null;
    /**
     * Output only. The thumbnail version for use in thumbnail cache invalidation.
     */
    thumbnailVersion?: string | null;
    /**
     * The title of this file. Note that for immutable items such as the top level folders of shared drives, My Drive root folder, and Application Data folder the title is constant.
     */
    title?: string | null;
    /**
     * The time that the item was trashed (formatted RFC 3339 timestamp). Only populated for items in shared drives.
     */
    trashedDate?: string | null;
    /**
     * Output only. If the file has been explicitly trashed, the user who trashed it. Only populated for items in shared drives.
     */
    trashingUser?: Schema$User;
    /**
     * Output only. The permissions for the authenticated user on this file.
     */
    userPermission?: Schema$Permission;
    /**
     * Output only. A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the requesting user.
     */
    version?: string | null;
    /**
     * Output only. Metadata about video media. This will only be present for video types.
     */
    videoMediaMetadata?: {
      durationMillis?: string;
      height?: number;
      width?: number;
    } | null;
    /**
     * Output only. A link for downloading the content of the file in a browser using cookie based authentication. In cases where the content is shared publicly, the content can be downloaded without any credentials.
     */
    webContentLink?: string | null;
    /**
     * Output only. A link only available on public folders for viewing their static web assets (HTML, CSS, JS, etc) via Google Drive's Website Hosting.
     */
    webViewLink?: string | null;
    /**
     * Whether writers can share the document with other users. Not populated for items in shared drives.
     */
    writersCanShare?: boolean | null;
  }
  /**
   * A list of files.
   */
  export interface Schema$FileList {
    /**
     * The ETag of the list.
     */
    etag?: string | null;
    /**
     * Whether the search process was incomplete. If true, then some search results may be missing, since all documents were not searched. This may occur when searching multiple drives with the "allDrives" corpora, but all corpora could not be searched. When this happens, it is suggested that clients narrow their query by choosing a different corpus such as "default" or "drive".
     */
    incompleteSearch?: boolean | null;
    /**
     * The list of files. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
     */
    items?: Schema$File[];
    /**
     * This is always `drive#fileList`.
     */
    kind?: string | null;
    /**
     * A link to the next page of files.
     */
    nextLink?: string | null;
    /**
     * The page token for the next page of files. This will be absent if the end of the files list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
     */
    nextPageToken?: string | null;
    /**
     * A link back to this list.
     */
    selfLink?: string | null;
  }
  /**
   * A list of generated IDs which can be provided in insert requests
   */
  export interface Schema$GeneratedIds {
    /**
     * The IDs generated for the requesting user in the specified space.
     */
    ids?: string[] | null;
    /**
     * This is always `drive#generatedIds`
     */
    kind?: string | null;
    /**
     * The type of file that can be created with these IDs.
     */
    space?: string | null;
  }
  /**
   * Representation of a label and label fields.
   */
  export interface Schema$Label {
    /**
     * A map of the fields on the label, keyed by the field's ID.
     */
    fields?: {[key: string]: Schema$LabelField} | null;
    /**
     * The ID of the label.
     */
    id?: string | null;
    /**
     * This is always `drive#label`
     */
    kind?: string | null;
    /**
     * The revision ID of the label.
     */
    revisionId?: string | null;
  }
  /**
   * Representation of field, which is a typed key-value pair.
   */
  export interface Schema$LabelField {
    /**
     * Only present if valueType is dateString. RFC 3339 formatted date: YYYY-MM-DD.
     */
    dateString?: string[] | null;
    /**
     * The identifier of this label field.
     */
    id?: string | null;
    /**
     * Only present if `valueType` is `integer`.
     */
    integer?: string[] | null;
    /**
     * This is always `drive#labelField`.
     */
    kind?: string | null;
    /**
     * Only present if `valueType` is `selection`
     */
    selection?: string[] | null;
    /**
     * Only present if `valueType` is `text`.
     */
    text?: string[] | null;
    /**
     * Only present if `valueType` is `user`.
     */
    user?: Schema$User[];
    /**
     * The field type. While new values may be supported in the future, the following are currently allowed: * `dateString` * `integer` * `selection` * `text` * `user`
     */
    valueType?: string | null;
  }
  /**
   * A modification to a label's field.
   */
  export interface Schema$LabelFieldModification {
    /**
     * The ID of the field to be modified.
     */
    fieldId?: string | null;
    /**
     * This is always `drive#labelFieldModification`.
     */
    kind?: string | null;
    /**
     * Replaces the value of a dateString Field with these new values. The string must be in the RFC 3339 full-date format: YYYY-MM-DD.
     */
    setDateValues?: string[] | null;
    /**
     * Replaces the value of an `integer` field with these new values.
     */
    setIntegerValues?: string[] | null;
    /**
     * Replaces a `selection` field with these new values.
     */
    setSelectionValues?: string[] | null;
    /**
     * Sets the value of a `text` field.
     */
    setTextValues?: string[] | null;
    /**
     * Replaces a `user` field with these new values. The values must be valid email addresses.
     */
    setUserValues?: string[] | null;
    /**
     * Unsets the values for this field.
     */
    unsetValues?: boolean | null;
  }
  /**
   * A list of labels applied to a file.
   */
  export interface Schema$LabelList {
    /**
     * The list of labels.
     */
    items?: Schema$Label[];
    /**
     * This is always `drive#labelList`
     */
    kind?: string | null;
    /**
     * The page token for the next page of labels. This field will be absent if the end of the list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * A modification to a label on a file. A LabelModification can be used to apply a label to a file, update an existing label on a file, or remove a label from a file.
   */
  export interface Schema$LabelModification {
    /**
     * The list of modifications to this label's fields.
     */
    fieldModifications?: Schema$LabelFieldModification[];
    /**
     * This is always `drive#labelModification`.
     */
    kind?: string | null;
    /**
     * The ID of the label to modify.
     */
    labelId?: string | null;
    /**
     * If true, the label will be removed from the file.
     */
    removeLabel?: boolean | null;
  }
  /**
   * A request to modify the set of labels on a file. This request may contain many modifications that will either all succeed or all fail atomically.
   */
  export interface Schema$ModifyLabelsRequest {
    /**
     * This is always `drive#modifyLabelsRequest`.
     */
    kind?: string | null;
    /**
     * The list of modifications to apply to the labels on the file.
     */
    labelModifications?: Schema$LabelModification[];
  }
  /**
   * Response to a ModifyLabels request. This contains only those labels which were added or updated by the request.
   */
  export interface Schema$ModifyLabelsResponse {
    /**
     * This is always `drive#modifyLabelsResponse`
     */
    kind?: string | null;
    /**
     * The list of labels which were added or updated by the request.
     */
    modifiedLabels?: Schema$Label[];
  }
  /**
   * A list of a file's parents.
   */
  export interface Schema$ParentList {
    /**
     * The ETag of the list.
     */
    etag?: string | null;
    /**
     * The list of parents.
     */
    items?: Schema$ParentReference[];
    /**
     * This is always `drive#parentList`.
     */
    kind?: string | null;
    /**
     * A link back to this list.
     */
    selfLink?: string | null;
  }
  /**
   * A reference to a file's parent. A file can only have one parent folder; specifying multiple parents isn't supported. Some resource methods (such as `parents.get`) require a `parentId`. Use the `parents.list` method to retrieve the ID for a parent.
   */
  export interface Schema$ParentReference {
    /**
     * The ID of the parent.
     */
    id?: string | null;
    /**
     * Output only. Whether or not the parent is the root folder.
     */
    isRoot?: boolean | null;
    /**
     * Output only. This is always `drive#parentReference`.
     */
    kind?: string | null;
    /**
     * Output only. A link to the parent.
     */
    parentLink?: string | null;
    /**
     * Output only. A link back to this reference.
     */
    selfLink?: string | null;
  }
  /**
   * A permission for a file. A permission grants a user, group, domain, or the world access to a file or a folder hierarchy. Some resource methods (such as `permissions.update`) require a `permissionId`. Use the `permissions.list` method to retrieve the ID for a file, folder, or shared drive.
   */
  export interface Schema$Permission {
    /**
     * Additional roles for this user. Only `commenter` is currently allowed, though more may be supported in the future.
     */
    additionalRoles?: string[] | null;
    /**
     * Output only. Deprecated.
     */
    authKey?: string | null;
    /**
     * Output only. Whether the account associated with this permission has been deleted. This field only pertains to user and group permissions.
     */
    deleted?: boolean | null;
    /**
     * Output only. The domain name of the entity this permission refers to. This is an output-only field which is present when the permission type is `user`, `group` or `domain`.
     */
    domain?: string | null;
    /**
     * Output only. The email address of the user or group this permission refers to. This is an output-only field which is present when the permission type is `user` or `group`.
     */
    emailAddress?: string | null;
    /**
     * Output only. The ETag of the permission.
     */
    etag?: string | null;
    /**
     * The time at which this permission will expire (RFC 3339 date-time). Expiration dates have the following restrictions: - They can only be set on user and group permissions - The date must be in the future - The date cannot be more than a year in the future - The date can only be set on drive.permissions.update or drive.permissions.patch requests
     */
    expirationDate?: string | null;
    /**
     * The ID of the user this permission refers to, and identical to the `permissionId` in the About and Files resources. When making a `drive.permissions.insert` request, exactly one of the `id` or `value` fields must be specified unless the permission type is `anyone`, in which case both `id` and `value` are ignored.
     */
    id?: string | null;
    /**
     * When true, only organizers, owners, and users with permissions added directly on the item can access it.
     */
    inheritedPermissionsDisabled?: boolean | null;
    /**
     * Output only. This is always `drive#permission`.
     */
    kind?: string | null;
    /**
     * Output only. The name for this permission.
     */
    name?: string | null;
    /**
     * Whether the account associated with this permission is a pending owner. Only populated for `user` type permissions for files that are not in a shared drive.
     */
    pendingOwner?: boolean | null;
    /**
     * Output only. Details of whether the permissions on this item are inherited or directly on this item.
     */
    permissionDetails?: Array<{
      additionalRoles?: string[];
      inherited?: boolean;
      inheritedFrom?: string;
      permissionType?: string;
      role?: string;
    }> | null;
    /**
     * Output only. A link to the profile photo, if available.
     */
    photoLink?: string | null;
    /**
     * The primary role for this user. While new values may be supported in the future, the following are currently allowed: * `owner` * `organizer` * `fileOrganizer` * `writer` * `reader`
     */
    role?: string | null;
    /**
     * Output only. A link back to this permission.
     */
    selfLink?: string | null;
    /**
     * Output only. Deprecated: Use `permissionDetails` instead.
     */
    teamDrivePermissionDetails?: Array<{
      additionalRoles?: string[];
      inherited?: boolean;
      inheritedFrom?: string;
      role?: string;
      teamDrivePermissionType?: string;
    }> | null;
    /**
     * The account type. Allowed values are: * `user` * `group` * `domain` * `anyone`
     */
    type?: string | null;
    /**
     * The email address or domain name for the entity. This is used during inserts and is not populated in responses. When making a `drive.permissions.insert` request, exactly one of the `id` or `value` fields must be specified unless the permission type is `anyone`, in which case both `id` and `value` are ignored.
     */
    value?: string | null;
    /**
     * Indicates the view for this permission. Only populated for permissions that belong to a view. published and metadata are the only supported values. - published: The permission's role is published_reader. - metadata: The item is only visible to the metadata view because the item has limited access and the scope has at least read access to the parent. Note: The metadata view is currently only supported on folders.
     */
    view?: string | null;
    /**
     * Whether the link is required for this permission.
     */
    withLink?: boolean | null;
  }
  /**
   * An ID for a user or group as seen in Permission items.
   */
  export interface Schema$PermissionId {
    /**
     * The permission ID.
     */
    id?: string | null;
    /**
     * This is always `drive#permissionId`.
     */
    kind?: string | null;
  }
  /**
   * A list of permissions associated with a file.
   */
  export interface Schema$PermissionList {
    /**
     * The ETag of the list.
     */
    etag?: string | null;
    /**
     * The list of permissions.
     */
    items?: Schema$Permission[];
    /**
     * This is always `drive#permissionList`.
     */
    kind?: string | null;
    /**
     * The page token for the next page of permissions. This field will be absent if the end of the permissions list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
     */
    nextPageToken?: string | null;
    /**
     * A link back to this list.
     */
    selfLink?: string | null;
  }
  /**
   * A key-value pair attached to a file that is either public or private to an application. The following limits apply to file properties: * Maximum of 100 properties total per file * Maximum of 30 private properties per app * Maximum of 30 public properties * Maximum of 124 bytes size limit on (key + value) string in UTF-8 encoding for a single property Some resource methods (such as `properties.update`) require a `propertyKey`. Use the `properties.list` method to retrieve the key for a property.
   */
  export interface Schema$Property {
    /**
     * Output only. ETag of the property.
     */
    etag?: string | null;
    /**
     * The key of this property.
     */
    key?: string | null;
    /**
     * Output only. This is always `drive#property`.
     */
    kind?: string | null;
    /**
     * Output only. The link back to this property.
     */
    selfLink?: string | null;
    /**
     * The value of this property.
     */
    value?: string | null;
    /**
     * The visibility of this property. Allowed values are PRIVATE (default) and PUBLIC. Private properties can only be retrieved using an authenticated request. An authenticated request uses an access token obtained with a OAuth 2 client ID. You cannot use an API key to retrieve private properties.
     */
    visibility?: string | null;
  }
  /**
   * A collection of properties, key-value pairs that are either public or private to an application.
   */
  export interface Schema$PropertyList {
    /**
     * The ETag of the list.
     */
    etag?: string | null;
    /**
     * The list of properties.
     */
    items?: Schema$Property[];
    /**
     * This is always `drive#propertyList`.
     */
    kind?: string | null;
    /**
     * The link back to this list.
     */
    selfLink?: string | null;
  }
  /**
   * A revision of a file. Some resource methods (such as `revisions.update`) require a `revisionId`. Use the `revisions.list` method to retrieve the ID for a revision.
   */
  export interface Schema$Revision {
    /**
     * Output only. Short term download URL for the file. This will only be populated on files with content stored in Drive.
     */
    downloadUrl?: string | null;
    /**
     * Output only. The ETag of the revision.
     */
    etag?: string | null;
    /**
     * Output only. Links for exporting Docs Editors files to specific formats.
     */
    exportLinks?: {[key: string]: string} | null;
    /**
     * Output only. The size of the revision in bytes. This will only be populated on files with content stored in Drive.
     */
    fileSize?: string | null;
    /**
     * Output only. The ID of the revision.
     */
    id?: string | null;
    /**
     * Output only. This is always `drive#revision`.
     */
    kind?: string | null;
    /**
     * Output only. The last user to modify this revision. This field is only populated when the last modification was performed by a signed-in user.
     */
    lastModifyingUser?: Schema$User;
    /**
     * Output only. Name of the last user to modify this revision.
     */
    lastModifyingUserName?: string | null;
    /**
     * Output only. An MD5 checksum for the content of this revision. This will only be populated on files with content stored in Drive.
     */
    md5Checksum?: string | null;
    /**
     * Output only. The MIME type of the revision.
     */
    mimeType?: string | null;
    /**
     * Last time this revision was modified (formatted RFC 3339 timestamp).
     */
    modifiedDate?: string | null;
    /**
     * Output only. The original filename when this revision was created. This will only be populated on files with content stored in Drive.
     */
    originalFilename?: string | null;
    /**
     * Whether this revision is pinned to prevent automatic purging. If not set, the revision is automatically purged 30 days after newer content is uploaded. This field can only be modified on files with content stored in Drive, excluding Docs Editors files. Revisions can also be pinned when they are created through the drive.files.insert/update/copy by using the pinned query parameter. Pinned revisions are stored indefinitely using additional storage quota, up to a maximum of 200 revisions.
     */
    pinned?: boolean | null;
    /**
     * Whether subsequent revisions will be automatically republished. This is only populated and can only be modified for Docs Editors files.
     */
    publishAuto?: boolean | null;
    /**
     * Whether this revision is published. This is only populated and can only be modified for Docs Editors files.
     */
    published?: boolean | null;
    /**
     * Output only. A link to the published revision. This is only populated for Docs Editors files.
     */
    publishedLink?: string | null;
    /**
     * Whether this revision is published outside the domain. This is only populated and can only be modified for Docs Editors files.
     */
    publishedOutsideDomain?: boolean | null;
    /**
     * Output only. A link back to this revision.
     */
    selfLink?: string | null;
  }
  /**
   * A list of revisions of a file.
   */
  export interface Schema$RevisionList {
    /**
     * The ETag of the list.
     */
    etag?: string | null;
    /**
     * The list of revisions. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
     */
    items?: Schema$Revision[];
    /**
     * This is always `drive#revisionList`.
     */
    kind?: string | null;
    /**
     * The page token for the next page of revisions. This field will be absent if the end of the revisions list has been reached. If the token is rejected for any reason, it should be discarded and pagination should be restarted from the first page of results.
     */
    nextPageToken?: string | null;
    /**
     * A link back to this list.
     */
    selfLink?: string | null;
  }
  export interface Schema$StartPageToken {
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"drive#startPageToken"`.
     */
    kind?: string | null;
    /**
     * The starting page token for listing changes.
     */
    startPageToken?: string | null;
  }
  /**
   * Deprecated: Use the `drive` collection instead.
   */
  export interface Schema$TeamDrive {
    /**
     * An image file and cropping parameters from which a background image for this Team Drive is set. This is a write only field; it can only be set on `drive.teamdrives.update` requests that don't set `themeId`. When specified, all fields of the `backgroundImageFile` must be set.
     */
    backgroundImageFile?: {
      id?: string;
      width?: number;
      xCoordinate?: number;
      yCoordinate?: number;
    } | null;
    /**
     * A short-lived link to this Team Drive's background image.
     */
    backgroundImageLink?: string | null;
    /**
     * Capabilities the current user has on this Team Drive.
     */
    capabilities?: {
      canAddChildren?: boolean;
      canChangeCopyRequiresWriterPermissionRestriction?: boolean;
      canChangeDomainUsersOnlyRestriction?: boolean;
      canChangeSharingFoldersRequiresOrganizerPermissionRestriction?: boolean;
      canChangeTeamDriveBackground?: boolean;
      canChangeTeamMembersOnlyRestriction?: boolean;
      canComment?: boolean;
      canCopy?: boolean;
      canDeleteChildren?: boolean;
      canDeleteTeamDrive?: boolean;
      canDownload?: boolean;
      canEdit?: boolean;
      canListChildren?: boolean;
      canManageMembers?: boolean;
      canReadRevisions?: boolean;
      canRemoveChildren?: boolean;
      canRename?: boolean;
      canRenameTeamDrive?: boolean;
      canResetTeamDriveRestrictions?: boolean;
      canShare?: boolean;
      canTrashChildren?: boolean;
    } | null;
    /**
     * The color of this Team Drive as an RGB hex string. It can only be set on a `drive.teamdrives.update` request that does not set `themeId`.
     */
    colorRgb?: string | null;
    /**
     * The time at which the Team Drive was created (RFC 3339 date-time).
     */
    createdDate?: string | null;
    /**
     * The ID of this Team Drive which is also the ID of the top level folder of this Team Drive.
     */
    id?: string | null;
    /**
     * This is always `drive#teamDrive`
     */
    kind?: string | null;
    /**
     * The name of this Team Drive.
     */
    name?: string | null;
    /**
     * The organizational unit of this shared drive. This field is only populated on `drives.list` responses when the `useDomainAdminAccess` parameter is set to `true`.
     */
    orgUnitId?: string | null;
    /**
     * A set of restrictions that apply to this Team Drive or items inside this Team Drive.
     */
    restrictions?: {
      adminManagedRestrictions?: boolean;
      copyRequiresWriterPermission?: boolean;
      domainUsersOnly?: boolean;
      sharingFoldersRequiresOrganizerPermission?: boolean;
      teamMembersOnly?: boolean;
    } | null;
    /**
     * The ID of the theme from which the background image and color will be set. The set of possible `teamDriveThemes` can be retrieved from a `drive.about.get` response. When not specified on a `drive.teamdrives.insert` request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set `colorRgb` or `backgroundImageFile`.
     */
    themeId?: string | null;
  }
  /**
   * A list of Team Drives.
   */
  export interface Schema$TeamDriveList {
    /**
     * The list of Team Drives.
     */
    items?: Schema$TeamDrive[];
    /**
     * This is always `drive#teamDriveList`
     */
    kind?: string | null;
    /**
     * The page token for the next page of Team Drives.
     */
    nextPageToken?: string | null;
  }
  /**
   * Information about a Drive user.
   */
  export interface Schema$User {
    /**
     * Output only. A plain text displayable name for this user.
     */
    displayName?: string | null;
    /**
     * Output only. The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.
     */
    emailAddress?: string | null;
    /**
     * Output only. Whether this user is the same as the authenticated user for whom the request was made.
     */
    isAuthenticatedUser?: boolean | null;
    /**
     * Output only. Identifies what kind of resource this is. Value: the fixed string `drive#user`.
     */
    kind?: string | null;
    /**
     * Output only. The user's ID as visible in Permission resources.
     */
    permissionId?: string | null;
    /**
     * Output only. The user's profile picture.
     */
    picture?: {url?: string} | null;
  }

  export class Resource$About {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the information about the current user along with Drive API settings
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.metadata.readonly',
     *       'https://www.googleapis.com/auth/drive.photos.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.about.get({
     *     // Whether to count changes outside the My Drive hierarchy. When set to false, changes to files such as those in the Application Data folder or shared files which have not been added to My Drive will be omitted from the `maxChangeIdCount`.
     *     includeSubscribed: 'placeholder-value',
     *     // Maximum number of remaining change IDs to count
     *     maxChangeIdCount: 'placeholder-value',
     *     // Change ID to start counting from when calculating number of remaining change IDs
     *     startChangeId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "additionalRoleInfo": [],
     *   //   "canCreateDrives": false,
     *   //   "canCreateTeamDrives": false,
     *   //   "domainSharingPolicy": "my_domainSharingPolicy",
     *   //   "driveThemes": [],
     *   //   "etag": "my_etag",
     *   //   "exportFormats": [],
     *   //   "features": [],
     *   //   "folderColorPalette": [],
     *   //   "importFormats": [],
     *   //   "isCurrentAppInstalled": false,
     *   //   "kind": "my_kind",
     *   //   "languageCode": "my_languageCode",
     *   //   "largestChangeId": "my_largestChangeId",
     *   //   "maxUploadSizes": [],
     *   //   "name": "my_name",
     *   //   "permissionId": "my_permissionId",
     *   //   "quotaBytesByService": [],
     *   //   "quotaBytesTotal": "my_quotaBytesTotal",
     *   //   "quotaBytesUsed": "my_quotaBytesUsed",
     *   //   "quotaBytesUsedAggregate": "my_quotaBytesUsedAggregate",
     *   //   "quotaBytesUsedInTrash": "my_quotaBytesUsedInTrash",
     *   //   "quotaType": "my_quotaType",
     *   //   "remainingChangeIds": "my_remainingChangeIds",
     *   //   "rootFolderId": "my_rootFolderId",
     *   //   "selfLink": "my_selfLink",
     *   //   "teamDriveThemes": [],
     *   //   "user": {}
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
      params: Params$Resource$About$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$About$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$About>>;
    get(
      params: Params$Resource$About$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$About$Get,
      options: MethodOptions | BodyResponseCallback<Schema$About>,
      callback: BodyResponseCallback<Schema$About>
    ): void;
    get(
      params: Params$Resource$About$Get,
      callback: BodyResponseCallback<Schema$About>
    ): void;
    get(callback: BodyResponseCallback<Schema$About>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$About$Get
        | BodyResponseCallback<Schema$About>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$About>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$About>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$About>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$About$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$About$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/about').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$About>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$About>(parameters);
      }
    }
  }

  export interface Params$Resource$About$Get extends StandardParameters {
    /**
     * Whether to count changes outside the My Drive hierarchy. When set to false, changes to files such as those in the Application Data folder or shared files which have not been added to My Drive will be omitted from the `maxChangeIdCount`.
     */
    includeSubscribed?: boolean;
    /**
     * Maximum number of remaining change IDs to count
     */
    maxChangeIdCount?: string;
    /**
     * Change ID to start counting from when calculating number of remaining change IDs
     */
    startChangeId?: string;
  }

  export class Resource$Apps {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets a specific app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.apps.readonly',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.metadata.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.apps.get({
     *     // The ID of the app.
     *     appId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "authorized": false,
     *   //   "createInFolderTemplate": "my_createInFolderTemplate",
     *   //   "createUrl": "my_createUrl",
     *   //   "hasDriveWideScope": false,
     *   //   "icons": [],
     *   //   "id": "my_id",
     *   //   "installed": false,
     *   //   "kind": "my_kind",
     *   //   "longDescription": "my_longDescription",
     *   //   "name": "my_name",
     *   //   "objectType": "my_objectType",
     *   //   "openUrlTemplate": "my_openUrlTemplate",
     *   //   "primaryFileExtensions": [],
     *   //   "primaryMimeTypes": [],
     *   //   "productId": "my_productId",
     *   //   "productUrl": "my_productUrl",
     *   //   "secondaryFileExtensions": [],
     *   //   "secondaryMimeTypes": [],
     *   //   "shortDescription": "my_shortDescription",
     *   //   "supportsCreate": false,
     *   //   "supportsImport": false,
     *   //   "supportsMultiOpen": false,
     *   //   "supportsOfflineCreate": false,
     *   //   "useByDefault": false
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
      params: Params$Resource$Apps$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Apps$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$App>>;
    get(
      params: Params$Resource$Apps$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Apps$Get,
      options: MethodOptions | BodyResponseCallback<Schema$App>,
      callback: BodyResponseCallback<Schema$App>
    ): void;
    get(
      params: Params$Resource$Apps$Get,
      callback: BodyResponseCallback<Schema$App>
    ): void;
    get(callback: BodyResponseCallback<Schema$App>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Apps$Get
        | BodyResponseCallback<Schema$App>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$App>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$App>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$App>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Apps$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/apps/{appId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['appId'],
        pathParams: ['appId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$App>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$App>(parameters);
      }
    }

    /**
     * Lists a user's installed apps.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/drive.apps.readonly'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.apps.list({
     *     // A comma-separated list of file extensions for open with filtering. All apps within the given app query scope which can open any of the given file extensions will be included in the response. If `appFilterMimeTypes` are provided as well, the result is a union of the two resulting app lists.
     *     appFilterExtensions: 'placeholder-value',
     *     // A comma-separated list of MIME types for open with filtering. All apps within the given app query scope which can open any of the given MIME types will be included in the response. If `appFilterExtensions` are provided as well, the result is a union of the two resulting app lists.
     *     appFilterMimeTypes: 'placeholder-value',
     *     // A language or locale code, as defined by BCP 47, with some extensions from Unicode's LDML format (http://www.unicode.org/reports/tr35/).
     *     languageCode: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "defaultAppIds": [],
     *   //   "etag": "my_etag",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "selfLink": "my_selfLink"
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
      params: Params$Resource$Apps$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Apps$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AppList>>;
    list(
      params: Params$Resource$Apps$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Apps$List,
      options: MethodOptions | BodyResponseCallback<Schema$AppList>,
      callback: BodyResponseCallback<Schema$AppList>
    ): void;
    list(
      params: Params$Resource$Apps$List,
      callback: BodyResponseCallback<Schema$AppList>
    ): void;
    list(callback: BodyResponseCallback<Schema$AppList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Apps$List
        | BodyResponseCallback<Schema$AppList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AppList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AppList>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AppList>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Apps$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/apps').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$AppList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AppList>(parameters);
      }
    }
  }

  export interface Params$Resource$Apps$Get extends StandardParameters {
    /**
     * The ID of the app.
     */
    appId?: string;
  }
  export interface Params$Resource$Apps$List extends StandardParameters {
    /**
     * A comma-separated list of file extensions for open with filtering. All apps within the given app query scope which can open any of the given file extensions will be included in the response. If `appFilterMimeTypes` are provided as well, the result is a union of the two resulting app lists.
     */
    appFilterExtensions?: string;
    /**
     * A comma-separated list of MIME types for open with filtering. All apps within the given app query scope which can open any of the given MIME types will be included in the response. If `appFilterExtensions` are provided as well, the result is a union of the two resulting app lists.
     */
    appFilterMimeTypes?: string;
    /**
     * A language or locale code, as defined by BCP 47, with some extensions from Unicode's LDML format (http://www.unicode.org/reports/tr35/).
     */
    languageCode?: string;
  }

  export class Resource$Changes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deprecated: Use `changes.getStartPageToken` and `changes.list` to retrieve recent changes.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.apps.readonly',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.meet.readonly',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.metadata.readonly',
     *       'https://www.googleapis.com/auth/drive.photos.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.changes.get({
     *     // The ID of the change.
     *     changeId: 'placeholder-value',
     *     // The shared drive from which the change will be returned.
     *     driveId: 'placeholder-value',
     *     // Whether the requesting application supports both My Drives and shared drives.
     *     supportsAllDrives: 'placeholder-value',
     *     // Deprecated: Use `supportsAllDrives` instead.
     *     supportsTeamDrives: 'placeholder-value',
     *     // Deprecated: Use `driveId` instead.
     *     teamDriveId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "changeType": "my_changeType",
     *   //   "deleted": false,
     *   //   "drive": {},
     *   //   "driveId": "my_driveId",
     *   //   "file": {},
     *   //   "fileId": "my_fileId",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "modificationDate": "my_modificationDate",
     *   //   "selfLink": "my_selfLink",
     *   //   "teamDrive": {},
     *   //   "teamDriveId": "my_teamDriveId",
     *   //   "type": "my_type"
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
      params: Params$Resource$Changes$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Changes$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Change>>;
    get(
      params: Params$Resource$Changes$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Changes$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Change>,
      callback: BodyResponseCallback<Schema$Change>
    ): void;
    get(
      params: Params$Resource$Changes$Get,
      callback: BodyResponseCallback<Schema$Change>
    ): void;
    get(callback: BodyResponseCallback<Schema$Change>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Changes$Get
        | BodyResponseCallback<Schema$Change>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Change>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Change>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Change>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Changes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Changes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/changes/{changeId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['changeId'],
        pathParams: ['changeId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Change>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Change>(parameters);
      }
    }

    /**
     * Gets the starting pageToken for listing future changes.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.apps.readonly',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.meet.readonly',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.metadata.readonly',
     *       'https://www.googleapis.com/auth/drive.photos.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.changes.getStartPageToken({
     *     // The ID of the shared drive for which the starting pageToken for listing future changes from that shared drive will be returned.
     *     driveId: 'placeholder-value',
     *     // Whether the requesting application supports both My Drives and shared drives.
     *     supportsAllDrives: 'placeholder-value',
     *     // Deprecated: Use `supportsAllDrives` instead.
     *     supportsTeamDrives: 'placeholder-value',
     *     // Deprecated: Use `driveId` instead.
     *     teamDriveId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "startPageToken": "my_startPageToken"
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
    getStartPageToken(
      params: Params$Resource$Changes$Getstartpagetoken,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getStartPageToken(
      params?: Params$Resource$Changes$Getstartpagetoken,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$StartPageToken>>;
    getStartPageToken(
      params: Params$Resource$Changes$Getstartpagetoken,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getStartPageToken(
      params: Params$Resource$Changes$Getstartpagetoken,
      options: MethodOptions | BodyResponseCallback<Schema$StartPageToken>,
      callback: BodyResponseCallback<Schema$StartPageToken>
    ): void;
    getStartPageToken(
      params: Params$Resource$Changes$Getstartpagetoken,
      callback: BodyResponseCallback<Schema$StartPageToken>
    ): void;
    getStartPageToken(
      callback: BodyResponseCallback<Schema$StartPageToken>
    ): void;
    getStartPageToken(
      paramsOrCallback?:
        | Params$Resource$Changes$Getstartpagetoken
        | BodyResponseCallback<Schema$StartPageToken>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$StartPageToken>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$StartPageToken>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$StartPageToken>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Changes$Getstartpagetoken;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Changes$Getstartpagetoken;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/changes/startPageToken').replace(
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
        createAPIRequest<Schema$StartPageToken>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$StartPageToken>(parameters);
      }
    }

    /**
     * Lists the changes for a user or shared drive.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.apps.readonly',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.meet.readonly',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.metadata.readonly',
     *       'https://www.googleapis.com/auth/drive.photos.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.changes.list({
     *     // The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier.
     *     driveId: 'placeholder-value',
     *     // Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
     *     includeCorpusRemovals: 'placeholder-value',
     *     // Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
     *     includeDeleted: 'placeholder-value',
     *     // Whether both My Drive and shared drive items should be included in results.
     *     includeItemsFromAllDrives: 'placeholder-value',
     *     // A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     *     includeLabels: 'placeholder-value',
     *     // Specifies which additional view's permissions to include in the response. Only `published` is supported.
     *     includePermissionsForView: 'placeholder-value',
     *     // Whether to include changes outside the My Drive hierarchy in the result. When set to false, changes to files such as those in the Application Data folder or shared files which have not been added to My Drive will be omitted from the result.
     *     includeSubscribed: 'placeholder-value',
     *     // Deprecated: Use `includeItemsFromAllDrives` instead.
     *     includeTeamDriveItems: 'placeholder-value',
     *     // Maximum number of changes to return.
     *     maxResults: 'placeholder-value',
     *     // The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from the previous response or to the response from the getStartPageToken method.
     *     pageToken: 'placeholder-value',
     *     // A comma-separated list of spaces to query. Supported values are `drive`, `appDataFolder` and `photos`.
     *     spaces: 'placeholder-value',
     *     // Deprecated: Use `pageToken` instead.
     *     startChangeId: 'placeholder-value',
     *     // Whether the requesting application supports both My Drives and shared drives.
     *     supportsAllDrives: 'placeholder-value',
     *     // Deprecated: Use `supportsAllDrives` instead.
     *     supportsTeamDrives: 'placeholder-value',
     *     // Deprecated: Use `driveId` instead.
     *     teamDriveId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "largestChangeId": "my_largestChangeId",
     *   //   "newStartPageToken": "my_newStartPageToken",
     *   //   "nextLink": "my_nextLink",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "selfLink": "my_selfLink"
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
      params: Params$Resource$Changes$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Changes$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ChangeList>>;
    list(
      params: Params$Resource$Changes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Changes$List,
      options: MethodOptions | BodyResponseCallback<Schema$ChangeList>,
      callback: BodyResponseCallback<Schema$ChangeList>
    ): void;
    list(
      params: Params$Resource$Changes$List,
      callback: BodyResponseCallback<Schema$ChangeList>
    ): void;
    list(callback: BodyResponseCallback<Schema$ChangeList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Changes$List
        | BodyResponseCallback<Schema$ChangeList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ChangeList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ChangeList>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ChangeList>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Changes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Changes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/changes').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ChangeList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ChangeList>(parameters);
      }
    }

    /**
     * Subscribe to changes for a user.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.apps.readonly',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.meet.readonly',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.metadata.readonly',
     *       'https://www.googleapis.com/auth/drive.photos.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.changes.watch({
     *     // The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier.
     *     driveId: 'placeholder-value',
     *     // Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
     *     includeCorpusRemovals: 'placeholder-value',
     *     // Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
     *     includeDeleted: 'placeholder-value',
     *     // Whether both My Drive and shared drive items should be included in results.
     *     includeItemsFromAllDrives: 'placeholder-value',
     *     // A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     *     includeLabels: 'placeholder-value',
     *     // Specifies which additional view's permissions to include in the response. Only `published` is supported.
     *     includePermissionsForView: 'placeholder-value',
     *     // Whether to include changes outside the My Drive hierarchy in the result. When set to false, changes to files such as those in the Application Data folder or shared files which have not been added to My Drive will be omitted from the result.
     *     includeSubscribed: 'placeholder-value',
     *     // Deprecated: Use `includeItemsFromAllDrives` instead.
     *     includeTeamDriveItems: 'placeholder-value',
     *     // Maximum number of changes to return.
     *     maxResults: 'placeholder-value',
     *     // The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from the previous response or to the response from the getStartPageToken method.
     *     pageToken: 'placeholder-value',
     *     // A comma-separated list of spaces to query. Supported values are `drive`, `appDataFolder` and `photos`.
     *     spaces: 'placeholder-value',
     *     // Deprecated: Use `pageToken` instead.
     *     startChangeId: 'placeholder-value',
     *     // Whether the requesting application supports both My Drives and shared drives.
     *     supportsAllDrives: 'placeholder-value',
     *     // Deprecated: Use `supportsAllDrives` instead.
     *     supportsTeamDrives: 'placeholder-value',
     *     // Deprecated: Use `driveId` instead.
     *     teamDriveId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "address": "my_address",
     *       //   "expiration": "my_expiration",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "params": {},
     *       //   "payload": false,
     *       //   "resourceId": "my_resourceId",
     *       //   "resourceUri": "my_resourceUri",
     *       //   "token": "my_token",
     *       //   "type": "my_type"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "address": "my_address",
     *   //   "expiration": "my_expiration",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "params": {},
     *   //   "payload": false,
     *   //   "resourceId": "my_resourceId",
     *   //   "resourceUri": "my_resourceUri",
     *   //   "token": "my_token",
     *   //   "type": "my_type"
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
    watch(
      params: Params$Resource$Changes$Watch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    watch(
      params?: Params$Resource$Changes$Watch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Channel>>;
    watch(
      params: Params$Resource$Changes$Watch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    watch(
      params: Params$Resource$Changes$Watch,
      options: MethodOptions | BodyResponseCallback<Schema$Channel>,
      callback: BodyResponseCallback<Schema$Channel>
    ): void;
    watch(
      params: Params$Resource$Changes$Watch,
      callback: BodyResponseCallback<Schema$Channel>
    ): void;
    watch(callback: BodyResponseCallback<Schema$Channel>): void;
    watch(
      paramsOrCallback?:
        | Params$Resource$Changes$Watch
        | BodyResponseCallback<Schema$Channel>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Channel>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Channel>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Channel>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Changes$Watch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Changes$Watch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/changes/watch').replace(
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
        createAPIRequest<Schema$Channel>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Channel>(parameters);
      }
    }
  }

  export interface Params$Resource$Changes$Get extends StandardParameters {
    /**
     * The ID of the change.
     */
    changeId?: string;
    /**
     * The shared drive from which the change will be returned.
     */
    driveId?: string;
    /**
     * Whether the requesting application supports both My Drives and shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated: Use `supportsAllDrives` instead.
     */
    supportsTeamDrives?: boolean;
    /**
     * Deprecated: Use `driveId` instead.
     */
    teamDriveId?: string;
  }
  export interface Params$Resource$Changes$Getstartpagetoken
    extends StandardParameters {
    /**
     * The ID of the shared drive for which the starting pageToken for listing future changes from that shared drive will be returned.
     */
    driveId?: string;
    /**
     * Whether the requesting application supports both My Drives and shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated: Use `supportsAllDrives` instead.
     */
    supportsTeamDrives?: boolean;
    /**
     * Deprecated: Use `driveId` instead.
     */
    teamDriveId?: string;
  }
  export interface Params$Resource$Changes$List extends StandardParameters {
    /**
     * The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier.
     */
    driveId?: string;
    /**
     * Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
     */
    includeCorpusRemovals?: boolean;
    /**
     * Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
     */
    includeDeleted?: boolean;
    /**
     * Whether both My Drive and shared drive items should be included in results.
     */
    includeItemsFromAllDrives?: boolean;
    /**
     * A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     */
    includeLabels?: string;
    /**
     * Specifies which additional view's permissions to include in the response. Only `published` is supported.
     */
    includePermissionsForView?: string;
    /**
     * Whether to include changes outside the My Drive hierarchy in the result. When set to false, changes to files such as those in the Application Data folder or shared files which have not been added to My Drive will be omitted from the result.
     */
    includeSubscribed?: boolean;
    /**
     * Deprecated: Use `includeItemsFromAllDrives` instead.
     */
    includeTeamDriveItems?: boolean;
    /**
     * Maximum number of changes to return.
     */
    maxResults?: number;
    /**
     * The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from the previous response or to the response from the getStartPageToken method.
     */
    pageToken?: string;
    /**
     * A comma-separated list of spaces to query. Supported values are `drive`, `appDataFolder` and `photos`.
     */
    spaces?: string;
    /**
     * Deprecated: Use `pageToken` instead.
     */
    startChangeId?: string;
    /**
     * Whether the requesting application supports both My Drives and shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated: Use `supportsAllDrives` instead.
     */
    supportsTeamDrives?: boolean;
    /**
     * Deprecated: Use `driveId` instead.
     */
    teamDriveId?: string;
  }
  export interface Params$Resource$Changes$Watch extends StandardParameters {
    /**
     * The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier.
     */
    driveId?: string;
    /**
     * Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
     */
    includeCorpusRemovals?: boolean;
    /**
     * Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
     */
    includeDeleted?: boolean;
    /**
     * Whether both My Drive and shared drive items should be included in results.
     */
    includeItemsFromAllDrives?: boolean;
    /**
     * A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     */
    includeLabels?: string;
    /**
     * Specifies which additional view's permissions to include in the response. Only `published` is supported.
     */
    includePermissionsForView?: string;
    /**
     * Whether to include changes outside the My Drive hierarchy in the result. When set to false, changes to files such as those in the Application Data folder or shared files which have not been added to My Drive will be omitted from the result.
     */
    includeSubscribed?: boolean;
    /**
     * Deprecated: Use `includeItemsFromAllDrives` instead.
     */
    includeTeamDriveItems?: boolean;
    /**
     * Maximum number of changes to return.
     */
    maxResults?: number;
    /**
     * The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from the previous response or to the response from the getStartPageToken method.
     */
    pageToken?: string;
    /**
     * A comma-separated list of spaces to query. Supported values are `drive`, `appDataFolder` and `photos`.
     */
    spaces?: string;
    /**
     * Deprecated: Use `pageToken` instead.
     */
    startChangeId?: string;
    /**
     * Whether the requesting application supports both My Drives and shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated: Use `supportsAllDrives` instead.
     */
    supportsTeamDrives?: boolean;
    /**
     * Deprecated: Use `driveId` instead.
     */
    teamDriveId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Channel;
  }

  export class Resource$Channels {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Stops watching resources through this channel.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.apps.readonly',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.meet.readonly',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.metadata.readonly',
     *       'https://www.googleapis.com/auth/drive.photos.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.channels.stop({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "address": "my_address",
     *       //   "expiration": "my_expiration",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "params": {},
     *       //   "payload": false,
     *       //   "resourceId": "my_resourceId",
     *       //   "resourceUri": "my_resourceUri",
     *       //   "token": "my_token",
     *       //   "type": "my_type"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
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
    stop(
      params: Params$Resource$Channels$Stop,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    stop(
      params?: Params$Resource$Channels$Stop,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    stop(
      params: Params$Resource$Channels$Stop,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    stop(
      params: Params$Resource$Channels$Stop,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    stop(
      params: Params$Resource$Channels$Stop,
      callback: BodyResponseCallback<void>
    ): void;
    stop(callback: BodyResponseCallback<void>): void;
    stop(
      paramsOrCallback?:
        | Params$Resource$Channels$Stop
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<void>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Channels$Stop;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Channels$Stop;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/channels/stop').replace(
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
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Channels$Stop extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$Channel;
  }

  export class Resource$Children {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Removes a child from a folder.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.children.delete({
     *     // The ID of the child.
     *     childId: 'placeholder-value',
     *     // Deprecated: If an item is not in a shared drive and its last parent is removed, the item is placed under its owner's root.
     *     enforceSingleParent: 'placeholder-value',
     *     // The ID of the folder.
     *     folderId: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
      params: Params$Resource$Children$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Children$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    delete(
      params: Params$Resource$Children$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Children$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Children$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Children$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<void>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Children$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Children$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/drive/v2/files/{folderId}/children/{childId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['folderId', 'childId'],
        pathParams: ['childId', 'folderId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Gets a specific child reference.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.meet.readonly',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.metadata.readonly',
     *       'https://www.googleapis.com/auth/drive.photos.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.children.get({
     *     // The ID of the child.
     *     childId: 'placeholder-value',
     *     // The ID of the folder.
     *     folderId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "childLink": "my_childLink",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "selfLink": "my_selfLink"
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
      params: Params$Resource$Children$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Children$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ChildReference>>;
    get(
      params: Params$Resource$Children$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Children$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ChildReference>,
      callback: BodyResponseCallback<Schema$ChildReference>
    ): void;
    get(
      params: Params$Resource$Children$Get,
      callback: BodyResponseCallback<Schema$ChildReference>
    ): void;
    get(callback: BodyResponseCallback<Schema$ChildReference>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Children$Get
        | BodyResponseCallback<Schema$ChildReference>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ChildReference>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ChildReference>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ChildReference>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Children$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Children$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/drive/v2/files/{folderId}/children/{childId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['folderId', 'childId'],
        pathParams: ['childId', 'folderId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ChildReference>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ChildReference>(parameters);
      }
    }

    /**
     * Inserts a file into a folder.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.file',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.children.insert({
     *     // Deprecated: Adding files to multiple folders is no longer supported. Use `shortcuts` instead.
     *     enforceSingleParent: 'placeholder-value',
     *     // The ID of the folder.
     *     folderId: 'placeholder-value',
     *     // Whether the requesting application supports both My Drives and shared drives.
     *     supportsAllDrives: 'placeholder-value',
     *     // Deprecated: Use `supportsAllDrives` instead.
     *     supportsTeamDrives: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "childLink": "my_childLink",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "selfLink": "my_selfLink"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "childLink": "my_childLink",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "selfLink": "my_selfLink"
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
      params: Params$Resource$Children$Insert,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    insert(
      params?: Params$Resource$Children$Insert,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ChildReference>>;
    insert(
      params: Params$Resource$Children$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Children$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$ChildReference>,
      callback: BodyResponseCallback<Schema$ChildReference>
    ): void;
    insert(
      params: Params$Resource$Children$Insert,
      callback: BodyResponseCallback<Schema$ChildReference>
    ): void;
    insert(callback: BodyResponseCallback<Schema$ChildReference>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Children$Insert
        | BodyResponseCallback<Schema$ChildReference>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ChildReference>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ChildReference>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ChildReference>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Children$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Children$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/files/{folderId}/children').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['folderId'],
        pathParams: ['folderId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ChildReference>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ChildReference>(parameters);
      }
    }

    /**
     * Lists a folder's children.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.meet.readonly',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.metadata.readonly',
     *       'https://www.googleapis.com/auth/drive.photos.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.children.list({
     *     // The ID of the folder.
     *     folderId: 'placeholder-value',
     *     // Maximum number of children to return.
     *     maxResults: 'placeholder-value',
     *     // A comma-separated list of sort keys. Valid keys are `createdDate`, `folder`, `lastViewedByMeDate`, `modifiedByMeDate`, `modifiedDate`, `quotaBytesUsed`, `recency`, `sharedWithMeDate`, `starred`, and `title`. Each key sorts ascending by default, but may be reversed with the `desc` modifier. Example usage: ?orderBy=folder,modifiedDate desc,title. Please note that there is a current limitation for users with approximately one million files in which the requested sort order is ignored.
     *     orderBy: 'placeholder-value',
     *     // Page token for children.
     *     pageToken: 'placeholder-value',
     *     // Query string for searching children.
     *     q: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextLink": "my_nextLink",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "selfLink": "my_selfLink"
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
      params: Params$Resource$Children$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Children$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ChildList>>;
    list(
      params: Params$Resource$Children$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Children$List,
      options: MethodOptions | BodyResponseCallback<Schema$ChildList>,
      callback: BodyResponseCallback<Schema$ChildList>
    ): void;
    list(
      params: Params$Resource$Children$List,
      callback: BodyResponseCallback<Schema$ChildList>
    ): void;
    list(callback: BodyResponseCallback<Schema$ChildList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Children$List
        | BodyResponseCallback<Schema$ChildList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ChildList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ChildList>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ChildList>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Children$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Children$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/files/{folderId}/children').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['folderId'],
        pathParams: ['folderId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ChildList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ChildList>(parameters);
      }
    }
  }

  export interface Params$Resource$Children$Delete extends StandardParameters {
    /**
     * The ID of the child.
     */
    childId?: string;
    /**
     * Deprecated: If an item is not in a shared drive and its last parent is removed, the item is placed under its owner's root.
     */
    enforceSingleParent?: boolean;
    /**
     * The ID of the folder.
     */
    folderId?: string;
  }
  export interface Params$Resource$Children$Get extends StandardParameters {
    /**
     * The ID of the child.
     */
    childId?: string;
    /**
     * The ID of the folder.
     */
    folderId?: string;
  }
  export interface Params$Resource$Children$Insert extends StandardParameters {
    /**
     * Deprecated: Adding files to multiple folders is no longer supported. Use `shortcuts` instead.
     */
    enforceSingleParent?: boolean;
    /**
     * The ID of the folder.
     */
    folderId?: string;
    /**
     * Whether the requesting application supports both My Drives and shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated: Use `supportsAllDrives` instead.
     */
    supportsTeamDrives?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ChildReference;
  }
  export interface Params$Resource$Children$List extends StandardParameters {
    /**
     * The ID of the folder.
     */
    folderId?: string;
    /**
     * Maximum number of children to return.
     */
    maxResults?: number;
    /**
     * A comma-separated list of sort keys. Valid keys are `createdDate`, `folder`, `lastViewedByMeDate`, `modifiedByMeDate`, `modifiedDate`, `quotaBytesUsed`, `recency`, `sharedWithMeDate`, `starred`, and `title`. Each key sorts ascending by default, but may be reversed with the `desc` modifier. Example usage: ?orderBy=folder,modifiedDate desc,title. Please note that there is a current limitation for users with approximately one million files in which the requested sort order is ignored.
     */
    orderBy?: string;
    /**
     * Page token for children.
     */
    pageToken?: string;
    /**
     * Query string for searching children.
     */
    q?: string;
  }

  export class Resource$Comments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a comment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.comments.delete({
     *     // The ID of the comment.
     *     commentId: 'placeholder-value',
     *     // The ID of the file.
     *     fileId: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
      params: Params$Resource$Comments$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Comments$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    delete(
      params: Params$Resource$Comments$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Comments$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Comments$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Comments$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<void>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Comments$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Comments$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/drive/v2/files/{fileId}/comments/{commentId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'commentId'],
        pathParams: ['commentId', 'fileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Gets a comment by ID.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.meet.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.comments.get({
     *     // The ID of the comment.
     *     commentId: 'placeholder-value',
     *     // The ID of the file.
     *     fileId: 'placeholder-value',
     *     // If set, this will succeed when retrieving a deleted comment, and will include any deleted replies.
     *     includeDeleted: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "anchor": "my_anchor",
     *   //   "author": {},
     *   //   "commentId": "my_commentId",
     *   //   "content": "my_content",
     *   //   "context": {},
     *   //   "createdDate": "my_createdDate",
     *   //   "deleted": false,
     *   //   "fileId": "my_fileId",
     *   //   "fileTitle": "my_fileTitle",
     *   //   "htmlContent": "my_htmlContent",
     *   //   "kind": "my_kind",
     *   //   "modifiedDate": "my_modifiedDate",
     *   //   "replies": [],
     *   //   "selfLink": "my_selfLink",
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
      params: Params$Resource$Comments$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Comments$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Comment>>;
    get(
      params: Params$Resource$Comments$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Comments$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Comment>,
      callback: BodyResponseCallback<Schema$Comment>
    ): void;
    get(
      params: Params$Resource$Comments$Get,
      callback: BodyResponseCallback<Schema$Comment>
    ): void;
    get(callback: BodyResponseCallback<Schema$Comment>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Comments$Get
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
      let params = (paramsOrCallback || {}) as Params$Resource$Comments$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Comments$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/drive/v2/files/{fileId}/comments/{commentId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'commentId'],
        pathParams: ['commentId', 'fileId'],
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
     * Creates a new comment on the given file.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.comments.insert({
     *     // The ID of the file.
     *     fileId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "anchor": "my_anchor",
     *       //   "author": {},
     *       //   "commentId": "my_commentId",
     *       //   "content": "my_content",
     *       //   "context": {},
     *       //   "createdDate": "my_createdDate",
     *       //   "deleted": false,
     *       //   "fileId": "my_fileId",
     *       //   "fileTitle": "my_fileTitle",
     *       //   "htmlContent": "my_htmlContent",
     *       //   "kind": "my_kind",
     *       //   "modifiedDate": "my_modifiedDate",
     *       //   "replies": [],
     *       //   "selfLink": "my_selfLink",
     *       //   "status": "my_status"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "anchor": "my_anchor",
     *   //   "author": {},
     *   //   "commentId": "my_commentId",
     *   //   "content": "my_content",
     *   //   "context": {},
     *   //   "createdDate": "my_createdDate",
     *   //   "deleted": false,
     *   //   "fileId": "my_fileId",
     *   //   "fileTitle": "my_fileTitle",
     *   //   "htmlContent": "my_htmlContent",
     *   //   "kind": "my_kind",
     *   //   "modifiedDate": "my_modifiedDate",
     *   //   "replies": [],
     *   //   "selfLink": "my_selfLink",
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
    insert(
      params: Params$Resource$Comments$Insert,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    insert(
      params?: Params$Resource$Comments$Insert,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Comment>>;
    insert(
      params: Params$Resource$Comments$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Comments$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Comment>,
      callback: BodyResponseCallback<Schema$Comment>
    ): void;
    insert(
      params: Params$Resource$Comments$Insert,
      callback: BodyResponseCallback<Schema$Comment>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Comment>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Comments$Insert
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
      let params = (paramsOrCallback || {}) as Params$Resource$Comments$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Comments$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/files/{fileId}/comments').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
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
     * Lists a file's comments.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.meet.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.comments.list({
     *     // The ID of the file.
     *     fileId: 'placeholder-value',
     *     // If set, all comments and replies, including deleted comments and replies (with content stripped) will be returned.
     *     includeDeleted: 'placeholder-value',
     *     // The maximum number of discussions to include in the response, used for paging.
     *     maxResults: 'placeholder-value',
     *     // The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
     *     pageToken: 'placeholder-value',
     *     // Only discussions that were updated after this timestamp will be returned. Formatted as an RFC 3339 timestamp.
     *     updatedMin: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextLink": "my_nextLink",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "selfLink": "my_selfLink"
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
      params: Params$Resource$Comments$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Comments$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CommentList>>;
    list(
      params: Params$Resource$Comments$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Comments$List,
      options: MethodOptions | BodyResponseCallback<Schema$CommentList>,
      callback: BodyResponseCallback<Schema$CommentList>
    ): void;
    list(
      params: Params$Resource$Comments$List,
      callback: BodyResponseCallback<Schema$CommentList>
    ): void;
    list(callback: BodyResponseCallback<Schema$CommentList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Comments$List
        | BodyResponseCallback<Schema$CommentList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CommentList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CommentList>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CommentList>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Comments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Comments$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/files/{fileId}/comments').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CommentList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CommentList>(parameters);
      }
    }

    /**
     * Updates an existing comment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.comments.patch({
     *     // The ID of the comment.
     *     commentId: 'placeholder-value',
     *     // The ID of the file.
     *     fileId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "anchor": "my_anchor",
     *       //   "author": {},
     *       //   "commentId": "my_commentId",
     *       //   "content": "my_content",
     *       //   "context": {},
     *       //   "createdDate": "my_createdDate",
     *       //   "deleted": false,
     *       //   "fileId": "my_fileId",
     *       //   "fileTitle": "my_fileTitle",
     *       //   "htmlContent": "my_htmlContent",
     *       //   "kind": "my_kind",
     *       //   "modifiedDate": "my_modifiedDate",
     *       //   "replies": [],
     *       //   "selfLink": "my_selfLink",
     *       //   "status": "my_status"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "anchor": "my_anchor",
     *   //   "author": {},
     *   //   "commentId": "my_commentId",
     *   //   "content": "my_content",
     *   //   "context": {},
     *   //   "createdDate": "my_createdDate",
     *   //   "deleted": false,
     *   //   "fileId": "my_fileId",
     *   //   "fileTitle": "my_fileTitle",
     *   //   "htmlContent": "my_htmlContent",
     *   //   "kind": "my_kind",
     *   //   "modifiedDate": "my_modifiedDate",
     *   //   "replies": [],
     *   //   "selfLink": "my_selfLink",
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
    patch(
      params: Params$Resource$Comments$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Comments$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Comment>>;
    patch(
      params: Params$Resource$Comments$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Comments$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Comment>,
      callback: BodyResponseCallback<Schema$Comment>
    ): void;
    patch(
      params: Params$Resource$Comments$Patch,
      callback: BodyResponseCallback<Schema$Comment>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Comment>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Comments$Patch
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
      let params = (paramsOrCallback || {}) as Params$Resource$Comments$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Comments$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/drive/v2/files/{fileId}/comments/{commentId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'commentId'],
        pathParams: ['commentId', 'fileId'],
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
     * Updates an existing comment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.comments.update({
     *     // The ID of the comment.
     *     commentId: 'placeholder-value',
     *     // The ID of the file.
     *     fileId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "anchor": "my_anchor",
     *       //   "author": {},
     *       //   "commentId": "my_commentId",
     *       //   "content": "my_content",
     *       //   "context": {},
     *       //   "createdDate": "my_createdDate",
     *       //   "deleted": false,
     *       //   "fileId": "my_fileId",
     *       //   "fileTitle": "my_fileTitle",
     *       //   "htmlContent": "my_htmlContent",
     *       //   "kind": "my_kind",
     *       //   "modifiedDate": "my_modifiedDate",
     *       //   "replies": [],
     *       //   "selfLink": "my_selfLink",
     *       //   "status": "my_status"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "anchor": "my_anchor",
     *   //   "author": {},
     *   //   "commentId": "my_commentId",
     *   //   "content": "my_content",
     *   //   "context": {},
     *   //   "createdDate": "my_createdDate",
     *   //   "deleted": false,
     *   //   "fileId": "my_fileId",
     *   //   "fileTitle": "my_fileTitle",
     *   //   "htmlContent": "my_htmlContent",
     *   //   "kind": "my_kind",
     *   //   "modifiedDate": "my_modifiedDate",
     *   //   "replies": [],
     *   //   "selfLink": "my_selfLink",
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
    update(
      params: Params$Resource$Comments$Update,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    update(
      params?: Params$Resource$Comments$Update,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Comment>>;
    update(
      params: Params$Resource$Comments$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Comments$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Comment>,
      callback: BodyResponseCallback<Schema$Comment>
    ): void;
    update(
      params: Params$Resource$Comments$Update,
      callback: BodyResponseCallback<Schema$Comment>
    ): void;
    update(callback: BodyResponseCallback<Schema$Comment>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Comments$Update
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
      let params = (paramsOrCallback || {}) as Params$Resource$Comments$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Comments$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/drive/v2/files/{fileId}/comments/{commentId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'commentId'],
        pathParams: ['commentId', 'fileId'],
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
  }

  export interface Params$Resource$Comments$Delete extends StandardParameters {
    /**
     * The ID of the comment.
     */
    commentId?: string;
    /**
     * The ID of the file.
     */
    fileId?: string;
  }
  export interface Params$Resource$Comments$Get extends StandardParameters {
    /**
     * The ID of the comment.
     */
    commentId?: string;
    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * If set, this will succeed when retrieving a deleted comment, and will include any deleted replies.
     */
    includeDeleted?: boolean;
  }
  export interface Params$Resource$Comments$Insert extends StandardParameters {
    /**
     * The ID of the file.
     */
    fileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Comment;
  }
  export interface Params$Resource$Comments$List extends StandardParameters {
    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * If set, all comments and replies, including deleted comments and replies (with content stripped) will be returned.
     */
    includeDeleted?: boolean;
    /**
     * The maximum number of discussions to include in the response, used for paging.
     */
    maxResults?: number;
    /**
     * The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
     */
    pageToken?: string;
    /**
     * Only discussions that were updated after this timestamp will be returned. Formatted as an RFC 3339 timestamp.
     */
    updatedMin?: string;
  }
  export interface Params$Resource$Comments$Patch extends StandardParameters {
    /**
     * The ID of the comment.
     */
    commentId?: string;
    /**
     * The ID of the file.
     */
    fileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Comment;
  }
  export interface Params$Resource$Comments$Update extends StandardParameters {
    /**
     * The ID of the comment.
     */
    commentId?: string;
    /**
     * The ID of the file.
     */
    fileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Comment;
  }

  export class Resource$Drives {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Permanently deletes a shared drive for which the user is an `organizer`. The shared drive cannot contain any untrashed items.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/drive'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.drives.delete({
     *     // Whether any items inside the shared drive should also be deleted. This option is only supported when `useDomainAdminAccess` is also set to `true`.
     *     allowItemDeletion: 'placeholder-value',
     *     // The ID of the shared drive.
     *     driveId: 'placeholder-value',
     *     // Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.
     *     useDomainAdminAccess: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
      params: Params$Resource$Drives$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Drives$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    delete(
      params: Params$Resource$Drives$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Drives$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Drives$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Drives$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<void>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Drives$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Drives$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/drives/{driveId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['driveId'],
        pathParams: ['driveId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Gets a shared drive's metadata by ID.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.drives.get({
     *     // The ID of the shared drive.
     *     driveId: 'placeholder-value',
     *     // Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.
     *     useDomainAdminAccess: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "backgroundImageFile": {},
     *   //   "backgroundImageLink": "my_backgroundImageLink",
     *   //   "capabilities": {},
     *   //   "colorRgb": "my_colorRgb",
     *   //   "createdDate": "my_createdDate",
     *   //   "hidden": false,
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "orgUnitId": "my_orgUnitId",
     *   //   "restrictions": {},
     *   //   "themeId": "my_themeId"
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
      params: Params$Resource$Drives$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Drives$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Drive>>;
    get(
      params: Params$Resource$Drives$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Drives$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Drive>,
      callback: BodyResponseCallback<Schema$Drive>
    ): void;
    get(
      params: Params$Resource$Drives$Get,
      callback: BodyResponseCallback<Schema$Drive>
    ): void;
    get(callback: BodyResponseCallback<Schema$Drive>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Drives$Get
        | BodyResponseCallback<Schema$Drive>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Drive>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Drive>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Drive>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Drives$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Drives$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/drives/{driveId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['driveId'],
        pathParams: ['driveId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Drive>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Drive>(parameters);
      }
    }

    /**
     * Hides a shared drive from the default view.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/drive'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.drives.hide({
     *     // The ID of the shared drive.
     *     driveId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "backgroundImageFile": {},
     *   //   "backgroundImageLink": "my_backgroundImageLink",
     *   //   "capabilities": {},
     *   //   "colorRgb": "my_colorRgb",
     *   //   "createdDate": "my_createdDate",
     *   //   "hidden": false,
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "orgUnitId": "my_orgUnitId",
     *   //   "restrictions": {},
     *   //   "themeId": "my_themeId"
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
    hide(
      params: Params$Resource$Drives$Hide,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    hide(
      params?: Params$Resource$Drives$Hide,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Drive>>;
    hide(
      params: Params$Resource$Drives$Hide,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    hide(
      params: Params$Resource$Drives$Hide,
      options: MethodOptions | BodyResponseCallback<Schema$Drive>,
      callback: BodyResponseCallback<Schema$Drive>
    ): void;
    hide(
      params: Params$Resource$Drives$Hide,
      callback: BodyResponseCallback<Schema$Drive>
    ): void;
    hide(callback: BodyResponseCallback<Schema$Drive>): void;
    hide(
      paramsOrCallback?:
        | Params$Resource$Drives$Hide
        | BodyResponseCallback<Schema$Drive>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Drive>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Drive>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Drive>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Drives$Hide;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Drives$Hide;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/drives/{driveId}/hide').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['driveId'],
        pathParams: ['driveId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Drive>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Drive>(parameters);
      }
    }

    /**
     * Creates a new shared drive.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/drive'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.drives.insert({
     *     // Required. An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a shared drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same shared drive. If the shared drive already exists a 409 error will be returned.
     *     requestId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "backgroundImageFile": {},
     *       //   "backgroundImageLink": "my_backgroundImageLink",
     *       //   "capabilities": {},
     *       //   "colorRgb": "my_colorRgb",
     *       //   "createdDate": "my_createdDate",
     *       //   "hidden": false,
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "name": "my_name",
     *       //   "orgUnitId": "my_orgUnitId",
     *       //   "restrictions": {},
     *       //   "themeId": "my_themeId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "backgroundImageFile": {},
     *   //   "backgroundImageLink": "my_backgroundImageLink",
     *   //   "capabilities": {},
     *   //   "colorRgb": "my_colorRgb",
     *   //   "createdDate": "my_createdDate",
     *   //   "hidden": false,
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "orgUnitId": "my_orgUnitId",
     *   //   "restrictions": {},
     *   //   "themeId": "my_themeId"
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
      params: Params$Resource$Drives$Insert,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    insert(
      params?: Params$Resource$Drives$Insert,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Drive>>;
    insert(
      params: Params$Resource$Drives$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Drives$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Drive>,
      callback: BodyResponseCallback<Schema$Drive>
    ): void;
    insert(
      params: Params$Resource$Drives$Insert,
      callback: BodyResponseCallback<Schema$Drive>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Drive>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Drives$Insert
        | BodyResponseCallback<Schema$Drive>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Drive>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Drive>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Drive>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Drives$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Drives$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/drives').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['requestId'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Drive>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Drive>(parameters);
      }
    }

    /**
     *  Lists the user's shared drives. This method accepts the `q` parameter, which is a search query combining one or more search terms. For more information, see the [Search for shared drives](/workspace/drive/api/guides/search-shareddrives) guide.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.drives.list({
     *     // Maximum number of shared drives to return per page.
     *     maxResults: 'placeholder-value',
     *     // Page token for shared drives.
     *     pageToken: 'placeholder-value',
     *     // Query string for searching shared drives.
     *     q: 'placeholder-value',
     *     // Issue the request as a domain administrator; if set to true, then all shared drives of the domain in which the requester is an administrator are returned.
     *     useDomainAdminAccess: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
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
      params: Params$Resource$Drives$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Drives$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DriveList>>;
    list(
      params: Params$Resource$Drives$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Drives$List,
      options: MethodOptions | BodyResponseCallback<Schema$DriveList>,
      callback: BodyResponseCallback<Schema$DriveList>
    ): void;
    list(
      params: Params$Resource$Drives$List,
      callback: BodyResponseCallback<Schema$DriveList>
    ): void;
    list(callback: BodyResponseCallback<Schema$DriveList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Drives$List
        | BodyResponseCallback<Schema$DriveList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DriveList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DriveList>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DriveList>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Drives$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Drives$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/drives').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$DriveList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DriveList>(parameters);
      }
    }

    /**
     * Restores a shared drive to the default view.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/drive'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.drives.unhide({
     *     // The ID of the shared drive.
     *     driveId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "backgroundImageFile": {},
     *   //   "backgroundImageLink": "my_backgroundImageLink",
     *   //   "capabilities": {},
     *   //   "colorRgb": "my_colorRgb",
     *   //   "createdDate": "my_createdDate",
     *   //   "hidden": false,
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "orgUnitId": "my_orgUnitId",
     *   //   "restrictions": {},
     *   //   "themeId": "my_themeId"
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
    unhide(
      params: Params$Resource$Drives$Unhide,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    unhide(
      params?: Params$Resource$Drives$Unhide,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Drive>>;
    unhide(
      params: Params$Resource$Drives$Unhide,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    unhide(
      params: Params$Resource$Drives$Unhide,
      options: MethodOptions | BodyResponseCallback<Schema$Drive>,
      callback: BodyResponseCallback<Schema$Drive>
    ): void;
    unhide(
      params: Params$Resource$Drives$Unhide,
      callback: BodyResponseCallback<Schema$Drive>
    ): void;
    unhide(callback: BodyResponseCallback<Schema$Drive>): void;
    unhide(
      paramsOrCallback?:
        | Params$Resource$Drives$Unhide
        | BodyResponseCallback<Schema$Drive>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Drive>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Drive>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Drive>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Drives$Unhide;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Drives$Unhide;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/drives/{driveId}/unhide').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['driveId'],
        pathParams: ['driveId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Drive>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Drive>(parameters);
      }
    }

    /**
     * Updates the metadata for a shared drive.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/drive'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.drives.update({
     *     // The ID of the shared drive.
     *     driveId: 'placeholder-value',
     *     // Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.
     *     useDomainAdminAccess: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "backgroundImageFile": {},
     *       //   "backgroundImageLink": "my_backgroundImageLink",
     *       //   "capabilities": {},
     *       //   "colorRgb": "my_colorRgb",
     *       //   "createdDate": "my_createdDate",
     *       //   "hidden": false,
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "name": "my_name",
     *       //   "orgUnitId": "my_orgUnitId",
     *       //   "restrictions": {},
     *       //   "themeId": "my_themeId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "backgroundImageFile": {},
     *   //   "backgroundImageLink": "my_backgroundImageLink",
     *   //   "capabilities": {},
     *   //   "colorRgb": "my_colorRgb",
     *   //   "createdDate": "my_createdDate",
     *   //   "hidden": false,
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "orgUnitId": "my_orgUnitId",
     *   //   "restrictions": {},
     *   //   "themeId": "my_themeId"
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
      params: Params$Resource$Drives$Update,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    update(
      params?: Params$Resource$Drives$Update,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Drive>>;
    update(
      params: Params$Resource$Drives$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Drives$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Drive>,
      callback: BodyResponseCallback<Schema$Drive>
    ): void;
    update(
      params: Params$Resource$Drives$Update,
      callback: BodyResponseCallback<Schema$Drive>
    ): void;
    update(callback: BodyResponseCallback<Schema$Drive>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Drives$Update
        | BodyResponseCallback<Schema$Drive>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Drive>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Drive>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Drive>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Drives$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Drives$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/drives/{driveId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['driveId'],
        pathParams: ['driveId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Drive>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Drive>(parameters);
      }
    }
  }

  export interface Params$Resource$Drives$Delete extends StandardParameters {
    /**
     * Whether any items inside the shared drive should also be deleted. This option is only supported when `useDomainAdminAccess` is also set to `true`.
     */
    allowItemDeletion?: boolean;
    /**
     * The ID of the shared drive.
     */
    driveId?: string;
    /**
     * Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.
     */
    useDomainAdminAccess?: boolean;
  }
  export interface Params$Resource$Drives$Get extends StandardParameters {
    /**
     * The ID of the shared drive.
     */
    driveId?: string;
    /**
     * Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.
     */
    useDomainAdminAccess?: boolean;
  }
  export interface Params$Resource$Drives$Hide extends StandardParameters {
    /**
     * The ID of the shared drive.
     */
    driveId?: string;
  }
  export interface Params$Resource$Drives$Insert extends StandardParameters {
    /**
     * Required. An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a shared drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same shared drive. If the shared drive already exists a 409 error will be returned.
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Drive;
  }
  export interface Params$Resource$Drives$List extends StandardParameters {
    /**
     * Maximum number of shared drives to return per page.
     */
    maxResults?: number;
    /**
     * Page token for shared drives.
     */
    pageToken?: string;
    /**
     * Query string for searching shared drives.
     */
    q?: string;
    /**
     * Issue the request as a domain administrator; if set to true, then all shared drives of the domain in which the requester is an administrator are returned.
     */
    useDomainAdminAccess?: boolean;
  }
  export interface Params$Resource$Drives$Unhide extends StandardParameters {
    /**
     * The ID of the shared drive.
     */
    driveId?: string;
  }
  export interface Params$Resource$Drives$Update extends StandardParameters {
    /**
     * The ID of the shared drive.
     */
    driveId?: string;
    /**
     * Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.
     */
    useDomainAdminAccess?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Drive;
  }

  export class Resource$Files {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a copy of the specified file.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.apps.readonly',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.photos.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.files.copy({
     *     // Whether to convert this file to the corresponding Docs Editors format.
     *     convert: 'placeholder-value',
     *     // Deprecated: Copying files into multiple folders is no longer supported. Use shortcuts instead.
     *     enforceSingleParent: 'placeholder-value',
     *     // The ID of the file to copy.
     *     fileId: 'placeholder-value',
     *     // A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     *     includeLabels: 'placeholder-value',
     *     // Specifies which additional view's permissions to include in the response. Only `published` is supported.
     *     includePermissionsForView: 'placeholder-value',
     *     // Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
     *     ocr: 'placeholder-value',
     *     // If `ocr` is true, hints at the language to use. Valid values are BCP 47 codes.
     *     ocrLanguage: 'placeholder-value',
     *     // Whether to pin the head revision of the new copy. A file can have a maximum of 200 pinned revisions.
     *     pinned: 'placeholder-value',
     *     // Whether the requesting application supports both My Drives and shared drives.
     *     supportsAllDrives: 'placeholder-value',
     *     // Deprecated: Use `supportsAllDrives` instead.
     *     supportsTeamDrives: 'placeholder-value',
     *     // The language of the timed text.
     *     timedTextLanguage: 'placeholder-value',
     *     // The timed text track name.
     *     timedTextTrackName: 'placeholder-value',
     *     // The visibility of the new file. This parameter is only relevant when the source is not a native Google Doc and convert=false.
     *     visibility: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "alternateLink": "my_alternateLink",
     *       //   "appDataContents": false,
     *       //   "canComment": false,
     *       //   "canReadRevisions": false,
     *       //   "capabilities": {},
     *       //   "contentRestrictions": [],
     *       //   "copyRequiresWriterPermission": false,
     *       //   "copyable": false,
     *       //   "createdDate": "my_createdDate",
     *       //   "defaultOpenWithLink": "my_defaultOpenWithLink",
     *       //   "description": "my_description",
     *       //   "downloadUrl": "my_downloadUrl",
     *       //   "driveId": "my_driveId",
     *       //   "editable": false,
     *       //   "embedLink": "my_embedLink",
     *       //   "etag": "my_etag",
     *       //   "explicitlyTrashed": false,
     *       //   "exportLinks": {},
     *       //   "fileExtension": "my_fileExtension",
     *       //   "fileSize": "my_fileSize",
     *       //   "folderColorRgb": "my_folderColorRgb",
     *       //   "fullFileExtension": "my_fullFileExtension",
     *       //   "hasAugmentedPermissions": false,
     *       //   "hasThumbnail": false,
     *       //   "headRevisionId": "my_headRevisionId",
     *       //   "iconLink": "my_iconLink",
     *       //   "id": "my_id",
     *       //   "imageMediaMetadata": {},
     *       //   "indexableText": {},
     *       //   "inheritedPermissionsDisabled": false,
     *       //   "isAppAuthorized": false,
     *       //   "kind": "my_kind",
     *       //   "labelInfo": {},
     *       //   "labels": {},
     *       //   "lastModifyingUser": {},
     *       //   "lastModifyingUserName": "my_lastModifyingUserName",
     *       //   "lastViewedByMeDate": "my_lastViewedByMeDate",
     *       //   "linkShareMetadata": {},
     *       //   "markedViewedByMeDate": "my_markedViewedByMeDate",
     *       //   "md5Checksum": "my_md5Checksum",
     *       //   "mimeType": "my_mimeType",
     *       //   "modifiedByMeDate": "my_modifiedByMeDate",
     *       //   "modifiedDate": "my_modifiedDate",
     *       //   "openWithLinks": {},
     *       //   "originalFilename": "my_originalFilename",
     *       //   "ownedByMe": false,
     *       //   "ownerNames": [],
     *       //   "owners": [],
     *       //   "parents": [],
     *       //   "permissionIds": [],
     *       //   "permissions": [],
     *       //   "properties": [],
     *       //   "quotaBytesUsed": "my_quotaBytesUsed",
     *       //   "resourceKey": "my_resourceKey",
     *       //   "selfLink": "my_selfLink",
     *       //   "sha1Checksum": "my_sha1Checksum",
     *       //   "sha256Checksum": "my_sha256Checksum",
     *       //   "shareable": false,
     *       //   "shared": false,
     *       //   "sharedWithMeDate": "my_sharedWithMeDate",
     *       //   "sharingUser": {},
     *       //   "shortcutDetails": {},
     *       //   "spaces": [],
     *       //   "teamDriveId": "my_teamDriveId",
     *       //   "thumbnail": {},
     *       //   "thumbnailLink": "my_thumbnailLink",
     *       //   "thumbnailVersion": "my_thumbnailVersion",
     *       //   "title": "my_title",
     *       //   "trashedDate": "my_trashedDate",
     *       //   "trashingUser": {},
     *       //   "userPermission": {},
     *       //   "version": "my_version",
     *       //   "videoMediaMetadata": {},
     *       //   "webContentLink": "my_webContentLink",
     *       //   "webViewLink": "my_webViewLink",
     *       //   "writersCanShare": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternateLink": "my_alternateLink",
     *   //   "appDataContents": false,
     *   //   "canComment": false,
     *   //   "canReadRevisions": false,
     *   //   "capabilities": {},
     *   //   "contentRestrictions": [],
     *   //   "copyRequiresWriterPermission": false,
     *   //   "copyable": false,
     *   //   "createdDate": "my_createdDate",
     *   //   "defaultOpenWithLink": "my_defaultOpenWithLink",
     *   //   "description": "my_description",
     *   //   "downloadUrl": "my_downloadUrl",
     *   //   "driveId": "my_driveId",
     *   //   "editable": false,
     *   //   "embedLink": "my_embedLink",
     *   //   "etag": "my_etag",
     *   //   "explicitlyTrashed": false,
     *   //   "exportLinks": {},
     *   //   "fileExtension": "my_fileExtension",
     *   //   "fileSize": "my_fileSize",
     *   //   "folderColorRgb": "my_folderColorRgb",
     *   //   "fullFileExtension": "my_fullFileExtension",
     *   //   "hasAugmentedPermissions": false,
     *   //   "hasThumbnail": false,
     *   //   "headRevisionId": "my_headRevisionId",
     *   //   "iconLink": "my_iconLink",
     *   //   "id": "my_id",
     *   //   "imageMediaMetadata": {},
     *   //   "indexableText": {},
     *   //   "inheritedPermissionsDisabled": false,
     *   //   "isAppAuthorized": false,
     *   //   "kind": "my_kind",
     *   //   "labelInfo": {},
     *   //   "labels": {},
     *   //   "lastModifyingUser": {},
     *   //   "lastModifyingUserName": "my_lastModifyingUserName",
     *   //   "lastViewedByMeDate": "my_lastViewedByMeDate",
     *   //   "linkShareMetadata": {},
     *   //   "markedViewedByMeDate": "my_markedViewedByMeDate",
     *   //   "md5Checksum": "my_md5Checksum",
     *   //   "mimeType": "my_mimeType",
     *   //   "modifiedByMeDate": "my_modifiedByMeDate",
     *   //   "modifiedDate": "my_modifiedDate",
     *   //   "openWithLinks": {},
     *   //   "originalFilename": "my_originalFilename",
     *   //   "ownedByMe": false,
     *   //   "ownerNames": [],
     *   //   "owners": [],
     *   //   "parents": [],
     *   //   "permissionIds": [],
     *   //   "permissions": [],
     *   //   "properties": [],
     *   //   "quotaBytesUsed": "my_quotaBytesUsed",
     *   //   "resourceKey": "my_resourceKey",
     *   //   "selfLink": "my_selfLink",
     *   //   "sha1Checksum": "my_sha1Checksum",
     *   //   "sha256Checksum": "my_sha256Checksum",
     *   //   "shareable": false,
     *   //   "shared": false,
     *   //   "sharedWithMeDate": "my_sharedWithMeDate",
     *   //   "sharingUser": {},
     *   //   "shortcutDetails": {},
     *   //   "spaces": [],
     *   //   "teamDriveId": "my_teamDriveId",
     *   //   "thumbnail": {},
     *   //   "thumbnailLink": "my_thumbnailLink",
     *   //   "thumbnailVersion": "my_thumbnailVersion",
     *   //   "title": "my_title",
     *   //   "trashedDate": "my_trashedDate",
     *   //   "trashingUser": {},
     *   //   "userPermission": {},
     *   //   "version": "my_version",
     *   //   "videoMediaMetadata": {},
     *   //   "webContentLink": "my_webContentLink",
     *   //   "webViewLink": "my_webViewLink",
     *   //   "writersCanShare": false
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
    copy(
      params: Params$Resource$Files$Copy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    copy(
      params?: Params$Resource$Files$Copy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$File>>;
    copy(
      params: Params$Resource$Files$Copy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    copy(
      params: Params$Resource$Files$Copy,
      options: MethodOptions | BodyResponseCallback<Schema$File>,
      callback: BodyResponseCallback<Schema$File>
    ): void;
    copy(
      params: Params$Resource$Files$Copy,
      callback: BodyResponseCallback<Schema$File>
    ): void;
    copy(callback: BodyResponseCallback<Schema$File>): void;
    copy(
      paramsOrCallback?:
        | Params$Resource$Files$Copy
        | BodyResponseCallback<Schema$File>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$File>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$File>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$File>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Files$Copy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Files$Copy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/files/{fileId}/copy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$File>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$File>(parameters);
      }
    }

    /**
     * Permanently deletes a file owned by the user without moving it to the trash. If the file belongs to a shared drive, the user must be an `organizer` on the parent folder. If the target is a folder, all descendants owned by the user are also deleted.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.file',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.files.delete({
     *     // Deprecated: If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item is placed under its owner's root.
     *     enforceSingleParent: 'placeholder-value',
     *     // The ID of the file to delete.
     *     fileId: 'placeholder-value',
     *     // Whether the requesting application supports both My Drives and shared drives.
     *     supportsAllDrives: 'placeholder-value',
     *     // Deprecated: Use `supportsAllDrives` instead.
     *     supportsTeamDrives: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
      params: Params$Resource$Files$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Files$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    delete(
      params: Params$Resource$Files$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Files$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Files$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Files$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<void>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Files$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Files$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/files/{fileId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Permanently deletes all of the user's trashed files.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/drive'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.files.emptyTrash({
     *     // If set, empties the trash of the provided shared drive.
     *     driveId: 'placeholder-value',
     *     // Deprecated: If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item is placed under its owner's root.
     *     enforceSingleParent: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
    emptyTrash(
      params: Params$Resource$Files$Emptytrash,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    emptyTrash(
      params?: Params$Resource$Files$Emptytrash,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    emptyTrash(
      params: Params$Resource$Files$Emptytrash,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    emptyTrash(
      params: Params$Resource$Files$Emptytrash,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    emptyTrash(
      params: Params$Resource$Files$Emptytrash,
      callback: BodyResponseCallback<void>
    ): void;
    emptyTrash(callback: BodyResponseCallback<void>): void;
    emptyTrash(
      paramsOrCallback?:
        | Params$Resource$Files$Emptytrash
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<void>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Files$Emptytrash;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Files$Emptytrash;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/files/trash').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
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
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Exports a Google Workspace document to the requested MIME type and returns exported byte content. Note that the exported content is limited to 10MB.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.meet.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.files.export({
     *     // The ID of the file.
     *     fileId: 'placeholder-value',
     *     // Required. The MIME type of the format requested for this export.
     *     mimeType: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
    export(
      params: Params$Resource$Files$Export,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    export(
      params?: Params$Resource$Files$Export,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<unknown>>;
    export(
      params: Params$Resource$Files$Export,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    export(
      params: Params$Resource$Files$Export,
      options: MethodOptions | BodyResponseCallback<unknown>,
      callback: BodyResponseCallback<unknown>
    ): void;
    export(
      params: Params$Resource$Files$Export,
      callback: BodyResponseCallback<unknown>
    ): void;
    export(callback: BodyResponseCallback<unknown>): void;
    export(
      paramsOrCallback?:
        | Params$Resource$Files$Export
        | BodyResponseCallback<unknown>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<unknown>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<unknown> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<unknown>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Files$Export;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Files$Export;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/files/{fileId}/export').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'mimeType'],
        pathParams: ['fileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<unknown>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<unknown>(parameters);
      }
    }

    /**
     * Generates a set of file IDs which can be provided in insert or copy requests.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.file',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.files.generateIds({
     *     // Maximum number of IDs to return.
     *     maxResults: 'placeholder-value',
     *     // The space in which the IDs can be used to create new files. Supported values are `drive` and `appDataFolder`. (Default: `drive`)
     *     space: 'placeholder-value',
     *     // The type of items which the IDs can be used for. Supported values are `files` and `shortcuts`. Note that `shortcuts` are only supported in the `drive` `space`. (Default: `files`)
     *     type: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "ids": [],
     *   //   "kind": "my_kind",
     *   //   "space": "my_space"
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
    generateIds(
      params: Params$Resource$Files$Generateids,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    generateIds(
      params?: Params$Resource$Files$Generateids,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GeneratedIds>>;
    generateIds(
      params: Params$Resource$Files$Generateids,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    generateIds(
      params: Params$Resource$Files$Generateids,
      options: MethodOptions | BodyResponseCallback<Schema$GeneratedIds>,
      callback: BodyResponseCallback<Schema$GeneratedIds>
    ): void;
    generateIds(
      params: Params$Resource$Files$Generateids,
      callback: BodyResponseCallback<Schema$GeneratedIds>
    ): void;
    generateIds(callback: BodyResponseCallback<Schema$GeneratedIds>): void;
    generateIds(
      paramsOrCallback?:
        | Params$Resource$Files$Generateids
        | BodyResponseCallback<Schema$GeneratedIds>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GeneratedIds>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GeneratedIds>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GeneratedIds>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Files$Generateids;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Files$Generateids;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/files/generateIds').replace(
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
        createAPIRequest<Schema$GeneratedIds>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GeneratedIds>(parameters);
      }
    }

    /**
     *  Gets a file's metadata or content by ID. If you provide the URL parameter `alt=media`, then the response includes the file contents in the response body. Downloading content with `alt=media` only works if the file is stored in Drive. To download Google Docs, Sheets, and Slides use [`files.export`](/workspace/drive/api/reference/rest/v2/files/export) instead. For more information, see [Download & export files](/workspace/drive/api/guides/manage-downloads).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.meet.readonly',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.metadata.readonly',
     *       'https://www.googleapis.com/auth/drive.photos.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.files.get({
     *     // Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when the `alt` parameter is set to `media` and the user is the owner of the file or an organizer of the shared drive in which the file resides.
     *     acknowledgeAbuse: 'placeholder-value',
     *     // The ID for the file in question.
     *     fileId: 'placeholder-value',
     *     // A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     *     includeLabels: 'placeholder-value',
     *     // Specifies which additional view's permissions to include in the response. Only `published` is supported.
     *     includePermissionsForView: 'placeholder-value',
     *     // Deprecated: This parameter has no function.
     *     projection: 'placeholder-value',
     *     // Specifies the Revision ID that should be downloaded. Ignored unless alt=media is specified.
     *     revisionId: 'placeholder-value',
     *     // Whether the requesting application supports both My Drives and shared drives.
     *     supportsAllDrives: 'placeholder-value',
     *     // Deprecated: Use `supportsAllDrives` instead.
     *     supportsTeamDrives: 'placeholder-value',
     *     // Deprecated: Use `files.update` with `modifiedDateBehavior=noChange, updateViewedDate=true` and an empty request body.
     *     updateViewedDate: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternateLink": "my_alternateLink",
     *   //   "appDataContents": false,
     *   //   "canComment": false,
     *   //   "canReadRevisions": false,
     *   //   "capabilities": {},
     *   //   "contentRestrictions": [],
     *   //   "copyRequiresWriterPermission": false,
     *   //   "copyable": false,
     *   //   "createdDate": "my_createdDate",
     *   //   "defaultOpenWithLink": "my_defaultOpenWithLink",
     *   //   "description": "my_description",
     *   //   "downloadUrl": "my_downloadUrl",
     *   //   "driveId": "my_driveId",
     *   //   "editable": false,
     *   //   "embedLink": "my_embedLink",
     *   //   "etag": "my_etag",
     *   //   "explicitlyTrashed": false,
     *   //   "exportLinks": {},
     *   //   "fileExtension": "my_fileExtension",
     *   //   "fileSize": "my_fileSize",
     *   //   "folderColorRgb": "my_folderColorRgb",
     *   //   "fullFileExtension": "my_fullFileExtension",
     *   //   "hasAugmentedPermissions": false,
     *   //   "hasThumbnail": false,
     *   //   "headRevisionId": "my_headRevisionId",
     *   //   "iconLink": "my_iconLink",
     *   //   "id": "my_id",
     *   //   "imageMediaMetadata": {},
     *   //   "indexableText": {},
     *   //   "inheritedPermissionsDisabled": false,
     *   //   "isAppAuthorized": false,
     *   //   "kind": "my_kind",
     *   //   "labelInfo": {},
     *   //   "labels": {},
     *   //   "lastModifyingUser": {},
     *   //   "lastModifyingUserName": "my_lastModifyingUserName",
     *   //   "lastViewedByMeDate": "my_lastViewedByMeDate",
     *   //   "linkShareMetadata": {},
     *   //   "markedViewedByMeDate": "my_markedViewedByMeDate",
     *   //   "md5Checksum": "my_md5Checksum",
     *   //   "mimeType": "my_mimeType",
     *   //   "modifiedByMeDate": "my_modifiedByMeDate",
     *   //   "modifiedDate": "my_modifiedDate",
     *   //   "openWithLinks": {},
     *   //   "originalFilename": "my_originalFilename",
     *   //   "ownedByMe": false,
     *   //   "ownerNames": [],
     *   //   "owners": [],
     *   //   "parents": [],
     *   //   "permissionIds": [],
     *   //   "permissions": [],
     *   //   "properties": [],
     *   //   "quotaBytesUsed": "my_quotaBytesUsed",
     *   //   "resourceKey": "my_resourceKey",
     *   //   "selfLink": "my_selfLink",
     *   //   "sha1Checksum": "my_sha1Checksum",
     *   //   "sha256Checksum": "my_sha256Checksum",
     *   //   "shareable": false,
     *   //   "shared": false,
     *   //   "sharedWithMeDate": "my_sharedWithMeDate",
     *   //   "sharingUser": {},
     *   //   "shortcutDetails": {},
     *   //   "spaces": [],
     *   //   "teamDriveId": "my_teamDriveId",
     *   //   "thumbnail": {},
     *   //   "thumbnailLink": "my_thumbnailLink",
     *   //   "thumbnailVersion": "my_thumbnailVersion",
     *   //   "title": "my_title",
     *   //   "trashedDate": "my_trashedDate",
     *   //   "trashingUser": {},
     *   //   "userPermission": {},
     *   //   "version": "my_version",
     *   //   "videoMediaMetadata": {},
     *   //   "webContentLink": "my_webContentLink",
     *   //   "webViewLink": "my_webViewLink",
     *   //   "writersCanShare": false
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
      params: Params$Resource$Files$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Files$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$File>>;
    get(
      params: Params$Resource$Files$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Files$Get,
      options: MethodOptions | BodyResponseCallback<Schema$File>,
      callback: BodyResponseCallback<Schema$File>
    ): void;
    get(
      params: Params$Resource$Files$Get,
      callback: BodyResponseCallback<Schema$File>
    ): void;
    get(callback: BodyResponseCallback<Schema$File>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Files$Get
        | BodyResponseCallback<Schema$File>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$File>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$File>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$File>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Files$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Files$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/files/{fileId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$File>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$File>(parameters);
      }
    }

    /**
     *  Inserts a new file. This method supports an x/upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:*`x/x` Note: Specify a valid MIME type, rather than the literal `x/x` value. The literal `x/x` is only used to indicate that any valid MIME type can be uploaded. For more information on uploading files, see [Upload file data](/workspace/drive/api/guides/manage-uploads). Apps creating shortcuts with `files.insert` must specify the MIME type `application/vnd.google-apps.shortcut`. Apps should specify a file extension in the `title` property when inserting files with the API. For example, an operation to insert a JPEG file should specify something like `"title": "cat.jpg"` in the metadata. Subsequent `GET` requests include the read-only `fileExtension` property populated with the extension originally specified in the `title` property. When a Google Drive user requests to download a file, or when the file is downloaded through the sync client, Drive builds a full filename (with extension) based on the title. In cases where the extension is missing, Drive attempts to determine the extension based on the file's MIME type.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.apps.readonly',
     *       'https://www.googleapis.com/auth/drive.file',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.files.insert({
     *     // Whether to convert this file to the corresponding Docs Editors format.
     *     convert: 'placeholder-value',
     *     // Deprecated: Creating files in multiple folders is no longer supported.
     *     enforceSingleParent: 'placeholder-value',
     *     // A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     *     includeLabels: 'placeholder-value',
     *     // Specifies which additional view's permissions to include in the response. Only `published` is supported.
     *     includePermissionsForView: 'placeholder-value',
     *     // Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
     *     ocr: 'placeholder-value',
     *     // If ocr is true, hints at the language to use. Valid values are BCP 47 codes.
     *     ocrLanguage: 'placeholder-value',
     *     // Whether to pin the head revision of the uploaded file. A file can have a maximum of 200 pinned revisions.
     *     pinned: 'placeholder-value',
     *     // Whether the requesting application supports both My Drives and shared drives.
     *     supportsAllDrives: 'placeholder-value',
     *     // Deprecated: Use `supportsAllDrives` instead.
     *     supportsTeamDrives: 'placeholder-value',
     *     // The language of the timed text.
     *     timedTextLanguage: 'placeholder-value',
     *     // The timed text track name.
     *     timedTextTrackName: 'placeholder-value',
     *     // Whether to use the content as indexable text.
     *     useContentAsIndexableText: 'placeholder-value',
     *     // The visibility of the new file. This parameter is only relevant when convert=false.
     *     visibility: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "alternateLink": "my_alternateLink",
     *       //   "appDataContents": false,
     *       //   "canComment": false,
     *       //   "canReadRevisions": false,
     *       //   "capabilities": {},
     *       //   "contentRestrictions": [],
     *       //   "copyRequiresWriterPermission": false,
     *       //   "copyable": false,
     *       //   "createdDate": "my_createdDate",
     *       //   "defaultOpenWithLink": "my_defaultOpenWithLink",
     *       //   "description": "my_description",
     *       //   "downloadUrl": "my_downloadUrl",
     *       //   "driveId": "my_driveId",
     *       //   "editable": false,
     *       //   "embedLink": "my_embedLink",
     *       //   "etag": "my_etag",
     *       //   "explicitlyTrashed": false,
     *       //   "exportLinks": {},
     *       //   "fileExtension": "my_fileExtension",
     *       //   "fileSize": "my_fileSize",
     *       //   "folderColorRgb": "my_folderColorRgb",
     *       //   "fullFileExtension": "my_fullFileExtension",
     *       //   "hasAugmentedPermissions": false,
     *       //   "hasThumbnail": false,
     *       //   "headRevisionId": "my_headRevisionId",
     *       //   "iconLink": "my_iconLink",
     *       //   "id": "my_id",
     *       //   "imageMediaMetadata": {},
     *       //   "indexableText": {},
     *       //   "inheritedPermissionsDisabled": false,
     *       //   "isAppAuthorized": false,
     *       //   "kind": "my_kind",
     *       //   "labelInfo": {},
     *       //   "labels": {},
     *       //   "lastModifyingUser": {},
     *       //   "lastModifyingUserName": "my_lastModifyingUserName",
     *       //   "lastViewedByMeDate": "my_lastViewedByMeDate",
     *       //   "linkShareMetadata": {},
     *       //   "markedViewedByMeDate": "my_markedViewedByMeDate",
     *       //   "md5Checksum": "my_md5Checksum",
     *       //   "mimeType": "my_mimeType",
     *       //   "modifiedByMeDate": "my_modifiedByMeDate",
     *       //   "modifiedDate": "my_modifiedDate",
     *       //   "openWithLinks": {},
     *       //   "originalFilename": "my_originalFilename",
     *       //   "ownedByMe": false,
     *       //   "ownerNames": [],
     *       //   "owners": [],
     *       //   "parents": [],
     *       //   "permissionIds": [],
     *       //   "permissions": [],
     *       //   "properties": [],
     *       //   "quotaBytesUsed": "my_quotaBytesUsed",
     *       //   "resourceKey": "my_resourceKey",
     *       //   "selfLink": "my_selfLink",
     *       //   "sha1Checksum": "my_sha1Checksum",
     *       //   "sha256Checksum": "my_sha256Checksum",
     *       //   "shareable": false,
     *       //   "shared": false,
     *       //   "sharedWithMeDate": "my_sharedWithMeDate",
     *       //   "sharingUser": {},
     *       //   "shortcutDetails": {},
     *       //   "spaces": [],
     *       //   "teamDriveId": "my_teamDriveId",
     *       //   "thumbnail": {},
     *       //   "thumbnailLink": "my_thumbnailLink",
     *       //   "thumbnailVersion": "my_thumbnailVersion",
     *       //   "title": "my_title",
     *       //   "trashedDate": "my_trashedDate",
     *       //   "trashingUser": {},
     *       //   "userPermission": {},
     *       //   "version": "my_version",
     *       //   "videoMediaMetadata": {},
     *       //   "webContentLink": "my_webContentLink",
     *       //   "webViewLink": "my_webViewLink",
     *       //   "writersCanShare": false
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
     *   //   "alternateLink": "my_alternateLink",
     *   //   "appDataContents": false,
     *   //   "canComment": false,
     *   //   "canReadRevisions": false,
     *   //   "capabilities": {},
     *   //   "contentRestrictions": [],
     *   //   "copyRequiresWriterPermission": false,
     *   //   "copyable": false,
     *   //   "createdDate": "my_createdDate",
     *   //   "defaultOpenWithLink": "my_defaultOpenWithLink",
     *   //   "description": "my_description",
     *   //   "downloadUrl": "my_downloadUrl",
     *   //   "driveId": "my_driveId",
     *   //   "editable": false,
     *   //   "embedLink": "my_embedLink",
     *   //   "etag": "my_etag",
     *   //   "explicitlyTrashed": false,
     *   //   "exportLinks": {},
     *   //   "fileExtension": "my_fileExtension",
     *   //   "fileSize": "my_fileSize",
     *   //   "folderColorRgb": "my_folderColorRgb",
     *   //   "fullFileExtension": "my_fullFileExtension",
     *   //   "hasAugmentedPermissions": false,
     *   //   "hasThumbnail": false,
     *   //   "headRevisionId": "my_headRevisionId",
     *   //   "iconLink": "my_iconLink",
     *   //   "id": "my_id",
     *   //   "imageMediaMetadata": {},
     *   //   "indexableText": {},
     *   //   "inheritedPermissionsDisabled": false,
     *   //   "isAppAuthorized": false,
     *   //   "kind": "my_kind",
     *   //   "labelInfo": {},
     *   //   "labels": {},
     *   //   "lastModifyingUser": {},
     *   //   "lastModifyingUserName": "my_lastModifyingUserName",
     *   //   "lastViewedByMeDate": "my_lastViewedByMeDate",
     *   //   "linkShareMetadata": {},
     *   //   "markedViewedByMeDate": "my_markedViewedByMeDate",
     *   //   "md5Checksum": "my_md5Checksum",
     *   //   "mimeType": "my_mimeType",
     *   //   "modifiedByMeDate": "my_modifiedByMeDate",
     *   //   "modifiedDate": "my_modifiedDate",
     *   //   "openWithLinks": {},
     *   //   "originalFilename": "my_originalFilename",
     *   //   "ownedByMe": false,
     *   //   "ownerNames": [],
     *   //   "owners": [],
     *   //   "parents": [],
     *   //   "permissionIds": [],
     *   //   "permissions": [],
     *   //   "properties": [],
     *   //   "quotaBytesUsed": "my_quotaBytesUsed",
     *   //   "resourceKey": "my_resourceKey",
     *   //   "selfLink": "my_selfLink",
     *   //   "sha1Checksum": "my_sha1Checksum",
     *   //   "sha256Checksum": "my_sha256Checksum",
     *   //   "shareable": false,
     *   //   "shared": false,
     *   //   "sharedWithMeDate": "my_sharedWithMeDate",
     *   //   "sharingUser": {},
     *   //   "shortcutDetails": {},
     *   //   "spaces": [],
     *   //   "teamDriveId": "my_teamDriveId",
     *   //   "thumbnail": {},
     *   //   "thumbnailLink": "my_thumbnailLink",
     *   //   "thumbnailVersion": "my_thumbnailVersion",
     *   //   "title": "my_title",
     *   //   "trashedDate": "my_trashedDate",
     *   //   "trashingUser": {},
     *   //   "userPermission": {},
     *   //   "version": "my_version",
     *   //   "videoMediaMetadata": {},
     *   //   "webContentLink": "my_webContentLink",
     *   //   "webViewLink": "my_webViewLink",
     *   //   "writersCanShare": false
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
      params: Params$Resource$Files$Insert,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    insert(
      params?: Params$Resource$Files$Insert,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$File>>;
    insert(
      params: Params$Resource$Files$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Files$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$File>,
      callback: BodyResponseCallback<Schema$File>
    ): void;
    insert(
      params: Params$Resource$Files$Insert,
      callback: BodyResponseCallback<Schema$File>
    ): void;
    insert(callback: BodyResponseCallback<Schema$File>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Files$Insert
        | BodyResponseCallback<Schema$File>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$File>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$File>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$File>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Files$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Files$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/files').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        mediaUrl: (rootUrl + '/upload/drive/v2/files').replace(
          /([^:]\/)\/+/g,
          '$1'
        ),
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$File>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$File>(parameters);
      }
    }

    /**
     *  Lists the user's files. This method accepts the `q` parameter, which is a search query combining one or more search terms. For more information, see the [Search for files & folders](/workspace/drive/api/guides/search-files) guide. *Note:* This method returns *all* files by default, including trashed files. If you don't want trashed files to appear in the list, use the `trashed=false` query parameter to remove trashed files from the results.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.apps.readonly',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.meet.readonly',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.metadata.readonly',
     *       'https://www.googleapis.com/auth/drive.photos.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.files.list({
     *     // Bodies of items (files/documents) to which the query applies. Supported bodies are `default`, `domain`, `drive` and `allDrives`. Prefer `default` or `drive` to `allDrives` for efficiency.
     *     corpora: 'placeholder-value',
     *     // Deprecated: The body of items (files/documents) to which the query applies. Use `corpora` instead.
     *     corpus: 'placeholder-value',
     *     // ID of the shared drive to search.
     *     driveId: 'placeholder-value',
     *     // Whether both My Drive and shared drive items should be included in results.
     *     includeItemsFromAllDrives: 'placeholder-value',
     *     // A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     *     includeLabels: 'placeholder-value',
     *     // Specifies which additional view's permissions to include in the response. Only `published` is supported.
     *     includePermissionsForView: 'placeholder-value',
     *     // Deprecated: Use `includeItemsFromAllDrives` instead.
     *     includeTeamDriveItems: 'placeholder-value',
     *     // The maximum number of files to return per page. Partial or empty result pages are possible even before the end of the files list has been reached.
     *     maxResults: 'placeholder-value',
     *     // A comma-separated list of sort keys. Valid keys are: * `createdDate`: When the file was created. * `folder`: The folder ID. This field is sorted using alphabetical ordering. * `lastViewedByMeDate`: The last time the file was viewed by the user. * `modifiedByMeDate`: The last time the file was modified by the user. * `modifiedDate`: The last time the file was modified by anyone. * `quotaBytesUsed`: The number of storage quota bytes used by the file. * `recency`: The most recent timestamp from the file's date-time fields. * `sharedWithMeDate`: When the file was shared with the user, if applicable. * `starred`: Whether the user has starred the file. * `title`: The title of the file. This field is sorted using alphabetical ordering, so 1, 12, 2, 22. * `title_natural`: The title of the file. This field is sorted using natural sort ordering, so 1, 2, 12, 22. Each key sorts ascending by default, but can be reversed with the 'desc' modifier. Example usage: `?orderBy=folder,modifiedDate desc,title`. Note that there's a current limitation for users with approximately one million files in which the requested sort order is ignored.
     *     orderBy: 'placeholder-value',
     *     // Page token for files.
     *     pageToken: 'placeholder-value',
     *     // Deprecated: This parameter has no function.
     *     projection: 'placeholder-value',
     *     // Query string for searching files.
     *     q: 'placeholder-value',
     *     // A comma-separated list of spaces to query. Supported values are `drive`, and `appDataFolder`.
     *     spaces: 'placeholder-value',
     *     // Whether the requesting application supports both My Drives and shared drives.
     *     supportsAllDrives: 'placeholder-value',
     *     // Deprecated: Use `supportsAllDrives` instead.
     *     supportsTeamDrives: 'placeholder-value',
     *     // Deprecated: Use `driveId` instead.
     *     teamDriveId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "incompleteSearch": false,
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextLink": "my_nextLink",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "selfLink": "my_selfLink"
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
      params: Params$Resource$Files$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Files$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$FileList>>;
    list(
      params: Params$Resource$Files$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Files$List,
      options: MethodOptions | BodyResponseCallback<Schema$FileList>,
      callback: BodyResponseCallback<Schema$FileList>
    ): void;
    list(
      params: Params$Resource$Files$List,
      callback: BodyResponseCallback<Schema$FileList>
    ): void;
    list(callback: BodyResponseCallback<Schema$FileList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Files$List
        | BodyResponseCallback<Schema$FileList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FileList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FileList>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$FileList>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Files$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Files$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/files').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$FileList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FileList>(parameters);
      }
    }

    /**
     * Lists the labels on a file.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.meet.readonly',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.metadata.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.files.listLabels({
     *     // The ID for the file.
     *     fileId: 'placeholder-value',
     *     // The maximum number of labels to return per page. When not set, defaults to 100.
     *     maxResults: 'placeholder-value',
     *     // The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from the previous response.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
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
    listLabels(
      params: Params$Resource$Files$Listlabels,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    listLabels(
      params?: Params$Resource$Files$Listlabels,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$LabelList>>;
    listLabels(
      params: Params$Resource$Files$Listlabels,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listLabels(
      params: Params$Resource$Files$Listlabels,
      options: MethodOptions | BodyResponseCallback<Schema$LabelList>,
      callback: BodyResponseCallback<Schema$LabelList>
    ): void;
    listLabels(
      params: Params$Resource$Files$Listlabels,
      callback: BodyResponseCallback<Schema$LabelList>
    ): void;
    listLabels(callback: BodyResponseCallback<Schema$LabelList>): void;
    listLabels(
      paramsOrCallback?:
        | Params$Resource$Files$Listlabels
        | BodyResponseCallback<Schema$LabelList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LabelList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LabelList>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$LabelList>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Files$Listlabels;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Files$Listlabels;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/files/{fileId}/listLabels').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LabelList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LabelList>(parameters);
      }
    }

    /**
     * Modifies the set of labels applied to a file. Returns a list of the labels that were added or modified.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.files.modifyLabels({
     *     // The ID of the file to which the labels belong.
     *     fileId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "kind": "my_kind",
     *       //   "labelModifications": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "modifiedLabels": []
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
    modifyLabels(
      params: Params$Resource$Files$Modifylabels,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    modifyLabels(
      params?: Params$Resource$Files$Modifylabels,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ModifyLabelsResponse>>;
    modifyLabels(
      params: Params$Resource$Files$Modifylabels,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    modifyLabels(
      params: Params$Resource$Files$Modifylabels,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ModifyLabelsResponse>,
      callback: BodyResponseCallback<Schema$ModifyLabelsResponse>
    ): void;
    modifyLabels(
      params: Params$Resource$Files$Modifylabels,
      callback: BodyResponseCallback<Schema$ModifyLabelsResponse>
    ): void;
    modifyLabels(
      callback: BodyResponseCallback<Schema$ModifyLabelsResponse>
    ): void;
    modifyLabels(
      paramsOrCallback?:
        | Params$Resource$Files$Modifylabels
        | BodyResponseCallback<Schema$ModifyLabelsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ModifyLabelsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ModifyLabelsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ModifyLabelsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Files$Modifylabels;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Files$Modifylabels;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/files/{fileId}/modifyLabels').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ModifyLabelsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ModifyLabelsResponse>(parameters);
      }
    }

    /**
     * Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might change automatically, such as modifiedDate. This method supports patch semantics.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.apps.readonly',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.scripts',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.files.patch({
     *     // Comma-separated list of parent IDs to add.
     *     addParents: 'placeholder-value',
     *     // Deprecated: This parameter has no function.
     *     convert: 'placeholder-value',
     *     // Deprecated: Adding files to multiple folders is no longer supported. Use `shortcuts` instead.
     *     enforceSingleParent: 'placeholder-value',
     *     // The ID of the file to update.
     *     fileId: 'placeholder-value',
     *     // A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     *     includeLabels: 'placeholder-value',
     *     // Specifies which additional view's permissions to include in the response. Only `published` is supported.
     *     includePermissionsForView: 'placeholder-value',
     *     // Determines the behavior in which `modifiedDate` is updated. This overrides `setModifiedDate`.
     *     modifiedDateBehavior: 'placeholder-value',
     *     // Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If true or not set, a new blob is created as head revision, and previous unpinned revisions are preserved for a short period of time. Pinned revisions are stored indefinitely, using additional storage quota, up to a maximum of 200 revisions. For details on how revisions are retained, see the [Drive Help Center](https://support.google.com/drive/answer/2409045). Note that this field is ignored if there is no payload in the request.
     *     newRevision: 'placeholder-value',
     *     // Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
     *     ocr: 'placeholder-value',
     *     // If ocr is true, hints at the language to use. Valid values are BCP 47 codes.
     *     ocrLanguage: 'placeholder-value',
     *     // Whether to pin the new revision. A file can have a maximum of 200 pinned revisions. Note that this field is ignored if there is no payload in the request.
     *     pinned: 'placeholder-value',
     *     // Comma-separated list of parent IDs to remove.
     *     removeParents: 'placeholder-value',
     *     // Whether to set the modified date using the value supplied in the request body. Setting this field to `true` is equivalent to `modifiedDateBehavior=fromBodyOrNow`, and `false` is equivalent to `modifiedDateBehavior=now`. To prevent any changes to the modified date set `modifiedDateBehavior=noChange`.
     *     setModifiedDate: 'placeholder-value',
     *     // Whether the requesting application supports both My Drives and shared drives.
     *     supportsAllDrives: 'placeholder-value',
     *     // Deprecated: Use `supportsAllDrives` instead.
     *     supportsTeamDrives: 'placeholder-value',
     *     // The language of the timed text.
     *     timedTextLanguage: 'placeholder-value',
     *     // The timed text track name.
     *     timedTextTrackName: 'placeholder-value',
     *     // Whether to update the view date after successfully updating the file.
     *     updateViewedDate: 'placeholder-value',
     *     // Whether to use the content as indexable text.
     *     useContentAsIndexableText: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "alternateLink": "my_alternateLink",
     *       //   "appDataContents": false,
     *       //   "canComment": false,
     *       //   "canReadRevisions": false,
     *       //   "capabilities": {},
     *       //   "contentRestrictions": [],
     *       //   "copyRequiresWriterPermission": false,
     *       //   "copyable": false,
     *       //   "createdDate": "my_createdDate",
     *       //   "defaultOpenWithLink": "my_defaultOpenWithLink",
     *       //   "description": "my_description",
     *       //   "downloadUrl": "my_downloadUrl",
     *       //   "driveId": "my_driveId",
     *       //   "editable": false,
     *       //   "embedLink": "my_embedLink",
     *       //   "etag": "my_etag",
     *       //   "explicitlyTrashed": false,
     *       //   "exportLinks": {},
     *       //   "fileExtension": "my_fileExtension",
     *       //   "fileSize": "my_fileSize",
     *       //   "folderColorRgb": "my_folderColorRgb",
     *       //   "fullFileExtension": "my_fullFileExtension",
     *       //   "hasAugmentedPermissions": false,
     *       //   "hasThumbnail": false,
     *       //   "headRevisionId": "my_headRevisionId",
     *       //   "iconLink": "my_iconLink",
     *       //   "id": "my_id",
     *       //   "imageMediaMetadata": {},
     *       //   "indexableText": {},
     *       //   "inheritedPermissionsDisabled": false,
     *       //   "isAppAuthorized": false,
     *       //   "kind": "my_kind",
     *       //   "labelInfo": {},
     *       //   "labels": {},
     *       //   "lastModifyingUser": {},
     *       //   "lastModifyingUserName": "my_lastModifyingUserName",
     *       //   "lastViewedByMeDate": "my_lastViewedByMeDate",
     *       //   "linkShareMetadata": {},
     *       //   "markedViewedByMeDate": "my_markedViewedByMeDate",
     *       //   "md5Checksum": "my_md5Checksum",
     *       //   "mimeType": "my_mimeType",
     *       //   "modifiedByMeDate": "my_modifiedByMeDate",
     *       //   "modifiedDate": "my_modifiedDate",
     *       //   "openWithLinks": {},
     *       //   "originalFilename": "my_originalFilename",
     *       //   "ownedByMe": false,
     *       //   "ownerNames": [],
     *       //   "owners": [],
     *       //   "parents": [],
     *       //   "permissionIds": [],
     *       //   "permissions": [],
     *       //   "properties": [],
     *       //   "quotaBytesUsed": "my_quotaBytesUsed",
     *       //   "resourceKey": "my_resourceKey",
     *       //   "selfLink": "my_selfLink",
     *       //   "sha1Checksum": "my_sha1Checksum",
     *       //   "sha256Checksum": "my_sha256Checksum",
     *       //   "shareable": false,
     *       //   "shared": false,
     *       //   "sharedWithMeDate": "my_sharedWithMeDate",
     *       //   "sharingUser": {},
     *       //   "shortcutDetails": {},
     *       //   "spaces": [],
     *       //   "teamDriveId": "my_teamDriveId",
     *       //   "thumbnail": {},
     *       //   "thumbnailLink": "my_thumbnailLink",
     *       //   "thumbnailVersion": "my_thumbnailVersion",
     *       //   "title": "my_title",
     *       //   "trashedDate": "my_trashedDate",
     *       //   "trashingUser": {},
     *       //   "userPermission": {},
     *       //   "version": "my_version",
     *       //   "videoMediaMetadata": {},
     *       //   "webContentLink": "my_webContentLink",
     *       //   "webViewLink": "my_webViewLink",
     *       //   "writersCanShare": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternateLink": "my_alternateLink",
     *   //   "appDataContents": false,
     *   //   "canComment": false,
     *   //   "canReadRevisions": false,
     *   //   "capabilities": {},
     *   //   "contentRestrictions": [],
     *   //   "copyRequiresWriterPermission": false,
     *   //   "copyable": false,
     *   //   "createdDate": "my_createdDate",
     *   //   "defaultOpenWithLink": "my_defaultOpenWithLink",
     *   //   "description": "my_description",
     *   //   "downloadUrl": "my_downloadUrl",
     *   //   "driveId": "my_driveId",
     *   //   "editable": false,
     *   //   "embedLink": "my_embedLink",
     *   //   "etag": "my_etag",
     *   //   "explicitlyTrashed": false,
     *   //   "exportLinks": {},
     *   //   "fileExtension": "my_fileExtension",
     *   //   "fileSize": "my_fileSize",
     *   //   "folderColorRgb": "my_folderColorRgb",
     *   //   "fullFileExtension": "my_fullFileExtension",
     *   //   "hasAugmentedPermissions": false,
     *   //   "hasThumbnail": false,
     *   //   "headRevisionId": "my_headRevisionId",
     *   //   "iconLink": "my_iconLink",
     *   //   "id": "my_id",
     *   //   "imageMediaMetadata": {},
     *   //   "indexableText": {},
     *   //   "inheritedPermissionsDisabled": false,
     *   //   "isAppAuthorized": false,
     *   //   "kind": "my_kind",
     *   //   "labelInfo": {},
     *   //   "labels": {},
     *   //   "lastModifyingUser": {},
     *   //   "lastModifyingUserName": "my_lastModifyingUserName",
     *   //   "lastViewedByMeDate": "my_lastViewedByMeDate",
     *   //   "linkShareMetadata": {},
     *   //   "markedViewedByMeDate": "my_markedViewedByMeDate",
     *   //   "md5Checksum": "my_md5Checksum",
     *   //   "mimeType": "my_mimeType",
     *   //   "modifiedByMeDate": "my_modifiedByMeDate",
     *   //   "modifiedDate": "my_modifiedDate",
     *   //   "openWithLinks": {},
     *   //   "originalFilename": "my_originalFilename",
     *   //   "ownedByMe": false,
     *   //   "ownerNames": [],
     *   //   "owners": [],
     *   //   "parents": [],
     *   //   "permissionIds": [],
     *   //   "permissions": [],
     *   //   "properties": [],
     *   //   "quotaBytesUsed": "my_quotaBytesUsed",
     *   //   "resourceKey": "my_resourceKey",
     *   //   "selfLink": "my_selfLink",
     *   //   "sha1Checksum": "my_sha1Checksum",
     *   //   "sha256Checksum": "my_sha256Checksum",
     *   //   "shareable": false,
     *   //   "shared": false,
     *   //   "sharedWithMeDate": "my_sharedWithMeDate",
     *   //   "sharingUser": {},
     *   //   "shortcutDetails": {},
     *   //   "spaces": [],
     *   //   "teamDriveId": "my_teamDriveId",
     *   //   "thumbnail": {},
     *   //   "thumbnailLink": "my_thumbnailLink",
     *   //   "thumbnailVersion": "my_thumbnailVersion",
     *   //   "title": "my_title",
     *   //   "trashedDate": "my_trashedDate",
     *   //   "trashingUser": {},
     *   //   "userPermission": {},
     *   //   "version": "my_version",
     *   //   "videoMediaMetadata": {},
     *   //   "webContentLink": "my_webContentLink",
     *   //   "webViewLink": "my_webViewLink",
     *   //   "writersCanShare": false
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
      params: Params$Resource$Files$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Files$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$File>>;
    patch(
      params: Params$Resource$Files$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Files$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$File>,
      callback: BodyResponseCallback<Schema$File>
    ): void;
    patch(
      params: Params$Resource$Files$Patch,
      callback: BodyResponseCallback<Schema$File>
    ): void;
    patch(callback: BodyResponseCallback<Schema$File>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Files$Patch
        | BodyResponseCallback<Schema$File>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$File>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$File>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$File>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Files$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Files$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/files/{fileId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$File>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$File>(parameters);
      }
    }

    /**
     * Set the file's updated time to the current server time.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.apps.readonly',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.files.touch({
     *     // The ID of the file to update.
     *     fileId: 'placeholder-value',
     *     // A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     *     includeLabels: 'placeholder-value',
     *     // Specifies which additional view's permissions to include in the response. Only `published` is supported.
     *     includePermissionsForView: 'placeholder-value',
     *     // Whether the requesting application supports both My Drives and shared drives.
     *     supportsAllDrives: 'placeholder-value',
     *     // Deprecated: Use `supportsAllDrives` instead.
     *     supportsTeamDrives: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternateLink": "my_alternateLink",
     *   //   "appDataContents": false,
     *   //   "canComment": false,
     *   //   "canReadRevisions": false,
     *   //   "capabilities": {},
     *   //   "contentRestrictions": [],
     *   //   "copyRequiresWriterPermission": false,
     *   //   "copyable": false,
     *   //   "createdDate": "my_createdDate",
     *   //   "defaultOpenWithLink": "my_defaultOpenWithLink",
     *   //   "description": "my_description",
     *   //   "downloadUrl": "my_downloadUrl",
     *   //   "driveId": "my_driveId",
     *   //   "editable": false,
     *   //   "embedLink": "my_embedLink",
     *   //   "etag": "my_etag",
     *   //   "explicitlyTrashed": false,
     *   //   "exportLinks": {},
     *   //   "fileExtension": "my_fileExtension",
     *   //   "fileSize": "my_fileSize",
     *   //   "folderColorRgb": "my_folderColorRgb",
     *   //   "fullFileExtension": "my_fullFileExtension",
     *   //   "hasAugmentedPermissions": false,
     *   //   "hasThumbnail": false,
     *   //   "headRevisionId": "my_headRevisionId",
     *   //   "iconLink": "my_iconLink",
     *   //   "id": "my_id",
     *   //   "imageMediaMetadata": {},
     *   //   "indexableText": {},
     *   //   "inheritedPermissionsDisabled": false,
     *   //   "isAppAuthorized": false,
     *   //   "kind": "my_kind",
     *   //   "labelInfo": {},
     *   //   "labels": {},
     *   //   "lastModifyingUser": {},
     *   //   "lastModifyingUserName": "my_lastModifyingUserName",
     *   //   "lastViewedByMeDate": "my_lastViewedByMeDate",
     *   //   "linkShareMetadata": {},
     *   //   "markedViewedByMeDate": "my_markedViewedByMeDate",
     *   //   "md5Checksum": "my_md5Checksum",
     *   //   "mimeType": "my_mimeType",
     *   //   "modifiedByMeDate": "my_modifiedByMeDate",
     *   //   "modifiedDate": "my_modifiedDate",
     *   //   "openWithLinks": {},
     *   //   "originalFilename": "my_originalFilename",
     *   //   "ownedByMe": false,
     *   //   "ownerNames": [],
     *   //   "owners": [],
     *   //   "parents": [],
     *   //   "permissionIds": [],
     *   //   "permissions": [],
     *   //   "properties": [],
     *   //   "quotaBytesUsed": "my_quotaBytesUsed",
     *   //   "resourceKey": "my_resourceKey",
     *   //   "selfLink": "my_selfLink",
     *   //   "sha1Checksum": "my_sha1Checksum",
     *   //   "sha256Checksum": "my_sha256Checksum",
     *   //   "shareable": false,
     *   //   "shared": false,
     *   //   "sharedWithMeDate": "my_sharedWithMeDate",
     *   //   "sharingUser": {},
     *   //   "shortcutDetails": {},
     *   //   "spaces": [],
     *   //   "teamDriveId": "my_teamDriveId",
     *   //   "thumbnail": {},
     *   //   "thumbnailLink": "my_thumbnailLink",
     *   //   "thumbnailVersion": "my_thumbnailVersion",
     *   //   "title": "my_title",
     *   //   "trashedDate": "my_trashedDate",
     *   //   "trashingUser": {},
     *   //   "userPermission": {},
     *   //   "version": "my_version",
     *   //   "videoMediaMetadata": {},
     *   //   "webContentLink": "my_webContentLink",
     *   //   "webViewLink": "my_webViewLink",
     *   //   "writersCanShare": false
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
    touch(
      params: Params$Resource$Files$Touch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    touch(
      params?: Params$Resource$Files$Touch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$File>>;
    touch(
      params: Params$Resource$Files$Touch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    touch(
      params: Params$Resource$Files$Touch,
      options: MethodOptions | BodyResponseCallback<Schema$File>,
      callback: BodyResponseCallback<Schema$File>
    ): void;
    touch(
      params: Params$Resource$Files$Touch,
      callback: BodyResponseCallback<Schema$File>
    ): void;
    touch(callback: BodyResponseCallback<Schema$File>): void;
    touch(
      paramsOrCallback?:
        | Params$Resource$Files$Touch
        | BodyResponseCallback<Schema$File>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$File>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$File>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$File>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Files$Touch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Files$Touch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/files/{fileId}/touch').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$File>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$File>(parameters);
      }
    }

    /**
     * Moves a file to the trash. The currently authenticated user must own the file or be at least a `fileOrganizer` on the parent for shared drive files.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.apps.readonly',
     *       'https://www.googleapis.com/auth/drive.file',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.files.trash({
     *     // The ID of the file to trash.
     *     fileId: 'placeholder-value',
     *     // A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     *     includeLabels: 'placeholder-value',
     *     // Specifies which additional view's permissions to include in the response. Only `published` is supported.
     *     includePermissionsForView: 'placeholder-value',
     *     // Whether the requesting application supports both My Drives and shared drives.
     *     supportsAllDrives: 'placeholder-value',
     *     // Deprecated: Use `supportsAllDrives` instead.
     *     supportsTeamDrives: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternateLink": "my_alternateLink",
     *   //   "appDataContents": false,
     *   //   "canComment": false,
     *   //   "canReadRevisions": false,
     *   //   "capabilities": {},
     *   //   "contentRestrictions": [],
     *   //   "copyRequiresWriterPermission": false,
     *   //   "copyable": false,
     *   //   "createdDate": "my_createdDate",
     *   //   "defaultOpenWithLink": "my_defaultOpenWithLink",
     *   //   "description": "my_description",
     *   //   "downloadUrl": "my_downloadUrl",
     *   //   "driveId": "my_driveId",
     *   //   "editable": false,
     *   //   "embedLink": "my_embedLink",
     *   //   "etag": "my_etag",
     *   //   "explicitlyTrashed": false,
     *   //   "exportLinks": {},
     *   //   "fileExtension": "my_fileExtension",
     *   //   "fileSize": "my_fileSize",
     *   //   "folderColorRgb": "my_folderColorRgb",
     *   //   "fullFileExtension": "my_fullFileExtension",
     *   //   "hasAugmentedPermissions": false,
     *   //   "hasThumbnail": false,
     *   //   "headRevisionId": "my_headRevisionId",
     *   //   "iconLink": "my_iconLink",
     *   //   "id": "my_id",
     *   //   "imageMediaMetadata": {},
     *   //   "indexableText": {},
     *   //   "inheritedPermissionsDisabled": false,
     *   //   "isAppAuthorized": false,
     *   //   "kind": "my_kind",
     *   //   "labelInfo": {},
     *   //   "labels": {},
     *   //   "lastModifyingUser": {},
     *   //   "lastModifyingUserName": "my_lastModifyingUserName",
     *   //   "lastViewedByMeDate": "my_lastViewedByMeDate",
     *   //   "linkShareMetadata": {},
     *   //   "markedViewedByMeDate": "my_markedViewedByMeDate",
     *   //   "md5Checksum": "my_md5Checksum",
     *   //   "mimeType": "my_mimeType",
     *   //   "modifiedByMeDate": "my_modifiedByMeDate",
     *   //   "modifiedDate": "my_modifiedDate",
     *   //   "openWithLinks": {},
     *   //   "originalFilename": "my_originalFilename",
     *   //   "ownedByMe": false,
     *   //   "ownerNames": [],
     *   //   "owners": [],
     *   //   "parents": [],
     *   //   "permissionIds": [],
     *   //   "permissions": [],
     *   //   "properties": [],
     *   //   "quotaBytesUsed": "my_quotaBytesUsed",
     *   //   "resourceKey": "my_resourceKey",
     *   //   "selfLink": "my_selfLink",
     *   //   "sha1Checksum": "my_sha1Checksum",
     *   //   "sha256Checksum": "my_sha256Checksum",
     *   //   "shareable": false,
     *   //   "shared": false,
     *   //   "sharedWithMeDate": "my_sharedWithMeDate",
     *   //   "sharingUser": {},
     *   //   "shortcutDetails": {},
     *   //   "spaces": [],
     *   //   "teamDriveId": "my_teamDriveId",
     *   //   "thumbnail": {},
     *   //   "thumbnailLink": "my_thumbnailLink",
     *   //   "thumbnailVersion": "my_thumbnailVersion",
     *   //   "title": "my_title",
     *   //   "trashedDate": "my_trashedDate",
     *   //   "trashingUser": {},
     *   //   "userPermission": {},
     *   //   "version": "my_version",
     *   //   "videoMediaMetadata": {},
     *   //   "webContentLink": "my_webContentLink",
     *   //   "webViewLink": "my_webViewLink",
     *   //   "writersCanShare": false
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
    trash(
      params: Params$Resource$Files$Trash,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    trash(
      params?: Params$Resource$Files$Trash,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$File>>;
    trash(
      params: Params$Resource$Files$Trash,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    trash(
      params: Params$Resource$Files$Trash,
      options: MethodOptions | BodyResponseCallback<Schema$File>,
      callback: BodyResponseCallback<Schema$File>
    ): void;
    trash(
      params: Params$Resource$Files$Trash,
      callback: BodyResponseCallback<Schema$File>
    ): void;
    trash(callback: BodyResponseCallback<Schema$File>): void;
    trash(
      paramsOrCallback?:
        | Params$Resource$Files$Trash
        | BodyResponseCallback<Schema$File>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$File>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$File>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$File>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Files$Trash;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Files$Trash;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/files/{fileId}/trash').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$File>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$File>(parameters);
      }
    }

    /**
     * Restores a file from the trash. The currently authenticated user must own the file or be at least a `fileOrganizer` on the parent for shared drive files.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.apps.readonly',
     *       'https://www.googleapis.com/auth/drive.file',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.files.untrash({
     *     // The ID of the file to untrash.
     *     fileId: 'placeholder-value',
     *     // A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     *     includeLabels: 'placeholder-value',
     *     // Specifies which additional view's permissions to include in the response. Only `published` is supported.
     *     includePermissionsForView: 'placeholder-value',
     *     // Whether the requesting application supports both My Drives and shared drives.
     *     supportsAllDrives: 'placeholder-value',
     *     // Deprecated: Use `supportsAllDrives` instead.
     *     supportsTeamDrives: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternateLink": "my_alternateLink",
     *   //   "appDataContents": false,
     *   //   "canComment": false,
     *   //   "canReadRevisions": false,
     *   //   "capabilities": {},
     *   //   "contentRestrictions": [],
     *   //   "copyRequiresWriterPermission": false,
     *   //   "copyable": false,
     *   //   "createdDate": "my_createdDate",
     *   //   "defaultOpenWithLink": "my_defaultOpenWithLink",
     *   //   "description": "my_description",
     *   //   "downloadUrl": "my_downloadUrl",
     *   //   "driveId": "my_driveId",
     *   //   "editable": false,
     *   //   "embedLink": "my_embedLink",
     *   //   "etag": "my_etag",
     *   //   "explicitlyTrashed": false,
     *   //   "exportLinks": {},
     *   //   "fileExtension": "my_fileExtension",
     *   //   "fileSize": "my_fileSize",
     *   //   "folderColorRgb": "my_folderColorRgb",
     *   //   "fullFileExtension": "my_fullFileExtension",
     *   //   "hasAugmentedPermissions": false,
     *   //   "hasThumbnail": false,
     *   //   "headRevisionId": "my_headRevisionId",
     *   //   "iconLink": "my_iconLink",
     *   //   "id": "my_id",
     *   //   "imageMediaMetadata": {},
     *   //   "indexableText": {},
     *   //   "inheritedPermissionsDisabled": false,
     *   //   "isAppAuthorized": false,
     *   //   "kind": "my_kind",
     *   //   "labelInfo": {},
     *   //   "labels": {},
     *   //   "lastModifyingUser": {},
     *   //   "lastModifyingUserName": "my_lastModifyingUserName",
     *   //   "lastViewedByMeDate": "my_lastViewedByMeDate",
     *   //   "linkShareMetadata": {},
     *   //   "markedViewedByMeDate": "my_markedViewedByMeDate",
     *   //   "md5Checksum": "my_md5Checksum",
     *   //   "mimeType": "my_mimeType",
     *   //   "modifiedByMeDate": "my_modifiedByMeDate",
     *   //   "modifiedDate": "my_modifiedDate",
     *   //   "openWithLinks": {},
     *   //   "originalFilename": "my_originalFilename",
     *   //   "ownedByMe": false,
     *   //   "ownerNames": [],
     *   //   "owners": [],
     *   //   "parents": [],
     *   //   "permissionIds": [],
     *   //   "permissions": [],
     *   //   "properties": [],
     *   //   "quotaBytesUsed": "my_quotaBytesUsed",
     *   //   "resourceKey": "my_resourceKey",
     *   //   "selfLink": "my_selfLink",
     *   //   "sha1Checksum": "my_sha1Checksum",
     *   //   "sha256Checksum": "my_sha256Checksum",
     *   //   "shareable": false,
     *   //   "shared": false,
     *   //   "sharedWithMeDate": "my_sharedWithMeDate",
     *   //   "sharingUser": {},
     *   //   "shortcutDetails": {},
     *   //   "spaces": [],
     *   //   "teamDriveId": "my_teamDriveId",
     *   //   "thumbnail": {},
     *   //   "thumbnailLink": "my_thumbnailLink",
     *   //   "thumbnailVersion": "my_thumbnailVersion",
     *   //   "title": "my_title",
     *   //   "trashedDate": "my_trashedDate",
     *   //   "trashingUser": {},
     *   //   "userPermission": {},
     *   //   "version": "my_version",
     *   //   "videoMediaMetadata": {},
     *   //   "webContentLink": "my_webContentLink",
     *   //   "webViewLink": "my_webViewLink",
     *   //   "writersCanShare": false
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
    untrash(
      params: Params$Resource$Files$Untrash,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    untrash(
      params?: Params$Resource$Files$Untrash,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$File>>;
    untrash(
      params: Params$Resource$Files$Untrash,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    untrash(
      params: Params$Resource$Files$Untrash,
      options: MethodOptions | BodyResponseCallback<Schema$File>,
      callback: BodyResponseCallback<Schema$File>
    ): void;
    untrash(
      params: Params$Resource$Files$Untrash,
      callback: BodyResponseCallback<Schema$File>
    ): void;
    untrash(callback: BodyResponseCallback<Schema$File>): void;
    untrash(
      paramsOrCallback?:
        | Params$Resource$Files$Untrash
        | BodyResponseCallback<Schema$File>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$File>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$File>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$File>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Files$Untrash;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Files$Untrash;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/files/{fileId}/untrash').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$File>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$File>(parameters);
      }
    }

    /**
     *  Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might be changed automatically, such as `modifiedDate`. This method supports patch semantics. This method supports an x/upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:*`x/x` Note: Specify a valid MIME type, rather than the literal `x/x` value. The literal `x/x` is only used to indicate that any valid MIME type can be uploaded. For more information on uploading files, see [Upload file data](/workspace/drive/api/guides/manage-uploads).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.apps.readonly',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.scripts',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.files.update({
     *     // Comma-separated list of parent IDs to add.
     *     addParents: 'placeholder-value',
     *     // Deprecated: This parameter has no function.
     *     convert: 'placeholder-value',
     *     // Deprecated: Adding files to multiple folders is no longer supported. Use `shortcuts` instead.
     *     enforceSingleParent: 'placeholder-value',
     *     // The ID of the file to update.
     *     fileId: 'placeholder-value',
     *     // A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     *     includeLabels: 'placeholder-value',
     *     // Specifies which additional view's permissions to include in the response. Only `published` is supported.
     *     includePermissionsForView: 'placeholder-value',
     *     // Determines the behavior in which `modifiedDate` is updated. This overrides `setModifiedDate`.
     *     modifiedDateBehavior: 'placeholder-value',
     *     // Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If true or not set, a new blob is created as head revision, and previous unpinned revisions are preserved for a short period of time. Pinned revisions are stored indefinitely, using additional storage quota, up to a maximum of 200 revisions. For details on how revisions are retained, see the [Drive Help Center](https://support.google.com/drive/answer/2409045).
     *     newRevision: 'placeholder-value',
     *     // Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
     *     ocr: 'placeholder-value',
     *     // If ocr is true, hints at the language to use. Valid values are BCP 47 codes.
     *     ocrLanguage: 'placeholder-value',
     *     // Whether to pin the new revision. A file can have a maximum of 200 pinned revisions.
     *     pinned: 'placeholder-value',
     *     // Comma-separated list of parent IDs to remove.
     *     removeParents: 'placeholder-value',
     *     // Whether to set the modified date using the value supplied in the request body. Setting this field to `true` is equivalent to `modifiedDateBehavior=fromBodyOrNow`, and `false` is equivalent to `modifiedDateBehavior=now`. To prevent any changes to the modified date set `modifiedDateBehavior=noChange`.
     *     setModifiedDate: 'placeholder-value',
     *     // Whether the requesting application supports both My Drives and shared drives.
     *     supportsAllDrives: 'placeholder-value',
     *     // Deprecated: Use `supportsAllDrives` instead.
     *     supportsTeamDrives: 'placeholder-value',
     *     // The language of the timed text.
     *     timedTextLanguage: 'placeholder-value',
     *     // The timed text track name.
     *     timedTextTrackName: 'placeholder-value',
     *     // Whether to update the view date after successfully updating the file.
     *     updateViewedDate: 'placeholder-value',
     *     // Whether to use the content as indexable text.
     *     useContentAsIndexableText: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "alternateLink": "my_alternateLink",
     *       //   "appDataContents": false,
     *       //   "canComment": false,
     *       //   "canReadRevisions": false,
     *       //   "capabilities": {},
     *       //   "contentRestrictions": [],
     *       //   "copyRequiresWriterPermission": false,
     *       //   "copyable": false,
     *       //   "createdDate": "my_createdDate",
     *       //   "defaultOpenWithLink": "my_defaultOpenWithLink",
     *       //   "description": "my_description",
     *       //   "downloadUrl": "my_downloadUrl",
     *       //   "driveId": "my_driveId",
     *       //   "editable": false,
     *       //   "embedLink": "my_embedLink",
     *       //   "etag": "my_etag",
     *       //   "explicitlyTrashed": false,
     *       //   "exportLinks": {},
     *       //   "fileExtension": "my_fileExtension",
     *       //   "fileSize": "my_fileSize",
     *       //   "folderColorRgb": "my_folderColorRgb",
     *       //   "fullFileExtension": "my_fullFileExtension",
     *       //   "hasAugmentedPermissions": false,
     *       //   "hasThumbnail": false,
     *       //   "headRevisionId": "my_headRevisionId",
     *       //   "iconLink": "my_iconLink",
     *       //   "id": "my_id",
     *       //   "imageMediaMetadata": {},
     *       //   "indexableText": {},
     *       //   "inheritedPermissionsDisabled": false,
     *       //   "isAppAuthorized": false,
     *       //   "kind": "my_kind",
     *       //   "labelInfo": {},
     *       //   "labels": {},
     *       //   "lastModifyingUser": {},
     *       //   "lastModifyingUserName": "my_lastModifyingUserName",
     *       //   "lastViewedByMeDate": "my_lastViewedByMeDate",
     *       //   "linkShareMetadata": {},
     *       //   "markedViewedByMeDate": "my_markedViewedByMeDate",
     *       //   "md5Checksum": "my_md5Checksum",
     *       //   "mimeType": "my_mimeType",
     *       //   "modifiedByMeDate": "my_modifiedByMeDate",
     *       //   "modifiedDate": "my_modifiedDate",
     *       //   "openWithLinks": {},
     *       //   "originalFilename": "my_originalFilename",
     *       //   "ownedByMe": false,
     *       //   "ownerNames": [],
     *       //   "owners": [],
     *       //   "parents": [],
     *       //   "permissionIds": [],
     *       //   "permissions": [],
     *       //   "properties": [],
     *       //   "quotaBytesUsed": "my_quotaBytesUsed",
     *       //   "resourceKey": "my_resourceKey",
     *       //   "selfLink": "my_selfLink",
     *       //   "sha1Checksum": "my_sha1Checksum",
     *       //   "sha256Checksum": "my_sha256Checksum",
     *       //   "shareable": false,
     *       //   "shared": false,
     *       //   "sharedWithMeDate": "my_sharedWithMeDate",
     *       //   "sharingUser": {},
     *       //   "shortcutDetails": {},
     *       //   "spaces": [],
     *       //   "teamDriveId": "my_teamDriveId",
     *       //   "thumbnail": {},
     *       //   "thumbnailLink": "my_thumbnailLink",
     *       //   "thumbnailVersion": "my_thumbnailVersion",
     *       //   "title": "my_title",
     *       //   "trashedDate": "my_trashedDate",
     *       //   "trashingUser": {},
     *       //   "userPermission": {},
     *       //   "version": "my_version",
     *       //   "videoMediaMetadata": {},
     *       //   "webContentLink": "my_webContentLink",
     *       //   "webViewLink": "my_webViewLink",
     *       //   "writersCanShare": false
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
     *   //   "alternateLink": "my_alternateLink",
     *   //   "appDataContents": false,
     *   //   "canComment": false,
     *   //   "canReadRevisions": false,
     *   //   "capabilities": {},
     *   //   "contentRestrictions": [],
     *   //   "copyRequiresWriterPermission": false,
     *   //   "copyable": false,
     *   //   "createdDate": "my_createdDate",
     *   //   "defaultOpenWithLink": "my_defaultOpenWithLink",
     *   //   "description": "my_description",
     *   //   "downloadUrl": "my_downloadUrl",
     *   //   "driveId": "my_driveId",
     *   //   "editable": false,
     *   //   "embedLink": "my_embedLink",
     *   //   "etag": "my_etag",
     *   //   "explicitlyTrashed": false,
     *   //   "exportLinks": {},
     *   //   "fileExtension": "my_fileExtension",
     *   //   "fileSize": "my_fileSize",
     *   //   "folderColorRgb": "my_folderColorRgb",
     *   //   "fullFileExtension": "my_fullFileExtension",
     *   //   "hasAugmentedPermissions": false,
     *   //   "hasThumbnail": false,
     *   //   "headRevisionId": "my_headRevisionId",
     *   //   "iconLink": "my_iconLink",
     *   //   "id": "my_id",
     *   //   "imageMediaMetadata": {},
     *   //   "indexableText": {},
     *   //   "inheritedPermissionsDisabled": false,
     *   //   "isAppAuthorized": false,
     *   //   "kind": "my_kind",
     *   //   "labelInfo": {},
     *   //   "labels": {},
     *   //   "lastModifyingUser": {},
     *   //   "lastModifyingUserName": "my_lastModifyingUserName",
     *   //   "lastViewedByMeDate": "my_lastViewedByMeDate",
     *   //   "linkShareMetadata": {},
     *   //   "markedViewedByMeDate": "my_markedViewedByMeDate",
     *   //   "md5Checksum": "my_md5Checksum",
     *   //   "mimeType": "my_mimeType",
     *   //   "modifiedByMeDate": "my_modifiedByMeDate",
     *   //   "modifiedDate": "my_modifiedDate",
     *   //   "openWithLinks": {},
     *   //   "originalFilename": "my_originalFilename",
     *   //   "ownedByMe": false,
     *   //   "ownerNames": [],
     *   //   "owners": [],
     *   //   "parents": [],
     *   //   "permissionIds": [],
     *   //   "permissions": [],
     *   //   "properties": [],
     *   //   "quotaBytesUsed": "my_quotaBytesUsed",
     *   //   "resourceKey": "my_resourceKey",
     *   //   "selfLink": "my_selfLink",
     *   //   "sha1Checksum": "my_sha1Checksum",
     *   //   "sha256Checksum": "my_sha256Checksum",
     *   //   "shareable": false,
     *   //   "shared": false,
     *   //   "sharedWithMeDate": "my_sharedWithMeDate",
     *   //   "sharingUser": {},
     *   //   "shortcutDetails": {},
     *   //   "spaces": [],
     *   //   "teamDriveId": "my_teamDriveId",
     *   //   "thumbnail": {},
     *   //   "thumbnailLink": "my_thumbnailLink",
     *   //   "thumbnailVersion": "my_thumbnailVersion",
     *   //   "title": "my_title",
     *   //   "trashedDate": "my_trashedDate",
     *   //   "trashingUser": {},
     *   //   "userPermission": {},
     *   //   "version": "my_version",
     *   //   "videoMediaMetadata": {},
     *   //   "webContentLink": "my_webContentLink",
     *   //   "webViewLink": "my_webViewLink",
     *   //   "writersCanShare": false
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
      params: Params$Resource$Files$Update,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    update(
      params?: Params$Resource$Files$Update,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$File>>;
    update(
      params: Params$Resource$Files$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Files$Update,
      options: MethodOptions | BodyResponseCallback<Schema$File>,
      callback: BodyResponseCallback<Schema$File>
    ): void;
    update(
      params: Params$Resource$Files$Update,
      callback: BodyResponseCallback<Schema$File>
    ): void;
    update(callback: BodyResponseCallback<Schema$File>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Files$Update
        | BodyResponseCallback<Schema$File>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$File>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$File>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$File>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Files$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Files$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/files/{fileId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
            apiVersion: '',
          },
          options
        ),
        params,
        mediaUrl: (rootUrl + '/upload/drive/v2/files/{fileId}').replace(
          /([^:]\/)\/+/g,
          '$1'
        ),
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$File>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$File>(parameters);
      }
    }

    /**
     * Subscribes to changes to a file.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.meet.readonly',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.metadata.readonly',
     *       'https://www.googleapis.com/auth/drive.photos.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.files.watch({
     *     // Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when the `alt` parameter is set to `media` and the user is the owner of the file or an organizer of the shared drive in which the file resides.
     *     acknowledgeAbuse: 'placeholder-value',
     *     // The ID for the file in question.
     *     fileId: 'placeholder-value',
     *     // A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     *     includeLabels: 'placeholder-value',
     *     // Specifies which additional view's permissions to include in the response. Only `published` is supported.
     *     includePermissionsForView: 'placeholder-value',
     *     // Deprecated: This parameter has no function.
     *     projection: 'placeholder-value',
     *     // Specifies the Revision ID that should be downloaded. Ignored unless alt=media is specified.
     *     revisionId: 'placeholder-value',
     *     // Whether the requesting application supports both My Drives and shared drives.
     *     supportsAllDrives: 'placeholder-value',
     *     // Deprecated: Use `supportsAllDrives` instead.
     *     supportsTeamDrives: 'placeholder-value',
     *     // Deprecated: Use files.update with modifiedDateBehavior=noChange, updateViewedDate=true and an empty request body.
     *     updateViewedDate: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "address": "my_address",
     *       //   "expiration": "my_expiration",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "params": {},
     *       //   "payload": false,
     *       //   "resourceId": "my_resourceId",
     *       //   "resourceUri": "my_resourceUri",
     *       //   "token": "my_token",
     *       //   "type": "my_type"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "address": "my_address",
     *   //   "expiration": "my_expiration",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "params": {},
     *   //   "payload": false,
     *   //   "resourceId": "my_resourceId",
     *   //   "resourceUri": "my_resourceUri",
     *   //   "token": "my_token",
     *   //   "type": "my_type"
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
    watch(
      params: Params$Resource$Files$Watch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    watch(
      params?: Params$Resource$Files$Watch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Channel>>;
    watch(
      params: Params$Resource$Files$Watch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    watch(
      params: Params$Resource$Files$Watch,
      options: MethodOptions | BodyResponseCallback<Schema$Channel>,
      callback: BodyResponseCallback<Schema$Channel>
    ): void;
    watch(
      params: Params$Resource$Files$Watch,
      callback: BodyResponseCallback<Schema$Channel>
    ): void;
    watch(callback: BodyResponseCallback<Schema$Channel>): void;
    watch(
      paramsOrCallback?:
        | Params$Resource$Files$Watch
        | BodyResponseCallback<Schema$Channel>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Channel>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Channel>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Channel>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Files$Watch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Files$Watch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/files/{fileId}/watch').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Channel>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Channel>(parameters);
      }
    }
  }

  export interface Params$Resource$Files$Copy extends StandardParameters {
    /**
     * Whether to convert this file to the corresponding Docs Editors format.
     */
    convert?: boolean;
    /**
     * Deprecated: Copying files into multiple folders is no longer supported. Use shortcuts instead.
     */
    enforceSingleParent?: boolean;
    /**
     * The ID of the file to copy.
     */
    fileId?: string;
    /**
     * A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     */
    includeLabels?: string;
    /**
     * Specifies which additional view's permissions to include in the response. Only `published` is supported.
     */
    includePermissionsForView?: string;
    /**
     * Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
     */
    ocr?: boolean;
    /**
     * If `ocr` is true, hints at the language to use. Valid values are BCP 47 codes.
     */
    ocrLanguage?: string;
    /**
     * Whether to pin the head revision of the new copy. A file can have a maximum of 200 pinned revisions.
     */
    pinned?: boolean;
    /**
     * Whether the requesting application supports both My Drives and shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated: Use `supportsAllDrives` instead.
     */
    supportsTeamDrives?: boolean;
    /**
     * The language of the timed text.
     */
    timedTextLanguage?: string;
    /**
     * The timed text track name.
     */
    timedTextTrackName?: string;
    /**
     * The visibility of the new file. This parameter is only relevant when the source is not a native Google Doc and convert=false.
     */
    visibility?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$File;
  }
  export interface Params$Resource$Files$Delete extends StandardParameters {
    /**
     * Deprecated: If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item is placed under its owner's root.
     */
    enforceSingleParent?: boolean;
    /**
     * The ID of the file to delete.
     */
    fileId?: string;
    /**
     * Whether the requesting application supports both My Drives and shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated: Use `supportsAllDrives` instead.
     */
    supportsTeamDrives?: boolean;
  }
  export interface Params$Resource$Files$Emptytrash extends StandardParameters {
    /**
     * If set, empties the trash of the provided shared drive.
     */
    driveId?: string;
    /**
     * Deprecated: If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item is placed under its owner's root.
     */
    enforceSingleParent?: boolean;
  }
  export interface Params$Resource$Files$Export extends StandardParameters {
    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * Required. The MIME type of the format requested for this export.
     */
    mimeType?: string;
  }
  export interface Params$Resource$Files$Generateids
    extends StandardParameters {
    /**
     * Maximum number of IDs to return.
     */
    maxResults?: number;
    /**
     * The space in which the IDs can be used to create new files. Supported values are `drive` and `appDataFolder`. (Default: `drive`)
     */
    space?: string;
    /**
     * The type of items which the IDs can be used for. Supported values are `files` and `shortcuts`. Note that `shortcuts` are only supported in the `drive` `space`. (Default: `files`)
     */
    type?: string;
  }
  export interface Params$Resource$Files$Get extends StandardParameters {
    /**
     * Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when the `alt` parameter is set to `media` and the user is the owner of the file or an organizer of the shared drive in which the file resides.
     */
    acknowledgeAbuse?: boolean;
    /**
     * The ID for the file in question.
     */
    fileId?: string;
    /**
     * A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     */
    includeLabels?: string;
    /**
     * Specifies which additional view's permissions to include in the response. Only `published` is supported.
     */
    includePermissionsForView?: string;
    /**
     * Deprecated: This parameter has no function.
     */
    projection?: string;
    /**
     * Specifies the Revision ID that should be downloaded. Ignored unless alt=media is specified.
     */
    revisionId?: string;
    /**
     * Whether the requesting application supports both My Drives and shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated: Use `supportsAllDrives` instead.
     */
    supportsTeamDrives?: boolean;
    /**
     * Deprecated: Use `files.update` with `modifiedDateBehavior=noChange, updateViewedDate=true` and an empty request body.
     */
    updateViewedDate?: boolean;
  }
  export interface Params$Resource$Files$Insert extends StandardParameters {
    /**
     * Whether to convert this file to the corresponding Docs Editors format.
     */
    convert?: boolean;
    /**
     * Deprecated: Creating files in multiple folders is no longer supported.
     */
    enforceSingleParent?: boolean;
    /**
     * A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     */
    includeLabels?: string;
    /**
     * Specifies which additional view's permissions to include in the response. Only `published` is supported.
     */
    includePermissionsForView?: string;
    /**
     * Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
     */
    ocr?: boolean;
    /**
     * If ocr is true, hints at the language to use. Valid values are BCP 47 codes.
     */
    ocrLanguage?: string;
    /**
     * Whether to pin the head revision of the uploaded file. A file can have a maximum of 200 pinned revisions.
     */
    pinned?: boolean;
    /**
     * Whether the requesting application supports both My Drives and shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated: Use `supportsAllDrives` instead.
     */
    supportsTeamDrives?: boolean;
    /**
     * The language of the timed text.
     */
    timedTextLanguage?: string;
    /**
     * The timed text track name.
     */
    timedTextTrackName?: string;
    /**
     * Whether to use the content as indexable text.
     */
    useContentAsIndexableText?: boolean;
    /**
     * The visibility of the new file. This parameter is only relevant when convert=false.
     */
    visibility?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$File;

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
  export interface Params$Resource$Files$List extends StandardParameters {
    /**
     * Bodies of items (files/documents) to which the query applies. Supported bodies are `default`, `domain`, `drive` and `allDrives`. Prefer `default` or `drive` to `allDrives` for efficiency.
     */
    corpora?: string;
    /**
     * Deprecated: The body of items (files/documents) to which the query applies. Use `corpora` instead.
     */
    corpus?: string;
    /**
     * ID of the shared drive to search.
     */
    driveId?: string;
    /**
     * Whether both My Drive and shared drive items should be included in results.
     */
    includeItemsFromAllDrives?: boolean;
    /**
     * A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     */
    includeLabels?: string;
    /**
     * Specifies which additional view's permissions to include in the response. Only `published` is supported.
     */
    includePermissionsForView?: string;
    /**
     * Deprecated: Use `includeItemsFromAllDrives` instead.
     */
    includeTeamDriveItems?: boolean;
    /**
     * The maximum number of files to return per page. Partial or empty result pages are possible even before the end of the files list has been reached.
     */
    maxResults?: number;
    /**
     * A comma-separated list of sort keys. Valid keys are: * `createdDate`: When the file was created. * `folder`: The folder ID. This field is sorted using alphabetical ordering. * `lastViewedByMeDate`: The last time the file was viewed by the user. * `modifiedByMeDate`: The last time the file was modified by the user. * `modifiedDate`: The last time the file was modified by anyone. * `quotaBytesUsed`: The number of storage quota bytes used by the file. * `recency`: The most recent timestamp from the file's date-time fields. * `sharedWithMeDate`: When the file was shared with the user, if applicable. * `starred`: Whether the user has starred the file. * `title`: The title of the file. This field is sorted using alphabetical ordering, so 1, 12, 2, 22. * `title_natural`: The title of the file. This field is sorted using natural sort ordering, so 1, 2, 12, 22. Each key sorts ascending by default, but can be reversed with the 'desc' modifier. Example usage: `?orderBy=folder,modifiedDate desc,title`. Note that there's a current limitation for users with approximately one million files in which the requested sort order is ignored.
     */
    orderBy?: string;
    /**
     * Page token for files.
     */
    pageToken?: string;
    /**
     * Deprecated: This parameter has no function.
     */
    projection?: string;
    /**
     * Query string for searching files.
     */
    q?: string;
    /**
     * A comma-separated list of spaces to query. Supported values are `drive`, and `appDataFolder`.
     */
    spaces?: string;
    /**
     * Whether the requesting application supports both My Drives and shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated: Use `supportsAllDrives` instead.
     */
    supportsTeamDrives?: boolean;
    /**
     * Deprecated: Use `driveId` instead.
     */
    teamDriveId?: string;
  }
  export interface Params$Resource$Files$Listlabels extends StandardParameters {
    /**
     * The ID for the file.
     */
    fileId?: string;
    /**
     * The maximum number of labels to return per page. When not set, defaults to 100.
     */
    maxResults?: number;
    /**
     * The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from the previous response.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Files$Modifylabels
    extends StandardParameters {
    /**
     * The ID of the file to which the labels belong.
     */
    fileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ModifyLabelsRequest;
  }
  export interface Params$Resource$Files$Patch extends StandardParameters {
    /**
     * Comma-separated list of parent IDs to add.
     */
    addParents?: string;
    /**
     * Deprecated: This parameter has no function.
     */
    convert?: boolean;
    /**
     * Deprecated: Adding files to multiple folders is no longer supported. Use `shortcuts` instead.
     */
    enforceSingleParent?: boolean;
    /**
     * The ID of the file to update.
     */
    fileId?: string;
    /**
     * A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     */
    includeLabels?: string;
    /**
     * Specifies which additional view's permissions to include in the response. Only `published` is supported.
     */
    includePermissionsForView?: string;
    /**
     * Determines the behavior in which `modifiedDate` is updated. This overrides `setModifiedDate`.
     */
    modifiedDateBehavior?: string;
    /**
     * Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If true or not set, a new blob is created as head revision, and previous unpinned revisions are preserved for a short period of time. Pinned revisions are stored indefinitely, using additional storage quota, up to a maximum of 200 revisions. For details on how revisions are retained, see the [Drive Help Center](https://support.google.com/drive/answer/2409045). Note that this field is ignored if there is no payload in the request.
     */
    newRevision?: boolean;
    /**
     * Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
     */
    ocr?: boolean;
    /**
     * If ocr is true, hints at the language to use. Valid values are BCP 47 codes.
     */
    ocrLanguage?: string;
    /**
     * Whether to pin the new revision. A file can have a maximum of 200 pinned revisions. Note that this field is ignored if there is no payload in the request.
     */
    pinned?: boolean;
    /**
     * Comma-separated list of parent IDs to remove.
     */
    removeParents?: string;
    /**
     * Whether to set the modified date using the value supplied in the request body. Setting this field to `true` is equivalent to `modifiedDateBehavior=fromBodyOrNow`, and `false` is equivalent to `modifiedDateBehavior=now`. To prevent any changes to the modified date set `modifiedDateBehavior=noChange`.
     */
    setModifiedDate?: boolean;
    /**
     * Whether the requesting application supports both My Drives and shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated: Use `supportsAllDrives` instead.
     */
    supportsTeamDrives?: boolean;
    /**
     * The language of the timed text.
     */
    timedTextLanguage?: string;
    /**
     * The timed text track name.
     */
    timedTextTrackName?: string;
    /**
     * Whether to update the view date after successfully updating the file.
     */
    updateViewedDate?: boolean;
    /**
     * Whether to use the content as indexable text.
     */
    useContentAsIndexableText?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$File;
  }
  export interface Params$Resource$Files$Touch extends StandardParameters {
    /**
     * The ID of the file to update.
     */
    fileId?: string;
    /**
     * A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     */
    includeLabels?: string;
    /**
     * Specifies which additional view's permissions to include in the response. Only `published` is supported.
     */
    includePermissionsForView?: string;
    /**
     * Whether the requesting application supports both My Drives and shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated: Use `supportsAllDrives` instead.
     */
    supportsTeamDrives?: boolean;
  }
  export interface Params$Resource$Files$Trash extends StandardParameters {
    /**
     * The ID of the file to trash.
     */
    fileId?: string;
    /**
     * A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     */
    includeLabels?: string;
    /**
     * Specifies which additional view's permissions to include in the response. Only `published` is supported.
     */
    includePermissionsForView?: string;
    /**
     * Whether the requesting application supports both My Drives and shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated: Use `supportsAllDrives` instead.
     */
    supportsTeamDrives?: boolean;
  }
  export interface Params$Resource$Files$Untrash extends StandardParameters {
    /**
     * The ID of the file to untrash.
     */
    fileId?: string;
    /**
     * A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     */
    includeLabels?: string;
    /**
     * Specifies which additional view's permissions to include in the response. Only `published` is supported.
     */
    includePermissionsForView?: string;
    /**
     * Whether the requesting application supports both My Drives and shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated: Use `supportsAllDrives` instead.
     */
    supportsTeamDrives?: boolean;
  }
  export interface Params$Resource$Files$Update extends StandardParameters {
    /**
     * Comma-separated list of parent IDs to add.
     */
    addParents?: string;
    /**
     * Deprecated: This parameter has no function.
     */
    convert?: boolean;
    /**
     * Deprecated: Adding files to multiple folders is no longer supported. Use `shortcuts` instead.
     */
    enforceSingleParent?: boolean;
    /**
     * The ID of the file to update.
     */
    fileId?: string;
    /**
     * A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     */
    includeLabels?: string;
    /**
     * Specifies which additional view's permissions to include in the response. Only `published` is supported.
     */
    includePermissionsForView?: string;
    /**
     * Determines the behavior in which `modifiedDate` is updated. This overrides `setModifiedDate`.
     */
    modifiedDateBehavior?: string;
    /**
     * Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If true or not set, a new blob is created as head revision, and previous unpinned revisions are preserved for a short period of time. Pinned revisions are stored indefinitely, using additional storage quota, up to a maximum of 200 revisions. For details on how revisions are retained, see the [Drive Help Center](https://support.google.com/drive/answer/2409045).
     */
    newRevision?: boolean;
    /**
     * Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
     */
    ocr?: boolean;
    /**
     * If ocr is true, hints at the language to use. Valid values are BCP 47 codes.
     */
    ocrLanguage?: string;
    /**
     * Whether to pin the new revision. A file can have a maximum of 200 pinned revisions.
     */
    pinned?: boolean;
    /**
     * Comma-separated list of parent IDs to remove.
     */
    removeParents?: string;
    /**
     * Whether to set the modified date using the value supplied in the request body. Setting this field to `true` is equivalent to `modifiedDateBehavior=fromBodyOrNow`, and `false` is equivalent to `modifiedDateBehavior=now`. To prevent any changes to the modified date set `modifiedDateBehavior=noChange`.
     */
    setModifiedDate?: boolean;
    /**
     * Whether the requesting application supports both My Drives and shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated: Use `supportsAllDrives` instead.
     */
    supportsTeamDrives?: boolean;
    /**
     * The language of the timed text.
     */
    timedTextLanguage?: string;
    /**
     * The timed text track name.
     */
    timedTextTrackName?: string;
    /**
     * Whether to update the view date after successfully updating the file.
     */
    updateViewedDate?: boolean;
    /**
     * Whether to use the content as indexable text.
     */
    useContentAsIndexableText?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$File;

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
  export interface Params$Resource$Files$Watch extends StandardParameters {
    /**
     * Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when the `alt` parameter is set to `media` and the user is the owner of the file or an organizer of the shared drive in which the file resides.
     */
    acknowledgeAbuse?: boolean;
    /**
     * The ID for the file in question.
     */
    fileId?: string;
    /**
     * A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     */
    includeLabels?: string;
    /**
     * Specifies which additional view's permissions to include in the response. Only `published` is supported.
     */
    includePermissionsForView?: string;
    /**
     * Deprecated: This parameter has no function.
     */
    projection?: string;
    /**
     * Specifies the Revision ID that should be downloaded. Ignored unless alt=media is specified.
     */
    revisionId?: string;
    /**
     * Whether the requesting application supports both My Drives and shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated: Use `supportsAllDrives` instead.
     */
    supportsTeamDrives?: boolean;
    /**
     * Deprecated: Use files.update with modifiedDateBehavior=noChange, updateViewedDate=true and an empty request body.
     */
    updateViewedDate?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Channel;
  }

  export class Resource$Parents {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Removes a parent from a file.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.parents.delete({
     *     // Deprecated: If an item is not in a shared drive and its last parent is removed, the item is placed under its owner's root.
     *     enforceSingleParent: 'placeholder-value',
     *     // The ID of the file.
     *     fileId: 'placeholder-value',
     *     // The ID of the parent.
     *     parentId: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
      params: Params$Resource$Parents$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Parents$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    delete(
      params: Params$Resource$Parents$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Parents$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Parents$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Parents$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<void>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Parents$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Parents$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/drive/v2/files/{fileId}/parents/{parentId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'parentId'],
        pathParams: ['fileId', 'parentId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Gets a specific parent reference.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.meet.readonly',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.metadata.readonly',
     *       'https://www.googleapis.com/auth/drive.photos.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.parents.get({
     *     // The ID of the file.
     *     fileId: 'placeholder-value',
     *     // The ID of the parent.
     *     parentId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "id": "my_id",
     *   //   "isRoot": false,
     *   //   "kind": "my_kind",
     *   //   "parentLink": "my_parentLink",
     *   //   "selfLink": "my_selfLink"
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
      params: Params$Resource$Parents$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Parents$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ParentReference>>;
    get(
      params: Params$Resource$Parents$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Parents$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ParentReference>,
      callback: BodyResponseCallback<Schema$ParentReference>
    ): void;
    get(
      params: Params$Resource$Parents$Get,
      callback: BodyResponseCallback<Schema$ParentReference>
    ): void;
    get(callback: BodyResponseCallback<Schema$ParentReference>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Parents$Get
        | BodyResponseCallback<Schema$ParentReference>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ParentReference>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ParentReference>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ParentReference>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Parents$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Parents$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/drive/v2/files/{fileId}/parents/{parentId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'parentId'],
        pathParams: ['fileId', 'parentId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ParentReference>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ParentReference>(parameters);
      }
    }

    /**
     * Adds a parent folder for a file.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.file',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.parents.insert({
     *     // Deprecated: Adding files to multiple folders is no longer supported. Use `shortcuts` instead.
     *     enforceSingleParent: 'placeholder-value',
     *     // The ID of the file.
     *     fileId: 'placeholder-value',
     *     // Whether the requesting application supports both My Drives and shared drives.
     *     supportsAllDrives: 'placeholder-value',
     *     // Deprecated: Use `supportsAllDrives` instead.
     *     supportsTeamDrives: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "id": "my_id",
     *       //   "isRoot": false,
     *       //   "kind": "my_kind",
     *       //   "parentLink": "my_parentLink",
     *       //   "selfLink": "my_selfLink"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "id": "my_id",
     *   //   "isRoot": false,
     *   //   "kind": "my_kind",
     *   //   "parentLink": "my_parentLink",
     *   //   "selfLink": "my_selfLink"
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
      params: Params$Resource$Parents$Insert,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    insert(
      params?: Params$Resource$Parents$Insert,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ParentReference>>;
    insert(
      params: Params$Resource$Parents$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Parents$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$ParentReference>,
      callback: BodyResponseCallback<Schema$ParentReference>
    ): void;
    insert(
      params: Params$Resource$Parents$Insert,
      callback: BodyResponseCallback<Schema$ParentReference>
    ): void;
    insert(callback: BodyResponseCallback<Schema$ParentReference>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Parents$Insert
        | BodyResponseCallback<Schema$ParentReference>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ParentReference>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ParentReference>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ParentReference>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Parents$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Parents$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/files/{fileId}/parents').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ParentReference>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ParentReference>(parameters);
      }
    }

    /**
     * Lists a file's parents.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.meet.readonly',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.metadata.readonly',
     *       'https://www.googleapis.com/auth/drive.photos.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.parents.list({
     *     // The ID of the file.
     *     fileId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "selfLink": "my_selfLink"
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
      params: Params$Resource$Parents$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Parents$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ParentList>>;
    list(
      params: Params$Resource$Parents$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Parents$List,
      options: MethodOptions | BodyResponseCallback<Schema$ParentList>,
      callback: BodyResponseCallback<Schema$ParentList>
    ): void;
    list(
      params: Params$Resource$Parents$List,
      callback: BodyResponseCallback<Schema$ParentList>
    ): void;
    list(callback: BodyResponseCallback<Schema$ParentList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Parents$List
        | BodyResponseCallback<Schema$ParentList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ParentList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ParentList>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ParentList>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Parents$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Parents$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/files/{fileId}/parents').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ParentList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ParentList>(parameters);
      }
    }
  }

  export interface Params$Resource$Parents$Delete extends StandardParameters {
    /**
     * Deprecated: If an item is not in a shared drive and its last parent is removed, the item is placed under its owner's root.
     */
    enforceSingleParent?: boolean;
    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * The ID of the parent.
     */
    parentId?: string;
  }
  export interface Params$Resource$Parents$Get extends StandardParameters {
    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * The ID of the parent.
     */
    parentId?: string;
  }
  export interface Params$Resource$Parents$Insert extends StandardParameters {
    /**
     * Deprecated: Adding files to multiple folders is no longer supported. Use `shortcuts` instead.
     */
    enforceSingleParent?: boolean;
    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * Whether the requesting application supports both My Drives and shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated: Use `supportsAllDrives` instead.
     */
    supportsTeamDrives?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ParentReference;
  }
  export interface Params$Resource$Parents$List extends StandardParameters {
    /**
     * The ID of the file.
     */
    fileId?: string;
  }

  export class Resource$Permissions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a permission from a file or shared drive. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.permissions.delete({
     *     // Whether the request should enforce expansive access rules.
     *     enforceExpansiveAccess: 'placeholder-value',
     *     // The ID for the file or shared drive.
     *     fileId: 'placeholder-value',
     *     // The ID for the permission.
     *     permissionId: 'placeholder-value',
     *     // Whether the requesting application supports both My Drives and shared drives.
     *     supportsAllDrives: 'placeholder-value',
     *     // Deprecated: Use `supportsAllDrives` instead.
     *     supportsTeamDrives: 'placeholder-value',
     *     // Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     *     useDomainAdminAccess: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
      params: Params$Resource$Permissions$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Permissions$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    delete(
      params: Params$Resource$Permissions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Permissions$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Permissions$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Permissions$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<void>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Permissions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Permissions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/drive/v2/files/{fileId}/permissions/{permissionId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'permissionId'],
        pathParams: ['fileId', 'permissionId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Gets a permission by ID.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.meet.readonly',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.metadata.readonly',
     *       'https://www.googleapis.com/auth/drive.photos.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.permissions.get({
     *     // The ID for the file or shared drive.
     *     fileId: 'placeholder-value',
     *     // The ID for the permission.
     *     permissionId: 'placeholder-value',
     *     // Whether the requesting application supports both My Drives and shared drives.
     *     supportsAllDrives: 'placeholder-value',
     *     // Deprecated: Use `supportsAllDrives` instead.
     *     supportsTeamDrives: 'placeholder-value',
     *     // Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     *     useDomainAdminAccess: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "additionalRoles": [],
     *   //   "authKey": "my_authKey",
     *   //   "deleted": false,
     *   //   "domain": "my_domain",
     *   //   "emailAddress": "my_emailAddress",
     *   //   "etag": "my_etag",
     *   //   "expirationDate": "my_expirationDate",
     *   //   "id": "my_id",
     *   //   "inheritedPermissionsDisabled": false,
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "pendingOwner": false,
     *   //   "permissionDetails": [],
     *   //   "photoLink": "my_photoLink",
     *   //   "role": "my_role",
     *   //   "selfLink": "my_selfLink",
     *   //   "teamDrivePermissionDetails": [],
     *   //   "type": "my_type",
     *   //   "value": "my_value",
     *   //   "view": "my_view",
     *   //   "withLink": false
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
      params: Params$Resource$Permissions$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Permissions$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Permission>>;
    get(
      params: Params$Resource$Permissions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Permissions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Permission>,
      callback: BodyResponseCallback<Schema$Permission>
    ): void;
    get(
      params: Params$Resource$Permissions$Get,
      callback: BodyResponseCallback<Schema$Permission>
    ): void;
    get(callback: BodyResponseCallback<Schema$Permission>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Permissions$Get
        | BodyResponseCallback<Schema$Permission>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Permission>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Permission>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Permission>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Permissions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Permissions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/drive/v2/files/{fileId}/permissions/{permissionId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'permissionId'],
        pathParams: ['fileId', 'permissionId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Permission>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Permission>(parameters);
      }
    }

    /**
     * Returns the permission ID for an email address.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.apps.readonly',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.metadata.readonly',
     *       'https://www.googleapis.com/auth/drive.photos.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.permissions.getIdForEmail({
     *     // The email address for which to return a permission ID
     *     email: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "id": "my_id",
     *   //   "kind": "my_kind"
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
    getIdForEmail(
      params: Params$Resource$Permissions$Getidforemail,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getIdForEmail(
      params?: Params$Resource$Permissions$Getidforemail,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PermissionId>>;
    getIdForEmail(
      params: Params$Resource$Permissions$Getidforemail,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIdForEmail(
      params: Params$Resource$Permissions$Getidforemail,
      options: MethodOptions | BodyResponseCallback<Schema$PermissionId>,
      callback: BodyResponseCallback<Schema$PermissionId>
    ): void;
    getIdForEmail(
      params: Params$Resource$Permissions$Getidforemail,
      callback: BodyResponseCallback<Schema$PermissionId>
    ): void;
    getIdForEmail(callback: BodyResponseCallback<Schema$PermissionId>): void;
    getIdForEmail(
      paramsOrCallback?:
        | Params$Resource$Permissions$Getidforemail
        | BodyResponseCallback<Schema$PermissionId>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PermissionId>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PermissionId>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PermissionId>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Permissions$Getidforemail;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Permissions$Getidforemail;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/permissionIds/{email}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['email'],
        pathParams: ['email'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PermissionId>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PermissionId>(parameters);
      }
    }

    /**
     * Inserts a permission for a file or shared drive. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.permissions.insert({
     *     // A plain text custom message to include in notification emails.
     *     emailMessage: 'placeholder-value',
     *     // Whether the request should enforce expansive access rules.
     *     enforceExpansiveAccess: 'placeholder-value',
     *     // Deprecated: See `moveToNewOwnersRoot` for details.
     *     enforceSingleParent: 'placeholder-value',
     *     // The ID for the file or shared drive.
     *     fileId: 'placeholder-value',
     *     // This parameter will only take effect if the item is not in a shared drive and the request is attempting to transfer the ownership of the item. If set to `true`, the item will be moved to the new owner's My Drive root folder and all prior parents removed. If set to `false`, parents are not changed.
     *     moveToNewOwnersRoot: 'placeholder-value',
     *     // Whether to send notification emails when sharing to users or groups. This parameter is ignored and an email is sent if the `role` is `owner`.
     *     sendNotificationEmails: 'placeholder-value',
     *     // Whether the requesting application supports both My Drives and shared drives.
     *     supportsAllDrives: 'placeholder-value',
     *     // Deprecated: Use `supportsAllDrives` instead.
     *     supportsTeamDrives: 'placeholder-value',
     *     // Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     *     useDomainAdminAccess: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "additionalRoles": [],
     *       //   "authKey": "my_authKey",
     *       //   "deleted": false,
     *       //   "domain": "my_domain",
     *       //   "emailAddress": "my_emailAddress",
     *       //   "etag": "my_etag",
     *       //   "expirationDate": "my_expirationDate",
     *       //   "id": "my_id",
     *       //   "inheritedPermissionsDisabled": false,
     *       //   "kind": "my_kind",
     *       //   "name": "my_name",
     *       //   "pendingOwner": false,
     *       //   "permissionDetails": [],
     *       //   "photoLink": "my_photoLink",
     *       //   "role": "my_role",
     *       //   "selfLink": "my_selfLink",
     *       //   "teamDrivePermissionDetails": [],
     *       //   "type": "my_type",
     *       //   "value": "my_value",
     *       //   "view": "my_view",
     *       //   "withLink": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "additionalRoles": [],
     *   //   "authKey": "my_authKey",
     *   //   "deleted": false,
     *   //   "domain": "my_domain",
     *   //   "emailAddress": "my_emailAddress",
     *   //   "etag": "my_etag",
     *   //   "expirationDate": "my_expirationDate",
     *   //   "id": "my_id",
     *   //   "inheritedPermissionsDisabled": false,
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "pendingOwner": false,
     *   //   "permissionDetails": [],
     *   //   "photoLink": "my_photoLink",
     *   //   "role": "my_role",
     *   //   "selfLink": "my_selfLink",
     *   //   "teamDrivePermissionDetails": [],
     *   //   "type": "my_type",
     *   //   "value": "my_value",
     *   //   "view": "my_view",
     *   //   "withLink": false
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
      params: Params$Resource$Permissions$Insert,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    insert(
      params?: Params$Resource$Permissions$Insert,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Permission>>;
    insert(
      params: Params$Resource$Permissions$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Permissions$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Permission>,
      callback: BodyResponseCallback<Schema$Permission>
    ): void;
    insert(
      params: Params$Resource$Permissions$Insert,
      callback: BodyResponseCallback<Schema$Permission>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Permission>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Permissions$Insert
        | BodyResponseCallback<Schema$Permission>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Permission>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Permission>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Permission>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Permissions$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Permissions$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/files/{fileId}/permissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Permission>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Permission>(parameters);
      }
    }

    /**
     * Lists a file's or shared drive's permissions.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.meet.readonly',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.metadata.readonly',
     *       'https://www.googleapis.com/auth/drive.photos.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.permissions.list({
     *     // The ID for the file or shared drive.
     *     fileId: 'placeholder-value',
     *     // Specifies which additional view's permissions to include in the response. Only `published` is supported.
     *     includePermissionsForView: 'placeholder-value',
     *     // The maximum number of permissions to return per page. When not set for files in a shared drive, at most 100 results will be returned. When not set for files that are not in a shared drive, the entire list will be returned.
     *     maxResults: 'placeholder-value',
     *     // The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from the previous response.
     *     pageToken: 'placeholder-value',
     *     // Whether the requesting application supports both My Drives and shared drives.
     *     supportsAllDrives: 'placeholder-value',
     *     // Deprecated: Use `supportsAllDrives` instead.
     *     supportsTeamDrives: 'placeholder-value',
     *     // Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     *     useDomainAdminAccess: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "selfLink": "my_selfLink"
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
      params: Params$Resource$Permissions$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Permissions$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PermissionList>>;
    list(
      params: Params$Resource$Permissions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Permissions$List,
      options: MethodOptions | BodyResponseCallback<Schema$PermissionList>,
      callback: BodyResponseCallback<Schema$PermissionList>
    ): void;
    list(
      params: Params$Resource$Permissions$List,
      callback: BodyResponseCallback<Schema$PermissionList>
    ): void;
    list(callback: BodyResponseCallback<Schema$PermissionList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Permissions$List
        | BodyResponseCallback<Schema$PermissionList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PermissionList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PermissionList>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PermissionList>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Permissions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Permissions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/files/{fileId}/permissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PermissionList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PermissionList>(parameters);
      }
    }

    /**
     * Updates a permission using patch semantics. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.permissions.patch({
     *     // Whether the request should enforce expansive access rules.
     *     enforceExpansiveAccess: 'placeholder-value',
     *     // The ID for the file or shared drive.
     *     fileId: 'placeholder-value',
     *     // The ID for the permission.
     *     permissionId: 'placeholder-value',
     *     // Whether to remove the expiration date.
     *     removeExpiration: 'placeholder-value',
     *     // Whether the requesting application supports both My Drives and shared drives.
     *     supportsAllDrives: 'placeholder-value',
     *     // Deprecated: Use `supportsAllDrives` instead.
     *     supportsTeamDrives: 'placeholder-value',
     *     // Whether changing a role to `owner` downgrades the current owners to writers. Does nothing if the specified role is not `owner`.
     *     transferOwnership: 'placeholder-value',
     *     // Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     *     useDomainAdminAccess: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "additionalRoles": [],
     *       //   "authKey": "my_authKey",
     *       //   "deleted": false,
     *       //   "domain": "my_domain",
     *       //   "emailAddress": "my_emailAddress",
     *       //   "etag": "my_etag",
     *       //   "expirationDate": "my_expirationDate",
     *       //   "id": "my_id",
     *       //   "inheritedPermissionsDisabled": false,
     *       //   "kind": "my_kind",
     *       //   "name": "my_name",
     *       //   "pendingOwner": false,
     *       //   "permissionDetails": [],
     *       //   "photoLink": "my_photoLink",
     *       //   "role": "my_role",
     *       //   "selfLink": "my_selfLink",
     *       //   "teamDrivePermissionDetails": [],
     *       //   "type": "my_type",
     *       //   "value": "my_value",
     *       //   "view": "my_view",
     *       //   "withLink": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "additionalRoles": [],
     *   //   "authKey": "my_authKey",
     *   //   "deleted": false,
     *   //   "domain": "my_domain",
     *   //   "emailAddress": "my_emailAddress",
     *   //   "etag": "my_etag",
     *   //   "expirationDate": "my_expirationDate",
     *   //   "id": "my_id",
     *   //   "inheritedPermissionsDisabled": false,
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "pendingOwner": false,
     *   //   "permissionDetails": [],
     *   //   "photoLink": "my_photoLink",
     *   //   "role": "my_role",
     *   //   "selfLink": "my_selfLink",
     *   //   "teamDrivePermissionDetails": [],
     *   //   "type": "my_type",
     *   //   "value": "my_value",
     *   //   "view": "my_view",
     *   //   "withLink": false
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
      params: Params$Resource$Permissions$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Permissions$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Permission>>;
    patch(
      params: Params$Resource$Permissions$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Permissions$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Permission>,
      callback: BodyResponseCallback<Schema$Permission>
    ): void;
    patch(
      params: Params$Resource$Permissions$Patch,
      callback: BodyResponseCallback<Schema$Permission>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Permission>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Permissions$Patch
        | BodyResponseCallback<Schema$Permission>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Permission>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Permission>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Permission>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Permissions$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Permissions$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/drive/v2/files/{fileId}/permissions/{permissionId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'permissionId'],
        pathParams: ['fileId', 'permissionId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Permission>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Permission>(parameters);
      }
    }

    /**
     * Updates a permission. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.permissions.update({
     *     // Whether the request should enforce expansive access rules.
     *     enforceExpansiveAccess: 'placeholder-value',
     *     // The ID for the file or shared drive.
     *     fileId: 'placeholder-value',
     *     // The ID for the permission.
     *     permissionId: 'placeholder-value',
     *     // Whether to remove the expiration date.
     *     removeExpiration: 'placeholder-value',
     *     // Whether the requesting application supports both My Drives and shared drives.
     *     supportsAllDrives: 'placeholder-value',
     *     // Deprecated: Use `supportsAllDrives` instead.
     *     supportsTeamDrives: 'placeholder-value',
     *     // Whether changing a role to `owner` downgrades the current owners to writers. Does nothing if the specified role is not `owner`.
     *     transferOwnership: 'placeholder-value',
     *     // Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     *     useDomainAdminAccess: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "additionalRoles": [],
     *       //   "authKey": "my_authKey",
     *       //   "deleted": false,
     *       //   "domain": "my_domain",
     *       //   "emailAddress": "my_emailAddress",
     *       //   "etag": "my_etag",
     *       //   "expirationDate": "my_expirationDate",
     *       //   "id": "my_id",
     *       //   "inheritedPermissionsDisabled": false,
     *       //   "kind": "my_kind",
     *       //   "name": "my_name",
     *       //   "pendingOwner": false,
     *       //   "permissionDetails": [],
     *       //   "photoLink": "my_photoLink",
     *       //   "role": "my_role",
     *       //   "selfLink": "my_selfLink",
     *       //   "teamDrivePermissionDetails": [],
     *       //   "type": "my_type",
     *       //   "value": "my_value",
     *       //   "view": "my_view",
     *       //   "withLink": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "additionalRoles": [],
     *   //   "authKey": "my_authKey",
     *   //   "deleted": false,
     *   //   "domain": "my_domain",
     *   //   "emailAddress": "my_emailAddress",
     *   //   "etag": "my_etag",
     *   //   "expirationDate": "my_expirationDate",
     *   //   "id": "my_id",
     *   //   "inheritedPermissionsDisabled": false,
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "pendingOwner": false,
     *   //   "permissionDetails": [],
     *   //   "photoLink": "my_photoLink",
     *   //   "role": "my_role",
     *   //   "selfLink": "my_selfLink",
     *   //   "teamDrivePermissionDetails": [],
     *   //   "type": "my_type",
     *   //   "value": "my_value",
     *   //   "view": "my_view",
     *   //   "withLink": false
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
      params: Params$Resource$Permissions$Update,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    update(
      params?: Params$Resource$Permissions$Update,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Permission>>;
    update(
      params: Params$Resource$Permissions$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Permissions$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Permission>,
      callback: BodyResponseCallback<Schema$Permission>
    ): void;
    update(
      params: Params$Resource$Permissions$Update,
      callback: BodyResponseCallback<Schema$Permission>
    ): void;
    update(callback: BodyResponseCallback<Schema$Permission>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Permissions$Update
        | BodyResponseCallback<Schema$Permission>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Permission>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Permission>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Permission>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Permissions$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Permissions$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/drive/v2/files/{fileId}/permissions/{permissionId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'permissionId'],
        pathParams: ['fileId', 'permissionId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Permission>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Permission>(parameters);
      }
    }
  }

  export interface Params$Resource$Permissions$Delete
    extends StandardParameters {
    /**
     * Whether the request should enforce expansive access rules.
     */
    enforceExpansiveAccess?: boolean;
    /**
     * The ID for the file or shared drive.
     */
    fileId?: string;
    /**
     * The ID for the permission.
     */
    permissionId?: string;
    /**
     * Whether the requesting application supports both My Drives and shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated: Use `supportsAllDrives` instead.
     */
    supportsTeamDrives?: boolean;
    /**
     * Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     */
    useDomainAdminAccess?: boolean;
  }
  export interface Params$Resource$Permissions$Get extends StandardParameters {
    /**
     * The ID for the file or shared drive.
     */
    fileId?: string;
    /**
     * The ID for the permission.
     */
    permissionId?: string;
    /**
     * Whether the requesting application supports both My Drives and shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated: Use `supportsAllDrives` instead.
     */
    supportsTeamDrives?: boolean;
    /**
     * Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     */
    useDomainAdminAccess?: boolean;
  }
  export interface Params$Resource$Permissions$Getidforemail
    extends StandardParameters {
    /**
     * The email address for which to return a permission ID
     */
    email?: string;
  }
  export interface Params$Resource$Permissions$Insert
    extends StandardParameters {
    /**
     * A plain text custom message to include in notification emails.
     */
    emailMessage?: string;
    /**
     * Whether the request should enforce expansive access rules.
     */
    enforceExpansiveAccess?: boolean;
    /**
     * Deprecated: See `moveToNewOwnersRoot` for details.
     */
    enforceSingleParent?: boolean;
    /**
     * The ID for the file or shared drive.
     */
    fileId?: string;
    /**
     * This parameter will only take effect if the item is not in a shared drive and the request is attempting to transfer the ownership of the item. If set to `true`, the item will be moved to the new owner's My Drive root folder and all prior parents removed. If set to `false`, parents are not changed.
     */
    moveToNewOwnersRoot?: boolean;
    /**
     * Whether to send notification emails when sharing to users or groups. This parameter is ignored and an email is sent if the `role` is `owner`.
     */
    sendNotificationEmails?: boolean;
    /**
     * Whether the requesting application supports both My Drives and shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated: Use `supportsAllDrives` instead.
     */
    supportsTeamDrives?: boolean;
    /**
     * Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     */
    useDomainAdminAccess?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Permission;
  }
  export interface Params$Resource$Permissions$List extends StandardParameters {
    /**
     * The ID for the file or shared drive.
     */
    fileId?: string;
    /**
     * Specifies which additional view's permissions to include in the response. Only `published` is supported.
     */
    includePermissionsForView?: string;
    /**
     * The maximum number of permissions to return per page. When not set for files in a shared drive, at most 100 results will be returned. When not set for files that are not in a shared drive, the entire list will be returned.
     */
    maxResults?: number;
    /**
     * The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from the previous response.
     */
    pageToken?: string;
    /**
     * Whether the requesting application supports both My Drives and shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated: Use `supportsAllDrives` instead.
     */
    supportsTeamDrives?: boolean;
    /**
     * Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     */
    useDomainAdminAccess?: boolean;
  }
  export interface Params$Resource$Permissions$Patch
    extends StandardParameters {
    /**
     * Whether the request should enforce expansive access rules.
     */
    enforceExpansiveAccess?: boolean;
    /**
     * The ID for the file or shared drive.
     */
    fileId?: string;
    /**
     * The ID for the permission.
     */
    permissionId?: string;
    /**
     * Whether to remove the expiration date.
     */
    removeExpiration?: boolean;
    /**
     * Whether the requesting application supports both My Drives and shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated: Use `supportsAllDrives` instead.
     */
    supportsTeamDrives?: boolean;
    /**
     * Whether changing a role to `owner` downgrades the current owners to writers. Does nothing if the specified role is not `owner`.
     */
    transferOwnership?: boolean;
    /**
     * Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     */
    useDomainAdminAccess?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Permission;
  }
  export interface Params$Resource$Permissions$Update
    extends StandardParameters {
    /**
     * Whether the request should enforce expansive access rules.
     */
    enforceExpansiveAccess?: boolean;
    /**
     * The ID for the file or shared drive.
     */
    fileId?: string;
    /**
     * The ID for the permission.
     */
    permissionId?: string;
    /**
     * Whether to remove the expiration date.
     */
    removeExpiration?: boolean;
    /**
     * Whether the requesting application supports both My Drives and shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated: Use `supportsAllDrives` instead.
     */
    supportsTeamDrives?: boolean;
    /**
     * Whether changing a role to `owner` downgrades the current owners to writers. Does nothing if the specified role is not `owner`.
     */
    transferOwnership?: boolean;
    /**
     * Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     */
    useDomainAdminAccess?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Permission;
  }

  export class Resource$Properties {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.properties.delete({
     *     // The ID of the file.
     *     fileId: 'placeholder-value',
     *     // The key of the property.
     *     propertyKey: 'placeholder-value',
     *     // The visibility of the property.
     *     visibility: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
      params: Params$Resource$Properties$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Properties$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    delete(
      params: Params$Resource$Properties$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Properties$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Properties$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Properties$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<void>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/drive/v2/files/{fileId}/properties/{propertyKey}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'propertyKey'],
        pathParams: ['fileId', 'propertyKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Gets a property by its key.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.meet.readonly',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.metadata.readonly',
     *       'https://www.googleapis.com/auth/drive.photos.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.properties.get({
     *     // The ID of the file.
     *     fileId: 'placeholder-value',
     *     // The key of the property.
     *     propertyKey: 'placeholder-value',
     *     // The visibility of the property.
     *     visibility: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "key": "my_key",
     *   //   "kind": "my_kind",
     *   //   "selfLink": "my_selfLink",
     *   //   "value": "my_value",
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
      params: Params$Resource$Properties$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Properties$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Property>>;
    get(
      params: Params$Resource$Properties$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Properties$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Property>,
      callback: BodyResponseCallback<Schema$Property>
    ): void;
    get(
      params: Params$Resource$Properties$Get,
      callback: BodyResponseCallback<Schema$Property>
    ): void;
    get(callback: BodyResponseCallback<Schema$Property>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Properties$Get
        | BodyResponseCallback<Schema$Property>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Property>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Property>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Property>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Properties$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/drive/v2/files/{fileId}/properties/{propertyKey}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'propertyKey'],
        pathParams: ['fileId', 'propertyKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Property>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Property>(parameters);
      }
    }

    /**
     * Adds a property to a file, or updates it if it already exists.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.properties.insert({
     *     // The ID of the file.
     *     fileId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "etag": "my_etag",
     *       //   "key": "my_key",
     *       //   "kind": "my_kind",
     *       //   "selfLink": "my_selfLink",
     *       //   "value": "my_value",
     *       //   "visibility": "my_visibility"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "key": "my_key",
     *   //   "kind": "my_kind",
     *   //   "selfLink": "my_selfLink",
     *   //   "value": "my_value",
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
    insert(
      params: Params$Resource$Properties$Insert,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    insert(
      params?: Params$Resource$Properties$Insert,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Property>>;
    insert(
      params: Params$Resource$Properties$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Properties$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Property>,
      callback: BodyResponseCallback<Schema$Property>
    ): void;
    insert(
      params: Params$Resource$Properties$Insert,
      callback: BodyResponseCallback<Schema$Property>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Property>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Properties$Insert
        | BodyResponseCallback<Schema$Property>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Property>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Property>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Property>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/files/{fileId}/properties').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Property>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Property>(parameters);
      }
    }

    /**
     * Lists a file's properties.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.meet.readonly',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.metadata.readonly',
     *       'https://www.googleapis.com/auth/drive.photos.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.properties.list({
     *     // The ID of the file.
     *     fileId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "selfLink": "my_selfLink"
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
      params: Params$Resource$Properties$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Properties$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PropertyList>>;
    list(
      params: Params$Resource$Properties$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Properties$List,
      options: MethodOptions | BodyResponseCallback<Schema$PropertyList>,
      callback: BodyResponseCallback<Schema$PropertyList>
    ): void;
    list(
      params: Params$Resource$Properties$List,
      callback: BodyResponseCallback<Schema$PropertyList>
    ): void;
    list(callback: BodyResponseCallback<Schema$PropertyList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Properties$List
        | BodyResponseCallback<Schema$PropertyList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PropertyList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PropertyList>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PropertyList>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Properties$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/files/{fileId}/properties').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PropertyList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PropertyList>(parameters);
      }
    }

    /**
     * Updates a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.properties.patch({
     *     // The ID of the file.
     *     fileId: 'placeholder-value',
     *     // The key of the property.
     *     propertyKey: 'placeholder-value',
     *     // The visibility of the property. Allowed values are PRIVATE and PUBLIC. (Default: PRIVATE)
     *     visibility: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "etag": "my_etag",
     *       //   "key": "my_key",
     *       //   "kind": "my_kind",
     *       //   "selfLink": "my_selfLink",
     *       //   "value": "my_value",
     *       //   "visibility": "my_visibility"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "key": "my_key",
     *   //   "kind": "my_kind",
     *   //   "selfLink": "my_selfLink",
     *   //   "value": "my_value",
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
      params: Params$Resource$Properties$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Properties$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Property>>;
    patch(
      params: Params$Resource$Properties$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Properties$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Property>,
      callback: BodyResponseCallback<Schema$Property>
    ): void;
    patch(
      params: Params$Resource$Properties$Patch,
      callback: BodyResponseCallback<Schema$Property>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Property>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Properties$Patch
        | BodyResponseCallback<Schema$Property>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Property>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Property>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Property>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Properties$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/drive/v2/files/{fileId}/properties/{propertyKey}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'propertyKey'],
        pathParams: ['fileId', 'propertyKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Property>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Property>(parameters);
      }
    }

    /**
     * Updates a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.properties.update({
     *     // The ID of the file.
     *     fileId: 'placeholder-value',
     *     // The key of the property.
     *     propertyKey: 'placeholder-value',
     *     // The visibility of the property. Allowed values are PRIVATE and PUBLIC. (Default: PRIVATE)
     *     visibility: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "etag": "my_etag",
     *       //   "key": "my_key",
     *       //   "kind": "my_kind",
     *       //   "selfLink": "my_selfLink",
     *       //   "value": "my_value",
     *       //   "visibility": "my_visibility"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "key": "my_key",
     *   //   "kind": "my_kind",
     *   //   "selfLink": "my_selfLink",
     *   //   "value": "my_value",
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
    update(
      params: Params$Resource$Properties$Update,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    update(
      params?: Params$Resource$Properties$Update,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Property>>;
    update(
      params: Params$Resource$Properties$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Properties$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Property>,
      callback: BodyResponseCallback<Schema$Property>
    ): void;
    update(
      params: Params$Resource$Properties$Update,
      callback: BodyResponseCallback<Schema$Property>
    ): void;
    update(callback: BodyResponseCallback<Schema$Property>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Properties$Update
        | BodyResponseCallback<Schema$Property>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Property>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Property>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Property>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/drive/v2/files/{fileId}/properties/{propertyKey}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'propertyKey'],
        pathParams: ['fileId', 'propertyKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Property>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Property>(parameters);
      }
    }
  }

  export interface Params$Resource$Properties$Delete
    extends StandardParameters {
    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * The key of the property.
     */
    propertyKey?: string;
    /**
     * The visibility of the property.
     */
    visibility?: string;
  }
  export interface Params$Resource$Properties$Get extends StandardParameters {
    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * The key of the property.
     */
    propertyKey?: string;
    /**
     * The visibility of the property.
     */
    visibility?: string;
  }
  export interface Params$Resource$Properties$Insert
    extends StandardParameters {
    /**
     * The ID of the file.
     */
    fileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Property;
  }
  export interface Params$Resource$Properties$List extends StandardParameters {
    /**
     * The ID of the file.
     */
    fileId?: string;
  }
  export interface Params$Resource$Properties$Patch extends StandardParameters {
    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * The key of the property.
     */
    propertyKey?: string;
    /**
     * The visibility of the property. Allowed values are PRIVATE and PUBLIC. (Default: PRIVATE)
     */
    visibility?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Property;
  }
  export interface Params$Resource$Properties$Update
    extends StandardParameters {
    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * The key of the property.
     */
    propertyKey?: string;
    /**
     * The visibility of the property. Allowed values are PRIVATE and PUBLIC. (Default: PRIVATE)
     */
    visibility?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Property;
  }

  export class Resource$Replies {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a reply.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.replies.delete({
     *     // The ID of the comment.
     *     commentId: 'placeholder-value',
     *     // The ID of the file.
     *     fileId: 'placeholder-value',
     *     // The ID of the reply.
     *     replyId: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
      params: Params$Resource$Replies$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Replies$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    delete(
      params: Params$Resource$Replies$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Replies$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Replies$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Replies$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<void>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Replies$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Replies$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/drive/v2/files/{fileId}/comments/{commentId}/replies/{replyId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'commentId', 'replyId'],
        pathParams: ['commentId', 'fileId', 'replyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Gets a reply.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.meet.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.replies.get({
     *     // The ID of the comment.
     *     commentId: 'placeholder-value',
     *     // The ID of the file.
     *     fileId: 'placeholder-value',
     *     // If set, this will succeed when retrieving a deleted reply.
     *     includeDeleted: 'placeholder-value',
     *     // The ID of the reply.
     *     replyId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "author": {},
     *   //   "content": "my_content",
     *   //   "createdDate": "my_createdDate",
     *   //   "deleted": false,
     *   //   "htmlContent": "my_htmlContent",
     *   //   "kind": "my_kind",
     *   //   "modifiedDate": "my_modifiedDate",
     *   //   "replyId": "my_replyId",
     *   //   "verb": "my_verb"
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
      params: Params$Resource$Replies$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Replies$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CommentReply>>;
    get(
      params: Params$Resource$Replies$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Replies$Get,
      options: MethodOptions | BodyResponseCallback<Schema$CommentReply>,
      callback: BodyResponseCallback<Schema$CommentReply>
    ): void;
    get(
      params: Params$Resource$Replies$Get,
      callback: BodyResponseCallback<Schema$CommentReply>
    ): void;
    get(callback: BodyResponseCallback<Schema$CommentReply>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Replies$Get
        | BodyResponseCallback<Schema$CommentReply>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CommentReply>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CommentReply>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CommentReply>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Replies$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Replies$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/drive/v2/files/{fileId}/comments/{commentId}/replies/{replyId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'commentId', 'replyId'],
        pathParams: ['commentId', 'fileId', 'replyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CommentReply>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CommentReply>(parameters);
      }
    }

    /**
     * Creates a new reply to the given comment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.replies.insert({
     *     // The ID of the comment.
     *     commentId: 'placeholder-value',
     *     // The ID of the file.
     *     fileId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "author": {},
     *       //   "content": "my_content",
     *       //   "createdDate": "my_createdDate",
     *       //   "deleted": false,
     *       //   "htmlContent": "my_htmlContent",
     *       //   "kind": "my_kind",
     *       //   "modifiedDate": "my_modifiedDate",
     *       //   "replyId": "my_replyId",
     *       //   "verb": "my_verb"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "author": {},
     *   //   "content": "my_content",
     *   //   "createdDate": "my_createdDate",
     *   //   "deleted": false,
     *   //   "htmlContent": "my_htmlContent",
     *   //   "kind": "my_kind",
     *   //   "modifiedDate": "my_modifiedDate",
     *   //   "replyId": "my_replyId",
     *   //   "verb": "my_verb"
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
      params: Params$Resource$Replies$Insert,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    insert(
      params?: Params$Resource$Replies$Insert,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CommentReply>>;
    insert(
      params: Params$Resource$Replies$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Replies$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$CommentReply>,
      callback: BodyResponseCallback<Schema$CommentReply>
    ): void;
    insert(
      params: Params$Resource$Replies$Insert,
      callback: BodyResponseCallback<Schema$CommentReply>
    ): void;
    insert(callback: BodyResponseCallback<Schema$CommentReply>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Replies$Insert
        | BodyResponseCallback<Schema$CommentReply>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CommentReply>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CommentReply>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CommentReply>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Replies$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Replies$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/drive/v2/files/{fileId}/comments/{commentId}/replies'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'commentId'],
        pathParams: ['commentId', 'fileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CommentReply>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CommentReply>(parameters);
      }
    }

    /**
     * Lists all of the replies to a comment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.meet.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.replies.list({
     *     // The ID of the comment.
     *     commentId: 'placeholder-value',
     *     // The ID of the file.
     *     fileId: 'placeholder-value',
     *     // If set, all replies, including deleted replies (with content stripped) will be returned.
     *     includeDeleted: 'placeholder-value',
     *     // The maximum number of replies to include in the response, used for paging.
     *     maxResults: 'placeholder-value',
     *     // The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextLink": "my_nextLink",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "selfLink": "my_selfLink"
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
      params: Params$Resource$Replies$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Replies$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CommentReplyList>>;
    list(
      params: Params$Resource$Replies$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Replies$List,
      options: MethodOptions | BodyResponseCallback<Schema$CommentReplyList>,
      callback: BodyResponseCallback<Schema$CommentReplyList>
    ): void;
    list(
      params: Params$Resource$Replies$List,
      callback: BodyResponseCallback<Schema$CommentReplyList>
    ): void;
    list(callback: BodyResponseCallback<Schema$CommentReplyList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Replies$List
        | BodyResponseCallback<Schema$CommentReplyList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CommentReplyList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CommentReplyList>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CommentReplyList>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Replies$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Replies$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/drive/v2/files/{fileId}/comments/{commentId}/replies'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'commentId'],
        pathParams: ['commentId', 'fileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CommentReplyList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CommentReplyList>(parameters);
      }
    }

    /**
     * Updates an existing reply.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.replies.patch({
     *     // The ID of the comment.
     *     commentId: 'placeholder-value',
     *     // The ID of the file.
     *     fileId: 'placeholder-value',
     *     // The ID of the reply.
     *     replyId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "author": {},
     *       //   "content": "my_content",
     *       //   "createdDate": "my_createdDate",
     *       //   "deleted": false,
     *       //   "htmlContent": "my_htmlContent",
     *       //   "kind": "my_kind",
     *       //   "modifiedDate": "my_modifiedDate",
     *       //   "replyId": "my_replyId",
     *       //   "verb": "my_verb"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "author": {},
     *   //   "content": "my_content",
     *   //   "createdDate": "my_createdDate",
     *   //   "deleted": false,
     *   //   "htmlContent": "my_htmlContent",
     *   //   "kind": "my_kind",
     *   //   "modifiedDate": "my_modifiedDate",
     *   //   "replyId": "my_replyId",
     *   //   "verb": "my_verb"
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
      params: Params$Resource$Replies$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Replies$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CommentReply>>;
    patch(
      params: Params$Resource$Replies$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Replies$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$CommentReply>,
      callback: BodyResponseCallback<Schema$CommentReply>
    ): void;
    patch(
      params: Params$Resource$Replies$Patch,
      callback: BodyResponseCallback<Schema$CommentReply>
    ): void;
    patch(callback: BodyResponseCallback<Schema$CommentReply>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Replies$Patch
        | BodyResponseCallback<Schema$CommentReply>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CommentReply>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CommentReply>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CommentReply>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Replies$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Replies$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/drive/v2/files/{fileId}/comments/{commentId}/replies/{replyId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'commentId', 'replyId'],
        pathParams: ['commentId', 'fileId', 'replyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CommentReply>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CommentReply>(parameters);
      }
    }

    /**
     * Updates an existing reply.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.replies.update({
     *     // The ID of the comment.
     *     commentId: 'placeholder-value',
     *     // The ID of the file.
     *     fileId: 'placeholder-value',
     *     // The ID of the reply.
     *     replyId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "author": {},
     *       //   "content": "my_content",
     *       //   "createdDate": "my_createdDate",
     *       //   "deleted": false,
     *       //   "htmlContent": "my_htmlContent",
     *       //   "kind": "my_kind",
     *       //   "modifiedDate": "my_modifiedDate",
     *       //   "replyId": "my_replyId",
     *       //   "verb": "my_verb"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "author": {},
     *   //   "content": "my_content",
     *   //   "createdDate": "my_createdDate",
     *   //   "deleted": false,
     *   //   "htmlContent": "my_htmlContent",
     *   //   "kind": "my_kind",
     *   //   "modifiedDate": "my_modifiedDate",
     *   //   "replyId": "my_replyId",
     *   //   "verb": "my_verb"
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
      params: Params$Resource$Replies$Update,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    update(
      params?: Params$Resource$Replies$Update,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CommentReply>>;
    update(
      params: Params$Resource$Replies$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Replies$Update,
      options: MethodOptions | BodyResponseCallback<Schema$CommentReply>,
      callback: BodyResponseCallback<Schema$CommentReply>
    ): void;
    update(
      params: Params$Resource$Replies$Update,
      callback: BodyResponseCallback<Schema$CommentReply>
    ): void;
    update(callback: BodyResponseCallback<Schema$CommentReply>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Replies$Update
        | BodyResponseCallback<Schema$CommentReply>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CommentReply>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CommentReply>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CommentReply>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Replies$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Replies$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/drive/v2/files/{fileId}/comments/{commentId}/replies/{replyId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'commentId', 'replyId'],
        pathParams: ['commentId', 'fileId', 'replyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CommentReply>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CommentReply>(parameters);
      }
    }
  }

  export interface Params$Resource$Replies$Delete extends StandardParameters {
    /**
     * The ID of the comment.
     */
    commentId?: string;
    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * The ID of the reply.
     */
    replyId?: string;
  }
  export interface Params$Resource$Replies$Get extends StandardParameters {
    /**
     * The ID of the comment.
     */
    commentId?: string;
    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * If set, this will succeed when retrieving a deleted reply.
     */
    includeDeleted?: boolean;
    /**
     * The ID of the reply.
     */
    replyId?: string;
  }
  export interface Params$Resource$Replies$Insert extends StandardParameters {
    /**
     * The ID of the comment.
     */
    commentId?: string;
    /**
     * The ID of the file.
     */
    fileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CommentReply;
  }
  export interface Params$Resource$Replies$List extends StandardParameters {
    /**
     * The ID of the comment.
     */
    commentId?: string;
    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * If set, all replies, including deleted replies (with content stripped) will be returned.
     */
    includeDeleted?: boolean;
    /**
     * The maximum number of replies to include in the response, used for paging.
     */
    maxResults?: number;
    /**
     * The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Replies$Patch extends StandardParameters {
    /**
     * The ID of the comment.
     */
    commentId?: string;
    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * The ID of the reply.
     */
    replyId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CommentReply;
  }
  export interface Params$Resource$Replies$Update extends StandardParameters {
    /**
     * The ID of the comment.
     */
    commentId?: string;
    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * The ID of the reply.
     */
    replyId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CommentReply;
  }

  export class Resource$Revisions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Permanently deletes a file version. You can only delete revisions for files with binary content, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.file',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.revisions.delete({
     *     // The ID of the file.
     *     fileId: 'placeholder-value',
     *     // The ID of the revision.
     *     revisionId: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
      params: Params$Resource$Revisions$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Revisions$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    delete(
      params: Params$Resource$Revisions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Revisions$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Revisions$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Revisions$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<void>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Revisions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Revisions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/drive/v2/files/{fileId}/revisions/{revisionId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'revisionId'],
        pathParams: ['fileId', 'revisionId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Gets a specific revision.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.meet.readonly',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.metadata.readonly',
     *       'https://www.googleapis.com/auth/drive.photos.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.revisions.get({
     *     // The ID of the file.
     *     fileId: 'placeholder-value',
     *     // The ID of the revision.
     *     revisionId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "downloadUrl": "my_downloadUrl",
     *   //   "etag": "my_etag",
     *   //   "exportLinks": {},
     *   //   "fileSize": "my_fileSize",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "lastModifyingUser": {},
     *   //   "lastModifyingUserName": "my_lastModifyingUserName",
     *   //   "md5Checksum": "my_md5Checksum",
     *   //   "mimeType": "my_mimeType",
     *   //   "modifiedDate": "my_modifiedDate",
     *   //   "originalFilename": "my_originalFilename",
     *   //   "pinned": false,
     *   //   "publishAuto": false,
     *   //   "published": false,
     *   //   "publishedLink": "my_publishedLink",
     *   //   "publishedOutsideDomain": false,
     *   //   "selfLink": "my_selfLink"
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
      params: Params$Resource$Revisions$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Revisions$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Revision>>;
    get(
      params: Params$Resource$Revisions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Revisions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Revision>,
      callback: BodyResponseCallback<Schema$Revision>
    ): void;
    get(
      params: Params$Resource$Revisions$Get,
      callback: BodyResponseCallback<Schema$Revision>
    ): void;
    get(callback: BodyResponseCallback<Schema$Revision>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Revisions$Get
        | BodyResponseCallback<Schema$Revision>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Revision>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Revision>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Revision>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Revisions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Revisions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/drive/v2/files/{fileId}/revisions/{revisionId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'revisionId'],
        pathParams: ['fileId', 'revisionId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Revision>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Revision>(parameters);
      }
    }

    /**
     * Lists a file's revisions.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.meet.readonly',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.metadata.readonly',
     *       'https://www.googleapis.com/auth/drive.photos.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.revisions.list({
     *     // The ID of the file.
     *     fileId: 'placeholder-value',
     *     // Maximum number of revisions to return.
     *     maxResults: 'placeholder-value',
     *     // Page token for revisions. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "selfLink": "my_selfLink"
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
      params: Params$Resource$Revisions$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Revisions$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$RevisionList>>;
    list(
      params: Params$Resource$Revisions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Revisions$List,
      options: MethodOptions | BodyResponseCallback<Schema$RevisionList>,
      callback: BodyResponseCallback<Schema$RevisionList>
    ): void;
    list(
      params: Params$Resource$Revisions$List,
      callback: BodyResponseCallback<Schema$RevisionList>
    ): void;
    list(callback: BodyResponseCallback<Schema$RevisionList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Revisions$List
        | BodyResponseCallback<Schema$RevisionList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RevisionList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RevisionList>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$RevisionList>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Revisions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Revisions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/files/{fileId}/revisions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RevisionList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RevisionList>(parameters);
      }
    }

    /**
     * Updates a revision.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.file',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.revisions.patch({
     *     // The ID for the file.
     *     fileId: 'placeholder-value',
     *     // The ID for the revision.
     *     revisionId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "downloadUrl": "my_downloadUrl",
     *       //   "etag": "my_etag",
     *       //   "exportLinks": {},
     *       //   "fileSize": "my_fileSize",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "lastModifyingUser": {},
     *       //   "lastModifyingUserName": "my_lastModifyingUserName",
     *       //   "md5Checksum": "my_md5Checksum",
     *       //   "mimeType": "my_mimeType",
     *       //   "modifiedDate": "my_modifiedDate",
     *       //   "originalFilename": "my_originalFilename",
     *       //   "pinned": false,
     *       //   "publishAuto": false,
     *       //   "published": false,
     *       //   "publishedLink": "my_publishedLink",
     *       //   "publishedOutsideDomain": false,
     *       //   "selfLink": "my_selfLink"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "downloadUrl": "my_downloadUrl",
     *   //   "etag": "my_etag",
     *   //   "exportLinks": {},
     *   //   "fileSize": "my_fileSize",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "lastModifyingUser": {},
     *   //   "lastModifyingUserName": "my_lastModifyingUserName",
     *   //   "md5Checksum": "my_md5Checksum",
     *   //   "mimeType": "my_mimeType",
     *   //   "modifiedDate": "my_modifiedDate",
     *   //   "originalFilename": "my_originalFilename",
     *   //   "pinned": false,
     *   //   "publishAuto": false,
     *   //   "published": false,
     *   //   "publishedLink": "my_publishedLink",
     *   //   "publishedOutsideDomain": false,
     *   //   "selfLink": "my_selfLink"
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
      params: Params$Resource$Revisions$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Revisions$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Revision>>;
    patch(
      params: Params$Resource$Revisions$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Revisions$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Revision>,
      callback: BodyResponseCallback<Schema$Revision>
    ): void;
    patch(
      params: Params$Resource$Revisions$Patch,
      callback: BodyResponseCallback<Schema$Revision>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Revision>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Revisions$Patch
        | BodyResponseCallback<Schema$Revision>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Revision>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Revision>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Revision>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Revisions$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Revisions$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/drive/v2/files/{fileId}/revisions/{revisionId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'revisionId'],
        pathParams: ['fileId', 'revisionId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Revision>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Revision>(parameters);
      }
    }

    /**
     * Updates a revision.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.file',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.revisions.update({
     *     // The ID for the file.
     *     fileId: 'placeholder-value',
     *     // The ID for the revision.
     *     revisionId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "downloadUrl": "my_downloadUrl",
     *       //   "etag": "my_etag",
     *       //   "exportLinks": {},
     *       //   "fileSize": "my_fileSize",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "lastModifyingUser": {},
     *       //   "lastModifyingUserName": "my_lastModifyingUserName",
     *       //   "md5Checksum": "my_md5Checksum",
     *       //   "mimeType": "my_mimeType",
     *       //   "modifiedDate": "my_modifiedDate",
     *       //   "originalFilename": "my_originalFilename",
     *       //   "pinned": false,
     *       //   "publishAuto": false,
     *       //   "published": false,
     *       //   "publishedLink": "my_publishedLink",
     *       //   "publishedOutsideDomain": false,
     *       //   "selfLink": "my_selfLink"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "downloadUrl": "my_downloadUrl",
     *   //   "etag": "my_etag",
     *   //   "exportLinks": {},
     *   //   "fileSize": "my_fileSize",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "lastModifyingUser": {},
     *   //   "lastModifyingUserName": "my_lastModifyingUserName",
     *   //   "md5Checksum": "my_md5Checksum",
     *   //   "mimeType": "my_mimeType",
     *   //   "modifiedDate": "my_modifiedDate",
     *   //   "originalFilename": "my_originalFilename",
     *   //   "pinned": false,
     *   //   "publishAuto": false,
     *   //   "published": false,
     *   //   "publishedLink": "my_publishedLink",
     *   //   "publishedOutsideDomain": false,
     *   //   "selfLink": "my_selfLink"
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
      params: Params$Resource$Revisions$Update,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    update(
      params?: Params$Resource$Revisions$Update,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Revision>>;
    update(
      params: Params$Resource$Revisions$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Revisions$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Revision>,
      callback: BodyResponseCallback<Schema$Revision>
    ): void;
    update(
      params: Params$Resource$Revisions$Update,
      callback: BodyResponseCallback<Schema$Revision>
    ): void;
    update(callback: BodyResponseCallback<Schema$Revision>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Revisions$Update
        | BodyResponseCallback<Schema$Revision>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Revision>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Revision>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Revision>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Revisions$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Revisions$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/drive/v2/files/{fileId}/revisions/{revisionId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'revisionId'],
        pathParams: ['fileId', 'revisionId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Revision>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Revision>(parameters);
      }
    }
  }

  export interface Params$Resource$Revisions$Delete extends StandardParameters {
    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * The ID of the revision.
     */
    revisionId?: string;
  }
  export interface Params$Resource$Revisions$Get extends StandardParameters {
    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * The ID of the revision.
     */
    revisionId?: string;
  }
  export interface Params$Resource$Revisions$List extends StandardParameters {
    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * Maximum number of revisions to return.
     */
    maxResults?: number;
    /**
     * Page token for revisions. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Revisions$Patch extends StandardParameters {
    /**
     * The ID for the file.
     */
    fileId?: string;
    /**
     * The ID for the revision.
     */
    revisionId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Revision;
  }
  export interface Params$Resource$Revisions$Update extends StandardParameters {
    /**
     * The ID for the file.
     */
    fileId?: string;
    /**
     * The ID for the revision.
     */
    revisionId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Revision;
  }

  export class Resource$Teamdrives {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deprecated: Use `drives.delete` instead.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/drive'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.teamdrives.delete({
     *     // The ID of the Team Drive
     *     teamDriveId: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
      params: Params$Resource$Teamdrives$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Teamdrives$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    delete(
      params: Params$Resource$Teamdrives$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Teamdrives$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Teamdrives$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Teamdrives$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<void>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Teamdrives$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Teamdrives$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/teamdrives/{teamDriveId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['teamDriveId'],
        pathParams: ['teamDriveId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Deprecated: Use `drives.get` instead.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.teamdrives.get({
     *     // The ID of the Team Drive
     *     teamDriveId: 'placeholder-value',
     *     // Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the Team Drive belongs.
     *     useDomainAdminAccess: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "backgroundImageFile": {},
     *   //   "backgroundImageLink": "my_backgroundImageLink",
     *   //   "capabilities": {},
     *   //   "colorRgb": "my_colorRgb",
     *   //   "createdDate": "my_createdDate",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "orgUnitId": "my_orgUnitId",
     *   //   "restrictions": {},
     *   //   "themeId": "my_themeId"
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
      params: Params$Resource$Teamdrives$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Teamdrives$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$TeamDrive>>;
    get(
      params: Params$Resource$Teamdrives$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Teamdrives$Get,
      options: MethodOptions | BodyResponseCallback<Schema$TeamDrive>,
      callback: BodyResponseCallback<Schema$TeamDrive>
    ): void;
    get(
      params: Params$Resource$Teamdrives$Get,
      callback: BodyResponseCallback<Schema$TeamDrive>
    ): void;
    get(callback: BodyResponseCallback<Schema$TeamDrive>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Teamdrives$Get
        | BodyResponseCallback<Schema$TeamDrive>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TeamDrive>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TeamDrive>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$TeamDrive>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Teamdrives$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Teamdrives$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/teamdrives/{teamDriveId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['teamDriveId'],
        pathParams: ['teamDriveId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TeamDrive>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TeamDrive>(parameters);
      }
    }

    /**
     * Deprecated: Use `drives.insert` instead.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/drive'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.teamdrives.insert({
     *     // Required. An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a Team Drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same Team Drive. If the Team Drive already exists a 409 error will be returned.
     *     requestId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "backgroundImageFile": {},
     *       //   "backgroundImageLink": "my_backgroundImageLink",
     *       //   "capabilities": {},
     *       //   "colorRgb": "my_colorRgb",
     *       //   "createdDate": "my_createdDate",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "name": "my_name",
     *       //   "orgUnitId": "my_orgUnitId",
     *       //   "restrictions": {},
     *       //   "themeId": "my_themeId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "backgroundImageFile": {},
     *   //   "backgroundImageLink": "my_backgroundImageLink",
     *   //   "capabilities": {},
     *   //   "colorRgb": "my_colorRgb",
     *   //   "createdDate": "my_createdDate",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "orgUnitId": "my_orgUnitId",
     *   //   "restrictions": {},
     *   //   "themeId": "my_themeId"
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
      params: Params$Resource$Teamdrives$Insert,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    insert(
      params?: Params$Resource$Teamdrives$Insert,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$TeamDrive>>;
    insert(
      params: Params$Resource$Teamdrives$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Teamdrives$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$TeamDrive>,
      callback: BodyResponseCallback<Schema$TeamDrive>
    ): void;
    insert(
      params: Params$Resource$Teamdrives$Insert,
      callback: BodyResponseCallback<Schema$TeamDrive>
    ): void;
    insert(callback: BodyResponseCallback<Schema$TeamDrive>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Teamdrives$Insert
        | BodyResponseCallback<Schema$TeamDrive>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TeamDrive>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TeamDrive>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$TeamDrive>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Teamdrives$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Teamdrives$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/teamdrives').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['requestId'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TeamDrive>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TeamDrive>(parameters);
      }
    }

    /**
     * Deprecated: Use `drives.list` instead.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.teamdrives.list({
     *     // Maximum number of Team Drives to return.
     *     maxResults: 'placeholder-value',
     *     // Page token for Team Drives.
     *     pageToken: 'placeholder-value',
     *     // Query string for searching Team Drives.
     *     q: 'placeholder-value',
     *     // Issue the request as a domain administrator; if set to true, then all Team Drives of the domain in which the requester is an administrator are returned.
     *     useDomainAdminAccess: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
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
      params: Params$Resource$Teamdrives$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Teamdrives$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$TeamDriveList>>;
    list(
      params: Params$Resource$Teamdrives$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Teamdrives$List,
      options: MethodOptions | BodyResponseCallback<Schema$TeamDriveList>,
      callback: BodyResponseCallback<Schema$TeamDriveList>
    ): void;
    list(
      params: Params$Resource$Teamdrives$List,
      callback: BodyResponseCallback<Schema$TeamDriveList>
    ): void;
    list(callback: BodyResponseCallback<Schema$TeamDriveList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Teamdrives$List
        | BodyResponseCallback<Schema$TeamDriveList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TeamDriveList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TeamDriveList>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$TeamDriveList>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Teamdrives$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Teamdrives$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/teamdrives').replace(
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
        createAPIRequest<Schema$TeamDriveList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TeamDriveList>(parameters);
      }
    }

    /**
     * Deprecated: Use `drives.update` instead.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/drive'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.teamdrives.update({
     *     // The ID of the Team Drive
     *     teamDriveId: 'placeholder-value',
     *     // Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the Team Drive belongs.
     *     useDomainAdminAccess: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "backgroundImageFile": {},
     *       //   "backgroundImageLink": "my_backgroundImageLink",
     *       //   "capabilities": {},
     *       //   "colorRgb": "my_colorRgb",
     *       //   "createdDate": "my_createdDate",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "name": "my_name",
     *       //   "orgUnitId": "my_orgUnitId",
     *       //   "restrictions": {},
     *       //   "themeId": "my_themeId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "backgroundImageFile": {},
     *   //   "backgroundImageLink": "my_backgroundImageLink",
     *   //   "capabilities": {},
     *   //   "colorRgb": "my_colorRgb",
     *   //   "createdDate": "my_createdDate",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "orgUnitId": "my_orgUnitId",
     *   //   "restrictions": {},
     *   //   "themeId": "my_themeId"
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
      params: Params$Resource$Teamdrives$Update,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    update(
      params?: Params$Resource$Teamdrives$Update,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$TeamDrive>>;
    update(
      params: Params$Resource$Teamdrives$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Teamdrives$Update,
      options: MethodOptions | BodyResponseCallback<Schema$TeamDrive>,
      callback: BodyResponseCallback<Schema$TeamDrive>
    ): void;
    update(
      params: Params$Resource$Teamdrives$Update,
      callback: BodyResponseCallback<Schema$TeamDrive>
    ): void;
    update(callback: BodyResponseCallback<Schema$TeamDrive>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Teamdrives$Update
        | BodyResponseCallback<Schema$TeamDrive>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TeamDrive>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TeamDrive>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$TeamDrive>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Teamdrives$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Teamdrives$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v2/teamdrives/{teamDriveId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['teamDriveId'],
        pathParams: ['teamDriveId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TeamDrive>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TeamDrive>(parameters);
      }
    }
  }

  export interface Params$Resource$Teamdrives$Delete
    extends StandardParameters {
    /**
     * The ID of the Team Drive
     */
    teamDriveId?: string;
  }
  export interface Params$Resource$Teamdrives$Get extends StandardParameters {
    /**
     * The ID of the Team Drive
     */
    teamDriveId?: string;
    /**
     * Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the Team Drive belongs.
     */
    useDomainAdminAccess?: boolean;
  }
  export interface Params$Resource$Teamdrives$Insert
    extends StandardParameters {
    /**
     * Required. An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a Team Drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same Team Drive. If the Team Drive already exists a 409 error will be returned.
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TeamDrive;
  }
  export interface Params$Resource$Teamdrives$List extends StandardParameters {
    /**
     * Maximum number of Team Drives to return.
     */
    maxResults?: number;
    /**
     * Page token for Team Drives.
     */
    pageToken?: string;
    /**
     * Query string for searching Team Drives.
     */
    q?: string;
    /**
     * Issue the request as a domain administrator; if set to true, then all Team Drives of the domain in which the requester is an administrator are returned.
     */
    useDomainAdminAccess?: boolean;
  }
  export interface Params$Resource$Teamdrives$Update
    extends StandardParameters {
    /**
     * The ID of the Team Drive
     */
    teamDriveId?: string;
    /**
     * Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the Team Drive belongs.
     */
    useDomainAdminAccess?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TeamDrive;
  }
}
